---
id: openaimoderationsapi
title: OpenAIModerationsAPI
---

# OpenAIModerationsAPI

The `OpenAIModerationsAPI` is responsible for classifying if text and/or image inputs are potentially harmful.
 
 https://platform.openai.com/docs/api-reference/moderations

## Functions

### create

https://platform.openai.com/docs/api-reference/moderations/create

Classifies whether the input is potentially harmful. 

#### Arguments

| Argument      | Type                     | Description                                                   |
|---------------|--------------------------|---------------------------------------------------------------|
| `$input`      | Variant                  | Input (or inputs) to classify. Can be a single text or a collection of [OpenAIMessage](OpenAIMessage). |
| `$model`      | Text                     | The content moderation model you would like to use.           |
| `$parameters` | [OpenAIParameters](OpenAIParameters.md)     | Additional parameters for the request.     |

#### Returns: [OpenAIModerationResult](OpenAIModerationResult.md)

## Examples of Usage

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