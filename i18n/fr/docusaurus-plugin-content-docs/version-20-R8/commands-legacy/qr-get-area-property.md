---
id: qr-get-area-property
title: QR Get area property
slug: /commands/qr-get-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get area property.Syntax-->**QR Get area property** ( *zone* ; *propriété* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get area property.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| propriété | Integer | &#8594;  | Elément d'interface |
| Résultat | Integer | &#8592; | 1 = affiché, 0 = caché |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get area property.Summary-->La commande **QR Get area property** retourne 0 si l'élément d'interface dont la référence est passée dans le paramètre *propriété* est masqué dans la *zone*, sinon elle retourne 1\.<!-- END REF--> 

Cette commande peut être utilisée uniquement avec une zone Etat rapide intégrée dans un formulaire.

Vous pouvez utiliser la constante suivante du thème *QR Propriétés de zone* dans *propriété* :

| Constante                | Valeur | Comment                                                |
| ------------------------ | ------ | ------------------------------------------------------ |
| qr view contextual menus | 7      | Affichage des menus contextuels (Affichés=1, Cachés=0) |

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

Si le paramètre *propriété* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR SET AREA PROPERTY](qr-set-area-property.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 795 |
| Thread safe | &cross; |
| Modifie les variables | error |


