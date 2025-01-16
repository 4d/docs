---
id: dsmapping
title: Objetos Data Model
---

The ORDA technology is based upon an automatic mapping of an underlying 4D structure. Também fornece acesso aos dados através de objetos seleção de entidades (entity selection) e entidades (entity). As a result, ORDA exposes the whole database as a set of data model objects.

## Mapeamento da estrutura

When you call a datastore using the `ds` or the `Open datastore` command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned [datastore](#datastore) object:

* As tabelas correspondem às dataclasses.
* Os campos são mapeados para atributos de armazenamento.
* Relations are mapped to relation attributes - relation names, defined in the Structure editor, are used as relation attribute names.

![](../assets/en/ORDA/datastoreMapping.png)

### Regras gerais

As seguintes regras são aplicadas a quaisquer conversões:

* Os nomes de tabelas, campos e relações são mapeados para nomes de propriedade de objeto. Make sure that such names comply with general object naming rules, as explained in the [object naming conventions](Concepts/identifiers.md) section.
* Uma datastore só referencia as tabelas com uma única chave primária. As tabelas seguintes não são referenciadas:
  * Tabelas sem chave primária
  * Tabelas com chaves primárias compostas.
* [BLOB](Concepts/dt_blob.md) type attributes are not managed in the datastore. Os atributos BLOB são retornados como Null nas entidades e não podem ser atribuídos.

> O mapeamento ORDA não leva em consideração:  
> 
> * a opção "Invisível" para tabelas ou campos,
> * the virtual structure defined through `SET TABLE TITLES` or `SET FIELD TITLES`,
> * a propriedade "Manual" ou "Automática" das relações.

### Regras para o controlo do acesso remoto

When accessing a remote datastore through the `Open datastore` command or [REST requests](REST/gettingStarted.md), only tables and fields with the **Expose as REST resource** property are available remotely.

This option must be selected at the 4D structure level for each table and each field that you want to be exposed as dataclass and attribute in the datastore:

![](../assets/en/ORDA/ExposeDataclass.png)

### Actualização do modelo de dados

Any modifications applied at the level of the database structure invalidate the current ORDA model layer. Estas modificações incluem:

* adicionar ou remover uma tabela, um campo ou uma relação
* renomeação de uma tabela, um campo ou uma relação
* changing a core property of a field (type, unique, index, autoincrement, null value support)

When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local `ds` datastore on 4D and 4D Server. Note that existing references to ORDA objects such as entities or entity selections will continue to use the model from which they have been created, until they are regenerated.

However, the updated ORDA model layer is not automatically available in the following contexts:

* a remote 4D application connected to 4D Server -- the remote application must reconnect to the server.
* a remote datastore opened using `Open datastore` or through [REST calls](REST/gettingStarted.md) -- a new session must be opened.

## Definição de objetos

### Datastore

O datastore é o objeto de interface para um banco de dados. Constrói uma representação de todo o banco de dados como objeto. A datastore is made of a **model** and **data**:

* The model contains and describes all the dataclasses that make up the datastore. É independente do próprio banco de dados subjacente.
* Os dados referem-se à informação que vai ser utilizada e armazenada neste modelo. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.

When handled through the code, the datastore is an object whose properties are all of the [dataclasses](#dataclass) which have been specifically exposed.

4D permite lidar com os seguintes datastores:

* the local datastore, based on the current 4D database, returned by the `ds` command (the main datastore).
* one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the `Open datastore` command.

Um datastore faz referência apenas a um único banco de dados local ou remoto.

O próprio objeto datastore não pode ser copiado como um objeto:

```4d
$mydatastore:=OB Copy(ds) //retorna nulo
```

No entanto, as propriedades do datastore são enumeráveis:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds;$prop)
  //$prop contém os nomes de todas as classes de dados
```

The main (default) datastore is always available through the `ds` command, but the `Open datastore` command allows referencing any remote datastore.

### Dataclass

Uma dataclass é o equivalente a uma tabela. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Os atributos relacionais podem ser utilizados em consultas como qualquer outro atributo.

All dataclasses in a 4D project are available as a property of the `ds` datastore. For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore.

Por exemplo, considere a seguinte tabela na estrutura 4D:

![](../assets/en/ORDA/companyTable.png)

The `Company` table is automatically available as a dataclass in the `ds` datastore. Você pode escrever:

```4d
var $compClass : cs. Company //declares a $compClass object variable of the Company class
$compClass:=ds. Company //assigns the Company dataclass reference to $compClass
```

Um objeto de classe de dados pode conter:

* attributes
* atributos relacionais

The dataclass offers an abstraction of the physical database and allows handling a conceptual data model. A dataclass é a única forma de consultar o datastore. Uma consulta é feita a partir de uma única dataclass. As consultas são construídas em torno de atributos e nomes de atributos de relação das dataclasses. Assim, os atributos de relação são o meio de envolver várias tabelas ligadas numa consulta.

O próprio objeto dataclass não pode ser copiado como um objeto:

```4d
$mydataclass:=OB Copy(ds. Employee) //returns null
```

No entanto, as propriedades da dataclass são enumeráveis:

```code4d
ARRAY TEXT($prop;0)
OB GET PROPERTY NAMES(ds.Employee;$prop)
//$prop contains the names of all the dataclasse attributes
```

### Atributo

Dataclass properties are attribute objects describing the underlying fields or relations. Por exemplo:

```4d
 $nameAttribute:=ds. Company.name //reference to class attribute
 $revenuesAttribute:=ds. Company["revenues"] //alternate way
```

This code assigns to `$nameAttribute` and `$revenuesAttribute` references to the name and revenues attributes of the `Company` class. Essa sintaxe NAO devolve valores mantidos dentro do atributo, mas sim devolve referências aos próprios atributos. Para manejar os valores, é necessário passar por [Entidades](#entity).

All eligible fieds in a table are available as attributes of their parent [dataclass](#dataclass). For remote datastores accessed through `Open datastore` or [REST requests](REST/gettingStarted.md), the **Expose as REST resource** option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute.

#### Atributos de armazenamento e de relação

Atributos da Dataclass vêm em vários tipos: armazenamento, relatedEntity e relatedEntities. Attributes that are scalar (*i.e.*, provide only a single value) support the standard 4D data type (integer, text, object, etc.).

* A **storage attribute** is equivalent to a field in the 4D database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type.
* A **relation attribute** provides access to other entities. Os atributos relação podem resultar em uma única entidade (ou nenhuma entidade) ou em uma seleção de entidades (de 0 a N). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Os atributos de relação estão diretamente disponíveis no ORDA usando seus nomes.

For example, consider the following partial database structure and the relation properties:

![](../assets/en/ORDA/relationProperties.png)

Todos os atributos de armazenamento estarão automaticamente disponíveis:

* na dataclass Project: "ID", "name" e "companyID"
* na dataclass Company: "ID", "name" e "discount"

In addition, the following relation attributes will also be automatically available:

* in the Project dataclass: **theClient** attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)
* in the Company dataclass: **companyProjects** attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.
> The Manual or Automatic property of a database relation has no effect in ORDA.

Todos os atributos da dataclass são expostos como propriedades da dataclass:

![](../assets/en/ORDA/dataclassProperties.png)

Keep in mind that these objects describe attributes, but do not give access to data. A leitura ou escrita de dados é feita através de [objetos entidade](entities.md#using-entity-attributes).

### Entity

Uma entidade é o equivalente a um registo. Na verdade, é um objeto que referir-se a um registo no banco de dados. It can be seen as an instance of a [dataclass](#dataclass), like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore.

O objetivo da entidade é gerir dados (criar, atualizar, apagar). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection.

O objeto entidade em si não pode ser copiado como um objeto:

```4d
 $myentity:=OB Copy(ds. Employee.get(1)) //retorna null
```

As propriedades da entidade são, no entanto, enumeráveis:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds. Employee.get(1);$prop)
  //$prop contains the names of all the entity attributes
```

### Seleção de entidades

Uma seleção de entidade é um objeto contendo uma ou mais referência(s) a entidades pertencentes à mesma dataclass. É normalmente criado como resultado de uma consulta ou devolvido a partir de um atributo de relação. Uma seleção de entidades pode conter 0, 1 ou X entidades da dataclass -- onde X pode representar o número total de entidades contidas na dataclass.

Exemplo:

```4d
var $e : cs. EmployeeSelection //declares a $e object variable of the EmployeeSelection class type
$e:=ds. Employee.all() //assigns the resulting entity selection reference to the $e variable
```

As seleções de entidades podem ser "classificadas" ou "não classificadas" ([consulte abaixo](#ordered-or-unordered-entity-selection)).

> Entity selections can also be "shareable" or "non-shareable", depending on [how they have been created](entities.md#shareable-or-alterable-entity-selections).

O próprio objeto de seleção de entidades não pode ser copiado como um objeto:

```4d
 $myentitysel:=OB Copy(ds. Employee.all()) //returns null
```

No entanto, as propriedades de seleção de entidades são enumeráveis:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds. Employee.all();$prop)
  //$prop contains the names of the entity selection properties
  //("length", 00", "01"...)
```

#### Entity selections ordenadas ou não ordenadas

For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the `orderBy( )` method or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".

Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:

* result of an `orderBy()` on a selection (of any type) or an `orderBy()` on a dataclass
* result of the `newSelection()` method with the `dk keep ordered` option

As selecções de entidades não ordenadas são criadas nos seguintes casos:

* result of a standard `query()` on a selection (of any type) or a `query()` on a dataclass,
* resultado do método `newSelection()` sem opção,
* result of any of the comparison methods, whatever the input selection types: `or()`, `and()`, `minus()`.
> The following entity selections are always **ordered**:
> 
> * entity selections returned by 4D Server to a remote client
> * selecções de entidades construídas em datastores remotos.

Note that when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed.
