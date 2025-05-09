---
id: openaichatcompletionsmessagesapi
title: OpenAIChatCompletionsMessagesAPI
---

# OpenAIChatCompletionsMessagesAPI

`OpenAIChatCompletionsMessagesAPI` クラスはチャット補完のメッセージを管理するためにOpenAI API と相互通信するように設計されています。

## 関数

### list()

**list**(*completionID* : Text; *parameters* : OpenAIChatCompletionsMessagesParameters) : Variant

| 引数             | 型                                         | 説明                              |
| -------------- | ----------------------------------------- | ------------------------------- |
| *completionID* | Text                                      | メッセージを取得したいチャット補完のID。           |
| *parameters*   | `OpenAIChatCompletionsMessagesParameters` | レスポンスをフィルターしてカスタマイズするためのパラメーター。 |
| 戻り値            | Variant                                   | チャット補完に関連づけられた取得されたメッセージ。       |

The `list()` function retrieves messages associated with a specific chat completion ID. It throws an error if the `completionID` is empty. If the *parameters* argument is not an instance of `OpenAIChatCompletionsMessagesParameters`, it will create a new instance using the provided parameters.

https://platform.openai.com/docs/api-reference/chat/getMessages
