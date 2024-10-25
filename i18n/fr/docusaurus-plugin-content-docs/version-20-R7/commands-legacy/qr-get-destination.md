---
id: qr-get-destination
title: QR GET DESTINATION
slug: /commands/qr-get-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR GET DESTINATION.Syntax-->**QR GET DESTINATION** ( *zone* ; *type* {; *spécificités*} )<!-- END REF-->
<!--REF #_command_.QR GET DESTINATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| type | Integer | &#8592; | Type d'état |
| spécificités | Text, Variable | &#8592; | Spécificités de la destination |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QR GET DESTINATION.Summary-->La commande **QR GET DESTINATION** retourne le *type* de destination de l'état rapide contenu dans la *zone*.<!-- END REF--> 

Vous pouvez comparer la valeur obtenue dans le paramètre *type* avec les constantes du thème *QR Destination de sortie*. Le tableau suivant décrit les valeurs qui peuvent être retournées dans les paramètres *type* et *spécificités* :

| Constante             | Type        | Valeur | Comment                                                                  |
| --------------------- | ----------- | ------ | ------------------------------------------------------------------------ |
| \_o\_qr 4D Chart area | Entier long | 4      | \*\*\* Constante obsolète \*\*\*                                         |
| \_o\_qr 4D View area  | Entier long | 3      | \*\*\* Constante obsolète \*\*\*                                         |
| qr HTML file          | Entier long | 5      | *spécificités* : Chemin d'accès du fichier.                              |
| qr printer            | Entier long | 1      | *spécificités* : "\*" pour supprimer les boîtes de dialogue d'impression |
| qr text file          | Entier long | 2      | *spécificités* : Chemin d'accès du fichier.                              |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Voir aussi 

[QR SET DESTINATION](qr-set-destination.md)  