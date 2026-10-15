---
id: openaifiledeletedresult
title: OpenAIFileDeletedResult
---

# OpenAIFileDeletedResult

La classe `OpenAIFileDeletedResult` contient le résultat d'une opération de suppression de fichier.

## Hérite de

[OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété | Type                                      | Description                                                                                                                                                                        |
| --------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deleted` | [OpenAIFileDeleted](OpenAIFileDeleted.md) | Renvoie le résultat de la suppression du fichier à partir de la réponse de l'API. Renvoie `Null` si la réponse ne contient pas de résultat valide. |

## Exemple d'utilisation

```4d
// Supprimer un fichier
var $fileId:= "file-abc123"
var $result:=$client.files.delete($fileId; Null)
var $deletionStatus:=$result.deleted

If ($deletionStatus.deleted)
    ALERT("File "+$deletionStatus.id+" was successfully deleted")
Else 
    ALERT("Failed to delete file")
End if
```

## Voir également

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileDeleted](OpenAIFileDeleted.md)
