---
id: genInfo
title: Obtenir des informations du serveur
---

Vous pouvez obtenir plusieurs informations du serveur REST :

- les datastores exposées et leurs attributs
- le contenu du cache du serveur REST, y compris les sessions utilisateur.

## Catalogue

Utilisez les paramètres [`$catalog`]($catalog.md), [`$catalog/\{dataClass\}`]($catalog.md#catalogdataclass)ou [`$catalog/$all`]($catalog.md#catalogall) pour obtenir la liste des [dataclass exposées et de leurs attributs](configuration.md#exposing-tables-and-fields).

Pour obtenir la collection de toutes les dataclass exposées avec leurs attributs :

`GET /rest/$catalog/$all`


## Informations sur le cache

Utilisez le paramètre [`$info`]($info.md) pour obtenir des informations sur les entity selections stockées dans le cache du 4D Server et sur l'exécution des sessions utilisateur.

## queryPath et queryPlan

Les entity selections générées par via des requêtes peuvent avoir les deux propriétés suivantes : `queryPlan` et `queryPath`. Pour calculer et retourner ces propriétés, il vous suffit d'ajouter [`$queryPlan`]($queryplan.md) et/ou [`$queryPath`]($querypath.md) dans la requête REST.

Par exemple :

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

Ces propriétés sont des objets contenant des informations sur la façon dont le serveur exécute les requêtes composites en interne via des dataclass et des relations :
- **queryPlan** : objet contenant la description détaillée de la requête juste avant son exécution (c'est-à-dire la requête planifiée).
- **queryPath** : objet contenant la description détaillée de la requête telle qu'elle a été réellement effectuée.

Les informations enregistrées incluent le type de requête (indexé et séquentiel) et chaque sous-requête nécessaire ainsi que les opérateurs de conjonction. Les query paths contiennent également le nombre d'entités trouvées et la durée d'exécution de chaque critère de recherche. Il peut être utile d'analyser ces informations lors du développement de votre application. Généralement, la description du plan de recherche (queryPlan) et son chemin réel (queryPath) sont identiques mais ils peuvent différer car 4D peut intégrer des optimisations dynamiques lorsqu'une requête est exécutée, afin d'améliorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requête indexée en requête séquentielle s'il estime qu'elle sera plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entités recherchées est faible.