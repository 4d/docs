---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

チャットヘルパーを使用すると、メモリ内にメッセージのリストを保管しておくことができ、連続したプロンプトを行うことができます。

## プロパティ

| プロパティ名             | 型                                                                     | デフォルト値                                                 | 説明                                       |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| `chat`             | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | Open AI との通信で使用されるチャットAPI インスタンス。        |
| `systemPrompt`     | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | チャットアシスタントのレスポンスをガイドするためのシステムプロンプトメッセージ。 |
| `numberOfMessages` | Integer                                                               | 5                                                      | チャット履歴に保持するメッセージの最大数。                    |
| `引数`               | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | OpenAI チャット補完リクエスト用のパラメーター。              |
| `messages`         | [OpenAIMessage](OpenAIMessage.md) のコレクション                             | [] | そのチャットセッション内でやりとりされたメッセージのコレクション。        |

## 関数

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| 引数       | 型                                                             | 説明                          |
| -------- | ------------------------------------------------------------- | --------------------------- |
| *prompt* | Text                                                          | Open AI チャットに送信するテキストプロンプト。 |
| 戻り値      | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | チャットから返されたチャット補完結果。         |

ユーザープロンプトをチャットに送信し、対応する補完の結果を返します。

#### 使用例

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")

var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```