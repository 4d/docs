---
id: openaifiledeleted
title: OpenAIFileDeleted
---

# OpenAIFileDeleted

The `OpenAIFileDeleted` class represents the deletion status of a file in the OpenAI API.

## プロパティ

| プロパティ名    | 型       | 説明                                                                                                                   |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`      | Text    | The ID of the deleted file (e.g., "file-abc123"). |
| `deleted` | Boolean | Whether the file was successfully deleted. `True` if deletion succeeded.             |
| `object`  | Text    | オブジェクトタイプ。常に"file"。                                                                                                  |

## Example Response

```json
{
  "id": "file-abc123",
  "object": "file",
  "deleted": true
}
```

## Used by

- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
