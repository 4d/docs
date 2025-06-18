---
id: openaivisionhelper
title: OpenAIVisionHelper
---

# OpenAIVisionHelper

## Fonctions

### prompt()

**prompt**(*prompt*: Test; *parameters* : OpenAIChatCompletionsParameters)

| Paramètres   | Type                                                                  | Description                                                                  |
| ------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| *prompt*     | Text                                                                  | Texte d'invite à envoyer au chat de l'OpenAI.                |
| *paramètres* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | Paramètres optionnels pour la requête de complétion du chat. |
| Résultat     | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)         | Le résultat de la vision.                                    |

Envoie une invite à l'API de chat OpenAI avec une URL d'image associée, et accepte éventuellement les paramètres pour la complétion du chat.

#### Exemple d'utilisation

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")

var $result:=$helper.prompt("Could you describe?")

$result:=$helper.prompt("Have any red element?"; {model: "gpt-4o-mini"; max_completion_tokens: 100 })
```