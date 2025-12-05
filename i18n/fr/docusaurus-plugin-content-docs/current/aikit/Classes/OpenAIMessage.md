---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

La classe `OpenAIMessage` représente un message structuré contenant un rôle, un contenu et un utilisateur optionnel. Cette classe fournit des méthodes pour manipuler et récupérer le texte et d'autres contenus du message.

## Propriétés

| Propriété      | Type       | Description                                                                                                                                                 |
| -------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`         | Text       | Le rôle du message (par exemple, "user", "assistant", "system", "tool").                                                 |
| `content`      | Variant    | Le contenu du message, qui peut être un texte ou une collection d'objets.                                                                   |
| `user`         | Text       | Une propriété facultative représentant l'utilisateur associé au message.                                                                    |
| `tool_calls`   | Collection | Une collection d'appels d'outils requis par l'assistant. Chaque appel d'outil contient un objet `id`, `type` et `function`. |
| `tool_call_id` | Text       | L'ID de l'appel d'outil auquel ce message répond (utilisé lorsque `role` est "tool").                                    |

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

### addFileId()

**addFileId**(*fileId* : Text)

| Paramètres | Type | Description                                           |
| ---------- | ---- | ----------------------------------------------------- |
| *fileId*   | Text | L'ID du fichier à ajouter au message. |

Ajoute une référence de fichier au contenu du message. Si le contenu est actuellement du texte, il sera converti en un format de collection.

## Exemple d'utilisation

### Message texte de base

```4d
// Créer une instance d'OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage.new({role : "user" ; content : "Hello !"})
```

### Ajout d'images

```4d
var $message:=cs.AIKit.OpenAIMessage.new({role : "user" ; content : "Please analyze this image :"})

// Ajouter une URL d'image avec des détails
$message.addImageURL("http://example.com/image.jpg" ; "high")
```

### Ajout de fichier

```4d
// Téléverser un fichier avec l'objectif user_data
var $file:=File("/RESOURCES/document.pdf")
var $uploadResult:=$client.files.create($file; "user_data")

If ($uploadResult.success)
    var $uploadedFile:=$uploadResult.file
    
    // Créer un message et joindre le fichier en utilisant son ID
    var $message:=cs.AIKit.OpenAIMessage.new({role : "user" ; content : "Please analyze this document :"})
    $message.addFileId($uploadedFile.id)
    
    // $message.content -> [{type : "text" ; text : "Please analyze this document :"} ; {type : "file" ; file_id : "file-abc123"}]
End if
```

### Répondre à un message d'appel d'outil

Lorsqu'un assistant doit utiliser des fonctions externes, il génère un message avec `tool_calls` pour demander l'exécution de la fonction.

**Message de l'assistant demandant des appels à l'outil :**

```json
{
  "role": "assistant",
  "tool_calls": [
    {
      "id": "call_12345",
      "type": "function",
      "function": {
        "name": "get_database_tables",
        "arguments": "{}"
      }
    }
  ]
}
```

**Gestion de l'appel d'outil :**

Lorsque vous recevez un message d'appel d'outil, vous devez :

1. **Extraire les informations relatives à la fonction :**
   - `function.name` : Le nom de la fonction à appeler (doit correspondre à une fonction définie dans votre [OpenAITool](OpenAITool.md) - vous pouvez sélectionner le code à exécuter en fonction de ce nom)
   - `function.arguments` : Une chaîne JSON contenant les paramètres de la fonction qui doivent être analysés avec `JSON Parse`
   - `id` : L'identifiant unique pour cet appel d'outil spécifique

2. **Exécuter la fonction :**
   Analyser les arguments (qui sont une chaîne JSON) et appeler la fonction correspondante que vous avez définie dans votre configuration OpenAITool.

3. **Répondre avec le résultat de l'outil :**
   Créer un message de réponse en utilisant le `tool_call_id` exact de la requête originale.

**Exemple de réponse d'outil :**

```4d
// Analyse des arguments de la fonction (le cas échéant)
var $arguments : Object := JSON Parse($toolCall.function.arguments)

// Exécution du code correspondant à "get_database_tables" 
var $tableNames: Text := OB Keys(ds).join(", ")

// Création du message de réponse de l'outil avec le tool_call_id requis
var $toolResponse:=cs.AIKit.OpenAIMessage.new({ \
  role : "tool" ; \
  tool_call_id : "call_12345" ; \
  content : $tableNames \
})
// Ajoutez-le à la conversation et continuez
```

**Important :** Le `tool_call_id` de votre réponse doit correspondre exactement à l'`id` de l'appel d'outil original. Cela permet au modèle d'IA d'associer correctement votre réponse à l'appel de fonction spécifique qui a été effectué.

## Voir aussi

- [OpenAITool](OpenAITool.md) - Pour la définition de l'outil