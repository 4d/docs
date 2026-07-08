---
id: openaichatcompletionsresult
title: OpenAIChatCompletionsResult
---

# OpenAIChatCompletionsResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad     | Tipo         | Descripción                                                                                                                   |
| ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `choices`     | Collection   | Devuelve una colección de [OpenAIChoice](OpenAIChoice.md) de la respuesta OpenAI.                             |
| `choice`      | OpenAIChoice | Devuelve la primera [OpenAIChoice](OpenAIChoice.md) de la colección de opciones.                              |
| `utilización` | Object       | Devuelve información sobre el uso de tokens (heredado de [OpenAIResult](OpenAIResult.md)). |

### utilización

La propiedad `usage` devuelve un objeto que contiene información sobre el uso de tokens para completar chats.

| Campo                       | Tipo    | Descripción                                                                          |
| --------------------------- | ------- | ------------------------------------------------------------------------------------ |
| `prompt_tokens`             | Integer | Número de tokens en la petición.                                     |
| `completion_tokens`         | Integer | Número de tokens en la finalización.                                 |
| `total_tokens`              | Integer | Total de tokens usados (preguntar + completar).   |
| `prompt_tokens_details`     | Object  | Desglose de los tokens de aviso (opcional).       |
| `completion_tokens_details` | Object  | Desglose de los tokens de terminación (opcional). |

#### prompt_tokens_details

| Campo           | Tipo    | Descripción                                                               |
| --------------- | ------- | ------------------------------------------------------------------------- |
| `cached_tokens` | Integer | Número de tokens servidos de la caché.                    |
| `audio_tokens`  | Integer | Número de tokens de audio (si aplica). |

#### completion_tokens_details

| Campo                        | Tipo    | Descripción                                                                                      |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `reasoning_tokens`           | Integer | Tokens usados para el razonamiento (por ejemplo, modelos o1). |
| `audio_tokens`               | Integer | Número de tokens de audio (si aplica).                        |
| `accepted_prediction_tokens` | Integer | Tokens de predicciones aceptadas.                                                |
| `rejected_prediction_tokens` | Integer | Tokens de predicciones rechazadas.                                               |

**Respuesta de ejemplo:**

```json
{
  "prompt_tokens": 19,
  "completion_tokens": 10,
  "total_tokens": 29,
  "prompt_tokens_details": {
    "cached_tokens": 0,
    "audio_tokens": 0
  },
  "completion_tokens_details": {
    "reasoning_tokens": 0,
    "audio_tokens": 0,
    "accepted_prediction_tokens": 0,
    "rejected_prediction_tokens": 0
  }
}
```

> **Nota:** los objetos `*_tokens_details` pueden no estar presentes en todas las respuestas o de todos los proveedores.

## Ver también

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
