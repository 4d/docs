---
id: listOverview
title: 階層リスト
---

## 概要

階層リストはフォームオブジェクトの一つで、展開/折りたたみ可能な一つ以上の階層を持つリスト形式でデータを表示するのに使用できます。

![](assets/en/FormObjects/Hlist1.png)

展開/折りたたみアイコンは必要に応じて項目の左に自動的に表示されます。 階層リストのレベル数に制限はありません。


## 階層リストのデータソース

階層リストの中身は次の方法で初期化することができます:

- 既存の [選択リスト](properties_DataSource.md#選択リスト) を関連づけます。 選択リストはあらかじめデザインモードにてリストエディターを使って定義します。
- 階層リスト参照を直接 [変数あるいは式](properties_Object.md#変数あるいは式) に設定します。

In both cases, you manage a hierarchical list at runtime through its *ListRef* reference, using the [Hierarchical list](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) commands in the 4D language.


## ListRef とオブジェクト名

A hierarchical list is both a **language object** existing in memory and a **form object**.

The **language object** is referenced by an unique internal ID of the Longint type, designated by *ListRef* in the 4D Language Reference. この ID はリストを作成する `New list`、`Copy list`、`Load list`、`BLOB to list` から返されます。 ランゲージオブジェクトのインスタンスはひとつのみしかメモリ中に存在せず、このオブジェクトに対しておこなわれた変更は、これを使用しているすべての場所に即座に反映されます。

The **form object** is not necessarily unique: there may be several representations of the same hierarchical list in the same form or in different ones. 他のフォームオブジェクト同様、ランゲージ中でオブジェクトを指定するにはシンタックス (*;"ListName") を使用します。

"ランゲージオブジェクト" としての階層リストと、"フォームオブジェクト" としての階層リストは、ListRef の値を格納した中間的な変数により接続されます。 たとえば、mylist [変数](properties_Object.md#変数あるいは式) をフォームオブジェクトに設定した場合には、次のように書けます:

```4d
mylist:=New list
```

特定のリストを使用している複数のフォームオブジェクトがある場合、それらにはそれぞれに固有の性質と、それらの間で共有される性質を持ちます。 以下の性質はリストフォームオブジェクトごとに固有のものです:

- 選択された項目
- 項目の展開/折りたたみ状況
- スクロールカーソルの位置

それ以外の性質 (フォント、フォントサイズ、スタイル、入力制御、カラー、リストの内容、アイコン等) は他のリストフォームオブジェクトと共有され、個別に変更することはできません。 したがって、展開/折りたたみ状況に基づくコマンドやカレントの項目に関するコマンド、たとえば `Count list items` を (最後の `*` 引数を渡さずに) 使用するとき、どのフォームオブジェクトに対する処理なのかを明示的に指定することが重要です。

メモリ中の階層リストを指定するには、ランゲージコマンドで `ListRef` IDを使用しなければなりません。 フォーム上の階層リストオブジェクトを指定する場合は、コマンド中でシンタックス (*;"ListName") を用いてオブジェクト名 (文字列) を使用します。

> フォームオブジェクト名に基づくシンタックスをプロパティ設定用のコマンドで使用することは、対象を指定オブジェクトに限定する意味ではなく、むしろ指定オブジェクトの状態に基づいてコマンドが動作することを意味します。 複数の階層リスト間で共有されている性質を変更すると、それらすべてに反映されます。 たとえば、次のコードを実行すると:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```
> ... you are indicating that you want to modify the font of the hierarchical list item associated with the *mylist1* form object. The command will take the current item of the *mylist1* object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.

### @のサポート

他のオブジェクトプロパティ管理コマンドのように、`ListName` 引数で “@” 文字を使用できます。 このシンタックスは、フォーム上の複数のオブジェクトを指定するために使用されます。 しかし階層リストコマンドのコンテキストにおいては、これはすべての場合に適用されるわけではありません。 コマンドのタイプにより、このシンタックスは 2つの異なる効果があります:

- プロパティ設定用のコマンドにおいて、このシンタックスは該当する名前のオブジェクトを対象とします (標準の動作)。 たとえば、引数 "LH@" は、オブジェクト名が "LH" で始まる階層リストを指定します。
    - `DELETE FROM LIST`
    - `INSERT IN LIST`
    - `SELECT LIST ITEMS BY POSITION`
    - `SET LIST ITEM`
    - `SET LIST ITEM FONT`
    - `SET LIST ITEM ICON`
    - `SET LIST ITEM PARAMETER`
    - `SET LIST ITEM PROPERTIES`

- プロパティ取得用のコマンドにおいて、このシンタックスは該当する名前を持つ最初のオブジェクトを対象とします:
    - `Count list items`
    - `Find in list`
    - `GET LIST ITEM`
    - `Get list item font`
    - `GET LIST ITEM ICON`
    - `GET LIST ITEM PARAMETER`
    - `GET LIST ITEM PROPERTIES`
    - `List item parent`
    - `List item position`
    - `Selected list items`


## 階層リストに対し利用できる汎用コマンド

いくつかの 4Dの汎用コマンドを使用して、フォーム上の階層リストオブジェクトの見た目を変更することができます。 これらのコマンドには、* を用いたシンタックスを使用して階層リストのオブジェクト名を渡すか、あるいは標準シンタックスを使用して階層リストの ListRef 参照を格納している変数を渡します。

- `OBJECT SET FONT`
- `OBJECT SET FONT STYLE`
- `OBJECT SET FONT SIZE`
- `OBJECT SET COLOR`
- `OBJECT SET FILTER`
- `OBJECT SET ENTERABLE`
- `OBJECT SET SCROLLBAR`
- `OBJECT SET SCROLL POSITION`
- `OBJECT SET RGB COLORS`

> 注記: `OBJECT SET SCROLL POSITION` コマンドを除き、これらのコマンドでオブジェクト名を指定したとしても、変更は同じリストを使うすべてのオブジェクトに反映されます。

## プロパティコマンドの優先順位

Certain properties of hierarchical lists (for example, the **Enterable** attribute or the color) can be set in different ways: in the form properties, via a command of the “Object Properties” theme or via a command of the “Hierarchical Lists” theme. これら 3つの方法すべてを使ってプロパティを設定した場合、以下の優先順位が適用されます:

1. "階層リスト" テーマのコマンド
2. 汎用のオブジェクトプロパティコマンド
3. プロパティリストのパラメーター

この原則は、コマンドが呼び出された順番に関係なく適用されます。 階層リストコマンドを使用して個々に項目のプロパティを変更すると、同等のオブジェクトプロパティコマンドをそのあとに呼び出したとしても、その項目に対しては効果を持たなくなります。 たとえば `SET LIST ITEM PROPERTIES` コマンドを使用して項目のカラーを変更すると、この項目に対して `OBJECT SET COLOR` コマンドは効果を持たなくなります。


## 位置あるいは参照による項目の管理

階層リストのコンテンツにアクセスするには、通常は位置または参照のいずれかを使用しておこないます。

- 位置を使用する場合には、4D は画面上に表示されているリスト項目の位置に基づいて項目を特定します。 つまり、結果は階層項目が展開されているか折りたたまれているかにより異なります。 複数のフォームオブジェクトで同一のリストを使用している場合、オブジェクトごとに展開/折りたたみの状態が異なることに注意が必要です。
- When you work by reference, 4D bases itself on the *itemRef* ID number of the list items. これにより、それぞれの項目を階層リスト中での位置や表示状態に関わらず特定できます。


### 項目参照番号を使用する (itemRef)

Each item of a hierarchical list has a reference number (*itemRef*) of the Longint type. この値は開発者が使うためのもので、4D は番号を維持するだけです。

> 警告: どの倍長整数値も参照として使用できますが、0だけは特別な意味を持ちます。 このテーマのほとんどのコマンドで、0は最後にリストに追加された項目を指定するのに使用されます。

参照番号を使用するにあたり、いくつかの Tips を紹介します:

1. 項目をユニーク値で識別する必要がない場合 (初心者レベル)

    - 最初の例として、アドレスブックで使用するタブシステムを構築するとします。 システムは選択されたタブの番号を返すので、それ以上の情報は必要ありません。 In this case, do not worry about item reference numbers: pass any value (except 0) in the *itemRef* parameter. なお、アドレスブックシステムの場合、デザインモードで A-Z のリストを定義することもできる点に留意してください。 また、プログラムを使えば、レコードがない文字を除いたリストを作成することもできます。
    - 2つ目の例は、データベースを利用すると同時に蓄積していくタイプのキーワードリストを考えます。 このリストはセッション終了時に `SAVE LIST` や `LIST TO BLOB` コマンドで保存され、セッション開始時に `Load list` や `BLOB to list` コマンドで再度読み込まれます。 このリストをフローティングパレットに表示し、ユーザーがキーワードをクリックすると、最前面のプロセスの選択されたエリアに項目テキストが挿入されます。 重要なのは、`Selected list items` コマンドは選択項目の位置を返すため、選択された項目のみを扱うということです。 この位置情報を `GET LIST ITEM` コマンドに渡せば、項目テキストが取得できます。 Here again, you do not need to identify each item individually; you can pass any value (except 0) in the *itemRef* parameter.

2. You need to partially identify the list items (intermediary level).  
   You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the `APPEND TO LIST` command. この例題では、項目参照番号にレコード番号を格納しています。 また、[Department] レコード由来の項目と [Employees] レコード由来の項目を区別する必要があり、この点も例題にて説明されています。

3. You need to identify all the list items individually (advanced level).  
   You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. これを実装する簡単な方法は独自のカウンターを使用することです。 Suppose that you create a *hlList* list using the `APPEND TO LIST` command. At this stage, you initialize a counter *vhlCounter* to 1. `APPEND TO LIST` や `INSERT IN LIST` を呼び出すたびに、このカウンターをインクリメントし `(vhlCounter:=vhlCounter+1)`、 カウンター値を項目参照番号に設定します。 項目を削除する場合でもカウンターをデクリメントしないことが重要です。つまりカウンターは増え続けるのみです。 この方法で、ユニークな項目参照番号を保証できます。 Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)

> ビットワイズ演算子を使用して、項目参照番号に情報を格納することもできます。たとえば 2つの整数値、4バイト値、32個のブール値などです。

### どのような場合にユニークな参照番号が必要ですか?

階層リストをユーザーインタフェースとして使用し、クリックまたはドラッグにより選択された項目のみを処理する場合は、ほとんどの場合項目参照番号を必要としません。 `Selected list items` や `GET LIST ITEM` を使用すれば、現在選択されている項目を扱うことができます。 さらに `INSERT IN LIST` や `DELETE FROM LIST` などのコマンドは、選択された項目との相対位置でリストを操作できます。

基本的に、項目の選択に関係なく、プログラムで任意のリスト項目にアクセスする必要がある場合に項目参照番号が必要です。


## 編集可能項目

You can control whether hierarchical list items can be modified by the user by using the **Alt+click**(Windows) / **Option+click** (macOS) shortcut, or by carrying out a long click on the text of the item.

- データソースに関わらず、階層リストフォームオブジェクト全体を [入力可](properties_Entry.md#入力可) プロパティで管理することができます。

- In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the **Modifiable Element** option in the Lists editor. 詳細については [リストプロパティの設定](https://doc.4d.com/4Dv18/4D/18/Setting-list-properties.300-4575487.ja.html) を参照してください。


## プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [CSSクラス](properties_Object.md#CSSクラス) - [選択リスト](properties_DataSource.md#選択リスト) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [入力可](properties_Entry.md#入力可) - [フォーカス可](properties_Entry.md#フォーカス可) - [入力フィルター](properties_Entry.md#入力フィルター) - [表示状態](properties_Display.md#表示状態) - [フォーカスの四角を隠す](properties_Appearance.md#フォーカスの四角を隠す) - [横スクロールバー](properties_Appearance.md#横スクロールバー) - [縦スクロールバー](properties_Appearance.md#縦スクロールバー) - [塗りカラー](properties_BackgroundAndBorder.md#背景色-塗りカラー) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [ヘルプTips](properties_Help.md#ヘルプTips) - [ドラッグ有効](properties_Action.md#ドラッグ有効) - [ドロップ有効](properties_Action.md#ドロップ有効) - [複数選択可](properties_Action.md#複数選択可)
