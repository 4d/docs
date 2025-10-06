---
id: openaitool
title: OpenAITool
---

# OpenAITool

The `OpenAITool` class represents a tool that can be called by the OpenAI model during a conversation. Tools allow the AI to perform specific functions and interact with external systems or retrieve information.

See [OpenAIMessage](OpenAIMessage.md) to see how to responds to a tool call.

> **Note:** The tool calls are handled automatically when using [OpenAIChatHelper](OpenAIChatHelper.md) with `autoHandleToolCalls` enabled.

## Propriétés

### Root Properties

| Propriété | Type    | Par défaut   | Description                                                                                                              |
| --------- | ------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`    | Text    | `"function"` | The type of tool. Currently supports `"function"`, `"custom"`, and other built-in types. |
| `strict`  | Boolean | `False`      | Whether to enforce strict schema validation for function parameters.                                     |

### Common Properties

| Propriété     | Type | Description                                                                    |
| ------------- | ---- | ------------------------------------------------------------------------------ |
| `name`        | Text | The name of the tool, which works as an identifier.            |
| `description` | Text | Description of the tool to help the LLM decide when to use it. |

### Function-specific Properties

| Propriété    | Type   | Description                                                                      |
| ------------ | ------ | -------------------------------------------------------------------------------- |
| `paramètres` | Object | Parameters definition for the function using JSON schema format. |

## Constructor

### new()

**new**(*object* : Object) : OpenAITool

| Paramètres | Type       | Description                       |
| ---------- | ---------- | --------------------------------- |
| *object*   | Object     | Configuration object for the tool |
| Résultat   | OpenAITool | New instance of OpenAITool        |

Creates a new OpenAITool instance. The constructor accepts both simplified format and OpenAI API format.

#### Supported formats

**Simplified format:**

```4d
var $tool := cs.OpenAITool.new({ \
  name: "get_weather"; \
  description: "Get current weather for a location"; \
  parameters: { \
    type: "object"; \
    properties: { \
      location: {type: "string"; description: "City name"} \
    }; \
    required: ["location"] \
  } \
})
```

**OpenAI API format:**

```4d
var $tool := cs.OpenAITool.new({ \
  type: "function"; \
  strict: True; \
  function: { \
    name: "get_weather"; \
    description: "Get current weather for a location"; \
    parameters: { \
      type: "object"; \
      properties: { \
        location: {type: "string"; description: "City name"} \
      }; \
      required: ["location"] \
    } \
  } \
})
```

## Integration with Chat Completions

Tools are typically used with the `OpenAIChatCompletionsParameters.tools` property:

```4d
var $parameters := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
  model: "gpt-4o-mini"; \
  tools: [$tool1; $tool2; $tool3] \
})
```

> **Note:** You can pass plain objects directly - they will be automatically converted to `OpenAITool` instances. There's no need to explicitly create `OpenAITool` objects.

## Voir aussi

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) - For tool configuration
- [OpenAIChatHelper](OpenAIChatHelper.md) - For automatic tool call handling
- [OpenAIMessage](OpenAIMessage.md) - For tool call responses