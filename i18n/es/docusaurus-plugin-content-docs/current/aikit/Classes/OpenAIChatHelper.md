---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

The chat helper allow to keep a list of messages in memory and make consecutive prompt.

## Propiedades

| Nombre de la propiedad | Tipo                                                                  | Valor por defecto                                      | Descripción                                                                           |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `chat`                 | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | The chat API instance used for communication with OpenAI.             |
| `systemPrompt`         | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | The system prompt message that guides the chat assistant's responses. |
| `numberOfMessages`     | Integer                                                               | 5                                                      | The maximum number of messages to retain in the chat history.         |
| `parámetros`           | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | Los parámetros para la solicitud de terminación del chat OpenAI.      |
| `messages`             | Colección de [OpenAIMessage](OpenAIMessage.md)                        | [] | The collection of messages exchanged in the chat session.             |

## Funciones

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Parámetros | Tipo                                                          | Descripción                                                        |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| *prompt*   | Text                                                          | Texto a enviar al chat de OpenAI.                  |
| Resultado  | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | El resultado de finalización devuelto por el chat. |

Sends a user prompt to the chat and returns the corresponding completion result.

#### Ejemplo de Uso

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")

var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```