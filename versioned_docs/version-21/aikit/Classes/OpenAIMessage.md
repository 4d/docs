---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

The `OpenAIMessage` class represents a structured message containing a role, content, and an optional user. This class provides methods to manipulate and retrieve the text and other content of the message.

## Properties

| Property | Type    | Description                        |
|----------|---------|------------------------------------|
| `role`     | Text    | The role of the message (e.g., "user", "assistant", "system", "tool"). |
| `content`  | Variant | The content of the message, which can be a text or a collection of objects. |
| `user`     | Text    | An optional property representing the user associated with the message. |
| `tool_calls` | Collection | A collection of tool calls requested by the assistant. Each tool call contains an `id`, `type`, and a `function` object. |
| `tool_call_id` | Text | The ID of the tool call that this message is responding to (used when `role` is "tool"). |

## Computed properties

| Property | Type    | Description                        |
|----------|---------|------------------------------------|
| `text`     | Text    | A property representing the text message. |

## Functions

### addImageURL()

**addImageURL**(*imageURL* : Text; *detail* : Text)

| Parameter        | Type  | Description                                |
|------------------|-------|--------------------------------------------|
| *imageURL*       | Text | The URL of the image to add to the message.|
| *detail*         | Text | Additional details about the image.        |

Adds an image URL to the content of the message.

## Example Usage

### Create a simple message and attach an image


```4d
// Create an instance of OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage({role: "user"; content: "Hello!"})

// Add an image URL with details
$message.addImageURL("http://example.com/image.jpg"; "high")
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

## See Also

- [OpenAITool](OpenAITool.md) - For tool definition