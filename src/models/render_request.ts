import { z } from 'zod';

import { 
    AIVerbSchema, BaseLadonOrchestrationRequestSchema, 
    GardenArtifactSchema, MediaArtifactPayloadSchema, 
    VideoAspectRatioSchema} from './verb_types';

export const RenderImagePayloadSchema = z.object({
    style: z.string().optional().describe("e.g., 'photorealistic', 'anime', 'cinematic'"),
});
export const RenderImageRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    context: z.string().min(1, "Image prompt context is required"),
    verb: z.literal(AIVerbSchema.enum.RENDER_IMAGE),
    payload: RenderImagePayloadSchema,
});

export const LumaRenderPayloadSchema = z.object({
    aspectRatio: VideoAspectRatioSchema.optional(),
    loop: z.boolean().optional(),
    startFrameImageUrl: z.url().optional(),
    endFrameImageUrl: z.url().optional(),
});
export const RenderReelRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    context: z.string().min(1, "Reel prompt is required"),
    verb: z.literal(AIVerbSchema.enum.RENDER_REEL),
    payload: LumaRenderPayloadSchema,
});

export const RenderImageArtifactSchema = GardenArtifactSchema.extend({
    verb: z.literal(AIVerbSchema.enum.RENDER_IMAGE),
    payload: MediaArtifactPayloadSchema,
});

export const RenderReelArtifactSchema = GardenArtifactSchema.extend({
    verb: z.literal(AIVerbSchema.enum.RENDER_REEL),
    payload: MediaArtifactPayloadSchema,
});