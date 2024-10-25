---
id: wa-refresh-current-url
title: WA REFRESH CURRENT URL
slug: /commands/wa-refresh-current-url
displayed_sidebar: docs
---

<!--REF #_command_.WA REFRESH CURRENT URL.Syntax-->**WA REFRESH CURRENT URL** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.WA REFRESH CURRENT URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA REFRESH CURRENT URL.Summary-->La commande **WA REFRESH CURRENT URL** provoque le rechargement de l’URL courant affiché dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->

#### Voir aussi 

[WA STOP LOADING URL](wa-stop-loading-url.md)  