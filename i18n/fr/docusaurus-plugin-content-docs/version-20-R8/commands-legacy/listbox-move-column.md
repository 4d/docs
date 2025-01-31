---
id: listbox-move-column
title: LISTBOX MOVE COLUMN
slug: /commands/listbox-move-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVE COLUMN.Syntax-->**LISTBOX MOVE COLUMN** ( {* ;} *objet* ; *positionCol* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVE COLUMN.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) de la colonne à déplacer |
| positionCol | Integer | &#8594;  | Nouvel emplacement de la colonne |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX MOVE COLUMN.Summary-->La commande **LISTBOX MOVE COLUMN** permet de déplacer par programmation la colonne désignée par le(s) paramètre(s) *objet* et *\** dans le contexte du formulaire en cours d’exécution (mode Application).<!-- END REF--> Le formulaire d’origine, généré en mode Développement, n’est pas modifié. 

Les paramètres *objet* et *\** désignent la colonne à déplacer. Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom de colonne (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable de colonne. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La colonne est déplacée juste avant la colonne désignée par le paramètre *positionCol*. Si le paramètre *positionCol* est supérieur au nombre total de colonnes, la colonne est déplacée après la dernière colonne.

**Note :** Cette commande ne fait rien si elle est appliquée à la première colonne d’une list box affichée en mode hiérarchique.

La commande tient compte des propriétés de colonnes statiques et verrouillées : si vous tentez par exemple de déplacer une colonne statique, la commande ne fait rien. 

Cette fonctionnalité est présente dans 4D en mode Application : l’utilisateur peut déplacer des colonnes non statiques à l’aide de la souris. En revanche, à la différence du déplacement effectué par l’utilisateur, la commande ne génère pas l’événement On Column Moved. 

#### Exemple 

Vous souhaitez intervertir les 2e et 3e colonnes de la list box :

```4d
 LISTBOX MOVE COLUMN(*;"colonne2";3)
```

#### Voir aussi 

[LISTBOX DUPLICATE COLUMN](listbox-duplicate-column.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1274 |
| Thread safe | &cross; |


