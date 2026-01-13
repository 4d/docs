---
id: openaichatcompletionsmessagesapi
title: OpenAIChatCompletionsMessagesAPI
---

# OpenAIChatCompletionsMessagesAPI

The `OpenAIChatCompletionsMessagesAPI` class is designed to interact with the OpenAI API for managing messages in chat completions.

## Funciones

### lista()

**list**(*completionID* : Text; *parameters* : OpenAIChatCompletionsMessagesParameters) : Variant

| Parámetros     | Tipo                                      | Descripción                                                                           |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------- |
| *completionID* | Text                                      | El ID de la finalización de chat para la cual recuperar los mensajes. |
| *parámetros*   | `OpenAIChatCompletionsMessagesParameters` | Parámetros para filtrar y personalizar la respuesta.                  |
| Resultado      | Variant                                   | Los mensajes recuperados asociados con la finalización del chat.      |

La función `list()` recupera los mensajes asociados a un ID de finalización de chat específico. Lanza un error si `completionID` está vacío. If the *parameters* argument is not an instance of `OpenAIChatCompletionsMessagesParameters`, it will create a new instance using the provided parameters.

https://platform.openai.com/docs/api-reference/chat/getMessages
