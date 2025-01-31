---
id: wp-get-page-count
title: WP Get page count
slug: /WritePro/commands/wp-get-page-count
displayed_sidebar: docs
---

<!--REF #_command_.WP Get page count.Syntax-->**WP Get page count** ( *objCible* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get page count.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Document ou section 4D Write Pro |
| Résultat | Integer | &#8592; | Nombre de pages dans le document |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get page count.Summary-->La commande **WP Get page count** retourne le nombre total de pages passées dans le paramètre *objCible*.<!-- END REF-->

Dans le paramètre *objCible*, vous pouvez passer :

* une section/sous-section, ou
* un document 4D Write Pro

La commande retourne le nombre total de pages de *objCible*.

Si vous passez une sous-section, le nombre de pages de la section parente est retourné.

Les mêmes paramètres d'affichage que la commande [WP PRINT](wp-print.md) sont utilisés avec **WP Get page count** :

* en-têtes : visibles
* pieds : visibles
* expressions : calculées et affichées
* mode d'affichage : page ou brouillon

Si *objCible* est affiché dans une zone de formulaire 4D Write Pro, assurez-vous que les paramètres d'affichage de la zone correspondent à ceux de la commande afin d'obtenir des informations cohérentes. Notez également que si ces paramètres sont différents dans la zone, 4D Write Pro devra "cloner" le document afin de calculer son format à chaque appel de la commande, ce qui peut prendre du temps. Pour des raisons de performances, il est recommandé dans ce cas de construire le document hors-écran et de le copier dans la zone de formulaire une fois les calculs terminés.

#### Exemple 

Vous souhaitez connaître le nombre total de pages des documents 4D Write Pro stockés dans le champ "Manual" de votre sélection courante. Vous pouvez écrire :

```4d
 var $pageCount : Integer
 var $totalCount : Integer
 FIRST RECORD([Items])
 While(Not(End selection([Items]))
    $pageCount:=WP Get page count([Items]Manual)
    $totalCount:=$totalCount+$pageCount
    NEXT RECORD([Items])
 End while
 ALERT("Nombre total de pages des manuels de la sélection : "+String($totalCount))
```
