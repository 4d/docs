---
id: pluginAreaOverview
title: プラグインエリア
---

プラグインエリアは、プラグインによりすべてが制御されるフォーム上のエリアです。 フォームにプラグインエリアを追加できることで、カスタムアプリケーションを作成する際の可能性が限りなく広がります。 プラグインでは、フォーム上にデジタル時計を表示するような単純な処理や、完全に機能するワープロ、スプレッドシート、グラフィック機能などを提供するなどの複雑な処理を実行できます。

アプリケーションを開く際、4Dは [アプリケーションにインストール](#プラグインのインストール) されたプラグインのリストを内部的に作成します。 プラグインエリアをフォームに挿入すると、そのプロパティリスト内の **タイプ** リスト ("オブジェクト"テーマ内) にて、プラグインを割り当てることができます:

![](../assets/en/FormObjects/pluginArea.png)

> 一部のプラグイン (4D Internet Commands など) はフォームやプラグインウインドウで使用することができません。 プラグインがフォームで使用できない場合、そのプラグインはプロパティリストに候補として表示されません。

作成したプラグインエリアが小さすぎる場合、4Dはエリアをボタンとして表示し、エリアに割り当てられた変数名がそのタイトルに使用されます。 実行時ユーザーはこのボタンをクリックしてプラグインを表示するためのウィンドウを開くことができます。

## 詳細オプション

プラグインの作成者が詳細オプションを提供していると、プロパティリストの **プラグイン** テーマ内に [**詳細設定**](properties_Plugins.md) ボタンが使用可能になることがあります。 この場合ボタンをクリックすると、プラグインの制作元によるカスタムダイアログにてそれらのオプションを設定することができます。

## プラグインのインストール

プラグインを 4D環境にインストールするには、まず 4Dを終了する必要があります。 4Dは起動時にプラグインをロードします。 プラグインのインストールに関する詳細は [プラグインやコンポーネントのインストール](https://doc.4d.com/4Dv18/4D/18/Installing-plugins-or-components.300-4575696.ja.html) を参照してください。

## プラグインの利用

独自にプラグインを作成したい場合、オープンソースのプラグイン制作キットを使用することができます。 このキットの入手およびプラグイン作成に関する情報は [(github上にある) 完全なキット](https://github.com/4d/4D-Plugin-SDK) を参照してください。

## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Advanced Properties](properties_Plugins.md) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable-and-droppable) - [Droppable](properties_Action.md#draggable-and-droppable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Plug-in Kind](properties_Object.md#plug-in-kind) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
