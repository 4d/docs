---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

The `OpenAIChatCompletionParameters` class is designed to handle the parameters required for chat completions using the OpenAI API.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad               | Tipo    | Valor por defecto | Descripción                                                                                                                                                                              |
| ----------------------- | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                 | Text    | `"gpt-4o-mini"`   | ID del modelo a utilizar.                                                                                                                                                |
| `stream`                | Boolean | `False`           | Si se retransmite el progreso parcial. Si se define, los tokens se enviarán solo como datos. Fórmula de retrollamada necesaria.          |
| `max_completion_tokens` | Integer | `0`               | The maximum number of tokens that can be generated in the completion.                                                                                                    |
| `n`                     | Integer | `1`               | How many completions to generate for each prompt.                                                                                                                        |
| `temperature`           | Real    | `-1`              | What sampling temperature to use, between 0 and 2. Higher values make the output more random, while lower values make it more focused and deterministic. |
| `store`                 | Boolean | `False`           | Whether or not to store the output of this chat completion request.                                                                                                      |

## Ver también

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
