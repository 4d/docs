---
id: wa-set-url-filters
title: WA SET URL FILTERS
slug: /commands/wa-set-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET URL FILTERS.Syntax-->**WA SET URL FILTERS** ( {* ;} *objet* ; *tabFiltres* ; *tabAutorisRefus* )<!-- END REF-->
<!--REF #_command_.WA SET URL FILTERS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| tabFiltres | Text array | &#8594;  | Tableau de filtres |
| tabAutorisRefus | Boolean array | &#8594;  | Tableau autoriser-refuser |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA SET URL FILTERS.Summary-->La commande **WA SET URL FILTERS** permet de mettre en place un ou plusieurs filtre(s) pour la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->

Avant le chargement de toute page, 4D consulte la liste des filtres afin de vérifier si l’URL cible est autorisé ou non. L’évaluation de l’URL est basée sur le contenu des tableaux *tabFiltres* et *tabAutorisRefus* s'ils ont été définis. 

Si l’URL demandé n’est pas autorisé, il n’est pas chargé et l’événement formulaire On URL Filtering est généré (cf. commande [Form event code](../commands/form-event-code.md)). 

Les tableaux *tabFiltres* et *tabAutorisRefus* doivent être synchronisés. 

* Chaque ligne du tableau *tabFiltres* doit contenir un URL devant être filtré. Vous pouvez utiliser le \* comme joker de remplacement pour un ou plusieurs caractère(s).
* Chaque ligne correspondante dans le tableau *tabAutorisRefus* doit contenur un booléen indiquant si l’URL doit être autorisé (Vrai) ou refusé (Faux).

En cas de contradiction au niveau des paramétrages (autorisation et refus d’un même URL), le paramétrage pris en compte est le dernier. 

Pour désactiver le filtrage des URLs, appelez la commande en lui passant des tableaux vides ou en passant respectivement les valeurs "*\**" et Vrai dans la dernière ligne des tableaux *tabFiltres* et *tabAutorisRefus*. 

Une fois la commande exécutée, les filtres deviennent une propriété de la zone Web. Si les tableaux *tabFiltres* et *tabAutorisRefus* sont supprimés ou réinitialisés, les filtres restent actifs tant que la commande n’a pas été exécutée à nouveau. Pour connaître les filtres actifs pour une zone, vous devez utiliser la commande [WA GET URL FILTERS](wa-get-url-filters.md). 

**Important :** Le filtrage des URLs effectué par cette commande s’applique à toute demande de changement de l'URL principal de la page, qu'elle provienne de l'utilisateur, du code javascript ou du code 4D, à l'exception de la commande [WA OPEN URL](wa-open-url.md) et des URLs commençant par "javascript:".

#### Exemple 1 

Vous souhaitez interdire l’accès à tous les sites web .org, .net et .fr :

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*.org")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.net")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.fr")
 APPEND TO ARRAY($AllowDeny;False)
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Exemple 2 

Vous souhaitez interdire l’accès à tous les sites web sauf les sites russes (.ru) :

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*") //Tout sélectionner
 APPEND TO ARRAY($AllowDeny;False) //Tout interdire
 APPEND TO ARRAY($filters;"www.*.ru") //Sélectionner *.ru
 APPEND TO ARRAY($AllowDeny;True) //Autoriser
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Exemple 3 

Vous souhaitez donner accès aux sites Web 4D uniquement (.com, .fr, .es, etc.) :

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*") //Tout sélectionner
 APPEND TO ARRAY($AllowDeny;False) //Tout interdire
 APPEND TO ARRAY($filters;"www.4D.*") //Sélectionner 4d.fr, 4d.com...
 APPEND TO ARRAY($AllowDeny;True) //Autoriser
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Exemple 4 

Vous souhaitez autoriser l’accès local à la documentation uniquement (située dans le dossier C://doc) :

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*") //Tout sélectionner
 APPEND TO ARRAY($AllowDeny;False) //Tout interdire
 APPEND TO ARRAY($filters;"file://C:/doc/*") //Sélectionner le chemin file:// autorisé
 APPEND TO ARRAY($AllowDeny;True)->Autoriser
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Exemple 5 

Vous souhaitez autoriser tous les sites sauf un, par exemple celui d’Elcaro :

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*")
 APPEND TO ARRAY($AllowDeny;True) //Tout autoriser
 APPEND TO ARRAY($filters;"*elcaro*") //Interdire tout ce qui contient elcaro
 APPEND TO ARRAY($AllowDeny;False)
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Exemple 6 

Vous souhaitez interdire des adresses IP spécifiques :

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*") //Tout sélectionner
 APPEND TO ARRAY($AllowDeny;True) //Tout autoriser
 APPEND TO ARRAY($filters;"86.83.*") //Sélectionner les IP débutant par 86.83.
 APPEND TO ARRAY($AllowDeny;False) //Interdire
 APPEND TO ARRAY($filters;"86.1*") //Sélectionner les IP débutant par 86.1 (86.10, 86.135 etc.)
 APPEND TO ARRAY($AllowDeny;False) //Interdire
  //A noter que l’adresse IP d’un domaine peut varier
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Voir aussi 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1030 |
| Thread safe | &check; |
| Interdite sur le serveur ||


