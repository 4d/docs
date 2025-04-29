---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<details><summary>História</summary>

| Release | Mudanças                        |
| ------- | ------------------------------- |
| 20 R9   | Support of *callback* parameter |

</details>

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** ( *vpAreaName* : Text {; *callback* : 4D.Function} )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Parâmetro  | Tipo                         |    | Descrição                                                                                                                   |
| ---------- | ---------------------------- | -- | --------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text                         | -> | Nome de objeto formulário área 4D View Pro                                                                                  |
| callback   | 4D. Function | -> | (Optional) A callback function executed after all VP commands and 4D custom functions have been executed |

<!-- END REF -->

## Descrição

The `VP FLUSH COMMANDS` command <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->immediately executes stored commands and clears the command buffer<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Para aumentar o desempenho e reduzir o número de solicitações enviadas, os comandos do 4D View Pro chamados pelo desenvolvedor são armazenados em um buffer de comando. Quando chamado, `VP FLUSH COMMANDS` executa os comandos como um lote ao sair do método e esvazia o conteúdo do buffer de comandos.

If a *callback* function is provided, it is only executed after all stored commands and 4D custom functions have finished processing. This ensures that any follow-up actions, such as saving or printing the document, are only performed after all calculations have completed.

The following parameters can be used in the callback function:

| Parâmetro |                               | Tipo       | Descrição                                                  |
| --------- | ----------------------------- | ---------- | ---------------------------------------------------------- |
| param1    |                               | Text       | O nome do objeto de área 4D View Pro                       |
| param2    |                               | Object     | Um objeto devolvido pelo método com uma mensagem de estado |
|           | .success      | Parâmetros | `True` if import was successful, `False` otherwise         |
|           | .errorCode    | Integer    | Código de erro                                             |
|           | .errorMessage | Text       | Mensagem de erro                                           |

---

## Exemplo 1

You want to execute commands and empty the command buffer:

```4d
// Set text values in specific cells
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

// Execute stored commands, clear the buffer, and trigger the callback
VP FLUSH COMMANDS("ViewProArea1")
```

## Exemplo 2

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
