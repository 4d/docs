---
id: dom-insert-xml-element
title: DOM Insert XML element
slug: /commands/dom-insert-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Insert XML element.Syntax-->**DOM Insert XML element** ( *refElementTarget* ; *refElementFuente* ; *indiceHijo* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Insert XML element.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refElementTarget | Text | &#8594;  | Referencia del elemento XML padre |
| refElementFuente | Text | &#8594;  | Referencia del elemento XML a insertar |
| indiceHijo | Integer | &#8594;  | Índice del hijo del elemento objetivo antes del cual se debe insertar el nuevo elemento |
| Resultado | Text | &#8592; | Referencia del nuevo elemento XML |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Insert XML element.Summary-->El comando DOM Insert XML element se utiliza para insertar un nuevo elemento XML entre los hijos del elemento XML cuya referencia se pasa en el parámetro *refElementTarget*.<!-- END REF-->   
  
Pase el elemento a insertar en *refElementFuente*. Este elemento se debe pasar como la referencia de un elemento XML existente en un árbol DOM.   
  
El parámetro *indiceHijo* se puede utilizar para designar al hijo del elemento padre antes del cual se debe insertar el nuevo elemento. Pase un número de índice en este parámetro. Si el valor no es válido (por ejemplo, no hay ningún elemento hijo de este índice), el nuevo elemento se agrega antes del primer hijo del elemento padre.   
  
El comando devuelve la referencia del elemento XML obtenido.

#### Ejemplo 

En la siguiente estructura, queremos invertir el primer y segundo libro:

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

Para hacerlo, simplemente ejecutamos el siguiente código:

```4d
 var $rootRef : Text
 
$rootRef:=DOM Parse XML source("") //selección de documento XML
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

#### Ver también 

[DOM Append XML element](dom-append-xml-element.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1083 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


