---
id: cache-info
title: Cache info
slug: /commands/cache-info
displayed_sidebar: docs
---

<!--REF #_command_.Cache info.Syntax-->**Cache info** {( *dbFilter* )} : Object<!-- END REF-->
<!--REF #_command_.Cache info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dbFilter | Object | &#8594;  | définit la liste des attributs à retourner (filtrés par DB) |
| Résultat | Object | &#8592; | Informations à propos du cache |

<!-- END REF-->

#### Description 

<!--REF #_command_.Cache info.Summary-->La commande **Cache info** retourne un objet contenant des informations détaillées sur le contenu actuel du cache (mémoire utilisée, tables et index chargés, etc.)

**Note :** Cette commande fonctionne uniquement en mode local (4D Server et 4D) ; elle ne doit pas être utilisée avec 4D en mode accès distant.<!-- END REF-->

Par défaut, l'information retournée se réfère seulement à la base courante en cours d'exécution. Le paramètre objet optionnel *dbFilter* vous permet de spécifier la portée de cette commande :

* passez l'attribut "dbFilter" avec la valeur "All" pour obtenir les informations sur le cache de toutes les bases lancées, y compris les composants.
* passez l'attribut "dbFilter" avec la valeur "" (chaîne vide) pour obtenir des informations uniquement sur la base courante (équivalent à l'omission du paramètre *dbFilter*).

La commande **Cache info** retourne un objet unique qui contient toutes les informations pertinentes à propos du cache. L'objet retourné a la structure suivante :

```json
{    "maxMem": Maximum cache size (real),    "usedMem": Current cache size (real),    "objects": [...] Array of objects currently loaded in cache}
```

Les éléments du tableau *objects* sont des objets racine (tables, index, Blobs, etc.) qui sont actuellement chargés dans le cache. Chaque élément contient les attributs spécifiques qui décrivent son statut courant. Pour plus d'informations sur l'interprétation avancée de ces données, veuillez contacter les services techniques de 4D. 

#### Exemple 

Vous souhaitez obtenir des informations sur la base de données courante : 

```4d
 var $cache : Object
 $cache:=Cache info
```

Vous souhaitez obtenir des informations sur la base courante et tous les composants ouverts :

```4d
 var $dbFilter : Object
 OB SET($dbFilter;"dbFilter";"All")
 $cache:=Cache info($dbFilter)
```

#### Voir aussi 

[MEMORY STATISTICS](memory-statistics.md)  