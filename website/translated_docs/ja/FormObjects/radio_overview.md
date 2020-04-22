---
id: radiobuttonOverview
title: Radio Button
---

## 概要

Radio buttons are objects that allow the user to select one of a group of buttons.

Usually, a radio button shows a small bullseye with text. However, radio buttons can have [various appearances](#button-styles).

![](assets/en/FormObjects/radio1.png)

A radio button is selected:

- when the user clicks on it
- when it has the focus and the user presses the **Space bar** key.

## Configuring radio buttons

Radio buttons are used in coordinated sets: only one button at a time can be selected in the set. In order to operate in a coordinated manner, a set of radio buttons must share the same [Radio Group](properties_Object.md#radio-group) property.

Radio buttons are controlled with methods. Like all buttons, a radio button is set to 0 when the form is first opened. A method associated with a radio button executes when the button is selected. The following is an example of a group of radio buttons used in a video collection database to enter the speed of the recording (SP, LP, or EP):

![](assets/en/FormObjects/radio2.png)

Selecting one radio button in a group sets that button to 1 and all of the others in the group to 0. Only one radio button can be selected at a time.

> You can associate [Boolean type expressions](properties_Object.md#variable-or-expression) with radio buttons. In this case, when a radio button in a group is selected, its variable is True and the variables for the group's other radio buttons are False.

The value contained in a radio button object is not saved automatically (except if it is the representation of a Boolean field); radio button values must be stored in their variables and managed with methods.

## ボタンスタイル

Radio [button styles](properties_TextAndPicture.md#button-style) control radio button's general appearance as well as its available properties. It is possible to apply different predefined styles to radio buttons. However, the same button style must be applied to all radio buttons in a group so that they work as expected.

4D provides radio buttons in the following predefined styles:

### 通常

The Regular radio button style is a standard system button (*i.e.*, a small bullseye with text) which executes code when a user clicks on it.

![](assets/en/FormObjects/radio_regular.png)

In addition to initiating code execution, the Regular radio button style changes bullsey color when being hovered.

### フラット

The Flat radio button style is a standard system button (*i.e.*, a small bullseye with text) which executes code when a user clicks on it.

![](assets/en/FormObjects/radio_flat.png)

By default, the Flat style has a minimalist appearance. フラットボタンのグラフィック的な装飾は最小限であるため、印刷されるフォームでの使用に適しています。

### ツールバー

The Toolbar radio button style is primarily intended for integration in a toolbar.

ツールバーボタンは、透明の背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- *Windows* - ボタンがハイライト表示されます。 

![](assets/en/FormObjects/radio_toolbar.png)

- *macOS* - ボタンはハイライト表示されません。 

### ベベル

The Bevel radio button style is similar to the [Toolbar](#toolbar) style's behavior, except that it has a light gray background and a gray outline. ボタンにマウスオーバーしたときの表示は OS によって異なります:

- *Windows* - ボタンがハイライト表示されます。
    
    ![](assets/en/FormObjects/radio_bevel.png)

- *macOS* - ボタンはハイライト表示されません。

### 角の丸いベベル

角の丸いベベルスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては角が丸く表示されます。

- *Windows* - the button is identical to the [Bevel](#bevel) style.

- *macOS* - 角が丸くなっています。 ![](assets/en/FormObjects/roundedBevel.png)

### OS Xグラデーション

OS Xグラデーションスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては異なる点があります。

- *Windows* - the button is identical to the [Bevel](#bevel) style.

- *macOS* - 2トーンのシステムボタンです。

### OS Xテクスチャー

The OS X Textured radio button style is nearly identical to the [Toolbar](#toolbar) style except, depending on the OS, it may have a different appearance and does not display hover.

デフォルトで、OS Xテクスチャーボタンの外観は次の通りです:

- *Windows* - a toolbar-like button with a label in the center and the background is always displayed.

- *macOS* - 灰色のグラデーションを表示する標準のシステムボタンです。 高さは定義済みで、変更できません。
    
    ![](assets/en/FormObjects/OSXTextured.png)

### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

Office XPボタンの反転表示と背景のカラーはシステムカラーに基づいています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- *Windows* - マウスオーバー時にのみ背景が表示されます。
    
    ![](assets/en/FormObjects/radio_xp.png)

- *macOS* - 背景は常に表示されます。

### 折りたたみ/展開

This button style can be used to add a standard collapse/expand icon. これらは階層リストで使用されます。 In Windows, the button looks like a [+] or a [-]; in macOS, it looks like a triangle pointing right or down.

![](assets/en/FormObjects/checkbox_collapse.png)

### 開示ボタン

The disclosure radio button style displays the radio button as a standard disclosure button, usually used to show/hide additional information. The button symbol points downwards with value 0 and upwards with value 1.

![](assets/en/FormObjects/checkbox_disclosure.png)

### カスタム

The Custom radio button style accepts a personalized background picture and allows managing additional parameters such as [icon offset](properties_TextAndPicture.md#icon-offset) and [margins](properties_TextAndPicture.md#horizontalMargin).

## Supported properties

All radio buttons share the same set of basic properties:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

Additional specific properties are available depending on the [button style](#button-styles):

- [背景パス名](properties_TextAndPicture.md#背景パス名) - [アイコンオフセット](properties_TextAndPicture.md#アイコンオフセット) - [横方向マージン](properties_TextAndPicture.md#横方向マージン) - [縦方向マージン](properties_TextAndPicture.md#縦方向マージン) (カスタムスタイル)
- [ピクチャーパス名](properties_TextAndPicture.md#ピクチャーパス名) - [状態の数](properties_TextAndPicture.md#状態の数) - [タイトル/ピクチャー位置](properties_TextAndPicture.md#タイトル/ピクチャー位置) (ツールバーボタン、ベベル、角の丸いベベル、OS X グラデーション、OS X テクスチャー、Office XP、カスタム)