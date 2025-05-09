---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

The `OpenAIChatCompletionParameters` class is designed to handle the parameters required for chat completions using the OpenAI API.

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ                   | 型       | デフォルト値          | 説明                                                                                                                                                                                       |
| ----------------------- | ------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                 | Text    | `"gpt-4o-mini"` | ID of the model to use.                                                                                                                                                  |
| `stream`                | Boolean | `false`         | Whether to stream back partial progress. If set, tokens will be sent as data-only. Callback formula required.                            |
| `max_completion_tokens` | Integer | `0`             | The maximum number of tokens that can be generated in the completion.                                                                                                    |
| `n`                     | Integer | `1`             | How many completions to generate for each prompt.                                                                                                                        |
| `temperature`           | Real    | `-1`            | What sampling temperature to use, between 0 and 2. Higher values make the output more random, while lower values make it more focused and deterministic. |
| `store`                 | Boolean | `false`         | Whether or not to store the output of this chat completion request.                                                                                                      |

## 参照

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
