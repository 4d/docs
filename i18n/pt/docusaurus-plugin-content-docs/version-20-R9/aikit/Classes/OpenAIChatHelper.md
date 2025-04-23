---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

The chat helper allow to keep a list of messages in memory and make consecutive prompt.

## Propriedades

| Property Name      | Tipo                                                                  | Default Value                                          | Descrição                                                                             |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `chat`             | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | The chat API instance used for communication with OpenAI.             |
| `systemPrompt`     | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | The system prompt message that guides the chat assistant's responses. |
| `numberOfMessages` | Integer                                                               | 5                                                      | The maximum number of messages to retain in the chat history.         |
| `parâmetros`       | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | The parameters for the OpenAI chat completion request.                |
| `messages`         | Coleção de [OpenAIMessage](OpenAIMessage.md)                          | [] | The collection of messages exchanged in the chat session.             |

## Funções

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Parâmetro | Tipo                                                          | Descrição                                                   |
| --------- | ------------------------------------------------------------- | ----------------------------------------------------------- |
| *prompt*  | Text                                                          | The text prompt to send to OpenAI chat.     |
| Resultado | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | The completion result returned by the chat. |

Sends a user prompt to the chat and returns the corresponding completion result.

#### Example Usage

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")

var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```