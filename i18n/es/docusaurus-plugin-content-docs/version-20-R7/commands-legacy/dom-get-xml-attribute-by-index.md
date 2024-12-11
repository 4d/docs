---
id: dom-get-xml-attribute-by-index
title: DOM GET XML ATTRIBUTE BY INDEX
slug: /commands/dom-get-xml-attribute-by-index
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax-->**DOM GET XML ATTRIBUTE BY INDEX** ( *elementRef* ; *indexAtrib* ; *nomAtrib* ; *valorAtrib* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| indexAtrib | Integer | &#8594;  | Número de índice del atributo |
| nomAtrib | Variable | &#8592; | Nombre del atributo |
| valorAtrib | Variable | &#8592; | Valor del atributo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Summary-->El comando **DOM GET XML ATTRIBUTE BY INDEX** permite conocer el nombre así como el valor de un atributo especificado por su número de índice.<!-- END REF-->

Pase en *refElement* la referencia de un elemento XML y en *indexAtrib* el número de índice del atributo que quiere conocer el nombre. El nombre se devuelve en el parámetro *nomAtrib* y su valor se devuelve en el parámetro *valorAtrib*. 4D intentará convertir el valor obtenido en el tipo de variable pasada como parámetro.

**Nota:** el número de índice no corresponde a la ubicación del atributo en el archivo XML mostrado en forma de texto. En XML, el índice de un atributo indica su posición entre los atributos clasificados por orden alfabético (en función de su nombre). Para ver una ilustración de este principio, consulte el ejemplo del comando [DOM Count XML attributes](dom-count-xml-attributes.md).

Si el valor pasado en *indexAtrib* es superior al número de atributos presentes en el elemento XML, se devuelve un error.

#### Ejemplo 

Consulte el ejemplo del comando [DOM Count XML attributes](dom-count-xml-attributes.md "DOM Count XML attributes"). 

#### Variables y conjuntos del sistema 

Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1\. Si ocurre un error, toma el valor 0.

#### Ver también 

[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 729 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Prohibido en el servidor ||


