---
id: object-move
title: OBJECT MOVE
slug: /commands/object-move
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT MOVE.Syntax-->**OBJECT MOVE** ( {* ;} *objeto* ; *moveH* ; *moveV* {; *redimH* {; *redimV* {; *}}} )<!-- END REF-->
<!--REF #_command_.OBJECT MOVE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Campo o variable (si se omite *) |
| moveH | Integer | &#8594;  | Valor del movimiento horizontal del objeto (>0 = a la derecha, <0 = a la izquierda) |
| moveV | Integer | &#8594;  | Valor del movimiento vertical del objeto (>0 = hacia abajo, <0 = hacia arriba) |
| redimH | Integer | &#8594;  | Valor del redimensionamiento horizontal del objeto |
| redimV | Integer | &#8594;  | Valor del redimensionamiento vertical del objeto |
| * | Operador | &#8594;  | Si se especifica = coordenadas absolutas Si se omite = coordenadas relativas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT MOVE.Summary-->El comando OBJECT MOVE permite mover los objetos en el formulario actual, definido por los parámetros *\** y *objeto, moveH* píxeles horizontalmente y *moveV* píxeles verticalmente.<!-- END REF-->   
  
También es posible (opcionalmente) redimensionar los objetos *redimH* píxeles horizontalmente y *redimV* píxeles verticalmente. 

La dirección de movimiento y redimensionamiento depende de los valores pasados en los parámetros *moveH* y *moveV*:

* Si el valor es positivo, los objetos se mueven y redimensionan a la derecha o hacia abajo, respectivamente.
* Si el valor es negativo, los objetos se mueven y redimensionan a la izquierda y hacia arriba, respectivamente.

Si pasa el primer parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena de caracteres). Si no pasa el parámetro \*, *objeto* es un campo o una variable. En este caso, usted no pasa una cadena sino una referencia de un campo o de una variable (campo o variable de tipo objeto únicamente). 

Si pasa un nombre de objeto en el parámetro *objeto* y utiliza el carácter arroba (“@”) para seleccionar más de un objeto, todos los objetos seleccionados se moverán o redimensionarán. 

**Nota:** desde la versión 6.5, es posible definir el modo de interpretación del carácter arroba (“@”), cuando se incluye en una cadena de caracteres. Esta opción tiene un impacto en los comandos “Propiedades de los objetos”. Por favor consulte el Manual de Diseño.

Por defecto, los valores *moveH*, *moveV*, *redimH* y *redimV* modifican las coordenadas del objeto relativamente a su posición anterior. Si quiere que los parámetros definan las coordenadas absolutas, pase el último parámetro opcional *\**.

Este comando funciona en los siguientes contextos:

* Formularios de entrada en modo entrada de datos,
* Formularios mostrados utilizando el comando [DIALOG](dialog.md "DIALOG"),
* Encabezados y pies de página de formularios de salida mostrados por los comandos [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION") o [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION"),
* Formularios en curso de impresión.

#### Ejemplo 1 

La siguiente instrucción mueve el botón “boton\_1” 10 píxeles a la derecha, 20 píxeles hacia arriba y agranda el botón 30 píxeles de largo y 40 de alto: 

```4d
 OBJECT MOVE(*;"boton_1";10;-20;30;40)
```

#### Ejemplo 2 

La siguiente instrucción mueve el botón “boton\_1” a las siguientes coordenadas (10;20) (30;40): 

```4d
 OBJECT MOVE(*;"boton_1";10;20;30;40;*)
```

#### Ver también 

[OBJECT DUPLICATE](object-duplicate.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 664 |
| Hilo seguro | &cross; |


