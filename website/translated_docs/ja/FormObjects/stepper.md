---
id: stepper
title: ステッパー
---

## 概要

このオブジェクトを使用すると、ユーザーは矢印ボタンをクリックすることで、数値、時間、または日付を定義済みのステップ毎にスクロールすることができます。

![](assets/en/FormObjects/indicator_numericStepper.png)

## ステッパーの使用

[割り当てられた変数](properties_Object.md#変数あるいは式) の値を入力エリア (フィールドまたは変数) に代入して格納したり、逆にオブジェクトの現在値を設定することもできます。

ステッパーには数値、時間、日付変数を割り当てることができます。

* 時間型の値では最小、最大、[ステップ](properties_Scale.md#ステップ) プロパティは秒を表します。 たとえば、ステッパーを 8:00 から 18:00 まで 10分のステップで設定するには: 
    * [最小](properties_Scale.md#最小) = 28,800 (8*60*60)
    * [最大](properties_Scale.md#最大) = 64,800 (18*60*60)
    * [ステップ](properties_Scale.md#ステップ) = 600 (10*60)
* 日付タイプの値では [ステップ](properties_Scale.md#ステップ) プロパティに入力された値が日数を表します。 最小と最大プロパティは無視されます。

> ステッパーを時間や日付変数に対して動作させるためには、プロパティリストで型を設定するだけでなく、[C_TIME](https://doc.4d.com/4Dv18/4D/18/C-TIME.301-4505778.ja.html) または [C_DATE](https://doc.4d.com/4Dv18/4D/18/C-DATE.301-4505791.ja.html) コマンドで明示的に宣言する必要があります。

詳細については [インジケーターの使用](progressIndicator.md#インジケーターの使用) を参照ください。

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Step](properties_Scale.md#step) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 参照

- [進捗インジケーター](progressIndicator.md) 
- [ルーラー](ruler.md)