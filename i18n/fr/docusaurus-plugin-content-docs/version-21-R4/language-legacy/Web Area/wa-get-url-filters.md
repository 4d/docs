---
id: wa-get-url-filters
title: WA GET URL FILTERS
slug: /commands/wa-get-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL FILTERS.Syntax-->**WA GET URL FILTERS** ( {* ;} *objet* ; *tabFiltres* ; *tabAutorisRefus* )<!-- END REF-->
<!--REF #_command_.WA GET URL FILTERS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| tabFiltres | Text array | &#8592; | Tableau de filtres |
| tabAutorisRefus | Boolean array | &#8592; | Tableau autoriser-refuser |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 2|Créé|

</details>
</div>

## Description 

<!--REF #_command_.WA GET URL FILTERS.Summary-->La commande **WA GET URL FILTERS** retourne dans les tableaux *tabFiltres* et *tabAutorisRefus* les filtres actifs dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Si aucun filtre n’est actif, les tableaux sont retournés vides. 

Les filtres sont installés par la commande [WA SET URL FILTERS](../commands/wa-set-url-filters). Si les tableaux ont été réinitialisés au cours de la session, la commande **WA GET URL FILTERS** vous permet de connaître le paramétrage courant. 

## Voir aussi 

[WA GET EXTERNAL LINKS FILTERS](../commands/wa-get-external-links-filters)  
[WA SET URL FILTERS](../commands/wa-set-url-filters)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1031 |
| Thread safe | no |


