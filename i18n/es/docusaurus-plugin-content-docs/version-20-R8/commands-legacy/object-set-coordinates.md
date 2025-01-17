---
id: object-set-coordinates
title: OBJECT SET COORDINATES
slug: /commands/object-set-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET COORDINATES.Syntax-->**OBJECT SET COORDINATES** ( {* ;} *objeto* ; *izquierda* ; *sup* {; *derecha* ; *inf*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET COORDINATES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | Integer | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| izquierda | Integer | &#8594;  | Coordenada izquierda del objeto en píxeles |
| sup | Integer | &#8594;  | Coordenada superior del objeto en píxeles |
| derecha | Integer | &#8594;  | Coordenada derecha del objeto en píxeles |
| inf | Integer | &#8594;  | Coordenada iinferior del objeto en píxeles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET COORDINATES.Summary-->El comando **OBJECT SET COORDINATES** modifica la ubicación y, opcionalmente, el tamaño del objeto o de los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
**Nota:** este comando es equivalente a utilizar el comando [OBJECT MOVE](object-move.md) y pasar el segundo parámetro *\**.  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de  objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
En los parámetros *izquierda* y *sup*, pase las nuevas coordenadas absolutas del objeto en el formulario. Estas coordenadas deben expresarse en píxeles con respecto a la esquina superior izquierda del formulario.  
  
También puede pasar los valores de coordenadas absolutas en los parámetros *derecha* e *inf*, que indican la esquina inferior derecha del objeto. Si esta esquina no corresponde a la esquina del objeto después de la aplicación de los parámetros *izquierda* y *sup*, el objeto cambia de tamaño en consecuencia.  
  
**Nota:** si desea mover un objeto con respecto a su posición inicial, se recomienda utilizar el comando existente [OBJECT MOVE](object-move.md).  
  
Este comando sólo funciona en los siguientes contextos:

* Los formularios de entrada en el modo entrada,
* Formulario mostrados usando el comando [DIALOG](../commands/dialog.md),
* Encabezados y pies de página de formularios de salida mostrados por el comando [MODIFY SELECTION](modify-selection.md) o [DISPLAY SELECTION](display-selection.md),
* Los formularios en impresión.

#### Ejemplo 

La siguiente declaración ubica el objeto "button\_1" en las coordenadas (10,20) (30,40):

```4d
 OBJECT SET COORDINATES(*;"button_1";10;20;30;40)
```

![](../assets/en/commands/pict1207497.fr.png)

#### Ver también 

[CONVERT COORDINATES](convert-coordinates.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT MOVE](object-move.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1248 |
| Hilo seguro | &cross; |


