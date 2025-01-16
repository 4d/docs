---
id: get-print-marker
title: Get print marker
slug: /commands/get-print-marker
displayed_sidebar: docs
---

<!--REF #_command_.Get print marker.Syntax-->**Get print marker** ( *numTaquet* ) : Integer<!-- END REF-->
<!--REF #_command_.Get print marker.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numTaquet | Integer | &#8594;  | Numéro de taquet |
| Résultat | Integer | &#8592; | Position du taquet |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get print marker.Summary-->La commande **Get print marker** permet de récupérer la position courante d’un taquet lors d’une impression.<!-- END REF--> Les coordonnées sont retournées en pixels (1 pixel = 1/72 pouce). 

Cette commande peut être appelée dans deux contextes :

* lors de l’événement formulaire On Header, dans le cadre de l’utilisation des commandes [PRINT SELECTION](print-selection.md) et [PRINT RECORD](print-record.md).
* lors de l’événement formulaire On Printing Detail, dans le cadre de l’utilisation de la commande [Print form](print-form.md).

Passez dans le paramètre *numTaquet* une des constantes du thème "*Zone de formulaire*" :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Form break0   | Entier long | 300    |
| Form break1   | Entier long | 301    |
| Form break2   | Entier long | 302    |
| Form break3   | Entier long | 303    |
| Form break4   | Entier long | 304    |
| Form break5   | Entier long | 305    |
| Form break6   | Entier long | 306    |
| Form break7   | Entier long | 307    |
| Form break8   | Entier long | 308    |
| Form break9   | Entier long | 309    |
| Form detail   | Entier long | 0      |
| Form footer   | Entier long | 100    |
| Form header   | Entier long | 200    |
| Form header1  | Entier long | 201    |
| Form header10 | Entier long | 210    |
| Form header2  | Entier long | 202    |
| Form header3  | Entier long | 203    |
| Form header4  | Entier long | 204    |
| Form header5  | Entier long | 205    |
| Form header6  | Entier long | 206    |
| Form header7  | Entier long | 207    |
| Form header8  | Entier long | 208    |
| Form header9  | Entier long | 209    |

#### Exemple 

Reportez-vous à l’exemple de la commande [SET PRINT MARKER](set-print-marker.md). 

#### Voir aussi 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 708 |
| Thread safe | &cross; |


