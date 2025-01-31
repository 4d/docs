---
id: process-4d-tags
title: PROCESS 4D TAGS
slug: /commands/process-4d-tags
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS 4D TAGS.Syntax-->**PROCESS 4D TAGS** ( *inputData* ; *outputData* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.PROCESS 4D TAGS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| inputData | Text | &#8594;  | 処理する4Dタグを格納しているデータ |
| outputData | Text | &#8592; | 処理されたデータ |
| param | Expression | &#8594;  | 実行されるテンプレートへと渡される引数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PROCESS 4D TAGS.Summary-->**PROCESS 4D TAGS**コマンドを使用すると、*inputTemplate* 引数に格納されている4D変換タグの処理が開始されます。<!-- END REF-->引数を使用して値を挿入し(任意)、その結果が*outputResult* に返されます。 これらのタグの完全な詳細については、*4D 変換タグ* の章を参照して下さい。

このコマンドにより、タグや、4D式や変数への参照を含んだ"テンプレート"型のテキストを実行でき、それにより実行コンテキストや引数に渡された値に応じた異なる結果を生成することができます。  
例 えば、このコマンドにより、4D変換タグを含んだセミダイナミックページに基づいたHTMLページを生成する事ができます(このとき4D Webサーバーを起動する必要はありません)。このコマンドを使用して、データベース内のデータへの参照の処理を(4D Internetコマンド経由で)含んだHTMLフォーマットのEメールを送信する事ができます。テキストに基づいたデータタイプであれば、XML、 SVG、マルチスタイルテキストなど、どんなデータタイプでも処理することができます。

処理されるタグを格納しているデータを引数 *inputTemplate* に渡します。この引数にはテキスト型の変数やフィールドを渡せます。

4Dの全ての変換タグがサポートされます (*4DTEXT*、*4DHTML*、*4DSCRIPT*、*4DLOOP*、*4DEVAL*など) 。

**注:** Webサーバー (Webプロセス) のフレームワーク以外で *4DINCLUDE* タグを使用する場合:

* 4Dのローカルモードまたは4D Serverの場合、データベースストラクチャーファイルを格納しているフォルダーがデフォルトフォルダーです。
* 4Dのリモートモードの場合、4Dのアプリケーションを格納しているフォルダーがデフォルトフォルダーです。

**PROCESS 4D TAGS** コマンドは、実行されたコードに不定数の*param* 引数を挿入する事をサポートします。プロジェクトメソッド同様、これらの引数は様々なタイプのスカラー値(テキスト、日付、時 間、倍長整数、実数、等)に加え、オブジェクトやコレクションも格納することができます。また、配列ポインターによって配列を使用することもできます。4Dタグによって処理されるコードの中では、これらの引数は4D メソッド同様、標準の引数($1、$2等)を通じてアクセス可能です(例題を参照して下さい)。  
**PROCESS 4D TAGS** コマンドの実行コンテキストにおいて、専用のローカル変数のセットが定義されます。これらの変数は処理中、読み出し・書き込みともに可能です。

コマンドの実行後引数 *outputResult* には、*inputTemplate* 引数の結果とともに、そこに含まれる4Dタグが処理された結果が返されます。もし*inputTemplate* 引数が4Dタグを含まない、または空の文字列を生成する場合、引数 *outputResult* の内容は引数*inputTemplate* の内容と一致します。

引数 *outputResult* はテキスト型のフィールドまたは変数です。

**注:** このコマンドは[On Web Authenticationデータベースメソッド](on-web-authentication-database-method.md)を呼び出しません。

#### 例題 1 

この例題は'template' 型のドキュメントを読み込み、それに格納されるタグを処理し、その結果を保存します:

```4d
 var $inputText_t : Text
 var $outputText_t : Text
 
 $inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)
 PROCESS 4D TAGS($inputText_t;$outputText_t)
 TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)
```

#### 例題 2 

以下の例は、配列のデータを使用してテキストを生成します:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:=""
 $input:=$input+""
 $input:=$input+" "
 $input:=$input+""
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world"
```

#### 参照 

*4D 変換タグ*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 816 |
| スレッドセーフである | &check; |


