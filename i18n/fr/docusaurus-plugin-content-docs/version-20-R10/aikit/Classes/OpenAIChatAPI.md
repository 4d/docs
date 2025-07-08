---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

La classe `OpenAIChatAPI` fournit une interface permettant d'interagir avec la fonctionnalité de chat de l'OpenAI, en tirant parti des capacités de complétion et de vision.

## Propriétés

| Propriété     | Type                                                    | Description                                                              |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| `completions` | [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md) | An instance that handles chat completions requests.      |
| `vision`      | [OpenAIVision](OpenAIVision.md)                         | An helper instance that handles vision-related requests. |

## Function

### create()

**create**(*systemPrompt* : Text) : OpenAIChatHelper

| Paramètres     | Type                                    | Description                                                       |
| -------------- | --------------------------------------- | ----------------------------------------------------------------- |
| *systemPrompt* | Text                                    | The system prompt to initialize the chat.         |
| Résultat       | [OpenAIChatHelper](OpenAIChatHelper.md) | A helper instance for managing chat interactions. |
