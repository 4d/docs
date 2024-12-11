---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai s’il existe un URL précédent dans la séquence d’URLs ouverts, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Back URL available.Summary-->La commande **WA Back URL available** permet de savoir s’il existe un URL précédent disponible dans la séquence d’URLs ouverts dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->  
  
La commande retourne Vrai si un URL existe et Faux sinon. Cette commande permet notamment, dans la cadre d’une interface personnalisée, d’activer ou d’inactiver des boutons de navigation.

#### Voir aussi 

[WA Forward URL available](wa-forward-url-available.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1026 |
| Thread safe | &check; |
| Interdite sur le serveur ||


