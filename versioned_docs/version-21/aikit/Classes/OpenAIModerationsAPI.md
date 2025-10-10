---
id: openaimoderationsapi
title: OpenAIModerationsAPI
---

# OpenAIModerationsAPI

The `OpenAIModerationsAPI` is responsible for classifying if text and/or image inputs are potentially harmful.

https://platform.openai.com/docs/api-reference/moderations

## Functions

### create()

**create**(*input* : Variant; *model* : Text; *parameters* : OpenAIParameters) : OpenAIModerationResult

| Parameter        | Type                     | Description                                                   |
|------------------|--------------------------|---------------------------------------------------------------|
| *input*          | Variant                | Input (or inputs) to classify. Can be a single text or a collection of OpenAIMessage. |
| *model*          | Text                   | The content moderation model you would like to use.           |
| *parameters*     | [OpenAIParameters](OpenAIParameters.md)       | Additional parameters for the request.                        |
| Function result | [OpenAIModerationResult](OpenAIModerationResult.md) | The result of the moderation, indicating potential harm.       |

Classifies whether the input is potentially harmful.

https://platform.openai.com/docs/api-reference/moderations/create

## Examples

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