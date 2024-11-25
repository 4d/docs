---
id: wp-table-get-rows
title: WP Table get rows
slug: /WritePro/commands/wp-table-get-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get rows.Syntax-->**WP Table get rows** ( *objCible* ) | ( *refTableau* ; *debutLigne* {; *nbLignes*} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Table get rows.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| refTableau | Object | &#8594;  | Référence de tableau |
| debutLigne | Integer, Text | &#8594;  | Position de la première ligne |
| nbLignes | Integer | &#8594;  | Nombre de lignes à lire |
| Résultat | Object | &#8592; | Nouvelle plage contenant les lignes sélectionnées |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Table get rows.Summary-->La commande **WP Table get rows** retourne un nouvel objet plage de lignes contenant une sélection de lignes de *objCible* ou de *refTableau*.<!-- END REF-->

Passez soit :

* *objCible :*  
   * une plage, ou  
   * un élément (ligne / paragraphe / corps / en-tête / pied / image en ligne / section / sous-section), ou  
   * un document 4D Write Pro

Si *objCible* n'intersecte pas une plage de tableau ou de texte là où une sélection de lignes peut être récupérée, la commande retourne Null.

**OU**

* *refTableau* : la référence du tableau contenant la sélection de colonnes à lire.
* *debutLigne* : pointe vers la première ligne du tableau à retourner, et
* (optionnel) nbLignes \- indique le nombre de colonnes à retourner. Si nbLignes est omis, l'unique colonne de debutLigne est retournée.

Si *debutLigne* plus *nbLignes* excède le nombre de lignes dans *refTableau*, ou si *debutLigne* est plus grand que le nombre de lignes dans *refTableau*, la plage retournée contient le maximum de lignes.

**OU**

* *refTableau :* la référence du tableau contenant la/les ligne(s) d'en-têtes à lire
* *wk header rows :* pour indiquer que vous souhaitez lire les lignes d'en-têtes  
    
Dans ce cas, la commande retourne une plage de lignes contenant les lignes d'en-tête répétées (si elle est passée, le paramètre nbLignes est ignoré). La commande retourne Null s'il n'y a pas de lignes d'en-tête définies.

#### Exemple 1 

Vous souhaitez fixer une couleur d'arrière-plan spécifique pour les deux premières lignes d'un tableau, et modifier la bordure de la troisième ligne :

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$rows;$rows2 : Object
 $wpRange:=WP Text range(WParea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)
 
 $rows:=WP Table get rows($wpTable;1;2)
 WP SET ATTRIBUTES($rows;wk background color;0x00E0F0FF)
 $rows2:=WP Table get rows($wpTable;3)
 WP SET ATTRIBUTES($rows2;wk border style;wk solid)
 WP SET ATTRIBUTES($rows2;wk border width;4)
```

![](../../assets/en/WritePro/commands/pict3307142.en.png)

#### Exemple 2 

Vous souhaitez obtenir une plage de lignes à compter de la 10e jusqu'à la dernière :

```4d
 WP Table get rows(tableRef;10;MAXLONG)
```

#### Exemple 3 

Vous souhaitez récupérer les lignes sélectionnées par un utilisateur :

```4d
 var $userSelection;$rows : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $rows:=WP Table get rows($userSelection)
```

#### Exemple 4 

L'exemple suivant permet :

1. de lire les deux premières lignes de la première table de WParea.
2. de les définir comme des lignes d'en-tête.
3. de définit leur couleur de texte à blanc et leur couleur de fond à noir.

```4d
 var $table;$range : Object
 
 $table:=WP Get elements(WParea;wk type table)[0]  // Sélectionner le premier tableau dans WParea
 
 WP SET ATTRIBUTES($table;wk header row count;2) // Définir les deux premières lignes comme lignes d'en-tête
 
 $range:=WP Table get rows($table;wk header rows) // Obtenir les lignes d'en-tête définies ci-dessus
 
 WP SET ATTRIBUTES($range;wk text color;"white";wk background color;"#000") // Définir la couleur de texte et de fond pour les lignes d'en-tête
 
```

#### Voir aussi 

[WP Insert table](wp-insert-table.md)  
[WP Table append row](../commands/wp-table-append-row.md)  
[WP Table get cells](wp-table-get-cells.md)  
[WP Table get columns](wp-table-get-columns.md)  