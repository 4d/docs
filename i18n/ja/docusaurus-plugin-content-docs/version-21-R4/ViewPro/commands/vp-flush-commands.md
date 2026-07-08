---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<details><summary>履歴</summary>

| リリース  | 内容                 |
| ----- | ------------------ |
| 20 R9 | *callback* 引数のサポート |

</details>

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** ( *vpAreaName* : Text {; *callback* : 4D.Function} )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

<div class="no-index">

| 引数         | 型                           |    | 説明                                                                |
| ---------- | --------------------------- | -- | ----------------------------------------------------------------- |
| vpAreaName | Text                        | -> | 4D View Pro フォームオブジェクト名                                           |
| callback   | 4D.Function | -> | (オプション) VP コマンドと4D カスタム関数が実行された後に実行されるコールバック関数 |

</div>
<!-- END REF -->

## 説明

`VP FLUSH COMMANDS` コマンドは、 <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->保存されているコマンドをただちに実行し、コマンドバッファをクリアします<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。 存在しない名前を渡した場合、エラーが返されます。

パフォーマンス向上と、送信リクエスト数を抑えるため、デベロッパーが呼び出した 4D View Pro コマンドはコマンドバッファに保存されます。 `VP FLUSH COMMANDS` は呼び出されると、メソッド終了時にコマンドをバッチとして実行し、コマンドバッファのコンテンツを空にします。

*callback* 関数が提供された場合、その関数は全ての保存されたコマンドと4D カスタム関数が処理を終えた後にのみ実行されます。 これにより、ドキュメントの保存や印刷などのフォローアップアクションは、全ての計算が完了した後に実行されることが保証されます。 これにより、ドキュメントの保存や印刷などのフォローアップアクションは、全ての計算が完了した後に実行されることが保証されます。

コールバック関数では、以下のパラメーターを使用することができます:

| 引数     |                               | 型       | 説明                                   |
| ------ | ----------------------------- | ------- | ------------------------------------ |
| param1 |                               | Text    | 4D View Pro エリアのオブジェクト名              |
| param2 |                               | Object  | メソッドから返されるステータスメッセージを格納したオブジェクト      |
|        | .success      | Boolean | 読み込みが成功した場合には`True`、それ以外の場合には`False` |
|        | .errorCode    | Integer | エラーコード                               |
|        | .errorMessage | Text    | エラーメッセージ                             |

---

## 例題 1

コマンドを実行し、コマンドバッファを空にしたい場合を考えます:

```4d
// 特定のセルにテキスト値を設定
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

// 保存されたコマンドを実行し、バッファを消去する
VP FLUSH COMMANDS("ViewProArea1")
```

## 例題 2

コマンドを実行し、コマンドバッファを消去し、コールバック関数をトリガーしたい場合を考えます:

```4d
// 特定のセルにテキスト値を設定
VP SET FORMULA(VP Cell("ViewProArea1";10;1);"MyCustomFunction()")
VP SET FORMULA(VP Cell("ViewProArea1";10;2);"MyCustomFunction2()")
VP SET FORMULA(VP Cell("ViewProArea1";10;3);"MyCustomFunction3()")

// 保存されたコマンドを実行し、バッファを消去し、コールバック関数をトリガーする
VP FLUSH COMMANDS("ViewProArea1"; Formula(onFlushComplete))
```

```4d
// 'onFlushComplete' メソッド
#DECLARE($name : Text; $status : Object)
   ALERT("All commands and custom functions have finished executing. You can now print or save the document.")
```
