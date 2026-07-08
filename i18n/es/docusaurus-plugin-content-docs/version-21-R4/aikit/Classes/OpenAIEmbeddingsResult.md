---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad     | Tipo                                  | Descripción                                                                                                                   |
| ------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `model`       | Text                                  | Devuelve el modelo utilizado para calcular la integración                                                                     |
| `vector`      | `4D.Vector`                           | Devuelve el primer `4D.Vector` de la colección `vectors`.                                                     |
| `vectors`     | Collection                            | Devuelve una colección de `4D.Vector`.                                                                        |
| `embedding`   | [OpenAIEmbedding](OpenAIEmbedding.md) | Devuelve el primer [OpenAIEmbedding](OpenAIEmbedding.md) de la colección `embeddings`.                        |
| `embeddings`  | Collection                            | Devuelve una colección de [OpenAIEmbedding](OpenAIEmbedding.md).                                              |
| `utilización` | Object                                | Devuelve información sobre el uso de tokens (heredado de [OpenAIResult](OpenAIResult.md)). |

### utilización

La propiedad `usage` devuelve un objeto que contiene información sobre el uso de tokens para integraciones.

| Campo           | Tipo    | Descripción                                                                                                                      |
| --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `prompt_tokens` | Integer | Número de tokens en el(los) texto(s) de entrada.                           |
| `total_tokens`  | Integer | Total de tokens utilizados (igual que prompt_tokens para integraciones). |

**Respuesta de ejemplo:**

```json
{
  "prompt_tokens": 8,
  "total_tokens": 8
}
```

> **Nota:** las integraciones sólo consumen tokens de aviso (no hay finalización), por lo que `total_tokens` es igual a `prompt_tokens`.

## Ver también

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
