---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## Class Description

`OpenAIModelsAPI` is a class that allows interaction with OpenAI models through various functions, such as retrieving model information, listing available models, and (optionally) deleting fine-tuned models.

https://platform.openai.com/docs/api-reference/models

## Functions

### retrieve()

**retrieve**(*model* : Text; *parameters* : OpenAIParameters) : OpenAIModelResult

| Parameter     | Type                      | Description                                   |
|---------------|---------------------------|-----------------------------------------------|
| *model*       | Text                      | The identifier of the model to retrieve.      |
| *parameters*  | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.       |
| Function result| [OpenAIModelResult](OpenAIModelResult.md) | The model result  |

Retrieves a model instance to provide basic information.

https://platform.openai.com/docs/api-reference/models/retrieve

#### Example usage:

```4d
var $result:=$client.model.retrieve("text-davinci-003")
var $model:=$result.model
```

### list()

**list**(*parameters* : OpenAIParameters) : OpenAIModelListResult

| Parameter     | Type                      | Description                                   |
|---------------|---------------------------|-----------------------------------------------|
| *parameters*  | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.       |
| Function result| [OpenAIModelListResult](OpenAIModelListResult.md) | The model list result  |

Lists the currently available models.

https://platform.openai.com/docs/api-reference/models/list

#### Example usage:

```4d
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```