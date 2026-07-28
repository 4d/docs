---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ        | 型                                     | 説明                                                                              |
| ------------ | ------------------------------------- | ------------------------------------------------------------------------------- |
| `model`      | Text                                  | 埋め込みを計算するのに使用されたモデルを返します                                                        |
| `vector`     | `4D.Vector`                           | `vectors` コレクションから、最初の`4D.Vector` を返します。                                        |
| `vectors`    | Collection                            | `4D.Vector` のコレクションを返します。                                                       |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | `embeddings` コレクションから最初の [OpenAIEmbedding](OpenAIEmbedding.md) を返します。           |
| `embeddings` | Collection                            | [OpenAIEmbedding](OpenAIEmbedding.md) のコレクションを返します。                             |
| `usage`      | Object                                | トークン使用状況の情報をかえします([OpenAIResult](OpenAIResult.md) から継承されます)。 |

### usage

`usage` プロパティは埋め込みのトークン使用状況情報を格納したオブジェクトを返します。

| フィールド           | 型       | 説明                                                                             |
| --------------- | ------- | ------------------------------------------------------------------------------ |
| `prompt_tokens` | Integer | 入力テキスト内のトークンの数。                                                                |
| `total_tokens`  | Integer | 使用されたトークンの総数(埋め込みの prompt_tokens と同じ)。 |

**レスポンスの例:**

```json
{
  "prompt_tokens": 8,
  "total_tokens": 8
}
```

> **注意:** 埋め込みはプロンプトトークンのみを消費する(補完はありません)ため、`total_tokens` と `prompt_tokens` は同じです。

## 参照

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
