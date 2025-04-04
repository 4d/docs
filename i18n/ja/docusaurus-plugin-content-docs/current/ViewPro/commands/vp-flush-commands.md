---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<details><summary>履歴</summary>

| リリース  | 内容                              |
| ----- | ------------------------------- |
| 20 R9 | Support of *callback* parameter |

</details>

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** ( *vpAreaName* : Text {; *callback* : 4D.Function} )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| 引数         | 型                           |    | 説明                                                                                                                          |
| ---------- | --------------------------- | -- | --------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text                        | -> | 4D View Pro フォームオブジェクト名                                                                                                     |
| callback   | 4D.Function | -> | (Optional) A callback function executed after all VP commands and 4D custom functions have been executed |

<!-- END REF -->

## 説明

`VP FLUSH COMMANDS` コマンドは、 <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->保存されているコマンドをただちに実行し、コマンドバッファをクリアします<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

パフォーマンス向上と、送信リクエスト数を抑えるため、デベロッパーが呼び出した 4D View Pro コマンドはコマンドバッファに保存されます。 `VP FLUSH COMMANDS` は呼び出されると、メソッド終了時にコマンドをバッチとして実行し、コマンドバッファのコンテンツを空にします。

If a *callback* function is provided, it is only executed after all stored commands and 4D custom functions have finished processing. This ensures that any follow-up actions, such as saving or printing the document, are only performed after all calculations have completed.

The following parameters can be used in the callback function:

| 引数     |                               | 型       | 説明                                                 |
| ------ | ----------------------------- | ------- | -------------------------------------------------- |
| param1 |                               | Text    | 4D View Pro エリアのオブジェクト名                            |
| param2 |                               | Object  | メソッドから返されるステータスメッセージを格納したオブジェクト                    |
|        | .success      | Boolean | `True` if import was successful, `False` otherwise |
|        | .errorCode    | Integer | エラーコード                                             |
|        | .errorMessage | Text    | エラーメッセージ                                           |

---

## 例題 1

You want to execute commands and empty the command buffer:

```4d
// Set text values in specific cells
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

// Execute stored commands, clear the buffer, and trigger the callback
VP FLUSH COMMANDS("ViewProArea1")
```

## 例題 2

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
