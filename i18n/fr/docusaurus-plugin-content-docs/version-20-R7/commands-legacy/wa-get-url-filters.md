---
id: wa-get-url-filters
title: WA GET URL FILTERS
slug: /commands/wa-get-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL FILTERS.Syntax-->**WA GET URL FILTERS** ( {* ;} *objet* ; *tabFiltres* ; *tabAutorisRefus* )<!-- END REF-->
<!--REF #_command_.WA GET URL FILTERS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| tabFiltres | Text array | &#8592; | Tableau de filtres |
| tabAutorisRefus | Boolean array | &#8592; | Tableau autoriser-refuser |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WA GET URL FILTERS.Summary-->La commande **WA GET URL FILTERS** retourne dans les tableaux *tabFiltres* et *tabAutorisRefus* les filtres actifs dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Si aucun filtre n’est actif, les tableaux sont retournés vides. 

Les filtres sont installés par la commande [WA SET URL FILTERS](wa-set-url-filters.md). Si les tableaux ont été réinitialisés au cours de la session, la commande **WA GET URL FILTERS** vous permet de connaître le paramétrage courant. 

#### Voir aussi 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  