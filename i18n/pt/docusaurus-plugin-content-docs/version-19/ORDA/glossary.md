---
id: glossary
title: Glossary
---

## Principais conceitos em resumo

![](../assets/en/ORDA/mainConcepts.png)

## Atributo

Um atributo é a célula de armazenamento mais pequena num banco de dados relacional (ver também [Atributo relacional](#relation-attribute)). Não confundir atributos de dataclass com atributos de entidades:

* Num objeto dataclass, cada propriedade é um atributo de dataclass que corresponde a um campo na tabela correspondente (mesmo nome e tipo).
* Num objeto entity, os atributos de entidades são propriedades que contêm os valores para os atributos do datastore correspondentes.
> *Atributos* e *propriedades* são conceitos semelhantes. "Atributo" é utilizado para designar as propriedades da dataclass que armazenam os dados, enquanto "propriedade" é mais genérico e define um dado armazenado num objeto.

## AttributePath

Um attributePath é o caminho de um atributo em uma determinada dataclass ou entidade. Ver também [PropertyPath](#propertyPath).

## Class code

Código da(s) função(ões) da classe usuário.

## Data model class

Classe estendida disponível para um objeto modelo de dados.

## Data model object

Objetos de banco de dados disponíveis através do conceito ORDA, ou seja, datastore, dataclasses, entities e entity selections.

## Data model function

Função de uma classe de modelo de dados ORDA.

## Dataclass

Uma dataclass é um objeto que descreve os dados. As tabelas da banco de dados fornecidas pelo datastore são tratadas através das dataclasses. Cada tabela do banco de dados fornecida pelo datastore tem uma dataclass correspondente com o mesmo nome. Cada campo da tabela é um atributo da dataclass.

Uma dataclass está relacionada com um único datastore.

## DataClass class

Classe para objetos dataclass específicos, onde se podem adicionar funções personalizadas.

## Datastore

Um datastore é o objeto de interface fornecido pela ORDA para referenciar uma estrutura e aceder aos seus dados. O banco de dados principal, devolvido pelo comando `ds`, está disponível como um datastore (o datastore principal).

Um datastore fornece:

* uma ligação à base de dados 4D
* um conjunto de classes de dados para trabalhar com a base de dados

O banco de dados pode ser um banco de dados local 4D (o datastore principal), ou um banco de dados 4D Server exposto como recurso REST (um datastore remote).

Um datastore faz referência apenas a uma única base de dados. É, no entanto, possível abrir vários repositórios de dados para aceder a vários bancos de dados.

## DataStore class

Classe para objetos datastore, onde é possível adicionar funções personalizadas.

## DataStoreImplementation

Nome interno da classe genérica DataStore no class store `4D`.

## Cópia profunda

Uma cópia profunda (deep copy) duplica um objeto e todas as referências que contém. Após uma deep copy, uma coleção copiada contém os elementos duplicados e, por conseguinte, novas referências de todos os elementos originais. Ver também Cópia superficial.

## ds

`ds` é o comando da linguagem 4D que devolve uma referência de objeto [datastore](dsMapping.md#datastore). Corresponde ao datastore disponível no banco de dados principal 4D.

## Entity

Uma entidade é um objeto que corresponde a um modelo de dataclass. Uma entidade contém os mesmos atributos que a dataclass.

Uma entidade pode ser vista como uma instância da dataclass, como um registo da tabela que corresponde à dataclass no seu datastore associado. No entanto, uma entidade também contém dados relacionados. O objetivo da entidade é gerir dados (criar, atualizar, apagar).

Para mais informações, consulte Entidades.

## Seleção de entidades

Uma seleção de entidades é um objeto. Quando uma solicitação é enviada ao datastore, uma seleção de entidades é retornada. Uma seleção de entidade é um conjunto de referências a entidades relacionadas com a mesma dataclass.

Uma seleção de entidade contém:

* um conjunto de 0 a X referências de entidades,
* uma propriedade length (sempre),
* propriedades queryPlan e queryPath (se solicitadas durante a consulta).

Uma seleção de entidade também pode estar vazia.

## Generic class

Classe incorporada para objetos ORDA, tais como entidades ou dataclasses. As funções e propriedades das classes genéricas estão automaticamente disponíveis nas classes usuário estendidas, por exemplo, `EmployeeEntity`.

## Lazy loading

Uma vez que as entidades são geridas como referências, os dados só são carregados quando necessário, ou seja, quando se acede a eles no código ou através de widgets de interface. Este princípio de otimização é chamado lazy loading.

## Datastore principal

O objeto Datastore que corresponde ao banco de dados 4D aberto (autônomo ou cliente/servidor). O datastore principal é devolvido pelo comando ds.

## Métodos

Os objetos ORDA, tais como datastores, dataclasses, entity selections, e entities, definem as classes de objetos. Fornecem métodos específicos para interagir diretamente com eles. Estes métodos são também designados por funções membro. Estes métodos são utilizados chamando-os a uma instância do objeto.

Por exemplo, o método `quer()` é uma "member function" de dataclass. Se tiver armazenado um objeto dataclass na variável `$myClass`, pode escrever:

```code4d
$myClass.query("name = smith")
```

## Tipo de dados misto

Nesta documentação, o tipo de dados "Misto" é utilizado para designar os vários tipos de valores que podem ser armazenados nos atributos de uma dataclass. Inclui:

* number
* text
* null
* boolean
* date
* object
* collection
* imagem(\*)

*(\*) O tipo imagem não é suportado pelos métodos estatísticos como* `entitySelection.max( )`.

## Bloqueio optimista

No modo "bloqueio otimista", as entidades não são bloqueadas explicitamente antes de serem atualizadas. Cada entidade tem um marcador interno que é automaticamente incrementado sempre que a entidade é guardada no disco. Os métodos entity.save( ) ou entity.drop( ) retornarão um erro se o marcador da entidade carregada e o marcador da entidade no disco não coincidirem, ou se a entidade tiver sido excluída. O bloqueio otimista só está disponível na implementação ORDA. Ver também "Bloqueio pessimista".

## Bloqueio pessimista

Um "bloqueio pessimista" significa que uma entidade é bloqueada antes de ser acedida, utilizando o método entity.lock( ). Outros processos não podem atualizar nem eliminar a entidade até esta ser desbloqueada. A linguagem 4D clássica só permite bloqueios pessimistas. Ver "Bloqueio optimista".

## Propriedade

Ver [Atributo](#attribute).
> > Attributes and properties are similar concepts. "Atributo" é utilizado para designar as propriedades da dataclass que armazenam os dados, enquanto "propriedade" é mais genérico e define um dado armazenado num objeto.

## PropertyPath

Um propertyPath é o caminho para uma propriedade num objeto dado. Se a propriedade estiver aninhada em vários níveis, cada nível é separado por um ponto (".").

## Regular class

Classe usuário não relacionada com um objeto ORDA.

## Related dataclass

Estas são dataclasses ligadas pelos atributos de relação.

## Atributo relacional

Os atributos de relação são utilizados para conceitualizar relações entre as dataclasses (N a 1 e 1 a N).

* Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB.
* One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.

A dataclass can have recursive relation attributes.

In an entity, the value of a relation attribute can be an entity or an entity selection.

## Entidades relacionadas

A related entity can be seen as the instance of a relation attribute in a dataclass.

Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses.

## Remote datastore

A 4D database opened on a 4D or 4D Server (available through HTTP) and exposed as a REST resource. This database can be referenced locally as a Datastore from other workstations, where it is assigned a locaID. The remote datastore can be used through ORDA concepts (datastore, dataclass, entity selection...). Esta utilização é submetida a um sistema de licenciamento.

## Session

When the 4D application connects to a Remote datastore, a session is created on the 4D Server (HTTP). A session cookie is generated and associated to the local datastore id.

Each time a new session is opened, a license is used. Each time a session is closed, the license is freed.

Inactive sessions are automatically closed after a timeout. The default timeout is 48 hours, it can be set by the developer (it must be >= 60 minutes).

## Cópia superficial (Shallow copy)

A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. Ver também Deep copy.

## Stamp

Utilizado na tecnologia de bloqueio "otimista". All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, 4D can prevent concurrent modifications on the same entities.
