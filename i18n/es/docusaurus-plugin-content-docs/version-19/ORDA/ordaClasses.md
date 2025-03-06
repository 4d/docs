---
id: ordaClasses
title: Clases del modelo de datos
---



ORDA permite crear funciones de clase de alto nivel arriba del modelo de datos. Esto le permite escribir código orientado al negocio y "publicarlo" como una API. Los almacenes de datos, las clases de datos, las selecciones de entidades y las entidades están disponibles como objetos de clase que pueden contener funciones.

Por ejemplo, podría crear una función `getNextWithHigherSalary()` en la clase `EmployeeEntity` para devolver los empleados con un salario superior al seleccionado. Sería tan sencillo como llamar:

```4d
$nextHigh:=ds.Employee.get(1).getNextWithHigherSalary()
```

Los desarrolladores no sólo pueden utilizar estas funciones en almacenes de datos locales, sino también en arquitecturas cliente/servidor y remotas:

```4d
 //$cityManager es la referencia de un datastore remoto
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Gracias a esta funcionalidad, toda la lógica de negocio de su aplicación 4D puede ser almacenada como una capa independiente para que pueda ser fácilmente mantenida y reutilizada con un alto nivel de seguridad:

- Puede "ocultar" la complejidad global de la estructura física subyacente y exponer únicamente funciones comprensibles y listas para usar.

- Si la estructura física evoluciona, basta con adaptar el código de las funciones y las aplicaciones cliente seguirán llamándolas de forma transparente.

- Por defecto, todas las funciones de su clase de modelo de datos **no están expuestas** a aplicaciones remotas y no pueden ser llamadas desde peticiones REST. Debe declarar explícitamente cada función pública con la palabra clave [`exposed`](#exposed-vs-non-exposed-functions).

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

| Lanzamiento | Modificaciones                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| 18 R5       | Las funciones de clase de modelo de datos no están expuestas a REST por defecto. Nuevas palabras clave `exposed` y `local`. |
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

// Devuelve las empresas cuyos ingresos están por encima de la media
// Devuelve una selección de entidades relacionadas con la clase de datos Company

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
// clase cs.City 

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
// Clase cs.EmployeeSelection 


Clase extends EntitySelection

//Extrae de esta selección de entidades los empleados con un salario superior a la media 

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
// La función getPopulation() es utilizable en la clase
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
  - Do not give the same name to a 4D table and to a [user class name](../Concepts/classes.md#class-definition). En tal caso, el constructor de la clase usuario queda inutilizado (el compilador devuelve una advertencia).
  - No utilice un nombre reservado para una tabla 4D (por ejemplo, "DataClass").

- When defining a class, make sure the [`Class extends`](../Concepts/classes.md#class-extends-classname) statement exactly matches the parent class name (remember that they're case sensitive). Por ejemplo, `Class extends EntitySelection` para una clase de selección de entidades.

- No se puede instanciar un objeto de clase de modelo de datos con la palabra clave `new()` (se devuelve un error). Debe utilizar uno de los métodos estándar listados en la columna [`Instanciado por` de la tabla de las clases ORDA](#architecture).

- No puede sobrescribir una función de clase ORDA nativa del [class store](Concepts/classes.md#class-stores) **`4D`** con una función de clase usuario de modelo de datos.

## Funciones expuestas y no expuestas

Por razones de seguridad, todas las funciones de su clase de modelo de datos **no están expuestas** (es decir, son privadas) por defecto a peticiones remotas.

Las peticiones remotas incluyen:

- Las peticiones enviadas por las aplicaciones 4D remotas conectadas a través de `Open datastore`
- Peticiones REST

> Las peticiones cliente/servidor 4D estándar no se ven afectadas. Las funciones de clase del modelo de datos están siempre disponibles en esta arquitectura.

Una función que no está expuesta no está disponible en aplicaciones remotas y no se puede llamar a ninguna instancia de objeto desde una petición REST. Si una aplicación remota intenta acceder a una función no expuesta, se devuelve el error "-10729 - Método miembro desconocido".

Para permitir que una función de clase de modelo de datos sea llamada por una petición remota, debe declararla explícitamente utilizando la palabra clave `exposed`. La sintaxis formal es:

```4d  
// declarar una función expuesta
exposed Function <functionName>   
```

> La palabra clave `exposed` sólo puede utilizarse con las funciones de clase del modelo de datos. Si se utiliza con una función de [ clase usuario estándar](Concepts/classes.md), se ignora y el compilador devuelve un error.

### Ejemplo

Desea que una función expuesta utilice una función privada de una clase dataclass:

```4d
Class extends DataClass

//Función pública
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//función (privada) no expuesta
Function computeIDNumber()-> $id : Integer
//calcular un nuevo número de ID
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

Por defecto en la arquitectura cliente/servidor, las funciones de modelo de datos ORDA se ejecutan **en el servidor**. Suele ofrecer el mejor rendimiento, ya que sólo se envían por la red la petición de función y el resultado.

Sin embargo, puede ocurrir que una función sea totalmente ejecutable del lado del cliente (por ejemplo, cuando procesa los datos que ya están en la caché local). En este caso, puede ahorrar peticiones al servidor y, de este modo, mejorar el rendimiento de la aplicación insertando la palabra clave `local`. La sintaxis formal es:

```4d  
// declarar una función a ejecutar localmente en cliente/servidor
local Function <functionName>   
```

Con esta palabra clave, la función se ejecutará siempre del lado del cliente.

> La palabra clave `local` sólo puede utilizarse con las funciones de clase del modelo de datos. Si se utiliza con una función de [ clase usuario estándar](Concepts/classes.md), se ignora y el compilador devuelve un error.

Tenga en cuenta que la función funcionará incluso si eventualmente requiere acceder al servidor (por ejemplo si la caché ORDA está vencida). Sin embargo, es muy recomendable asegurarse de que la función local no accede a los datos del servidor, ya que de lo contrario la ejecución local no podría aportar ninguna ventaja en cuanto al rendimiento. Una función local que genera numerosas peticiones al servidor es menos eficiente que una función ejecutada en el servidor que sólo devolvería los valores resultantes. Por ejemplo, considere la siguiente función en la entidad Schools:

```4d
// Obtener los estudiantes más jóvenes 
// Utilización inapropiada de la palabra clave local
local Function getYoungest
 var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```

- **sin** la palabra clave `local`, el resultado se da utilizando una única petición
- **con** la palabra clave `local`, son necesarias 4 peticiones: una para obtener la entidad Schools, una para la `query()`, una para la `orderBy()`, y una para la `slice()`. En este ejemplo, el uso de la palabra clave `local` es inapropiado.

### Ejemplos

#### Cálculo de la edad

Dada una entidad con un atributo *birthDate*, queremos definir una función `age()` que sería llamada en un list box. Esta función puede ejecutarse en el cliente, lo que evita lanzar una petición al servidor para cada línea del list box.

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

Queremos comprobar la consistencia de los atributos de una entidad cargada en el cliente y actualizada por el usuario antes de solicitar al servidor que los guarde.

En la clase *StudentsEntity*, la función local `checkData()` verifica la edad del estudiante:

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

//Form.student es cargado con todos sus atributos y actualizado en un Formulario
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // llamada al servidor
End if
```

## Soporte en proyectos 4D

### Archivos de clase (class files)

An ORDA data model user class is defined by adding, at the [same location as regular class files](../Concepts/classes.md#class-definition) (*i.e.* in the `/Sources/Classes` folder of the project folder), a .4dm file with the name of the class. Por ejemplo, una clase de entidad para la dataclass `Utilities` se definirá a través de un archivo `UtilitiesEntity.4dm`.

### Crear las clases

4D crea previa y automáticamente las clases vacías en memoria para cada objeto del modelo de datos disponible.

![](../assets/en/ORDA/ORDA_Classes-3.png)

> Por defecto, las clases ORDA vacías no se muestran en el Explorador. Para mostrarlas debe seleccionar **Mostrar todas las dataclasses** en el menú de opciones del Explorador: ![](../assets/en/ORDA/showClass.png)

Las clases de usuarios ORDA tienen un icono diferente de las otras clases. Las clases vacías se atenúan:

![](../assets/en/ORDA/classORDA2.png)

Para crear un archivo de clase ORDA, basta con hacer doble clic en la clase predefinida correspondiente en el Explorador. 4D crea el archivo de clase y añade el código `extends`. Por ejemplo, para una clase Entity:

```
Class extends Entity
```

Una vez definida una clase, su nombre ya no aparece atenuado en el Explorador.

### Editar las clases

Para abrir una clase ORDA definida en el editor de métodos 4D, seleccione o haga doble clic en el nombre de una clase ORDA y utilice **Editar...** en el menú contextual/menú de opciones de la ventana del Explorador:

![](../assets/en/ORDA/classORDA4.png)

Para las clases ORDA basadas en el datastore local (`ds`), puede acceder directamente al código de la clase desde la ventana de estructura 4D:

![](../assets/en/ORDA/classORDA5.png)

### Editor de método

En el editor de métodos de 4D, las variables escritas como una clase ORDA se benefician automáticamente de las funcionalidades de autocompletado. Ejemplo con una variable de clase Entity:

![](../assets/en/ORDA/AutoCompletionEntity.png)
