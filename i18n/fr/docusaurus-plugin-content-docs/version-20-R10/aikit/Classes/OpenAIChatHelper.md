---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

L'assistant de conversation permet de conserver une liste de messages en mémoire et d'effectuer des invites consécutives.

## Propriétés

| Nom de propriété   | Type                                                                  | Valeur par défaut                                      | Description                                                                                           |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `chat`             | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | L'instance de l'API de conversation utilisée pour la communication avec OpenAI.       |
| `systemPrompt`     | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | Le message d'invite du système qui guide les réponses de l'assistant de conversation. |
| `numberOfMessages` | Integer                                                               | 5                                                      | Le nombre maximum de messages à conserver dans l'historique des conversations.        |
| `paramètres`       | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | Les paramètres pour la requête OpenAI de génération de réponse conversationnelle.     |
| `messages`         | Collection de [OpenAIMessage](OpenAIMessage.md)                       | [] | La collection de messages échangés dans la session de conversation.                   |

## Fonctions

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Paramètres | Type                                                          | Description                                                                |
| ---------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| *prompt*   | Text                                                          | Texte d'invite à envoyer au modèle de conversation OpenAI. |
| Résultat   | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | La réponse conversationnelle générée.                      |

Envoie une invite utilisateur au modèle de conversation et retourne la réponse générée.

#### Exemple d'utilisation

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")

var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```