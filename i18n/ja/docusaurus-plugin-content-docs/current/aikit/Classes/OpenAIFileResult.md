---
id: openaifileresult
title: OpenAIFileResult
---

# OpenAIFileResult

`OpenAIFileResult` クラスには単一のファイル操作(アップロードあるいは取得)の結果が格納されます。

## 継承元

[OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ  | 型                           | 説明                                                               |
| ------ | --------------------------- | ---------------------------------------------------------------- |
| `ファイル` | [OpenAIFile](OpenAIFile.md) | API レスポンスからのファイルオブジェクトを返します。 レスポンスに有効なファイルが格納されていない場合には `Null` 。 |

## 使用例

```4d
// ファイルをアップロードする
var $file:=File("/RESOURCES/training-data.jsonl")

var $result:=$client.files.create($file; "user_data")
var $uploadedFile:=$result.file

// ファイル情報を取得
var $retrieveResult:=$client.files.retrieve($uploadedFile.id)
```

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
