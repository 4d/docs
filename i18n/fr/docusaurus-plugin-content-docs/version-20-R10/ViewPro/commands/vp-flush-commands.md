---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<details><summary>Historique</summary>

| Release | Modifications                   |
| ------- | ------------------------------- |
| 20 R9   | Support of *callback* parameter |

</details>

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** ( *vpAreaName* : Text {; *callback* : 4D.Function} )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Paramètres | Type                        |    | Description                                                                                                                 |
| ---------- | --------------------------- | -- | --------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text                        | -> | Nom d'objet formulaire zone 4D View Pro                                                                                     |
| callback   | 4D.Function | -> | (Optional) A callback function executed after all VP commands and 4D custom functions have been executed |

<!-- END REF -->

## Description

The `VP FLUSH COMMANDS` command <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->immediately executes stored commands and clears the command buffer<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Afin d'améliorer la performance et de réduire le nombre de requêtes envoyées, les commandes 4D View Pro appelées par le développeur sont stockées temporairement dans un buffer de commandes. When called, `VP FLUSH COMMANDS` executes the commands as a batch when leaving the method and empties the contents of the command buffer.

If a *callback* function is provided, it is only executed after all stored commands and 4D custom functions have finished processing. This ensures that any follow-up actions, such as saving or printing the document, are only performed after all calculations have completed.

The following parameters can be used in the callback function:

| Paramètres |                               | Type    | Description                                             |
| ---------- | ----------------------------- | ------- | ------------------------------------------------------- |
| param1     |                               | Text    | Nom de l'objet 4D View Pro                              |
| param2     |                               | Object  | Objet retourné par la méthode avec un message de statut |
|            | .success      | Boolean | `True` if import was successful, `False` otherwise      |
|            | .errorCode    | Integer | Code d'erreur                                           |
|            | .errorMessage | Text    | Message d'erreur                                        |

---

## Exemple 1

You want to execute commands and empty the command buffer:

```4d
// Set text values in specific cells
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

// Execute stored commands, clear the buffer, and trigger the callback
VP FLUSH COMMANDS("ViewProArea1")
```

## Exemple 2

You want to execute commands, empty the command buffer and trigger a callback function:

```4d
// Set text values in specific cells
VP SET FORMULA(VP Cell("ViewProArea1";10;1);"MyCustomFunction()")
VP SET FORMULA(VP Cell("ViewProArea1";10;2);"MyCustomFunction2()")
VP SET FORMULA(VP Cell("ViewProArea1";10;3);"MyCustomFunction3()")

// Execute stored commands, clear the buffer, and trigger the callback
VP FLUSH COMMANDS("ViewProArea1"; Formula(onFlushComplete))
```

```4d
// Method 'onFlushComplete'
#DECLARE($name : Text; $status : Object)
   ALERT("All commands and custom functions have finished executing. You can now print or save the document.")
```
