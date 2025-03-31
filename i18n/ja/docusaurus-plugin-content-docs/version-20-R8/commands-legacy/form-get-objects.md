---
id: form-get-objects
title: FORM GET OBJECTS
slug: /commands/form-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET OBJECTS.Syntax-->**FORM GET OBJECTS** ( *objectsArray* {; *variablesArray* {; *pagesArray*}} {; formPageOption | *} )<!-- END REF-->
<!--REF #_command_.FORM GET OBJECTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objectsArray | Text array | &#8592; | フォームオブジェクト名 |
| variablesArray | Pointer array | &#8592; | オブジェクトに関連付けられた 変数やフィールドへのポインタ |
| pagesArray | Array integer | &#8592; | オブジェクトごとのページ番号 |
| formPageOption &#124; * | 倍長整数, 演算子 | &#8594;  | 1=Form current page, 2=Form all pages, 4=Form inherited<br/>* 指定時(廃止予定) = Form current pageとForm inherited |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM GET OBJECTS.Summary-->FORM GET OBJECTS コマンドは、カレントフォーム に存在する全オブジェクトのリストを配列形式で返します。<!-- END REF-->このリストは、カレントフォームページのオブジェクトに限定することができ、また継承されたフォームのオブジェクトを除外することができます。このコマンドは、入力フォームおよび出力フォームの双方で使用することができます。

**注:** コマンドはリストボックス部分は含めません。フォームのリストボックスオブジェクトを解析したい場合には、[LISTBOX GET OBJECTS](listbox-get-objects.md) または [LISTBOX GET ARRAYS](listbox-get-arrays.md) を使用してください([FORM GET OBJECTS](form-get-objects.md)、[OBJECT Get type](object-get-type.md) および [LISTBOX GET OBJECTS](listbox-get-objects.md) を組み合わせた使用法については、以下の例題を参照してください)。

引数として渡した配列が事前に定義されていない場合、コマンドはその配列を作成し、サイズを自動的に設定します。しかし、アプリケーションをコンパイルする場合を考慮し、各配列を明示的に宣言することをお勧めします。

(フォーム内でユニークな) オブジェクト名を受け取る文字列配列を*objectsArray*に渡します。配列内でのオブジェクトの出現順序は意味を持ちません。。

コマンドにより代入される他の任意の配列は、1番目の配列との同期が取られます。

任意の引数*variablesArray*にはポインタ配列を渡し、この配列にはオブジェクトに関連付けられている変数やフィールドへのポインタが格納されます。オブジェクトに関連付けられた変数が存在しない場合、[Is nil pointer](is-nil-pointer.md) ポインタが返されます。“サブフォーム”オブジェクトタイプが存在する場合、サブフォームのテーブルへのポインタが返されます。

3番目の配列（任意）*pagesArray*には、フォームのページ番号が代入されます。この配列の各要素には、対応するオブジェクトのページ番号が格納されます。

任意の引数 *\** を使用すると、返されるオブジェクトのリストをフォームのカレントページに限定することができます。この引数を渡した場合、コマンドはカレントページ、 ページ0、継承ページのオブジェクトだけを返します。このコマンドは、フォームのカレントページ上に存在するあらゆるオブジェクト (表示・非表示とも) を処理します。

任意の引数 *formPageOption* はオブジェクトを取得したいフォームの部分を指定することができます。デフォルトでは、*formPageOption* parameter引数(と*\** 引数)が省略された場合、継承されたオブジェクトを含む、全てのページのオブジェクトフォームが返されます。コマンドのスコープを限定するためには、*formPageOption* 引数に値を渡します。"*Form Objects (Access)*" テーマ内にある、以下の定数のどれか一つ(またはその組み合わせ)を渡して下さい: 

| 定数                | 型    | 値 | コメント                                                |
| ----------------- | ---- | - | --------------------------------------------------- |
| Form all pages    | 倍長整数 | 2 | 全てのページの全てのオブジェクトを返しますが、継承されたオブジェクトは含めません。           |
| Form current page | 倍長整数 | 1 | 0ページ目を含めてカレントページの全てのオブジェクトを返しますが、継承されたオブジェクトは含めません。 |
| Form inherited    | 倍長整数 | 4 | 継承されたオブジェクトのみを返す                                    |

**互換性に関する注意:** *\** 引数を渡すことは、Form current page+Form inherited を渡す事と同等です。 *\** 引数を渡すシンタックスは現在は使用されておらず、今後使用されるべきではありません。

#### 例題 1 

継承されたフォームのオブジェクトも含めて(もしあれば)、全てのページの情報を取得したい場合:

```4d
  //開いているフォーム
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray)
```

または:

```4d
  //ロードしたフォーム
 FORM LOAD([Table1];"MyForm")
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
```

#### 例題 2 

カレントページに関する情報だけを取得し、ロードされたフォームのページ0と継承されたフォームオブジェクトも(もしあれば)含めたい場合:

```4d
 FORM LOAD("MyForm")
 FORM GOTO PAGE(2)
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form current page+Form inherited)
```

#### 例題 3 

継承されたフォーム内の全てのオブジェクトの情報が(もしあれば)取得したい場合(ただい、もし継承されたフォームがない場合には空の配列が返されます):

```4d
 FORM LOAD("MyForm")
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form inherited)
```

#### 例題 4 

0ページ目のオブジェクトも含め、4ページ目のオブジェクトの情報を取得し、継承されたフォームオブジェクトに関しては(もしあれば)除外したい場合:

```4d
 FORM LOAD([Table1];"MyForm")
 FORM GOTO PAGE(4)
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form current page)
```

#### 例題 5 

全てのページのオブジェクトの情報を取得し、継承されたフォームオブジェクトに関しては(もしあれば)除外したい場合:

```4d
 FORM LOAD([Table1];"MyForm")
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages)
```

#### 例題 6 

フォームをロードし、そこに内包される全てのリストボックスオブジェクトの一覧を取得する場合:

```4d
 FORM LOAD("MyForm")
 ARRAY TEXT(arrObjects;0)
 FORM GET OBJECTS(arrObjects)
 ARRAY LONGINT(ar_type;Size of array(arrObjects))
 For($i;1;Size of array(arrObjects))
    ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})
    If(ar_type{$i}=Object type listbox)
       ARRAY TEXT(arrLBObjects;0)
       LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)
    End if
 End for
 FORM UNLOAD
```

#### 参照 

[FORM GET PROPERTIES](form-get-properties.md)  
*Form Objects (Access)*  
*オブジェクト(フォーム)*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 898 |
| スレッドセーフである | &cross; |


