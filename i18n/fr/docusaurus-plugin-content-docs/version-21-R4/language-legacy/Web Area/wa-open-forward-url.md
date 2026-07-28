---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
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

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->La commande **WA OPEN FORWARD URL** charge dans la zone Web désignée par les paramètres *\** et *objet* l’URL suivant dans la séquence d’URLs ouverts.<!-- END REF--> 

S’il n’y a pas d’URL suivant (c’est-à-dire si l’utilisateur n’a jamais effectué de retour à l’URL précédent), la commande ne fait rien. Vous pouvez tester la disponibilité d’un URL suivant à l’aide de la commande [WA Forward URL available](../commands/wa-forward-url-available).

## Voir aussi 

[WA OPEN BACK URL](../commands/wa-open-back-url)  
[WA OPEN URL](../commands/wa-open-url)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1022 |
| Thread safe | no |


