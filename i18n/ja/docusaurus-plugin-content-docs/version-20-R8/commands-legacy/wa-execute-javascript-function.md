---
id: wa-execute-javascript-function
title: WA EXECUTE JAVASCRIPT FUNCTION
slug: /commands/wa-execute-javascript-function
displayed_sidebar: docs
---

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Syntax-->**WA EXECUTE JAVASCRIPT FUNCTION** ( {* ;} *object* ; *jsFunction* ; result|* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| jsFunction | Text | &#8594;  | 実行するJavaScript関数名 |
| result&#124;* | 変数 | &#8594;  | または関数が結果を返さない場合 * |
| &#8592; | 関数結果 (返される場合) |
| param | Text, Number, Date, Object, Collection | &#8594;  | 関数に渡す引数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Summary-->WA EXECUTE JAVASCRIPT FUNCTION コマンドは、*\** と *object* で指定したWebエリアで、*jsFunction*に渡したJavaScript関数を実行し、*result* 引数に結果を返します (オプション)。<!-- END REF-->

関数が結果を返さない場合、*\** in the *result* 引数に *\** を渡します。

*param*には関数の引数を含む引数を１つ以上渡せます。

コマンドは、入力 (*param*) と出力 (*result*) において複数の型の引数をサポートします。文字列、数値、日付、オブジェクト、そしてコレクション型の引数を渡したり受け取ったりすることが出来ます。引数の型が定義されていない場合、デフォルトでテキスト型が使用されます。

**警告**: このコマンドを使用して、ダイアログを表示するようなJavaScript 関数(**alert()**, **print()**...) を直接呼び出すことは推奨されていません。4D コードが実行中のときはユーザーはWeb エリアを操作することができないからです。このようなインターフェースを実装する必要がある場合には、例えば **setTimeout(function(){alert();}, 50))** のようなコードを呼び出すことで、4D コードが実行を完了させたあとにユーザーが入力をできるようにすることができます。

#### 例題 1 

3 つの引数を使用してJavaScript関数を呼び出す:

```4d
 $JavaScriptFunction:="TheFunctionToBeExecuted"
 $Param1:="10"
 $Param2:="true"
 $Param3:="1,000.2" //注：千区切りは","で、小数点は "."
 
 WA EXECUTE JAVASCRIPT FUNCTION(MyWArea;$JavaScriptFunction;$Result;$Param1;$Param2;$Param3)
```

#### 例題 2 

"getCustomerInfo" という JavaScript ファンクションは、番号ID を引数として受け取り、結果をオブジェクトとして返します:

```4d
 var $Result : Object
 var $ID : Integer
 $ID:=1000
 WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfo";$Result;$ID)
```

#### 参照 

[WA Evaluate JavaScript](wa-evaluate-javascript.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1043 |
| スレッドセーフである | &cross; |


