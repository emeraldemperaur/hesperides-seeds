import { z } from 'zod';
import { IdeateArtifactSchema, IdeateRequestSchema } from './ideate_request';
import { ResearchArtifactSchema, ResearchRequestSchema } from './research_request';
import { RenderImageArtifactSchema, RenderImagePayloadSchema, RenderReelArtifactSchema, RenderReelRequestSchema } from './render_request';
import { VocalizeArtifactSchema, VocalizeDocPodcastRequestSchema, VocalizePodcastArtifactSchema, VocalizeRequestSchema, VocalizeTextPodcastRequestSchema } from './vocalize_request';
import { TaggingArtifactSchema, TagImageRequestSchema, TagVideoRequestSchema } from './tag_request';
import { AIVerbSchema, GardenArtifactSchema, GardenJobStatusSchema } from './verb_types';



export type AIVerb = z.infer<typeof AIVerbSchema>;




export type GardenJobStatus = z.infer<typeof GardenJobStatusSchema>;


/**
 * HTTP Response HesperidesAI Router Lambda returns immediately for a Hesperia request.
 */
export const LadonOrchestratorResponseSchema = z.object({
  /**
   * Unique identifier assigned to Ladon orchestration job.
   * Used for asynchronous polling, Server-Sent Events (SSE), or webhook referencing.
   */
  gardenJobId: z.uuid("Must be a valid UUID"),

  /**
   * The specific AI action requested by the client.
   */
  verb: AIVerbSchema,

  /**
   * Current execution state of the job. 
   * Always returns PENDING on initial request response.
   */
  status: z.literal(GardenJobStatusSchema.enum.PENDING),

  /**
   * Estimated time projection in seconds for AI web service to complete the artifact generation.
   */
  estimatedTimeSeconds: z.number().int().positive(),
});

/**
 * LadonOrchestratorResponse type.
 */
export type LadonOrchestratorResponse = z.infer<typeof LadonOrchestratorResponseSchema>;

/**
 * Master schema representing variants of valid Hesperia API request.
 * Routes strictly predicated on the 'verb' discriminant.
 */
export const HesperiaRequestSchema = z.discriminatedUnion('verb', [
    IdeateRequestSchema,
    ResearchRequestSchema,
    RenderImagePayloadSchema,
    RenderReelRequestSchema,
    VocalizeRequestSchema,
    VocalizeTextPodcastRequestSchema,
    VocalizeDocPodcastRequestSchema,
    TagImageRequestSchema,
    TagVideoRequestSchema
]);

/**
 * Unified HesperiaRequest TypeScript type.
 */
export type HesperiaRequest = z.infer<typeof HesperiaRequestSchema>;



/**
 * Master schema representing variants of completed Hesperia gardenJob payload.
 * Represents shape of response object data pushed to Webhooks or SSE streams.
 */
export const HesperiaArtifactSchema = z.discriminatedUnion('verb', [
    IdeateArtifactSchema,
    ResearchArtifactSchema,
    RenderImageArtifactSchema,
    RenderReelArtifactSchema,
    VocalizeArtifactSchema,
    VocalizePodcastArtifactSchema, 
    TaggingArtifactSchema
]);

/**
 * Unified HesperiaArtifact TypeScript type.
 */
export type HesperiaArtifact = z.infer<typeof HesperiaArtifactSchema>;

/**
 * Hesperia payload returned during Asynchronous Polling or pushed via SSE
 * while the AI service is actively working on the request.
 */
export const HesperiaJobProgressSchema = z.object({
    /** Unique identifier assigned to Ladon orchestration job. */
    gardenJobId: z.uuid(),

    /** Extant state of Hesperia garden job. 
     * 'PENDING', 'QUEUED' and 'PROCESSING' denote active waiting states.
     */
    status: z.union([
        z.literal(GardenJobStatusSchema.enum.PENDING),
        z.literal(GardenJobStatusSchema.enum.QUEUED),
        z.literal(GardenJobStatusSchema.enum.PROCESSING)
    ]),

    /**
     * Optional progress percentage (0-100).
     * Returned by RENDER verb orchestration AI services like Imagine API or Luma Dream Machine that proffer rendering progress.
     */
    progressPercentage: z.number().min(0).max(100).optional(),

    /**
     * Human-readable status message.
     * @example "Synthesizing audio..." or "Waiting for Luma API capacity..."
     */
    message: z.string().optional(),

    /**
     * Estimated time remaining based on current progress.
     */
    estimatedTimeRemainingSeconds: z.number().int().positive().optional(),
});

/**
 * Hesperia payload returned if Ladon orchestration job fails or fatal error encountered at AI web service.
 */
export const HesperiaJobFailedSchema = z.object({
    gardenJobId: z.uuid(),
    status: z.literal(GardenJobStatusSchema.enum.FAILED),
    
    /**
     * Precise error code for error handling.
     */
    errorCode: z.string(),

    /**
     * Developer-friendly error message outlining error encountered.
     */
    errorMessage: z.string(),

    /** ISO timestamp referencing when failure occurred */
    failedAt: z.iso.datetime(),
});

/**
 * Master schema representing variant state (i.e. Progress, Completed or Failed) payload a user client receives 
 * via Polling, Webhooks, or Server-Sent Events for a specific job.
 * 
 * Discriminates based on `status` field.
 */
export const HesperiaJobStreamEventSchema = z.discriminatedUnion('status', [
    /** active waiting states - Pending/Queued/Processing */
    HesperiaJobProgressSchema,
     
    /** Successful garden artifact generation state */
    GardenArtifactSchema, 
    
    // 3. The error state
    /** Error encoutered fail state */
    HesperiaJobFailedSchema 
]);

export type HesperiaJobStreamEvent = z.infer<typeof HesperiaJobStreamEventSchema>;