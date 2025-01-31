---
id: wa-forward-url-available
title: WA Forward URL available
slug: /commands/wa-forward-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Forward URL available.Syntax-->**WA Forward URL available** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Forward URL available.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai s’il existe un URL suivant dans la séquence d’URLs ouverts, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Forward URL available.Summary-->La commande **WA Forward URL available** permet de savoir s’il existe un URL suivant disponible dans la séquence d’URLs ouverts dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> 

La commande retourne Vrai si un URL existe et Faux sinon. Cette commande permet notamment, dans la cadre d’une interface personnalisée, d’activer ou d’inactiver des boutons de navigation.

#### Voir aussi 

[WA Back URL available](wa-back-url-available.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1027 |
| Thread safe | &cross; |


