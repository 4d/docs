---
id: open-window
title: Open window
slug: /commands/open-window
displayed_sidebar: docs
---

<!--REF #_command_.Open window.Syntax-->**Open window** ( *left* ; *top* ; *right* ; *bottom* {; *type* {; *title* {; *controlMenuBox*}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open window.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| left | Integer | &#8594;  | ウィンドウ内容領域のグローバル左座標 |
| top | Integer | &#8594;  | ウィンドウ内容領域のグローバル上座標 |
| right | Integer | &#8594;  | ウィンドウ内容領域のグローバル右座標, または-1でフォームのデフォルトサイズを使用 |
| bottom | Integer | &#8594;  | ウィンドウ内容領域のグローバル下座標, または-1でフォームのデフォルトサイズを使用 |
| type | Integer | &#8594;  | ウィンドウタイプ |
| title | Text | &#8594;  | ウィンドウのタイトル または "" でデフォルトのフォームタイトルを使用 |
| controlMenuBox | Text | &#8594;  | コントロールメニューボックスがダブルクリック またはクローズボックスがクリックされたときに 呼び出すメソッド |
| 戻り値 | Integer | &#8592; | ウィンドウ参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Open window.Summary-->**Open window** は最初の4つの引数で指定された寸法を使用して新しいウィンドウを開きます。<!-- END REF-->

* *left* はアプリケーションウィンドウの左端から、ウィンドウ内側の左端までの距離 (ピクセル単位) です。
* *top* はアプリケーションウィンドウの上端から、ウィンドウ内側の上端までの距離 (ピクセル単位) です。
* *right* はアプリケーションウィンドウの左端から、ウィンドウ内側の右端までの距離 (ピクセル単位) です。
* *bottom* はアプリケーションウィンドウの上端から、ウィンドウ内側の下端までの距離 (ピクセル単位) です。

**互換性に関する注意:** **Open window** はバージョンを経るごとに進化し、現在はもはや互換性のためだけに残されている様々なオプションを統合します。今後ウィンドウ管理の新しいコードを書く場合には、現行のインターフェースにより適している [Open form window](open-form-window.md) コマンドの使用が強く推奨されます。

*right* と *bottom*両方に -1 を渡すと、4Dは以下の条件のときウィンドウのサイズを自動で決定します:

* デザインモードのフォームエディタで、フォームプロパティのサイズオプションを設定している
* **Open window**を呼び出す前に、[FORM SET INPUT](form-set-input.md)コマンドで、 *\** 引数付きでフォームを選択している。
**重要**: この自動サイズ決定は、事前に表示するフォームを[FORM SET INPUT](form-set-input.md)コマンドで指定し、またオプションの \* 引数を[FORM SET INPUT](form-set-input.md)コマンドに指定したときにのみ、実行されます。 
* *type* 引数はオプションで、[GET PRINT OPTION](get-print-option.md)で説明している異なるウィンドウタイプ(*Open Window* テーマにある定数)から、表示したいウィンドウを選択するために使用します。ウィンドウタイプが負数の時、フローティングウィンドウが作成されます。*type*が指定されない時、タイプ1がデフォルトで使用されます。
* *title* 引数はオプションで、ウィンドウのタイトルを指定します。

空の文字列 ("") を*title*に渡すと、4Dはデザインモードのフォームエディタで、フォームプロパティに指定されたウィンドウのタイトルを使用します。

**重要**: デフォルトのフォームタイトルは表示するフォームを事前に[FORM SET INPUT](form-set-input.md)で指定し、かつ[FORM SET INPUT](form-set-input.md)にオプションの \* 引数を渡したときにのみ設定されます。

* *controlMenuBox* 引数はオプションで、ウィンドウのコントロールボックスメソッドを指定します。この引数が指定されると、コントロールメニューボックス (Windows) やクローズボックス (Macintosh) がウィンドウに追加されます。ユーザがコントロールメニューボックスをダブルクリック (Windows) またはクローズボックスをクリック (Macintosh) すると、*controlMenuBox* に渡したメソッドが呼び出されます。

**Note:** On Close Boxイベントを使用して、フォームメソッドでウィンドウを閉じる際のコントロールを行うこともできます。詳細は[Form event code](form-event-code.md)コマンドを参照してください。

プロセス内で複数のウィンドウが開かれている場合、最後に開かれたウィンドウがそのプロセス内でアクティブ (最前面) です。アクティブウィンドウ内の情報のみが更新可能です。他のウィンドウは見ることはできます。

フォームは開かれたウィンドウ内に表示されます。[MESSAGE](message.md) コマンドのテキストもウィンドウに表示されます。

**Open window** はWinRef 型のウィンドウ参照を返し、これはウィンドウ管理コマンド("*WinRef*"の章を参照)によって使用することができます。

#### 例題 1 

以下のプロジェクトメソッドはメインウィンドウ (Windows) またはメインスクリーン (Macintosh) の中央にウィンドウを開きます。2\~４つの引数を受け入れます: 

```4d
  // OPEN CENTERED WINDOW project method
  // $1 - ウィンドウ幅
  // $2 - ウィンドウ高さ
  // $3 - ウィンドウタイプ (オプション)
  // $4 - ウィンドウタイトル (オプション)
 $SW:=Screen width\2
 $SH:=(Screen height\2)
 $WW:=$1\2
 $WH:=$2\2
 Case of
    :(Count parameters=2)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH)
    :(Count parameters=3)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3)
    :(Count parameters=4)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3;$4)
 End case
```

プロジェクトメソッド記述後、以下のように使用できます:

```4d
 OPEN CENTERED WINDOW(400;250;Movable dialog box;"Update Archives")
 DIALOG([Utility Table];"UPDATE OPTIONS")
 CLOSE WINDOW
 If(OK=1)
  // ...
 End if
```

#### 例題 2 

以下の例題はコントロールメニューボックス (Windows) またはクローズボックス (Macintosh) メソッド付きのウィンドウを開きます。ウィンドウはアプリケーションウィンドウの右上に開かれます。  
  
```4d
 $myWindow:=Open window(Screen width-149;33;Screen width-4;178;-Palette window;"";"CloseColorPalette")
 DIALOG([Dialogs];"Color Palette")
```

CloseColorPalette メソッドは[CANCEL](cancel.md)コマンドを呼び出します:

```4d
 CANCEL
```

#### 例題 3 

以下の例題では、ウィンドウに表示するフォームのサイズとタイトルプロパティを使用して、ウィンドウを開きます: 

```4d
 FORM SET INPUT([Customers];"Add Records";*)
 $myWindow:=Open window(10;80;-1;-1;Plain window;"")
 Repeat
    ADD RECORD([Customers])
 Until(OK=0)
```

**Reminder:** **Open window**が自動でフォームのプロパティを使用するためには、事前に表示するフォームを[FORM SET INPUT](form-set-input.md)コマンドで指定し、またオプションの *\** 引数を[FORM SET INPUT](form-set-input.md)コマンドに指定しなければなりません。またデザインモードで対応するフォームのプロパティを設定していなければなりません。

#### 例題 4 

この例題はMac OS X下でのシートウィンドウを表示する際の遅延メカニズムを説明します: 

```4d
 $myWindow:=Open window(10;10;400;400;Sheet window)
  //当面、ウィンドウは作成されるが隠されている
 DIALOG([table];"dialForm")
  //On Loadイベントが生成され、シートウィンドウが表示される。
  //ウィンドウはタイトルバーからドロップダウンされる
```

#### 参照 

[CLOSE WINDOW](close-window.md)  
[Open form window](open-form-window.md)  
*Open Window*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 153 |
| スレッドセーフである | &cross; |


