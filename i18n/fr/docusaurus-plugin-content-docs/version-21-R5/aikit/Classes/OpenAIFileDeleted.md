---
id: openaifiledeleted
title: OpenAIFileDeleted
---

# OpenAIFileDeleted

La classe `OpenAIFileDeleted` représente le statut de suppression d'un fichier dans l'API OpenAI.

## Propriétés

| Nom de propriété | Type    | Description                                                                                                          |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`             | Text    | L'identifiant du fichier supprimé (par exemple, "file-abc123").                   |
| `deleted`        | Boolean | Indique si le fichier a été supprimé avec succès. `True` si la suppression a réussi. |
| `object`         | Text    | Le type d'objet, qui est toujours "file".                                                            |

## Exemple de réponse

```json
{
  "id": "file-abc123",
  "object": "file",
  "deleted": true
}
```

## Utilisé par

- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)

## Voir également

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
