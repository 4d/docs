---
id: sax-get-xml-processing-instruction
title: SAX GET XML PROCESSING INSTRUCTION
slug: /commands/sax-get-xml-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Syntax-->**SAX GET XML PROCESSING INSTRUCTION** ( *document* ; *name* ; *value* )<!-- END REF-->
<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| name | Text | &#8592; | 命令名 |
| value | Text | &#8592; | 命令値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Summary-->SAX GET XML PROCESSING INSTRUCTION コマンドは、*document* 引数で参照されるXMLドキュメント中で処理されるXML命令の名前と値を*name*と*value*に返します。<!-- END REF-->このコマンドはXML Processing Instructionイベントで呼び出されなければなりません。SAXイベントに関する詳細は[SAX Get XML node](sax-get-xml-node.md "SAX Get XML node") コマンドの説明を参照してください。

#### 例題 

以下のXMLコードがあります:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)-->
<?PI TextProcess?>
<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">
```

以下のコードを実行する*vName*に"PI"が、*vValue*に"TextProcess"が返されます: 

```4d
 SAX GET XML PROCESSING INSTRUCTION($DocRef;vName;vValue)
```

#### 参照 

[SAX ADD PROCESSING INSTRUCTION](sax-add-processing-instruction.md)  
[SAX Get XML node](sax-get-xml-node.md)  