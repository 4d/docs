---
id: dom-export-to-file
title: DOM EXPORT TO FILE
slug: /commands/dom-export-to-file
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO FILE.Syntax-->**DOM EXPORT TO FILE** ( *elementRef* ; *rutaArchivo* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML raíz |
| rutaArchivo | Text | &#8594;  | Ruta de acceso completa del archivo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM EXPORT TO FILE.Summary-->El comando DOM EXPORT TO FILE  permite guardar un árbol XML en un archivo en el disco.<!-- END REF-->

Pase en *elementRef* la referencia del elemento raíz a exportar. 

Pase en *rutaArchivo* la ruta de acceso completa del archivo de exportación a utilizar o a crear. Si el archivo no existe, se crea.  
  
Si pasa únicamente un nombre de archivo (sin ruta de acceso), se buscará el archivo o se creará junto al archivo de estructura.

Si pasa una cadena vacía (*""*), aparece una caja de diálogo estándar de apertura y creación de archivos.

##### Gestión de los caracteres de fin de línea y de BOM 

En XML, los saltos de línea no son significativos, independientemente de si se encuentran dentro o entre los elementos XML. Internamente, XML utiliza caracteres estándar LF como separadores de líneas. Durante las operaciones de importación y exportación, los caracteres de salto de línea se pueden convertir. Durante una importación, el analizador XML reemplaza los caracteres CRLF (rupturas de línea estándar en Windows) por caracteres de LF. Durante la exportación, los caracteres LF se sustituyen por caracteres CRLF en Windows (sin remplazar en macOS).

**Nota:** si desea mantener los retornos de carro, debe incluir en un elemento XML CDATA de manera que no sea procesado por el analizador XML. En lugar de caracteres CRLF, también puede utilizar el carácter "<br/>", que es un retorno de carro explícito que no será procesado por el analizador.

Por defecto, los archivos XML se escriben sin BOM (Byte order mask).

Puede controlar el final de línea XML y la gestión BOM utilizando el comando [XML SET OPTIONS](xml-set-options.md).

**Nota de compatibilidad:** en bases/proyectos creados con versiones de 4D hasta la v19.x, por defecto 4D utiliza CR como caracteres de fin de línea en macOS y un BOM. Para activar la nueva configuración por defecto, compruebe los ajustes de compatibilidad (ver *Página Compatibilidad*) o utilice el comando [XML SET OPTIONS](xml-set-options.md).

#### Ejemplo 

Este ejemplo guarda el árbol *vRefElem* en el archivo MiDoc.xml:

```4d
 DOM EXPORT TO FILE(vRefElem;"C:\\carpeta\MiDoc.xml")
```

#### Variables y conjuntos del sistema 

Si el comando se ejecutó correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se genera un error. 

#### Gestión de errores 

Se genera un error cuando:

* La referencia del elemento no es válida,
* La ruta de acceso especificada no es válida,
* El volumen de almacenamiento devuelve un error (disco lleno, etc.).

#### Ver también 

[DOM EXPORT TO VAR](dom-export-to-var.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 862 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


