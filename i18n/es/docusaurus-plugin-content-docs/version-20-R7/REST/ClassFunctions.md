---
id: classFunctions
title: Llamando a funciones de clase
---

You can call [data model class functions](ORDA/ordaClasses.md) defined for the ORDA Data Model and [singleton class functions]($singleton.md) through REST requests, so that you can benefit from the exposed API of the targeted 4D application.

Functions can be called in two ways:

- using **POST requests**, with data parameters passed in the body of the request.
- using **GET requests**, with parameters directly passed in the URL.

POST requests provide a better security level because they avoid running sensitive code through an action as simple as clicking on a link. However, GET requests can be more compliant with user experience, allowing to call functions by entering an URL in a browser (note: the developer must ensure no sensitive action is done in such functions).

## Llamadas de las funciones

The following ORDA and singleton functions can be called in REST:

| Función de clase                                                   | Sintaxis                                                                                                                |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| [datastore class](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/DataStoreClassFunction`                                                                                 |
| [dataclass class](ORDA/ordaClasses.md#dataclass-class)             | `/rest/\{dataClass\}/DataClassClassFunction`                                                                          |
| [entitySelection class](ORDA/ordaClasses.md#entityselection-class) | `/rest/\{dataClass\}/EntitySelectionClassFunction`                                                                    |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber`                                             |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$filter`                                                                |
|                                                                    | `/rest/{dataClass}/EntitySelectionClassFunction/$orderby`                                                               |
| [entity class](ORDA/ordaClasses.md#entity-class)                   | `/rest/{dataClass}(key)/EntityClassFunction/`                                                                           |
| [Clase Singleton](../Concepts/classes.md#singleton-classes)        | `/rest/$singleton/SingletonClass/SingletonClassFunction` (ver la [página $singleton]($singleton.md)) |

:::note

`/rest/{dataClass}/Function` can be used to call either a dataclass or an entity selection function (`/rest/{dataClass}` returns all entities of the DataClass as an entity selection). La función se busca primero en la clase de selección de entidades. Si no se encuentra, se busca en la dataclass. En otras palabras, si una función con el mismo nombre se define tanto en la clase DataClass como en la clase EntitySelection, la función de clase de DataClass nunca se ejecutará.

:::

Functions are simply called on the appropriate ORDA interface or singleton class, without (). [Parámetros](#parameters) se pasan en el cuerpo de la petición POST (llamadas `POST`) o en la colección `params` de la URL (llamadas `GET`).

Por ejemplo, si ha definido una función `getCity()` en la dataclass City, podría llamarla utilizando la siguiente petición:

#### POST request

`/rest/City/getCity`

con los datos en el cuerpo de la petición POST: `["Aguada"]`

#### GET request

`/rest/City/getCity?$params='["Aguada"]'`

:::note

La función `getCity()` debe haber sido declarada con la palabra clave `onHttpGet` (ver [Configuración de la función](#function-configuration)).

:::

En el lenguaje 4D, esta llamada equivale a:

```4d
$city:=ds.City.getCity("Aguada")
```

## Function configuration

### `exposed`

All functions allowed to be called directly from HTTP REST requests (`POST` or `GET`) must be declared with the `exposed` keyword. Por ejemplo:

```4d
exposed Function getSomeInfo() : 4D.OutgoingMessage
```

Ver la sección [Funciones expuestas vs. no expuestas](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions).

### `onHttpGet`

Functions allowed to be called from HTTP `GET` requests must also be specifically declared with the [`onHttpGet` keyword](../ORDA/ordaClasses.md#onhttpget-keyword). Por ejemplo:

```4d
//allowing GET requests
exposed onHttpGet Function getSomeInfo() : 4D.OutgoingMessage
```

### Hilo seguro

Todo el código 4D llamado desde las peticiones REST **debe ser hilo seguro** si el proyecto se ejecuta en modo compilado, porque el Servidor REST siempre utiliza procesos apropiativos en este caso (el valor de la propiedad [*Utilizar proceso apropiativo*](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) es ignorado por el Servidor REST).

:::info

Puede restringir las llamadas a funciones ORDA específicas configurando los privilegios apropiados en el archivo [**roles.json**](../ORDA/privileges.md#rolesjson-file).

:::

## Parámetros

You can send parameters to functions defined in ORDA user classes or singletons. Del lado del servidor, serán recibidos en los [parámetros declarados](../Concepts/parameters.md#declaring-parameters) de las funciones clase.

Se aplican las siguientes reglas:

- In functions called through POST requests, parameters must be passed **in the body of the POST request**.
- In functions called through GET requests, parameters must be passed **in the URL with "?$params=" syntax**.
- Parameters must be enclosed within a collection (JSON format).
- Todos los tipos de datos escalares soportados en las colecciones JSON pueden ser pasados como parámetros.
- La selección de entidades y la entidad se pueden pasar como parámetros. The parameter list must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: `__DATACLASS`, `__ENTITY`, `__ENTITIES`, `__DATASET`.

Ver [este ejemplo](#usando-una-entidad-que-se-creará-en-el-servidor) y [este ejemplo](#recibiendo-una-selección-de-entidades-como-parámetro).

### Parámetro de valor escalar

Scalar value parameter(s) must simply be enclosed in a collection. Todos los tipos de datos JSON son soportados en los parámetros, incluidos los punteros JSON. Las fechas se pueden pasar como cadenas en formato de fecha ISO 8601 (por ejemplo, "2020-08-22T22:00:000Z").

For example, with a  dataclass function `getCities()` receiving text parameters:

#### POST request

`/rest/City/getCities`

**Parámetros en el cuerpo:** ["Aguada","Paris"]

#### GET request

`/rest/City/getCities?$params='["Aguada","Paris"]'`

### Parámetro de entidad

Las entidades pasadas en los parámetros son referenciadas en el servidor a través de su llave (*es decir,* propiedad __KEY). Las entidades pasadas en los parámetros son referenciadas en el servidor a través de su llave (*es decir,* propiedad __KEY).
También puede pasar valores para todos los atributos de la entidad. Estos valores se utilizarán automáticamente para la entidad manejada en el servidor.

> Si la petición envía los valores de atributo modificados para una entidad existente en el servidor, la función de modelo de datos ORDA llamada se ejecutará automáticamente en el servidor con los valores modificados. Esta funcionalidad le permite, por ejemplo, verificar el resultado de una operación en una entidad, tras aplicar todas las reglas de negocio, desde la aplicación cliente. A continuación, puede decidir guardar o no la entidad en el servidor.

| Propiedades                                           | Tipo                                                        | Descripción                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| Atributos de la entidad                               | mixto                                                       | Opcional - Valores a modificar                                              |
| __DATACLASS | Text                                                        | Obligatorio - Indica la Dataclass de la entidad                             |
| __ENTITY    | Boolean                                                     | Obligatorio - True para indicar al servidor que el parámetro es una entidad |
| __KEY       | mixto (mismo tipo que la llave primaria) | Opcional - llave primaria de la entidad                                     |

- If `__KEY` is not provided, a new entity is created on the server with the given attributes.
- If `__KEY` is provided, the entity corresponding to `__KEY` is loaded on the server with the given attributes

See examples for [creating](#creating-an-entity) or [updating](#updating-an-entity) entities with POST requests.
See an example of [contents downloading using an entity](#using-an-entity-to-download-contents) with a GET request.

#### Parámetro de entidad asociado

Las mismas propiedades que para un [parámetro de entidad](#entity-parameter). Además, la entidad relacionada debe existir y ser referenciada por __KEY, que contiene su llave primaria.

Ver los ejemplos para [creación](#creating-an-entity-with-a-related-entity) o [actualización](#updating-an-entity-with-a-related-entity) de las entidades con las entidades relacionadas.

### Parámetro de selección de entidad

La selección de entidades debe haber sido definida previamente utilizando [$method=entityset]($method.md#methodentityset).

> Si la petición envía una selección de entidades modificada al servidor, la función del modelo de datos ORDA llamada se ejecutará automáticamente en el servidor con la selección de entidades modificada.

| Propiedades                                          | Tipo    | Descripción                                                                                |
| ---------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| Atributos de la entidad                              | mixto   | Opcional - Valores a modificar                                                             |
| __DATASET  | Text    | Obligatorio - entitySetID (UUID) de la selección de entidades           |
| __ENTITIES | Boolean | Obligatorio - True para indicar al servidor que el parámetro es una selección de entidades |

See example for [receiving an entity selection](#receiving-an-entity-selection-as-parameter) with a POST request.
See example for [getting a list built upon an entity selection](#using-an-entity-selection-to-get-a-list) with a GET request.

## POST request examples

Esta base de datos se expone como un almacén de datos remoto en localhost (puerto 8111):

![alt-text](../assets/en/REST/ordastructure.png)

### Utilizar una función de clase de datastore

La clase de `DataStore` US_Cities ofrece una API:

```
// Clase DataStore 

Class extends DataStoreImplementation

exposed Function getName() : Text
    return "US cities and zip codes manager"
```

A continuación, puede ejecutar esta petición:

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### Result

```
{
"result": "US cities and zip codes manager"
}
```

### Utilizar una función de clase de dataclass

La clase de Dataclass `City` ofrece una PI que devuelve una entidad de ciudad a partir del nombre pasado en parámetro:

```
// ClassCity 

Class extends DataClass

exposed Function getCity($city : Text ) : cs.CityEntity
	return This.query("name = :1";$city).first()
```

A continuación, puede ejecutar esta petición:

**POST** `127.0.0.1:8111/rest/City/getCity`

Petición: ["Aguada"]

#### Result

El resultado es una entidad:

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

### Utilizar una función de clase de una entidad

La clase de entidad `CityEntity` ofrece una API:

```
// Clase CityEntity 

Class extends Entity

exposed Function getPopulation()
    return This.zips.sum("population")
```

A continuación, puede ejecutar esta petición:

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### Result

```
{
    "result": 48814
}
```

### Utilizar una función clase entitySelection

La clase de selección de entidad `CityEntity` ofrece una API:

```
// CitySelection class

Class extends EntitySelection

exposed Function getPopulation()
    return This.zips.sum("population")
```

A continuación, puede ejecutar esta petición:

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### Result

```
{
    "result": 87256
}
```

### Utilizar una función de clase de selección de entidades y un conjunto de entidades

La clase `StudentsSelection` tine una función `getAgeAverage`:

```
// Clase StudentsSelection

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

Una vez que haya creado un conjunto de entidades, puede ejecutar esta petición:

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### Result

```
{
    "result": 34
}
```

### Utilizar una función de clase de selección de entidades y unorderBy

La clase `StudentsSelection` tiene una función `getLastSummary`:

```
// Clase StudentsSelection


Class extends EntitySelection

exposed Function getLastSummary : Text
	var $last : Object

	$last:=This.last()
	return =$last.firstname+" - "+$last.lastname+" is ... " +String($last.age())
```

A continuación, puede ejecutar esta petición:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`

#### Result

```
{
    "result": "Wilbert - Bull is ... 21"
}
```

### Utilizar una entidad que se creará en el servidor

La clase de Dataclass `Students` tiene la función `pushData()` que recibe una entidad que contiene los datos del cliente. El método `checkData()` efectúa algunos controles. Si son válidos, la entidad se guarda y se devuelve.

```
// Clase Students

Class extends DataClass

exposed Function pushData($entity : Object) : Object
	var $status : Object

	$status:=checkData($entity) // $status es un objeto con una propiedad booleana success 

	Si ($status.success)
	    $status:=$entity.save()
 	   If ($status. uccess)
 	       return $entity
  	  End if
	End if

	return $status

```

Lance esta petición:

**POST** `http://127.0.0.1:8044/rest/Students/pushData`

Cuerpo de la petición:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown"
}]
```

Como ninguna `__KEY` es dada, una nueva entidad Students está cargada en el servidor **con los atributos del cliente**. Como la función `pushData()` ejecuta una acción `save()`, la nueva entidad es creada.

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

### Utilizar una entidad a actualizar en el servidor

Igual que el anterior pero con el atributo __KEY

Lance esta petición:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Cuerpo de la petición:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"lastname":"Brownie",
"__KEY":55
}]
```

Como `__KEY` es dada, la entidad Students está cargada con llave primaria 55 **con el valor lastname recibido por el cliente**. Como la función ejecuta una acción `save()`, la nueva entidad es actualizada.

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

### Crear una entidad con una entidad relacionada

En este ejemplo, creamos una nueva entidad Students con la entidad Schools con la llave primaria 2.

Lance esta petición:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Cuerpo de la petición:

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

### Actualizar una entidad con una entidad relacionada

En este ejemplo, asociamos una escuela existente a una entidad Students. La clase `StudentsEntity` tiene una API:

```
// Clase StudentsEntity

Class extends Entity

exposed Function putToSchool()
	var $1, $school , $0, $status : Object

		//$1 es una entidad Schools
	$school:=$1
		//Asocia la entidad relacionada school a la entidad actual Students
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

#### Result

```
{
    "result": {
        "success": true
    }
}
```

### Recibir una selección de entidades como parámetro

En la clase de Dataclass `Students`, la función `setFinalExam()` actualiza una selección de entidad recibida ($1). En realidad, actualiza el atributo *finalExam* con el valor recibido ($2). Devuelve las llaves primarias de las entidades actualizadas.

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

Un conjunto de entidades se crea primero con esta petición:

`http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`

A continuación, puede ejecutar esta petición:

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

Cuerpo de la petición:

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

Se han actualizado las entidades con llaves primarias 1 y 2.

```
{
    "result": [
        1,
        2
    ]
}
```

### Utilizar una selección de entidades actualizada en el cliente

Utilizando la función `getAgeAverage()` [definida anteriormente](#using-an-entityselection-class-function-and-an-entityset).

```4d
var $remoteDS, $newStudent, $students : Object
var $ageAverage : Integer

$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")

// $newStudent es una entidad estudiantil para proceder
$newStudent:=...
$students:=$remoteDS.Students.query("school.name = :1";"Math school")
// Agregamos una entidad a la selección de entidad $students en el cliente
$students.add($newStudent)

// Llamamos a una función de la clase StudentsSelection devolviendo el promedio de edad de los estudiantes de la entity selection
// La función se ejecuta en el servidor en la selección actualizada de entidad
$students que incluía al estudiante añadido por el cliente
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
