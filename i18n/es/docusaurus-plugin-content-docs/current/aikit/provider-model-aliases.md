---
id: provider-model-aliases
title: Alias de proveedores y modelos
---

# Alias de proveedores y modelos

The OpenAI client supports provider and model aliases, allowing you to define provider configurations and named model aliases in JSON files and reference them using simple syntaxes.

## Generalidades

Instead of hard-coding API endpoints and credentials in your code, you can:

- Define provider configurations in a JSON file
- Use the `provider:model` syntax to specify a provider and model directly
- Definir los alias de modelos nombrados que se asignan a un proveedor y a un identificador de modelo
- Utilizar un alias de un modelo por nombre (por ejemplo, `my-gpt`)
- Cambiar de proveedor (OpenAI, Anthropic, Ollama local, etc.) easily

## Configuration Files

El cliente carga automáticamente las configuraciones del proveedor a partir del primer archivo existente encontrado (por orden de prioridad):

| Prioridad                          | Ubicación | Ruta del archivo                                  |
| ---------------------------------- | --------- | ------------------------------------------------- |
| 1 (el mayor)    | userData  | `<data folder>/Settings/AIProviders.json`         |
| 2                                  | user      | `<project root folder>/Settings/AIProviders.json` |
| 3 (el más bajo) | structure | `/SOURCES/AIProviders.json`                       |

**Importante:** sólo se carga el **primer archivo existente**. No se fusionan varios archivos.

### Formato del archivo de configuración

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
      "model": "actual-model-id",
    }
  }
}
```

### Campos del proveedor

| Campo          | Tipo | Requerido | Descripción                                                               |
| -------------- | ---- | --------- | ------------------------------------------------------------------------- |
| `baseURL`      | Text | Sí        | URL del punto de terminación de la API                                    |
| `apiKey`       | Text | No        | Valor de la llave API                                                     |
| `organization` | Text | No        | ID de la organización (opcional, específico de OpenAI) |
| `project`      | Text | No        | ID del proyecto (opcional, específico de OpenAI)       |

### Model Alias Fields

| Campo       | Tipo | Requerido | Descripción                                                         |
| ----------- | ---- | --------- | ------------------------------------------------------------------- |
| `proveedor` | Text | Sí        | Name of the provider (must exist in `providers`) |
| `model`     | Text | Sí        | ID del modelo utilizado por el proveedor                            |

### Ejemplo de configuración

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
      "model": "text-embedding-3-small",
      }
    }
  }
}
```

## Usage in API Calls

### Formatos de parámetro del modelo

Two syntaxes are supported:

| Sintaxis              | Descripción                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| `provider:model_name` | Alias de proveedor: especifique directamente el proveedor y el modelo |
| `:model_alias`        | Model alias — reference a named model from the `models` configuration by bare name    |

#### Sintaxis alias de proveedor

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
var $result := $client.chat.completions.create($messages; {model: ":my-gpt"})
var $result := $client.chat.completions.create($messages; {model: ":my-claude"})

// Embeddings with a named model alias
var $result := $client.embeddings.create("text"; ":my-embedding")
```

### Cómo funciona

#### Alias de proveedor (`provider:model`)

When you use the `provider:model` syntax, the client automatically:

1. **Analiza** la cadena del modelo para extraer el nombre del proveedor y el nombre del modelo
   - Ejemplo: `"openai:gpt-5.1"` → provider=`"openai"`, model=`"gpt-5.1"`

2. **Looks up** the provider configuration from the loaded JSON file
   - Retrieves `baseURL`, `apiKey`, `organization`, `project`

3. **Efectúa la solicitud de API** usando la configuración resuelta
   - Envía una petición a la `baseURL` del proveedor con la `apiKey` correcta

#### Alias de modelo (nombre simple)

Cuando se utiliza un nombre de modelo simple que corresponde con un alias configurado, el cliente automáticamente:

1. **Looks up** the model alias in the `models` section of the configuration
   - Example: `":my-gpt"` → finds entry with `provider: "openai"`, `model: "gpt-5.1"`

2. **Resolves** the associated provider to get `baseURL` and `apiKey`

3. **Efectúa la petición API** utilizando el punto de terminación del proveedor y el ID del modelo almacenado

### Uso de nombres de modelos sencillos

If you specify a model name **without** a provider prefix or `:` prefix, the client uses the configuration from its constructor:

```4d
// Use constructor configuration
var $client := cs.AIKit.OpenAI.new({apiKey: "sk-..."; baseURL: "https://api.openai.com/v1"})
var $result := $client.chat.completions.create($messages; {model: "gpt-5.1"})

// Override with provider alias
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})

// Override with model alias (bare name)
var $result := $client.chat.completions.create($messages; {model: ":my-gpt"})

```

## Ejemplos

### Aplicación de chat multiproveedor

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

### Integraciones con varios proveedores

```4d
var $client := cs.AIKit.OpenAI.new()
var $text := "Hello world"

// Use OpenAI embeddings
var $embedding1 := $client.embeddings.create($text; "openai:text-embedding-3-small")

// Use local embeddings
var $embedding2 := $client.embeddings.create($text; "local:nomic-embed-text")
```

## Gestión de configuraciones

Las configuraciones de los proveedores pueden gestionarse a través de los [Parámetros de 4D](https://developer.4d.com/docs/settings/ai) o editando directamente los archivos JSON.

**Para añadir o modificar proveedores:**

1. Utilice la interfaz de los Parámetros 4D (recomendado), o
2. Edite el archivo JSON apropiado (archivo de datos usuario, usuario o estructura)
3. Reinicie la aplicación o cree una nueva instancia de cliente OpenAI para cargar los cambios

**Ubicación del archivo recomendado:**

- **For user-specific configs:** `<data folder>/Settings/AIProviders.json`
- **Para los valores por defecto de la aplicación:** `/SOURCES/AIProviders.json`

### No Reload Capability

Once a client is instantiated, it cannot reload provider configurations. Para recoger los cambios de configuración:

```4d
// Configuration changed - create new client
var $client := cs.AIKit.OpenAI.new()
```

## Consideraciones de seguridad

When using 4D in client/server mode, it is **strongly recommended** to execute AI-related code on the server side to protect API tokens and credentials from exposure to client machines.

## Casos de uso comunes

### Desarrollo local con Ollama

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
      "model": "text-embedding-3-small",
    }
  }
}
```

```4d
var $client := cs.AIKit.OpenAI.new()

// Use named model aliases — no need to remember provider or model ID
var $result := $client.chat.completions.create($messages; {model: ":chat"})
var $result := $client.chat.completions.create($messages; {model: ":fast"})
var $embedding := $client.embeddings.create("text"; ":embedding")
```

### List All Configured Models

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
var $models := $providers.modelAliases()
// Devuelve: [{nombre: "chat", proveedor: "openai", modelo: "gpt-5.1"}, ...]
```

### Producción con múltiples proveedores de servicios en la nube

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

### Organizaciones específicas de proveedores

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

## Documentación relacionada

- [Clase OpenAI](Classes/OpenAI.md) - Clase cliente principal
- [Clase OpenAIProviders](Classes/OpenAIProviders.md) - Gestión de la configuración de proveedores
- [API OpenAI compatibles](compatible-openai.md) - Lista de proveedores compatibles
