---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

La classe `OpenAIMessage` représente un message structuré contenant un rôle, un contenu et un utilisateur optionnel. Cette classe fournit des méthodes pour manipuler et récupérer le texte et d'autres contenus du message.

## Propriétés

| Propriété | Type    | Description                                                                                                             |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `rôle`    | Text    | The role of the message (e.g., "user", "assistant"). |
| `contenu` | Variant | The content of the message, which can be a text or a collection of objects.                             |
| `user`    | Text    | An optional property representing the user associated with the message.                                 |

## Propriétés calculées

| Propriété | Type | Description                                               |
| --------- | ---- | --------------------------------------------------------- |
| `text`    | Text | A property representing the text message. |

## Fonctions

### addImageURL()

**addImageURL**(*imageURL* : Text; *detail* : Text)

| Paramètres | Type | Description                                                 |
| ---------- | ---- | ----------------------------------------------------------- |
| *imageURL* | Text | The URL of the image to add to the message. |
| *detail*   | Text | Additional details about the image.         |

Adds an image URL to the content of the message.

## Exemple d'utilisation

```4d
// Create an instance of OpenAIMessage
var $message:=OpenAIMessage({role: "user"; content: "Hello!"})

// Add an image URL with details
$message.addImageURL("http://example.com/image.jpg"; "high")
```