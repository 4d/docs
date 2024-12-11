---
id: object-set-resizing-options
title: OBJECT SET RESIZING OPTIONS
slug: /commands/object-set-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Syntax-->**OBJECT SET RESIZING OPTIONS** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| horizontal | Integer | &#8594;  | Opción de redimensionamiento horizontal |
| vertical | Integer | &#8594;  | Opción de redimensionamiento vertical |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Summary-->El comando **OBJECT SET RESIZING OPTIONS** permite definir o modificar dinámicamente las opciones de redimensionamiento del objeto o de los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF--> Estas opciones definen la visualización del objeto en caso de redimensionamiento de la ventana del formulario.  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.   
  
En el parámetro *horizontal*, pase un valor que indique la opción de redimensionamiento horizontal a definir para el *objeto*. Puede pasar una de las siguientes constantes, del tema *Propiedades de los objetos*:  
  
| Constante              | Tipo         | Valor | Comentario                                                                                 |
| ---------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------ |
| Resize horizontal grow | Entero largo | 1     | Si la ventana se agranda un 50% de ancho, el objeto se agranda 50% a la derecha            |
| Resize horizontal move | Entero largo | 2     | Si la ventana se agranda 100 píxeles de ancho, el objeto se mueve 100 píxeles a la derecha |
| Resize horizontal none | Entero largo | 0     | Si la ventana se agranda de ancho, ni el largo ni la posición del objeto varían            |
  
  
En el parámetro *vertical*, pase un valor que indique la opción de redimensionamiento vertical a definir para el *objeto*. Puede pasar una de las siguientes constantes, del tema *Propiedades de los objetos*:  
  
| Constante            | Tipo         | Valor | Comentario                                                                               |
| -------------------- | ------------ | ----- | ---------------------------------------------------------------------------------------- |
| Resize vertical grow | Entero largo | 1     | Si la ventana se agranda un 50% de alto, el objeto se alarga 50% hacia abajo             |
| Resize vertical move | Entero largo | 2     | Si la ventana se agranda 100 píxeles de alto, el objeto se mueve 100 píxeles hacia abajo |
| Resize vertical none | Entero largo | 0     | Si la ventana se agranda de alto, ni el ancho ni la posición del objeto varían           |

#### Ver también 

[OBJECT GET RESIZING OPTIONS](object-get-resizing-options.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1175 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


