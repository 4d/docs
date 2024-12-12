---
id: dom-parse-xml-variable
title: DOM Parse XML variable
slug: /commands/dom-parse-xml-variable
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML variable.Syntax-->**DOM Parse XML variable** ( *variable* {; *validation* {; dtd | schema}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML variable.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| variable | Blob, Text | &#8594;  | 変数名 |
| validation | Boolean | &#8594;  | True = DTDによる検証を行う False = 検証なし |
| dtd &#124; schema | 文字 | &#8594;  | DTDまたはXMLスキーマの場所 |
| 戻り値 | Text | &#8592; | XML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Parse XML variable.Summary-->**DOM Parse XML variable**コマンドはXML構造を格納するBLOBまたはテキスト型変数を解析し、XML構造への参照を返します。<!-- END REF-->コマンドはDTDやXMLスキーマ (XML Schema Definition (XSD) ドキュメント) を使用してドキュメントの検証を行うこともできます。

*variable* 引数にはXMLオブジェクトを含むBLOBまたはテキスト変数の名前を渡します。 

ブール引数 *validation* はDTDを使用して構造の検証を行うか行わないかを指定します。

* *validation* がTrueの場合、ストラクチャは検証されます。この場合、パーサはドキュメント中で定義または参照されるDTDもしくはXSD、または三番目の引数が渡された場合はこの引数で指定されたDTDもしくはXSDに基づき、XML構造を検証します。
* *validation* がFalseの場合、ストラクチャは検証されません。

*validation*にTrueを渡し、三番目の引数を省略すると、コマンドはXMLストラクチャ中に含まれるDTDまたはXSD参照を使用して、XMLストラクチャを検証しようとします。間接検証も可能です。XMLストラクチャにDTDへの参照が含まれていて、さらにそこにXSDファイルへの参照が含まれる場合、コマンドは両方の検証を試みます。  

3番目の引数はドキュメントの解析に使用するDTDやXMLスキーマを指定するために使用します。この引数を使用すると、コマンドはXML変数内で参照されるDTDを考慮に入れません。

**DTDによる検証**

DTDを指定する方法は2つあります:

* 参照として: この方法を使用するには、*dtd* 引数に".dtd"拡張子を持つDTDの完全パス名を渡します。指定したドキュメントに有効なDTDが含まれていない場合、*dtd* 引数は無視されエラーが生成されます。
* テキストに直接: この場合、引数の内容が“<?xml”で始まっていれば、4DはそれをDTDとして扱います。そうでなければ4Dはそれをパス名として扱います。
**スキーマによる検証**  
  
ドキュメントをXMLスキーマで検証するには、三番目の引数に"dtd"の代わりに、"xsd"拡張子を持つファイルまたはURLへのパスを渡します。XMLスキーマによる検証はDTDのそれに比べより自由度がありパワフルであるといわれています。XSDドキュメントのランゲージはXMLに基づきます。特に、XMLスキーマはデータタイプをサポートします。XMLスキーマに関する詳細は、以下のWebサイトを参照してください: <http://www.w3.org/XML/Schema>  

DTDやXSDが存在しなかったり、URLが正しくない場合など検証が行えない場合、エラーが生成されます。Errorシステム変数はエラー番号を示します。[ON ERR CALL](on-err-call.md)コマンドを使用してインストールされるエラー処理メソッドを使用して、このエラーをとらえることができます。

このコマンドは、メモリ中に展開されたドキュメントの仮想構造への参照を表す文字列 (ElementRef) を返します。この参照を他のXML解析コマンドで使用できます。

**重要**: 参照の利用が終了したら、[DOM CLOSE XML](dom-close-xml.md)コマンドを使用してこの参照が使用しているメモリを解放することを忘れないでください。

#### 例題 1 

検証なしで、4Dテキスト変数に格納されたXMLを開きます: 

```4d
 var myTextVar : Text
 var vDoc : Time
 var $xml_Struct_Ref : Text
 
 vDoc:=Open document("Document.xml")
 If(OK=1)
    RECEIVE PACKET(vDoc;myTextVar;32000)
    CLOSE DOCUMENT(vDoc)
    $xml_Struct_Ref:=DOM Parse XML variable(myTextVar)
 End if
```

#### 例題 2 

 検証なしで、4D BLOBに格納されたXMLを開きます:   

```4d
 var myBlobVar : Blob
 var $ref_XML_Struct : Text
 
 DOCUMENT TO BLOB(“c:\\import.xml”;myBlobVar)
 $xml_Struct_Ref:=DOM Parse XML variable(myBlobVar)
```

#### システム変数およびセット 

 コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML source](dom-parse-xml-source.md)  