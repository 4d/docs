---
id: pluginAreaOverview
title: プラグインエリア
---

## 概要

プラグインエリアは、プラグインによりすべてが制御されるフォーム上のエリアです。 フォームにプラグインエリアを追加できることで、カスタムアプリケーションを作成する際の可能性が限りなく広がります。 プラグインでは、フォーム上にデジタル時計を表示するような単純な処理や、完全に機能するワープロ、スプレッドシート、グラフィック機能などを提供するなどの複雑な処理を実行できます。

データベースを開く際、4Dは [データベースにインストール](#プラグインのインストール) されたプラグインのリストを内部的に作成します。 プラグインエリアをフォームに挿入すると、そのプロパティリスト内のタイプリスト ("オブジェクト"テーマ内) にて、プラグインを割り当てることができます:

![](assets/en/FormObjects/pluginArea.png)

> 一部のプラグイン (4D Internet Commands など) はフォームやプラグインウインドウで使用することができません。 プラグインがフォームで使用できない場合、そのプラグインはプロパティリストのプラグインリストに表示されません。

作成したプラグインエリアが小さすぎる場合、4Dはエリアをボタンとして表示し、エリアに割り当てられた変数名がそのタイトルに使用されます。 実行時ユーザーはこのボタンをクリックしてプラグインを表示するためのウィンドウを開くことができます。

### Advanced properties

If advanced options are provided by the author of the plug-in, a **Plug-in** theme containing an [**Advanced Properties**](properties_Plugins.md) button may be enabled in the Property list. In this case, you can click this button to set these options, usually through a custom dialog box.

## プラグインのインストール

To add a plug-in in your 4D environment, you first need to quit 4D. Plug-ins are loaded when you launch 4D. For more information about the installation of plug-ins, refer to [Installing plugins or components](https://doc.4d.com/4Dv17R6/4D/17-R6/Installing-plugins-or-components.300-4354866.en.html).

## Creating plug-ins

If you are interested in designing your own plug-ins, you can receive extensive information about writing and implementing plug-ins. 4D provides a [complete kit (on github)](https://github.com/4d/4D-Plugin-SDK) to help you write custom plug-ins.

## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Advanced Properties](properties_Plugins.md) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable-and-droppable) - [Droppable](properties_Action.md#draggable-and-droppable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Plug-in Kind](properties_Object.md#plug-in-kind) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)