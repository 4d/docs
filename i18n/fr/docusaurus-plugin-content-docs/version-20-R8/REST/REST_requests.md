---
id: REST_requests
title: A propos des requêtes REST
---

Les structures suivantes sont prises en charge par les requêtes REST :

| URI                                                              | Resource (Input)                                                                               | /? or &\{filter\} (Output)                                                                                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [\{dataClass\}](dataClass.md)                                                                                   | [$filter]($filter.md), [$attributes]($attributes.md), [$skip]($skip.md), [$method=...]($method.md)... |
|                                                                  | [\{dataClass\}](dataClass.md)/[$entityset/\{entitySetID\}]($entityset.md#entitysetentitysetid)                | [$method=...]($method.md)                                                                                                                             |
|                                                                  | [\{dataClass\}({key})](dataClass.md#dataclasskey)                                            | [$attributes]($attributes.md)                                                                                                                                                                         |
|                                                                  | [\{dataClass\}:\{attribute\}(value)](dataClass.md#dataclassattributevalue) |                                                                                                                                                                                                       |

Alors que toutes les requêtes REST doivent contenir les paramètres URI et Resource, les filtres d'Output (qui filtrent les données retournées) sont facultatifs.

Comme pour tous les URI, le premier paramètre est délimité par un «?» et tous les paramètres suivants par un «&». Par exemple :

`GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

> Vous pouvez placer toutes les valeurs entre guillemets en cas de doute. Par exemple, dans notre exemple ci-dessus, nous aurions pu saisir la valeur du nom de famille entre guillemets simples "lastName!='Jones'".

Les paramètres vous permettent de manipuler des données dans des dataclass de votre projet 4D. Outre la récupération de données à l'aide des méthodes HTTP `GET`, vous pouvez également ajouter, mettre à jour et supprimer des entités d'une dataclass à l'aide des méthodes HTTP `POST`.

If you want the data to be returned in an array instead of JSON, use the [`$asArray`]($asArray.md) parameter.

## Statut et réponse REST

À chaque requête REST, le serveur retourne l'état et une réponse (avec ou sans erreur).

### Statut de la requête

Avec chaque requête REST, vous obtenez le statut et la réponse. Voici quelques exemples de statuts :

| Statut                    | Description                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| 0                         | Requête non traitée (le serveur n'est peut-être pas été lancé).      |
| 200 OK                    | Requête traitée sans erreur.                                                            |
| 401 Unauthorized          | Erreur d'autorisation (vérifiez les autorisations de l'utilisateur). |
| 402 No session            | Nombre maximal de sessions ayant été atteint.                                           |
| 404 Not Found             | La data n'est pas accessible via REST ou bien l'ensemble d'entités n'existe pas.        |
| 500 Internal Server Error | Erreur lors du traitement de la requête REST.                                           |

### Réponse

La réponse (au format JSON) varie en fonction de la requête.

Si une erreur survient, elle sera envoyée avec la réponse du serveur ou bien ce sera la réponse du serveur.
