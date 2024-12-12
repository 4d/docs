---
id: qr-get-totals-spacing
title: QR GET TOTALS SPACING
slug: /commands/qr-get-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR GET TOTALS SPACING.Syntax-->**QR GET TOTALS SPACING** ( *zone* ; *sousTotal* ; *valeur* )<!-- END REF-->
<!--REF #_command_.QR GET TOTALS SPACING.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| sousTotal | Integer | &#8594;  | Numéro de sous-total |
| valeur | Integer | &#8592; | 0=pas d'espace, 32000=insère une saut de page, >0=espace ajouté sous le niveau de rupture, <0=augmentation proportionnelle |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QR GET TOTALS SPACING.Summary-->La commande **QR GET TOTALS SPACING** permet de récupérer la valeur de l'espacement ajouté au-dessous d'une ligne de sous-total.<!-- END REF--> Elle ne peut être utilisée qu'avec des états en liste.

Le paramètre *zone* contient la référence de la zone d'état rapide.   
Le paramètre *sousTotal* désigne le niveau de sous-total (ou de rupture) dont vous souhaitez connaître l'espacement. Ce paramètre contient une valeur comprise entre 1 et le nombre de lignes de sous-total/rupture.

Le paramètre *valeur* retourne la valeur de l'espacement :

* Si *valeur* vaut 0, aucun espacement n'est ajouté.
* Si *valeur* vaut 32000, un saut de page est ajouté.
* Si *valeur* est une valeur positive, elle exprime l'espacement en pixels.
* Si *valeur* est une valeur négative, elle exprime l'espacement en pourcentage de la ligne de sous-total. Par exemple, la valeur -100 indique un espace au-dessous de la ligne de sous-total correspondant à 100% de la hauteur courante de la ligne.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *sousTotal* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR SET TOTALS SPACING](qr-set-totals-spacing.md)  