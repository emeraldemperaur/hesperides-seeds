import { renderHook, act } from '@testing-library/react';
import { useSSE } from 'hooks/useSSE';

class MockEventSource {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSED = 2;
  url: string;
  readyState: number;
  listeners: Record<string, Function[]> = {};

  constructor(url: string) {
    this.url = url;
    this.readyState = MockEventSource.CONNECTING;
  }

  addEventListener(event: string, callback: Function) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  removeEventListener(event: string, callback: Function) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter((cb) => cb !== callback);
  }

  close() {
    this.readyState = MockEventSource.CLOSED;
  }

  simulateOpen() {
    this.readyState = MockEventSource.OPEN;
    this.listeners['open']?.forEach((cb) => cb(new Event('open')));
  }

  simulateMessage(data: any, eventType = 'message') {
    const event = { data: typeof data === 'string' ? data : JSON.stringify(data) };
    this.listeners[eventType]?.forEach((cb) => cb(event));
  }

  simulateError() {
    this.readyState = MockEventSource.CLOSED;
    this.listeners['error']?.forEach((cb) => cb(new Event('error')));
  }
}

global.EventSource = MockEventSource as any;

describe('useSSE Hook', () => {
  let mockEventSourceInstance: MockEventSource;

  beforeEach(() => {
    jest.spyOn(global, 'EventSource').mockImplementation((url) => {
      mockEventSourceInstance = new MockEventSource(url as string);
      return mockEventSourceInstance as any;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('useSSE :: Connection CLOSED if URL is null', () => {
    const { result } = renderHook(() => useSSE(null));

    expect(result.current.readyState).toBe('CLOSED');
    expect(result.current.isConnected).toBe(false);
    expect(global.EventSource).not.toHaveBeenCalled();
  });

  it('useSSE :: Initialize a CONNECTING state if URL is specified', () => {
    const { result } = renderHook(() => useSSE('https://api.example.com/stream'));

    expect(result.current.readyState).toBe('CONNECTING');
    expect(result.current.isConnected).toBe(false);
    expect(result.current.data).toBeNull();
  });

  it('useSSE :: Updates to OPEN state when server connection successful', () => {
    const { result } = renderHook(() => useSSE('https://api.example.com/stream'));
    act(() => {
      mockEventSourceInstance.simulateOpen();
    });

    expect(result.current.readyState).toBe('OPEN');
    expect(result.current.isConnected).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('useSSE :: Parsed incoming JSON message data payload', () => {
    const { result } = renderHook(() => useSSE('https://api.example.com/stream'));
    const testPayload = { ticker: 'AAPL', price: 150.5 };
    act(() => {
      mockEventSourceInstance.simulateMessage(testPayload);
    });

    expect(result.current.data).toEqual(testPayload);
  });

  it('useSSE :: Implements custom event types', () => {
    const { result } = renderHook(() =>
      useSSE('https://api.example.com/stream', { eventType: 'price_update' })
    );
    act(() => {
      mockEventSourceInstance.simulateMessage({ price: 200 }, 'price_update');
    });

    expect(result.current.data).toEqual({ price: 200 });
  });

  it('useSSE :: Handled errors and updated readyState to CLOSED', () => {
    const { result } = renderHook(() => useSSE('https://api.example.com/stream'));
    act(() => {
      mockEventSourceInstance.simulateError();
    });

    expect(result.current.error).not.toBeNull();
    expect(result.current.readyState).toBe('CLOSED');
    expect(result.current.isConnected).toBe(false);
  });

  it('useSSE :: Closed connection and cleaned resources when unmounted', () => {
    const { unmount } = renderHook(() => useSSE('https://api.example.com/stream'));
    const closeSpy = jest.spyOn(mockEventSourceInstance, 'close');
    unmount();
    expect(closeSpy).toHaveBeenCalledTimes(1);
    expect(mockEventSourceInstance.readyState).toBe(MockEventSource.CLOSED);
  });
});