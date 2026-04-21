---
id: openaifiledeletedresult
title: OpenAIFileDeletedResult
---

# OpenAIFileDeletedResult

The `OpenAIFileDeletedResult` class contains the result of a file deletion operation.

## Inherits

[OpenAIResult](OpenAIResult.md)

## Computed properties

| Property  | Type                | Description                                                                 |
|-----------|---------------------|-----------------------------------------------------------------------------|
| `deleted` | [OpenAIFileDeleted](OpenAIFileDeleted.md) | Returns the file deletion result from the API response. Returns `Null` if the response doesn't contain a valid result. |

## Example Usage

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

## See also

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileDeleted](OpenAIFileDeleted.md)
