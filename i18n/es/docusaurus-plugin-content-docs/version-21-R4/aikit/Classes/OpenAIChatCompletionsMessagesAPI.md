---
id: openaichatcompletionsmessagesapi
title: OpenAIChatCompletionsMessagesAPI
---

# OpenAIChatCompletionsMessagesAPI

La clase `OpenAIChatCompletionsMessagesAPI` está diseñada para interactuar con la API OpenAI para administrar mensajes en las terminaciones del chat.

## Funciones

### lista()

**list**(*completionID* : Text; *parameters* : OpenAIChatCompletionsMessagesParameters) : Variant

| Parámetros     | Tipo                                      | Descripción                                                                           |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------------------- |
| *completionID* | Text                                      | El ID de la finalización de chat para la cual recuperar los mensajes. |
| *parámetros*   | `OpenAIChatCompletionsMessagesParameters` | Parámetros para filtrar y personalizar la respuesta.                  |
| Resultado      | Variant                                   | Los mensajes recuperados asociados con la finalización del chat.      |

La función `list()` recupera los mensajes asociados a un ID de finalización de chat específico. Lanza un error si `completionID` está vacío. Si el argumento *parameters* no es una instancia de `OpenAIChatCompletionsMessagesParameters`, creará una nueva instancia utilizando los parámetros suministrados.

https://developers.openai.com/api/reference/resources/chat/subresources/completions/subresources/messages/methods/list
