---
id: pluginAreaOverview
title: プラグインエリア
---


A plug-in area is an area on the form that is completely controlled by a [plug-in](../Extensions/develop-plug-ins.md). フォームにプラグインエリアを追加できることで、カスタムアプリケーションを作成する際の可能性が限りなく広がります。

When opening an application, 4D creates an internal list of the plug-ins [installed in your application](../Concepts/plug-ins.md#installing-plug-ins). プラグインエリアをフォームに挿入すると、そのプロパティリスト内の **タイプ** リスト ("オブジェクト"テーマ内) にて、プラグインを割り当てることができます:

![](../assets/en/FormObjects/pluginArea.png)

> 一部のプラグイン (4D Internet Commands など) はフォームやプラグインウインドウで使用することができません。 プラグインがフォームで使用できない場合、そのプラグインはプロパティリストに候補として表示されません。

作成したプラグインエリアが小さすぎる場合、4Dはエリアをボタンとして表示し、エリアに割り当てられた変数名がそのタイトルに使用されます。 実行時ユーザーはこのボタンをクリックしてプラグインを表示するためのウィンドウを開くことができます。


## 詳細オプション

プラグインの作成者が詳細オプションを提供していると、プロパティリストの **プラグイン** テーマ内に [**詳細設定**](properties_Plugins.md) ボタンが使用可能になることがあります。 この場合ボタンをクリックすると、プラグインの制作元によるカスタムダイアログにてそれらのオプションを設定することができます。


## プロパティ一覧
[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [プラグインの種類](properties_Object.md#プラグインの種類) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型式タイプ) - [CSSクラス](properties_Object.md#cssクラス) - [詳細設定](properties_Plugins.md) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [フォーカス可](properties_Entry.md#フォーカス可) - [表示状態](properties_Display.md#表示状態) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [メソッド](properties_Action.md#メソッド) - [ドラッグ有効](properties_Action.md#ドラッグ有効) - [ドロップ有効](properties_Action.md#ドロップ有効) 