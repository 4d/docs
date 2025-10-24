---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

La classe `OpenAIParameters` est conçue pour gérer les paramètres d'exécution et de requête pour interagir avec l'API OpenAI.

## Propriétés

### Propriétés de la programmation asynchrone

| Propriété                  | Type     | Description                                                                                                                                                                    |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `formula` or `onTerminate` | Function | Une fonction à appeler de manière asynchrone lorsqu'elle est terminée. Assurez-vous que le process courant ne se termine pas.                  |
| `onResponse`               | Function | Une fonction à appeler de manière asynchrone lorsque la requête se termine avec succès. Assurez-vous que le process courant ne se termine pas. |
| `onError`                  | Function | Une fonction à appeler de manière asynchrone lorsque la requête rencontre des erreurs. Assurez-vous que le process courant ne se termine pas.  |
| `throw`                    | Boolean  | Si true, faire un throw en cas d'erreur. Uniquement si aucune formule de callback n'est définie.                                               |

Voir [documentation sur le code asynchrone](../asynchronous-call.md)

### Propriétés du réseau

| Propriété      | Type      | Description                                                                                                                                                                    |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeout`      | Real      | Remplace le délai d'attente par défaut au niveau du client pour la requête, en secondes. Par défaut, 0.                                        |
| `httpAgent`    | HTTPAgent | Remplace l'agent HTTP par défaut au niveau du client pour la requête.                                                                                          |
| `maxRetries`   | Integer   | Nombre maximal de tentatives pour la requêtes. (Seulement si le code n'est pas asynchrone, c'est-à-dire s'il n'y a pas de fonction fournie) |
| `extraHeaders` | Object    | En-têtes supplémentaires à envoyer avec la requête.                                                                                                            |

### Propriétés OpenAPI

| Propriété | Type | Description                                                                                                                     |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| `user`    | Text | Un identifiant unique représentant l'utilisateur final, ce qui aide OpenAI à surveiller et à détecter les abus. |

## Classes héritées

Plusieurs classes héritent de `OpenAIParameters` pour étendre ses fonctionnalités à des cas d'utilisation spécifiques. Voici quelques-unes des classes qui étendent `OpenAIParameters` :

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)
