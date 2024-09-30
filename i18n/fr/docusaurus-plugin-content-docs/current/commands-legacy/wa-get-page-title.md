---
id: wa-get-page-title
title: WA Get page title
slug: /commands/wa-get-page-title
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page title.Syntax-->**WA Get page title** ( {* ;} *objet* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WA Get page title.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#x1F852; | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | Objet de formulaire | &#x1F852; | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Chaîne | &#x1F850; | Titre de la page courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get page title.Summary-->La commande **WA Get page title** retourne le titre de la page courante ou en cours d’affichage dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Le titre correspond à la balise HTML "Title".

Cette commande retourne une chaîne vide s’il n’y a pas de titre disponible à l’URL courant.

#### Voir aussi 

[WA Get page content](wa-get-page-content.md)  