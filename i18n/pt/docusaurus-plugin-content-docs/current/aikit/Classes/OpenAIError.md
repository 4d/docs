---
id: openaierror
title: OpenAIError Class
---

# OpenAIError Class

The `OpenAIError` class is designed to handle errors returned by the OpenAI API. It extracts relevant information from the error response and provides methods to access this information.

## Propriedades

### Error properties

| Propriedade | Tipo    | Descrição                                                                      |
| ----------- | ------- | ------------------------------------------------------------------------------ |
| `errCode`   | Integer | The error code returned by the API or the HTTP status.         |
| `message`   | Text    | The error message returned by the API or the HTTP status text. |

### HTTP reponse properties

| Propriedade  | Tipo    | Descrição                                                       |
| ------------ | ------- | --------------------------------------------------------------- |
| `response`   | Object  | The full response object.                       |
| `status`     | Integer | The HTTP status code of the response.           |
| `statusText` | Text    | The status text of the HTTP response.           |
| `body`       | Object  | The body of the error response.                 |
| `headers`    | Object  | The headers of the error response.              |
| `requestID`  | Text    | The request ID from the error response headers. |

### OpenAI specific

| Propriedade | Tipo         | Descrição                                                           |
| ----------- | ------------ | ------------------------------------------------------------------- |
| `código`    | Diferente de | The code of error returned by the API.              |
| `tipo`      | Text         | The type of error returned by the API.              |
| `param`     | Text         | The parameter that caused the error, if applicable. |

### HTTP status code info

| Propriedade                  | Tipo       | Descrição                                                                        |
| ---------------------------- | ---------- | -------------------------------------------------------------------------------- |
| `isBadRequestError`          | Parâmetros | Indicates if the error is a 400 Bad Request error.               |
| `isAuthenticationError`      | Parâmetros | Indicates if the error is a 401 Authentication error.            |
| `isPermissionDeniedError`    | Parâmetros | Indicates ∏if the error is a 403 Permission Denied error.        |
| `isNotFoundError`            | Parâmetros | Indicates if the error is a 404 Not Found error.                 |
| `isUnprocessableEntityError` | Parâmetros | Indicates if the error is a 422 Unprocessable Entity error.      |
| `isRateLimitError`           | Parâmetros | Indicates if the error is a 429 Rate Limit error.                |
| `isInternalServerError`      | Parâmetros | Indicates if the error is a 500 or higher Internal Server error. |