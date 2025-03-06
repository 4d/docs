---
id: qr-set-area-property
title: QR SET AREA PROPERTY
slug: /commands/qr-set-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET AREA PROPERTY.Syntax-->**QR SET AREA PROPERTY** ( *zone* ; *propriété* ; *valeur* )<!-- END REF-->
<!--REF #_command_.QR SET AREA PROPERTY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| propriété | Integer | &#8594;  | Elément d'interface |
| valeur | Integer | &#8594;  | 1 = affiché, 0 = caché |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET AREA PROPERTY.Summary-->La commande **QR SET AREA PROPERTY** vous permet d'afficher ou de masquer l'élément d'interface dont la référence est passée dans le paramètre *propriété*.<!-- END REF-->

Cette commande peut être utilisée uniquement avec une zone Etat rapide intégrée dans un formulaire.

Vous pouvez utiliser la constante suivante du thème *QR Propriétés de zone* du thème propriété :

| Constante                | Valeur | Comment                                                |
| ------------------------ | ------ | ------------------------------------------------------ |
| qr view contextual menus | 7      | Affichage des menus contextuels (Affichés=1, Cachés=0) |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *propriété* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR Get area property](qr-get-area-property.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 796 |
| Thread safe | &cross; |
| Modifie les variables | error |


