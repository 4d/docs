---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

The `OpenAIParameters` class is designed to handle execution and request parameters for interacting with the OpenAI API.

## Propiedades

### Propiedades de la programación asíncrona

| Propiedad                 | Tipo     | Descripción                                                                                                                                                   |
| ------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formula` u `onTerminate` | Function | A function to be called asynchronously when finished. Asegúrese de que el proceso actual no termina.                          |
| `onResponse`              | Function | A function to be called asynchronously when the request finishes successfully. Asegúrese de que el proceso actual no termina. |
| `onError`                 | Function | A function to be called asynchronously when the request finishes with errors. Asegúrese de que el proceso actual no termina.  |
| `throw`                   | Boolean  | Si es true, lanza un error si se produce uno. Only if no formula callback defined.                                            |

Ver la [documentación sobre código asíncrono](../asynchronous-call.md)

### Propiedades de la red

| Propiedad      | Tipo      | Descripción                                                                                                                                                        |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeout`      | Real      | Overrides the client-level default timeout for the request, in seconds. Por defecto es 0.                                          |
| `httpAgent`    | HTTPAgent | Overrides the client-level default HTTP agent for the request.                                                                                     |
| `maxRetries`   | Integer   | The maximum number of retries for the request. (Sólo si el código no es asíncrono, es decir, no se proporciona ninguna función) |
| `extraHeaders` | Object    | Encabezados adicionales para enviar con la petición.                                                                                               |

### Propiedades OpenAPI

| Propiedad | Tipo | Descripción                                                                                                 |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| `user`    | Text | A unique identifier representing the end-user, which helps OpenAI monitor and detect abuse. |

## Clases heredadas

Several classes inherit from `OpenAIParameters` to extend its functionality for specific use cases. Below are some of the classes that extend `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
