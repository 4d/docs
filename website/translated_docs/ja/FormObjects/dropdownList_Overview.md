---
id: dropdownListOverview
title: ドロップダウンリスト
---

## 概要

ドロップダウンリストは、ユーザーがリストから選択をおこなえるようにするためのオブジェクトです。 ドロップダウンリストに表示される項目は、配列、選択リスト、または標準アクションを用いて管理します。

macOS においては、ドロップダウンリストは "ポップアップメニュー" とも呼ばれます。 どちらの名前も同じタイプのオブジェクトを指します。 次の例に示すように、ドロップダウンリストの外観はプラットフォームによって若干異なります:

![](assets/en/FormObjects/popupDropdown_appearance.png)


## 配列の使用

[配列](Concepts/arrays.md) とは、メモリー内の値のリストのことで、配列の名前によって参照されます。 ドロップダウンリストをクリックすると、その配列を値のリストとして表示します。

値のリストを配列にロードすることで、ドロップダウンリストが初期化されます。 これは複数の方法でおこなうことができます:

* プロパティリストの[データソース](properties_DataSource.md)テーマにおいて、選択リストの項目で "\<Static List>" を選び、デフォルト値のリストを入力します。 これらのデフォルト値は、配列へと自動的にロードされます。 オブジェクトに関連付けた変数名を使用して、この配列を参照することができます。

* オブジェクトが表示される前に、値を配列要素に代入するコードを実行します。 たとえば:

```4d
  ARRAY TEXT(aCities;6) 
  aCities{1}:="Philadelphia" 
  aCities{2}:="Pittsburg" 
  aCities{3}:="Grand Blanc" 
  aCities{4}:="Bad Axe" 
  aCities{5}:="Frostbite Falls" 
  aCities{6}:="Green Bay" 
```
この場合、フォームのオブジェクトに関連付けた変数名は *aCities* でなければなりません。 このコードをフォームメソッド内に置き、`On Load` フォームイベント発生時に実行されるようにします。

*  オブジェクトが表示される前に、[LIST TO ARRAY](https://doc.4d.com/4Dv18/4D/18/LIST-TO-ARRAY.301-4504606.ja.html) コマンドを使ってリストの値を配列にロードします。 たとえば:

```4d
   LIST TO ARRAY("Cities";aCities)
```

 この場合も、フォームのオブジェクトに関連付けた変数名は *aCities* でなければなりません。 このコードは、前述した代入命令文の代わりに実行できます。

ユーザーがおこなった選択内容をフィールドに保存する必要があれば、レコードの登録後に代入命令を実行します。 たとえば、次のような Case文のコードを作成します:

```4d
  Case of
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) // 新規レコードの場合
          aCities:=3 // デフォルトの値を表示します
       Else // 既存レコードの場合には、保存された値を表示します
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) // ユーザーが選択を変更した場合
       City:=aCities{aCities} // フィールドに新しい値を代入
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```

プロパティリストのイベントテーマにおいて、作成した Case 文の中で使用する各イベントを選択して有効化ます。 配列には常に有限数の項目が納められます。 項目リストは動的であり、メソッドを用いて変更可能です。 配列の項目は変更・並び替え・追加することができます。


## 選択リストの使用

列挙型のフィールドまたは変数の管理のためにドロップダウンリストを使用したい場合、フィールドまたは変数をオブジェクトのデータソースとして直接参照することができます。 これにより列挙型のフィールド/変数を容易に管理できるようになります。
> 階層リストの場合、第一階層の値のみが表示・選択できます。

たとえば、"White"、"Blue"、"Green"、"Red" という値のみを含む "Color" というフィールドがあった場合、これらの値を含むリストを作成し、それを "Color" フィールドを参照するポップアップメニューに関連付けることができます。 こうすることによって、あとは 4D が自動的にカレント値の入力や表示に関して管理してくれます。

ポップアップメニュー/ドロップダウンリストやコンボボックスをフィールドや変数と関連付けるには、オブジェクトの [変数あるいは式](properties_Object.md#変数あるいは式) 欄にフィールドまたは変数の名前を直接入力します。

フォームを実行すると、4D が自動的に入力中または表示中のポップアップメニュー/コンボボックスの状態を管理します。ユーザーが値を選択すると、その値はフィールドに保存され、このフィールドの値はフォームが表示されたときにポップアップメニューに表示されます:

![](assets/en/FormObjects/popupDropdown_choiceList.png)
> この原理は、配列を用いてオブジェクトを初期化する方法と組み合わせることはできません。 変数あるいは式の欄にフィールド名を入力した場合は、必ず選択リストを使用します。

### 関連付け
ポップアップメニュー/ドロップダウンリストの式としてフィールドを、さらにデータソースに選択リストを設定した場合には、[関連付け](properties_DataSource.md#関連付け) プロパティが利用できます。"リスト項目の値" または "リスト項目の参照番号" を選択してデータの保存方式を指定することができます。 このオプションにより、保存するデータのサイズを最適化できるようになります。

## 標準アクションの使用
ポップアップメニュー/ドロップダウンリストには、標準アクションを割り当てることができます (プロパティリストの "[アクション](properties_Action.md#標準アクション)" テーマ)。 このオブジェクトでは、項目のサブリストを表示するアクションのみがサポートされます (例外: goto page アクション)。 たとえば、`backgroundColor` 標準アクションを選択した場合、オブジェクトはランタイムにおいて背景色の自動リストを表示します。 この自動リストは、各項目が任意の標準アクションを割り当てられた選択リストを設定することで上書きすることもできます。

詳細な情報に関しては、[標準アクション](https://doc.4d.com/4Dv18/4D/18/Standard-actions.300-4575620.ja.html) の章を参照ください。

## プロパティ一覧
[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型) - [値を記憶](properties_Object.md#値を記憶) - [CSSクラス](properties_Object.md#CSSクラス) - [選択リスト](properties_DataSource.md#選択リスト) - [関連付け](properties_DataSource.md#関連付け) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [フォーカス可](properties_Entry.md#フォーカス可) - [文字フォーマット](properties_Display.md#文字フォーマット) - [日付フォーマット](properties_Display.md#日付フォーマット) - [時間フォーマット](properties_Display.md#時間フォーマット) - [表示状態](properties_Display.md#表示状態) - [レンダリングしない](properties_Display.md#レンダリングしない) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [ヘルプTips](properties_Help.md#ヘルプTips) - [標準アクション](properties_Action.md#標準アクション)  