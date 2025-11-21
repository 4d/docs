---
id: openaifileresult
title: OpenAIFileResult
---

# OpenAIFileResult

The `OpenAIFileResult` class contains the result of a single file operation (upload or retrieve).

## 継承元

[OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ  | 型                           | 説明                                                                                                                                          |
| ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `ファイル` | [OpenAIFile](OpenAIFile.md) | Returns the file object from the API response. Returns `Null` if the response doesn't contain a valid file. |

## 使用例

```4d
// Upload a file
var $file:=File("/RESOURCES/training-data.jsonl")

var $result:=$client.files.create($file; "user_data")
var $uploadedFile:=$result.file

// Retrieve file information
var $retrieveResult:=$client.files.retrieve($uploadedFile.id)
```

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
