---
id: pictureButtonOverview
title: ピクチャーボタン
---

## 概要

ピクチャーボタンは [標準のボタン](button_overview.md) と似ていますが、 3つの状態 (有効、無効、クリック) を持てる標準ボタンとは異なり、ピクチャーボタンでは、その名前が表わすようにそれぞれの状態を別々のピクチャーにより表わします。

ピクチャーボタンは、次の 2つの方法で使用します:

* フォーム上のコマンドボタンとして。 この場合、ピクチャーボタンには通常 4種類の状態があります (有効、無効、クリック、ロールオーバー)。  
    たとえば、1行 4列からなるサムネールテーブルの場合、各サムネールはデフォルト、クリック、ロールオーバー、無効という状態に対応しています。 

| プロパティ         | JSON 名                 | 結果   |
| ------------- | ---------------------- | ---- |
| 行             | rowCount               | 1    |
| 列             | columnCount            | 4    |
| マウスアップで戻る     | switchBackWhenReleased | true |
| ロールオーバー効果     | switchWhenRollover     | true |
| 無効時に最終フレームを使用 | useLastFrameAsDisabled | true |


* 複数の選択項目の中からユーザーに選ばせるためのピクチャーボタンとして。 この場合、ピクチャーボタンをポップアップピクチャーメニューの代わりに使用することができます。 [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) ではすべての選択肢が (ポップアップメニューの項目として) 同時に表示されます。他方ピクチャーボタンは、選択候補を連続的に表示します (ボタンをクリックする度に変わります)。  
    次に示すのは、ピクチャーボタンの例です。 たとえば、カスタムアプリケーションのユーザーに、アプリケーションのインタフェース言語を選ばせたいものとします。 そこで下図のように、選択候補をピクチャーボタンとしてカスタムプロパティダイアログボックスに組み込みます:

![](assets/en/FormObjects/button_pictureButton.png)

オブジェクトをクリックするとピクチャーが変わります。

## ピクチャーボタンの使用

次の方法でピクチャーボタンを導入します。

1. まず初めに 1つの画像を用意し、一連のピクチャーを横、縦、または縦横の格子状に並べてその中に納めておきます。
    
    ![](assets/en/FormObjects/pictureButton_grid.png)

ピクチャーは、縦、横、または縦横格子状に整理することができます (上図を参照)。 ピクチャーを格子状に並べた場合、各ピクチャーには左から右へ 1 行ずつ、0から始まる番号が振られます。 For example, the second picture of the second row of a grid that consists of two rows and three columns, is numbered 4 (The UK flag in the example above).

2. Next, make sure the image is in your project's Resources and enter the path in the [Pathname](properties_TextAndPicture.md#picture-pathname) property.

3. Define the graphic's [Rows and Columns](properties_Crop.md) properties.

4. Specify when the images change by selecting appropriate [animation](properties_Animation.md) properties.

## Animation

In addition to the standard positioning and appearance settings, you can set some specific properties for picture buttons, especially concerning how and when the pictures are displayed. These property options can be combined to enhance your picture buttons.

- By default (when no [animation option](properties_Animation.md) is selected), a picture button displays the next picture in the series when the user clicks; it displays the previous picture in the series when the user holds down the **Shift** key and clicks. When the user reaches the last picture in the series, the picture does not change when the user clicks again. In other words, it does not cycle back to the first picture in the series.

The following other modes are available:

- [先頭フレームに戻る](properties_Animation.md#loopBackToFirstFrame)
- [マウスアップで戻る](properties_Animation.md#switch-back-when-released)
- [ロールオーバー効果](properties_Animation.md#switch-when-roll-over)
- [マウス押下中は自動更新](properties_Animation.md#switch-continuously-on-clicks)
- [無効時に最終フレームを使用](properties_Animation.md#use-last-frame-as-disabled)
- [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled)

> The [associated variable](properties_Object.md#variable-or-expression) of the picture button returns the index number, in the thumbnail table, of the current picture displayed. The numbering of pictures in the table begins with 0.

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Switch back when released](properties_Animation.md#switchBackWhenReleased) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Switch every x ticks](properties_Animation.md#switch-every-x-ticks) - [Title](properties_Object.md#title) - [Switch when roll over](properties_Animation.md#switchWhenRollOver) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)