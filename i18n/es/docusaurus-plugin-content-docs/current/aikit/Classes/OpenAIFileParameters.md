---
id: openaifileparameters
title: OpenAIFileParameters
---

# OpenAIFileParameters

The `OpenAIFileParameters` class handles parameters for file upload operations.

## Hereda

[OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo   | Requerido | Descripción                                                                                                                                                                                      |
| ---------------------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expires_after`        | Object | Opcional  | The expiration policy for a file. By default, files with `purpose=batch` expire after 30 days and all other files are persisted until they are manually deleted. |

### `expires_after` Object Structure

El objeto `expires_after` contiene las siguientes propiedades:

| Nombre de la propiedad | Tipo    | Descripción                                                                                                                                                                                       |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `anchor`               | Text    | Anchor timestamp after which the expiration policy applies. Supported anchors: `created_at`.                                                      |
| `seconds`              | Integer | The number of seconds after the anchor time that the file will expire. Must be between 3600 (1 hour) and 2592000 (30 days). |

## Ejemplo de Uso

```4d
var $params:=cs.AIKit.OpenAIFileParameters.new()

// Set expiration after 7 days
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=604800  // 7 days
```

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileResult](OpenAIFileResult.md)
