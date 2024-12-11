---
id: wa-get-last-url-error
title: WA GET LAST URL ERROR
slug: /commands/wa-get-last-url-error
displayed_sidebar: docs
---

<!--REF #_command_.WA GET LAST URL ERROR.Syntax-->**WA GET LAST URL ERROR** ( {* ;} *objet* ; *url* ; *description* ; *codeErreur* )<!-- END REF-->
<!--REF #_command_.WA GET LAST URL ERROR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| url | Text | &#8592; | URL à l’origine de l’erreur |
| description | Text | &#8592; | Description de l’erreur (Mac OS) |
| codeErreur | Integer | &#8592; | Code d'erreur |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA GET LAST URL ERROR.Summary-->La commande **WA GET LAST URL ERROR** vous permet de récupérer plusieurs informations relatives à la dernière erreur ayant eu lieu dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->   
Ces informations sont retournées dans trois variables :

* *url* : l’URL ayant provoqué l’erreur.
* *description* (Mac OS uniquement) : un texte décrivant l’erreur (si disponible). S’il n’est pas possible d’associer un texte à l’erreur, une chaîne vide est retournée. Sous Windows, ce paramètre est toujours retourné vide.
* *codeErreur* : code de l’erreur.  
   * Si le code est >=400, il s’agit d’une erreur liée au protocole HTTP. Pour plus d’informations sur ce type d’erreur, reportez-vous à l’adresse *http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html*  
   * Sinon, il s’agit d’une erreur retournée par le WebKit (Mac OS) ou ActiveX (Windows).

Il est judicieux d’appeler cette commande dans le cadre de l’événement formulaire On URL Loading Error afin de connaître la cause de l’erreur qui vient de se produire. Pour plus d’informations, reportez-vous à la description de la commande [Form event code](form-event-code.md). 

#### Voir aussi 

[Form event code](form-event-code.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1034 |
| Thread safe | &check; |
| Interdite sur le serveur ||


