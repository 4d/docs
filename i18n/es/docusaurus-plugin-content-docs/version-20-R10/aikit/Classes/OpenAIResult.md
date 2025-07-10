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
| `success`     | Boolean    | A Boolean indicating whether the HTTP request was successful.                                                  |
| `errors`      | Collection | Devuelve una colección de errores. These could be network errors or errors returned by OpenAI. |
| `terminated`  | Boolean    | A Boolean indicating whether the HTTP request was terminated.                                                  |
| `headers`     | Object     | Returns the response headers as an object.                                                                     |
| `rateLimit`   | Object     | Returns rate limit information from the response headers.                                                      |
| `utilización` | Object     | Devuelve la información de uso del cuerpo de la respuesta, si existe.                                          |

### rateLimit

The `rateLimit` property returns an object containing rate limit information from the response headers.
This information includes the limits, remaining requests, and reset times for both requests and tokens.

For more details on rate limits and the specific headers used, refer to [the OpenAI Rate Limits Documentation](https://platform.openai.com/docs/guides/rate-limits#rate-limits-in-headers).

The structure of the `rateLimit` object is as follows:

| Campo               | Tipo    | Descripción                                       |
| ------------------- | ------- | ------------------------------------------------- |
| `limit.request`     | Integer | Número de solicitudes permitidas. |
| `limit.tokens`      | Integer | Número de tokens permitidos.      |
| `remaining.request` | Integer | Número de peticiones restantes.   |
| `remaining.tokens`  | Integer | Número de tokens restantes.       |
| `reset.request`     | String  | Time until request limit resets.  |
| `reset.tokens`      | String  | Time until token limit resets.    |

## Funciones

### `throw()`

Throws the first error in the `errors` collection. This function is useful for propagating errors up the call stack.

## Clases heredadas

Several classes inherit from `OpenAIResult` to extend its functionality for specific use cases. Below are some of the classes that extend `OpenAIResult`:

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md)
- [OpenAIImagesResult](OpenAIImagesResult.md)
- [OpenAIModelResult](OpenAIModelResult.md)
- [OpenAIModelListResult](OpenAIModelListResult.md)
- [OpenAIModerationResult](OpenAIModerationResult.md)
- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)
