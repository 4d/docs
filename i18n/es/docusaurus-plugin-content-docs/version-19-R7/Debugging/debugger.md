---
id: debugger
title: Debugger
---

El depurador es útil cuando se necesita detectar errores o controlar la ejecución de métodos. Le permite recorrer su código lentamente y examinar la información. Este proceso se llama "rastreo".

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

## Llamada al depurador

Hay varias formas de conseguir que el depurador se muestre:

* Haciendo clic en el botón **Trace** en [la ventana de errores de sintaxis](basics.md#syntax-error-window)
* Utilizando el comando [`TRACE`](https://doc.4d.com/4dv19/help/command/en/page157.html)
* Haciendo clic en el botón **Debug** en la ventana de ejecución del método o seleccionando **Run and debug...** en el Code Editor
* Utilizando **Alt+Shift+Clic derecho** (Windows) o **Ctrl+Option+Cmd+Clic** (macOS) mientras se ejecuta un método, seleccionando entonces el proceso a rastrear en el menú emergente:

![open-debugger](../assets/en/Debugging/openDebugger.png)

* Haciendo clic en el botón **Trace** cuando se selecciona un proceso en la página de procesos del Explorador de ejecución.
* Añadiendo un punto de ruptura en la ventana del Editor de Código o en las páginas Break y Catch del explorador de ejecución.

Cuando se llama, la ventana del depurador ofrece el nombre del método o de la función de clase que se está rastreando en ese momento, y la acción que provoca la aparición inicial de la ventana del depurador. Por ejemplo, en la ventana del depurador arriba:

* *Clients_BuildLogo* es el método en que se hace seguimiento
* La ventana del depurador apareció porque detectó una llamada al comando `C_PICTURE` y este comando fue uno de los a identificar

La visualización de una nueva ventana del depurador utiliza la misma configuración que la última ventana visualizada en la misma sesión. Si ejecuta varios procesos usuario, puede rastrearlos independientemente y tener una ventana de depuración abierta para cada proceso.

La ventana del depurador suele aparecer en la máquina donde se ejecuta el código. Con una aplicación mono usuario, siempre se muestra en la máquina que ejecuta la aplicación. Con una aplicación cliente/servidor se muestra:

* en el 4D remoto para el código que se ejecuta localmente
* en la máquina del servidor para el código que se ejecuta en el servidor (por ejemplo, un método con la opción **Ejecutar en el servidor**).

> Si el servidor se ejecuta en modo sin interfaz, no se puede mostrar ninguna ventana de depuración en el servidor, es necesario utilizar el depurador remoto. Ver [Depuración desde máquinas remotas](./debugging-remote.md).

## Botones barra de herramientas

La barra de herramientas del depurador incluye varios botones, asociados a accesos directos por defecto:

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

> Los accesos directos predeterminados pueden personalizarse en la página Atajos del diálogo Preferencias.

#### Fin del rastreo

Detener el modo Seguimiento y reanudar el curso normal de la ejecución del método.

> **Shift** + **F5** o **Shift** + clic en el botón **No Trace** retoma la ejecución. También desactiva todas las llamadas a TRACE posteriores en el proceso actual.

#### Pasar por encima

Ejecuta la línea de método actual, indicada por el contador del programa (la flecha amarilla). El depurador pasa a la siguiente línea.

El botón Ejecutar no entra en las subrutinas y las funciones, sino que se queda al nivel del método que está rastreando en ese momento. Si desea también rastrear las llamadas a las subrutinas y a las funciones, utilice el botón **Paso a paso detallado**.

En la depuración remota, si el método se ejecuta en el servidor, se llama al método padre después de que se ejecute la última línea del método hijo. Si el método padre se ejecuta en el lado remoto, el botón **Step Over** tiene el mismo efecto que el botón **No Trace**.

#### Paso a paso detallado

Cuando se ejecuta una línea que llama a otro método (subrutina o función), haga clic en este botón para mostrar el otro método y recorrerlo paso a paso.

El nuevo método se convierte en el método actual (superior) en la [Ventana cadena de llamada ](#call-chain-pane) de la ventana del depurador.

Cuando se ejecuta una línea que no llama a otro método, este botón tiene el mismo efecto que el botón **Ejectuar paso a paso**.

#### Abortar

Detiene la ejecución del método y vuelve al estado anterior al inicio de la ejecución del método:

* Cuando se rastrea un método formulario o un objeto que se ejecuta en respuesta a un evento: se detiene y vuelve al formulario.
* Cuando se rastrea un método que se ejecuta desde el entorno de la aplicación: se detiene y vuelve al entorno.

#### Detener y editar

Pausa la ejecución del método. El método que se está ejecutando cuando se presiona el botón **Abortar y Editar** se abre en el Editor de Código.
> **Consejo**: utilice este botón cuando sepa qué cambios son necesarios en su código, y el momento en que deben ser efectuados para proseguir con las pruebas de sus métodos. Una vez haya terminado con los cambios, vuelva a ejecutar el método.

#### Acción de edición

Pausa la ejecución del método. El método que se está ejecutando en el momento de presionar el botón Editar se abre en el Editor de código.

Si utiliza este botón para modificar un método, las modificaciones sólo serán efectivas la próxima vez que se ejecute.

> **Consejo:** utilice este botón cuando sepa qué cambios son necesarios en su código y cuando no interfieran con el resto del código a ejecutar o rastrear.

#### Parámetros Guardar

Guarda la configuración actual de la ventana del depurador y la convierte en la configuración por defecto. Esto incluye:

* el tamaño y la posición de la ventana
* la posición de las líneas de división y el contenido del área que evalúa las expresiones

Estos parámetros se almacenan en el proyecto.

Esta acción no está disponible en el modo de depuración remota (ver [Depuración desde máquinas remotas](./debugging-remote)).

## Ventana de expresión

The **Watch pane** is displayed in the top left corner of the Debugger window, below the Execution Control Tool Bar. Aquí un ejemplo:

![watch-pane](../assets/en/Debugging/watchPane.png)

> Este panel no está disponible en el modo de depuración remota.

The **Watch Pane** displays useful general information about the system, the 4D environment, and the execution environment.

The **Expression** column displays the names of the objects and expressions. The **Value** column displays their current corresponding values. Al hacer clic en cualquier valor de la parte derecha del panel, se puede modificar el valor del objeto, si está permitido para ese objeto.

At any point, you can drag and drop themes, theme sublists (if any), and theme items to the [Custom Watch Pane](#custom-watch-pane).

### Lista de expresiones

#### Line Objects

Este tema le permite seguir los valores de los objetos o expresiones:

* used in the line of code to be executed (the one marked with the program counter—the yellow arrow in the [Source Code Pane](#source-code-pane)),
* utilizado en la línea de código anterior

Since the previous line of code is the one that was just executed before, this theme therefore shows the objects or expressions of the current line before and after that the line was executed.  Digamos que ejecuta el siguiente método:

```4d
TRACE
$a:=1
$b:=a+1
$c:=a+b
```

1. A Debugger window opens with the program counter set to the line with `a:=1`. En este punto aparece el tema **Objetos Línea**:

    | $a | Indefinido |
    | -- | ---------- |
    |    |            |

    La variable `$a` aún no está inicializada, pero se muestra porque se utiliza en la línea que se va a ejecutar.

2. Haga clic en el botón **Step Over**. El contador del programa se pone ahora en la línea `b:=a+1`. En este punto, el tema muestra:

    | $a | 1          |
    | -- | ---------- |
    | $b | Indefinido |

    El valor de la variable `$a` es ahora 1. La variable `$b` aún no está inicializada, pero se muestra porque se utiliza en la línea que se va a ejecutar.

3. Haga clic en el botón **Step Over** nuevamente. El contador del programa ahora está en la línea con c:=a+b. At this point the Line Objects theme displays:

    | $c | Indefinido |
    | -- | ---------- |
    | $a | 1          |
    | $b | 2          |

    El valor de la variable `$b` es ahora 2. La variable `$c` aún no está inicializada, pero se muestra porque se utiliza en la línea que se va a ejecutar.

#### Variables

Este tema se compone de los siguientes subtemas:

| Subtema      | Descripción                                                              | ¿Se pueden modificar los valores? |
| ------------ | ------------------------------------------------------------------------ | --------------------------------- |
| Interproceso | Lista de variables de interproceso que se están utilizando en este punto | Sí                                |
| Proceso      | Lista de variables proceso utilizadas por el proceso actual              | Sí                                |
| Local        | Lista de variables locales utilizadas por el método rastreado            | Sí                                |
| Parámetros   | Lista de parámetros recibidos por el método                              | Sí                                |
| Self         | Puntero al objeto actual, cuando se rastrea un método Objeto             | No                                |

Arrays, like other variables, appear in the Interprocess, Process, and Local subthemes, depending on their scope. El depurador muestra los primeros 100 elementos. Inside the **Value** column, you can modify the values of array elements, but not the size of the arrays.

To display the variable types and their internal names, right click and check the **Show Types** option in the context menu:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

Aquí está el resultado:

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### Valores actuales del formulario

This theme contains the name of each dynamic object included in the current form, as well as the value of its associated variable:

![current-form-value](../assets/en/Debugging/current-form-values.png)

Some objects, such as list box arrays, can be presented as two distinct objects, the variable of the object itself and its data source.

#### Constantes

Al igual que la página de Constantes de la ventana del Explorador, este tema muestra las constantes predefinidas ofrecidas por 4D. Las expresiones de este tema no pueden ser modificadas.

#### Semáforos

Este tema lista los semáforos locales que se están configurando actualmente. For each semaphore, the Value column provides the name of the process that sets the semaphore. Las expresiones de este tema no pueden ser modificadas. Las expresiones de este tema no pueden ser modificadas.

#### Procesos

This theme lists the processes started since the beginning of the working session. The value column displays the time used and the current state for each process (i.e., Executing, Paused, and so on). Las expresiones de este tema no pueden ser modificadas.

#### Tablas y campos

Este tema lista las tablas y los campos en la base 4D. For each Table item, the Value column displays the size of the current selection for the current process as well as the number of **locked records**.

For each Field item, the Value column displays the value of the field for the current record (except picture and BLOB). Puede modificar los valores de los campos pero no la información de las tablas.

#### Conjuntos

This theme lists the sets defined in the current process (the one you're currently tracing) and the interprocess sets. For each set, the Value column displays the number of records and the table name. Las expresiones de este tema no pueden ser modificadas.

#### Selecciones temporales

This theme lists the named selections that are defined in the current process (the one you’re currently tracing); it also lists the interprocess named selections. For each named selection, the Value column displays the number of records and the table name. Las expresiones de este tema no pueden ser modificadas.

#### Información

This theme contains general information regarding database operation, such as the current default table (if one exists), physical, virtual, free and used memory space, query destination, etc.

#### Web

This theme displays information regarding the main Web server of the application (only available if the Web server is active):

* Archivo web a enviar: nombre del archivo web en espera de ser enviado (si lo hay)
* Web Cache Usage: number of pages present in Web cache as well as its use percentage
* Web Server Elapsed Time: duration of Web server use in hours:minutes:seconds format
* Web Hits Count: total number of HTTP requests received since Web server launch, as well as the instantaneous number of requests per second
* Number of active Web processes: number of active Web processes, all Web processes together

Las expresiones contenidas en este tema no pueden ser modificadas.

### Menú contextual de la ventana de expresión

Additional options are available from the contextual menu of the Watch pane.

![context-menu](../assets/en/Debugging/contextual-menu.png)

* **Contraer**: contracta todos los niveles de la lista jerárquica.
* **Desplegar todo**: despliega todos los niveles de la lista jerárquica.
* **Mostrar los tipos**: muestra el tipo de cada elemento (cuando es apropiado).
* **Mostrar números de campos y tablas**: muestra el número de cada tabla o campo. Es útil si trabaja con números de tabla o de campo, o con punteros utilizando comandos como `Table` o `Field`.
* **Mostrar los iconos**: muestra un icono que denota el tipo de objeto para cada objeto. Puede desactivar esta opción para acelerar la visualización, o simplemente porque prefiere utilizar sólo la opción **Mostrar los tipos**.
* **Tablas y campos ordenados**: ordena las tablas y campos por orden alfabético dentro de sus respectivas listas.
* **Mostrar los enteros en hexadecimal**: los números se suelen mostrar en notación decimal. Esta opción los muestra en notación hexadecimal. Nota: para introducir un valor numérico en hexadecimal, escriba 0x (cero + "x"), seguido de los dígitos hexadecimales.
* **Activar el seguimiento de la actividad**: activa el seguimiento de la actividad (control avanzado de la actividad interna de la aplicación) y muestra la información obtenida en los temas adicionales: **Programador**, **Web** y **Red**.

## Panel de la cadena de llamadas

Un método puede llamar a otros métodos o funciones clase, que pueden llamar a otros métodos o funciones. El panel de la Cadena de Llamadas le permite hacer un seguimiento de esa jerarquía.

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

Cada elemento del nivel principal es el nombre de un método o función clase. El elemento superior es el que está rastreando actualmente, el siguiente elemento de nivel principal es el nombre del llamador (el método o función que llamó al que está rastreando actualmente), el siguiente es el llamador del llamador, y así sucesivamente.

En la imagen de arriba:

* `thirdMethod` no ha recibido ningún parámetro
* `$0` actualmente está indefinido, ya que el método no ha asignado ningún valor a `$0` (porque aún no ha ejecutado esta asignación o porque el método es una subrutina y no una función)
* `secondMethod` ha recibido tres parámetros de `firstMethod`:
  * $1 es un puntero a la tabla `[Employee]`
  * $2 es un puntero al campo `ID` en la tabla  `[Employee]`
  * $3 es un parámetro alfanumérico cuyo valor es "Z"

Puede hacer doble clic en el nombre de cualquier método para mostrar su contenido en la [Ventana de código fuente](#source-code-pane).

Al hacer clic en el icono que aparece junto al nombre de un método o función, se amplían o reducen los parámetros y el resultado (si lo hay). Los valores aparecen en el lado derecho del panel. Al hacer clic en cualquier valor del lado derecho, se puede cambiar el valor de cualquier parámetro o resultado de la función.

Para mostrar el tipo de parámetro, marque la opción **Mostrar tipos** en el menú contextual:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

Después de desplegar la lista de parámetros, puede arrastrar y soltar los parámetros y los resultados de las funciones en el [Custom Watch Pane](#custom-watch-pane).

También puede utilizar el comando [Get call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) para recuperar la cadena de llamadas por programación.

## Panel de vigilancia personalizado

El panel de control personalizado es útil para evaluar expresiones. Es similar al [panel de control](#watch-pane), excepto que aquí usted decide qué expresiones se muestran. Todo tipo de expresión puede ser evaluada:

* campo
* variable
* pointer
* cálculo
* Comando 4D
* method
* y cualquier otra cosa que devuelva un valor

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

Puede evaluar toda expresión que pueda mostrarse en forma de texto. Esto no cubre los campos o variables Imagen y BLOB. Para mostrar el contenido de los BLOB, puede utilizar comandos BLOB, como [BLOB to text](https://doc.4d.com/4dv19/help/command/en/page555.html).

### Gestión de expresiones

Hay varias formas de añadir expresiones a la lista:

* Arrastrar y soltar un objeto o expresión desde el Panel de Vigilancia o el Panel de Cadena de Llamadas
* Seleccione una expresión en el [panel código fuente](#source-code-pane) y presione **ctrl+D**  (Windows) o **cmd+D** (macOS)
* Haga doble clic en algún lugar del espacio vacío del panel de control personalizado (añade una expresión con un nombre de marcador de posición que puede editar)

Puede introducir cualquier fórmula que devuelva un resultado.

Para editar una expresión, haga clic en ella para seleccionarla y, a continuación, vuelva a hacer clic o presione **Intro** en su teclado.

Para eliminar una expresión, haga clic en ella para seleccionarla y, a continuación, presione **Retroceso** o **Borrar** en su teclado.
> **Atención:** tenga cuidado cuando evalúe una expresión 4D que modifique el valor de una de las Variables del Sistema (por ejemplo, la variable OK) porque la ejecución del resto del método puede verse alterada.

### Menú contextual de la ventana de expresión

El menú contextual del panel de control personalizado permite acceder al editor de fórmulas de 4D y a otras opciones:

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

**Nueva expresión**: inserta una nueva expresión y muestra el editor de fórmulas de 4D.

![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)

Para más información sobre el editor de fórmulas, consulte el <a href="https://doc.4d.com/4Dv19/4D/19/4D-Design-Reference.100-5416591.en.html" target="_blank">manual de Diseño de 4D.</a>

* **Insertar comando**: acceso directo para insertar un comando 4D como una nueva expresión.
* **Borrar todo**: elimina todas las expresiones del panel de control personalizado.
* **Expresiones estándar**: copia la lista de expresiones del panel de control.

> Esta opción no está disponible en el modo de depuración remota (ver [Depuración desde máquinas remotas](https://doc.4d.com/4Dv19/4D/19/Debugging-from-Remote-Machines.300-5422483.en.html)).

* **Contraer todo/Expandir todo**: contrae o expande todas las listas jerárquicas.
* **Mostrar tipos**: muestra el tipo de cada elemento de la lista (cuando es apropiado).
* **Mostrar números de campos y tablas**: muestra el número de las tabla o de los **campos**. Es útil si trabaja con números de tablas o de campos, o con punteros utilizando los comandos `Table` o `Field`.
* **Mostrar iconos**: muestra un icono que denota el tipo de cada elemento.
* **Tablas y campos ordenados**: muestra la tabla y los campos en orden alfabético.
* **Mostrar números enteros en hexadecimal**: muestra los números en notación hexadecimal. Para introducir un valor numérico en hexadecimal, escriba 0x (cero + "x"), seguido de los dígitos hexadecimales.

## Panel de código fuente

El panel de código fuente muestra el código fuente del método o de la función que se está rastreando actualmente.

Esta área también le permite añadir o eliminar lod [** puntos de ruptura**](breakpoints.md).

### Tips

Al pasar el puntero sobre una expresión, para mostrr un mensaje de ayuda que indica:

* el tipo declarado de la expresión
* el valor actual de la expresión

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

Esto también funciona con las selecciones:

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### Añadir expresiones al panel de control personalizado

Puede copiar toda expresión seleccionada del panel de código fuente en el [Custom Watch Pane](#custom-watch-pane).

1. En el panel de código fuente, seleccione la expresión a evaluar
2. Haga una de las siguientes cosas:
    * Drag and drop the selected text to the Expression area of the Custom Watch Pane
    * Presione **Ctrl+D** (Windows) o **Cmd+D** (macOS)
    * Right-click the selected text **>** **Copy to Expression Pane**

### Program Counter

The yellow arrow in the left margin of the Source Code pane is called the program counter. Marca la siguiente línea a ejecutar.

By default, the program counter line (also called the running line) is highlighted in the debugger. You can customize the highlight color in the [Methods page of the Preferences](Preferences/methods.md).

#### Mover el contador del programa

For debugging purposes, you can move the program counter for the method at the top of the call chain (the method currently executing). Para ello, haga clic y arrastre la flecha amarilla a otra línea.

This only tells the debugger to pursue tracing or executing from a different point. No ejecuta líneas ni cancela su ejecución. Todos los ajustes, campos, variables, etc. actuales no se ven afectados.

Por ejemplo:

```4d
  // ...
 If(This condition)
    DO_SOMETHING
 Else
    DO_SOMETHING_ELSE
 End if
  // ...
```

Digamos que el contador del programa se define en la línea `If (This condition)`. Al hacer clic en el botón **Step over**, el contador del programa se mueve directamente a la línea `DO_SOMETHING_ELSE`. Para examinar los resultados de la línea `DO_SOMETHING`, puede mover el contador del programa a esa línea y ejecutarla.

### Menú contextual

El menú contextual de la Ventana de evaluación de los métodos da acceso a varias funciones útiles cuando se ejecutan métodos en el modo Rastreo:

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

* **Ir a definición**: va al lugar donde se define el objeto seleccionado. Este comando está disponible para:
  * *Métodos proyecto:* muestra el contenido de los métodos en una nueva ventana del Editor de Código
  * *Campos*: muestra las propiedades de los campos en el inspector de la ventana de estructura
  * *Tablas:* muestra las propiedades de la tabla en el inspector de la ventana de estructura
  * *Formularios:* muestra el formulario en el editor de formularios
  * *Variables* (locales, proceso, interproceso o parámetro $n): muestra la línea en el método actual o entre los métodos del compilador donde se declara la variable
* **Buscar Referencias** (también disponible en el Editor de Código): busca todos los objetos del proyecto (métodos y formularios) en los que se hace referencia al elemento actual del método. El elemento actual es el seleccionado o aquel en el que se encuentra el cursor. Este puede ser el nombre de un campo, variable, comando, cadena, etc. Los resultados de la búsqueda se muestran en una nueva ventana de resultados estándar.
* **Copiar**: copia estándar de la expresión seleccionada al portapapeles.
* **Copiar en la ventana de expresión**: copiar la expresión seleccionada en la Ventana de evaluación.
* **Ejecutar hasta el cursor**: ejecuta las instrucciones encontradas entre el contador del programa y la línea seleccionada del método (donde se encuentra el cursor).
* **Fijar siguiente instrucción**: mueve el contador del programa a la línea seleccionada sin ejecutar esta línea ni las intermedias. La línea designada sólo se ejecuta si el usuario hace clic en uno de los botones de ejecución.
* **Toggle Breakpoint** (also available in Code Editor): Alternately inserts or removes the breakpoint corresponding to the selected line. Esta función modifica el punto de interrupción de forma permanente: por ejemplo, si elimina un punto de interrupción en el depurador, ya no aparece en el método original.
* **Edit Breakpoint** (also available in Code Editor): Displays the Breakpoint Properties dialog box. Cualquier cambio realizado modifica el punto de interrupción de forma permanente.

### Buscar siguiente/anterior

Los atajos específicos permiten encontrar cadenas idénticas a la seleccionada:

* Para buscar las siguientes cadenas idénticas, presione **Ctrl+E** (Windows) o **Cmd+E** (macOS)
* Para buscar las cadenas idénticas anteriores, presione **Ctrl+Shift+E** (Windows) o **Cmd+E** (macOS)

La búsqueda se lleva a cabo sólo si se selecciona al menos un caracter en el panel de código fuente.

## Atajos

Esta sección lista todos los atajos disponibles en la ventana del depurador.

> La barra de herramientas también tiene [accesos directos](#tool-bar-buttons).

#### Ventana de evaluación & Subventana de evaluación personalizada

* Un **doble clic** en un elemento de la ventana de expresión para copiarlo en la ventana de evaluación
* Un **doble clic** en la ventana de evaluación crea una nueva expresión

#### Panel de código fuente

* Haga clic en el margen izquierdo para definiir o eliminar puntos de ruptura.
* **Alt+Mayús+clic** (Windows) o **Option+Mayús+clic** (macOS) define un punto de interrupción temporal.
* **Alt-Clic** (Windows) u **Opción-Clic** muestra la ventana de las propiedades del punto de interrupción para un punto de ruptura nuevo o existente.
* Una expresión u objeto seleccionado puede copiarse en la ventana de evaluación con sólo arrastrar y soltar.
* **Ctrl+D** (Windows) o **Comando+D** (macOS) en un texto seleccionado lo copia en la ventana de evaluación.
* **Ctrl+E** (Windows) o **Comando+E** (macOS) identifica los canales posteriores que son idénticos al canal seleccionado.
* **Ctrl+Mayús+E** (Windows) o **Comando+Mayús+E** (macOS) identifica los canales posteriores que son idénticos al canal seleccionado.

#### Todas las ventanas

* **Ctrl** + **+/-** (Windows) o **Comando** + **+/-** (macOS) aumenta o disminuye el tamaño de la fuente para una mejor legibilidad. The modified font size is also applied to the Code Editor and is stored in the Preferences.
* **Ctrl + \*** (Windows) o **Comando + \*** (macOS) fuerza la actualización del Panel de Control.
* Si no hay ningún elemento seleccionado en las ventanas, presione **Intro** para avanzar.
* Cuando se selecciona el valor de un elemento, utilice las teclas de flecha para navegar por la lista.
* Al editar un elemento, utilice las teclas de flecha para mover el cursor. Utilice Ctrl-A/X/C/V (Windows) o Comando-A/X/C/V (macOS) como accesos directos a los comandos del menú Seleccionar todo/Cortar/Copiar/Pegar del menú Edición.
