---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

La clase `OpenAIMessage` representa un mensaje estructurado que contiene un rol, un contenido y un usuario opcional. Esta clase ofrece métodos para manipular y recuperar el texto y otros contenidos del mensaje.

## Propiedades

| Propiedad      | Tipo       | Descripción                                                                                                                                                                          |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `rol`          | Text       | El rol del mensaje (por ejemplo, "user", "assistant", "system", "tool").                                                                          |
| `contenido`    | Variant    | El contenido del mensaje, que puede ser un texto o una colección de objetos.                                                                                         |
| `user`         | Text       | Una propiedad opcional que representa al usuario asociado al mensaje.                                                                                                |
| `tool_calls`   | Collection | Una colección de llamadas de herramientas solicitadas por el asistente. Cada llamada a una herramienta contiene un objeto `id`, `type` y `function`. |
| `tool_call_id` | Text       | El ID de la llamada a la herramienta a la que responde este mensaje (se utiliza cuando `role` es "tool").                                         |

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

### Crear un mensaje simple y adjuntar una imagen

```4d
// Create an instance of OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage({role: "user"; content: "Hello!"})

// Add an image URL with details
$message.addImageURL("http://example.com/image.jpg"; "high")
```

### Responder a un mensaje de llamada de herramienta

Cuando un asistente necesita utilizar las funciones externas, genera un mensaje con `tool_calls` para solicitar la ejecución de la función.

**Mensaje del asistente solicitando las llamadas de la herramienta:**

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

**Gestión de la llamada de la herramienta:**

Cuando reciba un mensaje de llamada de herramienta, debe:

1. **Extraer la información relativa a la función:**
   - `function.name`: The name of the function to call (must match a function defined in your [OpenAITool](OpenAITool.md) - you can select code to execute according to this name)
   - `function.arguments`: una cadena JSON que contiene los parámetros de la función que deben analizarse con `JSON Parse`
   - `id`: el identificador único para esta llamada específica a la herramienta

2. **Execute the function:**
   Parse the arguments (which is a JSON string) and call the corresponding function that you defined in your OpenAITool configuration.

3. **Responde con el resultado de la herramienta:**
   Crea un mensaje de respuesta usando el `tool_call_id` exacto de la petición original.

**Ejemplo de respuesta de la herramienta:**

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

**Importante:** el `tool_call_id` de su respuesta debe coincidir exactamente con el `id` de la llamada de la herramienta original. Esto permite que el modelo de IA asocie correctamente su respuesta con la llamada de función específica que se realizó.

## Ver también

- [OpenAITool](OpenAITool.md) - Para la definición de la herramienta