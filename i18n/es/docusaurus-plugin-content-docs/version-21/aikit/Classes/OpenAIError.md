---
id: openaierror
title: OpenAIError Class
---

# OpenAIError Class

La clase `OpenAIError` está diseñada para manejar errores devueltos por la API OpenAI. It extracts relevant information from the error response and provides methods to access this information.

## Propiedades

### Propiedades de error

| Propiedad | Tipo    | Descripción                                                                        |
| --------- | ------- | ---------------------------------------------------------------------------------- |
| `errCode` | Integer | El código de error devuelto por la API o el estado HTTP.           |
| `message` | Text    | El mensaje de error devuelto por la API o el texto de estado HTTP. |

### Propiedades de respuesta HTTP

| Propiedad    | Tipo    | Descripción                                                                 |
| ------------ | ------- | --------------------------------------------------------------------------- |
| `response`   | Object  | El objeto de respuesta completo.                            |
| `status`     | Integer | El código de estado HTTP de la respuesta.                   |
| `statusText` | Text    | El texto de estado de la respuesta HTTP.                    |
| `body`       | Object  | El cuerpo de la respuesta de error.                         |
| `headers`    | Object  | Los encabezados de la respuesta de error.                   |
| `requestID`  | Text    | El ID de petición de los encabezados de respuesta de error. |

### OpenAI específico

| Propiedad | Tipo    | Descripción                                                       |
| --------- | ------- | ----------------------------------------------------------------- |
| `code`    | Variant | El código de error devuelto por la API.           |
| `tipo`    | Text    | El tipo de error devuelto por la API.             |
| `param`   | Text    | El parámetro que causó el error, si es aplicable. |

### Información sobre el código de estado HTTP

| Propiedad                    | Tipo    | Descripción                                                                                       |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `isBadRequestError`          | Boolean | Indica si se trata de un error 400 Bad Request.                                   |
| `isAuthenticationError`      | Boolean | Indica si se trata de un error de autenticación 401.                              |
| `isPermissionDeniedError`    | Boolean | Indica si el error es un error 403 Permiso denegado.                              |
| `isNotFoundError`            | Boolean | Indica si el error es un error 404 Not Found.                                     |
| `isUnprocessableEntityError` | Boolean | Indica si el error es un error de entidad no procesable (422). |
| `isRateLimitError`           | Boolean | Indica si el error es un error de límite de velocidad 429.                        |
| `isInternalServerError`      | Boolean | Indicates if the error is a 500 or higher Internal Server error.                  |