---
id: onAfterEdit
title: On After Edit
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                         | 定義                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| 45  | [4D View Pro エリア](../FormObjects/viewProArea_overview.md) - [4D Write Pro エリア](../FormObjects/writeProArea_overview.md) - [コンボボックス](../FormObjects/comboBox_overview.md) - フォーム - [入力](../FormObjects/input_overview.md) - [階層リスト](../FormObjects/list_overview.md) - [リストボックス](../FormObjects/listbox_overview.md) - [リストボックス列](../FormObjects/listbox_overview.md#リストボックス列) | フォーカスのある入力可能オブジェクトの内容が更新された |

## 説明

### 一般的なケース

このイベントは、キーボード入力可能なオブジェクトへのデータ入力を最も低レベルでフィルターするために使用できます。

このイベントは、変更がおこなわれた方法に関係なく、入力可能オブジェクトの内容が変更されるたびに生成されます。*つまり*:

- ペーストやカット、削除、キャンセルなどの標準の編集アクション
- 値のドロップ (ペーストと同様のアクション)
- ユーザーがおこなったキーボードからの入力。この場合、`On After Edit` イベントは [`On Before Keystroke`](onBeforeKeystroke.md) と [`On After Keystroke`](onAfterKeystroke.md) イベントの後に生成されます。
- ユーザーアクションをシミュレートするランゲージコマンドによる変更 (例: `POST KEY`)。

`On After Edit` イベント内において、入力テキストは [`Get edited text`](https://doc.4d.com/4dv19/help/command/ja/page655.html) コマンドによって返されます。

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

| プロパティ     | 型      | 説明                        |
| --------- | ------ | ------------------------- |
| fromRange | object | ソースセルレンジ (ドラッグされる範囲) のレンジ |
| toRange   | object | 移行先セルレンジ (ドロップされる場所) のレンジ |
| copy      | ブール    | ソースレンジがコピーされたかどうかを表します    |
| insert    | ブール    | ソースレンジが挿入されたかどうかを表します     |

#### action = DragFillBlock

| プロパティ     | 型      | 説明               |
| --------- | ------ | ---------------- |
| fillRange | object | 自動入力のために使用されるレンジ |
 autoFillType|longint|自動入力のために使用される値<li>0: 全データ (値、書式、フォーミュラ) がセルに入力された</li><li>1: 自動シーケンシャルデータがセルに入力された</li><li>2: 書式のみがセルに入力された</li><li>3: 値のみがセルに入力され、書式は入力されていない</li><li>4: セルから値が除去された</li><li>5: セルは自動的に入力された</li>| |fillDirection|longint|自動入力の方向<li>0: 左側のセルに自動入力された</li><li>1: 右側のセルに自動入力された</li><li>2: 上側のセルに自動入力された</li><li>3: 下側のセルに自動入力された</li>|

#### action = formulaChanged

| プロパティ   | 型      | 説明          |
| ------- | ------ | ----------- |
| range   | object | セルのレンジ      |
| formula | text   | 入力されたフォーミュラ |

#### action = clipboardPasted

| プロパティ       | 型       | 説明                                                                                                                                                                                    |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | object  | セルのレンジ                                                                                                                                                                                |
| pasteOption | longint | クリップボードから何をペーストされたかを表します:<li>0: すべて (値、書式、フォーミュラ) がペーストされた</li><li>1: 値のみがペーストされた</li><li>2: 書式のみがペーストされた</li><li>3: フォーミュラのみがペーストされた</li><li>4: 値と書式がペーストされた (フォーミュラはペーストされなかった)</li><li>5: フォーミュラと書式のみがペーストされた (値はペーストされなかった)</li> |
| pasteData   | object  | クリップボードからペーストされるデータ<li>"text" (テキスト): クリップボードからのテキスト</li><li>"html" (テキスト): クリップボードからの HTML</li>                                                                                                               |

#### 例題

以下は `On After Edit` イベントを管理する例です:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
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
