---
id: DataClassClass
title: DataClass
---


A [DataClass](ORDA/dsMapping.md#dataclass) provides an object interface to a database table. All dataclasses in a 4D application are available as a property of the `ds` [datastore](ORDA/dsMapping.md#datastore).



### Resumo

|                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassClass.attributeName.Summary --> |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.all().Summary -->|
| [<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.fromCollection().Summary --> |
| [<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.get().Summary --> |
| [<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getDataStore().Summary --> |
| [<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getInfo().Summary --> |
| [<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.new().Summary --> |
| [<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.newSelection().Summary --> |
| [<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.query().Summary --> |



<!-- REF DataClassClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF DataClassClass.attributeName.Syntax -->
***.attributeName*** : DataClassAttribute<!-- END REF -->


#### Descrição

Os atributos das classes de dados são<!-- REF ClaseDeDatos.attributeName. Summary -->objetos que estão disponíveis diretamente como propriedades<!-- END REF --> destas classes.

The returned objects are of the [`DataClassAttribute`](DataClassAttributeClass.md) class. These objects have properties that you can read to get information about your dataclass attributes.
> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

#### Exemplo 1

```4d
$salary:=ds. Employee.salary //returns the salary attribute in the Employee dataclass
$compCity:=ds. Company["city"] //returns the city attribute in the Company dataclass
```


#### Exemplo 2

Considering the following database structure:

![](assets/en/API/dataclassAttribute.png)


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

Considering the following table properties:

![](assets/en/API/dataclassAttribute2.png)


```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds. Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->



<!-- REF DataClassClass.all().Desc -->
## .all()

<details><summary>Histórico</summary>
| Versão | Mudanças                            |
| ------ | ----------------------------------- |
| v17 R5 | Support of the *settings* parameter |
| v17    | Adicionado                          |
</details>


<!-- REF #DataClassClass.all().Syntax -->
**null** constante: usando a palavra chave "null" encontra as propriedades **null** e **undefined**.<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->
| Parameter | Type                |    | Descrição                                                               |
| --------- | ------------------- |:--:| ----------------------------------------------------------------------- |
| settings  | Objeto              | -> | Build option: context                                                   |
| Resultado | 4D. EntitySelection | <- | Referencias sobre todas as entidades relacionadas com a classe de dados |
<!-- END REF -->


#### Descrição

The `.all()` function<!-- REF #DataClassClass.all(). Summary -->queries the datastore to find all the entities related to the dataclass and returns them as an entity selection<!-- END REF -->.

As entidades são devolvidas na ordem padrão, que é inicialmente a ordem na qual foram criadas. Note no entanto que, se as entidades foram apagas e outras adicionadas, a ordem padrão não reflete mais sua ordem de criação.

Se nenhuma entidade correspondente for encontrada, uma seleção de entidade vazia é retornada.

Se aplica carregamento diferido/lazy loading.

**settings**

No  parâmetro *querySettings* é possível passar um objeto que conteha opções adicionais. As propriedades abaixo são compatíveis:

| Propriedade | Type  | Descrição                                                                                                                                                                                                                                                                                            |
| ----------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context     | Texto | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Exemplo

```4d
 var $allEmp : cs. EmployeeSelection
 $allEmp:=ds. Employee.all()
```


<!-- END REF -->


<!-- REF DataClassClass.fromCollection().Desc -->
## .fromCollection()

<details><summary>Histórico</summary>
| Versão | Mudanças                            |
| ------ | ----------------------------------- |
| v17 R5 | Support of the *settings* parameter |
| v17    | Adicionado                          |
</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->
**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #DataClassClass.fromCollection().Params -->
| Parameter | Type                |    | Descrição                                   |
| --------- | ------------------- |:--:| ------------------------------------------- |
| objectCol | Coleção             | -> | Coleção de objetos a mapear com entidades   |
| settings  | Objeto              | -> | Build option: context                       |
| Resultado | 4D. EntitySelection | <- | Seleção de entidades preenchidas da coleção |
<!-- END REF -->


#### Descrição

A função `.fromCollection()`<!-- REF #DataClassClass.fromCollection(). Summary -->atualiza ou cria entidades na classe de dados segundo a coleção de objetos *objectCol*, e devolve a seleção de entidades correspondente<!-- END REF -->.

No parâmetro *objectCol*, passa uma coleção de objetos para criar novas entidades ou atualizar as existentes da classe de dados. Os nomes das propriedades devem ser os mesmos que os dos atributos da classe de dados. Se um nome de propriedade não existir na dataclass, é ignorado. Se um valor de atributo não for definido na coleção, seu valor será null.

O mapeamento entre os objetos da coleção e as entidades se realiza sobre os **nomes de atributos** e **tipos coincidentes**. Se uma propriedade de um objeto tiver o mesmo nome que um atributo de entidade mas seus tipos não corresponderem, o atributo da entidade não é preenchido.

**Criar ou atualizar modos**

Para cada objeto de *objectCol*:

*   If the object contains a boolean property "\_\_NEW" set to false (or does not contain a boolean "\_\_NEW" property), the entity is updated or created with the corresponding values of the properties from the object. No check is performed in regards to the primary key:
    *   If the primary key is given and exists, the entity is updated. In this case, the primary key can be given as is or with a "\_\_KEY" property (filled with the primary key value).
    *   If the primary key is given (as is) and does not exist, the entity is created
    *   If the primary key is not given, the entity is created and the primary key value is assigned with respect to standard database rules.
*   If the object contains a boolean property "\_\_NEW" set to **true**, the entity is created with the corresponding values of the attributes from the object. A check is performed in regards to the primary key:
    *   If the primary key is given (as is) and exists, an error is sent
    *   If the primary key is given (as is) and does not exist, the entity is created
    *   If the primary is not given, the entity is created and the primary key value is assigned with respect to standard database rules.
> > The "\_\_KEY" property containing a value is taken into account only when the "\_\_NEW" property is set to **false** (or is omitted) and a corresponding entity exists. In all other cases, the "\_\_KEY" property value is ignored, primary key value must be passed "as is".

**Entidades relacionadas**

Os objetos de *objectCol* podem conter um ou mais objetos aninhados que apresentam uma ou mais entidades relacionadas, o que pode ser útil para criar ou atualizar links entre entidades.

Os objetos aninhados que apresentam entidades relacionadas devem conter uma propriedade "\_\_KEY" (preenchido com o valor da chave primária da entidade relacionada) ou o atributo de chave primária da própria entidade relacionada. O uso de uma propriedade \_\_KEY permite a independência do nome do atributo da chave primària.
> O conteúdo das entidades relacionadas não pode ser criado / atualizado através deste mecanismo.

**Stamp**

Se um atributo \_\_STAMP for dado, se realiza uma comprovação com o selo no armazén de dados e se pode devolver um erro ("O selo dado não coincide com o atual para o registro# XX da tabela XXXX"). Para saber mais, consulte [Entity locking](ORDA/entities.md#entity-locking).

**settings**

No  parâmetro *querySettings* é possível passar um objeto que conteha opções adicionais. As propriedades abaixo são compatíveis:

| Propriedade | Type  | Descrição                                                                                                                                                                                                                                                                                            |
| ----------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context     | Texto | Label for the optimization context applied to the entity selection. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |


#### Exemplo 1

Queremos atualizar uma entidade existente. A propriedade \_\_NEW não for dada, a chave primária do empregado é dada e existe:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 //Existing PK in Employee table
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) //PK existente na dataClass relacionada Company
  // Para este empregado, podemos mudar a Empresa utilizando outro PK existente na dataClass relacionada Company
 $empsCollection.push($emp)
 $employees:=ds. Employee.fromCollection($empsCollection)
```

#### Exemplo 2

Queremos atualizar uma entidade existente. A propriedade \_\_NEW não é dada, a chave primária do empregado com o atributo \_\_KEY e existir:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 //Existing PK in Employee table
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) //PK existente na dataClass relacionada Company
  // Para este empregado, podemos mudar a Empresa utilizando outro PK existente na dataClass relacionada Company
 $empsCollection.push($emp)
 $employees:=ds. Employee.fromCollection($empsCollection)
```

#### Exemplo 3

Se quiser simplesmente criar uma nova entidade da coleção::

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Victor"
 $emp.lastName:="Hugo"
 $empsCollection.push($emp)
 $employees:=ds. Employee.fromCollection($empsCollection)
```

#### Exemplo 4

Queremos criar uma entidade. A propriedade \_\_NEW é True, a chave primária de empregado não é dada:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Mary"
 $emp.lastName:="Smith"
 $emp.employer:=New object("__KEY";121) //PK existente na dataClass Company
 $emp.__NEW:=True
 $empsCollection.push($emp)
 $employees:=ds. Employee.fromCollection($empsCollection)






```

#### Exemplo 5

Queremos criar uma entidade. Se a propriedade \_\_NEW é omitida, a chave primária do empregado é dada e não existir:

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10000 //Chave primária inexistente
 $emp.firstName:="Françoise"
 $emp.lastName:="Sagan"
 $empsCollection.push($emp)
 $employees:=ds. Employee.fromCollection($empsCollection)
```

#### Exemplo 6

Neste exemplo, a primeira entidade se criará e salvará mas a segunda falhará já que ambas utilizam a mesma chave primaria:

```4d
 var $empsCollection : Collection
 var $emp; $emp2 : Object
 var $employees : cs. EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10001 // chave primária inexistente
 $emp.firstName:="Simone"
 $emp.lastName:="Martin"
 $emp.__NEW:=True
 $empsCollection.push($emp)

 $emp2:=New object
 $emp2.ID:=10001 // a mesma chave primaria, já existente
 $emp2.firstName:="Marc"
 $emp2.lastName:="Smith"
 $emp2.__NEW:=True
 $empsCollection.push($emp2)
 $employees:=ds.
```

#### Veja também

[**.toCollection()**](EntitySelectionClass.md#tocollection)

<!-- END REF -->


<!-- REF DataClassClass.get().Desc -->
## .get()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #DataClassClass.get().Syntax -->
**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D. Entity<br>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.<!-- END REF -->


<!-- REF #DataClassClass.get().Params -->
| Parameter  | Type            |    | Descrição                                            |
| ---------- | --------------- |:--:| ---------------------------------------------------- |
| primaryKey | Integer OR Text | -> | Valor da chave primária da entidade a recuperar      |
| settings   | Objeto          | -> | Build option: context                                |
| Resultado  | 4D. Entity      | <- | Entidade que coincide com a chave primária designada |
<!-- END REF -->

#### Descrição

A função `.get()`<!-- REF #DataClassClass.get(). Summary -->pesquisa a dataclass para recuperar a entidade correspondente ao parâmetro *primaryKey*<!-- END REF -->.

Em *primaryKey*, passe o valor da chave primária da entidade a recuperar Em *primaryKey*, passe o valor da chave primária da entidade a recuperar O tipo valor deve coresponder com o tipo de chave primária estabelecido na datastore (Inteiro ou texto). Também pode se assegurar que o valor de chave primária seja sempre retornado como Texto ao usar a função [`.getKey()`](EntityClass.md#getkey) com o parâmetro`dk key as string`.

Se nenhuma entidade for encontrada com  *primaryKey*, uma entidade**Null** é retornada.

É aplicado o lazy loading/carregamento diferido, ou seja os dados relacionados são carregados do disco só quando pedidos.

**settings**

No  parâmetro *querySettings* é possível passar um objeto que conteha opções adicionais. As propriedades abaixo são compatíveis:

| Propriedade | Type  | Descrição                                                                                                                                                                                                                                                                                              |
| ----------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context     | Texto | Etiqueta para o contexto de otimização automático aplicados à entidade. Esse contexto será usado pelo código subsequente que carrega a entidade para que se possa beneficiar da otimização. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |



#### Exemplo 1

```4d
 var $entity : cs. EmployeeEntity  
 var $entity2 : cs. InvoiceEntity
 $entity:=ds. Employee.get(167) // retorna a entidade cujo valor de chave primária é 167
 $entity2:=ds. Invoice.get("DGGX20030") // retorna a entidade cujo valor de chave primária é  "DGGX20030"
```

#### Exemplo 2

Este exemplo ilustra o uso da propriedade *context* :

```4d
 var $e1; $e2; $e3; $e4 : cs. EmployeeEntity
 var $settings; $settings2 : Object

 $settings:=New object("context";"detail")
 $settings2:=New object("context";"summary")

 $e1:=ds. Employee.get(1;$settings)
 completeAllData($e1) // In completeAllData method, an optimization is triggered and associated to context "detail"

 $e2:=ds. Employee.get(2;$settings)
 completeAllData($e2) // In completeAllData method, the optimization associated to context "detail" is applied

 $e3:=ds. Employee.get(3;$settings2)
 completeSummary($e3) //In completeSummary method, an optimization is triggered and associated to context "summary"

 $e4:=ds. Employee.get(4;$settings2)
 completeSummary($e4) //In completeSummary method, the optimization associated to context "summary" is applied
``` 
 

<!-- END REF -->


<!-- REF DataClassClass.getDataStore().Desc -->
## .getDataStore()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #DataClassClass.getDataStore().Syntax -->
**.getDataStore()** : cs. DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->
| Parameter | Type          |    | Descrição                    |
| --------- | ------------- |:--:| ---------------------------- |
| Resultado | cs. DataStore | <- | Datastore da classe de dados |
<!-- END REF -->


#### Descrição

The `.getDataStore()` function<!-- REF #DataClassClass.getDataStore(). Summary -->returns the datastore for the specified dataclass<!-- END REF -->.

A datastore pode ser:

*   the main datastore, as returned by the `ds` command.
*   a remote datastore, opened using the `Open datastore` command.


#### Exemplo

O método de projeto ***SearchDuplicate*** procura por valores duplicados em qualquer dataclass.

```4d
 var $pet : cs. CatsEntity
 $pet:=ds. Cats.all().first() //obtém uma entidade
 SearchDuplicate($pet;"Dogs")
```

```4d
  // Pesquisa SearchDuplicate
  // SearchDuplicate(entity_to_search;dataclass_name)

 #DECLARE ($pet : Object ; $dataClassName : Text)
 var $dataStore; $duplicates : Object  

 $dataStore:=$pet.getDataClass().getDataStore()
 $duplicates:=$dataStore[$dataClassName].query("name=:1";$pet.name)
```

<!-- END REF -->



<!-- REF DataClassClass.getInfo().Desc -->
## .getInfo()

<details><summary>Histórico</summary>
| Versão | Mudanças               |
| ------ | ---------------------- |
| v19 R3 | Added exposed property |
| v17 R5 | Adicionado             |
</details>

<!-- REF #DataClassClass.getInfo().Syntax -->
**.getInfo()** : Objeto <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->
| Parameter | Type   |    | Descrição                |
| --------- | ------ | -- | ------------------------ |
| Resultado | Objeto | <- | Informação da dataclass. |
<!-- END REF -->


#### Descrição

The `.getInfo()` function<!-- REF #DataClassClass.getInfo(). Summary -->returns an object providing information about the dataclass<!-- END REF -->. Esta função é útil para configurar o código genérico.

**Returned object**

| Propriedade | Type     | Descrição                                 |
| ----------- | -------- | ----------------------------------------- |
| exposed     | Booleano | True if the dataclass is exposed in REST  |
| name        | Texto    | Name of the dataclass                     |
| primaryKey  | Texto    | Nome da chave primária da classe de dados |
| tableNumber | Integer  | Número daa tabela 4D interna              |



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
 var $es : cs. ClientsSelection

 $settings:=New object
 $settings.parameters:=New object("receivedIds";getIds())
 $settings.attributes:=New object("pk";ds. Clients.getInfo().primaryKey)
 $es:=ds. Clients.query(":pk in :receivedIds";$settings)
```

#### Exemplo 3

```4d 
 var $pk : Text
 var $dataClassAttribute : Object

 $pk:=ds. Employee.getInfo().primaryKey
 $dataClassAttribute:=ds. Employee[$pk] // Se necessário o atributo correspondente à chave primária é acessível
```

#### Veja também

[DataClassAttribute.exposed](DataClassAttributeClass.md#exposed)

<!-- END REF -->



<!-- REF DataClassClass.new().Desc -->
## .new()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF #DataClassClass.new().Syntax -->
**.new()** : 4D. Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->
| Parameter | Type       |    | Descrição                                        |
| --------- | ---------- | -- | ------------------------------------------------ |
| Resultado | 4D. Entity | <- | Nova entidade que coincide com a classe de dados |
<!-- END REF -->


#### Descrição

The `.new()` function<!-- REF #DataClassClass.new(). Summary -->creates in memory and returns a new blank entity related to the Dataclass<!-- END REF -->.

O objeto entidade se cria em memória e não se guarda no banco de dados até que se chama a função [`.save( )`](EntityClass.md#save). Se a entidade for apagada antes de ser salva, não se pode recuperar.

**4D Server**: eám cliente-servidor, se a chave primaria da tabela correspondente se autoincrementa, se calculará quando a entidade se guarde no servidor.

All attributes of the entity are initialized with the **null** value.

> Attributes can be initialized with default values if the **Map NULL values to blank values** option is selected at the 4D database structure level.

#### Exemplo

Este exemplo cria uma nova entidade na classe de dados "Log" e registra a informação no atributo "info":

```4d 
 var $entity : cs. LogEntity
 $entity:=ds. Log.new() //cria uma referência
 $entity.info:="New entry" //armazena informação
 $entity.save() //salva a entidade
```
 
<!-- END REF -->




<!-- REF DataClassClass.newSelection().Desc -->
## .newSelection()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF #DataClassClass.newSelection().Syntax -->
**.newSelection**( { *keepOrder* : Integer } ) : 4D. EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->
| Parameter | Type                |    | Descrição                                                                                                                                           |
| --------- | ------------------- | -- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder | Integer             | -> | `dk keep ordered`: cria uma seleção de entidades ordenada,<br>`dk non ordered`: cria uma seleção de entidade não ordenada (padrão se omitido) |
| Resultado | 4D. EntitySelection | <- | Nova seleção de entidades em branco relacionadas com a classe de dados                                                                              |
<!-- END REF -->


#### Descrição

The `.newSelection()` function<!-- REF #DataClassClass.newSelection(). Summary -->creates a new, blank, non-shareable entity selection, related to the dataclass, in memory<!-- END REF -->.

> Para mais informação sobre as seleçõees de entidades não compartilháveis, consulte [esta seção](ORDA/entities.md#shareable-or-non-shareable-entity-selections).


Se quiser uma seleção de entidades ordenada, passe o seletor `dk keep ordered` no parâmetro *keepOrder*. Como padrão se omitir este parâmetro ou se passar o seletor `dk non ordered`, o método cria uma seleção de entidades não ordenada. As seleções de entidades desordenadas são mais rápidas mas não se pode confiar nas posições das entidades. Para mas informação, consulte [Seleções de entidades ordenadas e desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

Quando for criada, a seleção de entidades não contém nenhuma entidade (`mySelection.length` devolve 0). Este método lhe permite criar seleções de entidades gradualmente fazendo chamadas posteriores à função [`add()`](EntitySelectionClass.md#add).


#### Exemplo


```4d 
 var $USelection; $OSelection : cs. EmployeeSelection
 $USelection:=ds. Employee.newSelection() //cria uma seleção de entidade vazia não ordenada
 $OSelection:=ds. Employee.newSelection(dk keep ordered) //cria uma seleção de entidade vazia ordenada
```
 

<!-- END REF -->



<!-- REF DataClassClass.query().Desc -->
## .query()

<details><summary>Histórico</summary>
| Versão | Mudanças                               |
| ------ | -------------------------------------- |
| v17 R6 | Soporte dos Parâmetros Formula         |
| v17 R5 | Suporte dos marcadores para os valores |
| v17    | Adicionado                             |
</details>

<!-- REF #DataClassClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D. EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D. EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.query().Params -->
| Parameter     | Type                |    | Descrição                                                                                                                           |
| ------------- | ------------------- | -- | ----------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Texto               | -> | Criterios de pesquisa como string                                                                                                   |
| formula       | Objeto              | -> | Criterios de pesquisa como objeto fórmula                                                                                           |
| value         | any                 | -> | Valores a usar para placeholders indexados                                                                                          |
| querySettings | Objeto              | -> | Opções de pesquisa: parâmetros, atributos, args, allowFormulas, contexto, queryPath,queryPlan                                       |
| Resultado     | 4D. EntitySelection | <- | Nova seleção de entidade feita de entidades de dataclass realizano o critério de pesquia especificado em *queryString* or *formula* |
<!-- END REF -->


#### Descrição

The `.query()` function<!-- REF #DataClassClass.query(). Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s)<!-- END REF -->, for all the entities in the dataclass, and returns a new object of type `EntitySelection` containing all the entities that are found. Se aplica carregamento diferido/lazy loading.

Se não houver entidades correspondentes encontradas, uma `EntitySelection` vazia é retornada.

**parâmetro queryString**

O parâmetro *queryString* usa a sintaxe abaixo:

```4d
attributePath|formula comparator value   
    {logicalOperator attributePath|formula comparator value}   
    {order by attributePath {desc | asc}}
```

onde:

*   **attributePath**: path of attribute on which you want to execute the query. This parameter can be a simple name (for example "country") or any valid attribute path (for example "country.name".) In case of an attribute path whose type is `Collection`, \[ ] notation is used to handle all the occurences (for example "children\[ ].age"). In case of an attribute path whose type is `Collection`, \[ ] notation is used to handle all the occurences (for example "children\[ ].age"). Também pode usar um **placeholder** (ver abaixo).
> *You cannot use directly attributes whose name contains special characters such as ".", "\[ ]", or "=", ">", "#"..., because they will be incorrectly evaluated in the query string. If you need to query on such attributes, you must consider using placeholders, which allow an extended range of characters in attribute paths (see* **Using placeholders** *below).*

*   **formula**: a valid formula passed as `Text` or `Object`. The formula will be evaluated for each processed entity and must return a boolean value. Within the formula, the entity is available through the `This` object.

    *   **Text**: the formula string must be preceeded by the `eval( )` statement, so that the query parser evaluates the expression correctly. For example: *"eval(length(This.lastname) >=30)"*
    *   **Object**: the [formula object](FunctionClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`Formula`](FunctionClass.md#formula) or [`Formula from string`](FunctionClass.md#formula-from-string) command.
> * Keep in mind that 4D formulas only support `&` and `|` symbols as logical operators.
> * If the formula is not the only search criteria, the query engine optimizer could prior process other criteria (e.g. indexed attributes) and thus, the formula could be evaluated for only a subset of entities.

    Formulas in queries can receive parameters through $1. This point is detailed in the **formula parameter** paragraph below.
> * You can also pass directy a `formula` parameter object instead of the `queryString` parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
> * Por razões de segurança, as chamadas a fórmulas dentro dos métodos `query()` podem ser desativadas. See `querySettings` parameter description.

*   **comparator**: symbol that compares *attributePath* and *value*. The following symbols are supported:

    | Comparação                           | Symbol(s)   | Comentário                                                                                                     |
    | ------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
    | Igual a                              | =, ==       | Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.                           |
    |                                      | ===, IS     | Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic              |
    | Not equal to                         | #, !=       | Supports the wildcard (@)                                                                                      |
    |                                      | !==, IS NOT | Considers the @ as a standard character                                                                        |
    | Menor que                            | <           |                                                                                                                |
    | Greater than                         | >           |                                                                                                                |
    | Less than or equal to                | <=          |                                                                                                                |
    | Greater than or equal to             | >=          |                                                                                                                |
    | Included in                          | IN          | Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@) |
    | Not condition applied on a statement | NOT         | Parenthesis are mandatory when NOT is used before a statement containing several operators                     |
    | Contains keyword                     | %           | Keywords can be used in attributes of string or picture type                                                   |

*   **value**: the value to compare to the current value of the property of each entity in the entity selection or element in the collection. It can be a **placeholder** (see **Using placeholders** below) or any expression matching the data type property.<p><p> When using a constant value, the following rules must be respected:
    *   **text** type constant can be passed with or without simple quotes (see **Using quotes** below). To query a string within a string (a "contains" query), use the wildcard symbol (@) in value to isolate the string to be searched for as shown in this example: "@Smith@". The following keywords are forbidden for text constants: true, false.
    *   **boolean** type constants: **true** or **false** (case sensitive).
    *   Valores constantes de tipo **numérico**: os decimais se separam com um '.' (ponto). constantes de tipo de data: formato "YYYY-MM-DD"
    *   **null** constante: usando a palavra chave "null" encontra as propriedades **null** e **undefined**.
    *   no caso de uma pesquisa com um comparador IN, o valor deve uma coleção, ou valores que coincidam com o tipo da rota do atributo entre \[ ] separados por vírgulas (para as strings, os caracteres " devem escapar-se com "\").
*   **logicalOperator**: used to join multiple conditions in the query (optional). You can use one of the following logical operators (either the name or the symbol can be used):

    | Conjunction | Symbol(s)               |
    | ----------- | ----------------------- |
    | AND         | &, &&, and              |
    | OU          | &#124;,&#124;&#124;, or |

*   **order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.
> *Se usar esta declaração, a entity selection devolvida está ordenada (para saber mais, consulte [Entity selections ordenadas vs desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

**Usar aspas**

Quando usar aspas com pesquisas, deve usar aspas simples '  '  dentro das pesquisas e aspas duplas "   "  para cercar a consulta inteira, senão um erro é retornado. Por exemplo:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```
> Aspas siples (') não são permitidas nos valores pesquisados, já que quebrariam a string de pesquisa. Por exemplo, "comp.name = 'John's pizza' " gerará um erro. Se precisar pesquisar valores com aspas simples, pode considerar o uso de placeholders (ver abaixo).

**Usando parêntesis**

Pode usar parêntesis na pesquisa para dar prioridade ao cálculo Por exemplo, pode organizar uma pesquisa da seguinte maneira: Por exemplo, pode organizar uma pesquisa da seguinte maneira:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```


**Uso de placeholders**

4D lhe permite utilizar placeholders, marcadores de posição, para os argumentos *attributePath*, *formula* e *value* dentro do parâmetro *queryString*. Um placeholder é um parâmetro que é inserido em strings de pesquisa e que pode ser substituído por outro valor quando a string for realizada. O valor dos placeholders é avaliado uma vez ao inicio da pesquisa - não é avaliado para cada elemento.

Dois tipos de marcadores podem ser usados: **placeholders indexados ** e **placeholders nomeados**:

| -         | Marcadores de posição indexados                                                                                                                                                                              | Placeholders nomeados                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definição | Os parâmetros são inseridos como :paramIndex (por exemplo :1, :2...) em queryString e seus valores correspondentes são fornecidos pela sequência de parâmetros value. Pode usara até 128 parâmetros de valor | Os parâmetros são inseridos como: paramName (por exemplo :myparam) e seus valores se proporcionam nos atributos ou objetos de parâmetros no parámetro querySettings |
| Exemplo   | $r:=class.query(":1=:2";"city";"Chicago")                                                                                                                                                                    | $o.attributes:=New object("att";"city")<br> $o.parameters:=New object("name";"Chicago")<br> $r:=class.query(":att=:name";$o)                            |

Pode misturar os tipos de argumentos em *queryString*. Um *queryString* pode conter, para os parâmetros *attributePath*, *formula* e *value* :


*   direct values (no placeholders),
*   indexed placeholders and/or named placeholders.

**É recomendado usar marcadores de posição ou placeholders nas consultas** pelas razões abaixo:

1.  It prevents malicious code insertion: if you directly use user-filled variables within the query string, a user could modifiy the query conditions by entering additional query arguments. For example, imagine a query string like:

    ```4d
     $vquery:="status = 'public' & name = "+myname //user enters their name
     $result:=$col.query($vquery)
    ```

    This query seems secured since non-public data are filtered. However, if the user enters in the *myname* area something like *"smith OR status='private'*, the query string would be modified at the interpretation step and could return private data.

    When using placeholders, overriding security conditions is not possible:

    ```4d
     $result:=$col.query("status='public' & name=:1";myname)
    ```

    In this case if the user enters *smith OR status='private'* in the *myname* area, it will not be interpreted in the query string, but only passed as a value. Looking for a person named "smith OR status='private'" will just fail.

2.  It prevents having to worry about formatting or character issues, especially when handling *attributePath* or *value* parameters that might contain non-alphanumeric characters such as ".", "['...

3.  It allows the use of variables or expressions in query arguments. Exemplos:

    ```4d
    $result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
    $result2:=$col.query("company.name = :1";"John's Pizzas")
    ```

**Pesquisa de valores null**

Quando pesquisar por valores null não pode usar a sintaxe de placeholder porque o motor de pesquisa vai consider null como um valor de comparação inesperado. Por exemplo se executar esta pesquisa:

```4d
$vSingles:=ds. Person.query("spouse = :1";Null) // não vai funcionar
```

Você não vai conseguir o resultado esperado porque o valor null será avaliado por 4D como um erro resultante da avaliação de parâmetro (por exemplo, um atributo de outra pesquisa) Para este tipo de pesquisa, deve usar a sintaxe de pesquisa direta: Para este tipo de pesquisa, deve usar a sintaxe de pesquisa direta:

```4d
 $vSingles:=ds.Person.query("spouse = null") //sintaxe correta
```


**Linkar os argumentos de pesquisa com os atributos de coleção**

Quando pesquisar em coleçõs dentro dos atributos dos objetos usando argumentos de pesquisa múltiplos unidos pelo operador AND, se quiser ter certeza que apenas entidades contendo elementos que correspondam a todos os argumentos são retornados, e não entidades cujos argumentos podem ser encontrados em elementos diferentes. Para fazer isso, é necessário vincular os argumentos de pesquisa para elementos de coleção, para que apenas elementos únicos contendo argumentos linkados são encontrados.

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

Se quiser encontrar pessoas com um tipo de local "home" na cidade "paris". Se escrever

```4d
ds. People.query("places.locations[].kind= :1 and places.locations[].city= :2";"home";"paris")
```

... a pesquisa devolverá "martin" **e** "smith" porque "smith" tem um elemento "locations" cujo "tipo" é "home" e um elemento "locations" cuja "cidade" é "paris", mesmo que sejam elementos diferentes.

Se quiser obter apenas entidades onde os argumentos correspondentes estão no mesmo elemento coleção, precisa  **linkar os argumentos**. Para linkar argumentos de pesquisa:

- Add a letter between the \[] in the first path to link and repeat the same letter in all linked arguments. For example: `locations[a].city and locations[a].kind`. You can use any letter of the Latin alphabet (not case sensitive).
- To add different linked criteria in the same query, use another letter. You can create up to 26 combinations of criteria in a single query.

Com as entidades acima, se escreve:

```4d
ds. People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... pesquisa só devolverá "martin" porque tem um elemento "locations" cujo "kind" é "home" e cujo "city" for "paris". A pesquisa não devolverá 'smith' porque os valores 'home' e 'paris' não estão no mesmo elemento de coleção.



**parâmetro de fórmula**

Como alternativa à inserção de fórmulas dentro do parâmetro *queryString* (ver acima), pode passar diretamente um objeto fórmula como critério de pesquisa booleano. A utilizaçã de um objeto fórmula para as pesquisas é **recomendada** já que se beneficia da tokenização, e o código é mais fácil de pesquisar/ler.

A fórmula deve ter sido criada com o comando `Formula` ou `Formula from string`. Nesse modo:

*   the *formula* is evaluated for each entity and must return true or false. During the execution of the query, if the formula's result is not a boolean, it is considered as false.
*   within the *formula*, the entity is available through the `This` object.
*   Se o objeto `Formula` for **null**, o errro 1626 ("Expecting a text or formula") é gerado, então pode interceptar a chamada com o método instalado `ON ERR CALL`.
> > Por razões de segurança, as chamadas a fórmulas dentro dos métodos membro`query()` podem ser desativadas. See *querySettings* parameter description.

**Passar parâmetros a fórmulas**

Todo parâmetro *formula* chamado pela função `query()` pode receber parâmetros:

*   Parameters must be passed through the **args** property (object) of the *querySettings* parameter.
*   The formula receives this **args** object as a **$1** parameter.

Este pequeno código mostra os principios de como são passados os parâmetros aos métodos:

```4d
 $settings:=New object("args";New object("exclude";"-")) //objeto args a passar os parâmetros
 $es:=ds. Students.query("eval(checkName($1.exclude))";$settings) //args se recebe em $1
```

No exemplo 3 são oferecidos mais exemplos.

**4D Server**: em cliente/servidor, as fórmulas são executadas no servidor. Neste contexto, só se envia às fórmulas o objeto `querySettings.args`.



**parâmetro querySettings**

No parâmetro opcional*settings* pode passar um objeto contendo as opções abaixo. The following properties are supported:

| Propriedade   | Type     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters    | Objeto   | **Marcadores nomeados para os valores** utilizados em *queryString* ou *fórmula*. Os valores se expressam como pares propriedade / valor, onde propriedade é o nome do marcador de posição inserido para um valor em *queryString* ou *formula* (":placeholder") e valor é o valor a comparar. Pode combinar marcadores de posição indexados (valores passados diretamente em parâmetros de valor) e valores de marcadores de posição com nome na mesma pesquisa.                                                                                                                                                                                                                                                       |
| attributes    | Objeto   | **Marcadores nomeados para as rotas de atributos** utilizados en *queryString* ou *formula*. Os atributos se expressam como pares propriedade/ valor, onde propriedade é o nome do marcador de posição inserido para uma rota de atributo em *queryString* ou *formula* (":placeholder") e valor pode ser uma string ou uma coleção de strings. Cada valor e uma rota que pode designar um escalar ou um atributo relacionado da dataclass ou uma propriedade num campo de objeto da dataclass<p><table><tr><th>Type</th><th>Descrição</th></tr><tr><td>String</td><td>attributePath expressado com a notação de pontos, por exemplo: "name" ou "user.address.zipCode"</td></tr><tr><td>Coleção de strings</td><td>Cada string da coleção representa um nível de attributePath, por exemplo: \["name"] ou \["user","address","zipCode"]. Usar uma coleção permite pesquisar atributos com nomes que não se ajustem à notação de pontos, por exemplo \["4Dv17.1","en/fr"]</td></tr></table>Pode combinar marcadores de posição indexados (valores passados diretamente nos parâmetros *value*) e os valores de marcadores de posição com nome na mesma pesquisa. |
| args          | Objeto   | Parámetro(s) a passar para as fórmulas, se houver. O objeto **args** será recebido em $1 dentro das fórmulas e, portanto, seus valores estarão disponíveis através de *$1.property* (ver exemplo 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| allowFormulas | Booleano | True para permitir as chamadas de fórmulas na pesquisa (padrão). Passe falso para desautorizar a execução de fórmulas. Se for estabelecido como false y `query()` receber uma fórmula, se envia um erro (1278 - Fórmula não permitida neste método membro).                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| context       | Texto    | Etiqueta para o contexto de otimização automático aplicados à seleção de entidade. This context will be used by the code that handles the entity selection so that it can benefit from the optimization. Esta função está projetada para o processamento cliente/servidor; para saber mais, consulte **Otimização cliente/servidor**.                                                                                                                                                                                                                                                                                                                                                                                   |
| queryPlan     | Booleano | Na entity selection resultante, devolve ou não a descrição detalhada da pesquisa logo antes de ser executada, ou seja, a pesquisa planificada. A propriedade devolvida é um objeto que inclui cada pesquisa e subpesquisa prevista (no caso de uma pesquisa complexa). Esta opção é útil durante a fase de desenvolvimento de uma aplicação. Geralmente é usada em conjunto com queryPath. Como padrão é omitido: false. **Nota**: esta propriedade só são compatíveis com as funções`entitySelection.query( )` e `dataClass.query( )`.                                                                                                                                                                                 |
| queryPath     | Booleano | Na entity selection resultante, devolve ou não a descrição detalhada da pesquisa tal qual for realizada. A propriedade retornada é um objeto que contém a rota atual usada para a pesquisa (geralmente idêntica àquela do queryPlan, mas deve diferenciar se o motor consegue otimizar a pesquisa), assim como o tempo de processamento e o número de registros encontrado. Esta opção é útil durante a fase de desenvolvimento de uma aplicação. Como padrão é omitido: false. **Nota**: esta propriedade só são compatíveis com as funções`entitySelection.query( )` e `dataClass.query( )`.                                                                                                                          |

**Sobre queryPlan e queryPath**

A informação registrada em `queryPlan`/`queryPath` inclui o tipo de pesquisa (indexada e sequencial) e cada subconsulta necessária junto com os operadores de conjunção. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. As rotas de acesso das petições também contém o número de entidades encontradas e o tempo necessário para executar cada critério de pesquisa. Geralmente a descrição do plano de pesquisa e sua rota são idênticas mas podem ser diferentes porque 4D pode implementar otimizações dinâmicas quando uma pesquisa for executada para melhorar a performance. Por exemplo, o motor 4D pode converter dinamicamente uma consulta indexada em uma consulta sequencial se estimar que seja mais rápido. Esse caso particular pode acontecer quando o número de entidades sendo pesquisada é baixo.

Por exemplo se executar esta pesquisa:

```4d
 $sel:=ds. Employee.query("salary < :1 and employer.name = :2 or employer.revenues > :3";\  
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
$entitySelection:=ds. Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds. Employee.query("birthDate <= :1";Current date-10950)
```

Pesquisa com marcadores de posição indexados para os valores:

```4d
$entitySelection:=ds. Customer.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@")
```

Pesquisa com marcadores de posição indexados para valores em u ma dataclass relacionada:

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

  //Pode obter essas propriedades na seleção de entidade abaixo
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

Pesquisa com uma rota de atributo de tipo Objeto

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
  //salesperson é uma entidade relacionada
```

Pesquisa com marcadores de posição indexados para os atributos e marcadores de posição com nome para os valores:

```4d
var $es : cs. EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds. Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson é uma entidade relacionada
```

Pesquisa com marcadores de posição indexados para os atributos e os valores:


```4d
var $es : cs. EmployeeSelection
$es:=ds. Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson é uma entidade relacionada
```

#### Exemplo 2

Esta seção ilustra pesquisas com marcadores de posição com  nomes para os atributos.

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
 var $es : cs. EmployeeSelection
 $querySettings:=New object
 $querySettings.attributes:=New object("attName";"name";"attWord";New collection("softwares";"Word 10.2"))
 $es:=ds. Employee.query(":attName = 'Marie' and :attWord = 'Installed'";$querySettings)
  //$es.length=1 (Employee Marie)
```

Pesquisa com marcadores de posição com nome para os atributos e os valores:

```4d
 var $querySettings : Object
 var $es : cs. EmployeeSelection
 var $name : Text
 $querySettings:=New object
  //Placeholders para os valores
  //Se pede ao usuário um nome
 $name:=Request("Por favor, introduza o nombre a buscar:")
 If(OK=1)
    $querySettings.parameters:=New object("givenName";$name)
  //Placeholders para as rotas de atributos
    $querySettings.attributes:=New object("attName";"name")
    $es:=ds. Employee.query(":attName= :givenName";$querySettings)
 End if
```

#### Exemplo 3

Estes exemplos ilustram as distintas formas de utilizar fórmulas com ou sem parâmetros em suas pesquisas.

A fórmula se da como texto com `eval()` no parâmetro *queryString*:

```4d
 var $es : cs. StudentsSelection
 $es:=ds. Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

A fórmula se dá como um objeto `Formula` através de um marcador de posição:

```4d
 var $es : cs. StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds. Students.query(":1 and nationality='French'";$formula)
```

Só se da como criterio um objeto `Formula`:

```4d
 var $es : cs. StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds. Students.query($formula)
```

Podem ser aplicadas várias fórmulas:

```4d
 var $formula1; $1; $formula2 ;$0 : Object
 $formula1:=$1
 $formula2:=Formula(Length(This.firstname)>=30)
 $0:=ds. Students.query(":1 and :2 and nationality='French'";$formula1;$formula2)
```


Uma fórmula texto em *queryString* recebe um parámetro:

```4d
 var $es : cs. StudentsSelection
 var $settings : Object
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds. Students.query("eval(checkName($1.filter)) and nationality=:1";"French";$settings)
```

```4d
  //checkName method
 #DECLARE($exclude : Text) -> $result : Boolean
 $result:=(Position($exclude;This.lastname)=0)
```

Utilizando o mesmo método ***checkName***, um objeto `Formula` como marcador de posição recebe um parámetro:

```4d
 var $es : cs. StudentsSelection
 var $settings; $formula : Object
 $formula:=Formula(checkName($1.filter))
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds. Students.query(":1 and nationality=:2";$formula;"French";$settings)
 $settings.args.filter:="*" //mudar os parâmetros sem atualizar o objeto $formula
 $es:=ds. Students.query(":1 and nationality=:2";$formula;"French";$settings)
```

Queremos desautorizar as fórmulas, por exemplo, quando el usuario introduz sua consulta:

```4d
 var $es : cs. StudentsSelection
 var $settings : Object
 var $queryString : Text
 $queryString:=Request("Enter your query:")
 if(OK=1)
    $settings:=New object("allowFormulas";False)
    $es:=ds. Students.query($queryString;$settings) //Se produz um erro se $queryString conter uma fórmula
 End if
```

#### Veja também

[`.query()`](EntitySelectionClass.md#query) para seleções de entidades
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
