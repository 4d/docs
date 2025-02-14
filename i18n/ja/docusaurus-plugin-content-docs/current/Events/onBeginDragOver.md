---
id: onBeginDragOver
title: On Begin Drag Over
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 定義               |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 17  | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | オブジェクトがドラッグされている |

## 説明

`On Begin Drag Over` フォームイベントは、ドラッグ可能なすべてのフォームオブジェクトで選択できます。 このイベントは、オブジェクトが [ドラッグ有効](FormObjects/properties_Action.md#ドラッグ有効) プロパティを持っているすべてのケースで生成されます。 このイベントは、ソースオブジェクトのメソッドまたはソースオブジェクトのフォームメソッドから呼び出すことができます。 このイベントは、オブジェクトが [ドラッグ有効](FormObjects/properties_Action.md#ドラッグ有効) プロパティを持っているすべてのケースで生成されます。 このイベントは、ソースオブジェクトのメソッドまたはソースオブジェクトのフォームメソッドから呼び出すことができます。 このイベントは、オブジェクトが [ドラッグ有効](FormObjects/properties_Action.md#ドラッグ有効) プロパティを持っているすべてのケースで生成されます。 このイベントは、ソースオブジェクトのメソッドまたはソースオブジェクトのフォームメソッドから呼び出すことができます。 このイベントは、オブジェクトが [ドラッグ有効](FormObjects/properties_Action.md#ドラッグ有効) プロパティを持っているすべてのケースで生成されます。 このイベントは、ソースオブジェクトのメソッドまたはソースオブジェクトのフォームメソッドから呼び出すことができます。

> [`On Drag Over`](onDragOver.md) フォームイベントとは異なり、`On Begin Drag Over` イベントはドラッグアクションの **ソースオブジェクト** のコンテキスト内で呼び出されます。

`On Begin Drag Over` イベントは、ドラッグアクションの準備に役立ちます。 このイベントは以下のように使用できます: このイベントは以下のように使用できます: このイベントは以下のように使用できます: このイベントは以下のように使用できます:

- `APPEND DATA TO PASTEBOARD` コマンドを使って、ペーストボードにデータや署名を追加する。
- `SET DRAG ICON` コマンドを使って、ドラッグアクション中にカスタムアイコンを表示する。
- ドラッグされたオブジェクトのメソッドの戻り値を使用して、ドラッグを許可/拒否する。
  - ドラッグアクションを受け入れるには、ソースオブジェクトのメソッドは 0 (ゼロ) を返さなければなりません。
  - ドラッグアクションを拒否するには、ソースオブジェクトのメソッドは -1 (マイナス1) を返さなければなりません。
  - 結果が返されない場合は、ドラッグアクションが受け入れられたと 4D は判断します。

4D のデータは、イベントが呼び出される前に、ペーストボードに置かれます。 たとえば、**自動ドラッグ** アクションなしでドラッグした場合、ドラッグされたテキストは、イベントが呼び出される時にはペーストボードにあります。
