---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Text | &#8592; | Dernier URL filtré |
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

<!--REF #_command_.WA Get last filtered URL.Summary-->La commande **WA Get last filtered URL** retourne le dernier URL ayant été filtré dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->

L’URL peut avoir été filtré pour l’une des raisons suivantes :

* l’URL est interdit à cause d’un filtre (commande [WA SET URL FILTERS](../commands/wa-set-url-filters)),
* le lien est ouvert dans le navigateur par défaut (commande [WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters)),
* l’URL tentait d’ouvrir une fenêtre pop up.

Il est judicieux d’appeler cette commande dans le contexte des événements formulaire On URL Filtering, On Open External Link et On Window Opening Denied afin de connaître l’URL filtré. Pour plus d’informations, reportez-vous à la description de la commande [Form event code](../commands/form-event-code).

## Voir aussi 

[WA GET EXTERNAL LINKS FILTERS](../commands/wa-get-external-links-filters)  
[WA GET URL FILTERS](../commands/wa-get-url-filters)  
[WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters)  
[WA SET URL FILTERS](../commands/wa-set-url-filters)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1035 |
| Thread safe | no |


