---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<!-- END REF-->
<!--REF #_command_.Generate UUID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nouvel UUID sous forme de texte non-canonique (32 caractères) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Generate UUID.Summary-->La commande **Generate UUID** retourne un nouvel identifiant UUID de 32 caractères sous forme non-canonique.<!-- END REF-->

Un UUID est un nombre d’une taille de 16 octets (128 bits). Il contient 32 caractères hexadécimaux. Il peut être exprimé sous forme non canonique (suite de 32 lettres \[A-F, a-f\] et/ou chiffres \[0-9\], par exemple 550e8400e29b41d4a716446655440000) ou sous forme canonique (groupes de 8,4,4,4,12, par exemple 550e8400-e29b-41d4-a716-446655440000). 

Dans 4D, les numéros UUID peuvent être stockés dans des champs. Pour plus d'informations, reportez-vous à la section *Format UUID* dans le manuel *Mode Développement*.

#### Exemple 

Génération d’un UUID dans une variable : 

```4d
 var MonUUID : Text
 MonUUID:=Generate UUID
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1066 |
| Thread safe | &check; |


