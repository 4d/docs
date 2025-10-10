---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

The `OpenAIChatCompletionParameters` class is designed to handle the parameters required for chat completions using the OpenAI API.

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Properties

| Property                   | Type    | Default Value           | Description                                                                                       |
|---------------------------|---------|-------------------------|---------------------------------------------------------------------------------------------------|
| `model`                 | Text       | `"gpt-4o-mini"` | ID of the model to use.  |
| `stream`                | Boolean    | `False`         | Whether to stream back partial progress. If set, tokens will be sent as data-only. Callback formula required.    |
| `stream_options`        | Object     | `Null`          | Property for stream=True. For example: `{include_usage: True}`   |
| `max_completion_tokens` | Integer    | `0`             | The maximum number of tokens that can be generated in the completion.                                                                                    |
| `n`                     | Integer    | `1`             | How many completions to generate for each prompt.                                                                                                        |
| `temperature`           | Real       | `-1`            | What sampling temperature to use, between 0 and 2. Higher values make the output more random, while lower values make it more focused and deterministic. |
| `store`                 | Boolean    | `False`         | Whether or not to store the output of this chat completion request.                                                                                      |
| `reasoning_effort`      | Text       | `Null`          | Constrains effort on reasoning for reasoning models. Currently supported values are `"low"`, `"medium"`, and `"high"`.  |
| `response_format`       | Object     | `Null`          | An object specifying the format that the model must output. Compatible with structured outputs.   |
| `tools`                 | Collection | `Null`          | A list of tools ([OpenAITool](OpenAITool.md)) the model may call. Only "function" type is supported. |
| `tool_choice`           | Variant    | `Null`          | Controls which (if any) tool is called by the model. Can be `"none"`, `"auto"`, `"required"`, or specify a particular tool. |
| `prediction`            | Object     | `Null`          | Static predicted output content, such as the content of a text file that is being regenerated.                                                           |

### Asynchronous Callback Properties

| Property | Type | Description | 
|----------|------|-----------|
| `onData` (or `formula`)  | 4D.Function  | A function to be called asynchronously when receiving data chunk. Ensure that the current process does not terminate. |

`onData` will receive as argument an [OpenAIChatCompletionsStreamResult](./OpenAIChatCompletionsStreamResult.md).

See [OpenAIParameters](./OpenAIParameters.md) for other callback properties.


## Response Format

The `response_format` parameter allows you to specify the format that the model must output. This is particularly useful when you need structured data or want to ensure the response follows a specific format.

### Supported Response Format Types

#### 1. Text Format (Default)

The default response format returns plain text:

```4d
var $params := cs.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: {type: "text"} \
})
```

#### 2. JSON Object Format

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

#### 3. JSON Schema Format (Structured Outputs)

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

### JSON Schema Properties

When using `json_schema` type, you can specify:

- **`name`**: A name for the schema
- **`description`**: A description of what the schema represents
- **`schema`**: The JSON schema definition
- **`strict`**: Whether to enforce strict adherence to the schema

### Important Notes

- Not all models support structured outputs (json_object or json_schema), so check model capabilities before using them.
- When using `json_object` format, you should include instructions in your system message to respond in JSON format
- The `json_schema` format provides the most control and ensures the response exactly matches your specified structure
- Invalid JSON responses will result in an error when using JSON formats
- JSON schema validation ensures type safety and required field presence

## See also

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
