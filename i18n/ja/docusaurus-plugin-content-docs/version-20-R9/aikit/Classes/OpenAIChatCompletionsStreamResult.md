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

| プロパティ        | 型                               | 説明                                                               |
| ------------ | ------------------------------- | ---------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | ストリーミングデータがオブジェクトとして正常にデコードされた場合には `True` を返します。                 |
| `terminated` | Boolean                         | HTTP リクエストが終了したかどうかを示すブール値。 言い換えると `onTerminate` が呼ばれたかどうかを表します。 |
