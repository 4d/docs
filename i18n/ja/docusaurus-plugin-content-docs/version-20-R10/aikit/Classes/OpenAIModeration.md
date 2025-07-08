---
id: openaimoderation
title: OpenAIModeration
---

# OpenAIModeration

`OpenAIModeration` クラスはOpenAI API からのモデレーション結果を処理するために設計されています。 これにはモデレーションID、使用したモデル、モデレーションの結果を保存するためのプロパティが格納されています。

https://platform.openai.com/docs/api-reference/moderations/object

## プロパティ

| プロパティ     | 型                                               | 説明                       |
| --------- | ----------------------------------------------- | ------------------------ |
| `id`      | Text                                            | モデレーションのリクエストに割り当てられたID。 |
| `model`   | Text                                            | 処理に使用されたモデレーションモデル。      |
| `results` | Collection                                      | モデレーション結果のコレクション。        |
| `項目`      | [OpenAIModerationItem](OpenAIModerationItem.md) | 結果の最初の項目。                |
