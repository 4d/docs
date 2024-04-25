---
id: EntityClass
title: Entity
---

An [entity](ORDA/dsMapping.md#entity) is an instance of a [Dataclass](ORDA/dsMapping.md#dataclass), like a record of the table matching the dataclass in its associated datastore. Elle contient les mêmes attributs que la dataclass ainsi que les valeurs des données et des propriétés et fonctions spécifiques.

### Sommaire

|                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE EntityClass.attributeName.Summary -->                                              |
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.clone().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.diff().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.drop().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.first().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.fromObject().Summary -->                                                 |
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.getDataClass().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.getKey().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.getSelection().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.getStamp().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.indexOf().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.isNew().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.last().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.lock().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.next().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.previous().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.reload().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.save().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.toObject().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.touched().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.touchedAttributes().Summary -->                            |
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.unlock().Summary -->                                                             |

<!-- REF EntityClass.attributeName.Desc -->

## ._attributeName_

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : any<!-- END REF -->

#### Description

Tout attribut de dataclass est disponible en tant que propriété des entités de la dataclass, et qui <!-- REF EntityClass.attributeName.Summary -->stocke la valeur de l'attribut pour l'entité<!-- END REF -->.

> Les attributs de dataclass peuvent également être obtenus en utilisant la syntaxe alternative avec \[ ].

The attribute value type depends on the attribute [kind](DataClassClass.md#attributename) (relation or storage):

- If _attributeName_ kind is **storage**:
  `.attributeName` returns a value of the same type as _attributeName_.
- If _attributeName_ kind is **relatedEntity**:
  `.attributeName` returns the related entity. Les valeurs de l'entité liée sont directement disponibles par le biais des propriétés en cascade, par exemple "myEntity.employer.employees\[0].lastname".
- If _attributeName_ kind is **relatedEntities**:
  `.attributeName` returns a new entity selection of related entities. Les doublons sont supprimés (une entity selection non ordonnée est retournée).

#### Exemple

```4d
 var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Créer une nouvelle entity
$myEntity.name:="Dupont" //assigner 'Dupont' à l'attribut 'name'
$myEntity.firstname:="John" //assigner 'John' à l'attribut 'firstname' 
$myEntity.save() //sauvegarder l'entity
```

<!-- END REF -->

<!-- REF EntityClass.clone().Desc -->

## .clone()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->

| Paramètres | Type                      |     | Description                                  |
| ---------- | ------------------------- | :-: | -------------------------------------------- |
| Résultat   | 4D.Entity |  <- | Nouvelle entité référençant l'enregistrement |

<!-- END REF -->

#### Description

The `.clone()` function <!-- REF #EntityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->. Cette fonction vous permet de mettre à jour des entités séparément.

> Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save( )`](#save) function is executed.

Cette fonction ne peut être utilisée qu'avec des entités déjà enregistrées dans la base de données. It cannot be called on a newly created entity (for which [`.isNew()`](#isnew) returns **True**).

#### Exemple

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Updates done on $emp are not done on $empCloned

```

<!-- END REF -->

<!-- REF EntityClass.diff().Desc -->

## .diff()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->

<!-- REF #EntityClass.diff().Params -->

| Paramètres          | Type                      |     | Description                            |
| ------------------- | ------------------------- | :-: | -------------------------------------- |
| entityToCompare     | 4D.Entity |  -> | Entité à comparer à l'entité d'origine |
| attributesToCompare | Collection                |  -> | Noms des attributs à comparer          |
| Résultat            | Collection                |  <- | Différences entre les entités          |

<!-- END REF -->

#### Description

The `.diff()` function <!-- REF #EntityClass.diff().Summary -->compares the contents of two entities and returns their differences<!-- END REF -->.

In _entityToCompare_, pass the entity to be compared to the original entity.

In _attributesToCompare_, you can designate specific attributes to compare. Si le paramètre est passé, la comparaison est effectuée uniquement sur les attributs spécifiés. S'il est omis, toutes les différences entre les entités sont retournées.

Les différences sont retournées sous forme de collection d'objets dont les propriétés sont :

| Nom de propriété | Type                      | Description                                  |
| ---------------- | ------------------------- | -------------------------------------------- |
| attributeName    | String                    | Nom de l'attribut                            |
| value            | Dépend du type d'attribut | Valeur de l'attribut dans l'entité d'origine |
| otherValue       | Dépend du type d'attribut | Value of the attribute in _entityToCompare_  |

Seuls les attributs dont les valeurs diffèrent sont inclus dans la collection. If no differences are found, `.diff()` returns an empty collection.

The function applies for properties whose [kind](DataClassClass.md#attributename) is **storage** or **relatedEntity**. In case a related entity has been updated (meaning the foreign key), the name of the related entity and its primary key name are returned as _attributeName_ properties (_value_ and _otherValue_ are empty for the related entity name).

If one of the compared entities is **Null**, an error is raised.

#### Exemple 1

```4d
 var $diff1; $diff2 : Collection
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // Toutes les différences sont retournées
 $diff2:=$clone.diff(employee;New collection("firstName";"lastName"))
  // Seules les différences sur firstName et lastName sont retournées
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

#### Exemple 2

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

vCompareResult1 (toutes les différences sont retournées) :

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
        "value": "[object Entity]",// Entity 117 de Company
        "otherValue": "[object Entity]"// Entity 118 de Company
    }
]
```

vCompareResult2 (seules les différences sur $attributesToInspect sont retournées)

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

vCompareResult3 (seules les différences sur les attributs touchés de $e1 sont retournées)

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
        "value": "[object Entity]",// Entity 117 de Company
        "otherValue": "[object Entity]"// Entity 118 de Company

    }
]
```

<!-- END REF -->

<!-- REF EntityClass.drop().Desc -->

## .drop()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->

| Paramètres | Type    |     | Description                                                                                     |
| ---------- | ------- | :-: | ----------------------------------------------------------------------------------------------- |
| mode       | Integer |  -> | `dk force drop if stamp changed`: Forces the drop even if the stamp has changed |
| Résultat   | Object  |  <- | Résultat de l'opération de suppression                                                          |

<!-- END REF -->

#### Description

The `.drop()` function <!-- REF #EntityClass.drop().Summary -->deletes the data contained in the entity from the datastore<!-- END REF -->, from the table related to its Dataclass. A noter que l'entité reste en mémoire.

In a multi-user or multi-process application, the `.drop()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the _mode_ parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk force drop if stamp changed` option in the _mode_ parameter: in this case, the entity is dropped even if the stamp has changed (and the primary key is still the same).

**Result**

The object returned by `.drop( )` contains the following properties:

| Propriété                         |                                     | Type                  | Description                                                                                                                                                                                              |
| --------------------------------- | ----------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean               | vrai si l'action de suppression a été effectuée avec succès, sinon Faux.                                                                                                                 |
|                                   |                                     |                       | _**Available only in case of error:**_                                                                                                                                                   |
| status(\*)     |                                     | number                | Code d'erreur, voir ci-dessous                                                                                                                                                                           |
| statusText(\*) |                                     | text                  | Description de l'erreur, voir ci-dessous                                                                                                                                                                 |
|                                   |                                     |                       | _**Available only in case of pessimistic lock error:**_                                                                                                                                  |
| LockKindText                      |                                     | text                  | "Locked by record"                                                                                                                                                                                       |
| lockInfo                          |                                     | object                | Information sur l'origine du verrouillage                                                                                                                                                                |
|                                   | task_id        | number                | Id du process                                                                                                                                                                                            |
|                                   | user_name      | text                  | Nom d'utilisateur de la session sur la machine                                                                                                                                                           |
|                                   | user4d_alias   | text                  | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                                                                                       |
|                                   | host_name      | text                  | Nom de la machine                                                                                                                                                                                        |
|                                   | task_name      | text                  | Nom du process                                                                                                                                                                                           |
|                                   | client_version | text                  |                                                                                                                                                                                                          |
|                                   |                                     |                       | _**Available only in case of serious error (serious error can be trying to duplicate a primary key, disk full...):**_ |
| errors                            |                                     | collection of objects |                                                                                                                                                                                                          |
|                                   | message                             | text                  | Message d'erreur                                                                                                                                                                                         |
|                                   | component signature                 | text                  | signature du composant interne (e.g. "dmbg" pour le composant de base de données)                                                                     |
|                                   | errCode                             | number                | Code d'erreur                                                                                                                                                                                            |

(\*) The following values can be returned in the _status_ and _statusText_ properties of _Result_ object in case of error:

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Avec drop( ), cette erreur peut être retournée lorsque l'option dk force drop if stamp changed est utilisée. When using entity.lock( ), this error can be returned when dk reload if stamp changed option is used</li> **Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3      | The entity is locked by a pessimistic lock.<br/> **Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `dk status serious error`                 | 4      | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `dk status stamp has changed`             | 2      | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><li>**Associated statusText**: "Stamp has changed"</li>                                                                                                                                                                                                                                                      |
| `dk status wrong permission`              | 1      | Les privilèges courants ne permettent pas de supprimer l'entité. **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Exemple 1

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

#### Exemple 2

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->

| Paramètres | Type                      |     | Description                                                                                   |
| ---------- | ------------------------- | :-: | --------------------------------------------------------------------------------------------- |
| Résultat   | 4D.Entity |  <- | Référence à la première entité de l'entity selection (Null si non trouvée) |

<!-- END REF -->

#### Description

The `.first()` function <!-- REF #EntityClass.first().Summary -->returns a reference to the entity in first position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->

| Paramètres | Type   |     | Description                        |
| ---------- | ------ | :-: | ---------------------------------- |
| filler     | Object |  -> | Objet avec lequel remplir l'entité |

<!-- END REF -->

#### Description

The `.fromObject()` function <!-- REF #EntityClass.fromObject().Summary -->fills an entity with the _filler_ content<!-- END REF -->.

> Cette fonction modifie l'entity d'origine.

La correspondance entre l'objet et l'entité est établie à partir des noms de propriétés/d'attributs :

- Si une propriété de l'objet n'existe pas dans la dataclass, elle est ignorée.
- Les types de données doivent être équivalents. If there is a type mismatch between the object and dataclass, 4D tries to convert the data whenever possible (see [`Converting data types`](Concepts/data-types.md#converting-data-types)), otherwise the attribute is left untouched.
- La clé primaire peut être donnée telle quelle ou avec une propriété "__KEY" (remplie avec la valeur de la clé primaire). If it does not already exist in the dataclass, the entity is created with the given value when [.save()](#save) is called. Si la clé primaire n'est pas fournie, l'entité est créée et la valeur de la clé primaire est affectée en fonction des règles de la base de données. L'auto-incrémentation n'est calculée que si la clé primaire est nulle.

_filler_ can handle a related entity under the following conditions:

- _filler_ contains the foreign key itself, or
- _filler_ contains a property object with the same name as the related entity, containing a single property named "\_\_KEY".
- si l'entité relative n'existe pas, elle est ignorée.

#### Exemple

Avec l'objet $o suivant :

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// relatedEntity fournie avec clé primaire
    "employerID": 20 // relatedEntity fournie avec clé primaire
}
```

Le code suivant créera une entité avec les entités relatives manager et employer.

```4d
 var $o : Object
 var $entity : cs.EmpEntity
 $entity:=ds.Emp.new()
 $entity.fromObject($o)
 $entity.save()
```

Vous pouvez également utiliser une entité relative fournie sous forme d'objet :

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntityClass.getDataClass().Params -->

| Paramètres | Type                         |     | Description                              |
| ---------- | ---------------------------- | :-: | ---------------------------------------- |
| Résultat   | 4D.DataClass |  <- | Dataclass à laquelle appartient l'entité |

<!-- END REF -->

#### Description

The `.getDataClass()` function <!-- REF #EntityClass.getDataClass().Summary -->returns the dataclass of the entity<!-- END REF -->. Cette fonction est utile pour l'écriture du code générique.

#### Exemple

Le code générique suivant duplique toute entité :

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.getKey().Params -->

| Paramètres | Type    |     | Description                                                                                             |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------------------- |
| mode       | Integer |  -> | `dk key as string`: primary key is returned as a string, no matter the primary key type |
| Résultat   | Text    |  <- | Valeur de la clé primaire texte de l'entité                                                             |
| Résultat   | Integer |  <- | Valeur de la clé primaire numérique de l'entité                                                         |

<!-- END REF -->

#### Description

The `.getKey()` function <!-- REF #EntityClass.getKey().Summary -->returns the primary key value of the entity<!-- END REF -->.

Les clés primaires peuvent être des nombres (integer) ou des textes. You can "force" the returned primary key value to be a string, no matter the actual primary key type, by passing the `dk key as string` option in the _mode_ parameter.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19R5    | Ajout         |

</details>

<!-- REF #EntityClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntityClass.getRemoteContextAttributes().Params -->

| Paramètres | Type |    | Description                                                        |
| ---------- | ---- | -- | ------------------------------------------------------------------ |
| result     | Text | <- | Attirbuts de contexte associés à l'entity, séparés par une virgule |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.getRemoteContextAttributes()` function <!-- REF #EntityClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity <!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity, the function returns an empty Text.

#### Exemple

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

#### Voir également

[EntitySelection.getRemoteContextAttributes()](./EntitySelectionClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntityClass.getSelection().Desc -->

## .getSelection()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF -->

<!-- REF #EntityClass.getSelection().Params -->

| Paramètres | Type                               |     | Description                                                                              |
| ---------- | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------- |
| Résultat   | 4D.EntitySelection |  <- | Entity selection à laquelle appartient l'entité (Null si non trouvée) |

<!-- END REF -->

#### Description

The `.getSelection()` function <!-- REF #EntityClass.getSelection().Summary -->returns the entity selection which the entity belongs to<!-- END REF -->.

Si l'entité n'appartient pas à une entity selection, la fonction renvoie Null.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->

<!-- REF #EntityClass.getStamp().Params -->

| Paramètres | Type    |     | Description                                                                         |
| ---------- | ------- | :-: | ----------------------------------------------------------------------------------- |
| Résultat   | Integer |  <- | Valeur du "stamp" de l'entité (0 si l'entité vient d'être créée) |

<!-- END REF -->

#### Description

The `.getStamp()` function <!-- REF #EntityClass.getStamp().Summary --> returns the current value of the stamp of the entity<!-- END REF -->.

Le stamp (marqueur interne) d'une entité est automatiquement incrémenté par 4D à chaque fois qu'une entité est enregistrée sur disque. It manages concurrent user access and modifications to the same entities (see [**Entity locking**](ORDA/entities.md#entity-locking)).

> Pour une nouvelle entité (jamais enregistrée), la fonction retourne 0. To know if an entity has just been created, it is recommended to use [.isNew()](#isnew).

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.indexOf().Params -->

| Paramètres      | Type                               |     | Description                                                    |
| --------------- | ---------------------------------- | :-: | -------------------------------------------------------------- |
| entitySelection | 4D.EntitySelection |  -> | Entity selection dans laquelle obtenir la position de l'entité |
| Résultat        | Integer                            |  <- | Position de l'entité dans l'entity selection                   |

<!-- END REF -->

#### Description

The `.indexOf()` function <!-- REF #EntityClass.indexOf().Summary -->returns the position of the entity in an entity selection<!-- END REF -->.

By default if the _entitySelection_ parameter is omitted, the function returns the entity's position within its own entity selection. Otherwise, it returns the position of the entity within the specified _entitySelection_.

La valeur résultante est comprise entre 0 et la longueur de l'entity selection -1.

- If the entity does not have an entity selection or does not belong to _entitySelection_, the function returns -1.
- If _entitySelection_ is Null or does not belong to the same dataclass as the entity, an error is raised.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.isNew().Params -->

| Paramètres | Type    |     | Description                                                                                                               |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------------------------------------- |
| Résultat   | Boolean |  <- | Vrai si l'entité vient juste d'être créée et n'a pas encore été enregistrée. Sinon, Faux. |

<!-- END REF -->

#### Description

The `.isNew()` function <!-- REF #EntityClass.isNew().Summary --> returns True if the entity to which it is applied has just been created and has not yet been saved in the datastore<!-- END REF -->. Sinon, elle renvoie Faux.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.last().Params -->

| Paramètres | Type                      |     | Description                                                                                   |
| ---------- | ------------------------- | :-: | --------------------------------------------------------------------------------------------- |
| Résultat   | 4D.Entity |  <- | Référence à la dernière entité de l'entity selection (Null si non trouvée) |

<!-- END REF -->

#### Description

The `.last()` function <!-- REF #EntityClass.last().Summary -->returns a reference to the entity in last position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.lock().Params -->

| Paramètres | Type    |     | Description                                                                          |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------ |
| mode       | Integer |  -> | `dk reload if stamp changed`: Reload before locking if stamp changed |
| Résultat   | Object  |  <- | Résultat de l'opération lock                                                         |

<!-- END REF -->

#### Description

The `.lock()` function <!-- REF #EntityClass.lock().Summary -->puts a pessimistic lock on the record referenced by the entity<!-- END REF -->. The [lock is set](ORDA/entities.md#entity-locking) for a record and all the references of the entity in the current process.

Other processes will see this record as locked (the `result.success` property will contain False if they try to lock the same entity using this function). Seules les fonctions exécutées dans la session à l'origine du verrouillage auront la possibilité de modifier et de sauvegarder les attributs de l'entité. L'entité peut être chargée en lecture seulement dans les autres sessions, mais elles ne pourront ni saisir ni sauvegarder des valeurs.

A record locked by `.lock()` is unlocked:

- when the [`unlock()`](#unlock) function is called on a matching entity in the same process
- automatiquement, lorsqu'elle n'est plus référencée par aucune entité en mémoire. Par exemple, si le verrou n'est posé que sur une référence locale d'une entité, celle-ci est déverrouillée à la fin de la fonction. Tant qu'il existe des références à l'entité en mémoire, l'enregistrement reste verrouillé.

> An entity can also be [locked by a REST session](../REST/$lock.md), in which case it can only be unlocked by the session.

By default, if the _mode_ parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk reload if stamp changed` option in the _mode_ parameter: in this case, no error is returned and the entity is reloaded when the stamp has changed (if the entity still exists and the primary key is still the same).

**Result**

The object returned by `.lock( )` contains the following properties:

| Propriété                         |                                     | Type                  | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | ----------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean               | vrai si l'action de verrouillage a été effectuée avec succès (ou si l'entité est déjà verrouillée dans le process courant), sinon faux.                                                                                                                                                                                                                  |
|                                   |                                     |                       | _**Available only if `dk reload if stamp changed` option is used:**_                                                                                                                                                                                                                                                                                                        |
| **wasReloaded**                   |                                     | boolean               | vrai si l'entité a été correctement rechargée, sinon faux.                                                                                                                                                                                                                                                                                                                  |
|                                   |                                     |                       | _**Available only in case of error:**_                                                                                                                                                                                                                                                                                                                                      |
| status(\*)     |                                     | number                | Code d'erreur, voir ci-dessous                                                                                                                                                                                                                                                                                                                                                              |
| statusText(\*) |                                     | text                  | Description de l'erreur, voir ci-dessous                                                                                                                                                                                                                                                                                                                                                    |
|                                   |                                     |                       | _**Available only in case of pessimistic lock error:**_                                                                                                                                                                                                                                                                                                                     |
| lockKindText                      |                                     | text                  | "Locked by record" si verrouillage par un process 4D, "Locked by session" si verrouillage par une session REST                                                                                                                                                                                                                                                                              |
| lockInfo                          |                                     | object                | Information sur l'origine du verrouillage. Les propriétés retournées dépendent de l'origine du verrouillage (process 4D ou session REST).                                                                                                                                                                                                |
|                                   |                                     |                       | _**Available only for a 4D process lock:**_                                                                                                                                                                                                                                                                                                                                 |
|                                   | task_id        | number                | ID du process                                                                                                                                                                                                                                                                                                                                                                               |
|                                   | user_name      | text                  | Nom d'utilisateur de la session sur la machine                                                                                                                                                                                                                                                                                                                                              |
|                                   | user4d_alias   | text                  | Nom ou alias de l'utilisateur 4D                                                                                                                                                                                                                                                                                                                                                            |
|                                   | user4d_id      | number                | Identifiant utilisateur dans le répertoire de la base 4D                                                                                                                                                                                                                                                                                                                                    |
|                                   | host_name      | text                  | Nom de la machine                                                                                                                                                                                                                                                                                                                                                                           |
|                                   | task_name      | text                  | Nom du process                                                                                                                                                                                                                                                                                                                                                                              |
|                                   | client_version | text                  | Version du client                                                                                                                                                                                                                                                                                                                                                                           |
|                                   |                                     |                       | _**Available only for a REST session lock:**_                                                                                                                                                                                                                                                                                                                               |
|                                   | host                                | text                  | \|URL that locked the entity (e.g. "www.myserver.com")\|                                                                                                                                                                                                                                                 |
|                                   | IPAddr                              | text                  | Adresse IP d'origine du verrouillage (ex. 127.0.0.1")                                                                                                                                                                                                                                                    |
|                                   | userAgent                           | text                  | userAgent de l'origine du verouillage (ex : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |
|                                   |                                     |                       | _**Available only in case of serious error**_ (primary key already exists, disk full...):                                                                                                                                                                                                                |
| errors                            |                                     | collection of objects |                                                                                                                                                                                                                                                                                                                                                                                             |
|                                   | message                             | text                  | Message d'erreur                                                                                                                                                                                                                                                                                                                                                                            |
|                                   | component signature                 | text                  | signature du composant interne (e.g. "dmbg" pour le composant de base de données)                                                                                                                                                                                                                                                        |
|                                   | errCode                             | number                | Code d'erreur                                                                                                                                                                                                                                                                                                                                                                               |

(\*) The following values can be returned in the _status_ and _statusText_ properties of the _Result_ object in case of error:

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. This error can occur in the following cases:<li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Avec `.drop( )`, cette erreur peut être retournée lorsque l'option dk force drop if stamp changed est utilisée. When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3      | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `dk status serious error`                 | 4      | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `dk status stamp has changed`             | 2      | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                                         |

#### Exemple 1

Exemple avec erreur :

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

#### Exemple 2

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.next().Params -->

| Paramètres | Type                      |     | Description                                                                                    |
| ---------- | ------------------------- | :-: | ---------------------------------------------------------------------------------------------- |
| Résultat   | 4D.Entity |  <- | Référence à l'entité suivante dans l'entity selection (Null si non trouvée) |

<!-- END REF -->

#### Description

The `.next()` function <!-- REF #EntityClass.next().Summary -->returns a reference to the next entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

If the entity does not belong to any existing entity selection (i.e. <a href="#getselection">.getSelection( )</a> returns Null), the function returns a Null value.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.previous().Params -->

| Paramètres | Type                      |     | Description                                                                                      |
| ---------- | ------------------------- | :-: | ------------------------------------------------------------------------------------------------ |
| Résultat   | 4D.Entity |  <- | Référence à l'entité précédente dans l'entity selection (Null si non trouvée) |

<!-- END REF -->

#### Description

The `.previous()` function <!-- REF #EntityClass.previous().Summary --> returns a reference to the previous entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

If the entity does not belong to any existing entity selection (i.e. <a href="#getselection">.getSelection( )</a> returns Null), the function returns a Null value.

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->

<!-- REF #EntityClass.reload().Params -->

| Paramètres | Type   |     | Description  |
| ---------- | ------ | :-: | ------------ |
| Résultat   | Object |  <- | Objet statut |

<!-- END REF -->

#### Description

The `.reload()` function <!-- REF #EntityClass.reload().Summary -->reloads the content of the entity in memory<!-- END REF -->, according to information stored in the table related to the dataclass in the datastore. Le rechargement est effectué uniquement si l'entité existe toujours avec la même clé primaire.

**Result**

The object returned by `.reload( )` contains the following properties:

| Propriété                         | Type    | Description                                                                                                                     |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| success                           | boolean | True if the reload action is successful, False otherwise._**Available only in case of error**_: |
| status(\*)     | number  | Code d'erreur, voir ci-dessous                                                                                                  |
| statusText(\*) | text    | Description de l'erreur, voir ci-dessous                                                                                        |

(\*) The following values can be returned in the _status_ and _statusText_ properties of _Result_ object in case of error:

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Avec `.drop( )`, cette erreur peut être retournée lorsque l'option `dk force drop if stamp changed` est utilisée. When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>_**Associated statusText**_: "Entity does not exist anymore" |
| `dk status serious error`                 | 4      | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>_**Associated statusText**_: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.save().Params -->

| Paramètres | Type    |     | Description                                                       |
| ---------- | ------- | :-: | ----------------------------------------------------------------- |
| mode       | Integer |  -> | `dk auto merge`: Enables the automatic merge mode |
| Résultat   | Object  |  <- | Résultat de la sauvegarde                                         |

<!-- END REF -->

#### Description

The `.save()` function <!-- REF #EntityClass.save().Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. Vous devez appeler cette fonction après toute création ou modification d'entité si vous souhaitez sauvegarder les changements.

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). Sinon, la fonction ne fait rien (le trigger n'est pas appelé).

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the _mode_ parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the _mode_ parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. Les données effectivement stockées dans l'enregistrement résultent alors de la combinaison (le "merge") des modifications non-concurrentes (si des modifications ont été effectuées sur le même attribut, la sauvegarde échoue et une erreur est retournée, même en mode "automatic merge").

> Le mode de fusion automatique n'est pas disponible pour les attributs de type Image, Objet et Texte lorsqu'ils sont stockés en dehors de l'enregistrement. Concurrent changes in these attributes will result in a `dk status stamp has changed` error.

**Result**

The object returned by `.save()` contains the following properties:

| Propriété    |                                     | Type                  | Description                                                                                                                                                                                                |
| ------------ | ----------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success      |                                     | boolean               | Vrai si la sauvegarde a été effectuée avec succès, sinon faux.                                                                                                                             |
|              |                                     |                       | _**Available only if `dk auto merge` option is used**_:                                                                                                                                    |
| autoMerged   |                                     | boolean               | Vrai si un "auto merge" a été effectué, sinon faux.                                                                                                                                        |
|              |                                     |                       | _**Available only in case of error**_:                                                                                                                                                     |
| status       |                                     | number                | Error code, [see below](#status-and-statustext)                                                                                                                                                            |
| statusText   |                                     | text                  | Description of the error, [see below](#status-and-statustext)                                                                                                                                              |
|              |                                     |                       | _**Available only in case of pessimistic lock error**_:                                                                                                                                    |
| lockKindText |                                     | text                  | "Locked by record"                                                                                                                                                                                         |
| lockInfo     |                                     | object                | Information sur l'origine du verrouillage                                                                                                                                                                  |
|              | task_id        | number                | Id du process                                                                                                                                                                                              |
|              | user_name      | text                  | Nom d'utilisateur de la session sur la machine                                                                                                                                                             |
|              | user4d_alias   | text                  | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                                                                                         |
|              | host_name      | text                  | Nom de la machine                                                                                                                                                                                          |
|              | task_name      | text                  | Nom du process                                                                                                                                                                                             |
|              | client_version | text                  |                                                                                                                                                                                                            |
|              |                                     |                       | _**Available only in case of serious error**_ (serious error - can be trying to duplicate a primary key, disk full...): |
| errors       |                                     | collection of objects |                                                                                                                                                                                                            |
|              | message                             | text                  | Message d'erreur                                                                                                                                                                                           |
|              | componentSignature                  | text                  | Signature du composant interne (e.g. "dmbg" pour le composant de base de données)                                                                       |
|              | errCode                             | number                | Code d'erreur                                                                                                                                                                                              |

##### status et statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

| Constante                                 | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6      | (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.**Associated statusText**: "Auto merge failed"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `dk status entity does not exist anymore` | 5      | L'entité n'existe plus dans les données. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Avec `.drop( )`, cette erreur peut être retournée lorsque l'option `dk force drop if stamp changed` est utilisée. When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity doesnot exist anymore" |
| `dk status locked`                        | 3      | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `dk status serious error`                 | 4      | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `dk status stamp has changed`             | 2      | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                                          |
| `dk status wrong permission`              | 1      | Les privilèges courants ne permettent pas de supprimer l'entité. **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Exemple 1

Création d'une entité :

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

#### Exemple 2

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

#### Exemple 3

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.toObject().Params -->

| Paramètres   | Type       |     | Description                                                                                                                                                                                        |
| ------------ | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filterString | Text       |  -> | Attribut(s) à extraire (chaînes séparées par des virgules)                                                                                                   |
| filterCol    | Collection |  -> | Collection d'attribut(s) à extraire                                                                                                                                             |
| options      | Integer    |  -> | `dk with primary key`: adds the \_\_KEY property;<br/>`dk with stamp`: adds the \_STAMP property |
| Résultat     | Object     |  <- | Objet généré à partir de l'entité                                                                                                                                                                  |

<!-- END REF -->

#### Description

The `.toObject()` function <!-- REF #EntityClass.toObject().Summary -->returns an object which has been built from the entity<!-- END REF -->. Les noms des propriétés de l'objet correspondent aux noms des attributs de l'entité.

If no filter is specified, or if the _filterString_ parameter contains an empty string or "\*", the returned object will contain:

- tous les attributs storage de l'entité
- attributes of the `relatedEntity` [kind](DataClassClass.md#attributename): you get a property with the same name as the related entity (name of the many-to-one link). L'attribut est extrait sous forme simple.
- attributes of the `relatedEntities` [kind](DataClassClass.md#attributename): attribute is not returned.

Dans le premier paramètre, indiquez le ou les attribut(s) à extraire. Vous pouvez passer :

- _filterString_: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
- _filterCol_: a collection of strings: \["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
- propertyPath = "relatedEntity.\*" -> all the properties are extracted
- propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> only those properties are extracted

If a filter is specified for attributes of the relatedEntities [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntities.\*" -> all the properties are extracted
- propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> only those properties are extracted

In the _options_ parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

:::caution Warning

Si vous utilisez un autre attribut que la clé primaire comme attribut 1 dans une relation, la valeur de cet attribut sera inscrite dans la propriété "__KEY". Keep in mind that it is recommended to use the primary key as One attribute in your relations, especially when you use `.toObject()` and `.fromObject()` functions.

:::

#### Exemple 1

La structure suivante sera utilisée pour les exemples de cette section :

![](../assets/en/API/dataclassAttribute4.png)

Sans paramètre filtre :

```4d
employeeObject:=employeeSelected.toObject()
```

Retourne :

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
    "employer": { // relatedEntity extraite sous forme simple
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Exemple 2

Extraction de la clé primaire et du stamp :

```4d
employeeObject:=employeeSelected.toObject("";dk with primary key+dk with stamp)
```

Retourne :

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

#### Exemple 3

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

#### Exemple 4

Extracting some properties of `relatedEntities`:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

Retourne :

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

#### Exemple 5

Extracting a `relatedEntity` with simple form:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

Retourne :

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### Exemple 6

Extracting all the properties of a `relatedEntity`:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

Retourne :

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

#### Exemple 7

Extracting some properties of a `relatedEntity`:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

Retourne :

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.touched().Params -->

| Paramètres | Type    |     | Description                                                                                 |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------- |
| Résultat   | Boolean |  <- | Vrai si au moins un attribut de l'entité a été modifié et non encore sauvegardé, sinon Faux |

<!-- END REF -->

#### Description

The `.touched()` function <!-- REF #EntityClass.touched().Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

Si un attribut a été modifié ou calculé, la fonction retourne Vrai, sinon elle retourne Faux. Vous pouvez utiliser cette fonction pour savoir s'il est nécessaire de sauvegarder l'entité.

This function returns False for a new entity that has just been created (with [`.new( )`](DataClassClass.md#new)). Note however that if you use a function which calculates an attribute of the entity, the `.touched()` function will then return True. For example, if you call [`.getKey()`](#getkey) to calculate the primary key, `.touched()` returns True.

#### Exemple

Cet exemple vérifie s'il est nécessaire de sauvegarder l'entité :

```4d
 var $emp : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName //Même réassigné avec sa propre valeur, l'attribut est considéré "touched"

 If($emp.touched()) //si au moins l'un des attributs a été modifié
    $emp.save()
 End if // sinon, inutile de sauvegarder l'entité
```

<!-- END REF -->

<!-- REF EntityClass.touchedAttributes().Desc -->

## .touchedAttributes( )

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->

<!-- REF #EntityClass.touchedAttributes().Params -->

| Paramètres | Type       |     | Description                                   |
| ---------- | ---------- | :-: | --------------------------------------------- |
| Résultat   | Collection |  <- | Noms des attributs touchés ou collection vide |

<!-- END REF -->

#### Description

The `.touchedAttributes()` function <!-- REF #EntityClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

This applies for attributes of the [kind](DataClassClass.md#attributename) `storage` or `relatedEntity`.

Dans le cas d'un attribut relationnel ayant été "touché" (i.e., la clé étrangère), le nom de l'entité liée et celui de sa clé primaire sont retournés.

Si aucun attribut de l'entité n'a été touché, la fonction retourne une collection vide.

#### Exemple 1

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName //Même modifié avec la même valeur, l'attribut est considéré comme touché
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```

#### Exemple 2

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

Dans ce cas :

- firstName and lastName have a `storage` kind
- employer has a `relatedEntity` kind
- employerID est la clé étrangère de l'entité reliée employer

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->

## .unlock()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->

<!-- REF #EntityClass.unlock().Params -->

| Paramètres | Type   |     | Description  |
| ---------- | ------ | :-: | ------------ |
| Résultat   | Object |  <- | Objet statut |

<!-- END REF -->

#### Description

The `.unlock()` function <!-- REF #EntityClass.unlock().Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF --> in the datastore and table related to its dataclass.

> For more information, please refer to [Entity locking](ORDA/entities.md#entity-locking) section.

Un enregistrement est automatiquement déverrouillé lorsqu'il n'est plus référencé par aucune entité dans le process qui l'a verrouillé (par exemple : si le verrou est posé sur uniquement sur une référence locale d'une entité, l'entité et donc l'enregistrement sont déverrouillés lorsque le process se termine).

> Lorsqu'un enregistrement est verrouillé, il doit être déverrouillé depuis le process qui l'a verrouillé et via la référence d'entité sur laquelle le verrou a été posé. Par exemple :

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Result**

The object returned by `.unlock()` contains the following property:

| Propriété | Type    | Description                                                                                                                                                                                                                                                                                                 |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success   | Boolean | Vrai si l'action unlock a été exécutée avec succès, Faux sinon. Si le déverrouillage est effectué sur une entité qui a été supprimée, sur un enregistrement non verrouillé ou sur un enregistrement verrouillé par un autre process ou une autre entité, success vaut Faux. |

#### Exemple

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object

 $employee:=ds.Employee.get(725)
 $status:=$employee.lock()
 ... //processing
 $status:=$employee.unlock()
 If($status.success)
    ALERT("L'entité est déverrouillée")
 End if
```

<!-- END REF -->
