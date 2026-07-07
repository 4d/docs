---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<details><summary>履歴</summary>

| リリース  | 内容                 |
| ----- | ------------------ |
| 20 R9 | *paramObj* 引数のサポート |

</details>

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object { ; *paramObj* : Object} } ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

<div class="no-index">

| 引数         | 型      |    | 説明                                   |
| ---------- | ------ | -- | ------------------------------------ |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名              |
| viewPro    | Object | -> | 4D View Pro オブジェクト                   |
| paramObj   | Object | -> | (オプション) 読み込みオプション |

</div>
<!-- END REF -->

## 説明

`VP IMPORT FROM OBJECT` コマンドは、<!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに *viewPro* の 4D View Pro オブジェクトを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは読み込んだオブジェクトのデータで置換されます。 エリア内に挿入されていたデータがあれば、それらは読み込んだオブジェクトのデータで置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。 存在しない名前を渡した場合、エラーが返されます。

*viewPro* には有効な 4D View Pro オブジェクトを渡します。 このオブジェクトは手動で作成するほか、[VP Export to object](vp-export-to-object.md) を使って取得することができます。 オブジェクトについての詳細は [4D View Pro オブジェクト](../configuring.md#4d-view-pro-オブジェクト) を参照ください。 このオブジェクトは手動で作成するほか、[VP Export to object](vp-export-to-object.md) を使って取得することができます。 オブジェクトについての詳細は [4D View Pro オブジェクト](../configuring.md#4d-view-pro-オブジェクト) を参照ください。

*viewPro* オブジェクトが無効な場合には、エラーが返されます。

*paramObj* 引数には、以下のプロパティを渡すことができます:

| プロパティ   | 型                           | 説明                                                                                                                                                                                                                                                                                                                                               |
| ------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula | 4D.Function | (任意) オブジェクトがロードされ、全ての4Dカスタムファンクションが応答したときに実行されるコールバックファンクション。 [コールバックメソッド (フォーミュラ) の渡し方](vp-export-document.md#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。 (必須) 書き出しが完了した際に呼び出されるコールバックメソッド名。 [コールバックメソッド (フォーミュラ) の渡し方](vp-export-document.md#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。 |

コールバックメソッドでは、以下のパラメーターを使用することができます:

| 引数     |                               | 型       | 説明                                   |
| ------ | ----------------------------- | ------- | ------------------------------------ |
| param1 |                               | Text    | 4D View Pro エリアのオブジェクト名              |
| param2 |                               | Text    | 互換性のために予約済みで、この引数は常に空です              |
| param3 |                               | Object  | コマンドの *paramObj* 引数への参照              |
| param4 |                               | Object  | メソッドから返されるステータスメッセージを格納したオブジェクト      |
|        | .success      | Boolean | 読み込みが成功した場合には`True`、それ以外の場合には`False` |
|        | .errorCode    | Integer | エラーコード                               |
|        | .errorMessage | Text    | エラーメッセージ                             |

:::note

属性で指定されたコールバック関数は、読み込まれたコンテンツ内の全ての[4D カスタムファンクション](../formulas.md#4dファンクション) がその計算を終えた後にトリガーされます。 これにより、ドキュメントの変更や書き出しなどの依存処理は、全てのフォーミュラベースの計算が完全に解決した後に初めて実行されることが保証されます。 これにより、ドキュメントの変更や書き出しなどの依存処理は、全てのフォーミュラベースの計算が完全に解決した後に初めて実行されることが保証されます。

:::

## 例題

以前はオブジェクトフィールドに保存されていたスプレッドシートを読み込み、全ての4D カスタムファンクションが応答し終わったあとにコールバック関数をトリガーしたい場合を考えます:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)

VP IMPORT FROM OBJECT("ViewProArea1"; [VPWorkBooks]SPBook; {formula: Formula(onImportComplete)})
```

```4d
// 'onImportComplete' メソッド
#DECLARE($name : Text; $path : Text; $paramObj : Object; $status : Object)
   ALERT("The document has been imported, and all custom functions have finished processing.")
```

## 参照

[VP Export to object](vp-export-to-object.md)