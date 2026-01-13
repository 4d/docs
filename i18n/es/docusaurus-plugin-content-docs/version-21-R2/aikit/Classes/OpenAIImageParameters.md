---
id: openaiimageparameters
title: OpenAIImageParameters
---

# OpenAIImageParameters

The `OpenAIImageParameters` class is designed to configure and manage the parameters used for image generation through the OpenAI API.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo    | Valor por defecto | Descripción                                                                                                                            |
| ---------------------- | ------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                | Text    | "dall-e-2"        | Especifica el modelo a utilizar para la generación de imágenes.                                                        |
| `n`                    | Integer | 1                 | El número de imágenes a generar (debe estar entre 1 y 10; sólo `n=1` es soportado para `dall-e-3`). |
| `size`                 | Text    | "1024x1024"       | El tamaño de las imágenes generadas. Debe ajustarse a las especificaciones del modelo.                 |
| `style`                | Text    | ""                | El estilo de las imágenes generadas (debe ser `vivid` o `natural`).                                 |
| `response_format`      | Text    | "url"             | El formato de las imágenes devueltas puede ser `url` o `b64_json`.                                                     |

## Ver también

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
