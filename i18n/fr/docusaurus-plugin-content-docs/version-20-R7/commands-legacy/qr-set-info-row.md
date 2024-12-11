---
id: qr-set-info-row
title: QR SET INFO ROW
slug: /commands/qr-set-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR SET INFO ROW.Syntax-->**QR SET INFO ROW** ( *zone* ; *ligne* ; *cachée* )<!-- END REF-->
<!--REF #_command_.QR SET INFO ROW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| ligne | Integer | &#8594;  | Ligne |
| cachée | Integer | &#8594;  | 0 = Visible, 1 = Cachée |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR SET INFO ROW.Summary-->La commande **QR SET INFO ROW** permet d'afficher ou de masquer la ligne dont la référence est passée dans le paramètre *ligne*.<!-- END REF-->

Le paramètre *ligne* désigne la ligne à modifier. Vous pouvez passer soit :

* une valeur entière positive pour désigner la ligne de sous-total correspondante,
* une des constantes suivantes du thème *QR Lignes pour Propriétés* :  

| Constante      | Type        | Valeur | Comment               |  
| -------------- | ----------- | ------ | --------------------- |  
| qr detail      | Entier long | \-2    | Zone Détail de l'état |  
| qr grand total | Entier long | \-3    | Zone Total général    |  
| qr title       | Entier long | \-1    | Intitulé de l'état    |

*cachée* permet de spécifier si le contenu de la ligne doit être affiché ou masqué :

* si *cachée* vaut 1, le contenu de la ligne est masqué ;
* si *cachée* vaut 0, le contenu de la ligne est affiché.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *ligne* est incorrect, l’erreur -9852 est générée.

#### Exemple 

L'instruction suivante masque le contenu de la ligne Détail :

```4d
 QR SET INFO ROW(maZone;qr detail;1)
```

#### Voir aussi 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR Get info row](qr-get-info-row.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 763 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


