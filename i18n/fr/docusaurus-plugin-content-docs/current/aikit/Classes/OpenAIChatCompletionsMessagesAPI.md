---
id: openaichatcompletionsmessagesapi
title: OpenAIChatCompletionsMessagesAPI
---

# OpenAIChatCompletionsMessagesAPI

La classe `OpenAIChatCompletionsMessagesAPI` permet d'interagir avec l'API OpenAI pour la gestion des messages dans les réponses conversationnelles.

## Fonctions

### list()

**list**(*completionID* : Text; *parameters* : OpenAIChatCompletionsMessagesParameters) : Variant

| Paramètres     | Type                                      | Description                                                                                   |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| *completionID* | Text                                      | L'ID de la réponse conversationnelle pour laquelle récupérer les messages.    |
| *parameters*   | `OpenAIChatCompletionsMessagesParameters` | Paramètres permettant de filtrer et de personnaliser la réponse.              |
| Résultat       | Variant                                   | Les messages récupérés associés à la génération de réponse conversationnelle. |

La fonction `list()` permet de récupérer les messages associés à un identifiant spécifique de réponse conversationnelle. Une erreur est générée si *completionID* est vide. Si l'argument *parameters* n'est pas une instance de `OpenAIChatCompletionsMessagesParameters`, la fonction en créera une nouvelle en utilisant les paramètres fournis.

https://platform.openai.com/docs/api-reference/chat/getMessages
