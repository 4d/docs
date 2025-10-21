---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

La classe `OpenAIParameters` est conçue pour gérer les paramètres d'exécution et de requête pour interagir avec l'API OpenAI.

## Propriétés

### Asynchronous Callback Properties

Use this callback property to receive the result regardless of success or error:

| Propriété                                          | Type                        | Description                                                                                                                                                   |
| -------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onTerminate`<br>(or `formula`) | 4D.Function | Une fonction à appeler de manière asynchrone lorsqu'elle est terminée. Assurez-vous que le process courant ne se termine pas. |

Use these callback properties for more granular control over success and error handling:

| Propriété    | Type                        | Description                                                                                                                                                               |
| ------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onResponse` | 4D.Function | A function to be called asynchronously when the request finishes **successfully**. Assurez-vous que le process courant ne se termine pas. |
| `onError`    | 4D.Function | A function to be called asynchronously when the request finishes **with errors**. Assurez-vous que le process courant ne se termine pas.  |

> The callback function will receive the same result object type (one of [OpenAIResult](./OpenAIResult.md) child classes) that would be returned by the function in synchronous code.

See [documentation about asynchronous code for examples](../asynchronous-call.md)

### Network Properties

| Propriété      | Type      | Description                                                                                                                                                                    |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `timeout`      | Real      | Remplace le délai d'attente par défaut au niveau du client pour la requête, en secondes. Par défaut, 0.                                        |
| `httpAgent`    | HTTPAgent | Remplace l'agent HTTP par défaut au niveau du client pour la requête.                                                                                          |
| `maxRetries`   | Integer   | Nombre maximal de tentatives pour la requêtes. (Seulement si le code n'est pas asynchrone, c'est-à-dire s'il n'y a pas de fonction fournie) |
| `extraHeaders` | Object    | En-têtes supplémentaires à envoyer avec la requête.                                                                                                            |

### OpenAPI Properties

| Propriété | Type | Description                                                                                                                     |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| `user`    | Text | Un identifiant unique représentant l'utilisateur final, ce qui aide OpenAI à surveiller et à détecter les abus. |

### Others

| Propriété | Type    | Description                                                                                                                      |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `throw`   | Boolean | Si true, faire un throw en cas d'erreur. Uniquement si aucune formule de callback n'est définie. |

## Classes héritées

Plusieurs classes héritent de `OpenAIParameters` pour étendre ses fonctionnalités à des cas d'utilisation spécifiques. Voici quelques-unes des classes qui étendent `OpenAIParameters` :

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)
