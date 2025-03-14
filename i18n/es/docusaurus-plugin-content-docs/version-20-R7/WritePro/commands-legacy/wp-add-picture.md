---
id: wp-add-picture
title: WP Add picture
slug: /WritePro/commands/wp-add-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Add picture.Syntax-->**WP Add picture** ( *wpDoc* {; *imagen*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Add picture.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| imagen | Picture, Text | &#8594;  | Imagen (campo o variable) o Ruta de la imagen (texto) |
| Resultado | Object | &#8592; | Objeto que hace referencia a la imagen |

<!-- END REF-->

## Descripción 

<!--REF #_command_.WP Add picture.Summary-->El comando **WP Add picture** ancla la *imagen* en una ubicación fija dentro de *wpDoc* y devuelve su referencia.<!-- END REF--> La referencia devuelta se puede pasar al comando [WP SET ATTRIBUTES](wp-set-attributes.md) para mover la *imagen* a cualquier ubicación en *wpDoc* (página, sección, encabezado, pie de página, etc.) con una capa, tamaño, etc. definidos.

En *wpDoc*, pase el nombre de un objeto de documento 4D Write Pro.

En le parámetro *imagen* opcional, puede pasar:

* ya sea una imagen 4D,
* o una cadena que contiene una ruta a un archivo de imagen almacenado en el disco, expresada usando la sintaxis del sistema.  
Puede pasar una ruta de acceso completa o una ruta relativa al archivo de estructura de la base. También puede pasar un nombre de archivo, en cuyo caso el archivo debe estar ubicado al lado del archivo de estructura de la base. Si pasa un nombre de archivo, debe indicar la extensión del archivo.

> **Nota**: se puede usar cualquier formato de imagen soportado por 4D (vea la sección *Imágenes*). Puede obtener la lista de formatos de imagen disponibles con el comando [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Si la imagen encapsula varios formatos (codecs), 4D Write Pro solo conserva un formato para mostrar y un formato para imprimir (si es diferente) en el documento; los "mejores" formatos se seleccionan automáticamente.

* Si se omite *imagen*, obtendrá una referencia de imagen válida y se agregará una imagen vacía. Esto le permite llamar al comando [WP SET ATTRIBUTES](wp-set-attributes.md) con el selector wk image expression para usar una expresión 4D para llenar la imagen. Si la expresión no se puede evaluar o no devuelve una imagen 4D válida, se mostrará una imagen vacía (imagen de marco negro por defecto).

Por defecto, la imagen agregada es:

* anidada detrás del texto,
* se muestra en la esquina superior izquierda del recuadro del papel,
* mostrada en todas las páginas.

La ubicación, la capa (en línea, delante/detrás del texto), la visibilidad y las propiedades de la *imagen* se pueden modificar con el comando [WP SET ATTRIBUTES](wp-set-attributes.md), o mediante acciones estándar (consulte *Utilizar las acciones estándar 4D Write Pro*).

**Nota:** el comando [WP Selection range](wp-selection-range.md) devuelve un objeto *referencia de imagen* si se selecciona una imagen anclada y un objeto de rango si se selecciona una imagen en línea. Puede verificar si un objeto seleccionado es un objeto de imagen con el atributo wk type. Si el valor = 2, entonces es un objeto imagen; de lo contrario, es un objeto rango (valor = 0).

## Ejemplo 1 

Desea agregar una imagen con la configuración predeterminada utilizando un archivo de ruta.

```4d
 var $obPict : Object
 $obPict:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Sunrise.jpg")
```

El resultado es:

![](../../assets/en/WritePro/commands/pict3617325.en.png)

## Ejemplo 2 

Desea agregar una imagen redimensionada, centrada y anclada al encabezado:

```4d
 var $obImage : Object
 $obImage:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Saved Pictures\\Sunrise.jpg")
 WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)
 WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)
 WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)
 WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")
```

El resultado es:

![](../../assets/en/WritePro/commands/pict3617351.en.png)  

## Ejemplo 3 

Usted desea utilizar una expresión campo para agregar una imagen anclada a un documento que muestre texto de la base:

```4d
 QUERY([Flowers];[Flowers]Common_Name="tulip")
 WP SET TEXT(myDoc;[Flowers]Description;wk append) //insert text
 var $obImage : Object
 $obImage:=WP Add picture(myDoc)
 WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))
```

![](../../assets/en/WritePro/commands/pict3841719.en.png)

## Ver también 

  
*Gestión de imágenes*  
[WP DELETE PICTURE ](wp-delete-picture.md)  
[WP Picture range](wp-picture-range.md)  