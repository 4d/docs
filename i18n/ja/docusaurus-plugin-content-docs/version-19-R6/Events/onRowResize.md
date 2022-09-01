---
id: onRowResize
title: On Row Resize
---

| コード | 呼び出し元                                                  | 定義                     |
| --- | ------------------------------------------------------ | ---------------------- |
| 60  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) | 行の高さがユーザーのマウスによって変更された |


## 詳細

このイベントは、4D View Pro ドキュメント内で行の高さがユーザーによって変更されたときに生成されます。 このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | タイプ     | 詳細                                                |
| ----------- | ------- | ------------------------------------------------- |
| code        | longint | 60                                                |
| description | text    | "On Row Resize"                                   |
| objectName  | text    | 4D View Pro エリア名                                  |
| sheetName   | text    | イベントが発生したシート名                                     |
| range       | object  | 高さが変更された行のセルレンジ                                   |
| header      | boolean | カラムヘッダー行 (最初の行) がリサイズされた場合には true、それ以外の場合には false |

#### 例題

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```