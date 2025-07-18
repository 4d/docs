---
id: openaiimageparameters
title: OpenAIImageParameters
---

# OpenAIImageParameters

The `OpenAIImageParameters` class is designed to configure and manage the parameters used for image generation through the OpenAI API.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo    | Valor por defecto | Descripción                                                                                                                             |
| ---------------------- | ------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                | Text    | "dall-e-2"        | Specifies the model to use for image generation.                                                                        |
| `n`                    | Integer | 1                 | The number of images to generate (must be between 1 and 10; only `n=1` is supported for `dall-e-3`). |
| `size`                 | Text    | "1024x1024"       | El tamaño de las imágenes generadas. Must conform to model specifications.                              |
| `style`                | Text    | ""                | The style of the generated images (must be either `vivid` or `natural`).                             |
| `response_format`      | Text    | "url"             | The format for returned images, can be either `url` or `b64_json`.                                                      |

## Ver también

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
