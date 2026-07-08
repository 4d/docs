---
id: openaivisionhelper
title: OpenAIVisionHelper
---

# OpenAIVisionHelper

## 関数

### prompt()

**prompt**(*prompt*: Test; *parameters* : OpenAIChatCompletionsParameters)

| 引数           | 型                                                                     | 説明                             |
| ------------ | --------------------------------------------------------------------- | ------------------------------ |
| *prompt*     | Text                                                                  | OpenAI チャットAPI に送信するテキストプロンプト。 |
| *parameters* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | チャット補完リクエスト用の任意のパラメーター。        |
| 戻り値          | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)         | ビジョンの結果。                       |

OpenAI API にプロンプトとそれに付随した画像URL を送信します。またオプションとしてチャット補完用のパラメーターも受付ます。

#### 使用例

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")

var $result:=$helper.prompt("Could you describe?")

$result:=$helper.prompt("Have any red element?"; {model: "gpt-4o-mini"; max_completion_tokens: 100 })
```