---
id: openaiimageparameters
title: OpenAIImageParameters
---

# OpenAIImageParameters

The `OpenAIImageParameters` class is designed to configure and manage the parameters used for image generation through the OpenAI API.

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ名            | 型       | デフォルト値      | 説明                                                                                                                                      |
| ----------------- | ------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `model`           | Text    | "dall-e-2"  | Specifies the model to use for image generation.                                                                        |
| `n`               | Integer | 1           | The number of images to generate (must be between 1 and 10; only `n=1` is supported for `dall-e-3`). |
| `size`            | Text    | "1024x1024" | The size of the generated images. Must conform to model specifications.                                 |
| `style`           | Text    | ""          | The style of the generated images (must be either `vivid` or `natural`).                             |
| `response_format` | Text    | "url"       | The format for returned images, can be either `url` or `b64_json`.                                                      |

## 参照

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
