---
id: openaifilelistparameters
title: OpenAIFileListParameters
---

# OpenAIFileListParameters

La classe `OpenAIFileListParameters` contient des paramètres pour lister les fichiers dans l'API OpenAI.

## Hérite de

[OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Nom de propriété | Type    | Obligatoire | Par défaut | Description                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ------- | ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`          | Text    | Optionnel   | -          | Un curseur à utiliser pour la pagination. `after` est un ID d'objet qui définit votre place dans la liste. Par exemple, si vous faites une requête de liste et que vous recevez 100 objets se terminant par `obj_foo`, votre appel suivant peut inclure `after=obj_foo` afin de récupérer la page suivante de la liste. |
| `limit`          | Integer | Optionnel   | 10000      | Limite du nombre d'objets à renvoyer. La limite peut être comprise entre 1 et 10 000, la valeur par défaut étant 10 000.                                                                                                                                                                                                                |
| `order`          | Text    | Optionnel   | desc       | Ordre de tri par l'horodatage `created_at` des objets. Utilisez `asc` pour l'ordre croissant et `desc` pour l'ordre décroissant.                                                                                                                                                                                                        |
| `purpose`        | Text    | Optionnel   | -          | Ne renvoie que les fichiers ayant l'objet indiqué.                                                                                                                                                                                                                                                                                                      |

## Exemple d'utilisation

```4d
// Récupère les 100 premiers fichiers avec l'objet "fine-tune"
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100
$params.purpose:="fine-tune"
$params.order:="desc"

var $result:=$client.files.list($params)
```

## Voir également

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
