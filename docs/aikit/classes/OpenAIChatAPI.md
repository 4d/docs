---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

The `OpenAIChatAPI` class provides an interface to interact with OpenAI's chat based functionality, leveraging completion and vision capabilities.

## Properties

| Property      | Type                               | Description                                             |
|---------------|------------------------------------|--------------------------------------------------------|
| `completions`   | [OpenAIChatCompletionsAPI](OpenAIChatCompletions.md)    | An instance that handles chat completions requests.    |
| `vision`        | [OpenAIVision](OpenAIVision.md)             | An helper instance that handles vision-related requests.       |

## Function

### create($systemPrompt: Text): OpenAIChatHelper

Create a [OpenAIChatHelper](OpenAIChatHelper.md)
