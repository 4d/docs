---
id: progressIndicator
title: 進捗インジケーター
---

## 概要

進捗インジケーター (または "サーモメーター") は図形を用いて値を表示するオブジェクトです。

![](assets/en/FormObjects/progress1.png)

### インジケーターの使用

インジケーターを使用して値の表示や設定ができます。 たとえば、メソッドを用いてサーモメーターに値を指定すると、その値が表示されます。 ユーザーがインジケーターポイントをドラッグすると、その値が変更されます。 この値はフィールド、入力可オブジェクト、入力不可オブジェクト等の他のオブジェクトで使用することができます。

インジケーターに関連付けた変数により、その表示を管理します。 メソッドを用いて、この変数に値を代入したり、またはインジケーターの値を使用したりします。 たとえば、フィールドまたは入力可オブジェクトのメソッドを使用して、サーモメーターを管理できます:

```4d
 $vTherm:=[Employees]Salary
```

このメソッドは Salary フィールドの値を $vTherm 変数に代入します。 このメソッドは、たとえばフォーム上で Salary フィールドのオブジェクトメソッドとして記述できます。

逆にインジケーターを使用してフィールドの値を管理することも可能です。 ユーザーはインジケーターをドラッグして値を設定します。 このメソッドは次の通りです:

```4d
 [Employees]Salary:=$vTherm
```

このメソッドはインジケーターの値を Salary フィールドに代入します。 ユーザーがインジケーターをドラッグすると、Salary フィールドの値が変わります。

## デフォルトサーモメーター

![](assets/en/FormObjects/indicator_progressBar.png)

サーモメーターはデフォルトの進捗インジケーターです。

縦または横のサーモメーターバーを表示できます。 どちらになるかはフォームエディター上に描かれたオブジェクトの形により決定されます。

描画に関するプロパティをいくつか設定することができます: 最小/最大値、目盛りの単位、ステップ、その他の表示オプションなどです。

### プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) ("整数", "数値", "日付", "時間" のみ) - [式の型](properties_Object.md#式の型) - [CSSクラス](properties_Object.md#CSSクラス) - [最小](properties_Scale.md#最小) - [最大](properties_Scale.md#最大) - [目盛りのステップ](properties_Scale.md#目盛りのステップ) - [ステップ](properties_Scale.md#ステップ) - [ラベル位置](properties_Scale.md#ラベル位置) - [目盛りを表示](properties_Scale.md#目盛りを表示) - [バーバーショップ](properties_Scale.md#バーバーショップ) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [入力可](properties_Entry.md#入力可) - [数値フォーマット](properties_Display.md#数値フォーマット) - [表示状態](properties_Display.md#表示状態) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [太字](properties_Text.md#太字) - [ヘルプTips](properties_Help.md#ヘルプTips) - [オブジェクトメソッド実行](properties_Action.md#オブジェクトメソッド実行)

## バーバーショップ

![](assets/en/FormObjects/indicator.gif)

**バーバーショップ** はデフォルトサーモメーターの一種です。 このバリエーションを選択するには [バーバーショップ](properties_Scale.md#バーバーショップ) プロパティをチェックします。

> In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant.

Barber shop displays a continuous animation, like the [spinner](spinner.md). These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, [graphical Scale properties](properties_Scale.md) are not available.

When the form is executed, the object is not animated. You manage the animation by passing a value to its [associated variable or expression](properties_Object.md#variable-or-expression):

* 1 (or any value other than 0) = Start animation,
* 0 = Stop animation.

### プロパティ一覧

[Barber shop](properties_Scale.md#barber-shop) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## See also

- [rulers](ruler.md)
- [steppers](stepper.md)