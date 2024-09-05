---
id: vp-set-column-count
title: VP SET COLUMN COUNT
---

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->

**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Integer { , *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

| 引数          | 型    |    | 説明                                             |                  |
| ----------- | ---- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名                        |                  |
| columnCount | 整数   | -> | カラム数                                           |                  |
| sheet       | 整数   | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP SET COLUMN COUNT` コマンドは、<!-- REF #_method_.VP SET COLUMN COUNT.Summary -->*vpAreaName* 引数内にあるカラムの総数を定義します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*columnCount* には、カラムの総数を渡します。 *columnCount* 引数は 0 より大きい値でなくてはなりません。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、*columnCount* が適用されるスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

- `vk current sheet`

#### 例題

以下のコードは 4D View Pro エリア内に 5つのカラムを定義します:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### 参照

[VP Get column count](vp-get-column-count.md)<br/>
[VP Get row count](vp-get-row-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
