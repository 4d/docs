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

- **微調整API:** 特定のフォーマットを持つ `.jsonl` ファイルのみがサポートされます
- **Batch API:** 特定のフォーマットを持つ `.jsonl` ファイルで 200 MB までのものがサポートされます
- **Assistants API:** 特定のファイルタイプをサポートします(Assistants ツールガイドを参照してください)
- **チャット補完 API:** PDF のみがサポートされます

#### 同期の例

```4d
var $file:=File("/RESOURCES/training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=2592000  // 30 日

var $result:=$client.files.create($file; "fine-tune"; $params)

If ($result.success)
    var $uploadedFile:=$result.file
    // $uploadedFile.id -> "file-abc123"
    // $uploadedFile.filename -> "training-data.jsonl"
    // $uploadedFile.bytes -> 120000
End if
```

#### 非同期の例

ファイルアップロードは(特に512 MBまでの大きなファイルの場合)長時間のオペレーションとなり得るため、アプリケーションをブロックするのを避けるために非同期の呼び出しを使用することが推奨されます。 詳細については[非同期呼び出し](../非同期呼び出し.md) を参照してください。

```4d
var $file:=File("/RESOURCES/large-training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.onTerminate:=Formula(MyFileUploadCallback($1))

// このコードであればブロックすることなく即座に結果を返す
$client.files.create($file; "fine-tune"; $params)
```

コールバック関数は[OpenAIFileResult](OpenAIFileResult.md) を受け取ります:

```4d
// MyFileUploadCallback
#DECLARE($result: cs.AIKit.OpenAIFileResult)

If ($result.success)
    var $uploadedFile:=$result.file
    
    ALERT("File uploaded successfully: "+$uploadedFile.filename)
    // ファイル ID を後で使うために保存しておく
    Form.uploadedFileId:=$uploadedFile.id
Else
    ALERT("Upload failed: "+Formula(JSON Stringify($result.errors)))
End if
```

### retrieve()

**retrieve**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileResult

特定のファイルに関する情報を返します。

**エンドポイント:** `GET https://api.openai.com/v1/files/{file_id}`

| 引数           | 型                                       | 説明                     |
| ------------ | --------------------------------------- | ---------------------- |
| `fileId`     | Text                                    | **必須。** 取得するファイルの ID 。 |
| `parameters` | [OpenAIParameters](OpenAIParameters.md) | リクエスト用のオプションの引数。       |
| 戻り値          | [OpenAIFileResult](OpenAIFileResult.md) | ファイルの結果                |

**スロー:** `fileId` が空の場合にはエラーをスローします。

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

ユーザーの組織に属するファイルの一覧を返します。

**エンドポイント:** `GET https://api.openai.com/v1/files`

| 引数           | 型                                                       | 説明                            |
| ------------ | ------------------------------------------------------- | ----------------------------- |
| `parameters` | [OpenAIFileListParameters](OpenAIFileListParameters.md) | フィルタリングとページネーションに関するオプションの引数。 |
| 戻り値          | [OpenAIFileListResult](OpenAIFileListResult.md)         | ファイルリストの結果                    |

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

ファイルを削除します。

**エンドポイント:** `DELETE https://api.openai.com/v1/files/{file_id}`

| 引数           | 型                                                     | 説明                     |
| ------------ | ----------------------------------------------------- | ---------------------- |
| `fileId`     | Text                                                  | **必須。** 削除するファイルの ID 。 |
| `parameters` | [OpenAIParameters](OpenAIParameters.md)               | リクエスト用のオプションの引数。       |
| 戻り値          | [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md) | ファイル削除の結果              |

**スロー:** `fileId` が空の場合にはエラーをスローします。

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
