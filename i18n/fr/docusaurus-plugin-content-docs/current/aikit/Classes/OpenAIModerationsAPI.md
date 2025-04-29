---
id: openaimoderationsapi
title: OpenAIModerationsAPI
---

# OpenAIModerationsAPI

The `OpenAIModerationsAPI` is responsible for classifying if text and/or image inputs are potentially harmful.

https://platform.openai.com/docs/api-reference/moderations

## Fonctions

### create()

**create**(*input* : Variant; *model* : Text; *parameters* : OpenAIParameters) : OpenAIModerationResult

| Paramètres       | Type                                                | Description                                                                                                                              |
| ---------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| *zone de saisie* | Variant                                             | Input (or inputs) to classify. Can be a single text or a collection of OpenAIMessage. |
| *model*          | Text                                                | The content moderation model you would like to use.                                                                      |
| *paramètres*     | [OpenAIParameters](OpenAIParameters.md)             | Additional parameters for the request.                                                                                   |
| Résultat         | [OpenAIModerationResult](OpenAIModerationResult.md) | The result of the moderation, indicating potential harm.                                                                 |

Classifies whether the input is potentially harmful.

https://platform.openai.com/docs/api-reference/moderations/create

## Exemples

### Moderate a text

```4d
var $result:=$client.moderation.create("Some text to classify"; "omni-moderation-latest"; $parameters)
```

### Moderate a text and an image

```4d
var $messages:=[{type: "text"; text: "...text to classify goes here..."}; \
                {type: "image_url"; image_url: {url: "https://example.com/image.png"}}]
var $result:=$client.moderation.create($messages; "omni-moderation-latest"; $parameters)
```