---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Text | &#8592; | Dernier URL filtré |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get last filtered URL.Summary-->La commande **WA Get last filtered URL** retourne le dernier URL ayant été filtré dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->

L’URL peut avoir été filtré pour l’une des raisons suivantes :

* l’URL est interdit à cause d’un filtre (commande [WA SET URL FILTERS](wa-set-url-filters.md)),
* le lien est ouvert dans le navigateur par défaut (commande [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)),
* l’URL tentait d’ouvrir une fenêtre pop up.

Il est judicieux d’appeler cette commande dans le contexte des événements formulaire On URL Filtering, On Open External Link et On Window Opening Denied afin de connaître l’URL filtré. Pour plus d’informations, reportez-vous à la description de la commande [Form event code](../commands/form-event-code.md).

#### Voir aussi 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1035 |
| Thread safe | &cross; |


