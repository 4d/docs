---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

The `OpenAIParameters` class is designed to handle execution and request parameters for interacting with the OpenAI API.

## Propriedades

### Properties of Asynchronous Programming

| Propriedade                | Tipo       | Descrição                                                                                                                                                          |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `formula` ou `onTerminate` | Function   | A function to be called asynchronously when finished. Ensure that the current process does not terminate.                          |
| `onResponse`               | Function   | A function to be called asynchronously when the request finishes successfully. Ensure that the current process does not terminate. |
| `onError`                  | Function   | A function to be called asynchronously when the request finishes with errors. Ensure that the current process does not terminate.  |
| `throw`                    | Parâmetros | If true, throws an error if one occurs. Only if no formula callback defined.                                                       |

Veja [documentação sobre código assíncrono](../asynchronous-call.md)

### Propriedades de rede

| Propriedade    | Tipo      | Descrição                                                                                                                                                |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeout`      | Real      | Overrides the client-level default timeout for the request, in seconds. O padrão é 0.                                    |
| `httpAgent`    | HTTPAgent | Overrides the client-level default HTTP agent for the request.                                                                           |
| `maxRetries`   | Integer   | The maximum number of retries for the request. (Only if code not asynchrone ie. no function provided) |
| `extraHeaders` | Object    | Extra headers to send with the request.                                                                                                  |

### Propriedades OpenAPI

| Propriedade | Tipo | Descrição                                                                                                   |
| ----------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| `user`      | Text | A unique identifier representing the end-user, which helps OpenAI monitor and detect abuse. |

## Classes herdadas

Several classes inherit from `OpenAIParameters` to extend its functionality for specific use cases. Below are some of the classes that extend `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
