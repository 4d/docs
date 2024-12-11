---
id: display-selection
title: DISPLAY SELECTION
slug: /commands/display-selection
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY SELECTION.Syntax-->**DISPLAY SELECTION** ( {*tabla*}{; *modoSelección*}{; *entradaList*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.DISPLAY SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a mostrar, o Tabla por defecto, si se omite |
| modoSelección | Integer | &#8594;  | Modo de selección |
| entradaList | Boolean | &#8594;  | Autorizar entrada en lista |
| * | Operator |  &#8594;  | Utilizar el formulario de salida en caso de selección de un solo registro y ocultar las barras de desplazamiento en el formulario de entrada |
| * | Operator |  &#8594;  | Mostrar las barras de desplazamiento en el formulario de entrada (anular el segundo efecto del primer parámetro *) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DISPLAY SELECTION.Summary-->DISPLAY SELECTION muestra la selección de *tabla*, utilizando el formulario de salida.<!-- END REF--> Los registros se muestran en una lista por la cual se puede desplazar similar a la del modo Diseño. Si el usuario hace doble clic en un registro, por defecto se muestra el registro en el formulario de entrada actual. La lista se muestra en la ventana del primer plano. 

Para mostrar una selección y poder igualmente modificar un registro en el formulario de entrada actual después de hacer doble clic en él (como lo hace en la ventana del entorno Diseño), utilice [OBJECT SET ENTERABLE](object-set-enterable.md) en lugar de DISPLAY SELECTION.  
  
La información a continuación aplica a ambos comandos, excepto por la información sobre la modificación de registros.

Después de ejecutar DISPLAY SELECTION, no hay registro actual. Utilice un comando tal como [FIRST RECORD](first-record.md) o [LAST RECORD](last-record.md) para seleccionar uno.

El parámetro *modoSeleccion* se utiliza para definir las posibilidades de selección de registros en la lista utilizando el ratón. En este parámetro puede pasar una de las siguientes constantes del tema “*Parámetro de formulario*”:

| Constante          | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Multiple selection | Entero largo | 2     | El usuario puede seleccionar varios registros al tiempo. Para seleccionar registros contiguos, haga clic en el primer registro a seleccionar, luego presione la tecla **Mayús** antes de hacer clic en el último registro a incluir en la selección. Para seleccionar registros no adyacentes, haga clic en cada registro por separado mientras presiona la tecla **Ctrl** (Windows) o **Comando** (Mac OS). |
| No selection       | Entero largo | 0     | No es posible seleccionar un registro en la lista                                                                                                                                                                                                                                                                                                                                                            |
| Single selection   | Entero largo | 1     | Sólo es posible seleccionar un registro a la vez                                                                                                                                                                                                                                                                                                                                                             |
  
  
Si no pasa el parámetro *modoSelección*, por defecto se utiliza el modo “Selección múltiple”.   
  
El parámetro *entradaLista* le permite autorizar el modo “Entrada en lista” en la lista mostrada. Este modo permite al usuario seleccionar y modificar directamente los valores de los registros en el formulario de salida. Pase [True](true.md "True") para activar este modo o [False](false.md "False") para desactivarlo. Por defecto, si no pasa el parámetro *entradaLista*, el modo “Entrada en lista” se desactiva.  
  
Recuerde que con el comando DISPLAY SELECTION, este parámetro sólo permite la selección de los valores en la lista y no su modificación. De hecho, el comando DISPLAY SELECTION carga los registros de la selección actual en modo sólo lectura. Sólo el comando [MODIFY SELECTION](modify-selection.md) permite efectivamente la entrada de valores. 

**Nota:** el comando [OBJECT SET ENTERABLE](object-set-enterable.md) permite activar o desactivar fácilmente el modo Entrada en lista. 

Algunas reglas relacionadas con el parámetro opcional *\**:

\- Si la selección contiene sólo un registro y el primer parámetro opcional *\** no se utiliza, el registro se mostrará en el formulario de entrada en lugar del formulario de salida.  
\- Si el primer parámetro opcional *\** se especifica, el registro único será mostrado en el formulario de salida.   
\- Si el primer parámetro opcional *\** se especifica y el usuario muestra el registro en el formulario de entrada haciendo doble clic en él, se ocultarán las barras de desplazamiento del formulario. Para anular este efecto, pase el segundo parámetro opcional \*.

Puede poner botones personalizados en el área del encabezado o del pie de página del formulario de salida para terminar la ejecución del comando DISPLAY SELECTION. Puede utilizar los botones automáticos Aceptar o Cancelar para salir, o utilizar un método de objeto que llame a los comandos [ACCEPT](accept.md) o [CANCEL](cancel.md). Cuando un formulario de salida llamado por el comando DISPLAY SELECTION no tiene botones, sólo la tecla **Escape** (Windows) o **Esc** (Mac OS) permiten salir de la lista.

Durante y después de la ejecución de DISPLAY SELECTION, los registros que el usuario selecciona se conservan en un conjunto llamado UserSet. UserSet está disponible por medio de DISPLAY SELECTION a los métodos de objeto de los botones, a los métodos llamados por los comandos de menú, así como para el método de proyecto que llamó DISPLAY SELECTION.

#### Ejemplo 1 

El siguiente ejemplo selecciona todos los registros en la tabla \[Personas\]. El comando DISPLAY SELECTION muestra los registros y permite al usuario seleccionar los registros a imprimir. Finalmente, selecciona los registros con [USE SET](use-set.md "USE SET"), y los imprime con [PRINT SELECTION](print-selection.md "PRINT SELECTION"): 

```4d
 ALL RECORDS([Personas]) // Selección de todos los registros
 DISPLAY SELECTION([Personas];*) // Visualización de los registros
 USE SET("UserSet") // Utilizar sólo los registros seleccionados por el usuario
 PRINT SELECTION([Personas]) // Imprimir los registros que el usuario seleccionó
```

#### Ejemplo 2 

Ver el ejemplo #6 del comando [Form event](../commands/form-event.md "Form event"). Este ejemplo muestra todas las pruebas que puede necesitar para efectuar monitoreo total de los eventos que ocurren durante la ejecución del comando DISPLAY SELECTION.

#### Ejemplo 3 

Para reproducir las funcionalidades ofrecidas por el menú Registros del entorno Diseño cuando utiliza DISPLAY SELECTION o [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION") en modo Aplicación, proceda de la siguiente forma:

a. En el entorno Diseño, cree una barra de menús con los comandos de menú que quiera, por ejemplo, Mostrar todos, Buscar y Ordenar. 

b. Asocie esta barra de menús (utilizando el menú “Barra de menús asociada” en la caja de diálogo de propiedades del formulario) con el formulario de salida utilizado con los comandos DISPLAY SELECTION o [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION").

c. Asocie los siguientes métodos de proyecto a sus comandos de menú:

```4d
  // M_SHOW_ALL (asociado al comando de menú Mostrar todos)
 $vpCurTabla:=Current form table
 ALL RECORDS($vpCurTabla->)
```

```4d
  // M_QUERY (asociado al comando de menú Buscar)
 $vpCurTabla:=Current form table
 QUERY($vpCurTable->)
 
  // M_ORDER_BY (asociado al comando de menú Ordenar)
 $vpCurTabla:=Current form table
 ORDER BY($vpCurTabla->)
```

También puede utilizar otros comandos, tales como [PRINT SELECTION](print-selection.md "PRINT SELECTION"), [QR REPORT](qr-report.md "QR REPORT"), etc. para ofrecer todas las opciones de menú estándar que quiera cada vez que visualice o modifique una selección en el modo Aplicación. Gracias al comando [Current form table](current-form-table.md "Current form table"), estos método son genéricos, y la barra de menús a los cuales soporta puede asociarse a todo formulario de salida de cualquier tabla.

#### Ver también 

*Conjuntos*  
[Form event code](../commands/form-event-code.md)  
[MODIFY SELECTION](modify-selection.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 59 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


