---
id: qr-get-info-row
title: QR Get info row
slug: /commands/qr-get-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR Get info row.Syntax-->**QR Get info row** ( *zone* ; *ligne* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get info row.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| ligne | Integer | &#8594;  | Ligne |
| Résultat | Integer | &#8592; | 0 = Visible, 1 = Cachée |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get info row.Summary-->La commande **QR Get info row** indique si la ligne désignée par le paramètre *ligne* est affichée ou masquée dans la *zone*.<!-- END REF--> 

Le paramètre *ligne* désigne la ligne à vérifier. Vous pouvez passer soit :

* une valeur entière positive pour désigner la ligne de sous-total correspondante,
* une des constantes suivantes du thème *QR Lignes pour Propriétés* :  

| Constante      | Type        | Valeur | Comment               |  
| -------------- | ----------- | ------ | --------------------- |  
| qr detail      | Entier long | \-2    | Zone Détail de l'état |  
| qr grand total | Entier long | \-3    | Zone Total général    |  
| qr title       | Entier long | \-1    | Intitulé de l'état    |
La valeur retournée par **QR Get info row** indique si le contenu de la ligne est affiché ou masqué. Si la fonction retourne 1, le contenu de la ligne est masqué ; si elle retourne 0, le contenu de la ligne est affiché. 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *ligne* est incorrect, l’erreur -9852 est générée.

#### Voir aussi 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  
[QR SET INFO ROW](qr-set-info-row.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 769 |
| Thread safe | &cross; |
| Modifie les variables | error |


