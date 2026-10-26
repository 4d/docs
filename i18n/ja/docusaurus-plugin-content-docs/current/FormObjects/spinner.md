---
id: spinner
title: スピナー
---

スピナーは円形のインジケーターで、[バーバーショップ](progressIndicator.md#barber-shop) のように連続したアニメーションを表示します。

![](../assets/en/FormObjects/spinner.gif)

このタイプのオブジェクトは通常、ネットワークへの接続や、計算などの処理が実行中であることを表すために使用します。このインジケーターが選択されるとプロパティリストの [スケール](properties_Scale.md) テーマは非表示になります。

フォームが実行されたとき、オブジェクトのアニメーションは開始されません。[割り当てられた変数](properties_Object.md#変数あるいは式) に値を代入してアニメーションを管理します:

- 非 0 値 = アニメーション開始
- 0 = アニメーション停止

### プロパティ一覧

[Border color](./properties_BackgroundAndBorder.md#border-color) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Height](properties_CoordinatesAndSizing.md#height) -[Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

### サポートされるイベント

[On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Data Change](../Events/onDataChange.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Getting focus](../Events/onGettingFocus.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)