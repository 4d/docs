---
id: openaichatcompletionsapi
title: OpenAIChatCompletionsAPI
---

# OpenAIChatCompletionsAPI

La classe `OpenAIChatCompletionsAPI` est conçue pour gérer les réponses conversationnelles (*chat completions*) avec l'API OpenAI. Elle fournit des méthodes pour créer, récupérer, mettre à jour, supprimer et lister les réponses conversationnelles.

https://platform.openai.com/docs/api-reference/chat

## Fonctions

### create()

**create**(*messages* : Collection of [OpenAIMessage](OpenAIMessage.md) ; *parameters* : [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)) : Object

| Paramètres   | Type                                                                  | Description                                                                                |
| ------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| *messages*   | Collection de [OpenAIMessage](OpenAIMessage.md)                       | Les messages de chat à inclure dans la requête.                            |
| *parameters* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | Les paramètres pour la requête de génération de réponse conversationnelle. |
| Résultat     | Object                                                                | Le résultat de la requête de génération de réponse conversationnelle.      |

Crée un modèle de réponse pour la conversation donnée.

https://platform.openai.com/docs/api-reference/chat/create

#### Exemple d'utilisation

Fournir la liste complète des messages

```4d
var $messages:=[]
$messages.push({role: "system"; content: "You are a helpful assistant."})
$messages.push({role: "user"; content: "Hello, how are you?"})
// ...

var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini" })
```

Obtenir la réponse sous forme de texte

```4d
var $text:=$result.choice.text
```

Ajouter la réponse de l'assistant pour la prochaine demande de génération de réponse conversationnelle :

```
$messages.push($result.choice.message) // {"role":"assistant"; "content": "xxx" }
```

### retrieve()

**retrieve**(*completionID* : Text; *parameters* : OpenAIParameters) : Object

| Paramètres     | Type                                    | Description                                                       |
| -------------- | --------------------------------------- | ----------------------------------------------------------------- |
| *completionID* | Text                                    | L'ID de la réponse conversationnelle à récupérer. |
| *parameters*   | [OpenAIParameters](OpenAIParameters.md) | Paramètres supplémentaires pour la requête.       |
| Résultat       | Object                                  | L'objet réponse conversationnelle obtenu.         |

Permet de récupérer une génération de réponse conversationnelle stockée.

https://platform.openai.com/docs/api-reference/chat/get

### update()

**update**(*completionID* : Text; *metadata* : Object; *parameters* : OpenAIParameters) : Object

| Paramètres     | Type                                    | Description                                                           |
| -------------- | --------------------------------------- | --------------------------------------------------------------------- |
| *completionID* | Text                                    | L'ID de la réponse conversationnelle à mettre à jour. |
| *metadata*     | Object                                  | Métadonnées à utiliser pour mettre à jour la réponse. |
| *parameters*   | [OpenAIParameters](OpenAIParameters.md) | Paramètres supplémentaires pour la requête.           |
| Résultat       | Object                                  | L'objet réponse conversationnelle mis à jour.         |

Permet de modifier une génération de réponse conversationnelle stockée.

https://platform.openai.com/docs/api-reference/chat/update

### delete()

**delete**(*completionID* : Text; *parameters* : OpenAIParameters) : Object

| Paramètres     | Type                                    | Description                                                            |
| -------------- | --------------------------------------- | ---------------------------------------------------------------------- |
| *completionID* | Text                                    | L'ID de la réponse conversationnelle à supprimer.      |
| *parameters*   | [OpenAIParameters](OpenAIParameters.md) | Paramètres supplémentaires pour la requête.            |
| Résultat       | Boolean                                 | Indique si la suppression a été effectuée avec succès. |

Permet de supprimer une génération de réponse conversationnelle stockée.

https://platform.openai.com/docs/api-reference/chat/delete

### list()

**list**(*parameters* : OpenAIChatCompletionsListParameters) : Collection

| Paramètres   | Type                                                                          | Description                                                             |
| ------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| *parameters* | [OpenAIChatCompletionsListParameters](OpenAIChatCompletionsListParameters.md) | Paramètres pour lister les réponses conversationnelles. |
| Résultat     | Collection                                                                    | Collection des réponses conversationnelle stockées.     |

Retourne la liste des réponses conversationnelles stockées.

https://platform.openai.com/docs/api-reference/chat/list
