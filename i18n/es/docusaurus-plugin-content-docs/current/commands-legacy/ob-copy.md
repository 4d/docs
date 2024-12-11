---
id: ob-copy
title: OB Copy
slug: /commands/ob-copy
displayed_sidebar: docs
---

<!--REF #_command_.OB Copy.Syntax-->**OB Copy** ( *objeto* {; resuelvePunt | {; *option* {; *agruparCon*}}} )  : Object<!-- END REF-->
<!--REF #_command_.OB Copy.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estructurado |
| resuelvePunt | Boolean | &#8594;  | True = resuelve los puntero, False o se omite = no resuelve punteros |
| option | Integer | &#8594;  | ck shared: devuelve un objeto compartido,ck resolve pointers: resuelve punteros antes de copiar |
| agruparCon | Collection, Object | &#8594;  | Colección u objeto compartido a agrupar con el objeto resultante |
| Resultado | Object | &#8592; | Copia de objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Copy.Summary-->El comando **OB Copy** devuelve un objeto que contiene una copia completa de las propiedades, sub objetos y valores de *objeto*.<!-- END REF-->
Si el *objeto* contiene valores de tipo de puntero, por defecto la copia también contiene los punteros. Sin embargo, puede resolver los punteros al momento de la copia pasando **True** en el parámetro *resuelvePunt*. En este caso, cada puntero presente como valor en *objeto* se evalúa al momento de la copia y se utiliza su valor desreferenciado.

**Nota:** si las propiedades del *objeto* son objetos compartidos o colecciones compartidas, se convierten en objetos o colecciones estándar (no compartidos) en la copia devuelta. Use the second syntax if you want to return shared elements (see below).

* Segunda sintaxis: **OB Copy(object{; option{; groupWith}})**

Si se pasa, el parámetro *opcion* puede contener una de las siguientes constantes (o ambas):

| **opcion**          | **Descripción**                                                                                                                                                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ck resolve pointers | Si el objeto original contiene valores de tipo puntero, por defecto la copia también contiene los punteros. Sin embargo, puede resolver los punteros al copiar pasando los ck resolve pointers. En este caso, cada puntero presente en el objeto se evalúa al copiar y se utiliza su valor desreferenciado.                     |
| ck shared           | Por defecto, **OB Copy** devuelve un objeto regular (no compartido), incluso si el comando se aplica a un objeto compartido. Pase la constante ck shared para crear un objeto compartido. En este caso, puede utilizar el parámetro *agruparCon* para asociar el objeto compartido con otra colección u objeto (ver más abajo). |

El parámetro *agruparCon* le permite designar una colección o un objeto con el que debe asociarse el objeto resultante.

**Notas:** 

* **OB Copy** puede ser usado con un objeto de selección de entidades. De forma predeterminada, si se omite ck shared, se devuelve una selección de entidades *no compartida*. Si se pasa ck shared, se devuelve una selección de entidades compartida. En este contexto, la opción *agruparCon* es inútil ya que una selección de entidades no tiene un *identificador de bloqueo*.
* El mismo principio se aplica a las selecciones de entidades almacenadas dentro de las propiedades del *objeto*. Sin embargo, el comando se optimiza cuando se pasa ck shared y una selección de entidades anidada es *compartible*: la misma referencia de selección de entidades se devuelve en el objeto resultante.
* Los objetos almacén de datos, clase de datos y entidad no se pueden copiar. Si se llama al comando **OB Copy** con ellos, se devuelve valor nulo.

#### Ejemplo 1 

Usted quiere duplicar un objeto que contiene valores simples:

```4d
 var $Object : Object
 var $JsonString : Text
 
 ARRAY OBJECT($arraySel;0)
 ALL RECORDS([Product])
 While(Not(End selection([Product])))
    OB SET($Object;"id";[Product]ID_Product)
    OB SET($Object;"Product Name";[Product]Product_Name)
    OB SET($Object;"Price";[Product]Price)
    OB SET($Object;"Tax rate";[Product]Tax_rate)
    $ref_value:=OB Copy($Object) //copia directa
    APPEND TO ARRAY($arraySel;$ref_value)
  //el contenido de $ref_value es idéntico al de $Object
    NEXT RECORD([Product])
 End while
  //el contenido de $ref_value
 $JsonString:=JSON Stringify array($arraySel)
```

#### Ejemplo 2 

Duplique un objeto que contenga punteros (primera sintaxis):

```4d
 var $ref : Object
 
 OB SET($ref;"name";->[Company]name) //objeto con punteros
 OB SET($ref;"country";->[Company]country)
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 
 ALL RECORDS([Company])
 
 While(Not(End selection([Company])))
    $ref_comp:=OB Copy($ref) // copiar sin evaluar punteros
  // $ref_comp={"name":"->[Company]name","country":"->[Company]Country"}
    $ref_comp2:=OB Copy($ref;True) //copiar con evaluación de punteros
  // $ref_comp={"name":"4D SAS","country":"France"}
    APPEND TO ARRAY($sel;$ref_comp)
    APPEND TO ARRAY($sel2;$ref_comp2)
    NEXT RECORD([Company])
 End while
 
 $Object:=JSON Stringify array($sel)
 $Object2:=JSON Stringify array($sel2)
 
  // $Object = [{"name":"","country":""},{"name":"","country":""},...]
  // $Object2 = [{"name":"4D SAS","country":"France"},{"name":"4D, Inc","country":"USA"},{"name":"Catalan","country":"France"}...]
```

#### Ejemplo 3 

Queremos copiar el objeto estándar (no compartido) *$person* en el objeto compartido *$sharedObject*. Para hacer esto, debemos crear una copia compartida del objeto (*$sharedObject*).

```4d
 var $person;$copy;$sharedObject : Object
 var $text : Text
 
 $text:=Document to text(Get 4D folder(Current resources folder)+"person.txt")
 $person:=JSON Parse($text) //$person es un objeto estándar
 $sharedObject:=New shared object()
 $copy:=OB Copy($person;ck shared) //$copy es un objeto compartido
 
  //Entonces se puede poner en $sharedObject
 Use($sharedObject)
    $sharedObject.person:=$copy
 End use
```

#### Ejemplo 4 

*$obj* contiene un puntero (propiedad "name") en el campo "name" del registro actual.

```4d
 var $obj;$objWithPtr;$sharedObjWithPtr : Object
 $obj:=New object()
 
  //$obj es un objeto con un puntero
 OB SET($obj;"name";->[Persons]name)
 
 ALL RECORDS([Persons])
  //Ahora hay un registro actual en la tabla [Persons] por lo que se completa [Persons]name
  //
  // Si queremos copiar $obj como un objeto estándar con evaluación de punteros
  // Hacemos esto:
 $objWithPtr:=OB Copy($obj;True)
  //
  // Si queremos copiar $obj como un objeto compartido con evaluación de punteros
  //  Hacemos esto:
 $sharedObjWithPtr:=OB Copy($obj;ck resolve pointers+ck shared)
```

#### Ejemplo 5 

Queremos copiar *$sharedObj e*n *$sharedColl* pero dado que pertenecen a diferentes grupos compartidos, una copia directa daría como resultado un error. Debemos hacer una copia de *$sharedObj* y designar *$sharedColl* como grupo compartido para la copia. 

```4d
 var $sharedObj;$objCopy : Object
 var $sharedColl : Collection
 
  //$sharedObj pertenece a un grupo compartido
 $sharedObj:=New shared object("lastname";"Smith";"address";New shared object("city";"New York"))
  //$sharedColl pertenece a otro grupo compartido
 $sharedColl:=New shared collection(New shared object("lastname";"Brown"))
 
 $objCopy:=OB Copy($sharedObj;ck shared;$sharedColl)
  //$objCopy pertenece a otro grupo compartido $sharedColl
 
  //Entonces $objCopy se puede poner en $sharedColl sin error
 Use($sharedColl)
    $sharedColl.push($objCopy)
 End use
```

#### Ver también 

[OB Get](ob-get.md)  
*Objetos y colecciones compartidos*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1225 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


