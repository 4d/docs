---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

The `OpenAIChatAPI` class provides an interface to interact with OpenAI's chat based functionality, leveraging completion and vision capabilities.

## Propriedades

| Propriedade   | Tipo                                                    | Descrição                                                               |
| ------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| `completions` | [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md) | An instance that handles chat completions requests.     |
| `vision`      | [OpenAIVision](OpenAIVision.md)                         | A helper instance that handles vision-related requests. |

## Function

### create()

**create**(*systemPrompt* : Text) : OpenAIChatHelper

| Parâmetro      | Tipo                                    | Descrição                                                         |
| -------------- | --------------------------------------- | ----------------------------------------------------------------- |
| *systemPrompt* | Text                                    | The system prompt to initialize the chat.         |
| Resultado      | [OpenAIChatHelper](OpenAIChatHelper.md) | A helper instance for managing chat interactions. |

#### Exemplo de uso

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```