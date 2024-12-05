---
id: classFunctions
title: Appeler des fonctions de classe ORDA
---


Vous pouvez appeler les [fonctions de classe](ORDA/ordaClasses.md) définies pour le modèle de données ORDA via vos requêtes REST, afin de bénéficier de l'API de l'application 4D ciblée.

Les fonctions sont simplement appelées dans des requêtes POST sur l'interface ORDA appropriée, sans (). Par exemple, si vous avez défini une fonction `getCity()` dans la dataclass City, vous pouvez l'appeler à l'aide de la requête suivante :

`/rest/City/getCity`

avec des données contenues dans le corps de la requête POST : `["Aguada"]`

Dans le langage 4D, cet appel équivaut à :

```4d
$city:=ds.City.getCity("Aguada")
```

> Seules les fonctions contenant le mot-clé `exposed` peuvent être directement appelées à partir de requêtes REST. Voir la section [Fonctions exposées vs non exposées](ORDA/ordaClasses.md#exposed-vs-non-exposed-functions).

## Appeler des fonctions

Les fonctions doivent toujours être appelées à l'aide des requêtes **POST** (une requête GET recevra une erreur).

Les fonctions sont appelées sur l'objet correspondant au datastore du serveur.

| Fonction de classe                                                 | Syntaxe                                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| [datastore class](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/DataStoreClassFunction`                                         |
| [dataclass class](ORDA/ordaClasses.md#dataclass-class)             | `/rest/\{dataClass\}/DataClassClassFunction`                                  |
| [entitySelection class](ORDA/ordaClasses.md#entityselection-class) | `/rest/\{dataClass\}/EntitySelectionClassFunction`                            |
|                                                                    | `/rest/\{dataClass\}/EntitySelectionClassFunction/$entityset/entitySetNumber` |
|                                                                    | `/rest/\{dataClass\}/EntitySelectionClassFunction/$filter`                    |
|                                                                    | `/rest/\{dataClass\}/EntitySelectionClassFunction/$orderby`                   |
| [entity class](ORDA/ordaClasses.md#entity-class)                   | `/rest/\{dataClass\}(key)/EntityClassFunction/`                               |

> `/rest/\{dataClass\}/Function` can be used to call either a dataclass or an entity selection function (`/rest/\{dataClass\}` returns all entities of the DataClass as an entity selection). The function is searched in the entity selection class first. Si elle n'est pas trouvée, elle est recherchée dans la dataclass. En d'autres termes, si une fonction portant le même nom est définie à la fois dans la classe DataClass et la classe EntitySelection, la fonction de classe de dataclass ne sera jamais exécutée.

> Tout le code 4D appelé à partir de requêtes REST **doit être thread-safe** si le projet fonctionne en mode compilé, car le serveur REST utilise toujours des process préemptifs dans ce cas (la valeur du paramètre [*Utiliser un process préemptif*](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) est ignorée par le serveur REST).

## Paramètres

Vous pouvez envoyer des paramètres aux fonctions définies dans les classes utilisateurs ORDA. Côté serveur, ils seront reçus dans les fonctions de classe dans les paramètres normaux $1, $2, etc.

Les règles suivantes s'appliquent :

- Les paramètres doivent être passés dans le **corps de la requête POST**
- Les paramètres doivent être inclus dans une collection (format JSON)
- Tous les types de données scalaires pris en charge dans les collections JSON peuvent être passés en tant que paramètres.
- L'entity selection et l'entité peuvent être passées en tant que paramètres. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: __DATACLASS,__ENTITY, __ENTITIES,__DATASET.

Voir [cet exemple](#request-receiving-an-entity-as-parameter) et [cet exemple](#request-receiving-an-entity-selection-as-parameter).

### Paramètre de valeur scalaire

Le(s) paramètre(s) doivent simplement être incluse dans une collection définie dans le corps. For example, with a  dataclass function `getCities()` receiving text parameters: `/rest/City/getCities`

**Paramètres dans le body :** ["Aguada","Paris"]

Tous les types de données JSON sont pris en charge dans les paramètres, y compris les pointeurs JSON. Les dates peuvent être passées sous forme de chaînes au format de date ISO 8601 (par exemple, "2020-08-22T22:00:000Z").

### Paramètre d'entité

Les entités passées en paramètres sont référencées sur le serveur via leur clé (c'est-à-dire la propriété __KEY). Si le paramètre clé est omis dans une requête, une nouvelle entité est chargée en mémoire du serveur. Vous pouvez également transmettre des valeurs pour tous les attributs de l'entité. Ces valeurs seront automatiquement utilisées pour l'entité traitée sur le serveur.

> Si la requête envoie des valeurs d'attribut modifiées pour une entité existante sur le serveur, la fonction de modèle de données ORDA appelée sera automatiquement exécutée sur le serveur avec des valeurs modifiées. Cette fonctionnalité vous permet, par exemple, de vérifier le résultat d'une opération sur une entité, après avoir appliqué toutes les règles métier, depuis l'application cliente. Vous pouvez alors décider de sauvegarder ou non l'entité sur le serveur.

| Propriétés            | Type                                              | Description                                                                 |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------- |
| Attributs de l'entité | mixte                                             | Optionnelle - Valeurs à modifier                                            |
| __DATACLASS           | Text                                              | Obligatoire - Indique la Dataclass de l'entité                              |
| __ENTITY              | Boolean                                           | Obligatoire - Vrai pour indiquer au serveur que le paramètre est une entité |
| __KEY                 | mixte (type identique à celui de la clé primaire) | Optionnel - clé primaire de l'entité                                        |

- Si __KEY n'est pas fourni, une nouvelle entité est créée sur le serveur avec les attributs donnés.
- If __KEY is provided, the entity corresponding to__KEY is loaded on the server with the given attributes

Voir les exemple de [création](#creating-an-entity) ou de [mise à jour](#updating-an-entity) des entités.

#### Paramètre d'entité associé

Mêmes propriétés que pour un [paramètre d'entité](#entity-parameter). De plus, l'entité associée doit exister et est référencée par __KEY, qui contient sa clé primaire.

Reportez-vous aux exemples de [création](#creating-an-entity-with-a-related-entity) ou de [mise à jour](#updating-an-entity-with-a-related-entity) des entités avec des entités associées.

### Paramètre d'entity selection

L'entity selection doit avoir été définie au préalable à l'aide de [$method=entityset]($method.md#methodentityset).

> Si la requête envoie une entity selection modifiée au serveur, la fonction de modèle de données ORDA appelée sera automatiquement exécutée sur le serveur avec l'entity selection modifiée.

| Propriétés            | Type    | Description                                                                             |
| --------------------- | ------- | --------------------------------------------------------------------------------------- |
| Attributs de l'entité | mixte   | Optionnelle - Valeurs à modifier                                                        |
| __DATASET             | Text    | Obligatoire - entitySetID (UUID) de la sélection d'entité                               |
| __ENTITIES            | Boolean | Obligatoire - Vrai pour indiquer au serveur que le paramètre est une sélection d'entité |

Reportez-vous aux exemples de [réception d'une sélection d'entité](#receiving-an-entity-selection-as-parameter).

## Exemples de requêtes

Cette base de données est exposée comme un datastore distant sur localhost (port 8111) :

![alt-text](../assets/en/REST/ordastructure.png)

### Utiliser une fonction de classe de datastore

La classe de `DataStore` US_Cities fournit une API :

```  
// DataStore class

Class extends DataStoreImplementation

exposed Function getName()
    $0:="US cities and zip codes manager" 
```

Vous pouvez lancer cette requête :

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### Résultat

```
{
"result": "US cities and zip codes manager" 
}
```

### Utiliser une fonction de classe de dataclass

La classe de Dataclass `City` fournit une API qui retourne une entité de ville à partir du nom passé en paramètre :

```
// City class

Class extends DataClass

exposed Function getCity()
 var $0 : cs.CityEntity
 var $1,$nameParam : text
 $nameParam:=$1
 $0:=This.query("name = :1";$nameParam).first()
```

Vous pouvez lancer cette requête :

**POST** `127.0.0.1:8111/rest/City/getCity`

Requête : ["Paris"]

#### Résultat

Le résultat est une entité :

```
{
    "__entityModel": "City",
    "__DATACLASS": "City",
    "__KEY": "1",
    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",
    "__STAMP": 1,
    "ID": 1,
    "name": "Paris",
    "countyFIPS": 72003,
    "county": {
        "__deferred": {
            "uri": "/rest/County(72003)",
            "__KEY": "72003" 
        }
    },
    "zips": {
        "__deferred": {
            "uri": "/rest/City(1)/zips?$expand=zips" 
        }
    }
}
```

### Utiliser une fonction de classe d'entité

La classe d'entité `CityEntity` fournit une API :

```
// CityEntity class

Class extends Entity

exposed Function getPopulation()
    $0:=This.zips.sum("population")
```

Vous pouvez lancer cette requête :

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### Résultat

```
{
    "result": 48814
}
```

### Utiliser une fonction de classe d'entity selection

La classe d'entity selection `CityEntity` fournit une API :

```
// CitySelection class

Class extends EntitySelection

exposed Function getPopulation()
    $0:=This.zips.sum("population")
```

Vous pouvez lancer cette requête :

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### Résultat

```
{
    "result": 87256
}
```

### Utiliser une fonction de classe d'entity selection et un entity set

La classe `StudentsSelection` a une fonction `getAgeAverage` :

```  
// StudentsSelection Class

Class extends EntitySelection

exposed Function getAgeAverage
 C_LONGINT($sum;$0)
 C_OBJECT($s)

 $sum:=0
 For each ($s;This)
     $sum:=$sum+$s.age()
 End for each 
 $0:=$sum/This.length
```

Une fois que vous avez créé un ensemble d'entité, vous pouvez lancer cette requête :

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### Résultat

```
{
    "result": 34
}
```

### Utiliser une fonction de classe d'entity selection et un "orderBy"

La classe `StudentsSelection` a une fonction `getLastSummary` :

```  
// StudentsSelection Class


Class extends EntitySelection

exposed Function getLastSummary
 C_TEXT($0)
 C_OBJECT($last)

 $last:=This.last()
 $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

Vous pouvez lancer cette requête :

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`

#### Résultat

```
{
    "result": "Wilbert - Bull is ... 21" 
}
```

### Utiliser une entité à créer sur le serveur

La classe de Dataclass `Students` possède la fonction `pushData()` qui reçoit une entité contenant les données du client. La méthode `checkData()` effectue quelques contrôles. Si elles sont valides, l'entité est sauvegardée et retournée.

```
// Students Class

Class extends DataClass

exposed Function pushData
 var $1, $entity, $status, $0 : Object

 $entity:=$1

 $status:=checkData($entity) // $status is an object with a success boolean property

 $0:=$status

 If ($status.success)
     $status:=$entity.save()
     If ($status.success)
         $0:=$entity
     End if 
 End if

```

Lancez cette requête :

**POST** `http://127.0.0.1:8044/rest/Students/pushData`

Body de la requête :

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown" 
}]
```

Si aucune `__KEY` n'est donnée, une nouvelle entité Students est chargée sur le serveur **avec les attributs du client**. Parce que la fonction `pushData()` exécute une action `save()`, la nouvelle entité est créée.

#### Résultat

```
{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "55",
    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",
    "__STAMP": 1,
    "ID": 55,
    "firstname": "Ann",
    "lastname": "BROWN",
    "schoolID": null,
    "school": null
}
```

### Utiliser une entité à mettre à jour sur le serveur

Description semblable à la précédente, avec l'attribut _KEY

Lancez cette requête :

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Body de la requête :

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"lastname":"Brownie",
"__KEY":55
}]
```

Si aucune `__KEY` n'est donnée, l'entité Students est chargée avec la clé primaire 55 **avec la valeur lastname reçue par le client**. Parce que la fonction exécute une action `save()`, la nouvelle entité est mise à jour.

#### Résultat

```
{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "55",
    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",
    "__STAMP": 3,
    "ID": 55,
    "firstname": "Ann",
    "lastname": "BROWNIE",
    "schoolID": null,
    "school": null 
}
```

### Créer une entité avec une entité liée

Dans cet exemple, nous créons une nouvelle entité Students avec l'entité Schools ayant la clé primaire 2.

Lancez cette requête :

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Body de la requête :

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"John",
"lastname":"Smith",
"school":{"__KEY":2}
}]
```

#### Résultat

```
{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "56",
    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",
    "__STAMP": 1,
    "ID": 56,
    "firstname": "John",
    "lastname": "SMITH",
    "schoolID": 2,
       "school": {
        "__deferred": {
            "uri": "/rest/Schools(2)",
            "__KEY": "2" 
        }
    }
}
```

### Mettre à jour une entité avec une entité liée

Dans cet exemple, nous associons une école existante à l'entité Students. La classe `StudentsEntity` possède une API :

```
// StudentsEntity class

Class extends Entity

exposed Function putToSchool()
 var $1, $school , $0, $status : Object

  //$1 is a Schools entity
 $school:=$1
  //Associate the related entity school to the current Students entity
 This.school:=$school

 $status:=This.save()

 $0:=$status
```

You run this request, called on a Students entity : **POST** `http://127.0.0.1:8044/rest/Students(1)/putToSchool` Body of the request:

```
[{
"__DATACLASS":"Schools",
"__ENTITY":true,
"__KEY":2
}]
```

#### Résultat

```
{
    "result": {
        "success": true
    }
}
```

### Recevoir une entity selection comme paramètre

Dans la classe de Dataclass `Students`, la fonction `setFinalExam()` met à jour une sélection d'entité reçue ($1). Elle met à jour l'attribut *finalExam* avec la valeur reçue ($2). Elle retourne les clés primaires des entités mises à jour.

```
// Students class

Class extends DataClass

exposed Function setFinalExam()

    var $1, $es, $student, $status : Object
    var $2, $examResult : Text

    var $keys, $0 : Collection

      //Entity selection
    $es:=$1

    $examResult:=$2

    $keys:=New collection()

      //Boucle sur la sélection d'entité
    For each ($student;$es)
        $student.finalExam:=$examResult
        $status:=$student.save()
        If ($status.success)
            $keys.push($student.ID)
        End if 
    End for each 

    $0:=$keys
```

Un ensemble d'entité est d'abord créé avec cette requête :

`http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`

Vous pouvez ensuite exécuter cette requête :

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

Body de la requête :

```
[
{
"__ENTITIES":true,
"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" 
},
"Passed" 
]

```

#### Résultat

Les entités ayant les clés primaires sont 1 et 2 ont été mises à jour.

```
{
    "result": [
        1,
        2
    ]
}
```

### Utiliser une entity selection mise à jour sur le client

A l'aide de la fonction `getAgeAverage()` [définie ci-dessus](#using-an-entityselection-class-function-and-an-entityset).

```4d
var $remoteDS, $newStudent, $students : Object
var $ageAverage : Integer

$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")

// $newStudent est une entité "student" à traiter
$newStudent:=...
$students:=$remoteDS.Students.query("school.name = :1";"Math school")
// Nous avons ajouté une entité à la sélection d'entité $students sur le client
$students.add($newStudent) 

// Nous appelons une fonction sur la classe StudentsSelection qui retourne l'âge moyen des étudiants de la sélection d'entité
// La fonction est utilisée sur le serveur sur la sélection d'entité $students mise à jour, qui inclut l'étudiant ajouté par le client
$ageAverage:=$students.getAgeAverage()
```
