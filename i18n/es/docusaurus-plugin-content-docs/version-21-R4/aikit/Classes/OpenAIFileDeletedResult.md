---
id: openaifiledeletedresult
title: OpenAIFileDeletedResult
---

# OpenAIFileDeletedResult

La clase `OpenAIFileDeletedResult` contiene el resultado de una operación de borrado de archivos.

## Hereda

[OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad | Tipo                                      | Descripción                                                                                                                                                                              |
| --------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deleted` | [OpenAIFileDeleted](OpenAIFileDeleted.md) | Devuelve el resultado de la eliminación del archivo a partir de la respuesta de la API. Devuelve `Null` si la respuesta no contiene un resultado válido. |

## Ejemplo de Uso

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

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileDeleted](OpenAIFileDeleted.md)
