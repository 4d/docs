---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

La clase `OpenAIParameters` está diseñada para gestionar los parámetros de ejecución y solicitud para interactuar con la API de OpenAI.


## Propiedades

### Propiedades de retrollamada asíncrona

Utilice esta propiedad de retrollamada para recibir el resultado, independientemente de si se ha producido un error o se ha completado con éxito:

| Propiedad                                          | Tipo                        | Descripción                                                                                                                                  |
| -------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `onTerminate`<br>(or `formula`) | 4D.Function | Una función que se llamará de forma asíncrona cuando termine. Asegúrese de que el proceso actual no termina. |

Utilice estas propiedades de retrollamada para obtener un control más detallado sobre el manejo de errores y éxitos:

| Propiedad    | Tipo                        | Descripción                                                                                                                                                      |
| ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onResponse` | 4D.Function | Una función que se invocará de forma asincrónica cuando finalice la petición **exitosamente**. Asegúrese de que el proceso actual no termine. |
| `onError`    | 4D.Function | Una función que se invocará de forma asíncrona cuando finalice la petición.
**with errors**. Asegúrese de que el proceso actual no termina. |

> La función de retrollamada recibirá el mismo tipo de objeto de resultado (una de las clases hijas de [OpenAIResult](Classes/OpenAIResult.md) que devolvería la función en código sincrónico.

Ver la [documentación sobre código asincrono para ejemplos](../asynchronous-call.md)

### Network Properties

| Propiedad      | Tipo      | Descripción                                                                                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeout`      | Real      | Anula el tiempo de espera predeterminado a nivel de cliente para la petición, en segundos. Por defecto es 0.                                            |
| `httpAgent`    | HTTPAgent | Anula el agente HTTP predeterminado a nivel de cliente para la petición.                                                                                       |
| `maxRetries`   | Integer   | El número máximo de reintentos para la petición. (Sólo si el código no es asíncrono, es decir, no se proporciona ninguna función) |
| `extraHeaders` | Object    | Encabezados adicionales para enviar con la petición.                                                                                                 |

### OpenAPI Properties

| Propiedad | Tipo | Descripción                                                                                                 |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| `user`    | Text | Un identificador único que representa al usuario final, lo que ayuda a OpenAI a supervisar y detectar abusos. |

### Others

| Propiedad | Tipo    | Descripción                                                                                                                              |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `throw`   | Boolean | Si es true, lanza un error si se produce uno. Sólo si no se ha definido ninguna retrollamada de fórmula. |

## Clases heredadas

Varias clases heredan de `OpenAIParameters` para ampliar su funcionalidad para casos de uso específicos. A continuación se muestran algunas de las clases que extienden `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)
