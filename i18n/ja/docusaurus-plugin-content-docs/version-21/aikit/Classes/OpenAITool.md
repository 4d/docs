---
id: openaitool
title: OpenAITool
---

# OpenAITool

`OpenAITool` クラスは会話の途中でOpenAI モデルによって呼び出されうるツールを表します。 ツールを使用するとAI に特定の機能を実行させたり、外部システムとやりとりしたり、情報を取得したりといったことが可能になります。

ツール呼び出しに応答する方法については、[OpenAIMessage](OpenAIMessage.md) を参照して下さい。

> **注意:** [OpenAIChatHelper](OpenAIChatHelper.md) を`autoHandleToolCalls` を有効化して使用した場合には、ツール呼び出しは自動的に管理されます。

## プロパティ

### ルートプロパティ

| プロパティ    | 型       | デフォルト        | 説明                                                               |
| -------- | ------- | ------------ | ---------------------------------------------------------------- |
| `type`   | Text    | `"function"` | ツールのタイプ。 現在サポートされているのは`"function"`、`"custom"`、そしてその他のビルトインタイプです。 |
| `strict` | Boolean | `false`      | 関数の引数に対して厳格なスキーマ検証を強制するかどうかを指定します。                               |

### 共通プロパティ

| プロパティ         | 型    | 説明                                |
| ------------- | ---- | --------------------------------- |
| `名称`          | Text | ツール名。識別子として機能します。                 |
| `description` | Text | LLM がツールをいつ使うかを決定する手助けとなる、ツールの説明。 |

### 関数特有のプロパティ

| プロパティ        | 型      | 説明                           |
| ------------ | ------ | ---------------------------- |
| `parameters` | Object | JSON スキーマフォーマットを使用した関数の引数宣言。 |

## コンストラクター

### new()

**new**(*object* : Object) : OpenAITool

| 引数        | 型          | 説明                   |
| --------- | ---------- | -------------------- |
| *options* | Object     | ツールの設定オブジェクト         |
| 戻り値       | OpenAITool | OpenAITool の新規インスタンス |

新しい OpenAITool インスタンスを作成します。 このコンストラクターは簡易フォーマットとOpenAI API フォーマットの両方を受け入れます。

#### サポートされるフォーマット

**簡易フォーマット:**

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

**OpenAI API フォーマット:**

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

## チャット補完との統合

ツールは通常`OpenAIChatCompletionsParameters.tools` プロパティで使用されます:

```4d
var $parameters := cs.AIKit.OpenAIChatCompletionsParameters.new({ \
  model: "gpt-4o-mini"; \
  tools: [$tool1; $tool2; $tool3] \
})
```

> **注意:** プレーンなオブジェクトを直接渡すこともできます - 渡したオブジェクトは自動的に`OpenAITool` インスタンスに変換されます。 明示的に `OpenAITool` オブジェクトを作成する必要はありません。

## 参照

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) - ツール設定用
- [OpenAIChatHelper](OpenAIChatHelper.md) - 自動ツール呼び出し管理用
- [OpenAIMessage](OpenAIMessage.md) - ツール呼び出しレスポンス用