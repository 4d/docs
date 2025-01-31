---
id: vp-show-cell
title: VP SHOW CELL
---

<!-- REF #_method_.VP SHOW CELL.Syntax -->

**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Integer; *hPos* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SHOW CELL.Params -->

| 引数       | 型       |    | 説明                 |                  |
| -------- | ------- | -- | ------------------ | ---------------- |
| rangeObj | Object  | -> | レンジオブジェクト          |                  |
| vPos     | Integer | -> | セルあるいは行の縦方向の表示位置   |                  |
| hPos     | Integer | -> | セルあるいはカラムの横方向の表示位置 | <!-- END REF --> |

#### 説明

`VP SHOW CELL` コマンドは、<!-- REF #_method_.VP SHOW CELL.Summary -->*rangeObj* で指定したレンジの表示位置を変更します<!-- END REF -->。

*rangeObj* 引数には、表示位置を指定するセルのレンジオブジェクトを渡します。 *rangeObj* で指定したレンジの表示位置は、*vPos* および *hPos* 引数に従って縦・横に移動します。 *rangeObj* の縦方向の表示位置は *vPos* 引数で、横方向の表示位置は *hPos* 引数で指定します。

次のセレクターが利用可能です:

| セレクター                 | 説明                                                                                                                                                                                                       | *vPos* で利用可 | *hPos* で利用可 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| `vk position bottom`  | セルあるいは行の下辺に対する垂直揃え。                                                                                                                                                                                      | X           |             |
| `vk position center`  | 中央揃え。 セル・行・カラムの境界に対して位置を揃えます:<li>縦方向の表示位置 - セルあるいは行</li><li>横方向の表示位置 - セルあるいはカラム</li>                                                                                                    | X           | X           |
| `vk position left`    | セルあるいはカラムの左辺に対する水平揃え。                                                                                                                                                                                    |             | X           |
| `vk position nearest` | 一番近い基準に対する位置揃え (上、下、左、右、中央)。 セル・行・カラムの境界に対して位置を揃えます:<li>縦方向の表示位置 (上、中央、下) - セルあるいは行 </li><li>横方向の表示位置 (左、中央、右) - セルあるいはカラム</li> | X           | X           |
| `vk position right`   | セルあるいはカラムの右辺に対する水平揃え。                                                                                                                                                                                    |             | X           |
| `vk position top`     | セルあるいは行の上辺に対する垂直揃え。                                                                                                                                                                                      | X           |             |

> このコマンドは、表示位置の変更が可能な場合にのみ動作します。 たとえば、*rangeObj* が現在のシートの A1 セル (先頭カラムと先頭行) の場合、すでに縦および横方向の限界に接している (つまり、上にも左にもこれ以上スクロールできない) ため、表示位置を変更しても何も変わりません。 *rangeObj* が C3 セルの場合に、表示位置を中央または右下に変えても同じことが言えます。 表示は変更されません。

#### 例題

AY カラムの 51 行目のセルを 4D View Pro エリアの中央に表示します:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
// セルが表示されるよう、表示位置を調整します
VP SHOW CELL($displayCell;vk position center;vk position center)
```

結果:

![](../../assets/en/ViewPro/cmd_vpShowCell1.PNG)

先ほどのコードの縦および横方向のセレクターを変更して、AY51 セルを 4D View Pro エリアの右上に表示します:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
  // セルが表示されるよう、表示位置を調整します
VP SHOW CELL($displayCell;vk position top;vk position right)
```

結果:

![](../../assets/en/ViewPro/cmd_vpShowCell2.PNG)

#### 参照

[VP Cell](vp-cell.md)<br/>
[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP RESET SELECTION](vp-reset-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)
