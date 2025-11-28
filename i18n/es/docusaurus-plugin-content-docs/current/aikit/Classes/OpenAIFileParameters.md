---
id: openaifileparameters
title: OpenAIFileParameters
---

# OpenAIFileParameters

La clase `OpenAIFileParameters` gestiona los parámetros de las operaciones de carga de archivos.

## Hereda

[OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo   | Requerido | Descripción                                                                                                                                                                                                |
| ---------------------- | ------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expires_after`        | Object | Opcional  | The expiration policy for a file. Por defecto, los archivos con `purpose=batch` caducan a los 30 días y el resto de archivos se conservan hasta que se borran manualmente. |

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
