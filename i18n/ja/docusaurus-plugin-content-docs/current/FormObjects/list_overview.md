---
id: listOverview
title: 階層リスト
---

階層リストはフォームオブジェクトの一つで、展開/折りたたみ可能な一つ以上の階層を持つリスト形式でデータを表示するのに使用できます。

![](../assets/en/FormObjects/Hlist1.png)

展開/折りたたみアイコンは必要に応じて項目の左に自動的に表示されます。 階層リストのレベル数に制限はありません。

## 階層リストのデータソース

階層リストの中身は次の方法で初期化することができます:

- 既存の [選択リスト](properties_DataSource.md#選択リスト) を関連づけます。 選択リストはあらかじめデザインモードにてリストエディターを使って定義します。 選択リストはあらかじめデザインモードにてリストエディターを使って定義します。
- 階層リスト参照を直接 [変数あるいは式](properties_Object.md#変数あるいは式) に設定します。

どちらの場合においても、階層リストはランタイムでは *ListRef* の参照を通して、4D ランゲージの[階層リスト](../commands/theme/Hierarchical_Lists) のコマンドを使用して管理します。

## ListRef とオブジェクト名

階層リストはメモリ上に存在する **ランゲージオブジェクト** であると同時に **フォームオブジェクト** でもあります。

**ランゲージオブジェクト** は倍長整数型のユニークな内部IDで参照されます (4D ランゲージリファレンスでは *ListRef* と表記)。 This ID is returned by the commands that can be used to create lists: [`New list`](../commands/new-list), [`Copy list`](../commands/copy-list), [`Load list`](../commands/load-list), [`BLOB to list`](../commands/blob-to-list). ランゲージオブジェクトのインスタンスはひとつのみしかメモリ中に存在せず、このオブジェクトに対しておこなわれた変更は、これを使用しているすべての場所に即座に反映されます。

**フォームオブジェクト** はユニークである必要はありません。同じフォームや異なるフォーム上で同一の階層リストを使用することができます。 他のフォームオブジェクト同様、ランゲージ中でオブジェクトを指定するにはシンタックス (\*;"ListName") を使用します。 他のフォームオブジェクト同様、ランゲージ中でオブジェクトを指定するにはシンタックス (\*;"ListName") を使用します。

"ランゲージオブジェクト" としての階層リストと、"フォームオブジェクト" としての階層リストは、ListRef の値を格納した中間的な変数により接続されます。 たとえば、mylist [変数](properties_Object.md#変数あるいは式) をフォームオブジェクトに設定した場合には、次のように書けます:

```4d
mylist:=New list
```

特定のリストを使用している複数のフォームオブジェクトがある場合、それらにはそれぞれに固有の性質と、それらの間で共有される性質を持ちます。 以下の性質はリストフォームオブジェクトごとに固有のものです:

- 選択された項目
- 項目の展開/折りたたみ状況
- スクロールカーソルの位置

それ以外の性質 (フォント、フォントサイズ、スタイル、入力制御、カラー、リストの内容、アイコン等)  は他のリストフォームオブジェクトと共有され、個別に変更することはできません。
Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example [`Count list items`](../commands/count-list-items) (when the final `*` parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity.

メモリ中の階層リストを指定するには、ランゲージコマンドで `ListRef` IDを使用しなければなりません。 フォーム上の階層リストオブジェクトを指定する場合は、コマンド中でシンタックス (\*;"ListName") を用いてオブジェクト名 (文字列) を使用します。 フォーム上の階層リストオブジェクトを指定する場合は、コマンド中でシンタックス (\*;"ListName") を用いてオブジェクト名 (文字列) を使用します。

> フォームオブジェクト名に基づくシンタックスをプロパティ設定用のコマンドで使用することは、対象を指定オブジェクトに限定する意味ではなく、むしろ指定オブジェクトの状態に基づいてコマンドが動作することを意味します。 複数の階層リスト間で共有されている性質を変更すると、それらすべてに反映されます。
> たとえば、次のコードを実行すると:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

> ... *mylist1* フォームオブジェクトに関連付けられた階層リスト項目のフォントを変更します。 コマンドは *mylist1* オブジェクトの現在選択されている項目を対象としますが、変更はすべてのプロセスのすべてのリストに反映されます。

### @をサポート

As with [other object property management commands](../FormObjects/formObjects_overview.md#accessing-form-objects-using-their-name-or-their-data-source-in-the-4d-language), it is possible to use the “@” character in the `ListName` parameter. このシンタックスは、フォーム上の複数のオブジェクトを指定するために使用されます。 しかし階層リストコマンドのコンテキストにおいては、これはすべての場合に適用されるわけではありません。 コマンドのタイプにより、このシンタックスは 2つの異なる効果があります:

- プロパティ設定用のコマンドにおいて、このシンタックスは該当する名前のオブジェクトを対象とします (標準の動作)。 たとえば、引数 "LH@" は、オブジェクト名が "LH" で始まる階層リストを指定します。
  - [`DELETE FROM LIST`](../commands/delete-from-list)
  - [`INSERT IN LIST`](../commands/insert-in-list)
  - [`SELECT LIST ITEMS BY POSITION`](../commands/select-list-items-by-position)
  - [`SET LIST ITEM`](../commands/set-list-item)
  - [`SET LIST ITEM FONT`](../commands/set-list-item-font)
  - [`SET LIST ITEM ICON`](../commands/set-list-item-icon)
  - [`SET LIST ITEM PARAMETER`](../commands/set-list-item-parameter)
  - [`SET LIST ITEM PROPERTIES`](../commands/set-list-item-properties)

- プロパティ取得用のコマンドにおいて、このシンタックスは該当する名前を持つ最初のオブジェクトを対象とします:
  - [`Count list items`](../commands/count-list-items)
  - [`Find in list`](../commands/find-in-list)
  - [`GET LIST ITEM`](../commands/get-list-item)
  - [`Get list item font`](../commands/get-list-item-font)
  - [`GET LIST ITEM ICON`](../commands/get-list-item-icon)
  - [`GET LIST ITEM PARAMETER`](../commands/get-list-item-parameter)
  - [`GET LIST ITEM PROPERTIES`](../commands/get-list-item-properties)
  - [`List item parent`](../commands/list-item-parent)
  - [`List item position`](../commands/list-item-position)
  - [`Selected list items`](../commands/selected-list-items)

## 階層リストに対し利用できる汎用コマンド

いくつかの 4Dの汎用コマンドを使用して、フォーム上の階層リストオブジェクトの見た目を変更することができます。 これらのコマンドには、\* を用いたシンタックスを使用して階層リストのオブジェクト名を渡すか、あるいは標準シンタックスを使用して階層リストの ListRef 参照を格納している変数を渡します。

- [`OBJECT SET FONT`](../commands/object-set-font)
- [`OBJECT SET FONT STYLE`](../commands/object-set-font-style)
- [`OBJECT SET FONT SIZE`](../commands/object-set-font-size)
- [`OBJECT SET FILTER`](../commands/object-set-filter)
- [`OBJECT SET ENTERABLE`](../commands/object-set-enterable)
- [`OBJECT SET SCROLLBAR`](../commands/object-set-scrollbar)
- [`OBJECT SET SCROLL POSITION`](../commands/object-set-scroll-position)
- [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors)

> Reminder: Except [`OBJECT SET SCROLL POSITION`](../commands/object-set-scroll-position), these commands modify all the representations of the same list, even if you only specify a list via its object name.

## プロパティコマンドの優先順位

階層リストの特定のプロパティ (たとえば **入力可** 属性やカラーなど) は、3つの異なる方法で設定することができます: デザインモードのプロパティリスト、"オブジェクトプロパティ" テーマのコマンド、"階層リスト" テーマのコマンド。 これら 3つの方法すべてを使ってプロパティを設定した場合、以下の優先順位が適用されます: これら 3つの方法すべてを使ってプロパティを設定した場合、以下の優先順位が適用されます:

1. "階層リスト" テーマのコマンド
2. 汎用のオブジェクトプロパティコマンド
3. プロパティリストのパラメーター

この原則は、コマンドが呼び出された順番に関係なく適用されます。 階層リストコマンドを使用して個々に項目のプロパティを変更すると、同等のオブジェクトプロパティコマンドをそのあとに呼び出したとしても、その項目に対しては効果を持たなくなります。 For example, if the color of an item is modified via the [`SET LIST ITEM PROPERTIES`](../commands/set-list-item-properties) command, the `OBJECT SET COLOR` command will have no effect on this item.

## 位置あるいは参照による項目の管理

階層リストのコンテンツにアクセスするには、通常は位置または参照のいずれかを使用しておこないます。

- 位置を使用する場合には、4D は画面上に表示されているリスト項目の位置に基づいて項目を特定します。 つまり、結果は階層項目が展開されているか折りたたまれているかにより異なります。 複数のフォームオブジェクトで同一のリストを使用している場合、オブジェクトごとに展開/折りたたみの状態が異なることに注意が必要です。
- 階層リストのそれぞれの項目は倍長整数型の参照番号 (*itemRef*) を持ちます。 この値は開発者が使うためのもので、4D は番号を維持するだけです。 これにより、それぞれの項目を階層リスト中での位置や表示状態に関わらず特定できます。

### 項目参照番号を使用する (itemRef)

階層リストのそれぞれの項目は倍長整数型の参照番号 (*itemRef*) を持ちます。 この値は開発者が使うためのもので、4D は番号を維持するだけです。

> 警告: どの倍長整数値も参照として使用できますが、0だけは特別な意味を持ちます。 このテーマのほとんどのコマンドで、0は最後にリストに追加された項目を指定するのに使用されます。

参照番号を使用するにあたり、いくつかの Tips を紹介します:

1. 項目をユニーク値で識別する必要がない場合 (初心者レベル)

   - 最初の例として、アドレスブックで使用するタブシステムを構築するとします。 システムは選択されたタブの番号を返すので、それ以上の情報は必要ありません。 この場合、項目参照番号について心配する必要はありません。0以外の値を *itemRef* に渡します。 なお、アドレスブックシステムの場合、デザインモードで A-Z のリストを定義することもできる点に留意してください。 また、プログラムを使えば、レコードがない文字を除いたリストを作成することもできます。
   - 2つ目の例は、データベースを利用すると同時に蓄積していくタイプのキーワードリストを考えます。 You can save this list at the end of each session by using the [`SAVE LIST`](../commands/save-list) or [`LIST TO BLOB`](../commands/list-to-blob) commands and reload it at the beginning of each new session using the [`Load list`](../commands/load-list) or [`BLOB to list`](../commands/blob-to-list) commands. このリストをフローティングパレットに表示し、ユーザーがキーワードをクリックすると、最前面のプロセスの選択されたエリアに項目テキストが挿入されます。 The important thing is that you only process the item selected, because the [`Selected list items`](../commands/selected-list-items) command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the [`GET LIST ITEM`](../commands/get-list-item) command. この例でも、個々の項目を識別する必要がないため、リスト構築の際は *itemRef* 引数に 0以外の任意の数値を渡すことができます。

2. 部分的にリスト項目を識別する必要がある場合 (中級者レベル)  
   You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the [`APPEND TO LIST`](../commands/append-to-list) command. この例題では、項目参照番号にレコード番号を格納しています。 また、[Department] レコード由来の項目と [Employees] レコード由来の項目を区別する必要があり、この点も例題にて説明されています。

3. すべての項目リストを個々に識別する必要がある場合 (上級者レベル)  
   リストの全レベルにおいて、個々の項目を識別する必要のある複雑な階層リスト管理プログラムを作成する必要があるとします。 これを実装する簡単な方法は独自のカウンターを使用することです。 Suppose that you create a *hlList* list using the [`APPEND TO LIST`](../commands/append-to-list) command. ここで *vhlCounter* 変数を1に初期化します。 Each time you call [`APPEND TO LIST`](../commands/append-to-list) or [`INSERT IN LIST`](../commands/insert-in-list), you increment this counter `(vhlCounter:=vhlCounter+1)`, and you pass the counter number as the item reference number. 項目を削除する場合でもカウンターをデクリメントしないことが重要です。 つまりカウンターは増え続けるのみです。 この方法で、ユニークな項目参照番号を保証できます。 番号は倍長整数型なので、20億以上の項目をリストに追加したり挿入したりできます  (もっとも、こんなにも多くのデータを扱うのであれば、リストではなくテーブルを使用したほうが良いですが)。

> ビットワイズ演算子を使用して、項目参照番号に情報を格納することもできます。 たとえば 2つの整数値、4バイト値、32個のブール値などです。

### どのような場合にユニークな参照番号が必要ですか?

階層リストをユーザーインタフェースとして使用し、クリックまたはドラッグにより選択された項目のみを処理する場合は、ほとんどの場合項目参照番号を必要としません。 Using [`Selected list items`](../commands/selected-list-items) and [`GET LIST ITEM`](../commands/get-list-item) you have all you need to deal with the currently selected item. In addition, commands such as [`INSERT IN LIST`](../commands/insert-in-list) and [`DELETE FROM LIST`](../commands/delete-from-list) allow you to manipulate the list “relatively” with respect to the selected item.

基本的に、項目の選択に関係なく、プログラムで任意のリスト項目にアクセスする必要がある場合に項目参照番号が必要です。

## 編集可能項目

ユーザーが階層リストの項目を変更できるかどうかを管理することができます。階層リストの項目が修正可能である場合、**Alt+クリック** (Windows) または **Optionキー+クリック** (macOS) ショートカットを使用するか、または項目のテキスト上でロングクリックすると、編集できるようになります。

- データソースに関わらず、階層リストフォームオブジェクト全体を [入力可](properties_Entry.md#入力可) プロパティで管理することができます。

- また、リストエディターで作成したリストを用いて階層リストを生成する場合は、リストエディターの **編集可能項目** オプションを使用して、階層リストの項目の修正が可能かどうかを管理することができます。 詳細については [リストプロパティの設定](https://doc.4d.com/4Dv20/4D/20.2/Setting-list-properties.300-6750359.ja.html#1350157) を参照してください。 詳細については [リストプロパティの設定](https://doc.4d.com/4Dv20/4D/20.2/Setting-list-properties.300-6750359.ja.html#1350157) を参照してください。

## プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [CSSクラス](properties_Object.md#cssクラス) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [入力可](properties_Entry.md#入力可) - [フォーカス可](properties_Entry.md#フォーカス可) - [選択リスト](properties_DataSource.md#選択リスト) - [フォーカス可](properties_Entry.md#フォーカス可) - [表示状態](properties_Display.md#表示状態) - [フォーカスの四角を隠す](properties_Appearance.md#フォーカスの四角を隠す) - [横スクロールバー](properties_Appearance.md#横スクロールバー) - [縦スクロールバー](properties_Appearance.md#縦スクロールバー) - [塗りカラー](properties_BackgroundAndBorder.md#背景色-塗りカラー) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [ドラッグ有効](properties_Action.md#ドラッグ有効) - [ドロップ有効](properties_Action.md#ドロップ有効) - [複数選択可](properties_Action.md#複数選択可) - [ヘルプTips](properties_Help.md#ヘルプtips)

## サポートされるイベント

[On After Edit](../Events/onAfterEdit.md) - [On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Collapse](../Events/onCollapse.md) - [On Data Change](../Events/onDataChange.md) - [On Delete Action](../Events/onDeleteAction.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Expand](../Events/onExpand.md) - [On Getting focus](../Events/onGettingFocus.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Selection Change](../Events/onSelectionChange.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)