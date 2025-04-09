---
id: openaicompletionsapi
title: OpenAICompletionsAPI
---

# OpenAICompletionsAPI

## Functions

### create

Creates a completion for the provided prompt and parameters.

| Argument   | Type                                  | Description                                      |
|------------|---------------------------------------|--------------------------------------------------|
| `$prompt`    | Text                                  | The prompt to generate a completion for.         |
| `$parameters` | [OpenAICompletionParameters](OpenAICompletionParameters.md)        | The parameters to customize the completion request. |

#### Example Usage

```4d
var $result:=$client.completion.create("Hello")
```