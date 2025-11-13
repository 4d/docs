---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->

<!--REF #_command_.Call chain.Params-->

| Parámetros | Tipo       |                             | Descripción                                                      |
| ---------- | ---------- | --------------------------- | ---------------------------------------------------------------- |
| Resultado  | Collection | &#8592; | Collection of objects describing the call chain within a process |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                    |
| ----------- | --------------------------------- |
| 20 R9       | Soporte de la propiedad `formula` |

</details>

## Descripción

<!--REF #_command_.Call chain.Summary-->The **Call chain** command returns a collection of objects describing each step of the method call chain within the current process.<!-- END REF--> Ofrece la misma información que la ventana Depurador. Tiene la ventaja adicional de poder ser ejecutado desde cualquier entorno 4D, incluyendo el modo compilado.

The command facilitates debugging by enabling the identification of the method or formula called, the component that called it, and the line number where the call was made. Cada objeto de la colección devuelta contiene las siguientes propiedades:

| **Propiedad** | **Tipo**                            | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Ejemplo**                              |
| ------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| database      | Text                                | Name of the database calling the method (to distinguish host methods and component methods)                                                                                                                                                                                                                                                                                                                                                                                                                | "database":"contactInfo" |
| formula       | Text (si lo hay) | Contenido de la línea actual de código en el nivel actual de la cadena de llamadas (texto bruto). Corresponde al contenido de la línea referenciada por la propiedad `line` en el archivo fuente indicado por el método. Si el código fuente no está disponible, la propiedad `formula` se omite (Undefined).                                                                                                                           | "var $stack:=Call chain" |
| línea         | Integer                             | Número de línea de llamada al método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | "line":6                 |
| name          | Text                                | Nombre del método llamado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | "name":"On Load"         |
| type          | Text                                | Type of the method: <li>"projectMethod"</li><li>"formObjectMethod"</li><li>"formmethod"</li><li>"databaseMethod"</li><li>"triggerMethod"</li><li>"executeOnServer" (when calling a project method with the *Execute on Server attribute*)</li><li> "executeFormula" (when executing a formula via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) or the evaluation of a formula in a 4D Write Pro document)</li><li>"classFunction"</li><li>"formMethod"</li> | "type":"formMethod"      |

:::note

Para que este comando pueda operar en modo compilado, la [verificación de rango](../Project/compiler.md#range-checking) no debe estar deshabilitada.

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

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1662                        |
| Hilo seguro       | &check; |


