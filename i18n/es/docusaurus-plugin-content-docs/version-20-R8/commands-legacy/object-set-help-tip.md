---
id: object-set-help-tip
title: OBJECT SET HELP TIP
slug: /commands/object-set-help-tip
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HELP TIP.Syntax-->**OBJECT SET HELP TIP** ( {* ;} *objeto* ; *mensajeAyuda* )<!-- END REF-->
<!--REF #_command_.OBJECT SET HELP TIP.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| mensajeAyuda | Text | &#8594;  | Contenido del mensaje de ayuda |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET HELP TIP.Summary-->El comando **OBJECT SET HELP TIP** permite definir o modificar dinámicamente el mensaje de ayuda asociado al objeto o los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.

En el parámetro *mensajeAyuda*, pase una cadena de caracteres para el contenido del mensaje. Si pasa una cadena vacía "", la sugerencia de ayuda se eliminará. 

Cuando se ejecuta el formulario, los mensajes aparecen como mensajes de ayuda cuando el cursor se mueve sobre el campo u objeto. El retardo de visualización y la duración máxima de los mensajes de ayuda se pueden controlar utilizando los selectores Tips delay y Tips duration del comando [SET DATABASE PARAMETER](set-database-parameter.md).

Pase el contenido del mensaje en el parámetro *mensajeAyuda*. Puede pasar:

* una cadena de caracteres, por ejemplo "Utilice el / como separador",
* una cadena vacía "" para eliminar el mensaje de ayuda,

Cuando el formulario se ejecuta, los mensajes de ayuda aparecen como mensajes de ayuda cuando el cursor pasa sobre el campo u objeto. El retraso de visualización y la duración máxima de los mensajes de ayuda pueden controlarse utilizando Tips delay y los selectores del comando [SET DATABASE PARAMETER](set-database-parameter.md). 

Puede utilizar este comando con un objeto list box para agregar mensajes de ayuda a las filas y celdas del list box. Por ejemplo, un objeto list box puede tener un mensaje de ayuda diferente por fila. En este caso, primero debe determinar la posición del cursor con el comando [LISTBOX GET CELL POSITION](listbox-get-cell-position.md). Esto se muestra en un ejemplo a continuación.

Cuando aparece un mensaje de ayuda, llamando al comando **OBJECT SET HELP TIP** se cierra, abre un nuevo mensaje en la ubicación del ratón y reinicia el contador Tips duration, permitiendo el manejo dinámico de las sugerencias. 

**Notas:** 

* El contenido del mensaje de ayuda también se puede definir utilizando el editor de formularios (ver *Controles y ayuda a la entrada*) y el editor de estructura (ver *Propiedades de los campos*) en modo Diseño.
* Los consejos de ayuda pueden desactivarse globalmente para la aplicación utilizando el selector Tips enabled del comando [SET DATABASE PARAMETER](set-database-parameter.md).

#### Ejemplo 1 

En este formulario, un mensaje de ayuda se visualiza y cambia dinámicamente cuando el ratón pasa sobre diferentes partes de un botón de imagen:

![](../assets/en/commands/pict3351402.en.png)

```4d
  //Método objeto "myFlag"
 
 var $x;$y;oldX;oldY : Real
 var $left;$right;$top;$bottom : Real
 var $b : Integer
 var $tip : Text
 var oldTip : Text
 var $doRefresh : Boolean
 
 Case of
    :(FORM Event=On Load)
       oldTip:=""
       SET DATABASE PARAMETER(Tips enabled;1) //Para asegurarse de que los consejos están habilitados
       SET DATABASE PARAMETER(Tips delay;0) // Sugerencia mostrada inmediatamente al detener el ratón
       SET DATABASE PARAMETER(Tips duration;60*10) // 10 segundos máximo de visualización
    :(FORM Event=On Mouse Move)
       MOUSE POSITION($x;$y;$b)
       OBJECT GET COORDINATES(*;"myFlag";$left;$top;$right;$bottom)
       $x:=$x-$left
       $y:=$y-$top
       Case of //cada parte de la bander es de 76 píxeles
          :($x<76)
             $tip:="Green color"
          :($x<152)
             $tip:="White color"
          Else
             $tip:="Orange color"
       End case
 
       $doRefresh:=($tip#oldtip) //true si el mensaje es diferente
       If(Not($doRefresh)) //Los mismos contenidos
          $doRefresh:=((Abs($x-oldX)>30)|(Abs($y-oldY)>30)) //true si se mueve el cursor
       End if
 
       If($doRefresh) //mostrar otro mensaje
          OBJECT SET HELP TIP(*;"myFlag";$tip)
          oldX:=$x
          oldY:=$y
          oldTip:=$tip
       End if
 
 End case
```

#### Ejemplo 2 

Usted tiene un list box, "Commands List", que contiene una lista y desea definir un mensaje de ayuda que muestre la descripción de cada elemento de lista. La descripción se encuentra en la tabla \[Documentation\]. 

```4d
 var $mouseX;$mouseY;$mouseZ : Real
 var $col;$row : Integer
 
 Case of
 
    :(FORM Event=On Mouse Enter)
 
       SET DATABASE PARAMETER(Tips delay;1) // hace que el mensaje aparezca rápidamente
 
    :(FORM Event=On Mouse Move)
 
  //#1 : encuentra la fila que se ha movido
 
       MOUSE POSITION($mouseX;$mouseY;$mouseZ)
       LISTBOX GET CELL POSITION(*;"Commands List";$mouseX;$mouseY;$col;$row)
 
  //#2 : configure el mensaje de ayuda correspondiente
 
       If($row#0)
          GOTO SELECTED RECORD([Documentation];$row)
          OBJECT SET HELP TIP(*;"Commands List";[Documentation]Description) // La descripción completa se utilizará como "mensaje de ayuda" cuando (si) el ratón deja de moverse.
       End if
 
    :(FORM Event=On Mouse Leave)
 
       SET DATABASE PARAMETER(Tips delay;3) // hace que el mensaje aparezca normalmente
 
 End case
```

El resultado es...

![](../assets/en/commands/pict3529022.en.png)

#### Ver también 

[OBJECT Get help tip](object-get-help-tip.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1181 |
| Hilo seguro | &cross; |


