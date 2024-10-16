---
id: dom-export-to-var
title: DOM EXPORT TO VAR
slug: /commands/dom-export-to-var
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO VAR.Syntax-->**DOM EXPORT TO VAR** ( *elementRef* ; *vXmlVar* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO VAR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML raíz |
| vXmlVar | Text, Blob | &#8592; | Variable a recibir el árbol XML |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM EXPORT TO VAR.Summary-->El comando DOM EXPORT TO VAR  permite guardar un árbol XML en una variable texto o BLOB.<!-- END REF-->

Pase en **elementRef* la referencia del elemento raíz a exportar. 

Pase en *vXmlVar* el nombre de la variable que debe contener el árbol XML. Esta variable puede ser de tipo Texto o BLOB. Puede seleccionar el tipo en función de las operaciones a efectuar o del tamaño que el árbol pueda alcanzar (recuerde que en modo Unicode, las variables de tipo Texto están limitadas a 32 K de texto, mientras en modo Unicode, este límite es de 2 GB). 

Recuerde que si utiliza una variable de tipo texto para almacenar el elemento *refElement*, en modo no Unicode, será codificado utilizando el conjunto de caracteres Mac “actual” (es decir, Mac Roman en la mayoría de los sistemas occidentales). Esto significa que el texto devuelto perderá su codificación original (encoding="xxx"). En este caso, la variables *vVarXml* permite visualizar o almacenar el código obtenido pero NO generar un documento XML válido (utilizando el comando [SEND PACKET](send-packet.md "SEND PACKET") por ejemplo). 

En modo Unicode, el código original se conserva en la variable.

##### Gestión de los caracteres de fin de línea y de BOM 

En XML, los saltos de línea no son significativos, independientemente de si se encuentran dentro o entre los elementos XML. Internamente, XML utiliza caracteres estándar LF como separadores de líneas. Durante las operaciones de importación y exportación, los caracteres de salto de línea se pueden convertir. Durante una importación, el analizador XML reemplaza los caracteres CRLF (rupturas de línea estándar en Windows) por caracteres de LF. Durante la exportación, los caracteres LF se sustituyen por caracteres CRLF en Windows (sin remplazar en macOS).

**Nota:** si desea mantener los retornos de carro, debe incluir en un elemento XML CDATA de manera que no sea procesado por el analizador XML. En lugar de caracteres CRLF, también puede utilizar el carácter "<br/>", que es un retorno de carro explícito que no será procesado por el analizador.

Por defecto, los archivos XML se escriben sin BOM (Byte order mask).

Puede controlar el final de línea XML y la gestión BOM utilizando el comando [XML SET OPTIONS](xml-set-options.md).

**Nota de compatibilidad:** en bases/proyectos creados con versiones de 4D hasta la v19.x, por defecto 4D utiliza CR como caracteres de fin de línea en macOS y un BOM. Para activar la nueva configuración por defecto, compruebe los ajustes de compatibilidad (ver *Página Compatibilidad*) o utilice el comando [XML SET OPTIONS](xml-set-options.md).

#### Ejemplo 

Este ejemplo guarda el árbol vRefElem en una variable texto: 

```4d
 var vtMiTexto : Text
 DOM EXPORT TO VAR(vRefElem;vtMiTexto)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecutó correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se genera un error (por ejemplo, si la referencia del elemento no es válida).

#### Ver también 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  