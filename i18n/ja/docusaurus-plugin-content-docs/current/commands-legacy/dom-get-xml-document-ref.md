---
id: dom-get-xml-document-ref
title: DOM Get XML document ref
slug: /commands/dom-get-xml-document-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML document ref.Syntax-->**DOM Get XML document ref** ( *elementRef* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML document ref.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | DOMツリー中の既存の要素の参照 |
| 戻り値 | Text | &#8592; | DOMツリーの最初の要素の参照 (ドキュメントノード) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Get XML document ref.Summary-->DOM Get XML document ref コマンドを使用して*elementRef*に渡したDOMツリーの"ドキュメント"参照を取得できます。<!-- END REF-->ドキュメント要素はDOMツリーの最初の要素であり、ルート要素の親です。

ドキュメント要素の参照を使用して"Doctype"や"処理命令"ノードを処理できます。これは[DOM Append XML child node](dom-append-xml-child-node.md "DOM Append XML child node")と[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md "DOM GET XML CHILD NODES")コマンドでのみ利用できます。

このレベルでは、処理命令やコメントを追加したり、Doctypeノードを置換したりすることだけが可能です。ここにCDATAやテキストノードを作成することはできません。

#### 例題 

この例題では、XMLドキュメントのDTD宣言を取得します:

```4d
 var $rootRef : Text
 $rootRef:=DOM Parse XML source("")
 If(OK=1)
    var $documentRef : Text
  // ドキュメントノードを探します。このノードにはルートノード
  // の前にDOCTYPEが記述されています。
    $documentRef:=DOM Get XML document ref($rootRef)
    ARRAY TEXT($typeArr;0)
    ARRAY TEXT($valueArr;0)
  // このノードの子ノード中でDOCTYPEタイプのノードを探す
    DOM GET XML CHILD NODES($refDocument;$typeArr;$valueArr)
    var $text : Text
    $text:=""
    $pos:=Find in array($typeArr;XML DOCTYPE)
    If($pos>-1)
  // DTD宣言を$textに取得
       $text:=$text+"Doctype: "+$valueArr{$pos}+Char(Carriage return)
    End if
    DOM CLOSE XML($rootRef)
 End if
```

#### 参照 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1088 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


