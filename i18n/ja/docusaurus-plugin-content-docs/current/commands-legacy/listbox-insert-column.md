---
id: listbox-insert-column
title: LISTBOX INSERT COLUMN
slug: /commands/listbox-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT COLUMN.Syntax-->**LISTBOX INSERT COLUMN** ( {* ;} *object* ; *colPosition* ; *colName* ; *colVariable* ; *headerName* ; *headerVar* {; *footerName* ; *footerVar*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT COLUMN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| colPosition | Integer | &#8594;  | 列の挿入場所 |
| colName | Text | &#8594;  | 列オブジェクト名 |
| colVariable | Array, Field, Variable, Pointer | &#8594;  | 列配列名 または フィールド または 変数 |
| headerName | Text | &#8594;  | 列ヘッダオブジェクト名 |
| headerVar | Integer, Pointer | &#8594;  | 列ヘッダ変数 |
| footerName | Text | &#8594;  | 列フッターオブジェクト名 |
| footerVar | Variable, Pointer | &#8594;  | 列フッター変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX INSERT COLUMN.Summary-->**LISTBOX INSERT COLUMN**コマンドは、*object*引数および *\** で指定されたリストボックスに列を挿入します。<!-- END REF-->

**注:** このコマンドは階層モードで表示されているリストボックスの先頭列に適用されてもなにも行いません。

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

新しい列は、*colPosition*引数で指定された列の直前に挿入されます。*colPosition*引数の値が列の合計数よりも大きい場合、最後の列の後ろにカラムが追加されます。

*colName*と*colVariable*には、挿入する列のオブジェクト名および変数名を渡します。

* 配列タイプのリストボックスの場合、列に表示する内容が格納された配列の名前を渡します。フォームが実行される際、動的なコンテキストにおいてこのコマンドを使用する場合、Nil (->\[\]) ポインターを渡す事ができます(以下を参照して下さい)。
* セレクション型のリストボックスの場合、*colVariable*引 数にはフィールドまたは変数を渡します。結果列の内容は、リストボックスに関連付けられたセレクションのレコードごとに評価されるフィールドまたは変数の 値となります。このタイプのコンテンツは、リストボックスの"データソース"プロパティでカレントセレクションまたは命名セレクションを指定した場合にの み使用できます (*リストボックスオブジェクトの管理*を参照)。文字列, 数値, 日付, 時間, ピクチャ, ブールタイプのフィールドや変数を使用できます。

レコードのセレクションに基づいたリストボックスのコンテキストでは、**LISTBOX INSERT COLUMN**はフィールドや変数などの単純な要素を挿入するために使用できます。フォーミュラやメソッドなどのより複雑な表現式を使用したい場合は[LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md)コマンドを使用します。  
コレクション型/エンティティセレクション型のリストボックスもサポートされますが、しかしながら*colName* 引数が式を受け付けないため、データソースを指定するには[LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md) コマンドを使用する必要があります。この場合には[LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md) コマンドを使用するほうがより適切です。

**注:** 同じリストボックス内で、配列をデータソースとする列と、フィールドや変数をデータソースとする列を混在させることはできません。

*headerName*と*headerVar*には、挿入される列のヘッダのオブジェクト名および変数を渡します。

*footerName*と*footerVar*にも、挿入される列のヘッダのオブジェクト名および変数を渡すことができます。

**注:** オブジェクト名は、フォーム内で重複してはいけません。*colName*や*headerName*、*footerName*に渡される名前が既に使用されていないことを確認してください。重複した名前を指定すると、列は作成されず、エラーが生成されます。

##### 動的に列を挿入 

フォーム実行中にこのコマンドを使用してカラムをリストボックス内へと動的に挿入することができます。その際、必要な変数(カラム、フッター、ヘッダー)の定義を4Dが自動的に行います。  
  
これを可能にするため、**LISTBOX DUPLICATE COLUMN** は *colVariable* (配列型リストボックスのみ)、*headerVar*、 *footerVar* 引数において**Nil** (**\->\[\]**) ポインターを引数として受け入れるようになりました。Nilポインターを渡してコマンドを実行すると、4Dは必要な変数を動的に作成します(詳細に関しては、 のセクションを参照して下さい)。  
  
ヘッ ダー変数とフッター変数は常に特定のタイプで作成されるという点に注意して下さい(ヘッダーは倍長整数、フッターはテキスト)。反対に、カラム変数は作成 時にタイプを指定することはできません。リストボックスはカラム変数に対して、異なるタイプの配列(テキスト配列、倍長整数配列、等々)を受け入れること ができるからです。これはつまり配列のタイプを手動で設定しなければならないという事です(例題3を参照して下さい)。こういったタイプの指定は、配列に 新しい要素を挿入するために [LISTBOX INSERT ROWS](listbox-insert-rows.md) などのコマンドを呼び出す前に実行しなければなりません。その他には、 [APPEND TO ARRAY](append-to-array.md) を使用して配列の型を指定し、要素を挿入することができます。

#### 例題 1 

リストボックスの最後に列を追加します: 

```4d
 var HeaderVarName;$Last;RecNum : Integer
 ALL RECORDS([Table1])
 $RecNum:=Records in table([Table1])
 ARRAY PICTURE(Picture;$RecNum)
 
 $Last:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$Last;"ColumnPicture";Picture;"HeaderPicture";HeaderVarName)
```

#### 例題 2 

リストボックスの右に列を追加し、\[Transport\]Fees フィールドの値を関連付けます: 

```4d
 $last:=LISTBOX Get number of columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$last;"FieldCol";[Transport]Fees;"HeaderName";HeaderVar)
```

#### 例題 3 

カラムを配列型のリストボックス内へと動的に挿入し、そのヘッダーを定義します:

```4d
 var $NilPtr : Pointer
 LISTBOX INSERT COLUMN(*;"MyListBox";1;"MyNewColumn";$NilPtr;"MyNewHeader";$NilPtr)
 ColPtr:=OBJECT Get pointer(Object named;"MyNewColumn")
 ARRAY TEXT(ColPtr->;10)
  //ヘッダーの定義
 headprt:=OBJECT Get pointer(Object named;"MyNewHeader")
 OBJECT SET TITLE(headprt->;"Inserted header")
```

#### 参照 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  
[LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 829 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


