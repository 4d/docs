---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

`OpenAIChatCompletionParameters` クラスはOpenAI API を使用したチャット補完に必要な引数を管理するために設計されています。

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ                   | 型          | デフォルト値          | 説明                                                                                                                                                                             |
| ----------------------- | ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                 | Text       | `"gpt-4o-mini"` | 使用するモデルのID。                                                                                                                                                                    |
| `stream`                | Boolean    | `false`         | 部分的な進捗をストリームで返すかどうかを決めます。 設定されていれば、トークンはデータオンリーとして送信されます。 コールバックフォーミュラが必要となります。                                                                                                |
| `stream_options`        | Object     | `Null`          | Property for stream=True. For example: `{include_usage: True}`                                                                                 |
| `max_completion_tokens` | Integer    | `0`             | チャット補完の中で生成可能なトークンの最大数。                                                                                                                                                        |
| `n`                     | Integer    | `1`             | 各プロンプトに対して生成するチャット補完の数。                                                                                                                                                        |
| `temperature`           | Real       | `-1`            | 使用するサンプリング温度。0から2の間の値。 値が大きいほど出力はよりランダムになり、値が小さいほど出力はより集中して決まりきったものになります。                                                                                                      |
| `store`                 | Boolean    | `false`         | このチャット補完リクエストの出力を保存するかどうか。                                                                                                                                                     |
| `reasoning_effort`      | Text       | `Null`          | Constrains effort on reasoning for reasoning models. Currently supported values are `"low"`, `"medium"`, and `"high"`.                         |
| `response_format`       | Object     | `Null`          | An object specifying the format that the model must output. Compatible with structured outputs.                                                |
| `ツール`                   | Collection | `Null`          | A list of tools ([OpenAITool](OpenAITool.md)) the model may call. Only "function" type is supported.                        |
| `tool_choice`           | Variant    | `Null`          | Controls which (if any) tool is called by the model. Can be `"none"`, `"auto"`, `"required"`, or specify a particular tool. |
| `prediction`            | Object     | `Null`          | Static predicted output content, such as the content of a text file that is being regenerated.                                                                 |

### 非同期コールバック用プロパティ

| プロパティ                                      | 型                           | 説明                                                                                                           |
| ------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `onData` (or `formula`) | 4D.Function | A function to be called asynchronously when receiving data chunk. カレントプロセスが終了しないように注意してください。 |

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

#### 3. JSON Object Format

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

## 参照

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
