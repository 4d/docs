---
id: EntityClass
title: Entity
---

Una [entidad](ORDA/dsMapping.md#entity) es una instancia de una [Dataclass](ORDA/dsMapping.md#dataclass), como un registro de la tabla que coincide con la dataclass en su datastore asociado. Contiene los mismos atributos que la clase de datos, así como los valores de los datos y las propiedades y funciones específicas.

### Resumen

|                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntityClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.clone().Summary -->|
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.diff().Summary -->|
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.drop().Summary -->|
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.first().Summary -->|
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.fromObject().Summary -->|
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getKey().Summary -->|
| [<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary -->|
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getSelection().Summary -->|
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getStamp().Summary -->|
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.indexOf().Summary -->|
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.isNew().Summary -->|
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.last().Summary -->|
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.lock().Summary -->|
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.next().Summary -->|
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.previous().Summary -->|
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.reload().Summary -->|
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.save().Summary -->|
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.toObject().Summary -->|
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touched().Summary -->|
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touchedAttributes().Summary -->|
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.unlock().Summary -->|

<!-- REF EntityClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : any<!-- END REF -->

#### Descripción

Todo atributo de la clase de datos está disponible como propiedad de una entidad, que <!-- REF EntityClass.attributeName.Summary -->almacena el valor del atributo para la entidad<!-- END REF -->.
> Los atributos dataclass también se pueden alcanzar utilizando la sintaxis alternativa con \[ ].

El tipo de valor del atributo depende del tipo [kind](DataClassClass.md#attributename) de atributo (relación o almacenamiento):

* If *attributeName* kind is **storage**: `.attributeName` returns a value of the same type as *attributeName*.
* If *attributeName* kind is **relatedEntity**: `.attributeName` returns the related entity. Los valores de la entidad relacionada están disponibles directamente a través de las propiedades en cascada, por ejemplo "myEntity.employer.employees\[0].lastname".
* If *attributeName* kind is **relatedEntities**: `.attributeName` returns a new entity selection of related entities. Se eliminan los duplicados (se devuelve una entity selection desordenada).

#### Ejemplo

```4d
 var $myEntity : cs.EmployeeEntity
 $myEntity:=ds.Employee.new() //Crear una nueva entidad
 $myEntity.name:="Dupont" // asignar 'Dupont' al atributo 'name'
 $myEntity.firstname:="John" //asignar 'John' al atributo 'firstname'
 $myEntity.save() //guardar la entidad
```

<!-- END REF -->

<!-- REF EntityClass.clone().Desc -->
## .clone()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.clone().Params -->
| Parámetros | Tipo      |    | Descripción                                                              |
| ---------- | --------- |:--:| ------------------------------------------------------------------------ |
| Result     | 4D.Entity | <- | Nueva entidad que hace referencia al registro|<!-- END REF -->

|

#### Descripción

La función `.clone()` <!-- REF #EntityClass.clone().Summary -->crea en memoria una nueva entidad que hace referencia al mismo registro que la entidad original<!-- END REF -->. Esta función permite actualizar las entidades por separado.
> Tenga en cuenta que toda modificación realizada a las entidades se guardará en el registro referenciado sólo cuando se ejecute la función [`.save( )`](#save).

Esta función sólo puede utilizarse con entidades ya guardadas en la base de datos. No se puede llamar a una entidad recién creada (para la que [`.isNew()`](#isnew) devuelve **True**).

#### Ejemplo

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Las actualizaciones realizadas en $emp no se realizan en $empCloned

```

<!-- END REF -->

<!-- REF EntityClass.diff().Desc -->
## .diff()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->


<!-- REF #EntityClass.diff().Params -->
| Parámetros          | Tipo       |    | Descripción                                                |
| ------------------- | ---------- |:--:| ---------------------------------------------------------- |
| entityToCompare     | 4D.Entity  | -> | Entidad a comparar con la entidad original                 |
| attributesToCompare | Collection | -> | Nombre de los atributos a comparar                         |
| Result              | Collection | <- | Diferencias entre las entidades|<!-- END REF -->

|

#### Descripción

La función `.diff()` <!-- REF #EntityClass.diff().Summary -->compara el contenido de dos entidades y devuelve sus diferencias<!-- END REF -->.

En *entityToCompare*, pase la entidad a comparar con la entidad original.

En *attributesToCompare*, puede designar atributos específicos para comparar. Si se suministra, la comparación se realiza sólo en los atributos especificados. Si no se suministra, se devuelven todas las diferencias entre las entidades.

Las diferencias se devuelven como una colección de objetos cuyas propiedades son:

| Nombre de propiedad | Tipo                                      | Descripción                             |
| ------------------- | ----------------------------------------- | --------------------------------------- |
| attributeName       | String                                    | Nombre del atributo                     |
| value               | cualquiera - Depende del tipo de atributo | Valor del atributo en la entidad        |
| otherValue          | cualquiera - Depende del tipo de atributo | Valor del atributo en *entityToCompare* |

Sólo se incluyen en la colección los atributos con valores diferentes. Si no se encuentran diferencias, `.diff()` devuelve una colección vacía.

La función se aplica a las propiedades cuyo [kind](DataClassClass.md#attributename) es **storage** o **relatedEntity**. En caso de que se haya actualizado una entidad relacionada (es decir, la llave foránea), el nombre de la entidad relacionada y su nombre de llave primaria se devuelven como propiedades *attributeName* (*value* y *otherValue* están vacíos para el nombre de la entidad relacionada).

Si una de las entidades comparadas es **Null**, se produce un error.

#### Ejemplo 1

```4d
 var $diff1; $diff2 : Collection
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // Se devuelven todas las diferencias
 $diff2:=$clone.diff(employee;New collection("firstName"; "lastName"))
  // Sólo se devuelven las diferencias en firstName y lastName
```

$diff1:

```4d
[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    },
    {
        "attributeName": "salary",
        "value": 66600,
        "otherValue": 500
    }
]
$diff2:

[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    }
]
```

#### Ejemplo 2

```4d
 var vCompareResult1; vCompareResult2; vCompareResult3; $attributesToInspect : Collection
 vCompareResult1:=New collection
 vCompareResult2:=New collection
 vCompareResult3:=New collection
 $attributesToInspect:=New collection

 $e1:=ds.Employee.get(636)
 $e2:=ds.Employee.get(636)

 $e1.firstName:=$e1.firstName+" update"
 $e1.lastName:=$e1.lastName+" update"

 $c:=ds.Company.get(117)
 $e1.employer:=$c
 $e2.salary:=100

 $attributesToInspect.push("firstName")
 $attributesToInspect.push("lastName")

 vCompareResult1:=$e1.diff($e2)
 vCompareResult2:=$e1.diff($e2;$attributesToInspect)
 vCompareResult3:=$e1.diff($e2;$e1.touchedAttributes())
```

vCompareResult1 (se devuelven todas las diferencias):

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "salary",
        "value": 33500,
        "otherValue": 100
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
  {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 from Company
        "otherValue": "[object Entity]"// Entity 118 from Company
    }
]
```

vCompareResult2 (sólo se devuelven las diferencias en $attributesToInspect)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    }
]
```

vCompareResult3 (sólo se devuelven las diferencias en atributos tocados $e1)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
     {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 from Company
        "otherValue": "[object Entity]"// Entity 118 from Company

    }
]
```

<!-- END REF -->

<!-- REF EntityClass.drop().Desc -->
## .drop()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->


<!-- REF #EntityClass.drop().Params -->
| Parámetros | Tipo    |    | Descripción                                                                        |
| ---------- | ------- |:--:| ---------------------------------------------------------------------------------- |
| mode       | Integer | -> | `dk force drop if stamp changed`: activa el soltar incluso si el sello ha cambiado |
| Result     | Object  | <- | Resultado de la operación soltar|<!-- END REF -->

|

#### Descripción

La función `.drop()` <!-- REF #EntityClass.drop().Summary -->elimina los datos contenidos en la entidad del almacén de datos<!-- END REF -->, de la tabla relacionada con su Dataclass. Tenga en cuenta que la entidad permanece en la memoria.

En una aplicación multiusuario o multiproceso, la función `.drop()` se ejecuta bajo un mecanismo de ["bloqueo optimista"](ORDA/entities.md#entity-locking), en el que un sello de bloqueo interno se incrementa automáticamente cada vez que se guarda el registro.

Por defecto, si se omite el parámetro *mode*, la función devolverá un error (ver más abajo) si la misma entidad fue modificada (es decir, el sello ha cambiado) por otro proceso o usuario en el ínterin.

De lo contrario, puede pasar la opción `dk force drop if stamp changed` en el parámetro *mode*: en este caso, la entidad se abandona aunque el sello haya cambiado (y la llave primaria siga siendo la misma).

**Result**

El objeto devuelto por `.drop( )` contiene las siguientes propiedades:

| Propiedad     |                     | Tipo                  | Descripción                                                                                                                   |
| ------------- | ------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| success       |                     | boolean               | true si la acción de soltar tiene éxito, false en caso contrario.                                                             |
|               |                     |                       | ***Disponible sólo en caso de error:***                                                                                       |
| status(*)     |                     | number                | Código de error, ver abajo                                                                                                    |
| statusText(*) |                     | text                  | Descripción del error, ver abajo                                                                                              |
|               |                     |                       | ***Disponible sólo en caso de error de bloqueo pesimista:***                                                                  |
| LockKindText  |                     | text                  | "Locked by record"                                                                                                            |
| lockInfo      |                     | object                | Información sobre el origen del bloqueo                                                                                       |
|               | task_id             | number                | Id del proceso                                                                                                                |
|               | user_name           | text                  | Nombre de usuario de la sesión en la máquina                                                                                  |
|               | user4d_alias        | text                  | Alias de usuario si está definido por `SET USER ALIAS`, si no, nombre de usuario en el directorio 4D                          |
|               | host_name           | text                  | Nombre de la máquina                                                                                                          |
|               | task_name           | text                  | Nombre del proceso                                                                                                            |
|               | client_version      | text                  |                                                                                                                               |
|               |                     |                       | ***Disponible sólo en caso de error grave (un error grave puede ser intentar duplicar una llave primaria, disco lleno...):*** |
| errors        |                     | collection of objects |                                                                                                                               |
|               | message             | text                  | Mensaje de error                                                                                                              |
|               | component signature | text                  | firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                         |
|               | errCode             | number                | Código de error                                                                                                               |

(\*) Los siguientes valores pueden ser devueltos en las propiedadese *status* y *statusText* del objeto *Result* en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                            |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<br/><li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). Cuando se utiliza entity.drop( ), este error puede ser devuelto cuando se utiliza la opción dk force drop if stamp changed. Cuando se utiliza entity.lock( ), este error puede ser devuelto cuando se utiliza la opción dk reload if stamp changed</li> **statusText asociado**: "La entidad ya no existe"                                |
| `dk status locked`                        | 3     | La entidad está bloqueada por un bloqueo pesimista.<br/> **statusText asociado**: "Ya está bloqueado"                                                                                                                           |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.<br/>**statusText asociado**: "Otro error"                                                              |
| `dk status stamp has changed`             | 2     | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).<br/><li>con `.save( )`: error sólo si no se utiliza la opción `dk auto merge`</li><li>con `.drop( )`: error sólo si no se utiliza la opción `dk force drop if stamp changed`</li><li>con `.lock( )`: error sólo si no se utiliza la opción `dk reload if stamp changed`</li><li>**statusText asociado **: "El sello ha cambiado"</li> |
| `dk status wrong permission`              | 1     | Los privilegios actuales no permiten suprimir la entidad. **StatusText asociado**: "Permission Error"                                                                                                                                 |

#### Ejemplo 1

Ejemplo sin la opción `dk force drop if stamp changed`:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //La entidad soltada permanece en la memoria
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Ejemplo 2

Ejemplo con la opción `dk force drop if stamp changed`:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //La entidad soltada permanece en la memoria
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.first().Desc -->
## .first()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.first().Params -->
| Parámetros | Tipo      |    | Descripción                                                                                                        |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------------------------------------ |
| Result     | 4D.Entity | <- | Referencia a la primera entidad de una selección de entidades (Null si no se encuentra)|<!-- END REF -->

|

#### Descripción

La función `.first()` <!-- REF #EntityClass.first().Summary -->devuelve una referencia a la entidad en primera posición de la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection( )](#getselection) devuelve Null), la función devuelve un valor Null.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $firstEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Esta selección de entidades contiene 3 entidades
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() //$firstEmployee es la primera entidad de la selección de entidades $employees
```

<!-- END REF -->

<!-- REF EntityClass.fromObject().Desc -->
## .fromObject()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->


<!-- REF #EntityClass.fromObject().Params -->
| Parámetros | Tipo   |    | Descripción                                                             |
| ---------- | ------ |:--:| ----------------------------------------------------------------------- |
| filler     | Object | -> | Objeto a partir del cual se llena la entidad|<!-- END REF -->

|

#### Descripción

La función `.fromObject()` <!-- REF #EntityClass.fromObject().Summary -->llena una entidad con el contenido de *filler*<!-- END REF -->.
> Esta función modifica la entidad original.

El mapeo entre el objeto y la entidad se realiza sobre los nombres de los atributos:

* Si una propiedad del objeto no existe en la dataclass, se ignora.
* Los tipos de datos deben ser equivalentes. Si hay una diferencia de tipo entre el objeto y la dataclass, 4D intenta convertir los datos siempre que sea posible (ver [`Convertir tipos de datos`](Concepts/data-types.md#converting-data-types)), de lo contrario el atributo se deja sin tocar.
* La llave primaria puede darse tal cual o con una propiedad "__KEY" (llenada con el valor de la llave primaria). Si no existe ya en la dataclass, la entidad se crea con el valor dado cuando se llama a [.save()](#save). Si no se da la llave primaria, se crea la entidad y se asigna el valor de la llave primaria con respecto a las reglas de la base de datos. El autoincremento sólo se calcula si la llave primaria es nula.

*filler* puede manejar una entidad relacionada bajo las siguientes condiciones:

* *filler* contiene la propia llave foránea, o
* *filler* contiene un objeto de propiedad con el mismo nombre que la entidad relacionada, que contiene una única propiedad denominada "\_\_KEY".
* si la entidad relacionada no existe, se ignora.

#### Ejemplo

Con el siguiente objeto $o:

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// relatedEntity dada con PK
    "employerID": 20 // relatedEntity dada con PK
}
```

El siguiente código creará una entidad con entidades relacionadas con el gerente y el empleador.

```4d
 var $o : Object
 var $entity : cs.EmpEntity
 $entity:=ds.Emp.new()
 $entity.fromObject($o)
 $entity.save()
```

También puede utilizar una entidad relacionada dada como objeto:

```4d

{
    "firstName": "Marie",
    "lastName": "Lechat",
    "salary": 68400,
    "birthDate": "1971-09-03T00:00:00.000Z",
    "woman": false,
    "employer": {// relatedEntity dada como un objeto
        "__KEY": "21"
    },
    "manager": {// relatedEntity dada como un objeto
        "__KEY": "411"
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntityClass.getDataClass().Params -->
| Parámetros | Tipo         |    | Descripción                                                             |
| ---------- | ------------ |:--:| ----------------------------------------------------------------------- |
| Result     | 4D.DataClass | <- | Objeto DataClass al que pertenece la entidad|<!-- END REF -->

|

#### Descripción

La función `.getDataClass()` <!-- REF #EntityClass.getDataClass().Summary -->devuelve la clase de datos de la entidad<!-- END REF -->. Esta función es útil al escribir código genérico.

#### Ejemplo

El siguiente código genérico duplica cualquier entidad:

```4d
  //método duplicate_entity 
  //duplicate_entity($entity)

 #DECLARE($entity : 4D.Entity)  
 var $entityNew : 4D.Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() //crea una nueva entidad en la dataclass padre 
 $entityNew.fromObject($entity.toObject()) //obtiene todos los atributos
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null //restablece la llave primaria
 $status:=$entityNew.save() //guarda la entidad duplicada
```

<!-- END REF -->

<!-- REF EntityClass.getKey().Desc -->
## .getKey()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->


<!-- REF #EntityClass.getKey().Params -->
| Parámetros | Tipo    |    | Descripción                                                                                               |
| ---------- | ------- |:--:| --------------------------------------------------------------------------------------------------------- |
| mode       | Integer | -> | `dk key as string`: la llave primaria se devuelve como una cadena, sin importar el tipo de llave primaria |
| Result     | Text    | <- | Valor de la llave primaria de texto de la entidad                                                         |
| Result     | Integer | <- | Valor de la llave primaria numérica de la entidad                                                         |

<!-- END REF -->

#### Descripción

La función `.getKey()` <!-- REF #EntityClass.getKey().Summary -->devuelve el valor de la llave primaria de la entidad<!-- END REF -->.

Las llaves primarias pueden ser números (enteros) o cadenas. Puede "forzar" que el valor de la llave primaria devuelto sea una cadena, sin importar el tipo de llave primaria real, pasando la opción `dk key as string` en el parámetro *mode*.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("The primary key is "+$employee.getKey(dk key as string))
```

<!-- END REF -->

<!-- REF EntityClass.getRemoteContextAttributes().Desc -->
## .getRemoteContextAttributes()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19R5        | Añadidos       |

</details>

<!-- REF #EntityClass.getRemoteContextAttributes().Syntax -->Devuelve:<!-- END REF -->


<!-- REF #EntityClass.getRemoteContextAttributes().Params -->
| Parámetros | Tipo |    | Descripción                                                                                      |
| ---------- | ---- | -- | ------------------------------------------------------------------------------------------------ |
| resultado  | Text | <- | Atributos de contexto vinculados a la entidad, separados por una coma|<!-- END REF -->

|

> **Modo avanzado:** esta función está pensada para los desarrolladores que necesitan personalizar las funcionalidades por defecto de ORDA para configuraciones específicas. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

La función `.getRemoteContextAttributes()` <!-- REF #EntityClass.getRemoteContextAttributes().Summary -->devuelve información sobre el contexto de optimización utilizado por la entidad <!-- END REF -->.

Extracción de todas las propiedades de una `Entidad relacionada`:

#### Ejemplo

```4d
var $ds : 4D.DataStoreImplementation
var $address : cs.AddressEntity
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$contextA:=New object("context"; "contextA")

$address:=$ds.Address.get(1; $contextA)
$text:=""
For each ($p; $address.persons)
    $text:=$p.firstname+" "+$p.lastname
End for each

$info:=$address.getRemoteContextAttributes()

//$info = "persons,persons.lastname,persons.firstname"
```

#### Ver también

Devuelve:

<!-- REF EntityClass.getSelection().Desc -->
## .getSelection()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF -->


<!-- REF #EntityClass.getSelection().Params -->
| Parámetros | Tipo               |    | Descripción                                                                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------------------------------------------------------- |
| Result     | 4D.EntitySelection | <- | Entity selection a la que pertenece la entidad (nula si no se encuentra)|<!-- END REF -->

|

#### Descripción

La función `.getSelection()` <!-- REF #EntityClass.getSelection().Summary -->devuelve la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a una selección de entidades, la función devuelve Null.

#### Ejemplo

```4d
 var $emp : cs.EmployeeEntity
 var $employees; $employees2 : cs.EmployeeSelection
 $emp:=ds.Employee.get(672) // Esta entidad no pertenece a ninguna selección de entidades
 $employees:=$emp.getSelection() // $employees es Null

 $employees2:=ds.Employee.query("lastName=:1";"Smith") //Esta selección de entidades contiene 6 entidades
 $emp:=$employees2[0]  // Esta entidad pertenece a una selección de entidades

 ALERT("La entity selection contiene "+String($emp.getSelection().length)+" entidades")
```

<!-- END REF -->

<!-- REF EntityClass.getStamp().Desc -->
## .getStamp()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->


<!-- REF #EntityClass.getStamp().Params -->
| Parámetros | Tipo    |    | Descripción                                                                          |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------ |
| Result     | Integer | <- | Sello de la entidad (0 si la entidad acaba de ser creada)|<!-- END REF -->

|

#### Descripción

La función `.getStamp()` <!-- REF #EntityClass.getStamp().Summary --> devuelve el valor actual del sello de la entidad<!-- END REF -->.

El sello interno se incrementa automáticamente en 4D cada vez que se guarda la entidad. Gestiona los accesos y modificaciones concurrentes de los usuarios a las mismas entidades (ver [**Bloqueo de entidades**](ORDA/entities.md#entity-locking)).
> Para una entidad nueva (nunca guardada), la función devuelve 0. Para saber si una entidad acaba de ser creada, se recomienda utilizar [.isNew()](#isnew).

#### Ejemplo

```4d
 var $entity : cs.EmployeeEntity
 var $stamp : Integer

 $entity:=ds.Employee.new()
 $entity.lastname:="Smith"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=1

 $entity.lastname:="Wesson"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=2
```

<!-- END REF -->

<!-- REF EntityClass.indexOf().Desc -->
## .indexOf()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->


<!-- REF #EntityClass.indexOf().Params -->
| Parámetros      | Tipo               |    | Descripción                                                                     |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------------- |
| entitySelection | 4D.EntitySelection | -> | La posición de la entidad se da en función de esta selección de entidades       |
| Result          | Integer            | <- | Posición de la entidad en una selección de entidades|<!-- END REF -->

|

#### Descripción

La función `.extract()` <!-- REF #EntityClass.indexOf().Summary -->devuelve la posición de la entidad en una selección de entidades<!-- END REF -->.

Por defecto, si se omite el parámetro *entitySelection*, la función devuelve la posición de la entidad dentro de su propia selección de entidades. En caso contrario, devuelve la posición de la entidad dentro de la *entitySelection* especificada.

El valor resultante se incluye entre 0 y la longitud de la selección de entidades -1.

* Si la entidad no tiene una selección de entidad o no pertenece a *entidadSelección*, la función devuelve -1.
* Si *entitySelection* es Null o no pertenece a la misma clase de datos que la entidad, se produce un error.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Esta entity selection contiene 3 entidades
 $employee:=$employees[1] //Esta entidad pertenece a una entity selection
 ALERT("El índice de la entidad en su propia selección de entidades es "+String($employee.indexOf())) //1

 $employee:=ds.Employee.get(725) //Esta entidad no pertenece a una selección de entidades
 ALERT("El índice de la entidad es "+String($employee.indexOf())) // -1
```

<!-- END REF -->

<!-- REF EntityClass.isNew().Desc -->
## .isNew()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->


<!-- REF #EntityClass.isNew().Params -->
| Parámetros | Tipo    |    | Descripción                                                                                                          |
| ---------- | ------- |:--:| -------------------------------------------------------------------------------------------------------------------- |
| Result     | Boolean | <- | True si la entidad acaba de ser creada y aún no se ha guardado. En caso contrario, False.|<!-- END REF -->

|

#### Descripción

La función `.isNew()` <!-- REF #EntityClass.isNew().Summary --> devuelve True si la entidad a la que se aplica acaba de ser creada y aún no se ha guardado en el almacén de datos<!-- END REF -->. .

#### Ejemplo

```4d
 var $emp : cs.EmployeeEntity

 $emp:=ds.Employee.new()

 If($emp.isNew())
    ALERT("This is a new entity")
 End if
```

<!-- END REF -->

<!-- REF EntityClass.last().Desc -->
## .last()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.last().Params -->
| Parámetros | Tipo      |    | Descripción                                                                                                       |
| ---------- | --------- |:--:| ----------------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity | <- | Referencia a la última entidad de una selección de entidades (Null si no se encuentra)|<!-- END REF -->

|

#### Descripción

La función `.last()` <!-- REF #EntityClass.last().Summary -->devuelve una referencia a la entidad en la última posición de la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection( )](#getselection) devuelve Null), la función devuelve un valor Null.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $lastEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Esta selección de entidades contiene 3 entidades
 $employee:=$employees[0]
 $lastEmployee:=$employee.last() //$lastEmployee es la última entidad de la selección de entidades $employees
```

<!-- END REF -->

<!-- REF EntityClass.lock().Desc -->
## .lock()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->


<!-- REF #EntityClass.lock().Params -->
| Parámetros | Tipo    |    | Descripción                                                                      |
| ---------- | ------- |:--:| -------------------------------------------------------------------------------- |
| mode       | Integer | -> | `dk reload if stamp changed`: recargar antes de bloquear si el sello ha cambiado |
| Result     | Object  | <- | Resultado de la operación de bloqueo|<!-- END REF -->

|

#### Descripción

La función`.lock()` <!-- REF #EntityClass.lock().Summary -->pone un bloqueo pesimista en el registro referenciado por la entidad<!-- END REF -->. El [bloqueo se establece](ORDA/entities.md#entity-locking) para un registro y todas las referencias de la entidad en el proceso actual.

Otros procesos verán este registro como bloqueado (la propiedad `result.success` contendrá False si intentan bloquear la misma entidad usando esta función). Sólo las funciones ejecutadas en la sesión de "bloqueo" pueden editar y guardar los atributos de la entidad. La entidad puede ser cargada como de sólo lectura por otras sesiones, pero no podrán introducir y guardar valores.

El objeto devuelto por <`.unlock()<` contiene la siguiente propiedad:

* cuando la función [`unlock()`](#unlock) se llama en una entidad correspondiente en el mismo proceso
* automáticamente, cuando ya no es referenciado por ninguna entidad en la memoria. Por ejemplo, si el bloqueo se pone sólo en una referencia local de una entidad, la entidad se desbloquea cuando la función termina. Mientras haya referencias a la entidad en la memoria, el registro permanece bloqueado.

> Una entidad también puede ser [bloqueada por una sesión REST](../REST/$lock.md), en cuyo caso sólo puede ser desbloqueada por la sesión.

Por defecto, si se omite el parámetro *mode*, la función devolverá un error (ver más abajo) si la misma entidad fue modificada (es decir, el sello ha cambiado) por otro proceso o usuario en el ínterin.

De lo contrario, puede pasar la opción `dk reload if stamp changed` en el parámetro *mode*: en este caso, no se devuelve error y la entidad se recarga cuando el sello cambia (si la entidad aún existe y la llave primaria sigue siendo la misma).

**Result**

El objeto devuelto por `.lock( )` contiene las siguientes propiedades:

| Propiedad        |                     | Tipo                  | Descripción                                                                                                                                                          |
| ---------------- | ------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success          |                     | boolean               | true si la acción de bloqueo tiene éxito (o si la entidad ya está bloqueada en el proceso actual), false en caso contrario.                                          |
|                  |                     |                       | ***Disponible sólo si se utiliza la opción `dk reload if stamp changed`:***                                                                                          |
| **wasReloaded**  |                     | boolean               | true si la entidad fue recargada con éxito, false en caso contrario.                                                                                                 |
|                  |                     |                       | ***Disponible sólo en caso de error:***                                                                                                                              |
| status(\*)     |                     | number                | Código de error, ver abajo                                                                                                                                           |
| statusText(\*) |                     | text                  | Descripción del error, ver abajo                                                                                                                                     |
|                  |                     |                       | ***Disponible sólo en caso de error de bloqueo pesimista:***                                                                                                         |
| lockKindText     |                     | text                  | "Locked by record" si está bloqueado por un proceso 4D, "Locked by session" si está bloqueado por una sesión REST                                                    |
| lockInfo         |                     | object                | Información sobre el origen del bloqueo. Las propiedades devueltas dependen del origen del bloqueo (proceso 4D o sesión REST).                                       |
|                  |                     |                       | ***Disponible sólo para un bloqueo por proceso 4D:***                                                                                                                |
|                  | task_id             | number                | ID del Proceso                                                                                                                                                       |
|                  | user_name           | text                  | Nombre de usuario de la sesión en la máquina                                                                                                                         |
|                  | user4d_alias        | text                  | Nombre o alias del usuario 4D                                                                                                                                        |
|                  | user4d_id           | number                | ID del usuario en el directorio de la base de datos 4D                                                                                                               |
|                  | host_name           | text                  | Nombre de la máquina                                                                                                                                                 |
|                  | task_name           | text                  | Nombre del proceso                                                                                                                                                   |
|                  | client_version      | text                  | Liberación del cliente                                                                                                                                               |
|                  |                     |                       | ***Disponible sólo para un bloqueo por sesión REST:***                                                                                                               |
|                  | host                | text                  | URL que bloqueó la entidad (por ejemplo, "www.myserver.com")                                                                                                         |
|                  | IPAddr              | text                  | Dirección IP del bloqueo (por ejemplo: "127.0.0.1")                                                                                                                  |
|                  | userAgent           | text                  | userAgent del origin del bloqueo (ej: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |
|                  |                     |                       | ***Disponible sólo en caso de error grave*** (la llave primaria ya existe, el disco está lleno...):                                                                  |
| errors           |                     | collection of objects |                                                                                                                                                                      |
|                  | message             | text                  | Mensaje de error                                                                                                                                                     |
|                  | component signature | text                  | firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                                                                |
|                  | errCode             | number                | Código de error                                                                                                                                                      |

(\*) Los siguientes valores pueden ser devueltos en las propiedades *status* y *statusText* del objeto *Result* en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). Cuando se utiliza `.drop( )`, este error puede devolverse cuando se utiliza la opción `dk force drop if stamp changed`. Cuando se utiliza `.lock( )`, este error puede ser devuelto cuando se utiliza la opción `dk reload if stamp changed`</li><br/>**statusText asociado**: "La entidad ya no existe"                                                       |
| `dk status locked`                        | 3     | La entidad está bloqueada por un bloqueo pesimista.**statusText asociado**: "Ya está bloqueado"                                                                                                                                                                |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc. **statusText asociado**: "Otro error"                                                                                                 |
| `dk status stamp has changed`             | 2     | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).<li>con `.save( )`: error sólo si no se utiliza la opción `dk auto merge`</li><li>con `.drop( )`: error sólo si no se utiliza la opción `dk force drop if stamp changed`</li><li>con `.lock( )`: error sólo si no se utiliza la opción `dk reload if stamp changed`</li><br/>**statusText asociado**: "El sello ha cambiado" |

#### Ejemplo 1

Ejemplo con error:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(716)
 $status:=$employee.lock()
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Ejemplo 2

Ejemplo con la opción `dk reload if stamp changed`:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(717)
 $status:=$employee.lock(dk reload if stamp changed)
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.next().Desc -->
## .next()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF -->



<!-- REF #EntityClass.next().Params -->
| Parámetros | Tipo      |    | Descripción                                                                                                         |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity | <- | Referencia a la siguiente entidad en la selección de entidades (Null si no se encuentra)|<!-- END REF -->

|

#### Descripción

La función `.next()` <!-- REF #EntityClass.next().Summary -->devuelve una referencia a la siguiente entidad en la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection()](#getselection) devuelve Null), la función devuelve un valor Null.

Si no hay una entidad siguiente válida en la selección de entidades (es decir, se encuentra en la última entidad de la selección), la función devuelve Null. Si la siguiente entidad ha sido descartada, la función devuelve la siguiente entidad válida (y eventualmente Null).

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Esta selección de entidades contiene 3 entidades
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee es la segunda entidad de la selección de entidades $employees

```

<!-- END REF -->

<!-- REF EntityClass.previous().Desc -->
## .previous()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.previous().Params -->
| Parámetros | Tipo      |    | Descripción                                                                                                        |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------------------------------------ |
| Result     | 4D.Entity | <- | Referencia a la entidad anterior en la selección de entidades (Null si no se encuentra)|<!-- END REF -->

|

#### Descripción

La función `.previous()` <!-- REF #EntityClass.previous().Summary --> devuelve una referencia a la entidad anterior en la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection()](#getselection) devuelve Null), la función devuelve un valor Null.

Si no hay una entidad anterior válida en la selección de entidades (es decir, se encuentra en la primera entidad de la selección), la función devuelve Null. Si la entidad anterior ha sido soltada, la función devuelve la entidad válida anterior (y eventualmente Null).

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $previousEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //Esta selección de entidades contiene 3 entidades
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() //$previousEmployee es la primera entidad de la selección de entidades $employees
```

<!-- END REF -->

<!-- REF EntityClass.reload().Desc -->
## .reload()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->


<!-- REF #EntityClass.reload().Params -->
| Parámetros | Tipo   |    | Descripción                              |
| ---------- | ------ |:--:| ---------------------------------------- |
| Result     | Object | <- | Objeto estado|<!-- END REF -->

|

#### Descripción

La función `.reload()` <!-- REF #EntityClass.reload().Summary -->recarga el contenido de la entidad en la memoria<!-- END REF -->, de acuerdo a la información almacenada en la tabla relacionada con la clase de datos en el almacén de datos. La recarga se realiza sólo si la entidad sigue existiendo con la misma llave primaria.

**Result**

El objeto devuelto por `.reload( )` contiene las siguientes propiedades:

| Propiedad        | Tipo    | Descripción                                                                                               |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| success          | boolean | True si la acción de recarga tiene éxito, False en caso contrario.***Disponible sólo en caso de error***: |
| status(\*)     | number  | Código de error, ver abajo                                                                                |
| statusText(\*) | text    | Descripción del error, ver abajo                                                                          |

(\*) Los siguientes valores pueden ser devueltos en las propiedadese *status* y *statusText* del objeto *Result* en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                            |
| ----------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<br/><li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Cuando se utiliza `.lock( )`, este error puede ser devuelto cuando se utiliza la opción `dk reload if stamp changed`</li><br/>***statusText asociado***: "La entidad ya no existe" |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.<br/>***statusText asociado***: "Otro error"                                            |

#### Ejemplo

```4d
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 var $result : Object

 $employees:=ds.Employee.query("lastName=:1";"Hollis")
 $employee:=$employees[0]
 $employee.firstName:="Mary"
 $result:=$employee.reload()
 Case of
    :($result.success)
       ALERT("Reload has been done")
    :($result.status=dk status entity does not exist anymore)
       ALERT("The entity has been dropped")
 End case
```

<!-- END REF -->

<!-- REF EntityClass.save().Desc -->
## .save()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->


<!-- REF #EntityClass.save().Params -->
| Parámetros | Tipo    |    | Descripción                                                  |
| ---------- | ------- |:--:| ------------------------------------------------------------ |
| mode       | Integer | -> | `dk auto merge`: activa el modo de fusión automática         |
| Result     | Object  | <- | Resultado de la operación guardar|<!-- END REF -->

|

#### Descripción

La función `.save()` <!-- REF #EntityClass.save().Summary -->guarda los cambios realizados en la entidad<!-- END REF --> en la tabla relacionada con su dataClass. Debe llamar a este método después de crear o modificar una entidad si quiere guardar los cambios realizados en ella.

La operación de guardar se ejecuta sólo si se ha "tocado" al menos un atributo de la entidad (ver las funciones [`.touched()`](#touched) y [`.touchedAttributes()`](#touchedattributes)). En caso contrario, la función no hace nada (no se llama al activador).

En una aplicación multiusuario o multiproceso, la función `.save()` se ejecuta bajo un mecanismo de ["bloqueo optimista"](ORDA/entities.md#entity-locking), en el que un sello de bloqueo interno se incrementa automáticamente cada vez que se guarda el registro.

Por defecto, si se omite el parámetro *mode*, el método devolverá un error (ver más abajo) siempre que la misma entidad haya sido modificada por otro proceso o usuario mientras tanto, sin importar el atributo o atributos modificados.

En caso contrario, se puede pasar la opción `dk auto merge` en el parámetro *mode*: cuando el modo de fusión automática está activado, una modificación realizada simultáneamente por otro proceso/usuario en la misma entidad pero en un atributo diferente no dará lugar a un error. Los datos resultantes guardados en la entidad serán la combinación (la "fusión") de todas las modificaciones no concurrentes (si se aplicaron modificaciones al mismo atributo, el guardado falla y se devuelve un error, incluso con el modo de fusión automática).
> El modo de fusión automática no está disponible para los atributos de tipo Imagen, Objeto y Texto cuando se almacenan fuera del registro. Los cambios concurrentes en estos atributos darán lugar a un error `dk status stamp has changed`.

**Result**

El objeto devuelto por `.save()` contiene las siguientes propiedades:

| Propiedad    |                    | Tipo                  | Descripción                                                                                                                  |
| ------------ | ------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| success      |                    | boolean               | True si la acción guardar tiene éxito, false en caso contrario.                                                              |
|              |                    |                       | ***Disponible sólo si se utiliza la opción `dk auto merge`***:                                                               |
| autoMerged   |                    | boolean               | True si se ha realizado una fusión automática, False en caso contrario.                                                      |
|              |                    |                       | ***Disponible sólo en caso de error***:                                                                                      |
| status       |                    | number                | Código de error, [ver abajo](#status-and-statustext)                                                                         |
| statusText   |                    | text                  | Descripción del error, [ver más abajo](#status-and-statustext)                                                               |
|              |                    |                       | ***Disponible sólo en caso de bloqueo pesimista***:                                                                          |
| lockKindText |                    | text                  | "Locked by record"                                                                                                           |
| lockInfo     |                    | object                | Información sobre el origen del bloqueo                                                                                      |
|              | task_id            | number                | Id del proceso                                                                                                               |
|              | user_name          | text                  | Nombre de usuario de la sesión en la máquina                                                                                 |
|              | user4d_alias       | text                  | Alias de usuario si está definido por `SET USER ALIAS`, si no, nombre de usuario en el directorio 4D                         |
|              | host_name          | text                  | Nombre de la máquina                                                                                                         |
|              | task_name          | text                  | Nombre del proceso                                                                                                           |
|              | client_version     | text                  |                                                                                                                              |
|              |                    |                       | ***Disponible sólo en caso de error grave*** (error grave - puede ser intentar duplicar una llave primaria, disco lleno...): |
| errors       |                    | collection of objects |                                                                                                                              |
|              | message            | text                  | Mensaje de error                                                                                                             |
|              | componentSignature | text                  | Firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                        |
|              | errCode            | number                | Código de error                                                                                                              |

##### status y statusText

Los siguientes valores pueden ser devueltos en las propiedades `status` y `statusText` del objeto Result en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6     | (Sólo si se utiliza la opción `dk auto merge`) La opción de fusión automática falló al guardar la entidad.**StatusText asociado**: "Fusión automática fallida"                                                                                                            |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<br/><li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Cuando se utiliza `.lock( )`, este error puede ser devuelto cuando se utiliza la opción `dk reload if stamp changed`</li><br/>**statusText asociado**: "La entidad ya no existe"                                                       |
| `dk status locked`                        | 3     | La entidad está bloqueada por un bloqueo pesimista.**statusText asociado**: "Ya está bloqueado"                                                                                                                                                                           |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc. **statusText asociado**: "Otro error"                                                                                                            |
| `dk status stamp has changed`             | 2     | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).<br/><li>con `.save( )`: error sólo si no se utiliza la opción `dk auto merge`</li><li>con `.drop( )`: error sólo si no se utiliza la opción `dk force drop if stamp changed`</li><li>con `.lock( )`: error sólo si no se utiliza la opción `dk reload if stamp changed`</li><br/>**statusText asociado**: "El sello ha cambiado" |
| `dk status wrong permission`              | 1     | Los privilegios actuales no permiten guardar la entidad. **StatusText asociado**: "Permission Error"                                                                                                                                                                      |

#### Ejemplo 1

Crear una nueva entidad:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 $employee:=ds.Employee.new()
 $employee.firstName:="Mary"
 $employee.lastName:="Smith"
 $status:=$employee.save()
 If($status.success)
    ALERT("Employee created")
 End if
```

#### Ejemplo 2

Actualización de una entidad sin la opción `dk auto merge`:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save()
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Ejemplo 3

Actualización de una entidad con la opción `dk auto merge`:

```4d
 var $status : Object

 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection

 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save(dk auto merge)
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status automerge failed)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.toObject().Desc -->
## .toObject()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->


<!-- REF #EntityClass.toObject().Params -->
| Parámetros   | Tipo       |    | Descripción                                                                                                    |
| ------------ | ---------- |:--:| -------------------------------------------------------------------------------------------------------------- |
| filterString | Text       | -> | Atributo(s) a extraer (cadena separada por comas)                                                              |
| filterCol    | Collection | -> | Colección de atributos a extraer                                                                               |
| options      | Integer    | -> | `dk with primary key`: añade la propiedad \_\_KEY;<br/>`dk with stamp`: añade la propiedad \_STAMP |
| Result       | Object     | <- | Objeto creado a partir de la entidad|<!-- END REF -->

|

#### Descripción

La función `.toObject()` <!-- REF #EntityClass.toObject().Summary -->devuelve un objeto que ha sido creado a partir de la entidad<!-- END REF -->. Los nombres de las propiedades en el objeto coinciden con los nombres de los atributos de la entidad.

Si no se especifica ningún filtro, o si el parámetro *filterString* contiene una cadena vacía o "*", el objeto devuelto contendrá:

* todos los atributos de la entidad de almacenamiento
* atributos de la `relatedEntity` [kind](DataClassClass.md#attributename): se obtiene una propiedad con el mismo nombre que la entidad relacionada (nombre del enlace muchos-a-uno). El atributo se extrae con la forma simple.
* atributos donde [kind](DataClassClass.md#attributename) es `relatedEntities`: no se devuelve el atributo.

En el primer parámetro, se pasa el atributo o atributos de la entidad a extraer. Puede pasar:

* *filterString*: una cadena con rutas de propiedades separadas por comas: "propertyPath1, propertyPath2, ...", o
* *filterCol*: una colección de cadenas: \["propertyPath1","propertyPath2";...]

Si se especifica un filtro para los atributos de la relatedEntity [kind](DataClassClass.md#attributename):

* propertyPath = "relatedEntity" -> se extrae de forma sencilla: un objeto con la propiedad \_\_KEY (llave primaria).
* propertyPath = "relatedEntity.*" -> se extraen todas las propiedades
* propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> sólo se extraen esas propiedades

Si se especifica un filtro para los atributos de las relatedEntities [kind](DataClassClass.md#attributename):

* propertyPath = "relatedEntities.*" -> se extraen todas las propiedades
* propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> sólo se extraen esas propiedades

En el parámetro *options* se puede pasar el selector `ddk with primary key` y/o`dk with stamp` para añadir las llaves primarias de la entidad y/o los sellos en los objetos extraídos.

:::caution Advertencia

Si utiliza otro atributo distinto de la llave primaria como atributo Uno en una relación, el valor de este atributo se escribirá en la propiedad "__KEY". Tenga en cuenta que se recomienda utilizar la llave primaria como atributo Uno en sus relaciones, especialmente cuando utilice las funciones `.toObject()` y `.fromObject()`.

:::


#### Ejemplo 1

En todos los ejemplos de esta sección se utilizará la siguiente estructura:

![](../assets/en/API/dataclassAttribute4.png)

Sin parámetro de filtro:

```4d
employeeObject:=employeeSelected.toObject()
```

Ejemplo con el tipo `relatedEntity` con una forma simple:

```4d
{
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": { // relatedEntity extracted with simple form
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Ejemplo 2

Extraer la llave primaria y el sello:

```4d
employeeObject:=employeeSelected.toObject("";dk with primary key+dk with stamp)
```

Ejemplo con el tipo `relatedEntity` con una forma simple:

```4d
{
    "__KEY": 413,
   "__STAMP": 1,
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": {
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Ejemplo 3

Desplegando todas las propiedades de `relatedEntities`:

```4d
employeeObject:=employeeSelected.toObject("directReports.*")
```

```4d
{
    "directReports": [
        {
            "ID": 418,
            "firstName": "Lorena",
            "lastName": "Boothe",
            "salary": 44800,
            "birthDate": "1970-10-02T00:00:00.000Z",
            "woman": true,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 419,
            "firstName": "Drew",
            "lastName": "Caudill",
            "salary": 41000,
            "birthDate": "2030-01-12T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 420,
            "firstName": "Nathan",
            "lastName": "Gomes",
            "salary": 46300,
            "birthDate": "2010-05-29T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        }
    ]
}
```

#### Ejemplo 4

Extracción de algunas propiedades de `relatedEntities`:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

Ejemplo con el tipo `relatedEntity` con una forma simple:

```4d
{
    "firstName": "Greg",
    "directReports": [
        {
            "lastName": "Boothe"
        },
        {
            "lastName": "Caudill"
        },
        {
            "lastName": "Gomes"
        }
    ]
}
```

#### Ejemplo 5

Obtenga una `relatedEntity` en un formulario simple:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

Ejemplo con el tipo `relatedEntity` con una forma simple:

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### Ejemplo 6

Extracción de todas las propiedades de una `Entidad relacionada`:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

Ejemplo con el tipo `relatedEntity` con una forma simple:

```4d
{
    "employer": {
        "ID": 20,
        "name": "India Astral Secretary",
        "creationDate": "1984-08-25T00:00:00.000Z",
        "revenues": 12000000,
        "extra": null
    }
}
```

#### Ejemplo 7

Extracción de algunas propiedades de una `Entidad relacionada`:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

Ejemplo con el tipo `relatedEntity` con una forma simple:

```4d
{
    "employer": {
        "name": "India Astral Secretary",
        "revenues": 12000000
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.touched().Desc -->
## .touched( )

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->


<!-- REF #EntityClass.touched().Params -->
| Parámetros | Tipo    |    | Descripción                                                                                                                  |
| ---------- | ------- |:--:| ---------------------------------------------------------------------------------------------------------------------------- |
| Result     | Boolean | <- | True si se ha modificado al menos un atributo de la entidad y aún no se ha guardado, si no, False|<!-- END REF -->

|

#### Descripción

La función `.touched()` <!-- REF #EntityClass.touched().Summary -->comprueba si un atributo de la entidad ha sido modificado o no desde que se cargó la entidad en la memoria o se guardó<!-- END REF -->.

Si un atributo ha sido modificado o calculado, la función devuelve True, en caso contrario devuelve False. Puede utilizar esta función para determinar si necesita guardar la entidad.

Esta función devuelve False para una nueva entidad que acaba de ser creada (con [`.new( )`](DataClassClass.md#new)). Tenga en cuenta, sin embargo, que si utiliza una función que calcula un atributo de la entidad, la función `.touched()` devolverá entonces True. Por ejemplo, si se llama a [`.getKey()`](#getkey) para calcular la llave primaria, `.touched()` devuelve True.

#### Ejemplo

En este ejemplo, comprobamos si es necesario guardar la entidad:

```4d
 var $emp : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName //Aunque se actualice con el mismo valor, el atributo se marca como tocado

 If($emp.touched()) //si se ha modificado al menos uno de los atributos
    $emp.save()
 End if // de lo contrario, no es necesario guardar la entidad
```

<!-- END REF -->

<!-- REF EntityClass.touchedAttributes().Desc -->
## .touchedAttributes( )

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->


<!-- REF #EntityClass.touchedAttributes().Params -->
| Parámetros | Tipo       |    | Descripción                                                                |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------- |
| Result     | Collection | <- | Nombres de atributos tocados, o colección vacía|<!-- END REF -->

|

#### Descripción

La función `.touchedAttributes()` <!-- REF #EntityClass.touchedAttributes().Summary -->devuelve los nombres de los atributos que han sido modificados desde que la entidad fue cargada en memoria<!-- END REF -->.

Esto se aplica a los atributos [kind](DataClassClass.md#attributename) `storage` o `relatedEntity`.

En el caso de que se haya tocado una entidad relacionada (es decir, la llave externa), se devuelve el nombre de la entidad relacionada y el nombre de su llave primaria.

Si no se ha tocado ningún atributo de entidad, el método devuelve una colección vacía.

#### Ejemplo 1

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName //Aunque se actualice con el mismo valor, el atributo se marca como tocado
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```

#### Ejemplo 2

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity
 var $company : cs.CompanyEntity

 $touchedAttributes:=New collection

 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName
 $emp.lastName:="Martin"

 $company:=ds.Company.get(121)
 $emp.employer:=$company

 $touchedAttributes:=$emp.touchedAttributes()

  //collection $touchedAttributes: ["firstName","lastName","employer","employerID"]
```

En este caso:

* firstName y lastName tienen un tipo `storage`
* employer tiene un tipo `relatedEntity`
* employerID es la llave extranjera de la entidad relacionada con el empleador

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->
## .unlock()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->


<!-- REF #EntityClass.unlock().Params -->
| Parámetros | Tipo   |    | Descripción                              |
| ---------- | ------ |:--:| ---------------------------------------- |
| Result     | Object | <- | Objeto estado|<!-- END REF -->

|

#### Descripción

La función `.unlock()` <!-- REF #EntityClass.unlock().Summary -->elimina el bloqueo pesimista del registro que coincide con la entidad<!-- END REF --> en el almacén de datos y la tabla relacionados con su clase de datos.

> Para más información, consulte la sección [Entity locking](ORDA/entities.md#entity-locking).

Un registro se desbloquea automáticamente cuando ya no es referenciado por ninguna entidad en el proceso de bloqueo (por ejemplo: si el bloqueo se pone sólo en una referencia local de una entidad, la entidad y, por tanto, el registro se desbloquea cuando el proceso termina).
> Cuando un registro se bloquea, debe desbloquearse desde el proceso de bloqueo y en la referencia de la entidad que puso el bloqueo. Por ejemplo:

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Result**

El objeto devuelto por <`.unlock()<` contiene la siguiente propiedad:

| Propiedad | Tipo    | Descripción                                                                                                                                                                                                                         |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success   | Boolean | True si la acción de desbloquear tiene éxito, False en caso contrario. Si el desbloqueo se realiza en una entidad abandonada, en un registro no bloqueado o en un registro bloqueado por otro proceso o entidad, el éxito es False. |

#### Ejemplo

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object

 $employee:=ds.Employee.get(725)
 $status:=$employee.lock()
 ... //processing
 $status:=$employee.unlock()
 If($status.success)
    ALERT("The entity is now unlocked")
 End if
```

<!-- END REF -->
