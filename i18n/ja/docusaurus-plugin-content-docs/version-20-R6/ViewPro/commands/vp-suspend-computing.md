---
id: vp-suspend-computing
title: VP SUSPEND COMPUTING
---

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->

**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | Text | -> | 4D View Pro フォームオブジェクト名 | <!-- END REF --> |

#### 説明

`VP SUSPEND COMPUTING` コマンドは、<!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->*vpAreaName* 引数で指定したエリア内の計算をすべて停止します<!-- END REF -->。 このコマンドは、4D View Pro エリア内の計算を停止したい場合、たとえばフォーミュラを手動で編集している際に、最終的な編集が完了するまでエラーが発生しないようにするのに便利です。

このコマンドは 4D View Pro 内の計算機能を停止します。 すでに計算済みのフォーミュラはそのままですが、`VP SUSPEND COMPUTING` の実行後に追加されたフォーミュラは計算されません。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

> 4D View Pro 計算機能は停止/再開アクションを内部的にカウントしています。 そのため、`VP SUSPEND COMPUTING` コマンドの実行数は、`VP RESUME COMPUTING` コマンドの実行数と釣り合っていなければなりません。 計算が停止されていた間に編集された部分に影響を受けるフォーミュラは、 VP RESUME COMPUTING コマンドが実行された時に再計算されます。

#### 例題

ユーザーが計算を停止/再開できるように、フォーム上に 2つボタンを追加します:

![](../../assets/en/ViewPro/cmd_vpStopCalculations.PNG)

計算停止ボタンのコード:

```4d
 // ユーザーが情報を入力する間、計算を停止します
 If(FORM Event.code=On Clicked)

    VP SUSPEND COMPUTING("ViewProArea")

 End if
```

```4d
// 計算再開ボタンのコード:
If(FORM Event.code=On Clicked)

    VP RESUME COMPUTING("ViewProArea")

End if
```

#### 参照

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP RESUME COMPUTING](vp-resume-computing.md)
