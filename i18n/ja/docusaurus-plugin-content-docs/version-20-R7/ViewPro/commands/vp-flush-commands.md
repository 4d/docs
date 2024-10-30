---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 | <!-- END REF --> |

#### 説明

`VP FLUSH COMMANDS` コマンドは、 <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->保存されているコマンドをただちに実行し、コマンドバッファをクリアします<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

パフォーマンス向上と、送信リクエスト数を抑えるため、デベロッパーが呼び出した 4D View Pro コマンドはコマンドバッファに保存されます。 `VP FLUSH COMMANDS` は呼び出されると、メソッド終了時にコマンドをバッチとして実行し、コマンドバッファのコンテンツを空にします。

#### 例題

コマンドの実行をトレースし、コマンドバッファを空にします:

```4d

 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")
 
 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```
