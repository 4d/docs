---
id: openaichatcompletionsmessagesapi
title: OpenAIChatCompletionsMessagesAPI
---

# OpenAIChatCompletionsMessagesAPI

The `OpenAIChatCompletionsMessagesAPI` class is designed to interact with the OpenAI API for managing messages in chat completions.

## Fonctions

### liste()

**list**(*completionID* : Text; *parameters* : OpenAIChatCompletionsMessagesParameters) : Variant

| Paramètres     | Type                                      | Description                                                                 |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| *completionID* | Text                                      | The ID of the chat completion to retrieve messages for.     |
| *paramètres*   | `OpenAIChatCompletionsMessagesParameters` | Parameters for filtering and customizing the response.      |
| Résultat       | Variant                                   | The retrieved messages associated with the chat completion. |

The `list()` function retrieves messages associated with a specific chat completion ID. It throws an error if the `completionID` is empty. If the *parameters* argument is not an instance of `OpenAIChatCompletionsMessagesParameters`, it will create a new instance using the provided parameters.

https://platform.openai.com/docs/api-reference/chat/getMessages
