---
id: storage
title: Storage
slug: /commands/storage
displayed_sidebar: docs
---

<!--REF #_command_.Storage.Syntax-->**Storage**  : Object<!-- END REF-->
<!--REF #_command_.Storage.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Catálogo de objetos compartidos registrados y colecciones compartidas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Storage.Summary-->El método **Storage** devuelve el catálogo de objetos compartidos o colecciones compartidas registrados registradas en el objeto *Storage* en la máquina o componente actual.<!-- END REF--> 

El catálogo devuelto por **Storage** es creado automáticamente por 4D y está disponible para todos los procesos de la base, incluidos los procesos apropiativos. Existe un catálogo **Storage** por máquina y componente: en una aplicación cliente/servidor, hay un objeto compartido **Storage** en el servidor y un objeto compartido **Storage** en cada aplicación 4D remota; si la base usa componentes, hay un objeto **Storage** por componente.

Utilice el catálogo **Storage** para hacer referencia a cualquier objeto compartido o colección compartida que desee utilizar desde cualquier proceso apropiativo o estándar. Para registrar un objeto compartido o una colección compartida en el catálogo, agregue su referencia al objeto compartido devuelto por **Storage**.

Como el catálogo devuelto por **Storage** es un o*bjeto compartido*, sigue las reglas descritas en la sección *Objetos y colecciones compartidos*, pero con algunas características específicas:

* Este objeto solo puede contener objetos compartidos y colecciones compartidas. Intentar agregar otros tipos de valores (objetos no compartidos o colecciones, nulos, valores escalares) generará un error.
* Para agregar una propiedad a este objeto debe estar rodeado por la estructura *Use...End use*, de lo contrario, se devuelve un error. Sin embargo, es posible leer un atributo fuera de una estructura *Use...End use*.
* Cuando está rodeado por la estructura *Use...End use*, los atributos de primer nivel de **Storage** están bloqueados para otros procesos.
* A diferencia de los objetos compartidos estándar, el objeto devuelto por **Storage** NO compartirá su *identificador de bloqueo* con objetos compartidos o colecciones agregadas como atributos (para más información, consulte la sección *Identificador de bloqueo*).

#### Ejemplo 1 

Una práctica común podría ser inicializar el objeto **Storage** en el : 

```4d
 Use(Storage)
    Storage.counters:=New shared object("customers";0;"invoices";0)
 End use
```

#### Ejemplo 2 

Este ejemplo muestra una forma estándar de establecer valores de **Almacenamiento**:

```4d
 Use(Storage)
    Storage.mydata:=New shared object
    Use(Storage.mydata)
       Storage.mydata.prop1:="Smith"
       Storage.mydata.prop2:=100
    End use
 End use
```

#### Ejemplo 3 

**Storage** permite implementar un singleton con una *inicialización lenta*, como se muestra en el siguiente ejemplo.

**Nota:** para más información acerca de los patrones de singleton, puede consultar esta página de [Wikipedia](https://en.wikipedia.org/wiki/Singleton%5Fpattern).

```4d
 var $0 : Integer
 var $counterValue : Integer
 var counter : Object //crea una referencia al contador para el proceso
 
 If(counter=Null) //Si esta referencia es nula, obtenga if de Storage
    Use(Storage) // ¡El uso del almacenamiento solo se necesita una vez!
       If(Storage.counter=Null)
          Storage.counter:=New shared object("operation";0)
       End if
       counter:=Storage.counter //Obtener la referencia del objeto compartido contador
    End use
 End if
 Use(counter) //use directamente el contador de objetos compartidos (¡no necesita usar Storage!)
    counter.operation:=counter.operation+1
    $counterValue:=counter.operation
 End use
 
 $0:=$counterValue
```

#### Ver también 

*Objetos y colecciones compartidos*  