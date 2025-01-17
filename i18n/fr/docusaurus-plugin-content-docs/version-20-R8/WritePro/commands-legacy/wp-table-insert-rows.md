---
id: wp-table-insert-rows
title: WP Table insert rows
slug: /WritePro/commands/wp-table-insert-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP Table insert rows.Syntax-->**WP Table insert rows** ( objCible | {*refTableau* ; *numLigne*} {; *nbLignes*} )  -> Résultat<!-- END REF-->
<!--REF #_command_.WP Table insert rows.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| refTableau | Object | &#8594;  | Référence de tableau |
| numLigne | Integer | &#8594;  | Numéro d'indice de ligne |
| nbLignes | Integer | &#8594;  | Nombre de lignes à insérer (valeur par défaut = 1) |
| Résultat | Object | &#8592; | Plage de lignes du tableau |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Table insert rows.Summary-->La commande **WP Table insert rows** insère une ou plusieurs lignes dans un tableau 4D Write Pro.<!-- END REF-->

Cette commande prend en charge deux syntaxes :

* Si vous passez objCible comme premier paramètre, la commande insèrera la/les colonne(s) du premier tableau qui intersecte la cible. objCible peut contenir :  
   * une plage, ou  
   * un élément (ligne / paragraphe / corps / en-tête/ pied / image en ligne / section / sous-section), ou  
   * un document 4D Write Pro.  
         
   Si objCible n'intersecte pas une plage tableau ou une plage texte là où des lignes peuvent être insérées, la commande ne fait rien et retourne Null (aucune erreur n'est générée).
* Si vous passez les paramètres *refTableau* et *numLigne*, la commande insèrera la/les ligne(s) dans le tableau désigné, suivant l'indice de ligne spécifié. Si numLigne est supérieur au nombre de lignes dans *refTableau*, les lignes ne sont pas insérées dans le tableau, mais elles y sont annexées.

Le paramètre optionnel nbLignes définit le nombre de lignes à insérer dans objCible ou *refTableau*. Par défaut, si ce paramètre est omis, une ligne est insérée.

**Résultat**

La commande retourne une plage de ligne représentant un ou plusieurs ligne insérées, ou retourne Null si rien n'a été inséré. 

#### Exemple 

Vous souhaitez insérer deux lignes à la fin du tableau *Invoice* :

```4d
 var $row : Object
 var $table;$row : Object
 var $rowNum : Integer
 
 $table:=WP Get element by ID(WParea;"Invoice") //récupère le tableau "Invoice"
 
 If($table#Null)
    $rowNum:=$table.rowCount+1 //ajoute 1 à la dernière ligne pour désigner l'emplacement des nouvelles lignes
    $row:=WP Table insert rows($table;$rowNum;2)
 End if
```

Cela insèrera les deux nouvelles lignes à l'emplacement souhaité :

![](../../assets/en/WritePro/commands/pict4680266.en.png) 

#### Voir aussi 

[WP Table insert columns](wp-table-insert-columns.md)  