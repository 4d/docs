---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

The `OpenAIParameters` class is designed to handle execution and request parameters for interacting with the OpenAI API.

## Propiedades

### Propiedades de retrollamada asíncrona

Use this callback property to receive the result regardless of success or error:

| Propiedad                                         | Tipo                        | Descripción                                                                                                                                  |
| ------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `onTerminate`<br>(o `formula`) | 4D.Function | Una función que se llamará de forma asíncrona cuando termine. Asegúrese de que el proceso actual no termina. |

Use these callback properties for more granular control over success and error handling:

| Propiedad    | Tipo                        | Descripción                                                                                                                                                       |
| ------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onResponse` | 4D.Function | A function to be called asynchronously when the request finishes **successfully**. Asegúrese de que el proceso actual no termina. |
| `onError`    | 4D.Function | A function to be called asynchronously when the request finishes **with errors**. Asegúrese de que el proceso actual no termina.  |

> The callback function will receive the same result object type (one of [OpenAIResult](./OpenAIResult.md) child classes) that would be returned by the function in synchronous code.

See [documentation about asynchronous code for examples](../asynchronous-call.md)

### Propiedades de la red

| Propiedad      | Tipo      | Descripción                                                                                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeout`      | Real      | Overrides the client-level default timeout for the request, in seconds. Por defecto es 0.                                            |
| `httpAgent`    | HTTPAgent | Anula el agente HTTP predeterminado a nivel de cliente para la petición.                                                                             |
| `maxRetries`   | Integer   | El número máximo de reintentos para la petición. (Sólo si el código no es asíncrono, es decir, no se proporciona ninguna función) |
| `extraHeaders` | Object    | Encabezados adicionales para enviar con la petición.                                                                                                 |

### Propiedades OpenAPI

| Propiedad | Tipo | Descripción                                                                                                 |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| `user`    | Text | A unique identifier representing the end-user, which helps OpenAI monitor and detect abuse. |

### Otras

| Propiedad | Tipo    | Descripción                                                                                                                              |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `throw`   | Boolean | Si es true, lanza un error si se produce uno. Sólo si no se ha definido ninguna retrollamada de fórmula. |

## Clases heredadas

Varias clases heredan de `OpenAIParameters` para ampliar su funcionalidad en casos de uso específicos. A continuación se muestran algunas de las clases que extienden `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)
