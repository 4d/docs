---
id: openaiembeddingsparameters
title: OpenAIEmbeddingsParameters
---

# OpenAIEmbeddingsParameters

`OpenAIEmbeddingsParameters` クラスは、OpenAI API を通して埋め込みを作成するのに使用する引数を設定して管理するために設計されています。

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ名            | 型       | 説明                                                                                                     |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `encoding_format` | Text    | 埋め込みを返すフォーマット。 `float` あるいは `base64` のいずれかを指定できます。 (デフォルト: `float`) |
| `dimensions`      | Integer | 出力結果の埋め込みが持つべき次元の数。 text-embedding-3 あるいはそれ以降のモデルでのみサポートされています。                                        |

## 参照

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
