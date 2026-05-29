---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## 継承元

- [OpenAIResult](OpenAIResult.md)

## プロパティ

| プロパティ  | 型      | 説明                           |
| ------ | ------ | ---------------------------- |
| `data` | Object | サーバーから送信されたストリームデータを格納しています。 |

## 計算プロパティ

| プロパティ     | 型                               | 説明                                                               |
| --------- | ------------------------------- | ---------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | `delta` メッセージ付きの選択データを返します。                                      |
| `choices` | Collection                      | `delta` メッセージ付きの[OpenAIChoice](OpenAIChoice.md) データのコレクションを返します。 |

### Overridden properties

| プロパティ        | 型       | 説明                                                                                                                                                                                |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`    | Boolean | ストリーミングデータがオブジェクトとして正常にデコードされた場合には `True` を返します。                                                                                                                                  |
| `terminated` | Boolean | HTTP リクエストが終了したかどうかを示すブール値。 言い換えると `onTerminate` が呼ばれたかどうかを表します。                                                                                                                  |
| `usage`      | Object  | Returns token usage information from the stream data (only available in the final chunk when `stream_options.include_usage` is set to `True`). |

### usage

The `usage` property returns an object containing token usage information, available only in the final streaming chunk when enabled via `stream_options.include_usage: True` in the request parameters.

The structure is the same as [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage):

| フィールド                       | 型       | 説明                                                                            |
| --------------------------- | ------- | ----------------------------------------------------------------------------- |
| `prompt_tokens`             | Integer | Number of tokens in the prompt.                               |
| `completion_tokens`         | Integer | Number of tokens in the completion.                           |
| `total_tokens`              | Integer | Total tokens used (prompt + completion).   |
| `prompt_tokens_details`     | Object  | Breakdown of prompt tokens (optional).     |
| `completion_tokens_details` | Object  | Breakdown of completion tokens (optional). |

> **Note:** To receive usage information in streaming responses, you must set `stream_options: {include_usage: True}` in your request parameters. See [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) for details.
