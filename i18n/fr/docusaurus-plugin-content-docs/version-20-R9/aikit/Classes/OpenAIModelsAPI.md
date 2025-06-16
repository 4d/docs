---
id: openaimodelsapi
title: OpenAIModelsAPI
---

# OpenAIModelsAPI

## Description de la classe

`OpenAIModelsAPI` est une classe qui permet l'interaction avec les modèles OpenAI à travers diverses fonctions, comme la récupération des informations sur les modèles, la liste des modèles disponibles et (éventuellement) la suppression des modèles affinés.

https://platform.openai.com/docs/api-reference/models

## Fonctions

### retrieve()

**retrieve**(*model* : Text; *parameters* : OpenAIParameters) : OpenAIModelResult

| Paramètres   | Type                                      | Description                                            |
| ------------ | ----------------------------------------- | ------------------------------------------------------ |
| *model*      | Text                                      | L'identifiant du modèle à récupérer.   |
| *paramètres* | [OpenAIParameters](OpenAIParameters.md)   | Additional parameters for the request. |
| Résultat     | [OpenAIModelResult](OpenAIModelResult.md) | Le résultat du modèle                                  |

Récupère une instance de modèle pour fournir des informations de base.

https://platform.openai.com/docs/api-reference/models/retrieve

#### Exemple d'utilisation:

```4d
var $result:=$client.model.retrieve("text-davinci-003")
var $model:=$result.model
```

### liste()

**list**(*parameters* : OpenAIParameters) : OpenAIModelListResult

| Paramètres   | Type                                              | Description                                            |
| ------------ | ------------------------------------------------- | ------------------------------------------------------ |
| *paramètres* | [OpenAIParameters](OpenAIParameters.md)           | Additional parameters for the request. |
| Résultat     | [OpenAIModelListResult](OpenAIModelListResult.md) | Résultat de la liste des modèles                       |

Liste les modèles actuellement disponibles.

https://platform.openai.com/docs/api-reference/models/list

#### Exemple d'utilisation:

```4d
var $result:=$client.model.list($parameters)
var $models: Collection:=$result.models
```