---
id: method-set-comments
title: METHOD SET COMMENTS
slug: /commands/method-set-comments
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET COMMENTS.Syntax-->**METHOD SET COMMENTS** ( *path* ; *comments* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET COMMENTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text, Text配列 | &#8594;  | メソッドパスを格納したテキストまたはテキスト配列 |
| comments | Text, Text配列 | &#8594;  | メソッドに設定するコメント |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドをホストデータベースに適用する (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD SET COMMENTS.Summary-->**METHOD SET COMMENTS**コマンドは*path*引数で指定したメソッドのドキュメンテーションを*comments*引数の内容で置き換えます。<!-- END REF-->

このコマンドを使用して更新することのできるドキュメンテーションは、4Dエクスプローラーのコメント欄で表示されるものです(コード内のコメントと混同しないでください)。

データベースのタイプによって格納されるものが異なります:

* プロジェクトデータベースではmarkdownテキスト
* バイナリーデータベースではスタイル付きテキスト

このドキュメンテーションは、トリガー、プロジェクトメソッド、フォームメソッド、データベースメソッド、クラスに対して生成することができます。

**注:** フォームとフォームメソッドは同じドキュメンテーションを共有します。

テキスト配列またはテキスト変数に基づく2つのシンタックスを使用できます:

```4d
 var tVpath : Text // テキスト変数
 var tVcomments : Text
 METHOD SET COMMENTS(tVpath;tVcomments) // 1つのメソッドのドキュメンテーション
```

```4d
 ARRAY TEXT(arrPaths;0) // テキスト配列
 ARRAY TEXT(arrComments;0)
 METHOD SET COMMENTS(arrPaths;arrComments) // 複数メソッドのドキュメンテーション
```

2つのシンタックスを混合して使用することはできません。

無効なパス名を指定するとエラーが生成されます。

コマンドをコンポーネントから実行することもできますが、この場合 (コンポーネントコードには書き込みアクセスができないため) *\** 引数を渡さなければなりません。この状況で *\** 引数を省略するとエラー-9763が生成されます。

#### 例題 

既存のトリガーのドキュメンテーションに更新日を追加する:

```4d
 METHOD GET COMMENTS("[trigger]/Table1";$comments)
 $comments:="Modif:"+String(Current date)+"\r"+$comments
 METHOD SET COMMENTS("[trigger]/Table1";$comments)
```

#### 参照 

[METHOD GET COMMENTS](method-get-comments.md)  