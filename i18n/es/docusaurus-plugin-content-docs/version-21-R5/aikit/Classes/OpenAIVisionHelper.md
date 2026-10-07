---
id: openaivisionhelper
title: OpenAIVisionHelper
---

# OpenAIVisionHelper

## Funciones

### prompt()

**prompt**(*prompt*: Test; *parameters* : OpenAIChatCompletionsParameters)

| Parámetros   | Tipo                                                                  | Descripción                                                                       |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| *prompt*     | Text                                                                  | El texto que se enviará a la API de chat de OpenAI.               |
| *parámetros* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | Parámetros opcionales para la solicitud de finalización del chat. |
| Resultado    | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)         | El resultado de la visión.                                        |

Envía un mensaje a la API de chat OpenAI con una URL de imagen asociada, y opcionalmente acepta los parámetros para la finalización del chat.

#### Ejemplo de Uso

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")

var $result:=$helper.prompt("Could you describe?")

$result:=$helper.prompt("Have any red element?"; {model: "gpt-4o-mini"; max_completion_tokens: 100 })
```