---
id: error-handling
title: Gestión de errores
---

El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicación. 4D soporta de forma completa la detección y notificación de errores en tiempo de ejecución, así como el análisis de sus condiciones.

La gestión de errores responde a dos necesidades principales:

- descubrir y corregir posibles errores y fallos en el código durante la fase de desarrollo,
- detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los diálogos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz.

:::tip Buenas prácticas

Es muy recomendable instalar un método global de gestión de errores en 4D Server, para todo el código que se ejecute en el servidor. When 4D Server is not running [headless](../Admin/cli.md) (i.e. launched with its [administration window](../ServerWindow/overview.md)), this method would avoid unexpected dialog boxes to be displayed on the server machine. En modo sin interfaz, los errores se registran en el archivo [4DDebugLog](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) para su posterior análisis.

:::


## Error o estado

Muchas funciones de clase 4D, como `entity.save()` o `transporter.send()`, devuelven un objeto *status*. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecución, por ejemplo, una contraseña no válida, una entidad bloqueada, etc., que no detienen la ejecución del programa. Esta categoría de errores puede ser manejada por el código habitual.

Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupción inesperada. Esta categoría de errores genera excepciones y necesita ser manejada a través de un método de gestión de errores.


## Instalación de un método de gestión de errores

En 4D, todos los errores pueden ser capturados y manejados por métodos proyecto específicos, llamados **error-handling** (o **error-catching**).

Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below).

Para *instalar* un método proyecto de gestión de errores, basta con llamar al comando [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) con el nombre del método proyecto y (opcionalmente) el álcance como parámetros. Por ejemplo:

```4d
ON ERR CALL("IO_Errors";ek local) //Instala un método local de gestión de errores
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) //devuelve el control al proceso local
```

The  [`Method called on error`](https://doc.4d.com/4dv19/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. Es particularmente útil en el contexto de código genérico porque permite cambiar temporalmente y luego restaurar el método de captura de error:

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

- for the **current process**- a local error handler will be only called for errors that occurred in the current process of the current project,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context of the current project,
- from the **components**- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.

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


### Manejo de errores dentro del método

Dentro de un método de gestión de errores personalizado, tiene acceso a varios datos que le ayudarán a identificar el error:

- las variables sistema dedicadas:

  - `Error` (entero largo): código de error
  - `Error method`(texto): nombre del método que ha provocado el error
  - `Error line` (entero largo): número de línea del método que ha provocado el error
  - `Error formula` (texto): fórmula del código 4D (texto bruto) que está en el origen del error.

|

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


