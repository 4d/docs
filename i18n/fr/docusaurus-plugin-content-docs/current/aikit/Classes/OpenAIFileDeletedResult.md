---
id: openaifiledeletedresult
title: OpenAIFileDeletedResult
---

# OpenAIFileDeletedResult

The `OpenAIFileDeletedResult` class contains the result of a file deletion operation.

## Hérite de

[OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété | Type                                      | Description                                                                                                                                            |
| --------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deleted` | [OpenAIFileDeleted](OpenAIFileDeleted.md) | Returns the file deletion result from the API response. Returns `Null` if the response doesn't contain a valid result. |

## Exemple d'utilisation

```4d
// Delete a file
var $fileId:="file-abc123"
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
