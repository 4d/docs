---
id: dom-insert-xml-element
title: DOM Insert XML element
slug: /commands/dom-insert-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Insert XML element.Syntax-->**DOM Insert XML element** ( *tarfetElementRef* ; *sourceElementRef* ; *childIndex* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Insert XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tarfetElementRef | Text | &#8594;  | Elemento de referência do pai XML |
| sourceElementRef | Text | &#8594;  | XML element reference to insert |
| childIndex | Integer | &#8594;  | Index of child of target element above which the new element must be inserted |
| Resultado | Text | &#8592; | Reference of new XML element |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Insert XML element.Summary-->O comando DOM Insert XML element se utiliza para inserir um novo elemento XML entre os filhos do elemento XML cuja referência for passada no parâmetro refElementTarget.<!-- END REF-->  

Passe o elemento a inserir em refElementFonte. Este elemento deve ser passado como a referência de um elemento XML existente em uma árvore DOM.  
  
O parâmetro *indiceFilho* se pode utilizar para designar ao filho do elemento pai antes do qual se deve inserir o novo elemento. Passe um número de índice neste parâmetro. Se o valor não for válido (por exemplo, não há nenhum elemento filho deste índice), o novo elemento é agregado antes do primeiro filho do elemento pai.  
  
O comando retorna a referência do elemento XML obtido.

#### Exemplo 

Na estrutura abaixo, nós queremos inverter o primeiro e o segundo livro:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>

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

Para fazer isso, simplesmente execute o código abaixo:

```4d
 var $rootRef : Text
 
 $rootRef:=DOM Parse XML source("") //selection of XML document
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

#### Ver também 

[DOM Append XML element](dom-append-xml-element.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1083 |
| Thread-seguro | &check; |
| Proibido no servidor ||


