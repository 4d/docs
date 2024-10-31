---
id: vp-set-frozen-panes
title: VP SET FROZEN PANES
---

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->

**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

| 引数         | 型      |    | 説明                                             |
| ---------- | ------ | -- | ---------------------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                        |
| paneObj    | オブジェクト | -> | 固定化されたカラムと行についての情報を格納したオブジェクト                  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |

<!-- END REF -->

#### 説明

`VP SET FROZEN PANES` コマンドは、<!-- REF #_method_.VP SET FROZEN PANES.Summary -->*vpAreaName* 引数で指定した View Pro エリア内の、*paneObj* 引数のカラムと行の固定化ステータスを設定します<!-- END REF -->。 固定化されたカラムと行は固定された位置に表示され続け、ドキュメントの他の部分がスクロールされても移動しません。 そのカラムと行が固定化されていることを示すために、太い実線が表示されます。 実線の位置は、固定化されたカラムまたは行がシートのどこにあるかによって変わります:

- **左または右にあるカラム**: シートの左側にあるカラムについては、実線は最後に固定化されたカラム (最も右のカラム) の右側に表示されます。 シートの右側に表示されているカラムについては、実線は最初に固定化されたカラム (最も左のカラム) の左側に表示されます。
- **上または下にある行**: シートの上部にある行については、実線は最後に固定化された行 (最も下の行) の下側に表示されます。 シートの下部に表示されている行については、実線は最初に固定化された行 (最も上の行) の上側に表示されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*paneObj* には、固定化するカラムと行を定義するオブジェクトを渡します。 以下のカラムまたは行のプロパティの値にゼロを設定すると、そのプロパティをリセット (固定解除) します。 プロパティが 0以下の値に設定された場合、コマンドは何もしません。 以下のものを渡すことができます:

| プロパティ               | 型  | 説明                 |
| ------------------- | -- | ------------------ |
| columnCount         | 整数 | シートの左側にある固定化されたカラム |
| trailingColumnCount | 整数 | シートの右側にある固定化されたカラム |
| rowCount            | 整数 | シートの上側にある固定化された行   |
| trailingRowCount    | 整数 | シートの下側にある固定化された行   |

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

- `vk current sheet`

#### 例題

左側の最初の 3つのカラム、右側にある 2つのカラム、そして最初の行を固定化します:

```4d
C_OBJECT($panes)

$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1

VP SET FROZEN PANES("ViewProArea";$panes)
```

![](../../assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

#### 参照

[VP Get frozen panes](vp-get-frozen-panes.md)
