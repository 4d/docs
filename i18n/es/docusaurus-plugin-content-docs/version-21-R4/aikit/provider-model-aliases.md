---
id: provider-model-aliases
title: Alias de proveedores y modelos
---

# Alias de proveedores y modelos

El cliente OpenAI soporta alias de proveedores y de modelos, permitiéndole definir las configuraciones de proveedores y de los alias de los modelos nombrados en los archivos JSON y referenciarlos utilizando sintaxis simples.

## Generalidades

En lugar de codificar los puntos finales de la API y las credenciales en el código, puede hacerlo:

- Definir las configuraciones de los proveedores en un archivo JSON
- Utilice la sintaxis `provider:model` para especificar directamente un proveedor y un modelo
- Definir los alias de modelos nombrados que se asignan a un proveedor y a un identificador de modelo
- Utilizar un alias de un modelo por nombre (por ejemplo, `my-gpt`)
- Cambiar de proveedor (OpenAI, Anthropic, Ollama local, etc.) fácilmente

## Archivos de configuración

El cliente carga automáticamente las configuraciones del proveedor a partir del primer archivo existente encontrado (por orden de prioridad):

| Prioridad                          | Ubicación | Ruta del archivo                             |
| ---------------------------------- | --------- | -------------------------------------------- |
| 1 (el mayor)    | userData  | `<data folder>/Settings/AIProviders.json`    |
| 2                                  | user      | `<package folder>/Settings/AIProviders.json` |
| 3 (el más bajo) | structure | `/SOURCES/AIProviders.json`                  |

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
      "model": "actual-model-id"
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

### Campos de alias de modelo

| Campo       | Tipo | Requerido | Descripción                                                           |
| ----------- | ---- | --------- | --------------------------------------------------------------------- |
| `proveedor` | Text | Sí        | Nombre del proveedor (debe existir en `providers`) |
| `model`     | Text | Sí        | ID del modelo utilizado por el proveedor                              |

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
      "model": "text-embedding-3-small"
    }
  }
}
```

## Uso en las llamadas a la API

### Formatos de parámetro del modelo

Se soportan dos sintaxis:

| Sintaxis              | Descripción                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `provider:model_name` | Alias de proveedor: especifique directamente el proveedor y el modelo      |
| `model_alias`         | Alias de modelo - referencia a un modelo de la configuración `models` por su nombre simple |

#### Sintaxis alias de proveedor

Utilice la sintaxis `provider:model_name` en toda llamada a la API que acepte un modelo en parámetro:

```4d
var $client := cs.AIKit.OpenAI.new()

// Finalizaciones de Chat
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5. "})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions. reate($messages; {model: "local:llama3"})

// Embeddings
var $result := $client. mbeddings.create("text"; "openai:text-embedding-3-small")
var $result := $client. mbeddings.create("text"; "local:nomic-embed-text")

// Generación de imágenes
var $result := $client.images.generate("prompt"; {model: "openai:dall-e-3"})
```

#### Sintaxis alias de modelo

Utilice un nombre de modelo simple para referenciar un modelo con nombre definido en la sección `models` del archivo de configuración. El proveedor, el ID del modelo y las credenciales se resuelven automáticamente:

```4d
var $client := cs.AIKit.OpenAI.new()

// Utilizar un alias de modelo con nombre
var $result := $client.chat.completions.create($messages; {model: "my-gpt"})
var $result := $client.chat.completions.create($messages; {model: "my-claude"})

// Integraciones con un alias de modelo
var $result := $client.embeddings.create("text"; "my-embedding")
```

### Cómo funciona

#### Alias de proveedor (`provider:model`)

Cuando se utiliza la sintaxis `provider:model`, el cliente automáticamente:

1. **Analiza** la cadena del modelo para extraer el nombre del proveedor y el nombre del modelo
   - Ejemplo: `"openai:gpt-5.1"` → provider=`"openai"`, model=`"gpt-5.1"`

2. **Búsqueda** la configuración del proveedor desde el archivo JSON cargado
   - Recupera `baseURL`, `apiKey`, `organization`, `project`

3. **Efectúa la solicitud de API** usando la configuración resuelta
   - Envía una petición a la `baseURL` del proveedor con la `apiKey` correcta

#### Alias de modelo (nombre simple)

Cuando se utiliza un nombre de modelo simple que corresponde con un alias configurado, el cliente automáticamente:

1. **Busca** el alias del modelo en la sección `models` de la configuración
   - Ejemplo: `"my-gpt"` → encuentra una entrada con `provider: "openai"`, `model: "gpt-5.1"`

2. **Resuelve** el proveedor asociado para obtener `baseURL` y `apiKey`

3. **Efectúa la petición API** utilizando el punto de terminación del proveedor y el ID del modelo almacenado

### Uso de nombres de modelos sencillos

Si especifica un nombre de modelo **sin** prefijo de proveedor, el cliente utiliza la configuración de su constructor:

```4d
// Utilizar la configuración del constructor
var $client := cs.AIKit.OpenAI.new({apiKey: "sk-..."; baseURL: "https://api.openai.com/v1"})
var $result := $client.chat.completions.create($messages; {model: "gpt-5..." }1"})

// Sustitución con alias de proveedor
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})

// Sustitución con alias de modelo (nombre vacío)
var $result := $client.chat.completions.create($messages; {model: "my-gpt"})
```

## Ejemplos

### Aplicación de chat multiproveedor

```4d
var $client := cs.AIKit.OpenAI.new()
var $messages := []
$messages.push({role: "user"; content: "What is the capital of France?"})

// Try OpenAI
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})

// Prueba Antropic
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-5-sonnet"})

// Prueba local Ollama
var $result := $client.chat.completions.create($messages; {model: "local:llama3.2"})
```

### Integraciones con varios proveedores

```4d
var $client := cs.AIKit.OpenAI.new()
var $text := "Hola mundo"

// Utilizar embeddings OpenAI
var $embedding1 := $client.embeddings.create($text; "openai:text-embedding-3-small")

// Utilizar embeddings locales
var $embedding2 := $client.embeddings.create($text; "local:nomic-embed-text")
```

## Gestión de configuraciones

Las configuraciones de los proveedores pueden gestionarse a través de los [Parámetros de 4D](https://developer.4d.com/docs/settings/ai) o editando directamente los archivos JSON.

**Para añadir o modificar proveedores:**

1. Utilice la interfaz de los Parámetros 4D (recomendado), o
2. Edite el archivo JSON apropiado (archivo de datos usuario, usuario o estructura)
3. Reinicie la aplicación o cree una nueva instancia de cliente OpenAI para cargar los cambios

**Ubicación del archivo recomendado:**

- **Para las configuraciones específicas de usuario:** `<data folder>/Settings/AIProviders.json`
- **Para los valores por defecto de la aplicación:** `/SOURCES/AIProviders.json`

### Sin capacidad de recarga

Una vez instanciado un cliente, no puede recargar las configuraciones del proveedor. Para recoger los cambios de configuración:

```4d
// Configuración modificada - crear nuevo cliente
var $client := cs.AIKit.OpenAI.new()
```

## Consideraciones de seguridad

Cuando se utiliza 4D en modo cliente/servidor, se **recomienda encarecidamente** ejecutar el código relacionado con la IA del lado del servidor para proteger los tokens y credenciales de la API de la exposición a las máquinas cliente.

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

### Alias de modelos con nombre

Definir los modelos una vez, úselos en todas partes por su nombre:

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

// Utiliza alias de modelos con nombre - no es necesario recordar el proveedor o el ID del modelo
var $result := $client.chat.completions.create($messages; {model: "chat"})
var $result := $client.chat.completions.create($messages; {model: "fast"})
var $embedding := $client.embeddings.create("text"; "embedding")
```

### Listar todos los modelos configurados

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
// Ruta a diferentes organizaciones
var $resultA := $client.chat.completions.create($messages; {model: "openai-team-a:gpt-5.1"})
var $resultB := $client.chat.completions.create($messages; {model: "openai-team-b:gpt-5.1"})
```

## Documentación relacionada

- [Clase OpenAI](Classes/OpenAI.md) - Clase cliente principal
- [Clase OpenAIProviders](Classes/OpenAIProviders.md) - Gestión de la configuración de proveedores
- [API OpenAI compatibles](compatible-openai.md) - Lista de proveedores compatibles
