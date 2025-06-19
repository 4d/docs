---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## Descripción de la clase

`OpenAIModelsAPI` is a class that allows interaction with OpenAI models through various functions, such as retrieving model information, listing available models, and (optionally) deleting fine-tuned models.

https://platform.openai.com/docs/api-reference/models

## Funciones

### retrieve()

**retrieve**(*model* : Text; *parameters* : OpenAIParameters) : OpenAIModelResult

| Parámetros   | Tipo                                      | Descripción                                              |
| ------------ | ----------------------------------------- | -------------------------------------------------------- |
| *model*      | Text                                      | The identifier of the model to retrieve. |
| *parámetros* | [OpenAIParameters](OpenAIParameters.md)   | Additional parameters for the request.   |
| Resultado    | [OpenAIModelResult](OpenAIModelResult.md) | El resultado del modelo                                  |

Recupera una instancia del modelo para ofrecer información básica.

https://platform.openai.com/docs/api-reference/models/retrieve

#### Ejemplo de uso:

```4d
var $result:=$client.model.retrieve("text-davinci-003")
var $model:=$result.model
```

### lista()

**list**(*parameters* : OpenAIParameters) : OpenAIModelListResult

| Parámetros   | Tipo                                              | Descripción                                            |
| ------------ | ------------------------------------------------- | ------------------------------------------------------ |
| *parámetros* | [OpenAIParameters](OpenAIParameters.md)           | Additional parameters for the request. |
| Resultado    | [OpenAIModelListResult](OpenAIModelListResult.md) | The model list result                                  |

Lists the currently available models.

https://platform.openai.com/docs/api-reference/models/list

#### Ejemplo de uso:

```4d
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```