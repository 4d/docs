---
id: listbox-get-row-font-style
title: LISTBOX Get row font style
slug: /commands/listbox-get-row-font-style
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row font style.Syntax-->**LISTBOX Get row font style** ( {* ;} *objet* ; *ligne* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row font style.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| ligne | Integer | &#8594;  | Numéro de ligne |
| Résultat | Integer | &#8592; | Valeur de style |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX Get row font style.Summary-->**Note :** Cette commande fonctionne uniquement avec les list box de type tableau.<!-- END REF-->

La commande **LISTBOX Get row font style** retourne le style de police d’une ligne ou d’une cellule de la list box désignée par les paramètres *objet* et *\**.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Vous pouvez désigner comme paramètre *objet* une list box ou une colonne de list box :

* si *objet* désigne une list box, la commande retourne le style de la ligne
* si *objet* désigne une colonne, la commande retourne le style de la cellule

Passez dans *ligne* le numéro de la ligne dont vous souhaitez obtenir le style. 

**Note :** La commande ne tient pas compte de l’éventuel statut masqué/affiché des lignes de la list box.

**Attention**, un style affecté à une ligne n’est pas forcément affiché dans toutes les cellules de ligne (cf. exemple). Si des valeurs de style contradictoires sont définies via les propriétés de la list box ou de la colonne, un ordre de priorité est appliqué. Pour plus d’informations, reportez-vous au manuel *Mode Développement*.

#### Exemple 

Soit la list box suivante : 

![](../assets/en/commands/pict1205514.fr.png)

```4d
 vStyl:=LISTBOX Get row font style(*;"Col5";3)
 vStyl2:=LISTBOX Get row font style(*;"List Box";3)
     // vStyl contient 1 (Gras)
     // vStyl2 contient 6 (Italique + Souligné)
```

#### Voir aussi 

[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  