---
id: EntityClass
title: Entity
---

An [entity](ORDA/dsMapping.md#entity) is an instance of a [Dataclass](ORDA/dsMapping.md#dataclass), like a record of the table matching the dataclass in its associated datastore. It contains the same attributes as the dataclass as well as the data values and specific properties and functions.


### Resumo

|                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntityClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.clone().Summary -->|
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.diff().Summary -->|
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.drop().Summary -->|
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.first().Summary -->|
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.fromObject().Summary -->|
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getKey().Summary -->|
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getSelection().Summary -->|
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getStamp().Summary -->|
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.indexOf().Summary -->|
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.isNew().Summary -->|
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.last().Summary -->|
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.lock().Summary -->|
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.next().Summary -->|
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.previous().Summary -->|
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.reload().Summary -->|
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.save().Summary -->|
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.toObject().Summary -->|
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touched().Summary -->|
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touchedAttributes().Summary -->|
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.unlock().Summary -->|






<!-- REF EntityClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF EntityClass.attributeName.Syntax -->
***.attributeName*** : any<!-- END REF -->


#### Descrição

Qualquer atributo dataclass está disponível como propriedade de uma entidade, que <!-- REF EntityClass.attributeName.Summary -->armazena o valor do atributo para a entidade<!-- END REF -->.
> Dataclass attributes can also be reached using the alternate syntax with \[ ].

The attribute value type depends on the attribute [kind](DataClassAttributeClass.md#kind) (relation or storage):

*   If *attributeName* kind is **storage**: `.attributeName` returns a value of the same type as *attributeName*.
*   If *attributeName* kind is **relatedEntity**: `.attributeName` returns the related entity. Values of the related entity are directly available through cascading properties, for example "myEntity.employer.employees\[0].lastname".
*   If *attributeName* kind is **relatedEntities**: `.attributeName` returns a new entity selection of related entities. Duplications are removed (an unordered entity selection is returned).


#### Exemplo

```4d
 var $myEntity : cs. EmployeeEntity
 $myEntity:=ds. Employee.new() //Create a new entity
 $myEntity.name:="Dupont" // assign 'Dupont' to the 'name' attribute
 $myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
 $myEntity.save() //save the entity
```

<!-- END REF -->




<!-- REF EntityClass.clone().Desc -->
## .clone()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>


<!-- REF #EntityClass.clone().Syntax -->
**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->
| Parameter | Type       |    | Descrição                              |
| --------- | ---------- |:--:| -------------------------------------- |
| Resultado | 4D. Entity | <- | Nova entidade referenciando o registro |
<!-- END REF -->


#### Descrição

A função `.clone()`<!-- REF #EntityClone().clone().Summary -->cria em memória uma nova entidade referenciando o mesmo registro que a entidade original<!-- END REF -->. Esta função permite que você atualize as entidades separadamente.
> Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save( )`](#save) function is executed.

Esta função só pode ser usada com entidades já salvas no banco de dados. Ele não pode ser chamado em uma entidade recém-criada (para a qual [`.isNew()`](#isnew) retorna **Verdadeiro**).


#### Exemplo

```4d
 var $emp; $empCloned : cs. EmployeeEntity
 $emp:=ds. Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Updates done on $emp are not done on $empCloned

```

<!-- END REF -->





<!-- REF EntityClass.diff().Desc -->
## .diff()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>

<!-- REF #EntityClass.diff().Syntax -->
**.diff**( *entityToCompare* : 4D. Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->


<!-- REF #EntityClass.diff().Params -->
| Parameter           | Type       |    | Descrição                                        |
| ------------------- | ---------- |:--:| ------------------------------------------------ |
| entityToCompare     | 4D. Entity | -> | Entidade a ser comparada com a entidade original |
| attributesToCompare | Coleção    | -> | Nome dos atributos a serem comparados            |
| Resultado           | Coleção    | <- | Diferenças entre as entidades                    |
<!-- END REF -->


#### Descrição

A função `.diff()` <!-- REF #EntityClass.diff().Summary -->compara o conteúdo de duas entidades e retorna suas diferenças<!-- END REF -->.

No *entityToCompare*, passe a entidade a ser comparada à entidade original.

Em *attributesToCompare*, pode designar atributos específicos para comparar. Se fornecida, a comparação é feita apenas nos atributos especificados. Se não for fornecida, todas as diferenças entre as entidades são devolvidas.

As diferenças são retornadas como uma coleção de objetos cujas propriedades são:

| Property name | Type                              | Descrição                              |
| ------------- | --------------------------------- | -------------------------------------- |
| attributeName | String                            | Nome do atributo                       |
| value         | any - Depende do tipo de atributo | Valor do atributo na entidade          |
| otherValue    | any - Depende do tipo de atributo | Valor do atributo em *entityToCompare* |

Apenas atributos com valores diferentes estão incluídos na coleção. Se nenhuma diferença for encontrada, `.diff()` retorna uma coleção vazia.

A função se aplica para propriedades cujo [tipo](DataClassAttributeClass.md#kind) é **de armazenamento** ou **relacionada a Entidade**. No caso de uma entidade relacionada ter sido atualizada (ou seja, a chave estrangeira), o nome da entidade relacionada e seu nome de chave primária são retornados como propriedades *attributeName* ( value** e *outroValue* estão vazios para o nome da entidade relacionada).

Se uma das entidades comparadas for **Null**, um erro é gerado.

#### Exemplo 1


```4d
 var $diff1; $diff2 : Collection
 employee:=ds. Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // All differences are returned
 $diff2:=$clone.diff(employee;New collection"firstName";"lastName"))
  // Only differences on firstName and lastName are returned
```

$diff1:

```4d
[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    },
    {
        "attributeName": "salary",
        "value": 66600,
        "otherValue": 500
    }
]
$diff2:

[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    }
]
```

#### Exemplo 2

```4d
 var vCompareResult1; vCompareResult2; vCompareResult3; $attributesToInspect : Collection
 vCompareResult1:=New collection
 vCompareResult2:=New collection
 vCompareResult3:=New collection
 $attributesToInspect:=New collection

 $e1:=ds. Employee.get(636)
 $e2:=ds. Employee.get(636)

 $e1.firstName:=$e1.firstName+" update"
 $e1.lastName:=$e1.lastName+" update"

 $c:=ds. Company.get(117)
 $e1.employer:=$c
 $e2.salary:=100

 $attributesToInspect.push("firstName")
 $attributesToInspect.push("lastName")

 vCompareResult1:=$e1.diff($e2)
 vCompareResult2:=$e1.diff($e2;$attributesToInspect)
 vCompareResult3:=$e1.diff($e2;$e1.touchedAttributes())
```

vCompareResultado1 (todas as diferenças são devolvidas):

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "salary",
        "value": 33500,
        "otherValue": 100
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
  {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 from Company
        "otherValue": "[object Entity]"// Entity 118 from Company
    }
]
```

vCompareResult2 (apenas diferenças em $attributesToInspect foram retornadas)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    }
]
```

vCompareResult3 (apenas as diferenças em $e1 atributos tocados são retornadas)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
     {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 from Company
        "otherValue": "[object Entity]"// Entity 118 from Company

    }
]
```


<!-- END REF -->



<!-- REF EntityClass.drop().Desc -->
## .drop()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.drop().Syntax -->
**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->
| Parameter | Type    |    | Descrição                                                                       |
| --------- | ------- |:--:| ------------------------------------------------------------------------------- |
| mode      | Integer | -> | `dk force drop if stamp changed`: Força a queda mesmo se a estampa tiver mudado |
| Resultado | Objeto  | <- | Resultado da operação de queda                                                  |
<!-- END REF -->

#### Descrição

A função `.drop()` <!-- REF #EntityClass.drop().Summary -->elimina os dados contidos na entidade da datastore<!-- END REF -->, da tabela relacionada com a sua Dataclass. Note-se que a entidade permanece na memória.

Numa aplicação multiusuário ou multiprocesso, a função `.drop()` é executada sob um mecanismo ["optimistic lock"](ORDA/entities.md#entity-locking) , no qual um selo de bloqueio interno é automaticamente incrementado cada vez que o registo for guardado.

Por padrão, se o parâmetro *modo* for omitido, a função retornará um erro (veja abaixo) se a mesma entidade tiver sido modificada (ou seja, O selo mudou) por outro processo ou usuário nesse meio tempo.

Caso contrário, pode passar a opção `dk force drop if stamp changed` no parâmetro *mode* : nesse caso, a entidade é abandonada mesmo que a estampa tenha sido alterada (e a chave primária continua a ser a mesma).

**Resultado**

O objecto devolvido por `.drop( )` contém as seguintes propriedades:

| Propriedade   |                           | Type                   | Descrição                                                                                                               |
| ------------- | ------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| success       |                           | booleano               | verdadeiro se a ação de queda for bem-sucedida, falso caso contrário.                                                   |
|               |                           |                        | ***Disponível apenas em caso de erro:***                                                                                |
| status(*)     |                           | number                 | Código de erro, ver abaixo                                                                                              |
| statusText(*) |                           | texto                  | Descrição do erro, ver abaixo                                                                                           |
|               |                           |                        | ***Disponível apenas em caso de erro de bloqueio pessimista:***                                                         |
| LockKindText  |                           | texto                  | "Bloqueado pelo registro"                                                                                               |
| lockInfo      |                           | object                 | Informações sobre a origem do bloqueio                                                                                  |
|               | task_id                   | number                 | Process ID                                                                                                              |
|               | user_name                 | texto                  | Nome de usuário de sessão na máquina                                                                                    |
|               | user4d_alias              | texto                  | Pseudônimo do usuário se definido por `SET USER ALIAS`, caso contrário, nome de usuário no diretório 4D                 |
|               | host_name                 | texto                  | Nome da máquina                                                                                                         |
|               | task_name                 | texto                  | Nome de processo                                                                                                        |
|               | client_version            | texto                  |                                                                                                                         |
|               |                           |                        | ***Disponível apenas em caso de erro grave (erro grave pode ser tentar duplicar uma chave primária, disco cheio...):*** |
| errors        |                           | uma coleção de objetos |                                                                                                                         |
|               | message                   | texto                  | Mensagem de erro                                                                                                        |
|               | assinatura de componentes | texto                  | assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                    |
|               | errCode                   | number                 | Error code                                                                                                              |

(\*) Os seguintes valores podem ser devolvidos nas propriedades *status* e *statusText* do objecto *Result* em caso de erro:

| Constante                                 | Value | Comentário                                                                                                                                                                                                                    |
| ----------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<br><li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). Ao utilizar entity.drop( ), este erro pode ser devolvido quando usar a opção dk force drop if stamp changed. Ao usar entity.lock( ), este erro pode ser retornado quando usar a opção dk if stamp changed</li><p>**statusText asociado**: "A entidade já não existe"   |
| `dk status locked`                        | 3     | A entidade está bloqueada por um bloqueio pessimista.<br>**Associated statusText**: "Já bloqueado"                                                                                                                      |
| `dk status serious error`                 | 4     | Um erro grave é um erro de banco de dados de baixo nível (por exemplo, chave duplicada), um erro de hardware, etc.<br>**Associado statusText**: "Outro erro"                                                            |
| `dk status stamp has changed`             | 2     | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).<br><li>com `.save( )`: erro apenas se a opção `dk auto merge' não for utilizada</li><li>com `.drop( )`: erro apenas se a opção `dk force drop if stamp changed' não for utilizada</li><li>com `.lock( )`: erro apenas se a opção `dk reload if stamp changed` não for usada</li><li>**Associated statusText***: "O carimbo mudou"</li> |


#### Exemplo 1

Exemplo sem a opção `dk force drop if stamp changed` :

```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity
 var $status : Object
 $employees:=ds. Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Exemplo 2

Exemplo com a opção`dk force drop if stamp changed`:

```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity
 var $status : Object
 $employees:=ds. Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
``` 

<!-- END REF -->




<!-- REF EntityClass.first().Desc -->
## .first()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.first().Syntax -->
**.first()**: 4D. Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->
| Parameter | Type       |    | Descrição                                                                            |
| --------- | ---------- |:--:| ------------------------------------------------------------------------------------ |
| Resultado | 4D. Entity | <- | Referencia à primeira entidade da entity selection (Null se a seleção estiver vazia) |
<!-- END REF -->

#### Descrição

A função `.first()`<!-- REF #EntityClass.first(). Summary -->retorna uma referência à entidade na primeira posição da seleção da entidade a que a entidade pertence<!-- END REF -->.

Se a entidade não pertence a nenhuma seleção de entidade existente (ex: [.getSelection( )](#getselection) retorna Null), a função retorna um valor nulo.

#### Exemplo

```4d
 var $employees : cs. EmployeeSelection
 var $employee; $firstEmployee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() //$firstEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->



<!-- REF EntityClass.fromObject().Desc -->
## .fromObject()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->
**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->
| Parameter | Type   |    | Descrição                           |
| --------- | ------ |:--:| ----------------------------------- |
| filler    | Objeto | -> | Objeto do qual preencher a entidade |
<!-- END REF -->

#### Descrição

A função `.fromObject()` <!-- REF #EntityClass.fromObject().Summary -->preenche uma entidade com o conteúdo de *filler*<!-- END REF -->.
> This function modifies the original entity.

O mapeamento entre o objecto e a entidade é feito sobre os nomes dos atributos:

*   If a property of the object does not exist in the dataclass, it is ignored.
*   Data types must be equivalent. If there is a type mismatch between the object and dataclass, 4D tries to convert the data whenever possible (see [`Converting data types`](Concepts/data-types.md#converting-data-types)), otherwise the attribute is left untouched.
*   The primary key can be given as is or with a "__KEY" property (filled with the primary key value). If it does not already exist in the dataclass, the entity is created with the given value when [.save()](#save) is called. If the primary key is not given, the entity is created and the primary key value is assigned with respect to database rules. The auto-increment is only computed if the primary key is null.

*filler* pode tratar de uma entidade relacionada sob as seguintes condições:

*   *filler* contains the foreign key itself, or
*   *filler* contains a property object with the same name as the related entity, containing a single property named "\_\_KEY".
*   if the related entity does not exist, it is ignored.

#### Exemplo

Com o seguinte objeto $o:

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// relatedEntity given with PK
    "employerID": 20 // relatedEntity given with PK
}
```


O código a seguir criará uma entidade com gerente e entidades relacionadas ao empregador.


```4d
 var $o : Object
 var $entity : cs. EmpEntity
 $entity:=ds. Emp.new()
 $entity.fromObject($o)
 $entity.save()
```


Você também poderia usar uma entidade relacionada dada como um objeto:

```4d

{
    "firstName": "Marie",
    "lastName": "Lechat",
    "salary": 68400,
    "birthDate": "1971-09-03T00:00:00.000Z",
    "woman": false,
    "employer": {// relatedEntity given as an object
        "__KEY": "21"
    },
    "manager": {// relatedEntity given as an object
        "__KEY": "411"
    }
}
```


<!-- END REF -->




<!-- REF EntityClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->
**.getDataClass()** : 4D. DataClass<!-- END REF -->

<!-- REF #EntityClass.getDataClass().Params -->
| Parameter | Type          |    | Descrição                                    |
| --------- | ------------- |:--:| -------------------------------------------- |
| Resultado | 4D. DataClass | <- | Objeto DataClass ao qual a entidade pertence |
<!-- END REF -->

#### Descrição

A função `.getDataClass()` <!-- REF #EntityClass.getDataClass().Summary -->retorna o dataclass da entidade<!-- END REF -->. Esta função é útil para configurar o código genérico.


#### Exemplo

O seguinte código genérico duplica qualquer entidade:

```4d
  //duplicate_entity method 
  //duplicate_entity($entity) 

 #DECLARE($entity : 4D. Entity)  
 var $entityNew : 4D. Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() //create a new entity in the parent dataclass
 $entityNew.fromObject($entity.toObject()) //get all attributes
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null //reset the primary key
 $status:=$entityNew.save() //save the duplicated entity
```

<!-- END REF -->




<!-- REF EntityClass.getKey().Desc -->
## .getKey()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.getKey().Syntax -->
**.getKey**( { *mode* : Integer } ) : Text<br>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.getKey().Params -->
| Parameter | Type    |    | Descrição                                                                               |
| --------- | ------- |:--:| --------------------------------------------------------------------------------------- |
| mode      | Integer | -> | `dk key as string`: primary key is returned as a string, no matter the primary key type |
| Resultado | Texto   | <- | Value of the text primary key of the entity                                             |
| Resultado | Integer | <- | Value of the numeric primary key of the entity                                          |

<!-- END REF -->

#### Descrição

The `.getKey()` function<!-- REF #EntityClass.getKey(). Summary -->returns the primary key value of the entity<!-- END REF -->.

Primary keys can be numbers (Integer) or strings. You can "force" the returned primary key value to be a string, no matter the actual primary key type, by passing the `dk key as string` option in the *mode* parameter.

#### Exemplo


```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("The primary key is "+$employee.getKey(dk key as string))
```

<!-- END REF -->




<!-- REF EntityClass.getSelection().Desc -->
## .getSelection()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->
**.getSelection()**: 4D. EntitySelection<!-- END REF -->

<!-- REF #EntityClass.getSelection().Params -->
| Parameter | Type                |    | Descrição                                                        |
| --------- | ------------------- |:--:| ---------------------------------------------------------------- |
| Resultado | 4D. EntitySelection | <- | Entity selection to which the entity belongs (Null if not found) |
<!-- END REF -->

#### Descrição

The `.getSelection()` function<!-- REF #EntityClass.getSelection(). Summary -->returns the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to an entity selection, the function returns Null.

#### Exemplo


```4d
 var $emp : cs. EmployeeEntity
 var $employees; $employees2 : cs. EmployeeSelection
 $emp:=ds. Employee.get(672) // This entity does not belong to any entity selection
 $employees:=$emp.getSelection() // $employees is Null

 $employees2:=ds. Employee.query("lastName=:1";"Smith") //This entity selection contains 6 entities
 $emp:=$employees2[0]  // This entity belongs to an entity selection

 ALERT("The entity selection contains "+String($emp.getSelection().length)+" entities")
```

<!-- END REF -->



<!-- REF EntityClass.getStamp().Desc -->
## .getStamp()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->
**.getStamp()** : Integer<!-- END REF -->

<!-- REF #EntityClass.getStamp().Params -->
| Parameter | Type    |    | Descrição                                               |
| --------- | ------- |:--:| ------------------------------------------------------- |
| Resultado | Integer | <- | Stamp of the entity (0 if entity has just been created) |
<!-- END REF -->

#### Descrição

The `.getStamp()` function<!-- REF #EntityClass.getStamp(). Summary -->returns the current value of the stamp of the entity<!-- END REF -->.

The internal stamp is automatically incremented by 4D each time the entity is saved. It manages concurrent user access and modifications to the same entities (see [**Entity locking**](ORDA/entities.md#entity-locking)).
> For a new entity (never saved), the function returns 0. To know if an entity has just been created, it is recommended to use [.isNew()](#isnew).


#### Exemplo


```4d
 var $entity : cs. EmployeeEntity
 var $stamp : Integer

 $entity:=ds. Employee.new()
 $entity.lastname:="Smith"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=1

 $entity.lastname:="Wesson"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=2
```

<!-- END REF -->




<!-- REF EntityClass.indexOf().Desc -->
## .indexOf()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->
**.indexOf**( { *entitySelection* : 4D. EntitySelection } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.indexOf().Params -->
| Parameter       | Type                |    | Descrição                                                          |
| --------------- | ------------------- |:--:| ------------------------------------------------------------------ |
| entitySelection | 4D. EntitySelection | -> | Position of the entity is given according to this entity selection |
| Resultado       | Integer             | <- | Position of the entity in an entity selection                      |
<!-- END REF -->

#### Descrição

The `.indexOf()` function<!-- REF #EntityClass.indexOf(). Summary -->returns the position of the entity in an entity selection<!-- END REF -->.

By default if the *entitySelection* parameter is omitted, the function returns the entity's position within its own entity selection. Otherwise, it returns the position of the entity within the specified *entitySelection*.

The resulting value is included between 0 and the length of the entity selection -1.

*   If the entity does not have an entity selection or does not belong to *entitySelection*, the function returns -1.
*   If *entitySelection* is Null or does not belong to the same dataclass as the entity, an error is raised.

#### Exemplo


```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1] //This entity belongs to an entity selection
 ALERT("The index of the entity in its own entity selection is "+String($employee.indexOf())) //1

 $employee:=ds. Employee.get(725) //This entity does not belong to an entity selection
 ALERT("The index of the entity is "+String($employee.indexOf())) // -1
```

<!-- END REF -->




<!-- REF EntityClass.isNew().Desc -->
## .isNew()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.isNew().Syntax -->
**.isNew()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.isNew().Params -->
| Parameter | Type     |    | Descrição                                                                 |
| --------- | -------- |:--:| ------------------------------------------------------------------------- |
| Resultado | Booleano | <- | True if entity has just been created and not yet saved. Otherwise, False. |
<!-- END REF -->

#### Descrição

The `.isNew()` function<!-- REF #EntityClass.isNew(). Summary -->returns True if the entity to which it is applied has just been created and has not yet been saved in the datastore<!-- END REF -->. Otherwise, it returns False.


#### Exemplo


```4d
 var $emp : cs. EmployeeEntity

 $emp:=ds. Employee.new()

 If($emp.isNew())
    ALERT("This is a new entity")
 End if
```

<!-- END REF -->



<!-- REF EntityClass.last().Desc -->
## .last()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.last().Syntax -->
**.last()** : 4D. Entity<!-- END REF -->

<!-- REF #EntityClass.last().Params -->
| Parameter | Type       |    | Descrição                                                           |
| --------- | ---------- |:--:| ------------------------------------------------------------------- |
| Resultado | 4D. Entity | <- | Reference to last entity of an entity selection (Null if not found) |
<!-- END REF -->

#### Descrição

The `.last()` function<!-- REF #EntityClass.last(). Summary -->returns a reference to the entity in last position of the entity selection which the entity belongs to<!-- END REF -->.

Se a entidade não pertence a nenhuma seleção de entidade existente (ex: [.getSelection( )](#getselection) retorna Null), a função retorna um valor nulo.


#### Exemplo


```4d
 var $employees : cs. EmployeeSelection
 var $employee; $lastEmployee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $lastEmployee:=$employee.last() //$lastEmployee is the last entity of the $employees entity selection
```

<!-- END REF -->



<!-- REF EntityClass.lock().Desc -->
## .lock()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.lock().Syntax -->
**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.lock().Params -->
| Parameter | Type    |    | Descrição                                                            |
| --------- | ------- |:--:| -------------------------------------------------------------------- |
| mode      | Integer | -> | `dk reload if stamp changed`: Reload before locking if stamp changed |
| Resultado | Objeto  | <- | Result of lock operation                                             |
<!-- END REF -->

#### Descrição

The `.unlock()` function<!-- REF #EntityClass.unlock(). Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF -->in the datastore and table related to its dataclass.

Other processes will see this record as locked (the `result.success` property will contain False if they try to lock the same entity using this function). Only functions executed in the "locking" session are allowed to edit and save the attributes of the entity. The entity can be loaded as read-only by other sessions, but they will not be able to enter and save values.

A record locked by `.lock()` is unlocked:

*   when the [`unlock()`](#unlock) function is called on a matching entity in the same process
*   automatically, when it is no longer referenced by any entities in memory. For example, if the lock is put only on one local reference of an entity, the entity is unlocked when the function ends. As long as there are references to the entity in memory, the record remains locked.

> An entity can also be [locked by a REST session](../REST/$lock.md), in which case it can only be unlocked by the session.

Por padrão, se o parâmetro *modo* for omitido, a função retornará um erro (veja abaixo) se a mesma entidade tiver sido modificada (ou seja, O selo mudou) por outro processo ou usuário nesse meio tempo.

Otherwise, you can pass the `dk reload if stamp changed` option in the *mode* parameter: in this case, no error is returned and the entity is reloaded when the stamp has changed (if the entity still exists and the primary key is still the same).

**Resultado**

The object returned by `.lock( )` contains the following properties:

| Propriedade      |                           | Type                   | Descrição                                                                                                                                                   |
| ---------------- | ------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success          |                           | booleano               | true if the lock action is successful (or if the entity is already locked in the current process), false otherwise.                                         |
|                  |                           |                        | ***Available only if `dk reload if stamp changed` option is used:***                                                                                        |
| **wasReloaded**  |                           | booleano               | true if the entity was reloaded with success, false otherwise.                                                                                              |
|                  |                           |                        | ***Disponível apenas em caso de erro:***                                                                                                                    |
| status(\*)     |                           | number                 | Código de erro, ver abaixo                                                                                                                                  |
| statusText(\*) |                           | texto                  | Descrição do erro, ver abaixo                                                                                                                               |
|                  |                           |                        | ***Disponível apenas em caso de erro de bloqueio pessimista:***                                                                                             |
| lockKindText     |                           | texto                  | "Locked by record" if locked by a 4D process, "Locked by session" if locked by a REST session                                                               |
| lockInfo         |                           | object                 | Information about the lock origin. Returned properties depend on the lock origin (4D process or REST session).                                              |
|                  |                           |                        | ***Available only for a 4D process lock:***                                                                                                                 |
|                  | task_id                   | number                 | Process ID                                                                                                                                                  |
|                  | user_name                 | texto                  | Nome de usuário de sessão na máquina                                                                                                                        |
|                  | user4d_alias              | texto                  | Name or alias of the 4D user                                                                                                                                |
|                  | user4d_id                 | number                 | User id in the 4D database directory                                                                                                                        |
|                  | host_name                 | texto                  | Nome da máquina                                                                                                                                             |
|                  | task_name                 | texto                  | Nome de processo                                                                                                                                            |
|                  | client_version            | texto                  | Version of the client                                                                                                                                       |
|                  |                           |                        | ***Available only for a REST session lock:***                                                                                                               |
|                  | host                      | texto                  | URL that locked the entity (e.g. "127.0.0.1:8043")                                                                                                          |
|                  | IPAddr                    | texto                  | IP address of the locker (e.g. "127.0.0.1")                                                                                                                 |
|                  | userAgent                 | texto                  | userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |
|                  |                           |                        | ***Available only in case of serious error*** (primary key already exists, disk full...):                                                                   |
| errors           |                           | uma coleção de objetos |                                                                                                                                                             |
|                  | message                   | texto                  | Mensagem de erro                                                                                                                                            |
|                  | assinatura de componentes | texto                  | assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                                                        |
|                  | errCode                   | number                 | Error code                                                                                                                                                  |


(\*) The following values can be returned in the *status* and *statusText* properties of the *Result* object in case of error:

| Constante                                 | Value | Comentário                                                                                                                                                                                                                                            |
| ----------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). When using `.drop( )`, this error can be returned when dk force drop if stamp changed option is used. When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br>**statusText asociado**: "A entidade já não existe"                                                    |
| `dk status locked`                        | 3     | The entity is locked by a pessimistic lock.<p><p>**Associated statusText**: "Already locked"                                                                                                          |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<p><p>**Associated statusText**: "Other error"                                                             |
| `dk status stamp has changed`             | 2     | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).<li>com `.save( )`: erro apenas se a opção `dk auto merge' não for utilizada</li><li>com `.drop( )`: erro apenas se a opção `dk force drop if stamp changed' não for utilizada</li><li>com `.lock( )`: erro apenas se a opção `dk reload if stamp changed` não for usada</li><br>**Associated statusText**: "Stamp has changed" |


#### Exemplo 1

Example with error:

```4d
 var $employee : cs. EmployeeEntity
 var $status : Object
 $employee:=ds. Employee.get(716)
 $status:=$employee.lock()
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```


#### Exemplo 2

Example with `dk reload if stamp changed` option:

```4d
 var $employee : cs. EmployeeEntity
 var $status : Object
 $employee:=ds. Employee.get(717)
 $status:=$employee.lock(dk reload if stamp changed)
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->



<!-- REF EntityClass.next().Desc -->
## .next()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.next().Syntax -->
**.next()** : 4D. Entity<!-- END REF -->

<!-- REF #EntityClass.next().Params -->
| Parameter | Type       |    | Descrição                                                            |
| --------- | ---------- |:--:| -------------------------------------------------------------------- |
| Resultado | 4D. Entity | <- | Reference to next entity in the entity selection (Null if not found) |
<!-- END REF -->

#### Descrição

The `.next()` function<!-- REF #EntityClass.next(). Summary -->returns a reference to the next entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

If there is no valid next entity in the entity selection (i.e. you are on the last entity of the selection), the function returns Null. If the next entity has been dropped, the function returns the next valid entity (and eventually Null).


#### Exemplo

```4d
 var $employees : cs. EmployeeSelection
 var $employee; $nextEmployee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee is the second entity of the $employees entity selection

```

<!-- END REF -->


<!-- REF EntityClass.previous().Desc -->
## .previous()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.previous().Syntax -->
**.previous()**  : 4D. Entity<!-- END REF -->

<!-- REF #EntityClass.previous().Params -->
| Parameter | Type       |    | Descrição                                                                |
| --------- | ---------- |:--:| ------------------------------------------------------------------------ |
| Resultado | 4D. Entity | <- | Reference to previous entity in the entity selection (Null if not found) |
<!-- END REF -->

#### Descrição

The `.previous()` function<!-- REF #EntityClass.previous(). Summary -->returns a reference to the previous entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

If there is no valid previous entity in the entity selection (i.e. you are on the first entity of the selection), the function returns Null. If the previous entity has been dropped, the function returns the previous valid entity (and eventually Null).


#### Exemplo

```4d
 var $employees : cs. EmployeeSelection
 var $employee; $previousEmployee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() //$previousEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->



<!-- REF EntityClass.reload().Desc -->
## .reload( )

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.reload().Syntax -->
**.reload()** : Object<!-- END REF -->

<!-- REF #EntityClass.reload().Params -->
| Parameter | Type   |    | Descrição     |
| --------- | ------ |:--:| ------------- |
| Resultado | Objeto | <- | Status object |
<!-- END REF -->

#### Descrição

The `.reload()` function<!-- REF #EntityClass.reload(). Summary -->reloads the content of the entity in memory<!-- END REF -->, according to information stored in the table related to the dataclass in the datastore. The reload is done only if the entity still exists with the same primary key.

**Resultado**

The object returned by `.reload( )` contains the following properties:

| Propriedade      | Type     | Descrição                                                                                                                                             |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| success          | booleano | True if the reload action is successful, False otherwise.<p><p>***Available only in case of error***: |
| status(\*)     | number   | Código de erro, ver abaixo                                                                                                                            |
| statusText(\*) | texto    | Descrição do erro, ver abaixo                                                                                                                         |

(\*) Os seguintes valores podem ser devolvidos nas propriedades *status* e *statusText* do objecto *Result* em caso de erro:

| Constante                                 | Value | Comentário                                                                                                                                                                                                            |
| ----------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<br><li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br>***Associated statusText***: "Entity does not exist anymore" |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br>***Associated statusText***: "Other error"                                                                       |


#### Exemplo

```4d
 var $employee : cs. EmployeeEntity
 var $employees : cs. EmployeeSelection
 var $result : Object

 $employees:=ds. Employee.query("lastName=:1";"Hollis")
 $employee:=$employees[0]
 $employee.firstName:="Mary"
 $result:=$employee.reload()
 Case of
    :($result.success)
       ALERT("Reload has been done")
    :($result.status=dk status entity does not exist anymore)
       ALERT("The entity has been dropped")
 End case
```

<!-- END REF -->


<!-- REF EntityClass.save().Desc -->
## .save()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.save().Syntax -->
**.save**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.save().Params -->
| Parameter | Type    |    | Descrição                                         |
| --------- | ------- |:--:| ------------------------------------------------- |
| mode      | Integer | -> | `dk auto merge`: Enables the automatic merge mode |
| Resultado | Objeto  | <- | Result of save operation                          |
<!-- END REF -->

#### Descrição

The `.save()` function<!-- REF #EntityClass.save(). Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. You must call this method after creating or modifying an entity if you want to save the changes made to it.

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). Otherwise, the function does nothing (the trigger is not called).

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the *mode* parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the *mode* parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. The resulting data saved in the entity will be the combination (the "merge") of all non-concurrent modifications (if modifications were applied to the same attribute, the save fails and an error is returned, even with the auto merge mode).
> The automatic merge mode is not available for attributes of Picture, Object, and Text type when stored outside of the record. Concurrent changes in these attributes will result in a `dk status stamp has changed` error.

**Resultado**

The object returned by `.save()` contains the following properties:

| Propriedade  |                    | Type                   | Descrição                                                                                                               |
| ------------ | ------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| success      |                    | booleano               | True if the save action is successful, False otherwise.                                                                 |
|              |                    |                        | ***Available only if `dk auto merge` option is used***:                                                                 |
| autoMerged   |                    | booleano               | True if an auto merge was done, False otherwise.                                                                        |
|              |                    |                        | ***Available only in case of error***:                                                                                  |
| status       |                    | number                 | Error code, [see below](#status-and-statustext)                                                                         |
| statusText   |                    | texto                  | Description of the error, [see below](#status-and-statustext)                                                           |
|              |                    |                        | ***Available only in case of pessimistic lock error***:                                                                 |
| lockKindText |                    | texto                  | "Bloqueado pelo registro"                                                                                               |
| lockInfo     |                    | object                 | Informações sobre a origem do bloqueio                                                                                  |
|              | task_id            | number                 | Process ID                                                                                                              |
|              | user_name          | texto                  | Nome de usuário de sessão na máquina                                                                                    |
|              | user4d_alias       | texto                  | Pseudônimo do usuário se definido por `SET USER ALIAS`, caso contrário, nome de usuário no diretório 4D                 |
|              | host_name          | texto                  | Nome da máquina                                                                                                         |
|              | task_name          | texto                  | Nome de processo                                                                                                        |
|              | client_version     | texto                  |                                                                                                                         |
|              |                    |                        | ***Available only in case of serious error*** (serious error - can be trying to duplicate a primary key, disk full...): |
| errors       |                    | uma coleção de objetos |                                                                                                                         |
|              | message            | texto                  | Mensagem de erro                                                                                                        |
|              | componentSignature | texto                  | Internal component signature (e.g. "dmbg" stands for the database component)                                            |
|              | errCode            | number                 | Error code                                                                                                              |

##### status and statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

| Constante                                 | Value | Comentário                                                                                                                                                                                                                                                      |
| ----------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6     | (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.<p><p>**Associated statusText**: "Auto merge failed"                                                      |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<br><li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br>**Associated statusText**: "Entity doesnot exist anymore"                                              |
| `dk status locked`                        | 3     | The entity is locked by a pessimistic lock.<p><p>**Associated statusText**: "Already locked"                                                                                                                    |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<p><p>**Associated statusText**: "Other error"                                                                       |
| `dk status stamp has changed`             | 2     | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).<br><li>com `.save( )`: erro apenas se a opção `dk auto merge' não for utilizada</li><li>com `.drop( )`: erro apenas se a opção `dk force drop if stamp changed' não for utilizada</li><li>com `.lock( )`: erro apenas se a opção `dk reload if stamp changed` não for usada</li><br>**Associated statusText**: "Stamp has changed" |


#### Exemplo 1

Creating a new entity:

```4d
 var $status : Object
 var $employee : cs. EmployeeEntity
 $employee:=ds. Employee.new()
 $employee.firstName:="Mary"
 $employee.lastName:="Smith"
 $status:=$employee.save()
 If($status.success)
    ALERT("Employee created")
 End if
```

#### Exemplo 2

Updating an entity without `dk auto merge` option:

```4d
 var $status : Object
 var $employee : cs. EmployeeEntity
 var $employees : cs. EmployeeSelection
 $employees:=ds. Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save()
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Exemplo 3

Updating an entity with `dk auto merge` option:

```4d
 var $status : Object

 var $employee : cs. EmployeeEntity
 var $employees : cs. EmployeeSelection

 $employees:=ds. Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save(dk auto merge)
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status automerge failed)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->



<!-- REF EntityClass.toObject().Desc -->
## .toObject()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.toObject().Syntax -->
**.toObject**() : Object<br>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.toObject().Params -->
| Parameter    | Type    |    | Descrição                                                                                               |
| ------------ | ------- |:--:| ------------------------------------------------------------------------------------------------------- |
| filterString | Texto   | -> | Attribute(s) to extract (comma-separated string)                                                        |
| filterCol    | Coleção | -> | Collection of attribute(s) to extract                                                                   |
| options      | Integer | -> | `dk with primary key`: adds the \_KEY property;<br>`dk with stamp`: adds the \_STAMP property |
| Resultado    | Objeto  | <- | Object built from the entity                                                                            |
<!-- END REF -->

#### Descrição

The `.touchedAttributes()` function<!-- REF #EntityClass.touchedAttributes(). Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

If no filter is specified, or if the *filterString* parameter contains an empty string or "*", the returned object will contain:

*   all storage entity attributes
*   attributes of the `relatedEntity` [kind](DataClassAttributeClass.md#kind): you get a property with the same name as the related entity (name of the many-to-one link). Attribute is extracted with the simple form.
*   attributes of the `relatedEntities` [kind](DataClassAttributeClass.md#kind): attribute is not returned.


In the first parameter, you pass the entity attribute(s) to extract. Pode passar:

*   *filterString*: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
*   *filterCol*: a collection of strings: \["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassAttributeClass.md#kind):

*   propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
*   propertyPath = "relatedEntity.*" -> all the properties are extracted
*   propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> only those properties are extracted

If a filter is specified for attributes of the relatedEntities [kind](DataClassAttributeClass.md#kind):

*   propertyPath = "relatedEntities.*" -> all the properties are extracted
*   propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> only those properties are extracted

In the *options* parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.


#### Exemplo 1

The following structure will be used throughout all examples of this section:

![](assets/en/API/dataclassAttribute4.png)


Without filter parameter:

```4d
employeeObject:=employeeSelected.toObject()
```

Retorna:

```4d
{
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": { // relatedEntity extracted with simple form
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```



#### Exemplo 2

Extracting the primary key and the stamp:

```4d
employeeObject:=employeeSelected.toObject("";dk with primary key+dk with stamp)
```

Retorna:

```4d
{
    "__KEY": 413,
   "__STAMP": 1,
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": {
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Exemplo 3

Expanding all the properties of `relatedEntities`:

```4d
employeeObject:=employeeSelected.toObject("directReports.*")
```

```4d
{
    "directReports": [
        {
            "ID": 418,
            "firstName": "Lorena",
            "lastName": "Boothe",
            "salary": 44800,
            "birthDate": "1970-10-02T00:00:00.000Z",
            "woman": true,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 419,
            "firstName": "Drew",
            "lastName": "Caudill",
            "salary": 41000,
            "birthDate": "2030-01-12T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 420,
            "firstName": "Nathan",
            "lastName": "Gomes",
            "salary": 46300,
            "birthDate": "2010-05-29T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        }
    ]
}
```

#### Exemplo 4

Extracting some properties of `relatedEntities`:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

Retorna:

```4d
{
    "firstName": "Greg",
    "directReports": [
        {
            "lastName": "Boothe"
        },
        {
            "lastName": "Caudill"
        },
        {
            "lastName": "Gomes"
        }
    ]
}
```

#### Exemplo 5

Extracting a `relatedEntity` with simple form:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

Retorna:

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### Exemplo 6

Extracting all the properties of a `relatedEntity`:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

Retorna:

```4d
{
    "employer": {
        "ID": 20,
        "name": "India Astral Secretary",
        "creationDate": "1984-08-25T00:00:00.000Z",
        "revenues": 12000000,
        "extra": null
    }
}
```

#### Exemplo 7

Extracting some properties of a `relatedEntity`:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

Retorna:

```4d
{
    "employer": {
        "name": "India Astral Secretary",
        "revenues": 12000000
    }
}
```

<!-- END REF -->



<!-- REF EntityClass.touched().Desc -->
## .touched( )

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.touched().Syntax -->
**.touched()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.touched().Params -->
| Parameter | Type     |    | Descrição                                                                             |
| --------- | -------- |:--:| ------------------------------------------------------------------------------------- |
| Resultado | Booleano | <- | True if at least one entity attribute has been modified and not yet saved, else False |
<!-- END REF -->

#### Descrição

The `.touched()` function<!-- REF #EntityClass.touched(). Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

If an attribute has been modified or calculated, the function returns True, else it returns False. You can use this function to determine if you need to save the entity.

This function returns False for a new entity that has just been created (with [`.new( )`](DataClassClass.md#new)). Note however that if you use a function which calculates an attribute of the entity, the `.touched()` function will then return True. For example, if you call [`.getKey()`](#getkey) to calculate the primary key, `.touched()` returns True.

#### Exemplo

In this example, we check to see if it is necessary to save the entity:

```4d
 var $emp : cs. EmployeeEntity
 $emp:=ds. Employee.get(672)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched

 If($emp.touched()) //if at least one of the attributes has been changed
    $emp.save()
 End if // otherwise, no need to save the entity
```

<!-- END REF -->


<!-- REF EntityClass.touchedAttributes().Desc -->
## .touchedAttributes( )

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->
**.touchedAttributes()** : Collection<!-- END REF -->

<!-- REF #EntityClass.touchedAttributes().Params -->
| Parameter | Type    |    | Descrição                                        |
| --------- | ------- |:--:| ------------------------------------------------ |
| Resultado | Coleção | <- | Names of touched attributes, or empty collection |
<!-- END REF -->

#### Descrição

The `.touchedAttributes()` function <!-- REF #EntityClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

This applies for attributes of the [kind](DataClassAttributeClass.md#kind) `storage` or `relatedEntity`.

In the case of a related entity having been touched (i.e., the foreign key), the name of the related entity and its primary key's name are returned.

If no entity attribute has been touched, the method returns an empty collection.

#### Exemplo 1


```4d
 var $touchedAttributes : Collection
 var $emp : cs. EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds. Employee.get(725)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```


#### Exemplo 2


```4d
 var $touchedAttributes : Collection
 var $emp : cs. EmployeeEntity
 var $company : cs. CompanyEntity

 $touchedAttributes:=New collection

 $emp:=ds. Employee.get(672)
 $emp.firstName:=$emp.firstName
 $emp.lastName:="Martin"

 $company:=ds. Company.get(121)
 $emp.employer:=$company

 $touchedAttributes:=$emp.touchedAttributes()

  //collection $touchedAttributes: ["firstName","lastName","employer","employerID"]
```

Nesse modo:

*   firstName and lastName have a `storage` kind
*   employer has a `relatedEntity` kind
*   employerID is the foreign key of the employer related entity

<!-- END REF -->


<!-- REF EntityClass.unlock().Desc -->
## .unlock()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>

<!-- REF #EntityClass.unlock().Syntax -->
**.unlock()** : Object<!-- END REF -->

<!-- REF #EntityClass.unlock().Params -->
| Parameter | Type   |    | Descrição     |
| --------- | ------ |:--:| ------------- |
| Resultado | Objeto | <- | Status object |
<!-- END REF -->

#### Descrição

The `.lock()` function<!-- REF #EntityClass.lock(). Summary -->puts a pessimistic lock on the record referenced by the entity<!-- END REF --> .

> For more information, please refer to [Entity locking](ORDA/entities.md#entity-locking) section.

A record is automatically unlocked when it is no longer referenced by any entities in the locking process (for example: if the lock is put only on one local reference of an entity, the entity and thus the record is unlocked when the process ends).
> When a record is locked, it must be unlocked from the locking process and on the entity reference which put the lock. Por exemplo:

```4d
 $e1:=ds. Emp.all()[0]
 $e2:=ds. Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Resultado**

The object returned by `.unlock()` contains the following property:

| Propriedade | Type     | Descrição                                                                                                                                                                                          |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success     | Booleano | True if the unlock action is successful, False otherwise. If the unlock is done on a dropped entity, on a non locked record, or on a record locked by another process or entity, success is False. |

#### Exemplo

```4d
 var $employee : cs. EmployeeEntity
 var $status : Object

 $employee:=ds. Employee.get(725)
 $status:=$employee.lock()
 ... //processing
 $status:=$employee.unlock()
 If($status.success)
    ALERT("The entity is now unlocked")
 End if
```

<!-- END REF -->



<style> h2 { background: #d9ebff;}</style>
