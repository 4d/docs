---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

La clase `OpenAIChatCompletionParameters` está diseñada para manejar los parámetros requeridos para completar chats utilizando la API OpenAI.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad               | Tipo       | Valor por defecto | Descripción                                                                                                                                                                                                              |
| ----------------------- | ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                 | Text       | `"gpt-4o-mini"`   | ID del modelo a utilizar.                                                                                                                                                                                |
| `stream`                | Boolean    | `False`           | Si se retransmite el progreso parcial. Si se define, los tokens se enviarán solo como datos. Fórmula de retrollamada necesaria.                                          |
| `stream_options`        | Object     | `Null`            | Propiedad para stream=True. Por ejemplo: `{include_usage: True}`                                                                                                                         |
| `max_completion_tokens` | Integer    | `0`               | El número máximo de tokens que se pueden generar en la respuesta.                                                                                                                                        |
| `n`                     | Integer    | `1`               | Número de respuestas a generar para cada invite (prompt).                                                                                                                             |
| `temperature`           | Real       | `-1`              | Qué temperatura de muestreo utilizar, entre 0 y 2. Los valores más altos hacen que la salida sea más aleatoria, mientras que los valores más bajos la hacen más centrada y determinista. |
| `store`                 | Boolean    | `False`           | Almacena o no el resultado de esta solicitud de finalización de chat.                                                                                                                                    |
| `reasoning_effort`      | Text       | `Null`            | Restringe el esfuerzo de razonamiento para los modelos de razonamiento. Los valores actualmente soportados son `"low"`, `"medium"` y `"high"`.                                           |
| `response_format`       | Object     | `Null`            | Un objeto que especifica el formato que el modelo debe producir. Compatible con las salidas estructuradas.                                                                               |
| `herramientas`          | Collection | `Null`            | Una lista de herramientas ([OpenAITool](OpenAITool.md)) a las que el modelo puede llamar. Sólo se soporta el tipo "function".                                         |
| `tool_choice`           | Variant    | `Null`            | Controla la herramienta (si hay alguna) que es llamada por el modelo. Puede ser `"none"`, `"auto"`, `"required"`, o especificar una herramienta concreta.             |
| `prediction`            | Object     | `Null`            | Contenido de salida estático, como el contenido de un archivo texto que se está regenerando.                                                                                                             |

### Propiedades de retrollamada asíncrona

| Propiedad                                 | Tipo                        | Descripción                                                                                                                                                              |
| ----------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `onData` (o `formula`) | 4D.Function | Una función que se llamará de forma asíncrona durante la recepción de un bloque de datos. Asegúrese de que el proceso actual no termina. |

`onData` recibirá como argumento un [OpenAIChatCompletionsStreamResult](./OpenAIChatCompletionsStreamResult.md).

Ver [OpenAIParameters](./OpenAIParameters.md) para otras propiedades de retrollamada.

## Formato de respuesta

El parámetro `response_format` le permite especificar el formato que el modelo debe salir. Esto es especialmente útil cuando necesita datos estructurados o quiere asegurarse de que la respuesta sigue un formato específico.

### Tipos de formato de respuesta soportados

#### 1. Formato de texto (por defecto)

El formato de respuesta por defecto retorna texto plano:

```4d
var $params := cs.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: {type: "text"} \
})
```

#### 2. Formato de objetos JSON

Fuerza al modelo a responder con JSON válido:

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

Para un control preciso de la estructura JSON, puede definir un esquema:

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

- No todos los modelos soportan salidas estructuradas (json_object o json_schema), así que verifique las capacidades del modelo antes de usarlas.
- Cuando utilice el formato `json_object`, deberá incluir instrucciones en el mensaje del sistema para responder en formato JSON
- El formato `json_schema` ofrece el mayor control y garantiza que la respuesta coincida exactamente con la estructura especificada
- Las respuestas JSON no válidas provocarán un error al utilizar formatos JSON
- La validación del esquema JSON garantiza la seguridad de los tipos y la presencia de los campos obligatorios

## Ver también

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
