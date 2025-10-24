---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

The `OpenAIChatCompletionParameters` class is designed to handle the parameters required for chat completions using the OpenAI API.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad               | Tipo       | Valor por defecto | Descripción                                                                                                                                                                                 |
| ----------------------- | ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                 | Text       | `"gpt-4o-mini"`   | ID del modelo a utilizar.                                                                                                                                                   |
| `stream`                | Boolean    | `False`           | Si se retransmite el progreso parcial. Si se define, los tokens se enviarán solo como datos. Fórmula de retrollamada necesaria.             |
| `stream_options`        | Object     | `Null`            | Property for stream=True. Por ejemplo: `{include_usage: True}`                                                                                              |
| `max_completion_tokens` | Integer    | `0`               | The maximum number of tokens that can be generated in the completion.                                                                                                       |
| `n`                     | Integer    | `1`               | How many completions to generate for each prompt.                                                                                                                           |
| `temperature`           | Real       | `-1`              | Qué temperatura de muestreo utilizar, entre 0 y 2. Higher values make the output more random, while lower values make it more focused and deterministic.    |
| `store`                 | Boolean    | `False`           | Whether or not to store the output of this chat completion request.                                                                                                         |
| `reasoning_effort`      | Text       | `Null`            | Constrains effort on reasoning for reasoning models. Los valores soportados actualmente son `"low"`, `"medium"` y `"high"`.                                 |
| `response_format`       | Object     | `Null`            | An object specifying the format that the model must output. Compatible with structured outputs.                                                             |
| `herramientas`          | Collection | `Null`            | A list of tools ([OpenAITool](OpenAITool.md)) the model may call. Only "function" type is supported.                                     |
| `tool_choice`           | Variant    | `Null`            | Controls which (if any) tool is called by the model. Puede ser `"none"`, `"auto"`, `"required"`, o especificar una herramienta concreta. |
| `prediction`            | Object     | `Null`            | Static predicted output content, such as the content of a text file that is being regenerated.                                                                              |

### Propiedades de retrollamada asíncrona

| Propiedad                                 | Tipo                        | Descripción                                                                                                                                      |
| ----------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onData` (o `formula`) | 4D.Function | A function to be called asynchronously when receiving data chunk. Asegúrese de que el proceso actual no termina. |

`onData` recibirá como argumento un [OpenAIChatCompletionsStreamResult](./OpenAIChatCompletionsStreamResult.md).

See [OpenAIParameters](./OpenAIParameters.md) for other callback properties.

## Response Format

El parámetro `response_format` le permite especificar el formato que el modelo debe salir. This is particularly useful when you need structured data or want to ensure the response follows a specific format.

### Tipos de formato de respuesta soportados

#### 1. Formato de texto (por defecto)

The default response format returns plain text:

```4d
var $params := cs.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: {type: "text"} \
})
```

#### 2. Formato de objetos JSON

Forces the model to respond with valid JSON:

```4d
var $params := cs.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: {type: "json_object"} \
})

var $messages := [ \
    cs.OpenAIMessage.new({ \
        role: "system"; \
        content: "You are a helpful assistant that always responds in JSON format." \
    }) \
]
$messages.push({ \
    role: "user"; \
    content: "Give me information about the number 42 in JSON format with keys 'significance' and 'facts'." \
})

$result := $client.chat.completions.create($messages; $params)
```

#### 3. Formato de esquema JSON (salidas estructuradas)

For precise control over the JSON structure, you can define a schema:

```4d
var $jsonSchema := { \
    type: "object"; \
    properties: { \
        name: {type: "string"}; \
        age: {type: "integer"}; \
        occupation: {type: "string"}; \
        city: {type: "string"} \
    }; \
    required: ["name"; "age"; "occupation"; "city"]; \
    additionalProperties: False \
}

var $params := cs.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: { \
        type: "json_schema"; \
        json_schema: { \
            name: "person_info"; \
            description: "Information about a person"; \
            schema: $jsonSchema; \
            strict: True \
        } \
    } \
})

var $messages := [{role: "system"; content: "You are a helpful assistant."}]
$messages.push({ role: "user"; content: "Generate information about a person named John Smith."})

$result := $client.chat.completions.create($messages; $params)
```

### Propiedades del esquema JSON

Cuando se utiliza el tipo `json_schema`, puede especificar:

- **`name`**: un nombre para el esquema
- **`description`**: una descripción de lo que representa el esquema
- **`schema`**: la definición de esquema JSON
- **`strict`**: si se debe hacer cumplir estrictamente el esquema

### Notas Importantes

- Not all models support structured outputs (json_object or json_schema), so check model capabilities before using them.
- Cuando utilice el formato `json_object`, deberá incluir instrucciones en el mensaje del sistema para responder en formato JSON
- El formato `json_schema` ofrece el mayor control y garantiza que la respuesta coincida exactamente con la estructura especificada
- Invalid JSON responses will result in an error when using JSON formats
- JSON schema validation ensures type safety and required field presence

## Ver también

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
