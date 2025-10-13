---
id: openaichatcompletionsapi
title: OpenAIChatCompletionsAPI
---

# OpenAIChatCompletionsAPI

The `OpenAIChatCompletionsAPI` class is designed for managing chat completions with OpenAI's API. It provides methods to create, retrieve, update, delete, and list chat completions.

https://platform.openai.com/docs/api-reference/chat

## Funções

### create()

**create**(*messages* : Collection of [OpenAIMessage](OpenAIMessage.md) ; *parameters* : [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)) : Object

| Parâmetro    | Tipo                                                                  | Descrição                                                       |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------- |
| *messages*   | Coleção de [OpenAIMessage](OpenAIMessage.md)                          | The chat messages to include in the request.    |
| *parâmetros* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | The parameters for the chat completion request. |
| Resultado    | Object                                                                | The result of the chat completion request.      |

Creates a model response for the given chat conversation.

https://platform.openai.com/docs/api-reference/chat/create

#### Exemplo de uso

Provide the full messages list

```4d
var $messages:=[]
$messages.push({role: "system"; content: "You are a helpful assistant."})
$messages.push({role: "user"; content: "Hello, how are you?"})
// ...

var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini" })
```

Get the response as text

```4d
var $text:=$result.choice.text
```

Append assistant response for next completion request

```
$messages.push($result.choice.message) // {"role":"assistant"; "content": "xxx" }
```

### retrieve()

**retrieve**(*completionID* : Text; *parameters* : OpenAIParameters): Object

| Parâmetro      | Tipo                                    | Descrição                                                  |
| -------------- | --------------------------------------- | ---------------------------------------------------------- |
| *completionID* | Text                                    | The ID of the chat completion to retrieve. |
| *parâmetros*   | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.     |
| Resultado      | Object                                  | The retrieved chat completion object.      |

Get a stored chat completion.

https://platform.openai.com/docs/api-reference/chat/get

### update()

**update**(*completionID* : Text; *metadata* : Object; *parameters* : OpenAIParameters) : Object

| Parâmetro      | Tipo                                    | Descrição                                                |
| -------------- | --------------------------------------- | -------------------------------------------------------- |
| *completionID* | Text                                    | The ID of the chat completion to update. |
| *metadata*     | Object                                  | Metadata to update the completion with.  |
| *parâmetros*   | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.   |
| Resultado      | Object                                  | The updated chat completion object.      |

Modify a stored chat completion.

https://platform.openai.com/docs/api-reference/chat/update

### delete()

**delete**(*completionID* : Text; *parameters* : OpenAIParameters): Object

| Parâmetro      | Tipo                                    | Descrição                                                |
| -------------- | --------------------------------------- | -------------------------------------------------------- |
| *completionID* | Text                                    | The ID of the chat completion to delete. |
| *parâmetros*   | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.   |
| Resultado      | Parâmetros                              | Whether the deletion was successful.     |

Delete a stored chat compltions.

https://platform.openai.com/docs/api-reference/chat/delete

### lista()

**list**(*parameters* : OpenAIChatCompletionsListParameters) : Collection

| Parâmetro    | Tipo                                                                          | Descrição                                                |
| ------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| *parâmetros* | [OpenAIChatCompletionsListParameters](OpenAIChatCompletionsListParameters.md) | Parameters for listing chat completions. |
| Resultado    | Collection                                                                    | A collection of stored chat completions. |

List stored chat completions.

https://platform.openai.com/docs/api-reference/chat/list
