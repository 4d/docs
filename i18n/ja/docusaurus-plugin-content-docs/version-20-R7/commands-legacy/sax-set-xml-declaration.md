---
id: sax-set-xml-declaration
title: SAX SET XML DECLARATION
slug: /commands/sax-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SAX SET XML DECLARATION.Syntax-->**SAX SET XML DECLARATION** ( *document* ; *encoding* {; *standalone*} )<!-- END REF-->
<!--REF #_command_.SAX SET XML DECLARATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| encoding | Text | &#8594;  | XMLドキュメント文字セット |
| standalone | Boolean | &#8594;  | True = ドキュメントはスタンドアロン False (デフォルト) = ドキュメントはスタンドアロンではない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX SET XML DECLARATION.Summary-->**SAX SET XML DECLARATION** コマンドは*document* で参照されるXMLドキュメントを、引数のエンコーディングを使用して初期化します。<!-- END REF-->オプションとして、*standalone* 引数を使用してスタンドアロン属性を設定することができます。

* *encoding*: ドキュメントで使用される文字セットを指定するために使用します。コマンドが呼び出されない場合のデフォルトはUTF-8文字セットです。  
**注:** 4D XMLコマンドによってサポートされていないエンコーディングを渡した場合、UTF-8が使用されます。サポートされている文字コードの一覧については*文字セット*を参照して下さい(ただし、多くの場合についてUTF-8が推奨されます)。
* *standalone*: ドキュメントがスタンドアロンか ([True](true.md "True"))、あるいは他のファイルや外部リソースを必要とするか ([False](false.md "False")) を示します。コマンドが呼び出されないか引数が省略された場合のデフォルトは[False](false.md "False")です。

**注:** 何も書き込んでいない状態で[XML SET OPTIONS](xml-set-options.md) コマンドを使用することで、ドキュメントのインデントを指定することができます。

このコマンドはドキュメントごとに一回、最初のXML設定コマンドの前に、呼び出さなければなりません。そうでなければエラーが生成されます。

#### 例題 

以下のコードを実行すると: 

```4d
 SAX SET XML DECLARATION($DocRef;"UTF-16";True)
```

ドキュメントに以下の行が書き込まれます: 

```XML
<?xml version="1.0" encoding="UTF-16" standalone="yes"?>
```

#### 参照 

[SAX GET XML DOCUMENT VALUES](sax-get-xml-document-values.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 858 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


