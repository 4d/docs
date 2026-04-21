---
id: openaierror
title: OpenAIError Class
---

# OpenAIError Class

La classe `OpenAIError` permet de gérer les erreurs retournées par l'API OpenAI. Elle extrait les informations pertinentes de la réponse d'erreur et fournit des méthodes pour accéder à ces informations.

## Propriétés

### Propriétés d'erreurs

| Propriété | Type    | Description                                                                        |
| --------- | ------- | ---------------------------------------------------------------------------------- |
| `errCode` | Integer | Le code d'erreur renvoyé par l'API ou le statut HTTP.              |
| `message` | Text    | Le message d'erreur retourné par l'API ou le texte du statut HTTP. |

### Propriétés de réponse HTTP

| Propriété    | Type    | Description                                                                   |
| ------------ | ------- | ----------------------------------------------------------------------------- |
| `response`   | Object  | L'objet complet de la réponse.                                |
| `status`     | Integer | Le code de statut HTTP de la réponse.                         |
| `statusText` | Text    | Le texte du statut HTTP de la réponse.                        |
| `body`       | Object  | Le body de la réponse d'erreur.                               |
| `headers`    | Object  | Les en-têtes de la réponse d'erreur.                          |
| `requestID`  | Text    | L'ID de la requête à partir des en-têtes de réponse d'erreur. |

### Spécifique à OpenAI

| Propriété | Type    | Description                                                           |
| --------- | ------- | --------------------------------------------------------------------- |
| `code`    | Variant | Code d'erreur renvoyé par l'API.                      |
| `type`    | Text    | Type d'erreur renvoyée par l'API.                     |
| `param`   | Text    | Le paramètre à l'origine de l'erreur, le cas échéant. |

### Code d'état HTTP

| Propriété                    | Type    | Description                                                                                         |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `isBadRequestError`          | Boolean | Indique s'il s'agit d'une erreur de type 400 Bad Request.                           |
| `isAuthenticationError`      | Boolean | Indique si l'erreur est une erreur d'authentification 401.                          |
| `isPermissionDeniedError`    | Boolean | Indique si l'erreur est une erreur 403 Permission Denied.                           |
| `isNotFoundError`            | Boolean | Indique s'il s'agit d'une erreur 404 Not Found.                                     |
| `isUnprocessableEntityError` | Boolean | Indique si l'erreur est une erreur d'entité non traitable (422). |
| `isRateLimitError`           | Boolean | Indique si l'erreur est une erreur de limite de débit 429.                          |
| `isInternalServerError`      | Boolean | Indique s'il s'agit d'une erreur de serveur interne de type 500 ou supérieur.       |