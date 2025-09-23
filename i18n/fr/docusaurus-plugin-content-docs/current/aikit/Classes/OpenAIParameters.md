---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

The `OpenAIParameters` class is designed to handle execution and request parameters for interacting with the OpenAI API.

## Propriétés

### Asynchronous Callback Properties

Use this callback property to receive the result regardless of success or error:

| Propriété                                          | Type                        | Description                                                                                                                               |
| -------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `onTerminate`<br>(or `formula`) | 4D.Function | A function to be called asynchronously when finished. Ensure that the current process does not terminate. |

Use these callback properties for more granular control over success and error handling:

| Propriété    | Type                        | Description                                                                                                                                                            |
| ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onResponse` | 4D.Function | A function to be called asynchronously when the request finishes **successfully**. Ensure that the current process does not terminate. |
| `onError`    | 4D.Function | A function to be called asynchronously when the request finishes **with errors**. Ensure that the current process does not terminate.  |

> The callback function will receive the same result object type (one of [OpenAIResult](./OpenAIResult.md) child classes) that would be returned by the function in synchronous code.

See [documentation about asynchronous code for examples](../asynchronous-call.md)

### Network Properties

| Propriété      | Type      | Description                                                                                                                                              |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeout`      | Real      | Overrides the client-level default timeout for the request, in seconds. Default is 0.                                    |
| `httpAgent`    | HTTPAgent | Overrides the client-level default HTTP agent for the request.                                                                           |
| `maxRetries`   | Integer   | The maximum number of retries for the request. (Only if code not asynchrone ie. no function provided) |
| `extraHeaders` | Object    | Extra headers to send with the request.                                                                                                  |

### OpenAPI Properties

| Propriété | Type | Description                                                                                                 |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| `user`    | Text | A unique identifier representing the end-user, which helps OpenAI monitor and detect abuse. |

### Others

| Propriété | Type    | Description                                                                                                  |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `throw`   | Boolean | If true, throws an error if one occurs. Only if no formula callback defined. |

## Classes héritées

Several classes inherit from `OpenAIParameters` to extend its functionality for specific use cases. Below are some of the classes that extend `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)
