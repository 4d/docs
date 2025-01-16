---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *elementRef* )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML raíz |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM CLOSE XML.Summary-->El comando DOM CLOSE XML libera el espacio en memoria ocupado por el objeto XML designado por *refElement*.<!-- END REF--> 

Si *refElement* no es un objeto XML raíz, se genera un error. 

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

#### Ver también 

[DOM Parse XML source](dom-parse-xml-source.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 722 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


