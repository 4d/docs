---
id: semaphore
title: Semaphore
slug: /commands/semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Semaphore.Syntax-->**Semaphore** ( *semaforo* {; *ticCont*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Semaphore.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| semaforo | Text | &#8594;  | Semáforo a probar y posicionar |
| ticCont | Integer | &#8594;  | Máximo tiempo de espera |
| Resultado | Boolean | &#8592; | El semáforo se ha creado correctamente (FALSE) o El semáforo ya había sido creado (TRUE) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Semaphore.Summary-->Un semáforo es una bandera compartida entre estaciones de trabajo o entre procesos en la misma estación de trabajo.<!-- END REF--> Un semáforo simplemente existe o no existe. Los métodos que cada usuario ejecuta pueden probar la existencia de un semáforo. Un semáforo sólo puede ser eliminado por la estación de trabajo cliente o proceso que lo creó. Creando y probando semáforos, los métodos pueden comunicarse entre estaciones de trabajo. No utilice semáforos para proteger el acceso a los registros. Esto lo hace automáticamente 4D y 4D Server. Utilice los semáforos para evitar que varios usuarios realice la misma operación al mismo tiempo.

La función Semaphore devuelve TRUE y no hace nada si el *semaforo* existe. Si *semaforo* no existe, Semaphore lo crea y devuelve FALSE. Sólo un usuario a la vez puede crear un semáforo. Si *semaforo* devuelve FALSE, esto significa que el semáforo no existe, pero también significa que el semáforo ha sido creado para el proceso en el cual la llamada se ha efectuado.

Semaphore devuelve FALSE si el semáforo no fue definido. También devuelve FALSE si el semáforo ya fue definido por el mismo proceso en el cual la llamada ha sido efectuada. Un semáforo está limitado a 255 caracteres, incluyendo el prefijo ($). Si pasa una cadena más larga, el semáforo se probará con la cadena truncada.

Recuerde que los nombres de los semáforos son sensibles a las mayúsculas y minúsculas en 4D (por ejemplo, el programa considera que "MySemaphore" es diferente de "mysemaphore"

El parámetro opcional *ticCont* le permite especificar un tiempo de espera (en tics) si *semaforo* ya está definido. En este caso, la función esperará o que el semáforo sea liberado o el tiempo de espera para terminar antes de devolver [True](true.md "True").

Hay dos tipos de semáforos en 4D: semáforos locales y semáforos globales.  
  
• Un semáforo local es visible para todos los procesos de una misma estación de trabajo y solamente en la estación de trabajo. Declare un semáforo local colocando al nombre del semáforo el signo dólar ($) como prefijo. Los semáforos locales permiten controlar las operaciones entre los diferentes procesos ejecutados en la misma estación de trabajo. Por ejemplo, un semáforo local puede ser utilizado para monitorear los accesos a un array interproceso compartido por todos los procesos de una base mono usuario o de un equipo cliente.  
• Un semáforo global es visible para todos los usuarios y todos los procesos. Los semáforos globales permiten controlar las operaciones entre los equipos clientes de una base multiusuarios.

Los semáforos globales y locales son idénticos en su lógica. La diferencia reside en su alcance, es decir en su visibilidad. En cliente-servidor, los semáforos globales son visibles para todos los procesos de todos los equipos clientes y del servidor. Un semáforo local sólo es visible para los procesos del equipo en el que ha sido creado.  
Con 4D, los semáforos globales y locales tienen el mismo alcance porque usted es el único usuario. Sin embargo, si su base está siendo utilizada en los dos entornos, asegúrese de utilizar semáforos globales y locales dependiendo de lo que quiera hacer.

**Nota:** los semáforos locales se recomiendan cuando el uso de un semáforo es necesario para manejar un aspecto local para un cliente de la aplicación, tal como la interfaz o un array de valores interproceso. El uso de un semáforo global provocará en este caso, no sólo intercambios de red innecesarios, sino también puede afectar otras máquinas cliente. El uso de un semáforo local evitará estos efectos indeseables.

#### Ejemplo 1 

Este es el código típico para utilizar un semáforo:

```4d
 While(Semaphore("MySemaphore";300))
    IDLE
 End while
  // coloque el código protegido por el semáforo aquí
 CLEAR SEMAPHORE("MySemaphore")
```

#### Ejemplo 2 

En este ejemplo, usted quiere evitar que dos usuarios efectúen simultáneamente una actualización global de los precios en una tabla Productos. El siguiente método utiliza semáforos para hacer esto:

```4d
 If(Semaphore("ActualizacionPrecios")) // Trate de crear el semáforo
    ALERT("Otro usuario ya está actualizando los precios. Inténtelo más tarde.")
 Else
    ActualizarPrecios // Actualización de todos los precios
    CLEAR SEMAPHORE("ActualizacionPrecios") // Borrar el semáforo
 End if
```

#### Ejemplo 3 

El siguiente ejemplo utiliza un semáforo local. En una base con varios procesos, usted quiere mantener una lista de "Cosas por hacer". Usted quiere mantener la lista en un array interproceso y no en una tabla. Usted utiliza un semáforo para evitar el acceso simultáneo. En esta situación, sólo necesita utilizar un semáforo local, porque su lista "Cosas por hacer" es sólo para su uso personal. 

El array interproceso se inicializa en el método Startup:

```4d
 ARRAY TEXT(◊ListaHacer;0) // La lista de cosas por hacer está inicialmente vacía
```

Este es el método utilizado para añadir elementos a la lista de cosas por hacer:

```4d
  // Método de proyecto AGREGAR A LISTA DE COSAS POR HACER
  // AGREGAR A LISTA DE COSAS POR HACER ( Texto )
  // AGREGAR A LISTA DE COSAS POR HACER ( Elemento de la lista de cosas por hacer)
 var $1 : Text
 If(Not(Semaphore("$AccesoLista";300)))
  // Espera 5 segundos si el semáforo ya existe
    $vlElem:=Size of array(◊ListaHacer)+1
    INSERT IN ARRAY(◊ListaHacer;$vlElem)
    ◊ListaHacer{$vlElem}:=$1
    CLEAR SEMAPHORE("$AccesoLista") // Borrar el semáforo
 End if
```

Puede llamar este método desde cualquier proceso.

#### Ejemplo 4 

Este método permite no ejecutar un método si el semáforo está presente; el método informa el método de llamada con un código de error y un texto plano.

Sintaxis:   

```4d
 $L_Error:=Semaphore_proof(->$T_Text_error)
```

```4d
  // Estructura de protección por semáforo
 var $0 : Integer
 var $1 : Pointer // mensaje de error
 
  // Inicio del método
 var $L_MyError : Integer
 $L_MyError:=1
 
 var $T_Sema_local : Text
 $T_Sema_local:="$tictac"
 
 If(Semaphore($T_Sema_local;300))
  // Esperábamos 300 tics pero el semáforo
  // no fue lanzado por el que lo ubicó:
  // terminamos aquí
    $L_MyError:=-1
 
 Else
 
  // Este método solo se ejecuta por un proceso a la vez
 
  // Ubicamos el semáforo al mismo tiempo que lo introducimos
  // así que somos los únicos que lo podemos eliminar
 
  // Hacer algo
    ...
  // Terminar eliminando el semáforo
    CLEAR SEMAPHORE($T_Sema_local)
 End if
 
 var $T_Message : Text
 If($L_MyError=-1)
    $T_Message:="El semáforo "+$T_Sema_local+" tiene el acceso bloqueado al resto del código"
 Else
    $T_Message:="OK"
 End if
 
 $0:=$L_MyError
 $1->:=$T_Message  // El método llamante recibe un código de error y una explicación en texto plano
```

#### Ver también 

[CLEAR SEMAPHORE](clear-semaphore.md)  
*Semáforos y señales*  
[Test semaphore](test-semaphore.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 143 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


