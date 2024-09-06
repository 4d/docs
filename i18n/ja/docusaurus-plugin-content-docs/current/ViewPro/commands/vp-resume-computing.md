---
id: vp-resume-computing
title: VP RESUME COMPUTING
---

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->

**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | Text | -> | 4D View Pro フォームオブジェクト名 | <!-- END REF --> |

#### 説明

`VP RESUME COMPUTING` コマンドは、<!-- REF #_method_.VP RESUME COMPUTING.Summary --> *vpAreaName* 引数で指定したエリア内の計算を再開します<!-- END REF -->。

このコマンドは 4D View Pro 内の計算機能を再開します。 計算停止中におこなった編集に影響されたフォーミュラは更新され、`VP RESUME COMPUTING` 実行後に追加されるフォーミュラは計算されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

> 4D View Pro 計算機能は停止/再開アクションを内部的にカウントしています。 そのため、`VP RESUME COMPUTING` コマンドの実行数は、[VP SUSPEND COMPUTING](vp-suspend-computing.md) コマンドの実行数と釣り合っていなければなりません。

#### 例題

[VP SUSPEND COMPUTING](vp-suspend-computing.md) の例題を参照ください。

#### 参照

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
