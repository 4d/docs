---
id: highlight-text
title: HIGHLIGHT TEXT
slug: /commands/highlight-text
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT TEXT.Syntax-->**HIGHLIGHT TEXT** ( {* ;} *objet* ; *débutSél* ; *finSél* )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT TEXT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) <br/>Si omis, objet est un champ ou une variable |
| objet | Field, Variable, any | &#8594;  | Nom d'objet (si * est spécifié) ou Champ ou variable saisissable (si * est omis) |
| débutSél | Integer | &#8594;  | Nouvelle position de début de sélection de texte |
| finSél | Integer | &#8594;  | Nouvelle position de fin de sélection de texte |

<!-- END REF-->

#### Description 

<!--REF #_command_.HIGHLIGHT TEXT.Summary-->La commande **HIGHLIGHT TEXT** sélectionne une partie du texte dans *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* désigne le nom d’un objet (une chaîne). Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre *objet* désigne un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne de caractères mais la référence du champ ou de la variable (champs ou variables de formulaire uniquement).

Si *objet* n'est pas l'objet en cours de modification, il récupère le focus.

**Note :** Cette commande ne peut pas être utilisée avec des champs situés dans un sous-formulaire.

Le paramètre *débutSél* représente la position du premier caractère à sélectionner, et le paramètre *finSél* représente la position du dernier caractère à sélectionner plus un. Si *débutSél* et *finSél* sont identiques, le point d'insertion est placé devant le caractère spécifié par *débutSél* et aucun caractère n'est sélectionné.

Si *finSél* est supérieur au nombre de caractères présents dans l'objet, tous les caractères compris entre *débutSél* et la fin du texte sont sélectionnés.

#### Exemple 1 

L'exemple suivant sélectionne tous les caractères dans le champ saisissable *\[Produits\]Notes* :

```4d
 HIGHLIGHT TEXT([Produits]Notes;1;Length([Produits]Notes)+1)
```

#### Exemple 2 

L'exemple suivant place le point d'insertion au début du champ *\[Produits\]Notes* :

```4d
 HIGHLIGHT TEXT([Produits]Notes;1;1)
```

#### Exemple 3 

L'exemple suivant place le point d'insertion à la fin du champ *\[Produits\]Notes* :

```4d
 $vLen:=Length([Produits]Notes)+1
 HIGHLIGHT TEXT([Produits]Notes;$vLen;$vLen)
```

#### Exemple 4 

Reportez-vous à l'exemple de la commande [FILTER KEYSTROKE](filter-keystroke.md).

#### Voir aussi 

[GET HIGHLIGHT](get-highlight.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 210 |
| Thread safe | &check; |
| Interdite sur le serveur ||


