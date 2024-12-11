---
id: wa-get-external-links-filters
title: WA GET EXTERNAL LINKS FILTERS
slug: /commands/wa-get-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Syntax-->**WA GET EXTERNAL LINKS FILTERS** ( {* ;} *objet* ; *tabFiltres* ; *tabAutorisRefus* )<!-- END REF-->
<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| tabFiltres | Text array | &#8592; | Tableau de filtres |
| tabAutorisRefus | Boolean array | &#8592; | Tableau autoriser-refuser |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Summary-->La commande **WA GET EXTERNAL LINKS FILTERS** retourne dans les tableaux *tabFiltres* et *tabAutorisRefus* les filtres de liens externes de la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Si aucun filtre n’est actif, les tableaux sont retournés vides. 

Les filtres sont installés par la commande [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md). Si les tableaux ont été réinitialisés au cours de la session, la commande **WA GET EXTERNAL LINKS FILTERS** vous permet de connaître le paramétrage courant.

#### Voir aussi 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1033 |
| Thread safe | &check; |
| Interdite sur le serveur ||


