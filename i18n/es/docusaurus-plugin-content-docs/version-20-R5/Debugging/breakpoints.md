---
id: breakpoints
title: Puntos de interrupción y punto de interrupción en comandos
---

## Generalidades

Los puntos de interrupción y los comandos de captura son técnicas de depuración muy eficaces. Ambas tienen el mismo efecto: detienen la ejecución del código (y muestran la ventana del depurador si no está ya visible) en una etapa deseada.

Se definenen los puntos de interrupción en cualquier línea de código en la que se desee detener la ejecución. Puede asociar una condición al punto de ruptura.

Los puntos de interrupción de comandos le permiten comenzar a rastrear la ejecución de un proceso tan pronto como un comando es llamado por ese proceso.

## Puntos de interrupción

Para crear un punto de interrupción, haga clic en el margen izquierdo de la ventana de evaluación del código fuente en el depurador o en el editor de código.

In the following example, a break point (the red bullet) has been set, in the debugger, on the line `If ($in.dataClass#Null)`:

![break-point](../assets/en/Debugging/break.png)

In the above example, clicking the [**No Trace**](./debugger.md/#no-trace) button resumes normal execution up to the line marked with the break point. Esa línea no se ejecuta por sí misma, sino que se vuelve al modo de rastreo. Setting a break point beyond the program counter and clicking the **No Trace** button allows you to skip portions of the method being traced.

Para eliminar un punto de ruptura, haga clic en la viñeta correspondiente.

### Propiedades de los puntos de interrupción

Puede modificar el comportamiento de un punto de interrupción utilizando la ventana Propiedades de puntos de interrupción:

![breakpoint-properties](../assets/en/Debugging/breakpoint-properties.png)

This window is available from the Code Editor or the [Source Code Pane](debugger.md#source-code-pane). Puede:

- right-click a line and select **Edit Breakpoint** in the contextual menu, or
- `Alt+click` (Windows) or `Option+click` (macOS) in the left margin.

Si ya existe un punto de interrupción, la ventana se muestra para ese punto de interrupción. En caso contrario, se crea un punto de ruptura y se muestra la ventana para el punto de ruptura recién creado.

A continuación se describen las propiedades:

- **Location**: indicates the name of the method and the line number attached to the breakpoint.
- **Break when following expression is true**: You can create **conditional breakpoints** by entering a 4D formula that returns `True` or `False`. For example, insert `Records in selection(\[aTable])=0` to make sure the break occurs only if there no record selected for the table \[aTable]. Breakpoint conditions are available in the **Condition** column of the [Break list](#break-list).
- **Number of times to skip before breaking**: You can attach a breakpoint to a line located in a loop structure (While, Repeat, or For) or located in subroutine or function called from within a loop.
- **Breakpoint is disabled**: If you currently do not need a break point, but might need it later, you can temporarily disable it. Un punto de interrupción desactivado aparece como un guión (-) en lugar de una viñeta (-)|

### Puntos de interrupción en la depuración remota

La lista de puntos de interrupción se almacena localmente. En el modo de depuración remota, si el depurador conectado es un 4D remoto, la lista de puntos de interrupción remota sustituye temporalmente a la lista de puntos de interrupción del servidor durante la sesión de depuración.

La lista de puntos de interrupción del servidor se restablece automáticamente si vuelve a ser el depurador asociado.

### Lista de rupturas

La lista de puntos de ruptura es una página del Explorador de ejecución que le permite gestionar los puntos de ruptura creados en la ventana del depurador o en el editor de código. For more information on the Runtime Explorer, see its dedicated page in [the Design reference manual](https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html).

Para abrir la página de la lista de puntos de ruptura:

1. From the **Run menu**, click **Runtime Explorer...**

2. Click the **Break** tab to display the Break list:

![break-list-runtime-explorer](../assets/en/Debugging/break-list.png)

Utilizando esta ventana, puede:

- Set conditions for breakpoints in the **Conditions** column
- Activar o desactivar los puntos de interrupción haciendo clic en las viñetas del margen. Los puntos de interrupción desactivados muestran balas transparentes
- Delete breakpoints by pressing the `Delete` or `Backspace` key, or click on the **Delete** button below the list.
- Abra los métodos donde se encuentran los puntos de interrupción haciendo doble clic en cualquier línea de la lista

No puede añadir nuevos puntos de interrupción desde esta ventana. Los puntos de interrupción sólo pueden crearse desde la ventana del depurador o del editor de código.

## Puntos de interrupción en comandos

The **Catch** tab of the Runtime Explorer lets you add additional breaks to your code by catching calls to 4D commands. A diferencia de un punto de interrupción, que se encuentra en un método particular del proyecto (y por lo tanto desencadena una excepción de rastreo sólo cuando se alcanza), el alcance de la captura de un comando incluye todos los procesos que ejecutan código 4D y llaman a ese comando.

Los puntos de interrupción en un comando son una forma conveniente de rastrear grandes porciones de código sin tener que definir puntos de interrupción en lugares arbitrarios. For example, if a record that should not be deleted is deleted after you've executed one or several processes, you can try to reduce the field of your investigation by catching commands such as `DELETE RECORD` and `DELETE SELECTION`. Cada vez que se llama a estos comandos, se puede verificar si el registro en cuestión ha sido eliminado, y así aislar la parte defectuosa del código.

Los puntos de interrupción y los comandos de captura se pueden utilizar combinados.

Para abrir la página de los puntos de interrupción en comandos:

1. Choose **Run** > **Runtime explorer...** to open the Runtime Explorer.

2. Click **Catch** to display the Caught Commands List:

![runtime-explorer-window](../assets/en/Debugging/catch-command.png)

Esta página lista los puntos de interrupción en el comando durante la ejecución. Se compone de dos columnas:

- La columna de la izquierda muestra el estado de activación/desactivación del punto de interrupción en el comando, seguido del nombre del comando
- La columna de la derecha muestra la condición asociada a punto de interrupción en el comando, si lo hay

Para añadir un punto de interrupción en el comando:

1. Click on the **Add New Catch** button (in the shape of a +) located below the list. A new entry is added to the list with the `ALERT` command as default
2. Click the **ALERT** label, type the name of the command you want to catch, then press **Enter**.

Para activar o desactivar un punto de interrupción en un comando, haga clic en la viñeta (-) delante de la etiqueta del comando.
La bala es transparente cuando el comando está desactivado.

> La desactivación de un punto de interrupción de un comando tiene casi el mismo efecto que suprimirlo. Durante la ejecución, el depurador no pasa casi nada de tiempo en la entrada. La ventaja de desactivar una entrada es que no tiene que volver a crearla cuando la necesite de nuevo.

Para eliminar un punto de interrupción en el comando:

1. Seleccione un comando en la lista.
2. Press **Backspace** or **Delete** on your keyboard or click on the **Delete** button beneath the list (**Delete All** removes all commands in the list).

### Definir una condición para un punto de interrupción en un comando

1. Haga clic en la entrada en la columna derecha
2. Introduzca una fórmula 4D (expresión, llamada de comando o método de proyecto) que devuelva un valor booleano.

> Para eliminar una condición, borre su fórmula.

La adición de condiciones le permite detener la ejecución cuando el comando es invocado sólo si la condición se cumple. For example, if you associate the condition `Records in selection(\[Emp]>10)` with the break point on the `DELETE SELECTION` command, the code will not be stopped during execution of the `DELETE SELECTION` command if the current selection of the \[Emp] table only contains 9 records (or less).

La adición de condiciones a los puntos de interrupción de los comandos ralentiza la ejecución, porque la condición tiene que ser evaluada cada vez que se produce una excepción. Por otra parte, añadir condiciones acelera el proceso de depuración, ya que 4D omite automáticamente las ocurrencias que no coinciden con las condiciones.
