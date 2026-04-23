---
id: openaifileparameters
title: OpenAIFileParameters
---

# OpenAIFileParameters

La clase `OpenAIFileParameters` gestiona los parámetros de las operaciones de carga de archivos.

## Hereda

[OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo   | Requerido | Descripción                                                                                                                                                                                                      |
| ---------------------- | ------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expires_after`        | Object | Opcional  | La política de caducidad de un archivo. Por defecto, los archivos con `purpose=batch` caducan a los 30 días y el resto de archivos se conservan hasta que se borran manualmente. |

### Estructura del objeto \`expires_after

El objeto `expires_after` contiene las siguientes propiedades:

| Nombre de la propiedad | Tipo    | Descripción                                                                                                                                                                                                              |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `anchor`               | Text    | Marca de tiempo de referencia a partir de la cual se aplica la política de caducidad. Referencias soportadas: `created_at`.                                              |
| `seconds`              | Integer | Tiempo en segundos después de la marca de tiempo de referencia antes de que el archivo expire. Debe estar entre 3600 (1 hora) y 2592000 (30 días). |

## Ejemplo de Uso

```4d
var $params:=cs.AIKit.OpenAIFileParameters.new()

// Define la caducidad después de 7 días
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=604800 // 7 días
```

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileResult](OpenAIFileResult.md)
