import { AIVerbSchema, AudioFormatSchema, BaseLadonOrchestrationRequestSchema, GardenArtifactSchema, MediaArtifactPayloadSchema, SupportedAccentSchema, SupportedLanguageSchema, VocalStyleSchema } from "./verb_types";
import { z } from 'zod';

export const VocalizationPayloadSchema = z.object({
    voiceId: z.string(), 
    language: SupportedLanguageSchema.optional(),
    accent: SupportedAccentSchema.optional(), 
    style: VocalStyleSchema,
    outputFormat: AudioFormatSchema,
});
export const DocumentVocalizationPayloadSchema = VocalizationPayloadSchema.extend({
    documentUrl: z.url("Must be a valid URL to a document (PDF, TXT, etc.)"),
});

export const VocalizeRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    context: z.string().min(1, "Vocalization context cannot be empty"),
    verb: z.literal(AIVerbSchema.enum.VOCALIZE),
    payload: VocalizationPayloadSchema,
});
export const VocalizeTextPodcastRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    context: z.string().min(1, "Vocalization context cannot be empty"),
    verb: z.literal(AIVerbSchema.enum.VOCALIZE_TEXT_AS_PODCAST),
    payload: VocalizationPayloadSchema,
});
export const VocalizeDocPodcastRequestSchema = BaseLadonOrchestrationRequestSchema.extend({
    verb: z.literal(AIVerbSchema.enum.VOCALIZE_DOC_AS_PODCAST),
    payload: DocumentVocalizationPayloadSchema,
});

export const AudioArtifactPayloadSchema = MediaArtifactPayloadSchema.extend({
    /** Length of generated audio in seconds. */
    durationSeconds: z.number().positive(),
});

export const VocalizeArtifactSchema = GardenArtifactSchema.extend({
    verb: z.literal(AIVerbSchema.enum.VOCALIZE),
    payload: AudioArtifactPayloadSchema,
});

export const VocalizePodcastArtifactSchema = GardenArtifactSchema.extend({
    verb: z.union([
        z.literal(AIVerbSchema.enum.VOCALIZE_TEXT_AS_PODCAST),
        z.literal(AIVerbSchema.enum.VOCALIZE_DOC_AS_PODCAST)
    ]),
    payload: AudioArtifactPayloadSchema,
});