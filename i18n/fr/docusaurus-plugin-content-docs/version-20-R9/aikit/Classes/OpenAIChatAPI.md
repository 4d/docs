---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

The `OpenAIChatAPI` class provides an interface to interact with OpenAI's chat based functionality, leveraging completion and vision capabilities.

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
