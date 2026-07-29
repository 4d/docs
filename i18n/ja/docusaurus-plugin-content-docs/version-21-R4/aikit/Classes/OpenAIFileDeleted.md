---
id: openaifiledeleted
title: OpenAIFileDeleted
---

# OpenAIFileDeleted

`OpenAIFileDeleted` クラスは、OpenAI API 内のファイルの削除ステータスを表します。

## プロパティ

| プロパティ名    | 型       | 説明                                                                  |
| --------- | ------- | ------------------------------------------------------------------- |
| `id`      | Text    | 削除されたファイルのID (例: "file-abc123")。 |
| `deleted` | Boolean | ファイルが正常に削除されたかどうか。 削除が成功した場合には `True`。                              |
| `object`  | Text    | オブジェクトタイプ。常に"file"。                                                 |

## レスポンスの例

```json
{
  "id": "file-abc123",
  "object": "file",
  "deleted": true
}
```

## 使用されるクラス

- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
