---
id: openaiproviders
title: OpenAIProviders
---

# OpenAIProviders

## 概要

The `OpenAIProviders` class manages AI provider configurations by loading configuration and handling resolution of model strings in the `provider:model` format.

For complete usage documentation, see [Provider Model Aliases](../provider-model-aliases.md).

## 説明

This class enables multi-provider support by:

- Loading provider configurations from a single JSON file
- Loading named model aliases that map to providers and model IDs
- Resolving `provider:model` syntax to full API configurations
- Resolving named model aliases by bare name to full provider + model configurations

The `OpenAI` class automatically loads provider configurations when instantiated.

## コンストラクター

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
```

Creates a new instance that loads provider configuration from the `AIProviders.json` file. See [Configuration Files](../provider-model-aliases.md#configuration-files) in the Provider Model Aliases documentation for details on file locations and format.

**Important:**

- Only the first existing file is loaded. There is no merging of multiple files.
- The configuration is read once at instantiation time. If the `AIProviders.json` file is modified afterward, those changes will not be reflected in the existing instance. You must create a new instance of `OpenAIProviders` to reload the updated configuration.

## 効果

### Integration with OpenAI Class

```4d
var $client := cs.AIKit.OpenAI.new()

// Use model aliases with provider:model syntax
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})
```

### Direct Provider Access

```4d
var $providers := cs.AIKit.OpenAIProviders.new()

// Get a specific provider configuration
var $config := $providers.get("openai")
// Returns: {baseURL: "...", apiKey: "...", modelAliases: [...], ...} or Null

// Get all provider names
var $names := $providers.list()
// Returns: ["openai", "anthropic", "mistral", "local"]
```

## 関数

### get()

**get**(*name* : Text) : Object

Get a provider configuration by name.

| 引数   | 型      | 説明                                                    |
| ---- | ------ | ----------------------------------------------------- |
| *名称* | Text   | The provider name                                     |
| 戻り値  | Object | Provider configuration object, or `Null` if not found |

#### 例題

```4d
var $config := $providers.get("openai")
If ($config # Null)
    // Use $config.baseURL, $config.apiKey, etc.

    // We could build a client with it
    var $client:=cs.AIKit.OpenAI.new($config)
End if
```

### list()

**list**() : Collection

Get all provider names.

| 引数  | 型          | 説明                           |
| --- | ---------- | ---------------------------- |
| 戻り値 | Collection | Collection of provider names |

#### 例題

```4d
var $names := $providers.list()
// Returns: ["openai", "anthropic", ...]

For each ($name; $names)
    var $config := $providers.get($name)
End for each
```

### modelAliases()

**modelAliases**() : Collection

Get all configured model aliases.

| 引数  | 型          | 説明                                |
| --- | ---------- | --------------------------------- |
| 戻り値 | Collection | Collection of model alias objects |

Each object in the collection contains:

| プロパティ   | 型    | 説明                                |
| ------- | ---- | --------------------------------- |
| `名称`    | Text | Model alias name                  |
| `プロバイダ` | Text | Provider name                     |
| `model` | Text | Model ID to use with the provider |

#### 例題

```4d
var $models := $providers.modelAliases()
// Returns: [{name: "my-gpt", provider: "openai", model: "gpt-5.1"}, ...]

For each ($model; $models)
    // $m.name, $m.provider, $m.model
End for each
```

## モデル解決

Two syntaxes are supported for model resolution:

### Provider alias (`provider:model`)

Specify the provider and model name directly:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
```

This is resolved internally to:

1. Split `"openai:gpt-5.1"` into provider=`"openai"` and model=`"gpt-5.1"`
2. Look up the `"openai"` provider configuration
3. Extract `baseURL` and `apiKey`
4. Make the API request using the resolved configuration

**例題:**

- `"openai:gpt-5.1"` → Use OpenAI provider with gpt-5.1 model
- `"anthropic:claude-3-opus"` → Use Anthropic provider with claude-3-opus
- `"local:llama3"` → Use local provider with llama3 model

### Model alias (bare name)

Use a named model by its bare name from the `models` section of the configuration:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "my-gpt"})
```

This is resolved internally to:

1. Look up `"my-gpt"` in the `models` configuration
2. Find its `provider` (e.g., `"openai"`) and `model` (e.g., `"gpt-5.1"`)
3. Resolve the provider to get `baseURL` and `apiKey`
4. Make the API request using the resolved configuration

**例題:**

- `"my-gpt"` → Use the model alias "my-gpt" (resolves to its configured provider and model)
- `"my-embedding"` → Use the model alias "my-embedding" for embedding operations
