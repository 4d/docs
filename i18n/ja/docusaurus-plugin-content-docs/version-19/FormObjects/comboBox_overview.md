---
id: comboBoxOverview
title: コンボボックス
---

コンボボックスは [ドロップダウンリスト](dropdownList_Overview.md#概要) と似ていますが、キーボードから入力されたテキストを受けいれる点と、二つの追加オプションがついている点が異なります。

![](../assets/en/FormObjects/combo_box.png)

基本的にコンボボックスは入力エリアと同じように取り扱い、オブジェクト、配列、または選択リストを一連のデフォルト値として使用します。

## コンボボックスの操作

入力エリアへの入力内容は、その他の入力フォームオブジェクトと同様に [`On Data Change`](Events/onDataChange.md) イベントを使用して管理します。

コンボボックスの初期化方法は、[ドロップダウンリスト](dropdownList_Overview.md#overview) とまったく同じで、オブジェクト、配列、または選択リストを使用できます。

### オブジェクトの使用

> この機能は 4Dプロジェクトでのみ利用可能です。

コンボボックスのデータソースとして、[コレクション](Concepts/dt_collection) を内包した [オブジェクト](Concepts/dt_object.md) を使用できます。 このオブジェクトには、次のプロパティが格納されていなくてはなりません:

| プロパティ          | 型               | 説明                                                                                                                                                                                |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | コレクション          | 必須 - スカラー値のコレクション。 すべての同じ型の値でなくてはなりません。 サポートされている型:<li>文字列</li><li>数値</li><li>日付</li><li>時間</li>空、または未定義の場合、コンボボックスは空になります |
| `currentValue` | Collection要素と同じ | ユーザーによる入力値                                                                                                                                                                        |

オブジェクトにその他のプロパティが含まれている場合、それらは無視されます。

ユーザーによってコンボボックスに入力されたテキストは、オブジェクトの `currentValue` プロパティが受け取ります。

### 配列の使用

配列を初期化する方法については、[ドロップダウンリスト](dropdownList_Overview.md#配列の使用) ページの **配列の使用** を参照ください。

ユーザーによってコンボボックスに入力されたテキストは、配列の 0番目の要素が受け取ります。

### 選択リストの使用

入力エリア (列挙型のフィールドまたは変数) の管理のためにコンボボックスを使用したい場合、フィールドまたは変数をフォームオブジェクトのデータソースとして直接参照することができます。 これにより列挙型のフィールド/変数を容易に管理できるようになります。
> 階層リストの場合、第一階層の値のみが表示・選択できます。

コンボボックスにフィールドや変数を関連付けるには、フォームオブジェクトの [変数あるいは式](properties_Object.md#変数あるいは式) 欄にフィールドまたは変数の名前を直接入力します。

フォームを実行すると、4D が自動的に入力中または表示中のコンボボックスの状態を管理します。ユーザーが値を選択すると、その値はフィールドに保存され、このフィールドの値はフォームが表示されたときにコンボボックスに表示されます:

詳細については、[ドロップダウンリスト](dropdownList_Overview.md#選択リストの使用) ページの **選択リストの使用** を参照ください。

## オプション

コンボボックスタイプのオブジェクトには、2つの専用オプションがあります:

- [自動挿入](properties_DataSource.md#自動挿入): このオプションがチェックされていると、オブジェクトに関連付けられたリストにない値をユーザーが入力した場合に、その値が自動的にデータソースに追加されます。
- [除外リスト](properties_RangeOfValues.md#除外リスト) (除外される値のリスト): 除外される値のリストを関連付けることができます。 ユーザーがこのリストに含まれる値を入力したとき、その入力は自動的に却下され、エラーメッセージが表示されます。
> [指定リスト](properties_RangeOfValues.md#指定リスト) は、コンボボックスに割り当てることができません。 ユーザーインターフェースにおいて、オブジェクト内にいくつかの指定された値を表示したいときには、[ドロップダウンリスト](dropdownList_Overview.md#概要) のオブジェクトを使用して下さい。

## プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型式タイプ) - [CSSクラス](properties_Object.md#cssクラス) - [選択リスト](properties_DataSource.md#選択リスト) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [文字フォーマット](properties_Display.md#文字フォーマット) - [日付フォーマット](properties_Display.md#日付フォーマット) - [時間フォーマット](properties_Display.md#時間フォーマット) - [表示状態](properties_Display.md#表示状態) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [ヘルプTips](properties_Help.md#ヘルプtips)  
