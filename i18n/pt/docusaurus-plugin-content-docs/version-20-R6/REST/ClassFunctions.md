---
id: classFunctions
title: Chamada de funções de classe
---

Pode chamar as [funções de classe](ORDA/ordaClasses.md) definidas para o modelo de dados ORDA através dos seus pedidos REST, para poder beneficiar da API da aplicação 4D objetivo.

:::note

Você também pode chamar funções singleton, consulte [esta página]($singleton.md) para obter mais informações.

:::

As funções são simplesmente chamadas em pedidos POST na interface ORDA apropriada, sem (). Por exemplo, se tiver definido uma função `getCity()` na dataclass City, pode chamá-la utilizando o seguinte pedido:

`/rest/City/getCity`

com dados no corpo do pedido POST: `["Aguada"]`

Na linguagem 4D, esta chamada é equivalente a:

```4d
$city:=ds. City.getCity("Aguada")
```

> Apenas as funções com a palavra-chave `exposed` podem ser diretamente chamadas a partir de pedidos REST. Ver la sección [Funciones expuestas vs. no expuestas](ORDA/ordaClasses.md#exposed-vs-non-exposed-functions).

## Chamadas funções

As funções têm de ser sempre chamadas através de pedidos REST **POST** (um pedido GET dará origem a um erro).

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
| [Classe Singleton](../Concepts/classes.md#singleton-classes)       | `/rest/$singleton/SingletonClass/SingletonClassFunction` (veja [$singleton page]($singleton.md)) |

> `/rest/\{dataClass\}/Function` pode ser usado para chamar uma função de seleção de dataclass ou uma entity selection (`/rest/\{dataClass\}` retorna todas as entidades da DataClass como uma entity selection).\
> A função é pesquisada primeiro na classe de seleção de entidades. Se não for encontrado, é procurado na dataclass. Por outras palavras, se uma função com o mesmo nome for definida tanto na classe DataClass como na classe EntitySelection, a função da classe de dataClass nunca será executada.

> Todos os códigos 4D chamados de solicitações REST **devem ser thread-safe** se o projeto for executado em modo compilado. porque o servidor REST sempre usa processos preventivos neste caso (o valor da configuração [*usar processo preemptivo*](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) é ignorado pelo servidor REST).

## Parâmetros

É possível enviar parâmetros para funções definidas em classes usuários ORDA. Do lado do servidor, eles serão recebidos nos [parâmetros declarados](../Concepts/parameters.md#declaring-parameters) das funções da classe.

As regras abaixo são válidas:

- Os parâmetros devem ser transmitidos no **corpo do pedido POST**
- Os parâmetros devem ser incluídos numa coleção (formato JSON)
- Todos os tipos de dados escalares suportados nas coleções JSON podem ser passados como parâmetros.
- A entidade e a seleção de entidades podem ser passadas como parâmetros. O objeto JSON deve conter atributos específicos usados pelo servidor REST para atribuir os dados aos objetos ORDA correspondentes: `__DATACLASS`, `__ENTITY`, `__ENTITIES`, `__DATASET`.

Veja [este exemplo](#using-an-entity-to-be-created-on-the-server) e [este exemplo](#receiving-an-entity-selection-as-parameter).

### Parâmetro de valor escalar

Os parâmetros devem ser simplesmente incluídos numa coleção definida no corpo. For example, with a  dataclass function `getCities()` receiving text parameters: `/rest/City/getCities`

**Parâmetros no corpo:** ["Aguda","Paris"]

Todos os tipos de dados JSON são suportados nos parâmetros, incluindo os ponteiros JSON. As datas podem ser transmitidas como cadeias de caracteres no formato de data ISO 8601 (por exemplo, "2020-08-22T22:00:000Z").

### Parâmetro da entidade

As entidades passadas nos parâmetros são referenciadas no servidor através da sua chave (*ou seja*, a propriedade __KEY). Se o parâmetro chave for omitido num pedido, é carregada uma nova entidade na memória do servidor.
Também é possível transmitir valores para quaisquer atributos da entidade. Estes valores serão automaticamente utilizados para a entidade tratada no servidor.

> Se o pedido enviar valores de atributos modificados para uma entidade existente no servidor, a função de modelo de dados ORDA chamada será automaticamente executada no servidor com valores modificados. Esta caraterística permite-lhe, por exemplo, verificar o resultado de uma operação numa entidade, depois de aplicar todas as regras de negócio, a partir da aplicação cliente. O usuário pode então decidir guardar ou não a entidade no servidor.

| Propriedades                                          | Tipo                                                          | Descrição                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Atributos da entidade                                 | misto                                                         | Opcional - Valores a modificar                                                   |
| __DATACLASS | Text                                                          | Obrigatório - Indica a Dataclass da entidade                                     |
| __ENTITY    | Parâmetros                                                    | Obrigatório - Verdadeiro para indicar ao servidor que o parâmetro é uma entidade |
| __KEY       | misto (do mesmo tipo que a chave primária) | Facultativo - Chave primária da entidade                                         |

- Se `__KEY` não for fornecido, uma nova entidade é criada no servidor com os atributos fornecidos.
- Se `__KEY` for fornecido, a entidade correspondente a `__KEY` é carregada no servidor com os atributos fornecidos

Veja exemplos de [criando](#creating-an-entity) ou [atualização](#updating-an-entity).

#### Parâmetro de entidade relacionada

Mesmas propriedades de um [parâmetro de entidade](#entity-parameter). Além disso, a entidade relacionada deve existir e ser referenciada por __KEY que contém a sua chave primária.

Veja exemplos de [criação](#creating-an-entity-with-a-related-entity) ou [atualização](#updating-an-entity-with-a-related-entity) das entidades com entidades relacionadas.

### Parâmetro de seleção da entidade

A seleção da entidade deve ter sido definida previamente usando [$method=entityset]($method.md#methodentityset).

> Se o pedido enviar uma seleção de entidade modificada para o servidor, a função de modelo de dados ORDA chamada será automaticamente executada no servidor com a seleção de entidade modificada.

| Propriedades                                         | Tipo       | Descrição                                                                                   |
| ---------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| Atributos da entidade                                | misto      | Opcional - Valores a modificar                                                              |
| __DATASET  | Text       | Obrigatório - entitySetID (UUID) da seleção de entidades                 |
| __ENTITIES | Parâmetros | Obrigatório - Verdadeiro para indicar ao servidor que o parâmetro é uma seleção de entidade |

Veja um exemplo para [recebendo uma seleção de entidades](#receiving-an-entity-selection-as-parameter).

## Exemplos de petições

Esta base de dados é exposta como um datastore remoto no localhost (porta 8111):

![alt-text](../assets/en/REST/ordastructure.png)

### Utilizar uma função de classe do datastore

A classe de `DataStore` US_Cities fornece uma API:

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

A classe Dataclass `City` fornece uma API que devolve uma entidade cidade a partir de um nome passado como parâmetro:

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

A classe Entity `CityEntity` fornece uma API:

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

A classe de selection de entidade `CitySelection` fornece uma API:

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

A classe `StudentsSelection` tem uma função `getAgeAverage`:

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

A classe `StudentsSelection` tem uma função `getLastSummary`:

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

A classe Dataclass `Students` tem a função `pushData()` recebendo uma entidade contendo dados do cliente. O método `checkData()` executa alguns controles. Se estiverem corretas, a entidade é guardada e devolvida.

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

Já que não é dada nenhuma `__KEY`, é carregada uma nova entidade Students no servidor **com os atributos recebidos do cliente**. Como a função `pushData()` executa uma ação `save()`, a nova entidade foi criada.

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

Uma vez que `__KEY` é fornecido, a entidade Estudantes com a chave primária 55 é carregada **com o valor do sobrenome recebido do cliente**. Como a função executa uma ação `save()`, a entidade é atualizada.

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

Neste exemplo, associamos uma escola existente a uma entidade Students. A classe `StudentsEntity` tem uma API:

```
// StudentsEntity class

Class extends Entity

exposed Function putToSchool()
	var $1, $school , $0, $status : Object

		//$1 é uma entidade Schools
	$school:=$1
		//Associar a entidade escola relacionada à entidade Students atual
	This.school:=$school

	$status:=This.save()

	$0:=$status
```

Você executa esta solicitação, chamada em uma entidade Students:
**POST** `http://127.0.0.1:8044/rest/Students(1)/putToSchool`
Corpo da solicitação:

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

Na classe de Dataclass `Students`, a função `setFinalExam()` atualiza uma seleção de entidade recebida ($1). En realidad, actualiza el atributo *finalExam* con el valor recibido ($2). Devolve as chaves primárias das entidades atualizadas.

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

Usando a função `getAgeAverage()` [definida acima](#using-an-entityselection-class-function-and-an-entityset).

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
