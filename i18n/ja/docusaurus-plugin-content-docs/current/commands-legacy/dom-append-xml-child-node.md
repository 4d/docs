---
id: dom-append-xml-child-node
title: DOM Append XML child node
slug: /commands/dom-append-xml-child-node
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML child node.Syntax-->**DOM Append XML child node** ( *elementRef* ; *childType* ; *childValue* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML child node.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| childType | Integer | &#8594;  | 追加する子のタイプ |
| childValue | Text, Blob | &#8594;  | 子ノードとして挿入するテキストまたは (テキストあるいはBlob) 変数 |
| 戻り値 | Text | &#8592; | 子XML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Append XML child node.Summary-->DOM Append XML child node コマンドを使用して、*elementRef*で指定したXMLノードに*childValue*の値を追加できます。<!-- END REF-->

作成されるノードのタイプを*childType*で指定します。この引数には""テーマの以下の定数を渡すことができます:

  
| 定数                         | 型    | 値  |
| -------------------------- | ---- | -- |
| XML CDATA                  | 倍長整数 | 7  |
| XML comment                | 倍長整数 | 2  |
| XML DATA                   | 倍長整数 | 6  |
| XML DOCTYPE                | 倍長整数 | 10 |
| XML ELEMENT                | 倍長整数 | 11 |
| XML processing instruction | 倍長整数 | 3  |

*childValue*には挿入するデータを渡します。文字列または4D変数 (文字またはBLOB) を渡します。この引数の内容は常にテキストに変換されます。

**Note:** *elementRef* がドキュメントノード (トップレベルノード) を指す場合、コマンドは他のノードの前に"Doctype"ノードを挿入します。同じことが処理命令やコメントにも言えます。これらは常にルートノードの前 (かつDoctypeノードの後) に挿入されます。

#### 例題 1 

テキストタイプのノードを追加します:

```4d
 Reference:=DOM Create XML element(elementRef;"myElement")
 DOM SET XML ELEMENT VALUE(Reference;"Hello")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"New")
 temp:=DOM Create XML element(Reference;"br")
 temp:=DOM Append XML child node(Reference;XML DATA;"York")
```

結果:  

```XML
<myElement>Hello<br/>New<br/>York</myElement>
```

#### 例題 2 

処理命令タイプのノードを追加します:

```4d
 $Txt_instruction:="xml-stylesheet type = \"text/xsl\" href=\"style.xsl\""
 Reference:=DOM Append XML child node(elementRef;XML Processing Instruction;$Txt_instruction)
```

結果 (最初の要素の前に挿入される):  

```XML
<?xml-stylesheet type="text/xsl"  href="style.xsl"?>
```

#### 例題 3 

コメントタイプのノードを追加する:

```4d
 Reference:=DOM Append XML child node(elementRef;XML Comment;"Hello world")
```

結果:  

```XML
<!--Hello  world-->
```

#### 例題 4 

CDATAタイプのノードを追加する:

```4d
 Reference:=DOM Append XML child node(elementRef;XML CDATA;"12 < 18")
```

結果:  

```XML
<element><![CDATA[12  < 18]]></element>
```

#### 例題 5 

Doctype 線減退のノードを追加あるいは置き換える:

```4d
 Reference:=DOM Append XML child node(elementRef;XML DOCTYPE;"Books SYSTEM \"Book.DTD\"")
```

結果 (最初の要素の前に挿入される):  

```XML
<!DOCTYPE  Books SYSTEM  "Book.DTD">
```

#### 例題 6 

要素タイプのノードを追加あるいは置き換える。

* *childValue* 引数がXMLフラグメントの場合、子ノードとして挿入されます:  
```4d  
 Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"simoneva")  
```  
    
結果:  
```XML  
<parent>  
     <child>simon</child>  
    <child>eva</child>  
</parent>  
```
* それ以外の場合、新しい空の子要素が追加されます:  
```4d  
 Reference:=DOM Append XML child node(elementRef;XML ELEMENT;"break")  
```  
    
Result:  
```XML  
<parent>  
     <break/>  
 </parent>  
```

*childValue* の内容が有効でない場合、エラーが返されます。

#### 参照 

[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  
[DOM Get XML document ref](dom-get-xml-document-ref.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1080 |
| スレッドセーフである | &check; |


