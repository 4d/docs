---
id: wp-new
title: WP New
slug: /WritePro/commands/wp-new
displayed_sidebar: docs
---

<!--REF #_command_.WP New.Syntax-->**WP New** {( *fuente* {; *opcion*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.WP New.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuente | Text, Blob, Object | &#8594;  | Cadena: Fuente HTML,<br/>BLOB: documento 4D Write Pro (.4wp) o Blob documento 4D Write(.4w7/.4wt)<br/>Objeto: rango o elemento o documento 4D Write Pro |
| opcion | Integer | &#8594;  | Opción de importación para expresiones HTML |
| Resultado | Object | &#8592; | Objeto 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP New.Summary-->El comando **WP New** crea y devuelve un objeto 4D Write Pro.<!-- END REF--> El objeto devuelto es un documento completo que se puede pasar al comando [WP INSERT DOCUMENT](../commands/wp-insert-document.md), por ejemplo.

Por defecto, si se omite el parámetro *fuente*, el comando devuelve un objeto 4D Write Pro vacío.

Si se utiliza el parámetro *fuente*, el nuevo objeto 4D Write Pro se llenará con el contenido del la *fuente*. Puede pasar:

* un parámetro [cadena](# "A character string"): en este caso, pase una fuente HTML 4D, es decir, un texto exportado por [WP EXPORT VARIABLE](wp-export-variable.md) con la opción wk web page html 4D. Este texto puede contener referencias (etiquetas y expresiones 4D e imágenes anidadas).
* un parámetro [blob](# "A series of bytes (from 0 to 2 GB in length)"): en este caso, pase:  
   * un documento en formato 4D Write Pro (.4wp) almacenado en un BLOB.  
   Para mayor información sobre el formato del documento 4D Write Pro, consulte *Formato del documento .4wp*.  
   * una antigua área 4D Write cargada en un BLOB (los Blobs que contienen documentos .4w7 o .4wt son soportados). En este contexto, puede utilizar el parámetro *opcion* para incluir expresiones HTML como txt en el documento importado (consulte a continuación).  
   Para una lista detallada de las funcionalidades 4D Write que actualmente son soportadas en objetos 4D Write Pro, consulte la sección *Importar documentos 4D Write*.  
   Si desea importar un documento 4D Write (.4w7 o .4wt) almacenado en el disco, también puede considerar el uso del comando [WP Import document](../commands/wp-import-document.md).
* un parámetro [objeto](# "Datos estructurados como forma de objeto nativo 4D") que puede ser:  
   * un rango.  
   En este caso **WP New** devolverá un nuevo documento creado desde el rango especificado. Tenga en cuenta que, si el rango no es igual al rango del documento completo, sólo la primera sección se exporta y los marcadores no se exportan, si los hay.  
   * o un elemento (tabla / línea / párrafo / cuerpo / encabezado / pie / imagen en línea / caja de texto / sección / subsección / hoja de estilo).  
   En este caso **WP New** devolverá un nuevo documento que contiene el contenido de la referencia del elemento en la parte del cuerpo (para una fila, el nuevo documento contendrá un elemento de tabla con la fila).  
   * un documento 4D Write Pro.

De forma predeterminada, las expresiones HTML insertadas en documentos antiguos 4D Write no se importan (no es soportado por 4D Write Pro). Si pasa la constante wk import html expressions as texten el parámetro *opcion*, las expresiones HTML se importarán como texto sin procesar dentro de las etiquetas *##htmlBegin##* y *##htmlEnd##* tags -- lo que requerirá acciones de formateo posteriores. Por ejemplo

```RAW
##htmlBegin##Imported titlebold##htmlEnd##
```

**Nota de compatibilidad*: las hojas de estilo de caracteres en los documentos 4D Write* *heredados*   *utilizan un mecanismo patentado, que no es soportado por 4D Write Pro. Para obtener el mejor resultado para el texto importado, los atributos de la hoja de estilo se convierten en atributos de estilo "codificados". Las hojas de estilo de caracteres heredadas no se importan y ya no se hace referencia a ellas en el documento.* 

#### Ejemplo 1 

Desea crear un objeto 4D Write Pro vacío:

```4d
 myWPObject:=WP New
```

#### Ejemplo 2 

Desea crear un nuevo objeto 4D Write Pro utilizando un documento 4D Write Pro almacenado en el disco:

```4d
 var $BlobDoc : Blob
 var myWPArea : Object
 DOCUMENT TO BLOB("myDoc.4wp";$BlobDoc) //cargar el documento en un Blob
 myWPArea:=WP New($BlobDoc)
```

#### Ejemplo 3 

Desea crear un objeto 4D Write Pro que contiene una referencia de expresión 4D simple:

```4d
 var myText : Text
 myText:="Today is "
 ST INSERT EXPRESSION(myText;"string(current date;System date long)";ST End text)
 myWPA:=WP New(myText)
```

#### Ejemplo 4 

Usted desea inicializar su área 4D Write Pro con una plantilla creada previamente:

```4d
  //Exportar plantilla desde un área existente
 var wpTemplate : Text
 WP EXPORT VARIABLE(myWPArea;wpTemplate;wk web page html 4D)
 
  // Utilizar la plantilla para una nueva área
 var myNewWPA : Object
 myNewWPA:=WP New(wpTemplate)
```

#### Ejemplo 5 

Usted desea importar en una nueva área 4D Write Pro un documento del antiguo plug-in 4D Write almacenado en un campo BLOB del registro actual, y conservar las expresiones HTML:

```4d
 var wpArea : Object
 wpArea=WP New([Templates]Reference_;wk import html expressions as text)
```

#### Ejemplo 6 

Se ha definido un documento de plantilla con diferentes partes con formato previo, cada una de ellas se almacena como un marcador. Al producir un documento final de la plantilla, puede extraer cualquier marcador como un nuevo documento e insertarlo en el documento final.

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //obtener los marcadores de la plantilla
 $targetRange:=WP New //crear un documento vacio (será el documento final)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //manejar la parte principal del encabezado
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //seleccionar el rango
    $RangeDoc:=WP New($Range) //crear un nuevo documento del rango
    WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append=después de la sustitución, $targetRange es igual al final del texto reemplazado
 End if
```

#### Ver también 

[WP Import document](../commands/wp-import-document.md)  
[WP INSERT DOCUMENT](../commands/wp-insert-document.md)  