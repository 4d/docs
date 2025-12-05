---
id: openaifileresult
title: OpenAIFileResult
---

# OpenAIFileResult

La classe `OpenAIFileResult` contient le résultat d'une opération de fichier (upload ou retrieve).

## Hérite de

[OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété | Type                        | Description                                                                                                                                              |
| --------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`    | [OpenAIFile](OpenAIFile.md) | Renvoie l'objet fichier à partir de la réponse de l'API. Renvoie `Null` si la réponse ne contient pas de fichier valide. |

## Exemple d'utilisation

```4d
// Téléversement d'un fichier
var $file:=File("/RESOURCES/training-data.jsonl")

var $result:=$client.files.create($file; "user_data")
var $uploadedFile:=$result.file

// Récupération des informations du fichier
var $retrieveResult:=$client.files.retrieve($uploadedFile.id)
```

## Voir également

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
