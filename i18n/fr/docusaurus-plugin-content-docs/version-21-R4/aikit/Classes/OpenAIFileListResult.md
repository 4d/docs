---
id: openaifilelistresult
title: OpenAIFileListResult
---

# OpenAIFileListResult

La classe `OpenAIFileListResult` contient le résultat de la liste des fichiers de l'API OpenAI.

## Hérite de

[OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété  | Type       | Description                                                                                                                                                   |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `files`    | Collection | Renvoie une collection d'objets [OpenAIFile](OpenAIFile.md) depuis la réponse de l'API, ou une collection vide si aucun fichier n'est trouvé. |
| `first_id` | Text       | Renvoie l'ID du premier fichier de la liste, ou une chaîne vide s'il n'est pas disponible.                                                    |
| `last_id`  | Text       | Renvoie l'ID du dernier fichier de la liste, ou une chaîne vide s'il n'est pas disponible.                                                    |
| `has_more` | Boolean    | Indique s'il y a d'autres fichiers au-delà de cette page. `True` s'il y a plus de fichiers à récupérer, `False` sinon.        |

## Exemple d'utilisation

### Utilisation de base

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.purpose:="assistants"
$params.limit:=50

var $result:=$client.files.list($params)
var $files:=$result.files

For each ($file; $files)
    // Traiter chaque objet OpenAIFile
    // $file.filename -> "salesOverview.pdf"
    // $file.bytes -> 175
    // $file.purpose -> "assistants"
End for each
```

### Exemple de pagination

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100

var $result:=$client.files.list($params)
var $allFiles:=$allFiles.combine($result.files)

// Continuer de récupérer des fichiers tant qu'il y en a
While ($result.has_more)
    $params.after:=$result.last_id
    $result:=$client.files.list($params)
    $allFiles:=$allFiles.combine($result.files)
End while 

// $allFiles contient maintenant tous les fichiers de l'organisation
```

## Voir également

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)