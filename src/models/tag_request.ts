import { z } from 'zod';
import { AIVerbSchema, BaseLadonOrchestrationRequestSchema, GardenArtifactSchema } from './verb_types';

export const ImaggaTaggingPayloadSchema = z.object({
    mediaUrl: z.url("Must be a valid public media URL"),
    limit: z.number().int().positive().optional(),
    threshold: z.number().min(0).max(100).optional(),
});
export const TagImageRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    verb: z.literal(AIVerbSchema.enum.TAG_IMAGE),
    payload: ImaggaTaggingPayloadSchema,
});
export const TagVideoRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    verb: z.literal(AIVerbSchema.enum.TAG_VIDEO),
    payload: ImaggaTaggingPayloadSchema,
});

export const TaggingArtifactSchema = GardenArtifactSchema.extend({
    verb: z.union([
        z.literal(AIVerbSchema.enum.TAG_IMAGE),
        z.literal(AIVerbSchema.enum.TAG_VIDEO)
    ]),
    payload: z.object({
        /** Array of identified concepts and confidence scores. */
        tags: z.array(
            z.object({
                tag: z.string(),
                confidence: z.number().min(0).max(100),
            })
        ),
    }),
});