---
id: wp-table-get-cells
title: WP Table get cells
slug: /WritePro/commands/wp-table-get-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get cells.Syntax-->**WP Table get cells** ( *objCible* ) | ( *refTableau* ; *debutCol* ; *debutLigne* {; *nbCols*{; *nbLignes*}} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Table get cells.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| refTableau | Object | &#8594;  | Référence de tableau |
| debutCol | Integer | &#8594;  | Position de la colonne de la première cellule |
| debutLigne | Integer | &#8594;  | Position de la ligne de la première cellule |
| nbCols | Integer | &#8594;  | Nombre de colonnes à lire |
| nbLignes | Integer | &#8594;  | Nombre de lignes à lire |
| Résultat | Object | &#8592; | Nouvelle plage contenant les cellules |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Table get cells.Summary-->La commande **WP Table get cells** retourne un nouvel objet cellule contenant la sélection de cellules de objCible ou de *refTableau* (définies par *debutCol*, *debutLigne*, *nbCols* et *nbLignes*).<!-- END REF-->

Passez soit :

* *objCible :*  
   * une plage, ou  
   * un élément (ligne / paragraphe / corps / en-tête / pied / image en ligne / section / sous-section), ou  
   * un document 4D Write Pro

Si objCible n'intersecte pas une plage de tableau ou de texte là où une sélection de cellules peut être récupérée, la commande retourne Null.

**OU**

* *debutCol* et *debutLigne* \- déterminent les coordonnées en haut à gauche de la première cellule à lire.
* (optionnel) *nbCols* et *nbLignes* \- indiquent respectivement le nombre de colonnes et de lignes à lire pour la plage de cellules.  
    
Si *nbLignes* est omis, une seule ligne est retounée. Si *nbCols* et *nbLignes* sont omis, la plage retournée contient une seule cellule.

Si *debutCol* plus *nbCols* ou *debutLigne* plus *nbLignes* excède le nombre de colonnes/lignes dans *refTableau*, ou si *debutCol* ou *debutLigne* est plus grand que le nombre de colonnes/lignes dans *refTableau*, la plage retournée contient le maximum de colonnes/lignes.

#### Exemple 1 

Vous voulez modifier les attributs d'une plage de cellules :

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cells : Object
 $wpRange:=WP Create range(WParea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row(($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row(($wpTable;"Henry";"Cartier";42)
 
 $cells:=WP Table get cells($wpTable;2;2;2;2)
 WP SET ATTRIBUTES($cells;wk background color;0x00E0E0E0)
 WP SET ATTRIBUTES($cells;wk text color;"blue")
 WP SET ATTRIBUTES($cells;wk border color;0x00E000E0)
 WP SET ATTRIBUTES($cells;wk text align;wk center)
```

Résultat : 

![](../../assets/en/WritePro/commands/pict3307320.en.png)

#### Exemple 2 

Obtenir une plage de cellules à partir de la cellule "5x7" et jusqu'à la fin de la ligne :

```4d
 $cellRange:=WP Table get cells(tableRef;5;7;MAXLONG;1)
```

Obtenir une plage de cellules à partir de la cellule "5x7" et jusqu'à la fin de la colonne :

```4d
 $cellRange:=WP Table get cells(tableRef;5;7;1;MAXLONG)
```

Obtenir une plage de cellules à partir de la cellule "5x7" et jusqu'à la fin du tableau :

```4d
 $cellRange:=WP Table get cells(tableRef;5;7;MAXLONG;MAXLONG)
```

#### Exemple 3 

Vous souhaitez récupérer les cellules sélectionnées par un utilisateur :

```4d
 var $userSelection;$cells : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $cells:=WP Table get cells($userSelection)
```

#### Voir aussi 

[WP Table get columns](wp-table-get-columns.md)  
[WP Table get rows](wp-table-get-rows.md)  