---
id: EntityClass
title: Entity
---

An [entity](ORDA/dsMapping.md#entity) is an instance of a [Dataclass](ORDA/dsMapping.md#dataclass), like a record of the table matching the dataclass in its associated datastore. Contiene los mismos atributos que la clase de datos, así como los valores de los datos y las propiedades y funciones específicas.

### Resumen

|                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE EntityClass.attributeName.Summary -->                                              |
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)<br/><!-- INCLUDE #EntityClass.clone().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)<br/><!-- INCLUDE #EntityClass.diff().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)<br/><!-- INCLUDE #EntityClass.drop().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)<br/><!-- INCLUDE #EntityClass.first().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)<br/><!-- INCLUDE #EntityClass.fromObject().Summary -->                                                 |
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)<br/><!-- INCLUDE #EntityClass.getDataClass().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)<br/><!-- INCLUDE #EntityClass.getKey().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)<br/><!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)<br/><!-- INCLUDE #EntityClass.getSelection().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)<br/><!-- INCLUDE #EntityClass.getStamp().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #EntityClass.indexOf().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)<br/><!-- INCLUDE #EntityClass.isNew().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)<br/><!-- INCLUDE #EntityClass.last().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)<br/><!-- INCLUDE #EntityClass.lock().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)<br/><!-- INCLUDE #EntityClass.next().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)<br/><!-- INCLUDE #EntityClass.previous().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)<br/><!-- INCLUDE #EntityClass.reload().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)<br/><!-- INCLUDE #EntityClass.save().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)<br/><!-- INCLUDE #EntityClass.toObject().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)<br/><!-- INCLUDE #EntityClass.touched().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)<br/><!-- INCLUDE #EntityClass.touchedAttributes().Summary -->                            |
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #EntityClass.unlock().Summary -->                                                             |

<!-- REF EntityClass.attributeName.Desc -->

## ._attributeName_

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : any<!-- END REF -->

#### Descripción

Todo atributo de la dataclass está disponible como una propiedad de una entidad, que <!-- REF EntityClass.attributeName.Summary --> almacena el valor del atributo para la entidad<!-- END REF -->.

> Los atributos dataclass también se pueden alcanzar utilizando la sintaxis alternativa con \[ ].

The attribute value type depends on the attribute [kind](DataClassClass.md#attributename) (relation or storage):

- If _attributeName_ kind is **storage**:
  `.attributeName` returns a value of the same type as _attributeName_.
- If _attributeName_ kind is **relatedEntity**:
  `.attributeName` returns the related entity. Los valores de la entidad relacionada están disponibles directamente a través de las propiedades en cascada, por ejemplo "myEntity.employer.employees\[0].lastname".
- If _attributeName_ kind is **relatedEntities**:
  `.attributeName` returns a new entity selection of related entities. Se eliminan los duplicados (se devuelve una entity selection desordenada).

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->

| Parámetros | Tipo                      |     | Descripción                                   |
| ---------- | ------------------------- | :-: | --------------------------------------------- |
| Result     | 4D.Entity |  <- | Nueva entidad que hace referencia al registro |

<!-- END REF -->

#### Descripción

The `.clone()` function <!-- REF #EntityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->. Esta función permite actualizar las entidades por separado.

> Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save( )`](#save) function is executed.

Esta función sólo puede utilizarse con entidades ya guardadas en la base de datos. It cannot be called on a newly created entity (for which [`.isNew()`](#isnew) returns **True**).

#### Ejemplo

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Updates done on $emp are not done on $empCloned

```

<!-- END REF -->

<!-- REF EntityClass.diff().Desc -->

## .diff()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->

<!-- REF #EntityClass.diff().Params -->

| Parámetros          | Tipo                      |     | Descripción                                |
| ------------------- | ------------------------- | :-: | ------------------------------------------ |
| entityToCompare     | 4D.Entity |  -> | Entidad a comparar con la entidad original |
| attributesToCompare | Collection                |  -> | Nombre de los atributos a comparar         |
| Result              | Collection                |  <- | Diferencias entre las entidades            |

<!-- END REF -->

#### Descripción

The `.diff()` function <!-- REF #EntityClass.diff().Summary -->compares the contents of two entities and returns their differences<!-- END REF -->.

In _entityToCompare_, pass the entity to be compared to the original entity.

In _attributesToCompare_, you can designate specific attributes to compare. Si se suministra, la comparación se realiza sólo en los atributos especificados. Si no se suministra, se devuelven todas las diferencias entre las entidades.

Las diferencias se devuelven como una colección de objetos cuyas propiedades son:

| Nombre de propiedad | Tipo                                      | Descripción                                 |
| ------------------- | ----------------------------------------- | ------------------------------------------- |
| attributeName       | String                                    | Nombre del atributo                         |
| value               | cualquiera - Depende del tipo de atributo | Valor del atributo en la entidad            |
| otherValue          | cualquiera - Depende del tipo de atributo | Value of the attribute in _entityToCompare_ |

Sólo se incluyen en la colección los atributos con valores diferentes. If no differences are found, `.diff()` returns an empty collection.

The function applies for properties whose [kind](DataClassClass.md#attributename) is **storage** or **relatedEntity**. In case a related entity has been updated (meaning the foreign key), the name of the related entity and its primary key name are returned as _attributeName_ properties (_value_ and _otherValue_ are empty for the related entity name).

If one of the compared entities is **Null**, an error is raised.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->

| Parámetros | Tipo    |     | Descripción                                                                                     |
| ---------- | ------- | :-: | ----------------------------------------------------------------------------------------------- |
| mode       | Integer |  -> | `dk force drop if stamp changed`: Forces the drop even if the stamp has changed |
| Result     | Object  |  <- | Resultado de la operación soltar                                                                |

<!-- END REF -->

#### Descripción

The `.drop()` function <!-- REF #EntityClass.drop().Summary -->deletes the data contained in the entity from the datastore<!-- END REF -->, from the table related to its Dataclass. Tenga en cuenta que la entidad permanece en la memoria.

In a multi-user or multi-process application, the `.drop()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the _mode_ parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk force drop if stamp changed` option in the _mode_ parameter: in this case, the entity is dropped even if the stamp has changed (and the primary key is still the same).

**Resultado**

The object returned by `.drop( )` contains the following properties:

| Propiedad                         |                                     | Tipo                  | Descripción                                                                                                                                                                                              |
| --------------------------------- | ----------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean               | true si la acción de soltar tiene éxito, false en caso contrario.                                                                                                                        |
|                                   |                                     |                       | _**Disponible sólo en caso de error:**_                                                                                                                                                  |
| status(\*)     |                                     | number                | Código de error, ver abajo                                                                                                                                                                               |
| statusText(\*) |                                     | text                  | Descripción del error, ver abajo                                                                                                                                                                         |
|                                   |                                     |                       | _**Available only in case of pessimistic lock error:**_                                                                                                                                  |
| LockKindText                      |                                     | text                  | "Locked by record"                                                                                                                                                                                       |
| lockInfo                          |                                     | object                | Información sobre el origen del bloqueo                                                                                                                                                                  |
|                                   | task_id        | number                | Id del proceso                                                                                                                                                                                           |
|                                   | user_name      | text                  | Nombre de usuario de la sesión en la máquina                                                                                                                                                             |
|                                   | user4d_alias   | text                  | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                                                                                       |
|                                   | host_name      | text                  | Nombre de la máquina                                                                                                                                                                                     |
|                                   | task_name      | text                  | Nombre del proceso                                                                                                                                                                                       |
|                                   | client_version | text                  |                                                                                                                                                                                                          |
|                                   |                                     |                       | _**Available only in case of serious error (serious error can be trying to duplicate a primary key, disk full...):**_ |
| errors                            |                                     | collection of objects |                                                                                                                                                                                                          |
|                                   | message                             | text                  | Mensaje de error                                                                                                                                                                                         |
|                                   | component signature                 | text                  | firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                                                                                 |
|                                   | errCode                             | number                | Código de error                                                                                                                                                                                          |

(\*) The following values can be returned in the _status_ and _statusText_ properties of _Result_ object in case of error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Cuando se utiliza entity.drop( ), este error puede ser devuelto cuando se utiliza la opción dk force drop if stamp changed. When using entity.lock( ), this error can be returned when dk reload if stamp changed option is used</li> **Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3     | The entity is locked by a pessimistic lock.<br/> **Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `dk status stamp has changed`             | 2     | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><li>**Associated statusText**: "Stamp has changed"</li>                                                                                                                                                                                                                                                                                  |
| `dk status wrong permission`              | 1     | Los privilegios actuales no permiten suprimir la entidad. **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Ejemplo 1

Example without `dk force drop if stamp changed` option:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Ejemplo 2

Example with `dk force drop if stamp changed` option:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.first().Desc -->

## .first()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->

| Parámetros | Tipo                      |     | Descripción                                                                                                |
| ---------- | ------------------------- | :-: | ---------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity |  <- | Referencia a la primera entidad de una selección de entidades (Null si no se encuentra) |

<!-- END REF -->

#### Descripción

The `.first()` function <!-- REF #EntityClass.first().Summary -->returns a reference to the entity in first position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $firstEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() //$firstEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.fromObject().Desc -->

## .fromObject()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->

| Parámetros | Tipo   |     | Descripción                                  |
| ---------- | ------ | :-: | -------------------------------------------- |
| filler     | Object |  -> | Objeto a partir del cual se llena la entidad |

<!-- END REF -->

#### Descripción

The `.fromObject()` function <!-- REF #EntityClass.fromObject().Summary -->fills an entity with the _filler_ content<!-- END REF -->.

> Esta función modifica la entidad original.

El mapeo entre el objeto y la entidad se realiza sobre los nombres de los atributos:

- Si una propiedad del objeto no existe en la dataclass, se ignora.
- Los tipos de datos deben ser equivalentes. If there is a type mismatch between the object and dataclass, 4D tries to convert the data whenever possible (see [`Converting data types`](Concepts/data-types.md#converting-data-types)), otherwise the attribute is left untouched.
- La llave primaria puede darse tal cual o con una propiedad "__KEY" (llenada con el valor de la llave primaria). If it does not already exist in the dataclass, the entity is created with the given value when [.save()](#save) is called. Si no se da la llave primaria, se crea la entidad y se asigna el valor de la llave primaria con respecto a las reglas de la base de datos. El autoincremento sólo se calcula si la llave primaria es nula.

_filler_ can handle a related entity under the following conditions:

- _filler_ contains the foreign key itself, or
- _filler_ contains a property object with the same name as the related entity, containing a single property named "\_\_KEY".
- si la entidad relacionada no existe, se ignora.

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
    "employer": {// relatedEntity given as an object
        "__KEY": "21"
    },
    "manager": {// relatedEntity given as an object
        "__KEY": "411"
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.getDataClass().Desc -->

## .getDataClass()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntityClass.getDataClass().Params -->

| Parámetros | Tipo                         |     | Descripción                                  |
| ---------- | ---------------------------- | :-: | -------------------------------------------- |
| Result     | 4D.DataClass |  <- | Objeto DataClass al que pertenece la entidad |

<!-- END REF -->

#### Descripción

The `.getDataClass()` function <!-- REF #EntityClass.getDataClass().Summary -->returns the dataclass of the entity<!-- END REF -->. Esta función es útil al escribir código genérico.

#### Ejemplo

El siguiente código genérico duplica cualquier entidad:

```4d
  //duplicate_entity method
  //duplicate_entity($entity)

 #DECLARE($entity : 4D.Entity)  
 var $entityNew : 4D.Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() //create a new entity in the parent dataclass
 $entityNew.fromObject($entity.toObject()) //get all attributes
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null //reset the primary key
 $status:=$entityNew.save() //save the duplicated entity
```

<!-- END REF -->

<!-- REF EntityClass.getKey().Desc -->

## .getKey()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.getKey().Params -->

| Parámetros | Tipo    |     | Descripción                                                                                             |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------------------- |
| mode       | Integer |  -> | `dk key as string`: primary key is returned as a string, no matter the primary key type |
| Result     | Text    |  <- | Valor de la llave primaria de texto de la entidad                                                       |
| Result     | Integer |  <- | Valor de la llave primaria numérica de la entidad                                                       |

<!-- END REF -->

#### Descripción

The `.getKey()` function <!-- REF #EntityClass.getKey().Summary -->returns the primary key value of the entity<!-- END REF -->.

Las llaves primarias pueden ser números (enteros) o cadenas. You can "force" the returned primary key value to be a string, no matter the actual primary key type, by passing the `dk key as string` option in the _mode_ parameter.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19R5        | Añadidos       |

</details>

<!-- REF #EntityClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntityClass.getRemoteContextAttributes().Params -->

| Parámetros | Tipo |    | Descripción                                                           |
| ---------- | ---- | -- | --------------------------------------------------------------------- |
| result     | Text | <- | Atributos de contexto vinculados a la entidad, separados por una coma |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. En la mayoría de los casos, no será necesario utilizarla.

#### Descripción

The `.getRemoteContextAttributes()` function <!-- REF #EntityClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity <!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity, the function returns an empty Text.

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

[EntitySelection.getRemoteContextAttributes()](./EntitySelectionClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntityClass.getSelection().Desc -->

## .getSelection()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF -->

<!-- REF #EntityClass.getSelection().Params -->

| Parámetros | Tipo                               |     | Descripción                                                                                 |
| ---------- | ---------------------------------- | :-: | ------------------------------------------------------------------------------------------- |
| Result     | 4D.EntitySelection |  <- | Entity selection a la que pertenece la entidad (nula si no se encuentra) |

<!-- END REF -->

#### Descripción

The `.getSelection()` function <!-- REF #EntityClass.getSelection().Summary -->returns the entity selection which the entity belongs to<!-- END REF -->.

Si la entidad no pertenece a una selección de entidades, la función devuelve Null.

#### Ejemplo

```4d
 var $emp : cs.EmployeeEntity
 var $employees; $employees2 : cs.EmployeeSelection
 $emp:=ds.Employee.get(672) // This entity does not belong to any entity selection
 $employees:=$emp.getSelection() // $employees is Null

 $employees2:=ds.Employee.query("lastName=:1";"Smith") //This entity selection contains 6 entities
 $emp:=$employees2[0]  // This entity belongs to an entity selection

 ALERT("The entity selection contains "+String($emp.getSelection().length)+" entities")
```

<!-- END REF -->

<!-- REF EntityClass.getStamp().Desc -->

## .getStamp()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->

<!-- REF #EntityClass.getStamp().Params -->

| Parámetros | Tipo    |     | Descripción                                                                  |
| ---------- | ------- | :-: | ---------------------------------------------------------------------------- |
| Result     | Integer |  <- | Sello de la entidad (0 si la entidad acaba de ser creada) |

<!-- END REF -->

#### Descripción

The `.getStamp()` function <!-- REF #EntityClass.getStamp().Summary --> returns the current value of the stamp of the entity<!-- END REF -->.

El sello interno se incrementa automáticamente en 4D cada vez que se guarda la entidad. It manages concurrent user access and modifications to the same entities (see [**Entity locking**](ORDA/entities.md#entity-locking)).

> Para una entidad nueva (nunca guardada), la función devuelve 0. To know if an entity has just been created, it is recommended to use [.isNew()](#isnew).

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.indexOf().Params -->

| Parámetros      | Tipo                               |     | Descripción                                                               |
| --------------- | ---------------------------------- | :-: | ------------------------------------------------------------------------- |
| entitySelection | 4D.EntitySelection |  -> | La posición de la entidad se da en función de esta selección de entidades |
| Result          | Integer                            |  <- | Posición de la entidad en una selección de entidades                      |

<!-- END REF -->

#### Descripción

The `.indexOf()` function <!-- REF #EntityClass.indexOf().Summary -->returns the position of the entity in an entity selection<!-- END REF -->.

By default if the _entitySelection_ parameter is omitted, the function returns the entity's position within its own entity selection. Otherwise, it returns the position of the entity within the specified _entitySelection_.

El valor resultante se incluye entre 0 y la longitud de la selección de entidades -1.

- If the entity does not have an entity selection or does not belong to _entitySelection_, the function returns -1.
- If _entitySelection_ is Null or does not belong to the same dataclass as the entity, an error is raised.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1] //This entity belongs to an entity selection
 ALERT("The index of the entity in its own entity selection is "+String($employee.indexOf())) //1

 $employee:=ds.Employee.get(725) //This entity does not belong to an entity selection
 ALERT("The index of the entity is "+String($employee.indexOf())) // -1
```

<!-- END REF -->

<!-- REF EntityClass.isNew().Desc -->

## .isNew()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.isNew().Params -->

| Parámetros | Tipo    |     | Descripción                                                                                                               |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------------------------------------- |
| Result     | Boolean |  <- | True si la entidad acaba de ser creada y aún no se ha guardado. En caso contrario, False. |

<!-- END REF -->

#### Descripción

The `.isNew()` function <!-- REF #EntityClass.isNew().Summary --> returns True if the entity to which it is applied has just been created and has not yet been saved in the datastore<!-- END REF -->. .

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.last().Params -->

| Parámetros | Tipo                      |     | Descripción                                                                                               |
| ---------- | ------------------------- | :-: | --------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity |  <- | Referencia a la última entidad de una selección de entidades (Null si no se encuentra) |

<!-- END REF -->

#### Descripción

The `.last()` function <!-- REF #EntityClass.last().Summary -->returns a reference to the entity in last position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $lastEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $lastEmployee:=$employee.last() //$lastEmployee is the last entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.lock().Desc -->

## .lock()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.lock().Params -->

| Parámetros | Tipo    |     | Descripción                                                                          |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------ |
| mode       | Integer |  -> | `dk reload if stamp changed`: Reload before locking if stamp changed |
| Result     | Object  |  <- | Resultado de la operación de bloqueo                                                 |

<!-- END REF -->

#### Descripción

The `.lock()` function <!-- REF #EntityClass.lock().Summary -->puts a pessimistic lock on the record referenced by the entity<!-- END REF -->. The [lock is set](ORDA/entities.md#entity-locking) for a record and all the references of the entity in the current process.

Other processes will see this record as locked (the `result.success` property will contain False if they try to lock the same entity using this function). Sólo las funciones ejecutadas en la sesión de "bloqueo" pueden editar y guardar los atributos de la entidad. La entidad puede ser cargada como de sólo lectura por otras sesiones, pero no podrán introducir y guardar valores.

A record locked by `.lock()` is unlocked:

- when the [`unlock()`](#unlock) function is called on a matching entity in the same process
- automáticamente, cuando ya no es referenciado por ninguna entidad en la memoria. Por ejemplo, si el bloqueo se pone sólo en una referencia local de una entidad, la entidad se desbloquea cuando la función termina. Mientras haya referencias a la entidad en la memoria, el registro permanece bloqueado.

> An entity can also be [locked by a REST session](../REST/$lock.md), in which case it can only be unlocked by the session.

By default, if the _mode_ parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk reload if stamp changed` option in the _mode_ parameter: in this case, no error is returned and the entity is reloaded when the stamp has changed (if the entity still exists and the primary key is still the same).

**Resultado**

The object returned by `.lock( )` contains the following properties:

| Propiedad                         |                                     | Tipo                  | Descripción                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------- | ----------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean               | true si la acción de bloqueo tiene éxito (o si la entidad ya está bloqueada en el proceso actual), false en caso contrario.                                                                                                                                                                                                                        |
|                                   |                                     |                       | _**Available only if `dk reload if stamp changed` option is used:**_                                                                                                                                                                                                                                                                                                  |
| **wasReloaded**                   |                                     | boolean               | true si la entidad fue recargada con éxito, false en caso contrario.                                                                                                                                                                                                                                                                                                  |
|                                   |                                     |                       | _**Disponible sólo en caso de error:**_                                                                                                                                                                                                                                                                                                                               |
| status(\*)     |                                     | number                | Código de error, ver abajo                                                                                                                                                                                                                                                                                                                                                            |
| statusText(\*) |                                     | text                  | Descripción del error, ver abajo                                                                                                                                                                                                                                                                                                                                                      |
|                                   |                                     |                       | _**Available only in case of pessimistic lock error:**_                                                                                                                                                                                                                                                                                                               |
| lockKindText                      |                                     | text                  | "Locked by record" si está bloqueado por un proceso 4D, "Locked by session" si está bloqueado por una sesión REST                                                                                                                                                                                                                                                                     |
| lockInfo                          |                                     | object                | Información sobre el origen del bloqueo. Las propiedades devueltas dependen del origen del bloqueo (proceso 4D o sesión REST).                                                                                                                                                                                                     |
|                                   |                                     |                       | _**Available only for a 4D process lock:**_                                                                                                                                                                                                                                                                                                                           |
|                                   | task_id        | number                | ID del Proceso                                                                                                                                                                                                                                                                                                                                                                        |
|                                   | user_name      | text                  | Nombre de usuario de la sesión en la máquina                                                                                                                                                                                                                                                                                                                                          |
|                                   | user4d_alias   | text                  | Nombre o alias del usuario 4D                                                                                                                                                                                                                                                                                                                                                         |
|                                   | user4d_id      | number                | ID del usuario en el directorio de la base de datos 4D                                                                                                                                                                                                                                                                                                                                |
|                                   | host_name      | text                  | Nombre de la máquina                                                                                                                                                                                                                                                                                                                                                                  |
|                                   | task_name      | text                  | Nombre del proceso                                                                                                                                                                                                                                                                                                                                                                    |
|                                   | client_version | text                  | Versión del cliente                                                                                                                                                                                                                                                                                                                                                                   |
|                                   |                                     |                       | _**Available only for a REST session lock:**_                                                                                                                                                                                                                                                                                                                         |
|                                   | host                                | text                  | \|URL that locked the entity (e.g. "www.myserver.com")\|                                                                                                                                                                                                                                           |
|                                   | IPAddr                              | text                  | Dirección IP del bloqueo (por ejemplo: "127.0.0.1")                                                                                                                                                                                                                                                |
|                                   | userAgent                           | text                  | userAgent del origin del bloqueo (ej: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |
|                                   |                                     |                       | _**Available only in case of serious error**_ (primary key already exists, disk full...):                                                                                                                                                                                                          |
| errors                            |                                     | collection of objects |                                                                                                                                                                                                                                                                                                                                                                                       |
|                                   | message                             | text                  | Mensaje de error                                                                                                                                                                                                                                                                                                                                                                      |
|                                   | component signature                 | text                  | firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                                                                                                                                                                                                                                                              |
|                                   | errCode                             | number                | Código de error                                                                                                                                                                                                                                                                                                                                                                       |

(\*) The following values can be returned in the _status_ and _statusText_ properties of the _Result_ object in case of error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. This error can occur in the following cases:<li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Cuando se utiliza `.drop( )`, este error puede devolverse cuando se utiliza la opción `dk force drop if stamp changed`. When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3     | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `dk status stamp has changed`             | 2     | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                                              |

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

Example with `dk reload if stamp changed` option:

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.next().Params -->

| Parámetros | Tipo                      |     | Descripción                                                                                                 |
| ---------- | ------------------------- | :-: | ----------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity |  <- | Referencia a la siguiente entidad en la selección de entidades (Null si no se encuentra) |

<!-- END REF -->

#### Descripción

The `.next()` function <!-- REF #EntityClass.next().Summary -->returns a reference to the next entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

Si no hay una entidad siguiente válida en la selección de entidades (es decir, se encuentra en la última entidad de la selección), la función devuelve Null. Si la siguiente entidad ha sido descartada, la función devuelve la siguiente entidad válida (y eventualmente Null).

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee is the second entity of the $employees entity selection

```

<!-- END REF -->

<!-- REF EntityClass.previous().Desc -->

## .previous()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.previous().Params -->

| Parámetros | Tipo                      |     | Descripción                                                                                                |
| ---------- | ------------------------- | :-: | ---------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity |  <- | Referencia a la entidad anterior en la selección de entidades (Null si no se encuentra) |

<!-- END REF -->

#### Descripción

The `.previous()` function <!-- REF #EntityClass.previous().Summary --> returns a reference to the previous entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

Si no hay una entidad anterior válida en la selección de entidades (es decir, se encuentra en la primera entidad de la selección), la función devuelve Null. Si la entidad anterior ha sido soltada, la función devuelve la entidad válida anterior (y eventualmente Null).

#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $previousEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() //$previousEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.reload().Desc -->

## .reload()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->

<!-- REF #EntityClass.reload().Params -->

| Parámetros | Tipo   |     | Descripción   |
| ---------- | ------ | :-: | ------------- |
| Result     | Object |  <- | Objeto estado |

<!-- END REF -->

#### Descripción

The `.reload()` function <!-- REF #EntityClass.reload().Summary -->reloads the content of the entity in memory<!-- END REF -->, according to information stored in the table related to the dataclass in the datastore. La recarga se realiza sólo si la entidad sigue existiendo con la misma llave primaria.

**Resultado**

The object returned by `.reload( )` contains the following properties:

| Propiedad                         | Tipo    | Descripción                                                                                                                     |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| success                           | boolean | True if the reload action is successful, False otherwise._**Available only in case of error**_: |
| status(\*)     | number  | Código de error, ver abajo                                                                                                      |
| statusText(\*) | text    | Descripción del error, ver abajo                                                                                                |

(\*) The following values can be returned in the _status_ and _statusText_ properties of _Result_ object in case of error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>_**Associated statusText**_: "Entity does not exist anymore" |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>_**Associated statusText**_: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.save().Params -->

| Parámetros | Tipo    |     | Descripción                                                       |
| ---------- | ------- | :-: | ----------------------------------------------------------------- |
| mode       | Integer |  -> | `dk auto merge`: Enables the automatic merge mode |
| Result     | Object  |  <- | Resultado de la operación guardar                                 |

<!-- END REF -->

#### Descripción

The `.save()` function <!-- REF #EntityClass.save().Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. Debe llamar a este método después de crear o modificar una entidad si quiere guardar los cambios realizados en ella.

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). En caso contrario, la función no hace nada (no se llama al activador).

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the _mode_ parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the _mode_ parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. Los datos resultantes guardados en la entidad serán la combinación (la "fusión") de todas las modificaciones no concurrentes (si se aplicaron modificaciones al mismo atributo, el guardado falla y se devuelve un error, incluso con el modo de fusión automática).

> El modo de fusión automática no está disponible para los atributos de tipo Imagen, Objeto y Texto cuando se almacenan fuera del registro. Concurrent changes in these attributes will result in a `dk status stamp has changed` error.

**Resultado**

The object returned by `.save()` contains the following properties:

| Propiedad    |                                     | Tipo                  | Descripción                                                                                                                                                                                                |
| ------------ | ----------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success      |                                     | boolean               | True si la acción guardar tiene éxito, false en caso contrario.                                                                                                                            |
|              |                                     |                       | _**Available only if `dk auto merge` option is used**_:                                                                                                                                    |
| autoMerged   |                                     | boolean               | True si se ha realizado una fusión automática, False en caso contrario.                                                                                                                    |
|              |                                     |                       | _**Disponible sólo en caso de error**_:                                                                                                                                                    |
| status       |                                     | number                | Error code, [see below](#status-and-statustext)                                                                                                                                                            |
| statusText   |                                     | text                  | Description of the error, [see below](#status-and-statustext)                                                                                                                                              |
|              |                                     |                       | _**Available only in case of pessimistic lock error**_:                                                                                                                                    |
| lockKindText |                                     | text                  | "Locked by record"                                                                                                                                                                                         |
| lockInfo     |                                     | object                | Información sobre el origen del bloqueo                                                                                                                                                                    |
|              | task_id        | number                | Id del proceso                                                                                                                                                                                             |
|              | user_name      | text                  | Nombre de usuario de la sesión en la máquina                                                                                                                                                               |
|              | user4d_alias   | text                  | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                                                                                         |
|              | host_name      | text                  | Nombre de la máquina                                                                                                                                                                                       |
|              | task_name      | text                  | Nombre del proceso                                                                                                                                                                                         |
|              | client_version | text                  |                                                                                                                                                                                                            |
|              |                                     |                       | _**Available only in case of serious error**_ (serious error - can be trying to duplicate a primary key, disk full...): |
| errors       |                                     | collection of objects |                                                                                                                                                                                                            |
|              | message                             | text                  | Mensaje de error                                                                                                                                                                                           |
|              | componentSignature                  | text                  | Firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                                                                                   |
|              | errCode                             | number                | Código de error                                                                                                                                                                                            |

##### status y statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6     | (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.**Associated statusText**: "Auto merge failed"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity doesnot exist anymore" |
| `dk status locked`                        | 3     | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `dk status stamp has changed`             | 2     | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                                                                                             |
| `dk status wrong permission`              | 1     | Los privilegios actuales no permiten guardar la entidad. **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

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

Updating an entity without `dk auto merge` option:

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

Updating an entity with `dk auto merge` option:

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.toObject().Params -->

| Parámetros   | Tipo       |     | Descripción                                                                                                                                                                                        |
| ------------ | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filterString | Text       |  -> | Atributo(s) a extraer (cadena separada por comas)                                                                                                            |
| filterCol    | Collection |  -> | Colección de atributos a extraer                                                                                                                                                                   |
| options      | Integer    |  -> | `dk with primary key`: adds the \_\_KEY property;<br/>`dk with stamp`: adds the \_STAMP property |
| Result       | Object     |  <- | Objeto creado a partir de la entidad                                                                                                                                                               |

<!-- END REF -->

#### Descripción

The `.toObject()` function <!-- REF #EntityClass.toObject().Summary -->returns an object which has been built from the entity<!-- END REF -->. Los nombres de las propiedades en el objeto coinciden con los nombres de los atributos de la entidad.

If no filter is specified, or if the _filterString_ parameter contains an empty string or "\*", the returned object will contain:

- todos los atributos de la entidad de almacenamiento
- attributes of the `relatedEntity` [kind](DataClassClass.md#attributename): you get a property with the same name as the related entity (name of the many-to-one link). El atributo se extrae con la forma simple.
- attributes of the `relatedEntities` [kind](DataClassClass.md#attributename): attribute is not returned.

En el primer parámetro, se pasa el atributo o atributos de la entidad a extraer. Puede pasar:

- _filterString_: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
- _filterCol_: a collection of strings: \["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
- propertyPath = "relatedEntity.\*" -> all the properties are extracted
- propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> sólo se extraen esas propiedades

If a filter is specified for attributes of the relatedEntities [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntities.\*" -> all the properties are extracted
- propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> sólo se extraen esas propiedades

In the _options_ parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

:::caution Atención

Si utiliza otro atributo distinto de la llave primaria como atributo Uno en una relación, el valor de este atributo se escribirá en la propiedad "__KEY". Keep in mind that it is recommended to use the primary key as One attribute in your relations, especially when you use `.toObject()` and `.fromObject()` functions.

:::

#### Ejemplo 1

En todos los ejemplos de esta sección se utilizará la siguiente estructura:

![](../assets/en/API/dataclassAttribute4.png)

Sin parámetro de filtro:

```4d
employeeObject:=employeeSelected.toObject()
```

Ejemplo con el tipo <code>relatedEntity</code> con una forma simple:

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

Ejemplo con el tipo <code>relatedEntity</code> con una forma simple:

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

Expanding all the properties of `relatedEntities`:

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

Extracting some properties of `relatedEntities`:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

Ejemplo con el tipo <code>relatedEntity</code> con una forma simple:

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

Extracting a `relatedEntity` with simple form:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

Ejemplo con el tipo <code>relatedEntity</code> con una forma simple:

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### Ejemplo 6

Extracting all the properties of a `relatedEntity`:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

Ejemplo con el tipo <code>relatedEntity</code> con una forma simple:

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

Extracting some properties of a `relatedEntity`:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

Ejemplo con el tipo <code>relatedEntity</code> con una forma simple:

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.touched().Params -->

| Parámetros | Tipo    |     | Descripción                                                                                       |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------------- |
| Result     | Boolean |  <- | True si se ha modificado al menos un atributo de la entidad y aún no se ha guardado, si no, False |

<!-- END REF -->

#### Descripción

The `.touched()` function <!-- REF #EntityClass.touched().Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

Si un atributo ha sido modificado o calculado, la función devuelve True, en caso contrario devuelve False. Puede utilizar esta función para determinar si necesita guardar la entidad.

This function returns False for a new entity that has just been created (with [`.new( )`](DataClassClass.md#new)). Note however that if you use a function which calculates an attribute of the entity, the `.touched()` function will then return True. For example, if you call [`.getKey()`](#getkey) to calculate the primary key, `.touched()` returns True.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->

<!-- REF #EntityClass.touchedAttributes().Params -->

| Parámetros | Tipo       |     | Descripción                                     |
| ---------- | ---------- | :-: | ----------------------------------------------- |
| Result     | Collection |  <- | Nombres de atributos tocados, o colección vacía |

<!-- END REF -->

#### Descripción

The `.touchedAttributes()` function <!-- REF #EntityClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

This applies for attributes of the [kind](DataClassClass.md#attributename) `storage` or `relatedEntity`.

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

- firstName and lastName have a `storage` kind
- el empleador tiene un tipo `relatedEntity`
- employerID es la llave extranjera de la entidad relacionada con el empleador

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->

## .unlock()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17          | Añadidos       |

</details>

<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->

<!-- REF #EntityClass.unlock().Params -->

| Parámetros | Tipo   |     | Descripción   |
| ---------- | ------ | :-: | ------------- |
| Result     | Object |  <- | Objeto estado |

<!-- END REF -->

#### Descripción

The `.unlock()` function <!-- REF #EntityClass.unlock().Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF --> in the datastore and table related to its dataclass.

> For more information, please refer to [Entity locking](ORDA/entities.md#entity-locking) section.

Un registro se desbloquea automáticamente cuando ya no es referenciado por ninguna entidad en el proceso de bloqueo (por ejemplo: si el bloqueo se pone sólo en una referencia local de una entidad, la entidad y, por tanto, el registro se desbloquea cuando el proceso termina).

> Cuando un registro se bloquea, debe desbloquearse desde el proceso de bloqueo y en la referencia de la entidad que puso el bloqueo. Por ejemplo:

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Resultado**

The object returned by `.unlock()` contains the following property:

| Propiedad | Tipo    | Descripción                                                                                                                                                                                                                                                         |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
