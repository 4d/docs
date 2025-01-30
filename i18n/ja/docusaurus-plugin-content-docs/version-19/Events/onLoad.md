---
id: onLoad
title: On Load
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 定義                    |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| 1   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) - [Tab control](FormObjects/tabControl.md) - [Web Area](FormObjects/webArea_overview.md) | フォームが表示または印刷されようとしている |


## 説明

このイベントは、フォームが表示または印刷されようとしているときに生成されます。

`On Load` オブジェクトイベントプロパティが選択されている、フォームの全ページの全オブジェクトのオブジェクトメソッドが呼び出されます。 その後、`On Load` フォームイベントプロパティが選択されていれば、フォームメソッドが呼び出されます。

> オブジェクトの `On Load` と [`On Unload`](onUnload.md) イベントが生成されるには、オブジェクトとオブジェクトが属するフォームの両方で有効にされていなければなりません。 オブジェクトのみでイベントが有効になっている場合、イベントは生成されません。 これら 2つのイベントはフォームレベルでも有効にされていなければなりません。


### サブフォーム

`On Load` イベントは、サブフォームを開く際に生成されます。 これらのイベントは親フォームレベルでも有効にされていなければなりません。 このイベントは、親フォームのイベントよりも前に生成される点に留意してください。 また、フォームイベント動作の原則に従い、サブフォームが 0 もしくは 1 以外のページに配置されている場合、このイベントはページが開かれるときに生成され、フォームが開かれるときではないことに留意してください。


### 参照

[`On Unload`](onUnload.md)