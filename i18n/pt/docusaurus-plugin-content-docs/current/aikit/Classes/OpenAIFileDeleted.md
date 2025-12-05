---
id: openaifiledeleted
title: OpenAIFileDeleted
---

# OpenAIFileDeleted

The `OpenAIFileDeleted` class represents the deletion status of a file in the OpenAI API.

## Propriedades

| Nome da propriedade | Tipo       | Descrição                                                                                                            |
| ------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                | Text       | The ID of the deleted file (e.g., "file-abc123"). |
| `deleted`           | Parâmetros | Whether the file was successfully deleted. `True` if deletion succeeded.             |
| `objeto`            | Text       | The object type, which is always "file".                                                             |

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

## Veja também

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
