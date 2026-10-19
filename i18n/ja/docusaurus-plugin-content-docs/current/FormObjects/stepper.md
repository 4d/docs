---
id: stepper
title: ステッパー
---

このオブジェクトを使用すると、ユーザーは矢印ボタンをクリックすることで、数値、時間、または日付を定義済みのステップ毎にスクロールすることができます。

![](../assets/en/FormObjects/indicator_numericStepper.png)

## ステッパーの使用

<a href="properties_Object.md#変数あるいは式">割り当てられた変数</a> の値を入力エリア (フィールドまたは変数) に代入して格納したり、逆にオブジェクトの現在値を設定することもできます。

ステッパーには数値、時間、日付変数を割り当てることができます。

- 時間型の値では最小、最大、<a href="properties_Scale.md#ステップ">ステップ</a> プロパティは秒を表します。たとえば、ステッパーを 8:00 から 18:00 まで 10分のステップで設定するには: たとえば、ステッパーを 8:00 から 18:00 まで 10分のステップで設定するには:
  - [最小](properties_Scale.md#最小) = 28,800 (8\*60\*60)
  - [最大](properties_Scale.md#最大) = 64,800 (18\*60\*60)
  - [ステップ](properties_Scale.md#ステップ) = 600 (10\*60)
- 日付タイプの値では [ステップ](properties_Scale.md#ステップ) プロパティに入力された値が日数を表します。 最小と最大プロパティは無視されます。最小と最大プロパティは無視されます。
  &#062; 時間や日付変数に対してステッパーを動作させるためには、プロパティリストで型を設定するだけでなく、<a href="https://doc.4d.com/4Dv18/4D/18/C-TIME.301-4505778.ja.html">C_TIME</a> または <a href="https://doc.4d.com/4Dv18/4D/18/C-DATE.301-4505791.ja.html">C_DATE</a> コマンドで明示的に宣言する必要があります。最小と最大プロパティは無視されます。
  &#062; 時間や日付変数に対してステッパーを動作させるためには、プロパティリストで型を設定するだけでなく、<a href="https://doc.4d.com/4Dv18/4D/18/C-TIME.301-4505778.ja.html">C_TIME</a> または <a href="https://doc.4d.com/4Dv18/4D/18/C-DATE.301-4505791.ja.html">C_DATE</a> コマンドで明示的に宣言する必要があります。

> 時間や日付変数に対してステッパーを動作させるためには、プロパティリストで型を設定するだけでなく、`Time` または `Date` 型として [明示的に宣言](../Concepts/variables.md#変数の宣言) する必要があります。

詳細については [インジケーターの使用](progressIndicator.md#インジケーターの使用) を参照ください。

## プロパティ一覧

[Border color](./properties_BackgroundAndBorder.md#border-color) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## サポートされるイベント

[On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Data Change](../Events/onDataChange.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Getting focus](../Events/onGettingFocus.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)

## 参照

- [進捗インジケーター](progressIndicator.md)
- [ルーラー](ruler.md)






