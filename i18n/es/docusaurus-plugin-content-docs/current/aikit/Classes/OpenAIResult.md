---
id: openairesult
title: OpenAIResult
---

# OpenAIResult

The `OpenAIResult` class is designed to handle the response from HTTP requests and provides functions to evaluate the success of the request, retrieve body content, and collect any errors that may have occurred during processing.

## Propiedades

| Propiedad | Tipo                                                                                 | Descripción      |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| `request` | [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass) | La petición HTTP |

## Propiedades calculadas

| Propiedad     | Tipo       | Descripción                                                                                                                    |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `success`     | Boolean    | Booleano que indica si la petición HTTP se ha realizado correctamente.                                         |
| `errors`      | Collection | Devuelve una colección de errores. These could be network errors or errors returned by OpenAI. |
| `terminated`  | Boolean    | Un booleano que indica si la petición HTTP fue terminada.                                                      |
| `headers`     | Object     | Devuelve los encabezados de respuesta como un objeto.                                                          |
| `rateLimit`   | Object     | Returns rate limit information from the response headers.                                                      |
| `utilización` | Object     | Devuelve la información de uso del cuerpo de la respuesta, si existe.                                          |

### rateLimit

The `rateLimit` property returns an object containing rate limit information from the response headers.
This information includes the limits, remaining requests, and reset times for both requests and tokens.

For more details on rate limits and the specific headers used, refer to [the OpenAI Rate Limits Documentation](https://platform.openai.com/docs/guides/rate-limits#rate-limits-in-headers).

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

Lanza el primer error de la colección `errors`. This function is useful for propagating errors up the call stack.

## Clases heredadas

Varias clases heredan de `OpenAIResult` para ampliar su funcionalidad en casos de uso específicos. A continuación se muestran algunas de las clases que extienden `OpenAIResult`:

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md)
- [OpenAIImagesResult](OpenAIImagesResult.md)
- [OpenAIModelResult](OpenAIModelResult.md)
- [OpenAIModelListResult](OpenAIModelListResult.md)
- [OpenAIModerationResult](OpenAIModerationResult.md)
- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)
