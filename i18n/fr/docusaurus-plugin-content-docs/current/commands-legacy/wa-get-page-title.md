---
id: wa-get-page-title
title: WA Get page title
slug: /commands/wa-get-page-title
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page title.Syntax-->**WA Get page title** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get page title.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Text | &#8592; | Titre de la page courante |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA Get page title.Summary-->La commande **WA Get page title** retourne le titre de la page courante ou en cours d’affichage dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Le titre correspond à la balise HTML "Title".

Cette commande retourne une chaîne vide s’il n’y a pas de titre disponible à l’URL courant.

#### Voir aussi 

[WA Get page content](wa-get-page-content.md)  