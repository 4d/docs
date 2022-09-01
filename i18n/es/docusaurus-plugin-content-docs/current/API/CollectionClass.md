---
id: CollectionClass
title: Collection
---


La clase Collection gestiona variables de tipo [Collection](Concepts/dt_collection.md).

Una colección se inicializa con:

|                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New collection.Summary -->|
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New shared collection.Summary -->|


### Ejemplo

```4d
 var $colVar : Collection //creación de una variable 4D de tipo colección
 $colVar:=New collection //inicialización de la colección y asignación a la variable 4D
```


### Resumen


|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->|
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary --> |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary --> |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->|
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->|
| [<!-- INCLUDE #collection.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->|
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->|
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->|
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->|
| [<!-- INCLUDE #collection.every().Syntax -->](#every)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->|
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->|
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->|
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->|
| [<!-- INCLUDE #collection.find().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->|
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->|
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->|
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->|
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->|
| [<!-- INCLUDE #collection.join().Syntax -->](#join)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->|
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->|
| [<!-- INCLUDE #collection.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->|
| [<!-- INCLUDE #collection.map().Syntax -->](#map)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->|
| [<!-- INCLUDE #collection.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->|
| [<!-- INCLUDE #collection.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->|
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->|
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary -->|
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->|
| [<!-- INCLUDE #collection.push().Syntax -->](#push)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->|
| [<!-- INCLUDE #collection.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->|
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->|
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->|
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->|
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->|
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->|
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->|
| [<!-- INCLUDE #collection.some().Syntax -->](#some)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->|
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->|
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->|
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->|



## `Nueva colección`


<!-- REF #_command_.New collection.Syntax -->

**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->
| Parámetros | Type                                                                    |    | Descripción                                |
| ---------- | ----------------------------------------------------------------------- |:--:| ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | -> | Valor(es) de collection                    |
| Result     | Collection                                                              | <- | Nueva colección|<!-- END REF -->


|


#### Descripción

El comando `New collection` <!-- REF #_command_.New collection.Summary --> crea una nueva colección vacía o precargada<!-- END REF --> y devuelve su referencia.

Si no se pasa ningún parámetro, `New collection` crea una colección vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.
> Tenga en cuenta que las instrucciones `var : Collection` or `C_COLLECTION` declaran una variable de tipo `Collection` pero no crea ninguna colección.

Opcionalmente, puede prellenar la nueva colección pasando uno o varios *valores* como parámetro(s).

De lo contrario, puede añadir o modificar elementos posteriormente por asignación. Por ejemplo:

```4d
 myCol[10]:="My new element"
```

Si el nuevo índice del elemento está más allá del último elemento existente de la colección, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor **null**.

Puede pasar cualquier número de valores de todos los tipos soportados (number, text, date, picture, pointer, object, collection...). A diferencia de los arrays, las colecciones pueden mezclar datos de diferentes tipos.

Debe prestar atención a los siguientes aspectos de la conversión:

*   Si pasa un puntero, se mantiene "tal cual"; se evalúa con el comando `JSON Stringify`
*   Las fechas se almacenan como fechas "aaaa-mm-dd" o de cadenas con el formato "AAAA-MM-DDTHH:mm:ss.SSSZ", según la configuración actual "fechas dentro de los objetos" de la base de datos. Al convertir las fechas 4D en texto antes de almacenarlas en la colección, por defecto el programa tiene en cuenta la zona horaria local. Puede modificar este comportamiento utilizando el selector `Dates inside objects` del comando `SET DATABASE PARAMETER`.
*   Si pasa un tiempo, se almacena como un número de milisegundos (Real).

#### Ejemplo 1



Quiere crear una nueva colección vacía y asignarla a una variable colección 4D:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Ejemplo 2

Quiere crear una colección precargada:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Ejemplo 3

Se crea una nueva colección y se añade un nuevo elemento:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //añadir un décimo elemento con valor "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```




## `New shared collection`

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #_command_.New shared collection.Syntax -->

**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->
| Parámetros | Type                                                                |    | Descripción                                      |
| ---------- | ------------------------------------------------------------------- |:--:| ------------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection | -> | Valor(es) de la collection compartida            |
| Result     | Collection                                                          | <- | New shared collection|<!-- END REF -->


|


#### Descripción

El comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> crea una nueva colección vacía o precargada compartida<!-- END REF --> y devuelve su referencia.

La adición de un elemento a esta colección debe estar rodeada por la estructura de uso [`Use...End`](Concepts/shared.md#useend-use), de lo contrario se genera un error. Sin embargo, es posible leer un elemento sin estructura.
> Para más información sobre las colecciones compartidas, consulte la página [Objetos y colecciones compartidos](Concepts/shared.md).

Si no se pasa ningún parámetro, `New shared collection` crea una colección compartida vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.
> Tenga en cuenta que las instrucciones `var : Collection` or `C_COLLECTION` declaran una variable de tipo `Collection` pero no crea ninguna colección.

Opcionalmente, puede prellenar la nueva colección compartida pasando uno o varios *valores* como parámetro(s). De lo contrario, puede añadir o modificar elementos posteriormente por asignación notación objeto (ver ejemplo).

Si el nuevo índice del elemento está más allá del último elemento existente de la colección compartida, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor **null**.

Puede pasar cualquier número de valores de los siguientes tipos soportados:

*   number (real, longint...). Los valores numéricos se almacenan siempre como reales.
*   text
*   boolean
*   date
*   time (almacenado como número de milisegundos - real)
*   null
*   shared object(*)
*   shared collection(*) > Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared.
> Esta función modifica la colección original.

(*)Cuando un objeto o colección compartida se añade a una colección compartida, comparten el mismo *identificador de bloqueo*. Para obtener más información sobre este punto, consulte la guía del **Desarrollador 4D**.

#### Ejemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```



<!-- REF collection.average().Desc -->
## .average()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.average().Syntax -->

**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.average().Params -->
| Parámetros   | Type            |    | Descripción                                                                           |
| ------------ | --------------- |:--:| ------------------------------------------------------------------------------------- |
| propertyPath | Text            | -> | Ruta de la propiedad del objeto que se utilizará para el cálculo                      |
| Result       | Real, Undefined | <- | Media aritmética (promedio) de los valores de la colección|<!-- END REF -->



|



#### Descripción

La función `.average()` <!-- REF #collection.average().Summary -->devuelve la media aritmética (promedio) de los valores definidos en la instancia de la colección<!-- END REF -->.



Para el cálculo sólo se tienen en cuenta los elementos numéricos (se ignoran otros tipos de elementos).

Si la colección contiene objetos, pasa el parámetro *propertyPath* para indicar la propiedad del objeto a tener en cuenta.

`.average()` devuelve `undefined` if:

*   la colección está vacía,
*   la colección no contiene elementos numéricos,
*   *propertyPath* no se encuentra en la colección.


#### Ejemplo 1

```4d
 var $col : Collection
 $col:=New collection(10;20;"Monday";True;6)
 $vAvg:=$col.average() //12
```

#### Ejemplo 2

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $vAvg:=$col.average("salary") //23500
```

<!-- END REF -->



<!-- REF collection.clear().Desc -->
## .clear()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.clear().Syntax -->

**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->
| Parámetros | Type       |    | Descripción                                                                      |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------- |
| Result     | Collection | <- | Colección original con todos los elementos eliminados|<!-- END REF -->


|


#### Descripción

La función `.clear()` <!-- REF #collection.clear().Summary -->elimina todos los elementos de la instancia de la colección y devuelve una colección vacía<!-- END REF -->.
> Esta función modifica la colección original.

#### Ejemplo

```4d
var $col : Collection
$col:=New collection(1;2;5)
$col.clear()
$vSize:=$col.length //$vSize=0
```

<!-- END REF -->





<!-- REF collection.combine().Desc -->
## .combine()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.combine().Syntax -->

**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.combine().Params -->
| Parámetros | Type       |    | Descripción                                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------------------------- |
| col2       | Collection | -> | Colección a combinar                                                                                  |
| index      | Integer    | -> | Posición a la que se deben combinar los elementos de inserción en la colección (por defecto=length+1) |
| Result     | Collection | <- | Colección original que contiene elementos combinados|<!-- END REF -->


|


#### Descripción

La función `.combine()` <!-- REF #collection.combine().Summary -->inserta elementos *col2* al final o en la posición *índice* especificada en la instancia de la colección y devuelve la colección editada<!-- END REF -->. .
> Esta función modifica la colección original.

Por defecto, los elementos *col2* se añaden al final de la colección original. Puede pasar en *index* la posición en la que quiere que se inserten los elementos *col2* en la colección.
> Esta función no modifica la colección original.

*   Si *índice* > la longitud de la colección, el *índice* inicial real se fijará en la longitud de la colección.
*   Si *índice* < 0, se recalcula como *index:=index+length* (se considera el desplazamiento desde el final de la colección).
*   Si el valor calculado es negativo, *index* toma el valor 0.


#### Ejemplo

```4d
var $c; $fruits : Collection
$c:=New collection(1;2;3;4;5;6)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$c.combine($fruits;3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```

<!-- END REF -->





<!-- REF collection.concat().Desc -->
## .concat()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.concat().Syntax -->

**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->
| Parámetros | Type                                                           |    | Descripción                                                                                                              |
| ---------- | -------------------------------------------------------------- |:--:| ------------------------------------------------------------------------------------------------------------------------ |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture | -> | Valores a concatenar. Si *value* es una colección, todos los elementos de la colección se añaden a la colección original |
| Result     | Collection                                                     | <- | Nueva colección con valor(es) añadido(s) a la colección original|<!-- END REF -->


|


#### Descripción

La función `.concat()` <!-- REF #collection.concat().Summary -->devuelve una nueva colección que contiene los elementos de la colección original con todos los elementos del parámetro *valor* añadidos al final<!-- END REF -->.
> Esta función no modifica la colección original.

Si *value* es una colección, todos sus elementos se añaden al final de la colección original. Si *value* no es una colección, se añade ella misma como un nuevo elemento.


#### Ejemplo

```4d
var $c : Collection
$c:=New collection(1;2;3;4;5)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$fruits.push(New object("Intruder";"Tomato"))
$c2:=$c.concat($fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
$c2:=$c.concat(6;7;8) //[1,2,3,4,5,6,7,8]
```

<!-- END REF -->




<!-- REF collection.copy().Desc -->
## .copy()

<details><summary>Histórico</summary>

| Versión | Modificaciones                                          |
| ------- | ------------------------------------------------------- |
| v18 R3  | Nueva opción *ck shared*. Nuevos parámetros *groupWith* |
| v16 R6  | Añadidos                                                |

</details>

<!-- REF #collection.copy().Syntax -->

**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->


<!-- REF #collection.copy().Params -->
| Parámetros   | Type       |    | Descripción                                                                                                        |
| ------------ | ---------- |:--:| ------------------------------------------------------------------------------------------------------------------ |
| option       | Integer    | -> | `ck resolve pointers`: resolver punteros antes de copiar,<br/>`ck shared`: devolver una colección compartida |
| groupWithCol | Collection | -> | Colección compartida que se agrupa con la colección resultante                                                     |
| groupWithObj | Object     | -> | Objeto compartido que se agrupa con la colección resultante                                                        |
| Result       | Collection | <- | Copia profunda de la colección original|<!-- END REF -->


|


#### Descripción

La función `.copy()` <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->.***Deep copy*** means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.
> Esta función no modifica la colección original.

Si se pasa, el parámetro *opción* puede contener una de las siguientes constantes (o ambas):

| option                | Descripción                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Si la colección original contiene valores de tipo puntero, por defecto la copia también contiene los punteros. Sin embargo, puede resolver los punteros al copiar pasando ck resolve pointers. En este caso, cada puntero presente en la colección se evalúa al copiar y se utiliza su valor desreferenciado.                                 |
| `ck shared`           | Por defecto, copy() devuelve una colección Clásica (no compartida), incluso si el comando se aplica a una colección compartida. Pasa la constante compartida ck para crear una colección compartida. En este caso, puede utilizar el parámetro groupWith para asociar la colección compartida con otra colección u objeto (ver más adelante). |

Los parámetros *groupWithCol* o *groupWithObj* permiten designar una colección o un objeto al que se debe asociar la colección resultante.


#### Ejemplo 1

Queremos copiar la colección regular (no compartida) *$lastnames* en el objeto compartido *$sharedObject*. Para ello, debemos crear una copia compartida de la colección (*$sharedLastnames*).

```4d
var $sharedObject : Object
var $lastnames;$sharedLastnames : Collection
var $text : Text

$sharedObject:=New shared object

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames es una colección estándar

$sharedLastnames:=$lastnames.copy(ck shared) //$sharedLastnames es una colección compartida

//Now we can put $sharedLastnames into $sharedObject
Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames
End use
```


#### Ejemplo 2

Queremos combinar *$sharedColl1* and *$sharedColl2*. Dado que pertenecen a diferentes grupos compartidos, una combinación directa daría lugar a un error. Por lo tanto, debemos hacer una copia compartida de *$sharedColl1* y designar *$sharedColl2* como grupo compartido para la copia.

```4d
var $sharedColl1;$sharedColl2;$copyColl : Collection

$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
$sharedColl2:=New shared collection(New shared object("lastname";"Brown"))

//$copyColl pertenece al mismo grupo compartido que $sharedColl2
 $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
 Use($sharedColl2)
    $sharedColl2.combine($copyColl)
 End use
```

#### Ejemplo 3

Tenemos una colección Clásica (*$lastnames*) y queremos ponerla en el **Storage** de la aplicación. Para ello, debemos crear previamente una copia compartida (*$sharedLastnames*).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames es una colección clásica

$sharedLastnames:=$lastnames.copy(ck shared) // copia compartida

Use(Storage)
    Storage.lastnames:=$sharedLastnames
End use
```

#### Ejemplo 4

Este ejemplo ilustra el uso de la opción `ck resolve pointers`:

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //displays "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //displays "Hello You!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //muestra "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //muestra "Hello You!"
```


<!-- END REF -->





<!-- REF collection.count().Desc -->
## .count()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.count().Syntax -->

**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.count().Params -->
| Parámetros   | Type |    | Descripción                                                      |
| ------------ | ---- |:--:| ---------------------------------------------------------------- |
| propertyPath | Text | -> | Ruta de la propiedad del objeto que se utilizará para el cálculo |
| Result       | Real | <- | Número de elementos en la colección|<!-- END REF -->


|


#### Descripción

The `.count()` function <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

Si la colección contiene objetos, se puede pasar el parámetro *propertyPath*. En este caso, sólo se tienen en cuenta los elementos que contienen la *propertyPath*.

#### Ejemplo

```4d
 var $col : Collection
 var $count1;$count2 : Real
 $col:=New collection(20;30;Null;40)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $col.push(New object("lastName";"Henry";"salary";12000))
 $count1:=$col.count() //$count1=7
 $count2:=$col.count("name") //$count2=3

```

<!-- END REF -->





<!-- REF collection.countValues().Desc -->
## .countValues()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.countValues().Syntax -->

**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.countValues().Params -->
| Parámetros   | Type                                            |    | Descripción                                                      |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection | -> | Valor a contar                                                   |
| propertyPath | Text                                            | -> | Ruta de la propiedad del objeto que se utilizará para el cálculo |
| Result       | Real                                            | <- | Number of occurrences of the value  |<!-- END REF -->


|


#### Descripción

The `.countValues()` function <!-- REF #collection.countValues().Summary -->returns the number of times value is found in the collection<!-- END REF -->.

Puede pasar en *value*:

*   un valor escalar (texto, número, booleano, fecha),
*   una referencia de objeto o de colección.


Para encontrar un elemento, el tipo de *value* debe ser equivalente al tipo del elemento; el método utiliza el operador de igualdad.

El parámetro opcional *propertyPath* permite contar valores dentro de una colección de objetos: pase en *propertyPath* la ruta de la propiedad cuyos valores quiere contar.
> Esta función no modifica la colección original.

#### Ejemplo 1

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection(1;2;5;5;5;3;6;4)
 $vCount:=$col.countValues(5) // $vCount=3
```


#### Ejemplo 2

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection
 $col.push(New object("name";"Smith";"age";5))
 $col.push(New object("name";"Wesson";"age";2))
 $col.push(New object("name";"Jones";"age";3))
 $col.push(New object("name";"Henry";"age";4))
 $col.push(New object("name";"Gross";"age";5))
 $vCount:=$col.countValues(5;"age") //$vCount=2
```


#### Ejemplo 3

```4d
 var $numbers; $letters : Collection
 var $vCount : Integer

 $letters:=New collection("a";"b";"c")
 $numbers:=New collection(1;2;$letters;3;4;5)

 $vCount:=$numbers.countValues($letters) //$vCount=1
```


<!-- END REF -->





<!-- REF collection.distinct().Desc -->
## .distinct()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.distinct().Syntax -->

**.distinct**( {*option* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.distinct().Params -->
| Parámetros   | Type       |    | Descripción                                                           |
| ------------ | ---------- |:--:| --------------------------------------------------------------------- |
| option       | Integer    | -> | `ck diacritical`: evaluación diacrítica ("A" # "a" por ejemplo)       |
| propertyPath | Text       | -> | Ruta del atributo cuyos valores distintos desea obtener               |
| Result       | Collection | <- | Nueva colección con sólo valores distintos|<!-- END REF -->


|


#### Descripción

La función `.distinct()` <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.
> Esta función no modifica la colección original.

La colección devuelta se clasifica automáticamente. Los valores **Null** no se devuelven.

Por defecto, se realiza una evaluación no diacrítica. Si desea que la evaluación distinga entre mayúsculas y minúsculas o que diferencie los caracteres acentuados, pase la constante `ck diacritical` en el parámetro *option*.

Si la colección contiene objetos, puede pasar el parámetro *propertyPath* para indicar la propiedad del objeto cuyos valores distintos desea obtener.



#### Ejemplo

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
```

<!-- END REF -->





<!-- REF collection.equal().Desc -->
## .equal()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.equal().Syntax -->

**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->
| Parámetros  | Type       |    | Descripción                                                                               |
| ----------- | ---------- |:--:| ----------------------------------------------------------------------------------------- |
| collection2 | Collection | -> | Colección a comparar                                                                      |
| option      | Integer    | -> | `ck diacritical`: evaluación diacrítica ("A" # "a" por ejemplo)                           |
| Result      | Boolean    | <- | True si las colecciones son idénticas, false en caso contrario|<!-- END REF -->


|


#### Descripción

The `.equal()` function <!-- REF #collection.equal().Summary -->compares the collection with collection2 <!-- END REF -->and returns **true** if they are identical (deep comparison).

Por defecto, se realiza una evaluación no diacrítica. Si desea que la evaluación diferencie entre mayúsculas y minúsculas o que diferencie los caracteres acentuados, pase la constante `ck diacritical` en el parámetro option.
> Esta función no modifica la colección original.

#### Ejemplo

```4d
 var $c; $c2 : Collection
 var $b : Boolean

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3;4)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("1";"a";"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2) // true

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2;ck diacritical) //false
```

<!-- END REF -->




<!-- REF collection.every().Desc -->
## .every()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.every().Syntax -->

**.every**( { *startFrom* : Integer ; } *formula* : 4D.Function { ;*...param* : any } ) : Boolean<br/>**.every**( { *startFrom* : Integer ; } *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->
| Parámetros | Type        |    | Descripción                                                                  |
| ---------- | ----------- |:--:| ---------------------------------------------------------------------------- |
| startFrom  | Integer     | -> | Índice para iniciar la prueba en                                             |
| formula    | 4D.Function | -> | Objeto formula                                                               |
| methodName | Text        | -> | Nombre de un método                                                          |
| param      | Mixed       | -> | Parameter(s) to pass to *formula* or *methodName*                            |
| Result     | Boolean     | <- | True if all elements successfully passed the test|<!-- END REF -->


|


#### Descripción

The `.every()` function <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided *formula* object or *methodName* name<!-- END REF -->.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- o en *methodName*, el nombre de un método proyecto (texto).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. Recibe un objeto `` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2*: param
*   en *$N...*: paramN...

Puede definir los siguientes parámetros:

*   (mandatory if you used a method) *$1.result* (Boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (Boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

In all cases, at the point when the `.every()` function encounters the first collection element evaluated to **false**, it stops calling the callback and returns **false**.

Por defecto, `.every()` comprueba toda la colección. Opcionalmente, se puede pasar en *startFrom* el índice del elemento desde el que iniciar la prueba.

*   Si *startFrom* >= la longitud de la colección, se devuelve **false<**, lo que significa que la colección no se prueba.
*   Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*).
*   Si *startFrom* = 0, se busca en toda la colección (por defecto).


#### Ejemplo 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) //returns true
$c.push(-1)
$b:=$c.every($f) //returns false
```

#### Ejemplo 2

Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

```4d
var $c : Collection
var $b : Boolean
var $f : 4D.Function

$f:=Formula(Value type($1.value)=$2
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f;Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every($f;Is real) //$b=false
```


<!-- END REF -->




<!-- REF collection.extract().Desc -->
## .extract()

<details><summary>Histórico</summary>

|Version|Changes|

|---|---| |v16 R6|Added|

</details>

<!-- REF #collection.extract().Syntax -->

**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #collection.extract().Params -->
| Parámetros   | Type       |    | Descripción                                                                                                                             |
| ------------ | ---------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       | -> | Ruta de la propiedad del objeto cuyos valores deben ser extraídos a la nueva colección                                                  |
| targetpath   | Text       | -> | Ruta de la propiedad de destino o nombre de la propiedad                                                                                |
| option       | Integer    | -> | `ck keep null`: incluye la propiedad null en la colección devuelta (se ignora por defecto). Parámetro ignorado si se pasa *targetPath*. |
| Result       | Collection | <- | New collection containing extracted values|<!-- END REF -->


|


#### Descripción

La función `.extract()` <!-- REF #collection.extract().Summary -->creates and returns a new collection containing *propertyPath* values extracted from the original collection of objects<!-- END REF -->.
> Esta función no modifica la colección original.

El contenido de la colección devuelta depende del parámetro *targetPath*:

*   Si se omite el parámetro, *targetPath*, `.extract()` rellena la nueva colección con los valores de *propertyPath* de la colección original.

    Por defecto, los elementos cuya *propertyPath* es null o indefinida se ignoran en la colección resultante. Puede pasar la constante `ck keep null` en el parámetro *option* para incluir estos valores como elementos nulos en la colección devuelta.


*   Si se pasan uno o más parámetros *targetPath*, `.extract()` rellena la nueva colección con las propiedades *propertyPath* y cada elemento de la nueva colección es un objeto con propiedades *targetPath* rellenadas con las propiedades *propertyPath* correspondientes. Se mantienen los valores null (el parámetro *option* se ignora) con esta sintaxis.


#### Ejemplo 1

```4d
var $c : Collection
$c:=New collection
$c.push(New object("name";"Cleveland"))
$c.push(New object("zip";5321))
$c.push(New object("name";"Blountsville"))
$c.push(42)
$c2:=$c.extract("name") // $c2=[Cleveland,Blountsville]
$c2:=$c.extract("name";ck keep null) //$c2=[Cleveland,null,Blountsville,null]
```


#### Ejemplo 2


```4d
var $c : Collection
$c:=New collection
$c.push(New object("zc";35060))
$c.push(New object("name";Null;"zc";35049))
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$c2:=$c.extract("name";"City") //$c2=[{City:null},{City:Cleveland},{City:Blountsville},{City:Adger},{City:Clanton},{City:Clanton}]
$c2:=$c.extract("name";"City";"zc";"Zip") //$c2=[{Zip:35060},{City:null,Zip:35049},{City:Cleveland,Zip:35049},{City:Blountsville,Zip:35031},{City:Adger,Zip:35006},{City:Clanton,Zip:35046},{City:Clanton,Zip:35045}]
```


<!-- END REF -->




<!-- REF collection.fill().Desc -->
## .fill()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.fill().Syntax -->

**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.fill().Params -->
| Parámetros | Type                                            |    | Descripción                                                       |
| ---------- | ----------------------------------------------- |:--:| ----------------------------------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean | -> | Valor a asignar                                                   |
| startFrom  | Integer                                         | -> | Índice de inicio (incluido)                                       |
| end        | Integer                                         | -> | Índice final (no incluido)                                        |
| Result     | collection                                      | <- | Original collection with filled values|<!-- END REF -->


|


#### Descripción

La función `.fill()` <!-- REF #collection.fill().Summary -->fills the collection with the specified *value*, optionally from *startFrom* index to *end* index, and returns the resulting collection<!-- END REF -->.
> Esta función modifica la colección original.

*   Si se omite el parámetro *startFrom*, *value* se define en todos los elementos de la colección (*startFrom*=0).
*   Si se pasa el parámetro *startFrom* y se omite *end*, *value* se establece en los elementos de la colección empezando por *startFrom* hasta el último elemento de la colección (*end*=length).
*   Si se pasan ambos parámetros *startFrom* y *end*, *value* se establece en los elementos de la colección empezando por *startFrom* hasta el elemento *end*.

En caso de incoherencia, se aplican las siguientes reglas:

*   Si *startFrom* < 0, se recalcula como *startFrom:=startFrom+length* (se considera el desplazamiento desde el final de la colección). Si el valor calculado es negativo, *startFrom* toma el valor 0.
*   Si *end* < 0 , se recalcula como *end:=end+length*.
*   Si *end* < *startFrom* (valores pasados o calculados), el método no hace nada.


#### Ejemplo

```4d
 var $c : Collection
 $c:=New collection(1;2;3;"Lemon";Null;"";4;5)
 $c.fill("2") // $c:=[2,2,2,2,2,2,2,2]
 $c.fill("Hello";5) // $c=[2,2,2,2,2,Hello,Hello,Hello]
 $c.fill(0;1;5) // $c=[2,0,0,0,0,Hello,Hello,Hello]
 $c.fill("world";1;-5) //-5+8=3 -> $c=[2,"world","world",0,0,Hello,Hello,Hello]
```


<!-- END REF -->




<!-- REF collection.filter().Desc -->
## .filter()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.filter().Syntax -->

**.filter**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->


<!-- REF #collection.filter().Params -->
| Parámetros | Type        |    | Descripción                                                                           |
| ---------- | ----------- |:--:| ------------------------------------------------------------------------------------- |
| formula    | 4D.Function | -> | Objeto formula                                                                        |
| methodName | Text        | -> | Nombre de un método                                                                   |
| param      | any         | -> | Parameter(s) to pass to *formula* or *methodName*                                     |
| Result     | Collection  | <- | New collection containing filtered elements (shallow copy)|<!-- END REF -->


|


#### Descripción

La función `.filter()` <!-- REF #collection.filter().Summary -->returns a new collection containing all elements of the original collection for which the *formula* or *methodName* result is **true**<!-- END REF -->. Esta función devuelve una ***copia superficial***, lo que significa que los objetos o colecciones de ambas colecciones comparten la misma referencia. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.
> Esta función no modifica la colección original.

You designate the callback to be executed to filter collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- o en *methodName*, el nombre de un método proyecto (texto).

The callback is called with the parameter(s) passed in *param* (optional). The callback is called with the parameter(s) passed in *param* (optional). Recibe un objeto `` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2*: param
*   en *$N...*: paramN...

Puede definir los siguientes parámetros:

*   (mandatory if you used a method) *$1.result* (Boolean): **true** if the element value matches the filter condition and must be kept, **false** otherwise.
*   *$1.stop* (Boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.


#### Ejemplo 1

Desea obtener la colección de elementos de texto cuya longitud es inferior a 6:

```4d
var $col;$colNew : Collection
$col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
$colNew:=$col.filter(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 6)
  //$colNew=["hello","world","tim","miami"]
```

#### Ejemplo 2

Quiere filtrar los elementos según su tipo de valor:

```4d
 var $c;$c2;$c3 : Collection
 var $f : 4D.Function

 $f:=Formula(OB Get type($1;"value")=$2)
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter($f;Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter($f;Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

<!-- END REF -->





<!-- REF collection.find().Desc -->
## .find()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.find().Syntax -->

**.find**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : any<br/>**.find**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->


<!-- REF #collection.find().Params -->
| Parámetros | Type        |    | Descripción                                                                        |
| ---------- | ----------- |:--:| ---------------------------------------------------------------------------------- |
| startFrom  | Integer     | -> | Índice para iniciar la búsqueda en                                                 |
| formula    | 4D.Function | -> | Objeto formula                                                                     |
| methodName | Text        | -> | Nombre de un método                                                                |
| param      | any         | -> | Parameter(s) to pass to *formula* or *methodName*                                  |
| Result     | any         | <- | Primer valor encontrado, o Undefined si no se encuentra|<!-- END REF -->


|


#### Descripción

La función `.find()` <!-- REF #collection.find().Summary -->devuelve el primer valor de la colección cuyo resultado *formula* o *methodName*, aplicado a cada elemento, devuelve **true**<!-- END REF -->.
> Esta función no modifica la colección original.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- o en *methodName*, el nombre de un método proyecto (texto).

The callback is called with the parameter(s) passed in *param* (optional). The callback is called with the parameter(s) passed in *param* (optional). Recibe un objeto `` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2*: param
*   en *$N...*: paramN...

Puede definir los siguientes parámetros:

*   (obligatorio si ha utilizado un método) *$1.result* (booleano): **true** si el valor del elemento coincide con la condición de búsqueda, **false** en caso contrario.
*   *$1.stop* (Boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.


Por defecto, `.find()` busca en toda la colección. Opcionalmente, se puede pasar en *startFrom* el índice del elemento desde el que iniciar la búsqueda.

*   Si *startFrom* >= la longitud de la colección, se devuelve -1, lo que significa que la colección no se busca.
*   Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*). **Nota**: incluso si *startFrom* es negativo, la colección se sigue buscando de izquierda a derecha.
*   Si *startFrom* = 0, se busca en toda la colección (por defecto).


#### Ejemplo 1

Quiere obtener el primer elemento de texto con una longitud menor que 5:

```4d
var $col : Collection
$col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
$value:=$col.find(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 5) //$value="tim"
```

#### Ejemplo 2

Quiere encontrar el nombre de una ciudad dentro de una colección:

```4d
var $c : Collection
var $c2 : Object
$c:=New collection
$c.push(New object("name"; "Cleveland"; "zc"; 35049))
$c.push(New object("name"; "Blountsville"; "zc"; 35031))
$c.push(New object("name"; "Adger"; "zc"; 35006))
$c.push(New object("name"; "Clanton"; "zc"; 35046))
$c.push(New object("name"; "Clanton"; "zc"; 35045))

$c2:=$c.find(Formula($1.value.name=$2); "Clanton")  //$c2={name:Clanton,zc:35046}

```
<!-- END REF -->





<!-- REF collection.findIndex().Desc -->
## .findIndex()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>


<!-- REF #collection.findIndex().Syntax -->

**.findIndex**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : Integer<br/>**.findIndex**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->


<!-- REF #collection.findIndex().Params -->
| Parámetros | Type        |    | Descripción                                                               |
| ---------- | ----------- |:--:| ------------------------------------------------------------------------- |
| startFrom  | Integer     | -> | Índice para iniciar la búsqueda en                                        |
| formula    | 4D.Function | -> | Objeto formula                                                            |
| methodName | Text        | -> | Nombre de un método                                                       |
| param      | any         | -> | Parameter(s) to pass to *formula* or *methodName*                         |
| Result     | Integer     | <- | Index of first value found, or -1 if not found|<!-- END REF -->


|


#### Descripción

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which *formula* or *methodName*, applied on each element, returns **true**<!-- END REF -->.
> Esta función no modifica la colección original.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- *methodName*, el nombre de un método proyecto (texto).

The callback is called with the parameter(s) passed in *param* (optional). The callback is called with the parameter(s) passed in *param* (optional). Recibe un objeto `` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2*: param
*   en *$N...*: paramN...

Puede definir los siguientes parámetros:

*   (obligatorio si ha utilizado un método) *$1.result* (booleano): **true** si el valor del elemento coincide con la condición de búsqueda, **false** en caso contrario.
*   *$1.stop* (Boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

Por defecto, `.findIndex()` busca en toda la colección. Opcionalmente, se puede pasar en *startFrom* el índice del elemento desde el que iniciar la búsqueda.

*   Si *startFrom* >= la longitud de la colección, se devuelve -1, lo que significa que la colección no se busca.
*   Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*). **Nota**: incluso si *startFrom* es negativo, la colección se sigue buscando de izquierda a derecha.
*   Si *startFrom* = 0, se busca en toda la colección (por defecto).

#### Ejemplo

Quiere encontrar la posición del primer nombre de ciudad dentro de una colección:

```4d
var $c : Collection
var $val2;$val3 : Integer
$c:=New collection
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$val2:=$c.findIndex(Formula($1.value.name=$2);"Clanton") // $val2=3
$val3:=$c.findIndex($val2+1;Formula($1.value.name=$2);"Clanton") //$val3=4
```

<!-- END REF -->





<!-- REF collection.indexOf().Desc -->
## .indexOf()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.indexOf().Syntax -->

**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->
| Parámetros | Type      |    | Descripción                                                                                             |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------------------------- |
| toSearch   | expresión | -> | Expresión a buscar en la colección                                                                      |
| startFrom  | Integer   | -> | Índice para iniciar la búsqueda en                                                                      |
| Result     | Integer   | <- | Index of the first occurrence of toSearch in the collection, -1 if not found|<!-- END REF -->


|


#### Descripción

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.
> Esta función no modifica la colección original.

En *toSearch*, pase la expresión a encontrar en la colección. Puede pasar:

*   un valor escalar (texto, número, booleano, fecha),
*   el valor null,
*   una referencia de objeto o de colección.

*toSearch* debe coincidir exactamente con el elemento a encontrar (se aplican las mismas reglas que para el operador de igualdad del tipo de datos).

Opcionalmente, puede pasar el índice de la colección desde el que iniciar la búsqueda en *startFrom*.

*   Si *startFrom* >= la longitud de la colección, se devuelve -1, lo que significa que la colección no se busca.
*   Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*). **Nota**: incluso si *startFrom* es negativo, la colección se sigue buscando de izquierda a derecha.
*   Si *startFrom* = 0, se busca en toda la colección (por defecto).

#### Ejemplo







```4d
 var $col : Collection
 var $i : Integer
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5)
 $i:=$col.indexOf(3) //$i=4
 $i:=$col.indexOf(5;5) //$i=9
 $i:=$col.indexOf("al@") //$i=5
 $i:=$col.indexOf("Hello") //$i=-1
```

<!-- END REF -->





<!-- REF collection.indices().Desc -->
## .indices()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.indices().Syntax -->

**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.indices().Params -->
| Parámetros  | Type       |    | Descripción                                                                         |
| ----------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| queryString | Text       | -> | Criterio de búsqueda                                                                |
| value       | any        | -> | Valor(es) a comparar cuando se utiliza(n) marcador(es) de posición                  |
| Result      | Collection | <- | Element index(es) matching queryString in the collection|<!-- END REF -->


|


#### Descripción

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the *queryString* search conditions<!-- END REF -->, and not elements themselves. Los índices se devuelven en orden ascendente.
> Esta función no modifica la colección original.

El parámetro *queryString* utiliza la siguiente sintaxis:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

Para una descripción detallada de los parámetros *queryString* y *value*, consulte la función `dataClass.query()`.

#### Ejemplo


```4d
 var $c; $icol : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))

 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $icol:=$c.indices("name = :1";"Cleveland") // $icol=[0]
 $icol:=$c.indices("zc > 35040") // $icol=[0,3,4]
```

<!-- END REF -->




<!-- REF collection.insert().Desc -->
## .insert()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.insert().Syntax -->

**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->
| Parámetros | Type       |    | Descripción                                                                |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------- |
| index      | Integer    | -> | Dónde insertar el elemento                                                 |
| element    | any        | -> | Elemento a insertar en la colección                                        |
| Result     | Collection | <- | Original collection containing inserted element|<!-- END REF -->


|


#### Descripción

La función `.insert()` <!-- REF #collection.insert().Summary --> inserta *element* en la posición *índice* especificada en la instancia de la colección y devuelve la colección editada<!-- END REF -->.
> Esta función modifica la colección original.

En *index*, pase la posición donde quiere que se inserte el elemento en la colección.
> Esta función no modifica la colección original.

*   Si *índice* > la longitud de la colección, el índice inicial real se fijará en la longitud de la colección.
*   Si *index* <0, se recalcula como *index:=index+length* (se considera el desplazamiento desde el final de la colección).
*   Si el valor calculado es negativo, index toma el valor 0.

Se puede insertar cualquier tipo de elemento aceptado por una colección, incluso otra colección.

#### Ejemplo

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d") //$col=["a","b","c","d"]
 $col.insert(2;"X") //$col=["a","b","X","c","d"]
 $col.insert(-2;"Y") //$col=["a","b","X","Y","c","d"]
 $col.insert(-10;"Hi") //$col=["Hi","a","b","X","Y","c","d"]
```

<!-- END REF -->





<!-- REF collection.join().Desc -->
## .join()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.join().Syntax -->

**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->
| Parámetros | Type    |    | Descripción                                                                                                      |
| ---------- | ------- |:--:| ---------------------------------------------------------------------------------------------------------------- |
| delimiter  | Text    | -> | Separador a utilizar entre elementos                                                                             |
| option     | Integer | -> | `ck ignore null or empty`: ignorar las cadenas nulas y vacías en el resultado                                    |
| Result     | Text    | <- | Cadena que contiene todos los elementos de la colección, separados por un delimitador|<!-- END REF -->


|


#### Descripción

La función `.join()` <!-- REF #collection.join().Summary -->convierte todos los elementos de la colección en cadenas y los concatena utilizando el delimitador *especificado* cadena como separador<!-- END REF -->. La función devuelve la cadena resultante.
> Esta función no modifica la colección original.

Por defecto, los elementos nulos o vacíos de la colección se devuelven en la cadena resultante. Pase la constante `ck ignore null o empty` en el parámetro *option* si quiere eliminarlos de la cadena resultante.

#### Ejemplo


```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```

<!-- END REF -->




<!-- REF collection.lastIndexOf().Desc -->
## .lastIndexOf()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.lastIndexOf().Syntax -->

**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->
| Parámetros | Type      |    | Descripción                                                                                                  |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------------------------------ |
| toSearch   | expresión | -> | El elemento que se va a buscar dentro de la colección                                                        |
| startFrom  | Integer   | -> | Índice para iniciar la búsqueda en                                                                           |
| Result     | Integer   | <- | Índice de la última ocurrencia de toSearch en la colección, -1 si no se encuentra|<!-- END REF -->


|


#### Descripción

La función `.lastIndexOf()` <!-- REF #collection.lastIndexOf().Summary -->busca la expresión *toSearch* entre los elementos de la colección y devuelve el índice de la última aparición<!-- END REF -->o -1 si no se encuentra.
> Esta función no modifica la colección original.

En *toSearch*, pase la expresión a encontrar en la colección. Puede pasar:

*   un valor escalar (texto, número, booleano, fecha),
*   el valor null,
*   una referencia de objeto o de colección.

*toSearch* debe coincidir exactamente con el elemento a encontrar (se aplican las mismas reglas que para el operador de igualdad).

Opcionalmente, puede pasar el índice de la colección desde el cual iniciar una búsqueda en reversa en *startFrom*.

*   Si *startFrom* >= la longitud de la colección menos uno (coll.length-1), se busca en toda la colección (por defecto).
*   Si *startFrom* < 0, se recalcula como *startFrom:=startFrom+length* (se considera el desplazamiento desde el final de la colección). Si el valor calculado es negativo, se devuelve -1 (no se busca en la colección). **Nota:** incluso si *startFrom* es negativo, la colección se sigue buscando de derecha a izquierda.
*   Si *startFrom* = 0, se devuelve -1 lo que significa que la colección no se busca.

#### Ejemplo


```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer 
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") //devuelve 12
 $pos2:=$col.lastIndexOf("e";6) //devuelve 4
 $pos3:=$col.lastIndexOf("e";15) //devuelve 12
 $pos4:=$col.lastIndexOf("e";-2) //devuelve 10
 $pos5:=$col.lastIndexOf("x") //devuelve -1
```

<!-- END REF -->




<!-- REF collection.length.Desc -->
## .length

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R5  | Añadidos       |

</details>

<!-- REF #collection.length.Syntax -->

**.length**: Integer
<!-- END REF -->



#### Descripción

La propiedad `.length` <!-- REF #collection.length.Summary -->devuelve el número de elementos de la colección<!-- END REF -->.

La propiedad `.length` se inicializa cuando se crea la colección. Añadir o eliminar elementos actualiza la longitud, si es necesario. Esta propiedad es **sólo lectura** (no se puede utilizar para definir el tamaño de la colección).

#### Ejemplo


```4d
 var $col : Collection //$col.length inicializada en 0
 $col:=New collection("one";"two";"three") //$col.length actualizada a 3
 $col[4]:="five" //$col.length actualizada a 5
 $vSize:=$col.remove(0;3).length //$vSize=2
```

<!-- END REF -->




<!-- REF collection.map().Desc -->
## .map()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.map().Syntax -->

**.map**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.map().Params -->
| Parámetros | Type        |    | Descripción                                                   |
| ---------- | ----------- |:--:| ------------------------------------------------------------- |
| formula    | 4D.Function | -> | Objeto formula                                                |
| methodName | Text        | -> | Nombre de un método                                           |
| param      | any         | -> | Parameter(s) to pass to *formula* or *methodName*             |
| Result     | Collection  | <- | Colección de valores transformados|<!-- END REF -->


|


#### Descripción

La función `.map()` <!-- REF #collection.map().Summary -->crea una nueva colección basada en el resultado de la llamada a la fórmula ** 4D función o *methodName* método en cada elemento de la colección original<!-- END REF -->. Opcionalmente, puede pasar parámetros a *formula* o*methodName* utilizando el(los) parámetro(s) *param*. `.map()` siempre devuelve una colección con el mismo tamaño que la colección original.
> Esta función no modifica la colección original.


You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- o en *methodName*, el nombre de un método proyecto (texto).

The callback is called with the parameter(s) passed in *param* (optional). The callback is called with the parameter(s) passed in *param* (optional). Recibe un objeto `` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2*: param
*   en *$N...*: paramN...

Puede definir los siguientes parámetros:

*   (obligatorio si ha utilizado un método) *$1.result* (cualquier tipo): nuevo valor transformado para añadir a la colección resultante
*   *$1.stop* (Boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.


#### Ejemplo


```4d
var $c; $c2 : Collection
$c:=New collection(1; 4; 9; 10; 20)
$c2:=$c.map(Formula(Round(($1.value/$2)*100; 2)); $c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

<!-- END REF -->





<!-- REF collection.max().Desc -->
## .max()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.max().Syntax -->

**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->
| Parámetros   | Type                                            |    | Descripción                                                         |
| ------------ | ----------------------------------------------- |:--:| ------------------------------------------------------------------- |
| propertyPath | Text                                            | -> | Ruta de la propiedad del objeto que se utilizará para la evaluación |
| Result       | Boolean, Text, Number, Collection, Object, Date | <- | Valor máximo en la colección|<!-- END REF -->


|


#### Descripción

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> Esta función no modifica la colección original.

Si la colección contiene diferentes tipos de valores, la función `.max()` devolverá el valor máximo dentro del último tipo de elemento en el orden de la lista de tipos (ver la descripción de [`.sort()`](#sort)).

Si la colección contiene objetos, pase el parámetro *propertyPath* para indicar la propiedad del objeto cuyo valor máximo desea obtener.

Si la colección está vacía, `.max()` devuelve *Undefined*.

#### Ejemplo


```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $max:=$col.max() //{name:Alabama,salary:10500}
 $maxSal:=$col.max("salary") //50000
 $maxName:=$col.max("name") //"Wesson"
```

<!-- END REF -->




<!-- REF collection.min().Desc -->
## .min()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.min().Syntax -->

**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->
| Parámetros   | Type                                            |    | Descripción                                                         |
| ------------ | ----------------------------------------------- |:--:| ------------------------------------------------------------------- |
| propertyPath | Text                                            | -> | Ruta de la propiedad del objeto que se utilizará para la evaluación |
| Result       | Boolean, Text, Number, Collection, Object, Date | <- | Valor mínimo en la colección|<!-- END REF -->


|


#### Descripción

La función `.min()` <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> Esta función no modifica la colección original.

Si la colección contiene diferentes tipos de valores, la función `.min()` devolverá el valor mínimo dentro del primer tipo de elemento en el orden de la lista de tipos (ver la descripción de [`.sort()`](#sort)).

Si la colección contiene objetos, pase el parámetro *propertyPath* para indicar la propiedad del objeto cuyo valor mínimo desea obtener.

Si la colección está vacía, `.min()` devuelve *Undefined*.

#### Ejemplo


```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $min:=$col.min() //55
 $minSal:=$col.min("salary") //10000
 $minName:=$col.min("name") //"Alabama"
```

<!-- END REF -->




<!-- REF collection.orderBy().Desc -->
## .orderBy()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.orderBy().Syntax -->

**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->


<!-- REF #collection.orderBy().Params -->
| Parámetros  | Type       |    | Descripción                                                                   |
| ----------- | ---------- |:--:| ----------------------------------------------------------------------------- |
| pathStrings | Text       | -> | Ruta(s) de propiedad(es) a utilizar para ordenar la colección                 |
| pathObjects | Collection | -> | Colección de objetos criterio                                                 |
| ascOrDesc   | Integer    | -> | `ck ascending` o `ck descending` (valores escalares)                          |
| Result      | Collection | <- | Copia ordenada de la colección (copia superficial)|<!-- END REF -->


|


#### Descripción

La función `.orderBy()` <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

Esta función devuelve una *copia superficial*, lo que significa que los objetos o colecciones de ambas colecciones comparten la misma referencia. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.
> Esta función no modifica la colección original.

Si no se pasa ningún parámetro, la función ordena los valores escalares de la colección en orden ascendente (otros tipos de elementos, como objetos o colecciones, se devuelven desordenados). Puede modificar este orden automático pasando las constantes `ck ascending` o `ck descending` en el parámetro *ascOrDesc* (ver más abajo).

También puede pasar un parámetro de criterios para definir cómo deben ordenarse los elementos de la colección. Se admiten tres sintaxis para este parámetro:

*   *pathStrings*: Texto (fórmula). **Sintaxis**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (orden por defecto: asc). *pathStrings* contiene una fórmula compuesta de 1 a x rutas de propiedades y (opcionalmente) órdenes de clasificación, separados por comas. El orden en que se pasan las propiedades determina la prioridad de ordenación de los elementos de la colección. Por defecto, las propiedades se clasifican en orden ascendente. Puede definir el orden de clasificación de una propiedad en la cadena de criterios, separado de la ruta de la propiedad por un solo espacio: pase "asc" para ordenar en orden ascendente o "desc" en orden descendente.

*   *pathObjects* : Collection. Puede añadir tantos objetos en la colección *pathObjects* como sea necesario. Por defecto, las propiedades se clasifican en orden ascendente ("descending" es false). Cada elemento de la colección contiene un objeto estructurado de la siguiente manera:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

*   *ascOrDesc*: Integer. Se pasa una de las siguientes constantes del tema **Objects and collections**:

    | Constante     | Type    | Value | Comentario                                                 |
    | ------------- | ------- | ----- | ---------------------------------------------------------- |
    | ck ascending  | Longint | 0     | Los elementos se ordenan de forma ascendente (por defecto) |
    | ck descending | Longint | 1     | Los elementos se ordenan de forma descendente              |

    Esta sintaxis sólo ordena los valores escalares de la colección (otros tipos de elementos, como objetos o colecciones, se devuelven desordenados).

Si la colección contiene elementos de diferentes tipos, se agrupan primero por tipo y se ordenan después. Si *attributePath* lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después.

1.  null
2.  booleans
3.  cadenas
4.  numbers
5.  objects
6.  collections
7.  dates

#### Ejemplo 1

Ordenar una colección de números de forma ascendente y descendente:

```4d
 var $c; $c2; $3 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```


#### Ejemplo 2

Ordenar una colección de objetos a partir de una fórmula de texto con nombres de propiedades:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $c2:=$c.orderBy("value desc")
 $c2:=$c.orderBy("value desc, id")
 $c2:=$c.orderBy("value desc, id asc")
```

Ordenar una colección de objetos con una ruta de propiedades:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```


#### Ejemplo 3

Ordenar una colección de objetos utilizando una colección de objetos criterio:

```4d
 var $crit; $c; $c2 : COllection
 $crit:=New collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $crit.push(New object("propertyPath";"value";"descending";True))
 $crit.push(New object("propertyPath";"id";"descending";False))
 $c2:=$c.orderBy($crit)
```

Ordenar con una ruta de propiedad:

```4d
 var $crit; $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))
 $crit:=New collection(New object("propertyPath";"phones.p2";"descending";True))
 $c2:=$c.orderBy($crit)
```


<!-- END REF -->





<!-- REF collection.orderByMethod().Desc -->
## .orderByMethod()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.orderByMethod().Syntax -->

**.orderByMethod**( *formula* : 4D.Function { ; ...*extraParam* : expression } ) : Collection<br/>**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection<!-- END REF -->


<!-- REF #collection.orderByMethod().Params -->
| Parámetros | Type        |    | Descripción                                                                   |
| ---------- | ----------- |:--:| ----------------------------------------------------------------------------- |
| formula    | 4D.Function | -> | Objeto formula                                                                |
| methodName | Text        | -> | Nombre de un método                                                           |
| extraParam | any         | -> | Parámetro(s) a pasar                                                          |
| Result     | Collection  | <- | Copia ordenada de la colección (copia superficial)|<!-- END REF -->


|


#### Descripción

La función `.orderByMethod()` <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the *formula* 4D function or *methodName* method<!-- END REF -->.

Esta función devuelve una *copia superficial*, lo que significa que los objetos o colecciones de ambas colecciones comparten la misma referencia. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.
> Esta función no modifica la colección original.


You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- o en *methodName*, el nombre de un método proyecto (texto).

In the callback, pass some code that compares two values and returns **true** if the first value is lower than the second value. You can provide *extraParam* parameters to the callback if necessary.

La retrollamada recibe los siguientes parámetros:

- $1 (objeto), donde:
    - *$1.value* (todo tipo): primer valor del elemento a comparar
    - *$1.value2* (todo tipo): segundo valor del elemento a comparar
    - $2...$N (cualquier tipo): parámetros adicionales

Si utilizó un método, debe definir el siguiente parámetro:

- *$1.result* (boolean): **true** si *$1.value < $1.value2*, **false** de lo contrario

#### Ejemplo 1

Desea ordenar una colección de cadenas en orden numérico en lugar de orden alfabético:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod(Formula(Num($1.value)<Num($1.value2))) // $c3=["4","33","222","1111"]
```

#### Ejemplo 2

Quiere ordenar una colección de cadenas según su longitud:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod(Formula(Length(String($1.value))>Length(String($1.value2))))
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

#### Ejemplo 3

Ordenar los elementos de la colección por código de caracteres o alfabéticamente:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//using the character code:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//using the language:
$strings2:=$string1s.orderByMethod(Function(sortCollection);sk strict)
// result : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

El método ***sortCollection***:

```4d
var $1 : Object
var $2: Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```

<!-- END REF -->





<!-- REF collection.pop().Desc -->
## .pop()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>


<!-- REF #collection.pop().Syntax -->

**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->
| Parámetros | Type |    | Descripción                                                |
| ---------- | ---- |:--:| ---------------------------------------------------------- |
| Result     | any  | <- | Último elemento de la colección|<!-- END REF -->


|


#### Descripción

La función `.pop()` <!-- REF #collection.pop().Summary -->elimina el último elemento de la colección y lo devuelve como resultado de la función<!-- END REF -->.
> Esta función modifica la colección original.

Cuando se aplica a una colección vacía, `.pop()` devuelve ***undefined***.

#### Ejemplo

`.pop()`, utilizado junto con [`.push()`](#push), puede utilizarse para implementar una funcionalidad primera entrada, última salida de tratamiento de datos apilados:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Devuelve 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Devuelve [4,5]
 $stack.pop() //$stack=[]  Devuelve 1
```


<!-- END REF -->





<!-- REF collection.push().Desc -->
## .push()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.push().Syntax -->

**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->
| Parámetros | Type       |    | Descripción                                                                       |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------- |
| element    | Mixed      | -> | Elemento(s) a añadir a la colección                                               |
| Result     | Collection | <- | Colección original que contiene los elementos añadidos|<!-- END REF -->


|


#### Descripción

La función `.push()` <!-- REF #collection.push().Summary -->appends one or more *element*(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.
> Esta función modifica la colección original.


#### Ejemplo 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```



#### Ejemplo 2

Quiere ordenar la colección resultante:

```4d
 var $col; $sortedCol : Collection
 $col:=New collection(5;3;9) //$col=[5,3,9]
 $sortedCol:=$col.push(7;50).sort()
  //$col=[5,3,9,7,50]
  //$sortedCol=[3,5,7,9,50]
```



<!-- END REF -->





<!-- REF collection.query().Desc -->
## .query()

<details><summary>Histórico</summary>

| Versión | Modificaciones           |
| ------- | ------------------------ |
| v17 R5  | Soporte de querySettings |
| v16 R6  | Añadidos                 |

</details>

<!-- REF #collection.query().Syntax -->

**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->


<!-- REF #collection.query().Params -->
| Parámetros    | Type       |    | Descripción                                                                            |
| ------------- | ---------- |:--:| -------------------------------------------------------------------------------------- |
| queryString   | Text       | -> | Criterio de búsqueda                                                                   |
| value         | Mixed      | -> | Valor(es) a comparar cuando se utiliza(n) marcador(es) de posición                     |
| querySettings | Object     | -> | Opciones de búsqueda: parámetros, atributos                                            |
| Result        | Collection | <- | Elemento(s) que coincide(n) con queryString en la colección|<!-- END REF -->


|


#### Descripción

La función `.query()` <!-- REF #collection.query().Summary -->devuelve todos los elementos de una colección de objetos que coinciden con las condiciones de búsqueda <!-- END REF -->defined by *queryString* and (optionally) *value* or *querySettings*. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.
> Esta función no modifica la colección original.

El parámetro *queryString* utiliza la siguiente sintaxis:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

Para obtener información detallada sobre cómo construir una consulta utilizando los parámetros *queryString*, *value* y *querySettings*, consulte la descripción de la función [`dataClass.query()`](DataClassClass.md#query).

> Esta función no modifica la colección original.

#### Ejemplo 1

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.query("name = :1";"Cleveland") //$c2=[{name:Cleveland,zc:35049}]
 $c3:=$c.query("zc > 35040") //$c3=[{name:Cleveland,zc:35049},{name:Clanton,zc:35046},{name:Clanton,zc:35045}]
```


#### Ejemplo 2


```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

Este ejemplo devuelve las personas cuyo nombre contiene "in":

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

Este ejemplo devuelve las personas cuyo nombre no empieza por una cadena de una variable (introducida por el usuario, por ejemplo):

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

Este ejemplo devuelve las personas cuya edad no se conoce (propiedad definida como null o indefinida):

```4d
 $col:=$c.query("age=null") //no están permitidos los marcadores de posición con "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

Este ejemplo devuelve las personas contratadas hace más de 90 días:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018 si hoy es 01/10/2018
```


#### Ejemplo 3

Se pueden encontrar más ejemplos de búsquedas en la página `dataClass.query()`.

<!-- END REF -->





<!-- REF collection.reduce().Desc -->
## .reduce()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.reduce().Syntax -->

**.reduce**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduce**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->


<!-- REF #collection.reduce().Params -->
| Parámetros | Type                                            |    | Descripción                                                                       |
| ---------- | ----------------------------------------------- |:--:| --------------------------------------------------------------------------------- |
| formula    | 4D.Function                                     | -> | Objeto formula                                                                    |
| methodName | Text                                            | -> | Nombre de un método                                                               |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Value to use as the first argument to the first call of *formula* or *methodName* |
| param      | expresión                                       | -> | Parámetro(s) a pasar                                                              |
| Result     | Text, Number, Object, Collection, Date, Boolean | <- | Resultado del valor del acumulador|<!-- END REF -->


|


#### Descripción


La función `.reduce()` <!-- REF #collection.reduce().Summary -->applies the *formula* or *methodName* callback against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.
> Esta función no modifica la colección original.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- o en *methodName*, el nombre de un método proyecto (texto).

The callback takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

Puede pasar el valor para inicializar el acumulador en *initValue*. Si se omite, *$1.accumulator>* comienza con *Undefined*.

La retrollamada recibe los siguientes parámetros:

*   en *$1.value*: valor del elemento a procesar
*   en *$2: param*
*   en *$N...*: *paramN...*

La retrollamada define los siguientes parámetros:

*   *$1.accumulator*: valor que va a ser modificado por la función y que es inicializado por *initValue*.
*   *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.


#### Ejemplo 1


```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduce(Formula($1.accumulator:=$1.accumulator*$1.value); 1)  //devuelve 86400
```


#### Ejemplo 2

Este ejemplo permite reducir varios elementos de la colección a uno solo:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce(Formula(Flatten)) //$r=[0,1,2,3,4,5,6,7]
```

Con el siguiente método ***Flatten***:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->




<!-- REF collection.remove().Desc -->
## .remove()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.remove().Syntax -->

**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->


<!-- REF #collection.remove().Params -->
| Parámetros | Type       |    | Descripción                                                               |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------- |
| index      | Integer    | -> | Elemento en el que se inicia la eliminación                               |
| howMany    | Integer    | -> | Número de elementos a eliminar, o 1 elemento si se omite                  |
| Result     | Collection | <- | Original collection without removed element(s)|<!-- END REF -->


|


#### Descripción

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified *index* position in the collection and returns the edited collection<!-- END REF -->.
> Esta función modifica la colección original.

En *index*, pase la posición donde quiere eliminar el elemento de la colección.
> Esta función no modifica la colección original. If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*).

*   Si *índice* < 0, se recalcula como *index:=index+length* (se considera el desplazamiento desde el final de la colección).
*   Si el valor calculado < 0, *index* toma el valor 0.
*   Si el valor calculado > la longitud de la colección, *index* se establece para la longitud.

En *howMany*, pase el número de elementos a eliminar de *index*. Si no se especifica *howMany*, se elimina un elemento.



Si se intenta eliminar un elemento de una colección vacía, el método no hace nada (no se genera ningún error).


#### Ejemplo


```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d";"e";"f";"g";"h")
 $col.remove(3) // $col=["a","b","c","e","f","g","h"]
 $col.remove(3;2) // $col=["a","b","c","g","h"]
 $col.remove(-8;1) // $col=["b","c","g","h"]
 $col.remove(-3;1) // $col=["b","g","h"]
```

<!-- END REF -->






<!-- REF collection.resize().Desc -->
## .resize()


<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>



<!-- REF #collection.resize().Syntax -->

**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->
| Parámetros   | Type                                            |    | Descripción                                                  |
| ------------ | ----------------------------------------------- |:--:| ------------------------------------------------------------ |
| size         | Integer                                         | -> | Nuevo tamaño de la colección                                 |
| defaultValue | Number, Text, Object, Collection, Date, Boolean | -> | Valor por defecto para llenar nuevos elementos               |
| Result       | Collection                                      | <- | Colección original redimensionada|<!-- END REF -->


|


#### Descripción

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.
> Esta función modifica la colección original.

*   Si *size* < la longitud de la colección, los elementos que exceden se eliminan de la colección.
*   Si *size* > longitud de la colección, la longitud de la colección se incrementa al tamaño.

Por defecto, los nuevos elementos se llenan con valores **null**. Puede especificar el valor a llenar en los elementos añadidos utilizando el parámetro *defaultValue*.

#### Ejemplo


```4d
 var $c : Collection
 $c:=New collection
 $c.resize(10) // $c=[null,null,null,null,null,null,null,null,null,null]

 $c:=New collection
 $c.resize(10;0) // $c=[0,0,0,0,0,0,0,0,0,0]

 $c:=New collection(1;2;3;4;5)
 $c.resize(10;New object("name";"X")) //$c=[1,2,3,4,5,{name:X},{name:X},{name:X},{name:X},{name:X}]

 $c:=New collection(1;2;3;4;5)
 $c.resize(2) //$c=[1,2]

```

<!-- END REF -->






<!-- REF collection.reverse().Desc -->
## .reverse()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.reverse().Syntax -->

**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->
| Parámetros | Type       |    | Descripción                                                |
| ---------- | ---------- |:--:| ---------------------------------------------------------- |
| Result     | Collection | <- | Copia invertida de la colección|<!-- END REF -->


|


#### Descripción

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.
> Esta función no modifica la colección original.

#### Ejemplo


```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->





<!-- REF collection.shift().Desc -->
## .shift()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.shift().Syntax -->

**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->
| Parámetros | Type |    | Descripción                                                |
| ---------- | ---- |:--:| ---------------------------------------------------------- |
| Result     | any  | <- | Primer elemento de la colección|<!-- END REF -->


|


#### Descripción

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.
> Esta función modifica la colección original.

Si la colección está vacía, este método no hace nada.

#### Ejemplo


```4d
 var $c : Collection
 var $val : Variant
 $c:=New collection(1;2;4;5;6;7;8)
 $val:=$c.shift()
  // $val=1
  // $c=[2,4,5,6,7,8]
```

<!-- END REF -->







<!-- REF collection.slice().Desc -->
## .slice()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.slice().Syntax -->

**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->
| Parámetros | Type       |    | Descripción                                                                                    |
| ---------- | ---------- |:--:| ---------------------------------------------------------------------------------------------- |
| startFrom  | Integer    | -> | Índice de inicio (incluido)                                                                    |
| end        | Integer    | -> | Índice final (no incluido)                                                                     |
| Result     | Collection | <- | Nueva colección que contiene elementos cortados (copia superficial)|<!-- END REF -->


|


#### Descripción

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from *startFrom* index to *end* index (end not included). Esta función devuelve una *copia superficial* de la colección. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.
> Esta función no modifica la colección original.

La colección devuelta contiene el elemento especificado por *startFrom* y todos los elementos subsiguientes hasta, pero sin incluir, el elemento especificado por *end*. Si sólo se especifica el parámetro *startFrom*, la colección devuelta contiene todos los elementos desde *startFrom* hasta el último elemento de la colección original.

*   Si *startFrom* < 0, se recalcula como *startFrom:=startFrom+length* (se considera el desplazamiento desde el final de la colección).
*   Si el valor calculado < 0, *startFrom* toma el valor 0.
*   Si *end* < 0 , se recalcula como *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

#### Ejemplo


```4d
 var $c; $nc : Collection
 $c:=New collection(1;2;3;4;5)
 $nc:=$c.slice(0;3) //$nc=[1,2,3]
 $nc:=$c.slice(3) //$nc=[4,5]
 $nc:=$c.slice(1;-1) //$nc=[2,3,4]
 $nc:=$c.slice(-3;-2) //$nc=[3]
```

<!-- END REF -->





<!-- REF collection.some().Desc -->
## .some()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.some().Syntax -->

**.some**( { *startFrom* : Integer ; } *formula* : 4D.Function { ; *...param* : any } ) : Boolean<br/>**.some**( { *startFrom* : Integer ; } *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->


<!-- REF #collection.some().Params -->
| Parámetros | Type        |    | Descripción                                                                             |
| ---------- | ----------- |:--:| --------------------------------------------------------------------------------------- |
| startFrom  | Integer     | -> | Índice para iniciar la prueba en                                                        |
| formula    | 4D.Function | -> | Objeto formula                                                                          |
| methodName | Text        | -> | Nombre de un método                                                                     |
| param      | Mixed       | -> | Parámetro(s) a pasar                                                                    |
| Result     | Boolean     | <- | True si al menos un elemento ha superado la prueba con éxito|<!-- END REF -->


|


#### Descripción

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test implemented in the provided *formula* or *methodName* code<!-- END REF -->.

You designate the 4D code (callback) to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- o en *methodName*, el nombre de un método proyecto (texto).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. Recibe un objeto `` en el primer parámetro ($1).


La retrollamada recibe los siguientes parámetros:

*   en *$1.value*: valor del elemento a procesar
*   en *$2: param*
*   en *$N...*: *paramN...*

Puede definir los siguientes parámetros:

*   (mandatory if you used a method) *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

In any case, at the point where `.some()` function encounters the first collection element returning true, it stops calling the callback and returns **true**.

Por defecto, `.some()` comprueba toda la colección. Opcionalmente, puede pasar el índice de un elemento desde el cual iniciar la prueba en *startFrom*.

*   Si *startFrom* >= la longitud de la colección, se devuelve **False**, lo que significa que la colección no se prueba.
*   Si *startFrom* < 0, se considera como el desplazamiento desde el final de la colección.
*   Si *startFrom* = 0, se busca en toda la colección (por defecto).


#### Ejemplo

Quiere saber si al menos un valor de la colección es >0.

```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) // $b=false
 $c.push(1)
 $b:=$c.some(Formula($1.value>0)) // $b=true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) //$b=true
 $b:=$c.some(1;Formula($1.value>0)) //$b=false
```



<!-- END REF -->





<!-- REF collection.sort().Desc -->
## .sort()

<details><summary>Histórico</summary>

| Versión | Modificaciones     |
| ------- | ------------------ |
| v19 R6  | Soporte de fórmula |
| v16 R6  | Añadidos           |

</details>

<!-- REF #collection.sort().Syntax -->

**.sort**( *formula* : 4D.Function { ; *...extraParam* : any } ) : Collection<br/>**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.sort().Params -->
| Parámetros | Type        |    | Descripción                                            |
| ---------- | ----------- |:--:| ------------------------------------------------------ |
| formula    | 4D.Function | -> | Objeto formula                                         |
| methodName | Text        | -> | Nombre de un método                                    |
| extraParam | any         | -> | Parámetros del método                                  |
| Result     | Collection  | <- | Colección original ordenada|<!-- END REF -->


|


#### Descripción

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection and also returns the sorted collection<!-- END REF --> .
> Esta función modifica la colección original.

Si se llama a `.sort()` sin parámetros, sólo se ordenan los valores escalares (número, texto, fecha, booleanos). Los elementos se ordenan por defecto de forma ascendente, según su tipo.

If you want to sort the collection elements in some other order or sort any type of element, you must supply in *formula* ([Formula object](FunctionClass.md)) or *methodName* (Text) a comparison callback that compares two values and returns **true** if the first value is lower than the second value. Puede ofrecer parámetros adicionales a la retrollamada si es necesario.

La retrollamada recibe los siguientes parámetros:

- $1 (objeto), donde:
    - *$1.value* (todo tipo): primer valor del elemento a comparar
    - *$1.value2* (todo tipo): segundo valor del elemento a comparar
- $2...$N (cualquier tipo): parámetros adicionales

Si utilizó un método, debe definir el siguiente parámetro:

- *$1.result* (boolean): **true** si *$1.value < $1.value2*, **false** de lo contrario.

Si la colección contiene elementos de diferentes tipos, se agrupan primero por tipo y se ordenan después. Si *attributePath* lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después.

1.  null
2.  booleans
3.  cadenas
4.  numbers
5.  objects
6.  collections
7.  dates

#### Ejemplo 1


```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### Ejemplo 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### Ejemplo 3

```4d
var $col; $col2; $col3 : Collection
$col:=New collection(33;4;66;1111;222)
$col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) //alphabetical sort: [1111,222,33,4,66]
```

<!-- END REF -->




<!-- REF collection.sum().Desc -->
## .sum()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.sum().Syntax -->

**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->
| Parámetros   | Type |    | Descripción                                                      |
| ------------ | ---- |:--:| ---------------------------------------------------------------- |
| propertyPath | Text | -> | Ruta de la propiedad del objeto que se utilizará para el cálculo |
| Result       | Real | <- | Suma de los valores de la colección|<!-- END REF -->


|


#### Descripción

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Para el cálculo sólo se tienen en cuenta los elementos numéricos (se ignoran otros tipos de elementos).

Si la colección contiene objetos, pasa el parámetro *propertyPath* para indicar la propiedad del objeto a tener en cuenta.

`.sum()` devuelve 0 si:

*   la colección está vacía,
*   la colección no contiene elementos numéricos,
*   *propertyPath* no se encuentra en la colección.

#### Ejemplo 1


```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### Ejemplo 2

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500,5))
 $vSum:=$col.sum("salary") //$vSum=70500,5
```

<!-- END REF -->





<!-- REF collection.unshift().Desc -->
## .unshift()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |

</details>

<!-- REF #collection.unshift().Syntax -->

**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->
| Parámetros                 | Type                                   |    | Descripción                                       |
| -------------------------- | -------------------------------------- |:--:| ------------------------------------------------- |
| value                      | Text, Number, Object, Collection, Date | -> | Valor(es) a insertar al principio de la colección |
| Result                     | Real                                   | <- | Colección que contiene los elementos añadidos     |
|<!-- END REF -->


|                                        |    |                                                   |


#### Descripción

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given *value*(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.
> Esta función modifica la colección original.

Si se pasan varios valores, se insertan todos a la vez, lo que significa que aparecen en la colección resultante en el mismo orden que en la lista de argumentos.


#### Ejemplo


```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->
