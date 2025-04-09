---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## Class Description

`OpenAIModelsAPI` is a class that allows interaction with OpenAI models through various functions, such as retrieving model information, listing available models, and (optionally) deleting fine-tuned models.

https://platform.openai.com/docs/api-reference/models

## Functions

### `retrieve`

https://platform.openai.com/docs/api-reference/models/retrieve

Retrieves a model instance to provide basic information.

| Parameter   | Type                      | Description                                   |
|-------------|---------------------------|-----------------------------------------------|
| `$model`    | Text                      | The identifier of the model to retrieve.     |
| `$parameters` | [OpenAIParameters](OpenAIParameters.md)     | Additional parameters for the request.       |

#### Return: [OpenAIModelResult](OpenAIModelResult.md)

#### Example usage:

```4d
var $result:=$client.model.retrieve("text-davinci-003")
var $model:=$result.model
```

### `list`

https://platform.openai.com/docs/api-reference/models/list

Lists the currently available models.

| Parameter   | Type                      | Description                                   |
|-------------|---------------------------|-----------------------------------------------|
| `$parameters` | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.       |

#### Return: [OpenAIModelListResult](OpenAIModelListResult.md)

#### Example usage:

```4d 
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```