---
id: ordaClasses
title: ORDA User Classes
---

## 概要

ORDA allows you to create high-level class functions above the data model, so that you can write business-oriented code and "publish" it just like an API. Datastores, dataclasses, entity selections, and entities are all available as class objects that can contain functions.

For example, you could create a `getNextWithHigherSalary()` function in the `EmployeeEntity` class, returning employees with a salary just higher than the selected one, that would be as simple to call as:

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

Developers can use these functions in local datastores, but also in client/server as well as remote architectures:

```4d
 //$cityManager is the reference of a remote datastore
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

(see the full example [below](#example-with-remote-datastore))

Thanks to this feature, the whole business logic of your 4D application can be stored as a independent layer, so that it can be easily maintained, or reused:

- it allows to "hide" the overall complexity of the underlying physical structure and to only expose understandable and ready-to-use functions. 
- if the physical structure evolves, you just have to adapt function code but client applications will continue to call them transparently. 

![](assets/en/API/api.png)

## ORDA Class Architecture

ORDA provides **generic classes** exposed through the **`4D`** [class store](Concepts/classes.md#class-stores), as well as **user classes**, extending generic classes, exposed in the **`cs`** [class store](Concepts/classes.md#class-stores):

![](assets/en/API/ClassDiagramImage.png)

### 4D Class Store

Object instances from generic classes have specific properties and functions, documented in the *4D Language Reference*:

- [datastore](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-DataStore.201-4900375.en.html)
- [dataclass](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-DataClass.201-4900376.en.html)
- [entity selection](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-EntitySelection.201-4900360.en.html)
- [entity](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-Entity.201-4900374.en.html)

### User Class Store

Object instances from user classes benefit from their parent's properties and functions. Moreover, the 4D developer can add custom functions to create a business-oriented API exposing only necessary features.

All ORDA classes are exposed as properties of the **`cs`** class store. The following ORDA class objects are available:

| ORDA object                        | クラス                         | Instanciated by                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datastore                          | cs.*dbName*DataStore(*)     | `ds` command                                                                                                                                                                                                                                                                                                                                                                      |
| dataClassName                      | cs.*DataClassName*          | `dataStore.DataClassName`, `dataStore[DataClassName]`                                                                                                                                                                                                                                                                                                                             |
| entity from DataClassName          | cs.*DataClassName*Entity    | `dataClass.get()`, `dataClass.new()`, `entitySelection.first()`, `entitySelection.last()`, `entity.previous()`, `entity.next()`, `entity.first()`, `entity.last()`, `entity.clone()`                                                                                                                                                                                              |
| entitySelection from dataClassName | cs.*dataClassName*Selection | `dataClass.query()`, `entitySelection.query()`, `dataClass.all()`, `dataClass.fromCollection()`, `dataClass.newSelection()`, `entitySelection.drop()`, `entity.getSelection()`, `entitySelection.and()`, `entitySelection.minus()`, `entitySelection.or()`, `entitySelection.orderBy()`, `entitySelection.orderByFormula()`, `entitySelection.slice()`, `Create entity selection` |


(*)dbName is the .4DProject file name.

### Inheritance

Given a database named EmpComp containing Employee and Company tables, the following examples show inheritance rules:

```4d
$i:=OB Instance of(ds;4D.DataStore) //True
$i:=OB Instance of(ds;cs.EmpCompDataStore) //True  
$class:=OB Class(ds) //$class=cs.EmpCompDataStore  

$i:=OB Instance of(ds.Employee;4D.DataClass) //True
$i:=OB Instance of(ds.Employee;cs.Employee) //True  
$class:=OB Class(ds.Employee) //$class=cs.Employee 

$i:=OB Instance of(ds.Employee.all();4D.EntitySelection) //True
$i:=OB Instance of(ds.Employee.all();cs.EmployeeSelection) //True  
$class:=OB Class(ds.Employee.all()) //$class=cs.EmployeeSelection

$i:=OB Instance of(ds.Employee.all().first();4D.Entity) //True
$i:=OB Instance of(ds.Employee.all().first();cs.EmployeeEntity) //True  
$class:=OB Class(ds.Employee.all().first()) //$class=cs.EmployeeEntity 

```

## DataStore Class

A 4D database exposes its own DataStore class in the `cs` class store.

- **Inherit from**: 4D.DataStore 
- **Exposed name**: *dbName*DataStore (where *dbName* is the .4DProject file name)

| Database file name | DataStore class name |
| ------------------ | -------------------- |
| Employee.4DProject | cs.EmployeeDataStore |


You can create functions in the *dbName*DataStore class, that will be available through the `ds` object.

#### 例題

```4d
// cs.EmployeeDataStore class

Class extends DataStore

Function getDesc
  $0:="Database exposing employees and their companies"
```

This function can then be called:

```4d
$desc:=ds.getDesc() //"Database exposing..."
```

## DataClass Class

Each table exposed with ORDA offers a DataClass class in the `cs` class store.

- **Inherit from**: 4D.DataClass 
- **Exposed name**: *DataClassName* (where *DataClassName* is the table name). 

| Table name | DataClass class name |
| ---------- | -------------------- |
| Employee   | cs.Employee          |


#### 例題

```4D
// cs.Company class


Class extends DataClass

// Returns companies which revenue is over the average
// Returns an entity selection related to the DataClass Company 

Function GetBestOnes()
    $sel:=This.query("revenues >= :1";This.all().average("revenues"));
    $0:=$sel
```

Then, you can get an entity selection of the "best" companies by executing:

```4d
    var $best : cs.Company 
    $best:=ds.Company.GetBestOnes()
```

#### Example with a remote datastore

The following City catalog is exposed in a remote datastore (partial view):

![](assets/en/API/Orda_example.png)

The City Class provides an API:

```4d
// cs.City class

Class extends DataClass

Function getCityName()
    var $1, $zipcode : Integer
    var $zip : 4D.Entity
    var $0 : Text

    $zipcode:=$1
    $zip:=ds.ZipCode.get($1)
    $0:="" 

    If ($zip#Null)
        $0:=$zip.city.name
    End if
```

The client application opens a session on the remote datastore:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

Then a client application can use the API to get the city matching a zipCode, for example from a form:

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```

## EntitySelection Class

Each table exposed with ORDA offers an EntitySelection class in the `cs` class store.

- **Inherit from**: 4D.EntitySelection 
- **Exposed name**: *DataClassName*Selection (where *DataClassName* is the table name). 

| Table name | EntitySelection class name |
| ---------- | -------------------------- |
| Employee   | cs.EmployeeSelection       |


#### 例題

```4d
// cs.EmployeeSelection class


Class extends EntitySelection

//Extract from this entity selection the employees with a salary greater than the average

Function withSalaryGreaterThanAverage
    C_OBJECT($0)
    $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

```

Then, you can get employees with a salary greater than the average in any entity selection by executing:

```4d
$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

## Entity Class

Each table exposed with ORDA offers an Entity class in the `cs` class store.

- **Inherit from**: 4D.Entity 
- **Exposed name**: *DataClassName*Entity (where *DataClassName* is the table name). 

| Table name | Entity class name |
| ---------- | ----------------- |
| City       | cs.CityEntity     |


#### 例題

```4d
// cs.CityEntity class


Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")

```

Then, you can run this kind of query:

```4d
$cities:=ds.City.query(Formula(This.getPopulation() > 500000))
```

> **Warning**: Keep in mind that ORDA functions are always executed on the server, thus calling a function do generate a request to the server.