---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

The `OpenAIChatCompletionParameters` class is designed to handle the parameters required for chat completions using the OpenAI API.

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Propriedades

| Propriedade             | Tipo       | Valor padrão    | Descrição                                                                                                                                                                                    |
| ----------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                 | Text       | `"gpt-4o-mini"` | ID of the model to use.                                                                                                                                                      |
| `stream`                | Parâmetros | `False`         | Whether to stream back partial progress. Se definido, os tokens serão enviados como somente dados. Fórmula de retorno de chamada necessária. |
| `max_completion_tokens` | Integer    | `0`             | The maximum number of tokens that can be generated in the completion.                                                                                                        |
| `n`                     | Integer    | `1`             | How many completions to generate for each prompt.                                                                                                                            |
| `temperature`           | Real       | `-1`            | What sampling temperature to use, between 0 and 2. Higher values make the output more random, while lower values make it more focused and deterministic.     |
| `store`                 | Parâmetros | `False`         | Whether or not to store the output of this chat completion request.                                                                                                          |

## Veja também

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
