---
id: openairesult
title: OpenAIResult
---

# OpenAIResult

La clase `OpenAIResult` está diseñada para gestionar la respuesta de las peticiones HTTP y ofrece funciones para evaluar el éxito de la petición, recuperar el contenido del cuerpo y recoger los errores que se hayan podido producir durante el procesamiento.

## Propiedades

| Propiedad | Tipo                                                                                 | Descripción      |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| `request` | [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass) | La petición HTTP |

## Propiedades calculadas

| Propiedad     | Tipo       | Descripción                                                                                                                         |
| ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `success`     | Boolean    | Booleano que indica si la petición HTTP se ha realizado correctamente.                                              |
| `errors`      | Collection | Devuelve una colección de errores. Estos podrían ser errores de red o errores devueltos por OpenAI. |
| `terminated`  | Boolean    | Un booleano que indica si la petición HTTP fue terminada.                                                           |
| `headers`     | Object     | Devuelve los encabezados de respuesta como un objeto.                                                               |
| `rateLimit`   | Object     | Devuelve la información relativa al límite de tasa de los encabezados de la respuesta.                              |
| `utilización` | Object     | Devuelve información de uso (recuento de tokens) del cuerpo de la respuesta, si existe.          |

### utilización

La propiedad `usage` devuelve un objeto que contiene información sobre el uso del token a partir de la respuesta de la API. La estructura varía dependiendo del punto final de la API utilizada.

> **Nota:** diferentes servicios compatibles con OpenAI pueden devolver diferentes campos en el objeto de uso. La estructura aquí documentada se basa en la API de OpenAI. No todos los campos pueden estar presentes en las respuestas de otros proveedores.

Consulte la documentación específica de la clase de resultado para conocer las estructuras de uso específicas de los extremos:

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage) - Uso de terminación del chat
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md#usage) - Uso de chat en streaming
- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md#usage) - Uso de integraciones
- [OpenAIImagesResult](OpenAIImagesResult.md#usage) - Uso de la generación de imágenes

### rateLimit

La propiedad `rateLimit` devuelve un objeto que contiene información sobre el límite de velocidad de los encabezados de respuesta.
Esta información incluye los límites, las peticiones restantes y los tiempos de reinicialización tanto para peticiones como para tokens.

Para obtener más información sobre los límites de tarifas y los encabezados específicos utilizados, consulte [la documentación de límites de tarifa OpenAI](https://developers.openai.com/api/docs/guides/rate-limits#rate-limits-in-headers).

La estructura del objeto `rateLimit` es la siguiente:

| Campo               | Tipo    | Descripción                                                              |
| ------------------- | ------- | ------------------------------------------------------------------------ |
| `limit.request`     | Integer | Número de solicitudes permitidas.                        |
| `limit.tokens`      | Integer | Número de tokens permitidos.                             |
| `remaining.request` | Integer | Número de peticiones restantes.                          |
| `remaining.tokens`  | Integer | Número de tokens restantes.                              |
| `reset.request`     | String  | Tiempo hasta que se restablece el límite de solicitudes. |
| `reset.tokens`      | String  | Tiempo hasta que se restablece el límite de fichas.      |

## Funciones

### `throw()`

Lanza el primer error de la colección `errors`. Esta función es útil para propagar los errores por la pila de llamadas.

## Clases heredadas

Varias clases heredan de `OpenAIResult` para ampliar su funcionalidad en casos de uso específicos. A continuación se muestran algunas de las clases que extienden `OpenAIResult`:

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md)
- [OpenAIImagesResult](OpenAIImagesResult.md)
- [OpenAIModelResult](OpenAIModelResult.md)
- [OpenAIModelListResult](OpenAIModelListResult.md)
- [OpenAIModerationResult](OpenAIModerationResult.md)
- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)
