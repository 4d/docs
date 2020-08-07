---
id: ordaClasses
title: Data Model Classes
---

## Fonction d'aperçu

> Les fonctions de classe ORDA du modèle de données sont fournies en tant que **fonctionnalité de prévisualisation** dans 4D v18 R4 : toutes les fonctions que vous créez sont exposées sans restrictions. Les futures versions octroieront plus de contrôle sur les fonctions, en particulier à partir des requêtes REST. Dans la prochaine version, **par défaut, toutes les fonctions de classe de votre modèle de données seront définies comme privées**. Vous devrez spécifier individuellement chaque fonction que vous souhaitez exposer.

## Aperçu

ORDA vous permet de créer des fonctions de classe de haut niveau au-dessus du modèle de données. Cela vous permet d'écrire du code orienté métier et de le «publier» comme une API. Le datastore, les dataclasses, les sélections d'entités et les entités sont tous disponibles en tant qu'objets de classe pouvant contenir des fonctions.

Par exemple, vous pouvez créer une fonction `getNextWithHigherSalary()` dans la classe `EmployeeEntity` pour retourner les employés ayant un salaire supérieur à celui qui est sélectionné. Il serait aussi simple à appeler que :

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

Les développeurs peuvent non seulement utiliser ces fonctions dans des datastores locaux, mais également dans des architectures client/serveur et des architectures distantes (voir l'exemple complet [ci-dessous](#example-with-remote-datastore)) :

```4d
 //$cityManager est la référence d'un datastore distant
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Grâce à cette fonctionnalité, toute la logique métier de votre application 4D peut être stockée comme une couche indépendante afin d'être facilement maintenue ou réutilisée :

- elle vous permet de «masquer» la complexité globale de la structure physique sous-jacente et d'exposer uniquement des fonctions compréhensibles et prêtes à l'emploi.

- si la structure physique évolue, il vous suffit d'adapter le code de la fonction et les applications clientes continueront de les appeler de manière transparente.


![](assets/en/ORDA/api.png)


De plus, 4D Developer [crée préalablement et automatiquement](#creating-classes) les classes pour chaque objet de modèle de données disponible.

## Architecture

ORDA provides **generic classes** exposed through the **`4D`** [class store](Concepts/classes.md#class-stores), as well as **user classes** (extending generic classes) exposed in the **`cs`** [class store](Concepts/classes.md#class-stores):

![](assets/en/ORDA/ClassDiagramImage.png)

All ORDA data model classes are exposed as properties of the **`cs`** class store. The following ORDA classes are available:

| Class                       | Example name         | Instanciée par                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cs.DataStore                | cs.DataStore         | Commande `ds`                                                                                                                                                                                                                                                                                                                                                                     |
| cs.*DataClassName*          | cs.Employee          | `dataStore.DataClassName`, `dataStore[DataClassName]`                                                                                                                                                                                                                                                                                                                             |
| cs.*DataClassName*Entity    | cs.EmployeeEntity    | `dataClass.get()`, `dataClass.new()`, `entitySelection.first()`, `entitySelection.last()`, `entity.previous()`, `entity.next()`, `entity.first()`, `entity.last()`, `entity.clone()`                                                                                                                                                                                              |
| cs.*DataClassName*Selection | cs.EmployeeSelection | `dataClass.query()`, `entitySelection.query()`, `dataClass.all()`, `dataClass.fromCollection()`, `dataClass.newSelection()`, `entitySelection.drop()`, `entity.getSelection()`, `entitySelection.and()`, `entitySelection.minus()`, `entitySelection.or()`, `entitySelection.orderBy()`, `entitySelection.orderByFormula()`, `entitySelection.slice()`, `Create entity selection` |

> ORDA user classes are stored as regular class files (.4dm) in the Classes subfolder of the project [(see below)](#class-files).

In addition, object instances from ORDA data model user classes benefit from their parent's properties and functions. For example, an Entity class object can call functions from the [ORDA Entity generic class](https://doc.4d.com/4Dv18R3/4D/18-R3/ORDA-Entity.201-4900374.en.html).


## Class Description


> **Note**: Keep in mind that ORDA data model functions are always executed on the server. Thus, calling a function generates a request to the server.


### DataStore Class


A 4D database exposes its own DataStore class in the `cs` class store.

- **Extends**: 4D.DataStoreImplementation
- **Class name**: cs.DataStore

You can create functions in the DataStore class that will be available through the `ds` object.

#### Exemple

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
- **Class name**: cs.*DataClassName* (where *DataClassName* is the table name)
- **Example name**: cs.Employee



#### Exemple

```4D
// cs.Company class


Class extends DataClass

// Retourne les entreprises dont le revenu est au-dessus de la moyenne
// Retourne une sélection d'entités relative à DataClass Company 

Function GetBestOnes()
    $sel:=This.query("revenues >= :1";This.all().average("revenues"));
    $0:=$sel
```

Then, you can get an entity selection of the "best" companies by executing:

```4d
    var $best : cs.CompanySelection
    $best:=ds.Company.GetBestOnes()
```


#### Exemple avec un datastore distant

The following *City* catalog is exposed in a remote datastore (partial view):

![](assets/en/ORDA/Orda_example.png)

La classe `City Class` fournit une API :

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

The client application opens a session on the remote datastore:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

Then a client application can use the API to get the city matching a zip code (for example) from a form:

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```


### EntitySelection Class

Each table exposed with ORDA offers an EntitySelection class in the `cs` class store.

- **Extends**: 4D.EntitySelection
- **Class name**: *DataClassName*Selection (where *DataClassName* is the table name)
- **Example name**: cs.EmployeeSelection


#### Exemple

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
- **Class name**: *DataClassName*Entity (where *DataClassName* is the table name)
- **Example name**: cs.CityEntity

#### Exemple

```4d
// cs.CityEntity class


Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")


Function isBigCity
C_BOOLEAN($0)
// La fonction getPopulation() peut être utilisée dans la classe
$0:=This.getPopulation()>50000
```

Then, you can call this code:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
    ALERT($city.name + " is a big city")
End if
```

## Règles de définition

Lors de la création ou de la modification de classes de modèles de données, vous devez veiller aux règles décrites ci-dessous.

- Since they are used to define automatic DataClass class names in the **cs** [class store](Concepts/classes.md#class-stores), 4D table names must be compliant in order to avoid any conflict in the **cs** namespace. En particulier :
    - Do not give the same name to a 4D table and to a [user class name](Concepts/classes.md#class-names). If such a case occurs, the constructor of the user class becomes unusable (a warning is returned by the compiler).
    - Do not use a reserved name for a 4D table (e.g. "DataClass").

- When defining a class, make sure the [`Class extends`](Concepts/classes.md#class-extends-classnameclass) statement matches exactly the parent class (case sensitive) name. For example, `Class extends EntitySelection` for an entity selection class.

- You cannot instantiate a data model class object with the `new()` keyword (an error is returned). You must use a regular method as listed in the [`Instantiated by` column of the ORDA class table](#architecture).

- You cannot override a native ORDA class method from the **`4D`** [class store](Concepts/classes.md#class-stores) with a data model user class function.




## Support in 4D projects


### Class files

An ORDA data model user class is defined by adding, at the [same location as regular class files](Concepts/classes.md#class-files) (*i.e.* in the `/Sources/Classes` folder of the project folder), a .4dm file with the name of the class. For example, an entity class for the `Utilities` dataclass will be defined through a `UtilitiesEntity.4dm` file.


### Creating classes

4D automatically pre-creates empty classes in memory for each available data model object.

![](assets/en/ORDA/ORDA_Classes-3.png)

> By default, empty ORDA classes are not displayed in the Explorer. You need to show them by selecting **Show all data classes** from the Explorer's options menu: ![](assets/en/ORDA/showClass.png)

ORDA user classes have a different icon from regular classes. Empty classes are dimmed:

![](assets/en/ORDA/classORDA2.png)

To create an ORDA class file, you just need to double-click on the corresponding predefined class in the Explorer. 4D creates the class file and add the `extends` code. For example, for an Entity class:

```
Class extends Entity
```

Once a class is defined, its name is no longer dimmed in the Explorer.


### Editing classes

To open a defined ORDA class in the 4D method editor, select or double-click on an ORDA class name and use **Edit...** from the contextual menu/options menu of the Explorer window (like for any class):

![](assets/en/ORDA/classORDA4.png)

For ORDA classes based upon the local datastore (`ds`), you can directly access the class code from the 4D Structure window:

![](assets/en/ORDA/classORDA5.png)


### Éditeur de méthode

In the 4D method editor, variables typed as an ORDA class automatically benefit from autocompletion features. Example with an Entity class variable:

![](assets/en/ORDA/AutoCompletionEntity.png)

