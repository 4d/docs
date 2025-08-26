---
id: openaiembedding
title: OpenAIEmbedding
---

# OpenAIEmbedding

`OpenAIEmbedding` クラスはOpenAI API によって生成されたエンべディング(埋め込み)を表し、埋め込みベクトルとそのインデックスを埋め込みのリスト内に格納しています。

## プロパティ

| プロパティ       | 型           | 説明                                               |
| ----------- | ----------- | ------------------------------------------------ |
| `index`     | Integer     | 埋め込みのリスト内の埋め込みのインデックス。                           |
| `embedding` | `4D.Vector` | 埋め込みベクトル。 ベクトルの長さは、埋め込みガイド内の記載されているモデルによって異なります。 |
| `object`    | Text        | "embedding" というテキスト値                             |

## 参照

- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)
