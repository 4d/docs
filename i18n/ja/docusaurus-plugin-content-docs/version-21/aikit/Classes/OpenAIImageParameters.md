---
id: openaiimageparameters
title: OpenAIImageParameters
---

# OpenAIImageParameters

`OpenAIImageParameters` クラスはOpen API での画像生成に使用されるパラメーターを設定・管理するために設計されています。

## 継承元

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ名            | 型       | デフォルト値      | 説明                                                                                 |
| ----------------- | ------- | ----------- | ---------------------------------------------------------------------------------- |
| `model`           | Text    | "dall-e-2"  | 画像生成に使用するモデルを指定します。                                                                |
| `n`               | Integer | 1           | 生成する画像の数(1から10の間でなければなりません、また `dall-e-3` では `n=1` のみがサポートされます)。 |
| `size`            | Text    | "1024x1024" | 生成される画像のサイズ。 モデルの仕様に準拠している必要があります。                                                 |
| `style`           | Text    | ""          | 生成される画像のスタイル(`vivid` または `natural`のどちらかでなければなりません)。             |
| `response_format` | Text    | "url"       | 返される画像のフォーマット。`url` または `b64_json` のいずれかです。                                        |

## 参照

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
