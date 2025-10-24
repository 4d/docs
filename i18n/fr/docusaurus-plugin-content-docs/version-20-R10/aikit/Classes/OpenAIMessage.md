---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

La classe `OpenAIMessage` représente un message structuré contenant un rôle, un contenu et un utilisateur optionnel. Cette classe fournit des méthodes pour manipuler et récupérer le texte et d'autres contenus du message.

## Propriétés

| Propriété | Type    | Description                                                                               |
| --------- | ------- | ----------------------------------------------------------------------------------------- |
| `role`    | Text    | Le rôle du message (par exemple, "user", "assistant"). |
| `content` | Variant | Le contenu du message, qui peut être un texte ou une collection d'objets. |
| `user`    | Text    | Une propriété facultative représentant l'utilisateur associé au message.  |

## Propriétés calculées

| Propriété | Type | Description                                                    |
| --------- | ---- | -------------------------------------------------------------- |
| `text`    | Text | Une propriété représentant le message textuel. |

## Fonctions

### addImageURL()

**addImageURL**(*imageURL* : Text; *detail* : Text)

| Paramètres | Type | Description                                            |
| ---------- | ---- | ------------------------------------------------------ |
| *imageURL* | Text | L'URL de l'image à ajouter au message. |
| *detail*   | Text | Détails supplémentaires sur l'image.   |

Ajoute une URL d'image au contenu du message.

## Exemple d'utilisation

```4d
// Créer une instance d'OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage({role : "user" ; content : "Hello !"})

// Ajouter une image URL avec des détails
$message.addImageURL("http://example.com/image.jpg" ; "high")
```