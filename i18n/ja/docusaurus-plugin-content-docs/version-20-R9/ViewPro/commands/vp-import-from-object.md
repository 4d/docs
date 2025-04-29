---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<details><summary>履歴</summary>

| リリース  | 内容                              |
| ----- | ------------------------------- |
| 20 R9 | Support of *paramObj* parameter |

</details>

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object { ; *paramObj* : Object} } ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| 引数         | 型      |    | 説明                                           |
| ---------- | ------ | -- | -------------------------------------------- |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名                      |
| viewPro    | Object | -> | 4D View Pro オブジェクト                           |
| paramObj   | Object | -> | (Optional) import options |

<!-- END REF -->

## 説明

`VP IMPORT FROM OBJECT` コマンドは、<!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに *viewPro* の 4D View Pro オブジェクトを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは読み込んだオブジェクトのデータで置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*viewPro* には有効な 4D View Pro オブジェクトを渡します。 このオブジェクトは手動で作成するほか、[VP Export to object](vp-export-to-object.md) を使って取得することができます。 オブジェクトについての詳細は [4D View Pro オブジェクト](../configuring.md#4d-view-pro-オブジェクト) を参照ください。

*viewPro* オブジェクトが無効な場合には、エラーが返されます。

In *paramObj*, you can pass the following property:

| プロパティ   | 型                           | 説明                                                                                                                                                                                                                                                        |
| ------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula | 4D.Function | (Optional) Callback function to be executed when the object is loaded and all 4D custom functions have responded. [コールバックメソッド (フォーミュラ) の渡し方](vp-export-document.md#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。 |

コールバックメソッドでは、以下のパラメーターを使用することができます:

| 引数     |                               | 型       | 説明                                                         |
| ------ | ----------------------------- | ------- | ---------------------------------------------------------- |
| param1 |                               | Text    | 4D View Pro エリアのオブジェクト名                                    |
| param2 |                               | Text    | Reserved for compatibility, this parameter is always empty |
| param3 |                               | Object  | コマンドの *paramObj* 引数への参照                                    |
| param4 |                               | Object  | メソッドから返されるステータスメッセージを格納したオブジェクト                            |
|        | .success      | Boolean | `True` if import was successful, `False` otherwise         |
|        | .errorCode    | Integer | エラーコード                                                     |
|        | .errorMessage | Text    | エラーメッセージ                                                   |

:::note

The callback function specified in the `formula` attribute is triggered after all [4D custom functions](../formulas.md#4d-functions) within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

:::

## 例題

You want to import a spreadsheet that was previously saved in an object field, and trigger a callback function after all 4D custom functions have responded:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)

VP IMPORT FROM OBJECT("ViewProArea1"; [VPWorkBooks]SPBook; {formula: Formula(onImportComplete)})
```

```4d
// Method 'onImportComplete'
#DECLARE($name : Text; $path : Text; $paramObj : Object; $status : Object)
   ALERT("The document has been imported, and all custom functions have finished processing.")
```

## 参照

[VP Export to object](vp-export-to-object.md)