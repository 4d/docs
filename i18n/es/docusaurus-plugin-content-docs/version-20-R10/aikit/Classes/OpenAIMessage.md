---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

La clase `OpenAIMessage` representa un mensaje estructurado que contiene un rol, un contenido y un usuario opcional. This class provides methods to manipulate and retrieve the text and other content of the message.

## Propiedades

| Propiedad   | Tipo    | Descripción                                                                                  |
| ----------- | ------- | -------------------------------------------------------------------------------------------- |
| `rol`       | Text    | El rol del mensaje (por ejemplo, "user", "assistant").    |
| `contenido` | Variant | El contenido del mensaje, que puede ser un texto o una colección de objetos. |
| `user`      | Text    | Una propiedad opcional que representa al usuario asociado al mensaje.        |

## Propiedades calculadas

| Propiedad | Tipo | Descripción                                                       |
| --------- | ---- | ----------------------------------------------------------------- |
| `text`    | Text | Una propiedad que representa el mensaje de texto. |

## Funciones

### addImageURL()

**addImageURL**(*imageURL* : Text; *detail* : Text)

| Parámetros | Tipo | Descripción                                              |
| ---------- | ---- | -------------------------------------------------------- |
| *imageURL* | Text | La URL de la imagen a añadir al mensaje. |
| *detail*   | Text | Detalles adicionales sobre la imagen.    |

Añade una URL de imagen al contenido del mensaje.

## Ejemplo de Uso

```4d
// Create an instance of OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage({role: "user"; content: "Hello!"})

// Add an image URL with details
$message.addImageURL("http://example.com/image.jpg"; "high")
```