---
id: openaifiledeleted
title: OpenAIFileDeleted
---

# OpenAIFileDeleted

La clase `OpenAIFileDeleted` representa el estado de borrado de un archivo en la API OpenAI.

## Propiedades

| Nombre de la propiedad | Tipo    | Descripción                                                                                                        |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `id`                   | Text    | El ID del archivo eliminado (por ejemplo, "file-abc123").                       |
| `deleted`              | Boolean | Si el archivo se ha eliminado correctamente. `True` si el borrado ha tenido éxito. |
| `object`               | Text    | El tipo de objeto, que siempre es "file".                                                          |

## Ejemplo de respuesta

```json
{
  "id": "file-abc123",
  "object": "file",
  "deleted": true
}
```

## Utilizado por

- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
