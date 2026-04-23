---
id: openaiproviders
title: OpenAIProviders
---

# OpenAIProviders

## Sommaire

The `OpenAIProviders` class manages AI provider configurations by loading configuration and handling resolution of model strings in the `provider:model` format.

For complete usage documentation, see [Provider Model Aliases](../provider-model-aliases.md).

## Description

This class enables multi-provider support by:

- Loading provider configurations from a single JSON file
- Loading named model aliases that map to providers and model IDs
- Resolving `provider:model` syntax to full API configurations
- Resolving named model aliases by bare name to full provider + model configurations

The `OpenAI` class automatically loads provider configurations when instantiated.

## Constructeur

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
```

Creates a new instance that loads provider configuration from the `AIProviders.json` file (see [**Configuration Files**](../provider-model-aliases.md#configuration-files) in the "Provider Model Aliases" page for details on file locations and format).

**Important:**

- Only the first existing file is loaded. There is no merging of multiple files.
- The configuration is read once at instantiation time. If the `AIProviders.json` file is modified afterward, those changes will not be reflected in the existing instance. You must create a new instance of `OpenAIProviders` to reload the updated configuration.

## Utilisation

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

## Fonctions

### get()

**get**(*name* : Text) : Object

Get a provider configuration by name.

| Paramètres | Type   | Description                                           |
| ---------- | ------ | ----------------------------------------------------- |
| *name*     | Text   | The provider name                                     |
| Résultat   | Object | Provider configuration object, or `Null` if not found |

#### Exemple

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

| Paramètres | Type       | Description                  |
| ---------- | ---------- | ---------------------------- |
| Résultat   | Collection | Collection of provider names |

#### Exemple

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

| Paramètres | Type       | Description                       |
| ---------- | ---------- | --------------------------------- |
| Résultat   | Collection | Collection of model alias objects |

Each object in the collection contains:

| Propriété     | Type | Description                       |
| ------------- | ---- | --------------------------------- |
| `name`        | Text | Model alias name                  |
| `fournisseur` | Text | Provider name                     |
| `model`       | Text | Model ID to use with the provider |

#### Exemple

```4d
var $models := $providers.modelAliases()
// Returns: [{name: "my-gpt", provider: "openai", model: "gpt-5.1"}, ...]

For each ($model; $models)
    // $m.name, $m.provider, $m.model
End for each
```

## Model Resolution

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

**Exemples :**

- `"openai:gpt-5.1"` → Use OpenAI provider with gpt-5.1 model
- `"anthropic:claude-3-opus"` → Use Anthropic provider with claude-3-opus
- `"local:llama3"` → Use local provider with llama3 model

### Model alias (bare name)

Use a named model by its bare name from the `models` section of the configuration:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: ":my-gpt"})
```

This is resolved internally to:

1. Look up `"my-gpt"` in the `models` configuration
2. Find its `provider` (e.g., `"openai"`) and `model` (e.g., `"gpt-5.1"`)
3. Resolve the provider to get `baseURL` and `apiKey`
4. Make the API request using the resolved configuration

**Exemples :**

- `"my-gpt"` → Use the model alias "my-gpt" (resolves to its configured provider and model)
- `"my-embedding"` → Use the model alias "my-embedding" for embedding operations

