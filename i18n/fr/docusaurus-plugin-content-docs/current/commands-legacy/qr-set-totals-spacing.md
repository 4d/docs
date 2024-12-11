---
id: qr-set-totals-spacing
title: QR SET TOTALS SPACING
slug: /commands/qr-set-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TOTALS SPACING.Syntax-->**QR SET TOTALS SPACING** ( *zone* ; *sousTotal* ; *valeur* )<!-- END REF-->
<!--REF #_command_.QR SET TOTALS SPACING.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| sousTotal | Integer | &#8594;  | Numéro de sous-total |
| valeur | Integer | &#8594;  | 0=pas d'espace, 32000=insère un saut de page, >0=espace ajouté sous le niveau de rupture, <0=augmentation proportionnelle |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET TOTALS SPACING.Summary-->La commande **QR SET TOTALS SPACING** permet de définir l'espacement ajouté au-dessous d'une ligne de sous-total.<!-- END REF--> Elle ne peut être utilisée qu'avec des états en liste. 

Le paramètre *zone* contient la référence de la zone d'état rapide.   
Le paramètre *sousTotal* désigne le niveau de sous-total (ou de rupture) à modifier. 

Le paramètre *valeur* permet de définir la valeur de l'espacement :

* Si *valeur* vaut 0, aucun espacement n'est ajouté.
* Si *valeur* vaut 32000, un saut de page est ajouté.
* Si *valeur* est une valeur positive, elle exprime l'espacement à ajouter en pixels.
* Si *valeur* est une valeur négative, elle exprime l'espacement à ajouter en pourcentage de la ligne de sous-total. Par exemple, la valeur -100 définit l'ajout d'un espace au-dessous de la ligne de sous-total correspondant à 100% de la hauteur courante de la ligne.

**Note :** Si l'espacement ajouté au-dessous d'une ligne de sous-total “repousse” la ligne suivante sur la page suivante, aucun espace n'apparaîtra au-dessus de la ligne sur cette page.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *sousTotal* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR GET TOTALS SPACING](qr-get-totals-spacing.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 761 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


