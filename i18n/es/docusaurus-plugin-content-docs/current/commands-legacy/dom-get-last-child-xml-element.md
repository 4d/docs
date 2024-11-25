---
id: dom-get-last-child-xml-element
title: DOM Get last child XML element
slug: /commands/dom-get-last-child-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get last child XML element.Syntax-->**DOM Get last child XML element** ( *elementRef* {; *nomElementHijo* {; *valorElementHijo*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get last child XML element.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| nomElementHijo | Text | &#8592; | Nombre del elemento hijo |
| valorElementHijo | Text | &#8592; | Valor del elemento hijo |
| Resultado | Text | &#8592; | Referencia del elemento XML |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Get last child XML element.Summary-->El comando DOM Get last child XML element devuelve una referencia XML al último “hijo” del elemento XML pasado como referencia en *refElement*.<!-- END REF--> Esta referencia puede utilizarse con otros comandos de análisis XML. 

Los parámetros opcionales *nomElementHijo* y *valorElementHijo*, si se pasan, reciben respectivamente el nombre y el valor del elemento “hijo”.

#### Ejemplo 

Recuperación de la referencia del último elemento XML del padre raíz. La estructura XML (C:\\\\importar.xml) se carga previamente en un BLOB: 

```4d
 var miVarBlob : Blob
 var $ref_XML_Padre;$ref_XML_Hijo : Text
 var $nombreHijo;$valorHijo : Text
 
 DOCUMENT TO BLOB("c:\\importar.xml";miVarBlob)
 $ref_XML_Padre:=DOM Parse XML variable(miVarBlob)
 $ref_XML_Hijo:=DOM Get last child XML element($ref_XML_Padre;$nombreHijo;$valorHijo)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecutó correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0.

#### Ver también 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  