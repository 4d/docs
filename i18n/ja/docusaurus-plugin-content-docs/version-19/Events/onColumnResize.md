---
id: onColumnResize
title: On Column Resize
---

| コード | 呼び出し元                                                                                                                                                      | 定義                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 33  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | ユーザーのマウス操作によって、またはフォームウィンドウのリサイズによって、カラムの幅が変更された |


## 説明

### リストボックス

このイベントは、ユーザーによってリストボックスの列幅が変更されたときに生成されます。 このイベントは "ライブ" にトリガーされます。つまり、対象となるリストボックスあるいはカラムがリサイズされている間はずっと継続して送信されつづけます。 リサイズはユーザーによって手動でおこなわれるか、あるいはフォームウィンドウ自身のリサイズの結果リストボックスとそのカラムがリサイズされる場合も含みます (手動によるフォームのリサイズおよび `RESIZE FORM WINDOW` コマンドを使用したリサイズ)。

> [余白カラム](FormObjects/propertiesResizingOptions.html#余白カラムについて) がリサイズされた場合には、`On Column Resize` イベントはトリガーされません

### 4D View Pro

このイベントはカラムの幅がユーザーによって変更されたときに生成されます。 このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | 型       | 説明                                                  |
| ----------- | ------- | --------------------------------------------------- |
| code        | longint | On Column Resize                                    |
| description | text    | "On Column Resize"                                  |
| objectName  | text    | 4D View Pro エリア名                                    |
| sheetName   | text    | イベントが発生したシート名                                       |
| range       | object  | 幅が変更されたカラムのセルレンジ                                    |
| header      | boolean | 行ヘッダーカラム (最初のカラム) がリサイズされた場合には true、それ以外の場合には false |

#### 例題

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```