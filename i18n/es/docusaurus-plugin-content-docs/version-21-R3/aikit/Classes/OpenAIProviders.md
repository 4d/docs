---
id: openaiproviders
title: OpenAIProviders
---

# OpenAIProviders

## Resumen

La clase `OpenAIProviders` gestiona las configuraciones de los proveedores de IA cargando la configuración y gestionando la resolución de cadenas de modelos en el formato `provider:model`.

Para consultar la documentación completa de uso, ver [Alias de modelos de proveedores](../provider-model-aliases.md).

## Descripción

Esta clase permite soporte multiproveedor por:

- carga de configuraciones de proveedores desde un único archivo JSON
- la carga de los alias de modelos con nombre que se asignan a proveedores y a los identificadores de modelos
- la resolución de la sintaxis `provider:model` en configuración completa de la API
- la resolución de los alias de modelos, pasando de un nombre simple al nombre completo del proveedor, junto con las configuraciones del modelo

La clase `OpenAI` carga automáticamente las configuraciones de los proveedores cuando se instancian.

## Constructor

```4d
var $providers := cs.AIKit.OpenAIProviders.new()
```

Crea una nueva instancia que carga la configuración del proveedor desde el archivo `AIProviders.json` (ver [**Archivos de configuración**](../provider-model-aliases.md#configuration-files) en la página "Alias de proveedores de modelos" para más detalles sobre la ubicación y el formato de los archivos).

**Importante:**

- Sólo se carga el primer archivo existente. No se fusionan varios archivos.
- La configuración se lee una vez en el momento de la instanciación. Si el archivo `AIProviders.json` se modifica posteriormente, esos cambios no se reflejarán en la instancia existente. Debe crear una nueva instancia de `OpenAIProviders` para recargar la configuración actualizada.

## Utilización

### Integración con la clase OpenAI

```4d
var $client := cs.AIKit.OpenAI.new()

// Utiliza alias de modelos con la sintaxis provider:model
var $result := $client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
var $result := $client.chat.completions.create($messages; {model: "anthropic:claude-3-opus"})
var $result := $client.chat.completions.create($messages; {model: "local:llama3"})
```

### Acceso directo de proveedores

```4d
var $providers := cs.AIKit.OpenAIProviders.new()

// Obtener una configuración específica del proveedor
var $config := $providers.get("openai")
// Devuelve: {baseURL: "...", apiKey: "...", modelAliases: [...], ...} o Null

// Obtiene todos los nombres de proveedores
var $names := $providers.list()
// Devuelve: ["openai", "anthropic", "mistral", "local"]
```

## Funciones

### get()

**get**(*name* : Text) : Object

Obtener la configuración de un proveedor por su nombre.

| Parámetros | Tipo   | Descripción                                                        |
| ---------- | ------ | ------------------------------------------------------------------ |
| *name*     | Text   | El nombre del proveedor                                            |
| Resultado  | Object | Objeto de configuración del proveedor, o `Null` si no se encuentra |

#### Ejemplo

```4d
var $config := $providers.get("openai")
If ($config # Null)
    // Usar $config.baseURL, $config.apiKey, etc.

    // Podríamos construir un cliente con él
    var $client:=cs.AIKit.OpenAI.new($config)
End if
```

### lista()

**list**() : Collection

Obtener todos los nombres de proveedores.

| Parámetros | Tipo       | Descripción                         |
| ---------- | ---------- | ----------------------------------- |
| Resultado  | Collection | Colección de nombres de proveedores |

#### Ejemplo

```4d
var $names := $providers.list()
// Devuelve: ["openai", "anthropic", ...]

For each ($name; $names)
    var $config := $providers.get($name)
End for each
```

### modelAliases()

**modelAliases**() : Collection

Recuperar todos los alias de modelo configurados.

| Parámetros | Tipo       | Descripción                              |
| ---------- | ---------- | ---------------------------------------- |
| Resultado  | Collection | Colección de objetos de alias de modelos |

Cada objeto de la colección contiene:

| Propiedad   | Tipo | Descripción                               |
| ----------- | ---- | ----------------------------------------- |
| `name`      | Text | Nombre del alias del modelo               |
| `proveedor` | Text | Nombre del proveedor                      |
| `model`     | Text | ID del modelo a utilizar con el proveedor |

#### Ejemplo

```4d
var $models := $providers.modelAliases()
// Devuelve: [{name: "my-gpt", provider: "openai", model: "gpt-5.1"}, ...]

For each ($model; $models)
    // $m.name, $m.provider, $m.model
End for each
```

## Resolución del modelo

Se admiten dos sintaxis para la resolución de modelos:

### Alias de proveedor (`provider:model`)

Especifique directamente el nombre del proveedor y del modelo:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: "openai:gpt-5.1"})
```

Esto se resuelve internamente:

1. Separación `"openai:gpt-5.1"` en provider=`"openai"` y model=`"gpt-5.1"`.
2. Busqueda de la configuración del proveedor `"openai"`
3. Extracción de `baseURL` y `apiKey`
4. Haga la solicitud de API utilizando la configuración resuelta

**Ejemplos:**

- `"openai:gpt-5.1"` → Utilizar el proveedor OpenAI con el modelo gpt-5.1
- `"anthropic:claude-3-opus"` → Utiliza el proveedor Anthropic con claude-3-opus
- `"local:llama3"` → Utilizar un proveedor local con el modelo llama3

### Alias de modelo (nombre simple)

Utiliza un modelo declarado por su nombre simple en la sección `models` de la configuración:

```4d
var $client := cs.AIKit.OpenAI.new()
$client.chat.completions.create($messages; {model: ":my-gpt"})
```

Esto se resuelve internamente:

1. Búsqueda de `"my-gpt"` en la configuración `models`
2. Recuperación de su `provider` (por ejemplo, `"openai"`) y de su `model` (por ejemplo, `"gpt-5.1"`)
3. Resolución del proveedor para obtener `baseURL` y `apiKey`
4. Haga la solicitud de API utilizando la configuración resuelta

**Ejemplos:**

- `"my-gpt"` → Utilizar el alias de modelo "my-gpt" (resuelve a su proveedor y modelo configurados)
- `"my-embedding"` → Usar el alias del modelo "my-embedding" para las operaciones de embebido

