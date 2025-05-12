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

`list()` 関数は特定のチャット補完ID に割り当てられたメッセージを取得します。 この関数は`completionID` が空の場合、エラーを生成します。 *parameters* 引数が `OpenAIChatCompletionsMessagesParameters` のインスタンスではない場合、提供された引数を使用して新たなインスタンスを作成します。

https://platform.openai.com/docs/api-reference/chat/getMessages
