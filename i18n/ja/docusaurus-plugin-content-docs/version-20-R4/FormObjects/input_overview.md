---
id: inputOverview
title: 入力
---


入力オブジェクトを使って、データベース[フィールド](Concepts/identifiers.md#フィールド) や [変数](Concepts/variables.md) といった式をフォーム上に追加することができます。 入力オブジェクトは文字ベースのデータ (テキスト、日付、数値など) およびピクチャー型のデータを扱えます。

![](../assets/en/FormObjects/input.png)

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

<details><summary>履歴</summary>

| バージョン  | 内容        |
| ------ | --------- |
| v19 R7 | 角の半径をサポート |

</details>

[オブジェクト名](properties_Object.md#オブジェクト名) - [式の型](properties_Object.md#式の型) - [CSSクラス](properties_Object.md#cssクラス) - [選択リスト](properties_DataSource.md#選択リスト) - [左](properties_CoordinatesAndSizing.md#左) - [下](properties_CoordinatesAndSizing.md#下) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [角の半径](properties_CoordinatesAndSizing.md#角の半径) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [入力可](properties_Entry.md#入力可) - [入力フィルター](properties_Entry.md#入力フィルター) - [自動スペルチェック](properties_Entry.md#自動スペルチェック) - [複数行](properties_Entry.md#複数行) - [コンテキストメニュー](properties_Entry.md#コンテキストメニュー) - [デフォルト値](properties_RangeOfValues.md#デフォルト値) - [除外リスト](properties_RangeOfValues.md#除外リスト) - [文字フォーマット](properties_Display.md#文字フォーマット) - [数値フォーマット](properties_Display.md#数値フォーマット) - [テキスト (True時)/テキスト (False時)](properties_Display.md#テキスト-true時-テキスト-false時) - [日付フォーマット](properties_Display.md#日付フォーマット) - [ピクチャーフォーマット](properties_Display.md#ピクチャーフォーマット) - [フォーカスの四角を隠す](properties_Appearance.md#フォーカスの四角を隠す) - [横スクロールバー](properties_Appearance.md#横スクロールバー) - [塗りカラー](properties_BackgroundAndBorder.md#背景色-塗りカラー) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [フォントカラー](properties_Text.md#フォントカラー) - [方向](properties_Text.md#方向) - [横揃え](properties_Text.md#横揃え) - [マルチスタイル](properties_Text.md#マルチスタイル) - [ピッカーの使用を許可](properties_Text.md#ピッカーの使用を許可) - [ドラッグ有効](properties_Action.md#ドラッグ有効) - [ドロップ有効](properties_Action.md#ドロップ有効)


---
## 入力の代替手段

フィールドや変数などの式は、フォーム内において入力オブジェクト以外を用いて表示することができます。具体的には以下の方法があります:

*   データベースのフィールドから [セレクション型のリストボックス](listbox_overview.md) へと、データを直接表示・入力することができます。
*   [ポップアップメニュー/ドロップダウンリスト](dropdownList_Overview.md) と [コンボボックス](comboBox_overview.md) オブジェクトを使用することによって、リストフィールドまたは変数をフォーム内にて直接表示することができます。
*   ブール型の式は [チェックボックス](checkbox_overview.md) や [ラジオボタン](radio_overview.md) オブジェクトを用いて提示することができます。