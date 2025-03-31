---
id: wp-insert-document
title: WP INSERT DOCUMENT
slug: /WritePro/commands/wp-insert-document
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT DOCUMENT.Syntax-->**WP INSERT DOCUMENT** ( *objRango* ; *docWP* ; *modo* {; *actRango*} )<!-- END REF-->
<!--REF #_command_.WP INSERT DOCUMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| modo | Integer | &#8594;  | Modo de inserción |
| actRango | Integer | &#8594;  | Modo de actualización del rango |

<!-- END REF-->

## Descripción 

<!--REF #_command_.WP INSERT DOCUMENT.Summary-->El comando **WP INSERT DOCUMENT** inserta el documento *docWP* en el rango *objRango* de acuerdo a los parámetros *modo* de inserción y *actRango*.<!-- END REF-->

En *objRango*, pase:

* un rango, o
* un elemento (tabla / línea / párrafo / cuerpo / encabezado / pie / imagen en línea / sección / subsección / caja de texto), o
* un documento 4D Write Pro.

El documento insertado *docWP* puede ser cualquier documento 4D Write Pro creado con el comando [WP New](wp-new.md) o [WP Import document](wp-import-document.md). Sólo se insertan los elementos hijo del cuerpo (por ejemplo, encabezados, pies, cajas de texto e imágenes ancladas no se insertan). Secciones y marcadores en el rango de destino se conservan. Además, los elementos se copian, por lo que *docWP* se pueden volver a utilizar varias veces.

En el parámetro *modo*, pase una o una combinación de las siguientes constantes del tema *Constantes 4D Write Pro* para indicar el modo de inserción a ser utilizado para el documento en el rango *objRango* del documento de destino:

| Constante  | Tipo         | Valor | Comentario                                 |
| ---------- | ------------ | ----- | ------------------------------------------ |
| wk append  | Entero largo | 2     | Inserta contenidos al final del rango      |
| wk prepend | Entero largo | 1     | Insertar contenidos al principio del rango |
| wk replace | Entero largo | 0     | Remplazar el contenido de la página        |

Puede combinar una de las constantes anteriores con las siguientes opciones de inserción:

| Constante                | Tipo         | Valor | Comentario                                    |
| ------------------------ | ------------ | ----- | --------------------------------------------- |
| wk freeze expressions    | Entero largo | 64    | Congelar las expresiones durante la inserción |
| wk keep paragraph styles | Entero largo | 128   | Conservar los estilos del párrafo de destino  |

* Si *objRango* es un rango, puede utilizar el parámetro opcional *actRango*, para pasar una de las siguientes constantes para especificar si los contenidos insertados están incluidos en el rango resultante:  
    
| Constante             | Tipo         | Valor | Comentario                                                            |  
| --------------------- | ------------ | ----- | --------------------------------------------------------------------- |  
| wk exclude from range | Entero largo | 1     | Contenidos insertados no incluidos en el rango actualizado            |  
| wk include in range   | Entero largo | 0     | Contenido insertado incluido en el rango actualizado (predeterminado) |  
    
Si no pasa un parámetro *actRango*, por defecto los contenidos insertados se incluyen en el rango resultante.
* Si *objRango* no es un rango, *actRango* se ignora.

## Ejemplo 1 

Usted desea remplazar los contenidos de un documento por el texto seleccionado de otro documento:

```4d
 $tempRange:=WP Get selection(WPTemplate) //recuperamos la selección de usuario en el documento WPTemplate
 $doctoCopy:=WP New($tempRange) //creamos un nuevo documento basado en WPTemplate
 WP INSERT DOCUMENT(WPDoc;$doctoCopy;wk replace) //remplazamos el contenido de WPDoc por el contenido del nuevo documento
```

## Ejemplo 2 

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

## Ver también 

  
[WP INSERT BREAK](wp-insert-break.md)  
[WP INSERT PICTURE](wp-insert-picture.md)  
[WP New](wp-new.md)  