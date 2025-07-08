---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R9|Support of *callback* parameter|
</details>

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->
**VP FLUSH COMMANDS** ( *vpAreaName* : Text {; *callback* : 4D.Function} )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Parameter    | Type         |  | Description |
|-------------|-------------|---|-------------|
| vpAreaName  | Text        | -> | 4D View Pro area form object name |
| callback    | 4D.Function | -> | (Optional) A callback function executed after all VP commands and 4D custom functions have been executed |  
<!-- END REF -->

## Description

The `VP FLUSH COMMANDS` command <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->immediately executes stored commands and clears the command buffer<!-- END REF -->.  

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In order to increase performance and reduce the number of requests sent, the 4D View Pro commands called by the developer are stored in a command buffer. When called, `VP FLUSH COMMANDS` executes the commands as a batch when leaving the method and empties the contents of the command buffer.

If a *callback* function is provided, it is only executed after all stored commands and 4D custom functions have finished processing. This ensures that any follow-up actions, such as saving or printing the document, are only performed after all calculations have completed.

The following parameters can be used in the callback function:

| Parameter |  | Type | Description |
|-----------|----|------|-------------|
| param1    |  | Text | The name of the 4D View Pro area object |
| param2    |  | Object | An object returned by the method with a status message |
|           | .success | Boolean | `True` if import was successful, `False` otherwise |
|           | .errorCode | Integer | Error code |
|           | .errorMessage | Text | Error message |

---

## Example 1
You want to execute commands and empty the command buffer:

```4d
// Set text values in specific cells
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

// Execute stored commands, clear the buffer, and trigger the callback
VP FLUSH COMMANDS("ViewProArea1")
```
## Example 2
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
