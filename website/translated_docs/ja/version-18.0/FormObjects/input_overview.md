---
id: version-18.0-inputOverview
title: 入力
original_id: inputOverview
---

## 概要

入力オブジェクトを使って、データベース[フィールド](Concepts/identifiers.md#フィールド) や [変数](Concepts/variables.md) といった式をフォーム上に追加することができます。 入力オブジェクトは文字ベースのデータ (テキスト、日付、数値など) およびピクチャー型のデータを扱えます。

![](assets/en/FormObjects/input.png)

入力オブジェクトには [代入可、または代入不可の式](Concepts/quick-tour.md#代入可-vs-代入不可の式) を設定することができます。

また、入力オブジェクトは [入力可、または不可](properties_Entry.md#入力可) に設定することができます。 入力可に設定された入力オブジェクトはデータを受け入れます。 データ入力に対しては、データ入力制御を設定できます。 入力不可に設定された入力オブジェクトは、ユーザーの編集を受け付けず、値を表示するのみです。

データは、[オブジェクトメソッドやフォームメソッド](Concepts/methods.md)を使って管理することができます。

### JSON 例:

```4d
    "myText": {
        "type": "input",    // オブジェクトタイプ
        "spellcheck": true, // 自動スペルチェック
        "left": 60,         // フォーム上の座標 (左)
        "top": 160,         // フォーム上の座標 (上)
        "width": 100,       // 幅
        "height": 20        // 高さ
        }
```

## プロパティ一覧

[Alpha Format](properties_Display.md#alpha-format) - [Auto Spellcheck](properties_Entry.md#auto-spellcheck) - [Bold](properties_Text.md#bold) - [Boolean Format](properties_Display.md#boolean-format) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Date Format](properties_Display.md#date-format) - [Default value](properties_RangeOfValues.md#default-value) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression type](properties_Object.md#expression-type) - [Fill Color](properties_BackgroundAndBorder.md#fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Multiline](properties_Entry.md#multiline) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Picture Format](properties_Display.md#picture-format) - [Placeholder](properties_Entry.md#placeholder) - [Print Frame](properties_Print.md#print-frame) - [Required List](properties_RangeOfValues.md#required-list) - [Right](properties_CoordinatesAndSizing.md#right) - [Save as](properties_DataSource.md#save-as) - [Selection always visible](properties_Entry.md#selection-always-visible) - [Store with default style tags](properties_Text.md#store-with-default-style-tags) - [Text when False/Text when True](properties_Display.md#text-when-false-text-when-true) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

* * *

## Input alternatives

You can also represent field and variable expressions in your forms using alternative objects, more particularly:

* You can display and enter data from database fields directly in columns of [selection type List boxes](listbox_overview.md).
* You can represent a list field or variable directly in a form using [Pop-up Menus/Drop-down Lists](popupMenuDropdownList_overview) and [Combo Boxes](comboBox_overview.md) objects.
* You can represent a boolean expression as a [check box](checkbox_overview.md) or as a [radio button](radio_overview.md) object.