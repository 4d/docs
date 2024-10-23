---
id: wa-open-back-url
title: WA OPEN BACK URL
slug: /commands/wa-open-back-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN BACK URL.Syntax-->**WA OPEN BACK URL** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.WA OPEN BACK URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA OPEN BACK URL.Summary-->La commande **WA OPEN BACK URL** charge dans la zone Web désignée par les paramètres *\** et *objet* l’URL précédent dans la séquence d’URLs ouverts.<!-- END REF--> 

S’il n’y a pas d’URL précédent, la commande ne fait rien. Vous pouvez tester la disponibilité d’un URL précédent à l’aide de la commande [WA Back URL available](wa-back-url-available.md). 

#### Voir aussi 

[WA OPEN FORWARD URL](wa-open-forward-url.md)  
[WA OPEN URL](wa-open-url.md)  