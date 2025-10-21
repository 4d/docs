---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

La classe `OpenAIChatAPI` fournit une interface permettant d'interagir avec la fonctionnalité de discussion (*chat*) de l'OpenAI, en tirant parti des capacités de complétion et de vision.

## Propriétés

| Propriété     | Type                                                    | Description                                                                        |
| ------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `completions` | [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md) | Une instance qui gère les requêtes de complétion de la discussion. |
| `vision`      | [OpenAIVision](OpenAIVision.md)                         | A helper instance that handles vision-related requests.            |

## Function

### create()

**create**(*systemPrompt* : Text) : OpenAIChatHelper

| Paramètres     | Type                                    | Description                                                                            |
| -------------- | --------------------------------------- | -------------------------------------------------------------------------------------- |
| *systemPrompt* | Text                                    | L'invite du système pour initialiser la discussion.                    |
| Résultat       | [OpenAIChatHelper](OpenAIChatHelper.md) | Une instance du helper pour gérer les interactions dans la discussion. |

#### Exemple d'utilisation

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```