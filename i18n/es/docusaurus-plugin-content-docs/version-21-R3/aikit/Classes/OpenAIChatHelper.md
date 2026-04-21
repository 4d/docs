---
id: openaichathelper
title: OpenAIChatHelper
---

# OpenAIChatHelper

El asistente de chat permite conservar una lista de mensajes en memoria y efectuar avisos consecutivos.

## Propiedades

| Nombre de la propiedad | Tipo                                                                  | Valor por defecto                                      | Descripción                                                                                                                          |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `chat`                 | [OpenAIChatAPI](OpenAIChatAPI.md)                                     | -                                                      | La instancia API de chat utilizada para la comunicación con OpenAI.                                                  |
| `systemPrompt`         | [OpenAIMessage](OpenAIMessage.md)                                     | -                                                      | El mensaje del sistema que guía las respuestas del asistente de chat.                                                |
| `numberOfMessages`     | Integer                                                               | 15                                                     | El número máximo de mensajes a conservar en el historial de chat.                                                    |
| `parámetros`           | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | -                                                      | Los parámetros para la solicitud de terminación del chat OpenAI.                                                     |
| `messages`             | Colección de [OpenAIMessage](OpenAIMessage.md)                        | [] | La colección de mensajes intercambiados en la sesión de chat.                                                        |
| `herramientas`         | Colección de [OpenAITool](OpenAITool.md)                              | [] | Lista de herramientas OpenAI registradas para la llamada de funciones.                                               |
| `autoHandleToolCalls`  | Boolean                                                               | True                                                   | Booleano que indica si las llamadas a herramientas se gestionan automáticamente utilizando herramientas registradas. |
| `lastErrors`           | Collection                                                            | -                                                      | Colección que contiene los últimos errores encontrados durante las operaciones de chat.                              |

## Constructor

Para crear una nueva instancia de `OpenAIChatHelper`, lo mejor es utilizar el método `create()` de la [API de chat del cliente OpenAI](OpenAIChatAPI.md):

```4D
var $chatHelper:=$client.chat.create("You are a helpful assistant.")
```

Este método crea un nuevo asistente de chat con el prompt sistema especificado y lo inicializa con los parámetros por defecto. El prompt del sistema define el rol y comportamiento del asistente a lo largo de la conversación.

## Funciones

### prompt()

**prompt**(*prompt* : Text) : OpenAIChatCompletionsResult

| Parámetros | Tipo                                                          | Descripción                                                        |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| *prompt*   | Text                                                          | Texto a enviar al chat de OpenAI.                  |
| Resultado  | [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md) | El resultado de finalización devuelto por el chat. |

Envía una consulta de usuario al chat y devuelve el resultado de finalización correspondiente.

#### Ejemplo de Uso

```4D
var $result:=$chatHelper.prompt("Hello, how can I help you today?")
$result:=$chatHelper.prompt("Why 42?")
```

### reset()

**reset**()

Restablece el contexto del chat borrando todos los mensajes y anulando el registro de todas las herramientas. De este modo, se inicia una nueva conversación y se mantienen intactos el aviso y los parámetros del sistema.

#### Ejemplo de reinicio

```4D
$chatHelper.prompt("Hello!")
$chatHelper.reset() // Borra todos los mensajes y herramientas anteriores
```

### registerTool()

**registerTool**(*tool* : Object; *handler* : Object)

| Parámetros | Tipo   | Descripción                                                                                                                                                                                                   |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *tool*     | Object | Objeto de definición de la herramienta (o instancia [OpenAITool](OpenAITool.md))                                                                                                           |
| *handler*  | Object | La función para manejar las llamadas de herramientas ([4D.Function](../../API/FunctionClass.md) u Objeto), opcional si se define dentro de *tool* como propiedad *handler* |

Registra una herramienta con su función de gestión automática de llamadas a herramientas.

El parámetro *handler* puede ser:

- Un objeto **4D.Function**: función de gestión directa
- Un **Objeto**: un objeto que contiene una propiedad `formula` que coincide con el nombre de la función de la herramienta

La función de gestión recibe un objeto que contiene los parámetros pasados por la llamada a la herramienta OpenAI. Este objeto contiene pares llave-valor en los que las llaves corresponden a los nombres de los parámetros definidos en el esquema de la herramienta, y los valores son los argumentos reales ofrecidos por el modelo de IA.

#### Ejemplo de Register Tool

```4D
// Ejemplo 1: Registro simple con gestor directo
var $tool:={type: "function"; function: {name: "get_weather"; description: "Get current weather"; parameters: {type: "object"; properties: {location: {type: "string"; description: "City name"}}}}}
var $handler:=Formula(return "Sunny, 25°C in "+$1.location)

$chatHelper.registerTool($tool; $handler)

// Ejemplo 2: Herramienta con propiedad handler (no se necesita un segundo parámetro)
var $tool:={name: "calculate"; description: "Realiza cálculos"; handler: Formula(return String(Num($1.expression)))}
$chatHelper.registerTool($tool)

// Ejemplo 3: Uso de la notación objeto
$chatHelper.registerTool({tool: $tool; handler: $handler})

// Ejemplo 4: objeto con función correspondiente al nombre de la herramienta
var $tool:={name: "getTime"; description: "Get current time"}
var $handlerObj:=cs.MyTimeTool.new() // clase con una función getTime
$chatHelper.registerTool($tool; $handlerObj)
```

### registerTools()

**registerTools**(*toolsWithHandlers* : Variant)

| Parámetros          | Tipo    | Descripción                                                     |
| ------------------- | ------- | --------------------------------------------------------------- |
| *toolsWithHandlers* | Variant | Objeto o colección que contiene las herramientas y sus gestores |

Registra varias herramientas a la vez. El parámetro puede ser:

- **Collection**: array de objetos herramientas (con gestores integrados o separados)
- **Objeto**: objeto cuyas propiedades son nombres de funciones que corresponden a definiciones de herramientas
- **Objeto con atributo `tools`**: objeto que contiene una colección `tools` y propiedades de fórmulas que coinciden con nombres de herramientas

#### Ejemplo de registro de varias herramientas

##### Ejemplo 1: formato colección con los gestores en las herramientas

```4D
var $weatherTool:={name: "getWeather"; description: "Get current weather"; handler: Formula(return "Sunny, 25°C in "+$1.location)}
var $calculatorTool:={name: "calculate"; description: "Perform calculations"; handler: Formula(return String(Num($1.expression)))}

$chatHelper.registerTools([$weatherTool; $calculatorTool])
```

##### Ejemplo 2: formato objeto con herramienta y gestor separados

```4D
var $toolsWithSeparateHandlers:={}
$toolsWithSeparateHandlers.getWeather:={tool: $weatherToolDefinition; handler: $weatherHandler}
$toolsWithSeparateHandlers.calculate:={tool: $calculatorToolDefinition; handler: $calculatorHandler}

$chatHelper.registerTools($toolsWithSeparateHandlers)
```

##### Ejemplo 3: objeto con atributo colección tools y propiedades formula

Clase MyTools:

```4D

Class constructor
    this.tools:=[{name: "getWeather"; description: "Get current weather"}; \
                 {name: "getTime"; description: "Get current time"}]  // Colección de definiciones de herramientas

Function getWeather($parameters: Object)
    return "Sunny, 25°C"

Function getTime($parameters: Object)
    return String(Current time)
```

```4D
$chatHelper.registerTools(cs.MyTools.new())
```

##### Ejemplo 4: formato objeto simple con herramientas como propiedades

```4D
var $tools:={}
$tools.getWeather:=$weatherTool  // Tool con propiedad handler
$tools.calculate:=$calculatorTool  // Tool con propiedad handler

$chatHelper.registerTools($tools)
```

### unregisterTool()

**unregisterTool**(*functionName* : Text)

| Parámetros     | Tipo | Descripción                                        |
| -------------- | ---- | -------------------------------------------------- |
| *functionName* | Text | El nombre de la herramienta función a desregistrar |

Desregistra una herramienta específica por su nombre de función. Esto elimina la herramienta de la colección de herramientas registradas, borra su gestor y lo elimina de los parámetros.

#### Ejemplo de Unregister Tool

```4D
$chatHelper.registerTool($weatherTool; $weatherHandler)
$chatHelper.unregisterTool("get_weather") // Eliminar la herramienta weather
```

### unregisterTools()

**unregisterTools**()

Desregistra todas las herramientas a la vez. Esto borra todos los gestores de herramientas, vacía la colección de herramientas y elimina todas las herramientas de los parámetros.

#### Ejemplo de Unregister All Tools

```4D
$chatHelper.registerTools($multipleTools)
$chatHelper.unregisterTools() // Eliminar todas las herramientas
```