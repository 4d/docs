---
id: display-selection
title: DISPLAY SELECTION
slug: /commands/display-selection
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY SELECTION.Syntax-->**DISPLAY SELECTION** ( {*aTable*}{; *selectMode*}{; *enterList*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.DISPLAY SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 表示するテーブル, または 省略時、デフォルトテーブル |
| selectMode | Integer | &#8594;  | 選択モード |
| enterList | Boolean | &#8594;  | リスト入力を許可するオプション |
| * | Operator |  &#8594;  | 1レコードセレクションの場合にも出力フォームを使用し、 入力フォームのスクロールバーを隠す |
| * | Operator |  &#8594;  | 入力フォームでスクロールバーを表示する (最初の*の2番目のオプションを上書きする) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DISPLAY SELECTION.Summary-->DISPLAY SELECTION は、出力フォームを使用して、*aTable*の カレントセレクションを表示します。<!-- END REF-->レコードはデザインモードの一覧に類似のスクロール可能な一覧として表示されます。ユーザがレコー ドをダブルクリックすると、デフォルトでそのレコードはカレント入力フォーム上に表示されます。リストは最前面にあるウインドウに表示されます。 

セレクションを表示し、さらに (デザインモードのウインドウで実行するときにように) レコードをダブルクリックしてカレント入力フォーム上で修正するには、 DISPLAY SELECTIONではなく[MODIFY SELECTION](modify-selection.md)を使用してください。  
以降に説明する情報はレコードの修正に関する情報を除き、すべて両方のコマンドに適用されます。

DISPLAY SELECTIONを実行した直後、カレントレコードが存在しない場合があります。カレントレコードを必要とする場合は、[FIRST RECORD](first-record.md)や[LAST RECORD](last-record.md)等のコマンドを使用してください。

*selectMode*を使用し、マウスを用いたリスト上のレコードを選択の動作を設定できます。この引数には “*Form Parameters*” テーマのいずれかの定数を渡すことができます:

| 定数                 | 型    | 値 | コメント                                                                                                                                                                                          |
| ------------------ | ---- | - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiple selection | 倍長整数 | 2 | 複数レコードを同時に選択することができます。連続しているレコードを選択するには、選択する最初のレコードをクリックし、次に**Shift**キーを押しながらセレクションに含めたい最後のレコードをクリックします。連続しないレコードを選択するには、**Ctrl**キー (Windows) または、**Command**キー (Mac OS) を押したまま各レコードをクリックします。 |
| No selection       | 倍長整数 | 0 | リスト上のレコードを選択することはできません。                                                                                                                                                                       |
| Single selection   | 倍長整数 | 1 | 一度に1レコードだけを選択できます。                                                                                                                                                                            |

*selectMode*を渡さない場合は、デフォルトとしてMultiple Selectionモードが使用されます。

*enterList*引数を使用すると、表示されるリスト中でリスト更新を許可することができます。これにより、ユーザは直接出力フォーム上でレコードを選択し、値を変更できるようになります。このモードを有効にするには[True](true.md "True")を渡し、無効にするには[False](false.md "False")を渡します。引数*enterList*を渡さない場合、デフォルトとしてリスト更新可オプションが無効になります。  
DISPLAY SELECTION コマンドでは、この引数によりリストの値の選択が許可されるだけであり、変更は許可されないということを覚えておいてください。実際 DISPLAY SELECTION により、カレントテーブルは読み込みのみ状態になります。[MODIFY SELECTION](modify-selection.md)を使用した場合にのみ、実際に値を入力することができます。

**Note:** [OBJECT SET ENTERABLE](object-set-enterable.md)コマンドを使用し、オンザフライでリスト更新可オプションを有効、または無効に設定できます。 

オプションの *\** 引数に関する規則を次に説明します:  
\- セレクションにレコードが1件しか存在しないときに、1番目のオプションの *\** を指定しない場合、そのレコードは出力フォームではなく入力フォーム上に表示されます。  
\- 1番目のオプションの *\** を指定した場合は、セレクションに1件しかレコードが存在しない場合でも出力フォームを使用します  
\- 1番目のオプションの *\** を指定し、ユーザがレコードをダブルクリックしてそれを入力フォームに表示した場合、入力フォームのスクロールバーは表示されません。これを無効にするには、2番目のオプションの *\** を指定します。

DISPLAY SELECTION の実行を終了するため、出力フォームのフッタまたはヘッダエリアにカスタムボタンを配置できます。入力またはキャンセル自動アクション、あるいは[ACCEPT](accept.md)や[CANCEL](cancel.md)コマンドを呼び出すオブジェクトメソッドを利用できます。DISPLAY SELECTION により呼び出された出力フォームにボタンが存在しない場合、**Escape** (Windows) または**Esc** (Mac OS) を使用してリストを終了できます。

DISPLAY SELECTION の実行中と後、ユーザが選択したレコードは UserSet という名前のセットに格納されます。 UserSet は、セレクションの表示中にボタンがクリックされて呼び出されるオブジェクトメソッドや、メニュー項目が選択された際に実行されるメソッド内で使用できます。またコマンド終了後に、DISPLAY SELECTION を呼び出したプロジェクトメソッド内でも利用できます。

#### 例題 1 

以下の例は、最初に、\[People\]テーブルの全レコードをカレントセレクションにします。次にDISPLAY SELECTIONを使用してレコードを表示し、ユーザがプリントするレコードを選択します。最後に、選択されたレコードを[USE SET](use-set.md "USE SET")でカレントセレクションにし、[PRINT SELECTION](print-selection.md "PRINT SELECTION")コマンドでそのレコードを印刷します:

```4d
 ALL RECORDS([People]) // すべてのレコードを選択
 DISPLAY SELECTION([People];*) // レコード表示
 USE SET("UserSet") // ユーザが選択したレコードのみを使用
 PRINT SELECTION([People]) // ユーザが選択したレコードを印刷
```

#### 例題 2 

[Form event](form-event.md "Form event")の6番目の例題を参照してください。この例題ではDISPLAY SELECTIONコマンドの実行中に発生するイベントをすべて監視するためのあらゆるチェックが示されています。

#### 例題 3 

アプリケーションモードでDISPLAY SELECTIONや[MODIFY SELECTION](modify-selection.md)を使用して、デザインモードでの**レコード**メニューの機能を再現するには、以下の手順にしたがってください: 

a. デザインモードで必要なメニューを備えたメニューバーを作成します。例えばすべて表示、クエリ、並び替え等のメニューです。

b. このメニューバーを (フォームプロパティダイアログボックスの連結するメニューバーでメニューを選択して)、DISPLAY SELECTIONや[MODIFY SELECTION](modify-selection.md)で使用される出力フォームに関連付けます。

c. 以下のプロジェクトメソッドをメニューに関連付けます:

```4d
  // M_SHOW_ALL (すべてを表示メニューに割り当て)
 $vpCurTable:=Current form table
 ALL RECORDS($vpCurTable->)
  // M_QUERY (クエリメニューに割り当て)
 $vpCurTable:=Current form table
 QUERY($vpCurTable->)
  // M_ORDER_BY (並び替えメニューに割り当て)
 $vpCurTable:=Current form table
 ORDER BY($vpCurTable->)
```

アプリケーションモードでセレクションの表示や修正を実行するたび、標準のメニューオプションを提供するために、[PRINT SELECTION](print-selection.md "PRINT SELECTION")や[QR REPORT](qr-report.md "QR REPORT")等、他のコマンドも使用できます。[Current form table](current-form-table.md "Current form table") コマンドを使用すればこれらのメソッドは汎用コードとなり、このメニューバーをあらゆるテーブルのあらゆる出力フォームに関連付けることができます。

#### 参照 

[Form event code](../commands/form-event-code.md)"  
[MODIFY SELECTION](modify-selection.md)  
*セット*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 59 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


