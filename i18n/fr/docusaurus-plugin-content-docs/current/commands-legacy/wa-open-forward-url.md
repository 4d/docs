---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->La commande **WA OPEN FORWARD URL** charge dans la zone Web désignée par les paramètres *\** et *objet* l’URL suivant dans la séquence d’URLs ouverts.<!-- END REF--> 

S’il n’y a pas d’URL suivant (c’est-à-dire si l’utilisateur n’a jamais effectué de retour à l’URL précédent), la commande ne fait rien. Vous pouvez tester la disponibilité d’un URL suivant à l’aide de la commande [WA Forward URL available](wa-forward-url-available.md).

#### Voir aussi 

[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN URL](wa-open-url.md)  