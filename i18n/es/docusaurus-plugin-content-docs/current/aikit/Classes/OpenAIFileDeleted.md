---
id: openaifiledeleted
title: OpenAIFileDeleted
---

# OpenAIFileDeleted

The `OpenAIFileDeleted` class represents the deletion status of a file in the OpenAI API.

## Propiedades

| Nombre de la propiedad | Tipo    | Descripción                                                                                                          |
| ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                   | Text    | The ID of the deleted file (e.g., "file-abc123"). |
| `deleted`              | Boolean | Whether the file was successfully deleted. `True` if deletion succeeded.             |
| `object`               | Text    | El tipo de objeto, que siempre es "file".                                                            |

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

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
