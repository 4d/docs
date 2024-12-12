---
id: array-picture
title: ARRAY PICTURE
slug: /commands/array-picture
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY PICTURE.Syntax-->**ARRAY PICTURE** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY PICTURE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array bidimensional |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY PICTURE.Summary-->El comando ARRAY PICTURE crea y/o redimensiona un array de elementos de tipo [Imagen](# "Can be any Windows or Macintosh picture") en memoria.<!-- END REF-->es el nombre del array.
* El parámetro *tamaño* es el número de elementos en el array.
* El parámetro *tamaño2* es opcional; si se especifica *tamaño2*, el comando crea un array bidimensional. En este caso, *tamaño* especifica el número de filas y *tamaño2* especifica el número de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensión del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional.

Cuando aplica ARRAY PICTURE a un array existente:

* Si agranda el tamaño del array, los elementos existentes no son modificados, y los nuevos elementos se inicializan en imágenes vacías. Esto significa que [Picture size](picture-size.md "Picture size") aplicado a uno de estos elementos devuelve *0*.
* Si reduce el tamaño del array, se pierden los últimos elementos borrados del array.

#### Ejemplo 1 

Este ejemplo crea un array de proceso de 100 elementos de tipo [Imagen](# "Can be any Windows or Macintosh picture"):

```4d
 ARRAY PICTURE(agValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas de de 50 elementos de tipo [Imagen](# "Can be any Windows or Macintosh picture"):

```4d
 ARRAY PICTURE($agValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interpcoceso de elementos de tipo [Imagen](# "Can be any Windows or Macintosh picture") y carga cada imagen en uno de los elementos del array. El tamaño del array es igual al número de recursos *'PICT'* disponibles en la base. El nombre del recurso del array comienza por *"User Intf/"*:

```4d
 RESOURCE LIST("PICT";$aiResIDs;$asResNombres)
 ARRAY PICTURE(◊agValores;Size of array($aiResIDs))
 $vlPictElem:=0
 For($vlElem;1;Size of array(◊agValues))
    If($asResNames="User Intf/@")
       $vlPictElem:=vlPictElem+1
       GET PICTURE RESOURCE("PICT";$aiResIDs{$vlElem};$vgImagen)
       ◊agValores{$vlPictElem}:=$vgImagen
    End if
 End for
 ARRAY PICTURE(◊agValores;$vlPictElem)
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 279 |
| Hilo seguro | &check; |


