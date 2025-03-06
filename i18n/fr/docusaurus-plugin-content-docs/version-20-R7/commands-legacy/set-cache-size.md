---
id: set-cache-size
title: SET CACHE SIZE
slug: /commands/set-cache-size
displayed_sidebar: docs
---

<!--REF #_command_.SET CACHE SIZE.Syntax-->**SET CACHE SIZE** ( *taille* {; *libereMini*} )<!-- END REF-->
<!--REF #_command_.SET CACHE SIZE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| taille | Real | &#8594;  | Taille du cache du la base de données en octets |
| libereMini | Real | &#8594;  | Nombre minimum d'octets à libérer lorsque le cache est plein |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET CACHE SIZE.Summary-->La commande **SET CACHE SIZE** fixe dynamiquement la taille du cache de la base de données et, optionnellement, permet de fixer la taille minimum en octets à partir de laquelle on commence à libérer la mémoire.<!-- END REF-->.

**Note :** cette commande fonctionne uniquement en mode local (4D Server et 4D); elle ne doit pas être utilisée à partir d'un 4D en accès distant. 

Dans *taille*, passez la nouvelle taille du cache de la base en octets. Cette nouvelle taille s'applique dynamiquement, dès que la commande est exécutée.

Dans *libereMini*, passez la taille minimum de mémoire à libérer dans le cache de la base de données, lorsque le moteur a besoin de plus d'espace pour allouer un objet en mémoire (valeur en octets). L'intérêt de cette option est de réduire le nombre de fois où les données sont libérées à partir de la mémoire cache afin d'obtenir de meilleures performances. Par défaut, si cette option n'est pas utilisée, 4D décharge au moins 10 % de la mémoire cache lorsqu'il a besoin de place. Si votre base de données fonctionne avec un grand cache, il peut être avantageux d'utiliser une taille fixe, qui ne dépend pas de la taille du cache. Vous pouvez régler ce paramètre en fonction de la taille des blocs de données traitées dans votre base de données.

#### Exemple 

Vous voulez ajouter 100 Mo à la taille du cache de votre base. Vous pouvez écrire :

```4d
 var $currentCache : Real
 $currentCache:=Get cache size
  // la taille actuelle du cache est par exemple, 419430400
 SET CACHE SIZE($currentCache+100000000)
  // la taille courante du cache est maintenant de 519430400
```

#### Voir aussi 

[Get cache size](get-cache-size.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1399 |
| Thread safe | &check; |


