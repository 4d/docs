---
id: openaimoderationsapi
title: OpenAIModerationsAPI
---

# OpenAIModerationsAPI

`OpenAIModerationsAPI` は、入力のテキストまたは画像が、潜在的に有害であるかどうかを判断するためのものです。

https://platform.openai.com/docs/api-reference/moderations

## 関数

### create()

**create**(*input* : Variant; *model* : Text; *parameters* : OpenAIParameters) : OpenAIModerationResult

| 引数           | 型                                                   | 説明                                            |
| ------------ | --------------------------------------------------- | --------------------------------------------- |
| *input*      | Variant                                             | 分類する入力。 単一のテキストまたはOpenAIMessage のコレクションを渡せます。 |
| *model*      | Text                                                | 使用したいコンテンツモデレーションモデル。                         |
| *parameters* | [OpenAIParameters](OpenAIParameters.md)             | リクエスト用の追加のパラメーター。                             |
| 戻り値          | [OpenAIModerationResult](OpenAIModerationResult.md) | 潜在的な危険性を表すモデレーションの結果。                         |

入力が潜在的に有害かどうかを判断します。

https://platform.openai.com/docs/api-reference/moderations/create

## 例題

### テキストのモデレート

```4d
var $result:=$client.moderation.create("Some text to classify"; "omni-moderation-latest"; $parameters)
```

### テキストと画像のモデレート

```4d
var $messages:=[{type: "text"; text: "...text to classify goes here..."}; \
                {type: "image_url"; image_url: {url: "https://example.com/image.png"}}]
var $result:=$client.moderation.create($messages; "omni-moderation-latest"; $parameters)
```