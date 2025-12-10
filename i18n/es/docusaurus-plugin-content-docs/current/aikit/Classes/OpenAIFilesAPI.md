---
id: openaifilesapi
title: OpenAIFilesAPI
---

# OpenAIFilesAPI

The `OpenAIFilesAPI` class provides functionalities to manage files using OpenAI's API. Files can be uploaded and used across various endpoints including [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning), [Batch](https://platform.openai.com/docs/api-reference/batch) processing, and Vision.

> **Nota:** esta API sólo es compatible con OpenAI. Other providers listed in the [compatible providers](../compatible-openai.md) documentation do not support file management operations.

Referencia API: <https://platform.openai.com/docs/api-reference/files>

## Límites de tamaño de los archivos

- **Archivos individuales:** hasta 512 MB por archivo
- **Organization total:** up to 1 TB (cumulative size of all files uploaded by your [organization](https://platform.openai.com/docs/guides/production-best-practices/setting-up-your-organization))

## Funciones

### create()

**create**(*file* : 4D.File | 4D.Blob; *purpose* : Text; *parameters* : cs.OpenAIFileParameters) : cs.OpenAIFileResult

Upload a file that can be used across various endpoints.

**Endpoint:** `POST https://api.openai.com/v1/files`

| Parámetros   | Tipo                                                                                                                                             | Descripción                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `file`       | [4D.File](https://developer.4d.com/docs/API/FileClass) or [4D.Blob](https://developer.4d.com/docs/API/BlobClass) | The File or Blob object (not file name) to be uploaded. |
| `purpose`    | Text                                                                                                                                             | **Requerido.** el propósito previsto del archivo subido.   |
| `parámetros` | [OpenAIFileParameters](OpenAIFileParameters.md)                                                                                                  | Parámetros opcionales, incluida la política de expiración.                 |
| Resultado    | [OpenAIFileResult](OpenAIFileResult.md)                                                                                                          | El resultado del archivo                                                                   |

**Throws:** An error if `file` is not a 4D.File or 4D.Blob, or if `purpose` is empty.

#### Propósitos soportados

- `assistants`: Used in the Assistants API (⚠️ [deprecated by OpenAI](https://platform.openai.com/docs/assistants/whats-new))
- `batch`: Used in the [Batch API](https://platform.openai.com/docs/api-reference/batch) (expires after 30 days by default)
- `fine-tune`: utilizado para [ajuste fino](https://platform.openai.com/docs/api-reference/fine-tuning)
- `vision`: imágenes utilizadas para afinar la visión
- `user_data`: tipo de archivo flexible para cualquier propósito
- `evals`: se utiliza para evaluar conjuntos de datos

#### File Format Requirements

- **Fine-tuning API:** Only supports `.jsonl` files with specific required formats
- **Batch API:** Only supports `.jsonl` files up to 200 MB with specific required format
- **API de Asistentes:** soporta tipos de archivo específicos (ver Guía de herramientas de asistentes)
- **API de finalización de chat:** sólo se admiten archivos PDF

#### Ejemplo sincrónico

```4d
var $file:=File("/RESOURCES/training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=2592000  // 30 days

var $result:=$client.files.create($file; "fine-tune"; $params)

If ($result.success)
    var $uploadedFile:=$result.file
    // $uploadedFile.id -> "file-abc123"
    // $uploadedFile.filename -> "training-data.jsonl"
    // $uploadedFile.bytes -> 120000
End if
```

#### Ejemplo asincrónico

Since file uploads can be long operations (especially for large files up to 512 MB), it's recommended to use asynchronous calls to avoid blocking your application. Ver [llamada asincrónica](../asynchronous-call.md) para más detalles.

```4d
var $file:=File("/RESOURCES/large-training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.onTerminate:=Formula(MyFileUploadCallback($1))

// This call returns immediately without blocking
$client.files.create($file; "fine-tune"; $params)
```

The callback function receives an [OpenAIFileResult](OpenAIFileResult.md):

```4d
// MyFileUploadCallback
#DECLARE($result: cs.AIKit.OpenAIFileResult)

If ($result.success)
    var $uploadedFile:=$result.file
    
    ALERT("File uploaded successfully: "+$uploadedFile.filename)
    // Store the file ID for later use
    Form.uploadedFileId:=$uploadedFile.id
Else
    ALERT("Upload failed: "+Formula(JSON Stringify($result.errors)))
End if
```

### retrieve()

**retrieve**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileResult

Devuelve información sobre un archivo específico.

**Endpoint:** `GET https://api.openai.com/v1/files/{file_id}`

| Parámetros   | Tipo                                    | Descripción                                                                   |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------- |
| `fileId`     | Text                                    | **Requerido.** El ID del archivo a recuperar. |
| `parámetros` | [OpenAIParameters](OpenAIParameters.md) | Parámetros opcionales para la solicitud.                      |
| Resultado    | [OpenAIFileResult](OpenAIFileResult.md) | El resultado del archivo                                                      |

**Throws:** An error if `fileId` is empty.

#### Ejemplo

```4d
var $result:=$client.files.retrieve("file-abc123")

If ($result.success)
    var $file:=$result.file
    // $file.filename -> "mydata.jsonl"
    // $file.bytes -> 120000
    // $file.purpose -> "fine-tune"
End if
```

### lista()

**list**(*parameters* : cs.OpenAIFileListParameters) : cs.OpenAIFileListResult

Devuelve una lista de archivos que pertenecen a la organización del usuario.

**Endpoint:** `GET https://api.openai.com/v1/files`

| Parámetros   | Tipo                                                    | Descripción                                                             |
| ------------ | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| `parámetros` | [OpenAIFileListParameters](OpenAIFileListParameters.md) | Parámetros opcionales para el filtrado y la paginación. |
| Resultado    | [OpenAIFileListResult](OpenAIFileListResult.md)         | Lista de los archivos                                                   |

#### Ejemplo

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.purpose:="assistants"
$params.limit:=50
$params.order:="desc"

var $result:=$client.files.list($params)

If ($result.success)
    var $files:=$result.files
    // $files.length -> 2
    
    For each ($file; $files)
        // $file.filename -> "salesOverview.pdf", "puppy.jsonl", etc.
    End for each
End if
```

### delete()

**delete**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileDeletedResult

Eliminar un archivo.

**Endpoint:** `DELETE https://api.openai.com/v1/files/{file_id}`

| Parámetros   | Tipo                                                  | Descripción                                                                |
| ------------ | ----------------------------------------------------- | -------------------------------------------------------------------------- |
| `fileId`     | Text                                                  | **Requerido.** el ID del archivo a borrar. |
| `parámetros` | [OpenAIParameters](OpenAIParameters.md)               | Parámetros opcionales para la solicitud.                   |
| Resultado    | [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md) | The file deletion result                                                   |

**Throws:** An error if `fileId` is empty.

#### Ejemplo

```4d
var $result:=$client.files.delete("file-abc123")

If ($result.success)
    var $status:=$result.deleted
    
    If ($status.deleted)
        ALERT("File deleted successfully")
    End if
End if
```

## Ver también

- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)
- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)
