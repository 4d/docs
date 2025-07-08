---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

The `OpenAIChatAPI` class provides an interface to interact with OpenAI's chat based functionality, leveraging completion and vision capabilities.

## Propiedades

| Propiedad     | Tipo                                                    | Descripción                                                                                    |
| ------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `completions` | [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md) | An instance that handles chat completions requests.                            |
| `vision`      | [OpenAIVision](OpenAIVision.md)                         | Una instancia de ayuda que gestiona las peticiones relacionadas con la visión. |

## Function

### create()

**create**(*systemPrompt* : Text) : OpenAIChatHelper

| Parámetros     | Tipo                                    | Descripción                                                                      |
| -------------- | --------------------------------------- | -------------------------------------------------------------------------------- |
| *systemPrompt* | Text                                    | The system prompt to initialize the chat.                        |
| Resultado      | [OpenAIChatHelper](OpenAIChatHelper.md) | Una instancia de ayuda para gestionar las interacciones de chat. |
