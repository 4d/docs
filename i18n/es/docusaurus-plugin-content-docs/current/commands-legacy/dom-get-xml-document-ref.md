---
id: dom-get-xml-document-ref
title: DOM Get XML document ref
slug: /commands/dom-get-xml-document-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML document ref.Syntax-->**DOM Get XML document ref** ( *refElement* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML document ref.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refElement | Text | &#8594;  | Referencia de un elemento existente en un árbol DOM |
| Resultado | Text | &#8592; | Referencia del primer elemento del árbol DOM (nodo document) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Get XML document ref.Summary-->El comando DOM Get XML document ref se utiliza para recuperar la referencia del elemento "documento" del árbol DOM cuya referencia se pasa en *refElement*.<!-- END REF--> El elemento document es el primer elemento de un árbol DOM; es el padre del elemento raíz. 

La referencia del elemento document permite manipular los nodos "Doctype" y "Processing Instruction". Sólo puede utilizarse con los comandos [DOM Append XML child node](dom-append-xml-child-node.md "DOM Append XML child node") y[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md "DOM GET XML CHILD NODES").

A este nivel, puede únicamente añadir las instrucciones y comentarios o reemplazar el nodo Doctype. No puede crear nodos CDATA o Text. 

#### Ejemplo 

En este ejemplo, queremos encontrar la declaración DTD del documento XML:

```4d
 var $rootRef : Text
 $rootRef:=DOM Parse XML source("")
 If(OK=1)
    var $documentRef : Text
  // estamos buscando el nodo document, ya que es el nodo al cual está
  // asociado el nodo DOCTYPE antes del nodo raíz
    $documentRef:=DOM Get XML document ref($rootRef)
    ARRAY TEXT($typeArr;0)
    ARRAY TEXT($valueArr;0)
  // en este nodo buscamos entre los hijos el nodo de tipo DOCTYPE
    DOM GET XML CHILD NODES($refDocument;$typeArr;$valueArr)
    var $text : Text
    $text:=""
    $pos:=Find in array($typeArr;XML DOCTYPE)
    If($pos>-1)
  // Recuperamos en $text la declaración de DTD
       $text:=$text+"Doctype: "+$valueArr{$pos}+Char(Carriage return)
    End if
    DOM CLOSE XML($rootRef)
 End if
```

#### Ver también 

[DOM Append XML child node](dom-append-xml-child-node.md)  
[DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)  