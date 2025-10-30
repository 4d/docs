---
id: openaimoderationsapi
title: OpenAIModerationsAPI
---

# OpenAIModerationsAPI

L'interface `OpenAIModerationsAPI` est chargée de déterminer si les textes et/ou les images introduits sont potentiellement dangereux.

https://platform.openai.com/docs/api-reference/moderations

## Fonctions

### create()

**create**(*input* : Variant; *model* : Text; *parameters* : OpenAIParameters) : OpenAIModerationResult

| Paramètres   | Type                                                | Description                                                                                                                                                        |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| *input*      | Variant                                             | Entrée (ou entrées) à évaluer et classer. Il peut s'agir d'un texte unique ou d'une collection d'OpenAIMessage. |
| *model*      | Text                                                | Le modèle de modération de contenu que vous souhaitez utiliser.                                                                                    |
| *parameters* | [OpenAIParameters](OpenAIParameters.md)             | Paramètres supplémentaires pour la requête.                                                                                                        |
| Résultat     | [OpenAIModerationResult](OpenAIModerationResult.md) | Le résultat de la modération, indiquant un danger potentiel.                                                                                       |

Détermine si l'entrée est potentiellement dangereuse.

https://platform.openai.com/docs/api-reference/moderations/create

## Exemples

### Modérer un texte

```4d
var $result:=$client.moderation.create("Some text to classify"; "omni-moderation-latest"; $parameters)
```

### Modérer un texte et une image

```4d
var $messages:=[{type: "text"; text: "...text to classify goes here..."}; \
                {type: "image_url"; image_url: {url: "https://example.com/image.png"}}]
var $result:=$client.moderation.create($messages; "omni-moderation-latest"; $parameters)
```