---
id: wp-table-delete-rows
title: WP TABLE DELETE ROWS
slug: /WritePro/commands/wp-table-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE DELETE ROWS.Syntax-->**WP TABLE DELETE ROWS** ( *objCible* ) | ( *refTableau* ; *numLigne* {; *nbLignes*} )<!-- END REF-->
<!--REF #_command_.WP TABLE DELETE ROWS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D View Pro |
| refTableau | Object | &#8594;  | Référence de tableau |
| numLigne | Integer | &#8594;  | Numéro d'indice de la ligne |
| nbLignes | Integer | &#8594;  | Nombre de lignes à supprimer (valeur par défaut=1) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP TABLE DELETE ROWS.Summary-->La commande **WP TABLE DELETE ROWS** supprime une ou plusieurs lignes d'un tableau 4D Write Pro.<!-- END REF-->

Cette commande prend en charge deux syntaxes :

* Si vous passez objCible comme premier paramètre, la commande supprimera toutes les lignes des tableaux qui intersectent la cible. objCible peut contenir :  
   * une plage, ou  
   * un élément (ligne / paragraphe / corps / en-tête/ pied / image en ligne / section / sous-section), ou  
   * un document 4D Write Pro.  
         
   Si objCible intersecte plusieurs tableaux, les lignes intersectées sont supprimées. Si objCible n'intersecte pas un tableau, la commande ne fait rien (aucune erreur n'est générée).  
   Avec cette syntaxe, le paramètre *nbLignes* est ignoré (s'il est passé).
* Si vous passez les paramètres *refTableau* et *numLigne*, la commande supprime la/les ligne(s) du tableau désigné, en commençant par l'indice de ligne spécifié.  
Avec cette syntaxe, le paramètre optionnel *nbLignes* définit le nombre de lignes de *refTableau* à supprimer. Par défaut, si ce paramètre est omis, une ligne est supprimée.

La suppression de toutes les lignes du tableau entrainera la suppression du tableau.

#### Exemple 

Vous souhaitez supprimer deux lignes du tableau *Invoice*. Le code suivant :

```4d
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //récupère le tableau "Invoice" 
 
 WP TABLE DELETE ROWS($table;3;2) //supprime 2 lignes après la 2ème ligne (3e position)
```

Supprimera les deux lignes de leur emplacement initial :

![](../../assets/en/WritePro/commands/pict4680306.en.png)

#### Voir aussi 

[WP TABLE DELETE COLUMNS](wp-table-delete-columns.md)  