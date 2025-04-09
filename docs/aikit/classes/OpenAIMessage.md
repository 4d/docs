---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

The `OpenAIMessage` class represents a structured message containing a role, content, and an optional user. This class provides methods to manipulate and retrieve the text and other content of the message.

## Properties

| Property | Type    | Description                        |
|----------|---------|------------------------------------|
| `role`     | Text    | The role of the message (e.g., "user", "assistant"). |
| `content`  | Variant | The content of the message, which can be a text or a collection of objects. |
| `user`     | Text    | An optional property representing the user associated with the message. |

## Computed properties

| Property | Type    | Description                        |
|----------|---------|------------------------------------|
| `text`     | Text    | A property representing the text message. |

## Functions

### `addImageURL($imageURL : Text; $detail : Text)`

Adds an image URL to the content of the message. 

## Example Usage

```4d
// Create an instance of OpenAIMessage
var $message:=OpenAIMessage({role: "user"; content: "Hello!"})

// Add an image URL with details
$message.addImageURL("http://example.com/image.jpg"; "high")
```