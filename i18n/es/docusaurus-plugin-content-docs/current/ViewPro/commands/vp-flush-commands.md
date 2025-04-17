---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                   |
| ----------- | -------------------------------- |
| 20 R9       | Soporte del parámetro *callback* |

</details>

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** ( *vpAreaName* : Text {; *callback* : 4D.Function} )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Parámetros   | Tipo                        |    | Descripción                                                                                                                 |
| ------------ | --------------------------- | -- | --------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName   | Text                        | -> | Nombre de objeto formulario área 4D View Pro                                                                                |
| retrollamada | 4D.Function | -> | (Optional) A callback function executed after all VP commands and 4D custom functions have been executed |

<!-- END REF -->

## Descripción

El comando `VP FLUSH COMMANDS` <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->ejecuta inmediatamente los comandos almacenados y borra el buffer de comandos<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Para aumentar el rendimiento y reducir el número de peticiones enviadas, los comandos 4D View Pro llamados por el desarrollador se almacenan en un buffer de comandos. Cuando se llama, `VP FLUSH COMMANDS` ejecuta los comandos como un lote al salir del método y vacía el contenido del buffer de comandos.

If a *callback* function is provided, it is only executed after all stored commands and 4D custom functions have finished processing. This ensures that any follow-up actions, such as saving or printing the document, are only performed after all calculations have completed.

The following parameters can be used in the callback function:

| Parámetros |                               | Tipo    | Descripción                                               |
| ---------- | ----------------------------- | ------- | --------------------------------------------------------- |
| param1     |                               | Text    | El nombre del objeto de área 4D View Pro                  |
| param2     |                               | Object  | Un objeto devuelto por el método con un mensaje de estado |
|            | .success      | Boolean | `True` if import was successful, `False` otherwise        |
|            | .errorCode    | Integer | Código de error                                           |
|            | .errorMessage | Text    | Mensaje de error                                          |

---

## Ejemplo 1

You want to execute commands and empty the command buffer:

```4d
// Set text values in specific cells
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

// Execute stored commands, clear the buffer, and trigger the callback
VP FLUSH COMMANDS("ViewProArea1")
```

## Ejemplo 2

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
