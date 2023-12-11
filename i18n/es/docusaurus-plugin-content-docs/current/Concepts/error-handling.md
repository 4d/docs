---
id: error-handling
title: Gestión de errores
---

El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicación. 4D soporta de forma completa la detección y notificación de errores en tiempo de ejecución, así como el análisis de sus condiciones.

La gestión de errores responde a dos necesidades principales:

- descubrir y corregir posibles errores y fallos en el código durante la fase de desarrollo,
- detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los diálogos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz.

Basically, there are two ways to handle errors in 4D. You can [install an error-handling method](#installing-an-error-handling-method), or write a [`Try()` keyword](#tryexpression) before pieces of code that call a function, method, or expression that can throw an error.

:::tip Buenas prácticas

Es muy recomendable instalar un método global de gestión de errores en 4D Server, para todo el código que se ejecute en el servidor. Cuando 4D Server no se ejecuta [headless](../Admin/cli.md) (es decir, se lanza con su [ventana de administración](../ServerWindow/overview.md)), este método evitaría que se mostraran cajas de diálogo inesperadas en la máquina servidor. En modo sin interfaz, los errores se registran en el archivo [4DDebugLog](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) para su posterior análisis.

:::


## Error o estado

Muchas funciones de clase 4D, como `entity.save()` o `transporter.send()`, devuelven un objeto *status*. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecución, por ejemplo, una contraseña no válida, una entidad bloqueada, etc., que no detienen la ejecución del programa. Esta categoría de errores puede ser manejada por el código habitual.

Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupción inesperada. This category of errors generates exceptions and needs to be handled through an error-handling method or a `Try()` keyword.


## Instalación de un método de gestión de errores

En 4D, todos los errores pueden ser detectados y manejados por métodos proyecto específicos, llamados **métodos de gestión de errores** (o **métodos de intercepción de errores**).

Una vez instalados, los manejadores de errores son llamados automáticamente en modo interpretado o compilado en caso de error en la aplicación 4D o en uno de sus componentes. Se puede llamar a un manejador de errores diferente en función del contexto de ejecución (ver abajo).

Para *instalar* un método proyecto de gestión de errores, basta con llamar al comando [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) con el nombre del método proyecto y (opcionalmente) el álcance como parámetros. Por ejemplo:

```4d
ON ERR CALL("IO_Errors";ek local) //Instala un método local de gestión de errores
```

Para dejar de interceptar los errores en un contexto de ejecución y devolver la mano, llame `ON ERR CALL` con una cadena vacía:

```4d
ON ERR CALL("";ek local) //devuelve el control al proceso local
```

El comando [`Method called on error`](https://doc.4d.com/4dv19/help/command/en/page704.html) permite conocer el nombre del método instalado por `ON ERR CALL` para el proceso actual. Es particularmente útil en el contexto de código genérico porque permite cambiar temporalmente y luego restaurar el método de captura de error:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //Si no se puede abrir el documento, se genera un error
 $ref:=Open document("MyDocument")
  //Reinstalación del método anterior
 ON ERR CALL($methCurrent;ek local)

```

### Alcance y componentes

Se puede definir un método de gestión de errores para diferentes contextos de ejecución:

- para el **proceso actual**- sólo se llamará a un gestor de errores local para los errores ocurridos en el proceso actual del proyecto actual,
- para **toda la aplicación**- se llamará a un gestor de errores global para todos los errores que se produzcan en el contexto de ejecución de la aplicación del proyecto actual,
- desde los **componentes**- este manejador de errores se define en un proyecto local y será llamado para todos los errores que ocurran en los componentes cuando no hayan sido ya interceptados por un manejador de componentes.

Ejemplos:

```4d
ON ERR CALL("IO_Errors";ek local) //Instala un método de gestión de errores local 
ON ERR CALL("globalHandler";ek global) //Instala un método de gestión de errores global 
ON ERR CALL("componentHandler";ek errors from components) //Instala un método de gestión de errores para los componentes
```

Puede instalar un gestor de errores global que servirá como "fallback" y gestores de errores locales específicos para determinados procesos. Un gestor de errores global también es útil en el servidor para evitar diálogos de error en el servidor cuando se ejecuta con interfaz.

Se puede definir un único método de captura de errores para toda la aplicación o diferentes métodos por módulo de aplicación. Sin embargo, sólo se puede instalar un método por contexto de ejecución y por proyecto.

Cuando se produce un error, sólo se llama a un método, como se describe en el siguiente diagrama:

![gestión de errores](../assets/en/Concepts/error-schema.png)


### Manejo de errores e el método

Dentro de un método de gestión de errores personalizado, tiene acceso a varios datos que le ayudarán a identificar el error:

- las variables sistema dedicadas:

  - `Error` (entero largo): código de error
  - `Error method`(texto): nombre del método que ha provocado el error
  - `Error line` (entero largo): número de línea del método que ha provocado el error
  - `Error formula` (texto): fórmula del código 4D (texto bruto) que está en el origen del error.

:::info

4D mantiene automáticamente una serie de variables denominadas **variables sistema**, que responden a diferentes necesidades. Consulte el *manual de referencia del lenguaje 4D*.

:::

- el comando [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) que devuelve una colección de la pila actual de errores ocurridos en la aplicación 4D. También puede utilizar el comando [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) que devuelve la misma información que los arrays.
- el comando `Get call chain` que devuelve una colección de objetos que describen cada paso de la cadena de llamadas a métodos dentro del proceso actual.


#### Ejemplo

He aquí un sistema de gestión de errores sencillo:

```4d
//instalar el método de gestión de errores
 ON ERR CALL("errorMethod")
 //... ejecutar el código
 ON ERR CALL("") //giving control back to 4D
```

```4d
// método proyecto errorMethod
 If(Error#1006) //esto no es una interrupción del usuario
    ALERT("Se ha producido el error "+String(Error)+". El código en cuestión es: \""+Error formula+"\"")
 End if
```

### Utilizar un método de gestión de errores vacío

Si desea principalmente que la caja de diálogo de error estándar esté oculta, puede instalar un método de gestión de errores vacío. La variable sistema `Error` puede ser probada en cualquier método, es decir, fuera del método de gestión de errores:

```4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL("")
End if
ON ERR CALL("")
```


## Try(expression)

The `Try(expression)` statement allows you to test a single-line expression in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed. Using `Try(expression)` provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method.

The formal syntax of the `Try(expression)` statement is:

```4d

Try (expression) : any | Undefined

```

*expression* can be any valid expression.

If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an [error-handling method](#installing-an-error-handling-method) was installed or not before the call to `Try()`. If *expression* returns a value, `Try()` returns the last evaluated value, otherwise it returns `Undefined`.

You can handle the error(s) using the [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) command. If *expression* throws an error within a stack of `Try()` calls, the execution flow stops and returns to the latest executed `Try()` (the first found back in the call stack).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed by *expression*, it is called in case of error.

:::


### Ejemplos

1. You want to display the contents of a file if the file can be open without error, and if its contents can be read. Puede escribir:

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := Try($file.open())
If ($fileHandle # Null)
  $text:=Try($fileHandle.readText()) || "Error reading the file"
End if
```


2. You want to handle the divide by zero error. In this case, you want to return 0 and throw an error:

```4d
function divide( $p1: real; $p2: real)-> $result: real
  if ($p2=0)
     $result:=0 //only for clarity (0 is the default for reals)
     throw(-12345; "Division by zero")
  else
    $result:=$p1/$p2
  end if

function test()
  $result:=Try(divide($p1;$p2))
  If (Last errors # null)
    ALERT("Error")
  End if

```

3. You want to handle both [predictable and non-predictable](#error-or-status) errors:

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=Try($e.save()) //catch predictable and non-predictable errors
If ($status.success)
   ALERT( "Success")
Else
   ALERT( "Error: "+JSON Stringify($status.errors))
End if

``` 




