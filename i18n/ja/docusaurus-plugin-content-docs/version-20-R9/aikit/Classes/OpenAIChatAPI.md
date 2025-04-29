---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

The `OpenAIChatAPI` class provides an interface to interact with OpenAI's chat based functionality, leveraging completion and vision capabilities.

## プロパティ

| プロパティ         | 型                                                       | 説明                                                                       |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| `completions` | [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md) | An instance that handles chat completions requests.      |
| `vision`      | [OpenAIVision](OpenAIVision.md)                         | An helper instance that handles vision-related requests. |

## Function

### create()

**create**(*systemPrompt* : Text) : OpenAIChatHelper

| 引数             | 型                                       | 説明                                                                |
| -------------- | --------------------------------------- | ----------------------------------------------------------------- |
| *systemPrompt* | Text                                    | The system prompt to initialize the chat.         |
| 戻り値            | [OpenAIChatHelper](OpenAIChatHelper.md) | A helper instance for managing chat interactions. |
