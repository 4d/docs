---
id: ordaClasses
title: Clases del modelo de datos
---



ORDA permite crear funciones de clase de alto nivel arriba del modelo de datos. Esto le permite escribir código orientado al negocio y "publicarlo" como una API. Los almacenes de datos, las clases de datos, las selecciones de entidades y las entidades están disponibles como objetos de clase que pueden contener funciones.

Por ejemplo, podría crear una función `getNextWithHigherSalary()` en la clase `EmployeeEntity` para devolver los empleados con un salario superior al seleccionado. Sería tan sencillo como llamar:

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

Los desarrolladores no sólo pueden utilizar estas funciones en almacenes de datos locales, sino también en arquitecturas cliente/servidor y remotas:

```4d
 //$cityManager es la referencia de un datastore remoto
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Gracias a esta funcionalidad, toda la lógica de negocio de su aplicación 4D puede ser almacenada como una capa independiente para que pueda ser fácilmente mantenida y reutilizada con un alto nivel de seguridad:

- Puede "ocultar" la complejidad global de la estructura física subyacente y exponer únicamente funciones comprensibles y listas para usar.

- Si la estructura física evoluciona, basta con adaptar el código de las funciones y las aplicaciones cliente seguirán llamándolas de forma transparente.

- By default, all of your data model class functions are **not exposed** to remote applications and cannot be called from REST requests. You must explicitly declare each public function with the [`exposed`](#exposed-vs-non-exposed-functions) keyword.

![](../assets/en/ORDA/api.png)

Además, 4D [precrea automáticamente](#creating-classes) las clases para cada objeto del modelo de datos disponible.

## Arquitectura

ORDA ofrece **clases genéricas** expuestas a través del [class store](Concepts/classes.md#class-stores) **`4D`**, así como **clases usuario** (que extienden las clases genéricas) expuestas en el [class store](Concepts/classes.md#class-stores) **`cs`**:

![](../assets/en/ORDA/ClassDiagramImage.png)

Todas las clases de modelo de datos ORDA se exponen como propiedades del class store **`cs`**. Las clases ORDA siguientes están disponibles:

| Class                       | Nombre del ejemplo   | Instanciado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cs.DataStore                | cs.DataStore         | comando [`ds`](API/DataStoreClass.md#ds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| cs.*DataClassName*          | cs.Employee          | [`dataStore.DataClassName`](API/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| cs.*DataClassName*Entity    | cs.EmployeeEntity    | [`dataClass.get()`](API/DataClassClass.md#get), [`dataClass.new()`](API/DataClassClass.md#new), [`entitySelection.first()`](API/EntitySelectionClass.md#first), [`entitySelection.last()`](API/EntitySelectionClass.md#last), [`entity.previous()`](API/EntityClass.md#previous), [`entity.next()`](API/EntityClass.md#next), [`entity.first()`](API/EntityClass.md#first), [`entity.last()`](API/EntityClass.md#last), [`entity.clone()`](API/EntityClass.md#clone)                                                                                                                                                                                                                                                                                                                                                                                                   |
| cs.*DataClassName*Selection | cs.EmployeeSelection | [`dataClass.query()`](API/DataClassClass.md#query), [`entitySelection.query()`](API/EntitySelectionClass.md#query), [`dataClass.all()`](API/DataClassClass.md#all), [`dataClass.fromCollection()`](API/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](API/DataClassClass.md#newselection), [`entitySelection.drop()`](API/EntitySelectionClass.md#drop), [`entity.getSelection()`](API/EntityClass.md#getselection), [`entitySelection.and()`](API/EntitySelectionClass.md#and), [`entitySelection.minus()`](API/EntitySelectionClass.md#minus), [`entitySelection.or()`](API/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](API/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](API/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](API/EntitySelectionClass.md#slice), `Create entity selection` |

> Las clases usuario ORDA se almacenan como archivos de clase estándar (.4dm) en la subcarpeta Classes del proyecto [(ver más abajo)](#class-files).

Además, las instancias de objeto de clases usuario de los modelos de datos ORDA se benefician de las propiedades y funciones de sus padres:

- un objeto de clase Datastore puede llamar las funciones de la [clase genérica ORDA Datastore](API/DataStoreClass.md).
- un objeto de clase Dataclass puede llamar las funciones de la [clase genérica ORDA Dataclass](API/DataClassClass.md).
- un objeto de clase Entity selection puede llamar las funciones de la [clase genérica ORDA Entity selection](API/EntitySelectionClass.md).
- un objeto de clase Entity puede llamar las funciones de la [clase genérica ORDA Entity](API/EntityClass.md).

## Descripción de la clase

<details><summary>Histórico</summary>

| Versión | Modificaciones                                                                                            |
| ------- | --------------------------------------------------------------------------------------------------------- |
| v18 R5  | Data model class functions are not exposed to REST by default. Nuevas palabras clave `exposed` y `local`. |
</details>

### Clase DataStore

Una base de datos 4D expone su propia clase DataStore en el class store `cs`.

- **Extends**: 4D.DataStoreImplementation
- **Nombre de clase**: cs.DataStore

Puede crear funciones en la clase DataStore que estarán disponibles a través del objeto `ds`.

#### Ejemplo

```4d  
// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="Database exposing employees and their companies"
```

Esta función puede ser llamada:

```4d
$desc:=ds.getDesc() //"Database exposing..."
```

### Clase DataClass

Cada tabla expuesta con ORDA ofrece una clase DataClass en el class store `cs`.

- **Extends**: 4D.DataClass
- **Nombre de clase**: cs.*DataClassName* (donde *DataClassName* es el nombre de la tabla)
- **Ejemplo**: cs.Employee

#### Ejemplo

```4D
// cs.Company class


Class extends DataClass

// Returns companies whose revenue is over the average
// Returns an entity selection related to the Company DataClass

Function GetBestOnes()
 $sel:=This.query("revenues >= :1";This.all().average("revenues"));
 $0:=$sel
```

A continuación, puede obtener una selección de entidades de las "mejores" empresas ejecutando:

```4d
 var $best : cs.CompanySelection
 $best:=ds.Company.GetBestOnes()
```

#### Ejemplo con un datastore remoto

El catálogo *City* siguiente está expuesto en un datastore remoto (vista parcial):

![](../assets/en/ORDA/Orda_example.png)

La clase `City` ofrece una API:

```4d  
// cs.City class

Class extends DataClass

Function getCityName()
 var $1; $zipcode : Integer
 var $zip : 4D.Entity
 var $0 : Text

 $zipcode:=$1
 $zip:=ds.ZipCode.get($zipcode)
 $0:="" 

 If ($zip#Null)
  $0:=$zip.city.name
 End if
```

La aplicación cliente abre una sesión en el datastore remoto:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

A continuación, una aplicación cliente puede utilizar la API para obtener la ciudad correspondiente al código postal (por ejemplo) a partir de un formulario:

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```

### Clase EntitySelection

Cada tabla expuesta con ORDA ofrece una clase EntitySelection en el class store `cs`.

- **Extends**: 4D.EntitySelection
- **Nombre de clase**: *DataClassName*Selection (donde *DataClassName* es el nombre de la tabla)
- **Ejemplo**: cs.EmployeeSelection

#### Ejemplo

```4d
// cs.EmployeeSelection class


Class extends EntitySelection

//Extract the employees with a salary greater than the average from this entity selection 

Function withSalaryGreaterThanAverage
 C_OBJECT($0)
 $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

```

A continuación, puede obtener los empleados con un salario superior a la media en cualquier selección de entidades mediante la ejecución:

```4d
$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

### Entity Class

Cada tabla expuesta con ORDA ofrece una clase Entity en el class store `cs`.

- **Extends**: 4D.Entity
- **Nombre de clase**: *DataClassName*Entity (donde *DataClassName* es el nombre de la tabla)
- **Ejemplo**: cs.CityEntity

#### Ejemplo

```4d
// cs.CityEntity class

Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")


Function isBigCity
C_BOOLEAN($0)
// The getPopulation() function is usable inside the class
$0:=This.getPopulation()>50000
```

Luego puede llamar este código:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
 ALERT($city.name + " is a big city")
End if
```

### Reglas específicas

Al crear o editar clases de modelos de datos, debe prestar atención a las siguientes reglas:

- Dado que se utilizan para definir nombres de clase DataClass automáticos en el [class store](Concepts/classes.md#class-stores) **cs**, las tablas 4D deben nombrarse para evitar todo conflicto en el espacio de nombres **cs**. En particular:
  - No dé el mismo nombre a una tabla 4D y a una [clase de usuarios](Concepts/classes.md#class-names). En tal caso, el constructor de la clase usuario queda inutilizado (el compilador devuelve una advertencia).
  - No utilice un nombre reservado para una tabla 4D (por ejemplo, "DataClass").

- Cuando defina una clase, asegúrese de que la instrucción [`Class extends`](Concepts/classes.md#class-extends-classnameclass) corresponda exactamente al nombre de la clase padre (recuerde que es sensible a mayúsculas y minúsculas). Por ejemplo, `Class extends EntitySelection` para una clase de selección de entidades.

- No se puede instanciar un objeto de clase de modelo de datos con la palabra clave `new()` (se devuelve un error). Debe utilizar uno de los métodos estándar listados en la columna [`Instanciado por` de la tabla de las clases ORDA](#architecture).

- No puede sobrescribir una función de clase ORDA nativa del [class store](Concepts/classes.md#class-stores) **`4D`** con una función de clase usuario de modelo de datos.

## Funciones expuestas y no expuestas

For security reasons, all of your data model class functions are **not exposed** (i.e., private) by default to remote requests.

Las peticiones remotas incluyen:

- Requests sent by remote 4D applications connected through `Open datastore`
- Peticiones REST

> Las peticiones cliente/servidor 4D estándar no se ven afectadas. Data model class functions are always available in this architecture.

A function that is not exposed is not available on remote applications and cannot be called on any object instance from a REST request. If a remote application tries to access a non-exposed function, the "-10729 - Unknown member method" error is returned.

To allow a data model class function to be called by a remote request, you must explicitly declare it using the `exposed` keyword. La sintaxis formal es:

```4d  
// declare an exposed function
exposed Function <functionName>   
```

> The `exposed` keyword can only be used with Data model class functions. If used with a [regular user class](Concepts/classes.md) function, it is ignored and an error is returned by the compiler.

### Ejemplo

You want an exposed function to use a private function in a dataclass class:

```4d
Class extends DataClass

//Public function
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//Not exposed (private) function
Function computeIDNumber()-> $id : Integer
//compute a new ID number
$id:=...

```

Cuando se llama al código:

```4d
var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$id:=$remoteDS.Schools.computeIDNumber() // Error "Unknown member method" 
```

## Funciones locales

By default in client/server architecture, ORDA data model functions are executed **on the server**. It usually provides the best performance since only the function request and the result are sent over the network.

However, it could happen that a function is fully executable on the client side (e.g., when it processes data that's already in the local cache). In this case, you can save requests to the server and thus, enhance the application performance by inserting the `local` keyword. La sintaxis formal es:

```4d  
// declare a function to execute locally in client/server
local Function <functionName>   
```

Con esta palabra clave, la función se ejecutará siempre del lado del cliente.

> The `local` keyword can only be used with data model class functions. If used with a [regular user class](Concepts/classes.md) function, it is ignored and an error is returned by the compiler.

Note that the function will work even if it eventually requires to access the server (for example if the ORDA cache is expired). However, it is highly recommended to make sure that the local function does not access data on the server, otherwise the local execution could not bring any performance benefit. A local function that generates many requests to the server is less efficient than a function executed on the server that would only return the resulting values. Por ejemplo, considere la siguiente función en la entidad Schools:

```4d
// Get the youngest students  
// Inappropriate use of local keyword
local Function getYoungest
 var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```

- **without** the `local` keyword, the result is given using a single request
- **with** the `local` keyword, 4 requests are necessary: one to get the Schools entity students, one for the `query()`, one for the `orderBy()`, and one for the `slice()`. En este ejemplo, el uso de la palabra clave `local` es inapropiado.

### Ejemplos

#### Cálculo de la edad

Given an entity with a *birthDate* attribute, we want to define an `age()` function that would be called in a list box. This function can be executed on the client, which avoids triggering a request to the server for each line of the list box.

En la classe *StudentsEntity*:

```4d
Function query age($event : Object)->$result : Object

    var $operator : Text
    var $age : Integer
    var $_ages : Collection

    $operator:=$event.operator

    $age:=Num($event.value)  // integer
    $d1:=Add to date(Current date; -$age-1; 0; 0)
    $d2:=Add to date($d1; 1; 0; 0)
    $parameters:=New collection($d1; $d2)

    Case of 

        : ($operator="==")
            $query:="birthday > :1 and birthday <= :2"  // after d1 and before or egal d2

        : ($operator="===") 

            $query:="birthday = :2"  // d2 = second calculated date (= birthday date)

        : ($operator=">=")
            $query:="birthday <= :2"

            //...
    other operators           


    End case 


    If (Undefined($event.result))
        $result:=New object
        $result.query:=$query
        $result.parameters:=$parameters
    End if
```

#### Verificación de los atributos

We want to check the consistency of the attributes of an entity loaded on the client and updated by the user before requesting the server to save them.

On the *StudentsEntity* class, the local `checkData()` function checks the Student's age:

```4d
Class extends Entity

local Function checkData() -> $status : Object

$status:=New object("success"; True)
Case of
    : (This.age()=Null)
        $status.success:=False
        $status.statusText:="The birthdate is missing" 

    :((This.age() <15) | (This.age()>30) )
        $status.success:=False
        $status.statusText:="The student must be between 15 and 30 - This one is "+String(This.age())
End case
```

Código de llamada:

```4d
var $status : Object

//Form.student is loaded with all its attributes and updated on a Form
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // call the server
End if
```

## Soporte en proyectos 4D

### Archivos de clase (class files)

An ORDA data model user class is defined by adding, at the [same location as regular class files](Concepts/classes.md#class-files) (*i.e.* in the `/Sources/Classes` folder of the project folder), a .4dm file with the name of the class. For example, an entity class for the `Utilities` dataclass will be defined through a `UtilitiesEntity.4dm` file.

### Crear clases

4D automatically pre-creates empty classes in memory for each available data model object.

![](../assets/en/ORDA/ORDA_Classes-3.png)

> Por defecto, las clases ORDA vacías no se muestran en el Explorador. To show them you need to select **Show all data classes** from the Explorer's options menu: ![](../assets/en/ORDA/showClass.png)

Las clases de usuarios ORDA tienen un icono diferente de las otras clases. Las clases vacías se atenúan:

![](../assets/en/ORDA/classORDA2.png)

To create an ORDA class file, you just need to double-click on the corresponding predefined class in the Explorer. 4D crea el archivo de clase y añade el código `extends`. Por ejemplo, para una clase Entity:

```
Class extends Entity
```

Una vez definida una clase, su nombre ya no aparece atenuado en el Explorador.

### Editar las clases

To open a defined ORDA class in the 4D method editor, select or double-click on an ORDA class name and use **Edit...** from the contextual menu/options menu of the Explorer window:

![](../assets/en/ORDA/classORDA4.png)

For ORDA classes based upon the local datastore (`ds`), you can directly access the class code from the 4D Structure window:

![](../assets/en/ORDA/classORDA5.png)

### Editor de método

In the 4D method editor, variables typed as an ORDA class automatically benefit from autocompletion features. Ejemplo con una variable de clase Entity:

![](../assets/en/ORDA/AutoCompletionEntity.png)
