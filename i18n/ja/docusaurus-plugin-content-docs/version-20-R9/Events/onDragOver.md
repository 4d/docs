---
id: onDragOver
title: On Drag Over
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 定義                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 21  | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | データがオブジェクト上にドロップされる可能性がある |

## 説明

`On Drag Over` イベントは、マウスポインターがオブジェクトの上を移動する時に、繰り返しドロップ先オブジェクトに送られます。  このイベントの応答として、開発者は通常、以下のことをおこないます:

- ペーストボード内にあるデータや署名を (`GET PASTEBOARD DATA` コマンドを使用して) 取得する。
- ペーストボードのデータの状態や型に基づき、ドラッグ＆ドロップの **受け付け** または **拒否** をおこないます。

ドラッグを **受け付ける** には、ドロップ先のオブジェクトメソッドが 0 (ゼロ) を返さなければなりません。
ドラッグを **拒否** するには、オブジェクトメソッドが -1 (マイナス1) を返さなければなりません。
`On Drag Over` イベント中、4D はこのオブジェクトメソッドを関数として扱います。 結果が返されない場合には、4D はドラッグが受け付けられたものと認識します。

ドラッグを受け入れると、ドロップ先オブジェクトがハイライトされます。 ドラッグを拒否した場合、ドロップ先オブジェクトはハイライトされません。 ドラッグを受け付けることは、ドラッグされたデータがドロップ先オブジェクトに挿入されるという意味ではありません。 これは、単にマウスボタンをこの場所で離したときに、ドラッグされたデータがドロップ先オブジェクトによって受け付けられ、[`On Drop`](onDrop.md) イベントが動くということを意味するだけです。

ドロップ可能なオブジェクトに対して開発者が `On Drag Over` イベントを処理しない場合には、そのオブジェクトは、ドラッグされたデータの性質やタイプに関係なく、すべてのドラッグ処理に対してハイライトされます。

`On Drag Over` イベントは、ドラッグ＆ドロップ処理の最初の段階を制御する手段です。 ドラッグされたデータがドロップ先オブジェクトと互換性のあるタイプかどうかをテストでき、またドラッグの受け付けや拒否をできるだけでなく、4D があなたの判断に基づいてドロップ先オブジェクトをハイライト (または無反応) されるため、この操作が有効であることを操作者にフィードバックすることができます。

`On Drag Over` イベントはマウスの移動に従って、現在のドロップ先オブジェクトに対して繰り返し送られるため、このイベントのコード処理は短く、短時間で実行されるようにしてください。

### 例題

```4d
// ドロップ先のオブジェクトメソッド
 #DECLARE : Integer
 If(Form event code=On Drag Over)
    // デフォルトで 0 を返します
    ...
    If($DataType=Is picture)
       return -1
    End if
    ...
 End if
```

#### 参照

[`On Begin Drag Over`](onBeginDragOver.md)
