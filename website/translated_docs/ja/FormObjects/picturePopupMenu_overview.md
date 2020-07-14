---
id: picturePopupMenuOverview
title: ピクチャーポップアップメニュー
---

## 概要

ピクチャーポップアップメニューは、画像の二次元配列を表示するポップアップメニューです。 ピクチャーポップアップメニューを使用して、[ピクチャー ボタン](pictureButton_overview.md) を置き換えることができます。 ピクチャーポップアップメニューで使用するピクチャーの作成方法は、ピクチャーボタン用のピクチャーと似ています。 その概念は [ボタングリッド](buttonGrid_overview.md) と同じですが、グラフィックがフォームオブジェクトではなくポップアップメニューとして使用される点が異なります。

## ピクチャーポップアップメニューの使用

ピクチャーポップアップメニューを作成するには、[画像を参照](properties_Picture.md#パス名) する必要があります。 次の例は、ピクチャーポップアップメニューからインタフェース言語を選ぶことができます。 各言語は対応する国旗で表わされています:

![](assets/en/FormObjects/picturePopupMenu_example.png)

### プログラミング

ピクチャーポップアップメニューは、メソッドを使用して管理できます。 [ボタングリッド](buttonGrid_overview.md) と同様、ピクチャーポップアップメニューに割り当てられた変数に、選択された要素の値が代入されます。 項目が選択されなければ、この値は 0 になります。 各ピクチャーには上の行から順に左から右へと番号が振られます。

### ページ指定アクション

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) to a picture pop-up menu. When that action is selected, 4D will automatically display the page of the form that corresponds to the position of the picture selected in the picture array. Elements are numbered from left to right and top to bottom, beginning with the top left corner.

For example, if the user selects the 3rd element, 4D will display the third page of the current form (if it exists). If you want to manage the effect of a click yourself, select `No action`.

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)