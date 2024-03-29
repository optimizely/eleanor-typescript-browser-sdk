/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Optimizely from "../../api";
import * as core from "../../core";

export const ChatCompletionsUsageDto: core.serialization.ObjectSchema<
    serializers.ChatCompletionsUsageDto.Raw,
    Optimizely.ChatCompletionsUsageDto
> = core.serialization.object({
    promptTokens: core.serialization.property("prompt_tokens", core.serialization.number()),
    completionTokens: core.serialization.property("completion_tokens", core.serialization.number()),
    totalTokens: core.serialization.property("total_tokens", core.serialization.number()),
});

export declare namespace ChatCompletionsUsageDto {
    interface Raw {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    }
}
