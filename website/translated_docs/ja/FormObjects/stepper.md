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
    * [最小](properties_Scale.md#最小) = 28,800 (8\*60\*60)
    * [最大](properties_Scale.md#最大) = 64,800 (18\*60\*60)
    * [ステップ](properties_Scale.md#ステップ) = 600 (10\*60)
* 日付タイプの値では [ステップ](properties_Scale.md#ステップ) プロパティに入力された値が日数を表します。 最小と最大プロパティは無視されます。
> ステッパーを時間や日付変数に対して動作させるためには、プロパティリストで型を設定するだけでなく、[C_TIME](https://doc.4d.com/4Dv18/4D/18/C-TIME.301-4505778.ja.html) または [C_DATE](https://doc.4d.com/4Dv18/4D/18/C-DATE.301-4505791.ja.html) コマンドで明示的に宣言する必要があります。

詳細については [インジケーターの使用](progressIndicator.md#インジケーターの使用) を参照ください。

## プロパティ一覧
[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型) - [CSSクラス](properties_Object.md#CSSクラス) - [最小](properties_Scale.md#最小) - [最大](properties_Scale.md#最大) - [ステップ](properties_Scale.md#ステップ) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [入力可](properties_Entry.md#入力可) - [表示状態](properties_Display.md#表示状態) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [ヘルプTips](properties_Help.md#ヘルプTips) - [オブジェクトメソッド実行](properties_Action.md#オブジェクトメソッド実行)


## 参照
- [進捗インジケーター](progressIndicator.md)
- [ルーラー](ruler.md)






