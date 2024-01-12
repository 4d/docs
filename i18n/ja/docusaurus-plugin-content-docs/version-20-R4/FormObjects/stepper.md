---
id: stepper
title: ステッパー
---

このオブジェクトを使用すると、ユーザーは矢印ボタンをクリックすることで、数値、時間、または日付を定義済みのステップ毎にスクロールすることができます。

![](../assets/en/FormObjects/indicator_numericStepper.png)

## ステッパーの使用

<a href="properties_Object.md#変数あるいは式">割り当てられた変数</a> の値を入力エリア (フィールドまたは変数) に代入して格納したり、逆にオブジェクトの現在値を設定することもできます。

ステッパーには数値、時間、日付変数を割り当てることができます。

- 時間型の値では最小、最大、<a href="properties_Scale.md#ステップ">ステップ</a> プロパティは秒を表します。 たとえば、ステッパーを 8:00 から 18:00 まで 10分のステップで設定するには:
  - [minimum](properties_Scale.md#minium) = 28 800 (8\*60\*60)
  - [maximum](properties_Scale.md#maximum) = 64 800 (18\*60\*60)
  - [step](properties_Scale.md#step) = 600 (10\*60)
- For values of the date type, the value entered in the [step](properties_Scale.md#step) property represents days. 最小と最大プロパティは無視されます。

> For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to [declare it explicitly](../Concepts/variables.md#declaring-variables) as `Time` or `Date`.

For more information, please refer to [Using indicators](progressIndicator.md#using-indicators) in the "Progress Indicator" page.

## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 参照

- [progress indicators](progressIndicator.md)
- [rulers](ruler.md)
