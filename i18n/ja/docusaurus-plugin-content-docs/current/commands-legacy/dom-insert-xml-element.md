---
id: dom-insert-xml-element
title: DOM Insert XML element
slug: /commands/dom-insert-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Insert XML element.Syntax-->**DOM Insert XML element** ( *targetElementRef* ; *sourceElementRef* ; *childIndex* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Insert XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetElementRef | Text | &#8594;  | 親XML要素参照 |
| sourceElementRef | Text | &#8594;  | 挿入するXML要素参照 |
| childIndex | Integer | &#8594;  | 新しい要素を挿入するターゲットとなる子要素のインデックス |
| 戻り値 | Text | &#8592; | 新しいXML要素の参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Insert XML element.Summary-->DOM Insert XML element コマンドを使用して*targetElementRef*引数に渡された参照を持つXML要素の子要素の間に、新しいXML要素を挿入できます。<!-- END REF-->

*sourceElementRef*に挿入する要素を渡します。この要素は、DOMツリーの中の既存のXML要素の参照として渡さなければなりません。

*childIndex*引数は、新しい要素を挿入する、親要素の子要素を指定するために使用します。この引数にはインデックス番号を渡します。番号が有効でない場合 (例えばこのインデックス番号を持つ子要素が存在しない)、新しい要素は親要素の最初の子要素の前に挿入されます。 

コマンドは取得したXML要素の参照を返します。

#### 例題 

以下のXML構造で、1番目と2番目の本を入れ替えます:

```XML
<?xml version="1.0" encoding="UTF-8"  standalone="no" ?>
<BookCatalog>
  <Book>
           <Title>Open Source Web Services</Title>
           <Author>Collective</Author>
           <Date>2003</Date>
           <ISBN>2-7440-1507-5</ISBN>
           <Publisher>Wrox</Publisher>
    </Book>
<Book>
           <Title>Building XML Web services</Title>
           <Author>Scott Short</Author>
           <Date>2002</Date>
           <ISBN>2-10-006476-2</ISBN>
           <Publisher>Microsoft Press</Publisher>
    </Book>
</BookCatalog>  
```

これを行うには、以下のコードを実行します:

```4d
 var $rootRef : Text
 $rootRef:=DOM Parse XML source("") // XMLドキュメントを選択
 If(OK=1)
    var $newStruct : Text
    $newStruct:=DOM Create XML Ref("BookCatalog")
 
    $bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[1]")
    $newElementRef:=DOM Append XML element($newStruct;$bookRef)
 
    $bookRef:=DOM Find XML element($rootRef;"/BookCatalog/Book[2]")
    var $newElementRef : Text
    $newElementRef:=DOM Insert XML element($newStruct;$bookRef;1)
 
    DOM CLOSE XML($newStruct)
    DOM CLOSE XML($rootRef)
 End if
```

#### 参照 

[DOM Append XML element](dom-append-xml-element.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1083 |
| スレッドセーフである | &check; |


