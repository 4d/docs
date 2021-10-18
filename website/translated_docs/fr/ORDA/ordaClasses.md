---
id: ordaClasses
title: Classes du modèle de données
---



ORDA vous permet de créer des fonctions de classe de haut niveau au-dessus du modèle de données. Cela vous permet d'écrire du code orienté métier et de le «publier» comme une API. Le datastore, les dataclasses, les sélections d'entités et les entités sont tous disponibles en tant qu'objets de classe pouvant contenir des fonctions.

Par exemple, vous pouvez créer une fonction `getNextWithHigherSalary()` dans la classe `EmployeeEntity` pour retourner les employés ayant un salaire supérieur à celui qui est sélectionné. Il serait aussi simple à appeler que :

```4d
$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
```

Les développeurs peuvent utiliser ces fonctions non seulement dans des datastores locaux, mais aussi dans des architectures client/serveur et distantes :

```4d
 //$cityManager est la référence d'un datastore distant
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Grâce à cette fonctionnalité, toute la logique métier de votre application 4D peut être stockée comme une couche indépendante afin d'être facilement maintenue ou réutilisée avec un niveau de sécurité élevé :

- Elle vous permet de «masquer» la complexité globale de la structure physique sous-jacente et d'exposer uniquement des fonctions compréhensibles et prêtes à l'emploi.

- Si la structure phySique évolue, il vous suffit d'adapter le code de la fonction et les applications clientes continueront de les appeler de manière transparente.

- By default, all of your data model class functions (including [computed attribute functions](#computed-attributes)) are **not exposed** to remote applications and cannot be called from REST requests. Vous devez déclarer explicitement chaque fonction publique avec le mot-clé [`exposed`](#exposed-vs-non-exposed-functions).

![](assets/en/ORDA/api.png)


De plus, 4D [crée préalablement et automatiquement](#creating-classes) les classes pour chaque objet de modèle de données disponible.


## Architecture

ORDA fournit des **classes génériques** exposées via le [class store](Concepts/classes.md#class-stores) **`4D`**, ainsi que des **classes utilisateurs** (étendant les classes génériques) exposées dans le [class store](Concepts/classes.md#class-stores) **`cs`** :

![](assets/en/ORDA/ClassDiagramImage.png)

Toutes les classes de modèle de données ORDA sont exposées en tant que propriétés du class store **`cs`**. Les classes ORDA suivantes sont disponibles :

| Class                       | Nom de l'exemple     | Instanciée par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cs.DataStore                | cs.DataStore         | commande [`ds`](API/DataStoreClass.md#ds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| cs.*DataClassName*          | cs.Employee          | [`dataStore.DataClassName`](API/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| cs.*DataClassName*Entity    | cs.EmployeeEntity    | [`dataClass.get()`](API/DataClassClass.md#get), [`dataClass.new()`](API/DataClassClass.md#new), [`entitySelection.first()`](API/EntitySelectionClass.md#first), [`entitySelection.last()`](API/EntitySelectionClass.md#last), [`entity.previous()`](API/EntityClass.md#previous), [`entity.next()`](API/EntityClass.md#next), [`entity.first()`](API/EntityClass.md#first), [`entity.last()`](API/EntityClass.md#last), [`entity.clone()`](API/EntityClass.md#clone)                                                                                                                                                                                                                                                                                                                                                                                                   |
| cs.*DataClassName*Selection | cs.EmployeeSelection | [`dataClass.query()`](API/DataClassClass.md#query), [`entitySelection.query()`](API/EntitySelectionClass.md#query), [`dataClass.all()`](API/DataClassClass.md#all), [`dataClass.fromCollection()`](API/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](API/DataClassClass.md#newselection), [`entitySelection.drop()`](API/EntitySelectionClass.md#drop), [`entity.getSelection()`](API/EntityClass.md#getselection), [`entitySelection.and()`](API/EntitySelectionClass.md#and), [`entitySelection.minus()`](API/EntitySelectionClass.md#minus), [`entitySelection.or()`](API/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](API/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](API/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](API/EntitySelectionClass.md#slice), `Create entity selection` |

> Les classes utilisateur ORDA sont stockées sous forme de fichiers de classe standard (.4dm) dans le sous-dossier Classes du projet [(voir ci-dessous)](#class-files).

De plus, les instances d'objet de classes utilisateurs du modèles de données ORDA bénéficient des propriétés et fonctions de leurs parents:

- un objet de classe Datastore peut appeler des fonctions de la [classe générique ORDA Datastore](API/DataStoreClass.md).
- un objet de classe Dataclass peut appeler des fonctions de la [classe générique ORDA Dataclass](API/DataClassClass.md).
- un objet de classe Entity selection peut appeler des fonctions de la [classe générique ORDA Entity selection](API/EntitySelectionClass.md).
- un objet de classe Entity peut appeler des fonctions de la [classe générique ORDA Entity](API/EntityClass.md).



## Description de la classe

<details><summary>Historique</summary>

| Version | Modifications                                                                                      |
| ------- | -------------------------------------------------------------------------------------------------- |
| v18 R5  | Data model class functions are not exposed to REST by default. New `exposed` and `local` keywords. |
</details>


### Classe DataStore


Une base de données 4D expose sa propre classe DataStore dans le class store `cs`.

- **Extends**: 4D.DataStoreImplementation
- **Nom de classe** : cs.DataStore

Vous pouvez créer des fonctions dans la classe DataStore qui seront disponibles via l'objet `ds`.

#### Exemple

```4d  
// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="Database exposing employees and their companies"
```


Cette foncton peut alors être appelée :

```4d
$desc:=ds.getDesc() //"Database exposing..."
```



### Classe DataClass

Chaque table exposée avec ORDA affiche une classe DataClass dans le class store `cs`.

- **Extends** : 4D.DataClass
- **Nom de classe **: cs.*DataClassName* (où *DataClassName* est le nom de la table)
- **Exemple ** : cs.Employee



#### Exemple

```4D
// cs.Company class


Class extends DataClass

// Retourne les entreprises dont le revenu est supérieur à la moyenne
// Retourne une sélection d'entités relative à l'entreprise DataClass 

Function GetBestOnes()
    $sel:=This.query("revenues >= :1";This.all().average("revenues"));
    $0:=$sel
```

Vous pouvez ensuite obtenir une sélection d'entité des "meilleures" entreprises en exécutant le code suivant :

```4d
    var $best : cs.CompanySelection
    $best:=ds.Company.GetBestOnes()
```

> [Computed attributes](#computed-attributes) are defined in the [Entity Class](#entity-class).


#### Exemple avec un datastore distant

Le catalogue *City* suivant est exposé dans un datastore distant (vue partielle) :

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

L'application cliente ouvre une session sur le datastore distant :

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

Une application cliente peut alors utiliser l'API pour obtenir la ville correspondant au code postal (par exemple) à partir d'un formulaire :

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```


### Classe EntitySelection

Chaque table exposée avec ORDA affiche une classe EntitySelection dans le class store `cs`.

- **Extends** : 4D.EntitySelection
- **Nom de classe** : *DataClassName*Selection (où *DataClassName* est le nom de la table)
- **Exemple ** : cs.EmployeeSelection


#### Exemple

```4d
// Classe cs.EmployeeSelection 


Classe extends EntitySelection

//Extrait, de cette sélection d'entité, les employés ayant un salaire supérieur à la moyenne

Function withSalaryGreaterThanAverage
    C_OBJECT($0)
    $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

```

Vous pouvez alors obtenir les employés dont le salaire est supérieur à la moyenne, dans une sélection d'entité, en exécutant le code suivant :

```4d
$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

### Entity Class

Chaque table exposée avec ORDA affiche une classe Entity dans le class store `cs`.

- **Extends** : 4D.Entity
- **Nom de classe **: *DataClassName*Entity (où *DataClassName* est le nom de la table)
- **Exemple ** : cs.CityEntity

Entity classes allow you to define **computed attributes** using specific keywords:

- `Function get` *attributeName*
- `Function set` *attributeName*
- `Function query` *attributeName*
- `Function orderBy` *attributeName*

For more information, please refer to the [Computed attributes](#computed-attributes) section.

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

Vous pouvez ensuite appeler ce code :

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
    ALERT($city.name + " is a big city")
End if
```

### Règles spécifiques

Lors de la création ou de la modification de classes de modèles de données, vous devez veiller aux règles décrites ci-dessous :

- Puisqu'ils sont utilisés pour définir des noms de classe DataClass automatiques dans le [class store](Concepts/classes.md#class-stores) **cs**, les tables 4D doivent être nommées afin d'éviter tout conflit dans l'espace de nommage **cs**. En particulier :
    - Ne donnez pas le même nom à une table 4D et à une [classe d'utilisateurs](Concepts/classes.md#class-names) (user class). Si un tel cas se produit, le constructeur de la classe utilisateur devient inutilisable (un avertissement est retourné par le compilateur).
    - N'utilisez pas de nom réservé pour une table 4D (par exemple "DataClass").

- Lors de la définition d'une classe, assurez-vous que l'instruction [`Class extends`](Concepts/classes.md#class-extends-classnameclass) correspond exactement au nom de la classe parente (sensible à la casse). Par exemple, `Class extends EntitySelection` pour une classe de sélection d'entité.

- Vous ne pouvez pas instancier un objet de classe de modèle de données avec le mot clé `new()` (une erreur est retournée). You must use a regular method as listed in the [`Instantiated by` column of the ORDA class table](#architecture).

- Vous ne pouvez pas remplacer une fonction de classe ORDA native du [class store](Concepts/classes.md#class-stores) **`4D`** par une fonction de classe utilisateur de modèle de données.


## Computed attributes


### Aperçu

A computed attribute is a dataclass attribute with a data type that masks a calculation. [Standard 4D classes](Concepts/classes.md) implement the concept of computed properties with `get` (*getter*) and `set` (*setter*) [accessor functions](Concepts/classes.md#function-get-and-function-set). ORDA dataclass attributes benefit from this feature and extend it with two additional functions: `query` and `orderBy`.

At the very minimum, a computed attribute requires a `get` function that describes how its value will be calculated. When a *getter* function is supplied for an attribute, 4D does not create the underlying storage space in the datastore but instead substitutes the function's code each time the attribute is accessed. If the attribute is not accessed, the code never executes.

A computed attribute can also implement a `set` function, which executes whenever a value is assigned to the attribute. The *setter* function describes what to do with the assigned value, usually redirecting it to one or more storage attributes or in some cases other entities.

Just like storage attributes, computed attributes may be included in **queries**. By default, when a computed attribute is used in a ORDA query, the attribute is calculated once per entity examined. In some cases this is sufficient. However for better performance, especially in client/server, computed attributes can implement a `query` function that relies on actual dataclass attributes and benefits from their indexes.

Similarly, computed attributes can be included in **sorts**. When a computed attribute is used in a ORDA sort, the attribute is calculated once per entity examined. Just like in queries, computed attributes can implement an `orderBy` function that substitutes other attributes during the sort, thus increasing performance.


### How to define computed attributes

You create a computed attribute by defining a `get` accessor in the [**entity class**](#entity-class) of the dataclass. The computed attribute will be automatically available in the dataclass attributes and in the entity attributes.

Other computed attribute functions (`set`, `query`, and `orderBy`) can also be defined in the entity class. They are optional.

Within computed attribute functions, [`This`](Concepts/classes.md#this) designates the entity. Computed attributes can be used and handled as any dataclass attribute, i.e. they will be processed by [entity class](API/EntityClass.md) or [entity selection class](API/EntitySelectionClass.md) functions.

> ORDA computed attributes are not [**exposed**](#exposed-vs-non-exposed-functions) by default. You expose a computed attribute by adding the `exposed` keyword to the **get function** definition.

> **get and set functions** can have the [**local**](#local-functions) property to optimize client/server processing.


### `Function get <attributeName>`

#### Syntaxe

```4d
{local} {exposed} Function get <attributeName>({$event : Object}) -> $result : type
// code
```
The *getter* function is mandatory to declare the *attributeName* computed attribute. Whenever the *attributeName* is accessed, 4D evaluates the `Function get` code and returns the *$result* value.

> A computed attribute can use the value of other computed attribute(s). Recursive calls generate errors.

The *getter* function defines the data type of the computed attribute thanks to the *$result* parameter. The following resulting types are allowed:

- Scalar (text, boolean, date, time, number)
- Objet
- Image
- BLOB
- Entity (i.e. cs.EmployeeEntity)
- Entity selection (i.e. cs.EmployeeSelection)

The *$event* parameter contains the following properties:

| Propriété     | Type    | Description                                                                               |
| ------------- | ------- | ----------------------------------------------------------------------------------------- |
| attributeName | Texte   | Computed attribute name                                                                   |
| dataClassName | Texte   | Dataclass name                                                                            |
| kind          | Texte   | "get"                                                                                     |
| result        | Variant | Optional. Add this property with Null value if you want a scalar attribute to return Null |


#### Exemples

- *fullName* computed attribute:

```4d
Function get fullName($event : Object)-> $fullName : Text

  Case of   
    : (This.firstName=Null) & (This.lastName=Null)
        $event.result:=Null //use result to return Null
    : (This.firstName=Null)
        $fullName:=This.lastName
    : (This.lastName=Null)
        $fullName:=This.firstName
    Else 
        $fullName:=This.firstName+" "+This.lastName
    End case 
```

- A computed attribute can be based upon an entity related attribute:

```4d
Function get bigBoss($event : Object)-> $result: cs.EmployeeEntity
    $result:=This.manager.manager

```

- A computed attribute can be based upon an entity selection related attribute:

```4d
Function get coWorkers($event : Object)-> $result: cs.EmployeeSelection
    If (This.manager.manager=Null)
        $result:=ds.Employee.newSelection()
    Else 
        $result:=This.manager.directReports.minus(this)
    End if
```

### `Function set <attributeName>`

#### Syntaxe

```4d
{local} Function set <attributeName>($value : type {; $event : Object})
// code
```

The *setter* function executes whenever a value is assigned to the attribute. This function usually processes the input value(s) and the result is dispatched between one or more other attributes.

The *$value* parameter receives the value assigned to the attribute.

The *$event* parameter contains the following properties:

| Propriété     | Type    | Description                                   |
| ------------- | ------- | --------------------------------------------- |
| attributeName | Texte   | Computed attribute name                       |
| dataClassName | Texte   | Dataclass name                                |
| kind          | Texte   | "set"                                         |
| value         | Variant | Value to be handled by the computed attribute |

#### Exemple

```4d
Function set fullName($value : Text; $event : Object)
    var $p : Integer
    $p:=Position(" "; $value)       
    This.firstname:=Substring($value; 1; $p-1)  // "" if $p<0
    This.lastname:=Substring($value; $p+1)
```



### `Function query <attributeName>`

#### Syntaxe

```4d
Function query <attributeName>($event : Object)
Function query <attributeName>($event : Object) -> $result : Text
Function query <attributeName>($event : Object) -> $result : Object
// code
```

This function supports three syntaxes:

- With the first syntax, you handle the whole query through the `$event.result` object property.
- With the second and third syntaxes, the function returns a value in *$result*:
    - If *$result* is a Text, it must be a valid query string
    - If *$result* is an Object, it must contain two properties:

    | Propriété          | Type       | Description                                         |
    | ------------------ | ---------- | --------------------------------------------------- |
    | $result.query      | Texte      | Valid query string with placeholders (:1, :2, etc.) |
    | $result.parameters | Collection | values for placeholders                             |

The `query` function executes whenever a query using the computed attribute is launched. It is useful to customize and optimize queries by relying on indexed attributes. When the `query` function is not implemented for a computed attribute, the search is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

> The following features are not supported: - calling a `query` function on computed attributes of type Entity or Entity selection, - using the `order by` keyword in the resulting query string.

The *$event* parameter contains the following properties:

| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributeName | Texte   | Computed attribute name                                                                                                                                                                                                                                                                                                                                             |
| dataClassName | Texte   | Dataclass name                                                                                                                                                                                                                                                                                                                                                      |
| kind          | Texte   | "query"                                                                                                                                                                                                                                                                                                                                                             |
| value         | Variant | Value to be handled by the computed attribute                                                                                                                                                                                                                                                                                                                       |
| operator      | Texte   | Query operator (see also the [`query` class function](API/DataClassClass.md#query)). Valeurs possibles :<li>== (equal to, @ is wildcard)</li><li>=== (equal to, @ is not wildcard)</li><li>!= (not equal to, @ is wildcard)</li><li>!== (not equal to, @ is not wildcard)</li><li>< (less than)</li><li><= (less than or equal to)</li><li>> (greater than)</li><li>>= (greater than or equal to)</li><li>IN (included in)</li><li>% (contains keyword)</li> |
| result        | Variant | Value to be handled by the computed attribute. Pass `Null` in this property if you want to let 4D execute the default query (always sequential for computed attributes).                                                                                                                                                                                            |

> If the function returns a value in *$result* and another value is assigned to the `$event.result` property, the priority is given to `$event.result`.

#### Exemples

- Query on the *fullName* computed attribute.

```4d
Function query fullName($event : Object)->$result : Object

    var $fullname; $firstname; $lastname; $query : Text
    var $operator : Text
    var $p : Integer
    var $parameters : Collection

    $operator:=$event.operator
    $fullname:=$event.value

    $p:=Position(" "; $fullname) 
    If ($p>0)
        $firstname:=Substring($fullname; 1; $p-1)+"@"
        $lastname:=Substring($fullname; $p+1)+"@"
        $parameters:=New collection($firstname; $lastname) // two items collection
    Else 
        $fullname:=$fullname+"@"
        $parameters:=New collection($fullname) // single item collection
    End if 

    Case of 
    : ($operator="==") | ($operator="===")
        If ($p>0)
            $query:="(firstName = :1 and lastName = :2) or (firstName = :2 and lastName = :1)"
        Else 
            $query:="firstName = :1 or lastName = :1"
        End if 
    : ($operator="!=")
        If ($p>0)
            $query:="firstName != :1 and lastName != :2 and firstName != :2 and lastName != :1"
        Else 
            $query:="firstName != :1 and lastName != :1"
        End if 
    End case 

    $result:=New object("query"; $query; "parameters"; $parameters)
```

> Keep in mind that using placeholders in queries based upon user text input is recommended for security reasons (see [`query()` description](API/DataClassClass.md#query)).

Calling code, for example:

```4d
$emps:=ds.Employee.query("fullName = :1"; "Flora Pionsin")
```

- This function handles queries on the *age* computed attribute and returns an object with parameters:

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

            //... other operators           


    End case 


    If (Undefined($event.result))
        $result:=New object
        $result.query:=$query
        $result.parameters:=$parameters
    End if

```

Calling code, for example:

```4d
// people aged between 20 and 21 years (-1 day)
$twenty:=people.query("age = 20")  // calls the "==" case

// people aged 20 years today
$twentyToday:=people.query("age === 20") // equivalent to people.query("age is 20") 

```


### `Function orderBy <attributeName>`

#### Syntaxe

```4d
Function orderBy <attributeName>($event : Object)
Function orderBy <attributeName>($event : Object)-> $result : Text

// code
```

The `orderBy` function executes whenever the computed attribute needs to be ordered. It allows sorting the computed attribute. For example, you can sort *fullName* on first names then last names, or conversely. When the `orderBy` function is not implemented for a computed attribute, the sort is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

> Calling an `orderBy` function on computed attributes of type Entity class or Entity selection class **is not supported**.

The *$event* parameter contains the following properties:

| Propriété     | Type    | Description                                                                                                |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| attributeName | Texte   | Computed attribute name                                                                                    |
| dataClassName | Texte   | Dataclass name                                                                                             |
| kind          | Texte   | "orderBy"                                                                                                  |
| value         | Variant | Value to be handled by the computed attribute                                                              |
| operator      | Texte   | "desc" or "asc" (default)                                                                                  |
| descending    | Booléen | `true` for descending order, `false` for ascending order                                                   |
| result        | Variant | Value to be handled by the computed attribute. Pass `Null` if you want to let 4D execute the default sort. |

> You can use either the `operator` or the `descending` property. It is essentially a matter of programming style (see examples).

You can return the `orderBy` string either in the `$event.result` object property or in the *$result* function result. If the function returns a value in *$result* and another value is assigned to the `$event.result` property, the priority is given to `$event.result`.


#### Exemple

You can write conditional code:

```4d
Function orderBy fullName($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="firstName desc, lastName desc" 
    Else 
        $result:="firstName, lastName" 
    End if
```

You can also write compact code:

```4d
Function orderBy fullName($event : Object)-> $result : Text
    $result:="firstName "+$event.operator+", "lastName "+$event.operator

```

Conditional code is necessary in some cases:

```4d
Function orderBy age($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="birthday asc" 
    Else 
        $result:="birthday desc" 
    End if

```



## Fonctions exposées et non exposées

Pour des raisons de sécurité, toutes vos fonctions de classe de modèle de données sont non-exposées (**not exposed**) par défaut aux requêtes distantes (c'est-à-dire qu'elles sont privées).

Les requêtes à distance incluent :

- Les requêtes envoyées par des applications 4D distantes connectées via `Open datastore`
- Les requêtes REST

> Les requêtes client/serveur 4D standard ne sont pas impactées. Les fonctions de classe de modèle de données sont toujours disponibles dans cette architecture.

Une fonction qui n'est pas exposée n'est pas disponible sur les applications distantes et ne peut être appelée sur aucune instance d'objet à partir d'une requête REST. Si une application distante tente d'accéder à une fonction non exposée, l'erreur «-10729 - Méthode membre inconnue» est retournée.

Pour permettre à une fonction de classe de modèle de données d'être appelée par une requête distante, vous devez la déclarer explicitement à l'aide du mot-clé `exposed`. La syntaxe formelle est la suivante :

```4d  
// déclarer une fonction exposée
exposed Function <functionName>   
```

> Le mot-clé `exposed` ne peut être utilisé qu'avec les fonctions de classe du modèle de données. S'il est utilisé avec une fonction de [classe utilisateur standard](Concepts/classes.md), il est ignoré et une erreur est retournée par le compilateur.

### Exemple

Vous voulez qu'une fonction exposée utilise une fonction privée dans une classe dataclass :

```4d
Class extends DataClass

//Fonction publique
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//fonction (privée) non exposée
Function computeIDNumber()-> $id : Integer
//calculer un nouveau numéro d'ID
$id:=...

```

Lorsque le code est appelé :

```4d
var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$id:=$remoteDS.Schools.computeIDNumber() // Erreur "Unknown member method" 
```


## Fonctions locales

Par défaut dans l'architecture client/serveur, les fonctions de modèle de données ORDA sont exécutées **sur le serveur**. Il garantit généralement les meilleures performances puisque seuls la requête de fonction et le résultat sont envoyés sur le réseau.

Cependant, il peut arriver qu'une fonction soit entièrement exécutable côté client (par exemple, lorsqu'elle traite des données qui se trouvent déjà dans le cache local). Dans ce cas, vous pouvez enregistrer les requêtes sur le serveur et ainsi améliorer les performances de l'application en saisissant le mot-clé `local`. La syntaxe formelle est la suivante :

```4d  
// déclarer une fonction à exécuter localement en client/serveur 
local Function <functionName>   
```

Avec ce mot-clé, la fonction sera toujours exécutée côté client.

> Le mot-clé `local` ne peut être utilisé qu'avec les fonctions de classe du modèle de données. S'il est utilisé avec une fonction de [classe utilisateur standard](Concepts/classes.md), il est ignoré et une erreur est retournée par le compilateur.

A noter que la fonction fonctionnera même si elle nécessite d'accéder au serveur (par exemple si le cache ORDA est expiré). Toutefois, il est fortement recommandé de s'assurer que la fonction locale n'accède pas aux données sur le serveur, sinon l'exécution locale pourrait n'apporter aucun avantage en termes de performances. Une fonction locale qui génère de nombreuses requêtes au serveur est moins efficace qu'une fonction exécutée sur le serveur qui ne retournerait que les valeurs résultantes. Prenons l'exemple suivant, avec une fonction sur l'entité Schools :

```4d
// Obtenir les élèves les plus jeunes  
// Utilisation inappropriée du mot-clé local
local Function getYoungest
    var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```
- **sans** le mot clé `local`, le résultat est donné en une seule requête
- **avec** le mot-clé `local`, 4 requêtes sont nécessaires : une pour obtenir les élèves de l'entité Schools, une pour la `query()`, une pour le `orderBy()` et une pour la `slice()`. Dans cet exemple, l'utilisation du mot-clé `local` est inappropriée.


### Exemples

#### Calcul de l'âge

Considérons une entité avec un attribut *birthDate*. Nous souhaitons définir une fonction `age()` qui serait appelée dans une list box. Cette fonction peut être exécutée sur le client, ce qui évite de déclencher une requête au serveur pour chaque ligne de la list box.

Dans la classe *StudentsEntity* :

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null
End if
```

#### Vérification des attributs

Nous souhaitons vérifier la cohérence des attributs d'une entité chargée sur le client et mise à jour par l'utilisateur, avant de demander au serveur de les enregistrer.

Sur la classe *StudentsEntity*, la fonction locale `checkData()` vérifie l'âge de l'étudiant :

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

Code d'appel :

```4d
var $status : Object

//Form.student est chargé avec tous ses a attributs et mis à jour sur un Form
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // appelle le serveur
End if
```



## Prise en charge dans les projets 4D


### Fichiers de classe (class files)

Une classe utilisateur ORDA de modèle de données est définie en ajoutant, au [même emplacement que les fichiers de classe usuels](Concepts/classes.md#class-files) (c'est-à-dire dans le dossier `/Sources/Classes` du dossier projet), un fichier .4dm avec le nom de la classe. Par exemple, une classe d'entité pour la dataclass `Utilities` sera définie via un fichier `UtilitiesEntity.4dm`.


### Créer des classes

4D crée préalablement et automatiquement des classes vides en mémoire pour chaque objet de modèle de données disponible.

![](assets/en/ORDA/ORDA_Classes-3.png)

> Par défaut, les classes ORDA vides ne sont pas affichées dans l'Explorateur. Vous devez les afficher en sélectionnant **Afficher toutes les dataclasses** dans le menu d'options de l'Explorateur : ![](assets/en/ORDA/showClass.png)

Les classes d'utilisateurs ORDA ont une icône différente des autres classes. Les classes vides sont grisées :

![](assets/en/ORDA/classORDA2.png)

Pour créer un fichier de classe ORDA, il vous suffit de double-cliquer sur la classe prédéfinie correspondante dans l'Explorateur. 4D crée le fichier de classe et ajoute le code `extends`. Par exemple, pour une classe Entity :

```
Class extends Entity
```

Une fois qu'une classe est définie, son nom n'est plus grisé dans l'Explorateur.


### Modifier des classes

Pour ouvrir une classe ORDA définie dans l'éditeur de méthode 4D, sélectionnez ou double-cliquez sur un nom de classe ORDA et utilisez **Editer...** dans le menu contextuel/menu d'options de la fenêtre d'Explorateur :

![](assets/en/ORDA/classORDA4.png)

Pour les classes ORDA basées sur le datastore local (`ds`), vous pouvez accéder directement au code de la classe depuis la fenêtre de 4D Structure :

![](assets/en/ORDA/classORDA5.png)


### Éditeur de méthode

Dans l'éditeur de méthode de 4D, les variables saisies comme une classe ORDA bénéficient automatiquement des fonctionnalités d'auto-complétion. Exemple avec une variable de classe Entity :

![](assets/en/ORDA/AutoCompletionEntity.png)

