---
id: classFunctions
title: Appel des fonctions de classe
---

Vous pouvez appeler les [fonctions de classe du modèle de données](ORDA/ordaClasses.md) définies pour le modèle de données ORDA et les [fonctions de classe de singleton]($singleton.md) par le biais de requêtes REST, afin de bénéficier de l'API exposée de l'application 4D ciblée.

Les fonctions peuvent être appelées de deux manières :

- en utilisant des requêtes **POST**, avec des paramètres de données transmis dans le body de la requête.
- en utilisant des requêtes **GET**, avec des paramètres passés directement dans l'URL.

Les requêtes POST offrent un meilleur niveau de sécurité car elles évitent l'exécution de code sensible par une action aussi simple que de cliquer sur un lien. Cependant, les requêtes GET peuvent être plus conformes à l'expérience utilisateur, en permettant d'appeler des fonctions en saisissant un URL dans un navigateur (note : le développeur doit s'assurer qu'aucune action sensible n'est effectuée dans ces fonctions).

## Appeler des fonctions

Les fonctions ORDA et singleton suivantes peuvent être appelées en REST :

| Fonction de classe                                                 | Syntaxe                                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| [datastore class](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/DataStoreClassFunction`                                                                             |
| [dataclass class](ORDA/ordaClasses.md#dataclass-class)             | `/rest/{dataClass}/DataClassClassFunction`                                                                          |
| [entitySelection class](ORDA/ordaClasses.md#entityselection-class) | `/rest/{dataClass}/EntitySelectionClassFunction`                                                                    |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber`                                         |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$filter`                                                            |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$orderby`                                                           |
| [entity class](ORDA/ordaClasses.md#entity-class)                   | `/rest/{dataClass}(key)/EntityClassFunction/`                                                                       |
| [Classe singleton](../Concepts/classes.md#classes-singleton)       | `/rest/$singleton/SingletonClass/SingletonClassFunction` (voir [page $singleton]($singleton.md)) |

:::note

`/rest/{dataClass}/Function` peut être utilisé pour appeler une fonction de dataclass ou d'entity selection (`/rest/{dataClass}` renvoie toutes les entités de la dataclass en tant qu'entity selection). La fonction est d'abord recherchée dans la classe Entity selection. Si elle n'est pas trouvée, elle est recherchée dans la dataclass. En d'autres termes, si une fonction portant le même nom est définie à la fois dans la classe DataClass et la classe EntitySelection, la fonction de classe de dataclass ne sera jamais exécutée.

:::

Les fonctions sont simplement appelées sur l'interface ORDA ou la classe singleton appropriée, sans (). Les [Parameters](#parameters) sont passés soit dans le body de la requête POST (appels `POST`), soit dans la collection `params` de l'URL (appels `GET`).

Par exemple, si vous avez défini une fonction `getCity()` dans la dataclass City, vous pouvez l'appeler à l'aide de la requête suivante :

#### Requête POST

`/rest/City/getCity`

avec des données contenues dans le body de la requête POST : `["Aguada"]`

#### Requête GET

`/rest/City/getCity?$params='["Aguada"]'`

:::note

La fonction `getCity()` doit avoir été déclarée avec le mot-clé `onHTTPGet` (voir [Configuration des fonctions](#function-configuration) ci-dessous).

:::

En langage 4D, cet appel est équivalent à :

```4d
$city:=ds.City.getCity("Aguada")
```

## Configuration des fonctions

### `exposed`

Toutes les fonctions autorisées à être appelées directement depuis des requêtes HTTP REST (`POST` ou `GET`) doivent être déclarées avec le mot-clé `exposed`. Par exemple :

```4d
exposed Function getSomeInfo() : 4D.OutgoingMessage
```

Voir la section [Fonctions exposées vs non exposées](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions).

### `onHTTPGet`

Les fonctions autorisées à être appelées à partir de requêtes HTTP `GET` doivent également être spécifiquement déclarées avec le [mot-clé `onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword). Par exemple :

```4d
//autoriser les requêtes GET
exposed onHTTPGet Function getSomeInfo() : 4D.OutgoingMessage
```

### Thread-safe

L'ensemble du code 4D appelé à partir de requêtes REST **doit être thread-safe** si le projet fonctionne en mode compilé, car le serveur REST utilise toujours des process préemptifs dans ce cas (la valeur du paramètre [*Use preemptive process*](../WebServer/webServerConfig.md#use-preemptive-processes) est ignorée par le serveur REST).

:::info

Vous pouvez restreindre les appels à des fonctions ORDA spécifiques en configurant les privilèges appropriés dans le fichier [**roles.json**](../ORDA/privileges.md#rolesjson-file).

:::

## Paramètres

Vous pouvez envoyer des paramètres à des fonctions de classes utilisateur ou des singletons ORDA. Côté serveur, ils seront reçus dans les [paramètres déclarés](../Concepts/parameters.md#declaration-des-parametres) des fonctions de classe.

Les règles suivantes s'appliquent :

- Dans les fonctions appelées par des requêtes POST, les paramètres doivent être passés **dans le body de la requête POST**.
- Dans les fonctions appelées par des requêtes GET, les paramètres doivent être passés **dans l'URL avec la syntaxe " ?$params="**.
- Les paramètres doivent être inclus dans une collection (format JSON).
- Tous les types de données scalaires pris en charge dans les collections JSON peuvent être passés en tant que paramètres.
- L'entity selection et l'entité peuvent être passées en tant que paramètres. La liste des paramètres doit contenir les attributs spécifiques utilisés par le serveur REST pour assigner les données aux objets ORDA correspondants : `__DATACLASS`, `__ENTITY`, `__ENTITIES`, `__DATASET`.

Voir [cet exemple](#using-an-entity-to-be-created-on-the-server) et [cet exemple](#receiving-an-entity-selection-as-parameter).

### Paramètre de valeur scalaire

Le(s) paramètre(s) de valeur scalaire doit(vent) simplement être inclus dans une collection. Tous les types de données JSON sont pris en charge dans les paramètres, y compris les pointeurs JSON. Les dates peuvent être passées sous forme de chaînes au format de date ISO 8601 (par exemple, "2020-08-22T22:00:000Z").

Par exemple, avec une fonction de la dataclass `getCities()` recevant des paramètres texte :

#### Requête POST

`/rest/City/getCities`

**Paramètres dans le body :** ["Aguada","Paris"]

#### Requête GET

`/rest/City/getCities?$params='["Aguada","Paris"]'`

### Paramètres des entités

Les entités passées en paramètres sont référencées sur le serveur via leur clé (c'est-à-dire la propriété __KEY). Si le paramètre clé est omis dans une requête, une nouvelle entité est chargée en mémoire sur le serveur.
Vous pouvez également transmettre des valeurs pour tous les attributs de l'entité. Ces valeurs seront automatiquement utilisées pour l'entité traitée sur le serveur.

> Si la requête envoie des valeurs d'attribut modifiées pour une entité existante sur le serveur, la fonction de modèle de données ORDA appelée sera automatiquement exécutée sur le serveur avec des valeurs modifiées. Cette fonctionnalité vous permet, par exemple, de vérifier le résultat d'une opération sur une entité, après avoir appliqué toutes les règles métier, depuis l'application cliente. Vous pouvez alors décider de sauvegarder ou non l'entité sur le serveur.

| Propriétés                                            | Type                                                                 | Description                                                                 |
| ----------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Attributs de l'entité                                 | mixte                                                                | Optionnelle - Valeurs à modifier                                            |
| __DATACLASS | Text                                                                 | Obligatoire - Indique la Dataclass de l'entité                              |
| __ENTITY    | Boolean                                                              | Obligatoire - Vrai pour indiquer au serveur que le paramètre est une entité |
| __KEY       | mixte (type identique à celui de la clé primaire) | Optionnel - clé primaire de l'entité                                        |

- Si `__KEY` n'est pas fourni, une nouvelle entité est créée sur le serveur avec les attributs donnés.
- Si `__KEY` est fourni, l'entité correspondant à `__KEY` est chargée sur le serveur avec les attributs donnés

Voir les exemples ci-dessous pour la création ou la mise à jour d'entités avec des requêtes POST.
Voir un exemple de téléchargement de contenu à l'aide d'une entité avec une requête GET.

#### Paramètre d'entité associé

Mêmes propriétés que pour un [paramètre d'entité](#entity-parameter). De plus, l'entité associée doit exister et est référencée par __KEY, qui contient sa clé primaire.

Reportez-vous aux exemples de [création](#creating-an-entity-with-a-related-entity) ou de [mise à jour](#updating-an-entity-with-a-related-entity) des entités avec des entités associées.

### Paramètre d'entity selection

L'entity selection doit avoir été définie au préalable à l'aide de [$method=entityset]($method.md#methodentityset).

> Si la requête envoie une entity selection modifiée au serveur, la fonction de modèle de données ORDA appelée sera automatiquement exécutée sur le serveur avec l'entity selection modifiée.

| Propriétés                                           | Type    | Description                                                                             |
| ---------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| Attributs de l'entité                                | mixte   | Optionnelle - Valeurs à modifier                                                        |
| __DATASET  | Text    | Obligatoire - entitySetID (UUID) de l'entity selection               |
| __ENTITIES | Boolean | Obligatoire - Vrai pour indiquer au serveur que le paramètre est une sélection d'entité |

Voir l'exemple pour [recevoir une entity selection](#receiving-an-entity-selection-as-parameter) avec une requête POST.
Voir l'exemple pour [obtenir une liste construite sur la base d'une entity selection](#using-an-entity-selection-to-get-a-list) avec une requête GET.

## Exemples de requêtes POST

Cette base de données est exposée comme un datastore distant sur localhost (port 8111) :

![alt-text](../assets/en/REST/ordastructure.png)

### Utiliser une fonction de classe de datastore

La classe de `DataStore` US_Cities fournit une API :

```
// DataStore class

Class extends DataStoreImplementation

exposed Function getName() : Text
    return "US cities and zip codes manager"
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

exposed Function getCity($city : Text ) : cs.CityEntity
	return This.query("name = :1";$city).first()
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
    "name": "Aguada",
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
    return This.zips.sum("population")
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
    return This.zips.sum("population")
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

exposed Function getAgeAverage : Integer
	var $sum : Integer
	var $s : Object

	$sum:=0
	For each ($s;This)
	    $sum:=$sum+$s.age()
	End for each
	return $sum/This.length
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

exposed Function getLastSummary : Text
	var $last : Object

	$last:=This.last()
	return =$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
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

exposed Function pushData($entity : Object) : Object
	var $status : Object

	$status:=checkData($entity) // $status est un objet avec une propriété booléenne success

	If ($status.success)
	    $status:=$entity.save()
 	   If ($status.success)
 	       return $entity
  	  End if
	End if

	return $status

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

exposed Function putToSchool($school : Object) -> $status : Object

		//$school est une entité Schools
		//Associer l'entité liée School à l'entité Students courante
	This.school:=$school

	$status:=This.save()
```

Vous exécutez cette requête, appelée sur une entité Students :
**POST** `http://127.0.0.1:8044/rest/Students(1)/putToSchool`
Body de la requête :

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

exposed Function setFinalExam($es : Object ; $examResult : Text) -> $keys : Collection


    var $student, $status : Object

      //$es est une Entity selection

    $keys:=New collection()

      //Loop on the entity selection
    For each ($student;$es)
        $student.finalExam:=$examResult
        $status:=$student.save()
        If ($status.success)
            $keys.push($student.ID)
        End if
    End for each
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

$remoteDS:=Open datastore(New object("hostname" ; "127.0.0.1:8044") ; "students")

// $newStudent est une entité étudiant à traiter
$newStudent:=...
$students:=$remoteDS.Students.query("school.name = :1" ; "Math school")
// Nous ajoutons une entité à l'entity selection $students sur le client
$students.add($newStudent)

// Nous appelons une fonction de la classe StudentsSelection qui renvoie la moyenne d'âge des étudiants de l'entity selection
// La fonction est exécutée sur le serveur dans l'entity selection $students mise à jour qui comprend l'étudiant ajouté par le client
$ageAverage:=$students.getAgeAverage()
```

## Exemples de requêtes GET

### Renvoyer un document

Vous souhaitez proposer un lien pour télécharger le manuel d'utilisation d'un produit sélectionné avec plusieurs formats disponibles. Vous écrivez une fonction `getUserManual()` de la dataclass Products. Vous renvoyez un objet de la classe [`OutgoingMessage`](../API/OutgoingMessageClass.md).

```4d
// Product dataclass
exposed onHTTPGet Function getUserManual($productId : Integer; $type : Text) : 4D.OutgoingMessage
	
var $file : 4D.File
var $response:=4D.OutgoingMessage.new()
var $doc:="/RESOURCES/User manuals/product_"+String($productId)

Case of 
	: ($type="pdf")
		$file:=File($doc+".pdf")
                $response.setBody($file.getContent()) // Contenu binaire 
		$response.setHeader("Content-Type"; "application/pdf")
			
	: ($type="jpeg")
		$file:=File($doc+".jpeg")
                $response.setBody($file.getContent()) // Contenu binaire 
		$response.setHeader("Content-Type"; "image/jpeg")
End case 
	
return $response

```

Vous pouvez appeler la fonction en utilisant une requête comme :

**GET** `http://127.0.0.1:8044/rest/Products/getUserManual?$params='[1,"pdf"]'`

### Utilisation d'une entité pour télécharger un document PDF

Même exemple que ci-dessus, mais vous voulez passer une entité comme paramètre à la fonction datastore.

```4d
// Product dataclass
exposed onHTTPGet Function getUserManual($product : cs.ProductEntity) : 4D.OutgoingMessage
	
	var $file : 4D.File
	var $response := 4D.OutgoingMessage.new()
	
	$file:=File("/RESOURCES/User manuals/"+$product.name+".pdf")
	$response.setBody($file.getContent())
	$response.setHeader("Content-Type"; "application/pdf")
	
	return $response
```

Vous pouvez appeler la fonction en utilisant cette requête :

**GET** `http://127.0.0.1:8044/rest/Product/getUserManual?$params='[{"__DATACLASS":"Product","__ENTITY":true,"__KEY":41}]'`

### Utiliser une entity selection pour obtenir une liste

Vous voulez envoyer une entity selection comme paramètre à une fonction singleton en utilisant une requête REST GET et retourner une liste en utilisant un objet de la classe [`OutgoingMessage`](../API/OutgoingMessageClass.md).

```4d
shared singleton Class constructor()
	
exposed onHTTPGet Function buildShoppingList($products : cs.ProductSelection) : 4D.OutgoingMessage
	
	var $p : cs.ProductsEntity
	var $content : Text
	var $response := 4D.OutgoingMessage.new()
	
	$content:=""
	
	For each ($p; $products)
		$content:=$content+" "+$p.manufacturer+" - "+$p.name
		$content:=$content+Char(Carriage return)
	End for each 
	
	$response.setBody($content)
	$response.setHeader("Content-Type"; "text/plain")
	
	return $response
```

Vous pouvez appeler la fonction en utilisant cette requête :

**GET** `http://127.0.0.1:8044/rest/$singleton/Shopping/buildShoppingList?$params='[{"__DATASET":"8DB0556854HDK52FR5974F","__ENTITIES":true}]'`