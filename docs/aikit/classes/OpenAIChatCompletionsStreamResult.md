---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Inherits

- [OpenAIResult](OpenAIResult.md)
 
## Properties

| Property  | Type                         | Description                                      |
|-----------|------------------------------|--------------------------------------------------|
| data      | Object                       | Contains the stream data sent by the server.    |

## Computed properties

### choice

**Description**: Return a choice data, with a `delta` message.

**Returns**: [OpenAIChoice](OpenAIChoice.md) or Null

---

### choices

**Description**: Return choices data, with `delta` messages.

**Returns**: Collection of [OpenAIChoice](OpenAIChoice.md)

---

### Overrided properties

#### `success`

**Description**: Returns `True` if the streaming data was successfully decoded as an object.

#### `terminated` 

**Description**: A Boolean indicating whether the HTTP request was terminated. ie `onTerminate` called.