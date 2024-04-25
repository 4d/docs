---
id: debugger
title: Debugger
---

El depurador es útil cuando se necesita detectar errores o controlar la ejecución de métodos. Le permite recorrer su código lentamente y examinar la información. Este proceso se llama "rastreo".

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

## Llamada al depurador

Hay varias formas de conseguir que el depurador se muestre:

- Clicking the **Trace** button in the [Syntax Error window](basics.md#syntax-error-window)
- Using the [`TRACE`](https://doc.4d.com/4dv19/help/command/en/page157.html) command
- Clicking the **Debug** button in the Execute Method window or selecting **Run and debug...** button in the Code Editor
- Using **Alt+Shift+Right click** (Windows) or **Ctrl+Option+Cmd+Click** (macOS) while a method is executing, then selecting the process to trace in the pop-up menu:

![open-debugger](../assets/en/Debugging/openDebugger.png)

- Clicking the **Trace** button when a process is selected in the Process page of the Runtime Explorer.
- Añadiendo un punto de ruptura en la ventana del Editor de Código o en las páginas Break y Catch del explorador de ejecución.

Cuando se llama, la ventana del depurador ofrece el nombre del método o de la función de clase que se está rastreando en ese momento, y la acción que provoca la aparición inicial de la ventana del depurador. Por ejemplo, en la ventana del depurador arriba:

- _Clients_BuildLogo_ is the method being traced
- The debugger window appeared because it detected a call to the `C_PICTURE` command and this command was one of the commands to be caught

La visualización de una nueva ventana del depurador utiliza la misma configuración que la última ventana visualizada en la misma sesión. Si ejecuta varios procesos usuario, puede rastrearlos independientemente y tener una ventana de depuración abierta para cada proceso.

La ventana del depurador suele aparecer en la máquina donde se ejecuta el código. Con una aplicación mono usuario, siempre se muestra en la máquina que ejecuta la aplicación. Con una aplicación cliente/servidor se muestra:

- en el 4D remoto para el código que se ejecuta localmente
- on the server machine for code running on the server (for example, a method with the **execute on server** option).

> Si el servidor se ejecuta en modo sin interfaz, no se puede mostrar ninguna ventana de depuración en el servidor, es necesario utilizar el depurador remoto. See [Debugging from remote machines](./debugging-remote.md).

## Botones barra de herramientas

La barra de herramientas del depurador incluye varios botones, asociados a accesos directos por defecto:

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

> Los accesos directos predeterminados pueden personalizarse en la página Atajos del diálogo Preferencias.

#### Fin del rastreo

Detener el modo Seguimiento y reanudar el curso normal de la ejecución del método.

> **Shift** + **F5** or **Shift** + clicking the **No Trace** button resumes execution. También desactiva todas las llamadas a TRACE posteriores en el proceso actual.

#### Pasar por encima

Ejecuta la línea de método actual, indicada por el contador del programa (la flecha amarilla). El depurador pasa a la siguiente línea.

El botón Ejecutar no entra en las subrutinas y las funciones, sino que se queda al nivel del método que está rastreando en ese momento. If you want to also trace subroutines and functions calls, use the **Step Into** button.

En la depuración remota, si el método se ejecuta en el servidor, se llama al método padre después de que se ejecute la última línea del método hijo. If the parent method is executed on the remote side, the **Step Over** button has the same effect as the **No Trace** button.

#### Paso a paso detallado

Cuando se ejecuta una línea que llama a otro método (subrutina o función), haga clic en este botón para mostrar el otro método y recorrerlo paso a paso.

The new method becomes the current (top) method in the [Call Chain Pane](#call-chain-pane) of the Debugger window.

When executing a line that does not call another method, this button has the same effect as the **Step Over** button.

#### Abortar

Detiene la ejecución del método y vuelve al estado anterior al inicio de la ejecución del método:

- Cuando se rastrea un método formulario o un objeto que se ejecuta en respuesta a un evento: se detiene y vuelve al formulario.
- Cuando se rastrea un método que se ejecuta desde el entorno de la aplicación: se detiene y vuelve al entorno.

#### Detener y editar

Pausa la ejecución del método. The method that is executing when you click the **Abort and Edit** button opens in the Code Editor.

> **Tip**: Use this button when you know which changes are required in your code, and when these changes are required to pursue the testing of your methods. Una vez haya terminado con los cambios, vuelva a ejecutar el método.

#### Acción de edición

Pausa la ejecución del método. El método que se está ejecutando en el momento de presionar el botón Editar se abre en el Editor de código.

Si utiliza este botón para modificar un método, las modificaciones sólo serán efectivas la próxima vez que se ejecute.

> **Tip:** Use this button when you know which changes are required in your code and when they don't interfere with the rest of the code to be executed or traced.

#### Parámetros Guardar

Guarda la configuración actual de la ventana del depurador y la convierte en la configuración por defecto. Esto incluye:

- el tamaño y la posición de la ventana
- la posición de las líneas de división y el contenido del área que evalúa las expresiones

Estos parámetros se almacenan en el proyecto.

This action is not available in remote debugging mode (see [Debugging from Remote Machines](./debugging-remote)).

## Ventana de expresión

The **Watch pane** is displayed in the top left corner of the Debugger window, below the Execution Control Tool Bar. Aquí un ejemplo:

![watch-pane](../assets/en/Debugging/watchPane.png)

> Este panel no está disponible en el modo de depuración remota.

The **Watch Pane** displays useful general information about the system, the 4D environment, and the execution environment.

The **Expression** column displays the names of the objects and expressions. The **Value** column displays their current corresponding values. Al hacer clic en cualquier valor de la parte derecha del panel, se puede modificar el valor del objeto, si está permitido para ese objeto.

At any point, you can drag and drop themes, theme sublists (if any), and theme items to the [Custom Watch Pane](#custom-watch-pane).

### Lista de expresiones

#### Objetos línea

Este tema le permite seguir los valores de los objetos o expresiones:

- used in the line of code to be executed (the one marked with the program counter—the yellow arrow in the [Source Code Pane](#source-code-pane)),
- utilizado en la línea de código anterior

Como la línea de código anterior es la que se acaba de ejecutar antes, este tema muestra por tanto los objetos o expresiones de la línea actual antes y después de que se ejecutara la línea.  Digamos que ejecuta el siguiente método:

```4d
TRACE
$a:=1
$b:=a+1
$c:=a+b
```

1. A Debugger window opens with the program counter set to the line with `a:=1`. At this point the **Line Objects** theme displays:

   | $a | Indefinido |
   | -- | ---------- |

   The `$a` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

2. You click the **Step Over** button. The program counter is now set to the line `b:=a+1`. En este punto, el tema muestra:

   | $a | 1          |
   | -- | ---------- |
   | $b | Indefinido |

   The value of the `$a` variable is now 1. The `$b` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

3. You click the **Step Over** button again. El contador del programa ahora está en la línea con c:=a+b. En este punto aparece el tema Objetos Línea:

   | $c | Indefinido |
   | -- | ---------- |
   | $a | 1          |
   | $b | 2          |

   The value of the `$b` variable is now 2. The `$c` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

#### Variables

Este tema se compone de los siguientes subtemas:

| Subtema      | Descripción                                                              | ¿Se pueden modificar los valores? |
| ------------ | ------------------------------------------------------------------------ | --------------------------------- |
| Interproceso | Lista de variables de interproceso que se están utilizando en este punto | Sí                                |
| Proceso      | Lista de variables proceso utilizadas por el proceso actual              | Sí                                |
| Local        | Lista de variables locales utilizadas por el método rastreado            | Sí                                |
| Parámetros   | Lista de parámetros recibidos por el método                              | Sí                                |
| Self         | Puntero al objeto actual, cuando se rastrea un método Objeto             | No                                |

Los arrays, al igual que otras variables, aparecen en los subtemas Interproceso, Proceso y Local, dependiendo de su alcance. El depurador muestra los primeros 100 elementos. Inside the **Value** column, you can modify the values of array elements, but not the size of the arrays.

To display the variable types and their internal names, right click and check the **Show Types** option in the context menu:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

Aquí está el resultado:

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### Valores actuales del formulario

Este tema contiene el nombre de cada objeto dinámico incluido en el formulario actual, así como el valor de su variable asociada:

![current-form-value](../assets/en/Debugging/current-form-values.png)

Algunos objetos, como los arrays list box, pueden presentarse como dos objetos distintos, la variable del propio objeto y su fuente de datos.

#### Constantes

Al igual que la página de Constantes de la ventana del Explorador, este tema muestra las constantes predefinidas ofrecidas por 4D. Las expresiones de este tema no pueden ser modificadas.

#### Semáforos

Este tema lista los semáforos locales que se están configurando actualmente. Para cada semáforo, la columna Valor proporciona el nombre del proceso que define el semáforo. Las expresiones de este tema no pueden ser modificadas. The expressions from this theme cannot be modified.

#### Procesos

Este tema lista los procesos iniciados desde el comienzo de la sesión de trabajo. La columna de valores muestra el tiempo utilizado y el estado actual de cada proceso (es decir, en ejecución, en pausa, etc.). Las expresiones de este tema no pueden ser modificadas.

#### Tablas y campos

Este tema lista las tablas y los campos en la base 4D. For each Table item, the Value column displays the size of the current selection for the current process as well as the number of **locked records**.

Para cada elemento Campo, la columna Valor muestra el valor del campo para el registro actual (excepto imagen y BLOB). Puede modificar los valores de los campos pero no la información de las tablas.

#### Conjuntos

Este tema lista los conjuntos definidos en el proceso actual (el que está rastreando en ese momento) y los conjuntos interprocesos. Para cada conjunto, la columna Valor muestra el número de registros y el nombre de la tabla. Las expresiones de este tema no pueden ser modificadas.

#### Selecciones temporales

Este tema lista las selecciones temporales que están definidas en el proceso actual (el que está rastreando en ese momento); también lista las selecciones temporales entre procesos. Para cada selección temporal, la columna Valor muestra el número de registros y el nombre de la tabla. Las expresiones de este tema no pueden ser modificadas.

#### Información

Este tema contiene información general sobre el funcionamiento de la base de datos, como la tabla por defecto actual (si existe), el espacio de memoria físico, virtual, libre y utilizado, el destino de las consultas, etc.

#### Web

Este tema muestra información relativa al servidor Web principal de la aplicación (sólo disponible si el servidor Web está activo):

- Archivo web a enviar: nombre del archivo web en espera de ser enviado (si lo hay)
- Uso de la caché web: número de páginas presentes en la caché web, así como su porcentaje de uso
- Tiempo transcurrido del servidor web: duración del uso del servidor web en formato horas:minutos:segundos
- Conteo de accesos a la Web: número total de peticiones HTTP recibidas desde la puesta en marcha del servidor Web, así como el número instantáneo de peticiones por segundo
- Número de procesos Web activos: número de procesos Web activos, todos los procesos Web juntos

Las expresiones contenidas en este tema no pueden ser modificadas.

### Menú contextual de la ventana de expresión

Hay opciones adicionales disponibles en el menú contextual de la ventana de expresión.

![context-menu](../assets/en/Debugging/contextual-menu.png)

- **Collapse All**: Collapses all levels of the hierarchical list.
- **Expand All**: Expand all levels of the hierarchical list.
- **Show Types**: Displays the type of each item (when appropriate).
- **Show Field and Table Numbers**: Displays the number of each table or field. Useful if you work with table or field numbers, or with pointers using commands such as `Table` or `Field`.
- **Show Icons**: Displays an icon denoting the object type for each object. You can turn this option off in order to speed up the display, or just because you prefer to use only the **Show Types** option.
- **Sorted Tables and Fields**: Sorts the tables and fields in alphabetical order within their respective lists.
- **Show Integers in Hexadecimal**: Numbers are usually displayed in decimal notation. Esta opción los muestra en notación hexadecimal. Nota: para introducir un valor numérico en hexadecimal, escriba 0x (cero + "x"), seguido de los dígitos hexadecimales.
- **Enable activity monitoring**: Activates the monitoring of activity (advanced checking of internal activity of the application) and displays the information retrieved in the additional themes: **Scheduler**, **Web** and **Network**.

## Panel de la cadena de llamadas

Un método puede llamar a otros métodos o funciones clase, que pueden llamar a otros métodos o funciones. El panel de la Cadena de Llamadas le permite hacer un seguimiento de esa jerarquía.

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

Cada elemento del nivel principal es el nombre de un método o función clase. El elemento superior es el que está rastreando actualmente, el siguiente elemento de nivel principal es el nombre del llamador (el método o función que llamó al que está rastreando actualmente), el siguiente es el llamador del llamador, y así sucesivamente.

En la imagen de arriba:

- `thirdMethod` has not received any parameter
- `$0` is currently undefined, as the method did not assign any value to `$0` (because it has not executed this assignment yet or because the method is a subroutine and not a function)
- `secondMethod` has received three parameters from `firstMethod`:
  - $1 is a pointer to the `[Employee]` table
  - $2 is a pointer to the `ID` field in the  `[Employee]` table
  - $3 es un parámetro alfanumérico cuyo valor es "Z"

You can double-click the name of any method to display its contents in the [Source Code Pane](#source-code-pane).

Al hacer clic en el icono que aparece junto al nombre de un método o función, se amplían o reducen los parámetros y el resultado (si lo hay). Los valores aparecen en el lado derecho del panel. Al hacer clic en cualquier valor del lado derecho, se puede cambiar el valor de cualquier parámetro o resultado de la función.

To display the parameter type, check the **Show types** option in the contextual menu:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

After you deploy the list of parameters, you can drag and drop parameters and function results to the [Custom Watch Pane](#custom-watch-pane).

You can also use the [Get call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) command to retrieve the call chain programmatically.

## Panel de vigilancia personalizado

El panel de control personalizado es útil para evaluar expresiones. It is similar to the [Watch Pane](#watch-pane), except here you decide which expressions are displayed. Todo tipo de expresión puede ser evaluada:

- campo
- variable
- pointer
- cálculo
- Comando 4D
- method
- y cualquier otra cosa que devuelva un valor

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

Puede evaluar toda expresión que pueda mostrarse en forma de texto. Esto no cubre los campos o variables Imagen y BLOB. To display BLOB contents, you can use BLOB commands, such as [BLOB to text](https://doc.4d.com/4dv19/help/command/en/page555.html).

### Gestión de expresiones

Hay varias formas de añadir expresiones a la lista:

- Arrastrar y soltar un objeto o expresión desde el Panel de Vigilancia o el Panel de Cadena de Llamadas
- Select an expression in the [Source Code pane](#source-code-pane) and press **ctrl+D**  (Windows) or **cmd+D** (macOS)
- Haga doble clic en algún lugar del espacio vacío del panel de control personalizado (añade una expresión con un nombre de marcador de posición que puede editar)

Puede introducir cualquier fórmula que devuelva un resultado.

To edit an expression, click on it to select it, then click again or press **Enter** on your keyboard.

To delete an expression, click on it to select it, then press **Backspace** or **Delete** on your keyboard.

> **Warning:** Be careful when you evaluate a 4D expression modifying the value of one of the System Variables (for instance, the OK variable) because the execution of the rest of the method may be altered.

### Menú contextual de la ventana de expresión

El menú contextual del panel de control personalizado permite acceder al editor de fórmulas de 4D y a otras opciones:

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

**New Expression**: This inserts a new expression and displays the 4D Formula Editor.

![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)

For more information on the Formula Editor, see the <a href="https://doc.4d.com/4Dv19/4D/19/4D-Design-Reference.100-5416591.en.html" target="_blank">4D Design Reference manual.</a>

- **Insert Command**: Shortcut for inserting a 4D command as a new expression.
- **Delete All**: Removes all expressions from the Custom Watch Pane.
- **Standard Expressions**: Copies the Watch Pane's list of expressions.

> This option is not available in remote debugging mode (see [Debugging from Remote Machines](https://doc.4d.com/4Dv19/4D/19/Debugging-from-Remote-Machines.300-5422483.en.html)).

- **Collapse All/Expand All**: Collapses or Expands all the hierarchical lists.
- **Show Types**: Displays the type of each item in the list (when appropriate).
- **Show Field and Table Numbers**: Displays the number of each table or field of the **Fields**. Useful if you work with tables, field numbers or pointers using the commands such as `Table` or `Field`.
- **Show Icons**: Displays an icon denoting the type of each item.
- **Sorted Tables and Fields**: Displays the table and fields in alphabetical order.
- **Show Integers in Hexadecimal**: Displays numbers using hexadecimal notation. Para introducir un valor numérico en hexadecimal, escriba 0x (cero + "x"), seguido de los dígitos hexadecimales.

## Panel de código fuente

El panel de código fuente muestra el código fuente del método o de la función que se está rastreando actualmente.

This area also allows you to add or remove [**break points**](breakpoints.md).

### Tips

Al pasar el puntero sobre una expresión, para mostrr un mensaje de ayuda que indica:

- el tipo declarado de la expresión
- el valor actual de la expresión

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

Esto también funciona con las selecciones:

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### Añadir expresiones al panel de control personalizado

You can copy any selected expression from the Source Code Pane to the [Custom Watch Pane](#custom-watch-pane).

1. En el panel de código fuente, seleccione la expresión a evaluar
2. Haga una de las siguientes cosas:
   - Arrastre y suelte el texto seleccionado en el área Expresión del panel de expresión personalizado
   - Press **Ctrl+D** (Windows) or **Cmd+D** (macOS)
   - Right-click the selected text **>** **Copy to Expression Pane**

### Contador del programa

La flecha amarilla en el margen izquierdo del panel del Código Fuente se llama el contador de programa. Marca la siguiente línea a ejecutar.

Por defecto, la línea del contador de programa (también llamada línea de ejecución) aparece resaltada en el depurador. You can customize the highlight color in the [Methods page of the Preferences](Preferences/methods.md).

#### Mover el contador del programa

Para fines de depuración, puede mover el contador de programa del método en la parte superior de la cadena de llamada (el método que se está ejecutando actualmente). Para ello, haga clic y arrastre la flecha amarilla a otra línea.

Esto sólo indica al depurador que continúe rastreando o ejecutando desde un punto diferente. No ejecuta líneas ni cancela su ejecución. Todos los ajustes, campos, variables, etc. actuales no se ven afectados.

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

Say the program counter is set to the line `If (This condition)`.
When you click the **Step over** button, the program counter moves directly to the `DO_SOMETHING_ELSE` line.
To examine the results of the `DO_SOMETHING` line, you can move the program counter to that line and execute it.

### Menú contextual

El menú contextual de la Ventana de evaluación de los métodos da acceso a varias funciones útiles cuando se ejecutan métodos en el modo Rastreo:

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

- **Goto Definition**: Goes to where the selected object is defined. Este comando está disponible para:
  - _Project methods:_ displays method contents in a new window of the Code Editor
  - _Fields:_ Displays field properties in the inspector of the Structure window
  - _Tables:_ Displays table properties in the inspector of the Structure window
  - _Forms:_ Displays form in the Form editor
  - _Variables_ (local, process, interprocess or $n parameter): displays the line in the current method or among the compiler methods where the variable is declared
- **Search References** (also available in Code Editor): Searches all project objects (methods and forms) in which the current element of the method is referenced. El elemento actual es el seleccionado o aquel en el que se encuentra el cursor. Este puede ser el nombre de un campo, variable, comando, cadena, etc. Los resultados de la búsqueda se muestran en una nueva ventana de resultados estándar.
- **Copy**: Standard copy of the selected expression to the pasteboard.
- **Copy to Expression Pane**: Copy the selected expression to the Custom Watch Pane.
- **Run to Cursor**:Executes statements found between the program counter and the selected line of the method (where the cursor is found).
- **Set Next Statement**:Moves program counter to the selected line without executing this line or any intermediate ones. La línea designada sólo se ejecuta si el usuario hace clic en uno de los botones de ejecución.
- **Toggle Breakpoint** (also available in Code Editor): Alternately inserts or removes the breakpoint corresponding to the selected line. Esta función modifica el punto de interrupción de forma permanente: por ejemplo, si elimina un punto de interrupción en el depurador, ya no aparece en el método original.
- **Edit Breakpoint** (also available in Code Editor): Displays the Breakpoint Properties dialog box. Cualquier cambio realizado modifica el punto de interrupción de forma permanente.

### Buscar siguiente/anterior

Los atajos específicos permiten encontrar cadenas idénticas a la seleccionada:

- To search for the next identical strings, press **Ctrl+E** (Windows) or **Cmd+E** (macOS)
- To search for the previous identical strings, press **Ctrl+Shift+E** (Windows) or **Cmd+Shift+E** (macOS)

La búsqueda se lleva a cabo sólo si se selecciona al menos un caracter en el panel de código fuente.

## Atajos

Esta sección lista todos los atajos disponibles en la ventana del depurador.

> The tool bar also has [shortcuts](#tool-bar-buttons).

#### Watch Pane & Custom Watch Pane

- **Double-click** an item in the Watch Pane to copy it to the Custom Watch Pane
- **Double-Click** in the Custom Watch Pane to create a new expression

#### Panel de código fuente

- Haga clic en el margen izquierdo para definiir o eliminar puntos de ruptura.
- **Alt+Shift+Click** (Windows) or **Option+Shift+Click** (macOS) sets a temporary break point.
- **Alt-Click** (Windows) or **Option-Click** displays the Edit Break window for a new or existing break point.
- Una expresión u objeto seleccionado puede copiarse en la ventana de evaluación con sólo arrastrar y soltar.
- **Ctrl+D** (Windows) or **Cmd+D** (macOS) key combinations copy the selected text to the Custom Watch Pane.
- **Ctrl+E** (Windows) or **Cmd+E** (macOS) key combinations find the next strings identical to the one selected.
- **Ctrl+Shift+E** (Windows) or **Cmd+Shift+E** (macOS) key combinations find the previous strings identical to the one selected.

#### Todas las ventanas

- **Ctrl** + **+/-** (Windows) or **Command** + **+/-** (macOS) increases or decreases the font size for a better readability. El tamaño de fuente modificado también se aplica al Editor de código y se almacena en las Preferencias.
- **Ctrl + \*** (Windows) or **Command + \*** (macOS) forces the updating of the Watch Pane.
- When no item is selected in any pane, press **Enter** to step over.
- Cuando se selecciona el valor de un elemento, utilice las teclas de flecha para navegar por la lista.
- Al editar un elemento, utilice las teclas de flecha para mover el cursor. Utilice Ctrl-A/X/C/V (Windows) o Comando-A/X/C/V (macOS) como accesos directos a los comandos del menú Seleccionar todo/Cortar/Copiar/Pegar del menú Edición.
