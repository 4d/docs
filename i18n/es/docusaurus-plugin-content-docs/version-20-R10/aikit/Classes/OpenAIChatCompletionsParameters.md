---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

La clase `OpenAIChatCompletionParameters` está diseñada para manejar los parámetros requeridos para completar chats utilizando la API OpenAI.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad               | Tipo    | Valor por defecto | Descripción                                                                                                                                                                                                              |
| ----------------------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                 | Text    | `"gpt-4o-mini"`   | ID del modelo a utilizar.                                                                                                                                                                                |
| `stream`                | Boolean | `False`           | Si se retransmite el progreso parcial. Si se define, los tokens se enviarán solo como datos. Fórmula de retrollamada necesaria.                                          |
| `max_completion_tokens` | Integer | `0`               | El número máximo de tokens que se pueden generar en la respuesta.                                                                                                                                        |
| `n`                     | Integer | `1`               | Número de respuestas a generar para cada invite (prompt).                                                                                                                             |
| `temperature`           | Real    | `-1`              | Qué temperatura de muestreo utilizar, entre 0 y 2. Los valores más altos hacen que la salida sea más aleatoria, mientras que los valores más bajos la hacen más centrada y determinista. |
| `store`                 | Boolean | `False`           | Almacena o no el resultado de esta solicitud de finalización de chat.                                                                                                                                    |

## Ver también

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
