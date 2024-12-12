---
id: listbox-get-row-color-as-number
title: LISTBOX Get row color as number
slug: /commands/listbox-get-row-color-as-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color as number.Syntax-->**LISTBOX Get row color as number** ( {* ;} *objet* ; *ligne* {; *typeCouleur*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color as number.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| ligne | Integer | &#8594;  | Numéro de ligne |
| typeCouleur | Integer | &#8594;  | lk couleur de police (défaut) ou lk couleur de fond |
| Résultat | Integer | &#8592; | Valeur de couleur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX Get row color as number.Summary-->**Note :** Cette commande fonctionne uniquement avec les list box de type tableau.<!-- END REF-->

La commande **LISTBOX Get row color as number** retourne la couleur d’une ligne ou d’une cellule de la list box désignée par les paramètres *objet* et *\**. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Vous pouvez désigner comme paramètre *objet* une list box ou une colonne de list box :

* si *objet* désigne une list box, la commande retourne la couleur de la ligne
* si *objet* désigne une colonne, la commande retourne la couleur de la cellule

Passez dans *ligne* le numéro de la ligne dont vous souhaitez obtenir la couleur. 

**Note :** La commande ne tient pas compte de l’éventuel statut masqué/affiché des lignes de la list box.

Passez la constante lk background color ou lk font color (thème "*List box*") dans le paramètre *typeCouleur* selon que vous souhaitez connaître la couleur de fond ou la couleur de police de la ligne. Si vous omettez ce paramètre, la couleur de police est retournée.

**Attention**, une couleur affectée à une ligne n’est pas forcément affichée dans toutes les cellules de ligne (cf. exemple). Si des valeurs de couleur contradictoires sont définies via les propriétés de la list box ou de la colonne, un ordre de priorité est appliqué. Pour plus d’informations, reportez-vous au manuel *Mode Développement*.

#### Exemple 

Soit la list box suivante :

![](../assets/en/commands/pict1205393.fr.png)

```4d
 vCoul:=LISTBOX Get row color(*;"Col5";3)
 vCoul2:=LISTBOX Get row color(*;"List Box";3)
 vCoul3:=LISTBOX Get row color(*;"List Box";lk background color)
     // vCoul contient 0xFFFF00 (jaune)
     // vCoul2 contient 0x00FF (bleu)
     // vCoul3 contient 0x00FF0000 (rouge)
```

#### Voir aussi 

*List box*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  