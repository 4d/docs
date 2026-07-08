---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## Descripción de la clase

`OpenAIModelsAPI` es una clase que permite interactuar con los modelos OpenAI a través de varias funciones, como la recuperación de información de los modelos, la lista de los modelos disponibles y (opcionalmente) la eliminación de los modelos ajustados.

https://platform.openai.com/docs/api-reference/models

## Funciones

### retrieve()

**retrieve**(*model* : Text; *parameters* : OpenAIParameters) : OpenAIModelResult

| Parámetros   | Tipo                                      | Descripción                                              |
| ------------ | ----------------------------------------- | -------------------------------------------------------- |
| *model*      | Text                                      | El identificador del modelo a recuperar. |
| *parámetros* | [OpenAIParameters](OpenAIParameters.md)   | Parámetros adicionales para la petición. |
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

| Parámetros   | Tipo                                              | Descripción                                              |
| ------------ | ------------------------------------------------- | -------------------------------------------------------- |
| *parámetros* | [OpenAIParameters](OpenAIParameters.md)           | Parámetros adicionales para la petición. |
| Resultado    | [OpenAIModelListResult](OpenAIModelListResult.md) | Resultado de la lista de modelos                         |

Lista los modelos disponibles actualmente.

https://platform.openai.com/docs/api-reference/models/list

#### Ejemplo de uso:

```4d
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```