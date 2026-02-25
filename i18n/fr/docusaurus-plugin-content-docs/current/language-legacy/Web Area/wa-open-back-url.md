---
id: wa-open-back-url
title: WA OPEN BACK URL
slug: /commands/wa-open-back-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN BACK URL.Syntax-->**WA OPEN BACK URL** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.WA OPEN BACK URL.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
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

<!--REF #_command_.WA OPEN BACK URL.Summary-->La commande **WA OPEN BACK URL** charge dans la zone Web désignée par les paramètres *\** et *objet* l’URL précédent dans la séquence d’URLs ouverts.<!-- END REF--> 

S’il n’y a pas d’URL précédent, la commande ne fait rien. Vous pouvez tester la disponibilité d’un URL précédent à l’aide de la commande [WA Back URL available](../commands/wa-back-url-available). 

## Voir aussi 

[WA OPEN FORWARD URL](../commands/wa-open-forward-url)  
[WA OPEN URL](../commands/wa-open-url)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1021 |
| Thread safe | no |


