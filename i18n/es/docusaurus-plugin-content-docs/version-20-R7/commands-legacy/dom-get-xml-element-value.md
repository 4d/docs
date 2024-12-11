---
id: dom-get-xml-element-value
title: DOM GET XML ELEMENT VALUE
slug: /commands/dom-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Syntax-->**DOM GET XML ELEMENT VALUE** ( *elementRef* ; *valorElement* {; *cDATA*} )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT VALUE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| valorElement | Variable | &#8592; | Valor del elemento |
| cDATA | Variable | &#8592; | Contenido de la sección CDATA |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Summary-->El comando **DOM GET XML ELEMENT VALUE** devuelve en el parámetro *valorElement*, el valor del elemento XML designado por *refElement*.<!-- END REF--> 4D intentará convertir el valor obtenido en el tipo de variable pasada como parámetro. Si el tipo de variable no está definido, el valor es devuelto en el tipo texto por defecto. 

El parámetro opcional *cDATA* se utiliza para recuperar los contenidos de las secciones CDATA del elemento XML *refElement*. Como con el parámetro *valorElement*, 4D intentará convertir el valor obtenido en el tipo de la variable pasada como parámetro, y si el tipo de variable no está definido, el tipo texto se utiliza por defecto. 

**Nota:** si el elemento designado por *refElement* es un BLOB procesado por el comando [DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md), ha sido codificado automáticamente en base64\. Por lo tanto, el comando intentará automáticamente de decodificar en base 64.

#### Ejemplo 

Este método devuelve el valor del elemento $xml\_Element\_Ref:

```4d
 var $xml_Element_Ref : Text
 var $valor : Real
 
 DOM GET XML ELEMENT VALUE($xml_Element_Ref;$valor)
```

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

#### Ver también 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  
[DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 731 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


