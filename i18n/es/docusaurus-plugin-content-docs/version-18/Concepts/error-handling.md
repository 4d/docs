---
id: error-handling
title: Gestión de errores
---

El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicación. 4D soporta de forma completa la detección y notificación de errores en tiempo de ejecución, así como el análisis de sus condiciones.

La gestión de errores responde a dos necesidades principales:

- descubrir y corregir posibles errores y fallos en el código durante la fase de desarrollo,
- detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los diálogos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz.
> > It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Este método evitaría la aparición de cajas de diálogo inesperadas en el servidor, y podría registrar los errores en un archivo específico para su posterior análisis.

## Instalación de un método de gestión de errores

En 4D, todos los errores pueden ser capturados y manejados en un método proyecto específico, el método **gestión de errores** (o **captura de errores**).

Este método proyecto se instala para el proceso actual y será llamado automáticamente para cualquier error que se produzca en el proceso, en modo interpretado o compilado. Para *instalar* este método proyecto, basta con llamar al comando `ON ERR CALL` con el nombre del método proyecto como parámetro. Por ejemplo:

```4d
ON ERR CALL("IO_ERRORS") //Instala el método de gestión de errores
```

Para dejar de detectar errores y devolver el control a 4D, llame a `ON ERR CALL` con una cadena vacía:
```4d
ON ERR CALL("") //devuelve el control a 4D
```

### Alcance y componentes

Se puede definir un único método de captura de errores para toda la aplicación o diferentes métodos por módulo de aplicación. Sin embargo, sólo se puede instalar un método por proceso.

Un método de gestión de errores instalado por el comando `ON ERR CALL` sólo se aplica a la base de datos en ejecución. En el caso de un error generado por un **componente**, no se llama al método `ON ERR CALL` de gestión de errores de la base local, y viceversa.

El comando `Method called on error` permite conocer el nombre del método instalado por `ON ERR CALL` para el proceso actual. Es particularmente útil en el contexto de los componentes porque permite cambiar temporalmente y luego restaurar el método de captura de errores de la base de datos local:

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //Si no se puede abrir el documento, se genera un error
 $ref:=Open document("MyDocument")
  //Reinstalación del método anterior
 ON ERR CALL($methCurrent)

```

### Manejo de errores e el método

Dentro del método de error personalizado, tiene acceso a varias informaciones que le ayudarán a identificar el error:

- 4D mantiene automáticamente un cierto número de variables denominadas **variables sistema**, que responden a diferentes necesidades (ver el *manual de referencia del Lenguaje 4D*):

  - `Error` (entero largo): código de error
  - `Error method`(texto): nombre del método que ha provocado el error
  - `Error line` (entero largo): número de línea del método que ha provocado el error
  - `Error formula` (texto): fórmula del código 4D (texto bruto) que está en el origen del error.

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
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL("")
End if
ON ERR CALL("")
```
