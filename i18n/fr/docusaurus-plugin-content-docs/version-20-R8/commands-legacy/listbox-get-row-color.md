---
id: listbox-get-row-color
title: LISTBOX Get row color
slug: /commands/listbox-get-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color.Syntax-->**LISTBOX Get row color** ( {* ;} *objet* ; *ligne* {; *typeCouleur*} )  : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, l'objet est un nom d'objet (chaîne). Si omis, l'objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| ligne | Integer | &#8594;  | Numéro de ligne |
| typeCouleur | Integer | &#8594;  | Couleur de police de la listbox (par défaut) ou couleur de fond de la listbox |
| Résultat | Text | &#8592; | Valeur de la couleur |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get row color.Summary-->**Note :** Cette commande ne fonctionne qu'avec les list box de type tableau.<!-- END REF-->

La commande **LISTBOX Get row color** retourne la couleur d'une ligne ou d'une cellule dans la list box désignée par les paramètres *objet* et *\** en tant que chaîne CSS.

**Note :** Si vous souhaitez lire la couleur au format entier long de 4 octets, vous devez utiliser la commande [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Pour plus d'informations sur les formats de couleur, veuillez consulter la description de la commande [OBJECT SET RGB COLORS](object-set-rgb-colors.md). 

Le paramètre optionnel *\** indique que le paramètre *objet* est un nom d'objet (chaîne). Si vous ne passez pas ce paramètre, il indique que le paramètre *objet* est une variable. Dans ce cas, vous passez une référence de variable au lieu d'une chaine. Vous pouvez désigner une list box ou une colonne de list box dans le paramètre *objet* :

* Lorsque le paramètre *objet* désigne une list box, la commande retourne la couleur de la ligne.
* Lorsque le paramètre *objet* désigne une colonne de list box, la commande retourne la couleur de la cellule.

Dans *ligne,* passez le numéro de la ligne dont vous souhaitez lire la couleur. 

**Note :** La commande ne tient pas compte des états caché/visible des lignes de la list box.

Dans le paramètre *typeCouleur*, vous pouvez passer la constante lk couleur de fond ou lk couleur de police (thème "*List box*") afin d'identifier la couleur de fond ou de police de la ligne. Si vous omettez ce paramètre, la couleur de la police est retournée.

**Attention :** Une couleur affectée à une ligne ne s'affiche pas nécessairement dans chaque cellule de la ligne (voir l'exemple). Si des valeurs de couleurs qui sont en conflit sont paramétrées à l'aide des propriétés des list box ou des colonnes de list box, un ordre de priorité est appliqué. Pour plus d'informations, veuillez consulter le manuel *Mode Développement*.

#### Exemple 

Considérons la list box suivante :

![](../assets/en/commands/pict1205393.fr.png)

```4d
 var $vtColor;$vtColor2;$vtColor3 : Text
 $vtColor:=LISTBOX Get row color(*;"Col5";3)
 $vtColor2:=LISTBOX Get row color(*;"List Box";3)
 $vtColor3:=LISTBOX Get row color(*;"List Box";3;lk background color)
  // $vtColor contient "#FFFF00" (jaune)
  // $vtColor2 contient "#0000FF" (bleu)
  // $vtColor3 contient "#FF0000" (rouge)
```

#### Voir aussi 

[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1658 |
| Thread safe | &cross; |


