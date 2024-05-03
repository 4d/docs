---
id: basics
title: Depuración
---

Los errores son comunes. Sería inusual escribir un número importante de líneas de código sin generar errores. Por el contrario, tratar y/o corregir errores también es normal.

El entorno de desarrollo 4D ofrece varias herramientas de depuración para todo tipo de errores.

## Tipos de error

### Errores de digitación

Los errores de escritura son detectados por el Editor de código. Se muestran en rojo y se ofrece información adicional en la parte inferior de la ventana. He aquí un error de escritura:

![break-point](../assets/en/Debugging/typing-error.png)

Estos errores de escritura suelen causar errores de sintaxis (en la imagen anterior, el nombre de la tabla es desconocido). Se obtiene la descripción del error cuando se valida la línea de código. Cuando esto ocurre, corrija el error de digitación y escriba Enter para validar la solución.

### Errores de sintaxis

Algunos errores sólo se pueden capturar cuando se ejecuta el método. The [Syntax Error Window](#syntax-error-window) appears when an error occurs during code execution. Por ejemplo:

![syntax-error](../assets/en/Debugging/syntax-error.png)

Expand the **Details** area to display the last error and its number.

### Errores del entorno

Ocasionalmente, puede que no haya suficiente memoria para crear un BLOB. O, cuando acceda a un documento en el disco, el documento puede no existir o ya estar abierto por otra aplicación. Estos errores en el entorno no se producen directamente por su código o por la forma en que lo escribe. Most of the time, these errors are easy to treat with an [error catching method](Concepts/error-handling.md) installed using the `ON ERR CALL` command.

### Errores de diseño o de lógica

Estos son generalmente los tipos de errores más difíciles de encontrar. A excepción de los errores de digitación, todos los tipos de errores listados arriba están cubiertos hasta cierto punto por la expresión "error de diseño o de lógica". Use the [Debugger](debugger.md) to detect them. Por ejemplo:

- A _syntax error_ may occur when you try to use a variable that is not yet initialized.
- An _environmental error_ can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.

Los errores de diseño o de lógica también incluyen situaciones como:

- A record is not properly updated because, while calling `SAVE RECORD`, you forgot to first test whether or not the record was locked.
- Un método no hace exactamente lo que espera, ya que la presencia de un parámetro opcional no está probada.

A veces el código que muestra el error puede ser diferente al código que en realidad es el origen del problema.

### Errores de ejecución

En modo Aplicación, puede obtener errores que no ve en modo interpretado. Aquí un ejemplo:

![runtime-error](../assets/en/Debugging/runtimeError.png)

Para encontrar rápidamente el origen del problema, vuelva a abrir la versión interpretada del archivo de estructura, abra el método y vaya a la línea correspondiente.

## Ventana de error de sintaxis

La ventana de error de sintaxis aparece automáticamente cuando se interrumpe la ejecución de un método. Esto puede ocurrir cuando:

- un error impide que el código siga ejecutándose
- the method produces a false assertion (see the `ASSERT` command)

![syntax-error](../assets/en/Debugging/syntax-error.png)

El área de texto superior muestra un mensaje describiendo el error. El área de texto inferior muestra la línea que se estaba ejecutando cuando ocurrió el error; el área donde ocurrió el error se resalta. La sección Detalles extendida contiene la "pila" de errores relacionados con el proceso.

La ventana de error de sintaxis propone varias opciones:

- **Edit**: Stops all method execution. 4D cambia al entorno de Diseño y el método con el error se abre en el editor de Código, permitiéndole corregirlo. Utilice esta opción cuando reconozca inmediatamente el error y pueda arreglarlo sin más investigación.

- **Trace**: Enters Trace/Debugger mode. The [Debugger](debugger.md) window is displayed. If the current line has only executed partially, you may have to click the **Trace** button several times.

- **Continue**: Execution continues. La línea con el error puede ser parcialmente ejecutada, dependiendo de donde se encuentre el error. Continúe con precaución: el error puede impedir que el resto de su método se ejecute correctamente. We recommend clicking **Continue** only if the error is in a trivial call (such as `SET WINDOW TITLE`) that does not prevent executing and testing the rest of your code.

> Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the **Continue** button into an **Ignore** button. Hold down **Alt** (Windows) or **Option** (macOS) key and click the **Continue** button the first time it appears. The button label changes to **Ignore** if the dialog is called again for the same error.

- **Abort**: Stops method execution and returns to the state before the method started executing:

  - Si un método formulario o método objeto se está ejecutando en respuesta a un evento, se detiene y se vuelve al formulario.
  - Si el método se está ejecutando desde dentro del entorno de la aplicación, volverá a ese entorno.

- **Copy**: Copies the debugging information into the clipboard. La información describe el entorno interno del error (número, componente interno, etc.). Está formateado como texto tabulado.

- **Save...**: Saves the contents of the syntax error window and the call chain in a `.txt` file.

## Debugger

A common beginner mistake in dealing with error detection is to click **Abort** in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. ¡No lo haga! You will save plenty of time and energy by always using the **Debugger**.

El depurador le permite pasar lentamente por los métodos. Muestra toda la información que necesita para entender por qué ha ocurrido un error. Una vez que tiene esta información, usted sabe cómo arreglar el error.

Otra razón para usar el Depurador es el desarrollo del código. A veces se puede escribir un algoritmo que es más complejo de lo habitual. A pesar de todos los sentimientos de cumplimiento, no puede estar totalmente seguro de que su codificación sea 100% correcta. Instead of running it "blind", you can use the `TRACE` command at the beginning of your code, then execute it step by step to keep an eye on what happens.

## Rupturas

En el proceso de depuración, puede que necesite saltar el seguimiento de algunas partes del código hasta una línea determinada. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.

These needs are covered by **breakpoints** and **command catching** features. Pueden configurarse desde el editor de código, el depurador o el explorador de ejecución.
