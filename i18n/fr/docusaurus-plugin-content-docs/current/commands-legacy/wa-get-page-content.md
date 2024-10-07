---
id: wa-get-page-content
title: WA Get page content
slug: /commands/wa-get-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page content.Syntax-->**WA Get page content** ( {* ;} *objet* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WA Get page content.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#x1F852; | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#x1F852; | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Text | &#x1F850; | Code HTML source |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get page content.Summary-->La commande **WA Get page content** retourne le code HTML de la page courante ou en cours d’affichage dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> 

Cette commande retourne une chaîne vide si le contenu de la page courante n’est pas disponible.

#### Voir aussi 

[WA SET PAGE CONTENT](wa-set-page-content.md)  