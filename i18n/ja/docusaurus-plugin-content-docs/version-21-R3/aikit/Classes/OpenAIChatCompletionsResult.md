---
id: openaichatcompletionsresult
title: OpenAIChatCompletionsResult
---

# OpenAIChatCompletionsResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ     | 型            | 説明                                                                              |
| --------- | ------------ | ------------------------------------------------------------------------------- |
| `choices` | Collection   | Open AI レスポンスから[OpenAIChoice](OpenAIChoice.md) のコレクションを返します。                    |
| `choice`  | OpenAIChoice | choices コレクションの中から最初の[OpenAIChoice](OpenAIChoice.md) を返します。                     |
| `usage`   | Object       | トークン使用状況の情報をかえします([OpenAIResult](OpenAIResult.md) から継承されます)。 |

### usage

`usage` プロパティはチャット補完のトークン使用状況情報を格納したオブジェクトを返します。

| フィールド                       | 型       | 説明                                           |
| --------------------------- | ------- | -------------------------------------------- |
| `prompt_tokens`             | Integer | プロンプト内のトークンの数。                               |
| `completion_tokens`         | Integer | 補完内でのトークンの数。                                 |
| `total_tokens`              | Integer | 使用されたトークンの総数(プロンプト + 補完)。 |
| `prompt_tokens_details`     | Object  | プロンプトトークンの詳細な内訳(オプション)。   |
| `completion_tokens_details` | Object  | 補完トークンの詳細な内訳(オプション)。      |

#### prompt_tokens_details

| フィールド           | 型       | 説明                                      |
| --------------- | ------- | --------------------------------------- |
| `cached_tokens` | Integer | キャッシュから提供されたトークンの数。                     |
| `audio_tokens`  | Integer | オーディオトークンの数(該当する場合)。 |

#### completion_tokens_details

| フィールド                        | 型       | 説明                                                                |
| ---------------------------- | ------- | ----------------------------------------------------------------- |
| `reasoning_tokens`           | Integer | リーズニング(例: o1 モデルなど)に使用されたトークン。 |
| `audio_tokens`               | Integer | オーディオトークンの数(該当する場合)。                           |
| `accepted_prediction_tokens` | Integer | 受け入れられた予測からのトークン。                                                 |
| `rejected_prediction_tokens` | Integer | 却下された予測からのトークン。                                                   |

**レスポンスの例:**

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

> **注意:** `*_tokens_details` オブジェクトは全てのレスポンスにいるとは限らず、また全てのプロバイダーから返されるとも限りません。

## 参照

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
