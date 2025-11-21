---
id: openaifileresult
title: OpenAIFileResult
---

# OpenAIFileResult

The `OpenAIFileResult` class contains the result of a single file operation (upload or retrieve).

## Hereda

[OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad | Tipo                        | Descripción                                                                                                                                           |
| --------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`    | [OpenAIFile](OpenAIFile.md) | Devuelve el objeto de archivo de la respuesta de la API. Returns `Null` if the response doesn't contain a valid file. |

## Ejemplo de Uso

```4d
// Upload a file
var $file:=File("/RESOURCES/training-data.jsonl")

var $result:=$client.files.create($file; "user_data")
var $uploadedFile:=$result.file

// Retrieve file information
var $retrieveResult:=$client.files.retrieve($uploadedFile.id)
```

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
