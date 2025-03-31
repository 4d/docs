---
id: qr-get-borders
title: QR GET BORDERS
slug: /commands/qr-get-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR GET BORDERS.Syntax-->**QR GET BORDERS** ( *zone* ; *colonne* ; *ligne* ; *encadrement* ; *ligne* {; *couleur*} )<!-- END REF-->
<!--REF #_command_.QR GET BORDERS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| colonne | Integer | &#8594;  | Numéro de colonne |
| ligne | Integer | &#8594;  | Numéro de ligne |
| encadrement | Integer | &#8594;  | Valeur d'encadrement |
| ligne | Integer | &#8592; | Epaisseur de trait |
| couleur | Integer | &#8592; | Couleur de l'encadrement |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET BORDERS.Summary-->La commande **QR GET BORDERS** retourne les attributs d'encadrement d'une cellule spécifique de *zone*.<!-- END REF-->

Passez dans *zone* la référence de la zone d'état rapide.

Passez dans *colonne* le numéro de colonne de la cellule à lire.

Le paramètre *ligne* contient le numéro de ligne de la cellule à lire. Vous pouvez soit :

* passer une valeur entière positive pour désigner la ligne de sous-total correspondante.
* passer une des constantes suivantes du thème *QR Lignes pour Propriétés* :  

| Constante      | Type        | Valeur | Comment               |  
| -------------- | ----------- | ------ | --------------------- |  
| qr detail      | Entier long | \-2    | Zone Détail de l'état |  
| qr grand total | Entier long | \-3    | Zone Total général    |  
| qr title       | Entier long | \-1    | Intitulé de l'état    |

Le paramètre *encadrement* permet d'indiquer la bordure de cellule à lire. Passez l'une des constantes du thème *QR Encadrements* :  

| Constante                   | Type        | Valeur | Comment                        |
| --------------------------- | ----------- | ------ | ------------------------------ |
| qr bottom border            | Entier long | 8      | Bordure inférieure             |
| qr inside horizontal border | Entier long | 32     | Bordure intérieure horizontale |
| qr inside vertical border   | Entier long | 16     | Bordure intérieure verticale   |
| qr left border              | Entier long | 1      | Bordure gauche                 |
| qr right border             | Entier long | 4      | Bordure droite                 |
| qr top border               | Entier long | 2      | Bordure supérieure             |

**Note :** A la différence de la commande [QR SET BORDERS](qr-set-borders.md), **QR GET BORDERS** n'accepte pas de valeurs cumulées. Vous devez tester séparément toutes les valeurs pour obtenir une description globale de l'encadrement de la cellule. 

Le paramètre *épaisseur* retourne l'épaisseur de l'encadrement :

* 0 indique une épaisseur nulle (pas de bordure),
* 1 indique une épaisseur d'1/4 point,
* 2 indique une épaisseur d'1/2 point,
* 3 indique une épaisseur d'1 point,
* 4 indique une épaisseur de 2 points.

Le paramètre *couleur* retourne le numéro de la couleur de la bordure. 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *colonne* est incorrect, l’erreur -9852 est générée.  
Si le paramètre *ligne* est incorrect, l’erreur -9853 est générée.  
Si le paramètre *encadrement* est incorrect, l’erreur -9854 est générée.

#### Voir aussi 

[QR SET BORDERS](qr-set-borders.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 798 |
| Thread safe | &cross; |
| Modifie les variables | error |


