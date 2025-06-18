---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

`OpenAIChatCompletionParameters` クラスはOpenAI API を使用したチャット補完に必要な引数を管理するために設計されています。

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ                   | 型       | デフォルト値          | 説明                                                                              |
| ----------------------- | ------- | --------------- | ------------------------------------------------------------------------------- |
| `model`                 | Text    | `"gpt-4o-mini"` | 使用するモデルのID。                                                                     |
| `stream`                | Boolean | `false`         | 部分的な進捗をストリームで返すかどうかを決めます。 設定されていれば、トークンはデータオンリーとして送信されます。 コールバックフォーミュラが必要となります。 |
| `max_completion_tokens` | Integer | `0`             | チャット補完の中で生成可能なトークンの最大数。                                                         |
| `n`                     | Integer | `1`             | 各プロンプトに対して生成するチャット補完の数。                                                         |
| `temperature`           | Real    | `-1`            | 使用するサンプリング温度。0から2の間の値。 値が大きいほど出力はよりランダムになり、値が小さいほど出力はより集中して決まりきったものになります。       |
| `store`                 | Boolean | `false`         | このチャット補完リクエストの出力を保存するかどうか。                                                      |

## 参照

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
