---
id: EntityClass
title: Entity
---

An [entity](ORDA/dsMapping.md#entity) is an instance of a [Dataclass](ORDA/dsMapping.md#dataclass), like a record of the table matching the dataclass in its associated datastore. It contains the same attributes as the dataclass as well as the data values and specific properties and functions.


### Resumen

|                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntityClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.clone().Summary -->|
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.diff().Summary -->|
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.drop().Summary -->|
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.first().Summary -->|
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.fromObject().Summary -->|
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getKey().Summary -->|
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getSelection().Summary -->|
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getStamp().Summary -->|
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.indexOf().Summary -->|
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.isNew().Summary -->|
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.last().Summary -->|
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.lock().Summary -->|
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.next().Summary -->|
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.previous().Summary -->|
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.reload().Summary -->|
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.save().Summary -->|
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.toObject().Summary -->|
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touched().Summary -->|
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touchedAttributes().Summary -->|
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.unlock().Summary -->|






<!-- REF EntityClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF EntityClass.attributeName.Syntax -->
***.attributeName*** : any<!-- END REF -->


#### Descripción

Todo atributo de la dataclass está disponible como una propiedad de una entidad, que <!-- REF EntityClass.attributeName.Summary -->almacena el valor del atributo para la entidad<!-- END REF -->.
> Dataclass attributes can also be reached using the alternate syntax with \[ ].

The attribute value type depends on the attribute [kind](DataClassAttributeClass.md#kind) (relation or storage):

*   If *attributeName* kind is **storage**: `.attributeName` returns a value of the same type as *attributeName*.
*   If *attributeName* kind is **relatedEntity**: `.attributeName` returns the related entity. Values of the related entity are directly available through cascading properties, for example "myEntity.employer.employees\[0].lastname".
*   If *attributeName* kind is **relatedEntities**: `.attributeName` returns a new entity selection of related entities. Duplications are removed (an unordered entity selection is returned).


#### Ejemplo

```4d
 var $myEntity : cs.EmployeeEntity
 $myEntity:=ds.Employee.new() //Create a new entity
 $myEntity.name:="Dupont" // assign 'Dupont' to the 'name' attribute
 $myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
 $myEntity.save() //save the entity
```

<!-- END REF -->




<!-- REF EntityClass.clone().Desc -->
## .clone()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>


<!-- REF #EntityClass.clone().Syntax -->
**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->
| Parámetros | Tipo      |    | Descripción                                   |
| ---------- | --------- |:--:| --------------------------------------------- |
| Resultado  | 4D.Entity | <- | Nueva entidad que hace referencia al registro |
<!-- END REF -->


#### Descripción

La función `.clone()` <!-- REF #EntityClass.clone().Summary -->crea en memoria una nueva entidad que hace referencia al mismo registro que la entidad original<!-- END REF -->. Esta función permite actualizar las entidades por separado.
> Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save( )`](#save) function is executed.

Esta función sólo puede utilizarse con entidades ya guardadas en la base de datos. No se puede llamar a una entidad recién creada (para la que [`.isNew()`](#isnew) devuelve **True**).


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |
</details>

<!-- REF #EntityClass.diff().Syntax -->
**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->


<!-- REF #EntityClass.diff().Params -->
| Parámetros          | Tipo       |    | Descripción                                |
| ------------------- | ---------- |:--:| ------------------------------------------ |
| entityToCompare     | 4D.Entity  | -> | Entidad a comparar con la entidad original |
| attributesToCompare | Collection | -> | Nombre de los atributos a comparar         |
| Resultado           | Collection | <- | Diferencias entre las entidades            |
<!-- END REF -->


#### Descripción

La función `.diff()` <!-- REF #EntityClass.diff().Summary -->compara el contenido de dos entidades y devuelve sus diferencias<!-- END REF -->.

En *entityToCompare*, pase la entidad a comparar con la entidad original.

En *attributesToCompare*, puede designar atributos específicos para comparar. Si se suministra, la comparación se realiza sólo en los atributos especificados. Si no se suministra, se devuelven todas las diferencias entre las entidades.

Las diferencias se devuelven como una colección de objetos cuyas propiedades son:

| Nombre de propiedad | Tipo                                      | Descripción                             |
| ------------------- | ----------------------------------------- | --------------------------------------- |
| attributeName       | Cadena                                    | Nombre del atributo                     |
| value               | cualquiera - Depende del tipo de atributo | Valor del atributo en la entidad        |
| otherValue          | cualquiera - Depende del tipo de atributo | Valor del atributo en *entityToCompare* |

Sólo se incluyen en la colección los atributos con valores diferentes. Si no se encuentran diferencias, `.diff()` devuelve una colección vacía.

La función se aplica a las propiedades cuyo [kind](DataClassAttributeClass.md#kind) es **storage** o **relatedEntity**. En caso de que se haya actualizado una entidad relacionada (es decir, la llave foránea), el nombre de la entidad relacionada y su nombre de llave primaria se devuelven como propiedades *attributeName* (*value* y *otherValue* están vacíos para el nombre de la entidad relacionada).

Si una de las entidades comparadas es **Null**, se produce un error.

#### Ejemplo 1


```4d
 var $diff1; $diff2 : Collection
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // All differences are returned
 $diff2:=$clone.diff(employee;New collection"firstName";"lastName"))
  // Only differences on firstName and lastName are returned
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
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntityClass.drop().Syntax -->
**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->
| Parámetros | Tipo    |    | Descripción                                                                        |
| ---------- | ------- |:--:| ---------------------------------------------------------------------------------- |
| mode       | Integer | -> | `dk force drop if stamp changed`: activa el soltar incluso si el sello ha cambiado |
| Resultado  | Object  | <- | Resultado de la operación soltar                                                   |
<!-- END REF -->

#### Descripción

La función `.drop()` <!-- REF #EntityClass.drop().Summary -->elimina los datos contenidos en la entidad del datastore<!-- END REF -->, de la tabla relacionada con su Dataclass. Tenga en cuenta que la entidad permanece en la memoria.

En una aplicación multiusuario o multiproceso, la función `.drop()` se ejecuta bajo un mecanismo de ["bloqueo optimista"](ORDA/entities.md#entity-locking), en el que un sello de bloqueo interno se incrementa automáticamente cada vez que se guarda el registro.

Por defecto, si se omite el parámetro *mode*, la función devolverá un error (ver más abajo) si la misma entidad fue modificada (es decir, el sello ha cambiado) por otro proceso o usuario en el ínterin.

De lo contrario, puede pasar la opción `dk force drop if stamp changed` en el parámetro *mode*: en este caso, la entidad se abandona aunque el sello haya cambiado (y la llave primaria siga siendo la misma).

**Resultado**

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
|               | errCode             | number                | Error code                                                                                                                    |

(\*) Los siguientes valores pueden ser devueltos en las propiedadese *status* y *statusText* del objeto *Result* en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                           |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<br><li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). Cuando se utiliza entity.drop( ), este error puede ser devuelto cuando se utiliza la opción dk force drop if stamp changed. Cuando se utiliza entity.lock( ), este error puede ser devuelto cuando se utiliza la opción dk reload if stamp changed</li><p>**statusText asociado**: "La entidad ya no existe"     |
| `dk status locked`                        | 3     | La entidad está bloqueada por un bloqueo pesimista.<br>**statusText asociado**: "Ya está bloqueado"                                                                                                                            |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.<br>**statusText asociado**: "Otro error"                                                              |
| `dk status stamp has changed`             | 2     | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).<br><li>con `.save( )`: error sólo si no se utiliza la opción `dk auto merge`</li><li>con `.drop( )`: error sólo si no se utiliza la opción `dk force drop if stamp changed`</li><li>con `.lock( )`: error sólo si no se utiliza la opción `dk reload if stamp changed`</li><li>**statusText asociado **: "El sello ha cambiado"</li> |


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
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
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
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
``` 

<!-- END REF -->




<!-- REF EntityClass.first().Desc -->
## .first()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntityClass.first().Syntax -->
**.first()**: 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->
| Parámetros | Tipo      |    | Descripción                                                                             |
| ---------- | --------- |:--:| --------------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Referencia a la primera entidad de una selección de entidades (Null si no se encuentra) |
<!-- END REF -->

#### Descripción

La función `.first()` <!-- REF #EntityClass.first().Summary -->devuelve una referencia a la entidad en primera posición de la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection( )](#getselection) devuelve Null), la función devuelve un valor Null.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->
**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->
| Parámetros | Tipo   |    | Descripción                                  |
| ---------- | ------ |:--:| -------------------------------------------- |
| filler     | Object | -> | Objeto a partir del cual se llena la entidad |
<!-- END REF -->

#### Descripción

La función `.fromObject()` <!-- REF #EntityClass.fromObject().Summary -->llena una entidad con el contenido *filler*.
> This function modifies the original entity.

El mapeo entre el objeto y la entidad se realiza sobre los nombres de los atributos:

*   If a property of the object does not exist in the dataclass, it is ignored.
*   Data types must be equivalent. If there is a type mismatch between the object and dataclass, 4D tries to convert the data whenever possible (see [`Converting data types`](Concepts/data-types.md#converting-data-types)), otherwise the attribute is left untouched.
*   The primary key can be given as is or with a "__KEY" property (filled with the primary key value). If it does not already exist in the dataclass, the entity is created with the given value when [.save()](#save) is called. If the primary key is not given, the entity is created and the primary key value is assigned with respect to database rules. The auto-increment is only computed if the primary key is null.

*filler* puede manejar una entidad relacionada bajo las siguientes condiciones:

*   *filler* contains the foreign key itself, or
*   *filler* contains a property object with the same name as the related entity, containing a single property named "\_\_KEY".
*   if the related entity does not exist, it is ignored.

#### Ejemplo

Con el siguiente objeto $o:

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// relatedEntity given with PK
    "employerID": 20 // relatedEntity given with PK
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
```<!-- END REF --><!-- REF EntityClass.getDataClass().Desc -->## .getDataClass()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details><!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF --><!-- REF #EntityClass.getDataClass().Params -->| Parámetros | Tipo         |    | Descripción                                  |
| ---------- | ------------ |:--:| -------------------------------------------- |
| Resultado  | 4D.DataClass | <- | Objeto DataClass al que pertenece la entidad |<!-- END REF -->#### Descripción

La función `.getDataClass()`<!-- REF #EntityClass.getDataClass().Summary -->devuelve la clase de datos de la entidad<!-- END REF -->. Esta función es útil al escribir código genérico.


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
```<!-- END REF --><!-- REF EntityClass.getKey().Desc -->## .getKey()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF --><!-- REF #EntityClass.getKey().Params -->| Parámetros | Tipo    |    | Descripción                                                                                               |
| ---------- | ------- |:--:| --------------------------------------------------------------------------------------------------------- |
| mode       | Integer | -> | `dk key as string`: la llave primaria se devuelve como una cadena, sin importar el tipo de llave primaria |
| Resultado  | Text    | <- | Valor de la llave primaria de texto de la entidad                                                         |
| Resultado  | Integer | <- | Valor de la llave primaria numérica de la entidad                                                         |<!-- END REF -->#### Descripción

La función `.getKey()`<!-- REF #EntityClass.getKey().Summary -->devuelve el valor de la llave primaria<!-- END REF -->.

Las llaves primarias pueden ser números (enteros) o cadenas. Puede "forzar" que el valor de la llave primaria devuelto sea una cadena, sin importar el tipo de llave primaria real, pasando la opción `dk key as string` en el parámetro *mode*.

#### Ejemplo


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("The primary key is "+$employee.getKey(dk key as string))
```<!-- END REF --><!-- REF EntityClass.getSelection().Desc -->## .getSelection()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF --><!-- REF #EntityClass.getSelection().Params -->| Parámetros | Tipo               |    | Descripción                                                              |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------ |
| Resultado  | 4D.EntitySelection | <- | Entity selection a la que pertenece la entidad (nula si no se encuentra) |<!-- END REF -->#### Descripción

La función `.getSelection()`<!-- REF #EntityClass.getSelection().Summary -->devuelve la selección de entidades a la que pertenece la entidad<!-- END REF -->.

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
```<!-- END REF --><!-- REF EntityClass.getStamp().Desc -->## .getStamp()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF --><!-- REF #EntityClass.getStamp().Params -->| Parámetros | Tipo    |    | Descripción                                               |
| ---------- | ------- |:--:| --------------------------------------------------------- |
| Resultado  | Integer | <- | Sello de la entidad (0 si la entidad acaba de ser creada) |<!-- END REF -->#### Descripción

La función `.getStamp()`<!-- REF #EntityClass.getStamp().Summary -->devuelve el valor actual del sello de la entidad<!-- END REF -->.

El sello interno se incrementa automáticamente en 4D cada vez que se guarda la entidad. Gestiona los accesos y modificaciones concurrentes de los usuarios a las mismas entidades (ver [**Bloqueo de entidades**](ORDA/entities.md#entity-locking)).
> For a new entity (never saved), the function returns 0. To know if an entity has just been created, it is recommended to use [.isNew()](#isnew).


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
```<!-- END REF --><!-- REF EntityClass.indexOf().Desc -->## .indexOf()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF --><!-- REF #EntityClass.indexOf().Params -->| Parámetros      | Tipo               |    | Descripción                                                               |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------- |
| entitySelection | 4D.EntitySelection | -> | La posición de la entidad se da en función de esta selección de entidades |
| Resultado       | Integer            | <- | Posición de la entidad en una selección de entidades                      |<!-- END REF -->#### Descripción

La función `.indexOf()`<!-- REF #EntityClass.indexOf().Summary -->devuelve la posición de la entidad en una selección de entidades<!-- END REF -->.

Por defecto, si se omite el parámetro *entitySelection*, la función devuelve la posición de la entidad dentro de su propia selección de entidades. En caso contrario, devuelve la posición de la entidad dentro de la *entitySelection* especificada.

El valor resultante se incluye entre 0 y la longitud de la selección de entidades -1.

*   If the entity does not have an entity selection or does not belong to *entitySelection*, the function returns -1.
*   If *entitySelection* is Null or does not belong to the same dataclass as the entity, an error is raised.

#### Ejemplo


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1] //This entity belongs to an entity selection
 ALERT("The index of the entity in its own entity selection is "+String($employee.indexOf())) //1

 $employee:=ds.Employee.get(725) //This entity does not belong to an entity selection
 ALERT("The index of the entity is "+String($employee.indexOf())) // -1
```<!-- END REF --><!-- REF EntityClass.isNew().Desc -->## .isNew()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF --><!-- REF #EntityClass.isNew().Params -->| Parámetros | Tipo    |    | Descripción                                                                               |
| ---------- | ------- |:--:| ----------------------------------------------------------------------------------------- |
| Resultado  | Boolean | <- | True si la entidad acaba de ser creada y aún no se ha guardado. En caso contrario, False. |<!-- END REF -->#### Descripción

La función `.isNew()`<!-- REF #EntityClass.isNew().Summary -->devuelve True si la entidad a la que se aplica acaba de ser creada y aún no ha sido guardada en el datastore<!-- END REF -->. En caso contrario, devuelve False.


#### Ejemplo


```4d
 var $emp : cs.EmployeeEntity

 $emp:=ds.Employee.new()

 If($emp.isNew())
    ALERT("This is a new entity")
 End if
```<!-- END REF --><!-- REF EntityClass.last().Desc -->## .last()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF --><!-- REF #EntityClass.last().Params -->| Parámetros | Tipo      |    | Descripción                                                                            |
| ---------- | --------- |:--:| -------------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Referencia a la última entidad de una selección de entidades (Null si no se encuentra) |<!-- END REF -->#### Descripción

La función `.last()`<!-- REF #EntityClass.first().Summary -->devuelve una referencia a la entidad en la última posición de la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection( )](#getselection) devuelve Null), la función devuelve un valor Null.


#### Ejemplo


```4d
 var $employees : cs.EmployeeSelection
 var $employee; $lastEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $lastEmployee:=$employee.last() //$lastEmployee is the last entity of the $employees entity selection
```<!-- END REF --><!-- REF EntityClass.lock().Desc -->## .lock()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF --><!-- REF #EntityClass.lock().Params -->| Parámetros | Tipo    |    | Descripción                                                                      |
| ---------- | ------- |:--:| -------------------------------------------------------------------------------- |
| mode       | Integer | -> | `dk reload if stamp changed`: recargar antes de bloquear si el sello ha cambiado |
| Resultado  | Object  | <- | Resultado de la operación de bloqueo                                             |<!-- END REF -->#### Descripción

La función `.lock()`<!-- REF #EntityClass.lock().Summary -->pone un bloqueo pesimista en el registro referenciado por la entidad<!-- END REF -->. El [bloqueo se establece](ORDA/entities.md#entity-locking) para un registro y todas las referencias de la entidad en el proceso actual.

Otros procesos verán este registro como bloqueado (la propiedad `result.success` contendrá False si intentan bloquear la misma entidad usando esta función). Sólo las funciones ejecutadas en la sesión de "bloqueo" pueden editar y guardar los atributos de la entidad. La entidad puede ser cargada como de sólo lectura por otras sesiones, pero no podrán introducir y guardar valores.

Un registro bloqueado se desbloquea:

*   when the [`unlock()`](#unlock) function is called on a matching entity in the same process
*   automatically, when it is no longer referenced by any entities in memory. For example, if the lock is put only on one local reference of an entity, the entity is unlocked when the function ends. As long as there are references to the entity in memory, the record remains locked.

Por defecto, si se omite el parámetro *mode*, la función devolverá un error (ver más abajo) si la misma entidad fue modificada (es decir, el sello ha cambiado) por otro proceso o usuario en el ínterin.

De lo contrario, puede pasar la opción `dk reload if stamp changed` en el parámetro *mode*: en este caso, no se devuelve error y la entidad se recarga cuando el sello cambia (si la entidad aún existe y la llave primaria sigue siendo la misma).

**Resultado**

El objeto devuelto por `.lock( )` contiene las siguientes propiedades:

| Propiedad        |                     | Tipo                  | Descripción                                                                                                                 |
| ---------------- | ------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| success          |                     | boolean               | true si la acción de bloqueo tiene éxito (o si la entidad ya está bloqueada en el proceso actual), false en caso contrario. |
|                  |                     |                       | ***Disponible sólo si se utiliza la opción `dk reload if stamp changed`:***                                                 |
| **wasReloaded**  |                     | boolean               | true si la entidad fue recargada con éxito, false en caso contrario.                                                        |
|                  |                     |                       | ***Disponible sólo en caso de error:***                                                                                     |
| status(\*)     |                     | number                | Código de error, ver abajo                                                                                                  |
| statusText(\*) |                     | text                  | Descripción del error, ver abajo                                                                                            |
|                  |                     |                       | ***Disponible sólo en caso de error de bloqueo pesimista:***                                                                |
| lockKindText     |                     | text                  | "Locked by record"                                                                                                          |
| lockInfo         |                     | object                | Información sobre el origen del bloqueo                                                                                     |
|                  | task_id             | number                | ID del Proceso                                                                                                              |
|                  | user_name           | text                  | Nombre de usuario de la sesión en la máquina                                                                                |
|                  | user4d_alias        | text                  | Nombre o alias del usuario 4D                                                                                               |
|                  | user4d_id           | number                | ID del usuario en el directorio de la base de datos 4D                                                                      |
|                  | host_name           | text                  | Nombre de la máquina                                                                                                        |
|                  | task_name           | text                  | Nombre del proceso                                                                                                          |
|                  | client_version      | text                  |                                                                                                                             |
|                  |                     |                       | ***Disponible sólo en caso de error grave*** (la llave primaria ya existe, el disco está lleno...):                         |
| errors           |                     | collection of objects |                                                                                                                             |
|                  | message             | text                  | Mensaje de error                                                                                                            |
|                  | component signature | text                  | firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                       |
|                  | errCode             | number                | Error code                                                                                                                  |


(\*) Los siguientes valores pueden ser devueltos en las propiedades *status* y *statusText* del objeto *Result* en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                    |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). Cuando se utiliza `.drop( )`, este error puede devolverse cuando se utiliza la opción dk force drop if stamp changed. Cuando se utiliza `.lock( )`, este error puede ser devuelto cuando se utiliza la opción `dk reload if stamp changed`</li><br>**statusText asociado**: "La entidad ya no existe"                                                       |
| `dk status locked`                        | 3     | La entidad está bloqueada por un bloqueo pesimista.<p><p>**statusText asociado**: "Ya bloqueado"                                                                                                              |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.<p><p>**statusText asociado**: "Otro error"                                           |
| `dk status stamp has changed`             | 2     | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).<li>con `.save( )`: error sólo si no se utiliza la opción `dk auto merge`</li><li>con `.drop( )`: error sólo si no se utiliza la opción `dk force drop if stamp changed`</li><li>con `.lock( )`: error sólo si no se utiliza la opción `dk reload if stamp changed`</li><br>**statusText asociado**: "El sello ha cambiado" |


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
```<!-- END REF --><!-- REF EntityClass.next().Desc -->## .next()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF --><!-- REF #EntityClass.next().Params -->| Parámetros | Tipo      |    | Descripción                                                                              |
| ---------- | --------- |:--:| ---------------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Referencia a la siguiente entidad en la selección de entidades (Null si no se encuentra) |<!-- END REF -->#### Descripción

La función `.next()`<!-- REF #EntityClass.next().Summary -->devuelve una referencia a la siguiente entidad en la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection()](#getselection) devuelve Null), la función devuelve un valor Null.

Si no hay una entidad siguiente válida en la selección de entidades (es decir, se encuentra en la última entidad de la selección), la función devuelve Null. Si la siguiente entidad ha sido descartada, la función devuelve la siguiente entidad válida (y eventualmente Null).


#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee is the second entity of the $employees entity selection

```<!-- END REF --><!-- REF EntityClass.previous().Desc -->## .previous()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF --><!-- REF #EntityClass.previous().Params -->| Parámetros | Tipo      |    | Descripción                                                                             |
| ---------- | --------- |:--:| --------------------------------------------------------------------------------------- |
| Resultado  | 4D.Entity | <- | Referencia a la entidad anterior en la selección de entidades (Null si no se encuentra) |<!-- END REF -->#### Descripción

La función `.previous()`<!-- REF #EntityClass.previous().Summary -->devuelve una referencia a la entidad anterior en la selección de entidades a la que pertenece la entidad<!-- END REF -->.

Si la entidad no pertenece a ninguna selección de entidades existente (es decir, [.getSelection()](#getselection) devuelve Null), la función devuelve un valor Null.

Si no hay una entidad anterior válida en la selección de entidades (es decir, se encuentra en la primera entidad de la selección), la función devuelve Null. Si la entidad anterior ha sido soltada, la función devuelve la entidad válida anterior (y eventualmente Null).


#### Ejemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $previousEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() //$previousEmployee is the first entity of the $employees entity selection
```<!-- END REF --><!-- REF EntityClass.reload().Desc -->## .reload( )

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF --><!-- REF #EntityClass.reload().Params -->| Parámetros | Tipo   |    | Descripción      |
| ---------- | ------ |:--:| ---------------- |
| Resultado  | Object | <- | Objeto de estado |<!-- END REF -->#### Descripción

La función `.reload()`<!-- REF #EntityClass.reload().Summary -->recarga el contenido de la entidad en memoria<!-- END REF -->, según la información almacenada en la tabla relacionada con la dataclass en el datastore. La recarga se realiza sólo si la entidad sigue existiendo con la misma llave primaria.

**Resultado**

El objeto devuelto por `.reload( )` contiene las siguientes propiedades:

| Propiedad        | Tipo    | Descripción                                                                                                                                                      |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success          | boolean | True si la acción de recargar tiene éxito, False en caso contrario.<p><p>***Disponible sólo en caso de error***: |
| status(\*)     | number  | Código de error, ver abajo                                                                                                                                       |
| statusText(\*) | text    | Descripción del error, ver abajo                                                                                                                                 |

(\*) Los siguientes valores pueden ser devueltos en las propiedadese *status* y *statusText* del objeto *Result* en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                          |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<br><li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). Cuando se utiliza `.drop( )`, este error puede devolverse cuando se utiliza la opción `dk force drop if stamp changed`. Cuando se utiliza `.lock( )`, este error puede ser devuelto cuando se utiliza la opción `dk reload if stamp changed`</li><br>***statusText asociado***: "La entidad ya no existe" |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.<br>***statusText asociado***: "Otro error"                                           |


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
```<!-- END REF --><!-- REF EntityClass.save().Desc -->## .save()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF --><!-- REF #EntityClass.save().Params -->| Parámetros | Tipo    |    | Descripción                                          |
| ---------- | ------- |:--:| ---------------------------------------------------- |
| mode       | Integer | -> | `dk auto merge`: activa el modo de fusión automática |
| Resultado  | Object  | <- | Resultado de la operación guardar                    |<!-- END REF -->#### Descripción

La función `.save()`<!-- REF #EntityClass.save().Summary -->guarda los cambios realizados en la entidad<!-- END REF -->en la tabla relacionada con su dataClass. Debe llamar a este método después de crear o modificar una entidad si quiere guardar los cambios realizados en ella.

La operación de guardar se ejecuta sólo si se ha "tocado" al menos un atributo de la entidad (ver las funciones [`.touched()`](#touched) y [`.touchedAttributes()`](#touchedattributes)). En caso contrario, la función no hace nada (no se llama al activador).

En una aplicación multiusuario o multiproceso, la función `.save()` se ejecuta bajo un mecanismo de ["bloqueo optimista"](ORDA/entities.md#entity-locking), en el que un sello de bloqueo interno se incrementa automáticamente cada vez que se guarda el registro.

Por defecto, si se omite el parámetro *mode*, el método devolverá un error (ver más abajo) siempre que la misma entidad haya sido modificada por otro proceso o usuario mientras tanto, sin importar el atributo o atributos modificados.

En caso contrario, se puede pasar la opción `dk auto merge` en el parámetro *mode*: cuando el modo de fusión automática está activado, una modificación realizada simultáneamente por otro proceso/usuario en la misma entidad pero en un atributo diferente no dará lugar a un error. Los datos resultantes guardados en la entidad serán la combinación (la "fusión") de todas las modificaciones no concurrentes (si se aplicaron modificaciones al mismo atributo, el guardado falla y se devuelve un error, incluso con el modo de fusión automática).
> The automatic merge mode is not available for attributes of Picture, Object, and Text type when stored outside of the record. Concurrent changes in these attributes will result in a `dk status stamp has changed` error.

**Resultado**

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
|              | task_name          | texto                 | Nombre del proceso                                                                                                           |
|              | client_version     | text                  |                                                                                                                              |
|              |                    |                       | ***Disponible sólo en caso de error grave*** (error grave - puede ser intentar duplicar una llave primaria, disco lleno...): |
| errors       |                    | collection of objects |                                                                                                                              |
|              | message            | text                  | Mensaje de error                                                                                                             |
|              | componentSignature | text                  | Firma del componente interno (por ejemplo, "dmbg" significa el componente de la base)                                        |
|              | errCode            | number                | Error code                                                                                                                   |

##### status and statusText

Los siguientes valores pueden ser devueltos en las propiedades `status` y `statusText` del objeto Result en caso de error:

| Constante                                 | Valor | Comentario                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6     | (Sólo si se utiliza la opción `dk auto merge`) La opción de fusión automática falló al guardar la entidad.<p><p>**statusText asociado**: "Fallo de la fusión automática"                                                |
| `dk status entity does not exist anymore` | 5     | La entidad ya no existe en los datos. Este error puede ocurrir en los siguientes casos:<br><li>la entidad ha sido abandonada (el sello ha cambiado y el espacio de memoria está ahora libre)</li><li>la entidad ha sido eliminada y sustituida por otra con otra llave primaria (el sello ha cambiado y una nueva entidad utiliza ahora el espacio de memoria). Cuando se utiliza `.drop( )`, este error puede devolverse cuando se utiliza la opción `dk force drop if stamp changed`. Cuando se utiliza `.lock( )`, este error puede ser devuelto cuando se utiliza la opción `dk reload if stamp changed`</li><br>**statusText asociado**: "La entidad ya no existe"                                                       |
| `dk status locked`                        | 3     | La entidad está bloqueada por un bloqueo pesimista.<p><p>**statusText asociado**: "Ya bloqueado"                                                                                                                        |
| `dk status serious error`                 | 4     | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.<p><p>**statusText asociado**: "Otro error"                                                     |
| `dk status stamp has changed`             | 2     | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).<br><li>con `.save( )`: error sólo si no se utiliza la opción `dk auto merge`</li><li>con `.drop( )`: error sólo si no se utiliza la opción `dk force drop if stamp changed`</li><li>con `.lock( )`: error sólo si no se utiliza la opción `dk reload if stamp changed`</li><br>**statusText asociado**: "El sello ha cambiado" |


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
```<!-- END REF --> <!-- REF EntityClass.toObject().Desc -->## .toObject()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF --><!-- REF #EntityClass.toObject().Params -->| Parámetros   | Tipo       |    | Descripción                                                                                               |
| ------------ | ---------- |:--:| --------------------------------------------------------------------------------------------------------- |
| filterString | Text       | -> | Atributo(s) a extraer (cadena separada por comas)                                                         |
| filterCol    | Collection | -> | Colección de atributos a extraer                                                                          |
| options      | Integer    | -> | `dk with primary key`: añade la propiedad \_KEY;<br>`dk with stamp`: añade la propiedad \_STAMP |
| Resultado    | Object     | <- | Objeto creado a partir de la entidad                                                                      |<!-- END REF -->#### Descripción

La función `.toObject()`<!-- REF #EntityClass.toObject().Summary -->devuelve un objeto que ha sido construido a partir de la entidad<!-- END REF -->. Los nombres de las propiedades en el objeto coinciden con los nombres de los atributos de la entidad.

Si no se especifica ningún filtro, o si el parámetro *filterString* contiene una cadena vacía o "*", el objeto devuelto contendrá:

*   all storage entity attributes
*   attributes of the `relatedEntity` [kind](DataClassAttributeClass.md#kind): you get a property with the same name as the related entity (name of the many-to-one link). Attribute is extracted with the simple form.
*   attributes of the `relatedEntities` [kind](DataClassAttributeClass.md#kind): attribute is not returned.


En el primer parámetro, se pasa el atributo o atributos de la entidad a extraer. Puede pasar:

*   *filterString*: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
*   *filterCol*: a collection of strings: \["propertyPath1","propertyPath2";...]

Si se especifica un filtro para los atributos de la relatedEntity [kind](DataClassAttributeClass.md#kind):

*   propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
*   propertyPath = "relatedEntity.*" -> all the properties are extracted
*   propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> only those properties are extracted

Si se especifica un filtro para los atributos de las relatedEntities [kind](DataClassAttributeClass.md#kind):

*   propertyPath = "relatedEntities.*" -> all the properties are extracted
*   propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> only those properties are extracted

En el parámetro *options* se puede pasar el selector `ddk with primary key` y/o`dk with stamp` para añadir las llaves primarias de la entidad y/o los sellos en los objetos extraídos.


#### Ejemplo 1

En todos los ejemplos de esta sección se utilizará la siguiente estructura:

![](assets/en/API/dataclassAttribute4.png)


Sin parámetro de filtro:

```4d
employeeObject:=employeeSelected.toObject()
```

Devuelve:

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

Devuelve:

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

Devuelve:

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

Devuelve:

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

Devuelve:

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

Devuelve:

```4d
{
    "employer": {
        "name": "India Astral Secretary",
        "revenues": 12000000
    }
}
```<!-- END REF --><!-- REF EntityClass.touched().Desc -->## .touched( )

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF --><!-- REF #EntityClass.touched().Params -->| Parámetros | Tipo    |    | Descripción                                                                                       |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------------------- |
| Resultado  | Boolean | <- | True si se ha modificado al menos un atributo de la entidad y aún no se ha guardado, si no, False |<!-- END REF -->#### Descripción

La función `.touched()`<!-- REF #EntityClass.touched().Summary -->comprueba si un atributo de la entidad ha sido modificado o no desde que la entidad fue cargada en memoria o guardada<!-- END REF -->.

Si un atributo ha sido modificado o calculado, la función devuelve True, en caso contrario devuelve False. Puede utilizar esta función para determinar si necesita guardar la entidad.

Esta función devuelve False para una nueva entidad que acaba de ser creada (con [`.new( )`](DataClassClass.md#new)). Tenga en cuenta, sin embargo, que si utiliza una función que calcula un atributo de la entidad, la función `.touched()` devolverá entonces True. Por ejemplo, si se llama a [`.getKey()`](#getkey) para calcular la llave primaria, `.touched()` devuelve True.

#### Ejemplo

En este ejemplo, comprobamos si es necesario guardar la entidad:

```4d
 var $emp : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched

 If($emp.touched()) //if at least one of the attributes has been changed
    $emp.save()
 End if // otherwise, no need to save the entity
```<!-- END REF --><!-- REF EntityClass.touchedAttributes().Desc -->## .touchedAttributes( )

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF --><!-- REF #EntityClass.touchedAttributes().Params -->| Parámetros | Tipo       |    | Descripción                                     |
| ---------- | ---------- |:--:| ----------------------------------------------- |
| Resultado  | Collection | <- | Nombres de atributos tocados, o colección vacía |<!-- END REF -->#### Descripción

La función `.touchedAttributes()`<!-- REF #EntityClass.touchedAttributes().Summary -->devuelve los nombres de los atributos que han sido modificados desde que la entidad fue cargada en memoria<!-- END REF -->.

Esto se aplica a los atributos [kind](DataClassAttributeClass.md#kind) `storage` o `relatedEntity`.

En el caso de que se haya tocado una entidad relacionada (es decir, la llave externa), se devuelve el nombre de la entidad relacionada y el nombre de su llave primaria.

Si no se ha tocado ningún atributo de entidad, el método devuelve una colección vacía.

#### Ejemplo 1


```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched
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

*   firstName and lastName have a `storage` kind
*   employer has a `relatedEntity` kind
*   employerID is the foreign key of the employer related entity<!-- END REF --><!-- REF EntityClass.unlock().Desc -->## .unlock()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17     | Añadidos       |

</details><!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF --><!-- REF #EntityClass.unlock().Params -->| Parámetros | Tipo   |    | Descripción      |
| ---------- | ------ |:--:| ---------------- |
| Resultado  | Object | <- | Objeto de estado |<!-- END REF -->#### Descripción

La función `.unlock()`<!-- REF #EntityClass.unlock().Summary -->elimina el bloqueo pesimista del registro que coincide con la entidad<!-- END REF -->en el datastore y la tabla relacionada con su dataclass.

> For more information, please refer to [Entity locking](ORDA/entities.md#entity-locking) section.

Un registro se desbloquea automáticamente cuando ya no es referenciado por ninguna entidad en el proceso de bloqueo (por ejemplo: si el bloqueo se pone sólo en una referencia local de una entidad, la entidad y, por tanto, el registro se desbloquea cuando el proceso termina).
> When a record is locked, it must be unlocked from the locking process and on the entity reference which put the lock. Por ejemplo:

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Resultado**

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
```<!-- END REF -->



<style> h2 { background: #d9ebff;}</style>
