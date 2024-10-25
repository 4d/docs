---
id: wa-stop-loading-url
title: WA STOP LOADING URL
slug: /commands/wa-stop-loading-url
displayed_sidebar: docs
---

<!--REF #_command_.WA STOP LOADING URL.Syntax-->**WA STOP LOADING URL** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.WA STOP LOADING URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA STOP LOADING URL.Summary-->La commande **WA STOP LOADING URL** stoppe le chargement des ressources de l’URL courant de la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->

#### Voir aussi 

[WA REFRESH CURRENT URL](wa-refresh-current-url.md)  