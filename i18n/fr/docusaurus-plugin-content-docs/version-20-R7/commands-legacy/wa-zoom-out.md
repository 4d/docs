---
id: wa-zoom-out
title: WA ZOOM OUT
slug: /commands/wa-zoom-out
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM OUT.Syntax-->**WA ZOOM OUT** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.WA ZOOM OUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA ZOOM OUT.Summary-->La commande **WA ZOOM OUT** réduit la taille du texte affiché dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> 

Sous Mac OS, la portée de cette commande est la session 4D : le paramétrage effectué n’est pas conservé après la fermeture de l’application 4D. 

Sous Windows, la portée de cette commande est globale : le paramétrage est conservé après la fermeture de l’application 4D.

#### Voir aussi 

[WA ZOOM IN](wa-zoom-in.md)  