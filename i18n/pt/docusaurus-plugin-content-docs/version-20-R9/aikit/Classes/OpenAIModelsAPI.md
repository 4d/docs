---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## Descrição da classe

`OpenAIModelsAPI` is a class that allows interaction with OpenAI models through various functions, such as retrieving model information, listing available models, and (optionally) deleting fine-tuned models.

https://platform.openai.com/docs/api-reference/models

## Funções

### retrieve()

**retrieve**(*model* : Text; *parameters* : OpenAIParameters) : OpenAIModelResult

| Parâmetro    | Tipo                                      | Descrição                                                |
| ------------ | ----------------------------------------- | -------------------------------------------------------- |
| *model*      | Text                                      | The identifier of the model to retrieve. |
| *parâmetros* | [OpenAIParameters](OpenAIParameters.md)   | Additional parameters for the request.   |
| Resultado    | [OpenAIModelResult](OpenAIModelResult.md) | The model result                                         |

Retrieves a model instance to provide basic information.

https://platform.openai.com/docs/api-reference/models/retrieve

#### Example usage:

```4d
var $result:=$client.model.retrieve("text-davinci-003")
var $model:=$result.model
```

### lista()

**list**(*parameters* : OpenAIParameters) : OpenAIModelListResult

| Parâmetro    | Tipo                                              | Descrição                                              |
| ------------ | ------------------------------------------------- | ------------------------------------------------------ |
| *parâmetros* | [OpenAIParameters](OpenAIParameters.md)           | Additional parameters for the request. |
| Resultado    | [OpenAIModelListResult](OpenAIModelListResult.md) | The model list result                                  |

Lists the currently available models.

https://platform.openai.com/docs/api-reference/models/list

#### Example usage:

```4d
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```