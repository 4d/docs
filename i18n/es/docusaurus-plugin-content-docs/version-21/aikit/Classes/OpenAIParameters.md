---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

La clase `OpenAIParameters` está diseñada para manejar los parámetros de ejecución y de petición para interactuar con la API OpenAI.

## Propiedades

### Propiedades de retrollamada asíncrona

Utilice esta propiedad de retrollamada para recibir el resultado independientemente del éxito o error:

| Propiedad                                         | Tipo                        | Descripción                                                                                                                                  |
| ------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `onTerminate`<br>(o `formula`) | 4D.Function | Una función que se llamará de forma asíncrona cuando termine. Asegúrese de que el proceso actual no termina. |

Utilice estas propiedades de retrollamada para un control más granular de la gestión de éxito y de errores:

| Propiedad    | Tipo                        | Descripción                                                                                                                                                               |
| ------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onResponse` | 4D.Function | Una función a llamar de forma asíncrona cuando la petición finalice **con éxito**. Asegúrese de que el proceso actual no termina.         |
| `onError`    | 4D.Function | Una función que se llamará de forma asíncrona cuando la petición finalice **con errores**. Asegúrese de que el proceso actual no termina. |

> La función de retrollamada recibirá el mismo tipo de objeto de resultado (una de las clases hijas de [OpenAIResult](./OpenAIResult.md)) que devolvería la función en un código síncrono.

Ver la [documentación sobre código asíncrono para ejemplos](../asynchronous-call.md)

### Propiedades de la red

| Propiedad      | Tipo      | Descripción                                                                                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeout`      | Real      | Reemplaza el tiempo de espera predeterminado del nivel de cliente para la petición, en segundos. Por defecto es 0.                   |
| `httpAgent`    | HTTPAgent | Anula el agente HTTP predeterminado a nivel de cliente para la petición.                                                                             |
| `maxRetries`   | Integer   | El número máximo de reintentos para la petición. (Sólo si el código no es asíncrono, es decir, no se proporciona ninguna función) |
| `extraHeaders` | Object    | Encabezados adicionales para enviar con la petición.                                                                                                 |

### Propiedades OpenAPI

| Propiedad | Tipo | Descripción                                                                                                                 |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| `user`    | Text | Un identificador único que representa al usuario final y que ayuda a OpenAI a supervisar y detectar abusos. |

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
