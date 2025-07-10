---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ        | 型                                     | 説明                                                                                                        |
| ------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `model`      | Text                                  | Returns the model used to compute the embedding                                                           |
| `vector`     | `4D.Vector`                           | Returns the first `4D.Vector` from the `vectors` collection.                              |
| `vectors`    | Collection                            | Returns a collection of `4D.Vector`.                                                      |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Returns the first [OpenAIEmbedding](OpenAIEmbedding.md) from the `embeddings` collection. |
| `embeddings` | Collection                            | Returns a collection of [OpenAIEmbedding](OpenAIEmbedding.md).                            |

## 参照

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
