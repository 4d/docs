---
id: dom-find-xml-element-by-id
title: DOM Find XML element by ID
slug: /commands/dom-find-xml-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element by ID.Syntax-->**DOM Find XML element by ID** ( *elementRef* ; *id* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element by ID.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| id | Text | &#8594;  | Valor del atributo ID del elemento a buscar |
| Resultado | Text | &#8592; | Referencia del elemento encontrado (si aplica) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Find XML element by ID.Summary-->El comando DOM Find XML element by ID busca, al interior de un documento XML, el elemento cuyo atributo id sea igual al valor pasado en el parámetro *id*.<!-- END REF-->  
  
Pase en *refElemento* la referencia de un elemento del documento XML en el cual quiere realizar la búsqueda. Puede pasar la referencia del elemento raíz o de otro elemento, la búsqueda no tiene en cuenta la posición de *refElemento* y se efectúa siempre en la totalidad del documento.

El comando devuelve en resultado la referencia XML del elemento encontrado.  
  
**Advertencia**: en XML, el atributo id asocia un identificador único a cada elemento del documento. El valor del atributo id debe ser un nombre XML válido y debe ser único en el documento XML (restricción de validez). Para que el comando DOM Find XML element by ID funcione correctamente, esta restricción debe respetarse; de lo contrario el resultado es aleatorio (el comando devuelve la referencia al primer elemento encontrado en el documento).  

#### Ver también 

[DOM Find XML element](dom-find-xml-element.md)  