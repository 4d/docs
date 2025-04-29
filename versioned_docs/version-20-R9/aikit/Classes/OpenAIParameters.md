---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

The `OpenAIParameters` class is designed to handle execution and request parameters for interacting with the OpenAI API.

## Properties

### Properties of Asynchronous Programming

| Property          | Type    | Description  |
|-------------------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| `formula` or `onTerminate` | Function| A function to be called asynchronously when finished. Ensure that the current process does not terminate.              |
| `onResponse`      | Function| A function to be called asynchronously when the request finishes successfully. Ensure that the current process does not terminate. |
| `onError`         | Function| A function to be called asynchronously when the request finishes with errors. Ensure that the current process does not terminate. |
| `throw`           | Boolean | If true, throws an error if one occurs. Only if no formula callback defined. |

See [documentation about asynchronous code](../asynchronous-call.md)

### Network properties

| Property          | Type    | Description                |
|-------------------|---------|--------------------------------------------------------------------------------------|
| `timeout`         | Real    | Overrides the client-level default timeout for the request, in seconds. Default is 0.  |
| `httpAgent`       | HTTPAgent| Overrides the client-level default HTTP agent for the request.                        |
| `maxRetries`      | Integer | The maximum number of retries for the request. (Only if code not asynchrone ie. no function provided)         |
| `extraHeaders`    | Object  | Extra headers to send with the request.                                                |   

### OpenAPI properties

| Property          | Type    | Description     |
|-------------------|---------|----------------------------------------------------------------------------------------------
| `user`            | Text    | A unique identifier representing the end-user, which helps OpenAI monitor and detect abuse.  |

## Inherited Classes

Several classes inherit from `OpenAIParameters` to extend its functionality for specific use cases. Below are some of the classes that extend `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
