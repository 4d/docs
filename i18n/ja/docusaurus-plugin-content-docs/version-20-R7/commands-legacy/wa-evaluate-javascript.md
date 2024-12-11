---
id: wa-evaluate-javascript
title: WA Evaluate JavaScript
slug: /commands/wa-evaluate-javascript
displayed_sidebar: docs
---

<!--REF #_command_.WA Evaluate JavaScript.Syntax-->**WA Evaluate JavaScript** ( {* ;} *object* ; *jsCode* {; *type*} )  : any<!-- END REF-->
<!--REF #_command_.WA Evaluate JavaScript.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| jsCode | Text | &#8594;  | JavaScriptコード |
| type | Integer | &#8594;  | 戻り値に指定する型 |
| 戻り値 | Object, Text, Pointer, Real, Date, Time | &#8592; | 実行結果 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA Evaluate JavaScript.Summary-->WA Evaluate JavaScript コマンドは、*\** と *object* 引数で指定したWebエリアで、*jsCode*に渡されたJavaScriptコードを実行し、結果を戻します。<!-- END REF-->このコマンドはページが読み込まれた後に呼び出してください(On End URL Loading フォームイベントが生成されている必要があります)。

デフォルトでは、コマンドは値を文字列として返します。任意の *type* 引数を用いることによって、戻ってくる値の型を指定することができます。使用できる定数は "*Field and Variable Types*" テーマ内にある以下の一覧の通りです。

| 定数            | 型    | 値  |
| ------------- | ---- | -- |
| Is Boolean    | 倍長整数 | 6  |
| Is collection | 倍長整数 | 42 |
| Is date       | 倍長整数 | 4  |
| Is longint    | 倍長整数 | 9  |
| Is object     | 倍長整数 | 38 |
| Is real       | 倍長整数 | 1  |
| Is text       | 倍長整数 | 2  |
| Is time       | 倍長整数 | 11 |

**警告**: このコマンドを使用して、ダイアログを表示するようなJavaScript 関数(**alert()**, **print()**...) を直接呼び出すことは推奨されていません。4D コードが実行中はユーザーはWeb エリアを操作することができないからです。このようなインターフェースを実装する必要がある場合には、例えば **setTimeout(function(){alert();}, 50))** のようなコードを呼び出すことで、4D コードが実行を完了させたあとにユーザーが入力をできるようにすることができます。

#### 例題 1 

この例題のJavaScriptコードは、履歴中前のURLを表示します:

```4d
 $result:=WA Evaluate JavaScript(MyWArea;"history.back()")
```

#### 例題 2 

以下に返ってきた結果の変換を含む例を紹介します。

HTML ファイル内にあるJavaScriptファンクションの例:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <script>
        function evalLong(){
            return 123;
        }
        function evalText(){
            return "456";
        }
        function evalObject(){
            return {a:1,b:"hello world"};
        }
        function evalDate(){
            return new Date();
        }
    </script>
    </head>
    <body>
        TEST PAGE
    </body>
</html>
```

4Dフォームメソッドでは以下の様に記述します:

```4d
 If(Form event code=On Load)
    WA OPEN URL(*;"Web Area";"C:\\myDatabase\\index.html")
 End if
```

その後、4DからのJavaScriptコードを以下の様に評価します:

```4d
 $Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)
  //$Eval1 = 123
  //$Eval1 = 型が省略されていた場合は"123"
 $Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalText()";Is text)
  //$Eval2 = "456"
 $Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObject()";Is object)
  //$Eval3 = {"a":1,"b":"hello world"}
 $Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)
  // $Eval4 = 06/21/13
  // $Eval4 = 型が省略されていた場合は"2013-06-21T14:45:09.694Z"
```

#### 参照 

[WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1029 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


