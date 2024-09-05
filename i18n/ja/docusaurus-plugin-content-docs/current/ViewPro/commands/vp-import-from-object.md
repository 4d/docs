---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| 引数         | 型      |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |                  |
| viewPro    | オブジェクト | -> | 4D View Pro オブジェクト      | <!-- END REF --> |

#### 説明

`VP IMPORT FROM OBJECT` コマンドは、<!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに *viewPro* の 4D View Pro オブジェクトを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは読み込んだオブジェクトのデータで置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*viewPro* には有効な 4D View Pro オブジェクトを渡します。 このオブジェクトは手動で作成するほか、[VP Export to object](vp-export-to-object.md) を使って取得することができます。 オブジェクトについての詳細は [4D View Pro オブジェクト](../configuring.md#4d-view-pro-オブジェクト) を参照ください。

*viewPro* オブジェクトが無効な場合には、エラーが返されます。

#### 例題

オブジェクトフィールドに保存してあるスプレッドシートを読み込みます:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### 参照

[VP Export to object](vp-export-to-object.md)
