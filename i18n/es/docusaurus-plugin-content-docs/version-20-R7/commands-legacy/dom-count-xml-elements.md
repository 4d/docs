---
id: dom-count-xml-elements
title: DOM Count XML elements
slug: /commands/dom-count-xml-elements
displayed_sidebar: docs
---

<!--REF #_command_.DOM Count XML elements.Syntax-->**DOM Count XML elements** ( *elementRef* ; *nomElement* ) : Integer<!-- END REF-->
<!--REF #_command_.DOM Count XML elements.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| nomElement | Text | &#8594;  | Nombre de los elementos XML a contar |
| Resultado | Integer | &#8592; | Número de elementos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Count XML elements.Summary-->El comando DOM Count XML elements devuelve el número de elementos “hijo” dependientes del elemento padre *refElement* y llamado *nomElement*.<!-- END REF-->por defecto, **DOM Count XML elements** es sensible a las mayúsculas y minúsculas con respecto el parámetro *nomElement* (de acuerdo a los estándares XML). Puede controlar la sensibilidad de mayúsculas y minúsculas del comando utilizando el selector XML DOM case sensitivity del comando [XML SET OPTIONS](xml-set-options.md). 

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

#### Ver también 

[DOM Get XML element](dom-get-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 726 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


