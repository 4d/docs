---
id: listbox-get-arrays
title: LISTBOX GET ARRAYS
slug: /commands/listbox-get-arrays
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET ARRAYS.Syntax-->**LISTBOX GET ARRAYS** ( {* ;} *object* ; *arrColNames* ; *arrHeaderNames* ; *arrColVars* ; *arrHeaderVars* ; *arrColsVisible* ; *arrStyles* {; *arrFooterNames* ; *arrFooterVars*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET ARRAYS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| arrColNames | Text array | &#8592; | 列オブジェクト名 |
| arrHeaderNames | Text array | &#8592; | ヘッダーオブジェクト名 |
| arrColVars | Pointer array | &#8592; | 列変数へのポインターまたは列フィールドへのポインターまたはNil |
| arrHeaderVars | Pointer array | &#8592; | ヘッダー変数へのポインター |
| arrColsVisible | Boolean array | &#8592; | 列毎の表示状態 |
| arrStyles | Pointer array | &#8592; | 配列へのポインターまたは スタイル、カラー、および行管理変数またはNil |
| arrFooterNames | Text array | &#8592; | 列フッターオブジェクト名 |
| arrFooterVars | Pointer array | &#8592; | 列フッター変数へのポインター |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX GET ARRAYS.Summary-->**LISTBOX GET ARRAYS**コマンドは一連の同期化された配列を返し、*object*引数および *\** で指定されたリストボックスの各列（表示または非表示）に関する情報を提供します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

コマンドを実行すると: 

* *arrColNames*配列には、リストボックス内の各列のオブジェクト名一覧が代入されます。
* *arrHeaderNames*配列には、リストボックス内の各列ヘッダのオブジェクト名一覧が代入されます。
* *arrColVars*配列には、リストボックス内の各列に関連付けられた変数（配列）へのポインタが代入されます。セレクションタイプのリストボックスの場合、*arrColVars* には:  
   * フィールドが関連付けられた列の場合、フィールドへのポインタ  
   * 変数が関連付けられた列の場合、変数へのポインタ  
   * 式が関連付けられた列の場合、[Is nil pointer](is-nil-pointer.md)ポインタが格納されます。
* *arrHeaderVars*配列には、リストボックス内の各列ヘッダに関連付けられた変数へのポインタが代入されます。
* *arrColsVisible*配列には各列に関するブール値が代入され、リストボックス内の列が表示（[True](true.md)）または非表示（[False](false.md)）のいずれであるかを示します。
* *arrStyles*配列には、4つの配列をそれぞれ指す4つのポインタが代入されます。これら4つの配列は、リストボックス内の各行に対してスタイルやフォントカラー、背景 色、各行のカスタムの表示管理を適用するために使用されます。これらの配列はデザインモードでリストボックスのプロパティリストで指定、あるいは[LISTBOX SET ARRAY](listbox-set-array.md) コマンドを使用して指定されたものです。リストボックスに対する配列が指定されていない場合、*arrStyles*内の対応する項目には[Is nil pointer](is-nil-pointer.md)ポインタが代入されます。  
4つめのポインターはブール型配列(非表示配列)、あるいは倍長整数配列(非表示、無効化、選択不可行を設定するのに使用する配列)に対応します。これは行管理配列に使用されている実装に基づきます(*リストボックス特有のプロパティ*を参照して下さい)。  
レコードセレクション型およびコレクション/エンティティセレクション型のリストボックスでは、*arrStyles* には:  
   * 変数により設定された設定ごとに、変数へのポインタが、  
   * 式により設定された設定ごとに、[Is nil pointer](is-nil-pointer.md)ポインタが格納されます。

#### 参照 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 832 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


