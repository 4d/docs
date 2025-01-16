---
id: classFunctions
title: Calling class functions
---


You can call [data model class functions](ORDA/ordaClasses.md) defined for the ORDA Data Model and [singleton class functions]($singleton.md) through REST requests, so that you can benefit from the exposed API of the targeted 4D application.

Functions can be called in two ways:

- using **POST requests**, with data parameters passed in the body of the request.
- using **GET requests**, with parameters directly passed in the URL.

POST requests provide a better security level because they avoid running sensitive code through an action as simple as clicking on a link. However, GET requests can be more compliant with user experience, allowing to call functions by entering an URL in a browser (note: the developer must ensure no sensitive action is done in such functions).





## Function calls

The following ORDA and singleton functions can be called in REST:

|Class function|Syntax|
|---|----|
|[datastore class](ORDA/ordaClasses.md#datastore-class)|`/rest/$catalog/DataStoreClassFunction`|
|[dataclass class](ORDA/ordaClasses.md#dataclass-class)|`/rest/\{dataClass\}/DataClassClassFunction`|
|[entitySelection class](ORDA/ordaClasses.md#entityselection-class)|`/rest/\{dataClass\}/EntitySelectionClassFunction`|
||`/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber`|
||`/rest/{dataClass}/EntitySelectionClassFunction/$filter`|
||`/rest/{dataClass}/EntitySelectionClassFunction/$orderby`|
|[entity class](ORDA/ordaClasses.md#entity-class)|`/rest/{dataClass}(key)/EntityClassFunction/`|
|[Singleton class](../Concepts/classes.md#singleton-classes)|`/rest/$singleton/SingletonClass/SingletonClassFunction` (see [$singleton page]($singleton.md))|


:::note

 `/rest/{dataClass}/Function` can be used to call either a dataclass or an entity selection function (`/rest/{dataClass}` returns all entities of the DataClass as an entity selection). The function is searched in the entity selection class first. If not found, it is searched in the dataclass. In other words, if a function with the same name is defined in both the DataClass class and the EntitySelection class, the dataclass class function will never be executed.

:::

Functions are simply called on the appropriate ORDA interface or singleton class, without (). [Parameters](#parameters) are passed either in the body of the POST request (`POST` calls) or in the `params` collection in the URL (`GET` calls).

For example, if you have defined a `getCity()` function in the City dataclass class, you could call it using the following request:

#### POST request

`/rest/City/getCity`

with data in the body of the POST request: `["Aguada"]`

#### GET request

`/rest/City/getCity?$params='["Aguada"]'`

:::note

The `getCity()` function must have been declared with the `onHttpGet` keyword (see [Function configuration](#function-configuration) below). 

:::

In 4D language, this call is equivalent to:

```4d
$city:=ds.City.getCity("Aguada")
```



## Function configuration

### `exposed`

All functions allowed to be called directly from HTTP REST requests (`POST` or `GET`) must be declared with the `exposed` keyword. For example:

```4d
exposed Function getSomeInfo() : 4D.OutgoingMessage
```

See [Exposed vs non-exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) section.


### `onHttpGet`

Functions allowed to be called from HTTP `GET` requests must also be specifically declared with the [`onHttpGet` keyword](../ORDA/ordaClasses.md#onhttpget-keyword). For example:

```4d
//allowing GET requests
exposed onHttpGet Function getSomeInfo() : 4D.OutgoingMessage
```


### Thread-safe

All 4D code called from REST requests **must be thread-safe** if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the [*Use preemptive process* setting value](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) is ignored by the REST Server).



:::info

You can restrict calls to specific ORDA functions by configuring appropriate privileges in the [**roles.json**](../ORDA/privileges.md#rolesjson-file) file.

:::

## Parameters


You can send parameters to functions defined in ORDA user classes or singletons. On the server side, they will be received in the [declared parameters](../Concepts/parameters.md#declaring-parameters) of the class functions.

The following rules apply:

- In functions called through POST requests, parameters must be passed **in the body of the POST request**.
- In functions called through GET requests, parameters must be passed **in the URL with "?$params=" syntax**. 
- Parameters must be enclosed within a collection (JSON format).
- All scalar data types supported in JSON collections can be passed as parameters.
- Entity and entity selection can be passed as parameters. The parameter list must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: `__DATACLASS`, `__ENTITY`, `__ENTITIES`, `__DATASET`.

See [this example](#using-an-entity-to-be-created-on-the-server) and [this example](#receiving-an-entity-selection-as-parameter).


### Scalar value parameter

Scalar value parameter(s) must simply be enclosed in a collection. All JSON data types are supported in parameters, including JSON pointers. Dates can be passed as strings in ISO 8601 date format (e.g. "2020-08-22T22:00:000Z").

For example, with a  dataclass function `getCities()` receiving text parameters:

#### POST request

`/rest/City/getCities`  

**Parameters in body:** ["Aguada","Paris"]

#### GET request

`/rest/City/getCities?$params='["Aguada","Paris"]'`  



### Entity parameter

Entities passed in parameters are referenced on the server through their key (*i.e.* __KEY property). If the key parameter is omitted in a request, a new entity is loaded in memory on the server.
You can also pass values for any attributes of the entity. These values will automatically be used for the entity handled on the server.

> If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server.


|Properties|Type|Description|
|---|---|---|
|Attributes of the entity|mixed|Optional - Values to modify|
|__DATACLASS|Text|Mandatory - Indicates the Dataclass of the entity|
|__ENTITY|Boolean|Mandatory - True to indicate to the server that the parameter is an entity|
|__KEY|mixed (same type as the primary key)|Optional - Primary key of the entity|

- If `__KEY` is not provided, a new entity is created on the server with the given attributes.
- If `__KEY` is provided, the entity corresponding to `__KEY` is loaded on the server with the given attributes

See examples for [creating](#creating-an-entity) or [updating](#updating-an-entity) entities with POST requests.
See an example of [contents downloading using an entity](#using-an-entity-to-download-contents) with a GET request. 

#### Related entity parameter

Same properties as for an [entity parameter](#entity-parameter). In addition, the related entity must exist and is referenced by __KEY containing its primary key.

See examples for [creating](#creating-an-entity-with-a-related-entity) or [updating](#updating-an-entity-with-a-related-entity) entities with related entities.


### Entity selection parameter

The entity selection must have been defined beforehand using [$method=entityset]($method.md#methodentityset).

> If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection.


|Properties|Type|Description|
|---|---|---|
|Attributes of the entity|mixed|Optional - Values to modify|
|__DATASET|Text|Mandatory - entitySetID (UUID) of the entity selection|
|__ENTITIES|Boolean|Mandatory - True to indicate to the server that the parameter is an entity selection|

See example for [receiving an entity selection](#receiving-an-entity-selection-as-parameter) with a POST request.
See example for [getting a list built upon an entity selection](#using-an-entity-selection-to-get-a-list) with a GET request.


## POST request examples

This database is exposed as a remote datastore on localhost (port 8111):

![alt-text](../assets/en/REST/ordastructure.png)

### Using a datastore class function

The US_Cities `DataStore` class provides an API:

```  
// DataStore class

Class extends DataStoreImplementation

exposed Function getName() : Text
    return "US cities and zip codes manager"
```

You can then run this request:  

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### Result

```
{
"result": "US cities and zip codes manager"
}
```

### Using a dataclass class function

The Dataclass class `City` provides an API that returns a city entity from a name passed in parameter:

```
// City class

Class extends DataClass

exposed Function getCity($city : Text ) : cs.CityEntity
	return This.query("name = :1";$city).first()
```

You can then run this request:  

**POST** `127.0.0.1:8111/rest/City/getCity`

Body of the request: ["Aguada"]

#### Result

The result is an entity:
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

### Using an entity class function

The Entity class `CityEntity` provides an API:

```
// CityEntity class

Class extends Entity

exposed Function getPopulation()
    return This.zips.sum("population")
```

You can then run this request:  

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### Result

```
{
    "result": 48814
}
```


### Using an entitySelection class function

The EntitySelection class `CitySelection` provides an API:

```
// CitySelection class

Class extends EntitySelection

exposed Function getPopulation()
    return This.zips.sum("population")
```

You can then run this request:  

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### Result

```
{
    "result": 87256
}
```

### Using an entitySelection class function and an entitySet

The `StudentsSelection` class has a `getAgeAverage` function:

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

Once you have created an entityset, you can run this request:

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### Result

```
{
    "result": 34
}
```

### Using an entitySelection class function and an orderBy

The `StudentsSelection` class has a `getLastSummary` function:

```  
// StudentsSelection Class


Class extends EntitySelection

exposed Function getLastSummary : Text
	var $last : Object

	$last:=This.last()
	return =$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

You can then run this request:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`


#### Result

```
{
    "result": "Wilbert - Bull is ... 21"
}
```



### Using an entity to be created on the server


The Dataclass class `Students` has the function `pushData()` receiving an entity containing data from the client. The `checkData()` method runs some controls. If they are OK, the entity is saved and returned.

```
// Students Class

Class extends DataClass

exposed Function pushData($entity : Object) : Object
	var $status : Object

	$status:=checkData($entity) // $status is an object with a success boolean property

	If ($status.success)
	    $status:=$entity.save()
 	   If ($status.success)
 	       return $entity
  	  End if
	End if

	return $status

```

You run this request:

**POST** `http://127.0.0.1:8044/rest/Students/pushData`

Body of the request:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown"
}]
```

Since no `__KEY` is given, a new Students entity is loaded on the server **with the attributes received from the client**. Because the `pushData()` function runs a `save()` action, the new entity is created.


#### Result

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

### Using an entity to be updated on the server

Same as above but with a __KEY attribute

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Body of the request:
```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"lastname":"Brownie",
"__KEY":55
}]
```

Since `__KEY` is given, the Students entity with primary key 55 is loaded **with the lastname value received from the client**. Because the function runs a `save()` action, the entity is updated.

#### Result

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

### Creating an entity with a related entity

In this example, we create a new Students entity with the Schools entity having primary key 2.

You run this request:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Body of the request:
```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"John",
"lastname":"Smith",
"school":{"__KEY":2}
}]
```

#### Result

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


### Updating an entity with a related entity

In this example, we associate an existing school to a Students entity. The `StudentsEntity` class has an API:

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

You run this request, called on a Students entity :
**POST** `http://127.0.0.1:8044/rest/Students(1)/putToSchool`
Body of the request:
```
[{
"__DATACLASS":"Schools",
"__ENTITY":true,
"__KEY":2
}]
```

#### Result

```
{
    "result": {
        "success": true
    }
}
```


### Receiving an entity selection as parameter

In the `Students` Dataclass class, the `setFinalExam()` function updates a received entity selection ($1). It actually updates the *finalExam* attribute with the received value ($2). It returns the primary keys of the updated entities.

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

      //Loop on the entity selection
    For each ($student;$es)
        $student.finalExam:=$examResult
        $status:=$student.save()
        If ($status.success)
            $keys.push($student.ID)
        End if
    End for each

    $0:=$keys
```

An entity set is first created with this request:   

`http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`

Then you can run this request:

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

Body of the request:

```
[
{
"__ENTITIES":true,
"__DATASET":"9B9C053A111E4A288E9C1E48965FE671"
},
"Passed"
]

```

#### Result

The entities with primary keys 1 and 2 have been updated.

```
{
    "result": [
        1,
        2
    ]
}
```

### Using an entity selection updated on the client

Using the `getAgeAverage()` function [defined above](#using-an-entityselection-class-function-and-an-entityset).  

```4d
var $remoteDS, $newStudent, $students : Object
var $ageAverage : Integer

$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")

// $newStudent is a student entity to procees
$newStudent:=...
$students:=$remoteDS.Students.query("school.name = :1";"Math school")
// We add an entity to the $students entity selection on the client
$students.add($newStudent)

// We call a function on the StudentsSelection class returning the age average of the students in the entity selection
// The function is executed on the server on the updated $students entity selection which included the student added from the client
$ageAverage:=$students.getAgeAverage()
```


## GET request examples

### Returning a document

You want to propose a link to download the user manual for a selected product with several formats available. You write a `getUserManual()` function of the Products dataclass. You return an object of the [`OutgoingMessage` class](../API/OutgoingMessageClass.md). 

```4d
// Product dataclass
exposed onHTTPGet Function getUserManual($productId : Integer; $type : Text) : 4D.OutgoingMessage
	
var $file : 4D.File
var $response:=4D.OutgoingMessage.new()
var $doc:="/RESOURCES/User manuals/product_"+String($productId)

Case of 
	: ($type="pdf")
		$file:=File($doc+".pdf")
                $response.setBody($file.getContent()) // This is binary content 
		$response.setHeader("Content-Type"; "application/pdf")
			
	: ($type="jpeg")
		$file:=File($doc+".jpeg")
                $response.setBody($file.getContent()) // This is binary content 
		$response.setHeader("Content-Type"; "image/jpeg")
End case 
	
return $response

```

You can call the function using a request like:

**GET** `http://127.0.0.1:8044/rest/Products/getUserManual?$params='[1,"pdf"]'`


### Using an entity to download a PDF document 

Same example as above but you want to pass an entity as parameter to the datastore function. 

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

You can call the function using this request:

**GET** `http://127.0.0.1:8044/rest/Product/getUserManual?$params='[{"__DATACLASS":"Product","__ENTITY":true,"__KEY":41}]'`


### Using an entity selection to get a list

You want to send an entity selection as parameter to a singleton function using a REST GET request and return a list using an object of the [`OutgoingMessage` class](../API/OutgoingMessageClass.md). 

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

You can call the function using this request:

**GET** `http://127.0.0.1:8044/rest/$singleton/Shopping/buildShoppingList?$params='[{"__DATASET":"8DB0556854HDK52FR5974F","__ENTITIES":true}]'`