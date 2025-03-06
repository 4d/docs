---
id: onDataChange
title: On Data Change
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 定義               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 20  | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) | オブジェクトのデータが変更された |


## 説明

`On Data Change` イベントプロパティがオブジェクトで選択されている場合、`FORM Event` コマンドを使って、データソースの値の変化を検出し、処理することができます。

イベントは、オブジェクトに結び付けられた変数が 4D により内部的に更新され次第、生成されます (一般的には、入力エリアオブジェクトがフォーカスを失った時)。

> [サブフォーム](FormObjects/subform_overview.md) においては、`On Data Change` イベントはサブフォームオブジェクト変数の値が更新されたときにトリガーされます。

