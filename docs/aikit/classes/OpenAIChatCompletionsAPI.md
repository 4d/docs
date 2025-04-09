---
id: openaichatcompletionsapi
title: OpenAIChatCompletionsAPI
---

# OpenAIChatCompletionsAPI

The `OpenAIChatCompletionsAPI` class is designed for managing chat completions with OpenAI's API. It provides methods to create, retrieve, update, delete, and list chat completions.

https://platform.openai.com/docs/api-reference/chat

## Functions

### create

https://platform.openai.com/docs/api-reference/chat/create

Creates a model response for the given chat conversation.

| Argument     | Type                                      | Description                               |
|--------------|-------------------------------------------|-------------------------------------------|
| `$messages`  | Collection of [OpenAIMessage](OpenAIMessage.md)   | The chat messages to include in the request. |
| `$parameters`| [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)            | The parameters for the chat completion request. |

#### Example Usage

Provide the full messages list

```4d
var $messages:=[]
$messages.push({role: "system"; content: "You are a helpful assistant."})
$messages.push({"role":"user"; "content": "Hello, how are you?"})
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

### retrieve

https://platform.openai.com/docs/api-reference/chat/get

Get a stored chat completion.

| Argument         | Type   | Description                               |
|------------------|--------|-------------------------------------------|
| `$completionID`  | Text   | The ID of the chat completion to retrieve. |
| `$parameters`    | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.    |

### update

https://platform.openai.com/docs/api-reference/chat/update

Modify a stored chat completion.

| Argument         | Type   | Description                               |
|------------------|--------|-------------------------------------------|
| `$completionID`  | Text   | The ID of the chat completion to update. |
| `$metadata`      | Object | Metadata to update the completion with.   |
| `$parameters`    | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.    |

### delete

https://platform.openai.com/docs/api-reference/chat/delete

Delete a stored chat completion.

| Argument         | Type   | Description                               |
|------------------|--------|-------------------------------------------|
| `$completionID`  | Text   | The ID of the chat completion to delete.  |
| `$parameters`    | [OpenAIParameters](OpenAIParameters.md) | Additional parameters for the request.    |

### list

https://platform.openai.com/docs/api-reference/chat/list

List stored chat completions.

| Argument         | Type                                      | Description                               |
|------------------|-------------------------------------------|-------------------------------------------|
| `$parameters`    | [OpenAIChatCompletionsListParameters](OpenAIChatCompletionsListParameters.md)       | Parameters for listing chat completions.  |
