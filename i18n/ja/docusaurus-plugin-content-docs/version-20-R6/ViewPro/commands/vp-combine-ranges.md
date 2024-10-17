---
id: vp-combine-ranges
title: VP Combine ranges
---

<!-- REF #_method_.VP Combine ranges.Syntax -->

**VP Combine ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->

<!-- REF #_method_.VP Combine ranges.Params -->

| 引数            | 型      |                             | 説明                  |                  |
| ------------- | ------ | --------------------------- | ------------------- | ---------------- |
| rangeObj      | Object | ->                          | レンジオブジェクト           |                  |
| otherRangeObj | Object | ->                          | レンジオブジェクト           |                  |
| 戻り値           | Object | <- | 統合されたレンジを格納したオブジェクト | <!-- END REF --> |

#### 説明

`VP Combine Ranges` コマンドは、<!-- REF #_method_.VP Combine ranges.Summary -->2つ以上のレンジオブジェクトを統合した新しいレンジオブジェクトを返します<!-- END REF -->。 レンジはすべて同じ 4D View Pro エリア内のものでなくてはなりません。

*rangeObj* には、1つ目のレンジオブジェクトを渡します。

*otherRangeObj* には、*rangeObj* のレンジオブジェクトと統合させる他のレンジオブジェクトを渡します。

> このコマンドは *rangeObj* および *otherRangeObj* のオブジェクトを参照によって組み合わせます。

#### 例題

セル、カラム、行のレンジオブジェクトを、新規レンジオブジェクトにまとめます:

```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // カラム D
 $row:=VP Row("ViewProArea";9) // 行 10

 $combine:=VP Combine ranges($cell;$column;$row)
```

#### 参照

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
