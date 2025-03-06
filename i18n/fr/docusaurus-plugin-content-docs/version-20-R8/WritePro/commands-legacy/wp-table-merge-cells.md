---
id: wp-table-merge-cells
title: WP TABLE MERGE CELLS
slug: /WritePro/commands/wp-table-merge-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE MERGE CELLS.Syntax-->**WP TABLE MERGE CELLS** ( *targetObj* ) | ( *tableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE MERGE CELLS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| tableRef | Object | &#8594;  | Table reference |
| startColumn | Integer | &#8594;  | Position of first cell column |
| startRow | Integer | &#8594;  | Position of first column row |
| columnCount | Integer | &#8594;  | Number of columns to merge |
| rowCount | Integer | &#8594;  | Number of rows to merge |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP TABLE MERGE CELLS.Summary-->La commande **WP TABLE MERGE CELLS**fusionne la sélection de cellules dans *targetObj* ou *tableRef* (défini par *startColumn*, *startRow*, *columnCount*, et *rowCount*).<!-- END REF-->

Vous pouvez passer soit : 

* *targetObj:*  
   * une plage, ou  
   * un élément (tableau / ligne / corps / paragraphe / image ancrée / en-tête / pied / section / sous-section), ou  
   * un document 4D Write Pro

Si *targetObj* ne croise pas un tableau ou une plage de texte où une sélection de cellules peut être récupérée, la commande ne fait rien.

Si *targetObj* ne croise qu'une seule cellule, la commande **WP TABLE MERGE CELLS** ne fait rien.

**Ou**

* startColumn et *startRow* \- définissent les coordonnées gauche-haut de la première cellule à fusionner.
* columnCount et rowCount (facultatif) - spécifie respectivement le nombre de colonnes et le nombre de lignes à fusionner.

Si rowCount est omis, cela équivaut à passer 1 (valeur par défaut). Si columnCount et rowCount sont tous deux omis, c'est l'équivalent de l'intersection d'une seule cellule, donc rien ne se passe.  

Si startColumn plus ColumnCount ou *startRow* plus rowCount dépasse le nombre de colonnes/lignes dans tableRef, ou si startColumn ou *startRow* est supérieur au nombre de colonnes/lignes dans tableRef, la plage renvoyée contient le maximum de colonnes/lignes possibles, ce qui signifie que l'ensemble du tableau sera fusionné en une seule grande cellule.  

#### Example 

L'exemple suivant consiste à désigner une plage de cellules et à la fusionner :

```4d
 WP TABLE MERGE CELLS($table;3;2;2;4)
  //or
 $cells:=WP Table get cells($table;3;2;2;4)
 WP TABLE MERGE CELLS($cells)
```

Résultat :

![](../../assets/en/WritePro/commands/pict6398108.en.png)

Les données existantes des cellules d'origine sont concaténées dans la cellule fusionnée résultante.

Pour plus de détails, veuillez consulter *Fusionner et fractionner des cellules*.

#### Voir aussi 

*Manipuler des tableaux*  
[WP TABLE SPLIT CELLS](wp-table-split-cells.md)  