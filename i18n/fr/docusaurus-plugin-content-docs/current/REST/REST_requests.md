---
id: REST_requests
title: A propos des requêtes REST
---


Les structures suivantes sont prises en charge par les requêtes REST :

| URI                              | Resource (Input)                                                                                    | /? ou &{filter} (Output)                                                                              |
| -------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [{dataClass}](%7BdataClass%7D.html)                                                                 | [$filter]($filter.md), [$attributes]($attributes.md), [$skip]($skip.md), [$method=...]($method.md)... |
|                                  | [{dataClass}](%7BdataClass%7D.html)/[$entityset/{entitySetID}](entityset.html#entitysetentitysetid) | [$method=...]($method.md)                                                                             |
|                                  | [{dataClass}({clé})](%7BdataClass%7D.html#dataclasskey)                                             | [$attributes]($attributes.md)                                                                         |
|                                  | [{dataClass}:{attribut}(valeur)](%7BdataClass%7D.html#dataclassattributevalue)                      |                                                                                                       |

Si toutes les requêtes REST doivent contenir les paramètres URI et Resource, les filtres d'Output (qui filtrent les données retournées) sont facultatifs.

Comme pour tous les URI, le premier paramètre est délimité par un «?» et tous les paramètres suivants par un «&».

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`
> Vous pouvez placer toutes les valeurs entre guillemets en cas de doute. Par exemple, dans notre exemple ci-dessus, nous aurions pu saisir la valeur du nom de famille entre guillemets simples "lastName!='Jones'".

Les paramètres vous permettent de manipuler des données dans des dataclass de votre projet 4D. Outre la récupération de données à l'aide des méthodes HTTP `GET`, vous pouvez également ajouter, mettre à jour et supprimer des entités d'une dataclass à l'aide des méthodes HTTP `POST`.

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
| 402 No session            | Nombre maximal de sessions ayant été atteint.                                    |
| 404 Not Found             | La data n'est pas accessible via REST ou bien l'ensemble d'entités n'existe pas. |
| 500 Internal Server Error | Erreur lors du traitement de la requête REST.                                    |

### Réponse

La réponse (au format JSON) varie en fonction de la requête.

Si une erreur survient, elle sera envoyée avec la réponse du serveur ou bien ce sera la réponse du serveur.

 

