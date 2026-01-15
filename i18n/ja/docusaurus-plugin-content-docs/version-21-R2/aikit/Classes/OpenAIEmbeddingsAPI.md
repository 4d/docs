---
id: openaiembeddingsapi
title: OpenAIEmbeddingsAPI
---

# OpenAIEmbeddingsAPI

`OpenAIEmbeddingsAPI` はOpenAI のAPI を使用して埋め込みを作成する機能を提供します。

https://platform.openai.com/docs/api-reference/embeddings

## 関数

### create()

**create**(*input* : Text; *model*: Text; *parameters* : OpenAIEmbeddingsParameters) : OpenAIEmbeddingsResult

提供された入力、モデル、パラメータに対する埋め込みを作成します。

| 引数           | 型                                                           | 説明                                                                    |
| ------------ | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| *input*      | テキストまたはテキストのコレクション                                          | ベクター化する入力。                                                            |
| *model*      | Text                                                        | [使用するモデル](https://platform.openai.com/docs/guides/embeddings#埋め込みモデル) |
| *parameters* | [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md) | 埋め込みリクエストをカスタマイズするための引数。                                              |
| 戻り値          | [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)         | 埋め込み。                                                                 |

#### 使用例

##### 単一のテキスト入力に対するベクトルを取得

```4d
var $result:=$client.embeddings.create("it rains cats and dogs"; "text-embedding-ada-002")
var $vector: 4D.Vector:=$result.vector
// あるいは var $embedding: cs.AIKit.OpenAIEmbedding:=$result.embedding
```

##### テキスト入力のコレクションに対するベクトルを取得

```4d
var $inputs:=["it rains cats and dogs"; "il pleut à boire debout"]
var $result:=$client.embeddings.create($inputs; "text-embedding-ada-002")
var $vectors : Collection:=$result.vectors // 4D.Vector のコレクション
```

##### 他のサービスを使用する

> 埋め込みを特定のサービスで使用する前に、そのドキュメンテーションをチェックして埋め込みがサポートされているかを確認し、適切な埋め込みモデルを選択するようにしてください。

例えば、Mistral に対しては、[mistral-埋め込みあるいはcodestral-埋め込み](https://docs.mistral.ai/capabilities/embeddings/) を使用してください

```4d
var $result:=$client.embeddings.create($inputs; "mistral-embed")
```
