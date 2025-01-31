---
id: onHeaderClick
title: On Header Click
---

| コード | 呼び出し元                                                                                                                                                      | 定義                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 42  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | リストボックスの列ヘッダーでクリックがおこなわれた |

## 説明

### リストボックス

このイベントは、リストボックスの列ヘッダーでクリックがおこなわれると生成されます。 この場合 `Self` コマンドを使用すればクリックされた列ヘッダーを知ることができます。

リストボックスで [ソート可](FormObjects/properties_Action.md#ソート可) プロパティが選択されている場合、`$0` に 0 または -1 を渡して標準の並べ替えをおこなうかどうか指定できます:

- `$0 = 0` の場合、標準の並べ替えがおこなわれます。
- `$0 = -1` の場合、標準の並べ替えはおこなわれず、ヘッダーには並べ替え矢印は表示されません。 開発者は 4Dランゲージを使用して、カスタマイズされた条件に基づく並べ替えを実行できます。

リストボックスで [ソート可](FormObjects/properties_Action.md#ソート可) プロパティが選択されていない場合、`$0` は使用されません。

### 4D View Pro

このイベントは、4D View Pro ドキュメント内のカラムヘッダーまたは行ヘッダーでクリックが発生したときに生成されます。 このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | 型       | 説明                                                                                                                                                                                                                       |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code        | longint | 42                                                                                                                                                                                                                       |
| description | テキスト    | "On Header Click"                                                                                                                                                                                                        |
| objectName  | テキスト    | 4D View Pro エリア名                                                                                                                                                                                                         |
| sheetName   | テキスト    | イベントが発生したシート名                                                                                                                                                                                                            |
| range       | object  | セルのレンジ                                                                                                                                                                                                                   |
| sheetArea   | longint | イベントが発生したシートの場所:<br/><li>0: カラム文字ヘッダー / 行番号のヘッダーの間の交差領域 (シートの左上)</li><li>1：カラムヘッダー (カラム文字を示す領域)</li><li>2：行ヘッダー (行番号を示す領域)</li> |

#### 例題

```4d
 If(FORM Event.code=On Header Click)
    Case of
       :(FORM Event.sheetArea=1)
          $values:=VP Get values(FORM Event.range)
       :(FORM Event.sheetArea=2)
          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))
       :(FORM Event.sheetArea=0)
          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\
          New object("color";"#800080";"style";vk line style thick)))
    End case
 End if
```
