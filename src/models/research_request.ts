import { z } from 'zod';
import { AIVerbSchema, BaseLadonOrchestrationRequestSchema, GardenArtifactSchema } from './verb_types';

export const ResearchPayloadSchema = z.object({
    requireCitations: z.boolean().optional().default(true),
});
export const ResearchRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    context: z.string().min(1, "Research query context is required"),
    verb: z.literal(AIVerbSchema.enum.RESEARCH),
    payload: ResearchPayloadSchema,
});

export const ResearchArtifactSchema = GardenArtifactSchema.extend({
    verb: z.literal(AIVerbSchema.enum.RESEARCH),
    payload: z.object({
        text: z.string(),
        /** Array of URLs cited by Perplexity while undertaking research. */
        citations: z.array(z.url()),
    }),
});