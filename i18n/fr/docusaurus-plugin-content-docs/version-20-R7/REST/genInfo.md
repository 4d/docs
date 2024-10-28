---
id: genInfo
title: Obtenir des informations du serveur
---

Vous pouvez obtenir plusieurs informations du serveur REST :

- les datastores exposées et leurs attributs
- le contenu du cache du serveur REST, y compris les sessions utilisateur.

## Catalogue

Use the [`$catalog`]($catalog.md), [`$catalog/\{dataClass\}`]($catalog.md#catalogdataclass), or [`$catalog/$all`]($catalog.md#catalogall) parameters to get the list of [exposed dataclasses and their attributes](configuration.md#exposing-tables-and-fields).

Pour obtenir la collection de toutes les dataclass exposées avec leurs attributs :

`GET /rest/$catalog/$all`

## Informations sur le cache

Use the [`$info`]($info.md) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions.

## queryPath et queryPlan

Les sélections d'entité générées par les requêtes peuvent avoir les deux propriétés suivantes : `queryPlan` et `queryPath`. To calculate and return these properties, you just need to add [`$queryPlan`]($queryplan.md) and/or [`$queryPath`]($querypath.md) in the REST request.

Par exemple :

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

Ces propriétés sont des objets contenant des informations sur la façon dont le serveur exécute les requêtes composites en interne via des dataclass et des relations :

- **queryPlan** : objet contenant la description détaillée de la requête juste avant son exécution (c'est-à-dire la requête planifiée).
- **queryPath** : objet contenant la description détaillée de la requête telle qu'elle a été réellement effectuée.

Les informations enregistrées incluent le type de requête (indexé et séquentiel) et chaque sous-requête nécessaire ainsi que les opérateurs de conjonction. Les query paths contiennent également le nombre d'entités trouvées et la durée d'exécution de chaque critère de recherche. Il peut être utile d'analyser ces informations lors du développement de votre application. Généralement, la description du plan de recherche (queryPlan) et son chemin réel (queryPath) sont identiques mais ils peuvent différer car 4D peut intégrer des optimisations dynamiques lorsqu'une requête est exécutée, afin d'améliorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requête indexée en requête séquentielle s'il estime qu'elle sera plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entités recherchées est faible.
