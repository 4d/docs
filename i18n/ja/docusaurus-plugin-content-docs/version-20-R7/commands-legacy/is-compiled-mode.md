---
id: is-compiled-mode
title: Is compiled mode
slug: /commands/is-compiled-mode
displayed_sidebar: docs
---

<!--REF #_command_.Is compiled mode.Syntax-->**Is compiled mode** {( * )} : Boolean<!-- END REF-->
<!--REF #_command_.Is compiled mode.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | ホストデータベースの情報を返す |
| 戻り値 | Boolean | &#8592; | コンパイル済み (True), インタプリタ (False) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is compiled mode.Summary-->Is compiled modeは、データベースがコンパイルモード（True）、ま たはインタプリタモード（False）のどちらで実行されているかをテストします。<!-- END REF-->  
  
オプションの*\** 引数は、コンポーネントを使用するアーキテクチャで有用です。この引数は実行モードのテスト対象がホストデータベースか、コンポーネントかを指定するため に使用します。   

* コマンドがコンポーネントから呼ばれた場合:  
   * *\** 引数が渡されると、コマンドはホストデータベースの実行モードに応じて[True](true.md "True")または[False](false.md "False")を返します。  
   * *\** 引数が渡されないと、コマンドはコンポーネントの実行モードに応じて[True](true.md "True")または[False](false.md "False")を 返します。
* コマンドがホストデータベースから呼ばれた場合、コマンドはホストデータベースの実行モードに応じて[True](true.md "True")または[False](false.md "False")を返します。

#### 例題 

インタプリタモードで実行している場合にだけ使用したいデバッグコードを記述するには、デバッグコードをIs compiled modeを呼び出すテストの中に記述します:

```4d
  // ...
 If(Not(Is compiled mode))
  // デバッグコードをここに記述
 End if
  // ...
```

#### 参照 

[IDLE](idle.md)  
[Undefined](undefined.md)  