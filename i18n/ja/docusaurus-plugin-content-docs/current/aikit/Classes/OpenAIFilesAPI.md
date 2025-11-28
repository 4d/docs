---
id: openaifilesapi
title: OpenAIFilesAPI
---

# OpenAIFilesAPI

`OpenAIFilesAPI` クラスはOpenAI のAPI を使用してファイルを管理する機能を提供します。 ファイルをアップロードして、 [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning)、 [Batch](https://platform.openai.com/docs/api-reference/batch) 処理、そしてVision を含む様々なエンドポイントで使用することができます。

> **注意:** この API はOpenAI としか互換性がありません。 [互換性のあるプロバイダー](../compatible-openai.md) ドキュメンテーションに記載されている他のプロバイダーでは、ファイル管理操作をサポートしていません。

API 参照: <https://platform.openai.com/docs/api-reference/files>

## ファイルサイズ上限

- **個別のファイル:** 1ファイルあたり 512 MB まで
- **組織全体:** 1 TB まで([組織](https://platform.openai.com/docs/guides/production-best-practices/setting-up-your-organization) によってアップロードされたすべてのファイルの累計サイズ)

## 関数

### create()

**create**(*file* : 4D.File | 4D.Blob; *purpose* : Text; *parameters* : cs.OpenAIFileParameters) : cs.OpenAIFileResult

様々なエンドポイントで使用できるファイルをアップロードします。

**エンドポイント:** `POST https://api.openai.com/v1/files`

| 引数           | 型                                                                                                                                                  | 説明                                                         |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `ファイル`       | [4D.File](https://developer.4d.com/docs/API/FileClass) あるいは [4D.Blob](https://developer.4d.com/docs/API/BlobClass) | アップロードするファイルあるいはBlob オブジェクト(ファイル名ではない)。 |
| `purpose`    | Text                                                                                                                                               | **必須。** アップロードされたファイルの目的。                                  |
| `parameters` | [OpenAIFileParameters](OpenAIFileParameters.md)                                                                                                    | 失効期限のポリシーを含めた、オブションの引数。                                    |
| 戻り値          | [OpenAIFileResult](OpenAIFileResult.md)                                                                                                            | ファイルの結果                                                    |

**エラーのスロー:** `file` が4D.File あるいは 4D.Blob ではない場合、あるいは`purpose` がからの場合にはエラーがスローされます。

#### サポートされている目的

- `assistants`: Assistants API で使用されます (⚠️ [OpenAI では非推奨](https://platform.openai.com/docs/assistants/whats-new))
- `batch`: [Batch API](https://platform.openai.com/docs/api-reference/batch) で使用されます (デフォルトでは 30 日後に失効します)
- `fine-tune`: [微調整](https://platform.openai.com/docs/api-reference/fine-tuning) で使用されます
- `vision`: ビジョンの微調整に使用される画像
- `user_data`: 任意の目的のための柔軟なファイルタイプ
- `evals`: eval データセットに使用する

#### ファイルフォーマットの要件

- **Fine-tuning API:** Only supports `.jsonl` files with specific required formats
- **Batch API:** Only supports `.jsonl` files up to 200 MB with specific required format
- **Assistants API:** Supports specific file types (see Assistants Tools guide)
- **Chat Completions API:** PDFs are only supported

#### Sychronous example

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

#### 非同期の例

Since file uploads can be long operations (especially for large files up to 512 MB), it's recommended to use asynchronous calls to avoid blocking your application. See [Asynchronous Call](../asynchronous-call.md) for more details.

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

Returns information about a specific file.

**Endpoint:** `GET https://api.openai.com/v1/files/{file_id}`

| 引数           | 型                                       | 説明                                                                            |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------- |
| `fileId`     | Text                                    | **Required.** The ID of the file to retrieve. |
| `parameters` | [OpenAIParameters](OpenAIParameters.md) | Optional parameters for the request.                          |
| 戻り値          | [OpenAIFileResult](OpenAIFileResult.md) | ファイルの結果                                                                       |

**Throws:** An error if `fileId` is empty.

#### 例題

```4d
var $result:=$client.files.retrieve("file-abc123")

If ($result.success)
    var $file:=$result.file
    // $file.filename -> "mydata.jsonl"
    // $file.bytes -> 120000
    // $file.purpose -> "fine-tune"
End if
```

### list()

**list**(*parameters* : cs.OpenAIFileListParameters) : cs.OpenAIFileListResult

Returns a list of files that belong to the user's organization.

**Endpoint:** `GET https://api.openai.com/v1/files`

| 引数           | 型                                                       | 説明                                                                |
| ------------ | ------------------------------------------------------- | ----------------------------------------------------------------- |
| `parameters` | [OpenAIFileListParameters](OpenAIFileListParameters.md) | Optional parameters for filtering and pagination. |
| 戻り値          | [OpenAIFileListResult](OpenAIFileListResult.md)         | The file list result                                              |

#### 例題

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

| 引数           | 型                                                     | 説明                                                                          |
| ------------ | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| `fileId`     | Text                                                  | **Required.** The ID of the file to delete. |
| `parameters` | [OpenAIParameters](OpenAIParameters.md)               | Optional parameters for the request.                        |
| 戻り値          | [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md) | The file deletion result                                                    |

**Throws:** An error if `fileId` is empty.

#### 例題

```4d
var $result:=$client.files.delete("file-abc123")

If ($result.success)
    var $status:=$result.deleted
    
    If ($status.deleted)
        ALERT("File deleted successfully")
    End if
End if
```

## 参照

- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)
- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)
