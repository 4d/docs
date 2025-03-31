---
id: vp-get-table-column-attributes
title: VP Get column attributes
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP Get table column attributes.Syntax -->

**VP Get table column attributes** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table column attributes.Params -->

| 引数         | 型       |                             | 説明                                             |                  |
| ---------- | ------- | --------------------------- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名                        |                  |
| tableName  | Text    | ->                          | Table name                                     |                  |
| column     | Integer | ->                          | 表の列のインデックス                                     |                  |
| sheet      | Integer | ->                          | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Object  | <- | *column* の属性                                   | <!-- END REF --> |

#### 説明

`VP Get table column attributes` コマンドは、<!-- REF #_method_.VP Get table column attributes.Summary -->*tableName* で指定した表組みの *column* でインデックスを指定した列のカレント属性を返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*sheet* には、ターゲットシートのインデックスを渡します。 index が省略された場合、または -1 が渡された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

このコマンドは、*column* のカレント属性を格納するオブジェクトを返します:

| プロパティ               | 型    | 説明                                                 |
| ------------------- | ---- | -------------------------------------------------- |
| dataField           | テキスト | データコンテキストにおける、表の列のプロパティ名。 表組みが自動で表示されている場合は返されません。 |
| name                | テキスト | 表の列の名前。                                            |
| footerText          | テキスト | 列のフッター値                                            |
| footerFormula       | テキスト | 列のフッターのフォーミュラ。                                     |
| filterButtonVisible | ブール  | 列のフィルターボタンが表示されている場合には true、そうでない場合は false。        |

*tableName* に指定した名称の表組みが見つからない場合、または *column* に指定したインデックスが列数を超える場合には、コマンドは **null** を返します。

#### 例題

```4d
var $attributes : Object
$attributes:=VP Get table column attributes("ViewProArea"; $tableName; 1)
If ($attributes.dataField#"")
     ...
End if
```

#### 参照

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
