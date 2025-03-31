---
id: listbox-set-column-formula
title: LISTBOX SET COLUMN FORMULA
slug: /commands/listbox-set-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Syntax-->**LISTBOX SET COLUMN FORMULA** ( {* ;} *objet* ; *formule* ; *typeDonnées* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| formule | Text | &#8594;  | Formule 4D associée à la colonne |
| typeDonnées | Integer | &#8594;  | Type de résultat de la formule |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Summary-->La commande **LISTBOX SET COLUMN FORMULA** permet de modifier la *formule* associée à la colonne de list box désignée par les paramètres *objet* et *\**.<!-- END REF--> Les formules ne peuvent être utilisées que lorsque la propriété “Source de données” de la list box est **Sélection courante**, **Sélection temporaire** ou **Collection ou entity selection**.

**Note :** Vous pouvez utiliser la commande [OBJECT SET DATA SOURCE](object-set-data-source.md) pour définir la source de données d'une list box de type tableau. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Ce paramètre doit désigner une colonne de la listbox.

Le paramètre *formule* peut contenir toute expression valide, soit :

* une instruction,
* une formule générée à l’aide de l’éditeur de formules,
* un appel à une commande 4D,
* un appel à une méthode projet.

Au moment de l’appel de la commande, la formule est analysée puis exécutée.

**Note :** Utilisez la commande [Command name](command-name.md) afin de définir des formules indépendantes de la langue de l’application (lorsqu’elles font appel à des commandes 4D).

Le paramètre *typeDonnées* permet de désigner le type des données issues de l’exécution de la formule. Vous devez passer dans ce paramètre une des constantes du thème *Types champs et variables*. Si le résultat de la formule ne correspond pas au type de données attendu, une erreur est générée.

#### Voir aussi 

[LISTBOX Get column formula](listbox-get-column-formula.md)  
[OBJECT SET DATA SOURCE](object-set-data-source.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1203 |
| Thread safe | &cross; |


