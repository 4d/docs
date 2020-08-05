---
id: REST_requests
title: A propos des requêtes REST
---


Les structures suivantes sont prises en charge par les requêtes REST :

| URI                              | Ressource                                                                   | {Subresource}                                                              | {Querystring}                                                   |
| -------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [{dataClass}](%7BdataClass%7D.html)/                                        | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ |                                                                 |
|                                  | [{dataClass}](%7BdataClass%7D.html)/                                        | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ | [{method}](%7BdataClass%7D.html#dataclassmethod)                |
|                                  |                                                                             |                                                                            | [$entityset/{entitySetID}](entityset.html#entitysetentitysetid) |
|                                  |                                                                             |                                                                            | [?$filter]($filter.md)                                          |
|                                  |                                                                             | [{attribute}](manData.html#selecting-attributes-to-get)/                   | [?$compute]($compute.md)                                        |
|                                  | [{dataClass}({key})](%7BdataClass%7D.html#dataclasskey)/                    | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ |                                                                 |
|                                  | [{dataClass}:{attribute}(value)](%7BdataClass%7D%7Battribute%7D_value.html) |                                                                            |                                                                 |
|                                  | [$catalog]($catalog.md)                                                     |                                                                            |                                                                 |
|                                  | [$directory]($directory.md)                                                 |                                                                            |                                                                 |
|                                  | [$info]($info.md)                                                           |                                                                            |                                                                 |


Si toutes les requêtes REST doivent contenir les paramètres URI et Resource, la sous-ressource (qui filtre les données retournées) est facultative.

Comme pour tous les URI, le premier paramètre est délimité par un «?» et tous les paramètres suivants par un «&». Par exemple:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`
> Vous pouvez placer toutes les valeurs entre guillemets en cas de doute. For example, in our above example, we could have put the value for the last name in single quotes: "lastName!='Jones'".

Les paramètres vous permettent de manipuler des données dans des dataclass de votre projet 4D. Outre la récupération de données à l'aide des méthodes HTTP `GET`, vous pouvez également ajouter, mettre à jour et supprimer des entités d'une classe de datastore à l'aide des méthodes HTTP `POST`.

Si vous souhaitez que les données soient retournées dans un tableau au lieu d'un JSON, utilisez le paramètre [`$asArray`]($asArray.md).


## Statut et réponse REST
À chaque requête REST, le serveur retourne l'état et une réponse (avec ou sans erreur).

### Statut de la requête
Avec chaque requête REST, vous obtenez le statut et la réponse. Voici quelques exemples de statuts :

| Statut                    | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| 0                         | Requête non traitée (le serveur n'est peut-être pas été lancé).                  |
| 200 OK                    | Requête traitée sans erreur.                                                     |
| 401 Unauthorized          | Erreur d'autorisation (vérifiez les autorisations de l'utilisateur).             |
| 402 No session            | Maximum number of sessions has been reached.                                     |
| 404 Not Found             | La data n'est pas accessible via REST ou bien l'ensemble d'entités n'existe pas. |
| 500 Internal Server Error | Erreur lors du traitement de la requête REST.                                    |

### Réponse

La réponse (au format JSON) varie en fonction de la requête.

Si une erreur survient, elle sera envoyée avec la réponse du serveur ou bien ce sera la réponse du serveur.

 

