---
id: vp-get-workbook-options
title: VP Get workbook options
---

###

<!-- REF #_method_.VP Get workbook options.Syntax -->

**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get workbook options.Params -->

| 引数         | 型      |                             | 説明                      |                  |
| ---------- | ------ | --------------------------- | ----------------------- | ---------------- |
| vpAreaName | Text   | ->                          | 4D View Pro フォームオブジェクト名 |                  |
| 戻り値        | Object | <- | ワークブックオプションを格納したオブジェクト  | <!-- END REF --> |

#### 説明

`VP Get workbook options` コマンドは、<!-- REF #_method_.Get workbook options.Summary -->
*vpAreaName* で指定したエリアのワークブックオプションをすべて格納したオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

返されるオブジェクトには、ワークブック内のワークブックオプションの値 (デフォルト値および変更値) がすべて格納されています。

ワークブックオプションの一覧については [`VP SET WORKBOOK OPTIONS` の説明](vp-set-workbook-options.md) を参照ください。

#### 例題

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### 参照

[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
