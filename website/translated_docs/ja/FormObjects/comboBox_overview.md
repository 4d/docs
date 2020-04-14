---
id: comboBoxOverview
title: コンボボックス
---

## 概要

コンボボックスは [ドロップダウンリスト](dropdownList_Overview.md#概要) と似ていますが、キーボードから入力されたテキストを受けいれる点と、二つの追加オプションがついている点が異なります。

![](assets/en/FormObjects/combo_box.png)

コンボボックスの初期化方法は、ドロップダウンリストとまったく同じです 。 ユーザーがコンボボックスにテキストを入力すると、その値は配列の 0番目の要素に代入されます。 その他の点では、コンボボックスを入力エリアと同じように取り扱い、配列または選択リストを一連のデフォルト値として使用します。

入力エリアへの入力内容は、入力エリアオブジェクトと同様に `On Data Change` イベントを使用して管理します。 詳細については、*4Dランゲージリファレンス* マニュアルの [Form event code](https://doc.4d.com/4Dv18/4D/18/Form-event-code.301-4505020.ja.html) コマンドの説明を参照ください。

## コンボボックスのオプション

コンボボックスタイプのオブジェクトには、関連付けられた選択リストに関する 2つのオプションがあります。

- [自動挿入](properties_DataSource.md#自動挿入): このオプションがチェックされていると、オブジェクトに関連付けられた選択リストにない値をユーザーが入力した場合に、その値が自動的にメモリー内のリストに追加されます。
- [除外リスト](properties_RangeOfValues.md#除外リスト) (除外される値のリスト): 除外される値のリストを関連付けることができます。 ユーザーがこのリストに含まれる値を入力したとき、その入力は自動的に却下され、エラーメッセージが表示されます。

> [指定リスト](properties_RangeOfValues.md#指定リスト) はコンボボックスには割り当てることはできません。 ユーザーインターフェースにおいて、オブジェクト内にいくつかの指定された値を表示したいときには、[ポップアップメニュータイプ](dropdownList_Overview.md#概要) のオブジェクトを使用して下さい。

## プロパティ一覧

[文字フォーマット](properties_Display.md#文字フォーマット) - [太字](properties_Text.md#太字) - [下](properties_CoordinatesAndSizing.md#下) - [Button Style](properties_TextAndPicture.md#button-style) - [選択リスト](properties_DataSource.md#選択リスト) - [CSSクラス](properties_Object.md#CSSクラス) - [日付フォーマット](properties_Display.md#日付フォーマット) - [Focusable](properties_Entry.md#focusable) - [フォント](properties_Text.md#フォント) - [フォントカラー](properties_Text.md#フォントカラー) - [Font Size](properties_Text.md#font-size) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [ヘルプTips](properties_Help.md#ヘルプTips) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [イタリック](properties_Text.md#イタリック) - [左](properties_CoordinatesAndSizing.md#左) - [Not rendered](properties_Display.md#not-rendered) - [オブジェクト名](properties_Object.md#オブジェクト名) - [右](properties_CoordinatesAndSizing.md#右) - [Standard action](properties_Action.md#standard-action) - [時間フォーマット](properties_Display.md#時間フォーマット) - [上](properties_CoordinatesAndSizing.md#上) - [タイプ](properties_Object.md#タイプ) - [下線](properties_Text.md#下線) - [変数あるいは式](properties_Object.md#変数あるいは式) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [表示状態](properties_Display.md#表示状態) - [幅](properties_CoordinatesAndSizing.md#幅)