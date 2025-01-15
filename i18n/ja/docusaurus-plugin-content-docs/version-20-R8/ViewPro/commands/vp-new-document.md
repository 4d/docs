---
id: vp-new-document
title: VP NEW DOCUMENT
---

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->

**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | Text | -> | 4D View Pro フォームオブジェクト名 | <!-- END REF --> |

#### 説明

`VP NEW DOCUMENT` コマンドは、<!-- REF #_method_.VP NEW DOCUMENT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに、新規のデフォルトドキュメントを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは新規の空ドキュメントによって置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

#### 例題

"myVPArea" フォームオブジェクトに空ドキュメントを表示します:

```4d
VP NEW DOCUMENT("myVPArea")
```

#### 参照

[VP IMPORT DOCUMENT](vp-import-document.md)

---
