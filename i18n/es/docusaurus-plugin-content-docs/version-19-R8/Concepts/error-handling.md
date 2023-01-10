---
id: error-handling
title: Gestión de errores
---

El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicación. 4D soporta de forma completa la detección y notificación de errores en tiempo de ejecución, así como el análisis de sus condiciones.

La gestión de errores responde a dos necesidades principales:

- descubrir y corregir posibles errores y fallos en el código durante la fase de desarrollo,
- detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los diálogos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz.

:::tip Good practice

It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. This method would avoid unexpected dialog boxes to be displayed on the server machine (if run with interface), and could log errors in a dedicated file for further analyses.

:::


## Error o estado

Muchas funciones de clase 4D, como `entity.save()` o `transporter.send()`, devuelven un objeto *status*. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecución, por ejemplo, una contraseña no válida, una entidad bloqueada, etc., que no detienen la ejecución del programa. Esta categoría de errores puede ser manejada por el código habitual.

Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupción inesperada. Esta categoría de errores genera excepciones y necesita ser manejada a través de un método de gestión de errores.


## Instalación de un método de gestión de errores

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods.

Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below).

To *install* an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. Por ejemplo:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) //gives back control for the local process
```

The  [`Method called on error`](https://doc.4d.com/4dv19/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. Es particularmente útil en el contexto de código genérico porque permite cambiar temporalmente y luego restaurar el método de captura de error:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### Alcance y componentes

An error-handling method can be set for different execution contexts:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context,
- for the **components**- it will be called in the host for all errors that occurred in the components.

Ejemplos:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
ON ERR CALL("globalHandler";ek global) //Installs a global error-handling method
ON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components
```

You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.

Se puede definir un único método de captura de errores para toda la aplicación o diferentes métodos por módulo de aplicación. However, only one method can be installed per execution context.

When an error occurs, only one method is called, even if several "concurrent" error handlers are installed:

- if the error occurs in the current process, the local handler is called and NOT the global handler;
- if the error occurs in a component and the component has its own error handler, the error handler of the component is called and NOT the "errors from components" handler of the host application.


### Manejo de errores dentro del método

Within a custom error method, you have access to several pieces of information that will help you identifying the error:

- dedicated system variables:

  - `Error` (entero largo): código de error
  - `Error method`(texto): nombre del método que ha provocado el error
  - `Error line` (entero largo): número de línea del método que ha provocado el error
  - `Error formula` (texto): fórmula del código 4D (texto bruto) que está en el origen del error.

|

4D automatically maintains a number of variables called **system variables**, meeting different needs. See the *4D Language Reference manual*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
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


