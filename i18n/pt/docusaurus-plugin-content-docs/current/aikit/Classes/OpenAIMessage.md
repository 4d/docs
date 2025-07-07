---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

The `OpenAIMessage` class represents a structured message containing a role, content, and an optional user. This class provides methods to manipulate and retrieve the text and other content of the message.

## Propriedades

| Propriedade | Tipo         | Descrição                                                                                                               |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `role`      | Text         | The role of the message (e.g., "user", "assistant"). |
| `conteúdo`  | Diferente de | The content of the message, which can be a text or a collection of objects.                             |
| `user`      | Text         | An optional property representing the user associated with the message.                                 |

## Propriedades calculadas

| Propriedade | Tipo | Descrição                                                           |
| ----------- | ---- | ------------------------------------------------------------------- |
| `text`      | Text | Uma propriedade que representa a mensagem de texto. |

## Funções

### addImageURL()

**addImageURL**(*imageURL* : Text; *detail* : Text)

| Parâmetro  | Tipo | Descrição                                                   |
| ---------- | ---- | ----------------------------------------------------------- |
| *imageURL* | Text | The URL of the image to add to the message. |
| *detail*   | Text | Detalhes adicionais sobre a imagem.         |

Adds an image URL to the content of the message.

## Exemplo de uso

```4d
// Create an instance of OpenAIMessage
var $message:=OpenAIMessage({role: "user"; content: "Hello!"})

// Add an image URL with details
$message.addImageURL("http://example.com/image.jpg"; "high")
```