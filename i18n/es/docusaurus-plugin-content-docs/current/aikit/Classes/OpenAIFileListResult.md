---
id: openaifilelistresult
title: OpenAIFileListResult
---

# OpenAIFileListResult

La clase `OpenAIFileListResult` contiene el resultado de la lista de los archivos de la API OpenAI.

## Hereda

[OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad  | Tipo       | Descripción                                                                                                                                              |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `files`    | Collection | Returns a collection of [OpenAIFile](OpenAIFile.md) objects from the API response, or an empty collection if no files are found.         |
| `first_id` | Text       | Devuelve el ID del primer archivo de la lista, o una cadena vacía si no está disponible.                                                 |
| `last_id`  | Text       | Devuelve el ID del último archivo de la lista, o una cadena vacía si no está disponible.                                                 |
| `has_more` | Boolean    | Indica si hay más archivos más allá de esta página. `True` si hay más archivos que recuperar, `False` en caso contrario. |

## Ejemplo de Uso

### Uso básico

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.purpose:="assistants"
$params.limit:=50

var $result:=$client.files.list($params)
var $files:=$result.files

For each ($file; $files)
    // Process each OpenAIFile object
    // $file.filename -> "salesOverview.pdf"
    // $file.bytes -> 175
    // $file.purpose -> "assistants"
End for each
```

### Ejemplo de paginación

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100

var $result:=$client.files.list($params)
var $allFiles:=$allFiles.combine($result.files)

// Continue fetching if there are more files
While ($result.has_more)
    $params.after:=$result.last_id
    $result:=$client.files.list($params)
    $allFiles:=$allFiles.combine($result.files)
End while 

// $allFiles now contains all files from the organization
```

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)