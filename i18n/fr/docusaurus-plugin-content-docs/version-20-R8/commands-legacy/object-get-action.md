---
id: object-get-action
title: OBJECT Get action
slug: /commands/object-get-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get action.Syntax-->**OBJECT Get action** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get action.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne). Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom de l'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Text | &#8592; | Nom de l'action standard associée et (s'il existe) son paramètre chaîne. |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get action.Summary-->La commande **OBJECT Get action** retourne le nom et (s'il existe), le paramètre de l'action standard associée à l'objet désigné par les paramètres *objet* et *\**.<!-- END REF-->

Passer le paramètre optionnel *\** indique que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, cela signifie que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous passez une référence à un champ ou une variable au lieu d'une chaîne (champ ou objet variable seulement).

Vous pouvez fixer une action standard sur un objet dans l'éditeur de formulaire, en utilisant la Liste des propriétés ou en utilisant la commande [OBJECT SET ACTION](object-set-action.md). **OBJECT Get action** retourne une chaîne contenant le nom de l'action standard associée à l'objet (ainsi que son paramètre s'il y en a un).

Pour une liste complète des actions standard, référez-vous à la section *Actions standard* dans le manuel *Mode Développement*. 

#### Exemple 

Vous souhaitez associer l'action "Annuler" à tous les objets du formulaire qui n'ont aucune action associée :

```4d
 ARRAY TEXT($arrObjects;0)
 
 FORM GET OBJECTS($arrObjects)
 For($i;1;Size of array($arrObjects))
    If(OBJECT Get action(*;$arrObjects{$i})=ak none)
       OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)
    End if
 End for
```

#### Voir aussi 

[OBJECT SET ACTION](object-set-action.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1457 |
| Thread safe | &cross; |


