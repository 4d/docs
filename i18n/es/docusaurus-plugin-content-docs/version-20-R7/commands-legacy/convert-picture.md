---
id: convert-picture
title: CONVERT PICTURE
slug: /commands/convert-picture
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT PICTURE.Syntax-->**CONVERT PICTURE** ( *imagen* ; *codec* {; *compresion*} )<!-- END REF-->
<!--REF #_command_.CONVERT PICTURE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Imagen a convertir |
| &#8592; | Imagen convertida |
| codec | Text | &#8594;  | Identificador de codec de imagen |
| compresion | Real | &#8594;  | Calidad de compresión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CONVERT PICTURE.Summary-->El comando CONVERT PICTURE convierte *imagen* en un nuevo tipo.<!-- END REF--> 

El parámetro *codec* indica el tipo de imagen a generar. Un codec puede ser una extensión (por ejemplo, “.gif”) o un tipo Mime (por ejemplo, “image/jpg”).  
 Puede obtener una lista de codecs disponibles utilizando el comando [PICTURE CODEC LIST](picture-codec-list.md).

Si el campo o variable *imagen* es de tipo compuesto (si por ejemplo es el resultado de la acción copiar -pegar), sólo la información correspondiente al tipo codec se conserva en la imagen resultante.

**Nota:** si el tipo de *codec* solicitado es el mismo que el tipo original de la *imagen*, no se efectúa ninguna conversión y la imagen se devuelve "tal cual" (excepto cuando se utiliza el parámetro *compresion*, ver a continuación). 

El parámetro opcional *compresion*, si se pasa, permite definir la calidad de compresión a aplicar a la imagen resultante cuando se utiliza un Codec compatible. En *compresion*, pase un valor entre 0 y 1 para especificar la calidad de la compresión, donde 0 es la calidad más mediocre (alta compresión) y 1 la mejor calidad (compresión baja). Este parámetro sólo se tiene en cuenta cuando el codec soporta la compresión (por ejemplo JPEG o HDPhoto) y es soportado por los APIs WIC y ImageIO.   
Para mayor información sobre los APIs de gestión de imagen en 4D, consulte la sección *Imágenes*. Por defecto, si omite el parámetro *compresion*, se aplica la mejor calidad (compresion =1). 

**Nota:** si desea llamar a **CONVERT PICTURE** con un tipo de imagen que no es compatible con las versiones 64 bits de 4D (como PICT), asegúrese de que la conversión se realice en una versión 32 bits de 4D, donde el tipo original es soportado. Para más información, consulte la página *Pasar de 32 bits a 64 bits*. 

#### Ejemplo 1 

Conversión de la imagen vpFoto al formato jpeg: 

```4d
 CONVERT PICTURE(vpFoto;".jpg")
```

#### Ejemplo 2 

Conversión de una imagen con calidad del 60%:

```4d
 CONVERT PICTURE(vPicture;".JPG";0.6)
```

#### Ver también 

[PICTURE CODEC LIST](picture-codec-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1002 |
| Hilo seguro | &check; |


