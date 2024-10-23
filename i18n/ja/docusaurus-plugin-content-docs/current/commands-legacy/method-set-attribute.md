---
id: method-set-attribute
title: METHOD SET ATTRIBUTE
slug: /commands/method-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTE.Syntax-->**METHOD SET ATTRIBUTE** ( *path* ; *attribType* ; *attribValue* {; *attribType2* ; *attribValue2* ; ... ; *attribTypeN* ; *attribValueN*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text | &#8594;  | プロジェクトメソッドのパス |
| attribType | Integer | &#8594;  | 属性タイプ |
| attribValue | Boolean, Text | &#8594;  | True: 属性を選択False: 属性の選択解除 |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドをホストデータベースに適用する (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD SET ATTRIBUTE.Summary-->**METHOD SET ATTRIBUTE**コマンドは*path*引数で指定されたプロジェクトメソッドの*attribType*属性の値を設定します。<!-- END REF-->このコマンドはプロジェクトメソッドに対してのみ動作します。無効な *path*を渡すとエラーが生成されます。

*attribType*引数には設定を行う属性のタイプを示す値を渡します。*Design Object Access*テーマにある、以下の定数を使用できます:

| 定数                           | 型    | 値    | コメント                                                                                                                                                                                     |
| ---------------------------- | ---- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute executed on server | 倍長整数 | 8    | "サーバー上で実行"オプションに対応                                                                                                                                                                       |
| Attribute folder name        | 倍長整数 | 1024 | メソッドのためのフォルダ名(「フォルダ」属性)。この定数を渡した場合、フォルダ名を *attribValue* に渡す必要があります。<br/>この名前が有効なフォルダに対応する場合、メソッドはその親フォルダに置かれます。フォルダが存在しない場合、コマンドは親フォルダの階層は何も変更しません。空の文字列を渡した場合、メソッドはルート階層に置かれます。 |
| Attribute invisible          | 倍長整数 | 1    | "隠す"オプションに対応                                                                                                                                                                             |
| Attribute published SOAP     | 倍長整数 | 3    | "Webサービスとして提供"オプションに対応                                                                                                                                                                   |
| Attribute published SQL      | 倍長整数 | 7    | "SQL利用可"オプションに対応                                                                                                                                                                         |
| Attribute published Web      | 倍長整数 | 2    | "4DタグおよびURL (4DACTION...) で利用可"オプションに対応                                                                                                                                                  |
| Attribute published WSDL     | 倍長整数 | 4    | "WSDLで公開する"オプションに対応                                                                                                                                                                      |
| Attribute shared             | 倍長整数 | 5    | "コンポーネントとホストデータベースで共有する"オプションに対応                                                                                                                                                         |

*attribValue* 引数には、以下の値を渡すことが出きます。

* 対応するオプションを選択するには**True**を渡します。選択を解除するには**False**を渡します。
* Attribute folder name 定数を *attribType* に使用した場合は文字列(フォルダ名)を渡します。

一度の呼び出しに複数の*attribType*;*attribValue* ペアを渡す事ができます。

このコマンドをコンポーネントから実行することもできますが、この場合 (コンポーネントコードには書き込みアクセスができないため) *\** 引数を渡さなければなりません。この状況で *\** 引数を省略するとエラー-9763が生成されます。

##### 

このコマンドをコンパイルモードで実行することはできません。このモードで呼び出されると、エラー -9762 が生成されます。 

#### 例題 1 

"Choose dialog"プロジェクトメソッドの"コンポーネントとホストデータベースで共有"プロパティを選択します:

```4d
 METHOD SET ATTRIBUTE("Choose dialog";Attribute shared;True)
```

#### 例題 2 

複数の属性/値のペアを設定する場合:

```4d
 METHOD SET ATTRIBUTE(vPath;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vFolder;*)
```

#### 参照 

*Design Object Access*  
[METHOD Get attribute](method-get-attribute.md)  
[METHOD SET ATTRIBUTES](method-set-attributes.md)  