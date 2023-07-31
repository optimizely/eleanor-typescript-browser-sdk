/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import * as Optimizely from "./api";
import * as serializers from "./serialization";
import urlJoin from "url-join";
import * as errors from "./errors";
import { Proxy } from "./api/resources/proxy/client/Client";
import { Models } from "./api/resources/models/client/Client";

export declare namespace OptimizelyClient {
    interface Options {
        environment: core.Supplier<string>;
    }
}

export class OptimizelyClient {
    constructor(protected readonly options: OptimizelyClient.Options) {}

    /**
     * @throws {@link Optimizely.UnprocessableEntityError}
     */
    public async chat(request: Optimizely.ChatRequestDto): Promise<Optimizely.TokensResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "api/tokens"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/optimizely-browser",
                "X-Fern-SDK-Version": "0.0.11",
            },
            contentType: "application/json",
            body: await serializers.ChatRequestDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.TokensResponseDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Optimizely.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.OptimizelyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OptimizelyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OptimizelyTimeoutError();
            case "unknown":
                throw new errors.OptimizelyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Optimizely.UnprocessableEntityError}
     */
    public async chatCompletion(request: Optimizely.ChatRequestDto): Promise<Optimizely.ChatCompletionsResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "api/complete"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/optimizely-browser",
                "X-Fern-SDK-Version": "0.0.11",
            },
            contentType: "application/json",
            body: await serializers.ChatRequestDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ChatCompletionsResponseDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Optimizely.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.OptimizelyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OptimizelyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OptimizelyTimeoutError();
            case "unknown":
                throw new errors.OptimizelyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _proxy: Proxy | undefined;

    public get proxy(): Proxy {
        return (this._proxy ??= new Proxy(this.options));
    }

    protected _models: Models | undefined;

    public get models(): Models {
        return (this._models ??= new Models(this.options));
    }
}
