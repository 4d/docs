---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

El asistente de chat permite conservar una lista de mensajes en memoria y efectuar avisos consecutivos.

## Propiedades

| Nombre de la propiedad | Tipo                                                                  | Valor por defecto                                      | Descripción                                                                           |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `chat`                 | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | La instancia API de chat utilizada para la comunicación con OpenAI.   |
| `systemPrompt`         | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | El mensaje del sistema que guía las respuestas del asistente de chat. |
| `numberOfMessages`     | Integer                                                               | 5                                                      | El número máximo de mensajes a conservar en el historial de chat.     |
| `parámetros`           | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | Los parámetros para la solicitud de terminación del chat OpenAI.      |
| `messages`             | Colección de [OpenAIMessage](OpenAIMessage.md)                        | [] | La colección de mensajes intercambiados en la sesión de chat.         |

## Funciones

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Parámetros | Tipo                                                          | Descripción                                                        |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| *prompt*   | Text                                                          | Texto a enviar al chat de OpenAI.                  |
| Resultado  | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | El resultado de finalización devuelto por el chat. |

Envía una consulta de usuario al chat y devuelve el resultado de finalización correspondiente.

#### Ejemplo de Uso

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")

var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```