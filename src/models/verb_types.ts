import { z } from 'zod';

/**
 * Hesperides supported AI orchestration actions.
 */
export const AIVerbSchema = z.enum([
    'IDEATE',
    'RESEARCH',
    'RENDER_IMAGE',
    'RENDER_REEL',
    'VOCALIZE',
    'VOCALIZE_TEXT_AS_PODCAST',
    'VOCALIZE_DOC_AS_PODCAST',
    'TAG_IMAGE',
    'TAG_VIDEO'
]);

/**
 * Base payload schema containing prerequiste fields required for Hesperia request.
 */
export const BaseLadonOrchestrationRequestSchema = z.object({

    /** Callback endpoint where Hesperidesᴬᴵ will send an HTTP POST request 
     * once a gardenJob status changes to COMPLETED or FAILED. */

    webhookUrl: z.url("Invalid webhook URL").optional(),

    /** Overarching prompt or contextual guideline to utilize for AI web service's execution. */

    context: z.string(),

    /** Array of file URIs, S3 object keys, or base64 encoded strings. */

    contextFiles: z.array(z.string()).optional(),
});

/**
 * Execution states for Ladon orchestration job.
 */
export const GardenJobStatusSchema = z.enum(['PENDING', 'QUEUED', 'PROCESSING', 'COMPLETED', 'FAILED']);

/**
 * Base artifact metadata for completed Hesperia gardenJob.
 */
export const GardenArtifactSchema = z.object({
    gardenJobId: z.uuid(),
    status: z.literal(GardenJobStatusSchema.enum.COMPLETED),
    /** ISO timestamp referencing job completion time */
    completedAt: z.iso.datetime(), 
});

export const MediaArtifactPayloadSchema = z.object({
    /** Presigned AWS S3 URL containing the final Hesperia gardenJob asset. */
    artifactUrl: z.url(),
    /** MIME type of generated file (e.g., 'video/mp4', 'image/png'). */
    contentType: z.string(),
    /** Byte size of generated file. */
    sizeBytes: z.number().int().positive().optional(),
});

export const SupportedLanguageSchema = z.enum(['english', 'french', 'german', 'spanish', 'portuguese']);
export const SupportedAccentSchema = z.enum(['nigerian', 'american', 'british', 'australian', 'indian', 'southafrican']);
export const VocalStyleSchema = z.enum(['conversational', 'narration', 'news', 'storytelling']);
export const AudioFormatSchema = z.enum(['mp3', 'wav']);
export const VideoAspectRatioSchema = z.enum(['16:9', '9:16', '1:1', '4:3', '3:4', '21:9', '9:21']);