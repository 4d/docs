---
id: onAfterEdit
title: On After Edit
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                          | 定義                          |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| 45  | [4D View Pro エリア](../FormObjects/viewProArea_overview.md) - [4D Write Pro エリア](../FormObjects/writeProArea_overview.md) - [コンボボックス](FormObjects/comboBox_overview.md) - フォーム - [入力](FormObjects/input_overview.md) - [階層リスト](FormObjects/list_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | フォーカスのある入力可能オブジェクトの内容が更新された |

## 説明

### 一般的なケース

このイベントは、キーボード入力可能なオブジェクトへのデータ入力を最も低レベルでフィルターするために使用できます。

このイベントは、変更がおこなわれた方法に関係なく、入力可能オブジェクトの内容が変更されるたびに生成されます。*つまり*:

- ペーストやカット、削除、キャンセルなどの標準の編集アクション
- 値のドロップ (ペーストと同様のアクション)
- ユーザーがおこなったキーボードからの入力。この場合、`On After Edit` イベントは [`On Before Keystroke`](onBeforeKeystroke.md) と [`On After Keystroke`](onAfterKeystroke.md) イベントの後に生成されます。
- ユーザーアクションをシミュレートするランゲージコマンドによる変更 (例: `POST KEY`)。

`On After Edit` イベント内において、入力テキストは [`Get edited text`](../commands-legacy/get-edited-text.md) コマンドによって返されます。

### 4D View Pro

`FORM Event` によって返されるオブジェクトには以下のプロパティが格納されます:

| プロパティ       | 型       | 説明                                                                                                  |
| ----------- | ------- | --------------------------------------------------------------------------------------------------- |
| code        | longint | On After Edit                                                                                       |
| description | text    | "On After Edit"                                                                                     |
| objectName  | text    | 4D View Pro エリア名                                                                                    |
| sheetName   | text    | イベントが発生したシート名                                                                                       |
| action      | text    | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

`action` プロパティの値に応じて、[イベントオブジェクト](overview.md#イベントオブジェクト) には追加のプロパティが含まれます。

#### action = editChange

| プロパティ       | 型       | 説明           |
| ----------- | ------- | ------------ |
| range       | object  | セルのレンジ       |
| editingText | variant | カレントエディターでの値 |

#### action = valueChanged

| プロパティ    | 型       | 説明       |
| -------- | ------- | -------- |
| range    | object  | セルのレンジ   |
| oldValue | variant | 変更前のセルの値 |
| newValue | variant | 変更後のセルの値 |

#### action = DragDropBlock

| プロパティ     | 型       | 説明                                           |
| --------- | ------- | -------------------------------------------- |
| fromRange | object  | ソースセルレンジ (ドラッグされる範囲) のレンジ |
| toRange   | object  | 移行先セルレンジ (ドロップされる場所) のレンジ |
| copy      | boolean | ソースレンジがコピーされたかどうかを表します                       |
| insert    | boolean | ソースレンジが挿入されたかどうかを表します                        |

#### action = DragFillBlock

| プロパティ         | 型       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fillRange     | object  | 自動入力のために使用されるレンジ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| autoFillType  | longint | Value used for the fill.<li>0: Cells are filled with all data (values, formatting, and formulas)</li><li>1: Cells are filled with automatically sequential data</li><li>2: Cells are filled with formatting only</li><li>3: Cells are filled with values but not formatting</li><li>4: Values are removed from the cells</li><li>5: Cells are filled automatically</li> |
| fillDirection | longint | Direction of the fill.<li>0: The cells to the left are filled</li><li>1: The cells to the right are filled</li><li>2: The cells above are filled</li><li>3: The cells below are filled</li>                                                                                                                                                                                                                                |

#### action = formulaChanged

| プロパティ   | 型      | 説明          |
| ------- | ------ | ----------- |
| range   | object | セルのレンジ      |
| formula | text   | 入力されたフォーミュラ |

#### action = clipboardPasted

| プロパティ       | 型       | 説明                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | object  | セルのレンジ                                                                                                                                                                                                                                                                                                                                                                                                        |
| pasteOption | longint | クリップボードから何をペーストされたかを表します:<li>0: すべて (値、書式、フォーミュラ) がペーストされた</li><li>1: 値のみがペーストされた</li><li>2: 書式のみがペーストされた</li><li>3: フォーミュラのみがペーストされた</li><li>4: 値と書式がペーストされた (フォーミュラはペーストされなかった)</li><li>5: フォーミュラと書式のみがペーストされた (値はペーストされなかった)</li> |
| pasteData   | object  | クリップボードからペーストされるデータ<li>"text" (テキスト): クリップボードからのテキスト</li><li>"html" (テキスト): クリップボードからの HTML</li>                                                                                                                                                                                                                                        |

#### 例題

以下は `On After Edit` イベントを管理する例です:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("警告: 値を変更しました。\  
       元の値: "+String(FORM Event.oldValue)+\  
       " 変更後の値: "+String(FORM Event.newValue)+"!")
    End if
 End if
```

上記のコードにより生成されたイベントオブジェクトは、以下のような形式をしています:

```
{

"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
```
