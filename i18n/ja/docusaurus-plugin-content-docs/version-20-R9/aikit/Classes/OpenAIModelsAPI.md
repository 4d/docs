---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## クラスの説明

`OpenAIModelsAPI` is a class that allows interaction with OpenAI models through various functions, such as retrieving model information, listing available models, and (optionally) deleting fine-tuned models.

https://platform.openai.com/docs/api-reference/models

## 関数

### retrieve()

**retrieve**(*model* : Text; *parameters* : OpenAIParameters) : OpenAIModelResult

| 引数      | 型                                         | 説明                                                       |
| ------- | ----------------------------------------- | -------------------------------------------------------- |
| *model* | Text                                      | The identifier of the model to retrieve. |
| *引数*    | [OpenAIParameters](OpenAIParameters.md)   | Additional parameters for the request.   |
| 戻り値     | [OpenAIModelResult](OpenAIModelResult.md) | The model result                                         |

Retrieves a model instance to provide basic information.

https://platform.openai.com/docs/api-reference/models/retrieve

#### Example usage:

```4d
var $result:=$client.model.retrieve("text-davinci-003")
var $model:=$result.model
```

### リスト()

**list**(*parameters* : OpenAIParameters) : OpenAIModelListResult

| 引数   | 型                                                 | 説明                                                     |
| ---- | ------------------------------------------------- | ------------------------------------------------------ |
| *引数* | [OpenAIParameters](OpenAIParameters.md)           | Additional parameters for the request. |
| 戻り値  | [OpenAIModelListResult](OpenAIModelListResult.md) | The model list result                                  |

Lists the currently available models.

https://platform.openai.com/docs/api-reference/models/list

#### Example usage:

```4d
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```