---
id: basics
title: Básicos
---

Los errores son comunes. Sería inusual escribir un número importante de líneas de código sin generar errores. Por el contrario, tratar y/o corregir errores también es normal.

El entorno de desarrollo 4D ofrece varias herramientas de depuración para todo tipo de errores.

## Tipos de error

### Errores de digitación

Los errores de escritura son detectados por el Editor de código. Se muestran en rojo y se ofrece información adicional en la parte inferior de la ventana. He aquí un error de escritura:

![punto de ruptura](../assets/en/Debugging/typing-error.png)

Estos errores de escritura suelen causar errores de sintaxis (en la imagen anterior, el nombre de la tabla es desconocido). Se obtiene la descripción del error cuando se valida la línea de código. Cuando esto ocurre, corrija el error de digitación y escriba Enter para validar la solución.

### Errores de sintaxis

Algunos errores sólo se pueden capturar cuando se ejecuta el método. La [ventana de error de sintáxis](#syntax-error-window) aparece cuando ocurre un error durante la ejecución del código. Por ejemplo:

![syntax-error](../assets/en/Debugging/syntax-error.png)

Expanda el área **Detalles** para mostrar el último error y su número.

### Errores del entorno

Ocasionalmente, puede que no haya suficiente memoria para crear un BLOB. O, cuando acceda a un documento en el disco, el documento puede no existir o ya estar abierto por otra aplicación. Estos errores en el entorno no se producen directamente por su código o por la forma en que lo escribe. La mayoría de las veces estos errores son fáciles de tratar con un [método de captura de errores](Concepts/error-handling.md) instalado utilizando el comando `ON ERR CALL`.

### Errores de diseño o de lógica

Estos son generalmente los tipos de errores más difíciles de encontrar. A excepción de los errores de digitación, todos los tipos de errores listados arriba están cubiertos hasta cierto punto por la expresión "error de diseño o de lógica". Utilice el [depurador ](debugger.md) para detectarlos. Por ejemplo:

- Puede ocurrir un *error de sintaxis* cuando intenta utilizar una variable que aún no está inicializada.
- Puede ocurrir un *error de entorno* cuando intenta abrir un documento, porque el nombre de ese documento es recibido por una subrutina que no obtuvo el valor correcto como parámetro.

Los errores de diseño o de lógica también incluyen situaciones como:

- Un registro no está correctamente actualizado porque, mientras se llama a `SAVE RECORD`, se olvidó de la primera prueba de si el registro estaba bloqueado o no.
- Un método no hace exactamente lo que espera, ya que la presencia de un parámetro opcional no está probada.

A veces el código que muestra el error puede ser diferente al código que en realidad es el origen del problema.

### Errores de ejecución

En modo Aplicación, puede obtener errores que no ve en modo interpretado. Aquí un ejemplo:

![runtime-error](../assets/en/Debugging/runtimeError.png)

Para encontrar rápidamente el origen del problema, vuelva a abrir la versión interpretada del archivo de estructura, abra el método y vaya a la línea correspondiente.

## Ventana de error de sintaxis

La ventana de error de sintaxis aparece automáticamente cuando se interrumpe la ejecución de un método. Esto puede ocurrir cuando:

- un error impide que el código siga ejecutándose
- el método produce una afirmación falsa (ver el comando `ASSERT`)

![syntax-error](../assets/en/Debugging/syntax-error.png)

El área de texto superior muestra un mensaje describiendo el error. El área de texto inferior muestra la línea que se estaba ejecutando cuando ocurrió el error; el área donde ocurrió el error se resalta. La sección Detalles extendida contiene la "pila" de errores relacionados con el proceso.

La ventana de error de sintaxis propone varias opciones:

- **Modificar**: detiene la ejecución de todos los métodos. 4D cambia al entorno de Diseño y el método con el error se abre en el editor de Código, permitiéndole corregirlo. Utilice esta opción cuando reconozca inmediatamente el error y pueda arreglarlo sin más investigación.

- **Rastrear**: entra en modo Rastrear/Depurador. Se muestra la ventana del [Depurador](debugger.md). Si la línea actual solo se ha ejecutado parcialmente, es posible que tenga que hacer clic en el botón **rastrear** varias veces.

- **Continuar**: la ejecución continua. La línea con el error puede ser parcialmente ejecutada, dependiendo de donde se encuentre el error. Continúe con precaución: el error puede impedir que el resto de su método se ejecute correctamente. Recomendamos hacer clic en **Continuar** sólo si el error está en una llamada trivial (como `SET WINDOW TITLE`) que no impide ejecutar y probar el resto de su código.

> Consejo: para ignorar un error que ocurre repetidamente (por ejemplo, en bucles), puede convertir el botón **Continuar** en un botón **Ignorar**. Mantenga presionada la tecla **Alt** (Windows) u **Opción** (macOS) y haga clic en el botón **Continuar** la primera vez que aparece. La etiqueta del botón cambia a **Ignorar** si el diálogo es llamado de nuevo por el mismo error.

- **Abandonar**: detiene la ejecución del método y devuelve al estado antes del inicio de la ejecución del método:

  - Si un método formulario o método objeto se está ejecutando en respuesta a un evento, se detiene y se vuelve al formulario.
  - Si el método se está ejecutando desde dentro del entorno de la aplicación, volverá a ese entorno.

- **Copiar**: copia la información de depuración en el portapapeles. La información describe el entorno interno del error (número, componente interno, etc.). Está formateado como texto tabulado.

- **Guardar...**: guarda el contenido de la ventana de error de sintaxis y la cadena de llamadas en un archivo `.txt`.

## Debugger

Un error común de los principiantes al tratar con la detección de errores es hacer clic en **Abandonar** en la ventana de error de sintaxis, volver al editor de código, y tratar de averiguar lo que está pasando mirando el código. ¡No lo haga! Ahorrará mucho tiempo y energía utilizando siempre el **Depurador**.

El depurador le permite pasar lentamente por los métodos. Muestra toda la información que necesita para entender por qué ha ocurrido un error. Una vez que tiene esta información, usted sabe cómo arreglar el error.

Otra razón para usar el Depurador es el desarrollo del código. A veces se puede escribir un algoritmo que es más complejo de lo habitual. A pesar de todos los sentimientos de cumplimiento, no puede estar totalmente seguro de que su codificación sea 100% correcta. En lugar de ejecutarlo "ciego", puede utilizar el comando `TRACE` al comienzo de su código, luego ejecutarlo paso a paso para mantener un ojo en lo que sucede.

## Rupturas

En el proceso de depuración, puede que necesite saltar el seguimiento de algunas partes del código hasta una línea determinada. O, puede querer rastrear el código cuando una expresión dada tiene un determinado valor (e.. "$myVar > 1000"), o cada vez que se llama un comando 4D específico.

Estas necesidades están cubiertas por **puntos de interrupción** y las funciones de **captura de comando**. Pueden configurarse desde el editor de código, el depurador o el explorador de ejecución.
