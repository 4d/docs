---
id: method-set-code
title: METHOD SET CODE
slug: /commands/method-set-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET CODE.Syntax-->**METHOD SET CODE** ( *path* ; *code* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET CODE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text, Text配列 | &#8594;  | メソッドパスを格納したテキストまたはテキスト配列 |
| code | Text, Text配列 | &#8594;  | 指定したメソッドのコード |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドをホストデータベースに適用する (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD SET CODE.Summary-->**METHOD SET CODE**コマンドは*path*引数で指定したメソッドのコードを*code*引数に渡した内容で置き換えます。<!-- END REF-->

データベースメソッド、クラス定義、トリガー、プロジェクトメソッド、フォームメソッド、オブジェクトメソッドなど、すべてのタイプのメソッドのコードにこのコマンドはアクセスできます。

メソッドが存在しなければ、*code*引数に渡した内容で新規作成されます。

**注:** プロジェクトデータベースにおいては、データベースメソッド、トリガー、およびプロジェクトメソッドのみ新規作成することができます。

**プロジェクトにおける注意:** 

* プロジェクトデータベースにおいては、データベースメソッド、トリガー、およびプロジェクトメソッドのみ新規作成することができます。
* 新規作成されたプロジェクトにおいては、環境設定の***Project ソースファイルにトークンを含める*** オプションによって、トークンが保存されるか保存されないかを決めることができます。

テキスト配列あるいはテキスト変数を使用する2通りのシンタックスを使用できます:

```4d
 var tVpath : Text // テキスト変数
 var tVcode : Text
 METHOD SET CODE(tVpath;tVcode) // 1つのメソッドのコード
```

```4d
 ARRAY TEXT(arrPaths;0) // テキスト配列
 ARRAY TEXT(arrCodes;0)
 METHOD SET CODE(arrPaths;arrCodes) // 複数のメソッドのコード
```

この2つのシンタックスを混合して使用することはできません。

無効なパス名を渡した場合、コマンドはなにも行いません。

**METHOD SET CODE** が呼ばれた場合、デフォルトでメソッド属性はリセットされます。ただし *code* 引数の先頭行に有効なメタデータ(JSON表記)が含まれる場合、それらはメソッド属性を指定するために使用され、先頭行はコードには含まれません。メタデータの例は以下の通りです:

```4d
  // %attributes = {"invisible":true,"lang":"fr","folder":"Security"}
```

**注:** これらのメタデータは[METHOD GET CODE](method-get-code.md)コマンドで自動的に生成されます。サポートされる属性についての詳細な情報に関しては、[METHOD SET ATTRIBUTES](method-set-attributes.md) コマンドを参照して下さい。

メタデータの「folder」プロパティに関しては、以下の点に留意して下さい。

* このプロパティが明示されていて有効なフォルダーに対応する場合、メソッドはその親フォルダーに置かれます。
* このプロパティが明示されていないかフォルダーが存在しない場合、コマンドは親フォルダーの階層に変更を加えません。
* このプロパティが空の文字列を含む場合、メソッドはルート階層に置かれます。

このコマンドをコンポーネントから実行することもできますが、この場合 (コンポーネントコードには書き込みアクセスができないため) *\** 引数を渡さなければなりません。この状況で *\** 引数を省略するとエラー-9763が生成されます。

#### 例題 

この例題ではアプリケーションのすべてのメソッドを書き出し/読み込みします:

```4d
 $root_t:=Get 4D folder(Database folder)+"methods"+Folder separator
 ARRAY TEXT($fileNames_at;0)
 CONFIRM("メソッドを読み込みますか、書き出しますか？";"Import";"Export")
 
 If(OK=1)
    DOCUMENT LIST($root_t;$fileNames_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)
       METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))
    End for
 Else
    If(Test path name($root_t)#Is a folder)
       CREATE FOLDER($root_t;*)
    End if
    METHOD GET PATHS(Path project method;$fileNames_at)
    METHOD GET CODE($fileNames_at;$code_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       SET BLOB SIZE($blob_x;0)
       TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)
       BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)
    End for
 End if
 SHOW ON DISK($root_t)
```

#### 参照 

[METHOD GET CODE](method-get-code.md)  