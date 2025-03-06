---
id: dom-set-xml-declaration
title: DOM SET XML DECLARATION
slug: /commands/dom-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML DECLARATION.Syntax-->**DOM SET XML DECLARATION** ( *elementRef* ; *encoding* {; *standalone* {; *indentation*}} )<!-- END REF-->
<!--REF #_command_.DOM SET XML DECLARATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| encoding | Text | &#8594;  | XMLドキュメント文字セット |
| standalone | Boolean | &#8594;  | True = ドキュメントはスタンドアロン False (デフォルト) = ドキュメントはスタンドアロンではない |
| indentation | Boolean | &#8594;  | ***廃止予定、使用しないでください*** |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM SET XML DECLARATION.Summary-->**DOM SET XML DECLARATION** コマンドを使用して、*elementRef*により設定されるXMLツリーの作成に利用されるさまざまなオプションを設定できます。<!-- END REF-->これらのオプションはツリーのエンコーディングやスタンドアロンプロパティに関連します:

* *encoding*: ドキュメント中で使用されるエンコーディングを指定します。デフォルトで (コマンドが呼び出されないと) UTF-8文字セットが使用されます。  
**注:** 4D XMLコマンドによってサポートされていないエンコーディングを渡した場合、UTF-8が使用されます。サポートされている文字コードの一覧については*文字セット* を参照して下さい(ただし、多くの場合においてUTF-8が推奨されます)。
* *standalone*: ツリーがスタンドアロン ([True](true.md "True")) か、それが他のファイルや外部リソースを処理のために必要とするか ([False](false.md "False")) を指定します。デフォルトで (コマンドが呼び出されないか引数が省略されると) 、ツリーはスタンドアロンではありません。
**互換性に関するメモ:** *indentation*引数は以前のバージョンの4Dとの互換性のために保持されていますが、その利用はv12では推奨されません。今後ドキュメントのインデントを指定するには、[XML SET OPTIONS](xml-set-options.md) コマンドの利用を強く推奨します。

#### 例題 

以下の例題はelementRef要素で使用するエンコーディングとスタンドアロンオプションを設定します: 

```4d
 DOM SET XML DECLARATION(elementRef;"UTF-16";True)
```

#### 参照 

[DOM Create XML Ref](dom-create-xml-ref.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 859 |
| スレッドセーフである | &check; |


