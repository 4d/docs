---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->

<!--REF #_command_.Call chain.Params-->

<div class="no-index">

| Parámetros | Tipo       |                             | Descripción                                                                   |
| ---------- | ---------- | --------------------------- | ----------------------------------------------------------------------------- |
| Resultado  | Collection | &#8592; | Colección de objetos que describen la cadena de llamadas dentro de un proceso |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                    |
| ----------- | --------------------------------- |
| 20 R9       | Soporte de la propiedad `formula` |

</details>
</div>

## Descripción

<!--REF #_command_.Call chain.Summary-->El comando **Call chain** devuelve una colección de objetos que describen cada paso de la cadena de llamadas a métodos en el proceso actual.<!-- END REF--> Ofrece la misma información que la ventana Depurador. Tiene la ventaja adicional de poder ser ejecutado desde cualquier entorno 4D, incluyendo el modo compilado.

El comando facilita la depuración al permitir la identificación del método o fórmula llamado, el componente que lo llamó y el número de línea donde se realizó la llamada. Cada objeto de la colección devuelta contiene las siguientes propiedades:

| **Propiedad** | **Tipo**                            | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | **Ejemplo**                              |
| ------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| database      | Text                                | Nombre de la base de datos que llama al método (para distinguir los métodos locales de los métodos del componente)                                                                                                                                                                                                                                                                                                                                                                                                   | "database":"contactInfo" |
| formula       | Text (si lo hay) | Contenido de la línea actual de código en el nivel actual de la cadena de llamadas (texto bruto). Corresponde al contenido de la línea referenciada por la propiedad `line` en el archivo fuente indicado por el método. Si el código fuente no está disponible, la propiedad `formula` se omite (Undefined).                                                                                                                                     | "var $stack:=Call chain" |
| línea         | Integer                             | Número de línea de llamada al método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | "line":6                 |
| name          | Text                                | Nombre del método llamado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | "name":"On Load"         |
| type          | Text                                | Tipo del método: <li>"projectMethod"</li><li>"formObjectMethod"</li><li>"formmethod"</li><li>"databaseMethod"</li><li>"triggerMethod"</li><li>"executeOnServer" (al llamar a un método proyecto con el atributo *Ejecutar en el servidor*)</li><li> "executeFormula" (al ejecutar una fórmula a través de [PROCESS 4D TAGS](../commands/process-4d-tags) o la evaluación de una fórmula en un documento 4D Write Pro)</li><li>"classFunction"</li><li>"formMethod"</li> | "type":"formMethod"      |

:::note

Para que este comando pueda operar en modo compilado, la [verificación de rango](../../Project/compiler.md#range-checking) no debe estar deshabilitada.

:::

## Ejemplo

El siguiente código devuelve una colección de objetos que contienen información acerca de la cadena de llamadas de métodos:

```4d
var $currentCallChain : Collection
$currentCallChain:=Call chain
```

Si se ejecuta un método proyecto, la cadena de llamadas podría contener (por ejemplo):

```json
[
    {
        "type":"projectMethod",
        "name":"detailForm",
        "line":1,
        "database":"myDatabase"
    }
]
```

Si un método objeto de formulario se ejecuta, la cadena de llamadas podría contener (por ejemplo):

```json
[
    {
        "type":"formObjectMethod",
        "name":"detailForm.Button",
        "line":1,
        "database":"myDatabase"
    },
    {
        "type":"formMethod",
        "name":"detailForm",
        "line":2,
        "database":"myDatabase"
    },
    {
        "type":"projectMethod",
        "name":"showDetailForm",
        "line":2,
        "database":"myDatabase"
    }
]
```

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1662 |
| Hilo seguro       | sí   |



