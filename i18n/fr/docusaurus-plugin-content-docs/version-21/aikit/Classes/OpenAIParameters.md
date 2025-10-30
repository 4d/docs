---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

La classe `OpenAIParameters` permet de gérer les paramètres d'exécution et de requête pour interagir avec l'API OpenAI.

## Propriétés

### Propriétés du callback asynchrone

Utilisez cette propriété de callback (*rappel*) pour recevoir le résultat, qu'il s'agisse d'un succès ou d'une erreur :

| Propriété                                          | Type                        | Description                                                                                                                                                   |
| -------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onTerminate`<br>(ou `formula`) | 4D.Function | Une fonction à appeler de manière asynchrone lorsqu'elle est terminée. Assurez-vous que le process courant ne se termine pas. |

Utilisez ces propriétés de callback pour un contrôle plus granulaire de la gestion des succès et des erreurs :

| Propriété    | Type                        | Description                                                                                                                                                                             |
| ------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onResponse` | 4D.Function | Une fonction à appeler de manière asynchrone lorsque la requête se termine **avec succès**. Assurez-vous que le process courant ne se termine pas.      |
| `onError`    | 4D.Function | Une fonction à appeler de manière asynchrone lorsque la requête se termine **avec des erreurs**. Assurez-vous que le process courant ne se termine pas. |

> La fonction de callback recevra le même type d'objet de résultat (l'une des classes enfant de [OpenAIResult](./OpenAIResult.md)) que celui qui serait renvoyé par la fonction dans un code synchrone.

Voir la [documentation sur le code asynchrone](../asynchronous-call.md) pour des exemples.

### Propriétés du réseau

| Propriété      | Type      | Description                                                                                                                                                                    |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeout`      | Real      | Remplace le délai d'attente par défaut défini au niveau du client pour la requête, en secondes. Par défaut, 0.                                 |
| `httpAgent`    | HTTPAgent | Remplace l'agent HTTP par défaut défini au niveau du client pour la requête.                                                                                   |
| `maxRetries`   | Integer   | Nombre maximal de tentatives pour la requêtes. (Seulement si le code n'est pas asynchrone, c'est-à-dire s'il n'y a pas de fonction fournie) |
| `extraHeaders` | Object    | En-têtes supplémentaires à envoyer avec la requête.                                                                                                            |

### Propriétés OpenAPI

| Propriété | Type | Description                                                                                                                     |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| `user`    | Text | Un identifiant unique représentant l'utilisateur final, ce qui aide OpenAI à surveiller et à détecter les abus. |

### Autres

| Propriété | Type    | Description                                                                                                                      |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `throw`   | Boolean | Si true, faire un throw en cas d'erreur. Uniquement si aucune formule de callback n'est définie. |

## Classes héritées

Plusieurs classes héritent de `OpenAIParameters` pour étendre ses fonctionnalités à des cas d'utilisation spécifiques. Voici quelques-unes des classes qui étendent `OpenAIParameters` :

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)
