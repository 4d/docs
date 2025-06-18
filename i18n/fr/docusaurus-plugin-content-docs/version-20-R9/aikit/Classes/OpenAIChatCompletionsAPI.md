---
id: openaichatcompletionsapi
title: OpenAIChatCompletionsAPI
---

# OpenAIChatCompletionsAPI

La classe `OpenAIChatCompletionsAPI` est conçue pour gérer les complétions de chat avec l'API OpenAI. Elle fournit des méthodes pour créer, récupérer, mettre à jour, supprimer et lister les compléments de chat.

https://platform.openai.com/docs/api-reference/chat

## Fonctions

### create()

**create**(*messages* : Collection of [OpenAIMessage](OpenAIMessage.md) ; *parameters* : [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)) : Object

| Paramètres   | Type                                                                  | Description                                                     |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------- |
| *messages*   | Collection of [OpenAIMessage](OpenAIMessage.md)                       | The chat messages to include in the request.    |
| *paramètres* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | The parameters for the chat completion request. |
| Résultat     | Object                                                                | The result of the chat completion request.      |

Creates a model response for the given chat conversation.

https://platform.openai.com/docs/api-reference/chat/create

#### Exemple d'utilisation

Provide the full messages list

```4d
var $messages:=[]
$messages.push({role: "system"; content: "You are a helpful assistant."})
$messages.push({"role":"user"; "content": "Hello, how are you?"})
// ...

var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini" })
```

Obtenir la réponse sous forme de texte

```4d
var $text:=$result.choice.text
```

Ajouter la réponse de l'assistant pour la prochaine demande de complétion

```
$messages.push($result.choice.message) // {"role":"assistant"; "content": "xxx" }
```

### retrieve()

**retrieve**(*completionID* : Text; *parameters* : OpenAIParameters) : Object

| Paramètres     | Type                                    | Description                                                |
| -------------- | --------------------------------------- | ---------------------------------------------------------- |
| *completionID* | Text                                    | The ID of the chat completion to retrieve. |
| *paramètres*   | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.     |
| Résultat       | Object                                  | The retrieved chat completion object.      |

Get a stored chat completion.

https://platform.openai.com/docs/api-reference/chat/get

### update()

**update**(*completionID* : Text; *metadata* : Object, *parameters* : OpenAIParameters) : Object

| Paramètres     | Type                                    | Description                                              |
| -------------- | --------------------------------------- | -------------------------------------------------------- |
| *completionID* | Text                                    | The ID of the chat completion to update. |
| *metadata*     | Object                                  | Metadata to update the completion with.  |
| *paramètres*   | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.   |
| Résultat       | Object                                  | The updated chat completion object.      |

Modify a stored chat completion.

https://platform.openai.com/docs/api-reference/chat/update

### delete()

**delete**(*completionID* : Text; *parameters* : OpenAIParameters) : Object

| Paramètres     | Type                                    | Description                                              |
| -------------- | --------------------------------------- | -------------------------------------------------------- |
| *completionID* | Text                                    | The ID of the chat completion to delete. |
| *paramètres*   | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.   |
| Résultat       | Boolean                                 | Whether the deletion was successful.     |

Delete a stored chat compltions.

https://platform.openai.com/docs/api-reference/chat/delete

### liste()

**list**(*parameters* : OpenAIChatCompletionsListParameters) : Collection

| Paramètres   | Type                                                                          | Description                                              |
| ------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| *paramètres* | [OpenAIChatCompletionsListParameters](OpenAIChatCompletionsListParameters.md) | Parameters for listing chat completions. |
| Résultat     | Collection                                                                    | A collection of stored chat completions. |

List stored chat completions.

https://platform.openai.com/docs/api-reference/chat/list
