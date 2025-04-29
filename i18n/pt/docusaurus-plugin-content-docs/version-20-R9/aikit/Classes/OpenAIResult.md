---
id: openairesult
title: OpenAIResult
---

# OpenAIResult

The `OpenAIResult` class is designed to handle the response from HTTP requests and provides functions to evaluate the success of the request, retrieve body content, and collect any errors that may have occurred during processing.

## Propriedades

| Propriedade | Tipo                                                                                 | Descrição        |
| ----------- | ------------------------------------------------------------------------------------ | ---------------- |
| `request`   | [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass) | The HTTP request |

## Computed properties

| Propriedade  | Tipo       | Descrição                                                                                                                   |
| ------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `success`    | Parâmetros | A Boolean indicating whether the HTTP request was successful.                                               |
| `errors`     | Collection | Returns a collection of errors. These could be network errors or errors returned by OpenAI. |
| `terminated` | Parâmetros | A Boolean indicating whether the HTTP request was terminated.                                               |
| `headers`    | Object     | Returns the response headers as an object.                                                                  |
| `rateLimit`  | Object     | Returns rate limit information from the response headers.                                                   |
| `utilização` | Object     | Returns usage information from the response body if any.                                                    |

### rateLimit

The `rateLimit` property returns an object containing rate limit information from the response headers.
This information includes the limits, remaining requests, and reset times for both requests and tokens.

For more details on rate limits and the specific headers used, refer to [the OpenAI Rate Limits Documentation](https://platform.openai.com/docs/guides/rate-limits#rate-limits-in-headers).

The structure of the `rateLimit` object is as follows:

| Campo               | Tipo    | Descrição                                        |
| ------------------- | ------- | ------------------------------------------------ |
| `limit.request`     | Integer | Number of allowed requests.      |
| `limit.tokens`      | Integer | Number of allowed tokens.        |
| `remaining.request` | Integer | Number of remaining requests.    |
| `remaining.tokens`  | Integer | Number of remaining tokens.      |
| `reset.request`     | String  | Time until request limit resets. |
| `reset.tokens`      | String  | Time until token limit resets.   |

## Funções

### `throw()`

Throws the first error in the `errors` collection. This function is useful for propagating errors up the call stack.

## Inherited Classes

Several classes inherit from `OpenAIResult` to extend its functionality for specific use cases. Below are some of the classes that extend `OpenAIResult`:

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md)
- [OpenAIImagesResult](OpenAIImagesResult.md)
- [OpenAIModelResult](OpenAIModelResult.md)
- [OpenAIModelListResult](OpenAIModelListResult.md)
- [OpenAIModerationResult](OpenAIModerationResult.md)
