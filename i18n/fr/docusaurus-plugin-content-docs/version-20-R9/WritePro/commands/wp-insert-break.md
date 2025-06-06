---
id: wp-insert-break
title: WP Insert break
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert break.Syntax-->**WP Insert break** ( *targetObj* ; *breakType* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert break.Params-->

| Paramètres  | Type    |                             | Description                               |
| ----------- | ------- | --------------------------- | ----------------------------------------- |
| targetObj   | Object  | &#8594; | Range or element or 4D Write Pro document |
| breakType   | Integer | &#8594; | Type de rupture à insérer                 |
| mode        | Integer | &#8594; | Mode d'insertion                          |
| rangeUpdate | Integer | &#8594; | Mode de mise à jour de la plage           |
| Résultat    | Object  | &#8592; | Plage de texte du caractère de rupture    |

<!-- END REF-->

## Description

The **WP Insert break** command <!--REF #_command_.WP Insert break.Summary-->inserts a new break of the *breakType* type in the *targetObj* according to the specified insertion *mode* and *rangeUpdate* parameters, and  returns the text range of the break character<!-- END REF-->

In *targetObj*, pass:

- a range, or
- an element (table / row / paragraph / body / header / footer / inline picture / section / subsection), or
- a 4D Write Pro document

In *breakType*, pass one of the following constants from the *4D Write Pro Constants* theme to define the type of break to insert:

| Constante                   | Type    | Valeur | Commentaire                                                                                                                                     |
| --------------------------- | ------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| wk column break             | Integer | 3      | Column break: inserts a column break                                                                                            |
| wk continuous section break | Integer | 5      | Defines a continuous section break (often used to change the number of columns without starting a new page). |
| wk line break               | Integer | 0      | Line break (in the same paragraph)                                                                                           |
| wk page break               | Integer | 2      | Page break: defines a new page                                                                                                  |
| wk paragraph break          | Integer | 4      | Paragraph break: defines a new paragraph                                                                                        |
| wk section break            | Integer | 1      | Section break: defines a new section                                                                                            |

In the *mode* parameter, pass a constant to indicate the insertion mode to be used for the break in the destination *targetObj*:

| Constante  | Type    | Valeur | Commentaire                            |
| ---------- | ------- | ------ | -------------------------------------- |
| wk append  | Integer | 2      | Insert contents at end of target       |
| wk prepend | Integer | 1      | Insert contents at beginning of target |
| wk replace | Integer | 0      | Replace target contents                |

- If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:

| Constante             | Type    | Valeur | Commentaire                                                              |
| --------------------- | ------- | ------ | ------------------------------------------------------------------------ |
| wk exclude from range | Integer | 1      | Inserted contents not included in updated range                          |
| wk include in range   | Integer | 0      | Inserted contents included in updated range (default) |

If you do not pass a *rangeUpdate* parameter, by default the inserted contents are included in the resulting range.

- If *targetObj* is not a range, *rangeUpdate* is ignored.

## Exemple 1

Lors de la construction des factures, vous voulez insérer des sauts de page sauf sur la dernière page :

```4d
 $nbInvoices:=Records in selection([INVOICE])
 For($j;1;$nbInvoices)
    ... //traitement des factures
    If($j#$nbInvoices) //insérer un saut de page à l'exception de la dernière page
       WP Insert break($buildRange;wk page break;wk append;wk exclude from range)
    End if
 End for
```

## Exemple 2

Vous souhaitez insérer un saut de section continu pour avoir une section à une seule colonne et une section à deux colonnes sur la même page.

1. Insérez un saut de section continu au niveau de la sélection pour créer une nouvelle section :

```4d
 $range:=WP Selection range(*;"WParea")  
 WP Insert break($range;wk continuous section break;wk append)  
```

![](../../assets/en/WritePro/commands/pict5562056.en.png)
2. Définir le nombre de colonnes à 2 pour la première section:

```4d
 $section:=WP Get section(WParea;1)  
 WP SET ATTRIBUTES($section;wk column count;2)  
```

![](../../assets/en/WritePro/commands/pict5562058.en.png)

## Voir également

[WP Get breaks](../commands-legacy/wp-get-breaks.md)</br>
[WP Insert document body](wp-insert-document-body.md)