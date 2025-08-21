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

| Parámetros   | Tipo                                                | Descripción                                                                                                                                      |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| *entrada*    | Variant                                             | Entrada (o entradas) a clasificar. Puede ser un único texto o una colección de OpenAIMessage. |
| *model*      | Text                                                | El modelo de moderación de contenidos a utilizar.                                                                                |
| *parámetros* | [OpenAIParameters](OpenAIParameters.md)             | Parámetros adicionales para la petición.                                                                                         |
| Resultado    | [OpenAIModerationResult](OpenAIModerationResult.md) | El resultado de la moderación, que indica el daño potencial.                                                                     |

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