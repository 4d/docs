---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad     | Tipo                                       | Descripción                                                                                                                   |
| ------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `images`      | Colección de [OpenAIImage](OpenAIImage.md) | Devuelve una colección de objetos OpenAIImage.                                                                |
| `imagen`      | [OpenAIImage](OpenAIImage.md)              | Devuelve la primera OpenAIImage de la colección.                                                              |
| `utilización` | Object                                     | Devuelve información sobre el uso de tokens (heredado de [OpenAIResult](OpenAIResult.md)). |

### utilización

La propiedad `usage` devuelve un objeto que contiene información de uso de token para la generación de imágenes (cuando sea soportado por el proveedor).

| Campo                  | Tipo    | Descripción                                                                      |
| ---------------------- | ------- | -------------------------------------------------------------------------------- |
| `total_tokens`         | Integer | Total de tokens utilizados.                                      |
| `input_tokens`         | Integer | Número de tokens en la entrada (prompt).      |
| `output_tokens`        | Integer | Número de tokens para la salida (imagen).     |
| `input_tokens_details` | Object  | Desglose de los tokens de entrada (opcional). |

#### input_tokens_details

| Campo          | Tipo    | Descripción                                                                                            |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `text_tokens`  | Integer | Número de tokens de texto en el prompt.                                                |
| `image_tokens` | Integer | Número de tokens de imagen (para la edición/variación de imágenes). |

**Respuesta de ejemplo:**

```json
{
  "total_tokens": 100,
  "input_tokens": 50,
  "output_tokens": 50,
  "input_tokens_details": {
    "text_tokens": 10,
    "image_tokens": 40
  }
}
```

> **Nota:** el uso de la generación de imágenes puede no estar disponible en todos los proveedores. La estructura puede variar dependiendo del punto final específico de la API de imagen utilizada.

## Funciones

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Parámetros | Tipo                      | Descripción                                                                      |
| ---------- | ------------------------- | -------------------------------------------------------------------------------- |
| *folder*   | 4D.Folder | La carpeta donde se guardarán las imágenes.                      |
| *prefix*   | Text                      | El prefijo para los nombres de los archivos de imagen guardados. |
| Resultado  | Boolean                   | Devuelve `True` si las imágenes se han guardado correctamente.   |

Guarda las imágenes en la carpeta de disco especificada.

## Ver también

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
