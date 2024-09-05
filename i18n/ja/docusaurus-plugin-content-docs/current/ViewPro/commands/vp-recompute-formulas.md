---
id: vp-recompute-formulas
title: VP RECOMPUTE FORMULAS
---

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->

**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 | <!-- END REF --> |

#### 説明

`VP RECOMPUTE FORMULAS` コマンドは、<!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->*vpAreaName* 引数で指定したエリアの全フォーミュラを即座に評価します<!-- END REF -->。 デフォルトでは、4D はフォーミュラを挿入時、読み込み時、そして書き出し時のタイミングで自動計算します。 `VP RECOMPUTE FORMULAS` コマンドを使用すると、任意のタイミングで強制的に計算を実行することができます(例: フォーミュラに変更が加えられた場合、またはフォーミュラがデータベースへの呼び出しを格納している場合など)。 コマンドは [VP FLUSH COMMANDS](vp-flush-commands.md) コマンドを実行することで、実行保留されていたコマンドをすべて実行し、コマンドバッファをクリアします。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

> `VP RECOMPUTE FORMULAS` コマンドを使用する前に [VP SUSPEND COMPUTING](vp-suspend-computing.md)コマンドが実行されていないようにしてください。

#### 例題

ワークブック内の全フォーミュラを更新します:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### 参照

[VP RESUME COMPUTING](vp-resume-computing.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
