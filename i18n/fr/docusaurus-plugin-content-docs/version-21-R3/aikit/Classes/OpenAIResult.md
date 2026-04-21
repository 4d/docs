---
id: openairesult
title: OpenAIResult
---

# OpenAIResult

La classe `OpenAIResult` permet de gérer la réponse des requêtes HTTP et fournit des fonctions pour évaluer le succès de la requête, récupérer le contenu du body et collecter toutes les erreurs qui ont pu se produire pendant le traitement.

## Propriétés

| Propriété | Type                                                                                 | Description     |
| --------- | ------------------------------------------------------------------------------------ | --------------- |
| `request` | [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass) | La requête HTTP |

## Propriétés calculées

| Propriété    | Type       | Description                                                                                                                          |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `success`    | Boolean    | Un booléen indiquant si la requête HTTP a réussi.                                                                    |
| `errors`     | Collection | Renvoie une collection d'erreurs. Il peut s'agir d'erreurs réseau ou d'erreurs renvoyées par OpenAI. |
| `terminated` | Boolean    | Un booléen indiquant si la requête HTTP a été close,                                                                                 |
| `headers`    | Object     | Renvoie les en-têtes de la réponse sous forme d'objet.                                                               |
| `rateLimit`  | Object     | Renvoie les informations relatives à la limite de débit contenues dans les en-têtes de la réponse.                   |
| `usage`      | Object     | Renvoie les informations d'utilisation depuis le body de la réponse, le cas échéant.                                 |

### rateLimit

La propriété `rateLimit` renvoie un objet contenant des informations sur la limite de débit à partir des en-têtes de réponse.
Ces informations comprennent les limites, les requêtes restantes et les délais de réinitialisation des requêtes et des tokens.

Pour plus de détails sur les limites de taux et les en-têtes spécifiques utilisés, se référer à [la documentation sur les limites de taux de l'OpenAI](https://platform.openai.com/docs/guides/rate-limits#rate-limits-in-headers).

La structure de l'objet `rateLimit` est la suivante :

| Champ               | Type    | Description                                                            |
| ------------------- | ------- | ---------------------------------------------------------------------- |
| `limit.request`     | Integer | Nombre de requêtes autorisées.                         |
| `limit.tokens`      | Integer | Nombre de tokens autorisés.                            |
| `remaining.request` | Integer | Nombre de requêtes restantes.                          |
| `remaining.tokens`  | Integer | Nombre de tokens restants.                             |
| `reset.request`     | String  | Délai avant réinitialisation de la limite de requêtes. |
| `reset.tokens`      | String  | Délai avant réinitialisation de la limite de tokens.   |

## Fonctions

### `throw()`

Génère la première erreur de la collection `errors`. Cette fonction est utile pour propager les erreurs vers le haut de la pile d'appels.

## Classes héritées

Plusieurs classes héritent de `OpenAIResult` pour étendre ses fonctionnalités à des cas d'utilisation spécifiques. Voici quelques-unes des classes qui étendent `OpenAIResult` :

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md)
- [OpenAIImagesResult](OpenAIImagesResult.md)
- [OpenAIModelResult](OpenAIModelResult.md)
- [OpenAIModelListResult](OpenAIModelListResult.md)
- [OpenAIModerationResult](OpenAIModerationResult.md)
- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)
