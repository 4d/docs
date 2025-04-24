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

| Lanzamiento | Modificaciones                |
| ----------- | ----------------------------- |
| 20 R9       | Support of `formula` property |

</details>

## Descripción

<!--REF #_command_.Call chain.Summary-->The **Call chain** command returns a collection of objects describing each step of the method call chain within the current process.<!-- END REF--> It provides the same information as the Debugger window. It has the added benefit of being able to be executed from any 4D environment, including compiled mode.

The command facilitates debugging by enabling the identification of the method or formula called, the component that called it, and the line number where the call was made. Each object in the returned collection contains the following properties:

| **Propiedad** | **Tipo**                            | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Ejemplo**                              |
| ------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| database      | Text                                | Name of the database calling the method (to distinguish host methods and component methods)                                                                                                                                                                                                                                                                                                                                                                                                                | "database":"contactInfo" |
| formula       | Text (si lo hay) | Contents of the current line of code at the current level of the call chain (raw text). Corresponds to the contents of the line referenced by the `line` property in the source file indicated by method. If the source code is not available, `formula` property is omitted (Undefined).                                                                                                                                               | "var $stack:=Call chain" |
| línea         | Integer                             | Line number of call to the method                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | "line":6                 |
| name          | Ttext                               | Name of the called method                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | "name":"On Load"         |
| type          | Text                                | Type of the method: <li>"projectMethod"</li><li>"formObjectMethod"</li><li>"formmethod"</li><li>"databaseMethod"</li><li>"triggerMethod"</li><li>"executeOnServer" (when calling a project method with the *Execute on Server attribute*)</li><li> "executeFormula" (when executing a formula via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) or the evaluation of a formula in a 4D Write Pro document)</li><li>"classFunction"</li><li>"formMethod"</li> | "type":"formMethod"      |

:::note

For this command to be able to operate in compiled mode, the [Range checking](../Project/compiler.md#range-checking) must not be disabled.

:::

## Ejemplo

The following code returns a collection of objects containing information about the method call chain:

```4d
var $currentCallChain : Collection
$currentCallChain:=Call chain
```

If a project method is executed, the call chain could contain (for example):

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

If a form object method is executed, the call chain could contain (for example):

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


