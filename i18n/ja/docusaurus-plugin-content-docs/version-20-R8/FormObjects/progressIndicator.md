---
id: progressIndicator
title: 進捗インジケーター
---

進捗インジケーター (または "サーモメーター") は図形を用いて値を表示するオブジェクトです。

![](../assets/en/FormObjects/progress1.png)

## インジケーターの使用

インジケーターを使用して値の表示や設定ができます。 たとえば、メソッドを用いてサーモメーターに値を指定すると、その値が表示されます。 ユーザーがインジケーターポイントをドラッグすると、その値が変更されます。 この値はフィールド、入力可オブジェクト、入力不可オブジェクト等の他のオブジェクトで使用することができます。

インジケーターに関連付けた変数により、その表示を管理します。 メソッドを用いて、この変数に値を代入したり、またはインジケーターの値を使用したりします。 たとえば、フィールドまたは入力可オブジェクトのメソッドを使用して、サーモメーターを管理できます:

```4d
 vTherm:=[Employees]Salary
```

このメソッドは Salary フィールドの値を vTherm 変数に代入します。 このメソッドは、たとえばフォーム上で Salary フィールドのオブジェクトメソッドとして記述できます。

逆にインジケーターを使用してフィールドの値を管理することも可能です。 ユーザーはインジケーターをドラッグして値を設定します。 このメソッドは次の通りです:

```4d
 [Employees]Salary:=vTherm
```

このメソッドはインジケーターの値を Salary フィールドに代入します。 ユーザーがインジケーターをドラッグすると、Salary フィールドの値が変わります。

## デフォルトサーモメーター

![](../assets/en/FormObjects/indicator_progressBar.png)

サーモメーターはデフォルトの進捗インジケーターです。

縦または横のサーモメーターバーを表示できます。 どちらになるかはフォームエディター上に描かれたオブジェクトの形により決定されます。

描画に関するプロパティをいくつか設定することができます: 最小/最大値、目盛りの単位、ステップ、その他の表示オプションなどです。

### プロパティ一覧

[タイプ](properties_Object.md#タイプ) -
[オブジェクト名](properties_Object.md#オブジェクト名) -
[式の型](properties_Object.md#式の型式タイプ) ("整数", "数値", "日付", "時間" のみ) -
[変数あるいは式](properties_Object.md#変数あるいは式) -
[CSSクラス](properties_Object.md#cssクラス) -
[最小](properties_Scale.md#最小) -
[最大](properties_Scale.md#最大) -
[目盛りのステップ](properties_Scale.md#目盛りのステップ) -
[ステップ](properties_Scale.md#ステップ) -
[ラベル位置](properties_Scale.md#ラベル位置) -
[目盛りを表示](properties_Scale.md#目盛りを表示) -
[バーバーショップ](properties_Scale.md#バーバーショップ) -
[表示状態](properties_Display.md#表示状態) -
[上](properties_CoordinatesAndSizing.md#上) -
[右](properties_CoordinatesAndSizing.md#右) -
[下](properties_CoordinatesAndSizing.md#下) -
[幅](properties_CoordinatesAndSizing.md#幅) -
[高さ](properties_CoordinatesAndSizing.md#高さ) -
[横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) -
[縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) -
[入力可](properties_Entry.md#入力可) -
[数値フォーマット](properties_Display.md#数値フォーマット) -
[表示状態](properties_Display.md#表示状態) -
[境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) -
[フォント](properties_Text.md#フォント) -
[フォントサイズ](properties_Text.md#フォントサイズ) -
[太字](properties_Text.md#太字) -
[イタリック](properties_Text.md#イタリック) -
[下線](properties_Text.md#下線) -
[フォントカラー](properties_Text.md#フォントカラー) -
[ヘルプTips](properties_Help.md#ヘルプtips) -
[オブジェクトメソッド実行](properties_Action.md#オブジェクトメソッド実行)

## バーバーショップ

![](../assets/en/FormObjects/indicator.gif)

**バーバーショップ** はデフォルトサーモメーターの一種です。 このバリエーションを選択するには [バーバーショップ](properties_Scale.md#バーバーショップ) プロパティをチェックします。

> JSON コードにおいては、デフォルトサーモメーターのオブジェクトから "max" プロパティを取り除くだけで、インジケーターがバーバーショップになります。

バーバーショップは [スピナー](spinner.md) のように連続したアニメーションを表示します。 このタイプのサーモメーターは通常プログラムが何らかの処理を行っていて、それが終了する時間が予測できない場合、そのことをユーザーに通知するために使用します。 このバリエーションが選択されるとプロパティリストの [スケール](properties_Scale.md) テーマは非表示になります。

フォームが実行されたとき、オブジェクトのアニメーションは開始されません。 [割り当てられた変数](properties_Object.md#変数あるいは式) に値を代入してアニメーションを管理します:

- 1 = アニメーション開始
- 0 = アニメーション停止

### プロパティ一覧

[タイプ](properties_Object.md#タイプ) -
[オブジェクト名](properties_Object.md#オブジェクト名) -
[式の型](properties_Object.md#式の型式タイプ) ("整数", "数値", "日付", "時間" のみ) -
[変数あるいは式](properties_Object.md#変数あるいは式) -
[CSSクラス](properties_Object.md#cssクラス) -
[バーバーショップ](properties_Scale.md#バーバーショップ) -
[左](properties_CoordinatesAndSizing.md#左) -
[上](properties_CoordinatesAndSizing.md#上) -
[右](properties_CoordinatesAndSizing.md#右) -
[下](properties_CoordinatesAndSizing.md#下) -
[幅](properties_CoordinatesAndSizing.md#幅) -
[高さ](properties_CoordinatesAndSizing.md#高さ) -
[表示状態](properties_Display.md#表示状態) -
[縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) -
[入力可](properties_Entry.md#入力可) -
[表示状態](properties_Display.md#表示状態) -
[境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) -
[フォント](properties_Text.md#フォント) -
[フォントサイズ](properties_Text.md#フォントサイズ) -
[太字](properties_Text.md#太字) -
[イタリック](properties_Text.md#イタリック) -
[下線](properties_Text.md#下線) -
[フォントカラー](properties_Text.md#フォントカラー) -
[ヘルプTips](properties_Help.md#ヘルプtips) -
[オブジェクトメソッド実行](properties_Action.md#オブジェクトメソッド実行)

## 参照

- [ルーラー](ruler.md)
- [ステッパー](stepper.md)
