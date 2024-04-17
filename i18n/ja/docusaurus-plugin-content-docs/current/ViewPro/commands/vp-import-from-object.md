---
id: vp-import-from-object
title: VP IMPORT FROM OBJECT
---

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->

**VP IMPORT FROM OBJECT** ( _vpAreaName_ : Text  { ; _viewPro_ : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| 引数         | タイプ    |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名 |                  |
| viewPro    | Object | -> | 4D View Pro オブジェクト      | <!-- END REF --> |

#### 説明

`VP IMPORT FROM OBJECT` コマンドは、<!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->_vpAreaName_ で指定した 4D View Pro エリアに _viewPro_ の 4D View Pro オブジェクトを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは読み込んだオブジェクトのデータで置換されます。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

_viewPro_ には有効な 4D View Pro オブジェクトを渡します。 このオブジェクトは手動で作成するほか、[VP Export to object](vp-export-to-object.md) を使って取得することができます。 オブジェクトについての詳細は [4D View Pro オブジェクト](../configuring.md#4d-view-pro-オブジェクト) を参照ください。

_viewPro_ オブジェクトが無効な場合には、エラーが返されます。

#### 例題

オブジェクトフィールドに保存してあるスプレッドシートを読み込みます:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### 参照

[VP Export to object](vp-export-to-object.md)
