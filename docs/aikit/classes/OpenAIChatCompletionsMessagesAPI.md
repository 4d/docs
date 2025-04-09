---
id: openaichatcompletionsmessagesapi
title: OpenAIChatCompletionsMessagesAPI
---

# OpenAIChatCompletionsMessagesAPI

The `OpenAIChatCompletionsMessagesAPI` class is designed to interact with the OpenAI API for managing messages in chat completions.

## Functions

### list

https://platform.openai.com/docs/api-reference/chat/getMessages

| Argument      | Type                                                                          | Description                                                  |
|---------------|-------------------------------------------------------------------------------|--------------------------------------------------------------|
| `$completionID` | Text                                                                          | The ID of the chat completion to retrieve messages for.      |
| `$parameters`   | [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)                                     | Parameters for filtering and customizing the response.      |

#### Description

The `list` function retrieves messages associated with a specific chat completion ID. It throws an error if the `completionID` is empty. If the `$parameters` argument is not an instance of [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md) , it will create a new instance using the provided parameters.
