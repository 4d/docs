---
id: dom-get-xml-document-ref
title: DOM Get XML document ref
slug: /commands/dom-get-xml-document-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML document ref.Syntax-->**DOM Get XML document ref** ( *arrayNomesAtrib* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML document ref.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayNomesAtrib | Text | &#8594;  | Referência dos elementos existentes em árvore DOM |
| Resultado | Text | &#8592; | Referência do primeiro elemento de uma árvore DOM (modo documento) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Get XML document ref.Summary-->O comando DOM Get XML document ref se utiliza para recuperar a referência do elemento "documento" da árvore DOM cuya referência se passa em *refElement*.<!-- END REF--> O elemento document é o primeiro elemento de uma árvore DOM; é o pai do elemento raiz.   

A referência do elemento document permite manipular os nodos "Doctype" e "Processing Instruction". Apenas pode ser utilizado com os comandos [DOM Append XML child node](dom-append-xml-child-node.md) e [DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  
A este nivel, pode unicamente adicionar as instruções e comentários ou substituir o nodo Doctype. Não pode criar nodos CDATA ou Text.

#### Exemplo 

Neste exemplo, queremos encontrar a declaração DTD do documento XML:

```4d
 var $rootRef : Text
 $rootRef:=DOM Parse XML source("")
 If(OK=1)
    var $documentRef : Text
  // estamos buscando o nodo document, já que é o nodo  ao qual
  // o nodo DOCTYPE está associado antes do nodo raiz
    $documentRef:=DOM Get XML document ref($rootRef)
    ARRAY TEXT($typeArr;0)
    ARRAY TEXT($valueArr;0)
  // neste nodo buscamos entre os filhos o nodo de tipo DOCTYPE
    DOM GET XML CHILD NODES($refDocument;$typeArr;$valueArr)
    var $text : Text
    $text:=""
    $pos:=Find in array($typeArr;XML DOCTYPE)
    If($pos>-1)
  // Recuperamos em $text a declaração de DTD
       $text:=$text+"Doctype: "+$valueArr{$pos}+Char(Carriage return)
    End if
    DOM CLOSE XML($rootRef)
 End if
```

#### Ver também 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1088 |
| Thread-seguro | &check; |


