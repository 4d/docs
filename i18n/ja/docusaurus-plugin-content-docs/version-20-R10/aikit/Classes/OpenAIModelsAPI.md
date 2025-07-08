---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## クラスの説明

`OpenAIModelsAPI` はさまざまな機能を通してOpenAI のモデルとやり取りをすることを可能にするクラスです。この機能とはモデル情報の取得、利用可能なモデルを一覧表示すること、そして(オプションとして)ファインチューンされたモデルを削除することなどです。

https://platform.openai.com/docs/api-reference/models

## 関数

### retrieve()

**retrieve**(*model* : Text; *parameters* : OpenAIParameters) : OpenAIModelResult

| 引数           | 型                                         | 説明                |
| ------------ | ----------------------------------------- | ----------------- |
| *model*      | Text                                      | 取得するモデルの識別子。      |
| *parameters* | [OpenAIParameters](OpenAIParameters.md)   | リクエスト用の追加のパラメーター。 |
| 戻り値          | [OpenAIModelResult](OpenAIModelResult.md) | モデルの結果            |

モデルインスタンスを取得し、基本情報を提供します。

https://platform.openai.com/docs/api-reference/models/retrieve

#### 使用例:

```4d
var $result:=$client.model.retrieve("text-davinci-003")
var $model:=$result.model
```

### list()

**list**(*parameters* : OpenAIParameters) : OpenAIModelListResult

| 引数           | 型                                                 | 説明                |
| ------------ | ------------------------------------------------- | ----------------- |
| *parameters* | [OpenAIParameters](OpenAIParameters.md)           | リクエスト用の追加のパラメーター。 |
| 戻り値          | [OpenAIModelListResult](OpenAIModelListResult.md) | モデルリストの結果         |

現在利用可能なモデルを一覧表示します。

https://platform.openai.com/docs/api-reference/models/list

#### 使用例:

```4d
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```