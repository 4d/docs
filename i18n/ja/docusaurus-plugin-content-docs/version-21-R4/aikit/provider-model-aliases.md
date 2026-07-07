---
id: provider-model-aliases
title: Provider & Model Aliases
---

# Provider & Model Aliases

The OpenAI client supports provider and model aliases, allowing you to define provider configurations and named model aliases in JSON files and reference them using simple syntaxes.

## 概要

Instead of hard-coding API endpoints and credentials in your code, you can:

- Define provider configurations in a JSON file
- Use the `provider:model` syntax to specify a provider and model directly
- Define named model aliases that map to a provider and a model ID
- Use a named model alias by bare name (e.g., `my-gpt`)
- Switch between providers (OpenAI, Anthropic, local Ollama, etc.) easily

## Configuration Files

The client automatically loads provider configurations from the first existing file found (in priority order):

| 優先順位                     | 場所        | File Path                                    |
| ------------------------ | --------- | -------------------------------------------- |
| 1 (高) | userData  | `<data folder>/Settings/AIProviders.json`    |
| 2                        | user      | `<package folder>/Settings/AIProviders.json` |
| 3 (低) | structure | `/SOURCES/AIProviders.json`                  |

**Important:** Only the **first existing file** is loaded. There is no merging of multiple files.

### Configuration File Format

```json
{
  "providers": {
    "provider_name": {
      "baseURL": "https://api.example.com/v1",
      "apiKey": "optional-key",
      "organization": "optional-org-id",
      "project": "optional-project-id"
    }
  },
  "models": {
    "model_alias_name": {
      "provider": "provider_name",
      "model": "actual-model-id"
    }
  }
}
```

### Provider Fields

| フィールド     | 型    | 必須 | 説明                                                             |
| --------- | ---- | -- | -------------------------------------------------------------- |
| `baseURL` | Text | ◯  | API endpoint URL                                               |
| `apiKey`  | Text | ×  | API key value                                                  |
| `組織`      | Text | ×  | Organization ID (optional, OpenAI-specific) |
| `project` | Text | ×  | Project ID (optional, OpenAI-specific)      |

### Model Alias Fields

| フィールド   | 型    | 必須 | 説明                                                                  |
| ------- | ---- | -- | ------------------------------------------------------------------- |
| `プロバイダ` | Text | ◯  | Name of the provider (must exist in `providers`) |
| `model` | Text | ◯  | Model ID used by the provider                                       |

### Example Configuration

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1"
    },
    "local": {
      "baseURL": "http://localhost:11434/v1"
    },
    "mistral": {
      "baseURL": "https://api.mistral.ai/v1",
      "apiKey": "your-mistral-key"
    }
  },
  "models": {
    "my-gpt": {
      "provider": "openai",
      "model": "gpt-5.1"
    },
    "my-claude": {
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022"
    },
    "my-embedding": {
      "provider": "openai",
      "model": "text-embedding-3-small"
    }
  }
}
```

## Usage in API Calls

### Model Parameter Formats

Two syntaxes are supported:

| シンタックス                | 説明                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------- |
| `provider:model_name` | Provider alias — specify provider and model directly                               |
| `model_alias`         | Model alias — reference a named model from the `models` configuration by bare name |

#### Provider alias syntax

Use the `provider:model_name` syntax in any API call that accepts a model parameter:

```4d
var $client := cs.AIKit.OpenAI.new()

// Chat completions
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})

// Embeddings
var $result := $client.embeddings.create("text"; "openai:text-embedding-3-small")
var $result := $client.embeddings.create("text"; "local:nomic-embed-text")

// Image generation
var $result := $client.images.generate("prompt"; {model: "openai:dall-e-3"})
```

#### Model alias syntax

Use a bare model name to reference a named model defined in the `models` section of the configuration file. The provider, model ID, and credentials are resolved automatically:

```4d
var $client := cs.AIKit.OpenAI.new()

// Use a named model alias
var $result := $client.chat.completions.create($messages; {model: "my-gpt"})
var $result := $client.chat.completions.create($messages; {model: "my-claude"})

// Embeddings with a named model alias
var $result := $client.embeddings.create("text"; "my-embedding")
```

### How It Works

#### Provider alias (`provider:model`)

When you use the `provider:model` syntax, the client automatically:

1. **Parses** the model string to extract provider name and model name
   - Example: `"openai:gpt-5.1"` → provider=`"openai"`, model=`"gpt-5.1"`

2. **Looks up** the provider configuration from the loaded JSON file
   - Retrieves `baseURL`, `apiKey`, `organization`, `project`

3. **Makes the API request** using the resolved configuration
   - Sends request to the provider's `baseURL` with the correct `apiKey`

#### Model alias (bare name)

When you use a bare model name that matches a configured alias, the client automatically:

1. **Looks up** the model alias in the `models` section of the configuration
   - Example: `"my-gpt"` → finds entry with `provider: "openai"`, `model: "gpt-5.1"`

2. **Resolves** the associated provider to get `baseURL` and `apiKey`

3. **Makes the API request** using the provider's endpoint and the stored model ID

### Using Plain Model Names

If you specify a model name **without** a provider prefix, the client uses the configuration from its constructor:

```4d
// Use constructor configuration
var $client := cs.AIKit.OpenAI.new({apiKey: "sk-..."; baseURL: "https://api.openai.com/v1"})
var $result := $client.chat.completions.create($messages; {model: "gpt-5.1"})

// Override with provider alias
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})

// Override with model alias (bare name)
var $result := $client.chat.completions.create($messages; {model: "my-gpt"})
```

## 例題

### Multi-Provider Chat Application

```4d
var $client := cs.AIKit.OpenAI.new()
var $messages := []
$messages.push({role: "user"; content: "What is the capital of France?"})

// Try OpenAI
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})

// Try Anthropic
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-5-sonnet"})

// Try local Ollama
var $result := $client.chat.completions.create($messages; {model: "local:llama3.2"})
```

### Embeddings with Multiple Providers

```4d
var $client := cs.AIKit.OpenAI.new()
var $text := "Hello world"

// Use OpenAI embeddings
var $embedding1 := $client.embeddings.create($text; "openai:text-embedding-3-small")

// Use local embeddings
var $embedding2 := $client.embeddings.create($text; "local:nomic-embed-text")
```

## Configuration Management

Provider configurations can be managed through [4D Settings](https://developer.4d.com/docs/settings/ai) or by directly editing JSON files.

**To add or modify providers:**

1. Use 4D Settings interface (recommended), or
2. Edit the appropriate JSON file (userData, user, or structure)
3. Restart your application or create a new OpenAI client instance to load changes

**Recommended file location:**

- **For user-specific configs:** `<data folder>/Settings/AIProviders.json`
- **For application defaults:** `/SOURCES/AIProviders.json`

### No Reload Capability

Once a client is instantiated, it cannot reload provider configurations. To pick up configuration changes:

```4d
// Configuration changed - create new client
var $client := cs.AIKit.OpenAI.new()
```

## Security Considerations

When using 4D in client/server mode, it is **strongly recommended** to execute AI-related code on the server side to protect API tokens and credentials from exposure to client machines.

## Common Use Cases

### Local Development with Ollama

```json
{
  "providers": {
    "local": {
      "baseURL": "http://localhost:11434/v1"
    }
  }
}
```

```4d
var $client := cs.AIKit.OpenAI.new()
var $result := $client.chat.completions.create($messages; {model: "local:llama3.2"})
```

### Named Model Aliases

Define models once, use them everywhere by name:

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1",
      "apiKey": "your-openai-key"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1",
      "apiKey": "your-anthropic-key"
    }
  },
  "models": {
    "chat": {
      "provider": "openai",
      "model": "gpt-5.1"
    },
    "fast": {
      "provider": "anthropic",
      "model": "claude-3-5-haiku-20241022"
    },
    "embedding": {
      "provider": "openai",
      "model": "text-embedding-3-small"
    }
  }
}
```

```4d
var $client := cs.AIKit.OpenAI.new()

// Use named model aliases — no need to remember provider or model ID
var $result := $client.chat.completions.create($messages; {model: "chat"})
var $result := $client.chat.completions.create($messages; {model: "fast"})
var $embedding := $client.embeddings.create("text"; "embedding")
```

### List All Configured Models

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
var $models := $providers.modelAliases()
// Returns: [{name: "chat", provider: "openai", model: "gpt-5.1"}, ...]
```

### Production with Multiple Cloud Providers

```json
{
  "providers": {
    "openai": {
      "baseURL": "https://api.openai.com/v1",
      "apiKey": "your-openai-key"
    },
    "anthropic": {
      "baseURL": "https://api.anthropic.com/v1",
      "apiKey": "your-anthropic-key"
    },
    "azure": {
      "baseURL": "https://your-resource.openai.azure.com",
      "apiKey": "your-azure-key"
    }
  }
}
```

### Provider-Specific Organizations

```json
{
  "providers": {
    "openai-team-a": {
      "baseURL": "https://api.openai.com/v1",
      "organization": "org-team-a-id"
    },
    "openai-team-b": {
      "baseURL": "https://api.openai.com/v1",
      "organization": "org-team-b-id"
    }
  }
}
```

```4d
// Route to different organizations
var $resultA := $client.chat.completions.create($messages; {model: "openai-team-a:gpt-5.1"})
var $resultB := $client.chat.completions.create($messages; {model: "openai-team-b:gpt-5.1"})
```

## Related Documentation

- [OpenAI Class](Classes/OpenAI.md) - Main client class
- [OpenAIProviders Class](Classes/OpenAIProviders.md) - Provider configuration management
- [Compatible OpenAI APIs](compatible-openai.md) - List of compatible providers
