---
id: openaichatcompletionsresult
title: OpenAIChatCompletionsResult
---

# OpenAIChatCompletionsResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Propriedades calculadas

| Propriedade  | Tipo         | Descrição                                                                                                            |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `choices`    | Collection   | Retorna uma coleção de [OpenAIChoice](OpenAIChoice.md) da resposta do OpenAI.                        |
| `choice`     | OpenAIChoice | Retorna o primeiro [OpenAIChoice](OpenAIChoice.md) das opções da coleção.                            |
| `utilização` | Object       | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### utilização

The `usage` property returns an object containing token usage information for chat completions.

| Campo                       | Tipo    | Descrição                                                                     |
| --------------------------- | ------- | ----------------------------------------------------------------------------- |
| `prompt_tokens`             | Integer | Number of tokens in the prompt.                               |
| `completion_tokens`         | Integer | Number of tokens in the completion.                           |
| `total_tokens`              | Integer | Total tokens used (prompt + completion).   |
| `prompt_tokens_details`     | Object  | Breakdown of prompt tokens (optional).     |
| `completion_tokens_details` | Object  | Breakdown of completion tokens (optional). |

#### prompt_tokens_details

| Campo           | Tipo    | Descrição                                                                  |
| --------------- | ------- | -------------------------------------------------------------------------- |
| `cached_tokens` | Integer | Number of tokens served from cache.                        |
| `audio_tokens`  | Integer | Number of audio tokens (if applicable). |

#### completion_tokens_details

| Campo                        | Tipo    | Descrição                                                                                                       |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `reasoning_tokens`           | Integer | Tokens used for reasoning (e.g., o1 models). |
| `audio_tokens`               | Integer | Number of audio tokens (if applicable).                                      |
| `accepted_prediction_tokens` | Integer | Tokens from accepted predictions.                                                               |
| `rejected_prediction_tokens` | Integer | Tokens from rejected predictions.                                                               |

**Example response:**

```json
{
  "prompt_tokens": 19,
  "completion_tokens": 10,
  "total_tokens": 29,
  "prompt_tokens_details": {
    "cached_tokens": 0,
    "audio_tokens": 0
  },
  "completion_tokens_details": {
    "reasoning_tokens": 0,
    "audio_tokens": 0,
    "accepted_prediction_tokens": 0,
    "rejected_prediction_tokens": 0
  }
}
```

> **Note:** The `*_tokens_details` objects may not be present in all responses or from all providers.

## Veja também

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
