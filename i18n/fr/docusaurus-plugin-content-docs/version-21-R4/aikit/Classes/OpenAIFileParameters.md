---
id: openaifileparameters
title: OpenAIFileParameters
---

# OpenAIFileParameters

La classe `OpenAIFileParameters` gère les paramètres des opérations de téléversement de fichiers.

## Hérite de

[OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Nom de propriété | Type   | Obligatoire | Description                                                                                                                                                                                                                               |
| ---------------- | ------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expires_after`  | Object | Optionnel   | La politique d'expiration d'un fichier. Par défaut, les fichiers avec `purpose=batch` expirent après 30 jours et tous les autres fichiers sont conservés jusqu'à ce qu'ils soient supprimés manuellement. |

### Structure de l'objet `expires_after`

L'objet `expires_after` contient les propriétés suivantes :

| Nom de propriété | Type    | Description                                                                                                                                                                                                          |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `anchor`         | Text    | Horodatage de référence à partir duquel la politique d’expiration s’applique. Références prises en charge : `created_at`.                                            |
| `seconds`        | Integer | Délai en secondes après l'horodatage de référence avant que le fichier n’expire. Doit être compris entre 3600 (1 heure) et 2592000 (30 jours). |

## Exemple d'utilisation

```4d
var $params:=cs.AIKit.OpenAIFileParameters.new()

// Fixe l'expiration après 7 jours
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=604800 // 7 jours
```

## Voir également

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileResult](OpenAIFileResult.md)
