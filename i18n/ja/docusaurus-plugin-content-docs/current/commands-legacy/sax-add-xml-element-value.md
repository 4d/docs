---
id: sax-add-xml-element-value
title: SAX ADD XML ELEMENT VALUE
slug: /commands/sax-add-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Syntax-->**SAX ADD XML ELEMENT VALUE** ( *document* ; *data* {; *} )<!-- END REF-->
<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| data | Text, Variable | &#8594;  | ドキュメントに挿入するテキストまたは変数 |
| * | 演算子 | &#8594;  | 指定時: 特別文字をエンコード 省略時: エンコードしない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Summary-->**SAX ADD XML ELEMENT VALUE** コマンドは、*document* で参照されるXMLドキュメントに*data* を変換せずに直接追加します。<!-- END REF-->このコマンドは例えば電子メールのボディに添付ファイルを挿入するのと同等です。

*data* には、直接文字列を、または4D変数を渡せます。変数の内容はXMLドキュメントに挿入される前にテキストに変換されます。*data* が*undefined* に評価されてしまった場合、4D は空の文字列を使用します。  
*data* の内容をエンコードしたい場合[BASE64 ENCODE](base64-encode.md) コマンドを使用しなければなりません。この場合もちろんBLOB を*data* に渡します。

[XML SET OPTIONS](xml-set-options.md)コマンドのXML String encoding オプションにをXML Raw data 渡すことでカレントプロセスにおいてこのメカニズムを無効にしない限り、デフォルトでコマンドは*data* 引数に含まれる特別文字 (< > ” ’...) をエンコードします。例:  

```4d
 XML SET OPTIONS($docRef;XML string encoding;XML raw data)
```

  
この設定を行ったあと、**SAX ADD XML ELEMENT VALUE** を呼び出したとき文字のエンコーディングを強制したい場合、オプションの*\**引数を渡します。 

このコマンドが正しく実行するには、要素が開かれていなければなりません。そうでなければエラーが生成されます。

#### 例題 

この例題は開かれたXML要素に*whitepaper.pdf*ファイルを挿入します:

```4d
 var vBMyBLOB : Blob
 DOCUMENT TO BLOB("c:\\whitepaper.pdf";vBMyBLOB)
 SAX ADD XML ELEMENT VALUE($DocRef;vBMyBLOB)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX GET XML ELEMENT VALUE](sax-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 855 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


