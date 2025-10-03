---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

The chat helper allow to keep a list of messages in memory and make consecutive prompt.

## Properties

| Property Name        | Type                        | Default Value                    | Description                                                                         |
|----------------------|-----------------------------|----------------------------------|-------------------------------------------------------------------------------------|
| `chat`               | [OpenAIChatAPI](OpenAIChatAPI.md)     | -  | The chat API instance used for communication with OpenAI.                          |
| `systemPrompt`       | [OpenAIMessage](OpenAIMessage.md)   | -   | The system prompt message that guides the chat assistant's responses.  |
| `numberOfMessages`   | Integer      | 15  | The maximum number of messages to retain in the chat history.|
| `parameters` | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | - | The parameters for the OpenAI chat completion request.  |
| `messages`           | Collection of [OpenAIMessage](OpenAIMessage.md)  | []  | The collection of messages exchanged in the chat session.   |
| `tools`              | Collection of [OpenAITool](OpenAITool.md)    | []   | List of registered OpenAI tools for function calling.    |
| `autoHandleToolCalls`| Boolean      | True  | Boolean indicating whether tool calls are handled automatically using registered tools. |
| `lastErrors`         | Collection     | -| Collection containing the last errors encountered during chat operations. |


## Constructor

To create a new `OpenAIChatHelper` instance, it's best to use the `create()` method from the [OpenAI client's chat API](OpenAIChatAPI.md):

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```

This method creates a new chat helper with the specified system prompt and initializes it with default parameters. The system prompt defines the assistant's role and behavior throughout the conversation.


## Functions

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Parameter        | Type  | Description                               |
|------------------|-------|-------------------------------------------|
| *prompt*         |  Text | The text prompt to send to OpenAI chat.   |
| Function result| [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | The completion result returned by the chat. |

Sends a user prompt to the chat and returns the corresponding completion result.

#### Example Usage

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

| Parameter        | Type        | Description                                           |
|------------------|-------------|-------------------------------------------------------|
| *tool*           | Object      | The tool definition object (or [OpenAITool](OpenAITool.md) instance)  |
| *handler*        | 4D.Function | The function to handle tool calls (optional if defined inside *tool*)         |

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

| Parameter             | Type    | Description                                                    |
|-----------------------|---------|----------------------------------------------------------------|
| *toolsWithHandlers*   | Variant | Object or Collection containing tools and their handlers       |

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

| Parameter        | Type | Description                                    |
|------------------|------|------------------------------------------------|
| *functionName*   | Text | The name of the function tool to unregister   |

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