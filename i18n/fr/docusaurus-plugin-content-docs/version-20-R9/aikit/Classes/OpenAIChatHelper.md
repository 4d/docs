---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

L'assistant de chat permet de conserver une liste de messages en mémoire et d'effectuer des invites consécutives.

## Propriétés

| Nom de propriété   | Type                                                                  | Valeur par défaut                                      | Description                                                                                           |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `chat`             | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | L'instance API de chat utilisée pour la communication avec OpenAI.                    |
| `systemPrompt`     | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | Le message d'invite du système qui guide les réponses de l'assistant de conversation. |
| `numberOfMessages` | Integer                                                               | 5                                                      | Le nombre maximum de messages à conserver dans l'historique des chats.                |
| `paramètres`       | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | Les paramètres pour la requête de complétion du chat OpenAI.                          |
| `messages`         | Collection of [OpenAIMessage](OpenAIMessage.md)                       | [] | La collection de messages échangés dans la session de chat.                           |

## Fonctions

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Paramètres | Type                                                          | Description                                                        |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| *prompt*   | Text                                                          | Texte d'invite à envoyer au chat de l'OpenAI.      |
| Résultat   | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | Le résultat de la complétion retourné par le chat. |

Envoie une invite utilisateur à la discussion et retourne le résultat de complétion correspondant.

#### Exemple d'utilisation

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")

var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```