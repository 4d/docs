---
id: listOverview
title: 階層リスト
---

階層リストはフォームオブジェクトの一つで、展開/折りたたみ可能な一つ以上の階層を持つリスト形式でデータを表示するのに使用できます。

![](../assets/en/FormObjects/Hlist1.png)

展開/折りたたみアイコンは必要に応じて項目の左に自動的に表示されます。 階層リストのレベル数に制限はありません。

## 階層リストのデータソース

階層リストの中身は次の方法で初期化することができます:

- 既存の [選択リスト](properties_DataSource.md#選択リスト) を関連づけます。 選択リストはあらかじめデザインモードにてリストエディターを使って定義します。
- 階層リスト参照を直接 [変数あるいは式](properties_Object.md#変数あるいは式) に設定します。

ランタイムにおいては、4D ランゲージの [階層リスト](https://doc.4d.com/4Dv18/4D/18/Hierarchical-Lists.201-4504360.ja.html) コマンドを使って階層リストを管理しますが、その際には対象となるリストの _ListRef_ 参照を用います。

## ListRef とオブジェクト名

階層リストはメモリ上に存在する **ランゲージオブジェクト** であると同時に **フォームオブジェクト** でもあります。

**ランゲージオブジェクト** は倍長整数型のユニークな内部IDで参照されます (4D ランゲージリファレンスでは _ListRef_ と表記)。 この ID はリストを作成する `New list`、`Copy list`、`Load list`、`BLOB to list` から返されます。 ランゲージオブジェクトのインスタンスはひとつのみしかメモリ中に存在せず、このオブジェクトに対しておこなわれた変更は、これを使用しているすべての場所に即座に反映されます。

**フォームオブジェクト** はユニークである必要はありません。同じフォームや異なるフォーム上で同一の階層リストを使用することができます。 他のフォームオブジェクト同様、ランゲージ中でオブジェクトを指定するにはシンタックス (\*;"ListName") を使用します。

"ランゲージオブジェクト" としての階層リストと、"フォームオブジェクト" としての階層リストは、ListRef の値を格納した中間的な変数により接続されます。 たとえば、mylist [変数](properties_Object.md#変数あるいは式) をフォームオブジェクトに設定した場合には、次のように書けます:

```4d
mylist:=New list
```

特定のリストを使用している複数のフォームオブジェクトがある場合、それらにはそれぞれに固有の性質と、それらの間で共有される性質を持ちます。 以下の性質はリストフォームオブジェクトごとに固有のものです:

- 選択された項目
- 項目の展開/折りたたみ状況
- スクロールカーソルの位置

それ以外の性質 (フォント、フォントサイズ、スタイル、入力制御、カラー、リストの内容、アイコン等)  は他のリストフォームオブジェクトと共有され、個別に変更することはできません。
したがって、展開/折りたたみ状況に基づくコマンドやカレントの項目に関するコマンド、たとえば `Count list items` を (最後の `*` 引数を渡さずに) 使用するとき、どのフォームオブジェクトに対する処理なのかを明示的に指定することが重要です。

メモリ中の階層リストを指定するには、ランゲージコマンドで `ListRef` IDを使用しなければなりません。 フォーム上の階層リストオブジェクトを指定する場合は、コマンド中でシンタックス (\*;"ListName") を用いてオブジェクト名 (文字列) を使用します。

> フォームオブジェクト名に基づくシンタックスをプロパティ設定用のコマンドで使用することは、対象を指定オブジェクトに限定する意味ではなく、むしろ指定オブジェクトの状態に基づいてコマンドが動作することを意味します。 複数の階層リスト間で共有されている性質を変更すると、それらすべてに反映されます。
> たとえば、次のコードを実行すると:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

> ... _mylist1_ フォームオブジェクトに関連付けられた階層リスト項目のフォントを変更します。 コマンドは _mylist1_ オブジェクトの現在選択されている項目を対象としますが、変更はすべてのプロセスのすべてのリストに反映されます。

### @をサポート

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

いくつかの 4Dの汎用コマンドを使用して、フォーム上の階層リストオブジェクトの見た目を変更することができます。 これらのコマンドには、\* を用いたシンタックスを使用して階層リストのオブジェクト名を渡すか、あるいは標準シンタックスを使用して階層リストの ListRef 参照を格納している変数を渡します。

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

階層リストの特定のプロパティ (たとえば **入力可** 属性やカラーなど) は、3つの異なる方法で設定することができます: デザインモードのプロパティリスト、"オブジェクトプロパティ" テーマのコマンド、"階層リスト" テーマのコマンド。 これら 3つの方法すべてを使ってプロパティを設定した場合、以下の優先順位が適用されます:

1. "階層リスト" テーマのコマンド
2. 汎用のオブジェクトプロパティコマンド
3. プロパティリストのパラメーター

この原則は、コマンドが呼び出された順番に関係なく適用されます。 階層リストコマンドを使用して個々に項目のプロパティを変更すると、同等のオブジェクトプロパティコマンドをそのあとに呼び出したとしても、その項目に対しては効果を持たなくなります。 たとえば `SET LIST ITEM PROPERTIES` コマンドを使用して項目のカラーを変更すると、この項目に対して `OBJECT SET COLOR` コマンドは効果を持たなくなります。

## 位置あるいは参照による項目の管理

階層リストのコンテンツにアクセスするには、通常は位置または参照のいずれかを使用しておこないます。

- 位置を使用する場合には、4D は画面上に表示されているリスト項目の位置に基づいて項目を特定します。 つまり、結果は階層項目が展開されているか折りたたまれているかにより異なります。 複数のフォームオブジェクトで同一のリストを使用している場合、オブジェクトごとに展開/折りたたみの状態が異なることに注意が必要です。
- 参照を使用する場合には、リスト項目の _itemRef_ IDを参照します。 これにより、それぞれの項目を階層リスト中での位置や表示状態に関わらず特定できます。

### 項目参照番号を使用する (itemRef)

階層リストのそれぞれの項目は倍長整数型の参照番号 (_itemRef_) を持ちます。 この値は開発者が使うためのもので、4D は番号を維持するだけです。

> 警告: どの倍長整数値も参照として使用できますが、0だけは特別な意味を持ちます。 このテーマのほとんどのコマンドで、0は最後にリストに追加された項目を指定するのに使用されます。

参照番号を使用するにあたり、いくつかの Tips を紹介します:

1. 項目をユニーク値で識別する必要がない場合 (初心者レベル)

   - 最初の例として、アドレスブックで使用するタブシステムを構築するとします。 システムは選択されたタブの番号を返すので、それ以上の情報は必要ありません。 この場合、項目参照番号について心配する必要はありません。0以外の値を _itemRef_ に渡します。 なお、アドレスブックシステムの場合、デザインモードで A-Z のリストを定義することもできる点に留意してください。 また、プログラムを使えば、レコードがない文字を除いたリストを作成することもできます。
   - 2つ目の例は、データベースを利用すると同時に蓄積していくタイプのキーワードリストを考えます。 このリストはセッション終了時に `SAVE LIST` や `LIST TO BLOB` コマンドで保存され、セッション開始時に `Load list` や `BLOB to list` コマンドで再度読み込まれます。 このリストをフローティングパレットに表示し、ユーザーがキーワードをクリックすると、最前面のプロセスの選択されたエリアに項目テキストが挿入されます。 重要なのは、`Selected list items` コマンドは選択項目の位置を返すため、選択された項目のみを扱うということです。 この位置情報を `GET LIST ITEM` コマンドに渡せば、項目テキストが取得できます。 この例でも、個々の項目を識別する必要がないため、リスト構築の際は _itemRef_ 引数に 0以外の任意の数値を渡すことができます。

2. 部分的にリスト項目を識別する必要がある場合 (中級者レベル)\
   その項目を処理する際に必要となる情報をあらかじめ項目参照番号に格納することができます。この例は`APPEND TO LIST` コマンドの例題で説明しています。 この例題では、項目参照番号にレコード番号を格納しています。 また、[Department] レコード由来の項目と [Employees] レコード由来の項目を区別する必要があり、この点も例題にて説明されています。

3. すべての項目リストを個々に識別する必要がある場合 (上級者レベル)\
   リストの全レベルにおいて、個々の項目を識別する必要のある複雑な階層リスト管理プログラムを作成する必要があるとします。 これを実装する簡単な方法は独自のカウンターを使用することです。 `APPEND TO LIST` コマンドを使用して _hlList_ リストを作成するとします。 ここで _vhlCounter_ 変数を1に初期化します。 `APPEND TO LIST` や `INSERT IN LIST` を呼び出すたびに、このカウンターをインクリメントし `(vhlCounter:=vhlCounter+1)`、 カウンター値を項目参照番号に設定します。 項目を削除する場合でもカウンターをデクリメントしないことが重要です。つまりカウンターは増え続けるのみです。 この方法で、ユニークな項目参照番号を保証できます。 番号は倍長整数型なので、20億以上の項目をリストに追加したり挿入したりできます  (もっとも、こんなにも多くのデータを扱うのであれば、リストではなくテーブルを使用したほうが良いですが)。

> ビットワイズ演算子を使用して、項目参照番号に情報を格納することもできます。たとえば 2つの整数値、4バイト値、32個のブール値などです。

### どのような場合にユニークな参照番号が必要ですか?

階層リストをユーザーインタフェースとして使用し、クリックまたはドラッグにより選択された項目のみを処理する場合は、ほとんどの場合項目参照番号を必要としません。 `Selected list items` や `GET LIST ITEM` を使用すれば、現在選択されている項目を扱うことができます。 さらに `INSERT IN LIST` や `DELETE FROM LIST` などのコマンドは、選択された項目との相対位置でリストを操作できます。

基本的に、項目の選択に関係なく、プログラムで任意のリスト項目にアクセスする必要がある場合に項目参照番号が必要です。

## 編集可能項目

ユーザーが階層リストの項目を変更できるかどうかを管理することができます。階層リストの項目が修正可能である場合、**Alt+クリック** (Windows) または **Optionキー+クリック** (macOS) ショートカットを使用するか、または項目のテキスト上でロングクリックすると、編集できるようになります。

- データソースに関わらず、階層リストフォームオブジェクト全体を [入力可](properties_Entry.md#入力可) プロパティで管理することができます。

- また、リストエディターで作成したリストを用いて階層リストを生成する場合は、リストエディターの **編集可能項目** オプションを使用して、階層リストの項目の修正が可能かどうかを管理することができます。 詳細については [リストプロパティの設定](https://doc.4d.com/4Dv18/4D/18/Setting-list-properties.300-4575487.ja.html) を参照してください。

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
