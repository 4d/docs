---
id: glossary
title: Glossary
---

## Principais conceitos em resumo

![](../assets/en/ORDA/mainConcepts.png)

## Ação

Todas las acciones que pueden realizarse en un [recurso](#resource). Available actions are: create, read, update, drop, execute, and promote.

## Atributo

Un atributo es la celda de almacenamiento más pequeña de una base de datos relacional (ver también [Atributo relacional](#relación-atributo)). Não confundir atributos de dataclass com atributos de entidades:

- Num objeto dataclass, cada propriedade é um atributo de dataclass que corresponde a um campo na tabela correspondente (mesmo nome e tipo).
- Num objeto entity, os atributos de entidades são propriedades que contêm os valores para os atributos do datastore correspondentes.

> Attributes and properties are similar concepts. "Atributo" é utilizado para designar as propriedades da dataclass que armazenam os dados, enquanto "propriedade" é mais genérico e define um dado armazenado num objeto.

## AttributePath

Um attributePath é o caminho de um atributo em uma determinada dataclass ou entidade. Veja também [PropertyPath](#propertypath).

## Class code

Código da(s) função(ões) da classe usuário.

## Atributo calculado

Um atributo calculado não armazena efetivamente informações. Em vez disso, determina o seu valor com base noutros valores da mesma entidade ou de outras entidades, atributos ou funções. Quando é referir-se a um atributo calculado, o "cálculo" subjacente é avaliado para determinar o valor. Os atributos calculados podem até ser atribuídos a valores em que o código definido pelo usuário determina o que fazer durante a atribuição.

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

Um datastore é o objeto de interface fornecido pela ORDA para referenciar uma estrutura e aceder aos seus dados. La base de datos principal, devuelta por el comando `ds`, está disponible como datastore (el datastore principal).

Um datastore fornece:

- uma ligação à base de dados 4D
- um conjunto de classes de dados para trabalhar com a base de dados

O banco de dados pode ser um banco de dados local 4D (o datastore principal), ou um banco de dados 4D Server exposto como recurso REST (um datastore remote).

Um datastore faz referência apenas a uma única base de dados. É, no entanto, possível abrir vários repositórios de dados para aceder a vários bancos de dados.

## DataStore class

Classe para objetos datastore, onde é possível adicionar funções personalizadas.

## DataStoreImplementation

Nombre interno de la clase genérica DataStore en el class store `4D`.

## Cópia profunda

Uma cópia profunda (deep copy) duplica um objeto e todas as referências que contém. Após uma deep copy, uma coleção copiada contém os elementos duplicados e, por conseguinte, novas referências de todos os elementos originais. Ver também Cópia superficial.

## ds

`ds` es el comando del lenguaje 4D que devuelve una referencia de objeto [datastore](dsMapping.md#datastore). Corresponde ao datastore disponível no banco de dados principal 4D.

## Entity

Uma entidade é um objeto que corresponde a um modelo de dataclass. Uma entidade contém os mesmos atributos que a dataclass.

Uma entidade pode ser vista como uma instância da dataclass, como um registo da tabela que corresponde à dataclass no seu datastore associado. No entanto, uma entidade também contém dados relacionados. O objetivo da entidade é gerir dados (criar, atualizar, apagar).

For more information, see [entities](entities.md).

## Seleção de entidades

Uma seleção de entidades é um objeto. Quando uma solicitação é enviada ao datastore, uma seleção de entidades é retornada. Uma seleção de entidade é um conjunto de referências a entidades relacionadas com a mesma dataclass.

Uma seleção de entidade contém:

- um conjunto de 0 a X referências de entidades,
- uma propriedade length (sempre),
- propriedades queryPlan e queryPath (se solicitadas durante a consulta).

Uma seleção de entidade também pode estar vazia.

## Generic class

Classe incorporada para objetos ORDA, tais como entidades ou dataclasses. Las funciones y propiedades de las clases genéricas están disponibles automáticamente en las clases usuario extendidas, por ejemplo `EmployeeEntity`.

## Lazy loading

Uma vez que as entidades são geridas como referências, os dados só são carregados quando necessário, ou seja, quando se acede a eles no código ou através de widgets de interface. Este princípio de otimização é chamado lazy loading.

## Datastore principal

O objeto Datastore que corresponde ao banco de dados 4D aberto (autônomo ou cliente/servidor). O datastore principal é devolvido pelo comando ds.

## Métodos

Os objetos ORDA, tais como datastores, dataclasses, entity selections, e entities, definem as classes de objetos. Fornecem métodos específicos para interagir diretamente com eles. Estes métodos são também designados por funções membro. Estes métodos são utilizados chamando-os a uma instância do objeto.

Por ejemplo, el método `query()` es una member function de dataclass. Si ha almacenado un objeto dataclass en la variable `$myClass`, puede escribir:

```code4d
$myClass.query("name = smith")
```

## Tipo de dados misto

Nesta documentação, o tipo de dados "Misto" é utilizado para designar os vários tipos de valores que podem ser armazenados nos atributos de uma dataclass. Inclui:

- number
- text
- null
- boolean
- date
- object
- collection
- imagem(\*)

*(\*) el tipo Imagen no es soportado por los métodos estadísticos tales como* `entitySelection.max( )`.

## Bloqueio optimista

No modo "bloqueio otimista", as entidades não são bloqueadas explicitamente antes de serem atualizadas. Cada entidade tem um marcador interno que é automaticamente incrementado sempre que a entidade é guardada no disco. Os métodos entity.save( ) ou entity.drop( ) retornarão um erro se o marcador da entidade carregada e o marcador da entidade no disco não coincidirem, ou se a entidade tiver sido excluída. O bloqueio otimista só está disponível na implementação ORDA. Ver também "Bloqueio pessimista".

## Bloqueio pessimista

Um "bloqueio pessimista" significa que uma entidade é bloqueada antes de ser acedida, utilizando o método entity.lock( ). Outros processos não podem atualizar nem eliminar a entidade até esta ser desbloqueada. A linguagem 4D clássica só permite bloqueios pessimistas. Ver "Bloqueio optimista".

## Privilégio

La capacidad de ejecutar una o varias [acciones](#actions) en [recursos](#resource). Se pueden reunir varios privilegios en un [rol](#role) según la lógica empresarial.

## Propriedade

Ver [Atributo](#attribute).

> \> Attributes and properties are similar concepts. "Atributo" é utilizado para designar as propriedades da dataclass que armazenam os dados, enquanto "propriedade" é mais genérico e define um dado armazenado num objeto.

## PropertyPath

Um propertyPath é o caminho para uma propriedade num objeto dado. Se a propriedade estiver aninhada em vários níveis, cada nível é separado por um ponto (".").

## Regular class

Classe usuário não relacionada com um objeto ORDA.

## Related dataclass

Estas são dataclasses ligadas pelos atributos de relação.

## Atributo relacional

Os atributos de relação são utilizados para conceitualizar relações entre as dataclasses (N a 1 e 1 a N).

- Relação N a 1 (a dataclassA referir-se a uma ocorrência da dataclassB): um atributo da relação está disponível na dataclassA e referir-se a uma instância da dataclassB.
- Relação 1 a N (uma ocorrência de dataclassB referencia várias ocorrências de dataclassA): um atributo de relação está disponível na dataclassB e referencia várias instâncias de dataclassA.

Um dataclass pode ter atributos de relação recursivos.

Numa entidade, o valor de um atributo de relação pode ser uma entidade ou uma seleção de entidade.

## Entidades relacionadas

Uma entidade relacionada pode ser vista como a instância de um atributo de relação numa dataclass.

As selecções de entidades podem referir-se a entidades relacionadas conforme os atributos de relação definidos nas dataclasses correspondentes.

## Remote datastore

Um banco de dados 4D aberto em 4D ou 4D Server (disponível através de HTTP) e exposto como um recurso REST. Este banco de dados pode ser referenciada localmente como um Datastore a partir de outras estações de trabalho, onde lhe é atribuído um locaID. O datastore remoto pode ser utilizado através de conceitos ORDA (datastore, dataclass, seleção de entidades...). Esta utilização é submetida a um sistema de licenciamento.

## Recurso

Un elemento ORDA sobre el que se puede permitir o no cualquier[acción](#action) en función de un [privilegio](#privilege). Os recursos disponíveis são: o datastore, a dataclass, um atributo dataclass, uma função do modelo de dados ORDA ou um método projeto.

## Role

Un rol es un [privilegio](#privilege) publicado destinado a ser utilizado por un administrador. Pode conter um ou mais privilégios.

## Session

Quando a aplicação 4D se conecta a um datastore remoto, uma sessão é criada no 4D Server (HTTP). É gerado um cookie de sessão que é associado ao Id do datastore local.

Cada vez que uma nova sessão é aberta, é utilizada uma licença. Sempre que uma sessão é encerrada, a licença é libertada.

As sessões inativas são automaticamente encerradas após um tempo limite. El tiempo de espera por defecto es de 48 horas, puede ser fijado por el desarrollador (debe ser >= 60 minutos).

## Cópia superficial (Shallow copy)

Uma cópia superficial apenas duplica a estrutura dos elementos e mantém as mesmas referências internas. Após uma cópia superficial, duas coleções partilharão os elementos individuais. Ver também Deep copy.

## Stamp

Utilizado na tecnologia de bloqueio "otimista". Todas as entidades têm um contador interno, o marcador, incrementado sempre que a entidade é salva. Ao comparar automaticamente os marcadores entre uma entidade salva e sua versão armazenada no disco, 4D pode evitar modificações simultâneas nas mesmas entidades.

## Atributo de armazenamento

Um atributo de armazenamento (às vezes chamado atributo escalar) é o tipo mais básico de atributo em uma classe de datastore e corresponde mais diretamente a um campo em um banco de dados relacional. Um atributo de armazenamento contém um único valor para cada entidade da classe.
