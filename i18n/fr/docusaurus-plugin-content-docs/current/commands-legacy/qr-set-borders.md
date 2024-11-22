---
id: qr-set-borders
title: QR SET BORDERS
slug: /commands/qr-set-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR SET BORDERS.Syntax-->**QR SET BORDERS** ( *zone* ; *colonne* ; *ligne* ; *encadrement* ; *ligne* {; *couleur*} )<!-- END REF-->
<!--REF #_command_.QR SET BORDERS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| colonne | Integer | &#8594;  | Numéro de colonne |
| ligne | Integer | &#8594;  | Numéro de ligne |
| encadrement | Integer | &#8594;  | Valeur d'encadrements composée |
| ligne | Integer | &#8594;  | Epaisseur de ligne |
| couleur | Integer | &#8594;  | Couleur de ligne |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QR SET BORDERS.Summary-->La commande **QR SET BORDERS** permet de définir le style d'encadrement d'une cellule spécifique.<!-- END REF--> 

Passez dans *zone* la référence de la zone d'état rapide.

Passez dans *colonne* le numéro de colonne de la cellule à encadrer.

Le paramètre *ligne* contient le numéro de ligne de la cellule à encadrer. Vous pouvez passer soit :

* une valeur entière positive pour désigner la ligne de sous-total correspondante,
* l'une des constantes suivantes, placées dans le thème *QR Lignes pour Propriétés* :  

| Constante      | Type        | Valeur | Comment               |  
| -------------- | ----------- | ------ | --------------------- |  
| qr detail      | Entier long | \-2    | Zone Détail de l'état |  
| qr grand total | Entier long | \-3    | Zone Total général    |  
| qr title       | Entier long | \-1    | Intitulé de l'état    |

Le paramètre *encadrement* contient une valeur composée permettant d'indiquer la ou les bordures(s) de cellule à modifier. Passez l'une des constantes du thème *QR Encadrements* :  

| Constante                   | Type        | Valeur | Comment                        |
| --------------------------- | ----------- | ------ | ------------------------------ |
| qr bottom border            | Entier long | 8      | Bordure inférieure             |
| qr inside horizontal border | Entier long | 32     | Bordure intérieure horizontale |
| qr inside vertical border   | Entier long | 16     | Bordure intérieure verticale   |
| qr left border              | Entier long | 1      | Bordure gauche                 |
| qr right border             | Entier long | 4      | Bordure droite                 |
| qr top border               | Entier long | 2      | Bordure supérieure             |

Le paramètre *encadrement* peut contenir un cumul de plusieurs valeurs afin de désigner simultanément plusieurs bordures. Par exemple, si vous passez 5 dans *encadrement*, les bordures droite et gauche seront affectées.

Le paramètre *épaisseur* permet de spécifier l'épaisseur de l'encadrement :

* 0 indique une épaisseur nulle (pas de bordure),
* 1 indique une épaisseur d'1/4 point,
* 2 indique une épaisseur d'1/2 point,
* 3 indique une épaisseur d'1 point,
* 4 indique une épaisseur de 2 points.

Le paramètre *couleur* permet de désigner la couleur de l'encadrement :

* si vous passez une valeur positive, *couleur* désigne un numéro de couleur,
* si vous passez 0, la couleur est noire,
* si vous passez -1, la couleur esrt inchangée.

**Note :** Par défaut, la couleur est noire.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *colonne* est incorrect, l’erreur -9852 est générée.  
Si le paramètre *ligne* est incorrect, l’erreur -9853 est générée.  
Si le paramètre *encadrement* est incorrect, l’erreur -9854 est générée.  
Si le paramètre *épaisseur* est incorrect, l’erreur -9855 est générée.

#### Voir aussi 

[QR GET BORDERS](qr-get-borders.md)  