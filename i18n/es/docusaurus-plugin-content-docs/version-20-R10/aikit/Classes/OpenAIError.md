---
id: openaierror
title: OpenAIError Class
---

# OpenAIError Class

The `OpenAIError` class is designed to handle errors returned by the OpenAI API. It extracts relevant information from the error response and provides methods to access this information.

## Propiedades

### Error properties

| Propiedad | Tipo    | Descripción                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------ |
| `errCode` | Integer | The error code returned by the API or the HTTP status.         |
| `message` | Text    | The error message returned by the API or the HTTP status text. |

### Propiedades de respuesta HTTP

| Propiedad    | Tipo    | Descripción                                                     |
| ------------ | ------- | --------------------------------------------------------------- |
| `response`   | Object  | El objeto de respuesta completo.                |
| `status`     | Integer | The HTTP status code of the response.           |
| `statusText` | Text    | The status text of the HTTP response.           |
| `body`       | Object  | El cuerpo de la respuesta de error.             |
| `headers`    | Object  | Los encabezados de la respuesta de error.       |
| `requestID`  | Text    | The request ID from the error response headers. |

### OpenAI específico

| Propiedad | Tipo    | Descripción                                                         |
| --------- | ------- | ------------------------------------------------------------------- |
| `code`    | Variant | El código de error devuelto por la API.             |
| `tipo`    | Text    | El tipo de error devuelto por la API.               |
| `param`   | Text    | The parameter that caused the error, if applicable. |

### Información sobre el código de estado HTTP

| Propiedad                    | Tipo    | Descripción                                                                      |
| ---------------------------- | ------- | -------------------------------------------------------------------------------- |
| `isBadRequestError`          | Boolean | Indicates if the error is a 400 Bad Request error.               |
| `isAuthenticationError`      | Boolean | Indicates if the error is a 401 Authentication error.            |
| `isPermissionDeniedError`    | Boolean | Indicates ∏if the error is a 403 Permission Denied error.        |
| `isNotFoundError`            | Boolean | Indicates if the error is a 404 Not Found error.                 |
| `isUnprocessableEntityError` | Boolean | Indicates if the error is a 422 Unprocessable Entity error.      |
| `isRateLimitError`           | Boolean | Indica si el error es un error de límite de velocidad 429.       |
| `isInternalServerError`      | Boolean | Indicates if the error is a 500 or higher Internal Server error. |