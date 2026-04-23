---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ        | 型                                     | 説明                                                                    |
| ------------ | ------------------------------------- | --------------------------------------------------------------------- |
| `model`      | Text                                  | 埋め込みを計算するのに使用されたモデルを返します                                              |
| `vector`     | `4D.Vector`                           | `vectors` コレクションから、最初の`4D.Vector` を返します。                              |
| `vectors`    | Collection                            | `4D.Vector` のコレクションを返します。                                             |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | `embeddings` コレクションから最初の [OpenAIEmbedding](OpenAIEmbedding.md) を返します。 |
| `embeddings` | Collection                            | [OpenAIEmbedding](OpenAIEmbedding.md) のコレクションを返します。                   |

## 参照

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
