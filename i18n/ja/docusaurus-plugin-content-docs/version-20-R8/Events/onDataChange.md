---
id: onDataChange
title: On Data Change
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 定義               |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 20  | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) - [プラグインエリア](FormObjects/pluginArea_overview.md#overview) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [ステッパー](FormObjects/stepper.md) - [サブフォーム](FormObjects/subform_overview.md) | オブジェクトのデータが変更された |

## 説明

`On Data Change` イベントプロパティがオブジェクトで選択されている場合、`FORM Event` コマンドを使って、データソースの値の変化を検出し、処理することができます。

イベントは、オブジェクトに結び付けられた変数が 4D により内部的に更新され次第、生成されます (一般的には、入力エリアオブジェクトがフォーカスを失った時)。

> [サブフォーム](FormObjects/subform_overview.md) においては、`On Data Change` イベントはサブフォームオブジェクト変数の値が更新されたときにトリガーされます。
