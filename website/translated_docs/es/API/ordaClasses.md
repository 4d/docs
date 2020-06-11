---
id: ordaClasses
title: ORDA User Classes
---

## Overview

ORDA allows you to create high-level class functions above the data model, so that you can write business-oriented code and "publish" it just like an API. Datastores, dataclasses, entity selections, and entities are all available as class objects that can contain functions.

For example, you could create a `getNextWithHigherSalary()` function in the `EmployeeEntity` class, returning employees with a salary just higher than the selected one, that would be as simple to call as:

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

Developers can use these functions in local datastores, but also in client/server as well as remote architectures (see the full example [below](#example-with-remote-datastore)):

```4d
 //$cityManager is the reference of a remote datastore
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Thanks to this feature, the whole business logic of your 4D application can be stored as a independent layer, so that it can be easily maintained, or reused:

- it allows to "hide" the overall complexity of the underlying physical structure and to only expose understandable and ready-to-use functions. 
- if the physical structure evolves, you just have to adapt function code but client applications will continue to call them transparently. 

![](assets/en/API/api.png)

## Architecture

ORDA provides **generic classes** exposed through the **`4D`** [class store](Concepts/classes.md#class-stores), as well as **user classes**, extending generic classes, exposed in the **`cs`** [class store](Concepts/classes.md#class-stores):

![](assets/en/API/ClassDiagramImage.png)

### Class Stores

#### 4D Class Store

Object instances from generic classes have specific properties and functions, documented in the *4D Language Reference*:

- [datastore](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-DataStore.201-4900375.en.html)
- [dataclass](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-DataClass.201-4900376.en.html)
- [entity selection](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-EntitySelection.201-4900360.en.html)
- [entity](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-Entity.201-4900374.en.html)

#### User Class Store (cs)

Object instances from ORDA data model user classes benefit from their parent's properties and functions. For example, an entity class object can call functions from the [ORDA's Entity generic class](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-Entity.201-4900374.en.html).

In addition, the 4D developer can add custom functions to create a business-oriented API exposing only necessary features.

All ORDA classes are exposed as properties of the **`cs`** class store. The following ORDA class objects are available:

| ORDA object                        | Class                       | Instanciated by                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datastore                          | cs.DataStore                | `ds` command                                                                                                                                                                                                                                                                                                                                                                      |
| dataClassName                      | cs.*DataClassName*          | `dataStore.DataClassName`, `dataStore[DataClassName]`                                                                                                                                                                                                                                                                                                                             |
| entity from DataClassName          | cs.*DataClassName*Entity    | `dataClass.get()`, `dataClass.new()`, `entitySelection.first()`, `entitySelection.last()`, `entity.previous()`, `entity.next()`, `entity.first()`, `entity.last()`, `entity.clone()`                                                                                                                                                                                              |
| entitySelection from dataClassName | cs.*DataClassName*Selection | `dataClass.query()`, `entitySelection.query()`, `dataClass.all()`, `dataClass.fromCollection()`, `dataClass.newSelection()`, `entitySelection.drop()`, `entity.getSelection()`, `entitySelection.and()`, `entitySelection.minus()`, `entitySelection.or()`, `entitySelection.orderBy()`, `entitySelection.orderByFormula()`, `entitySelection.slice()`, `Create entity selection` |


> ORDA user classes are stored as regular class files (.4dm) in the Classes subfolder of the project [(see below)](#support-in-4d-projects).

### Inheritance

Given a project containing Employee and Company tables, the following examples show inheritance rules:

```4d
$i:=OB Instance of(ds;4D.DataStoreImplementation) //True
$i:=OB Instance of(ds;cs.DataStore) //True  
$class:=OB Class(ds) //$class=cs.DataStore  

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

## APIs

> **Warning**: Keep in mind that ORDA functions are always executed on the server, thus calling a function do generate a request to the server.

### DataStore Class

A 4D database exposes its own DataStore class in the `cs` class store.

- **Extends**: 4D.DataStoreImplementation 
- **Exposed name**: DataStore
- **Class file name**: DataStore.4dm

| Database file name | DataStore class name | Class file name |
| ------------------ | -------------------- | --------------- |
| Employee.4DProject | cs.DataStore         | DataStore.4dm   |


You can create functions in the DataStore class, that will be available through the `ds` object.

#### Example

```4d
// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="Database exposing employees and their companies"
```

This function can then be called:

```4d
$desc:=ds.getDesc() //"Database exposing..."
```

### DataClass Class

Each table exposed with ORDA offers a DataClass class in the `cs` class store.

- **Extends**: 4D.DataClass 
- **Exposed name**: *DataClassName* (where *DataClassName* is the table name)
- **Class file name**: *DataClassName*.4dm

| Table name | DataClass class name | Class file name |
| ---------- | -------------------- | --------------- |
| Employee   | cs.Employee          | Employee.4dm    |


> If a DataClass class name enters in conflict with a [user class name](Concepts/classes.md#class-names), the constructor of the user class becomes unusable (a warning is returned by the compiler).

#### Example

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

### EntitySelection Class

Each table exposed with ORDA offers an EntitySelection class in the `cs` class store.

- **Extends**: 4D.EntitySelection 
- **Exposed name**: *DataClassName*Selection (where *DataClassName* is the table name)
- **Class file name**: *DataClassName*Selection.4dm

| Table name | EntitySelection class name | Class file name       |
| ---------- | -------------------------- | --------------------- |
| Employee   | cs.EmployeeSelection       | EmployeeSelection.4dm |


#### Example

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

### Entity Class

Each table exposed with ORDA offers an Entity class in the `cs` class store.

- **Extends**: 4D.Entity 
- **Exposed name**: *DataClassName*Entity (where *DataClassName* is the table name)
- **Class file name**: *DataClassName*Entity.4dm

| Table name | Entity class name | Class file name |
| ---------- | ----------------- | --------------- |
| City       | cs.CityEntity     | CityEntity.4dm  |


#### Example

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

## Support in 4D projects

ORDA data model user class files must be stored at the [same location as regular class files](Concepts/classes.md#class-files), i.e. in the `/Sources/Classes` folder of the project folder.

### Creating classes

You create an ORDA user class by adding a corresponding file in the Classes folder. For example, to create an entity class for the `Utilities` dataclass, you need to create a `UtilitiesEntity.4dm` file.

A class file can be created by a simple double-click in the Classes theme of the 4D Explorer. ORDA user classes have a different icon from regular classes. Empty classes are dimmed:

![](assets/en/API/classORDA2.png)

Double-click on a class name. 4D creates the ORDA class file and add the `extends` code, for example for an Entity class:

    Class extends entity
    

Once a class is defined, its name is no longer dimmed in the Explorer:

![](assets/en/API/classORDA3.png)

> By default, empty ORDA classes are not displayed in the Explorer. You need to show them by selecting **Show all data classes** from the Explorer's options menu: ![](assets/en/API/showClass.png)

### Editing classes

To open a defined ORDA class in the 4D method editor, double-click on an ORDA class name or select an ORDA class name and select **Edit...** from the contextual menu/options menu of the Explorer window (like for any class):

![](assets/en/API/classORDA4.png)

For ORDA classes based upon the local datastore (ds), you can directly access the class code from the 4D Structure window:

![](assets/en/API/classORDA5.png)

### Method editor

In the 4D method editor, variables typed as an ORDA class automatically benefit from autocompletion features. Example with an Entity class variable:

![](assets/en/API/AutoCompletionEntity.png)