---
id: openaichatcompletionsapi
title: OpenAIChatCompletionsAPI
---

# OpenAIChatCompletionsAPI

The `OpenAIChatCompletionsAPI` class is designed for managing chat completions with OpenAI's API. It provides methods to create, retrieve, update, delete, and list chat completions.

https://platform.openai.com/docs/api-reference/chat

## Funciones

### create()

**create**(*messages* : Collection of [OpenAIMessage](OpenAIMessage.md) ; *parameters* : [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)) : Object

| Parámetros   | Tipo                                                                  | Descripción                                                                |
| ------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| *messages*   | Colección de [OpenAIMessage](OpenAIMessage.md)                        | Los mensajes de chat que se incluirán en la solicitud.     |
| *parámetros* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | Los parámetros para la solicitud de finalización del chat. |
| Resultado    | Object                                                                | The result of the chat completion request.                 |

Creates a model response for the given chat conversation.

https://platform.openai.com/docs/api-reference/chat/create

#### Ejemplo de Uso

Ofrece la lista completa de mensajes

```4d
var $messages:=[]
$messages.push({role: "system"; content: "You are a helpful assistant."})
$messages.push({"role":"user"; "content": "Hello, how are you?"})
// ...

var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini" })
```

Obtener la respuesta como texto

```4d
var $text:=$result.choice.text
```

Append assistant response for next completion request

```
$messages.push($result.choice.message) // {"role":"assistant"; "content": "xxx" }
```

### retrieve()

**retrieve**(*completionID* : Text; *parameters* : OpenAIParameters): Object

| Parámetros     | Tipo                                    | Descripción                                                   |
| -------------- | --------------------------------------- | ------------------------------------------------------------- |
| *completionID* | Text                                    | The ID of the chat completion to retrieve.    |
| *parámetros*   | [OpenAIParameters](OpenAIParameters.md) | Parámetros adicionales para la petición.      |
| Resultado      | Object                                  | El objeto de finalización de chat recuperado. |

Obtener una finalización de chat almacenada.

https://platform.openai.com/docs/api-reference/chat/get

### update()

**update**(*completionID* : Text; *metadata* : Object; *parameters* : OpenAIParameters) : Object

| Parámetros     | Tipo                                    | Descripción                                                             |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| *completionID* | Text                                    | ID de la finalización del chat que se desea actualizar. |
| *metadata*     | Object                                  | Metadatos con los que actualizar la finalización.       |
| *parámetros*   | [OpenAIParameters](OpenAIParameters.md) | Parámetros adicionales para la petición.                |
| Resultado      | Object                                  | El objeto de finalización del chat actualizado.         |

Modificar una finalización de chat almacenada.

https://platform.openai.com/docs/api-reference/chat/update

### delete()

**delete**(*completionID* : Text; *parameters* : OpenAIParameters) : Object

| Parámetros     | Tipo                                    | Descripción                                                      |
| -------------- | --------------------------------------- | ---------------------------------------------------------------- |
| *completionID* | Text                                    | El ID de la finalización de chat a eliminar.     |
| *parámetros*   | [OpenAIParameters](OpenAIParameters.md) | Parámetros adicionales para la petición.         |
| Resultado      | Boolean                                 | Si la eliminación se ha realizado correctamente. |

Delete a stored chat compltions.

https://platform.openai.com/docs/api-reference/chat/delete

### lista()

**list**(*parameters* : OpenAIChatCompletionsListParameters) : Collection

| Parámetros   | Tipo                                                                          | Descripción                                                          |
| ------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| *parámetros* | [OpenAIChatCompletionsListParameters](OpenAIChatCompletionsListParameters.md) | Parámetros para listar los chats completados.        |
| Resultado    | Collection                                                                    | Una colección de finalizaciones de chat almacenadas. |

Lista almacenada de finalizaciones de chat.

https://platform.openai.com/docs/api-reference/chat/list
