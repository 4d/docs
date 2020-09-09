---
id: ordaClasses
title: Classes du modèle de données
---


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

Thanks to this feature, the entire business logic of your 4D application can be stored as a independent layer so that it can be easily maintained, reused, with a high level of security:

- elle vous permet de «masquer» la complexité globale de la structure physique sous-jacente et d'exposer uniquement des fonctions compréhensibles et prêtes à l'emploi.

- si la structure physique évolue, il vous suffit d'adapter le code de la fonction et les applications clientes continueront de les appeler de manière transparente.

- by default, all your data model class functions are set to **private** and cannot be called from remote requests. You must declare explicitly each public function using the [`exposed`](#exposed-vs-non-exposed-functions) keyword.

![](assets/en/ORDA/api.png)


In addition, 4D [automatically pre-creates](#creating-classes) the classes for each available data model object.


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

<details><summary>Historique</summary>

| Version | Modifications                                                                          |
| ------- | -------------------------------------------------------------------------------------- |
| v18 R5  | Data model class functions are private by default. New `exposed` and `local` keywords. |
</details>


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

### Specific rules

Lors de la création ou de la modification de classes de modèles de données, vous devez veiller aux règles décrites ci-dessous.

- Puisqu'ils sont utilisés pour définir des noms de classe DataClass automatiques dans le [class store](Concepts/classes.md#class-stores) **cs**, les noms de table 4D doivent être conformes afin d'éviter tout conflit dans l'espace de nommage **cs**. En particulier :
    - Ne donnez pas le même nom à une table 4D et à une [classe d'utilisateurs](Concepts/classes.md#class-names) (user class). Si un tel cas se produit, le constructeur de la classe utilisateur devient inutilisable (un avertissement est retourné par le compilateur).
    - N'utilisez pas de nom réservé pour une table 4D (par exemple "DataClass").

- Lors de la définition d'une classe, assurez-vous que l'instruction [`Class extends`](Concepts/classes.md#class-extends-classnameclass) correspond exactement au nom de la classe parente (sensible à la casse). Par exemple, `Class extends EntitySelection` pour une classe de sélection d'entité.

- Vous ne pouvez pas instancier un objet de classe de modèle de données avec le mot clé `new()` (une erreur est retournée). You must use a regular method as listed in the [`Instantiated by` column of the ORDA class table](#architecture).

- You cannot override a native ORDA class function from the **`4D`** [class store](Concepts/classes.md#class-stores) with a data model user class function.



## Exposed vs non-exposed functions

By default for security reasons, all your data model class functions are **not exposed** (i.e. private).

A function that is not exposed is not available on remote applications and cannot be called on any object instance from a remote request (it can however be called from the application itself). Remote requests include:

- requests sent by client 4D applications working with remote datastores
- REST requests

If a remote application tries to access a non-exposed function, the error "-10729 - Unknown member method" is returned.

To allow a data model class function to be called by a remote request, you must declare it explicitly using the `exposed` keyword. The formal syntax is:

```4d  
// declare an exposed function
exposed Function <functionName>   
```

> The `exposed` keyword can only be used with Data model class functions. If used with a [regular user class](Concepts/classes.md) function, an error is returned.

### Exemple

You want an exposed function to use a private function in a dataclass class:

```4d
Class extends DataClass

//Public function
exposed Function registerNewStudent($student : Object)->$status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//Not exposed (private) function
Function computeSerialNumber()-> $serialNumber : Integer
//compute a new serial number
$serialNumber:=...

```

When the code is called:

```4d
var $remoteDS; $student; $status : Object
var $serialNumber : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$serialNumber:=$remoteDS.Schools.computeSerialNumber() // Error "Unknown member method" 
```


## Local functions

By default in client/server architecture, ORDA data model functions are executed **on the server**. It means that calling a function generates a request to the server.

However, it happens that a function could be executed on the client side, for example when it processes data that are already in the local cache. In this case, you can save requests to the server and thus, enhance the application performance by inserting the `local` keyword. The function will then be executed on the client and will not generate requests to the server. The formal syntax is:

```4d  
// declare a function to execute locally in client/server
local Function <functionName>   
```

Obviously, you need to make sure that the function is actually eligible to a local execution. In particular, you need to make sure that:

- required data are in loaded the ORDA cache and is not expired - otherwise, requests may be triggered to the server,
- no part of the function code will send a request to the server (for example, `Current time(*)` will always call the server).

> The `local` keyword can only be used with Data model class functions. If used with a [regular user class](Concepts/classes.md) function, an error is returned.


### Exemples

#### Calculating age

Given an entity with a *birthDate* attribute, we want to define an `age()` function that would be called in a list box. This function can be executed on the client, which avoids triggering a request to the server for each line of the list box.

- On the StudentsEntity class

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null
End if
```

#### Checking attributes

We want to check the consistency of the attributes of an entity loaded on the client and updated by the user before requesting the server for save.

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

Calling code:

```4d
var $status : Object

//Form.student is loaded with all its attributes and updated on a Form
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // call the server
End if
```




## Prise en charge dans les projets 4D


### Class files

Une classe utilisateur ORDA de modèle de données est définie en ajoutant, au [même emplacement que les fichiers de classe usuels](Concepts/classes.md#class-files) (c'est-à-dire dans le dossier `/Sources/Classes` du dossier projet), un fichier .4dm avec le nom de la classe. Par exemple, une classe d'entité pour la dataclass `Utilities` sera définie via un fichier `UtilitiesEntity.4dm`.


### Créer des classes

4D crée préalablement et automatiquement des classes vides en mémoire pour chaque objet de modèle de données disponible.

![](assets/en/ORDA/ORDA_Classes-3.png)

> Par défaut, les classes ORDA vides ne sont pas affichées dans l'Explorateur. Vous devez les afficher en sélectionnant **Afficher toutes dataclasses** dans le menu d'options de l'Explorateur : ![](assets/en/ORDA/showClass.png)

Les classes d'utilisateurs ORDA ont une icône différente des autres classes. Les classes vides sont grisées :

![](assets/en/ORDA/classORDA2.png)

Pour créer un fichier de classe ORDA, il vous suffit de double-cliquer sur la classe prédéfinie correspondante dans l'Explorateur. 4D crée le fichier de classe et ajoute le code `extends`. Par exemple, pour une classe Entity :

```
Class extends Entity
```

Une fois qu'une classe est définie, son nom n'est plus grisé dans l'Explorateur.


### Modifier des classes

Pour ouvrir une classe ORDA définie dans l'éditeur de méthode 4D, sélectionnez ou double-cliquez sur un nom de classe ORDA et utilisez **Editer...** dans le menu contextuel/menu d'options de la fenêtre d'Explorateur (comme pour n'importe quelle classe) :

![](assets/en/ORDA/classORDA4.png)

Pour les classes ORDA basées sur le datastore local (`ds`), vous pouvez accéder directement au code de la classe depuis la fenêtre de 4D Structure :

![](assets/en/ORDA/classORDA5.png)


### Éditeur de méthode

Dans l'éditeur de méthode de 4D, les variables saisies comme une classe ORDA bénéficient automatiquement des fonctionnalités d'auto-complétion. Exemple avec une variable de classe Entity :

![](assets/en/ORDA/AutoCompletionEntity.png)

