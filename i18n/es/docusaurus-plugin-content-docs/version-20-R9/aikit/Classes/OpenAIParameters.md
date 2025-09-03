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
| `formula` u `onTerminate` | Function | Una función que se llamará de forma asíncrona cuando termine. Asegúrese de que el proceso actual no termina.                  |
| `onResponse`              | Function | A function to be called asynchronously when the request finishes successfully. Asegúrese de que el proceso actual no termina. |
| `onError`                 | Function | A function to be called asynchronously when the request finishes with errors. Asegúrese de que el proceso actual no termina.  |
| `throw`                   | Boolean  | Si es true, lanza un error si se produce uno. Sólo si no se ha definido ninguna retrollamada de fórmula.                      |

Ver la [documentación sobre código asíncrono](../asynchronous-call.md)

### Propiedades de la red

| Propiedad      | Tipo      | Descripción                                                                                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeout`      | Real      | Overrides the client-level default timeout for the request, in seconds. Por defecto es 0.                                            |
| `httpAgent`    | HTTPAgent | Overrides the client-level default HTTP agent for the request.                                                                                       |
| `maxRetries`   | Integer   | El número máximo de reintentos para la petición. (Sólo si el código no es asíncrono, es decir, no se proporciona ninguna función) |
| `extraHeaders` | Object    | Encabezados adicionales para enviar con la petición.                                                                                                 |

### Propiedades OpenAPI

| Propiedad | Tipo | Descripción                                                                                                 |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| `user`    | Text | A unique identifier representing the end-user, which helps OpenAI monitor and detect abuse. |

## Clases heredadas

Several classes inherit from `OpenAIParameters` to extend its functionality for specific use cases. A continuación se muestran algunas de las clases que extienden `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
