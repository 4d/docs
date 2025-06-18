---
id: openaimoderationsapi
title: OpenAIModerationsAPI
---

# OpenAIModerationsAPI

The `OpenAIModerationsAPI` is responsible for classifying if text and/or image inputs are potentially harmful.

https://platform.openai.com/docs/api-reference/moderations

## Funciones

### create()

**create**(*input* : Variant; *model* : Text; *parameters* : OpenAIParameters) : OpenAIModerationResult

| Parámetros   | Tipo                                                | Descripción                                                                                                                                  |
| ------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| *entrada*    | Variant                                             | Entrada (o entradas) a clasificar. Can be a single text or a collection of OpenAIMessage. |
| *model*      | Text                                                | El modelo de moderación de contenidos a utilizar.                                                                            |
| *parámetros* | [OpenAIParameters](OpenAIParameters.md)             | Additional parameters for the request.                                                                                       |
| Resultado    | [OpenAIModerationResult](OpenAIModerationResult.md) | The result of the moderation, indicating potential harm.                                                                     |

Classifies whether the input is potentially harmful.

https://platform.openai.com/docs/api-reference/moderations/create

## Ejemplos

### Moderar un texto

```4d
var $result:=$client.moderation.create("Some text to classify"; "omni-moderation-latest"; $parameters)
```

### Moderar un texto y una imagen

```4d
var $messages:=[{type: "text"; text: "...text to classify goes here..."}; \
                {type: "image_url"; image_url: {url: "https://example.com/image.png"}}]
var $result:=$client.moderation.create($messages; "omni-moderation-latest"; $parameters)
```