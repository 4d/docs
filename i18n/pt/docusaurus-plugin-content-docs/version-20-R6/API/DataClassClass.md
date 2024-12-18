---
id: DataClassClass
title: DataClass
---

A [DataClass](ORDA/dsMapping.md#dataclass) fornece uma interface de objeto para uma tabela de banco de dados. Todas as lasses de um aplicativo 4D estão disponíveis como propriedade de 'ds' [datastore](ORDA/dsMapping.md#datastore).

### Resumo

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE DataClassClass.attributeName.Summary -->                                  |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)<br/><!-- INCLUDE #DataClassClass.all().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.clearRemoteCache().Syntax -->](#clearremotecache)<br/><!-- INCLUDE #DataClassClass.clearRemoteCache().Summary -->                   |
| [<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)<br/><!-- INCLUDE #DataClassClass.fromCollection().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)<br/><!-- INCLUDE #DataClassClass.get().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.getCount().Syntax -->](#getcount)<br/><!-- INCLUDE #DataClassClass.getCount().Summary -->                                           |
| [<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)<br/><!-- INCLUDE #DataClassClass.getDataStore().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataClassClass.getInfo().Summary -->                                              |
| [<!-- INCLUDE #DataClassClass.getRemoteCache().Syntax -->](#getremotecache)<br/><!-- INCLUDE #DataClassClass.getRemoteCache().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #DataClassClass.new().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)<br/><!-- INCLUDE #DataClassClass.newSelection().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)<br/><!-- INCLUDE #DataClassClass.query().Summary -->                                                    |
| [<!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Syntax -->](#setremotecachesettings)<br/><!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Summary --> |

<!-- REF DataClassClass.attributeName.Desc -->

## .*attributeName*

<details><summary>História</summary>

| Release | Mudanças                                       |
| ------- | ---------------------------------------------- |
| 19 R3   | Adicionado o atributo .exposed |
| 17      | Adicionado                                     |

</details>

<!-- REF DataClassClass.attributeName.Syntax -->***.attributeName*** : object<!-- END REF -->

#### Descrição

Os atributos das lasses de dados são <!-- REF DataClassClass.attributeName.Summary -->objetos que estão disponíveis diretamente como propriedades<!-- END REF --> dessas classes.

Os objetos retornados têm propriedades que você pode ler para obter informações sobre os atributos da classe de dados.

> Os objetos do atributo Dataclass podem ser modificados, mas a estrutura subjacente do banco de dados não será alterada.

#### Objeto devolvido

Os objetos atributos retornados contêm as seguintes propriedades:

| Propriedade      | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFilled       | Parâmetros | True se o valor do atributo for automaticamente preenchido por 4D. Corresponde às seguintes propriedades de campos 4D: "Autoincrement" para os campos de tipo numérico e "Auto UUID" para os campos UUID (alfa). Não retornado se `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| exposed          | Parâmetros | True se o atributo estiver exposto no REST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| fieldNumber      | integer    | Número interno do campo 4D do atributo. Não retornado se `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| fieldType        | Integer    | Tipo de campo de banco de dados 4D do atributo. Depende do atributo `kind`. Valores possíveis: <li>if `.kind` = "storage": corresponding 4D field type pe, consulte [`Value type`](https://doc.4d. om/4dv20/help/command/en/page1509.html)</li><li>if `.kind` = "relatedEntity": 38 (`is object`)</li><li>if `. ind` = "relatedEntities": 42 (`is collection`)</li><li>if `. ind` = "calculado" ou "alias" = o mesmo que acima, dependendo do valor resultante (tipo de campo, relatedEntity ou relatedEntities)</li> |
| indexed          | Parâmetros | True se houver um índice B-tree ou Cluster B-tree no atributo. Não retornado se `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| inverseName      | Text       | Nome do atributo que está do outro lado da relação. Retornado somente quando `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| keywordIndexed   | Parâmetros | True se houver um índice de palavras-chave no atributo. Não retornado se `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| kind             | Text       | Categoria do atributo. Valores possíveis:<li>"storage": armazenamento (ou escala), atributo ex: atributo armazenando um valor, não uma referência a outro atributo</li><li>"calculated": atributo calculado, ou seja, definido através de uma função [`get`](../ORDA/ordaClasses.md#function-get-attributename)</li><li>"alias": atributo construído sobre [outro atributo](../ORDA/ordaClasses.md#alias-attributes-1)</li><li>"relatedEntity": N -> 1 atributo de relação (referência a uma entidade)</li><li>"relatedEntities": 1 -> N atributo de relação (referência a uma seleção de entidade)</li>                     |
| obrigatório      | Parâmetros | True se a entrada de um valor null for rejeitada para o atributo. Não retornado se `.kind` = "relatedEntity" ou "relatedEntities". Nota: Esta propriedade corresponde à propriedade do campo "Reject NULL value input" ao nível do banco de dados 4D. Não tem relação com a propriedade existente "Mandatory"/obrigatório que é uma opção de controle de entrada de dados para uma tabela.                                                                                                                                                                                                                                                                                                                                            |
| name             | Text       | Nome do atributo como string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| path             | Text       | Caminho do [atributo de pseudônimo](../ORDA/ordaClasses.md#alias-attributes-1) baseado em uma relação                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| readOnly         | Parâmetros | True se o atributo for apenas de leitura. Por exemplo, atributos computados sem [função`set`](../ORDA/ordaClasses.md#function-set-attributename) são somente leitura.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| relatedDataClass | Text       | Nome dadataclass relacionada ao atributo. Retornado somente quando `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| type             | Text       | Tipo conceitual do valor do atributo, útil para programação genérica. Depende do atributo `kind`. Valores possíveis: <li>if `.kind` = "storage": "blob", "bool", "date", "image", "number", "object", ou "string". "number" is returned for any numeric types including duration; "string" is returned for uuid, alpha and text attribute types; "blob" attributes are [blob objects](../Concepts/dt_blob.md#blob-type).</li><li>if `.kind` = "relatedEntity": related dataClass name</li><li>if `.kind` = "relatedEntities": related dataClass name + "Selection" suffix</li><li>if `.kind` = "calculated" or "alias": same as above, depending on the result</li>   |
| unique           | Parâmetros | True se o valor do atributo tiver que ser único. Não retornado se `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

:::tip

Para programação genérica, use `Bool(attributeName.property)`, `Num(attributeName.property)` ou `String(attributeName.property)` (dependendo do tipo de propriedade) para obter um valor válido mesmo que a propriedade não seja retornada.

:::

#### Exemplo 1

```4d
$salary:=ds. Employee.salary //returns the salary attribute in the Employee dataclass
$compCity:=ds. Company["city"] //returns the city attribute in the Company dataclass
```

#### Exemplo 2

Considerando a seguinte estrutura do banco de dados:

![](../assets/en/API/dataclassAttribute.png)

```4d
var $firstnameAtt;$employerAtt;$employeesAtt : Object

 $firstnameAtt:=ds. Employee.firstname
  //{name:firstname,kind:storage,fieldType:0,type:string,fieldNumber:2,indexed:true,
  //keyWordIndexed:false,autoFilled:false,mandatory:false,unique:false}

 $employerAtt:=ds. Employee.employer
  //{name:employer,kind:relatedEntity,relatedDataClass:Company,
  //fieldType:38,type:Company,inverseName:employees}
  //38=Is object

 $employeesAtt:=ds. Company.employees
  //{name:employees,kind:relatedEntities,relatedDataClass:Employee,
  //fieldType:42,type:EmployeeSelection,inverseName:employer}
  //42=Is collection
```

#### Exemplo 3

Considerando as propriedades de tabela abaixo:

![](../assets/en/API/dataclassAttribute2.png)

```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds.Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->

<!-- REF DataClassClass.all().Desc -->

## .all()

<details><summary>História</summary>

| Release | Mudanças                        |
| ------- | ------------------------------- |
| 17 R5   | Suporte do parâmetro *settings* |
| 17      | Adicionado                      |

</details>

<!-- REF #DataClassClass.all().Syntax -->**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->

| Parâmetro  | Tipo                                |                             | Descrição                                                               |
| ---------- | ----------------------------------- | :-------------------------: | ----------------------------------------------------------------------- |
| settings   | Object                              |              ->             | Opção de construção: context                            |
| Resultados | 4D. EntitySelection | <- | Referencias sobre todas as entidades relacionadas com a classe de dados |

<!-- END REF -->

#### Descrição

A função `.all()` <!-- REF #DataClassClass.all().Summary -->consulta a datastore para encontrar todas as entidades relacionadas à classe de dados e as retorna como uma entity selection<!-- END REF -->.

As entidades são devolvidas na ordem padrão, que é inicialmente a ordem na qual foram criadas. Note no entanto que, se as entidades foram apagas e outras adicionadas, a ordem padrão não reflete mais sua ordem de criação.

Se nenhuma entidade correspondente for encontrada, uma seleção de entidade vazia é retornada.

Se aplica carregamento diferido/lazy loading.

**settings**

No parâmetro opcional *settings*, você pode passar um objeto que contenha opções adicionais. As propriedades abaixo são compatíveis:

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context     | Text | Etiqueta para o contexto de otimização aplicado a seleção de entidades. Este contexto será utilizado pelo código que maneja a seleção de entidades para que possa se beneficiar da otimização. Esta funcionalidade é [concebida para processamento ORDA cliente/servidor](../ORDA/client-server-optimization.md). |

> Para conhecer o número total de entidades em um dataclass, é recomendado utilizar a função [`getCount()`](#getcount) que é mais otimizada do que a expressão `ds.myClass.all().length`.

#### Exemplo

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```

<!-- REF #DataClassClass.clearRemoteCache().Desc -->

## .clearRemoteCache()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataClassClass.clearRemoteCache().Syntax -->**.clearRemoteCache()**<!-- END REF -->

<!-- REF #DataStoreClass.clearRemoteCache().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

A função `.clearRemoteCache()` <!-- REF #DataClassClass.clearRemoteCache().Summary -->esvazia o cache ORDA de uma dataclass<!-- END REF -->.

> Esta função não reinicia os valores `timeout` e `maxEntries`.

#### Exemplo

```4d
var $ds : 4D. DataStoreImplementation
var $persons : cs. PersonsSelection
var $p : cs. PersonsEntity
var $cache : Object
var $info : Collection
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds. Persons.all()
$text:="" For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / " End for each

$cache:=$ds. Persons.getRemoteCache()

$ds. Persons.clearRemoteCache()
// Cache of the Persons dataclass = {timeout:30;maxEntries:30000;stamp:255;entries:[]}
```

\####Veja também

[`entitySelection.refresh()`](EntitySelectionClass.md#refresh)

<!-- END REF -->

<!-- REF DataClassClass.fromCollection().Desc -->

## .fromCollection()

<details><summary>História</summary>

| Release | Mudanças                        |
| ------- | ------------------------------- |
| 17 R5   | Suporte do parâmetro *settings* |
| 17      | Adicionado                      |

</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.fromCollection().Params -->

| Parâmetro  | Tipo                                |                             | Descrição                                    |
| ---------- | ----------------------------------- | :-------------------------: | -------------------------------------------- |
| objectCol  | Collection                          |              ->             | Coleção de objetos a mapear com entidades    |
| settings   | Object                              |              ->             | Opção de construção: context |
| Resultados | 4D. EntitySelection | <- | Seleção de entidades preenchidas da coleção  |

<!-- END REF -->

#### Descrição

A função `.fromCollection()`<!-- REF #DataClassClass.fromCollection().Summary --> atualiza ou cria entidades na dataclass de acordo com a coleção *objectCol* de objetos e retorna a seleção de entidades correspondente<!-- END REF -->.

No parâmetro *objectCol*, passa uma coleção de objetos para criar novas entidades ou atualizar as existentes da classe de dados. Os nomes das propriedades devem ser os mesmos que os dos atributos da classe de dados. Se um nome de propriedade não existir na dataclass, é ignorado. Se um valor de atributo não for definido na coleção, seu valor será null.

O mapeamento entre os objetos da coleção e as entidades é feito sobre os **nomes dos atributos** e **tipos correspondentes**. Se uma propriedade de um objeto tiver o mesmo nome que um atributo de entidade mas seus tipos não corresponderem, o atributo da entidade não é preenchido.

**Modo criação ou atualização**

Para cada objeto de *objectCol*:

- Se o objeto conter uma propriedade booleana "\__NEW" estabelecida em false (ou não conter uma propriedade booleana "\__NEW"), a entidade se atualiza ou se cria com os valores correspondentes das propriedades do objeto. Nenhuma comprovação é realizada com respeito à chave primária:
  - Se a chave primária for dada e existir, a entidade é atualizada. Nesse caso, a chave primária pode ser dada como etá ou com uma propriedade "\_\_KEY"  (preenchida com o valor da chave primária).
  - Se a chave primária for dada (como é) e não existir, a entidade é criada
  - Se a chave primária não for dada, a entidade é criada e o valor da chave primária é assignado com respeito às regras padrão de database.
- Se o objeto conter uma propriedade boolean "\_\_NEW" estabelecida como **true**, a entidade é criada com os valores correspondente dos atributos de objeto. Uma comprovação é realizada com relação à chave primária:
  - Se a chave primária for dada (como está) e existir, um erro é enviado.
  - Se a chave primária for dada (como é) e não existir, a entidade é criada
  - Se a chave primária não for dada, a entidade é criada e o valor da chave primária é assignado com respeito às regras padrão de database.

> A propriedade "\_\*KEY" que contém um valor só é tida em conta quando a propriedade "\*\*NEW" está definida como **false** (ou é omitida) e existe uma entidade correspondente. Em todos os outros casos, o valor da propriedade "\*\_KEY" é ignorado, o valor da chave primária deve ser passado "tal como está".

**Entidades relacionadas**

Os objetos de *objectCol* podem conter um ou mais objetos aninhados que apresentam uma ou mais entidades relacionadas, o que pode ser útil para criar ou atualizar links entre entidades.

Os objetos aninhados que apresentam entidades relacionadas devem conter uma propriedade "\_\*KEY" (preenchido com o valor da chave primária da entidade relacionada) ou o atributo de chave primária da própria entidade relacionada. O uso de uma propriedade \*\_KEY permite a independência do nome do atributo da chave primària.

> O conteúdo das entidades relacionadas não pode ser criado / atualizado através deste mecanismo.

**Stamp**

Se um atributo \_\_STAMP for dado, se realiza uma comprovação com o selo no armazén de dados e se pode devolver um erro ("O selo dado não coincide com o atual para o registro# XX da tabela XXXX"). Para obter mais informações, consulte [Bloqueio de Entity](ORDA/entities.md#entity-locking).

**settings**

No parâmetro opcional *settings*, você pode passar um objeto que contenha opções adicionais. As propriedades abaixo são compatíveis:

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context     | Text | Etiqueta para o contexto de otimização aplicado a seleção de entidades. Este contexto será utilizado pelo código que maneja a seleção de entidades para que possa se beneficiar da otimização. Esta funcionalidade é [concebida para processamento ORDA cliente/servidor](../ORDA/client-server-optimization.md). |

#### Exemplo 1

Queremos atualizar uma entidade existente. A propriedade \_\_NEW não for dada, a chave primária do empregado é dada e existe:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 //PK existente na tabela Employee
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) //PK existente na dataClass Company
  // Para este funcionário, podemos alterar a Company usando outro PK existente na dataClass Company
 $empsCollection.push($emp)
 $employees:=ds. Employee.fromCollection($empsCollection)
```

#### Exemplo 2

Queremos atualizar uma entidade existente. A propriedade \_\*NEW não é dada, a chave primária do empregado com o atributo \*\_KEY e existir:

```4d
 var $empsCollection : Coleção
 var $emp : Objeto
 var $employees : cs. ColloyeeSelection

 $empsCollection:=Nova coleção
 $emp:=Novo objeto
 $emp. _KEY:=1720 //Existente PK na tabela
 $emp.firstName:="John"
 $emp. astName:="Boorman"
 $emp. mployer:=Novo objeto("ID"; 21) //PK existente na dataClass Company
  // Para este funcionário, podemos alterar a Empresa usando outro PK existente na dataClass
 $empsCollection. ush($emp)
 $employees:=ds.Empregado.fromCollection($empsCollection)
```

#### Exemplo 3

Se quiser simplesmente criar uma nova entidade da coleção::

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Victor"
 $emp.lastName:="Hugo"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemplo

Queremos criar uma entidade. A propriedade \_\_NEW é True, a chave primária de empregado não é dada:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 //PK existente na tabela Employee
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) //PK existente na dataClass Company
 // FPara este funcionário, podemos alterar a Company usando outro PK existente na dataClass Company
 $empsCollection.push($emp)
 $employees:=ds. Employee.fromCollection($empsCollection)






```

#### Exemplo 2

Queremos criar uma entidade. Se a propriedade \_\_NEW é omitida, a chave primária do empregado é dada e não existir:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=Nova coleção
 $emp:=Novo objeto
 $emp.ID:=10000 //Chave primária inexistente
 $emp.firstName:="Françoise"
 $emp.lastName:="Sagan"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemplo 6

Neste exemplo, a primeira entidade se criará e salvará mas a segunda falhará já que ambas utilizam a mesma chave primaria:

```4d
 var $empsCollection : Collection
 var $emp; $emp2 : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10001 // Unexisting primary key
 $emp.firstName:="Simone"
 $emp.lastName:="Martin"
 $emp.__NEW:=True
 $empsCollection.push($emp)

 $emp2:=New object
 $emp2.ID:=10001 // Same primary key, already existing
 $emp2.firstName:="Marc"
 $emp2.lastName:="Smith"
 $emp2.__NEW:=True
 $empsCollection.push($emp2)
 $employees:=ds. Employee.fromCollection($empsCollection)
  //first entity is created
  //duplicated key error for the second entity
```

#### Veja também

[**.toCollection()**](EntitySelectionClass.md#tocollection)

<!-- END REF -->

<!-- REF DataClassClass.get().Desc -->

## .get()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #DataClassClass.get().Syntax -->**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br/>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->

<!-- REF #DataClassClass.get().Params -->

| Parâmetro  | Tipo                       |                             | Descrição                                            |
| ---------- | -------------------------- | :-------------------------: | ---------------------------------------------------- |
| primaryKey | Integer OR Text            |              ->             | Valor da chave primária da entidade a recuperar      |
| settings   | Object                     |              ->             | Opção de construção: context         |
| Resultados | 4D. Entity | <- | Entidade que coincide com a chave primária designada |

<!-- END REF -->

#### Descrição

A função `.get()` <!-- REF #DataClassClass.get().Summary -->consulta o dataclass para recuperar a entidade que corresponde ao parâmetro *primaryKey*<!-- FIM REF -->.

Em *primaryKey*, passe a chave primária da entidade para recuperar. Em <em x-id="3">primaryKey</em>, passe o valor da chave primária da entidade a recuperar Em <em x-id="3">primaryKey</em>, passe o valor da chave primária da entidade a recuperar O tipo valor deve coresponder com o tipo de chave primária estabelecido na datastore (Inteiro ou texto). Você também pode ter certeza de que o valor da chave primária é sempre retornado como Texto usando o [`. etKey()`](EntityClass.md#getkey) com a função `dk key como parâmetro`.

Se nenhuma entidade for encontrada com *primaryKey*, uma entidade **Null** será retornada.

É aplicado o lazy loading/carregamento diferido, ou seja os dados relacionados são carregados do disco só quando pedidos.

**settings**

No parâmetro opcional *settings*, você pode passar um objeto que contenha opções adicionais. As propriedades abaixo são compatíveis:

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                                                                                      |
| ----------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context     | Text | Etiqueta para o contexto de otimização automático aplicados à entidade. Esse contexto será usado pelo código subsequente que carrega a entidade para que se possa beneficiar da otimização. Esta funcionalidade é [concebida para processamento ORDA cliente/servidor](../ORDA/client-server-optimization.md). |

:::info

Quando você chama a função `.get()` **sem** parâmetro *configurações*, uma solicitação para valores de atributos é enviada diretamente para o servidor (o [cache ORDA](. /ORDA/client-server-optimization.md#orda-cache) não é usado). Por outro lado, quando você chama o `. função et()` **com** um `context` passado no parâmetro *settings*, valores de atributo são recuperados do cache ORDA correspondente ao contexto. Nesse caso, pode ser aconselhável chamar [`reload()`] (EntityClass.md#reload) para garantir que os dados mais recentes sejam recuperados do servidor.

:::

#### Exemplo 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // retorna a entidade cujo valor da chave primária é 167
 $entity2:=ds.Invoice.get("DGGX20030") // retorna a entidade cujo valor da chave primária é "DGGX20030"
```

#### Exemplo 2

Este exemplo ilustra o uso da propriedade *context*:

```4d
 var $e1; $e2; $e3; $e4 : cs. mployeeEntity
 var $settings; $settings2 : Objeto

 $settings:=Novo objeto("contexto"; de")
 $settings2:=Novo objeto("contexto";"resumo")

 $e1:=ds. Colaborador. et(1;$settings)
 completeAllData($e1) // Em completeAllData método uma otimização é acionada e associada ao contexto "detalhe"

 $e2:=ds. Colaborador. et(2;$settings)
 completeAllData($e2) // Em completeAllData método a otimização associada ao "detalhe" é aplicada

 $e3:=ds.Employee. et(3;$settings2)
 completeSumário ($e3) //Em resumo completo, uma otimização é acionada e associada ao contexto "resumo"

 $e4:=ds. mployee.get(4;$settings2)
 completeSummary($e4) //In completeSummary método, a otimização associada ao contexto "resumo" é aplicada
```

<!-- END REF -->

<!-- REF DataClassClass.getCount.Desc -->

## .getCount()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataClassClass.getCount().Syntax -->**.getCount()** : Integer <!-- END REF -->

<!-- REF #DataClassClass.getCount().Params -->

| Parâmetro | Tipo    |                             | Descrição                              |
| --------- | ------- | --------------------------- | -------------------------------------- |
| resultado | Integer | <- | Número de entidades na classe de dados |

<!-- END REF -->

#### Descrição

A função `.getCount()` <!-- REF #DataClassClass.getCount().Summary --> retorna o número de entidades em uma dataclass<!-- END REF -->.

Se esta função for utilizada dentro de uma transacção, as entidades criadas durante a transação serão levadas em consideração.

#### Exemplo

```4d
var $ds : 4D. DataStoreImplementation
var $number : Integer

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$number:=$ds. Persons.getCount()
```

<!-- END REF -->

<!-- REF DataClassClass.getDataStore().Desc -->

## .getDataStore()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #DataClassClass.getDataStore().Syntax -->**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->

| Parâmetro  | Tipo                          |                             | Descrição               |
| ---------- | ----------------------------- | :-------------------------: | ----------------------- |
| Resultados | cs. DataStore | <- | Informação da dataclass |

<!-- END REF -->

#### Descrição

A função `.getDataStore()` <!-- REF #DataClassClass.getDataStore().Summary -->retorna o datastore para a dataclass especificada<!-- END REF -->.

A datastore pode ser:

- o datastore principal, como devolvido pelo comando `ds`.
- uma datastore remota, aberta usando o comando `Open datastore`.

#### Exemplo

O método de projeto ***SearchDuplicate*** procura por valores duplicados em qualquer dataclass.

```4d
 var $pet : cs.CatsEntity

 $pet:=ds.Cats.all().first() //obter uma entidade
 SearchDuplicate($pet;"Dogs")
```

```4d
  // SearchDuplicate method
  // SearchDuplicate(entity_to_search;dataclass_name)

 #DECLARE ($pet : Object ; $dataClassName : Text)
 var $dataStore; $duplicates : Object  

 $dataStore:=$pet.getDataClass().getDataStore()
 $duplicates:=$dataStore[$dataClassName].query("name=:1";$pet.name)
```

<!-- END REF -->

<!-- REF DataClassClass.getInfo().Desc -->

## .getInfo()

<details><summary>História</summary>

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 19 R3   | A propriedade exposed foi adicionada |
| 17 R5   | Adicionado                           |

</details>

<!-- REF #DataClassClass.getInfo().Syntax -->**.getInfo()** : Object <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->

| Parâmetro  | Tipo   |                             | Descrição              |
| ---------- | ------ | --------------------------- | ---------------------- |
| Resultados | Object | <- | Datastore da dataclass |

<!-- END REF -->

#### Descrição

A função `.getInfo()` <!-- REF #DataClassClass.getInfo().Summary -->retorna um objeto que fornece informações sobre a dataclass<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Objeto devolvido**

| Propriedade | Tipo       | Descrição                                 |
| ----------- | ---------- | ----------------------------------------- |
| exposed     | Parâmetros | True se a dataclass for exposta em REST   |
| name        | Text       | Nome da dataclass                         |
| primaryKey  | Text       | Nome da chave primária da classe de dados |
| tableNumber | Integer    | Número daa tabela 4D interna              |

#### Exemplo 1

```4d
 #DECLARE ($entity : Object)  
 var $status : Object

 computeEmployeeNumber($entity) //faz uma ação na entidade

 $status:=$entity.save()
 if($status.success)
    ALERT("Record updated in table "+$entity.getDataClass().getInfo().name)
 End if
```

#### Exemplo 2

```4d
 var $settings : Object
 var $es : cs.ClientsSelection

 $settings:=New object
 $settings.parameters:=New object("receivedIds";getIds())
 $settings.attributes:=New object("pk";ds.Clients.getInfo().primaryKey)
 $es:=ds.Clients.query(":pk in :receivedIds";$settings)
```

#### Exemplo 3

```4d
 var $pk : Text
 var $dataClassAttribute : Object

 $pk:=ds.Employee.getInfo().primaryKey
 $dataClassAttribute:=ds.Employee[$pk] // Se necessário, o atributo correspondente à chave primária estará acessível
```

<!-- END REF -->

<!-- REF DataClassClass.getRemoteCache().Desc -->

## .getRemoteCache()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataClassClass.getRemoteCache().Syntax -->**.getRemoteCache**() : Object <!-- END REF -->

<!-- REF #DataClassClass.getRemoteCache().Params -->

| Parâmetro | Tipo   |                             | Descrição                                                                       |
| --------- | ------ | --------------------------- | ------------------------------------------------------------------------------- |
| resultado | Object | <- | Objecto que descreve o conteúdo da cache ORDA para o dataclass. |

<!-- END REF -->

> **Modo avançado:** Essa função é destinada a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

A função `.getRemoteCache()` <!-- REF #DataClassClassClass.getRemoteCache().Summary -->retorna um objeto que contém os conteúdos do cache ORDA para um dataclass.<!-- END REF -->.

Chamar esta função a partir de uma aplicação 4D monousuário retorna `Null`.

O objeto retornado tem as propriedades abaixo:

| Propriedade | Tipo       | Descrição                                                                                          |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------- |
| maxEntries  | Integer    | Número máximo de entradas recolhidas.                                              |
| stamp       | Integer    | Carimbo da cache.                                                                  |
| timeout     | Integer    | Tempo restante antes que as novas entradas na cache sejam marcadas como expiradas. |
| \|          | Collection | Contém um objecto de entrada para cada entidade na cache.                          |

Cada objeto de entrada na coleção `entries` possui as seguintes propriedades:

| Propriedade | Tipo       | Descrição                                   |
| ----------- | ---------- | ------------------------------------------- |
| data        | Object     | Objeto que contém os dados da entrada       |
| expired     | Parâmetros | True se a entrada tiver expirado            |
| \|          | Text       | Chave primária da entidade. |

O objecto `data` em cada entrada contém as seguintes propriedades:

| Propriedade                                           | Tipo         | Descrição                                                                                                                                                  |
| ----------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | Text         | Chave primária da entidade                                                                                                                                 |
| __STAMP     | Integer      | Stamp da entidade na base de dados                                                                                                                         |
| __TIMESTAMP | Text         | Stamp da entidade na base de dados (formato é YYYY-MM-DDTHH:MM:SS:ms:Z) |
| dataClassAttributeName                                | Diferente de | Se houver dados na cache para um atributo dataclass, estes são devolvidos numa propriedade com o mesmo tipo que na base de dados.          |

Os dados relativos a entidades relacionadas são armazenados na cache do objecto de dados.

#### Exemplo

No exemplo seguinte, `$ds.Persons.all()` carrega a primeira entidade com todos os seus atributos. Depois, a optimização do pedido é desencadeada, pelo que apenas `firstname` e `address.city` são carregados.

Note que o arquivo 'address.city' está carregado no cache das 'Persons'.

Apenas a primeira entidade da dataclass `Address` é armazenada na cache. É carregado durante a primeira iteração do loop.

```4d
var $ds : 4D. DataStoreImplementation
var $persons : cs. PersonsSelection
var $p : cs. PersonsEntity
var $cachePersons; $cacheAddress : Object
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds. Persons.all()

$text:="" For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / " End for each

$cachePersons:=$ds. Persons.getRemoteCache()
$cacheAddress:=$ds. Adress.getRemoteCache()
```

#### Veja também

[.setRemoteCacheSettings()](#setremotecachesettings)<br/>[.clearRemoteCache()](#clearremotecache)

<!-- REF DataClassClass.new().Desc -->

## .new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #DataClassClass.new().Syntax -->**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->

| Parâmetro  | Tipo                       |                             | Descrição                                        |
| ---------- | -------------------------- | --------------------------- | ------------------------------------------------ |
| Resultados | 4D. Entity | <- | Nova entidade que coincide com a classe de dados |

<!-- END REF -->

#### Descrição

A função `.new()` <!-- REF #DataClassClass.new().Summary -->cria na memória e retorna uma nova entidade em branco relacionada à Dataclass<!-- END REF -->.

O objeto entidade é criado em memória e não é salvo no banco de dados até que a função [`.save( )`](EntityClass.md#save) seja chamada. Se a entidade for apagada antes de ser salva, não se pode recuperar.

**4D Servidor**: No servidor cliente, se a chave primária da tabela correspondente for auto-incrementada, será calculado quando a entidade for salva no servidor.

Todos os atributos da entidade são inicializados com o valor **null**.

> Atributos podem ser inicializados com valores padrão se a opção **Mapa NULL para valores em branco** for selecionada no nível de estrutura de banco de dados 4D.

#### Exemplo

Este exemplo cria uma nova entidade na classe de dados "Log" e registra a informação no atributo "info":

```4d
 var $entity : cs.LogEntity
 $entity:=ds.Log.new() //create a reference
 $entity.info:="Nova entrada" //armazenar alguma informação
 $entity.save() //salvar a entidade
```

<!-- END REF -->

<!-- REF DataClassClass.newSelection().Desc -->

## .newSelection()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #DataClassClass.newSelection().Syntax -->**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->

| Parâmetro  | Tipo                                |                             | Descrição                                                                                                                                                                                         |
| ---------- | ----------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder  | Integer                             | ->                          | `dk keep ordered`: cria uma seleção de entidades ordenada,<br/>`dk non ordered`: cria uma seleção de entidade não ordenada (padrão se omitido) |
| Resultados | 4D. EntitySelection | <- | Nova seleção de entidades em branco relacionadas com a classe de dados                                                                                                                            |

<!-- END REF -->

#### Descrição

A função `.newSelection()` <!-- REF #DataClassClass.newSelection().Summary -->cria uma nova seleção de entidades em branco, não compartilhável, relacionada à dataclass, na memória<!-- END REF -->.

> Para informações sobre seleções de entidades não compartilháveis, consulte [esta seção](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

Se quiser criar uma seleção de entidades ordenada, passe o seletor `dk keep ordered` no parâmetro *keepOrder*. Por padrão, se você omitir este parâmetro, ou se passar o seletor `dk non ordered`, o método cria uma seleção de entidades não ordenada. As seleções de entidades desordenadas são mais rápidas mas não se pode confiar nas posições das entidades. Para mais informações, por favor consulte [Seleções de entidades ordenadas vs não ordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

Quando criada, a seleção de entidades não contém nenhuma entidade (`mySelection.length` retorna 0). Este método permite construir seleções de entidades gradualmente fazendo chamadas subsequentes à função [`add()`](EntitySelectionClass.md#add).

#### Exemplo

```4d
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() //criar uma seleção vazia sem ordenação da entidade
 $OSelection:=ds.Employee.newSelection(dk keep ordered) //criar uma seleção de entidade vazia ordenada
```

<!-- END REF -->

<!-- REF DataClassClass.query().Desc -->

## .query()

<details><summary>História</summary>

| Release | Mudanças                               |
| ------- | -------------------------------------- |
| 17 R6   | Soporte dos Parâmetros Formula         |
| 17 R5   | Suporte dos marcadores para os valores |
| 17      | Adicionado                             |

</details>

<!-- REF #DataClassClass.query().Syntax -->**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.query().Params -->

| Parâmetro     | Tipo                                |                             | Descrição                                                                                                                                            |
| ------------- | ----------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text                                | ->                          | Criterios de pesquisa como string                                                                                                                    |
| formula       | Object                              | ->                          | Criterios de pesquisa como objeto fórmula                                                                                                            |
| value         | any                                 | ->                          | Valores a usar para placeholders indexados                                                                                                           |
| querySettings | Object                              | ->                          | Opções de pesquisa: parâmetros, atributos, args, allowFormulas, contexto, queryPath,queryPlan                                        |
| Resultados    | 4D. EntitySelection | <- | Nova seleção de entidade composta por entidades da classe de dados que atendem aos critérios de pesquisa especificados em *queryString* ou *formula* |

<!-- END REF -->

#### Descrição

A função `.query()` busca entidades que atendam aos critérios de pesquisa especificados em *queryString* ou *formula* e (opcionalmente) *value*(s), para todas as entidades na classe de dados, e retorna um novo objeto do tipo `EntitySelection` contendo todas as entidades encontradas. Se aplica carregamento diferido/lazy loading.

Se nenhuma entidade correspondente for encontrada, uma `EntitySelection` vazia é retornada.

#### parâmetro queryString

O parâmetro *queryString* usa a seguinte sintaxe:

```4d
attributePath|formula comparator value   
 {logicalOperator attributePath|formula comparator value}   
 {order by attributePath {desc | asc}}
```

onde:

- **attributePath**: caminho de atributo no qual se pretende executar a consulta. Os atributos se expressam como pares propriedade/ valor, onde propriedade é o nome do marcador de posição inserido para uma rota de atributo em <em x-id="3">queryString</em> ou <em x-id="3">formula</em> (":placeholder") e valor pode ser uma string ou uma coleção de strings. No caso de um caminho de atributo cujo tipo é `Collection`, a notação `[]` é usada para lidar todas as ocorrências (por exemplo `children[].age`).

> *Você não pode usar diretamente atributos cujo nome contém caracteres especiais, como ". , "\[ ]", ou "=", ">", "#"..., porque eles serão avaliados incorretamente na frase da consulta. Se precisar consultar tais atributos, deve considerar o uso de espaços reservados, que permite uma gama extendida de caracteres em caminhos de atributos (veja* **Usando espaços reservados** *abaixo).*

- **formula**: uma fórmula válida passada como `Text` ou `Object`. A fórmula será avaliada para cada entidade processada e deve retornar um valor booleano. Na fórmula, a entidade está disponível através do objeto `This`.

  - **Text**: a string de fórmula deve ser precedida pela declaração `eval()`, para que o parser da consulta avalie a expressão corretamente. Por exemplo: *"eval(length(This.lastname) >=30) "*
  - **Objeto**: o [objeto fórmula](FunctionClass.md) é passado como um **marcador de posição** (ver abaixo). A fórmula deve ter sido criada usando o comando [`Fórmula`](FunctionClass.md#formula) ou [`Formula da string`](FunctionClass.md#formula-from-string).

> * Lembre que as fórmulas 4D só suportam os símbolos `&` e `|` como operadores lógicos.
> * Se a fórmula não for o único critério de pesquisa, o otimizador de motor debusca poderia processar outros critérios previamente (por exemplo atributos indexados) e assim, a fórmula poderia ser avaliada apenas para um subconjunto de entidades.

Fórmulas nas consultas podem receber parâmetros através de $1. Este ponto está detalhado no parágrafo de **fórmula** abaixo.

> - Você também pode passar diretamente um objeto parâmetro `formula` em vez do parâmetro `queryString` (recomendado quando as fórmulas são mais complexas). Ver o parágrafo **Parâmetro fórmula** mais abaixo.
> - Por razões de segurança, chamadas de fórmula dentro de funções `query()` podem ser desabilitadas. Consulte a descrição do parâmetro `querySettings`.

- **comparator**: símbolo que compara *attributePath* e *value*. Os simbolos abaixo são compatíveis:

| Comparação                               | Símbolos                    | Comentário                                                                                                                                                                                                                        |
| ---------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Igual a                                  | =, ==                       | Retorna os dados coincidentes, admite o coringa (@), não diferencia entre maiúsculas e minúsculas nem diacríticas.                                                                |
|                                          | ===, IS                     | Retorna os dados coincidentes, considera @ como caractere padrão, não diferencia entre maiúsculas e minúsculas nem diacríticas                                                                                       |
| Diferente de                             | #, !=                       | Suporta o coringa (@). Equivalente a "Condição não aplicada em uma declaração" ([ver abaixo](#not-equal-to-in-collections)).                   |
|                                          | !==, IS NOT                 | Considera  @ como um caractere normal                                                                                                                                                                                |
| Não se aplica à condição de uma sentença | NOT                         | Parentesis são obrigatórios quando usar NOT antes de uma instrução que contenha vários operadores. Equivalente a "Not equal to" ([veja abaixo](#not-equal-to-in-collections)). |
| Menor que                                | <  |                                                                                                                                                                                                                                   |
| Maior que                                | >                           |                                                                                                                                                                                                                                   |
| Menor que ou igual a                     | <= |                                                                                                                                                                                                                                   |
| Maior ou igual a                         | > =                         |                                                                                                                                                                                                                                   |
| Incluído em                              | IN                          | Retorna dados iguais a ao menos um dos valores de uma coleção ou de um conjunto de valores, admite o coringa (@)                                                                                  |
| Contém palavra chave                     | %                           | As palavras chaves podem ser usadas em atributos de string ou imagem                                                                                                                                                              |

- **value**: o valor a comparar ao valor atual da propriedade de cada entidade na seleção de entidade. Pode ser um **marcador** (ver **Uso de marcadores** abaixo) ou qualquer expressão que coincida com a propriedade de tipo de dados. Observe que, em caso de incompatibilidade de tipo com tipos escalares (texto, data, número...), 4D tentará converter o tipo de **valor** para o tipo de atributo sempre que possível, para um tratamento mais fácil de valores vindos da Internet. Por exemplo, se a string "v20" for digitada como **valor** para comparar com um atributo inteiro, ela será convertida em 20.
  Quando usar um valor constante, as regras abaixo devem ser respeitadas:
  - A constante de tipo texto pode ser passada com ou sem aspas simples (ver **Uso de aspas mais abaixo**). Para pesquisar uma stirng dentro de uma string (uma pesquisa "contém") use o símbolo coringa (@) em valor para isolar a string a ser pesquisada como mostrado neste exemplo: "@Smith@". As palavras chaves abaixo são proibidas para constantes de texto: true, false.
  - Valores constantes de tipo **booleano**: **true** ou **false** (diferencia maiúscula de minúscula).
  - \*\*Valores constantes de tipo **numérico**: os decimais se separam com um '.' (ponto).
  - constantes de tipo **date**: formato "YYYY-MM-DD"
  - **null** constante: usando a palavra-chave "null" irá encontrar as propriedades **null** e **undefined**.
  - no caso de uma pesquisa com um comparador IN, *valor* deve ser uma coleção, ou valores que coincidam com o tipo da rota do atributo entre \[ ] separados por vírgulas (para as strings, os caracteres `"` devem ser escapados com `\`).
- **logicalOperator**: usado para participar de múltiplas condições na consulta (opcional). Pode usaar um dos operadores lógicos abaixo (ou o nome ou o símbolo podem ser usados):

| Conjunção | Símbolos                                                               |
| --------- | ---------------------------------------------------------------------- |
| AND       | &, &&, and |
| OU        | \|,\|\|, or                                                            |

- **ordem por attributePath**: você pode incluir uma ordem pela instrução *attributePath* na consulta, para que os dados resultantes sejam classificados de acordo com essa afirmação. Você pode usar várias ordens por declarações, separadas por vírgulas (por exemplo, ordem por *attributePath1* desc, *attributePath2* ascens). Como padrão, a ordem é ascendente. Passe 'desc'' para definir uma ordem descendente e 'asc' para definir uma ordem ascendente.

> Se você usar essa declaração, a seleção de entidade retornada será ordenada (para mais informações, por favor consulte [Seleções de entidades ordenadas vs não ordenadas](ORDA/dsMapping.md#seleção-de-entidades-ordenadas-ou-não-ordenadas)).

#### Usar aspas

Ao usar aspas dentro das consultas, você deve usar aspas simples ' ' dentro da consulta e aspas duplas " " para envolver toda a consulta, caso contrário, será retornado um erro. Por exemplo:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```

> Aspas siples (') não são permitidas nos valores pesquisados, já que quebrariam a string de pesquisa. Por exemplo, "comp.name = 'John's pizza' " gerará um erro. Se precisar pesquisar valores com aspas simples, pode considerar o uso de placeholders (ver abaixo).

#### Usando parêntesis

Você pode usar parênteses na consulta para dar prioridade ao cálculo. Por exemplo, pode organizar uma pesquisa da seguinte maneira:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```

#### Uso de placeholders

4D lhe permite utilizar placeholders, marcadores de posição, para os argumentos attributePath, formula e value dentro do parâmetro queryString. Um placeholder é um parâmetro que você insere em cadeias de consulta e que é substituído por outro valor quando a cadeia de consulta é avaliada. O valor dos placeholders é avaliado uma vez no início da consulta; ele não é avaliado para cada elemento.

Dois tipos de marcadores podem ser usados: placeholders indexados \*\* e **placeholders nomeados**:

|           | Marcadores de posição indexados                                                                                                                                                                                                                                                                                                                                | Placeholders nomeados                                                                                                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definição | Os parâmetros são inseridos como `:paramIndex` (por exemplo :1, :2...) no *queryString* e seus respectivos valores são fornecidos pela sequência de parâmetro(s) *value*. É possível utilizar até 128 parâmetros *value* | Os parâmetros são inseridos como `:paramName` (por exemplo :myparam) e seus valores são fornecidos nos atributos e/ou objetos de parâmetros no parâmetro *querySettings* |
| Exemplo   | `$r:=class.query(":1=:2";"city";"Chicago")`                                                                                                                                                                                                                                                                                                                    | `$o.attributes:=New object("att";"city")`<br/> `$o.parameters:=New object("name";"Chicago")`<br/> `$r:=class.query(":att=:name";$o)`                                                                        |

É possível misturar todos os tipos de argumentos em *queryString*. Um *queryString* pode conter, para os parâmetros *attributePath*, *formula* e *value*:

- valores diretos (sem placeholders),
- placeholders indexados ou com nome.

O uso de placeholders em consultas **é recomendado** pelos seguintes motivos:

1. Evita a inserção de código malicioso: se user diretamente variáveis preenchidas com uma string de pesquisa, um usuário poderia modificar as condições de pesquisa entrando argumentos adicionais. Por exemplo, imagine uma string de pesquisa como:

```4d
 $vquery:="status = 'público' & nome = "+meunome //usuário entra em seu nome
 $result:=$col.query($vquery)
```

Essa consulta parece segura, pois os dados não públicos são filtrados. No entanto, se o usuário inserir na área *myname* algo como *"smith OR status='private'*,\* a string de consulta será modificada na etapa de interpretação e poderá retornar dados privados.

Ao usar placeholders, não é possível substituir as condições de segurança:

```4d
 $result:=$col.query("status='public' & name=:1";myname)
```

Neste caso, se o usuário digitar *smith OR status='private'* na área *myname*, isso não será interpretado na string de consulta, mas apenas passado como um valor. A busca por uma pessoa chamada "smith OR status='private'" simplesmente falhará.

2. Isso evita ter que se preocupar com problemas de formatação ou caracteres, especialmente ao lidar com os parâmetros *attributePath* ou *value* que podem conter caracteres não alfanuméricos, como ".", "['...

3. Permite o uso de variáveis ou expressões nos argumentos de pesquisa. Exemplos:

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

#### Pesquisa de valores null

Quando pesquisar por valores null não pode usar a sintaxe do marcador de posição porque o motor de consulta considera o valor null como um valor de comparação inesperado. Por exemplo, se executar esta pesquisa:

```4d
$vSingles:=ds. Person.query("spouse = :1";Null) // will NOT work
```

Não obterá o resultado esperado porque o valor nulo será avaliado por 4D como um erro resultante da avaliação do parâmetro (por exemplo, um atributo vindo de outra consulta). Para este tipo de pesquisa, deve usar a sintaxe de pesquisa direta:

```4d
 $vSingles:=ds.Person.query("spouse = null") //sintaxe correta
```

#### Not equal to null or undefined values

The "not equal to *value*" comparator (`#` or `!=`) does not return attributes whose value is null or undefined. For example, the following query will only return persons whose "info.married" status is `false` and not persons whose "info.married" property is "null" or missing:

```4d
$notMarried:=ds.Person.query("info.married#true") //encontra pessoas cujo valor do atributo é false
```

If you want to find persons whose "info.married" status is `false`, null, or not defined, you need to write:

```4d
$notMarried:=ds.Person.query("info.married#true | info.married=null") //encontra atributos false, null e indefinidos
```

#### Não igual a em colecções

Ao pesquisar nos atributos de objectos de classe de dados que contêm colecções, o comparador "não igual a valor" (`#` ou `!=`) encontrará elementos em que TODAS as propriedades são diferentes de valor (e não aqueles em que PELO MENOS uma propriedade é diferente de valor, que é como funcionam outros comparadores). Basicamente, é equivalente à pesquisa por "Not(encontrar elementos da coleção onde a propriedade é igual a *value*"). Por exemplo, com as seguintes entidades:

```
Entity 1:
ds.Class.name: "A"
ds.Class.info:
    { "coll" : [ {
                "val":1,
                "val":1
            } ] }

Entity 2:
ds.Class.name: "B"
ds.Class.info:
    { "coll" : [ {
                "val":1,
                "val":0
            } ] }

Entity 3:
ds.Class.name: "C"
ds.Class.info:
    { "coll" : [ {
                "val":0,
                "val":0
            } ] }
```

Considere os seguintes resultados:

```4d
ds.Class.query("info.coll[].val = :1";0) 
// retorna B e C
// encontra "entities with 0 in at least one val property"

ds.Class.query("info.coll[].val != :1";0)
// retorna apenas A
// encontra "entities where all val properties are different from 0"
// que é equivalente a 
ds.Class.query(not("info.coll[].val = :1";0))
```

Se você quer implementar uma consulta que encontra entidades onde "pelo menos uma propriedade é diferente de *valor*", você precisa usar uma notação especial usando uma carta no `[]`:

```4d
ds.Class.query("info.coll[a].val := :1";0)  
// devolve A e B
// encontra "entidades em que pelo menos uma propriedade val é diferente de 0"
```

Você pode usar qualquer letra do alfabeto como a notação `[a]`.

#### Linkar os argumentos de pesquisa com os atributos de coleção

Ao pesquisar nos atributos de objetos de classe de dados que contêm coleções usando vários argumentos de consulta unidos pelo operador AND, você pode querer garantir que somente as entidades que contêm elementos que correspondem a todos os argumentos sejam retornadas, e não as entidades em que os argumentos podem ser encontrados em elementos diferentes. Para tal, é necessário ligar argumentos de consulta a elementos de coleção, de modo a que apenas sejam encontrados elementos individuais que contenham argumentos ligados.

Por exemplo, com as duas entidades abaixo:

```
Entity 1:
ds. People.name: "martin"
ds. People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"paris"
            } ] } Entity 2:
ds. People.name: "smith"
ds. People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"lyon"
            } , {
                "kind":"office",
                "city":"paris"
            } ] }
```

Você deseja encontrar pessoas com um tipo de local de "residência" na cidade "paris". Se escrever:

```4d
ds. People.query("places.locations[].kind= :1 and places.locations[].city= :2";"home";"paris")
```

... a consulta retornará "martin" **e** "smith" porque "smith" possui um elemento "locations" cujo "tipo" é "home" e um elemento "locations" cuja "cidade" é "paris", mesmo que sejam elementos diferentes.

Se você quiser apenas obter entidades em que os argumentos correspondentes estão no mesmo elemento da coleção, você precisa **linkar os argumentos**. Para linkar argumentos de pesquisa:

- Adicionar uma letra entre os \[] na primeira rota a linkar e repita a mesma letra em todos os argumentos linkados. Por exemplo: `locations[a].city and locations[a].kind`. Pode usar qualquer letra do alfabeto latino (não diferencia maiúsculas e minúsculas).
- Para adicionar critérios linkados na mesma pesquisa, use outra letra. Pode criar até 26 combinações de critérios em uma única pesquisa.

Com as entidades acima, se escreve:

```4d
ds. People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... pesquisa só devolverá "martin" porque tem um elemento "locations" cujo "kind" é "home" e cujo "city" for "paris". A consulta não devolverá "smith" porque os valores "home" e "paris" não estão no mesmo elemento de coleção.

#### Consultas em relações Muitos para Muitos

O ORDA oferece uma sintaxe especial para facilitar as consultas em relações muitos-para-muitos. Neste contexto, poderá ter de procurar valores diferentes com um operador E MAS no mesmo atributo. Por exemplo, veja a seguinte estrutura:

![alt-text](../assets/en/API/manytomany.png)

Imagine que você queira pesquisar todos os filmes em que ambos o ator A e o ator B tenham um papel. Se você escrever uma consulta simples usando um operador `AND`, ela não funcionará:

```4d
// invalid code
$es:=ds. Movie.query("roles.actor.lastName = :1 AND roles.actor.lastName = :2";"Hanks";"Ryan")  
// $es is empty
```

Basicamente, o problema está relacionado à lógica interna da consulta: você não pode pesquisar um atributo cujo valor seja "A" e "B".

Para tornar possível a realização de tais consultas, a ORDA permite uma sintaxe especial: você só precisa adicionar um *índice de classe* entre **{}** em todos os atributos de relação adicionais usados na string:

```4d
"relationAttribute.attribute = :1 AND relationAttribute{x}.attribute = :2 [AND relationAttribute{y}.attribute...]"
```

**{x}** informa ao ORDA para criar outra referência para o atributo de relação. Em seguida, ele executará internamente todas as operações de bitmap necessárias. Note que **x** pode ser qualquer número **exceto 0**: {1}, ou {2}, ou {1540}... O ORDA só precisa de uma referência exclusiva na consulta para cada índice de classe.

No nosso exemplo, seria:

```4d
// valid code
$es:=ds. Movie.query("roles.actor.lastName = :1 AND roles.actor{2}.lastName = :2";"Hanks";"Ryan")  
// $es contains movies (You've Got Mail, Sleepless in Seattle, Joe Versus the Volcano)
```

#### Parâmetro formula

Como alternativa à inserção de fórmulas dentro do parâmetro queryString (ver acima), pode passar diretamente um objeto fórmula como critério de pesquisa booleano. Usar um objeto fórmula para consultas é **recomendado** pois você se beneficia da tokenização, e o código é mais fácil de pesquisar/ler.

A fórmula deve ter sido criada usando o comando [`Fórmula`](FunctionClass.md#formula) ou [`Formula da string`](FunctionClass.md#formula-from-string). Nesse modo:

- *formula* se avalia para cada entidade e deve devolver true ou false. Durante a execução da pesquisa, se o resultado da fórmula não for booleano, é considerado como False.
- dentro da *fórmula*, a entidade está disponível através do objeto `This`.
- se o objeto `Fórmula` for **null**, o erro 1626 ("Esperando um texto ou fórmula") é gerado, que você chama interceptação usando um método instalado com `NO ERR CALL`.

> Por razões de segurança, chamadas de fórmula dentro de funções `query()` podem ser desabilitadas. Veja a descrição do parâmetro *querySettings*.

#### Passar parâmetros a fórmulas

Qualquer *fórmula* chamada pela função de classe `query()` pode receber parâmetros:

- Parâmetros devem ser passados através da propriedade **args** (objeto) do parâmetro *querySettings*.
- A fórmula recebe esse objeto **args** como um parâmetro **$1**.

Este pequeno código mostra os principios de como são passados os parâmetros aos métodos:

```4d
 $settings:=New object("args";New object("exclude";"-")) //args objeto para passar parâmetros
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) //args é recebido em $1
```

No exemplo 3 são oferecidos mais exemplos.

**4D Server**: em cliente/servidor, as fórmulas são executadas no servidor. Neste contexto, só se envia às fórmulas o objeto `querySettings.args`.

#### Parâmetro querySettings

No parâmetro *querySettings* é possível passar um objeto que conteha opções adicionais. As propriedades abaixo são compatíveis:

| Propriedade   | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters    | Object     | **Espaços reservados nomeados para valores** usados na *queryString* ou *formula*. Os valores são expressos como pares propriedade / valor, onde propriedade é o nome do marcador de posição inserido para um valor na *queryString* ou na *formula* (":placeholder") e valor é o valor a ser comparado. Pode combinar marcadores de posição indexados (valores passados diretamente em parâmetros de valor) e valores de marcadores de posição com nome na mesma pesquisa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| attributes    | Object     | **Espaços reservados nomeados para caminhos de atributos** usados na *queryString* ou *formula*. Os atributos se expressam como pares propriedade/ valor, onde propriedade é o nome do marcador de posição inserido para uma rota de atributo em *queryString* ou *formula* (":placeholder") e valor pode ser uma string ou uma coleção de strings. Cada valor é um caminho que pode designar um escalar ou um atributo relacionado da classe de dados ou uma propriedade em um campo de objeto da classe de dados.<table><tr><th>Tipo</th><th>Descrição</th></tr><tr><td>String</td><td>attributePath expresso usando a notação de ponto, por exemplo, "nome" ou "usuario.endereco.cep"</td></tr><tr><td>Coleção de strings</td><td>Cada string da coleção representa um nível do attributePath, por exemplo, \["nome"] ou \["usuario","endereco","cep"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in *value* parameters) and named placeholder values in the same query. |
| args          | Object     | Parámetro(s) a passar para as fórmulas, se houver. O objeto **args** será recebido em $1 nas fórmulas e, portanto, seus valores estarão disponíveis através de *$1.property* (ver exemplo 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| allowFormulas | Parâmetros | True para permitir as chamadas de fórmulas na pesquisa (padrão). Passe falso para desautorizar a execução de fórmulas. If set to false and `query()` is given a formula, an error is sent (1278 - Formula not allowed in this member method).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| context       | Text       | Etiqueta para o contexto de otimização automático aplicados à seleção de entidade. Este contexto será utilizado pelo código que maneja a seleção de entidades para que possa se beneficiar da otimização. This feature is designed for client/server processing; for more information, please refer to the [**Client/server optimization**](../ORDA/client-server-optimization.md#optimization-context) section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| queryPlan     | Parâmetros | Na entity selection resultante, devolve ou não a descrição detalhada da pesquisa logo antes de ser executada, ou seja, a pesquisa planificada. A propriedade devolvida é um objeto que inclui cada pesquisa e subpesquisa prevista (no caso de uma pesquisa complexa). Esta opção é útil durante a fase de desenvolvimento de uma aplicação. Geralmente é usada em conjunto com queryPath. Como padrão é omitido: false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| queryPath     | Parâmetros | Na entity selection resultante, devolve ou não a descrição detalhada da pesquisa tal qual for realizada. A propriedade retornada é um objeto que contém a rota atual usada para a pesquisa (geralmente idêntica àquela do queryPlan, mas deve diferenciar se o motor consegue otimizar a pesquisa), assim como o tempo de processamento e o número de registros encontrado. Esta opção é útil durante a fase de desenvolvimento de uma aplicação. Como padrão é omitido: false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Sobre queryPlan e queryPath

The information recorded in `queryPlan`/`queryPath` include the query type (indexed and sequential) and each necessary subquery along with conjunction operators. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. Geralmente a descrição do plano de pesquisa e sua rota são idênticas, mas podem diferir porque 4D pode implementar otimizações dinâmicas quando uma pesquisa for executada para melhorar desempenho. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais rápido. Esse caso particular pode acontecer quando o número de entidades sendo pesquisada é baixo.

Por exemplo, se executar esta pesquisa:

```4d
 $sel:=ds.Employee.query("salary < :1 and employer.name = :2 or employer.revenues > :3";\  
 50000;"Lima West Kilo";10000000;New object("queryPath";True;"queryPlan";True))
```

queryPlan:

```4d
{Or:[{And:[{item:[index : Employee.salary ] < 50000},  
 {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
 subquery:[{item:[index : Company.name ] = Lima West Kilo}]}]},  
 {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
 subquery:[{item:[index : Company.revenues ] > 10000000}]}]}
```

queryPath:

```4d
{steps:[{description:OR,time:63,recordsfounds:1388132,  
 steps:[{description:AND,time:32,recordsfounds:131,  
 steps:[{description:[index : Employee.salary ] < 50000,time:16,recordsfounds:728260},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:0,recordsfounds:131,  
 steps:[{steps:[{description:[index : Company.name ] = Lima West Kilo,time:0,recordsfounds:1}]}]}]},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:31,recordsfounds:1388132,  
 steps:[{steps:[{description:[index : Company.revenues ] > 10000000,time:0,recordsfounds:933}]}]}]}]}
```

#### Exemplo 1

Esta seção oferece vários exemplos de pesquisas.

Consultas em uma string:

```4d
$entitySelection:=ds. Customer.query("firstName = 'S@'")
```

Pesquisa com uma instrução NOT:

```4d
$entitySelection:=ds. Employee.query("not(firstName=Kim)")
```

Pesquisas com datas:

```4d
$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

Pesquisa com marcadores de posição indexados para os valores:

```4d
$entitySelection:=ds. Customer.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@")
```

Pesquisa com marcadores de posição indexados para valores em uma dataclass relacionada:

```4d
$entitySelection:=ds. Employee.query("lastName = :1 and manager.lastName = :2";"M@";"S@")
```

Pesquisa com marcador de posição indexado que inclui uma instrução de ordem descendente:

```4d
$entitySelection:=ds. Student.query("nationality = :1 order by campus.name desc, lastname";"French")
```

Pesquisa com marcadores de posição com nome para os valores:

```4d
var $querySettings : Object
var $managedCustomers : cs. CustomerSelection
$querySettings:=New object
$querySettings.parameters:=New object("userId";1234;"extraInfo";New object("name";"Smith"))
$managedCustomers:=ds. Customer.query("salesperson.userId = :userId and name = :extraInfo.name";$querySettings)
```

Pesquisa que usa marcadores de posição nomeados e indexados para valores:

```4d
var $querySettings : Object
var $managedCustomers : cs. CustomerSelection
$querySettings.parameters:=New object("userId";1234)
$managedCustomers:=ds. Customer.query("salesperson.userId = :userId and name=:1";"Smith";$querySettings)
```

Pesquisa com objetos queryPlan e queryPath:

```4d
$entitySelection:=ds. Employee.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@";New object("queryPlan";True;"queryPath";True))

  //you can then get these properties in the resulting entity selection
var $queryPlan; $queryPath : Object
$queryPlan:=$entitySelection.queryPlan
$queryPath:=$entitySelection.queryPath
```

Pesquisa com uma rota de atributo de tipo Collection:

```4d
$entitySelection:=ds. Employee.query("extraInfo.hobbies[].name = :1";"horsebackriding")
```

Pesquisa com uma rota de atributos de tipo Collection e atributos vinculados:

```4d
$entitySelection:=ds. Employee.query("extraInfo.hobbies[a].name = :1 and extraInfo.hobbies[a].level=:2";"horsebackriding";2)
```

Pesquisa com uma rota de atributos de tipo Collection e múltiplos atributos vinculados:

```4d
$entitySelection:=ds. Employee.query("extraInfo.hobbies[a].name = :1 and
 extraInfo.hobbies[a].level = :2 and extraInfo.hobbies[b].name = :3 and
 extraInfo.hobbies[b].level = :4";"horsebackriding";2;"Tennis";5)
```

Pesquisa com uma rota de atributo de tipo Objeto:

```4d
$entitySelection:=ds. Employee.query("extra.eyeColor = :1";"blue")
```

Pesquisa com uma instrução IN:

```4d
$entitySelection:=ds. Employee.query("firstName in :1";New collection("Kim";"Dixie"))
```

Pesquisa com instrução NOT (IN):

```4d
$entitySelection:=ds. Employee.query("not (firstName in :1)";New collection("John";"Jane"))
```

Pesquisa com marcadores de posição indexados para os atributos:

```4d
var $es : cs. EmployeeSelection
$es:=ds. Employee.query(":1 = 1234 and :2 = 'Smith'";"salesperson.userId";"name")
  //salesperson is a related entity
```

Pesquisa com marcadores de posição indexados para os atributos e marcadores de posição com nome para os valores:

```4d
var $es : cs. EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds. Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson is a related entity
```

Pesquisa com marcadores de posição indexados para os atributos e os valores:

```4d
var $es : cs. EmployeeSelection
$es:=ds. Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson is a related entity
```

#### Exemplo 2

Esta seção ilustra pesquisas com marcadores de posição com nomes para os atributos.

Dada uma dataclass Employee com 2 entidades:

Entidade 1:

```4d
name: "Marie"
number: 46
softwares:{
"Word 10.2": "Installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Entidade 2:

```4d
name: "Sophie"
number: 47
softwares:{
"Word 10.2": "Not installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Pesquisa com marcadores de posição com nome para os atributos:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 $querySettings:=New object
 $querySettings.attributes:=New object("attName";"name";"attWord";New collection("softwares";"Word 10.2"))
 $es:=ds.Employee.query(":attName = 'Marie' and :attWord = 'Installed'";$querySettings)
  //$es.length=1 (Employee Marie)
```

Pesquisa com marcadores de posição com nome para os atributos e os valores:

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 var $name : Text
 $querySettings:=New object
  //Named placeholders for values
  //The user is asked for a name
 $name:=Request("Please enter the name to search:")
 If(OK=1)
    $querySettings.parameters:=New object("givenName";$name)
  //Named placeholders for attribute paths
    $querySettings.attributes:=New object("attName";"name")
    $es:=ds.Employee.query(":attName= :givenName";$querySettings)
 End if
```

#### Exemplo 3

Estes exemplos ilustram as distintas formas de utilizar fórmulas com ou sem parâmetros em suas pesquisas.

A fórmula é fornecida como texto com `eval()` no parâmetro *queryString*:

```4d
 var $es : cs.StudentsSelection
 $es:=ds.Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

The formula is given as a `Formula` object through a placeholder:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query(":1 and nationality='French'";$formula)
```

Só se da como criterio um objeto `Formula`:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query($formula)
```

Podem ser aplicadas várias fórmulas:

```4d
 var $formula1; $1; $formula2 ;$0 : Object
 $formula1:=$1
 $formula2:=Formula(Length(This.firstname)>=30)
 $0:=ds.Students.query(":1 and :2 and nationality='French'";$formula1;$formula2)
```

A text formula in *queryString* receives a parameter:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query("eval(checkName($1.filter)) and nationality=:1";"French";$settings)
```

```4d
  //método checkName
 #DECLARE($exclude : Text) -> $result : Boolean
 $result:=(Position($exclude;This.lastname)=0)
```

Usando o mesmo método ***checkName***, um objeto `Formula` como espaço reservado recebe um parâmetro:

```4d
 var $es : cs.StudentsSelection
 var $settings; $formula : Object
 $formula:=Formula(checkName($1.filter))
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
 $settings.args.filter:="*" // change the parameters without updating the $formula object
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
```

Queremos desautorizar as fórmulas, por exemplo, quando el usuário introduz sua consulta:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 var $queryString : Text
 $queryString:=Request("Enter your query:")
 if(OK=1)
    $settings:=New object("allowFormulas";False)
    $es:=ds.Students.query($queryString;$settings) //An error is raised if $queryString contains a formula
 End if
```

#### Veja também

[`.query()`](EntitySelectionClass.md#query) para as seleções de entidade

<!-- END REF -->

<!-- REF DataClassClass.setRemoteCacheSettings().Desc -->

## .setRemoteCacheSettings()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #DataClassClass.setRemoteCacheSettings().Syntax -->**.setRemoteCacheSettings**(*settings* : Object) <!-- END REF -->

<!-- REF #DataClassClass.setRemoteCacheSettings().Params -->

| Parâmetro | Tipo   |    | Descrição                                                                                            |
| --------- | ------ | -- | ---------------------------------------------------------------------------------------------------- |
| settings  | Object | -> | Objecto que define o tempo limite e o tamanho máximo da cache ORDA para a dataclass. |

<!-- END REF -->

> **Modo avançado:** Essa função é destinada a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

The `.setRemoteCacheSettings()` function <!-- REF #DataClassClass.setRemoteCacheSettings().Summary -->sets the timeout and maximum size of the ORDA cache for a dataclass.<!-- END REF -->.

No parâmetro *settings*, passe um objeto contendo as propriedades abaixo:

| Propriedade | Tipo    | Descrição                                    |
| ----------- | ------- | -------------------------------------------- |
| timeout     | Integer | Tempo de espera em segundos. |
| maxEntries  | Integer | Número máximo de entidades.  |

`timeout` sets the timeout of the ORDA cache for the dataclass (default is 30 seconds). Uma vez decorrido o tempo limite, as entidades da classe de dados na cache são consideradas como expiradas. Isto significa que:

- os dados ainda estão lá
- na próxima vez que os dados forem necessários, serão solicitados ao servidor
- 4D remove automaticamente os dados expirados quando o número máximo de entidades é atingido

Setting a `timeout` property sets a new timeout for the entities already present in the cache. É útil quando se trabalha com dados que não mudam com muita frequência, e, portanto, quando não são necessários novos pedidos ao servidor.

`maxEntries` define o número máximo de entidades na cache ORDA. O padrão é de 30 000.

The minimum number of entries is 300, so the value of `maxEntries` must be equal to or higher than 300. Caso contrário, é ignorado e o número máximo de entradas é fixado em 300.

If no valid properties are passed as `timeout` and `maxEntries`, the cache remains unchanged, with its default or previously set values.

Quando uma entidade é guardada, é actualizada na cache e expira quando o tempo limite é atingido.

#### Exemplo

```4d
var $ds : 4D. DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds. Buildings.setRemoteCacheSettings(New object("timeout"; 60; "maxEntries"; 350))
```

#### Veja também

[.clearRemoteCache()](#clearremotecache)<br/>[.getRemoteCache()](#clearremotecache)
