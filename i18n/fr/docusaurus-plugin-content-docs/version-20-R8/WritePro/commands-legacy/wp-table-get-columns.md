---
id: wp-table-get-columns
title: WP Table get columns
slug: /WritePro/commands/wp-table-get-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get columns.Syntax-->**WP Table get columns** ( *objCible* ) | ( *refTableau* ; *debutCol* {; *nbCols*} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Table get columns.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| refTableau | Object | &#8594;  | Référence de tableau |
| debutCol | Integer | &#8594;  | Position de la première colonne |
| nbCols | Integer | &#8594;  | Nombre de colonnes à lire |
| Résultat | Object | &#8592; | Nouvelle plage contenant les colonnes sélectionnées |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Table get columns.Summary-->La commande **WP Table get columns** retourne un nouvel objet plage cellule contenant la sélection de colonnes de objCible ou de *refTableau* (définies par *debutCol* et *nbCols*).<!-- END REF-->

Passez soit :

* *objCible :*  
   * une plage, ou  
   * un élément (ligne / paragraphe / corps / en-tête / pied / image en ligne / section / sous-section), ou  
   * un document 4D Write Pro

Si objCible n'intersecte pas une plage de tableau ou de texte là où une sélection de colonnes peut être récupérée, la commande retourne Null.

**OU**

* *refTableau* \- la référence du tableau contenant la sélection de colonnes à lire.
* *debutCol* \- pointe vers la première colonne du tableau à retourner, et
* (optionnel) *nbCols* \- indique le nombre de colonnes à retourner. Si nbCols est omis, l'unique colonne de *debutCol* est retournée.

Si *debutCol* plus *nbCols* excède le nombre de colonnes dans *refTableau*, ou si *debutCol* est plus grand que le nombre de colonnes dans *refTableau*, la plage retournée contient le maximum de colonnes.

#### Exemple 1 

Vous souhaitez modifier des attributs des deux dernières colonnes du tableau :

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cols : Object
 $wpRange:=WP Create range(WParea;wk start text;wk end text)
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)
 
 $cols:=WP Table get columns($wpTable;2;2)
 WP SET ATTRIBUTES($cols;wk background color;0x00E0E0E0;wk text color;"red";wk height;"36pt";wk text align;wk center)
```

Résultat :

![](../../assets/en/WritePro/commands/pict3307213.en.png)

#### Exemple 2 

Vous souhaitez obtenir une plage de colonnes à compter de la 10e jusqu'à la dernière :

```4d
 WP Table get columns(tableRef;10;MAXLONG)
```

#### Exemple 3 

Vous souhaitez récupérer les colonnes sélectionnées par un utilisateur :

```4d
 var $userSelection;$columns : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $columns:=WP Table get columns($userSelection)
```

#### Voir aussi 

[WP Table get cells](wp-table-get-cells.md)  
[WP Table get rows](wp-table-get-rows.md)  