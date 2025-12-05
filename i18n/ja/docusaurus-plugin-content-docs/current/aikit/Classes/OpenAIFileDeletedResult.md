---
id: openaifiledeletedresult
title: OpenAIFileDeletedResult
---

# OpenAIFileDeletedResult

`OpenAIFileDeletedResult` クラスは、ファイル削除操作の結果を格納します。

## 継承元

[OpenAIResult](OpenAIResult.md)

## 計算プロパティ

| プロパティ     | 型                                         | 説明                                                                 |
| --------- | ----------------------------------------- | ------------------------------------------------------------------ |
| `deleted` | [OpenAIFileDeleted](OpenAIFileDeleted.md) | API レスポンスからのファイル削除の結果を返します。 レスポンスに有効な結果が格納されていない場合には `Null` を返します。 |

## 使用例

```4d
// ファイルを削除する
var $fileId:="file-abc123"
var $result:=$client.files.delete($fileId; Null)
var $deletionStatus:=$result.deleted

If ($deletionStatus.deleted)
    ALERT("ファイルID "+$deletionStatus.id+" は正常に削除されました")
Else 
    ALERT("ファイルの削除に失敗しました")
End if
```

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileDeleted](OpenAIFileDeleted.md)
