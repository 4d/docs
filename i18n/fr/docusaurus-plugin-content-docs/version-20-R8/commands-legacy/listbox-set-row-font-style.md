---
id: listbox-set-row-font-style
title: LISTBOX SET ROW FONT STYLE
slug: /commands/listbox-set-row-font-style
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW FONT STYLE.Syntax-->**LISTBOX SET ROW FONT STYLE** ( {* ;} *objet* ; *ligne* ; *style* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW FONT STYLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| ligne | Integer | &#8594;  | Numéro de ligne |
| style | Integer | &#8594;  | Style de police |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET ROW FONT STYLE.Summary-->**Note :** Cette commande fonctionne uniquement avec les list box de type tableau.<!-- END REF-->

La commande **LISTBOX SET ROW FONT STYLE** vous permet de définir un style de police pour une ligne ou une cellule de la list box tableau désignée par les paramètres *objet* et *\**. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Vous pouvez désigner comme paramètre *objet* une list box ou une colonne de list box :

* si *objet* désigne une list box, la commande s’applique à la ligne
* si *objet* désigne une colonne, la commande s’applique à la cellule située à l’intersection colonne/ligne

Passez dans *ligne* le numéro de la ligne à laquelle le nouveau style doit être appliqué. 

**Note :** La commande ne tient pas compte de l’éventuel statut masqué/affiché des lignes de la list box.

Passez dans *style* une valeur de style. Vous devez utiliser une ou une combinaison de constante(s) du thème *Styles de caractères* : 

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Plain     | Entier long | 0      |
| Underline | Entier long | 4      |

Si un tableau de styles de police a été associé à la list box ou à la colonne, seul l’élément correspondant à la ligne sera modifié. Autrement dit, dans ce cas, l’exécution de la commande produit le même effet que la modification d’un élément du tableau de styles de police.   
Si aucun tableau de styles de police n’a été associé à la list box ou à la colonne, il est créé dynamiquement lors de l’appel de la commande. Vous pourrez y accéder à l’aide de la commande [LISTBOX Get array](listbox-get-array.md).

Si des propriétés de style contradictoires sont définies pour la colonne ou la list box, un ordre de priorité est appliqué. Pour plus d’informations, reportez-vous au manuel *Mode Développement*. 

**Note :** Comme les tableaux de style des colonnes ont priorité sur le tableau de style de la list box, la commande, si elle est appliquée à une list box, n’aura d’effet que si aucun tableau de style n’a été affecté aux colonnes.

#### Exemple 

Soit une list box tableau ayant les caractéristiques suivantes :

* un tableau de styles de police est associé à la list box (*ArrGlobalStyle*)
* un tableau de styles de police est associé à la colonne 5 (*ArrCol5Style*)
* les autres colonnes n’ont pas de tableau de style

```4d
 LISTBOX SET ROW FONT STYLE(*;"Col5";3;Bold)
     // équivaut à ArrCol5Style{3}:=Gras
```

![](../assets/en/commands/pict1205512.fr.png)

```4d
 LISTBOX SET ROW FONT STYLE(*;"List Box";3;Italic+Underline)
     // équivaut à ArrGlobalStyle{3}:=Italique+Souligné
```

![](../assets/en/commands/pict1205514.fr.png)

Après la deuxième instruction, toutes les cellules de la troisième ligne passent en italique et souligné sauf celle de la colonne 5, qui reste en gras uniquement (les tableaux de colonnes sont prioritaires sur les tableaux de list box). 

#### Voir aussi 

[LISTBOX Get row font style](listbox-get-row-font-style.md)  
[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1268 |
| Thread safe | &cross; |


