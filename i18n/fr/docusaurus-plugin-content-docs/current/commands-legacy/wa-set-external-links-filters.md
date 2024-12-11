---
id: wa-set-external-links-filters
title: WA SET EXTERNAL LINKS FILTERS
slug: /commands/wa-set-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Syntax-->**WA SET EXTERNAL LINKS FILTERS** ( {* ;} *objet* ; *tabFiltres* ; *tabAutorisRefus* )<!-- END REF-->
<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| tabFiltres | Text array | &#8594;  | Tableau de filtres |
| tabAutorisRefus | Boolean array | &#8594;  | Tableau autoriser-refuser |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Summary-->La commande **WA SET EXTERNAL LINKS FILTERS** permet de mettre en place un ou plusieurs filtre(s) de liens externes pour la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Les filtres de liens externes déterminent si un URL associé à la page courante via un lien doit être ouvert dans la zone Web ou dans le navigateur Web par défaut de la machine.

Lorsque l’utilisateur clique sur un lien dans la page courante, 4D consulte la liste des filtres de liens externes afin de vérifier si l’URL demandé doit être ouvert dans le navigateur de la machine. Si c’est le cas, la page correspondant à l’URL est affichée dans le navigateur Web et l’événement formulaire On Open External Link est généré (cf. commande [Form event code](../commands/form-event-code.md)). Sinon (fonctionnement par défaut), la page correspondant à l’URL est affichée dans la zone Web. L’évaluation de l’URL est basée sur le contenu des tableaux *tabFiltres* et t*abAutorisRefus*. 

Les tableaux *tabFiltres* et *tabAutorisRefus* doivent être synchronisés. 

* Chaque ligne du tableau *tabFiltres* doit contenir un URL devant être filtré. Vous pouvez utiliser le \* comme joker de remplacement pour un ou plusieurs caractère(s).
* Chaque ligne correspondante dans le tableau *tabAutorisRefus* doit contenur un booléen indiquant si l’URL doit être ouvert dans la zone Web (Vrai) ou dans le navigateur Web (Faux).

En cas de contradiction au niveau des paramétrages (autorisation et refus d’un même URL), le paramétrage pris en compte est le dernier. 

Pour désactiver le filtrage des URLs, appelez la commande en lui passant des tableaux vides ou en passant respectivement les valeurs "*\**" et Vrai dans la dernière ligne des tableaux *tabFiltres* et *tabAutorisRefus*. 

**Important :** Le filtrage établi par la commande [WA SET URL FILTERS](wa-set-url-filters.md) est pris en compte avant celui de **WA SET EXTERNAL LINKS FILTERS**. Cela signifie que si un URL est refusé à cause d’un filtre de la commande [WA SET URL FILTERS](wa-set-url-filters.md), il ne pourra pas être ouvert dans un navigateur même s’il est explicitement défini par la commande **WA SET EXTERNAL LINKS FILTERS** (cf. exemple 2).

#### Exemple 1 

Cet exemple provoquera l’ouverture de sites dans des navigateurs externes :

```4d
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*www.google.*") //Sélectionner "google"
 APPEND TO ARRAY($AllowDeny;False) //Faux : ce lien sera ouvert dans un navigateur externe
 APPEND TO ARRAY($filters;"*www.apple.*")
 APPEND TO ARRAY($AllowDeny;False) //Faux : ce lien sera ouvert dans un navigateur externe
 WA SET EXTERNAL LINKS FILTERS(MaZoneW;$filters;$AllowDeny)
```

#### Exemple 2 

Cet exemple combine des filtrages de sites et de liens externes :

```4d
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*www.google.*") //Sélectionner "google"
 APPEND TO ARRAY($AllowDeny;False) //Interdire ce lien
 WA SET URL FILTERS(MaZoneW;$filters;$AllowDeny)
 
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*www.google.*") //Sélectionner "google"
 APPEND TO ARRAY($AllowDeny;False)
  //Faux : ce lien devrait être ouvert dans un navigateur externe, mais ce paramétrage est sans effet car le lien sera bloqué
  //du fait du filtrage d’URL.
 WA SET EXTERNAL LINKS FILTERS(MaZoneW;$filters;$AllowDeny)
```

#### Voir aussi 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1032 |
| Thread safe | &check; |
| Interdite sur le serveur ||


