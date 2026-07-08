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

The `usage` property returns an object containing token usage information for embeddings.

| フィールド           | 型       | 説明                                                                                                                |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `prompt_tokens` | Integer | Number of tokens in the input text(s).                                         |
| `total_tokens`  | Integer | Total tokens used (same as prompt_tokens for embeddings). |

**レスポンスの例:**

```json
{
  "prompt_tokens": 8,
  "total_tokens": 8
}
```

> **Note:** Embeddings only consume prompt tokens (there is no completion), so `total_tokens` equals `prompt_tokens`.

## 参照

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
