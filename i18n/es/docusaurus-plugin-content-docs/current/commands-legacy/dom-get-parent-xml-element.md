---
id: dom-get-parent-xml-element
title: DOM Get parent XML element
slug: /commands/dom-get-parent-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get parent XML element.Syntax-->**DOM Get parent XML element** ( *elementRef* {; *nomElemPadre* {; *valorElemPadre*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get parent XML element.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| nomElemPadre | Text | &#8592; | Nombre del elemento XML padre |
| valorElemPadre | Text | &#8592; | Valor del elemento XML padre |
| Resultado | Text | &#8592; | Referencia del elemento XML padre |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Get parent XML element.Summary-->El comando DOM Get parent XML element devuelve una referencia XML al “padre” del elemento XML pasado como referencia en *refElement*.<!-- END REF--> Esta referencia puede ser utilizada con los otros comandos de análisis XML. 

Los parámetros opcionales *nomElemPadre* y *valorElemPadre*, cuando se pasan, reciben respectivamente el nombre y el valor del elemento padre. 

Si utiliza este comando en un nodo documento 

Cuando pasa un elemento raíz en *refElement*, el comando devuelve la referencia "#document". El nodo documento es el padre de un elemento raíz.   
Si utiliza este comando en un nodo documento, el comando devuelve una referencia nula ("0000000000000000") y la variable OK toma el valor 0\. 

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0.

#### Ver también 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  
[DOM Get last child XML element](dom-get-last-child-xml-element.md)  
[DOM Get Root XML element](dom-get-root-xml-element.md)  