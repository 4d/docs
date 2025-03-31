---
id: method-open-path
title: METHOD OPEN PATH
slug: /commands/method-open-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD OPEN PATH.Syntax-->**METHOD OPEN PATH** ( *path* {; *line*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD OPEN PATH.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text | &#8594;  | 開くメソッドのパス |
| line | Number | &#8594;  | Line number |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.METHOD OPEN PATH.Summary-->**METHOD OPEN PATH**コマンドは内部パス名が*path* 引数であるメソッドを4Dメソッドエディターで開きます。<!-- END REF-->

このコマンドは非同期です。つまりこのコマンドは呼び出されたあとすぐに呼び出し元メソッドへと戻り、メソッドエディターが開かれるのを待つことはしないということです。

このコマンドはあらゆるタイプのメソッドもクラスファンクションを開くことができます。より詳細な情報については、*Path syntax* を参照してください。

開くメソッドは既に存在していなければなりません。*path* 引数が存在しないメソッドを指している場合、エラー -9801 "メソッドを開けません" が生成されます。

コマンドをコンポーネントから実行することもできますが、この場合 (コンポーネントコードには書き込みアクセスができないため) *\** 引数を渡さなければなりません。この状況で *\** 引数を省略するとエラー-9763が生成されます。

#### 参照 

[METHOD Get path](method-get-path.md)  
*デザインオブジェクトアクセスコマンド*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1213 |
| スレッドセーフである | &cross; |


