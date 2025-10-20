---
id: openaitool
title: OpenAITool
---

# OpenAITool

The `OpenAITool` class represents a tool that can be called by the OpenAI model during a conversation. Tools allow the AI to perform specific functions and interact with external systems or retrieve information.

See [OpenAIMessage](OpenAIMessage.md) to see how to responds to a tool call.

> **Note:** The tool calls are handled automatically when using [OpenAIChatHelper](OpenAIChatHelper.md) with `autoHandleToolCalls` enabled.

## Propiedades

### Root Properties

| Propiedad | Tipo    | Por defecto  | Descripción                                                                                                                    |
| --------- | ------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `tipo`    | Text    | `"function"` | El tipo de herramienta. Currently supports `"function"`, `"custom"`, and other built-in types. |
| `strict`  | Boolean | `False`      | Whether to enforce strict schema validation for function parameters.                                           |

### Propiedades comunes

| Propiedad     | Tipo | Descripción                                                                    |
| ------------- | ---- | ------------------------------------------------------------------------------ |
| `name`        | Text | The name of the tool, which works as an identifier.            |
| `descripción` | Text | Description of the tool to help the LLM decide when to use it. |

### Function-specific Properties

| Propiedad    | Tipo   | Descripción                                                                      |
| ------------ | ------ | -------------------------------------------------------------------------------- |
| `parámetros` | Object | Parameters definition for the function using JSON schema format. |

## Constructor

### new()

**new**(*object* : Object) : OpenAITool

| Parámetros | Tipo       | Descripción                               |
| ---------- | ---------- | ----------------------------------------- |
| *object*   | Object     | Objeto de configuración de la herramienta |
| Resultado  | OpenAITool | New instance of OpenAITool                |

Crea una nueva instancia de OpenAITool. The constructor accepts both simplified format and OpenAI API format.

#### Formatos soportados

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

Las herramientas se utilizan normalmente con la propiedad `OpenAIChatCompletionsParameters.tools`:

```4d
var $parameters := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
  model: "gpt-4o-mini"; \
  tools: [$tool1; $tool2; $tool3] \
})
```

> **Nota:** puede pasar objetos planos directamente, se convertirán automáticamente en instancias `OpenAITool`. No es necesario crear explícitamente objetos `OpenAITool`.

## Ver también

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) - For tool configuration
- [OpenAIChatHelper](OpenAIChatHelper.md) - For automatic tool call handling
- [OpenAIMessage](OpenAIMessage.md) - For tool call responses