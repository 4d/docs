---
id: listbox-collapse
title: LISTBOX COLLAPSE
slug: /commands/listbox-collapse
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX COLLAPSE.Syntax-->**LISTBOX COLLAPSE** ( {* ;} *objet* {; *récursive* {; *sélecteur* {; *ligne* {; *colonne*}}}} )<!-- END REF-->
<!--REF #_command_.LISTBOX COLLAPSE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Variable (si * omis) |
| récursive | Boolean | &#8594;  | Vrai = contracter les sous-niveaux, Faux = ne pas contracter les sous-niveaux |
| sélecteur | Integer | &#8594;  | Partie de la list box à contracter |
| ligne | Integer | &#8594;  | Numéro de ligne de la rupture à contracter ou Numéro de niveau de la list box à contracter |
| colonne | Integer | &#8594;  | Numéro de colonne de la rupture à contracter |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX COLLAPSE.Summary-->La commande **LISTBOX COLLAPSE** vous permet de provoquer la contraction des lignes de rupture de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Si la list box n’est pas configurée en mode hiérarchique, la commande ne fait rien. Pour plus d’informations sur les list box hérarchiques, reportez-vous à la section *List box hiérarchiques*.

Le paramètre optionnel *récursive* vous permet de paramétrer la contraction des sous-niveaux hiérarchiques de la list box. Passez Vrai ou omettez ce paramètre pour que la commande provoque la contraction de tous les niveaux et tous les sous-niveaux. Si vous passez Faux, seul le premier niveau sera contracté. 

Le paramètre optionnel *sélecteur* vous permet de définir la portée de la commande. Vous pouvez passer dans ce paramètre l’une des constantes suivantes, placées dans le thème *List box* :

| Constante    | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk all       | Entier long | 0      | La commande agit sur tous les sous-niveaux (valeur par défaut, utilisée si le paramètre est omis).                                                                                                                                                                                                                                                       |
| lk selection | Entier long | 1      | La commande agit sur les sous-niveaux sélectionnés.                                                                                                                                                                                                                                                                                                      |
| lk break row | Entier long | 2      | La commande agit sur le sous-niveau auquel appartient la "cellule" désignée par les paramètres *ligne* et *colonne*. A noter que ces paramètres représentent les numéros de ligne et de colonne dans la listbox en mode standard et non dans sa représentation hiérarchique. Si les paramètres *ligne* et *colonne* sont omis, la commande ne fait rien. |
| lk level     | Entier long | 3      | La commande agit sur toutes les lignes de rupture correspondant à la colonne *niveau*. Ce paramètre désigne un numéro de colonne dans la listbox en mode standard et non dans sa représentation hiérarchique. Si le paramètre *niveau* est omis, la commande ne fait rien.                                                                               |

Si la sélection ou la list box ne contient pas de ligne de rupture, ou si toutes les lignes de rupture sont déjà contractées, la commande ne fait rien. 

#### Exemple 

Cet exemple contracte le premier niveau de lignes de rupture de la sélection de la list box :

```4d
 LISTBOX COLLAPSE(*;"MaListbox";False;lk selection)
```

#### Voir aussi 

[LISTBOX EXPAND](listbox-expand.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1101 |
| Thread safe | &check; |
| Interdite sur le serveur ||


