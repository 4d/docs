---
id: openaifilesapi
title: OpenAIFilesAPI
---

# OpenAIFilesAPI

The `OpenAIFilesAPI` class provides functionalities to manage files using OpenAI's API. Files can be uploaded and used across various endpoints including [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning), [Batch](https://platform.openai.com/docs/api-reference/batch) processing, and Vision.

> **Note:** This API is only compatible with OpenAI. Other providers listed in the [compatible providers](../compatible-openai.md) documentation do not support file management operations.

API Reference: <https://platform.openai.com/docs/api-reference/files>

## File Size Limits

- **Individual files:** up to 512 MB per file
- **Organization total:** up to 1 TB (cumulative size of all files uploaded by your [organization](https://platform.openai.com/docs/guides/production-best-practices/setting-up-your-organization))

## Funções

### create()

**create**(*file* : 4D.File | 4D.Blob; *purpose* : Text; *parameters* : cs.OpenAIFileParameters) : cs.OpenAIFileResult

Upload a file that can be used across various endpoints.

**Endpoint:** `POST https://api.openai.com/v1/files`

| Parâmetro    | Tipo                                                                                                                                             | Descrição                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `file`       | [4D.File](https://developer.4d.com/docs/API/FileClass) or [4D.Blob](https://developer.4d.com/docs/API/BlobClass) | The File or Blob object (not file name) to be uploaded. |
| `purpose`    | Text                                                                                                                                             | **Required.** The intended purpose of the uploaded file.   |
| `parâmetros` | [OpenAIFileParameters](OpenAIFileParameters.md)                                                                                                  | Optional parameters including expiration policy.                           |
| Resultado    | [OpenAIFileResult](OpenAIFileResult.md)                                                                                                          | The file result                                                                            |

**Throws:** An error if `file` is not a 4D.File or 4D.Blob, or if `purpose` is empty.

#### Supported Purposes

- `assistants`: Used in the Assistants API (⚠️ [deprecated by OpenAI](https://platform.openai.com/docs/assistants/whats-new))
- `batch`: Used in the [Batch API](https://platform.openai.com/docs/api-reference/batch) (expires after 30 days by default)
- `fine-tune`: Used for [fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning)
- `vision`: Images used for vision fine-tuning
- `user_data`: Flexible file type for any purpose
- `evals`: Used for eval data sets

#### File Format Requirements

- **Fine-tuning API:** Only supports `.jsonl` files with specific required formats
- **Batch API:** Only supports `.jsonl` files up to 200 MB with specific required format
- **Assistants API:** Supports specific file types (see Assistants Tools guide)
- **Chat Completions API:** PDFs are only supported

#### Exemplo

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

### retrieve()

**retrieve**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileResult

Returns information about a specific file.

**Endpoint:** `GET https://api.openai.com/v1/files/{file_id}`

| Parâmetro    | Tipo                                    | Descrição                                                                     |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------- |
| `fileId`     | Text                                    | **Required.** The ID of the file to retrieve. |
| `parâmetros` | [OpenAIParameters](OpenAIParameters.md) | Optional parameters for the request.                          |
| Resultado    | [OpenAIFileResult](OpenAIFileResult.md) | The file result                                                               |

**Throws:** An error if `fileId` is empty.

#### Exemplo

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

Returns a list of files that belong to the user's organization.

**Endpoint:** `GET https://api.openai.com/v1/files`

| Parâmetro    | Tipo                                                    | Descrição                                                         |
| ------------ | ------------------------------------------------------- | ----------------------------------------------------------------- |
| `parâmetros` | [OpenAIFileListParameters](OpenAIFileListParameters.md) | Optional parameters for filtering and pagination. |
| Resultado    | [OpenAIFileListResult](OpenAIFileListResult.md)         | The file list result                                              |

#### Exemplo

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

Delete a file.

**Endpoint:** `DELETE https://api.openai.com/v1/files/{file_id}`

| Parâmetro    | Tipo                                                  | Descrição                                                                   |
| ------------ | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| `fileId`     | Text                                                  | **Required.** The ID of the file to delete. |
| `parâmetros` | [OpenAIParameters](OpenAIParameters.md)               | Optional parameters for the request.                        |
| Resultado    | [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md) | The file deletion result                                                    |

**Throws:** An error if `fileId` is empty.

#### Exemplo

```4d
var $result:=$client.files.delete("file-abc123")

If ($result.success)
    var $status:=$result.deleted
    
    If ($status.deleted)
        ALERT("File deleted successfully")
    End if
End if
```

## Veja também

- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)
- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)
