---
id: openaivisionhelper
title: OpenAIVisionHelper
---

# OpenAIVisionHelper

## Funciones

### prompt()

**prompt**(*prompt*: Test; *parameters* : OpenAIChatCompletionsParameters)

| Parámetros   | Tipo                                                                  | Descripción                                                          |
| ------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| *prompt*     | Text                                                                  | The text prompt to send to the OpenAI chat API.      |
| *parámetros* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | Optional parameters for the chat completion request. |
| Resultado    | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)         | The result of the vision.                            |

Sends a prompt to the OpenAI chat API along with an associated image URL, and optionally accepts parameters for the chat completion.

#### Ejemplo de Uso

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")

var $result:=$helper.prompt("Could you describe?")

$result:=$helper.prompt("Have any red element?"; {model: "gpt-4o-mini"; max_completion_tokens: 100 })
```