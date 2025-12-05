---
id: openaifilesapi
title: OpenAIFilesAPI
---

# OpenAIFilesAPI

La classe `OpenAIFilesAPI` fournit des fonctionnalités pour gérer les fichiers en utilisant l'API d'OpenAI. Les fichiers peuvent être téléversés et utilisés à partir de différents points de terminaison, y compris [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning), traitement [Batch](https://platform.openai.com/docs/api-reference/batch) et Vision.

> **Note:** Cette API est uniquement compatible avec OpenAI. Les autres fournisseurs listés dans la page [fournisseurs compatibles](../compatible-openai.md) ne prennent pas en charge les opérations de gestion de fichiers.

Référence API : <https://platform.openai.com/docs/api-reference/files>

## Limites de taille des fichiers

- **Fichiers individuels :** jusqu'à 512 Mo par fichier
- **Total de l'organisation :** jusqu'à 1 To (taille cumulée de tous les fichiers téléversés par votre [organization](https://platform.openai.com/docs/guides/production-best-practices/setting-up-your-organization))

## Fonctions

### create()

**create**(*file* : 4D.File | 4D.Blob; *purpose* : Text; *parameters* : cs.OpenAIFileParameters) : cs.OpenAIFileResult

Téléverser un fichier qui peut être utilisé par différents points de terminaison (*endpoints*).

**Endpoint:** `POST https://api.openai.com/v1/files`

| Paramètres   | Type                                                                                                                                             | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `file`       | [4D.File](https://developer.4d.com/docs/API/FileClass) ou [4D.Blob](https://developer.4d.com/docs/API/BlobClass) | L'objet Fichier ou Blob (et non nom du fichier) à téléverser. |
| `purpose`    | Text                                                                                                                                             | **Obligatoire.** L'objectif visé du fichier téléversé.           |
| `parameters` | [OpenAIFileParameters](OpenAIFileParameters.md)                                                                                                  | Paramètres optionnels incluant la politique d'expiration.                        |
| Résultat     | [OpenAIFileResult](OpenAIFileResult.md)                                                                                                          | Le résultat du fichier                                                                           |

**Erreur:** Génère une erreur si `file` n'est pas un 4D.File ou un 4D.Blob, ou si `purpose` est vide.

#### Objectifs pris en charge

- `assistants` : Utilisé dans l'API Assistants (⚠️ [déprécié by OpenAI](https://platform.openai.com/docs/assistants/whats-new))
- `batch` : Utilisé dans l'[API Batch](https://platform.openai.com/docs/api-reference/batch) (expire après 30 jours par défaut)
- `fine-tune` : Utilisé pour le [réglage fin](https://platform.openai.com/docs/api-reference/fine-tuning)
- `vision` : Images utilisées pour le réglage fin de vision
- `user_data` : Type de fichier flexible pour n'importe quel usage
- `evals` : Utilisé pour les ensembles de données d'évaluation

#### Formats de fichiers requis

- **API Fine-tuning API :** Ne prend en charge que les fichiers `.jsonl` avec des formats spécifiques requis
- **API Batch :** Ne prend en charge que les fichiers `.jsonl` jusqu'à 200 Mo avec un format spécifique requis
- **API Assistants :** Prend en charge des types de fichiers spécifiques (voir le guide Assistants Tools)
- **API de complétions de Chat :** Seuls les PDF sont pris en charge

#### Exemple synchrone

```4d
var $file:=File("/RESOURCES/training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=2592000  // 30 jours

var $result:=$client.files.create($file; "fine-tune"; $params)

If ($result.success)
    var $uploadedFile:=$result.file
    // $uploadedFile.id -> "file-abc123"
    // $uploadedFile.filename -> "training-data.jsonl"
    // $uploadedFile.bytes -> 120000
End if
```

#### Exemple asynchrone

Étant donné que les téléversements de fichiers peuvent être des opérations longues (en particulier pour les fichiers volumineux jusqu'à 512 Mo), il est recommandé d'utiliser des appels asynchrones pour éviter de bloquer votre application. Voir [Appels asynchrones](../asynchronous-call.md) pour plus de détails.

```4d
var $file:=File("/RESOURCES/large-training-data.jsonl")

var $params:=cs.AIKit.OpenAIFileParameters.new()
$params.onTerminate:=Formula(MyFileUploadCallback($1))

// Cet appel retourne immédiatement sans blocage
$client.files.create($file; "fine-tune" ; $params)
```

La fonction de rappel reçoit un [OpenAIFileResult](OpenAIFileResult.md) :

```4d
// MyFileUploadCallback
#DECLARE($result: cs.AIKit.OpenAIFileResult)

If ($result.success)
    var $uploadedFile:=$result.file
    
    ALERT("File uploaded successfully : "+$uploadedFile.filename)
    // Stocker l'ID du fichier pour une utilisation ultérieure
    Form.uploadedFileId:=$uploadedFile.id
Else
    ALERT("Upload failed : "+Formula(JSON Stringify($result.errors)))
End if
```

### retrieve()

**retrieve**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileResult

Retourne des informations sur un fichier spécifique.

**Endpoint:** `GET https://api.openai.com/v1/files/{file_id}`

| Paramètres   | Type                                    | Description                                                                   |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------- |
| `fileId`     | Text                                    | **Obligatoire.** L'ID du fichier à récupérer. |
| `parameters` | [OpenAIParameters](OpenAIParameters.md) | Paramètres optionnels pour la requête.                        |
| Résultat     | [OpenAIFileResult](OpenAIFileResult.md) | Le résultat du fichier                                                        |

**Erreur:** Génère une erreur si `fileId` est vide.

#### Exemple

```4d
var $result:=$client.files.retrieve("file-abc123")

If ($result.success)
    var $file:=$result.file
    // $file.filename -> "mydata.jsonl"
    // $file.bytes -> 120000
    // $file.purpose -> "fine-tune"
End if
```

### list()

**list**(*parameters* : cs.OpenAIFileListParameters) : cs.OpenAIFileListResult

Renvoie une liste de fichiers appartenant à l'organisation de l'utilisateur.

**Endpoint:** `GET https://api.openai.com/v1/files`

| Paramètres   | Type                                                    | Description                                                              |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| `parameters` | [OpenAIFileListParameters](OpenAIFileListParameters.md) | Paramètres optionnels pour le filtrage et la pagination. |
| Résultat     | [OpenAIFileListResult](OpenAIFileListResult.md)         | Liste des fichiers                                                       |

#### Exemple

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.purpose:="assistants"
$params.limit:=50
$params.order:="desc"

var $result:=$client.files.list($params)

If ($result.success)
    var $files:=$result.files
    // $files.length -> 2
    
    For each ($file; $files)
        // $file.filename -> "salesOverview.pdf", "puppy.jsonl", etc.
    End for each
End if
```

### delete()

**delete**(*fileId* : Text; *parameters* : cs.OpenAIParameters) : cs.OpenAIFileDeletedResult

Supprime un fichier.

**Endpoint:** `DELETE https://api.openai.com/v1/files/{file_id}`

| Paramètres   | Type                                                  | Description                                                                   |
| ------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| `fileId`     | Text                                                  | **Obligatoire.** L'ID du fichier à supprimer. |
| `parameters` | [OpenAIParameters](OpenAIParameters.md)               | Paramètres optionnels pour la requête.                        |
| Résultat     | [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md) | Le résultat de la suppression du fichier                                      |

**Erreur:** Génère une erreur si `fileId` est vide.

#### Exemple

```4d
var $result:=$client.files.delete("file-abc123")

If ($result.success)
    var $status:=$result.deleted
    
    If ($status.deleted)
        ALERT("File deleted successfully")
    End if
End if
```

## Voir également

- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)
- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFileDeletedResult](OpenAIFileDeletedResult.md)
