---
id: EntitySelectionClass
title: EntitySelection
---


Uma seleção de entidades é um objeto que contém uma ou mais referencias a [entidades](ORDA/dsMapping.md#entity) pertencentes à mesma [Dataclass](ORDA/dsMapping.md#dataclass). Uma seleção de entidades pode conter 0, 1 ou X entidades da dataclass -- onde X pode representar o número total de entidades contidas na dataclass.

As seleções de entidades podem ser criadas a partir de seleções existentes utilizando varias funções da classe [`DataClass` class](DataClassClass.md) tais como [`.all()`](DataClassClass.md#all) ou [`.query()`](DataClassClass.md#query), ou da classe `EntityClass` mesma, tal como [`.and()`](#and) ou [`orderBy()`](#orderby). Também pode criar seleções de entidades em branco utilizando a função [`dataClass.newSelection()`](DataClassClass.md#newselection) ou o comando [`Create new selection`](#create-new-selection).

### Resumo

|                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->|
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.at().Syntax -->](#at)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.at().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.copy().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.distinctPaths().Syntax -->](#distinctPaths)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinctPaths().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.selected().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->|



## Criar uma seleção de entidades (entity selection)

<!-- REF #_command_.Create entity selection.Syntax -->**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #_command_.Create entity selection.Params -->
| Parâmetro  | Tipo                |    | Descrição                                                                                                         |
| ---------- | ------------------- |:--:| ----------------------------------------------------------------------------------------------------------------- |
| dsTable    | Tabela              | -> | Tabela do banco de dados 4D cuja seleção atual se utilizará para construir a seleção de entidades                 |
| settings   | Object              | -> | Opção de construção: context                                                                                      |
| Resultados | 4D. EntitySelection | <- | Seleção de entidades que coincidem com a classe de dados relacionada com a tabela dada|<!-- END REF -->


|


#### Descrição

O comando `Create entity selection` constrói e devolve uma nova, [alterável](ORDA/entities.md#shareable-or-alterable-entity-selections) seleção de entidade relacionada com a classe de dados que coincide com a tabela *dsTable* dada, segundo a seleção atual desta tabela.

Se a seleção atual for ordenada, é criada uma seleção de entidades [ordenada](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) (se mantém a ordem da seleção atual). Se a seleção atual não for ordenada, se cria uma seleção de entidades não ordenada.

Se a tabela *dsTable* não estiver exposta em [`ds`](API/DataStoreClass.md#ds), se devolve um erro. Esse comando não pode usado com uma datastore remota.

No parâmetro opcional*settings* pode passar um objeto contendo as propriedades abaixo:

| Propriedade | Tipo | Descrição                                                                                                         |
| ----------- | ---- | ----------------------------------------------------------------------------------------------------------------- |
| context     | Text | Etiqueta para  [contexto de optimização](ORDA/entities.md#clientserver-optimization) aplicado a entity selection. |


#### Exemplo

```4d
var $employees : cs. EmployeeSelection ALL RECORDS([Employee])
$employees:=Create entity selection([Employee]) 
// A entity selection $employees agora contém um conjunto de referências
// em todas as entidades relacionadas com a classe de dados Employee
```

#### Veja também

[`dataClass.newSelection()`](DataClassClass.md#newselection)


## USE ENTITY SELECTION

<!-- REF #_command_.USE ENTITY SELECTION.Syntax -->**USE ENTITY SELECTION** (*entitySelection*)<!-- END REF -->


<!-- REF #_command_.USE ENTITY SELECTION.Params -->
| Parâmetro       | Tipo            |    | Descrição                                       |
| --------------- | --------------- |:--:| ----------------------------------------------- |
| entitySelection | EntitySelection | -> | Seleção de entidades|<!-- END REF -->

|

#### Descrição

O comando `USE ENTITY SELECTION` atualiza a seleção atual da tabela correspondendo à dataclass do parâmetro *entitySelection* de acordo com o contexto da seleção de entidade.

Este comando não pode ser utilizado com um [datastore remoto](../ORDA/remoteDatastores.md).

:::info

Esse comando foi projetado para fazer com que as seleções de corrente 4D se beneficiem do poder das consultas ORDA. Por motivos de desempenho, no 4D single-user e no 4D Server, o comando conecta diretamente *entitySelection* à seleção atual. Portanto, uma vez que *a entitySelection* tenha sido usada, ela não deve ser reutilizada ou alterada posteriormente.

:::

:::note

Depois de uma chamada a `USE ENTITY SELECTION`, o primeiro registro da seleção atual (se não vazia) vira o registro atual, mas não é carregado na memória.. Se precisar usar os valores dos campos no registro atual, use o comando `LOAD RECORD` depois do comando `USE ENTITY SELECTION`.

:::

#### Exemplo

```4d
Parâmetros
```


<!-- REF EntitySelectionClass.index.Desc -->
## &#91;*index*&#93;

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->***&#91;index&#93;*** : 4D.Entity<!-- END REF -->


#### Descrição

A notação `EntitySelection[index]` <!-- REF EntitySelectionClass.index.Summary -->permite acessar entidades sem a seleção de entidade usando a sintaxe coleção padrão<!-- END REF -->: passe a posição da entidade que quiser colocar o padrão *index*.

Lembre que a entidade correspondente é recarregada a partir da datastore.

*index* pode ser qualquer número entre 0 e `.length`-1.

*   Se *index* está fora do intervalo, se devolve um erro.
*   Se *index* corresponder a uma entidade descartada, um valor Null será retornado.

:::caution

> > **Atenção**: `EntitySelection[index]` é uma expressão não atribuível, o que significa que não pode utilizar-se como referência editável da entidade com métodos como [`.lock()`](EntityClass.md#lock) o [`.save()`](EntityClass.md#save). Para trabalhar com a entidade correspondente, é necessário atribuir a expressão devolvida a uma expressão atribuível, como uma variável. Exemplos:

```4d
 $sel:=ds. Employee.all() //criação da entity selection
  //declarações não válidas:
 $result:=$sel[0].lock() //NÃO funcionará
 $sel[0].lastName:="Smith" //NÃO funcionará
 $result:=$sel[0].save() //NÃO funcionará
  //valid code:
 $entity:=$sel[0]  //OK
 $entity.lastName:="Smith" //OK
 $entity.save() //OK
```
:::

#### Exemplo


```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@")
 $employee:=$employees[2]  // A terceira entidade da seleção de entidades $employees se recarrega do banco de dados
```

<!-- END REF -->





<!-- REF EntitySelectionClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->***.attributeName*** : Collection<br/>***.attributeName*** : 4D. EntitySelection<!-- END REF -->


#### Descrição

Quaalquer atributo de dataclass pode ser usado como um apropriedade de uma seleção de entidade a retornar <!-- REF EntitySelectionClass.attributeName.Summary -->uma "projeção" de valores para o atributo na seleção de entidades<!-- END REF -->. Os valores projetados podem ser uma coleção ou uma nova seleção de entidades, dependendo do tipo de [kind](DataClassClass.md#attributename) (`storage` ou `relation`) do atributo.

*   Se o "kind" de *attributeName* é `storage`: `.attributeName` devolve uma coleção de valores do mesmo tipo que *attributeName*.
*   If *attributeName* kind is `relatedEntity`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Se eliminam os duplicados (se devolve uma seleção de entidades desordenada).
*   Se *attributeName* type é `relatedEntities`: `.attributeName` retorna uma nova seleção de entidade de valores relacionados do mesmo tipo como *attributeName*. Se eliminam os duplicados (se devolve uma seleção de entidades desordenada).


Quando se utiliza um atributo de relação como propriedade de uma seleção de entidades, o resultado é sempre outra seleção de entidades, mesmo que só se devolva uma entidade. If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

Se o atributo não existir na seleção de entidades, se devolve um erro.






#### Exemplo 1

Projeção de valores de armazenamento:


```4d
 var $firstNames : Collection
 $entitySelection:=ds. Employee.all()
 $firstNames:=$entitySelection.firstName // firstName é um string
```

A coleção resultante é uma coleção de strings, por exemplo:

```4d
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### Exemplo 2

Projeção da entidade relacionada:

```4d
 var $es; $entitySelection : cs. EmployeeSelection
 $entitySelection:=ds. Employee.all()
 $es:=$entitySelection.employer // employer é relacionada aum  Company dataClass
```

O objeto resultane é uma seleção de entidade da Empresa com duplicações removidas (se houver).

#### Exemplo 3

Projeção de entidades relacionadas:

```4d
 var $es : cs. EmployeeSelection
 $es:=ds. Employee.all().directReports // directReports é relacionada a dataclasse Funcionário
```

O objeto resultante é uma seleção de entidade da dataclasse Funcionario sem duplicatas (se houver).

<!-- END REF -->




<!-- REF EntitySelectionClass.add().Desc -->
## .add()

<details><summary>Histórico</summary>

| Release | Mudanças                                              |
| ------- | ----------------------------------------------------- |
| 18 R6   | Suporte do parâmetro *entitySelection*                |
| 18 R5   | Compatível apenas com seleções de entidade alteráveis |
| 17      | Adicionado                                            |

</details>


<!-- REF #EntitySelectionClass.add().Syntax -->**.add**( *entity* : 4D. Entity ) : 4D. EntitySelection<br/>**.add**( *entitySelection* : 4D.<!-- END REF -->


<!-- REF #EntitySelectionClass.add().Params -->
| Parâmetro       | Tipo                |    | Descrição                                                                       |
| --------------- | ------------------- |:--:| ------------------------------------------------------------------------------- |
| entity          | 4D. Entity          | -> | Entidade que deve ser adicinonada à entity selection                            |
| entitySelection | 4D. EntitySelection | -> | Seleção entidade paara ser adicionado a sellleção entidade originaal            |
| Resultados      | 4D. EntitySelection | <- | Seleção de entidades incluindo a *entity* adicionada|<!-- END REF -->


|


#### Descrição

A função `.add()` <!-- REF #EntitySelectionClass.add().Summary -->addiciona a *entity* especificada ou *entitySelection* para a selleção de entidade original e retona a seleção de entidade modificada<!-- END REF -->.
> Esta função não modifica a entity selection original.

:::info warning

**Atenção:** a entity selection deve ser *alteravel*, ou seja, foi criado por ejemplo, por [`.newSelection()`](DataClassClass.md#newselection) ou `Create entity selection`, do contrário `.add()` devolverá um erro. As entity selections partilháveis não aceitam a adição de entidades. Para saber mais, consulte [Entity selections compartilháveis ou modificáveis ](ORDA/entities.md#shareable-or-alterable-entity-selections).

:::

**Adicionar uma entidade**

*   Se a entity selection estiver ordenada, *entity* se adiciona ao final da seleção. Se uma referência a mesma entidade já pertencer a seleção de entidades, se duplica e se adiciona uma nova referência.
*   returns a new, ordered entity selection contendo todas as entidades da seleção de entidade na ordem definida através de *formulaString* ou *formulaObj* e, opcionalmente, os parâmetros*sortOrder* e*settings*.

**Adicionar uma seleção de entidades**

*   Se a selecção de entidades estiver ordenada, a sua ordem é mantida e *entitySelection* é adicionado no final da selecção. Se as referências às mesmas entidades de *entitySelection* já pertencerem à selecção de entidades, são duplicadas e são adicionadas novas referências.
*   Se a seleção de entidade nãofor ordenada, ela fica ordenada.
> Para saber mais veja [Entity selections ordenada ou não ordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

A entity selection modificada é devolvida pela função, de modo que as chamadas à função podem ser encadeados.

Se produz um erro se *entity* e a entity selection não estão relacionadas com a mesma dataclass. Se *entity* for Null, não se produz nenhum erro.

#### Exemplo 1

```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"S@")
 $employee:=ds. Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees.add($employee) //A entidade $employee se adiciona a entity selection $employees
```

#### Exemplo 2

As chamadas à função podem ser encadeadas:

```4d
 var $sel : cs. ProductSelection
 var $p1;$p2;$p3 : cs. ProductEntity

 $p1:=ds. Product.get(10)
 $p2:=ds. Product.get(11)
 $p3:=ds. Product.get(12)
 $sel:=ds. Product.query("ID > 50")
 $sel:=$sel.add($p1).add($p2).add($p3)
```

#### Exemplo 3

Em uma interface de usuário, temos duas listas. O usuário seleciona itens da lista 1 e as adiciona na lista 2.

```4d
$sellist2:=$sellist2.add($sellist1)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.and().Desc -->
## .and()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.and().Syntax -->**.and**( *entity* : 4D. Entity ) : 4D. EntitySelection<br/>**.and**( *entitySelection* : 4D. EntitySelection ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.and().Params -->
| Parâmetro       | Tipo                |    | Descrição                                                                                       |
| --------------- | ------------------- |:--:| ----------------------------------------------------------------------------------------------- |
| entity          | 4D. Entity          | -> | Entidade a intersectar                                                                          |
| entitySelection | 4D. EntitySelection | -> | Entity selection a intersectar                                                                  |
| Resultados      | 4D. EntitySelection | <- | Entity selection resultante da intersecção com o operador lógico AND|<!-- END REF -->


|


#### Descrição

A função `.and()` <!-- REF #EntitySelectionClass.and().Summary -->combina a seleção da entidade com um parâmetro *entity* ou *entitySelection* utilizando o operador lógico AND<!-- END REF -->; se retornar uma nova e não ordenada seleção de entidade que contenha só as entidades referenciaadas tanto na seleção de entidade quanto no parâmetro.

*   Se passar *entity* como parâmetro, se combina esta entidade com a entity selection. Se a entidade pertencer à entity selection, se devolve uma nova entity selection que só contém a entidade. Senão, uma seleção de entidades vazia é retornada.
*   Se passar como parâmetro *entitySelection* pode comparar seleções de entidade. Uma nova seleção de entidade que contenha só as entidades que são referenciadas em ambas as seleções sejam retornadas. Senão, uma nova seleção de entidade contém a seleção de entidade original e a entidade é retornada.
> > > Pode comparar [entity selections ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). A seleção resultante é sempre desordenada.

Se a entity selection inicial ou o parâmetro *entitySelection* estiverem vazios, ou se *entity* for Null, se devolve uma entity selection vazia.

Se a entity selection inicial e o parâmetro não forem relacionados com a mesma dataclass, se produz um erro.


#### Exemplo 1


```4d
 var $employees; $notDropped : cs. EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped é uma entity selection que contém a primeira entidade não eliminada
 If($notDropped.length=0) //A ação de eliminação é exitosa, todas as entidades foram eliminadas
    ALERT("You have dropped "+String($employees.length)+" employees") //A seleção de entidades eliminada permanece na memória
 Else
    ALERT("Problem during drop, try later")
 End if
```


#### Exemplo 2

Se quisermos ter uma seleção de empregados chamados "Jones" que morem em Nova York:

```4d
 var $sel1; $sel2; $sel3 : cs. EmployeeSelection
 $sel1:=ds. Employee.query("name =:1";"Jones")
 $sel2:=ds. Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.at().Desc -->
## .at()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.at().Syntax -->**.at**( *index* : Integer ) : 4D. Entity <!-- END REF -->


<!-- REF #EntitySelectionClass.at().Params -->
| Parâmetro  | Tipo       |    | Descrição                                          |
| ---------- | ---------- |:--:| -------------------------------------------------- |
| index      | Integer    | -> | Índice da entidade a devolver                      |
| Resultados | 4D. Entity | <- | A entidade nesse índice|<!-- END REF -->


|


#### Descrição

A função `.some()` <!-- REF #EntitySelectionClass.at().Summary -->devolve a entidade na posição *index*, permitindo a utilização de números inteiros positivos e negativos<!-- END REF -->.

Se o *index* for negativo (de -1 a -n com n : comprimento da selecção de entidades), a entidade devolvida será baseada na ordem inversa da selecção de entidades.

A função devolve Null se o *index* estiver para além dos limites de selecção de entidades.

#### Exemplo

```4d
var $employees : cs.EmployeeSelection
var $emp1; $emp2 : cs.EmployeeEntity
$employees:=ds.Employee.query("lastName = :1"; "H@")
$emp1:=$employees.at(2) //3ª entidade da seleção de entidades $employees
$emp2:=$employees.at(-3) //começando do final, 3ª entidade
    //da seleção de entidades $employees
```

<!-- END REF -->



<!-- REF EntitySelectionClass.average().Desc -->
## .average()

<details><summary>Histórico</summary>

| Release | Mudanças                                                |
| ------- | ------------------------------------------------------- |
| 18 R6   | Retorna indefinido se uma seleção de entidade for vazia |
| 17      | Adicionado                                              |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.average().Params -->
| Parâmetro     | Tipo |    | Descrição                                                                                                                                     |
| ------------- | ---- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------- |
| attributePath | Text | -> | Rota do atributo que se utilizará para o cálculo                                                                                              |
| Resultados    | Real | <- | Media aritmética (média) dos valores das entidades para o atributo (Não se define para uma entity selection vazia)|<!-- END REF -->

|

#### Descrição

A função `.average()` <!-- REF #EntitySelectionClass.average().Summary -->devolve a média aritmética (média) de todos os valores não nulos de *attributePath* na selecção de entidades<!-- END REF -->.

Passe no parâmetro *attributePath* a rota de atributo a avaliar.

Só são levados em consideração os valores numéricos para o cálculo. Lembre entretanto que se o *attributePath* da seleção de entidades conter tipos de valores mistos, `.average()` considera todos os elementos escalares para calcular o valor médio.
> Os valores de tipo Date são convertidos em valores numéricos (segundos) e são usados para calcular a média.

`.average()` retorna **undefined** se a seleção da entidade está vazia ou *attributePath* não contém valores numéricos.

Um erro é retornado se:

*   *attributePath* é um atributo relativo,
*   *attributePath* não se encontra na classe de dados da entity selection.


#### Exemplo

Se quisermos obter uma lista de funcionários cujo salário for superior ao salário médio:

```4d
 var $averageSalary : Real
 var $moreThanAv : cs. EmployeeSelection
 $averageSalary:=ds. Employee.all().average("salary")
 $moreThanAv:=ds. Employee.query("salary > :1";$averageSalary)
```

<!-- END REF -->



<!-- REF EntitySelectionClass.contains().Desc -->
## .contains()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.contains().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                                |
| ---------- | ---------- |:--:| ---------------------------------------------------------------------------------------- |
| entity     | 4D. Entity | -> | Entidade a ser avaliada                                                                  |
| Resultados | Parâmetros | <- | Truse se a entidade pertencer à entity selection, senão False|<!-- END REF -->

|

#### Descrição

A função `.contains()` <!-- REF #EntitySelectionClass.contains().Summary -->retorna true se a referência de entidade pertencer à seleção de entidade<!-- END REF -->e false de outra forma.

Em *entity*, especifique a entidade a buscar na entity selection. Se a entidade for Null, a função devolverá false.

Se *entity* e a entity selection não pertencerem à mesma dataclass, se produz um erro.

#### Exemplo

```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity

 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds. Employee.get(610)

 If($employees.contains($employee))
    ALERT("A entidade com chave primaria 610 tem um sobrenome começando com H")
 Else
    ALERT("A entidade com chave primária 610 não tem um sobrenome começando com H")
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.count().Desc -->
## .count()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->**.count**( *attributePath* : Text ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.count().Params -->
| Parâmetro     | Tipo |    | Descrição                                                                                            |
| ------------- | ---- |:--:| ---------------------------------------------------------------------------------------------------- |
| attributePath | Text | -> | Rota do atributo que se utilizará para o cálculo                                                     |
| Resultados    | Real | <- | Número de valores de *attributePath* que não são null na entity selection|<!-- END REF -->

|

#### Descrição

A função `.count()` <!-- REF #EntitySelectionClass.count().Summary -->retorna o número de entidades da seleção de entidades com um valor não nulo em *attributePath*<!-- END REF -->.
> Só são levados em consideração os valores escalares. Os valores de tipo objeto ou coleção são considerados valores nulos.

Um erro é retornado se:

*   *attributePath* é um atributo relativo,
*   *attributePath* não se encontra na classe de dados da entity selection.

#### Exemplo

Se quisermos encontrar o número total de empregados para uma empresa sem contar aqueles cujos titulos de mprego não foram especificados:

```4d
 var $sel : cs. EmployeeSelection
 var $count : Real

 $sel:=ds. Employee.query("employer = :1";"Acme, Inc")
 $count:=$sel.count("jobtitle")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.copy().Desc -->
## .copy()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->**.copy**( { *option* : Integer } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.copy().Params -->
| Parâmetro  | Tipo                |    | Descrição                                                |
| ---------- | ------------------- |:--:| -------------------------------------------------------- |
| option     | Integer             | -> | `ck shared`: devolve uma entity selection compartilhável |
| Resultados | 4D. EntitySelection | <- | Cópia da entity selection|<!-- END REF -->

|

#### Descrição

A função `.copy()` <!-- REF #EntitySelectionClass.copy().Summary -->retorna uma cópia da entity selection original<!-- END REF -->.

> Esta função não modifica a seleção de entidades original.

Como padrão, se omitir o parámetro *option*, a função devolve uma nova entity selection alterável (mesmo se a função se aplicar a uma entity selection compartilhável). Passe a constante `ck shared` no parâmetro *option* se quiser criar uma entity selection compartilhável.

> Para saber mais sobre propriedade compartilhável de entity selections, consulte [Entity selections compartilháveis ou modificáveis](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Exemplo

Se criar uma nova seleção de entidade vazia de produtos quando o formulário for carregado:

```4d
 Case of
    :(Form event code=On Load)
       Form.products:=ds. Products.newSelection()
 End case

```

Então esta seleção de entidades é atualizada com produtos e se quiser compartilhar os produtos entre vários processos. Se copiar a seleçãod a entidade Form.products como compartilhável:

```4d
 ...
  // A seleção de entidades de Form.products se atualiza
 Form.products.add(Form.selectedProduct)

 Use(Storage)
    If(Storage.products=Null)
       Storage.products:=New shared object()
    End if

    Use(Storage.products)
       Storage.products:=Form.products.copy(ck shared)
    End use
 End use
```

<!-- END REF -->


<!-- REF EntitySelectionClass.distinct().Desc -->
## .distinct()

<details><summary>Histórico</summary>

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 20      | Suporte de `dk count values` |
| 17      | Adicionado                   |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->**.distinct**( *attributePath* : Text { ; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.distinct().Params -->
| Parâmetro     | Tipo       |    | Descrição                                                       |
| ------------- | ---------- |:--:| --------------------------------------------------------------- |
| attributePath | Text       | -> | Rota do atributo cujos valores quer obter                       |
| options       | Integer    | -> | `dk diacritical`: avaliação diacríticos ("A" # "a" por exemplo) |
| Resultados    | Collection | <- | Coleção apenas com valores distintos|<!-- END REF -->

|

#### Descrição

A função `.distinct()` <!-- REF #EntitySelectionClass.distinct().Summary -->retorna uma coleção contendo apenas valores diferentes (distintos) em *attributePath* na seleção de entidade<!-- END REF -->.

A coleção retornada é ordenada automaticamente. Valores **Null** não são retornados.

No parámetro *attributePath*, passe o atributo de entidade cujos valores distintos queira obter. Só valores escalares (texto, número, booleano, ou data) podemser manejados. Tipos são retornados na ordem abaixo: Se *attributePath* levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois. Se *attributePath* levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1.  booleans
2.  strings
3.  números
4.  datas

Pode utilizar a notação `[]` para designar uma coleção quando *attributePath* for uma rota dentro de um objeto (ver exemplos).

*pathString* (Text) : Este parâmetro contém uma fórmula feita de rotas de atributo 1 a x (e opcionalmente) ordenação separado por vírgulas A sintaxe é:

| Parâmetros        | Valor | Comentário                                                                                                                                                                                                  |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk diacritical`  | 8     | A avaliação é sensível a maiúsculas e minúsculas e diferencia os caracteres acentuados. Como padrão, uma avaliação não-diacrítica é realizada.                                                              |
| `dk count values` | 32    | Devolve a contagem de entidades para cada valor distinto. Quando esta opção é passada, `.distinct()` devolve uma colecção de objectos contendo um par de propriedades `{"value":*value*; "count":*count*}`. |

:::note

A opção `dk count values` só está disponível com atributos de armazenamento do tipo booleano, cadeia de caracteres, número e data.

:::

Um erro é retornado se:

*   *attributePath* é um atributo relativo,
*   *attributePath* não se encontra na classe de dados da entity selection.

#### Exemplos

Se quiser obter uma coleção que contenha um só elemento por nome de país:

```4d
var $countries : Collection
 $countries:=ds. Employee.all().distinct("address.country")
```

`nicknames` é uma coleção e `extra` for um atributo de objeto:

```4d
$values:=ds. Employee.all().distinct("extra.nicknames[].first")
```

Pretende obter o número de nomes de funções diferentes na empresa:

```4d
var $jobs : Collection
$jobs:=ds. Employee.all().distinct("jobName";dk count values)  
//$jobs[0]={"value":"Developer";"count":17}
//$jobs[1]={"value":"Office manager";"count":5}
//$jobs[2]={"value":"Accountant";"count":2}
//...
```



<!-- END REF -->


<!-- REF EntitySelectionClass.distinctPaths().Desc -->
## .distinctPaths()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.distinctPaths().Syntax -->**.distinctPaths**( *attribute* : Text ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.distinctPaths().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                       |
| ---------- | ---------- |:--:| --------------------------------------------------------------- |
| atributo   | Text       | -> | Nome do atributo do objecto cujos caminhos pretende obter       |
| Resultados | Collection | <- | Nova colecção com caminhos distintos|<!-- END REF -->


|


#### Descrição

A função `.distinct()` <!-- REF #EntitySelectionClass.distinctPaths().Summary -->returns a collection containing only distinct (different) values from the *attributePath* in the entity selection<!-- END REF -->.

*attributePath* não se encontra na classe de dados da entity selection.

Após a chamada, o tamanho da colecção devolvida é igual ao número de caminhos distintos encontrados em *attribute* para a selecção da entidade. Os caminhos são devolvidos como cadeias de caracteres, incluindo atributos e colecções aninhados, por exemplo "info.address.number" ou "children[].birthdate". As entidades com um valor nulo no *attribute* não são tidas em conta.

#### Exemplo

*attributePath* for um atributo relativo,

```4d
var $paths : Collection
$paths:=ds. Employee.all().distinctPaths("fullData")
//$paths[0]="age"
//$paths[1]="Children"
//$paths[2]="Children[].age"
//$paths[3]="Children[].name"
//$paths[4]="Children.length"
///...
```




:::note

*attributePath* for um atributo relativo,

:::

<!-- END REF -->



<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->**.drop**( { *mode* : Integer } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.drop().Params -->
| Parâmetro  | Tipo                |    | Descrição                                                                                                                                         |
| ---------- | ------------------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode       | Integer             | -> | `dk stop dropping on first error`: para a execução do método na primeira entidade não eliminável                                                  |
| Resultados | 4D. EntitySelection | <- | Entidade de seleção vazia se for executada com êxito, se nenhuma entity selection contendo as entidades não elimináveis<!-- END REF -->

|

#### Descrição

A função `.drop()` <!-- REF #EntitySelectionClass.drop().Summary -->remove as entidades pertencendo à seleção de entidade da tabela relacionada a dataclasse dentro da datastore<!-- END REF -->. A entity selection permanece na memória.
> A eliminação de entidades é permanente e não pode ser desfeita. É recomendado chamar esta ação em uma transação para ter uma opção de recuperação.

Se encontrar uma entidade bloqueada durante a execução de `.drop()`, não é eliminado. Como padrão o método processa todas as entidades da seleção de entidades e retorna as entidades não elimináveis na entity selection. Se quiser que o método pare a execução na primeira entidade não eliminável encontrada, passe a constante `dk stop dropping on first error` no parâmetro *mode*.


#### Exemplo

Exemplo sem a opção `dk stop dropping on first error`:

```4d
 var $employees; $notDropped : cs. EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped for uma entity selection que contém todas as entidades não suprimidas
 If($notDropped.length=0) //A ação de eliminação for exitosa, todas as entidades foram eliminadas
    ALERT("You have dropped "+String($employees.length)+" employees") //A seleção de entidades eliminada permanece na memoria
 Else
    ALERT("Problem during drop, try later")
 End if
```

Exemplo com a opção `dk stop dropping on first error`:

```4d
 EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped for uma entity selection que contém todas as entidades não suprimidas
 If($notDropped.length=0) //A ação de eliminação for exitosa, todas as entidades foram eliminadas
    ALERT("You have dropped "+String($employees.length)+" employees") //A seleção de entidades eliminada permanece na memoria
 Else
    ALERT("Problem during drop, try later")
 End if var $employees; $notDropped : cs.
```


<!-- END REF -->



<!-- REF EntitySelectionClass.extract().Desc -->
## .extract()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>







<!-- REF #EntitySelectionClass.extract().Syntax -->
**.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.extract().Params -->
| Parâmetro     | Tipo       |    | Descrição                                                                            |
| ------------- | ---------- |:--:| ------------------------------------------------------------------------------------ |
| attributePath | Text       | -> | Rota de atributo cujos valores serão extraídos para nova coleção                     |
| targetpath    | Text       | -> | Rota ou nome do atributo objetivo                                                    |
| option        | Integer    | -> | `ck keep null`: inclui os atributos null na coleção devolvida (ignorados por padrão) |
| Resultados    | Collection | <- | Coleção contendo valores extraídos<!-- END REF -->

|

#### Descrição

A função `.extract()` <!-- REF #EntitySelectionClass.extract().Summary -->retorna uma coleção contendo *attributePath* valores extraídos da seleção de entidade<!-- END REF -->.

*attributePath* pode ser:

*   um atributo escalar de dataclass,
*   entidade relacionada,
*   entidades relacionadas.

Se *attributePath* não for válido, se devolve uma coleção vazia.

Esta função aceita duas sintaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

Com esta sintaxe, `.extract()` preenche a coleção devolvida com os valores *attributePath* da entity selection.

Como padrão, as entidades para as que *attributePath* for*null* ou indefinida são ignoradas na coleção resultante. Pode passar a constante `ck keep null` no parâmetro *option* para incluir esses valores como elementos**null**  na coleção retornada.

*   Os atributos dataclass com [.kind](DataClassClass.md#attributename) = "relatedEntity" são extraídos como uma coleção de entidades (as duplicações são mantidas).
*   Os atributos dataclass com [.kind](DataClassClass.md#attributename) = "relatedEntities" se extraem como uma entity selection.


**Atributos de Dataclass com [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" extraídos como uma coleção de entidades (duplicações são mantidas).**

Com esta sintaxe, `.extract()` preenche a coleção devolvida com as propriedades *attributePath* da entity selection. Cada elemento da coleção devolvida é um objeto com as propriedades *targetPath* preenchidas com as propriedades *attributePath* correspondentes. Se mantém os valores null (o parámetro *option* se ignora) com esta sintaxe.

Se vários *attributePath*, forem dados, deve dar um *targetPath* para cada um. Só se extraem os pares válidos \[*attributePath*, *targetPath*].

*   Atributos de dataclass com [.kind](DataClassClass.md#attributename) = "relatedEntities" são extraídas como coleção de seleção de entidades.
*   Os atributos dataclass com [.kind](DataClassClass.md#attributename) = "relatedEntities" são extraídos como uma seleção de entidade.

> As entidades de uma colecção de entidades acedidas por \[ ] não são recarregadas da base de dados.


#### Exemplo

Dada a seguinte tabela e relação:

![](../assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  //$firstnames é uma coleção de Strings


 $firstnames:=ds. Teachers.all().extract("firstname")
  //
  //$addresses é uma coleção de entities relacionadas ao dataclass Address
  //Valores Null para o endereço são extraídos
 $addresses:=ds. Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing é uma coleção de objetos com propriedades "who" e "to"
  //conteúdo propriedade "who" é do tipo String
  //conteudo propriedade "to" é do tipo entity (Address dataclass)
 $mailing:=ds. Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing é uma coleção de objetos com propriedades "who" e "city"
  //conteúdo propriedade "who" é tipo String
  //conteúdo propriedade "city" é tipo String
 $mailing:=ds. Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers é uma coleção de objetos com propriedades "where" e "who"
  //conteúdo propriedade "where" é String
  //conteúdo propriedade "who" é uma entity selection (Teachers dataclass)
 $teachers:=ds. Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers é uma coleção de entity selections
 $teachers:=ds. Address.all().extract("teachers")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.first().Desc -->
## .first()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->**.first()** : 4D. Entity<!-- END REF -->


<!-- REF #EntitySelectionClass.first().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                                                   |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referência à primeira entidade da seleção de entidade (Null se seleção for vazia)<!-- END REF -->

|

#### Descrição

A função `.first()` <!-- REF #EntitySelectionClass.first().Summary -->devolve uma referência à entidade na primeira posição da selecção de entidades<!-- END REF -->.

O resultado desta função é similar a:

```4d
 $entity:=$entitySel[0]
```

Há, entretanto, uma diferença entre ambas as afirmações quando a seleção estiver vazia:


```4d
 var $entitySel : cs. EmpSelection
 var $entity : cs. EmpEntity
 $entitySel:=ds. Emp.query("lastName = :1";"Nonexistentname") //nenhuma entity correspondente
  //entity selection é esvaziada
 $entity:=$entitySel.first() //retorna Null
 $entity:=$entitySel[0]  //gera um erro
```

#### Exemplo


```4d
 var $entitySelection : cs. EmpSelection
 var $entity : cs. EmpEntity
 $entitySelection:=ds. Emp.query("salary > :1";100000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.first()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->**.getDataClass()** : 4D. DataClass<!-- END REF -->


<!-- REF #EntitySelectionClass.getDataClass().Params -->
| Parâmetro  | Tipo          |    | Descrição                                                                         |
| ---------- | ------------- |:--:| --------------------------------------------------------------------------------- |
| Resultados | 4D. DataClass | <- | Objeto dataclass ao qual a seleção de entidade pertence<!-- END REF -->

|

#### Descrição

A função `.getDataClass()` <!-- REF #EntitySelectionClass.getDataClass().Summary -->retorna a dataclass da entity selection<!-- END REF -->.

Esta função é principalmente útil  no contexto do código genérico.

#### Exemplo

O seguinte código genérico duplica todas as entidades da entity selection:

```4d
  //duplicate_entities method
  //duplicate_entities($entity_selection)

 #DECLARE ( $entitySelection : 4D. EntitySelection )  
 var $dataClass : 4D. DataClass
 var $entity; $duplicate : 4D. Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null //reset the primary key
    $status:=$duplicate.save()
 End for each
```

<!-- END REF -->

<!-- REF EntitySelectionClass.getRemoteContextAttributes().Desc -->
## .getRemoteContextAttributes()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19R5    | Adicionado |

</details>

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->


<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Params -->
| Parâmetro | Tipo |    | Descrição                                                                                                   |
| --------- | ---- | -- | ----------------------------------------------------------------------------------------------------------- |
| resultado | Text | <- | Atributos de contexto conectados à seleção de entidade, separados por uma vírgula<!-- END REF -->

|

> **Modo avançado:** Esta função destina-se a programadores que necessitem personalizar as características padrão ORDA para configurações específicas. Na maioria dos casos, não necessitará de o utilizar.


#### Descrição

A função `.touchedAttributes()` <!-- REF #EntitySelectionClass.getRemoteContextAttributes().Summary -->retorna informação sobre o contexto de otimização usados pela seleção de entidade<!-- END REF -->.

Se não houver [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) para a seleção de entidade, a função retorna um Texto vazio.

#### Exemplo

```4d
var $ds : 4D. DataStoreImplementation
var $persons : cs. PersonsSelection
var $p : cs. PersonsEntity

var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds. Persons.all()
$text:="" For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / " End for each

$info:=$persons.getRemoteContextAttributes()
//$info = "firstname,address,address.city"
```

#### Veja também

[Entity.getRemoteContextAttributes()](./EntityClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntitySelectionClass.isAlterable().Desc -->
## .isAlterable()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->**.isAlterable()** : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.isAlterable().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se a seleção de entidades for alterável, senão False<!-- END REF -->

|

#### Descrição

A função `.isAlterable()` <!-- REF #EntitySelectionClass.isAlterable().Summary -->retorna True se a seleção de entidade for alterável<!-- END REF -->, e False se a seleção de entidade não for alterável.

Para mais informação, consulte a seção [Entity selections compartilháveis ou modificáveis](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Exemplo

Vai mostrar `Form.products` em uma [list box](FormObjects/listbox_overview.md) para que o usuário possaa adicionar novos produtos. Se quiser ter certeza que é alterável para que o usuário possa adicionar novos produtos sem erro:

```4d
If (Not(Form.products.isAlterable()))
    Form.products:=Form.products.copy()
End if
...
Form.products.add(Form.product)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.isOrdered().Desc -->
## .isOrdered()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->**.isOrdered()** : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.isOrdered().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                         |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------- |
| Resultados | Parâmetros | <- | True se a seleção de entidade for ordenada, senão False<!-- END REF -->

|

#### Descrição

A função `.isOrdered()` <!-- REF #EntitySelectionClass.isOrdered().Summary -->devolve True se a entity selection estiver ordenada<!-- END REF -->, e False se não for ordenada.
> Esta função devolve sempre True quando a selecção da entidade provém de um datastore remoto.

Para mais informação, consulte [Entity selection ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).


#### Exemplo


```4d
 EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped for uma entity selection que contém todas as entidades não suprimidas
 If($notDropped.length=0) //A ação de eliminação for exitosa, todas as entidades foram eliminadas
    ALERT("You have dropped "+String($employees.length)+" employees") //A seleção de entidades eliminada permanece na memoria
 Else
    ALERT("Problem during drop, try later")
 End if var $employees; $notDropped : cs.
```



<!-- END REF -->


<!-- REF EntitySelectionClass.last().Desc -->
## .last()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->Parâmetros<!-- END REF -->


<!-- REF #EntitySelectionClass.last().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                                                         |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------------------------------------- |
| Resultados | 4D. Entity | <- | Referência à última entidade da seleção de entidade (Null se seleção de entidade vazia)<!-- END REF -->

|

#### Descrição

A função `.last()` <!-- REF #EntitySelectionClass.last().Summary -->retorna uma referência à entidade na últim aposição da seleção de entidade<!-- END REF -->.

O resultado desta função é similar a:

```4d
 $entity:=$entitySel[length-1]
```

Se a entity selection estiver vazia, a função devolve Null.



#### Exemplo


```4d
 var $entitySelection : cs. EmpSelection
 var $entity : cs. EmpEntity
 $entitySelection:=ds. Emp.query("salary < :1";50000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.last()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.length.Desc -->
## .length

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->**.length** : Integer<!-- END REF -->


#### Descrição

A propriedade `.length` <!-- REF #EntitySelectionClass.length.Summary -->retorna o número de entidades na seleção de entidade<!-- END REF -->. Se a entity selection estiver vazia, devolve 0.

As entity selections sempre têm uma propriedade `.length`.

> Para saber o número total de entidades em uma dataclasse, é recomendado usar a função [`getCount()`](DataClassClass.md#getcount) que é mais otimizada que a expressão `ds.myClass.all().length`.

#### Exemplo

```4d
 var $vSize : Integer
 $vSize:=ds. Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" male employees found.")
```


<!-- END REF -->


<!-- REF EntitySelectionClass.max().Desc -->
## .max()

<details><summary>Histórico</summary>

| Release | Mudanças                                                |
| ------- | ------------------------------------------------------- |
| 17      | Adicionado                                              |
| 18 R6   | Retorna indefinido se uma seleção de entidade for vazia |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->**.max**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.max().Params -->
| Parâmetro     | Tipo |    | Descrição                                         |
| ------------- | ---- | -- | ------------------------------------------------- |
| attributePath | Text | -> | Rota do atributo que se utilizará para o cálculo  |
| Resultados    | any  | <- | Maior valor do atributo<!-- END REF -->

|

#### Descrição

A função `.max()` <!-- REF #EntitySelectionClass.max().Summary -->retorna o valor mais alto (ou máximo) entre todos os valores de *attributePath* na seleção de entidade<!-- END REF -->. De facto, devolve o valor da última entidade da selecção de entidades, tal como seria ordenada por ordem crescente utilizando a função [`.orderBy()`](#orderby).

Se passar em *attributePath* uma rota a uma propriedade de objeto que contenha diferentes tipos de valores, a função `.max()` devolverá o valor máximo dentro do primeiro tipo escalar na ordem da lista de tipos 4D como padrão (ver a descrição de [`.sort()`](CollectionClass.md#sort)).

`.max()` devolve **undefined** se a entity selection estiver vazia ou *attributePath* não for encontrado no atributo de objeto.


Um erro é retornado se:

*   *attributePath* é um atributo relativo,
*   *attributePath* não se encontra na classe de dados da entity selection.



#### Exemplo

Se quisermos encontrar o maior salário entre as funcionárias mulheres:

```4d
 var $sel : cs. EmpSelection
 var $maxSalary : Real
 $sel:=ds. Employee.query("gender = :1";"female")
 $maxSalary:=$sel.max("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.min().Desc -->
## .min()

<details><summary>Histórico</summary>

| Release | Mudanças                                                |
| ------- | ------------------------------------------------------- |
| 17      | Adicionado                                              |
| 18 R6   | Retorna indefinido se uma seleção de entidade for vazia |


</details>

<!-- REF #EntitySelectionClass.min().Syntax -->**.min**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.min().Params -->
| Parâmetro     | Tipo |    | Descrição                                          |
| ------------- | ---- |:--:| -------------------------------------------------- |
| attributePath | Text | -> | Rota do atributo que se utilizará para o cálculo   |
| Resultados    | any  | <- | Menor valor do atributo|<!-- END REF -->

|

#### Descrição

A função `.min()` <!-- REF #EntitySelectionClass.min().Summary --> retorna o menor valor (mínimo) entre todos os valores de attributePath na seleção de entidade<!-- END REF -->.  De facto, devolve a primeira entidade da selecção de entidades, tal como seria ordenada por ordem ascendente utilizando a função [`.orderBy()`](#orderby) (excluindo os valores **null**).

Se passar em *attributePath* uma rota a uma propriedade objeto que contenha diferentes tipos de valores, a função `.min()` devolverá o valor mínimo dentro do primeiro tipo de valor escalar na ordem da lista de tipos (ver a descrição de [`.sort()`](CollectionClass.md#sort)).

`.min()` retorna **undefined** se a seleção entidade for vazia ou se *attributePath* não for encontrado no atributo objeto.

Um erro é retornado se:

*   *attributePath* é um atributo relativo,
*   *attributePath* não se encontra na classe de dados da entity selection.


#### Exemplo

Neste exemplo, se quisermos encontrar o menor salário entre todos os funcionários mulheres:

```4d
 var $sel : cs. EmpSelection
 var $minSalary : Real
 $sel:=ds. Employee.query("gender = :1";"female")
 $minSalary:=$sel.min("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.minus().Desc -->
## .minus()

<details><summary>Histórico</summary>

| Release | Mudanças                         |
| ------- | -------------------------------- |
| 18 R6   | Suporte do parâmetro *keepOrder* |
| 17      | Adicionado                       |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->**.minus**( *entity* : 4D. Entity { ; *keepOrder* : Integer } ) : 4D. EntitySelection<br/>**.minus**( *entitySelection* : 4D. EntitySelection { ; *keepOrder* : Integer } ) : 4D.<!-- END REF -->


<!-- REF #EntitySelectionClass.minus().Params -->
| Parâmetro       | Tipo                |    | Descrição                                                                                                |
| --------------- | ------------------- |:--:| -------------------------------------------------------------------------------------------------------- |
| entity          | 4D. Entity          | -> | Entidade a substrair                                                                                     |
| entitySelection | 4D. EntitySelection | -> | seleção de entidade a subtrair                                                                           |
| keepOrder       | Integer             | -> | `dk keep ordered` (inteiro) para manter a ordem inicial na seleção de entidade resultado                 |
| Resultados      | 4D. EntitySelection | <- | Nova seleção de entidade ou uma nova referência na seleção entidade existente.<!-- END REF -->

|

#### Descrição

A função `.minus()` <!-- REF #EntitySelectionClass.minus().Summary -->exclui da seleção de entidade que é aplicada a *entity* ou as entidaddes de *entitySelection* e retorna a seleção de entidade resultante<!-- END REF -->.

*   Se passar *entity* como parâmetro, a função cria uma nova seleção de entidade sem *entity* (se *entity* pertencer à seleção de entidade). Se *entity* não for incluída na seleção de entidade original, uma nova referência para a seleção de entidade é retornada.
*   Se a entity selection não estiver ordenada, *entity* se adiciona em qualquer lugar da seleção, sem uma ordem específica. > > Pode comparar [entity selections ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

Como padrão, se omitir o parâmetro *keepOrder* , a seleção de entidade resultado não é ordenada. Se quiser manter a ordem da seleção de entidade original (por exemplo se quiser reutilizar a seleção de entidade em uma interface de usuário) passe a constante `dk keep ordered` em *keepOrder*. Neste caso, o resultado é uma seleção de entidade ordenada e a ordem da seleção de entidade inicial é mantida

:::note

Se passar `dk keep ordered` em *keepOrder* e removida *entitySelection* contém entidades duplicadas na seleção de entidade original, todas as ocorrências da duplicada são removidas.

:::

Se a seleção de entidade original ou tanto a seleção de entidade quanto o parâmetro *entitySelection* vazios e uma seleção de entidade vazia é retornada.

Se *entitySelection* estiver vazia ou se *entity* for Null, uma nova referência à seleção de entidade original for retornada.

Se a entity selection inicial e o parâmetro não forem relacionados com a mesma dataclass, se produz um erro.


#### Exemplo 1

```4d
 var $employees : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity

 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@") // Devuelve "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.
```


#### Exemplo 2

Se quisermos ter uma seleção de empregados mulheres que se chamam "Jones" que vivem em Nova York:

```4d
 var $sel1; $sel2; $sel3 : cs. EmployeeSelection
 $sel1:=ds. Employee.query("name =:1";"Jones")
 $sel2:=ds. Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds. Employee.query("gender='male'"))
```

#### Exemplo 3

Em uma interface de usuário se tivermos uma lista que exibe itens em uma ordem específica. Se o usuário selecionar itens na lista para remove-los, a ordem deve ser mantida quando refrescar a lista:

```4d
Employee.newSelection(dk keep ordered)
 $employee:=ds.
```

<!-- END REF -->


<!-- REF EntitySelectionClass.or().Desc -->
## .or()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.or().Syntax -->**.or**( *entity* : 4D. Entity ) : 4D. EntitySelection<br/>**.or**( *entitySelection* : 4D. EntitySelection ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.or().Params -->
| Parâmetro       | Tipo                |    | Descrição                                                                                                 |
| --------------- | ------------------- |:--:| --------------------------------------------------------------------------------------------------------- |
| entity          | 4D. Entity          | -> | Entidade a intersectar                                                                                    |
| entitySelection | 4D. EntitySelection | -> | Entity selection a intersectar                                                                            |
| Resultados      | 4D. EntitySelection | <- | Nova seleção de entidade ou nova referência para a seleção de entidade original<!-- END REF -->

|

#### Descrição

A função `.or()` <!-- REF #EntitySelectionClass.or().Summary -->combina a seleção de entidade com *entity* ou parâmetro*entitySelection* usando o operador lógico (não exclusivo) OR<!-- END REF -->; retorna uma nova seleção de entidade não ordenada que contenha todas as entidades da seleção de entidade e o parâmetro.

*   Se passar como parâmetro *entitySelection* pode comparar seleções de entidade. Se a entidade pertencer à selecção de entidades, é devolvida uma nova referência à selecção de entidades. Senão, uma nova seleção de entidade contém a seleção de entidade original e a entidade é retornada.
*   Se a seleção de entidade original e o parâmetro *entitySelection* for vazio, uma seleção de entidade vazia é retornada. Se a seleção de entidade original for vazia, uma referência a  *entitySelection* ou uma seleção de entidade contendo apenas *entity* será retornada.
> > > Pode comparar [entity selections ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). A seleção resultante é sempre desordenada.

A seleção de entidade retornada contém as entidades especificadas por *startFrom* e todas as entidades subsequentes até, mas não incluindo, a entidade especificada por *end*. Se só o parâmetro *startFrom* for especificado, a entidade de seleção retornada contém todas as entidades de *startFrom* à última entidade da seleção de entidade original.

Se *entitySelection* estiver vazia ou se *entity* for Null, uma nova referência à seleção de entidade original for retornada.

Se a entity selection inicial e o parâmetro não forem relacionados com a mesma dataclass, se produz um erro.


#### Exemplo 1

```4d
 var $employees1; $employees2; $result : cs. EmployeeSelection
 $employees1:=ds. Employee.query("lastName = :1";"H@") //Returns "Colin Hetrick","Grady Harness"
 $employees2:=ds. Employee.query("firstName = :1";"C@") //Returns "Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contains "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Exemplo 2

```4d
 var $employees; $result : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity
 $employees:=ds. Employee.query("lastName = :1";"H@") // Devuelve "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds. Employee.get(686) //a entidade com chave primária 686 não pertence a entity selection $employees 
  //Coincide com a funcionária "Mary Smith"

 $result:=$employees.or($employee) //$result contém "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```

<!-- END REF -->


<!-- REF EntitySelectionClass.orderBy().Desc -->
## .orderBy()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.orderBy().Syntax -->**.orderBy**( *pathString* : Text ) : 4D. EntitySelection<br/>**.orderBy**( *pathObjects* : Collection ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.orderBy().Params -->
| Parâmetro   | Tipo                |    | Descrição                                                                  |
| ----------- | ------------------- |:--:| -------------------------------------------------------------------------- |
| pathString  | Text                | -> | Rota(s) de atributos e instruções de classificação para a entity selection |
| pathObjects | Collection          | -> | Coleção de objetos criterio                                                |
| Resultados  | 4D. EntitySelection | <- | Nova entity selection na ordem especificada|<!-- END REF -->

|

#### Descrição

A função `.orderBy()` <!-- REF #EntitySelectionClass.orderBy().Summary -->retorna uma nova seleção de entidade ordenada contendo todas as entidades da seleção de entidade na ordem especificada por *pathString* ou critérios*pathObjects*<!-- END REF -->.
> * Este método não modifica a seleção de entidade original
> * Para saber mais sobre propriedade compartilhável de entity selections, consulte [Entity selections compartilháveis ou modificáveis](ORDA/entities.md#shareable-or-alterable-entity-selections).

Deve usar um parâmetro critério para definir como as entidades são ordenadas. Dois parâmetros diferentes são compatíveis:

*   *pathString* (Text) : Este parâmetro contém uma fórmula feita de rotas de atributo 1 a x (e opcionalmente) ordenação separado por vírgulas. A sintaxe é:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

A ordem na qual os atributos forem passados determina a prioridade de ordenação das entidades. Como padrão, atributos são ordenados em ordem ascendente. Pode definir a ordem de clasificação de uma propriedade na string de critérios, separado da rota da propriedade por um só espaço: passe "asc" para ordenar em ordem ascendente ou "desc" em ordem descendente.

*   *pathObjects* (collection): cada elemento da coleção contém um objeto estruturado da seguinte maneira:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

Como padrão, atributos são ordenados em ordem ascendente ("descendente" é false)

Pode adicionar quantos objetos quiser nos critérios da coleção.
> Valores null são avaliados como menor que outros valores.

Se for passado um caminho de atributo inválido em *pathString* ou *pathObject*, a função devolve uma selecção de entidade vazia.


#### Exemplo


```4d
// ordenar por fórmula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // ordenar por colecção com ou sem ordenação
 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"firstName";"descending";False))
 $orderColl.push(New object("propertyPath";"salary";"descending";True))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)

 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"manager.lastName"))
 $orderColl.push(New object("propertyPath";"salary"))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.orderByFormula().Desc -->
## .orderByFormula()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R6   | Adicionado |

</details>

<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br/>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.orderByFormula().Params -->
| Parâmetro     | Tipo                |    | Descrição                                                   |
| ------------- | ------------------- |:--:| ----------------------------------------------------------- |
| formulaString | Text                | -> | Formula string                                              |
| formulaObj    | Object              | -> | Objecto fórmula                                             |
| sortOrder     | Integer             | -> | `dk ascending` (normal) ou `dk descending`                  |
| settings      | Object              | -> | Parâmetros da fórmula                                       |
| Resultados    | 4D. EntitySelection | <- | Nova seleção de entidade ordenada<!-- END REF -->

|

#### Descrição

A função `.orderByFormula()` <!-- REF #EntitySelectionClass.orderByFormula().Summary -->devolve uma nova entity selection ordenada<!-- END REF --> **.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.
> Esta função não modifica a seleção de entidades original.

Pode usar *formulaString* ou um parâmetro *formulaObj*:

- *formulaString*: passa uma expressão 4D como "Year of(this.birthDate)".
- *formulaObj*: passa um objeto fórmulada valida criado usando `Formula` ou `Formula from string`.

*formulaString* ou*formulaObj* é executado para cada entidade da seleção de entidade e seu resultado é usado para definir a posição da entidade na seleção de entidade retornada.. O resultado deve ser um tipo ordenavel (booleano, data, número, texto, hora, null).
> Um resultado nullé sempre o menor valor.

Como padrão, se omitir o parâmetro *keepOrder*, a seleção de entidade resultado é ordenada de forma ascendente. Opcionalmente pode passar um dos valores abaixo no parâmetro *sortOrder*:

| Parâmetros    | Valor | Comentário                |
| ------------- | ----- | ------------------------- |
| dk ascending  | 0     | Ordem ascendente (padrão) |
| dk descending | 1     | Ordem descendente         |

Dentro de *formulaString* ou *formulaObj*, a entidade processada e seus atributos estão disponíveis através do comando `This` (por exemplo, `This.lastName`).

Pode passar parâmetro(s) à fórmula usando a propriedade (objecto) `args` do parâmetro `settings`: a fórmula recebe o objecto `settings.args` em $1.

#### Exemplo 1

Ordenar estudantes usando uma fórmula fornecida como texto:

```4d
 var $es1; $es2 : cs. StudentsSelection
 $es1:=ds. Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascending by default
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

Mesma ordem mas usando objeto fórmula:

```4d
 var $es1; $es2 : cs. StudentsSelection
 var $formula : Object
 $es1:=ds. Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // ascending by default
 $es2:=$es1.orderByFormula($formula;dk descending)
```


#### Exemplo 2

Uma fórmula é dada como um objecto de fórmula com parâmetros; `settings.args` objecto é recebido como $1 no método ***computeAverage***.

Neste exemplo, o objeto campo "marks" em **Students** dataClass contém as notas de estudantes para cada tema. Um objeto fórmula é usado para computar a média das notas dos estudantes com coeficientes diferentes para schoolA e schoolB

```4d
 var $es1; $es2 : cs. StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds. Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() //settings object
 $schoolA.args:=New object("english";1;"math";1;"history";1) // Coefficients to compute an average

  //Order students according to school A criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() //settings object
 $schoolB.args:=New object("english";1;"math";2;"history";3) // Coefficients to compute an average

  //Order students according to school B criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // método computeAverage
  // -----------------------------
 #DECLARE ($coefList : Object) -> $result : Integer
 var $subject : Text
 var $average; $sum : Integer

 $average:=0
 $sum:=0

 For each($subject;$coefList)
    $sum:=$sum+$coefList[$subject]
 End for each

 For each($subject;This.marks)
    $average:=$average+(This.marks[$subject]*$coefList[$subject])
 End for each

 $result:=$average/$sum
```

<!-- END REF -->



<!-- REF EntitySelectionClass.query().Desc -->
## .query()

<details><summary>Histórico</summary>

| Release | Mudanças                               |
| ------- | -------------------------------------- |
| 17 R6   | Soporte dos Parâmetros Formula         |
| 17 R5   | Suporte dos marcadores para os valores |
| 17      | Adicionado                             |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D. EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.query().Params -->
| Parâmetro     | Tipo                |    | Descrição                                                                                                                                                                       |
| ------------- | ------------------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text                | -> | Criterios de pesquisa como string                                                                                                                                               |
| formula       | Object              | -> | Criterios de pesquisa como objeto fórmula                                                                                                                                       |
| value         | any                 | -> | Valores a usar para placeholders indexados                                                                                                                                      |
| querySettings | Object              | -> | Opções de pesquisa: parâmetros, atributos, args, allowFormulas, contexto, queryPath,queryPlan                                                                                   |
| Resultados    | 4D. EntitySelection | <- | Nova seleção de entidade feita de entidades da seleção de entidade que satisfazem o critério de pesquisa especificado em  *queryString* ou *formula*|<!-- END REF -->

|

#### Descrição

A função `.query()` <!-- REF #EntitySelectionClass.query().Summary -->pesquisa por entidades que satisfazem o critério de pesquisa especificado em *queryString* ou *formula* e (opcionalmente) *value*(s) entre todas as entidades na seleção de entidade<!-- END REF -->, e retorna um novo objeto de tipo `EntitySelection` contendo todas as entidades que foram encontradas. Se aplica carregamento diferido/lazy loading.
> Esta função não modifica a seleção de entidades original.

Se não houver entidades correspondentes encontradas, uma `EntitySelection` vazia é retornada.


para informações detalhadas de como usar *queryString*, *value*e *querySettings*, veja a descrição DataClass [`.query()`](DataClassClass.md#query).
> Como padrão se omitir **order by** em *queryString*, a seleção de entidade retornada é [não ordenada](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). Note entretanto que em modo Cliente Servidor funciona como uma seleção de entidade ordenada (entidades são adicionadas no final da seleção)

#### Exemplo 1


```4d
 var $entitySelectionTemp : cs. EmployeeSelection
 $entitySelectionTemp:=ds. Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```


#### Exemplo 2

A maioria dos exemplos de pesquisa podem ser encontrados na página DataClass [`.query()`](DataClassClass.md#query) .

#### Veja também

[`.query()`](DataClassClass.md#query) para dataclass

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPath.Desc -->
## .queryPath

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->**.queryPath** : Text<!-- END REF -->


#### Descrição

A propriedade `.queryPath` <!-- REF #EntitySelectionClass.queryPath.Summary -->contém uma descrição detalhada da pesquisa como foi realizada em 4D<!-- END REF -->. Esta propriedade está disponível para objectos `EntitySelection` gerados através de consultas se a propriedade `"queryPath":true` tiver sido passada no parâmetro *querySettings* da função [`.query()`](#query).

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.md#query) page.

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPlan.Desc -->
## .queryPlan

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.queryPlan.Syntax -->**.queryPlan** : Text<!-- END REF -->



#### Descrição

A propriedade `.queryPlan` <!-- REF #EntitySelectionClass.queryPlan.Summary --> contém uma descrição detalhada da pesquisa antes da execução (ou seja, a pesquisa planejada)<!-- END REF -->. Esta propriedade é disponível para objetos `EntitySelection` gerados através de pesquisas se a propriedade `"queryPlan":true` for passada no parâmetro *querySettings* da função [`.query()`](#query).

Para saber mais veja o parágrafo **querySettings parameter** na página Dataclass[`.query()`](DataClassClass.html#query).

<!-- END REF -->


<!-- REF EntitySelectionClass.refresh().Desc -->
## .refresh()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->**.refresh()**<!-- END REF -->


<!-- REF #EntitySelectionClass.refresh().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

#### Descrição
> Esta função só funciona com datastore remota (cliente / servidor ou conexão`Open datastore` ).

A função `.refresh()` <!-- REF #EntitySelectionClass.refresh().Summary -->imediatamente "invalida" os dados da seleção de entidade na cache local ORDA<!-- END REF --> de forma que na próxima vez que 4D exige a seleção de entidade será recarregada da database.

Como padrão, a cache ORDA local é invaidade depois de 30 segundos. No contexto de aplicações cliente/servidor usando ORDA e a linguagem clássica, este método permite assegurar que a aplicação remota vai sempre funcionar com os últimos dados.

#### Exemplo 1

Neste exemplo, clássico e ORDA modifica os mesmos dados simultaneamente.

```4d
 //On a 4D remote

 var $selection : cs. StudentsSelection
 var $student : cs. StudentsEntity

 $selection:=ds. Students.query("lastname=:1";"Collins")
  //A primeira entidade é carregada na cache ORDA
 $student:=$selection.first()

  //Atualizar com clássico 4D, ORDA cache não está se
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //pra obter a última versão a cache ORDA deve ser invalidada
 $selection.refresh()
  // Mesmo se cache não for expirada, a primeira entidade é carregada do disco
 $student:=$selection.first()

  //$student.lastname contains "Colin"
```


#### Exemplo 2

Uma list box exibe a seleção de entidade Form.students e vários clientes trabalham nele.

```4d
// Método de formulário:
 Case of
    :(Form event code=On Load)
       Form.students:=ds. Students.all()
 End case
  //
  //
  // Em client #1, o usuário carrega atualiza e salva a primeira entidade
  // Em client #2, o usuário carrega atualiza e salva a mesma entidade
  //
  //
  // Em client #1:
 Form.students.refresh() // Invalida a cache ORDA para a seleção de entidade Form.students
  // O conteúdo list box é atualizado na database com atuaização feita pelo  client #2
```


<!-- END REF -->


<!-- REF EntitySelectionClass.selected().Desc -->
## .selected()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R3   | Adicionado |

</details>

<!-- REF #EntitySelectionClass.selected().Syntax -->**.selected**( *selectedEntities* : 4D. EntitySelection ) : Object<!-- END REF -->


<!-- REF #EntitySelectionClass.selected().Params -->
| Parâmetro  | Tipo                |    | Descrição                                                                          |
| ---------- | ------------------- |:--:| ---------------------------------------------------------------------------------- |
| Parâmetros | 4D. EntitySelection | -> | Seleção de entidade com entidades para qual saber o ranking da seleção de entidade |
| Resultados | Object              | <- | Intervalos da seleção de entidade da seleção de entidade<!-- END REF -->



|



#### Descrição

A função `.add()` <!-- REF #EntitySelectionClass.selected().Summary -->adds the specified *entity* to the entity selection and returns the modified entity selection<!-- END REF -->.
> Esta função não modifica a seleção de entidades original.

Passe o parâmetro *selectedEntities* uma seleção de entidade contendo entidades para qual quiser saber a posição na seleção de entidade original. *selectedEntities* deve ser uma seleção de entidade pertencendo a mesma dataclass que a seleção de entidade original, senão acontece um erro 1587 - "The entity selection comes from an incompatible dataclass" .

#### Resultados

O objeto retornado contém as propriedades abaixo:

| Propriedade    | Tipo       | Descrição                                |
| -------------- | ---------- | ---------------------------------------- |
| ranges         | Collection | Coleção de objetos intervalos            |
| ranges[].start | Integer    | Primeiro indice de entidade do intervalo |
| ranges[].end   | Integer    | Último indice de entidade no intervalo.  |

Se uma propriedade `ranges` conter uma única entidade, `start` = `end`. Indice começa em 0

Se passar *entitySelection* como parâmetro, a função retorna uma seleção de entidade contendo as entidades que pertencem à seleção de entidade original sem as entidades que pertencem a *entitySelection*.

#### Exemplo

```4d
var $invoices; $cashSel; $creditSel : cs. Invoices
var $result1; $result2 : Object

$invoices:=ds. Invoices.all()

$cashSelection:=ds. Invoices.query("payment = :1"; "Cash")
$creditSel:=ds. Invoices.query("payment IN :1"; New collection("Cash"; "Credit Card"))

$result1:=$invoices.selected($cashSelection)
$result2:=$invoices.selected($creditSel)

//$result1 = {ranges:[{start:0;end:0},{start:3;end:3},{start:6;end:6}]}
//$result2 = {ranges:[{start:0;end:1},{start:3;end:4},{start:6;end:7}]}

```

<!-- END REF -->







<!-- REF EntitySelectionClass.slice().Desc -->
## .slice()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.slice().Params -->
| Parâmetro  | Tipo                |    | Descrição                                                                                        |
| ---------- | ------------------- |:--:| ------------------------------------------------------------------------------------------------ |
| startFrom  | Integer             | -> | Indice para iniciar a operação em (incluido)                                                     |
| end        | Integer             | -> | Final do índice (não incluído)                                                                   |
| Resultados | 4D. EntitySelection | <- | Nova seleção de entidade contendo entidades slices (cópia superficial)<!-- END REF -->

|

#### Descrição

A função `.slice()` <!-- REF #EntitySelectionClass.slice().Summary -->retorna uma porção da seleção de entidade em uma nova seleção de entidade<!-- END REF -->, seleccionada a partir do índice *startFrom* para o índice *end* (*end* não está incluído) ou para a última entidade da selecção de entidades. Este método devolve uma cópia superficial da selecção de entidades (utiliza as mesmas referências de entidades).
> Esta função não modifica a seleção de entidades original.

Se a entity selection estiver ordenada, *entity* se adiciona ao final da seleção. Se as referências às mesmas entidades de *entitySelection* já pertencem à seleção de entidades, se duplicam e se adicionam novas referencias.

*   Se *startFrom* < 0, é recalculada como *startFrom:=startFrom+length* (é considerada como o offset do final da entidade de seleção). Se o valor calculado < 0, *index* será estabelecido como 0.
*   Se *startFrom >= length*, a função retorna uma seleção vazia de entidade.
*   Se *end* < 0, é recalculada como *end:=end+length*.
*   Se *end < startFrom* (valores passados ou calculados), o método não faz nada.

Se a seleção de entidade contém entidades que foram abandonadas, também serão retornadas.

#### Exemplo 1

Se quiser obter uma seleção das primeiras 9 entidades da seleção de entidade:

```4d
var $sel; $sliced : cs. EmployeeSelection
$sel:=ds. Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```


#### Exemplo 2

Assuming we have ds. Employee.all().length = 10

```4d
var $slice : cs.EmployeeSelection


$slice:=ds.Employee.all().slice(-1;-2) //tenta devolver entidades do índice 9 a 8, mas como 9 > 8, devolve uma seleção de entidades vazia

```

<!-- END REF -->


<!-- REF EntitySelectionClass.sum().Desc -->
## .sum()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |





</details>

<!-- REF #EntitySelectionClass.sum().Syntax -->**.sum**( *attributePath* : Text ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.sum().Params -->
| Parâmetro     | Tipo |    | Descrição                                                         |
| ------------- | ---- |:--:| ----------------------------------------------------------------- |
| attributePath | Text | -> | Rota do atributo que se utilizará para o cálculo                  |
| Resultados    | Real | <- | Soma dos valores da seleção de entidade<!-- END REF -->

|

#### Descrição


A função `.sum()` <!-- REF #EntitySelectionClass.sum().Summary -->retorna a soma de todos os valores *attributePath* na seleção de entidade<!-- END REF -->.

`.sum()` retorna 0 se a seleção de entidade for vazia.

A soma só pode ser feita em valores do tipo de número. Se o atributo *attributePath* for uma propriedade objecto, apenas valores numéricos são tidos em conta para o cálculo (outros tipos de valores são ignorados). Neste caso, se *attributePath* conduz a uma propriedade que não existe no objecto ou não contém quaisquer valores numéricos, `.sum()` retorna 0.

Um erro é retornado se:

*   *attributePath* não é um atributo numérico nem um atributo de objecto,
*   *attributePath* é um atributo relativo,
*   *attributePath* não se encontra na classe de dados da entity selection.



#### Exemplo

```4d
var $sel : cs. EmployeeSelection
var $sum : Real

$sel:=ds. Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.toCollection().Desc -->
## .toCollection()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17      | Adicionado |

</details>

<!-- REF #EntitySelectionClass.toCollection().Syntax -->**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : Collection<br/>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : Collection<br/>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.toCollection().Params -->
| Parâmetro    | Tipo       |    | Descrição                                                                                             |
| ------------ | ---------- |:--:| ----------------------------------------------------------------------------------------------------- |
| filterString | Text       | -> | String com caminho(s) de atributo(s) de entidade a extrair                                            |
| filterCol    | Collection | -> | Coleção de caminho(s) de atributo(s) de entidade a extrair                                            |
| options      | Integer    | -> | `dk com chave primária`: adiciona a chave primária<br/>`dk com selo`: adiciona o selo           |
| begin        | Integer    | -> | Designa o índice inicial                                                                              |
| howMany      | Integer    | -> | Número de entidades a extrair                                                                         |
| Resultados   | Collection | <- | Colecção de objectos contendo atributos e valores de selecção de entidades|<!-- END REF -->

|

#### Descrição

A função `.toCollection()` <!-- REF #EntitySelectionClass.toCollection().Summary -->cria e devolve uma colecção onde cada elemento é um objecto que contém um conjunto de propriedades e valores <!-- END REF -->correspondentes aos nomes e valores dos atributos para a selecção da entidade.

Se nenhum parâmetro de filtro for passado ou se o primeiro parâmetro contiver uma cadeia vazia ou "*", todos os atributos são extraídos. Os atributos com [tipo](DataClassClass.md#attributename) propriedade como "relatedEntity" são extraídos com a forma simples: um objecto com propriedade \_KEY (chave primária). Atributos com propriedade tipo como "Entidades relacionadas" não são extraídos.

Ou, pode designar os atributos da entidade a extrair utilizando um parâmetro de filtro. Pode usar um destes dois filtros:

*   *filterString* - uma string com caminhos de propriedade separados por vírgulas: "propertyPath1, propertyPath2, ...".
*   *filterCol* - uma coleção de strings contendo caminhos de propriedade: \["propertyPath1", "propertyPath2",...


Se for especificado um filtro para um atributo do tipo `relatedEntity` :

*   propertyPath = "relatedEntity" -> é extraído de forma simples
*   propertyPath = "relatedEntity.*" -> todas as propriedades foram extraídas
*   propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> só se extraem essas propriedades


Se for especificado um filtro para um atributo do tipo `relatedEntities` :

*   propertyPath = "relatedEntities.*" -> se extraem todas as propriedades
*   propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> só se extraem essas propriedades



No parâmetro *opções* , pode passar os seletores `dk com chave primária` e/ou `dk with stamp`  para adicionar as chaves primárias da entidade e/ou carimbos nos objectos extraídos.

:::caution Alerta

Se utilizar outro atributo que não a chave primária como o atributo Um numa relação, o valor deste atributo será escrito na propriedade "__KEY". Tenha em mente que é recomendado usar a chave primária como um atributo nas suas relações, especialmente quando usa funções `.toCollection()` e `.fromCollection()`.

:::

O parâmetro *start* permite indicar o índice inicial das entidades a extrair. Pode passar qualquer valor entre 0 e o comprimento-1 da selecção da entidade.

O parâmetro *howMany* permite especificar o número de entidades a extrair, começando com o especificado em *begin*. As entidades abandonadas não são devolvidas, mas são tidas em conta de acordo com *howMany*. Por exemplo, se *howMany*= 3 e houver 1 entidade abandonada, apenas 2 entidades são extraídas.

Se *howMany* > comprimento da selecção da entidade, o método retorna (comprimento - *início*) objectos.

Uma colecção vazia é devolvida se:

*   a selecção da entidade está vazia, ou
*   *begin* é maior do que a duração da selecção da entidade.


#### Exemplo 1

A estrutura abaixo será usada nos exemplos desta seção:

![](../assets/en/API/dataclassAttribute4.png)


Exemplo sem filtro ou parâmetro de opções:

```4d
 var $employeesCollection : Collection
 var $employees : cs. EmployeeSelection

 $employeesCollection:=New collection
 $employees:=ds. Employee.all()
 $employeesCollection:=$employees.toCollection()
```

Retorna:

```4d
[
    {
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
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
    },
    {
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
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
]
```

#### Exemplo 2

Exemplo com opções:

```4d
var $employeesCollection : Collection
var $employees : cs. EmployeeSelection

$employeesCollection:=New collection
$employees:=ds. Employee.all()
$employeesCollection:=$employees.toCollection("";dk with primary key+dk with stamp)
```

Retorna:

```4d
[
    {
        "__KEY": 416,
        "__STAMP": 1,
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
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
    },
    {
        "__KEY": 417,
        "__STAMP": 1,
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
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
    }]
```

#### Exemplo 3

Exemplo com fatiagem e filtragem nas propriedades:

```4d
var $employeesCollection; $filter : Collection
var $employees : cs. EmployeeSelection

$employeesCollection:=New collection
$filter:=New collection
$filter.push("firstName")
$filter.push("lastName")

$employees:=ds. Employee.all()
$employeesCollection:=$employees.toCollection($filter;0;0;2)
```

Retorna:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl"
    },
    {
        "firstName": "Irma",
        "lastName": "Durham"
    }
]

```


#### Exemplo

Exemplo com `relatedEntity` tipo com formulário simples:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName,lastName,employer")
```

retorna:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "__KEY": 20
        }
    }
   ]
```

#### Exemplo 2

Exemplo com parâmetro *filterCol*:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection("firstName";"lastName")
$employeesCollection:=$employees.toCollection($coll)
```

Retorna:

```4d
[
    {
        "firstName": "Joanna",
        "lastName": "Cabrera"
    },
    {
        "firstName": "Alexandra",
        "lastName": "Coleman"
    }
]
```

#### Exemplo 6

Exemplo com extracção de todas as propriedades de relatedEntity:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection
$coll.push("firstName")
$coll.push("lastName")
$coll.push("employer.*")
$employeesCollection:=$employees.toCollection($coll)
```

Retorna:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "ID": 20,
            "name": "Irma",
        "lastName": "Durham",
        "employer": {
            "ID": 20,
            "name": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    }
  ]
```

#### Exemplo 3

Exemplo com extracção de algumas propriedades de uma relatedEntity:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, employer.name")
```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",

        "employer": {
            "name": "Irma",
        "lastName": "Durham",
        "employer": {
            "name": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "name": "India Astral Secretary"
        }
    }]
```

#### Exemplo 8

Exemplo com extracção de algumas propriedades de `relatedEntities`:

```4d
 var $employeesCollection : Collection
 $employeesCollection:=New collection
 $employeesCollection:=$employees.toCollection("firstName, lastName, directReports.firstName")
```

Retorna:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "firstName": "Gary"
            },
            {
                "firstName": "Sadie"
            },
            {
                "firstName": "Christie"
            }
        ]
    },
    {
        "firstName": "Gary",

        "lastName": "Reichert",
        "directReports": [
            {
                "firstName": "Rex"
            },
            {
                "firstName": "Jenny"
            },
            {
                "firstName": "Lowell"
            }
        ]
    }]
```

#### Exemplo 9

Exemplo com extração de todas as propriedades de `relatedEntities`:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, directReports.*")

```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },    
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "ID": 425,
                "firstName": "Gary",
                "lastName": "Reichert",
                "salary": 65800,
                "birthDate": "1957-12-23T00:00:00.000Z",
                "woman": false,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            },
            {
                "ID": 426,
                "firstName": "Sadie",
                "lastName": "Gallant",
                "salary": 35200,
                "birthDate": "2022-01-03T00:00:00.000Z",
                "woman": true,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            }
                   ]
    },
    {
        "firstName": "Gary",
        "lastName": "Reichert",
        "directReports": [
            {
                "ID": 428,
                "firstName": "Rex",
                "lastName": "Chance",
                "salary": 71600,
                "birthDate": "1968-08-09T00:00:00.000Z",
                "woman": false,

                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            },
            {
                "ID": 429,
                "firstName": "Jenny",
                "lastName":
```


<!-- END REF -->
