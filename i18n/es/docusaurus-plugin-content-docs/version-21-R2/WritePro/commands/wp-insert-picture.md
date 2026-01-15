---
id: wp-insert-picture
title: WP Insert picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert picture.Syntax-->**WP Insert picture** ( *targetObj* : Object ; *picture* : Picture ; *mode* : Integer {; *rangeUpdate* : Integer} ): Object<br/>**WP Insert picture** ( *targetObj* : Object ; *pictureFileObj* : 4D.File; *mode* : Integer {; *rangeUpdate* : Integer}): Object<!-- END REF-->

<!--REF #_command_.WP Insert picture.Params-->

| Parámetros     | Tipo                    |                             | Descripción                                                      |
| -------------- | ----------------------- | --------------------------- | ---------------------------------------------------------------- |
| targetObj      | Object                  | &#8594; | Rango o elemento o documento 4D Write Pro                        |
| picture        | Picture                 | &#8594; | Campo imagen o variable, o ruta al archivo imagen en el disco    |
| pictureFileObj | 4D.File | &#8594; | Un objeto File que representa un archivo imagen. |
| mode           | Integer                 | &#8594; | Modo de inserción                                                |
| rangeUpdate    | Integer                 | &#8594; | Modo de actualización del rango                                  |
| Resultado      | Object                  | &#8592; | Objeto que hace referencia a la imagen                           |

<!-- END REF-->

## Descripción

El comando **WP Insert picture**<!--REF #_command_.WP Insert picture.Summary--> inserta *picture* o una *imagenFileObj* en el *targetObj* especificado de acuerdo al *mode* de inserción pasado y los parámetros *rangeUpdate*, y devuelve una referencia al elemento de imagen.<!-- END REF--> La imagen se insertará como un caracter en *targetObj*.

En *targetObj*, puede pasar:

- Un rango
- Un elemento (tabla / línea / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección)
- Un documento 4D Write Pro

Para el segundo parámetro, puede pasar cualquiera de los dos:

- En *picture*:
  - Campo o variable de imagen
  - Cadena que contiene una ruta a un archivo de imagen almacenado en disco, en la sintaxis del sistema.
    Si utiliza una cadena, puede pasar un nombre de ruta completo o un nombre de ruta relativo al archivo de estructura de la base de datos. También puede pasar un nombre de archivo, en cuyo caso el archivo debe estar situado junto al archivo de estructura de la base de datos. Si pasa un nombre de archivo, debe indicar la extensión del archivo.
- En *pictureFileObj* : un objeto `File` que representa un archivo imagen.

Todo formato imagen [soportado por 4D](../../FormEditor/pictures.md#native-formats-supported) puede ser usado. Puede obtener la lista de formatos de imagen disponibles usando el comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Si la imagen encapsula varios formatos (codecs), 4D Write Pro solo mantiene un formato para la visualización y otro para la impresión (si son diferentes) en el documento; los "mejores" formatos se seleccionan automáticamente.

En el parámetro *mode*, pase una de las siguientes constantes para indicar el modo de inserción que se utilizará para la imagen en el documento:

| Constante  | Tipo    | Valor | Comentario                                      |
| ---------- | ------- | ----- | ----------------------------------------------- |
| wk append  | Integer | 2     | Insertar el contenido al final del objetivo     |
| wk prepend | Integer | 1     | Insertar el contenido al principio del objetivo |
| wk replace | Integer | 0     | Sustituir contenido de destino                  |

Si *targetObj* es un rango, puede utilizar opcionalmente el parámetro *rangeUpdate* para pasar una de las siguientes constantes para especificar si la imagen insertada se incluye o no en el rango resultante:

| Constante             | Tipo    | Valor | Comentario                                                               |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------ |
| wk exclude from range | Integer | 1     | Imagen no incluida en la gama actualizada                                |
| wk include in range   | Integer | 0     | Imagen incluida en el rango actualizado (por defecto) |

Si no pasa un parámetro *rangeUpdate*, por defecto la *formula* insertada se incluye en el rango resultante.

- Si *targetObj* no es un rango, *rangeUpdate* se ignora.

## Ejemplo 1

En el siguiente ejemplo, un usuario selecciona la imagen que desea insertar en el objeto de rango y se le avisará si esta imagen no se ha podido insertar:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //preguntar al usuario que elija una imagen del disco que quiera insertar
 $imgRef:=Open document("")
  //si el usuario no cancela
 If(OK=1)
  //si el archivo es un archivo de imagen soportado
    If(Is picture file(document))
  // inserte la imagen seleccionada por el usuario
       WP Insert picture($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  //si la inserción ha fallado, avise al usuario
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## Ejemplo 2

Desea insertar una imagen en el cuerpo del documento:

```4d
var $file : 4D.File
var $pictRef : Object

$file:=File("/RESOURCES/NovelCover1.jpg")

WParea:=WP New
$pictRef:=WP Insert picture(WParea; $file; wk replace)

```

## Ver también

[WP Insert document body](wp-insert-document-body.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)