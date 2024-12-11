---
id: EntityClass
title: Entity
---

An [entity](ORDA/dsMapping.md#entity) is an instance of a [Dataclass](ORDA/dsMapping.md#dataclass), like a record of the table matching the dataclass in its associated datastore. Contém os mesmos atributos que o dataclass assim como os valores de dados e propriedades e funções específicas.

### Resumo

|                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE EntityClass.attributeName.Summary -->                                              |
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)<br/><!-- INCLUDE #EntityClass.clone().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)<br/><!-- INCLUDE #EntityClass.diff().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)<br/><!-- INCLUDE #EntityClass.drop().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)<br/><!-- INCLUDE #EntityClass.first().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)<br/><!-- INCLUDE #EntityClass.fromObject().Summary -->                                                 |
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)<br/><!-- INCLUDE #EntityClass.getDataClass().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)<br/><!-- INCLUDE #EntityClass.getKey().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)<br/><!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)<br/><!-- INCLUDE #EntityClass.getSelection().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)<br/><!-- INCLUDE #EntityClass.getStamp().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #EntityClass.indexOf().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)<br/><!-- INCLUDE #EntityClass.isNew().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)<br/><!-- INCLUDE #EntityClass.last().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)<br/><!-- INCLUDE #EntityClass.lock().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)<br/><!-- INCLUDE #EntityClass.next().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)<br/><!-- INCLUDE #EntityClass.previous().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)<br/><!-- INCLUDE #EntityClass.reload().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)<br/><!-- INCLUDE #EntityClass.save().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)<br/><!-- INCLUDE #EntityClass.toObject().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)<br/><!-- INCLUDE #EntityClass.touched().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)<br/><!-- INCLUDE #EntityClass.touchedAttributes().Summary -->                            |
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #EntityClass.unlock().Summary -->                                                             |

<!-- REF EntityClass.attributeName.Desc -->

## .*attributeName*

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : any<!-- END REF -->

#### Descrição

Any dataclass attribute is available as a property of an entity, which <!-- REF EntityClass.attributeName.Summary -->stores the attribute value for the entity<!-- END REF -->.

> Atributos de Dataclass também podem ser alcançados usando a sintaxe alternativa com \[ ].

The attribute value type depends on the attribute [kind](DataClassClass.md#attributename) (relation or storage):

- Se o tipo de *attributeName* for **storage**:
  `.attributeName` retorna um valor do mesmo tipo que *attributeName*.
- Se o tipo *attributeName* está **relatedEntity**:
  `.attributeName` retorna a entidade relacionada. Valores da entidade relacionada estão diretamente disponíveis através de propriedades em cascata, por exemplo "myEntity.employer.employees\[0].lastname".
- Se o tipo *attributeName* for **relatedEntities**:
  `.attributeName` retorna uma nova seleção de entidades relacionadas. Se eliminam os duplicados (se devolve uma seleção de entidades desordenada).

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->

| Parâmetro  | Tipo                       |                             | Descrição                              |
| ---------- | -------------------------- | :-------------------------: | -------------------------------------- |
| Resultados | 4D. Entity | <- | Nova entidade referenciando o registro |

<!-- END REF -->

#### Descrição

The `.clone()` function <!-- REF #EntityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->.

This function allows you to update entities separately. Note however that, for performance reasons, the new entity shares the same reference of object attributes as the cloned entity.

> Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save()`](#save) function is executed.

Esta função só pode ser usada com entidades já salvas no banco de dados. Não pode ser chamado em uma entidade recém-criada (para a qual [`.isNew()`](#isnew) retorna **True**).

#### Exemplo

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Atualizações feitas em $emp não são feitas em $empCloned

```

<!-- END REF -->

<!-- REF EntityClass.diff().Desc -->

## .diff()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->

<!-- REF #EntityClass.diff().Params -->

| Parâmetro           | Tipo                       |                             | Descrição                                        |
| ------------------- | -------------------------- | :-------------------------: | ------------------------------------------------ |
| entityToCompare     | 4D. Entity |              ->             | Entidade a ser comparada com a entidade original |
| attributesToCompare | Collection                 |              ->             | Nome dos atributos a serem comparados            |
| Resultados          | Collection                 | <- | Diferenças entre as entidades                    |

<!-- END REF -->

#### Descrição

The `.diff()` function <!-- REF #EntityClass.diff().Summary -->compares the contents of two entities and returns their differences<!-- END REF -->.

No *entityToCompare*, passe a entidade a ser comparada à entidade original.

In *attributesToCompare*, you can designate specific attributes to compare. Se fornecida, a comparação é feita apenas nos atributos especificados. Se não for fornecida, todas as diferenças entre as entidades são devolvidas.

As diferenças são retornadas como uma coleção de objetos cujas propriedades são:

| Nome da propriedade | Tipo                              | Descrição                              |
| ------------------- | --------------------------------- | -------------------------------------- |
| attributeName       | Text                              | Nome do atributo                       |
| value               | any - Depende do tipo de atributo | Valor do atributo na entidade          |
| otherValue          | any - Depende do tipo de atributo | Valor do atributo em *entityToCompare* |

Apenas atributos com valores diferentes estão incluídos na coleção. Se nenhuma diferença for encontrada, `.diff()` retorna uma coleção vazia.

A função se aplica a propriedades cujo [kind](DataClassClass.md#attributename) é **storage** ou **relatedEntity**. In case a related entity has been updated (meaning the foreign key), the name of the related entity and its primary key name are returned as *attributeName* properties (*value* and *otherValue* are empty for the related entity name).

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

 $e1:=ds.Employee.get(636)
 $e2:=ds.Employee.get(636)

 $e1.firstName:=$e1.firstName+" update"
 $e1.lastName:=$e1.lastName+" update"

 $c:=ds.Company.get(117)
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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                                                      |
| ---------- | ------- | :-------------------------: | ---------------------------------------------------------------------------------------------- |
| mode       | Integer |              ->             | `dk force drop if stamp changed`: força o drop mesmo se a estampa tenha mudado |
| Resultados | Object  | <- | Resultado da operação de exclusão                                                              |

<!-- END REF -->

#### Descrição

The `.drop()` function <!-- REF #EntityClass.drop().Summary -->deletes the data contained in the entity from the datastore<!-- END REF -->, from the table related to its Dataclass. Note-se que a entidade permanece na memória.

In a multi-user or multi-process application, the `.drop()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the *mode* parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk force drop if stamp changed` option in the *mode* parameter: in this case, the entity is dropped even if the stamp has changed (and the primary key is still the same).

**Resultado**

O objeto retornado por `.drop( )` contém as seguintes propriedades:

| Propriedade                       |                                     | Tipo                   | Descrição                                                                                                                                                                                                  |
| --------------------------------- | ----------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean                | verdadeiro se a ação de queda for bem-sucedida, falso caso contrário.                                                                                                                      |
|                                   |                                     |                        | ***Disponível apenas em caso de erro:***                                                                                                                                                   |
| status(\*)     |                                     | number                 | Código de erro, ver abaixo                                                                                                                                                                                 |
| statusText(\*) |                                     | text                   | Descrição do erro, ver abaixo                                                                                                                                                                              |
|                                   |                                     |                        | ***Disponível apenas em caso de erro de bloqueio pessimista:***                                                                                                                            |
| LockKindText                      |                                     | text                   | "Bloqueado pelo registro"                                                                                                                                                                                  |
| lockInfo                          |                                     | object                 | Informações sobre a origem do bloqueio                                                                                                                                                                     |
|                                   | task_id        | number                 | Parâmetros                                                                                                                                                                                                 |
|                                   | user_name      | text                   | Nome de usuário de sessão na máquina                                                                                                                                                                       |
|                                   | user4d_alias   | text                   | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                                                                                         |
|                                   | host_name      | text                   | Nome da máquina                                                                                                                                                                                            |
|                                   | task_name      | text                   | Nome de processo                                                                                                                                                                                           |
|                                   | client_version | text                   |                                                                                                                                                                                                            |
|                                   |                                     |                        | ***Disponível apenas em caso de erro grave (erro grave pode ser tentar duplicar uma chave primária, disco cheio...):*** |
| errors                            |                                     | uma coleção de objetos |                                                                                                                                                                                                            |
|                                   | message                             | text                   | Mensagem de erro                                                                                                                                                                                           |
|                                   | assinatura de componentes           | text                   | assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                                                    |
|                                   | errCode                             | number                 | Código de erro                                                                                                                                                                                             |

(\*) The following values can be returned in the *status* and *statusText* properties of *Result* object in case of error:

| Parâmetros                                | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Ao utilizar entity.drop( ), este erro pode ser devolvido quando usar a opção dk force drop if stamp changed. When using entity.lock(), this error can be returned when dk reload if stamp changed option is used</li> **Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3     | A entidade está bloqueada por um bloqueio pessimista.<br/> **StatusText associado**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `dk status stamp has changed`             | 2     | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock()`: error only if the `dk reload if stamp changed` option is not used</li><li>**Associated statusText**: "Stamp has changed"</li>                                                                                                                                                                                                                                                                   |
| `dk status wrong permission`              | 1     | Os privilégios actuais não permitem a queda da entidade. **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Exemplo 1

Exemplo sem a opção `dk force drop if stamp changed`:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //A entidade descartada permanece na memória
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Exemplo 2

Example with `dk force drop if stamp changed` option:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //A entidade descartada permanece na memória
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.first().Desc -->

## .first()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->

| Parâmetro  | Tipo                       |                             | Descrição                                                                                               |
| ---------- | -------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referencia à primeira entidade da entity selection (Null se a seleção estiver vazia) |

<!-- END REF -->

#### Descrição

The `.first()` function <!-- REF #EntityClass.first().Summary -->returns a reference to the entity in first position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### Exemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $firstEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1"; "H@") //Esta seleção de entidades contém 3 entidades
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() //$firstEmployee é a primeira entidade da seleção de entidades $employees
```

<!-- END REF -->

<!-- REF EntityClass.fromObject().Desc -->

## .fromObject()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->

| Parâmetro | Tipo   |     | Descrição                                   |
| --------- | ------ | :-: | ------------------------------------------- |
| filler    | Object |  -> | Objeto para o qual vai preencher a entidade |

<!-- END REF -->

#### Descrição

The `.fromObject()` function <!-- REF #EntityClass.fromObject().Summary -->fills an entity with the *filler* content<!-- END REF -->.

> Essa função modifica a entidade original.

O mapeamento entre o objecto e a entidade é feito sobre os nomes dos atributos:

- Se uma propriedade do objeto não existe nos dados (dataclass), ela é ignorada.
- Os tipos de dados devem ser equivalentes. If there is a type mismatch between the object and dataclass, 4D tries to convert the data whenever possible (see [`Converting data types`](Concepts/data-types.md#converting-data-types)), otherwise the attribute is left untouched.
- A chave primária pode ser dada como é ou com uma propriedade "__KEY" (preenchida com o valor da chave primária). If it does not already exist in the dataclass, the entity is created with the given value when [.save()](#save) is called. Se a chave primária não for dada, a entidade é criada e o valor da chave primária é atribuído de acordo com as regras da base de dados. O auto-incremento só é calculado se a chave primária for nula.

*filler* pode tratar de uma entidade relacionada sob as seguintes condições:

- *filler* contém a chave estrangeira em si, ou
- *filler* contains a property object with the same name as the related entity, containing a single property named "\_\_KEY".
- se a entidade relacionada não existir, ela é ignorada.

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
 var $entity : cs.EmpEntity
 $entity:=ds.Emp.new()
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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntityClass.getDataClass().Params -->

| Parâmetro  | Tipo                          |                             | Descrição                                    |
| ---------- | ----------------------------- | :-------------------------: | -------------------------------------------- |
| Resultados | 4D. DataClass | <- | Objeto DataClass ao qual a entidade pertence |

<!-- END REF -->

#### Descrição

The `.getDataClass()` function <!-- REF #EntityClass.getDataClass().Summary -->returns the dataclass of the entity<!-- END REF -->. Esta função é útil para configurar o código genérico.

#### Exemplo

O seguinte código genérico duplica qualquer entidade:

```4d
  //método duplicate_entity
  //duplicate_entity($entity)

 #DECLARE($entity : 4D.Entity)  
 var $entityNew : 4D.Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() //criar uma nova entidade na classe de dados pai
 $entityNew.fromObject($entity.toObject()) //obter todos os atributos
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null //redefinir a chave primária
 $status:=$entityNew.save() //salvar a entidade duplicada
```

<!-- END REF -->

<!-- REF EntityClass.getKey().Desc -->

## .getKey()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.getKey().Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                                                               |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------------------------------------------- |
| mode       | Integer |              ->             | `dk key as string`: primary key is returned as a string, no matter the primary key type |
| Resultados | Text    | <- | Valor do texto chave primária da entidade                                                               |
| Resultados | Integer | <- | Valor da chave primária numérica da entidade                                                            |

<!-- END REF -->

#### Descrição

The `.getKey()` function <!-- REF #EntityClass.getKey().Summary -->returns the primary key value of the entity<!-- END REF -->.

As chaves primárias podem ser números (Inteiro) ou strings. You can "force" the returned primary key value to be a string, no matter the actual primary key type, by passing the `dk key as string` option in the *mode* parameter.

#### Exemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("The primary key is "+$employee.getKey(dk key as string))
```

<!-- END REF -->

<!-- REF EntityClass.getRemoteContextAttributes().Desc -->

## .getRemoteContextAttributes()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19R5    | Adicionado |

</details>

<!-- REF #EntityClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntityClass.getRemoteContextAttributes().Params -->

| Parâmetro | Tipo |                             | Descrição                                                            |
| --------- | ---- | --------------------------- | -------------------------------------------------------------------- |
| resultado | Text | <- | Atributos de contexto linkados à entidade, separados por uma vírgula |

<!-- END REF -->

> **Modo avançado:** Essa função é destinada a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.

#### Descrição

The `.getRemoteContextAttributes()` function <!-- REF #EntityClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity <!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity, the function returns an empty Text.

#### Exemplo

```4d
var $ds : 4D. DataStoreImplementation
var $address : cs. AddressEntity
var $p : cs. PersonsEntity
var $contextA : Object
var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$contextA:=New object("context"; "contextA")

$address:=$ds. Address.get(1; $contextA)
$text:="" For each ($p; $address.persons)
    $text:=$p.firstname+" "+$p.lastname End for each

$info:=$address.getRemoteContextAttributes()

//$info = "persons,persons.lastname,persons.firstname"
```

#### Veja também

[EntitySelection.getRemoteContextAttributes()](./EntitySelectionClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntityClass.getSelection().Desc -->

## .getSelection()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF -->

<!-- REF #EntityClass.getSelection().Params -->

| Parâmetro  | Tipo                                |                             | Descrição                                                                                     |
| ---------- | ----------------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------- |
| Resultados | 4D. EntitySelection | <- | Seleção de entidade a que pertence a entidade (null se não for encontrado) |

<!-- END REF -->

#### Descrição

The `.getSelection()` function <!-- REF #EntityClass.getSelection().Summary -->returns the entity selection which the entity belongs to<!-- END REF -->.

Se a entidade não pertence à seleção de uma entidade, a função retorna Null.

#### Exemplo

```4d
 var $emp : cs.EmployeeEntity
 var $employees; $employees2 : cs.EmployeeSelection
 $emp:=ds.Employee.get(672) // This entity does not belong to any entity selection
 $employees:=$emp.getSelection() // $employees is Null

 $employees2:=ds.Employee.query("lastName=:1";"Smith") //This entity selection contains 6 entities
 $emp:=$employees2[0]  // This entity belongs to an entity selection

 ALERT("The entity selection contains "+String($emp.getSelection().length)+" entities")
```

<!-- END REF -->

<!-- REF EntityClass.getStamp().Desc -->

## .getStamp()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->

<!-- REF #EntityClass.getStamp().Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                           |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------- |
| Resultados | Integer | <- | Estampa da entidade (0 se a entidade foi criada) |

<!-- END REF -->

#### Descrição

The `.getStamp()` function <!-- REF #EntityClass.getStamp().Summary --> returns the current value of the stamp of the entity<!-- END REF -->.

O selo interno é automaticamente incrementado por 4D cada vez que a entidade é gravada. It manages concurrent user access and modifications to the same entities (see [**Entity locking**](ORDA/entities.md#entity-locking)).

> Para uma nova entidade (nunca salva), a função retorna 0. Para saber se uma entidade acabou de ser criada, recomenda-se a utilização de [.isNew()](#isnew).

#### Exemplo

```4d
 var $entity : cs.EmployeeEntity
 var $stamp : Integer

 $entity:=ds.Employee.new()
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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.indexOf().Params -->

| Parâmetro       | Tipo                                |                             | Descrição                                                            |
| --------------- | ----------------------------------- | :-------------------------: | -------------------------------------------------------------------- |
| entitySelection | 4D. EntitySelection |              ->             | A posição da entidade é dada de acordo com a selecção desta entidade |
| Resultados      | Integer                             | <- | Posição da entidade numa selecção de entidade                        |

<!-- END REF -->

#### Descrição

The `.indexOf()` function <!-- REF #EntityClass.indexOf().Summary -->returns the position of the entity in an entity selection<!-- END REF -->.

By default if the *entitySelection* parameter is omitted, the function returns the entity's position within its own entity selection. Caso contrário, ele retorna a posição da entidade dentro da *entitySelection*.

O valor resultante é incluído entre 0 e o comprimento da selecção da entidade -1.

- Se a entidade não tiver uma selecção de entidade ou não pertencer a *entitySelection*, a função retorna -1.
- Se *entitySelection* for Null ou não pertencer ao mesmo dataclass que a entidade, é apresentado um erro.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.isNew().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                                                                                  |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | É verdade se a entidade acabou de ser criada e ainda não foi salva. Caso contrário, Falso. |

<!-- END REF -->

#### Descrição

The `.isNew()` function <!-- REF #EntityClass.isNew().Summary --> returns True if the entity to which it is applied has just been created and has not yet been saved in the datastore<!-- END REF -->. Caso contrário, devolve False.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.last().Params -->

| Parâmetro  | Tipo                       |                             | Descrição                                                                                                    |
| ---------- | -------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------ |
| Resultados | 4D. Entity | <- | Referência para a última entidade de uma seleção de entidade (Null se não for encontrado) |

<!-- END REF -->

#### Descrição

The `.last()` function <!-- REF #EntityClass.last().Summary -->returns a reference to the entity in last position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.lock().Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                                                         |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------------------------------------- |
| mode       | Integer |              ->             | `dk reload if stamp changed`: Recarregar antes de bloquear se o selo for alterado |
| Resultados | Object  | <- | Resultado da operação de bloqueio                                                                 |

<!-- END REF -->

#### Descrição

The `.lock()` function <!-- REF #EntityClass.lock().Summary -->puts a pessimistic lock on the record referenced by the entity<!-- END REF -->. The [lock is set](ORDA/entities.md#entity-locking) for a record and all the references of the entity in the current process.

Other processes will see this record as locked (the `result.success` property will contain False if they try to lock the same entity using this function). Só as funções executadas na sessão de "bloqueio" são permitidas para editar e guardar os atributos da entidade. A entidade pode ser carregada como apenas leitura por outras sessões, mas não serão capazes de introduzir e guardar valores.

Um registro bloqueado por `.lock()` é desbloqueado:

- when the [`unlock()`](#unlock) function is called on a matching entity in the same process
- automaticamente, quando já não é referenciado por nenhuma entidade em memória. Por exemplo, se a fechadura for colocada apenas numa referência local de uma entidade, a entidade é desbloqueada quando a função termina. Enquanto houver referências à entidade em memória, o registo permanece bloqueado.

> An entity can also be [locked by a REST session](../REST/$lock.md), in which case it can only be unlocked by the session.

By default, if the *mode* parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk reload if stamp changed` option in the *mode* parameter: in this case, no error is returned and the entity is reloaded when the stamp has changed (if the entity still exists and the primary key is still the same).

**Resultado**

O objeto retornado por `.lock()` contém as seguintes propriedades:

| Propriedade                       |                                     | Tipo                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ----------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean                | true se a ação de bloqueio for bem sucedida (ou se a entidade já estiver bloqueada no processo atual), falso caso contrário.                                                                                                                                                                                                                              |
|                                   |                                     |                        | ***Disponível somente se a opção `dk reload if stamp changed` for usada:***                                                                                                                                                                                                                                                                                                  |
| **wasReloaded**                   |                                     | boolean                | verdadeiro se a entidade foi recarregada com sucesso, falso caso contrário.                                                                                                                                                                                                                                                                                                  |
|                                   |                                     |                        | ***Disponível apenas em caso de erro:***                                                                                                                                                                                                                                                                                                                                     |
| status(\*)     |                                     | number                 | Código de erro, ver abaixo                                                                                                                                                                                                                                                                                                                                                                   |
| statusText(\*) |                                     | text                   | Descrição do erro, ver abaixo                                                                                                                                                                                                                                                                                                                                                                |
|                                   |                                     |                        | ***Disponível apenas em caso de erro de bloqueio pessimista:***                                                                                                                                                                                                                                                                                                              |
| lockKindText                      |                                     | text                   | "Locked by record" se trancado por um processo 4D, "Locked by session" se trancado por uma sessão REST                                                                                                                                                                                                                                                                                       |
| lockInfo                          |                                     | object                 | Informações sobre a origem do bloqueio. Retorna propriedades dependendo da origem da trava (processo 4D ou sessão REST)                                                                                                                                                                                                                                   |
|                                   |                                     |                        | ***Disponível só para um processo trava 4D:***                                                                                                                                                                                                                                                                                                                               |
|                                   | task_id        | number                 | Process ID                                                                                                                                                                                                                                                                                                                                                                                   |
|                                   | user_name      | text                   | Nome de usuário de sessão na máquina                                                                                                                                                                                                                                                                                                                                                         |
|                                   | user4d_alias   | text                   | Nome ou apelido do usuário 4D                                                                                                                                                                                                                                                                                                                                                                |
|                                   | user4d_id      | number                 | Id do usuário no diretório do banco de dados 4D                                                                                                                                                                                                                                                                                                                                              |
|                                   | host_name      | text                   | Nome da máquina                                                                                                                                                                                                                                                                                                                                                                              |
|                                   | task_name      | text                   | Nome de processo                                                                                                                                                                                                                                                                                                                                                                             |
|                                   | client_version | text                   | Versão do cliente                                                                                                                                                                                                                                                                                                                                                                            |
|                                   |                                     |                        | ***Disponível só para um processo trava REST:***                                                                                                                                                                                                                                                                                                                             |
|                                   | host                                | text                   | URL que trava a entidade (por exemplo "www.myserver.com")                                                                                                                                                                                                                                                                                 |
|                                   | IPAddr                              | text                   | Endereço IP da trava (por exemplo. "127.0.0.1")                                                                                                                                                                                                                                                           |
|                                   | userAgent                           | text                   | userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |
|                                   |                                     |                        | ***Disponível somente em caso de erro grave*** (chave primária já existe, disco cheio...):                                                                                                                                                                                                                |
| errors                            |                                     | uma coleção de objetos |                                                                                                                                                                                                                                                                                                                                                                                              |
|                                   | message                             | text                   | Mensagem de erro                                                                                                                                                                                                                                                                                                                                                                             |
|                                   | assinatura de componentes           | text                   | assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                                                                                                                                                                                                                                      |
|                                   | errCode                             | number                 | Código de erro                                                                                                                                                                                                                                                                                                                                                                               |

(\*) The following values can be returned in the *status* and *statusText* properties of the *Result* object in case of error:

| Parâmetros                                | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. This error can occur in the following cases:<li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). Ao usar `.drop( )`, este erro pode ser retornado quando a opção "dk force drop if stamp changed" for usada. When using `.lock()`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3     | A entidade está bloqueada por um bloqueio pessimista.**statusText associado**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `dk status stamp has changed`             | 2     | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock()`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                                  |

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

Exemplo com a opção `dk reload if stamp changed`:

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.next().Params -->

| Parâmetro  | Tipo                       |                             | Descrição                                                                                             |
| ---------- | -------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referência a entidade anterior na seleção da entidade (Null se não for encontrado) |

<!-- END REF -->

#### Descrição

The `.next()` function <!-- REF #EntityClass.next().Summary -->returns a reference to the next entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

Se não houver entidade seguinte válida na selecção da entidade (ou seja, se estiver na última entidade da selecção), a função devolve Null. Se a entidade seguinte tiver sido abandonada, a função devolve a entidade válida seguinte (e eventualmente Nula).

#### Exemplo

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1"; "H@") //Esta seleção de entidades contém 3 entidades
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee é a segunda entidade da seleção de entidades $employees

```

<!-- END REF -->

<!-- REF EntityClass.previous().Desc -->

## .previous()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.previous().Params -->

| Parâmetro  | Tipo                       |                             | Descrição                                                                                                     |
| ---------- | -------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referência para a próxima entidade de uma seleção de entidade (Null se não for encontrado) |

<!-- END REF -->

#### Descrição

The `.previous()` function <!-- REF #EntityClass.previous().Summary --> returns a reference to the previous entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

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

## .reload()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->

<!-- REF #EntityClass.reload().Params -->

| Parâmetro  | Tipo   |                             | Descrição        |
| ---------- | ------ | :-------------------------: | ---------------- |
| Resultados | Object | <- | Objeto de estado |

<!-- END REF -->

#### Descrição

The `.reload()` function <!-- REF #EntityClass.reload().Summary -->reloads the content of the entity in memory<!-- END REF -->, according to information stored in the table related to the dataclass in the datastore. A recarga só é feita se a entidade ainda existir com a mesma chave primária.

**Resultado**

The object returned by `.reload( )` contains the following properties:

| Propriedade                       | Tipo    | Descrição                                                                                                                                 |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| success                           | boolean | True se a ação de recarga for bem-sucedida, Falso caso contrário.***Disponível apenas em caso de erro***: |
| status(\*)     | number  | Código de erro, ver abaixo                                                                                                                |
| statusText(\*) | text    | Descrição do erro, ver abaixo                                                                                                             |

(\*) The following values can be returned in the *status* and *statusText* properties of *Result* object in case of error:

| Parâmetros                                | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). When using `.lock()`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>***Associated statusText***: "Entity does not exist anymore" |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>***Associated statusText***: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.save().Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                             |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------------------- |
| mode       | Integer |              ->             | `dk auto merge`: ativa o modo de mesclagem automática |
| Resultados | Object  | <- | Resultado da operação de salvamento                                   |

<!-- END REF -->

#### Descrição

The `.save()` function <!-- REF #EntityClass.save().Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. na tabela relacionada para a dataClass Deve salvar este método depois de criar ou modificar uma entidade se quiser salvar as mudanças feitas nela.

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). Senão a função não faz nada (o trigger não é ativado)

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the *mode* parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the *mode* parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. Os dados resultantes salvos na entidade serão a combinação ("merge"/fusão) de todas as modificações não simultâneas (se modificações forem aplicadas ao mesmo atributo, a operação de salvar falha e um erro é retornado, mesmo com o modo auto fusão)

> O modo automático merge não está disponível para atributos de tipo Imagem, Objeto e Texto quando armazenado fora do registro. Concurrent changes in these attributes will result in a `dk status stamp has changed` error.

**Resultado**

O objeto retornado por `.save()` contém as seguintes propriedades:

| Propriedade  |                                     | Tipo                   | Descrição                                                                                                                                                                                                        |
| ------------ | ----------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success      |                                     | boolean                | True se a ação salvar tiver sucesso, senão False                                                                                                                                                                 |
|              |                                     |                        | ***Disponível apenas se a opção `dk auto merge` for usada***:                                                                                                                                    |
| autoMerged   |                                     | boolean                | True se fizer uma auto merge, senão False                                                                                                                                                                        |
|              |                                     |                        | ***Disponível apenas em caso de erro***:                                                                                                                                                         |
| status       |                                     | number                 | Código de erro, [veja abaixo](#status-and-statustext)                                                                                                                                                            |
| statusText   |                                     | text                   | Descrição do erro, [veja abaixo](#status-and-statustext)                                                                                                                                                         |
|              |                                     |                        | ***Disponível apenas em caso de erro de bloqueio pessimista***:                                                                                                                                  |
| lockKindText |                                     | text                   | "Bloqueado pelo registro"                                                                                                                                                                                        |
| lockInfo     |                                     | object                 | Informações sobre a origem do bloqueio                                                                                                                                                                           |
|              | task_id        | number                 | Parâmetros                                                                                                                                                                                                       |
|              | user_name      | text                   | Nome de usuário de sessão na máquina                                                                                                                                                                             |
|              | user4d_alias   | text                   | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                                                                                               |
|              | host_name      | text                   | Nome da máquina                                                                                                                                                                                                  |
|              | task_name      | text                   | Nome de processo                                                                                                                                                                                                 |
|              | client_version | text                   |                                                                                                                                                                                                                  |
|              |                                     |                        | ***Disponível apenas em caso de erro grave*** (erro grave - pode estar tentando duplicar uma chave primária, disco cheio...): |
| errors       |                                     | uma coleção de objetos |                                                                                                                                                                                                                  |
|              | message                             | text                   | Mensagem de erro                                                                                                                                                                                                 |
|              | componentSignature                  | text                   | Assinatura interna do componente (ex.: "dmbg" significa componente da base de dados)                                                                          |
|              | errCode                             | number                 | Código de erro                                                                                                                                                                                                   |

##### status e statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

| Parâmetros                                | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6     | (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.**Associated statusText**: "Auto merge failed"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `dk status entity does not exist anymore` | 5     | A entidade não existe mais nos dados. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). a entidade foi descartada e substituída por outra chave primária (o selo mudou e uma nova entidade agora usa o espaço de memória). When using `.lock()`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3     | A entidade está bloqueada por um bloqueio pessimista.**statusText associado**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `dk status serious error`                 | 4     | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `dk status stamp has changed`             | 2     | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock()`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                                                                            |
| `dk status wrong permission`              | 1     | Os privilégios actuais não permitem a salvaguarda da entidade. **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Exemplo 1

Criar uma nova entidade:

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

Atualizar uma entidade sem a opção dk auto merge:

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

Atualização de uma entidade com a opção `dk auto merge`:

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.toObject().Params -->

| Parâmetro    | Tipo       |                             | Descrição                                                                                                                                                                                                    |
| ------------ | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| filterString | Text       |              ->             | Atributos a extrair (string separada por vírgulas)                                                                                                                                        |
| filterCol    | Collection |              ->             | Coleção de atributos a extrair                                                                                                                                                                               |
| options      | Integer    |              ->             | `dk with primary key`: adiciona a propriedade \_\_KEY;<br/>`dk with stamp`: adiciona a propriedade \_STAMP |
| Resultados   | Object     | <- | Objeto criado a partir da entidade                                                                                                                                                                           |

<!-- END REF -->

#### Descrição

The `.toObject()` function <!-- REF #EntityClass.toObject().Summary -->returns an object which has been built from the entity<!-- END REF -->. Os nomes das propriedades no objecto correspondem aos nomes dos atributos da entidade.

If no filter is specified, or if the *filterString* parameter contains an empty string or "\*", the returned object will contain:

- todos os atributos de entidade de armazenagem
- attributes of the `relatedEntity` [kind](DataClassClass.md#attributename): you get a property with the same name as the related entity (name of the many-to-one link). Atributo é extraido com um formulário simples.
- attributes of the `relatedEntities` [kind](DataClassClass.md#attributename): attribute is not returned.

No primeiro par|âmetro, passa os atributos entidade a extrair. Pode passar:

- *filterString*: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
- *filterCol*: a collection of strings: \["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
- propertyPath = "relatedEntity.\*" -> todas as propriedades são extraídas
- propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> só se extraem essas propriedades

If a filter is specified for attributes of the relatedEntities [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntities.\*" -> all the properties are extracted
- propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> só se extraem essas propriedades

In the *options* parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

:::caution Aviso

Se utilizar outro atributo que não a chave primária como o atributo Um numa relação, o valor deste atributo será escrito na propriedade "__KEY". Keep in mind that it is recommended to use the primary key as One attribute in your relations, especially when you use `.toObject()` and `.fromObject()` functions.

:::

#### Exemplo 1

A estrutura abaixo será usada nos exemplos desta seção:

![](../assets/en/API/dataclassAttribute4.png)

Sem parâmetros de filtro:

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
    "employer": { // relatedEntity extraída com forma simples
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Exemplo 2

Extrair a chave primária e a estampa:

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

Expande todas as propriedades de `relatedEntities`:

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

#### Exemplo

Extração de algumas propriedades de `relatedEntities`:

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

#### Exemplo 2

Extraindo uma `relatedEntity` de forma simple:

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

Expande todas as propriedades de `relatedEntity`:

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

#### Exemplo 3

Extração de algumas propriedades de `relatedEntity`:

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.touched().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                                                      |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se tiver modificado ao menos um atributo da entidade e ainda não for salvo, se não, False |

<!-- END REF -->

#### Descrição

The `.touched()` function <!-- REF #EntityClass.touched().Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

Se um atributo for modificado ou calculado, a função retorna True, senão retorna False. Pode usar essa função para determinar se precisar salvar a entidade.

This function returns False for a new entity that has just been created (with [`.new( )`](DataClassClass.md#new)). Note however that if you use a function which calculates an attribute of the entity, the `.touched()` function will then return True. For example, if you call [`.getKey()`](#getkey) to calculate the primary key, `.touched()` returns True.

#### Exemplo

Neste exemplo, vemos se é necessário salvar a entidade:

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->

<!-- REF #EntityClass.touchedAttributes().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                   |
| ---------- | ---------- | :-------------------------: | ------------------------------------------- |
| Resultados | Collection | <- | Nomes de atributos touched ou coleção vazia |

<!-- END REF -->

#### Descrição

The `.touchedAttributes()` function <!-- REF #EntityClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

Isso se aplica para atributos [kind](DataClassClass.md#attributename) `storage` ou `relatedEntity`.

No caso de uma entidade relacionada que foi tocada (touched) \*ou seja, a chave primária) o nome da entidade relacionada e sua chave primária são retornados.

Se nenhum atributo de entidade for tocado, o método retorna uma coleção vazia.

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

- firstName and lastName tem um tipo `storage`
- employer tem um tipo 'relatedEntity'
- employerID é a chave estrangeira da entidade relacionada employer

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->

## .unlock()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->

<!-- REF #EntityClass.unlock().Params -->

| Parâmetro  | Tipo   |                             | Descrição        |
| ---------- | ------ | :-------------------------: | ---------------- |
| Resultados | Object | <- | Objeto de estado |

<!-- END REF -->

#### Descrição

The `.unlock()` function <!-- REF #EntityClass.unlock().Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF --> in the datastore and table related to its dataclass.

> Para mais informações, consulte a seção [Bloqueio de entidades](ORDA/entities.md#entity-locking).

Um registro é destrancado automaticamente quando não for mais referenciado por nenhuma entidade no processo de trancamento (por exemplo, se uma tranca for posta apenas na referência local da entidade, a entidade e o registro é destrancado quando o processo terminar).

> Quando um registro for trancado, deve ser destrancado do processo de trancamento e na referência de entidade que colocou a tranca. Por exemplo:

```4d
 $e1:=ds. Emp.all()[0]
 $e2:=ds. Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Resultado**

O objeto retornado por `.unlock()` contém a seguinte propriedade:

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                                                                                     |
| ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success     | Parâmetros | Verdadeiro se a ação de destrancar for bem-sucedida, Falso caso contrário. Se o desbloqueio for feito em uma entidade abandonada, em um registro não bloqueado ou em um registro bloqueado por outro processo ou entidade, o sucesso é False. |

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
