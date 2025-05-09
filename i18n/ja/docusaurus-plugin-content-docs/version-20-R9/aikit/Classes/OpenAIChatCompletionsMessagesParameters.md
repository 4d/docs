---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ   | 型       | デフォルト値 | 説明                                                                                         |
| ------- | ------- | ------ | ------------------------------------------------------------------------------------------ |
| `after` | Text    | ""     | 前のページ分けリクエストからの最後のメッセージの識別子。                                                               |
| `limit` | Integer | 0      | 取得するメッセージの数。                                                                               |
| `order` | Text    | "asc"  | タイムスタンプによるメッセージの並べ替え順。 昇順には `asc` を、降順には `desc` を使用します。 Defaults to `asc`. |

## 参照

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)
