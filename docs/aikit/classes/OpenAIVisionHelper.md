---
id: openaivisionhelper
title: OpenAIVisionHelper
---

# OpenAIVisionHelper

## Functions

### prompt

| Argument     | Type                                         |
|--------------|----------------------------------------------|
| `$prompt`    | `Text`                                       |
| `$parameters`| [`OpenAIChatCompletionParameters`](OpenAIChatCompletionParameters.md)    |

### Description

Sends a prompt to the OpenAI chat API along with an associated image URL, and optionally accepts parameters for the chat completion.

### Example Usage

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")

var $result:=$helper.prompt("Could you describe?")

$result:=$helper.prompt("Have any red element?"; {model: "gpt-4o-mini"; max_completion_tokens: 100 })
```