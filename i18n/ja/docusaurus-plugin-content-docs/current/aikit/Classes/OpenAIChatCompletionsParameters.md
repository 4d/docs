---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

`OpenAIChatCompletionParameters` クラスはOpenAI API を使用したチャット補完に必要な引数を管理するために設計されています。

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ                   | 型          | デフォルト値          | 説明                                                                                                          |
| ----------------------- | ---------- | --------------- | ----------------------------------------------------------------------------------------------------------- |
| `model`                 | Text       | `"gpt-4o-mini"` | 使用するモデルのID。                                                                                                 |
| `stream`                | Boolean    | `false`         | 部分的な進捗をストリームで返すかどうかを決めます。 設定されていれば、トークンはデータオンリーとして送信されます。 コールバックフォーミュラが必要となります。                             |
| `stream_options`        | Object     | `Null`          | stream = True の場合のオプションを指定するプロパティ。 例: `{include_usage: True}`                               |
| `max_completion_tokens` | Integer    | `0`             | チャット補完の中で生成可能なトークンの最大数。                                                                                     |
| `n`                     | Integer    | `1`             | 各プロンプトに対して生成するチャット補完の数。                                                                                     |
| `temperature`           | Real       | `-1`            | 使用するサンプリング温度。0から2の間の値。 値が大きいほど出力はよりランダムになり、値が小さいほど出力はより集中して決まりきったものになります。                                   |
| `store`                 | Boolean    | `false`         | このチャット補完リクエストの出力を保存するかどうか。                                                                                  |
| `reasoning_effort`      | Text       | `Null`          | 推論モデルにおける推論の努力に対する制約。 現在サポートされている値は `"low"`、`"medium"`、および`"high"`です。                                       |
| `response_format`       | Object     | `Null`          | モデルが出力するフォーマットを指定するオブジェクト。 構造化された出力に対応します。                                                                  |
| `ツール`                   | Collection | `Null`          | モデルが呼び出し得るツール([OpenAITool](OpenAITool.md)) の一覧。 "function" 型のみがサポートされます。                 |
| `tool_choice`           | Variant    | `Null`          | どのモデルによってどのツール(あれば)が呼び出されるかを管理します。 `"none"`、`"auto"`、`"required"`、または特定のツールを指定することができます。 |
| `prediction`            | Object     | `Null`          | 再生成されているテキストファイルのコンテンツなど、静的に予想される出力内容。                                                                      |

### 非同期コールバック用プロパティ

| プロパティ                                       | 型                           | 説明                                                   |
| ------------------------------------------- | --------------------------- | ---------------------------------------------------- |
| `onData` (または `formula`) | 4D.Function | データチャンクを受信する際に非同期で呼び出す関数。 カレントプロセスが終了しないように注意してください。 |

`onData` は引数として[OpenAIChatCompletionsStreamResult](./OpenAIChatCompletionsStreamResult.md) を受け取ります。

他のコールバックプロパティについては[OpenAIParameters](./OpenAIParameters.md) を参照して下さい。

## レスポンスフォーマット

`response_format` 引数を使用すると、モデルが出力するフォーマットを指定することができます。 これは、構造化されたデータが必要な場合や、レスポンスが特定のフォーマットに従うようにしたい場合には特に有用です。

### サポートされるレスポンスフォーマットタイプ

#### 1. テキストフォーマット(デフォルト)

デフォルトのレスポンンスフォーマットは標準テキストを開きます:

```4d
var $params := cs.OpenAIChatCompletionsParameters.new({ \
    model: "gpt-4o-mini"; \
    response_format: {type: "text"} \
})
```

#### 2. JSON オブジェクトフォーマット

モデルが有効なJSON を返すように指定します:

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

#### 3. JSON スキーマフォーマット(構造化された出力)

JSON 構造を正確に管理するために、スキーマを定義することができます:

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

### JSON スキーマプロパティ

`json_schema` タイプを使用する場合、以下のものを指定可能です:

- **`name`**: スキーマの名前
- **`description`**: そのスキーマが何を表すのかの説明
- **`schema`**: JSON スキーマ定義
- **`strict`**: スキーマに厳密に従うかどうか

### 重要な注意事項

- 全てのモデルが構造化された出力(json_object あるいは json_schema)をサポートするわけではないので、使用する前にモデルの機能を確認してください。
- `json_object` フォーマットを使用する場合、JSON フォーマットで応答するためにはシステムメッセージに説明を含める必要があります。
- `json_schema` フォーマットがもっともコントロールがしやすく、レスポンスが指定した構造に完全に合致することを保証します。
- JSON フォーマットを使用している場合、無効なJSON レスポンスはエラーを起こします。
- JSON スキーマ検証は、型の安全性と要求されたフィールドがきちんと存在することを保証します。

## 参照

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
