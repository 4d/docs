---
id: openaichatapi
title: OpenAIChatAPI
---

# OpenAIChatAPI

`OpenAIChatAPI` クラスはOpenAiI のチャットベースの機能とやりとるするためのインターフェースを提供し、補完機能とビジョン機能を活用します。

## プロパティ

| プロパティ         | 型                                                       | 説明                                                                      |
| ------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| `completions` | [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md) | チャット補完リクエストを管理するインスタンス。                                                 |
| `vision`      | [OpenAIVision](OpenAIVision.md)                         | A helper instance that handles vision-related requests. |

## 関数

### create()

**create**(*systemPrompt* : Text) : OpenAIChatHelper

| 引数             | 型                                       | 説明                        |
| -------------- | --------------------------------------- | ------------------------- |
| *systemPrompt* | Text                                    | チャットを初期化するシステムプロント。       |
| 戻り値            | [OpenAIChatHelper](OpenAIChatHelper.md) | チャットのやり取りを管理するヘルパーインスタンス。 |

#### 使用例

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```