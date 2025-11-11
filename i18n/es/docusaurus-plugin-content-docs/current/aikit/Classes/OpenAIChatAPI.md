---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

The `OpenAIChatAPI` class provides an interface to interact with OpenAI's chat based functionality, leveraging completion and vision capabilities.

## Propiedades

| Propiedad     | Tipo                                                    | Descripción                                                                        |
| ------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `completions` | [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md) | Una instancia que maneja las solicitudes de finalización del chat. |
| `vision`      | [OpenAIVision](OpenAIVision.md)                         | A helper instance that handles vision-related requests.            |

## Function

### create()

**create**(*systemPrompt* : Text) : OpenAIChatHelper

| Parámetros     | Tipo                                    | Descripción                                                                      |
| -------------- | --------------------------------------- | -------------------------------------------------------------------------------- |
| *systemPrompt* | Text                                    | El sistema solicita inicializar el chat.                         |
| Resultado      | [OpenAIChatHelper](OpenAIChatHelper.md) | Una instancia de ayuda para gestionar las interacciones de chat. |

#### Ejemplo de Uso

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```