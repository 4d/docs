---
id: dom-parse-xml-source
title: DOM Parse XML source
slug: /commands/dom-parse-xml-source
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML source.Syntax-->**DOM Parse XML source** ( *document* {; *validation* {; dtd | schema}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML source.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメントのパス名 |
| validation | Boolean | &#8594;  | True = 検証を行う False = 検証を行わない |
| dtd &#124; schema | 文字 | &#8594;  | DTDまたはXMLスキーマの場所 |
| 戻り値 | Text | &#8592; | XML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Parse XML source.Summary-->DOM Parse XML sourceコマンドはXML構造を含むドキュメントを解析し、XMLツリーへの参照を返します。<!-- END REF-->このコマンドはDTDやXMLスキーマ (XML Schema Definition (XSD) ドキュメント) を使用して、ドキュメントを検証したり、あるいはしないこともできます。  
ドキュメントはディスク上あるいはイントラネットやインターネット上に存在できます。

**備考:** DOM Parse XML sourceコマンドの実行は同期しています。

*document* 引数引数には以下を渡します:

* 標準の完全パス名 (WindowsでのC:\\\\Folder\\\\File\\\\...やMac OSでのMacintoshHD:Folder:File)、
* またはMsc OS上ではUnixパス名 (/で始まらなければなりません)、
* またはhttp://www.site.com/File や ftp://public.ftp.com...のようなネットワークパス。

ブール引数 *validation* には構造を検証するかどうかを指定します。

* *validation* がTrueの場合、構造は検証されます。この場合、パーサはドキュメントのXML構造を、ドキュメントに含まれるDTDまたはXSD参照、または３番目の引数で指定されたにDTDまたはXSD参照基づいて検証を試みます。
* *validation* がFalseの場合、構造は検証されません。
* *validation* にTrueを渡し、３番目の引数を省略する場合、コマンドは構造自身の中で見つけるDTDやXSD参照を使用して検証を行います。検証を間接的に行うこともできます。構造がDTDへの参照を含んでおり、それ自身にXSDファイルへの参照も含む場合、コマンドは両方の検証を試みます。

3番目の引数を使用して、ドキュメントの解析に使用する特定のDTDやXMLスキーマを指定できます。この引数を使用する場合、コマンドはXMLドキュメント内で参照されるDTDを考慮しません。 

**DTDによる検証**

DTDを指定する方法は2つあります:

* 参照として: この方法を使用するには、*dtd* 引数に".dtd"拡張子を持つDTDの完全パス名を渡します。指定したドキュメントに有効なDTDが含まれていない場合、*dtd* 引数は無視されエラーが生成されます。
* テキストに直接: この場合、引数の内容が“<?xml”で始まっていれば、4DはそれをDTDとして扱います。そうでなければ4Dはそれをパス名として扱います。

**スキーマによる検証**

XMLスキーマでドキュメントを検証するには、3番目の引数に.dtd拡張子の代わりに.xsd拡張子を持つファイルやURLのパスを渡します。XMLスキーマによる検証はDTDによるそれよりも自由度が高くパワフルです。XSDドキュメントのランゲージはXMLランゲージに基づいています。特にXMLスキーマはデータタイプをサポートします。XMLスキーマに関する情報は以下のアドレスを参照してください: *http://www.w3.org/XML/Schema*.

DTDやXSDが存在しなかったりURLが正しくない場合など検証が行えない場合、エラーが生成されます。Errorシステム変数はエラー番号を示します。[ON ERR CALL](on-err-call.md "ON ERR CALL") コマンドを使用してインストールされるエラー処理メソッドを使用して、このエラーをとらえることができます。

このコマンドは、メモリ中に展開されたドキュメントの仮想構造への参照を表す16-文字の文字列 (ElementRef) を返します。この参照を他のXML解析コマンドで使用できます。

**重要**: 参照の利用が終了したら、[DOM CLOSE XML](dom-close-xml.md "DOM CLOSE XML") コマンドを使用してこの参照が使用しているメモリを解放することを忘れないでください。

#### 例題 1 

 検証なしでディスク上のXMLドキュメントを開きます: 

```4d
 $xml_Struct_Ref:=DOM Parse XML source("C:\\import.xml")
```

#### 例題 2 

 検証なしで、データベースストラクチャと同階層にあるXMLドキュメントを開きます: 

```4d
 $xml_Struct_Ref:=DOM Parse XML source("import.xml")
```

#### 例題 3 

 ディスク上のDTDを使用した検証を行い、ディスク上のXMLドキュメントを開きます: 

```4d
 $xml_Struct_Ref:=DOM Parse XML source("C:\\import.xml";True;"C:\\import_dtd.xml")
```

#### 例題 4 

 検証なしで特定のURLに存在するXMLドキュメントを開きます: 

```4d
 $xml_Struct_Ref:=DOM Parse XML source("http://www.4D.com/xml/import.xml")
```

#### システム変数およびセット 

 コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 719 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


