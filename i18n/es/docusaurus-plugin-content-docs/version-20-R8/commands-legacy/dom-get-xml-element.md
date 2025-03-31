---
id: dom-get-xml-element
title: DOM Get XML element
slug: /commands/dom-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML element.Syntax-->**DOM Get XML element** ( *elementRef* ; *nomElement* ; *indice* ; *valorElement* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML element.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| nomElement | Text | &#8594;  | Nombre del elemento a leer |
| indice | Integer | &#8594;  | Número de índice del elemento a leer |
| valorElement | Variable | &#8592; | Valor del elemento |
| Resultado | Text | &#8592; | Referencia del elemento XML (16 caracteres) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Get XML element.Summary-->El comando DOM Get XML element devuelve una referencia XML al elemento “hijo” dependiente de los parámetros *nomElement* e *index*.<!-- END REF--> 

El valor del elemento también se devuelve en el parámetro *valorElement*.

**Nota:** por defecto, **DOM Get XML element** es sensible a las mayúsculas y minúsculas en relación con el parámetro *nomElement* (de acuerdo a los estándares xml). Puede controlar la sensibilidad de mayúsculas y minúsculas del comando utilizando el selector XML DOM case sensitivity del comando [XML SET OPTIONS](xml-set-options.md). 

#### Variables y conjuntos del sistema 

Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

#### Ver también 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 725 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


