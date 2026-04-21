---
id: openaichatcompletionslistparameters
title: OpenAIChatCompletionsListParameters
---

# OpenAIChatCompletionsListParameters

このクラスはOpenAI API からのチャット補完のリストを取得するためのパラメーターを定義するために使用されます。 これを使用するとチャットメッセージのページ分け、ソート、フィルタリングをカスタマイズすることができます。

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ      | 型       | デフォルト値 | 説明                                                                                          |
| ---------- | ------- | ------ | ------------------------------------------------------------------------------------------- |
| `after`    | Text    | ""     | 前のページ分けリクエストからの最後のメッセージの識別子。                                                                |
| `limit`    | Integer | 0      | 取得するメッセージの数。                                                                                |
| `order`    | Text    | "asc"  | タイムスタンプによるメッセージの並べ替え順。 昇順には `asc` を、降順には `desc` を使用します。                                     |
| `metadata` | Text    | -      | チャット補完をフィルターするメタデータキーのリスト。 例: `metadata[key1]=value1&metadata[key2]=value2` |
| `model`    | Text    | ""     | チャット補完を生成するのに使用されたモデル。                                                                      |

## 参照

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
