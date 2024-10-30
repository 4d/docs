---
id: vp-set-formulas
title: VP SET FORMULAS
---

<!-- REF #_method_.VP SET FORMULAS.Syntax -->

**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

| 引数          | 型      |    | 説明            |                  |
| ----------- | ------ | -- | ------------- | ---------------- |
| rangeObj    | オブジェクト | -> | セルレンジオブジェクト   |                  |
| formulasCol | コレクション | -> | フォーミュラのコレクション | <!-- END REF --> |

#### 説明

`VP SET FORMULAS` コマンドは、<!-- REF #_method_.VP SET FORMULAS.Summary -->指定のセルレンジから開始してフォーミュラのコレクションを割り当てていきます<!-- END REF -->。

*rangeObj* には、フォーミュラを割り当てたいセルのレンジ ([VP Cell](vp-cell.md) で作成されたレンジ) を渡します。 *rangeObj* のレンジが複数レンジを指定している場合、最初のレンジのみが使用されます。

*formulasCol* 引数は 2次元構造のコレクションです:

- 第1レベルのコレクションは、フォーミュラのサブコレクションを格納しています。 それぞれのサブコレクションは行を定義します。
- それぞれのサブコレクションは行におけるセルの値を定義します。 値は、セルに割り当てるフォーミュラを格納したテキスト要素でなくてはなりません。

> フォーミュラが文字列の場合、数値の区切り文字にピリオド `.` そして引数の区切り文字にカンマ `,` を使用します。
> 4Dメソッドを使用する場合、そのメソッドは [`SET ALLOWED METHODS`](vp-set-allowed-method.md) コマンドで許可されている必要があります。

*rangeObj* 内のフォーミュラは、空の文字列 ("") で置き換えることで削除することができます。

#### 例題 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // 一行目
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // 二行目


VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // フォーミュラをセルに設定します
```

*myMethod*:

```4d
$0:=$1*3.33
```

![](../../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

#### 例題 2

フォーミュラを削除します:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // 一行目
$formulas.push(New collection("";"")) // 二行目

VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // セルに割り当てます
```

#### 参照

[VP Get Formulas](vp-get-formulas.md)<br/>
[VP GET VALUES](vp-get-values.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET VALUES](vp-set-values.md)
