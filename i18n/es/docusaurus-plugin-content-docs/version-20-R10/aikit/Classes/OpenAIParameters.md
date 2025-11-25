---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

La clase `OpenAIParameters` está diseñada para manejar los parámetros de ejecución y de petición para interactuar con la API OpenAI.

## Propiedades

### Propiedades de la programación asíncrona

| Propiedad                 | Tipo     | Descripción                                                                                                                                                           |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formula` u `onTerminate` | Function | Una función que se llamará de forma asíncrona cuando termine. Asegúrese de que el proceso actual no termina.                          |
| `onResponse`              | Function | Una función a llamar de forma asíncrona cuando la petición finalice con éxito. Asegúrese de que el proceso actual no termina.         |
| `onError`                 | Function | Una función que se llamará de forma asíncrona cuando la petición finalice con errores. Asegúrese de que el proceso actual no termina. |
| `throw`                   | Boolean  | Si es true, lanza un error si se produce uno. Sólo si no se ha definido ninguna retrollamada de fórmula.                              |

Ver la [documentación sobre código asíncrono](../asynchronous-call.md)

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

## Clases heredadas

Varias clases heredan de `OpenAIParameters` para ampliar su funcionalidad en casos de uso específicos. A continuación se muestran algunas de las clases que extienden `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)
