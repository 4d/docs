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

### addFileId()

**addFileId**(*fileId* : Text)

| Parámetros | Tipo | Descripción                                                  |
| ---------- | ---- | ------------------------------------------------------------ |
| *fileId*   | Text | El ID del archivo que se añadirá al mensaje. |

Añade una referencia de archivo al contenido del mensaje. Si el contenido es actualmente texto, se convertirá a un formato colección.

## Ejemplo de Uso

### Mensaje de texto básico

```4d
// Crear una instancia de OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage.new({role: "user"; content: "Hello!"})
```

### Añadir imágenes

```4d
var $message:=cs.AIKit.OpenAIMessage.new({role: "user"; content: "Please analyze this image:"})

// Añadir una URL de imagen con los detalles
$message.addImageURL("http://example.com/image.jpg"; "high")
```

### Añadir archivo

```4d
// Subir un archivo con el objetivo user_data
var $file:=File("/RESOURCES/document.pdf")
var $uploadResult:=$client.files.create($file; "user_data")

If ($uploadResult.success)
    var $uploadedFile:=$uploadResult.archivo
    
    // Crea el mensaje y adjunta el archivo usando su ID
    var $message:=cs.AIKit.OpenAIMessage.new({role: "usuario"; content: "Por favor, analice este documento:"})
    $message.addFileId($uploadedFile.id)
    
    // $message.content -> [{type: "text"; text: "Por favor, analice este documento:"}; {type: "file"; file_id: "archivo-abc123"}]
End if
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
   - `function.name`: el nombre de la función a llamar (debe corresponder con una función definida en su [OpenAITool](OpenAITool.md) - puede seleccionar el código a ejecutar en función de este nombre)
   - `function.arguments`: una cadena JSON que contiene los parámetros de la función que deben analizarse con `JSON Parse`
   - `id`: el identificador único para esta llamada específica a la herramienta

2. **Ejecutar la función:**
   Analizar los argumentos (que es una cadena JSON) y llamar a la función correspondiente que definió en su configuración OpenAITool.

3. **Responde con el resultado de la herramienta:**
   Crea un mensaje de respuesta usando el `tool_call_id` exacto de la petición original.

**Ejemplo de respuesta de la herramienta:**

```4d
// Analizar los argumentos de la función (si los hay)
var $arguments : Object := JSON Parse($toolCall.function.arguments)

// Ejecuta el código correspondiente a "get_database_tables" 
var $tableNames: Text := OB Keys(ds).join(", ")

// Creación del mensaje de respuesta de la herramienta con el tool_call_id requerido
var $toolResponse:=cs.AIKit.OpenAIMessage. ew({ \
  role: "tool"; \
  tool_call_id: "call_12345"; \
  contenido: $tableNames \
})
// Añádala a la conversación y continuar
```

**Importante:** el `tool_call_id` de su respuesta debe coincidir exactamente con el `id` de la llamada de la herramienta original. Esto permite que el modelo de IA asocie correctamente su respuesta con la llamada de función específica que se realizó.

## Ver también

- [OpenAITool](OpenAITool.md) - Para la definición de la herramienta