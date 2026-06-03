---
id: openaichatcompletionsresult
title: OpenAIChatCompletionsResult
---

# OpenAIChatCompletionsResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ     | 型            | 説明                                                                                                                   |
| --------- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `choices` | Collection   | Open AI レスポンスから[OpenAIChoice](OpenAIChoice.md) のコレクションを返します。                                                         |
| `choice`  | OpenAIChoice | choices コレクションの中から最初の[OpenAIChoice](OpenAIChoice.md) を返します。                                                          |
| `usage`   | Object       | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### usage

The `usage` property returns an object containing token usage information for chat completions.

| フィールド                       | 型       | 説明                                                                            |
| --------------------------- | ------- | ----------------------------------------------------------------------------- |
| `prompt_tokens`             | Integer | Number of tokens in the prompt.                               |
| `completion_tokens`         | Integer | Number of tokens in the completion.                           |
| `total_tokens`              | Integer | Total tokens used (prompt + completion).   |
| `prompt_tokens_details`     | Object  | Breakdown of prompt tokens (optional).     |
| `completion_tokens_details` | Object  | Breakdown of completion tokens (optional). |

#### prompt_tokens_details

| フィールド           | 型       | 説明                                                                         |
| --------------- | ------- | -------------------------------------------------------------------------- |
| `cached_tokens` | Integer | Number of tokens served from cache.                        |
| `audio_tokens`  | Integer | Number of audio tokens (if applicable). |

#### completion_tokens_details

| フィールド                        | 型       | 説明                                                                                                              |
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

## 参照

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
