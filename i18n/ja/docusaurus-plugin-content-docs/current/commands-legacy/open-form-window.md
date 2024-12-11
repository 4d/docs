---
id: open-form-window
title: Open form window
slug: /commands/open-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Open form window.Syntax-->**Open form window** ( {*aTable* ;} *formName* {; *type* {; *hPos* {; *vPos* {; *}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open form window.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | フォームが属するテーブル、または省略時デフォルトテーブル |
| formName | Text, Object | &#8594;  | プロジェクトフォームまたはテーブルフォームのフォーム名(文字列)、<br/>あるいはフォームを定義した.jsonファイルへのPOSIXパス(文字列)、<br/>あるいは開くフォームを定義したオブジェクト |
| type | Integer | &#8594;  | ウィンドウタイプ |
| hPos | Integer | &#8594;  | ウィンドウの横位置 |
| vPos | Integer | &#8594;  | ウィンドウの縦位置 |
| * | 演算子 | &#8594;  | ウィンドウの現在の位置とサイズを保存 |
| 戻り値 | Integer | &#8592; | ウィンドウ参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Open form window.Summary-->Open form window コマンドはフォーム*formName*のサイズとリサイズプロパティを使用して、新しいウィンドウを開きます。<!-- END REF-->

**注:** フォームのメインプロパティを知るためには、[FORM GET PROPERTIES](form-get-properties.md) コマンドを使用してください。

*formName* 引数には、いかのいづれかを渡すことができます:

* 使用するフォーム名(プロジェクトフォームあるいはテーブルフォーム)
* 使用するフォームの詳細を格納している有効な.josn ファイルへのパス(POSIX シンタックス、*フォームファイルパス* 参照);
* フォームの詳細を格納しているオブジェクト

*formName*フォームはウィンドウに表示されません。フォームを表示するには、フォームをロードするコマンド ([ADD RECORD](add-record.md) 等) を呼び出さなければなりません。

[Open window](open-window.md) コマンドと異なり、クローズボックスにはメソッドは割り当てられません。クローズボックスをクリックすると、On Close Box フォームイベントが有効にされている場合を除き、ウィンドウがキャンセルされ閉じられます。On Close Box フォームイベントが有効であれば、割り当てられたコードが実行されます。

*formName*フォームがリサイズ可能であれば、開かれるウィンドウにはズームボックスとグローボックスが付加されます。

**注:** フォームの主なプロパティを取得するには [FORM GET PROPERTIES](form-get-properties.md) コマンドを使用します。

任意の*type*引数は、ウィンドウのタイプを指定するために使用します。以下のいずれかの定数を渡さなければなりません ( *Open Form Window* テーマ内):

| 定数                               | 型    | 値      |
| -------------------------------- | ---- | ------ |
| Controller form window           | 倍長整数 | 133056 |
| Form has full screen mode Mac    | 倍長整数 | 65536  |
| Form has no menu bar             | 倍長整数 | 2048   |
| Modal form dialog box            | 倍長整数 | 1      |
| Movable form dialog box          | 倍長整数 | 5      |
| Movable form dialog box no title | 倍長整数 | 524293 |
| Palette form window              | 倍長整数 | 1984   |
| Plain form window                | 倍長整数 | 8      |
| Plain form window no title       | 倍長整数 | 524296 |
| Pop up form window               | 倍長整数 | 32     |
| Sheet form window                | 倍長整数 | 33     |
| Toolbar form window              | 倍長整数 | 35     |

ウィンドウタイプの詳細な情報については、*Window Types* の章を参照してください。

**注:** Form has full screen mode Mac および Form has no menu bar 定数は、他のタイプの定数に加える必要があります。

デフォルトで、*type* 引数が渡されない場合には、Plain form window タイプのウィンドウが開かれます。

**クローズボックス**  
Movable form dialog box 、Plain form window およびPalette form window タイプのウィンドウにはクローズボックスがあります。ウィンドウのクローズボックスにはメソッドは割り当てられません。クローズボックスをクリックすると、On Close Box フォームイベントが有効化されている場合を除き、ウィンドウがキャンセルされ閉じられます。On Close Box フォームイベントが有効の場合には、割り当てられたコードが実行されます。

**サイズコントロール**  
*formName* 引数で指定したフォームの"Window Size" プロパティが"fixed" に設定されていない場合、開かれたウィンドウはユーザーによってリサイズ可能です。ウィンドウタイプによって、ズームボックスが利用可能です。**Fixed Width** あるいは **Fixed Height**プロパティがフォームプロパティにおいてチェックされている場合、ウィンドウはリサイズ可能にはなりません。

**注:** 作成されたウィンドウの一部の属性(グローボックス、クローズボックス等)は*type* 引数で選択されたタイプに対するOSのインターフェース仕様によります。そのため、使用するプラットフォームによって異なる結果が得られる場合があります。

オプションの引数 *hPos* を使用して、ウィンドウの横位置を指定できます。定義済みの位置(ピクセル単位)か*Open Form Window* テーマ内の以下の定義済みの定数を渡すことができます:

| 定数                    | 型    | 値      |
| --------------------- | ---- | ------ |
| Horizontally centered | 倍長整数 | 65536  |
| On the left           | 倍長整数 | 131072 |
| On the right          | 倍長整数 | 196608 |

オプションの引数 *vPos* を使用して、ウィンドウの縦位置を指定できます。定義済みの位置(ピクセル単位)か*Open Form Window* テーマ内の以下の定義済みの定数を渡すことができます:

| 定数                  | 型    | 値      |
| ------------------- | ---- | ------ |
| At the bottom       | 倍長整数 | 393216 |
| At the top          | 倍長整数 | 327680 |
| Vertically centered | 倍長整数 | 262144 |

これらの引数は、アプリケーションウィンドウ(MDI モードのWindows)あるいはメインスクリーン(macOS あるいはSDI モードのWindows)の左上端から見た相対的な位置で表現されています。これらの引数はツールバーとメニューバーの存在を考慮します。

オプションの引数 *\** を渡すと、閉じられるときにその時点での位置とサイズが記憶されます。ウィンドウが再度開かれると、以前の位置とサイズが再現されます。この場合、*vPos* と *hPos* 引数はウィンドウが最初に開かれるときにのみ使用されます。

#### 例題 1 

 以下のコードはクローズボックス付きの標準のウィンドウを開き、自動で"Input"フォームのサイズに調整します。フォームウィンドウは"fixed"に設定されていないため、ウィンドウはグローとズームボックスを持ちます:

```4d
 $winRef :=Open form window([Table1];"Enter")
```

#### 例題 2 

以下のコードはプロジェクトフォーム"Tools"に基づき、スクリーンの左上の位置にフローティングパレットを開きます。このパレットは閉じられた時の位置を記憶し、再度開かれるときにはその位置が使用されます:

```4d
 $winRef :=Open form window("Tools";Palette form window;On the left;At the top;*)
```

#### 例題 3 

このコードはmacOS上で実行する必要があり、実行すると、(例えばフォームボタンから呼び出された)ドキュメントウィンドウが表示されている間、シートウィンドウが表示されます:

```4d
 $myWin:=Open form window("sheet form";Sheet form window)
  // この瞬間ウィンドウは作成されるが非表示のまま
 DIALOG([aTable];"dialForm")
  //On Loadイベントが生成され、シートウィンドウが表示されます
  //シートウィンドウはタイトルバーの下から"ドロップダウン"形式で表示されます。
```

#### 例題 4 

以下の例では、.json フォームへのパスを使用して従業員リスト内のレコードを表示する場合を考えます:

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

結果は以下のようになります:

![](../assets/en/commands/pict3687439.en.png)

#### 参照 

[FORM GET PROPERTIES](form-get-properties.md)  
[Open window](open-window.md)  
*Window Types*  
*ウィンドウタイプ(互換性)*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 675 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


