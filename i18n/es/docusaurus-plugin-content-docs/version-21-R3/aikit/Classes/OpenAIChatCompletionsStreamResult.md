---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades

| Propiedad | Tipo   | Descripción                                                           |
| --------- | ------ | --------------------------------------------------------------------- |
| `data`    | Object | Contiene los datos de flujo enviados por el servidor. |

## Propiedades calculadas

| Propiedad | Tipo                            | Descripción                                                                                           |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | Devuelve un dato de elección, con un mensaje `delta`.                                 |
| `choices` | Collection                      | Devuelve una colección de datos [OpenAIChoice](OpenAIChoice.md) con mensajes `delta`. |

### Propiedades sobreescritas

| Propiedad     | Tipo    | Descripción                                                                                                                                                                                            |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `success`     | Boolean | Devuelve `True` si los datos de streaming fueron decodificados como un objeto con éxito.                                                                                               |
| `terminated`  | Boolean | Un booleano que indica si la petición HTTP fue terminada. es decir, `onTerminate` ha sido llamado.                                                                     |
| `utilización` | Object  | Devuelve información de uso de token de los datos del stream (sólo disponible en el fragmento final cuando `stream_options.include_usage` está definido en `True`). |

### utilización

La propiedad `usage` devuelve un objeto que contiene información sobre el uso de tokens, disponible sólo en el fragmento final de streaming cuando se activa mediante `stream_options.include_usage: True` en los parámetros de la petición.

La estructura es la misma que [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage):

| Campo                       | Tipo    | Descripción                                                                          |
| --------------------------- | ------- | ------------------------------------------------------------------------------------ |
| `prompt_tokens`             | Integer | Número de tokens en la petición.                                     |
| `completion_tokens`         | Integer | Número de tokens en la finalización.                                 |
| `total_tokens`              | Integer | Total de tokens usados (preguntar + completar).   |
| `prompt_tokens_details`     | Object  | Desglose de los tokens de aviso (opcional).       |
| `completion_tokens_details` | Object  | Desglose de los tokens de terminación (opcional). |

> **Nota:** para recibir información de uso en las respuestas de streaming, debe definir `stream_options: {include_usage: True}` en los parámetros de la petición. Ver [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) para más detalles.
