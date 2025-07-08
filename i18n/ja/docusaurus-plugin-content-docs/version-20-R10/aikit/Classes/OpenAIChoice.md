---
id: openaichoice
title: OpenAIChoice
---

# OpenAIChoice

`OpenAIChoice` クラスはOpen AI API レスポンスによってなされた選択を表し、その選択についての情報を格納しています。これには終了した理由、インデックス、メッセージ、またオプションとしてストリーミングレスポンスの部分的メッセージなどの情報も含まれています。

## プロパティ

| プロパティ           | 型                                 | 説明                                                                                            |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| `message `      | [OpenAIMessage](OpenAIMessage.md) | 選択に関連づけられたメッセージ。                                                                              |
| `delta`         | [OpenAIMessage](OpenAIMessage)    | ストリームレスポンスに使用された部分的なメッセージ(stream: True.md) |
| `finish_reason` | Text                              | 選択が終了した理由(例: "stop")。                                      |
| `index`         | Integer                           | レスポンス内での選択のインデックス。                                                                            |
