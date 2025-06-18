---
id: openaierror
title: OpenAIError Class
---

# OpenAIError Class

La classe `OpenAIError` est conçue pour gérer les erreurs retournées par l'API OpenAI. Elle extrait les informations pertinentes de la réponse d'erreur et fournit des méthodes pour accéder à ces informations.

## Propriétés

### Propriétés d'erreurs

| Propriété | Type    | Description                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------ |
| `errCode` | Integer | The error code returned by the API or the HTTP status.         |
| `message` | Text    | The error message returned by the API or the HTTP status text. |

### Propriétés de réponse HTTP

| Propriété    | Type    | Description                                                     |
| ------------ | ------- | --------------------------------------------------------------- |
| `response`   | Object  | The full response object.                       |
| `status`     | Integer | The HTTP status code of the response.           |
| `statusText` | Text    | The status text of the HTTP response.           |
| `body`       | Object  | The body of the error response.                 |
| `headers`    | Object  | The headers of the error response.              |
| `requestID`  | Text    | The request ID from the error response headers. |

### Spécifique à OpenAI

| Propriété | Type    | Description                                                         |
| --------- | ------- | ------------------------------------------------------------------- |
| `code`    | Variant | The code of error returned by the API.              |
| `type`    | Text    | The type of error returned by the API.              |
| `param`   | Text    | The parameter that caused the error, if applicable. |

### Code d'état HTTP

| Propriété                    | Type    | Description                                                                      |
| ---------------------------- | ------- | -------------------------------------------------------------------------------- |
| `isBadRequestError`          | Boolean | Indicates if the error is a 400 Bad Request error.               |
| `isAuthenticationError`      | Boolean | Indicates if the error is a 401 Authentication error.            |
| `isPermissionDeniedError`    | Boolean | Indicates ∏if the error is a 403 Permission Denied error.        |
| `isNotFoundError`            | Boolean | Indicates if the error is a 404 Not Found error.                 |
| `isUnprocessableEntityError` | Boolean | Indicates if the error is a 422 Unprocessable Entity error.      |
| `isRateLimitError`           | Boolean | Indicates if the error is a 429 Rate Limit error.                |
| `isInternalServerError`      | Boolean | Indicates if the error is a 500 or higher Internal Server error. |