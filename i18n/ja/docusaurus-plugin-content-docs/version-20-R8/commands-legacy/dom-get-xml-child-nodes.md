---
id: dom-get-xml-child-nodes
title: DOM GET XML CHILD NODES
slug: /commands/dom-get-xml-child-nodes
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML CHILD NODES.Syntax-->**DOM GET XML CHILD NODES** ( *elementRef* ; *childTypesArr* ; *nodeRefsArr* )<!-- END REF-->
<!--REF #_command_.DOM GET XML CHILD NODES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| childTypesArr | Integer array | &#8592; | 子ノードのタイプ |
| nodeRefsArr | Text array | &#8592; | 子ノードの参照または値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM GET XML CHILD NODES.Summary-->DOM GET XML CHILD NODES コマンドは*elementRef*で指定したXML要素のすべての子ノードのタイプと参照または値を返します。<!-- END REF-->

子ノードのタイプは*childTypesArr*配列に返されます。返された値は""テーマの以下の定数と比較できます:

| 定数                         | 型    | 値  |
| -------------------------- | ---- | -- |
| XML comment                | 倍長整数 | 2  |
| XML processing instruction | 倍長整数 | 3  |
| XML DATA                   | 倍長整数 | 6  |
| XML CDATA                  | 倍長整数 | 7  |
| XML DOCTYPE                | 倍長整数 | 10 |
| XML ELEMENT                | 倍長整数 | 11 |

詳細は[DOM Append XML child node](dom-append-xml-child-node.md "DOM Append XML child node") コマンドの説明を参照してください。

*nodeRefsArr* 配列には、(内容または指示命令に基づき) 要素の値または参照が返されます。 

#### 例題 

以下のXML構造があるとき:  

```XML
<myElement>Hello<br/>New<br/>York</myElement>
```

以下のコードを実行後:  

```4d
 elementRef:=DOM Find XML element($root;"myElement")
 DOM GET XML CHILD NODES(elementRef;$typeArr;$textArr)
```

$typeArrと$textArr配列には以下の値が含まれます:  

| $typeArr{1}=6  | $textArr{1} = "Hello"                         |
| -------------- | --------------------------------------------- |
| $typeArr{2}=11 | $textArr{2} = "AEF1233456878977" (<br/>の要素参照) |
| $typeArr{3}=6  | $textArr{3} = "New"                           |
| $typeArr{4}=11 | $textArr{4} = "AEF1237897734568" (<br/>の要素参照) |
| $typeArr{5}=6  | $textArr{5} = "York"                          |

#### 参照 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1081 |
| スレッドセーフである | &check; |


