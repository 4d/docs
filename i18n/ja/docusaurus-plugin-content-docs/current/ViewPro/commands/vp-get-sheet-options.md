---
id: vp-get-sheet-options
title: VP Get sheet options
---

<!-- REF #_method_.VP Get sheet options.Syntax -->

**VP Get sheet options** ( _vpAreaName_ : Text {; _sheet_ : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get sheet options.Params -->

| 引数         | タイプ     |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro エリアフォームオブジェクト名                     |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Object  | <- | シートオプションのオブジェクト                                | <!-- END REF --> |

#### 説明

`VP Get sheet options` コマンドは、<!-- REF #_method_.VP Get sheet options.Summary -->_vpAreaName_ で指定したエリア内の、カレントのシートオプションを格納したオブジェクトを返します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の _sheet_ 引数として、シートのインデックス (0 起点) を渡すことで、スプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 返されるオブジェクト

コマンドは、利用可能なシートオプションのカレント値をすべて格納したオブジェクトを返します。 オプションの値は、ユーザーあるいは [VP SET SHEET OPTIONS](vp-set-sheet-options.md) コマンドによって変更される可能性があります。

オプション一覧については、[シートオプション](../configuring.md#シートオプション) を参照ください。

#### 例題

```4d
$options:=VP Get sheet options("ViewProArea")
If($options.colHeaderVisible) // カラムヘッダーが表示状態の場合
    ... // なんらかの処理
End if
```

#### 参照

[4D VIEW PRO シートオプション](../configuring.md#シートオプション)<br/>
[VP SET SHEET OPTIONS](vp-set-sheet-options.md)
