---
id: method-get-code
title: METHOD GET CODE
slug: /commands/method-get-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET CODE.Syntax-->**METHOD GET CODE** ( *path* ; *code* {; *option*} {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET CODE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text, Text配列 | &#8594;  | メソッドパスを格納したテキストまたはテキスト配列 |
| code | Text, Text配列 | &#8592; | 指定したメソッドのコード |
| option | Integer | &#8594;  | 0 または省略時 = 単純な書き出し(トークンなし)、1 = トークンを使用して書き出し |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD GET CODE.Summary-->**METHOD GET CODE**コマンドは*path*引数で指定したメソッドの内容を*code*に返します。<!-- END REF-->このコマンドはデータベースメソッド、クラス定義、トリガー、プロジェクトメソッド、フォームメソッド、そしてオブジェクトメソッド等すべてのタイプのメソッドコードを返すことができます。

テキスト配列またはテキスト変数に基づく2つのシンタックスを使用できます:  

```4d
 var tVpath : Text // テキスト変数
 var tVcode : Text
 METHOD GET CODE(tVpath;tVcode) // 1つのメソッドのコード
```

```4d
 ARRAY TEXT(arrPaths;0) // テキスト配列
 ARRAY TEXT(arrCodes;0)
 METHOD GET CODE(arrPaths;arrCodes) // 複数メソッドのコード
```

2つのシンタックスを混合して使用することはできません。

無効なパス名を渡すと、*code* 引数は空のままエラーが生成されます。

このコマンドから*code*に返されるテキストは以下のとおりです:

* 4Dコマンド名はフランス語バージョンで"リージョンシステム設定を使用"オプションをチェックしていた場合除き、全てのバージョンの4D英語で記述されます([Is a list](is-a-list.md) を参照して下さい)。*option*引数を使用する場合、コードにランゲージトークンを含める事によって4Dプログラミング言語とバージョンに関わりなくすることもできます(以下を参照)。
* コードの可読性を高めるために、メソッドエディター同様、テキストはプログラミング言語に基づいたタブ文字でインデント付けがされています。
* 読み込み時にメタデータが含まれていたコードには、先頭に行が追加されます。例えば:  
```4d  
  // %attributes = {"lang":"fr","invisible":true,"folder":"Web3"}  
```  
    
読み込み時、この行は読み込まれず、それに対応する属性を設定する目的でのみ使用されます(指定されていない属性はデフォルト値へとリセットされます)。"lang"属性は書き出し言語を設定し、異なる言語への読み込みを防止する目的で 使用されます(この場合、エラーが生成されます)。「フォルダ」属性にはメソッドの親フォルダの名前が入ります。メソッドが親フォルダを持っていない場合は表示されません。  
追加で属性を定義することができます。詳細な情報に関しては、[METHOD SET ATTRIBUTES](method-set-attributes.md) コマンドの詳細を参照して下さい。

*option*引数を使用する際、メソッドのトークナイズドされたランゲージ要素についてのコード書き出しモードを選択する事ができます:

* *option*引数に0を渡すか省略した場合、メソッドコードはトークンなしで書き出されます。つまり、メソッドエディターに表示されているのと同じように書き出されます。
* 1または定数Code with tokensを渡した場合、メソッドコードはトークンとともに書き出されます。つまり*code*引数に書き出されたコンテンツにおいて、トークナイズドされた要素はその直後に内部参照がつくようになります。例えば、"[String](string.md)(a)"という表記は"[String](string.md):C10(a)"という形で書き出されます。ここで、"C10"とは[String](string.md)コマンドの内部参照を表しています。

トークナイズドされたランゲージ要素には以下のものが含まれます:

* 4Dコマンドと定数
* テーブルとフィールド名
* 4Dプラグインコマンド

トークンで書き出されたコードは以降のランゲージ要素のどのような改名にも影響されません。トークンのおかげで、[METHOD SET CODE](method-set-code.md)コマンドあるいはコピー/ペーストを用いた場合でも、テキストとして提供されたコードは4Dによって常に正常に解釈されます。4D トークンのシンタックスについての詳細は *フォーミュラ内でのトークンの使用*を参照ください。

コマンドがコンポーネントから実行されると、デフォルトでコンポーネントメソッドに適用されます。*\** 引数を渡すとホストデータベースにアクセスします。

#### 例題 1 

[METHOD SET CODE](method-set-code.md)コマンドの例題参照。

#### 例題 2 

この例では、*option*引数を使用した際の影響について説明します。

以下の"simple\_init"メソッドを書き出したい場合を考えます:

```4d
 Case of
    :(Form event code=On Load)
       ALL RECORDS([Customer])
 End case
```

以下のコードを実行した場合:

```4d
 var $path : Text
 var $contents : Text
 $path:=METHOD Get path(Path project method;"simple_init")
 METHOD GET CODE($path;$contents;0) //トークンなし
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

書き出されたドキュメントには以下の内容が格納されます:

```RAW
  //%attributes = {"lang":"en"} 4Dによってコメント追加・保存されたコメントCase of    : (Form event code=On Load)        ALL RECORDS([Customer])End case
```

以下のコードを実行した場合:

```4d
 var $path : Text
 var $contents : Text
 $path:=METHOD Get path(Path project method;"simple_init")
 METHOD GET CODE($path;$contents;Code with tokens) //トークンを使用
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

書き出されたドキュメントには以下の内容が格納されます:

```RAW
  //%attributes = {"lang":"en"} 4Dによってコメント追加・保存されたコメントCase of    : (Form event code:C388=On Load:K2:1)        ALL RECORDS:C47([Customer:1])End case
```

#### 参照 

[METHOD SET CODE](method-set-code.md)  
*フォーミュラ内でのトークンの使用*  