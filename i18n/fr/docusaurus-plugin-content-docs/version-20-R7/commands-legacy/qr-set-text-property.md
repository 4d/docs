---
id: qr-set-text-property
title: QR SET TEXT PROPERTY
slug: /commands/qr-set-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TEXT PROPERTY.Syntax-->**QR SET TEXT PROPERTY** ( *zone* ; *numColonne* ; *numLigne* ; *propriété* ; *valeur* )<!-- END REF-->
<!--REF #_command_.QR SET TEXT PROPERTY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| numColonne | Integer | &#8594;  | Numéro de colonne |
| numLigne | Integer | &#8594;  | Numéro de ligne |
| propriété | Integer | &#8594;  | Numéro de propriété |
| valeur | Integer, Text | &#8594;  | Valeur de la propriété définie |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET TEXT PROPERTY.Summary-->La commande **QR SET TEXT PROPERTY** permet de définir les propriétés de texte de la cellule désignée par les paramètres *numColonne* et *numLigne*.<!-- END REF--> 

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

Passez dans *propriété* la valeur de la propriété de texte à modifier. Vous pouvez utiliser les constantes du thème *QR Propriétés de texte*. Dans le tableau ci-dessous, la colonne Commentaire indique les valeurs associées (paramètre *valeur*) :

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

#### Exemple 

Cette méthode définit plusieurs attributs pour l'intitulé de la première colonne :

```4d
  //Affecte la police Times :
 QR SET TEXT PROPERTY(qr_zone;1;-1;qr font name;"Times")
  //Affecte la taille de police 10 points :
 QR SET TEXT PROPERTY(qr_zone;1;-1;qr font size;10)
  //Affecte l'attribut gras :
 QR SET TEXT PROPERTY(qr_zone;1;-1;qr bold;1)
  //Affecte l'attribut italique :
 QR SET TEXT PROPERTY(qr_zone;1;-1;qr italic;1)
  //Affecte l'attribut souligné :
 QR SET TEXT PROPERTY(qr_zone;1;-1;qr underline;1)
  //Affecte la couleur vert clair :
 QR SET TEXT PROPERTY(qr_zone;1;-1;qr text color;0x0000FF00)
```

#### Voir aussi 

[QR Get text property](qr-get-text-property.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 759 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


