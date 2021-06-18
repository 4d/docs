---
id: error-handling
title: Gestión de errores
---

Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.

Error handling meets two main needs:

- finding out and fixing potential errors and bugs in your code during the development phase,
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface.
> It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. This method would avoid unexpected dialog boxes to be displayed on the server machine, and could log errors in a dedicated file for further analyses.


## Error or status

Many 4D class functions, such as `entity.save()` or `transporter.send()`, return a *status* object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.

Other "unpredictable" errors include disk write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.


## Installing an error-handling method

In 4D, all errors can be catched and handled in a specific project method, the **error-handling** (or **error-catching**) method.

This project method is installed for the current process and will be automatically called for any error that occurs in the process, in interpreted or compiled mode. To *install* this project method, you just need to call the `ON ERR CALL` command with the project method name as parameter. Por ejemplo:

```4d
ON ERR CALL("IO_ERRORS") //Installs the error-handling method
```

To stop catching errors and give back hand to 4D, call `ON ERR CALL` with an empty string:
```4d
ON ERR CALL("") //gives back control to 4D
```

The  `Method called on error` command allows to know the name of the method installed by `ON ERR CALL` for the current process. Es particularmente útil en el contexto de código genérico porque permite cambiar temporalmente y luego restaurar el método de captura de error:

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //Si no se puede abrir el documento, se genera un error
 $ref:=Open document("MyDocument")
  //Reinstalación del método anterior
 ON ERR CALL($methCurrent)

```

### Alcance y componentes

Se puede definir un único método de captura de errores para toda la aplicación o diferentes métodos por módulo de aplicación. Sin embargo, sólo se puede instalar un método por proceso.

Un método de gestión de errores instalado por el comando `ON ERR CALL` sólo se aplica únicamente a la aplicación en ejecución. En el caso de un error generado por un **componente**, no se llama al método `ON ERR CALL` de gestión de errores de la aplicación local, y viceversa.


### Manejo de errores dentro del método

Dentro del método de error personalizado, tiene acceso a varias informaciones que le ayudarán a identificar el error:

- variables sistema (*):

  - `Error` (entero largo): código de error
  - `Error method`(texto): nombre del método que ha provocado el error
  - `Error line` (entero largo): número de línea del método que ha provocado el error
  - `Error formula` (texto): fórmula del código 4D (texto bruto) que está en el origen del error.

(*) 4D mantiene automáticamente una serie de variables llamadas **variables sistema**, que responden a diferentes necesidades. Consulte el *Manual del lenguaje de 4D*.

- el comando `GET LAST ERROR STACK` que devuelve información sobre la pila de errores actual de la aplicación 4D.
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
ON ERR CALL("emptyMethod") //emptyMethod existe pero está vacío
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL("")
```


