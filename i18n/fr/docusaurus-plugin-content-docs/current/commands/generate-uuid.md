---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<br>**Generate UUID**( *version* ) : Text<!-- END REF-->

<!--REF #_command_.Generate UUID.Params-->

| Paramètres | Type    |                             | Description                                                                      |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------------------------- |
| version    | Integer | &#8594; | Version de l'UUID : 4 (par défaut) ou 7       |
| Résultat   | Text    | &#8592; | Nouvel UUID sous forme de texte non canonique (32 caractères) |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                          |
| ------- | -------------------------------------- |
| 20 R10  | Prise en charge du paramètre *version* |

</details>

## Description

<!--REF #_command_.Generate UUID.Summary-->La fonction Generate UUID renvoie un nouvel identifiant UUID de 32 caractères sous une forme non canonique<!-- END REF-->.

Un UUID est un nombre de 16 octets (128 bits). Il contient 32 caractères hexadécimaux. Il peut être exprimé soit sous forme non canonique (série de 32 lettres \[A-F, a-f\] et/ou chiffres \[0-9\], par exemple 550e8400e29b41d4a716446655440000), soit sous forme canonique (groupes de 8,4,4,4,4,12, par exemple 550e8400-e29b-41d4-a716-446655440000).

Vous pouvez utiliser le paramètre facultatif *version* pour définir la **version de l'UUID** à générer. Les valeurs suivantes sont acceptées :

- **4** (par défaut si omis), pour des UUID entièrement aléatoires
- **7**, pour des UUID aléatoires et horodatés (l'ordre chronologique correspond à l'ordre lexical).

:::note

Pour plus d'informations sur les UUID version 7, veuillez lire [cet article de blog](https://blog.4d.com/sort-uuids-with-version-7).

:::

Dans 4D, les numéros UUID peuvent être stockés dans des champs (voir [UUID Format](https://doc.4d.com/4Dv20/4D/20.2/Field-properties.300-6750280.en.html#106190)). Une [option des Propriétés 4D](../settings/database.md#auto-uuid-version) permet de générer des UUID version 7 dans les champs automatiques.

## Exemple

Génération d'un UUID dans une variable :

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1066                        |
| Thread safe        | &check; |


