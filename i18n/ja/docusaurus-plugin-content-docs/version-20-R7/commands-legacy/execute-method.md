---
id: execute-method
title: EXECUTE METHOD
slug: /commands/execute-method
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD.Syntax-->**EXECUTE METHOD** ( *methodName* {; result | * {; *param*}}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| methodName | Text | &#8594;  | 実行するプロジェクトメソッド名 |
| result &#124; * | 変数, 演算子 | &#8592; | メソッドの結果を受け取る変数 または *: メソッドが結果を返さない場合 |
| param | Expression | &#8594;  | メソッドの引数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.EXECUTE METHOD.Summary-->EXECUTE METHOD コマンドは、*param1.<!-- END REF-->..paramN*を引数に渡して、*methodName*プロジェクトメソッドを実行します。データベースまたはコマンドを実行するコンポーネントから呼び出し可能なメソッド名を渡すことができます。

*result*には、*methodName* の実行結果を受け取る変数を渡します (*methodName*内で$0に置かれる値)。メソッドが値を返さない場合、*\** を2番目の引数に渡します。メソッドが結果を返さず、引数を必要としない場合、*methodName* 引数のみを渡します。

実行コンテキストは呼び出しメソッドです。すなわちカレントフォームやカレントフォームイベントは呼び出されるメソッド内でも有効です。

このコマンドを*methodName* にホストデータベースのメソッドを渡してコンポーネントから呼び出す場合 (あるいはその逆の場合)、メソッドはメソッドプロパティ内でホストデータベースとコンポーネントで共有されるよう設定しなければなりません。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されます。

#### 参照 

[EXECUTE FORMULA](execute-formula.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1007 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


