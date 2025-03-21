---
id: wp-table-append-row
title: WP Table append row
slug: /WritePro/commands/wp-table-append-row
displayed_sidebar: docs
---

<!--REF #_command_.WP Table append row.Syntax-->**WP Table append row** ( *refTableau* ; *valeur* {; *valeur2* ; ... ; *valeurN*} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Table append row.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refTableau | Object | &#8594;  | Référence de tableau |
| valeur | Text, Number, Time, Date, Picture | &#8594;  | Valeur(s) à fixer dans la ligne |
| Résultat | Object | &#8592; | Objet plage ligne |

<!-- END REF-->

## Description 

<!--REF #_command_.WP Table append row.Summary-->La commande **WP Table append row** ajoute une ligne au tableau *refTableau*, le remplit avec les *valeur*(s) et retourne l'objet correspondant à la plage de la ligne.<!-- END REF-->

La commande ajoute autant de cellules dans la ligne qu'il y a de valeurs dans le paramètre *valeur*. Vous pouvez ajouter n'importe quel nombre de valeurs de différents types ; l'alignement par défaut dans la cellule dépend du type de la valeur :

* texte : aligné à gauche
* image : centrée
* autres type (nombres, date, et heure) : alignés à droite.

**Note :** Les valeurs de type Tableau ne sont pas supportées.

La commande retourne la nouvelle ligne en tant qu'objet plage de ligne. 

## Exemple 1 

Vous souhaitez créer un tableau vide et y ajouter plusieurs lignes de taille différente. Vous pouvez écrire :

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3 : Object
 $wpRange:=WP Text range(WParea;wk start text;wk end text)
 $wpTable:=WP Insérer tableau($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18;"New!")
```

![](../../assets/en/WritePro/commands/pict3306976.en.png)

## Exemple 2 

Dans une facturation, vous souhaitez créer un tableau automatiquement rempli avec la sélection les lignes facture :

```4d
 var $wpTable;$wpRange : Object
 
 $wpRange:=WP Text range(4DWPArea;wk start text;wk end text)
 
 $wpTable:=WP Insérer tableau($wpRange;wk append) //création du tableau
 
  // on ajoute la ligne d'en-tête
 $row:=WP Table append row ($wpTable;"Name";"Quantity";"Unit Price";"Discount Rate";"Total")
 WP SET ATTRIBUTES($row;wk font bold;wk true;wk text align;wk center)
 
  //on utilise simplement un appliquer à sélection
 APPLY TO SELECTION([INVOICE_LINES];WP Table append row($wpTable;[INVOICE_LINES]ProductName;[INVOICE_LINES]Quantity;[INVOICE_LINES]ProductUnitPrice;[INVOICE_LINES]DiscountRate;[INVOICE_LINES]Total))
 
  //on ajoute une ligne pour le pied
 $row:=WP Table append row($wpTable;"Total:";Sum([INVOICE_LINES]Quantity);"";"";Sum([INVOICE_LINES]Total))
 
  //on formate le tableau
 $range:=WP Tableau lire colonne($wpTable;1;5)
 WP SET ATTRIBUTES($range;wk width;"80pt")
 WP SET ATTRIBUTES($wpTable;wk font size;10)
```

![](../../assets/en/WritePro/commands/pict3369663.en.png)

## Voir aussi 

[WP Insert table](wp-insert-table.md)  
[WP Table get rows](wp-table-get-rows.md)  