---
id: wp-insert-picture
title: WP INSERT PICTURE
slug: /WritePro/commands/wp-insert-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT PICTURE.Syntax-->**WP INSERT PICTURE** ( *objRango* ; *imagen* ; *modo* {; *actRango*} )<!-- END REF-->
<!--REF #_command_.WP INSERT PICTURE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Objeto de rango |
| imagen | Picture | &#8594;  | Campo o variable imagen, o ruta del archivo de imagen en el disco |
| modo | Integer | &#8594;  | Modo de inserción |
| actRango | Integer | &#8594;  | Modo actualizar rango |

<!-- END REF-->

## Descripción 

<!--REF #_command_.WP INSERT PICTURE.Summary-->El comando **WP INSERT PICTURE** inserta una nueva ruptura de tipo *tipoRuptura* en el rango de selección *objRango* según el modo de inserción *modo* y el parámetro *ActRango*.<!-- END REF-->

En *objRango*, pase:

* un rango, o
* un elemento (tabla / fila / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o
* un documento 4D Write Pro

En *imagen*, puede pasar:

* un campo imagen o variable, o
* una ruta de archivo (cadena) a un archivo imagen almacenado en el disco, en la sintaxis del sistema.  
Si utiliza una cadena, puede pasar una ruta completa o una ruta relativa al archivo de estructura de la base. También puede pasar un nombre de archivo, en cuyo caso el archivo debe estar ubicado junto al archivo de estructura de la base de datos. Si pasa un nombre de archivo, debe indicar la extensión del archivo.

Se puede utilizar cualquier formato de imagen compatible con 4D (consulte la sección *Imágenes*). Puede obtener la lista de formatos de imagen disponibles con el comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Si la imagen encapsula varios formatos (códecs), 4D Write Pro solo conserva un formato para mostrar y otro para imprimir (si es diferente) en el documento; Los "mejores" formatos son seleccionados automáticamente.

En el parámetro *modo*, pase una constante para indicar el modo de inserción que se utilizará para la ruptura en el rango de selección *objRango*:

| Constante  | Tipo         | Valor | Comentario                                 |
| ---------- | ------------ | ----- | ------------------------------------------ |
| wk append  | Entero largo | 2     | Inserta contenidos al final del rango      |
| wk prepend | Entero largo | 1     | Insertar contenidos al principio del rango |
| wk replace | Entero largo | 0     | Remplazar el contenido de la página        |

* Si *objRango* es un rango, you can use the optional *ActRango* puede utilizar el parámetro opcional *ActRango* para pasar una de las siguientes constantes para especificar si los contenidos insertados están incluidos en el rango resultante:  
    
| Constante             | Tipo         | Valor | Comentario                                                            |  
| --------------------- | ------------ | ----- | --------------------------------------------------------------------- |  
| wk exclude from range | Entero largo | 1     | Contenidos insertados no incluidos en el rango actualizado            |  
| wk include in range   | Entero largo | 0     | Contenido insertado incluido en el rango actualizado (predeterminado) |  
    
Si no pasa el parámetro *ActRango*, por defecto los contenidos insertados están incluidos en el rango resultante.
* Si *objRango* no es un rango, *ActRango* se ignora.

## Ejemplo 

En el ejemplo siguiente, un usuario selecciona la imagen que desea insertar en el objeto de rango y se le avisará si esta imagen no puede insertarse:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //pedir al usuario elegir una imagen en el disco que desee insertar
 $imgRef:=Open document("")
  //si el usuario no cancela
 If(OK=1)
  //si el archivo es un archivo de imagen soportado
    If(Is picture file(document))
  // inserta imagen seleccionada por el usuario
       WP INSERT PICTURE($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //si la inserción falla, alerta al usuario
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## Ver también 

  
[WP INSERT DOCUMENT](wp-insert-document.md)  
[WP Picture range](wp-picture-range.md)  