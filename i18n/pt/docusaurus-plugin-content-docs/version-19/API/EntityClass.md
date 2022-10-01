---
id: EntityClass
title: Entity
---

Uma entidade [](ORDA/dsMapping.md#entity) é uma instância de um [Dataclass](ORDA/dsMapping.md#dataclass), como um registro da tabela que corresponde ao dataclass em seu datasture associado. Contém os mesmos atributos que o dataclass assim como os valores de dados e propriedades e funções específicas.

### Resumo

|                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntityClass.attributeName.Summary -->                   |
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.clone().Summary -->                                     |
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.diff().Summary -->                                        |
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.drop().Summary -->                                        |
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.first().Summary -->                                     |
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.fromObject().Summary -->                      |
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getDataClass().Summary -->                |
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getKey().Summary -->                                  |
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getSelection().Summary -->                |
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getStamp().Summary -->                            |
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.indexOf().Summary -->                               |
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.isNew().Summary -->                                     |
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.last().Summary -->                                        |
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.lock().Summary -->                                        |
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.next().Summary -->                                        |
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.previous().Summary -->                            |
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.reload().Summary -->                                  |
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.save().Summary -->                                        |
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.toObject().Summary -->                            |
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touched().Summary -->                               |
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touchedAttributes().Summary --> |
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.unlock().Summary -->                                  |


<!-- REF EntityClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : DataClassAttribute<!-- END REF -->

#### Descrição

Any dataclass attribute is available as a property of an entity, which <!-- REF EntityClass.attributeName.Summary -->stores the attribute value for the entity<!-- END REF -->.
> Atributos de Dataclass também podem ser alcançados usando a sintaxe alternativa com \[ ].

O tipo de valor do atributo depende do tipo do atributo [atributo](DataClassAttributeClass.md#kind) (relação ou armazenamento):

* If *attributeName* kind is **storage**: `.attributeName` returns a value of the same type as *attributeName*.
* If *attributeName* kind is **relatedEntity**: `.attributeName` returns the related entity. Valores da entidade relacionada estão diretamente disponíveis através de propriedades em cascata, por exemplo "myEntity.employer.employees\[0].lastname".
* If *attributeName* kind is **relatedEntities**: `.attributeName` returns a new entity selection of related entities. Se eliminam os duplicados (se devolve uma seleção de entidades desordenada).

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


<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D. Entity<!-- END REF -->



<!-- REF #EntityClass.clone().Params -->
| Parâmetros                 | Tipo       |    | Descrição                              |
| -------------------------- | ---------- |:--:| -------------------------------------- |
| Resultados                 | 4D. Entity | <- | Nova entidade referenciando o registro |
| <!-- END REF --> |            |    |                                        |

#### Descrição

The `.clone()` function <!-- REF #EntityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->. Esta função permite que você atualize as entidades separadamente.
> Tenha em mente que quaisquer modificações feitas a entidades serão salvas no registro referenciado somente quando o [`. ave( )`](#save) função for executada.

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


<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D. Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->



<!-- REF #EntityClass.diff().Params -->
| Parâmetros          | Tipo       |    | Descrição                                                |
| ------------------- | ---------- |:--:| -------------------------------------------------------- |
| entityToCompare     | 4D. Entity | -> | Entidade a ser comparada com a entidade original         |
| attributesToCompare | Collection | -> | Nome dos atributos a serem comparados                    |
| Resultados          | Collection | <- | Diferenças entre as entidades|<!-- END REF --> |

#### Descrição

The `.diff()` function <!-- REF #EntityClass.diff().Summary -->compares the contents of two entities and returns their differences<!-- END REF -->.

No *entityToCompare*, passe a entidade a ser comparada à entidade original.

Em *attributesToCompare*, pode designar atributos específicos para comparar. Se fornecida, a comparação é feita apenas nos atributos especificados. Se não for fornecida, todas as diferenças entre as entidades são devolvidas.

As diferenças são retornadas como uma coleção de objetos cujas propriedades são:

| Nome da propriedade | Tipo                              | Descrição                              |
| ------------------- | --------------------------------- | -------------------------------------- |
| attributeName       | String                            | Nome do atributo                       |
| value               | any - Depende do tipo de atributo | Valor do atributo na entidade          |
| otherValue          | any - Depende do tipo de atributo | Valor do atributo em *entityToCompare* |

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
        "valor": "Karla update",
        "outroValor": "Karla": "Karla".
    },
    {
        "attributeName": "últimoNome",
        "valor": "Marrero update",
        "outroValor": "Marrero":
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


<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->



<!-- REF #EntityClass.drop().Params -->
| Parâmetros | Tipo    |    | Descrição                                                                       |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------- |
| mode       | Integer | -> | `dk force drop if stamp changed`: Força a queda mesmo se a estampa tiver mudado |
| Resultados | Objeto  | <- | Result of drop operation|<!-- END REF -->                             |

#### Descrição

The `.drop()` function <!-- REF #EntityClass.drop().Summary -->deletes the data contained in the entity from the datastore<!-- END REF -->, from the table related to its Dataclass. Note-se que a entidade permanece na memória.

Numa aplicação multiusuário ou multiprocesso, a função `.drop()` é executada sob um mecanismo ["optimistic lock"](ORDA/entities.md#entity-locking) , no qual um selo de bloqueio interno é automaticamente incrementado cada vez que o registo for guardado.

Por padrão, se o parâmetro *modo* for omitido, a função retornará um erro (veja abaixo) se a mesma entidade tiver sido modificada (ou seja, O selo mudou) por outro processo ou usuário nesse meio tempo.

Caso contrário, pode passar a opção `dk force drop if stamp changed` no parâmetro *mode* : nesse caso, a entidade é abandonada mesmo que a estampa tenha sido alterada (e a chave primária continua a ser a mesma).

**Resultados**

O objecto devolvido por `.drop( )` contém as seguintes propriedades:

| Propriedade   |                           | Tipo                   | Descrição                                                                                                               |
| ------------- | ------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| success       |                           | boolean                | verdadeiro se a ação de queda for bem-sucedida, falso caso contrário.                                                   |
|               |                           |                        | ***Disponível apenas em caso de erro:***                                                                                |
| status(*)     |                           | number                 | Código de erro, ver abaixo                                                                                              |
| statusText(*) |                           | text                   | Descrição do erro, ver abaixo                                                                                           |
|               |                           |                        | ***Disponível apenas em caso de erro de bloqueio pessimista:***                                                         |
| LockKindText  |                           | text                   | "Bloqueado pelo registro"                                                                                               |
| lockInfo      |                           | object                 | Informações sobre a origem do bloqueio                                                                                  |
|               | task_id                   | number                 | Process ID                                                                                                              |
|               | user_name                 | text                   | Nome de usuário de sessão na máquina                                                                                    |
|               | user4d_alias              | text                   | Pseudônimo do usuário se definido por `SET USER ALIAS`, caso contrário, nome de usuário no diretório 4D                 |
|               | host_name                 | text                   | Nome da máquina                                                                                                         |
|               | task_name                 | text                   | Nome de processo                                                                                                        |
|               | client_version            | text                   |                                                                                                                         |
|               |                           |                        | ***Disponível apenas em caso de erro grave (erro grave pode ser tentar duplicar uma chave primária, disco cheio...):*** |
| errors        |                           | uma coleção de objetos |                                                                                                                         |
|               | message                   | text                   | Mensagem de erro                                                                                                        |
|               | assinatura de componentes | text                   | assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                    |
|               | errCode                   | number                 | Error code                                                                                                              |

(\*) Os seguintes valores podem ser devolvidos nas propriedades *status* e *statusText* do objecto *Result* em caso de erro:

| Constante                                 | Value | Comentário                                                                                                                                                                                                                     |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<br/><li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). Ao utilizar entity.drop( ), este erro pode ser devolvido quando usar a opção dk force drop if stamp changed. Ao usar entity.lock( ), este erro pode ser retornado quando usar a opção dk if stamp changed</li>**statusText asociado**: "A entidade já não existe"                              |
| `dk status locked`                        | 3     | A entidade está bloqueada por um bloqueio pessimista.<br/>**Associated statusText**: "Já bloqueado"                                                                                                                      |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>**Associated statusText**: "Other error"                                                                                 |
| `dk status stamp has changed`             | 2     | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).<br/><li>com `.save( )`: erro apenas se a opção `dk auto merge' não for utilizada</li><li>com `.drop( )`: erro apenas se a opção `dk force drop if stamp changed' não for utilizada</li><li>com `.lock( )`: erro apenas se a opção `dk reload if stamp changed` não for usada</li><li>**Associated statusText***: "O carimbo mudou"</li> |

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


<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D. Entity<!-- END REF -->



<!-- REF #EntityClass.first().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                                       |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Reference to first entity of an entity selection (Null if not found)|<!-- END REF --> |

#### Descrição

The `.first()` function <!-- REF #EntityClass.first().Summary -->returns a reference to the entity in first position of the entity selection which the entity belongs to<!-- END REF -->.

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


<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->



<!-- REF #EntityClass.fromObject().Params -->
| Parâmetros | Tipo   |    | Descrição                                                       |
| ---------- | ------ |:--:| --------------------------------------------------------------- |
| filler     | Objeto | -> | Object from which to fill the entity|<!-- END REF --> |

#### Descrição

The `.fromObject()` function <!-- REF #EntityClass.fromObject().Summary -->fills an entity with the *filler* content<!-- END REF -->.
> Essa função modifica a entidade original.

O mapeamento entre o objecto e a entidade é feito sobre os nomes dos atributos:

* Se uma propriedade do objeto não existe nos dados (dataclass), ela é ignorada.
* Os tipos de dados devem ser equivalentes. Se houver uma incompatibilidade de tipo entre o objeto e o dataclass, 4D tenta converter os dados sempre que possível (consulte [`Conversão de tipos de dados`](Concepts/data-types.md#converting-data-types)), caso contrário, o atributo fica intacto.
* A chave primária pode ser dada como é ou com uma propriedade "__KEY" (preenchida com o valor da chave primária). Se ainda não existir no dataclass, a entidade é criada com o valor dado quando [.save()](#save) é chamado. Se a chave primária não for dada, a entidade é criada e o valor da chave primária é atribuído de acordo com as regras da base de dados. O auto-incremento só é calculado se a chave primária for nula.

*filler* pode tratar de uma entidade relacionada sob as seguintes condições:

* *filler* contém a chave estrangeira em si, ou
* *filler* contém um objeto de propriedade com o mesmo nome da entidade relacionada, contendo uma propriedade única chamada "\_\_KEY".
* se a entidade relacionada não existir, ela é ignorada.

#### Exemplo

Com o seguinte objeto $o:

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// relatedEntity dada com PK
    "employerID": 20 // relatedEntity dada com PK
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
    "employer": {// relatedEntity dada como um objeto
        "__KEY": "21"
    },
    "manager": {// relatedEntity dada como um objeto
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


<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D. DataClass<!-- END REF -->



<!-- REF #EntityClass.getDataClass().Params -->
| Parâmetros | Tipo          |    | Descrição                                                               |
| ---------- | ------------- |:--:| ----------------------------------------------------------------------- |
| Resultados | 4D. DataClass | <- | DataClass object to which the entity belongs|<!-- END REF --> |

#### Descrição

The `.getDataClass()` function <!-- REF #EntityClass.getDataClass().Summary -->returns the dataclass of the entity<!-- END REF -->. Esta função é útil para configurar o código genérico.

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


<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->



<!-- REF #EntityClass.getKey().Params -->
| Parâmetros | Tipo    |    | Descrição                                                                                              |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------------------------ |
| mode       | Integer | -> | `dk key as string`: a chave primária se devolve como uma string, sem importar o tipo de chave primária |
| Resultados | Text    | <- | Valor do texto chave primária da entidade                                                              |
| Resultados | Integer | <- | Valor da chave primária numérica da entidade                                                           |


<!-- END REF -->

#### Descrição

The `.getKey()` function <!-- REF #EntityClass.getKey().Summary -->returns the primary key value of the entity<!-- END REF -->.

As chaves primárias podem ser números (Inteiro) ou strings. Você pode "forçar" o valor da chave primária retornado para ser uma string, independentemente do tipo de chave primária real, passando a `dk key como string` opção no parâmetro *modo*.

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


<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D. EntitySelection<!-- END REF -->



<!-- REF #EntityClass.getSelection().Params -->
| Parâmetros | Tipo                |    | Descrição                                                                                   |
| ---------- | ------------------- |:--:| ------------------------------------------------------------------------------------------- |
| Resultados | 4D. EntitySelection | <- | Entity selection to which the entity belongs (Null if not found)|<!-- END REF --> |

#### Descrição

The `.getSelection()` function <!-- REF #EntityClass.getSelection().Summary -->returns the entity selection which the entity belongs to<!-- END REF -->.

Se a entidade não pertence à seleção de uma entidade, a função retorna Null.

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


<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->



<!-- REF #EntityClass.getStamp().Params -->
| Parâmetros | Tipo    |    | Descrição                                                                          |
| ---------- | ------- |:--:| ---------------------------------------------------------------------------------- |
| Resultados | Integer | <- | Stamp of the entity (0 if entity has just been created)|<!-- END REF --> |

#### Descrição

The `.getStamp()` function <!-- REF #EntityClass.getStamp().Summary --> returns the current value of the stamp of the entity<!-- END REF -->.

O selo interno é automaticamente incrementado por 4D cada vez que a entidade é gravada. Gere o acesso de usuários simultâneos e modificações às mesmas entidades (ver [**bloqueio de entidades**](ORDA/entities.md#entity-locking)).
> Para uma nova entidade (nunca salva), a função retorna 0. Para saber se uma entidade acabou de ser criada, recomenda-se a utilização de [.isNew()](#isnew).

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


<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D. EntitySelection } ) : Integer<!-- END REF -->



<!-- REF #EntityClass.indexOf().Params -->
| Parâmetros      | Tipo                |    | Descrição                                                                |
| --------------- | ------------------- |:--:| ------------------------------------------------------------------------ |
| entitySelection | 4D. EntitySelection | -> | A posição da entidade é dada de acordo com a selecção desta entidade     |
| Resultados      | Integer             | <- | Posição da entidade numa selecção de entidade|<!-- END REF --> |

#### Descrição

A função `.indexOf()` <!-- REF #EntityClass.indexOf().Summary -->returns the position of the entity in an entity selection<!-- END REF -->.

Por padrão, se o parâmetro *entitySelection* for omitido, a função retorna a posição da entidade dentro de sua própria seleção de entidade. Caso contrário, ele retorna a posição da entidade dentro da *entitySelection*.

O valor resultante é incluído entre 0 e o comprimento da selecção da entidade -1.

* Se a entidade não tiver uma selecção de entidade ou não pertencer a *entitySelection*, a função retorna -1.
* Se *entitySelection* for Null ou não pertencer ao mesmo dataclass que a entidade, é apresentado um erro.

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


<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->



<!-- REF #EntityClass.isNew().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                                                             |
| ---------- | -------- |:--:| --------------------------------------------------------------------------------------------------------------------- |
| Resultados | Booleano | <- | É verdade se a entidade acabou de ser criada e ainda não foi salva. Caso contrário, Falso.|<!-- END REF --> |

#### Descrição

The `.isNew()` function <!-- REF #EntityClass.isNew().Summary --> returns True if the entity to which it is applied has just been created and has not yet been saved in the datastore<!-- END REF -->. .

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


<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D. Entity<!-- END REF -->



<!-- REF #EntityClass.last().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                                                            |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referência para a última entidade de uma seleção de entidade (Null se não for encontrado)|<!-- END REF --> |

#### Descrição

The `.last()` function <!-- REF #EntityClass.last().Summary -->returns a reference to the entity in last position of the entity selection which the entity belongs to<!-- END REF -->.

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


<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->



<!-- REF #EntityClass.lock().Params -->
| Parâmetros | Tipo    |    | Descrição                                                                            |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------ |
| mode       | Integer | -> | `dk reload if stamp changed`: Recarregar antes de bloquear se o carimbo for alterado |
| Resultados | Objeto  | <- | Resultado da operação de bloqueio|<!-- END REF -->                         |

#### Descrição

The `.lock()` function <!-- REF #EntityClass.lock().Summary -->puts a pessimistic lock on the record referenced by the entity<!-- END REF -->. O bloqueio de [é definido](ORDA/entities.md#entity-locking) para um registro e todas as referências da entidade no processo atual.

Outros processos verão este registro como bloqueado (o resultado. `a propriedade` uccess conterá Falso se eles tentarem bloquear a mesma entidade usando esta função). Só as funções executadas na sessão de "bloqueio" são permitidas para editar e guardar os atributos da entidade. A entidade pode ser carregada como apenas leitura por outras sessões, mas não serão capazes de introduzir e guardar valores.

Um registro bloqueado está desbloqueado:

* quando a função [`desbloqueia()`](#unlock) é chamada a uma entidade correspondente no mesmo processo
* automaticamente, quando já não é referenciado por nenhuma entidade em memória. Por exemplo, se a fechadura for colocada apenas numa referência local de uma entidade, a entidade é desbloqueada quando a função termina. Enquanto houver referências à entidade em memória, o registo permanece bloqueado.

Por padrão, se o parâmetro *modo* for omitido, a função retornará um erro (veja abaixo) se a mesma entidade tiver sido modificada (ou seja, O selo mudou) por outro processo ou usuário nesse meio tempo.

Caso contrário, você pode passar o parâmetro`dk reload if stamp changed` no parâmetro *mode* : neste caso, nenhum erro é retornado e a entidade é recarregada quando o selo mudou (se a entidade ainda existir e a chave primária ainda for a mesma).

**Resultados**

O objeto retornado por `.lock( )` contém as seguintes propriedades:

| Propriedade      |                           | Tipo                   | Descrição                                                                                                                    |
| ---------------- | ------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| success          |                           | boolean                | true se a ação de bloqueio for bem sucedida (ou se a entidade já estiver bloqueada no processo atual), falso caso contrário. |
|                  |                           |                        | ***Disponível apenas se a opção`dk reload if stamp changed` for usada:***                                                    |
| **wasReloaded**  |                           | boolean                | verdadeiro se a entidade foi recarregada com sucesso, falso caso contrário.                                                  |
|                  |                           |                        | ***Disponível apenas em caso de erro:***                                                                                     |
| status(\*)     |                           | number                 | Código de erro, ver abaixo                                                                                                   |
| statusText(\*) |                           | text                   | Descrição do erro, ver abaixo                                                                                                |
|                  |                           |                        | ***Disponível apenas em caso de erro de bloqueio pessimista:***                                                              |
| lockKindText     |                           | text                   | "Bloqueado pelo registro"                                                                                                    |
| lockInfo         |                           | object                 | Informações sobre a origem do bloqueio                                                                                       |
|                  | task_id                   | number                 | ID do processo                                                                                                               |
|                  | user_name                 | text                   | Nome de usuário de sessão na máquina                                                                                         |
|                  | user4d_alias              | text                   | Nome ou apelido do usuário 4D                                                                                                |
|                  | user4d_id                 | number                 | Id do usuário no diretório do banco de dados 4D                                                                              |
|                  | host_name                 | text                   | Nome da máquina                                                                                                              |
|                  | task_name                 | text                   | Nome de processo                                                                                                             |
|                  | client_version            | text                   |                                                                                                                              |
|                  |                           |                        | ***Disponível apenas em caso de erro grave*** (a chave primária já existir, o disco estar cheio...):                         |
| errors           |                           | uma coleção de objetos |                                                                                                                              |
|                  | message                   | text                   | Mensagem de erro                                                                                                             |
|                  | assinatura de componentes | text                   | assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                         |
|                  | errCode                   | number                 | Error code                                                                                                                   |

(\*) Os seguintes valores podem ser devolvidos nas propriedades *status* e *statusText* do objecto *Result* em caso de erro:

| Constante                                 | Value | Comentário                                                                                                                                                                                                                                             |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). Ao usar `.drop( )`, este erro pode ser retornado quando a opção "dk force drop if stamp changed" for usada. Ao usar `.lock( )`, este erro pode ser retornado quando a opção `dk reload if stamp changed" for usado</li><br/>**statusText asociado**: "A entidade já não existe"                                                    |
| `dk status locked`                        | 3     | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                 |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                    |
| `dk status stamp has changed`             | 2     | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).<li>com `.save( )`: erro apenas se a opção `dk auto merge' não for utilizada</li><li>com `.drop( )`: erro apenas se a opção `dk force drop if stamp changed' não for utilizada</li><li>com `.lock( )`: erro apenas se a opção `dk reload if stamp changed` não for usada</li><br/>**Associated statusText**: "Stamp has changed" |

#### Exemplo 1

Exemplo com erro:

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

Exemplo com `dk reload se o selo mudou a opção`:

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


<!-- REF #EntityClass.next().Syntax -->|<!-- END REF -->



<!-- REF #EntityClass.next().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                                                             |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referência para a próxima entidade de uma seleção de entidade (Null se não for encontrado)|<!-- END REF --> |

#### Descrição

The `.next()` function <!-- REF #EntityClass.next().Summary -->returns a reference to the next entity in the entity selection which the entity belongs to<!-- END REF -->.

Se a entidade não pertencer a nenhuma seleção de entidade existente (ex: [.getSelection()](#getselection) retorna Null), a função retorna um valor nulo.

Se não houver entidade seguinte válida na selecção da entidade (ou seja, se estiver na última entidade da selecção), a função devolve Null. Se a entidade seguinte tiver sido abandonada, a função devolve a entidade válida seguinte (e eventualmente Nula).

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


<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D. Entity<!-- END REF -->



<!-- REF #EntityClass.previous().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                                                     |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referência a entidade anterior na seleção da entidade (Null se não for encontrado)|<!-- END REF --> |

#### Descrição

The `.previous()` function <!-- REF #EntityClass.previous().Summary --> returns a reference to the previous entity in the entity selection which the entity belongs to<!-- END REF -->.

Se a entidade não pertencer a nenhuma seleção de entidade existente (ex: [.getSelection()](#getselection) retorna Null), a função retorna um valor nulo.

Se não houver nenhuma entidade anterior válida na seleção da entidade (ou seja, você está na primeira entidade da seleção), a função retorna Null. Se a entidade anterior foi abandonada, a função retorna a entidade válida anterior (e eventualmente Null).

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


<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->



<!-- REF #EntityClass.reload().Params -->
| Parâmetros | Tipo   |    | Descrição                                   |
| ---------- | ------ |:--:| ------------------------------------------- |
| Resultados | Objeto | <- | Objeto de estado|<!-- END REF --> |

#### Descrição

The `.reload()` function <!-- REF #EntityClass.reload().Summary -->reloads the content of the entity in memory<!-- END REF -->, according to information stored in the table related to the dataclass in the datastore. A recarga só é feita se a entidade ainda existir com a mesma chave primária.

**Resultados**

O objeto retornado por `.reload( )` contém as seguintes propriedades:

| Propriedade      | Tipo    | Descrição                                                                                       |
| ---------------- | ------- | ----------------------------------------------------------------------------------------------- |
| success          | boolean | True if the reload action is successful, False otherwise.***Available only in case of error***: |
| status(\*)     | number  | Código de erro, ver abaixo                                                                      |
| statusText(\*) | text    | Descrição do erro, ver abaixo                                                                   |

(\*) Os seguintes valores podem ser devolvidos nas propriedades *status* e *statusText* do objecto *Result* em caso de erro:

| Constante                                 | Value | Comentário                                                                                                                                                                                                        |
| ----------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<br/><li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Ao usar `.lock( )`, este erro pode ser retornado quando a opção `dk reload if stamp changed" for usado</li><br/>***statusText associado***: "a entidade já não existe" |
| `dk status serious error`                 | 4     | Um erro grave é um erro de banco de dados de baixo nível (por exemplo, chave duplicada), um erro de hardware, etc.<br/>***Texto status associado***: "Outro erro"                                           |

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


<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->



<!-- REF #EntityClass.save().Params -->
| Parâmetros | Tipo    |    | Descrição                                                      |
| ---------- | ------- |:--:| -------------------------------------------------------------- |
| mode       | Integer | -> | `dk auto merge`: Permite o modo de fusão automática            |
| Resultados | Objeto  | <- | Resultado da operação de salvamento|<!-- END REF --> |

#### Descrição

The `.save()` function <!-- REF #EntityClass.save().Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. You must call this method after creating or modifying an entity if you want to save the changes made to it.

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). Otherwise, the function does nothing (the trigger is not called).

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the *mode* parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the *mode* parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. The resulting data saved in the entity will be the combination (the "merge") of all non-concurrent modifications (if modifications were applied to the same attribute, the save fails and an error is returned, even with the auto merge mode).
> The automatic merge mode is not available for attributes of Picture, Object, and Text type when stored outside of the record. Concurrent changes in these attributes will result in a `dk status stamp has changed` error.

**Resultados**

The object returned by `.save()` contains the following properties:

| Propriedade  |                    | Tipo                   | Descrição                                                                                                               |
| ------------ | ------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| success      |                    | boolean                | True if the save action is successful, False otherwise.                                                                 |
|              |                    |                        | ***Available only if `dk auto merge` option is used***:                                                                 |
| autoMerged   |                    | boolean                | True if an auto merge was done, False otherwise.                                                                        |
|              |                    |                        | ***Disponível apenas em caso de erro***:                                                                                |
| status       |                    | number                 | Error code, [see below](#status-and-statustext)                                                                         |
| statusText   |                    | text                   | Description of the error, [see below](#status-and-statustext)                                                           |
|              |                    |                        | ***Available only in case of pessimistic lock error***:                                                                 |
| lockKindText |                    | text                   | "Bloqueado pelo registro"                                                                                               |
| lockInfo     |                    | object                 | Informações sobre a origem do bloqueio                                                                                  |
|              | task_id            | number                 | Process ID                                                                                                              |
|              | user_name          | text                   | Nome de usuário de sessão na máquina                                                                                    |
|              | user4d_alias       | text                   | Pseudônimo do usuário se definido por `SET USER ALIAS`, caso contrário, nome de usuário no diretório 4D                 |
|              | host_name          | text                   | Nome da máquina                                                                                                         |
|              | task_name          | text                   | Nome de processo                                                                                                        |
|              | client_version     | text                   |                                                                                                                         |
|              |                    |                        | ***Available only in case of serious error*** (serious error - can be trying to duplicate a primary key, disk full...): |
| errors       |                    | uma coleção de objetos |                                                                                                                         |
|              | message            | text                   | Mensagem de erro                                                                                                        |
|              | componentSignature | text                   | Assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                    |
|              | errCode            | number                 | Error code                                                                                                              |

##### status and statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

| Constante                                 | Value | Comentário                                                                                                                                                                                                                                                        |
| ----------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6     | (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.**Associated statusText**: "Auto merge failed"                                                                                                              |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. Este erro pode ocorrer nos seguintes casos:<br/><li>a entidade foi descartada (o selo mudou e o espaço de memória é agora livre)</li><li>a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Ao usar `.lock( )`, este erro pode ser retornado quando a opção `dk reload if stamp changed" for usado</li><br/>**Associated statusText**: "Entity doesnot exist anymore"                                              |
| `dk status locked`                        | 3     | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                            |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                               |
| `dk status stamp has changed`             | 2     | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).<br/><li>com `.save( )`: erro apenas se a opção `dk auto merge' não for utilizada</li><li>com `.drop( )`: erro apenas se a opção `dk force drop if stamp changed' não for utilizada</li><li>com `.lock( )`: erro apenas se a opção `dk reload if stamp changed` não for usada</li><br/>**Associated statusText**: "Stamp has changed" |

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


<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->



<!-- REF #EntityClass.toObject().Params -->
| Parâmetros   | Tipo       |    | Descrição                                                                                                |
| ------------ | ---------- |:--:| -------------------------------------------------------------------------------------------------------- |
| filterString | Text       | -> | Attribute(s) to extract (comma-separated string)                                                         |
| filterCol    | Collection | -> | Collection of attribute(s) to extract                                                                    |
| options      | Integer    | -> | `dk with primary key`: adds the \_KEY property;<br/>`dk with stamp`: adds the \_STAMP property |
| Resultados   | Objeto     | <- | Object built from the entity|<!-- END REF -->                                                  |

#### Descrição

The `.toObject()` function <!-- REF #EntityClass.toObject().Summary -->returns an object which has been built from the entity<!-- END REF -->. Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

If no filter is specified, or if the *filterString* parameter contains an empty string or "*", the returned object will contain:

* all storage entity attributes
* attributes of the `relatedEntity` [kind](DataClassAttributeClass.md#kind): you get a property with the same name as the related entity (name of the many-to-one link). Attribute is extracted with the simple form.
* attributes of the `relatedEntities` [kind](DataClassAttributeClass.md#kind): attribute is not returned.

In the first parameter, you pass the entity attribute(s) to extract. Pode passar:

* *filterString*: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
* *filterCol*: a collection of strings: \["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassAttributeClass.md#kind):

* propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
* propertyPath = "relatedEntity.*" -> all the properties are extracted
* propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> only those properties are extracted

If a filter is specified for attributes of the relatedEntities [kind](DataClassAttributeClass.md#kind):

* propertyPath = "relatedEntities.*" -> all the properties are extracted
* propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> only those properties are extracted

In the *options* parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

#### Exemplo 1

The following structure will be used throughout all examples of this section:

![](../assets/en/API/dataclassAttribute4.png)

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


<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->



<!-- REF #EntityClass.touched().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                                                        |
| ---------- | -------- |:--:| ---------------------------------------------------------------------------------------------------------------- |
| Resultados | Booleano | <- | True if at least one entity attribute has been modified and not yet saved, else False|<!-- END REF --> |

#### Descrição

The `.touched()` function <!-- REF #EntityClass.touched().Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

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


<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->



<!-- REF #EntityClass.touchedAttributes().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                   |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------- |
| Resultados | Collection | <- | Names of touched attributes, or empty collection|<!-- END REF --> |

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

* firstName and lastName have a `storage` kind
* employer has a `relatedEntity` kind
* employerID is the foreign key of the employer related entity

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->
## .unlock()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->



<!-- REF #EntityClass.unlock().Params -->
| Parâmetros | Tipo   |    | Descrição                                   |
| ---------- | ------ |:--:| ------------------------------------------- |
| Resultados | Objeto | <- | Objeto de estado|<!-- END REF --> |

#### Descrição

The `.unlock()` function <!-- REF #EntityClass.unlock().Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF --> in the datastore and table related to its dataclass.

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

**Resultados**

The object returned by `.unlock()` contains the following property:

| Propriedade | Tipo     | Descrição                                                                                                                                                                                          |
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
