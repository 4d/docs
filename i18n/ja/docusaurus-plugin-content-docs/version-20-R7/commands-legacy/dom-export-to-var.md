---
id: dom-export-to-var
title: DOM EXPORT TO VAR
slug: /commands/dom-export-to-var
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO VAR.Syntax-->**DOM EXPORT TO VAR** ( *elementRef* ; *vXmlVar* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO VAR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | ルートXML要素参照 |
| vXmlVar | Text, Blob | &#8592; | XMLツリーを受け取る変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM EXPORT TO VAR.Summary-->DOM EXPORT TO VAR コマンドはテキストまたはBLOB変数にXMLツリーを格納します。<!-- END REF-->

*elementRef*には書き出すXMLのルート要素参照を渡します。 

*vXmlVar*にはXMLツリーを受け取る変数を渡します。この変数はテキストまたはBLOBタイプでなければなりません。次に何を行うか、あるいはツリーのサイズに従ってタイプを決定できます(非Unicodeモードの場合、テキスト型の変数は32Kに制限されます。Unicodeモードの場合は2GBです) 。 

非Unicodeモードのとき、XMLツリーを格納するためにテキスト変数を使用すると、ツリーはカレントのMac文字セットを使用してエンコードされます (例えばほとんどのWesternシステムではMac Roman)。つまり返されるテキストは元のエンコーディング (encoding="xxx") を失います。この場合、*vVarXml* 変数はコードを見たり保存したりするために使用できますが、(例えば[SEND PACKET](send-packet.md "SEND PACKET") コマンドを使用して書き出した場合)、有効なXMLドキュメントとはなりません。 

Unicodeモードの場合、元のエンコーディングが変数内で保持されます。

##### 行末文字の処理に関する注記 

XMLにおいて、改行はそれがXML要素の内側あるいは間いずれにあるかにかかわらず、大きな意味を持ちません。内部的にXMLは標準のLF文字を行区切り文字として使用します。 

読み込みや書き出し処理の間、行区切り文字は変換されることがあります。読み込み時、XMLパーサーはCRLF文字 (Windowsの標準改行) をLF文字に置き換えます。書き出し時、LF文字はmacOSではCR文字に、WindowsではCRLF文字に置き換えられます。

改行を保持したい場合、その部分をXML CDATAセクションに含めます。そうすることによりXMLパーサーはその部分を解析対象としなくなります。CRLF文字の代わりに"<br/>"を使用することもできます。これは明示的な改行文字で、パーサーによる解析は行われません。

#### 例題 

この例題ではXMLツリー*vElemRef*を変数に格納します: 

```4d
 var vtMyText : Text
 DOM EXPORT TO VAR(vElemRef;vtMyText)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます (要素参照が無効な場合など)。

#### 参照 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  