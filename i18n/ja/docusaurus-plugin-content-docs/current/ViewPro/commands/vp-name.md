---
id: vp-name
title: VP Name
---

<!-- REF #_method_.VP Name.Syntax -->

**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *sheet* : Integer }  ) : Object <!-- END REF -->

<!-- REF #_method_.VP Name.Params -->

| 引数         | 型      |    | 説明                                      |                  |
| ---------- | ------ | -- | --------------------------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                 |                  |
| rangeName  | テキスト   | -> | 既存のレンジ名                                 |                  |
| sheet      | 整数     | -> | レンジの場所 (省略時はカレントシート) |                  |
| 戻り値        | オブジェクト | <- | rangeName のレンジオブジェクト                    | <!-- END REF --> |

#### 説明

`VP Name` コマンドは、<!-- REF #_method_.VP Name.Summary -->命名レンジを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*rangeName* には、既存のセルレンジ名を渡します。

任意の *sheet* 引数として、*rangeName* のレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートあるいはワークブック全体を明示的に選択することができます:

- `vk current sheet`
- `vk workbook`

#### 例題

"Total" という名前のレンジに値を渡します:

```4d
// name the B5 cell as Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";"Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

#### 参照

[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP ALL](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Get names](vp-get-names.md)<br/>
[VP REMOVE NAME](vp-remove-name.md)<br/>
[VP Row](vp-row.md)
