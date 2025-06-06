---
id: openaivisionhelper
title: OpenAIVisionHelper
---

# OpenAIVisionHelper

## Fonctions

### prompt()

**prompt**(*prompt*: Test; *parameters* : OpenAIChatCompletionsParameters)

| Paramètres   | Type                                                                  | Description                                                          |
| ------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| *prompt*     | Text                                                                  | The text prompt to send to the OpenAI chat API.      |
| *paramètres* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | Optional parameters for the chat completion request. |
| Résultat     | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)         | The result of the vision.                            |

Sends a prompt to the OpenAI chat API along with an associated image URL, and optionally accepts parameters for the chat completion.

#### Example Usage

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")

var $result:=$helper.prompt("Could you describe?")

$result:=$helper.prompt("Have any red element?"; {model: "gpt-4o-mini"; max_completion_tokens: 100 })
```