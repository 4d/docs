---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

La classe `OpenAIMessage` représente un message structuré contenant un rôle, un contenu et un utilisateur optionnel. Cette classe fournit des méthodes pour manipuler et récupérer le texte et d'autres contenus du message.

## Propriétés

| Propriété      | Type       | Description                                                                                                                                              |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rôle`         | Text       | The role of the message (e.g., "user", "assistant", "system", "tool").                |
| `contenu`      | Variant    | Le contenu du message, qui peut être un texte ou une collection d'objets.                                                                |
| `user`         | Text       | Une propriété facultative représentant l'utilisateur associé au message.                                                                 |
| `tool_calls`   | Collection | A collection of tool calls requested by the assistant. Each tool call contains an `id`, `type`, and a `function` object. |
| `tool_call_id` | Text       | The ID of the tool call that this message is responding to (used when `role` is "tool").                              |

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

### Create a simple message and attach an image

```4d
// Créer une instance d'OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage({role : "user" ; content : "Hello !"})

// Ajouter une image URL avec des détails
$message.addImageURL("http://example.com/image.jpg" ; "high")
```

### Respond to a tool call message

When an assistant needs to use external functions, it generates a message with `tool_calls` to request function execution.

**Assistant message requesting tool calls:**

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

**Handling the tool call:**

When you receive a tool call message, you need to:

1. **Extract the function information:**
   - `function.name`: The name of the function to call (must match a function defined in your [OpenAITool](OpenAITool.md) - you can select code to execute according to this name)
   - `function.arguments`: A JSON string containing the function parameters that must be parsed with `JSON Parse`
   - `id`: The unique identifier for this specific tool call

2. **Execute the function:**
   Parse the arguments (which is a JSON string) and call the corresponding function that you defined in your OpenAITool configuration.

3. **Respond with the tool result:**
   Create a response message using the exact `tool_call_id` from the original request.

**Example tool response:**

```4d
// Parse the function arguments (if any)
var $arguments : Object := JSON Parse($toolCall.function.arguments)

// Execute your code corresponding to "get_database_tables" 
var $tableNames: Text := OB Keys(ds).join(", ")

// Create the tool response message with the required tool_call_id
var $toolResponse:=cs.AIKit.OpenAIMessage.new({ \
  role: "tool"; \
  tool_call_id: "call_12345"; \
  content: $tableNames \
})
// Add it to the conversation and continue
```

**Important:** The `tool_call_id` in your response must exactly match the `id` from the original tool call. This allows the AI model to correctly associate your response with the specific function call that was made.

## Voir aussi

- [OpenAITool](OpenAITool.md) - For tool definition