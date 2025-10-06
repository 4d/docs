---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

チャットヘルパーを使用すると、メモリ内にメッセージのリストを保管しておくことができ、連続したプロンプトを行うことができます。

## プロパティ

| プロパティ名                | 型                                                                     | デフォルト値                                                 | 説明                                                                                                      |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `chat`                | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | Open AI との通信で使用されるチャットAPI インスタンス。                                                                       |
| `systemPrompt`        | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | チャットアシスタントのレスポンスをガイドするためのシステムプロンプトメッセージ。                                                                |
| `numberOfMessages`    | Integer                                                               | 15                                                     | チャット履歴に保持するメッセージの最大数。                                                                                   |
| `引数`                  | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | OpenAI チャット補完リクエスト用のパラメーター。                                                                             |
| `messages`            | [OpenAIMessage](OpenAIMessage.md) のコレクション                             | [] | そのチャットセッション内でやりとりされたメッセージのコレクション。                                                                       |
| `ツール`                 | Collection of [OpenAITool](OpenAITool.md)                             | [] | List of registered OpenAI tools for function calling.                                   |
| `autoHandleToolCalls` | Boolean                                                               | true                                                   | Boolean indicating whether tool calls are handled automatically using registered tools. |
| `lastErrors`          | Collection                                                            | -                                                      | Collection containing the last errors encountered during chat operations.               |

## Constructor

To create a new `OpenAIChatHelper` instance, it's best to use the `create()` method from the [OpenAI client's chat API](OpenAIChatAPI.md):

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```

This method creates a new chat helper with the specified system prompt and initializes it with default parameters. The system prompt defines the assistant's role and behavior throughout the conversation.

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
var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```

### reset()

**reset**()

Resets the chat context by clearing all messages and unregistering all tools. This effectively starts a fresh conversation while keeping the system prompt and parameters intact.

#### Reset Example

```4D
$chatHelper.prompt("Hello!")
$chatHelper.reset()  // Clear all previous messages and tools
```

### registerTool()

**registerTool**(*tool* : Object; *handler* : 4D.Function)

| 引数        | 型                           | 説明                                                                                       |
| --------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| *tool*    | Object                      | The tool definition object (or [OpenAITool](OpenAITool.md) instance)  |
| *handler* | 4D.Function | The function to handle tool calls (optional if defined inside *tool*) |

Registers a tool with its handler function for automatic tool call handling.
If the handler is not provided, the tool's `handler` property will be used.

The handler function receives an object containing the parameters passed from the OpenAI tool call. This object contains key-value pairs where the keys match the parameter names defined in the tool's schema, and the values are the actual arguments provided by the AI model.

#### Register Tool Example

```4D
// Define a simple tool
var $tool:={type: "function"; function: {name: "get_weather"; description: "Get current weather"; parameters: {type: "object"; properties: {location: {type: "string"; description: "City name"}}}}}

// Define a handler function that receives an argument { location: "a city" }
var $handler:=Formula(return "Sunny, 25°C in "+$1.location)

$chatHelper.registerTool($tool; $handler)
// or
$chatHelper.registerTool({tool: $tool; handler: $handler})
```

### registerTools()

**registerTools**(*toolsWithHandlers* : Variant)

| 引数                  | 型       | 説明                                                       |
| ------------------- | ------- | -------------------------------------------------------- |
| *toolsWithHandlers* | Variant | Object or Collection containing tools and their handlers |

Registers multiple tools at once. The parameter can be either an object with function names as keys, or a collection of tool objects.

#### Register Multiple Tools Example

```4D
// Simple approach: handlers defined directly in tools
var $weatherTool:={type: "function"; function: {name: "get_weather"; description: "Get current weather"; parameters: {type: "object"; properties: {location: {type: "string"; description: "City name"}}}}; \
    handler: Formula(return "Sunny, 25°C in "+$1.location)}
var $calculatorTool:={type: "function"; function: {name: "calculate"; description: "Perform calculations"; parameters: {type: "object"; properties: {expression: {type: "string"; description: "Math expression"}}}}; \
    handler: Formula(return String(Num($1.expression)))}

var $tools:={}
$tools.get_weather:=$weatherTool
$tools.calculate:=$calculatorTool

$chatHelper.registerTools($tools)

// Using collection format
$chatHelper.registerTools([$weatherTool; $calculatorTool])

// Alternative: separate tool definitions from handlers (useful for better code organization)
var $toolsWithSeparateHandlers:={}
$toolsWithSeparateHandlers.get_weather:={tool: $weatherToolDefinition; handler: $weatherHandler}
$toolsWithSeparateHandlers.calculate:={tool: $calculatorToolDefinition; handler: $calculatorHandler}

$chatHelper.registerTools($toolsWithSeparateHandlers)
```

### unregisterTool()

**unregisterTool**(*functionName* : Text)

| 引数             | 型    | 説明                                          |
| -------------- | ---- | ------------------------------------------- |
| *functionName* | Text | The name of the function tool to unregister |

Unregisters a specific tool by its function name. This removes the tool from the registered tools collection, clears its handler, and removes it from the parameters.

#### Unregister Tool Example

```4D
$chatHelper.registerTool($weatherTool; $weatherHandler)
$chatHelper.unregisterTool("get_weather")  // Remove the weather tool
```

### unregisterTools()

**unregisterTools**()

Unregisters all tools at once. This clears all tool handlers, empties the tools collection, and removes all tools from the parameters.

#### Unregister All Tools Example

```4D
$chatHelper.registerTools($multipleTools)
$chatHelper.unregisterTools()  // Remove all tools
```