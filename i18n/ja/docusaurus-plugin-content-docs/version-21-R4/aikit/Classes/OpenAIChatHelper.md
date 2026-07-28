---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

チャットヘルパーを使用すると、メモリ内にメッセージのリストを保管しておくことができ、連続したプロンプトを行うことができます。

## プロパティ

| プロパティ名                | 型                                                                     | デフォルト値                                                 | 説明                                          |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| `chat`                | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | Open AI との通信で使用されるチャットAPI インスタンス。           |
| `systemPrompt`        | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | チャットアシスタントのレスポンスをガイドするためのシステムプロンプトメッセージ。    |
| `numberOfMessages`    | Integer                                                               | 15                                                     | チャット履歴に保持するメッセージの最大数。                       |
| `parameters`          | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | OpenAI チャット補完リクエスト用のパラメーター。                 |
| `messages`            | [OpenAIMessage](OpenAIMessage.md) のコレクション                             | [] | そのチャットセッション内でやりとりされたメッセージのコレクション。           |
| `tools`               | [OpenAITool](OpenAITool.md) のコレクション                                   | [] | 関数呼び出し用に登録されたOpenAI ツールの一覧。                 |
| `autoHandleToolCalls` | Boolean                                                               | true                                                   | 登録されたツールを使用してツール呼び出しを自動的に管理するかどうかをあらわすブール値。 |
| `lastErrors`          | Collection                                                            | -                                                      | チャット操作中に発生した最後のエラーを格納したコレクション。              |

## コンストラクター

新しい `OpenAIChatHelper` インスタンスを作成するためには、[OpenAI クライアントのチャットAPI](OpenAIChatAPI.md)の `create()` メソッドを使用するのが最適です:

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```

このメソッドは指定されたシステムプロンプトで新しいチャットヘルパーを作成し、デフォルトの引数で初期化します。 このシステムプロンプトが会話の間全体の、アシスタントの役割と振る舞いを定義します。

## 関数

### prompt()

**prompt**(*prompt* : Variant) : OpenAIChatCompletionsResult

| 引数       | 型                                                             | 説明                                                                                                                      |
| -------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| *prompt* | Text または [OpenAIMessage](OpenAIMessage.md)                    | OpenAI チャットに送信するテキストプロンプト、またはより複雑なメッセージ(例: 画像またはファイルつきのもの)の場合にはOpenAIMessage オブジェクト。 |
| 戻り値      | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | チャットから返されたチャット補完結果。                                                                                                     |

ユーザープロンプトをチャットに送信し、対応する補完の結果を返します。 単純なテキスト文字列を渡すか、あるいは画像やファイルなどを含むようなより高度なシナリオに対しては [OpenAIMessage](OpenAIMessage.md) オブジェクトを渡すこともできます。

#### 使用例

```4D
// 単純なテキストプロンプト
var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")

// より高度なシナリオ(例: 画像付き)において OpenAIMessage を使用
var $message:=cs.AIKit.OpenAIMessage.new({role: "user"; content: "What's in this image?"})
$message.addImageURL("https://example.com/photo.jpg"; "high")
$result:=$chatHelper.prompt($message)

// OpenAIMessage を使用してファイルを送信
var $fileMessage:=cs.AIKit.OpenAIMessage.new({role: "user"; content: "Analyze this document"})
$fileMessage.addFileId($uploadedFile.id)
$result:=$chatHelper.prompt($fileMessage)
```

### reset()

**reset**()

全てのメッセージを消去し、全てのツールの登録を解除することで、チャットコンテキストをリセットします。 これにより、システムのプロンプトとパラメータをそのままにしながら、効果的に新しい会話を始めることができます。

#### リセットの例

```4D
$chatHelper.prompt("Hello!")
$chatHelper.reset()  // 以前のメッセージとツールを全て消去
```

### registerTool()

**registerTool**(*tool* : Object; *handler* : Variant)

| 引数        | 型      | 説明                                                                                                                  |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| *tool*    | Object | ツール定義オブジェクト(あるいは[OpenAITool](OpenAITool.md) インスタンス)                                              |
| *handler* | Object | ツール呼び出しを管理する関数(4D.Function またはオブジェクト)、*tool* 内の *handler* プロパティで定義されている場合にはオプション |

自動ツール呼び出し関数のために、ツールとそのハンドラ関数を登録します。

*handler* 引数には以下のものを渡すことができます:

- **4D.Function**: 直接ハンドラ関数
- **Object**: ツール関数名と一致するフォーミュラプロパティを格納しているオブジェクト

ハンドラー関数はOpenAI ツール呼び出しから渡された引数を格納しているオブジェクトを受け取ります。 オブジェクトは、ツールのスキーマで定義されたパラメーター名とキーが一致するキーと、AI モデルから提供された実際の引数である値との、キーと値のペアを格納しています。

#### ツールを登録する例題

```4D
// Example 1: 直接ハンドラを使用したシンプルな登録
var $tool:={type: "function"; function: {name: "get_weather"; description: "Get current weather"; parameters: {type: "object"; properties: {location: {type: "string"; description: "City name"}}}}}
var $handler:=Formula(return "Sunny, 25°C in "+$1.location)

$chatHelper.registerTool($tool; $handler)

// Example 2: プロパティを持つtool オブジェクトを使用(この場合第2に引数は不要です)
var $tool:={name: "calculate"; description: "Perform calculations"; handler: Formula(return String(Num($1.expression)))}
$chatHelper.registerTool($tool)

// Example 3: オブジェクト記法を使用する
$chatHelper.registerTool({tool: $tool; handler: $handler})

// Example 4: ツール名と合致するフォーミュラを持ったオブジェクトとしてのハンドラ
var $tool:={name: "getTime"; description: "Get current time"}
var $handlerObj:=cs.MyTimeTool.new() // getTime 関数を持つクラス
$chatHelper.registerTool($tool; $handlerObj)
```

### registerTools()

**registerTools**(*toolsWithHandlers* : Variant)

| 引数                  | 型       | 説明                              |
| ------------------- | ------- | ------------------------------- |
| *toolsWithHandlers* | Variant | ツールとのそのハンドラを格納したオブジェクトまたはコレクション |

複数のツールを一度に登録します。 引数には以下のものを渡すことができます:

- **コレクション**: (ハンドラが埋め込んである、あるいは分離してある)ツールオブジェクトのコレクション
- **オブジェクト**: 関数名がツール定義にマッピングされているキーとするオブジェクト
- **`tools` 属性を持つオブジェクト**: `tools` コレクションと、ツール名に合致するフォーミュラプロパティを格納しているオブジェクト

#### 複数のツールを登録する例題

##### 例 1: ツール内のハンドルを使用したコレクションフォーマット

```4D
var $weatherTool:={name: "getWeather"; description: "Get current weather"; handler: Formula(return "Sunny, 25°C in "+$1.location)}
var $calculatorTool:={name: "calculate"; description: "Perform calculations"; handler: Formula(return String(Num($1.expression)))}

$chatHelper.registerTools([$weatherTool; $calculatorTool])
```

##### 例 2: 別個のツールとハンドラを使用したオブジェクトフォーマット

```4D
var $toolsWithSeparateHandlers:={}
$toolsWithSeparateHandlers.getWeather:={tool: $weatherToolDefinition; handler: $weatherHandler}
$toolsWithSeparateHandlers.calculate:={tool: $calculatorToolDefinition; handler: $calculatorHandler}

$chatHelper.registerTools($toolsWithSeparateHandlers)
```

##### 例 3: tools コレクション属性とformula プロパティを持ったオブジェクト

MyTools クラス:

```4D

Class constructor
    this.tools:=[{name: "getWeather"; description: "Get current weather"}; \
                 {name: "getTime"; description: "Get current time"}]  // ツール定義のコレクション

Function getWeather($parameters: Object)
    return "Sunny, 25°C"

Function getTime($parameters: Object)
    return String(Current time)
```

```4D
$chatHelper.registerTools(cs.MyTools.new())
```

##### 例 4: ツールをプロパティにもつシンプルなオブジェクトフォーマット

```4D
var $tools:={}
$tools.getWeather:=$weatherTool  // handler プロパティを持つTool 
$tools.calculate:=$calculatorTool  // handler プロパティを持つTool

$chatHelper.registerTools($tools)
```

### unregisterTool()

**unregisterTool**(*functionName* : Text)

| 引数             | 型    | 説明              |
| -------------- | ---- | --------------- |
| *functionName* | Text | 登録を解除したいツールの関数名 |

特定のツールをその関数名で指定して登録解除します。 これによってツールは登録されたツールのコレクションから削除され、ハンドラも消去され、引数からも削除されます。

#### ツールを登録解除する例

```4D
$chatHelper.registerTool($weatherTool; $weatherHandler)
$chatHelper.unregisterTool("get_weather")  // weather ツールを削除
```

### unregisterTools()

**unregisterTools**()

全てのツールを一度に登録解除します。 これはすべてのツールハンドラを消去し、tools コレクションをからにし、そして引数からも全てのツールを削除します。

#### 全てのツールを登録解除する例

```4D
$chatHelper.registerTools($multipleTools)
$chatHelper.unregisterTools()  // 全てのツールを削除
```
