---
id: openaitool
title: OpenAITool
---

# OpenAITool

La clase `OpenAITool` representa una herramienta que puede ser llamada por el modelo OpenAI durante una conversación. Las herramientas permiten a la IA realizar funciones específicas e interactuar con sistemas externos o recuperar información.

Ver [OpenAIMessage](OpenAIMessage.md) para ver cómo responder a una llamada de herramienta.

> **Nota:** las llamadas a herramientas se gestionan automáticamente cuando se utiliza [OpenAIChatHelper](OpenAIChatHelper.md) con `autoHandleToolCalls` activado.

## Propiedades

### Propiedades root

| Propiedad | Tipo    | Por defecto  | Descripción                                                                                                                               |
| --------- | ------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `tipo`    | Text    | `"function"` | El tipo de herramienta. Actualmente soporta los tipos `"function"`, `"custom"`, y otros tipos integrados. |
| `strict`  | Boolean | `False`      | Aplicar o no una validación estricta del esquema para los parámetros de función.                                          |

### Propiedades comunes

| Propiedad     | Tipo | Descripción                                                                                   |
| ------------- | ---- | --------------------------------------------------------------------------------------------- |
| `name`        | Text | El nombre de la herramienta, que funciona como identificador.                 |
| `descripción` | Text | Descripción de la herramienta para ayudar al LLM a decidir cuándo utilizarla. |

### Propiedades específicas de las funciones

| Propiedad    | Tipo   | Descripción                                                                             |
| ------------ | ------ | --------------------------------------------------------------------------------------- |
| `parámetros` | Object | Definición de los parámetros de la función en formato del esquema JSON. |

## Constructor

### new()

**new**(*object* : Object) : OpenAITool

| Parámetros | Tipo       | Descripción                               |
| ---------- | ---------- | ----------------------------------------- |
| *object*   | Object     | Objeto de configuración de la herramienta |
| Resultado  | OpenAITool | Nueva instancia de OpenAITool             |

Crea una nueva instancia de OpenAITool. El constructor acepta tanto el formato simplificado como el formato de la API OpenAI.

#### Formatos soportados

**Formato simplificado:**

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

**Formato de la API OpenAI**

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

## Integración con los generadores de respuestas del chat

Las herramientas se utilizan normalmente con la propiedad `OpenAIChatCompletionsParameters.tools`:

```4d
var $parameters := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
  model: "gpt-4o-mini"; \
  tools: [$tool1; $tool2; $tool3] \
})
```

> **Nota:** puede pasar objetos planos directamente, se convertirán automáticamente en instancias `OpenAITool`. No es necesario crear explícitamente objetos `OpenAITool`.

## Ver también

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) - Para la configuración de la herramienta
- [OpenAIChatHelper](OpenAIChatHelper.md) - Para la gestión automática de llamadas a herramientas
- [OpenAIMessage](OpenAIMessage.md) - Para respuestas de llamadas a herramientas