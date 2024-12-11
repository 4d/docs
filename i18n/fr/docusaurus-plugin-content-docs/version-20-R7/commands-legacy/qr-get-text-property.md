---
id: qr-get-text-property
title: QR Get text property
slug: /commands/qr-get-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get text property.Syntax-->**QR Get text property** ( *zone* ; *numColonne* ; *numLigne* ; *propriété* ) : any<!-- END REF-->
<!--REF #_command_.QR Get text property.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| numColonne | Integer | &#8594;  | Numéro de colonne |
| numLigne | Integer | &#8594;  | Numéro de ligne |
| propriété | Integer | &#8594;  | Numéro de propriété |
| Résultat | Text, Integer | &#8592; | Valeur de la propriété |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get text property.Summary-->La commande **QR Get text property** retourne la valeur courante de la *propriété* de texte dans la cellule de *zone* désignée par *numColonne* et *numLigne*.<!-- END REF-->

Passez dans *zone* la référence de la zone d'état rapide.

Passez dans *numColonne* le numéro de colonne de la cellule. 

Passez dans *numLigne* la référence de la ligne de la cellule. Vous pouvez passer soit : 

* une valeur positive désignant la ligne de sous-total correspondante,
* une des constantes du thème *QR Lignes pour Propriétés* :  

| Constante      | Type        | Valeur | Comment               |  
| -------------- | ----------- | ------ | --------------------- |  
| qr detail      | Entier long | \-2    | Zone Détail de l'état |  
| qr footer      | Entier long | \-5    | Pied de page          |  
| qr grand total | Entier long | \-3    | Zone Total général    |  
| qr header      | Entier long | \-4    | En-tête de page       |  
| qr title       | Entier long | \-1    | Intitulé de l'état    |

**Note :** Vous devez passer une valeur dans *numColonne* même lorsque vous passez -4 ou -5 dans le paramètre *numLigne* (dans ce cas la valeur de *numColonne* est inutilisée). 

**Note :** Dans les tableaux croisés, le principe est similaire sauf pour les valeurs des lignes, qui sont toujours positives.

Passez dans *propriété* le numéro de la propriété de texte à lire. Vous pouvez utiliser les constantes du thème *QR Propriétés de texte*. Dans le tableau ci-dessous, la colonne Commentaire indique les valeurs pouvant être retournées :

| Constante                     | Type        | Valeur | Comment                                                                               |
| ----------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------- |
| \_o\_qr font                  | Entier long | 1      | Obsolète depuis 4D v14R3 (utiliser qr font name)                                      |
| qr alternate background color | Entier long | 9      | Numéro de couleur de fond alternée                                                    |
| qr background color           | Entier long | 8      | Numéro de couleur de fond                                                             |
| qr bold                       | Entier long | 3      | Attribut gras (0 ou 1)                                                                |
| qr font name                  | Entier long | 10     | Nom de police tel que retourné par exemple par la commande [FONT LIST](font-list.md). |
| qr font size                  | Entier long | 2      | Taille de police en points (9 à 255)                                                  |
| qr italic                     | Entier long | 4      | Attribut italique (0 ou 1)                                                            |
| qr justification              | Entier long | 7      | Attribut de justification (0 = par défaut, 1 = gauche, 2 = centre et 3 = droite)      |
| qr text color                 | Entier long | 6      | Numéro de couleur (Entier long)                                                       |
| qr underline                  | Entier long | 5      | Attribut souligné (0 ou 1)                                                            |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *numColonne* est incorrect, l’erreur -9852 est générée.  
Si le paramètre *numLigne* est incorrect, l’erreur -9853 est générée.  
Si le paramètre *propriété* est incorrect, l’erreur -9854 est générée.

#### Voir aussi 

[QR SET TEXT PROPERTY](qr-set-text-property.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 760 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


