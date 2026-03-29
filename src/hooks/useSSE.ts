import { useState, useEffect } from 'react';

export type SSEReadyState = 'CONNECTING' | 'OPEN' | 'CLOSED';

export interface UseSSEOptions {
  /** Specified SSE event name to listen to. 
   * 
   * Default: 'message' */
  eventType?: string;
  /** Option to send cookies for cross-origin requests */
  withCredentials?: boolean;
}

export function useSSE<T = any>(url: string | null, options: UseSSEOptions = {}) {
  const { eventType = 'message', withCredentials = false } = options;
  const [data, setData] = useState<T | null>(null);
  const [readyState, setReadyState] = useState<SSEReadyState>('CONNECTING');
  const [error, setError] = useState<Event | null>(null);

  useEffect(() => {
    if (!url) {
      setReadyState('CLOSED');
      return;
    }

    const source = new EventSource(url, { withCredentials });

    const handleOpen = () => {
      setReadyState('OPEN');
      setError(null);
    };

    const handleError = (e: Event) => {
      setError(e);
      if (source.readyState === EventSource.CONNECTING) {
        setReadyState('CONNECTING');
      } else {
        setReadyState('CLOSED');
      }
    };

    const handleMessage = (e: MessageEvent) => {
      try {
        setData(JSON.parse(e.data));
      } catch {
        setData(e.data as unknown as T);
      }
    };

    source.addEventListener('open', handleOpen);
    source.addEventListener('error', handleError);
    source.addEventListener(eventType, handleMessage);

    return () => {
      source.removeEventListener('open', handleOpen);
      source.removeEventListener('error', handleError);
      source.removeEventListener(eventType, handleMessage);
      source.close();
      setReadyState('CLOSED');
    };
  }, [url, eventType, withCredentials]); 

  return { 
    data, 
    readyState, 
    error,
    isConnected: readyState === 'OPEN' 
  };
}