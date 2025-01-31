---
id: listbox-set-row-color
title: LISTBOX SET ROW COLOR
slug: /commands/listbox-set-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW COLOR.Syntax-->**LISTBOX SET ROW COLOR** ( {* ;} *objet* ; *ligne* ; *couleur* {; *typeCouleur*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW COLOR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| ligne | Integer | &#8594;  | Numéro de ligne |
| couleur | Text, Integer | &#8594;  | Valeur de couleur RVB |
| typeCouleur | Integer | &#8594;  | Listbox couleur de police (défaut) ou Listbox couleur de fond |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET ROW COLOR.Summary-->**Note :** Cette commande fonctionne uniquement avec les list box de type tableau.<!-- END REF-->

La commande **LISTBOX SET ROW COLOR** vous permet de définir une couleur pour une ligne ou une cellule de la list box tableau désignée par les paramètres *objet* et *\**. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Vous pouvez désigner comme paramètre *objet* une list box ou une colonne de list box :

* si *objet* désigne une list box, la commande s’applique à la ligne
* si *objet* désigne une colonne, la commande s’applique à la cellule située à l’intersection colonne/ligne

Passez dans *ligne* le numéro de la ligne à laquelle la nouvelle couleur doit être appliquée. 

**Note :** La commande ne tient pas compte de l’éventuel statut masqué/affiché des lignes de la list box.

Passez dans *couleur* une valeur de couleur RVB. Pour plus d’informations sur les couleurs RVB, reportez-vous à la description de la commande [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Si vous souhaitez que la ligne hérite du paramétrage de couleur défini au niveau supérieur, passez la constante lk inherited dans *couleur*.

Passez la constante lk background color ou lk font color dans le paramètre *typeCouleur* selon que vous souhaitez appliquer la couleur en tant que couleur de fond ou couleur de police de la ligne. Si vous omettez ce paramètre, la couleur est appliquée en tant que couleur de police. 

Cette commande modifie les valeurs présentes dans les tableaux de couleurs éventuellement définis pour la colonne ou la listbox. Si ces tableaux ne sont pas déjà définis, la commande crée des tableaux dynamiques auxquels vous pourrez accéder à l’aide de la commande [LISTBOX Get array](listbox-get-array.md). 

Si des valeurs de couleur contradictoires sont définies via les propriétés de la list box ou de la colonne, un ordre de priorité est appliqué. Pour plus d’informations, reportez-vous au manuel *Mode Développement*.

#### Exemple 

Dans une list box tableau, on souhaite définir des paramétrages de couleur pour une ligne et pour une cellule de cette ligne : 

```4d
     // Définition de la couleur de police pour la cellule 
 LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")
 
     // Définition de la couleur de fond et de police pour la ligne 3
 LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)
 LISTBOX SET ROW COLOR(*;"List Box";3;"blue")
```

![](../assets/en/commands/pict1205393.fr.png)

#### Voir aussi 

*List box*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX Get row color as number](listbox-get-row-color-as-number.md)  
[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1270 |
| Thread safe | &cross; |


