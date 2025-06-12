---
id: openaiimageparameters
title: OpenAIImageParameters
---

# OpenAIImageParameters

The `OpenAIImageParameters` class is designed to configure and manage the parameters used for image generation through the OpenAI API.

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Propriedades

| Nome da propriedade | Tipo    | Valor padrão | Descrição                                                                                                                               |
| ------------------- | ------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `model`             | Text    | "dall-e-2"   | Specifies the model to use for image generation.                                                                        |
| `n`                 | Integer | 1            | The number of images to generate (must be between 1 and 10; only `n=1` is supported for `dall-e-3`). |
| `size`              | Text    | "1024x1024"  | The size of the generated images. Must conform to model specifications.                                 |
| `style`             | Text    | ""           | O estilo das imagens geradas (deve ser `vivid` ou `natural`).                                        |
| `response_format`   | Text    | "url"        | O formato para imagens retornadas, pode ser `url` ou `b64_json`.                                                        |

## Veja também

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
