---
id: openaicompletionparameters
title: OpenAICompletionParameters
---

# OpenAICompletionParameters

The `OpenAICompletionParameters` class defines the parameters needed to create a completion request for the OpenAI API.

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Properties

| Property        | Type   | Description                                                          |
|-----------------|--------|----------------------------------------------------------------------|
| `model`           | Text   | The ID of the model to use (default: "gpt-3.5-turbo-instruct").     |
| `stream`          | Boolean| Whether to stream back partial progress.                             |
| `echo`            | Boolean| Echo back the prompt in addition to the completion.                  |
| `max_tokens`      | Integer| The maximum number of tokens that can be generated in the completion.|
| `n`               | Integer| How many completions to generate for each prompt (default: 1).      |
| `temperature`     | Real   | What sampling temperature to use (default: -1).                     |

## See also

- [OpenAICompletionsAPI](OpenAICompletionsAPI.md)
