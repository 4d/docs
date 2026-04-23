---
id: openaichatcompletionsmessagesapi
title: OpenAIChatCompletionsMessagesAPI
---

# OpenAIChatCompletionsMessagesAPI

The `OpenAIChatCompletionsMessagesAPI` class is designed to interact with the OpenAI API for managing messages in chat completions.

## Funções

### lista()

**list**(*completionID* : Text; *parameters* : OpenAIChatCompletionsMessagesParameters) : Variant

| Parâmetro      | Tipo                                      | Descrição                                                                   |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| *completionID* | Text                                      | The ID of the chat completion to retrieve messages for.     |
| *parâmetros*   | `OpenAIChatCompletionsMessagesParameters` | Parameters for filtering and customizing the response.      |
| Resultado      | Diferente de                              | The retrieved messages associated with the chat completion. |

The `list()` function retrieves messages associated with a specific chat completion ID. It throws an error if the `completionID` is empty. If the *parameters* argument is not an instance of `OpenAIChatCompletionsMessagesParameters`, it will create a new instance using the provided parameters.

https://platform.openai.com/docs/api-reference/chat/getMessages
