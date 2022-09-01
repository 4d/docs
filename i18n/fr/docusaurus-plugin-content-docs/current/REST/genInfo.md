---
id: genInfo
title: Obtenir des informations du serveur
---

Vous pouvez obtenir plusieurs informations du serveur REST :

- les datastores exposées et leurs attributs
- le contenu du cache du serveur REST, y compris les sessions utilisateur.

## Catalogue

Utilisez les paramètres [`$catalog`]($catalog.md),[`$catalog/{dataClass}`]($catalog.md#catalogdataclass), ou [`$catalog/$all`]($catalog.md#catalogall) pour obtenir la liste [des dataclasses exposées et leurs attributs](configuration.md#exposing-tables-and-fields).

Pour obtenir la collection de toutes les dataclass exposées avec leurs attributs :

`GET /rest/$catalog/$all`


## Informations sur le cache

Utilisez le paramètre [`$info`]($info.md) pour obtenir des informations sur les sélections d'entités stockées dans le cache du 4D Server et sur l'exécution des sessions utilisateur.

## queryPath et queryPlan

Les sélections d'entité générées par les requêtes peuvent avoir les deux propriétés suivantes : `queryPlan` et `queryPath`. Pour calculer et retourner ces propriétés, il vous suffit d'ajouter [`$queryPlan`]($queryplan.md) et/ou [`$queryPath`]($querypath.md) dans la demande REST.

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

Ces propriétés sont des objets contenant des informations sur la façon dont le serveur exécute les requêtes composites en interne via des dataclass et des relations :
- **queryPlan** : objet contenant la description détaillée de la requête juste avant son exécution (c'est-à-dire la requête planifiée).
- **queryPath** : objet contenant la description détaillée de la requête telle qu'elle a été réellement effectuée.

Les informations enregistrées incluent le type de requête (indexé et séquentiel) et chaque sous-requête nécessaire ainsi que les opérateurs de conjonction. Les chemins d'accès des requêtes contiennent également le nombre d'entités identifiées et la durée d'exécution de chaque critère de recherche. Query paths also contain the number of entities found and the time required to execute each search criterion. Généralement, la description du plan de requête et son chemin d'accès sont identiques mais ils peuvent différer car 4D peut intégrer des optimisations dynamiques lorsqu'une requête est exécutée, afin d'améliorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requête indexée en requête séquentielle s'il estime que ce processus est plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entités recherchées est faible.