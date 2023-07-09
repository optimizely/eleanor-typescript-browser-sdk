/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Optimizely from "../../api";
import * as core from "../../core";

export const ChatRequestDto: core.serialization.ObjectSchema<
    serializers.ChatRequestDto.Raw,
    Optimizely.ChatRequestDto
> = core.serialization.object({
    model: core.serialization.string(),
    messages: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).ChatMessageDto)),
});

export declare namespace ChatRequestDto {
    interface Raw {
        model: string;
        messages: serializers.ChatMessageDto.Raw[];
    }
}