---
id: on-err-call
title: ON ERR CALL
slug: /commands/on-err-call
displayed_sidebar: docs
---

<!--REF #_command_.ON ERR CALL.Syntax-->**ON ERR CALL** ( *metodoError* {; *alcance*} )<!-- END REF-->
<!--REF #_command_.ON ERR CALL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodoError | Text | &#8594;  | Método de gestión de errores a llamar o cadena vacía para desinstalar el método |
| alcance | Integer | &#8594;  | Alcance del método de gestión de errores |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ON ERR CALL.Summary-->El comando **ON ERR CALL** instala el método proyecto, cuyo nombre se pasa en *metodoError*, como método de intercepción de errores para el contexto de ejecución definido en el proyecto actual.<!-- END REF--> Este método se denomina **método de gestión de errores** o **método de detección de errores.**

Los métodos de gestión de errores se instalan por proyecto: los componentes y los proyectos anfitriones pueden definir sus propios métodos de tratamiento de errores, sólo se llamará al método del proyecto en el que se produjo el error.

Una vez que se instala un proyecto de control de errores, 4D llama al método cada vez que se produce un error durante la ejecución de un comando de lenguaje 4D en el contexto de ejecución definido.

El *alcance* de este comando designa el contexto de ejecución desde donde un error dispará la llamada de *metodoError*. Por defecto, si se omite el parámetro *alcance*, el alcance del comando es el contexto de ejecución local, es decir, el proceso actual. Puede pasar una de las siguientes constantes en el parámetro *alcance*:

| Constante                 | Valor | Comentario                                                                                           |
| ------------------------- | ----- | ---------------------------------------------------------------------------------------------------- |
| ek errors from components | 2     | Errores ocurridos en los componentes                                                                 |
| ek global                 | 1     | Errores ocurridos en el contexto de ejecución global del proyecto                                    |
| ek local                  | 0     | Errores ocurridos en el contexto de ejecución local (por defecto si se omite el parámetro *alcance*) |

* si *alcance* \= ek local (o si se omite *alcance*), sólo los errores producidos en el proceso actual llamarán a *metodoError*. Puede tener un método de gestión de errores por proceso a la vez, pero puede tener diferentes métodos de gestión de errores para varios procesos.
* si *alcance* \= ek global, todos los errores ocurridos en la aplicación, sea cual sea el proceso (excepto los componentes), llamarán a *metodoError*. Tenga en cuenta que, si también se define un gestor de errores ek local para un proceso, no se llamará al gestor de errores ek global . Este principio permite definir un método genérico que interceptará todos los errores, mientras que los métodos locales de gestión de errores pueden ser definidos para algunos procesos específicos.  
Tenga en cuenta también que un método global de gestión de errores es útil en el servidor, donde se puede manejar los errores en las funciones del lado del servidor.
* si *alcance* \= ek errors from components, sólo los errores generados por los componentes instalados en la aplicación llamarán a *metodoError*. Tenga en cuenta que, si se define un método de gestión de errores en un componente, se le llama en caso de error en el componente, y no se llama al gestor de errores ek errors from components definido en la aplicación local.

**Nota:** si **ON ERR CALL** se llama desde un proceso para el cual usted ha solicitado ejecución apropiativa (en modo compilado), el compilador verifica si *metodoError* es hilo seguro y devuelve los errores si no es compatible con el modo apropiativo. Para más información, consulte la sección *Procesos 4D apropiativos*.

Para desinstalar un método de gestión de errores, llame a **ON ERR CALL** de nuevo con el parámetro *alcance* deseado (si lo hay) y pase la cadena vacía en *metodoError*.

Puede identificar errores leyendo la variable sistema Error, la cual contiene el número de código del error. Los códigos de errores se listan en el tema *Códigos de error*. Por ejemplo, puede ver la sección *Errores de sintaxis*. El valor de la variable Error es significativo sólo en el método de gestión de errores; si necesita el código del error en el método que provocó el error, copie la variable Error en su propia variable proceso. También puede acceder a las variables sistema Error method, Error line y Error formula las cuales contienen respectivamente, el nombre del método, el número de línea y el texto de la fórmula donde ocurrió el error (ver [Gestión de errores dentro del método](https://developer.4d.com/docs/Concepts/error-handling#handling-errors-within-the-method)).

Puede utilizar el comando [Last errors](last-errors.md) o [Last errors](last-errors.md)  para obtener la secuencia de errores (la "pila" de errores) en el origen de la interrupción.

El método de gestión de errores debe tratar los errores de manera apropiada o mostrar un mensaje de error al usuario. Los errores pueden ser generados durante los procesos efectuados por:

* El motor de base de datos de 4D; por ejemplo, cuando guarda un registro provoca la violación de una regla de trigger.
* El entorno de 4D; por ejemplo, cuando no tienen suficiente memoria parar llenar un array.
* El sistema operativo en el cual se ejecuta la base; por ejemplo, disco lleno o errores de entrada/salida.

El comando [ABORT](abort.md) puede utilizarse para terminar el proceso. Si no llama [ABORT](abort.md) en el método de gestión de errores, 4D devuelve el método interrumpido y continúa la ejecución del método. Utilice el comando [ABORT](abort.md) cuando un error no puede recuperarse.

Si ocurre un error en el método de gestión de errores, 4D retoma el control de la gestión de errores. Por lo tanto, debe asegurarse de que el método de gestión de errores no pueda generar un error. Igualmente, no puede utilizar ON ERR CALL dentro del método de gestión de errores.

#### Ejemplo 1 

Desea definir un gestor de errores global, por ejemplo en el método base On Open:

```4d
 ON ERR CALL("myGlobalErrorHandler";ek global)
```

#### Ejemplo 2 

El siguiente método de proyecto trata de crear un documento cuyo nombre se recibe como parámetro. Si no se puede crear el documento, el método de proyecto devuelve 0 (cero) o el código de error: 

```4d
  // Método de proyecto Crear doc
  // Crear doc ( String ; Pointer ) -> Entero largo
  // Crear doc ( DocName ; ->DocRef ) -> Código de error resultante
 
 gError:=0
 ON ERR CALL("IO MANEJADOR DE ERRORES")
 $2->:=Create document($1)
 ON ERR CALL("")
 $0:=gError
```

El método de proyecto IO\_GESTION\_ERRORES es el siguiente:

```4d
  // Método de proyecto IO_GESTION_ERRORES
```

```4d
 gError:=Error // Simplemente copie el código del error en la variable de proceso gError
```

Note la utilización de la variable proceso gError para obtener el código del error en el método de ejecución actual. Una vez estos métodos estén presentes en su base de datos, puede escribir:

```4d
  // ...
 var vhDocRef : Time
 $vlErrCode:=Crear doc($vsDocumentNombre;->vhDocRef)
 If($vlErrCode=0)
  //...
    CLOSE DOCUMENT($vlErrCode)
 Else
    ALERT("El documento no pudo ser creado, error de E/S "+String($vlErrCode))
 End if
```

#### Ejemplo 3 

Mientras implementa un conjunto de operaciones complejas, puede terminar con varias subrutinas que necesiten diferentes métodos de gestión de errores. Sólo puede tener un método de gestión de errores por proceso, de manera que tiene dos opciones:  
 \- Mantener contacto con el actual cada vez que llama a ON ERR CALL, o   
\- Utiliza la variable array proceso (en este caso, *asMetodoError*) para “apilar” los métodos de gestión de errores y un método de proyecto (en este caso, ON ERROR CALL) para instalar y desinstalar los métodos de gestión de errores.   
Debe inicializar el array al comienzo de la ejecución del proceso:

```4d
  // NO olvide inicializar el array al inicio
  // del método de proceso (el método de proyecto que ejecuta el proceso)
 ARRAY STRING(63;asMetodoError;0)
```

Este es el método personalizado ON ERROR CALL:

```4d
  // Método de proyecto ON ERROR CALL
  // ON ERROR CALL { ( Cadena) }
  // ON ERROR CALL { ( Nombre del método ) }
 
 C_STRING(63;$1;$MetodoError)
 var $vlElem : Integer
 
 If(Count parameters>0)
    $MetodoError:=$1
 Else
    $MetodoError:=""
 End if
 
 If($MetodoError#"")
    var gError : Integer
    gError:=0
    $vlElem:=1+Size of array(asMetodoError)
    INSERT IN ARRAY(asMetodoError;$vlElem)
    asMetodoError{$vlElem}:=$1
    ON ERR CALL($1)
 Else
    ON ERR CALL("")
    $vlElem:=Size of array(asMetodoError)
    If($vlElem>0)
       DELETE FROM ARRAY(asMetodoError;$vlElem)
       If($vlElem>1)
          ON ERR CALL(asMetodoError{$vlElem-1})
       End if
    End if
 End if
```

Luego, puede llamarlo de esta manera:

```4d
 gError:=0
 ON ERROR CALL("IO ERRORS") // Instale el método de gestión de errores IO ERRORS
  // ...
 ON ERROR CALL("ALL ERRORS") // Instale el método de gestión de errores ALL ERRORS
  // ...
 ON ERROR CALL // Desinstale el método de gestión de errores ALL ERRORS y reinstale IO ERRORS
  // ...
 ON ERROR CALL // Desinstale el método de gestión de errores IO ERRORS
  // ...
```

#### Ejemplo 4 

El siguiente método de gestión de errores ignora las interrupciones del usuario y muestra el texto del error:  
  
```4d
  //Método de proyecto Show_errors_only
 If(Error#1006) //esta no es una interrupción del usuario
    ALERT("The error "+String(Error)+" occurred. The code in question is: \""+Error formula+"\"")
 End if
```

  

#### Ver también 

[ABORT](abort.md)  
*Gestión de errores*  
[Last errors](last-errors.md)   
[Last errors](last-errors.md)  
[Method called on error](method-called-on-error.md)  
*Variables sistema*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 155 |
| Hilo seguro | &check; |


