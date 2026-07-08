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

### オーバーライドされたプロパティ

| プロパティ        | 型       | 説明                                                                                                                  |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `success`    | Boolean | ストリーミングデータがオブジェクトとして正常にデコードされた場合には `True` を返します。                                                                    |
| `terminated` | Boolean | HTTP リクエストが終了したかどうかを示すブール値。 言い換えると `onTerminate` が呼ばれたかどうかを表します。                                                    |
| `usage`      | Object  | ストリームデータからのトークン使用状況を返します(`stream_options.include_usage` が`True` に設定されていた場合には最終チャンクにおいてのみ利用可能です)。 |

### usage

`usage` はトークン使用状況を格納したオブジェクトを返し、これはリクエスト引数において`stream_options.include_usage: True` に設定されている場合に最終のストリーミングチャンク内でのみ利用可能です。

この構造は [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage) と同じです:

| フィールド                       | 型       | 説明                                           |
| --------------------------- | ------- | -------------------------------------------- |
| `prompt_tokens`             | Integer | プロンプト内のトークンの数。                               |
| `completion_tokens`         | Integer | 補完内でのトークンの数。                                 |
| `total_tokens`              | Integer | 使用されたトークンの総数(プロンプト + 補完)。 |
| `prompt_tokens_details`     | Object  | プロンプトトークンの詳細な内訳(オプション)。   |
| `completion_tokens_details` | Object  | 補完トークンの詳細な内訳(オプション)。      |

> **Note:** ストリーミングのレスポンス内に使用状況を受信するためには、リクエストパラメーター内で`stream_options: {include_usage: True}` に設定する必要があります。 詳細については、[OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) を参照してください。
