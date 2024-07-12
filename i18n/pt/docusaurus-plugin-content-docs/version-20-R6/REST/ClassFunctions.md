---
id: classFunctions
title: Calling class functions
---

Puede llamar a [funciones de clase de modelos de datos](ORDA/ordaClasses.md) definidas para el modelo de datos ORDA a través de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicación 4D objetivo.

:::note

You can also call singleton functions, see [this page]($singleton.md) for more information.

:::

As funções são simplesmente chamadas em pedidos POST na interface ORDA apropriada, sem (). Por ejemplo, si ha definido una función `getCity()` en la dataclass City, podría llamarla utilizando la siguiente petición:

`/rest/City/getCity`

con los datos en el cuerpo de la petición POST: `["Aguada"]`

Na linguagem 4D, esta chamada é equivalente a:

```4d
$city:=ds. City.getCity("Aguada")
```

> Sólo las funciones con la palabra clave `exposed` pueden ser llamadas directamente desde las peticiones REST. Ver la sección [Funciones expuestas vs. no expuestas](ORDA/ordaClasses.md#exposed-vs-non-exposed-functions).

## Chamadas funções

Las funciones deben llamarse siempre utilizando peticiones **POST** (una petición GET recibirá un error).

As funções são chamadas no objeto correspondente no datastore do servidor.

| Função de classe                                                   | Sintaxe                                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| [datastore class](ORDA/ordaClasses.md#datastore-class)             | `/rest/$catalog/DataStoreClassFunction`                                                                             |
| [dataclass class](ORDA/ordaClasses.md#dataclass-class)             | `/rest/\{dataClass\}/DataClassClassFunction`                                                                      |
| [entitySelection class](ORDA/ordaClasses.md#entityselection-class) | `/rest/\{dataClass\}/EntitySelectionClassFunction`                                                                |
|                                                                    | `/rest/\{dataClass\}/EntitySelectionClassFunction/$entityset/entitySetNumber`                                     |
|                                                                    | `/rest/\{dataClass\}/EntitySelectionClassFunction/$filter`                                                        |
|                                                                    | `/rest/\{dataClass\}/EntitySelectionClassFunction/$orderby`                                                       |
| [entity class](ORDA/ordaClasses.md#entity-class)                   | `/rest/\{dataClass\}(key)/EntityClassFunction/`                                                                   |
| [Singleton class](../Concepts/classes.md#singleton-classes)        | `/rest/$singleton/SingletonClass/SingletonClassFunction` (veja [$singleton page]($singleton.md)) |

> `/rest/\{dataClass\}/Function` can be used to call either a dataclass or an entity selection function (`/rest/\{dataClass\}` returns all entities of the DataClass as an entity selection).\
> A função é pesquisada primeiro na classe de seleção de entidades. Se não for encontrado, é procurado na dataclass. Por outras palavras, se uma função com o mesmo nome for definida tanto na classe DataClass como na classe EntitySelection, a função da classe de dataClass nunca será executada.

> All 4D code called from REST requests **must be thread-safe** if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the [*Use preemptive process* setting value](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) is ignored by the REST Server).

## Parâmetros

É possível enviar parâmetros para funções definidas em classes usuários ORDA. Del lado del servidor, serán recibidos en los [parámetros declarados](../Concepts/parameters.md#declaring-parameters) de las funciones clase.

As regras abaixo são válidas:

- Los parámetros deben pasarse en el **cuerpo de la petición POST**
- Os parâmetros devem ser incluídos numa coleção (formato JSON)
- Todos os tipos de dados escalares suportados nas coleções JSON podem ser passados como parâmetros.
- A entidade e a seleção de entidades podem ser passadas como parâmetros. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: `__DATACLASS`, `__ENTITY`, `__ENTITIES`, `__DATASET`.

See [this example](#using-an-entity-to-be-created-on-the-server) and [this example](#receiving-an-entity-selection-as-parameter).

### Parâmetro de valor escalar

Os parâmetros devem ser simplesmente incluídos numa coleção definida no corpo. For example, with a  dataclass function `getCities()` receiving text parameters: `/rest/City/getCities`

**Parámetros en el cuerpo:** ["Aguada","Paris"]

Todos os tipos de dados JSON são suportados nos parâmetros, incluindo os ponteiros JSON. As datas podem ser transmitidas como cadeias de caracteres no formato de data ISO 8601 (por exemplo, "2020-08-22T22:00:000Z").

### Parâmetro da entidade

Las entidades pasadas en los parámetros son referenciadas en el servidor a través de su llave (*es decir,* propiedad __KEY). Se o parâmetro chave for omitido num pedido, é carregada uma nova entidade na memória do servidor.
Também é possível transmitir valores para quaisquer atributos da entidade. Estes valores serão automaticamente utilizados para a entidade tratada no servidor.

> Se o pedido enviar valores de atributos modificados para uma entidade existente no servidor, a função de modelo de dados ORDA chamada será automaticamente executada no servidor com valores modificados. Esta caraterística permite-lhe, por exemplo, verificar o resultado de uma operação numa entidade, depois de aplicar todas as regras de negócio, a partir da aplicação cliente. O usuário pode então decidir guardar ou não a entidade no servidor.

| Propriedades                                          | Tipo                                                          | Descrição                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Atributos da entidade                                 | misto                                                         | Opcional - Valores a modificar                                                   |
| __DATACLASS | String                                                        | Obrigatório - Indica a Dataclass da entidade                                     |
| __ENTITY    | Parâmetros                                                    | Obrigatório - Verdadeiro para indicar ao servidor que o parâmetro é uma entidade |
| __KEY       | misto (do mesmo tipo que a chave primária) | Facultativo - Chave primária da entidade                                         |

- If `__KEY` is not provided, a new entity is created on the server with the given attributes.
- If `__KEY` is provided, the entity corresponding to `__KEY` is loaded on the server with the given attributes

Ver los ejemplos de [creación](#creating-an-entity) o de [actualización](#updating-an-entity) de las entidades.

#### Parâmetro de entidade relacionada

Las mismas propiedades que para un [parámetro de entidad](#entity-parameter). Além disso, a entidade relacionada deve existir e ser referenciada por __KEY que contém a sua chave primária.

Ver los ejemplos para [creación](#creating-an-entity-with-a-related-entity) o [actualización](#updating-an-entity-with-a-related-entity) de las entidades con las entidades relacionadas.

### Parâmetro de seleção da entidade

La selección de entidades debe haber sido definida previamente utilizando [$method=entityset]($method.md#methodentityset).

> Se o pedido enviar uma seleção de entidade modificada para o servidor, a função de modelo de dados ORDA chamada será automaticamente executada no servidor com a seleção de entidade modificada.

| Propriedades                                         | Tipo       | Descrição                                                                                   |
| ---------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| Atributos da entidade                                | misto      | Opcional - Valores a modificar                                                              |
| __DATASET  | String     | Obrigatório - entitySetID (UUID) da seleção de entidades                 |
| __ENTITIES | Parâmetros | Obrigatório - Verdadeiro para indicar ao servidor que o parâmetro é uma seleção de entidade |

Ver ejemplo para [recibir una selección de entidades](#receiving-an-entity-selection-as-parameter).

## Exemplos de petições

Esta base de dados é exposta como um datastore remoto no localhost (porta 8111):

![alt-text](../assets/en/REST/ordastructure.png)

### Utilizar uma função de classe do datastore

La clase de `DataStore` US_Cities ofrece una API:

```
// DataStore class

Class extends DataStoreImplementation

exposed Function getName() : Text
    return "US cities and zip codes manager"
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/$catalog/getName`

#### Resultados

```
{
"result": "US cities and zip codes manager"
}
```

### Utilização de uma função de classe de dataclass

La clase de Dataclass `City` ofrece una PI que devuelve una entidad de ciudad a partir del nombre pasado en parámetro:

```
// City class

Class extends DataClass

exposed Function getCity($city : Text ) : cs.CityEntity
	return This.query("name = :1";$city).first()
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/City/getCity`

Corpo do pedido: ["Aguada"]

#### Resultados

Le résultat est une entité:

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

### Utilização de uma função de classe de uma entidade

La clase de entidad `CityEntity` ofrece una API:

```
// CityEntity class

Class extends Entity

exposed Function getPopulation()
    return This.zips.sum("population")
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/City(2)/getPopulation`

#### Resultados

```
{
    "result": 48814
}
```

### Usar uma função de classe de uma seleção de entidade

La clase de selección de entidad `CityEntity` ofrece una API:

```
// CitySelection class

Class extends EntitySelection

exposed Function getPopulation()
    return This.zips.sum("population")
```

Pode então executar este pedido:

**POST** `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`

#### Resultados

```
{
    "result": 87256
}
```

### Usando uma função de classe entitySelection e um entitySet

La clase `StudentsSelection` tine una función `getAgeAverage`:

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

Uma vez criado um conjunto de entidades, é possível executar este pedido:

**POST** `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`

#### Resultados

```
{
    "result": 34
}
```

### Usando uma função de classe de seleção de entidades e um orderBy

La clase `StudentsSelection` tiene una función `getLastSummary`:

```
// StudentsSelection Class


Class extends EntitySelection

exposed Function getLastSummary : Text
	var $last : Object

	$last:=This.last()
	return =$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
```

Pode então executar este pedido:

**POST** `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`

#### Resultados

```
{
    "result": "Wilbert - Bull is ... 21"
}
```

### Utilizar uma entidade a ser criada no servidor

La clase de Dataclass `Students` tiene la función `pushData()` que recibe una entidad que contiene los datos del cliente. El método `checkData()` efectúa algunos controles. Se estiverem corretas, a entidade é guardada e devolvida.

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

Executa-se este pedido:

**POST** `http://127.0.0.1:8044/rest/Students/pushData`

Corpo do pedido:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown"
}]
```

Como ninguna `__KEY` es dada, una nueva entidad Students está cargada en el servidor **con los atributos del cliente**. Como la función `pushData()` ejecuta una acción `save()`, la nueva entidad es creada.

#### Resultados

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

### Utilizar uma entidade a atualizar no servidor

O mesmo que acima, mas com um atributo __KEY

Executa-se este pedido:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Corpo do pedido:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"lastname":"Brownie",
"__KEY":55
}]
```

Como `__KEY` es dada, la entidad Students está cargada con llave primaria 55 **con el valor lastname recibido por el cliente**. Como la función ejecuta una acción `save()`, la nueva entidad es actualizada.

#### Resultados

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

### Criação de uma entidade com uma entidade relacionada

Neste exemplo, criamos uma nova entidade Estudantes com a entidade Escolas com a chave primária 2.

Executa-se este pedido:

**POST:**`http://127.0.0.1:8044/rest/Students/pushData`

Corpo do pedido:

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"John",
"lastname":"Smith",
"school":{"__KEY":2}
}]
```

#### Resultados

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

### Atualização de uma entidade com uma entidade relacionada

Neste exemplo, associamos uma escola existente a uma entidade Students. La clase `StudentsEntity` tiene una API:

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

#### Resultados

```
{
    "result": {
        "success": true
    }
}
```

### Receber uma seleção de entidade como parâmetro

En la clase de Dataclass `Students`, la función `setFinalExam()` actualiza una selección de entidad recibida ($1). En realidad, actualiza el atributo *finalExam* con el valor recibido ($2). Devolve as chaves primárias das entidades atualizadas.

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

Um conjunto de entidades é criado primeiro com este pedido:

`http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`

Em seguida, pode executar este pedido:

**POST** `http://127.0.0.1:8044/rest/Students/setFinalExam`

Corpo do pedido:

```
[
{
"__ENTITIES":true,
"__DATASET":"9B9C053A111E4A288E9C1E48965FE671"
},
"Passed"
]

```

#### Resultados

As entidades com chaves primárias 1 e 2 foram atualizadas.

```
{
    "result": [
        1,
        2
    ]
}
```

### Utilizar uma seleção de entidade actualizada no cliente

Utilizando la función `getAgeAverage()` [definida anteriormente](#using-an-entityselection-class-function-and-an-entityset).

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
