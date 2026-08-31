---
id: drag-and-drop
title: ドラッグ&ドロップ
---

## 概要

4Dにはフォームやアプリケーションのオブジェクト間で動作する組み込のドラック＆ドロップ機能があります。 一つのオブジェクトを同一のウインドウ内、または別のウインドウにドラック＆ドロップすることが出来ます。 言い換えれば、同一のプロセスまたは別のプロセスに対してドラック＆ドロップすることが出来ます。

またオブジェクトを4Dフォームと他のアプリケーション間でドラッグ＆ドロップできます。 例えばPNG ピクチャを4D のピクチャフィールドにドラッグ＆ドロップできます。 またワードプロセッサアプリケーションでテキストを選択し、4D のテキスト変数やリストボックスなどにドロップできます。

そして、フォームが最前面になくとも、アプリケーションに直接オブジェクトをドロップできます。 [`On Drop` データベースメソッド](../commands-legacy/on-drop-database-method.md) を使用して、このケースのドラッグ＆ドロップを管理できます。 つまり、例えば、4D アプリケーションアイコンに4D Write Pro ドキュメントをドロップして開くことができます。

4D では二つのドラッグ＆ドロップモードを提供しています:

- ドラッグ&ドロップオペレーション全体がプログラマーによって管理される**カスタムモード**。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。 これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。
- ドラッグ&ドロップオペレーションによってあるオブジェクトから別のオブジェクトへと、データが自動的にコピーあるいは移動される**自動モード**。 このモードはテキストベースのオブジェクトと(一部の)ピクチャーにおいて利用可能で、プロパティをチェックするだけで有効化されます。

## ドラッグ可能オブジェクトとドロップ可能オブジェクト

複数のフォームオブジェクトはカスタムモードまたは自動モードにおいてドラッグ可/ドロップ可に設定可能です(以下参照)。 デフォルトで、新しく作成されたオブジェクトはドラッグもドロップもできません("none" 値)。 これらのプロパティを設定するかどうかは開発者に任されています。

あるオブジェクトから別のオブジェクトにドラッグ&ドロップを実行するには、[**ドラッグ可** プロパティ](../FormObjects/properties_Action.md#ドラッグ有効) を"自動" あるいは "カスタム" に設定する必要があります。 ドラッグ&ドロップ処理では、ドラッグされるオブジェクトがソースオブジェクトになります。

あるオブジェクトをドラッグ&ドロップ処理のドロップ先にするには、[**ドロップ可** プロパティ](../FormObjects/properties_Action.md#ドロップ有効) を "自動" あるいは "カスタム" に設定する必要があります。 ドラッグ&ドロップ処理では、データを受け取るオブジェクトがドロップ先オブジェクトになります。

以下の表はドラッグ可能またはドロップ可能なオブジェクトでの利用可能なプロパティの一覧をまとめたものです:

| フォームオブジェクト                                                  | ドラッグ可 "カスタム" | ドロップ可 "カスタム" | ドラッグ可 "自動" | ドロップ可 "自動" |
| ----------------------------------------------------------- | ------------ | ------------ | ---------- | ---------- |
| [4D Write Pro エリア](../FormObjects/writeProArea_overview.md) | ○            | ○            | ○          | ○          |
| [コンボボックス](../FormObjects/comboBox_overview.md)              |              | ○            | ○          | ○          |
| [入力](../FormObjects/input_overview.md)                      | ○            | ○            | ○          | ○          |
| [階層リスト](../FormObjects/list_overview.md)                    | ○            | ○            |            |            |
| [リストボックス](../FormObjects/listbox_overview.md)               | ○            | ○            |            |            |
| [プラグインエリア](../FormObjects/pluginArea_overview.md)           |              |              | ○          | ○          |
| [ボタン](../FormObjects/button_overview.md)                    |              | ○            |            |            |
| [ピクチャーボタン](../FormObjects/pictureButton_overview.md)        |              | ○            |            |            |

改装リスト内の項目、またはリストボックス内の行はドラッグ&ドロップすることができます。 逆に、あるオブジェクトを改装リスト内の項目またはリストボックスの行にドラッグ&ドロップすることもできます。 ただし、出力フォームの詳細エリアからオブジェクトをドラッグ&ドロップすることはできません。 アプリケーションのフォーム外へのドラッグアンドドロップも、[`On Drop` データベースメソッド](../commands-legacy/on-drop-database-method.md) で管理できます。

:::note 注記

- デフォルトで、ピクチャフィールドや変数の場合は、ピクチャとその参照は両方ともドラッグされます。 変数やフィールドの参照のみをドラッグしたい場合は、**Alt** ボタン(Windows) または**Option** ボタン(macOS) を押す必要があります。
- 配列型リストボックスオブジェクトで“カスタム”のドラック可プロパティと[“行の移動可”](../FormObjects/properties_Action.md#行の移動可) が同時に選択されている場合、行が移動された場合は“行の移動可”が優先されます。 この場合ドラッグはできません。
- ドラッグとドロップの両方ができるオブジェクトは、開発者が禁止しない限り、自分自身にもドロップできます。

:::

## カスタムのドラッグ&ドロップ

カスタムのドラッグ&ドロップインターフェースを実装するということは、プロパティ、イベント、そして一般的には [*ペーストボード* テーマ](../commands/theme/Pasteboard.md) のコマンドを組み合わせるということを意味します。 以下の図ではカスタムのドラッグ&ドロップシークエンスのキーポイントを描写しています:

![](../assets/en/Desktop/dragdrop1.png)

実装の流れに関しては、以下のようなシナリオに基づいています:

1. ソースオブジェクト([**ドラッグ可** プロパティが"カスタム"](../FormObjects/properties_Action.md#ドラッグ有効) に設定済み)の[`On Begin Drag Over`](../Events/onBeginDragOver.md) イベントにおいて、[`APPEND DATA TO PASTEBOARD`](../commands/append-data-to-pasteboard)、 [`SET FILE TO PASTEBOARD`](../commands/set-file-to-pasteboard) コマンド、あるいは[ペーストボード テーマ](../commands/theme/Pasteboard.md) のコマンドなどを用いて適切なデータをペーストボードに入れます。 [`SET DRAG ICON`](../commands/set-drag-icon) コマンドを使用して特定のカーソルアイコンを定義することもできます。
2. ドロップ先オブジェクト([**ドロップ可** プロパティが"カスタム"](../FormObjects/properties_Action.md#ドロップ有効) に設定済み) の[`On Drag Over`](../Events/onDragOver.md) イベントにおいて、[`GET PASTEBOARD DATA TYPE`](../commands/get-pasteboard-data-type) あるいは [`GET PASTEBOARD DATA`](../commands/get-pasteboard-data) を使用して、ペーストボード内のデータの型、あるいはデータのシグネイチャー取得し、ドロップ先オブジェクトと互換性があるかどうかをチェックします。
   [`Drop position`](../commands/drop-position) コマンドは、ドロップ先オブジェクトが配列(つまりスクロール可能なエリア)、階層リスト、テキストあるいはコンボボックスの場合にはターゲット要素のアイテム位置の要素番号を返し、ドロップ先オブジェクトがリストボックスの場合にはカラム番号を返します。
3. ドロップ先オブジェクトの[オブジェクトメソッド](../Concepts/methods.md#メソッドタイプ) はアクションを受け付ける、または拒否するには0 または-1 を返さなければなりません。
   - 互換性がある場合、マウスボタンがリリースされた時にドロップを受け入れ、[`On Drop`](../Events/onDrop.md) イベントを実行するためには**0** を返します。
   - そうでない場合、**-1** を返してドロップを拒否します。  
     このやりとりにおけるインターフェース側の側面は4D によって自動的に管理され、ドロップが受け入れられたか拒否されたかによってカーソルの表示を変えます。
4. ドロップ先オブジェクト([**ドロップ可** プロパティが"カスタム"](../FormObjects/properties_Action.md#droppable) に設定済み)の[`On Drop`](../Events/onDrop.md) イベントにおいて、ドロップに対応するアクションを実行します。 例えばドラッグ&ドロップの操作がドラッグしているデータをコピーする目的であった場合、そのデータをドロップ先オブジェクトへ割り当てます。 ドラッグ&ドロップがデータの移動ではなく、特定の操作のためのユーザーインターフェースメタファーであった場合、例えば[`Get file from pasteboard`](../commands/get-file-from-pasteboard) コマンドを使用してファイルパスを取得するなど、必要な処理を実行します。

[`On Begin Drag Over`](../Events/onBeginDragOver.md) イベントは**ドラッグのソースオブジェクトのコンテキスト**で生成される点に注意してください。対して[`On Drag Over`](../Events/onDragOver.md) および [`On Drop`](../Events/onDrop.md) イベントはドロップ先オブジェクトに送信されます。

アプリケーションがこれらのイベントを処理するためには、ソースオブジェクトとドロップ先オブジェクトの両方のプロパティリストで正しく選択されていなければなりません:

![](../assets/en/Desktop/dragdrop2.png)

## 自動ドラッグ&ドロップ

自動ドラッグ&ドロップは、単一のクリックで一つのエリアから他のエリアへと、テキストまたはピクチャーの選択範囲を移動またはコピーすることです。 このコピーは、同じ 4D エリア内、2つの 4D エリア間、4D と他のアプリケーション間で使用できます。

:::note

2つの4D エリア間の自動ドラッグ＆ドロップの場合、データは移動されます。言い換えれば、データはソースエリアから削除されます。 データをコピーしたい場合、アクションの間**Ctrl** (Windows) または**Option** (macOS) キーを押します(macOS の場合、ドラッグを開始した*後* に **Option** を押す必要があります)。

:::

[自動ドラッグ](../FormObjects/properties_Action.md#ドラッグ有効) プロパティと[自動ドロップ](../FormObjects/properties_Action.md#ドロップ有効) はフォームオブジェクトごとに個別に設定できます:

- **自動ドラッグ**: このオプションがチェックされると、オブジェクトの自動ドラッグモードが有効になります。 このモードでは、[`On Begin Drag`](../Events/onBeginDragOver.md) フォームイベントは生成されません。
  自動ドラッグが有効のときに標準のドラッグを"強制"したい場合、アクションの間**Alt** (Windows) または **Option** (macOS) キーを押しながら操作します(macOS の場合、ドラッグを開始する *前* に**Option** を押す必要があります)。 このオプションはピクチャーでは利用できません。
- **自動ドロップ:**: このモードでは、4D は可能な限り自動で、オブジェクトにドロップされたテキストやピクチャ型データの挿入を管理します (データはオブジェクトにペーストされます)。 この場合[`On Drag Over`](../Events/onDragOver.md) および [`On Drop`](../Events/onDrop.md) フォームイベントは生成されません。 他方、ドロップ中の[`On After Edit`](../Events/onAfterEdit.md) とオブジェクトがフォーカスを失った時の[`On Data Change`](../Events/onDataChange.md) イベントは生成されます。

テキストやピクチャ以外のデータ (他の4Dオブジェクトやファイルなど) や 複合データがドロップされた場合、アプリケーションは"ドロップ可"オプションを参照します。オプションがチェックされていれば、[`On Drag Over`](../Events/onDragOver.md) および [`On Drop`](../Events/onDrop.md) フォームイベントが生成されます。そうでなければドロップは拒否されます。

## 例題

### 配列型リストボックスからテキストエリアへ

このシンプルな例題では、配列型リストボックスからドラッグしてきたデータを入力テキストエリアに入れたい場合を考えます:

![](../assets/en/Desktop/dragdrop3.png)

リストボックスのオブジェクトメソッドには以下のようなコードが書かれています:

```4d
  //Object Method: ListBox
 If(Form event code=On Begin Drag Over)
    SET TEXT TO PASTEBOARD(arrFirstname{arrFirstname}+" "+arrLastname{arrFirstname})
 End if
```

テキストエリアのオブジェクトメソッドには以下のようなコードが書かれています:

```4d

  // Object Method: label1
If(Form event code=On Drop) // プロパティリストでドロップ可を有効化しておく必要あり
    ARRAY TEXT($signatures_at;0)
    ARRAY TEXT($nativeTypes_at;0)
    ARRAY TEXT($formatNames_at;0)
    GET PASTEBOARD DATA TYPE($signatures_at;$nativeTypes_at;$formatNames_at)
    If(Find in array($signatures_at;"com.4d.private.text.native")#-1) // ペーストボード内には4D テキストが入っている
       OBJECT Get pointer(Object current)->:=Get text from pasteboard
    End if
 End if
```

### セレクション型リストボックスからテキストエリアへ

カスタムモード・自動モードの両方のドラッグ&ドロップ機構を組み合わせることで、シンプルで強力なインターフェースを作成することができます。 この例題ではリストボックスからドラッグしてきたデータを入力テキストエリアに入れたい場合を考えます:

![](../assets/en/Desktop/dragdrop4.png)

- リストボックス側: "ドラッグ可"プロパティがカスタムに設定されており"On Begin Drag Over" イベントがチェックされている
- 入力テキストエリア側: "自動ドロップ"プロパティがチェックされている

```4d
  //リストボックスのオブジェクトメソッド
 Case of
    :(Form event code=On Begin Drag Over)
       LOAD RECORD([Clients])
       $label:=[Clients]Name+Char(CR ASCII code)+[Clients]Contact+Char(CR ASCII code)+\
       [Clients]Address1+Char(CR ASCII code)+[Clients]City+", "+[Clients]State+" "+[Clients]ZipCode)
       SET TEXT TO PASTEBOARD($label)
 End case
```

データの移動と整形は、ドラッグ&ドロップを通して行われます:

![](../assets/en/Desktop/dragdrop5.png)

### ファイルパスからテキストエリアへ

ユーザーがディスク上のファイルを選択し、入力可能な(オブジェクト型の)変数にドラッグ&ドロップしたときにそのjson ファイル詳細を表示するようにしたい場合を考えます。

![](../assets/en/Desktop/dragdrop6.png)

変数のオブジェクトメソッドに、以下のように書くだけです:

```4d
 #DECLARE -> $result : Integer
 Case of
 
    :(Form event code=On Drag Over)
  // ペーストボードにファイルが格納されている場合にのみOn Dropイベントを受け入れ、それ以外は拒否する
       If(Get file from pasteboard(1)="") //ペーストボードにファイルがない
          $result:=-1 //ドロップを拒否
       End if
 
    :(Form event code=On Drop) //プロパティリストにてドロップ可アクションが有効化されている必要あり
       var $path_t : Text
       var path_o : Object
       $path_t:=Get file from pasteboard(1)
       If($path_t#"")
          path_o:=Path to object($path_t)
       End if
 
 End case
```

### ファイルパスからリストボックスへ

ユーザーがディスク上のファイルを選択し、リストボックス上にドラッグ&ドロップしたときにそのファイルのパスを表示するようにしたい場合を考えます。

![](../assets/en/Desktop/dragdrop7.png)

リストボックスのオブジェクトメソッドに、以下のように書くだけです:

```4d
 #DECLARE -> $result : Integer
 Case of
 
    :(Form event code=On Drag Over)
  // ペーストボードにファイルが格納されている婆にのみOn Drop イベントを受け入れ、それ以外は拒否する
       If(Get file from pasteboard(1)#"") // 少なくとも1つのファイルがドロップされた
          $result:=0 //ドロップを受け入れる
       Else //ペーストボードにファイルがない
          $result:=-1 //ドロップを拒否
       End if
 
    :(Form event code=On Drop) //プロパティリストにてドロップ可アクションが有効化されている必要あり
       ARRAY TEXT(importedPath_at;0)
       var $path_t :Text
       var $index_l:=1
       Repeat
          $path_t:=Get file from pasteboard($index_l)
          If($path_t#"")
             APPEND TO ARRAY(importedPath_at;$path_t)
          End if
          $index_l:=$index_l+1
       Until($path_t="")
 End case
```

## ペーストボードコマンド

[“ペーストボード” テーマのコマンド](../commands/theme/Pasteboard.md) は、コピー/ペーストアクション (**クリップボード管理**) とアプリケーション間のドラッグ＆ドロップの管理両方に使用できます。

4D は2つのデータペーストボードを使用します。1つはコピーあるいはカットされたデータ用で、もう1つはドラッグ&ドロップされたデータ用です。
これら2つのペーストボードは同じコマンドを使用して管理されます。 コンテキストにより、どちらかにアクセスします:

- ドラッグ＆ドロップペーストボードには、[**On Drop** データベースメソッド](../commands-legacy/on-drop-database-method.md) 内での[`On Begin Drag Over`](../Events/onBeginDragOver.md), [`On Drag over`](../Events/onDragOver.md) あるいは [`On Drop`](../Events/onDrop.md) フォームイベントや内でのみアクセスできます。 これらのコンテキスト外では、ドラッグ＆ドロップペーストボードは使用できません。
- コピー/ペーストペーストボードには、他のすべてのケースでアクセスできます。 ドラッグ＆ドロップペーストボードと異なり、そこに置かれたデータはクリアされるか再利用されるまで、セッション中保持されます。

### データのタイプ

ドラッグ＆ドロップアクション中、異なるタイプのデータがペーストボードに置かれたり、あるいはペーストボードから読み込まれます。 データタイプには複数の方法でアクセスします:

- 4Dシグネチャ: 4Dシグネチャは4Dアプリケーションにより参照されるデータタイプを示す文字列です。 4D シグネチャはmacOS およびWindows で同じであるため、マルチプラットフォームアプリケーションの開発に適しています。 4D シグネチャの一覧は以下に示します。
- UTI (Uniform Type Identifier, macOS のみ): Apple 社が定めるUTI 標準は、ネイティブタイプのオブジェクトごとに文字列を割り当てたものです。 例えばGIF ピクチャにはUTI タイプ “com.apple.gif”が割り当てられています。 UTI はApple 社のドキュメント、あるいは関連するエディタで公開されています。
- 数値またはフォーマット名 (Windowsのみ): Windowsでは、ネイティブデータタイプは数値 (“3”, “12”, 等) と名前 (“Rich Text Edit”)で参照されます。 デフォルトでMicrosoft社は標準データフォーマットと呼ばれるネイティブタイプを複数定義しています。 さらにサードパーティーエディタはシステムにフォーマットを “保存” し、対応する番号を得ることもできます。 この点に関する詳細とネイティブタイプについては、Microsoft developer documentation (特に http://msdn2.microsoft.com/en-us/library/ms649013.aspx ) を参照してください。

:::note

4D コマンド中では、Windows のフォーマット番号はテキストとして処理されます。

:::

[“ペーストボード” テーマのコマンド](../commands/theme/Pasteboard.md) は、これらのデータタイプのそれぞれ1つを使用できます。 [`GET PASTEBOARD DATA TYPE`](../commands/get-pasteboard-data-type) コマンドを使用して、これらのフォーマットそれぞれにおいてペーストボードに格納されているデータのデータタイプを取得することができます。

:::note

4文字のタイプ (TEXT, PICT やカスタムタイプ) は以前のバージョンの4D との互換性のために保持されています。

:::

### 4D シグネチャ

以下は標準の4D シグネチャとその詳細です:

| 署名                                                                                              | 説明                 |
| ----------------------------------------------------------------------------------------------- | ------------------ |
| "com.4d.private.text.native"    | ネイティブ文字セットのテキスト    |
| "com.4d.private.text.utf16"     | Unicode 文字セットのテキスト |
| "com.4d.private.text.rtf"       | リッチテキスト            |
| "com.4d.private.picture.pict"   | PICT ピクチャフォーマット    |
| "com.4d.private.picture.png"    | PNG ピクチャフォーマット     |
| "com.4d.private.picture.gif"    | GIF ピクチャフォーマット     |
| "com.4d.private.picture.jfif"   | JPEG ピクチャフォーマット    |
| "com.4d.private.picture.emf"    | EMF ピクチャフォーマット     |
| "com.4d.private.picture.bitmap" | BITMAP ピクチャフォーマット  |
| "com.4d.private.picture.tiff"   | TIFF ピクチャフォーマット    |
| "com.4d.private.picture.pdf"    | PDF ドキュメント         |
| "com.4d.private.file.url"       | ファイルパス名            |