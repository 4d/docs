---
id: object-get-resizing-options
title: OBJECT GET RESIZING OPTIONS
slug: /commands/object-get-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Syntax-->**OBJECT GET RESIZING OPTIONS** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| horizontal | Integer | &#8592; | Opción de redimensionamiento horizontal |
| vertical | Integer | &#8592; | Opción de redimensionamiento vertical |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Summary-->El comando **OBJECT GET RESIZING OPTIONS** devuelve las opciones de redimensionamiento actuales del o de los objetos designados por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, pase una referencia de variable en lugar de una cadena. 

El comando devuelve las opciones de redimensionamiento actuales, como se definieron en el modo Diseño o para el proceso utilizando el comando [OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md). Estas opciones definen la visualización del objeto en caso de redimensionamiento de la ventana del formulario.

El parámetro *horizontal* devuelve un valor indicando la opción de redimensionamiento horizontal definido para el objeto. Puede comparar el valor recibido con las siguientes constantes, del tema *Propiedades de los objetos*:

| Constante              | Tipo         | Valor | Comentario                                                                                 |
| ---------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------ |
| Resize horizontal grow | Entero largo | 1     | Si la ventana se agranda un 50% de ancho, el objeto se agranda 50% a la derecha            |
| Resize horizontal move | Entero largo | 2     | Si la ventana se agranda 100 píxeles de ancho, el objeto se mueve 100 píxeles a la derecha |
| Resize horizontal none | Entero largo | 0     | Si la ventana se agranda de ancho, ni el largo ni la posición del objeto varían            |

El parámetro *vertical* devuelve un valor indicando la opción de redimensionamiento vertical definido para el objeto. Puede comparar el valor recibido con las siguientes constantes, del tema *Propiedades de los objetos*:

| Constante            | Tipo         | Valor | Comentario                                                                               |
| -------------------- | ------------ | ----- | ---------------------------------------------------------------------------------------- |
| Resize vertical grow | Entero largo | 1     | Si la ventana se agranda un 50% de alto, el objeto se alarga 50% hacia abajo             |
| Resize vertical move | Entero largo | 2     | Si la ventana se agranda 100 píxeles de alto, el objeto se mueve 100 píxeles hacia abajo |
| Resize vertical none | Entero largo | 0     | Si la ventana se agranda de alto, ni el ancho ni la posición del objeto varían           |

#### Ver también 

[OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1176 |
| Hilo seguro | &cross; |


