---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

L'assistant de chat permet de conserver une liste de messages en mémoire et d'effectuer des invites consécutives.

## Propriétés

| Nom de propriété      | Type                                                                  | Valeur par défaut                                      | Description                                                                                             |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `chat`                | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | L'instance API de chat utilisée pour la communication avec OpenAI.                      |
| `systemPrompt`        | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | Le message d'invite du système qui guide les réponses de l'assistant de conversation.   |
| `numberOfMessages`    | Integer                                                               | 15                                                     | Le nombre maximum de messages à conserver dans l'historique des chats.                  |
| `paramètres`          | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | Les paramètres pour la requête de complétion du chat OpenAI.                            |
| `messages`            | Collection of [OpenAIMessage](OpenAIMessage.md)                       | [] | La collection de messages échangés dans la session de chat.                             |
| `tools`               | Collection of [OpenAITool](OpenAITool.md)                             | [] | List of registered OpenAI tools for function calling.                                   |
| `autoHandleToolCalls` | Boolean                                                               | True                                                   | Boolean indicating whether tool calls are handled automatically using registered tools. |
| `lastErrors`          | Collection                                                            | -                                                      | Collection containing the last errors encountered during chat operations.               |

## Constructor

To create a new `OpenAIChatHelper` instance, it's best to use the `create()` method from the [OpenAI client's chat API](OpenAIChatAPI.md):

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```

This method creates a new chat helper with the specified system prompt and initializes it with default parameters. The system prompt defines the assistant's role and behavior throughout the conversation.

## Fonctions

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Paramètres | Type                                                          | Description                                                        |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| *prompt*   | Text                                                          | Texte d'invite à envoyer au chat de l'OpenAI.      |
| Résultat   | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | Le résultat de la complétion retourné par le chat. |

Envoie une invite utilisateur à la discussion et retourne le résultat de complétion correspondant.

#### Exemple d'utilisation

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

| Paramètres | Type                        | Description                                                                              |
| ---------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| *tool*     | Object                      | The tool definition object (or [OpenAITool](OpenAITool.md) instance)  |
| *handler*  | 4D.Function | The function to handle tool calls (optional if defined inside *tool*) |

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

| Paramètres          | Type    | Description                                              |
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

| Paramètres     | Type | Description                                 |
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