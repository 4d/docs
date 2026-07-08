---
id: openaifileresult
title: OpenAIFileResult
---

# OpenAIFileResult

The `OpenAIFileResult` class contains the result of a single file operation (upload or retrieve).

## Inherits

[OpenAIResult](OpenAIResult.md)

## Propriedades calculadas

| Propriedade | Tipo                        | Descrição                                                                                                                                   |
| ----------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`      | [OpenAIFile](OpenAIFile.md) | Returns the file object from the API response. Returns `Null` if the response doesn't contain a valid file. |

## Exemplo de uso

```4d
// Upload a file
var $file:=File("/RESOURCES/training-data.jsonl")

var $result:=$client.files.create($file; "user_data")
var $uploadedFile:=$result.file

// Retrieve file information
var $retrieveResult:=$client.files.retrieve($uploadedFile.id)
```

## Veja também

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
