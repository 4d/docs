---
id: object-set-events
title: OBJECT SET EVENTS
slug: /commands/object-set-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET EVENTS.Syntax-->**OBJECT SET EVENTS** ( {* ;} *objeto* ; *arrEventos* ; *modo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET EVENTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto o "" para designar el formulario (si * se especifica) o <br/>Campo o variable (si * se omite) |
| arrEventos | Integer array | &#8594;  | Array de eventos a definir |
| modo | Integer | &#8594;  | Modo de activación de los eventos definidos en arrEvents |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET EVENTS.Summary-->El comando **OBJECT SET EVENTS** modifica, para el proceso actual, la configuración de los eventos formulario del formulario u objetos designados por los parámetros *objeto* y *\** .<!-- END REF-->

Si pasa el parámetro opcional *\** se indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
Para definir la configuración de eventos para el formulario, pase el parámetro opcional *\** y una cadena vacía "" en *objeto*, en este caso, usted designa el formulario actual.

**Nota:** si desea modificar los eventos de un subformulario relacionado con una tabla, sólo puede utilizar la sintaxis basada en el nombre del objeto.

En el parámetro *arrEvents*, pase un array entero largo que contenga la lista de eventos de formulario predefinidos o personalizados que desea modificar (se puede utilizar el parámetro *modo* para especificar si la modificación consiste en la activación o desactivación de los eventos) . Para designar un evento predefinido a modificar, puede pasar en cada elemento del array *arrEvents*, una de las siguientes constantes, que se encuentra en el tema "*Eventos formulario*":

| Constante                | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On Activate              | Entero largo | 11    | La ventana del formulario se convierte en la ventana del primer plano                                                                                                                                                                                                                                                                                                                                                                        |
| On After Edit            | Entero largo | 45    | El contenido del objeto editable que tiene el foco acaba de ser modificado                                                                                                                                                                                                                                                                                                                                                                   |
| On After Keystroke       | Entero largo | 28    | Un carácter está apunto de introducirse en el objeto que tiene el foco. [Get edited text](get-edited-text.md) devuelve el contenido incluyendo este carácter                                                                                                                                                                                                                                                                                 |
| On After Sort            | Entero largo | 30    | (*List box únicamente*) Se acaba de efectuar una ordenación estándar en una columna del list box                                                                                                                                                                                                                                                                                                                                             |
| On Arrow Click           | Entero largo | 38    | (*Botones 3D únicamente*) El área “flecha” de un botón 3D recibe un clic                                                                                                                                                                                                                                                                                                                                                                     |
| On Before Data Entry     | Entero largo | 41    | (*List box únicamente*) Una celda de list box está a punto de pasar a modo edición                                                                                                                                                                                                                                                                                                                                                           |
| On Before Keystroke      | Entero largo | 17    | Un carácter está a punto de introducirse en el objeto que tiene el foco. [Get edited text](get-edited-text.md) devuelve el texto del objeto sin este carácter.                                                                                                                                                                                                                                                                               |
| On Begin Drag Over       | Entero largo | 46    | Se va a arrastrar un objeto                                                                                                                                                                                                                                                                                                                                                                                                                  |
| On Begin URL Loading     | Entero largo | 47    | (*Áreas web únicamente*) Un nuevo URL se carga en el área web                                                                                                                                                                                                                                                                                                                                                                                |
| On bound variable change | Entero largo | 54    | Se modifica la variable relacionada a un subformulario.                                                                                                                                                                                                                                                                                                                                                                                      |
| On Clicked               | Entero largo | 4     | Ocurre un clic sobre un objeto                                                                                                                                                                                                                                                                                                                                                                                                               |
| On Close Box             | Entero largo | 22    | Se ha hecho clic en la casilla de cerrar la ventana                                                                                                                                                                                                                                                                                                                                                                                          |
| On Close Detail          | Entero largo | 26    | Se cierra el formulario de entrada y regresa al formulario de salida                                                                                                                                                                                                                                                                                                                                                                         |
| On Collapse              | Entero largo | 44    | (Listas jerárquicas únicamente) Un elemento de la lista jerárquica se ha contraído vía un clic o una tecla                                                                                                                                                                                                                                                                                                                                   |
| On Column Moved          | Entero largo | 32    | (*List box únicamente*) El usuario mueve una columna de list box vía arrastrar y soltar                                                                                                                                                                                                                                                                                                                                                      |
| On Column Resize         | Entero largo | 33    | (*List box únicamente*) El ancho de una columna de list box es modificado por un usuario con el ratón                                                                                                                                                                                                                                                                                                                                        |
| On Data Change           | Entero largo | 20    | Se han modificado los datos de un objeto                                                                                                                                                                                                                                                                                                                                                                                                     |
| On Deactivate            | Entero largo | 12    | La ventana del formulario deja de ser la ventana del primer plano                                                                                                                                                                                                                                                                                                                                                                            |
| On Delete Action         | Entero largo | 58    | *(Listas jerárquicas y list box únicamente)*. El usuario solicita borrar un elemento.                                                                                                                                                                                                                                                                                                                                                        |
| On Display Detail        | Entero largo | 8     | Un registro se va a mostrar en una lista o una línea se va a mostrar en un list box.                                                                                                                                                                                                                                                                                                                                                         |
| On Double Clicked        | Entero largo | 13    | Un objeto ha recibido un doble clic                                                                                                                                                                                                                                                                                                                                                                                                          |
| On Drag Over             | Entero largo | 21    | Los datos pueden soltarse en un objeto                                                                                                                                                                                                                                                                                                                                                                                                       |
| On Drop                  | Entero largo | 16    | Se han soltado datos en un objeto                                                                                                                                                                                                                                                                                                                                                                                                            |
| On End URL Loading       | Entero largo | 49    | (*Áreas web únicamente*) Se han cargado todos los recursos del URL                                                                                                                                                                                                                                                                                                                                                                           |
| On Expand                | Entero largo | 43    | (Listas jerárquicas únicamente) Se ha expandido un elemento de la lista jerárquica utilizando un clic o una tecla                                                                                                                                                                                                                                                                                                                            |
| On Footer Click          | Entero largo | 57    | (*List box únicamente)* Un clic en el pie de un list box o de una columna de list box                                                                                                                                                                                                                                                                                                                                                        |
| On Getting Focus         | Entero largo | 15    | Un objeto de formulario toma el foco                                                                                                                                                                                                                                                                                                                                                                                                         |
| On Header                | Entero largo | 5     | El encabezado del formulario se va a imprimir o a mostrar                                                                                                                                                                                                                                                                                                                                                                                    |
| On Header Click          | Entero largo | 42    | (*List box únicamente*) Ocurre un clic en un encabezado de columna del list box                                                                                                                                                                                                                                                                                                                                                              |
| On Load Record           | Entero largo | 40    | En modo entrada en lista, se carga un registro durante modificación (el usuario hace clic en una línea del registro y un campo pasa a modo edición)                                                                                                                                                                                                                                                                                          |
| On Long Click            | Entero largo | 39    | (*Botones 3D únicamente*) Se hace clic en un botón 3D y el botón del ratón permanece presionado por un cierto tiempo                                                                                                                                                                                                                                                                                                                         |
| On Losing Focus          | Entero largo | 14    | Un objeto de formulario está perdiendo el foco                                                                                                                                                                                                                                                                                                                                                                                               |
| On Mac toolbar button    | Entero largo | 55    | El usuario hace clic en el botón de gestión de la barra de herramientas en Mac OS.                                                                                                                                                                                                                                                                                                                                                           |
| On Menu Selected         | Entero largo | 18    | Se ha seleccionado un comando de menú                                                                                                                                                                                                                                                                                                                                                                                                        |
| On Mouse Enter           | Entero largo | 35    | El cursor del ratón entra al área gráfica de un objeto                                                                                                                                                                                                                                                                                                                                                                                       |
| On Mouse Leave           | Entero largo | 36    | El cursor del ratón sale del área gráfica de un objeto                                                                                                                                                                                                                                                                                                                                                                                       |
| On Mouse Move            | Entero largo | 37    | El cursor del ratón se mueve al menos un píxel O cuando se presiona una tecla de modificación (Ctrl, Alt, Bloq mayús). Si el evento está seleccionado para un objeto únicamente, se genera sólo cuando el cursor se encuentra dentro del área gráfica del objeto                                                                                                                                                                             |
| On Open Detail           | Entero largo | 25    | El formulario detallado asociado con el formulario de salida o con el listbox está apunto de ser abierto                                                                                                                                                                                                                                                                                                                                     |
| On Open External Link    | Entero largo | 52    | (*Áreas web únicamente*) Se ha abierto un URL externo en el navegador                                                                                                                                                                                                                                                                                                                                                                        |
| On Outside Call          | Entero largo | 10    | El formulario recibe una llamada [POST OUTSIDE CALL](post-outside-call.md)                                                                                                                                                                                                                                                                                                                                                                   |
| On Picture Scroll        | Entero largo | 59    | El usuario desplaza el contenido de un campo o de una variable imagen utilzando el ratón o una tecla.                                                                                                                                                                                                                                                                                                                                        |
| On Plug in Area          | Entero largo | 19    | Un objeto externo solicitó que se ejecute su método de objeto                                                                                                                                                                                                                                                                                                                                                                                |
| On Printing Break        | Entero largo | 6     | Se va a imprimir una de las áreas de ruptura del formulario                                                                                                                                                                                                                                                                                                                                                                                  |
| On Printing Detail       | Entero largo | 23    | Se va a imprimir el área de detalle del formulario                                                                                                                                                                                                                                                                                                                                                                                           |
| On Printing Footer       | Entero largo | 7     | Se va a imprimir el área de pie de página del formulario                                                                                                                                                                                                                                                                                                                                                                                     |
| On Resize                | Entero largo | 29    | La ventana del formulario se redimensiona                                                                                                                                                                                                                                                                                                                                                                                                    |
| On Row Moved             | Entero largo | 34    | (*List box únicamente*) El usuario mueve una fila de un list box vía arrastrar y soltar                                                                                                                                                                                                                                                                                                                                                      |
| On Row Resize            | Entero largo | 60    | (*4D View Pro únicamente*) La altura de una línea es modificada por un usuario con el ratón                                                                                                                                                                                                                                                                                                                                                  |
| On Selection Change      | Entero largo | 31    | *List box*: se modifica la selección actual de líneas o columnas*Registros en lista:* se modifica el registro actual o la selección actual de líneas en un formulario listado o en un subformulario*Lista jerárquica*: la selección en la lista se modifica luego de un clic o de presionar una tecla*Variable o campo editable*: la selección de texto o la posición del cursor en el área se modifica al hacer clic o presionar una tecla. |
| On Timer                 | Entero largo | 27    | El número de tics definido por el comando [SET TIMER](set-timer.md) se ha pasado                                                                                                                                                                                                                                                                                                                                                             |
| On Unload                | Entero largo | 24    | El formulario se cierra y libera                                                                                                                                                                                                                                                                                                                                                                                                             |
| On URL Filtering         | Entero largo | 51    | (*Áreas web únicamente*) Un URL fue bloqueado por el área web                                                                                                                                                                                                                                                                                                                                                                                |
| On URL Loading Error     | Entero largo | 50    | (*Áreas web únicamente*) Ocurrió un error cuando se cargaba el URL                                                                                                                                                                                                                                                                                                                                                                           |
| On URL Resource Loading  | Entero largo | 48    | (*Áreas web únicamente*) Se carga un nuevo recurso en el área web                                                                                                                                                                                                                                                                                                                                                                            |
| On Validate              | Entero largo | 3     | Se ha valido la entrada de datos en el registro                                                                                                                                                                                                                                                                                                                                                                                              |
| On VP Range Changed      | Entero largo | 61    | El rango de celdas 4D View Pro ha cambiado (por ejemplo, el cálculo de una fórmula, el valor eliminado de una celda, etc.)                                                                                                                                                                                                                                                                                                                   |
| On Window Opening Denied | Entero largo | 53    | (*Áreas web únicamente*) Se ha bloqueado una ventana pop-up                                                                                                                                                                                                                                                                                                                                                                                  |

Es importante tener en cuenta que el evento On Load no está incluido en esta lista: este evento no se puede definir porque ya se ha generado durante la ejecución del comando.

En *arrEvents*, también puede pasar todo valor correspondiente a un evento personalizado. En este caso, recomendamos utilizar valores negativos (ver el comando [CALL SUBFORM CONTAINER](call-subform-container.md)).

El parámetro *modo* se utiliza para definir el tratamiento global a efectuar para los elementos del array. Para ello, puede pasar una de las siguientes constantes, que se encuentra en el tema "*Propiedades de los objetos*":

| Constante                       | Tipo         | Valor | Comentario                                                                                                       |
| ------------------------------- | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------- |
| Disable events others unchanged | Entero largo | 2     | Todos los eventos listados en el array *arrEvents* se desactivan; el estado de todos los demás eventos no cambia |
| Enable events disable others    | Entero largo | 0     | Todos los eventos listados en el array *arrEvents* se activan; todos los demás eventos se desactivan             |
| Enable events others unchanged  | Entero largo | 1     | Todos los eventos listados en el array *arrEvents* se activan; el estado de todos los demás eventos no cambia    |

El comando **OBJECT SET EVENTS** puede dar lugar a la activación de eventos que no son compatibles con el *objeto* (dependiendo del tipo). En este caso, simplemente se ignoran los eventos.

Si un *objeto* se duplica después de una llamada al comando **OBJECT SET EVENTS**, la configuración resultante de activación/desactivación también se duplica.

#### Ejemplo 1 

Activación de tres eventos formulario para un conjunto de objetos list box y desactivación de otros eventos:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Enable events disable others)
  // activa 3 eventos y desactiva todos los demás
```

#### Ejemplo 2 

Desactivación de tres eventos formulario para un conjunto de objetos list box, sin modificar los otros eventos:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Disable events others unchanged)
  // desactiva solo 3 eventos
```

#### Ejemplo 3 

Activación de un evento formulario para un objeto, sin modificar los otros eventos:

```4d
 ARRAY LONGINT($MyEventsOnLB;1)
 $MyEventsOnLB {1}:=On Column Moved
 OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)
  // activa únicamente el evento
```

#### Ejemplo 4 

Desactivación de todos los eventos del formulario:  

```4d
 ARRAY LONGINT($MyFormEvents;0)
 OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)
  // desactiva todos los eventos
```

#### Ejemplo 5 

Desactivación de un solo evento del formulario sin modificar los otros:

```4d
 ARRAY LONGINT($MyFormEvents;1)
 $MyFormEvents{1}:=On Timer
 OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)
  // solo desactiva el evento
```

#### Ver también 

*Eventos formulario*  
[OBJECT GET EVENTS](object-get-events.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1239 |
| Hilo seguro | &cross; |


