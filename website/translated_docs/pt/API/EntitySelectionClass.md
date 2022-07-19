---
id: EntitySelectionClass
title: EntitySelection
---


An entity selection is an object containing one or more reference(s) to [entities](ORDA/dsMapping.md#entity) belonging to the same [Dataclass](ORDA/dsMapping.md#dataclass). An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.

Entity selections can be created from existing selections using various functions of the [`DataClass` class](DataClassClass.md) such as [`.all()`](DataClassClass.md#all) or [`.query()`](DataClassClass.md#query), or functions of the `EntityClass` class itself, such as [`.and()`](#and) or [`orderBy()`](#orderby). You can also create blank entity selections using the [`dataClass.newSelection()`](DataClassClass.md#newselection) function or the [`Create new selection`](#create-new-selection) command.

### Resumo

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->                                                         |
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->                                           |
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#máx)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->                                                           |
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->                                                                |
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.selected().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->                                  |



## Create entity selection


<!-- REF #_command_.Create entity selection.Syntax --> *attributePath* não se encontra na classe de dados da entity selection.<!-- END REF -->


<!-- REF #_command_.Create entity selection.Params -->
| Parameter | Type                |    | Descrição                                                                                         |
| --------- | ------------------- |:--:| ------------------------------------------------------------------------------------------------- |
| dsTable   | Tabela              | -> | Tabela do banco de dados 4D cuja seleção atual se utilizará para construir a seleção de entidades |
| settings  | Objeto              | -> | Build option: context                                                                             |
| Resultado | 4D. EntitySelection | <- | Seleção de entidades que coincidem com a classe de dados relacionada com a tabela dada            |

<!-- END REF -->


#### Descrição

O comando `Create entity selection` constrói e devolve uma nova, [alterável](ORDA/entities.md#shareable-or-alterable-entity-selections) seleção de entidade relacionada com a classe de dados que coincide com a tabela *dsTable* dada, segundo a seleção atual desta tabela.

Se a seleção atual for ordenada, é criada uma seleção de entidades [ordenada](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) (se mantém a ordem da seleção atual). Se a seleção atual não for ordenada, se cria uma seleção de entidades não ordenada.

Se a tabela *dsTable* não estiver exposta em [`ds`](API/DataStoreClass.md#ds), se devolve um erro. Esse comando não pode usado com uma datastore remota.

No parâmetro opcional*settings* pode passar um objeto contendo as propriedades abaixo:

| Propriedade | Type  | Descrição                                                                                                         |
| ----------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| context     | Texto | Label for the [optimization context](ORDA/entities.md#clientserver-optimization) applied to the entity selection. |


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


<!-- REF #_command_.USE ENTITY SELECTION.Syntax --> **USE ENTITY SELECTION** (*entitySelection*)<!-- END REF -->


<!-- REF #_command_.USE ENTITY SELECTION.Params -->
| Parameter       | Type            |    | Descrição           |
| --------------- | --------------- |:--:| ------------------- |
| entitySelection | EntitySelection | -> | An entity selection |

<!-- END REF -->

#### Descrição

The `USE ENTITY SELECTION` command updates the current selection of the table matching the dataclass of the *entitySelection* parameter, according to the content of the entity selection.

This command cannot be used with a [Remote datastore](../ORDA/remoteDatastores.md).

> After a call to `USE ENTITY SELECTION`, the first record of the updated current selection (if not empty) becomes the current record, but it is not loaded in memory. If you need to use the values of the fields in the current record, use the `LOAD RECORD` command after the `USE ENTITY SELECTION` command.

#### Exemplo

```4d
var $entitySel : Object

$entitySel:=ds. Employee.query("lastName = :1";"M@") //$entitySel is related to the Employee dataclass REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //The current selection of the Employee table is updated
```


<!-- REF EntitySelectionClass.index.Desc -->
## &#91;*index*&#93;

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF EntitySelectionClass.index.Syntax --> *attributePath* for um atributo relativo,<!-- END REF -->


#### Descrição

A notação `EntitySelection[index]` <!-- REF EntitySelectionClass.index. Summary -->permite acessar as entidades dentro da seleção de entidades utilizando a sintaxe de coleção padrão<!-- END REF -->: passe a posição da entidade que quiser obter no parâmetro *index*.

Lembre que a entidade correspondente é recarregada a partir da datastore.

*index* pode ser qualquer número entre 0 e `.length`-1.

*   If *index* is out of range, an error is returned.
*   If *attributeName* kind is `storage`: `.attributeName` returns a collection of values of the same type as *attributeName*.
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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>


<!-- REF EntitySelectionClass.attributeName.Syntax --> Se o "kind" de *attributeName* é `storage`: `.attributeName` devolve uma coleção de valores do mesmo tipo que *attributeName*.<!-- END REF -->


#### Descrição

As seleções de entidades podem ser criadas a partir de seleções existentes utilizando varias funções da classe [`DataClass` class](DataClassClass.md) tais como [`.all()`](DataClassClass.md#all) ou [`.query()`](DataClassClass.md#query), ou da classe `EntityClass` mesma, tal como [`.and()`](#and) ou [`orderBy()`](#orderby). Também pode criar seleções de entidades em branco utilizando a função [`dataClass.newSelection()`](DataClassClass.md#newselection) ou o comando [`Create new selection`](#create-new-selection).

*   If *attributeName* kind is `storage`: `.attributeName` returns a collection of values of the same type as *attributeName*.
*   If *attributeName* kind is `relatedEntity`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).
*   If *attributeName* kind is `relatedEntities`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).


When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

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
| Versão | Mudanças                                              |
| ------ | ----------------------------------------------------- |
| v18 R5 | Compatível apenas com seleções de entidade alteráveis |
| v17    | Adicionado                                            |
</details>



<!-- REF #EntitySelectionClass.add().Syntax --> *attributePath* não se encontra na classe de dados da entity selection.<!-- END REF -->


<!-- REF #EntitySelectionClass.add().Params -->
| Parameter | Type                |    | Descrição                                            |
| --------- | ------------------- |:--:| ---------------------------------------------------- |
| entity    | 4D. Entity          | -> | Entidade que deve ser adicinonada à entity selection |
| Resultado | 4D. EntitySelection | -> | Seleção de entidades incluindo a *entity* adicionada |

<!-- END REF -->


#### Descrição

A função `.add()` <!-- REF #EntitySelectionClass.add(). Summary -->adiciona a *entity* especificada a entity selection e devolve a seleção de entidades modificada<!-- END REF -->.
> Os valores de tipo Date são convertidos em valores numéricos (segundos) e são usados para calcular a média.

**Atenção:** a entity selection deve ser *alteravel*, ou seja, foi criado por ejemplo, por [`.newSelection()`](DataClassClass.md#newselection) ou `Create entity selection`, do contrário `.add()` devolverá um erro. As entity selections partilháveis não aceitam a adição de entidades. Para saber mais, consulte [Entity selections compartilháveis ou modificáveis ](ORDA/entities.md#shareable-or-alterable-entity-selections).


*   If the entity selection is ordered, *entity* is added at the end of the selection. If a reference to the same entity already belongs to the entity selection, it is duplicated and a new reference is added.
*   If the entity selection is unordered, *entity* is added anywhere in the selection, with no specific order.
> For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

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


<!-- END REF -->

<!-- REF EntitySelectionClass.and().Desc -->
## .and()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |
</details>


<!-- REF #EntitySelectionClass.and().Syntax --> **.and**( *entity* : 4D. Entity ) : 4D. EntitySelection<br>**.and**( *entitySelection* : 4D. EntitySelection ) : 4D. EntitySelection<!-- END REF -->



<!-- REF #EntitySelectionClass.and().Params -->
| Parameter       | Type                |    | Descrição                                                            |
| --------------- | ------------------- |:--:| -------------------------------------------------------------------- |
| entity          | 4D. Entity          | -> | Entidade a intersectar                                               |
| entitySelection | 4D. EntitySelection | -> | Entity selection a intersectar                                       |
| Resultado       | 4D. EntitySelection | <- | Entity selection resultante da intersecção com o operador lógico AND |

<!-- END REF -->


#### Descrição

A função `.and()` <!-- REF #EntitySelectionClass.and(). Summary -->combina a entity selection com o parâmetro *entity* ou *entitySelection* utilizando o operador lógico AND<!-- END REF -->; devolve uma nova entity selection não ordenada que contém só as entidades às que se faz referência tanto na entity selection quanto o parâmetro.

*   If you pass *entity* as parameter, you combine this entity with the entity selection. If the entity belongs to the entity selection, a new entity selection containing only the entity is returned. Otherwise, an empty entity selection is returned.
*   If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
> > Pode comparar [entity selections ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). A seleção resultante é sempre desordenada.

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

<!-- REF EntitySelectionClass.average().Desc -->
## .average()

<details><summary>Histórico</summary>
| Versão | Mudanças                                                |
| ------ | ------------------------------------------------------- |
| v18 R6 | Retorna indefinido se uma seleção de entidade for vazia |
| v17    | Adicionado                                              |

</details>


<!-- REF #EntitySelectionClass.average().Syntax --> **.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.average().Params -->
| Parameter     | Type  |    | Descrição                                                                                                          |
| ------------- | ----- |:--:| ------------------------------------------------------------------------------------------------------------------ |
| attributePath | Texto | -> | Rota de atributo a utilizar para o cálculo                                                                         |
| Resultado     | Real  | <- | Media aritmética (média) dos valores das entidades para o atributo (Não se define para uma entity selection vazia) |

<!-- END REF -->

#### Descrição

*attributePath* designa um atributo que não existir na dataclass da entity selection.

Passe no parâmetro *attributePath* a rota de atributo a avaliar.

Só são levados em consideração os valores numéricos para o cálculo. Lembre entretanto que se o *attributePath* da seleção de entidades conter tipos de valores mistos, `.average()` considera todos os elementos escalares para calcular o valor médio.
> Para saber mais sobre propriedade compartilhável de entity selections, consulte [Entity selections compartilháveis ou modificáveis](ORDA/entities.md#shareable-or-alterable-entity-selections).

`.average()` returns **undefined**se a entity selection estiver vazia ou *attributePath* não conter valores numéricos.

Um erro é retornado se:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.contains().Syntax --> *attributePath* for um atributo relativo,<!-- END REF -->


<!-- REF #EntitySelectionClass.contains().Params -->
| Parameter | Type       |    | Descrição                                                     |
| --------- | ---------- |:--:| ------------------------------------------------------------- |
| entity    | 4D. Entity | -> | Entidade a ser avaliada                                       |
| Resultado | Booleano   | <- | Truse se a entidade pertencer à entity selection, senão False |

<!-- END REF -->

#### Descrição

Se não houver entidades correspondentes encontradas, uma `EntitySelection` vazia é retornada.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.count().Syntax --> **.count**( *attributePath* : Text ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.count().Params -->
| Parameter     | Type  |    | Descrição                                                                 |
| ------------- | ----- |:--:| ------------------------------------------------------------------------- |
| attributePath | Texto | -> | Rota do atributo que se utilizará para o cálculo                          |
| Resultado     | Real  | <- | Número de valores de *attributePath* que não são null na entity selection |

<!-- END REF -->

#### Descrição

*attributePath* for um atributo relativo,
> Só são levados em consideração os valores escalares. Os valores de tipo objeto ou coleção são considerados valores nulos.

Um erro é retornado se:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>


<!-- REF #EntitySelectionClass.copy().Syntax --> **.copy**( { *option* : Integer } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.copy().Params -->
| Parameter | Type                |    | Descrição                                                |
| --------- | ------------------- |:--:| -------------------------------------------------------- |
| option    | Integer             | -> | `ck shared`: devolve uma entity selection compartilhável |
| Resultado | 4D. EntitySelection | <- | Cópia da entity selection                                |

<!-- END REF -->

#### Descrição

A função `.copy()` <!-- REF #EntitySelectionClass.copy().Summary --> devolve uma cópia da entity selection original<!-- END REF -->.

> Esta função não modifica a entity selection original.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.distinct().Syntax --> **.distinct**( *attributePath* : Text { ; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.distinct().Params -->
| Parameter     | Type    |    | Descrição                                                       |
| ------------- | ------- |:--:| --------------------------------------------------------------- |
| attributePath | Texto   | -> | Rota do atributo cujos valores quer obter                       |
| option        | Integer | -> | `dk diacritical`: avaliação diacríticos ("A" # "a" por exemplo) |
| Resultado     | Coleção | <- | Coleção apenas com valores distintos                            |

<!-- END REF -->

#### Descrição

A função `.distinct()` <!-- REF #EntitySelectionClass.distinct(). Summary -->retorna uma coleção contendo apenas valores distintos (diferentes) da *attributePath* na entity selection<!-- END REF -->.

A coleção retornada é ordenada automaticamente. Valores **Null** não são retornados.

No parámetro *attributePath*, passe o atributo de entidade cujos valores distintos queira obter. Só valores escalares (texto, número, booleano, ou data) podemser manejados. Tipos são retornados na ordem abaixo: Se *attributePath* levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1.  booleans
2.  strings
3.  numbers
4.  datas

Pode utilizar a notação `[]` para designar uma coleção quando *attributePath* for uma rota dentro de um objeto (ver exemplos).

Como padrão, uma avaliação não-diacrítica é realizada. Se quiser que a avaliação diferencie minúsculas de maiúsculas ou que diferencie letras acentuadas, passe a constante `dk diacritical` no parâmetro*option*.

Um erro é retornado se:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

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


<!-- END REF -->

<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.drop().Syntax --> **.drop**( { *mode* : Integer } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.drop().Params -->
| Parameter | Type                |    | Descrição                                                                                                               |
| --------- | ------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------- |
| mode      | Integer             | -> | `dk stop dropping on first error`: para a execução do método na primeira entidade não eliminável                        |
| Resultado | 4D. EntitySelection | <- | Entidade de seleção vazia se for executada com êxito, se nenhuma entity selection contendo as entidades não elimináveis |

<!-- END REF -->

#### Descrição

A função `.drop()` <!-- REF #EntitySelectionClass.drop(). Summary -->elimina as entidades pertencentes a seleção de entidades da tabela relacionada com sua dataclass no datastore<!-- END REF -->. A entity selection permanece na memoria.
> A eliminação de entidades é permanente e não pode ser desfeita. É recomendado chamar esta ação em uma transação para ter uma opção de recuperação.

Se encontrar uma entidade bloqueada durante a execução de `.drop()`, não é eliminado. Como padrão o método processa todas as entidades da seleção de entidades e retorna as entidades não elimináveis na entity selection. Se quiser que o método pare a execução na primeira entidade não eliminável encontrada, passe a constante `dk stop dropping on first error` no parâmetro *mode*.

#### Exemplo

Exemplo sem a opção `dk stop dropping on first error`:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
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
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped é uma entity selection que contém a primeira entidade não eliminada
 If($notDropped.length=0) //A ação de eliminação é exitosa, todas as entidades foram eliminadas
    ALERT("You have dropped "+String($employees.length)+" employees") //A seleção de entidades eliminada permanece na memória
 Else
    ALERT("Problem during drop, try later")
 End if
```


<!-- END REF -->

<!-- REF EntitySelectionClass.extract().Desc -->
## .extract()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |

</details>







<!-- REF #EntitySelectionClass.extract().Syntax -->**.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->



<!-- REF #EntitySelectionClass.extract().Params -->
| Parameter     | Type    |    | Descrição                                                                            |
| ------------- | ------- |:--:| ------------------------------------------------------------------------------------ |
| attributePath | Texto   | -> | Rota de atributo cujos valores serão extraídos para nova coleção                     |
| targetpath    | Texto   | -> | Rota ou nome do atributo objetivo                                                    |
| option        | Integer | -> | `ck keep null`: inclui os atributos null na coleção devolvida (ignorados por padrão) |
| Resultado     | Coleção | <- | Collection contendo valores extraídos                                                |

<!-- END REF -->

#### Descrição

A função `.extract()` <!-- REF #EntitySelectionClass.extract().Summary -->retorna una coleção que contenha os valores de *attributePath* extraídos da entity selection<!-- END REF -->.

*attributePath* pode ser:

*   a scalar dataclass attribute,
*   related entity,
*   related entities.

Se *attributePath* não for válido, se devolve uma coleção vazia.

Esta função aceita duas sintaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

Com esta sintaxe, `.extract()` preenche a coleção devolvida com os valores *attributePath* da entity selection.

Como padrão, as entidades para as que *attributePath* for*null* ou indefinida são ignoradas na coleção resultante. Pode passar a constante `ck keep null` no parâmetro *option* para incluir esses valores como elementos**null**  na coleção retornada.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

Com esta sintaxe, `.extract()` preenche a coleção devolvida com as propriedades *attributePath* da entity selection. Cada elemento da coleção devolvida é um objeto com as propriedades *targetPath* preenchidas com as propriedades *attributePath* correspondentes. Valores null são mantidos (o parâmetro *option* é ignorado com essa sintaxe).

Se vários *attributePath*, forem dados, deve dar um *targetPath* para cada um. Só se extraem os pares válidos \[*attributePath*, *targetPath*].

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as an entity.
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as an entity selection.

> Os valores Null são avaliados como inferiores aos outros valores.


#### Exemplo

Dada a seguinte tabela e relação:

![](assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  //$firstnames is a collection of Strings


 $firstnames:=ds. Teachers.all().extract("firstname")
  //
  //$addresses is a collection of entities related to dataclass Address
  //Null values for address are extracted
 $addresses:=ds. Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing is a collection of objects with properties "who" and "to"
  //"who" property content is String type 
  //"to" property content is entity type (Address dataclass)
 $mailing:=ds. Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing is a collection of objects with properties "who" and "city"
  //"who" property content is String type 
  //"city" property content is String type 
 $mailing:=ds. Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers is a collection of objects with properties "where" and "who"
  //"where" property content is String
  //"who" property content is an entity selection (Teachers dataclass)
 $teachers:=ds. Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers is a collection of entity selections
 $teachers:=ds. Address.all().extract("teachers")
```


<!-- END REF -->

<!-- REF EntitySelectionClass.first().Desc -->
## .first()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.first().Syntax --> **.first()** : 4D. Entity<!-- END REF -->


<!-- REF #EntitySelectionClass.first().Params -->
| Parameter | Type       |    | Descrição                                                                            |
| --------- | ---------- |:--:| ------------------------------------------------------------------------------------ |
| Resultado | 4D. Entity | <- | Referencia à primeira entidade da entity selection (Null se a seleção estiver vazia) |

<!-- END REF -->

#### Descrição

A função `.first()`<!-- REF #EntitySelectionClass.first(). Summary -->retorna uma referência à entidade na primeira posição da entity selection<!-- END REF -->.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>


<!-- REF #EntitySelectionClass.getDataClass().Syntax --> **.getDataClass()** : 4D. DataClass<!-- END REF -->



<!-- REF #EntitySelectionClass.getDataClass().Params -->
| Parameter | Type          |    | Descrição                                    |
| --------- | ------------- |:--:| -------------------------------------------- |
| Resultado | 4D. DataClass | <- | DataClass a qual pertence a entity selection |

<!-- END REF -->

#### Descrição

A função `.getDataClass()` <!-- REF #EntitySelectionClass.getDataClass(). Summary -->retorna a dataclass da entity selection<!-- END REF -->.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v19R5  | Adicionado |
</details>


<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Syntax --> **.getRemoteContextAttributes()** : Text<!-- END REF -->


<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Params -->
| Parameter | Type  |    | Descrição                                                               |
| --------- | ----- | -- | ----------------------------------------------------------------------- |
| result    | Texto | <- | Context attributes linked to the entity selection, separated by a comma |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.


#### Descrição

The `.getRemoteContextAttributes()` function <!-- REF #EntitySelectionClass.getRemoteContextAttributes(). Summary -->returns information about the optimization context used by the entity selection<!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity selection, the function returns an empty Text.

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

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>


<!-- REF #EntitySelectionClass.isAlterable().Syntax --> **.isAlterable()** : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.isAlterable().Params -->
| Parameter | Type     |    | Descrição                                                      |
| --------- | -------- |:--:| -------------------------------------------------------------- |
| Resultado | Booleano | <- | True se a entity selection for modificável, do contrário False |

<!-- END REF -->

#### Descrição

A função `.isAlterable()` <!-- REF #EntitySelectionClass.isAlterable().Summary --> devolve True se a entity selection for modificável<!-- END REF -->, e False se não o for.

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

| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.isOrdered().Syntax --> **.isOrdered()** : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.isOrdered().Params -->
| Parameter | Type     |    | Descrição                                                   |
| --------- | -------- |:--:| ----------------------------------------------------------- |
| Resultado | Booleano | <- | True se a entity selection for ordenada, do contrário False |

<!-- END REF -->

#### Descrição

A função `.isOrdered()` <!-- REF #EntitySelectionClass.isOrdered().Summary --> devolve True se a entity selection for ordenada<!-- END REF -->, e False se for desordenada.
> Esta função não modifica a seleção de entidades original.

Para mais informação, consulte [Entity selection ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).


#### Exemplo


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // Obtém a entidade com chave primaria 714

  //Em uma entity selection ordenada, podemos adicionar a mesma entidade várias vezes (os duplicados se mantém)
 $employees.add($employee)
 $employees.add($employee)
 $employees.add($employee)

 $isOrdered:=$employees.isOrdered()
 If($isOrdered)
    ALERT("The entity selection is ordered and contains "+String($employees.length)+" employees")
 End if
```


<!-- END REF -->

<!-- REF EntitySelectionClass.last().Desc -->
## .last()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.last().Syntax --> **.last()** : 4D. Entity<!-- END REF -->


<!-- REF #EntitySelectionClass.last().Params -->
| Parameter | Type       |    | Descrição                                                                                   |
| --------- | ---------- |:--:| ------------------------------------------------------------------------------------------- |
| Resultado | 4D. Entity | <- | Referencia à última entidade da entity selection (Null se a entity selection estiver vazia) |

<!-- END REF -->

#### Descrição

A função `.last()` <!-- REF #EntitySelectionClass.last().Summary --> devolve uma referência à entidad em última posição da entity selection<!-- END REF -->.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.length.Syntax --> **.length** : Integer<!-- END REF -->


#### Descrição

A função `.count()` <!-- REF #EntitySelectionClass.count(). Summary -->devolve o número de entidades na entity selection com um valor não null em *attributePath*<!-- END REF -->.

As entity selections sempre têm uma propriedade `.length`.

> To know the total number of entities in a dataclass, it is recommended to use the [`getCount()`](DataClassClass.md#getcount) function which is more optimized than the `ds.myClass.all().length` expression.

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
| Versão | Mudanças                                                |
| ------ | ------------------------------------------------------- |
| v17    | Adicionado                                              |
| v18 R6 | Retorna indefinido se uma seleção de entidade for vazia |

</details>


<!-- REF #EntitySelectionClass.max().Syntax --> **.max**( *attributePath* : Text ) : any<!-- END REF -->



<!-- REF #EntitySelectionClass.max().Params -->
| Parameter     | Type  |    | Descrição                                        |
| ------------- | ----- | -- | ------------------------------------------------ |
| attributePath | Texto | -> | Rota do atributo que se utilizará para o cálculo |
| Resultado     | any   | <- | Highest value of attribute                       |

<!-- END REF -->

#### Descrição

The `.or()` function <!-- REF #EntitySelectionClass.or(). Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

If you pass in *attributePath* a path to an object property containing different types of values, the `.max()` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.max()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.


Um erro é retornado se:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.



#### Exemplo

We want to find the highest salary among all the female employees:

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
| Versão | Mudanças                                                |
| ------ | ------------------------------------------------------- |
| v17    | Adicionado                                              |
| v18 R6 | Retorna indefinido se uma seleção de entidade for vazia |


</details>


<!-- REF #EntitySelectionClass.min().Syntax --> **.min**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.min().Params -->
| Parameter     | Type  |    | Descrição                                        |
| ------------- | ----- |:--:| ------------------------------------------------ |
| attributePath | Texto | -> | Rota do atributo que se utilizará para o cálculo |
| Resultado     | any   | <- | Lowest value of attribute                        |

<!-- END REF -->

#### Descrição

The `.minus()` function <!-- REF #EntitySelectionClass.minus().  Summary -->excludes from the entity selection to which it is applied the *entity* or the entities of *entitySelection* and returns the resulting entity selection<!-- END REF -->.

If you pass in *attributePath* a path to an object property containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.min()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

Um erro é retornado se:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Exemplo

In this example, we want to find the lowest salary among all the female employees:

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.minus().Syntax --> **.minus**( *entity* : 4D. Entity ) : 4D. EntitySelection<br>**.minus**( *entitySelection* : 4D. EntitySelection ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.minus().Params -->
| Parameter       | Type                |    | Descrição                                                                |
| --------------- | ------------------- |:--:| ------------------------------------------------------------------------ |
| entity          | 4D. Entity          | -> | Entity to substract                                                      |
| entitySelection | 4D. EntitySelection | -> | Entity selection to substract                                            |
| Resultado       | 4D. EntitySelection | <- | New entity selection or a new reference on the existing entity selection |

<!-- END REF -->

#### Descrição

The `.slice()` function <!-- REF #EntitySelectionClass.slice(). Summary -->returns a portion of an entity selection into a new entity selection<!-- END REF -->, selected from the *startFrom* index to the *end* index (*end* is not included) or to the last entity of the entity selection.

*   If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*   If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*.
> > Pode comparar [entity selections ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). A seleção resultante é sempre desordenada.

If the original entity selection or both the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

Se a entity selection inicial e o parâmetro não forem relacionados com a mesma dataclass, se produz um erro.


#### Exemplo 1

```4d
 var $employees; $result : cs. EmployeeSelection
 var $employee : cs. EmployeeEntity

 $employees:=ds. Employee.query("lastName = :1";"H@") 
  // The $employees entity selection contains the entity with primary key 710 and other entities
  // for ex. var $employees; $notDropped : cs. var $employees; $notDropped : cs.
```


#### Exemplo 2

We want to have a selection of female employees named "Jones" who live in New York :

```4d
 var $sel1; $sel2; $sel3 : cs. EmployeeSelection
 $sel1:=ds. Employee.query("name =:1";"Jones")
 $sel2:=ds. Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds. Employee.query("gender='male'"))
```


<!-- END REF -->

<!-- REF EntitySelectionClass.or().Desc -->
## .or()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.or().Syntax --> **.or**( *entity* : 4D. Entity ) : 4D. EntitySelection<br>**.or**( *entitySelection* : 4D. EntitySelection ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.or().Params -->
| Parameter       | Type                |    | Descrição                                                              |
| --------------- | ------------------- |:--:| ---------------------------------------------------------------------- |
| entity          | 4D. Entity          | -> | Entidade a intersectar                                                 |
| entitySelection | 4D. EntitySelection | -> | Entity selection a intersectar                                         |
| Resultado       | 4D. EntitySelection | <- | New entity selection or new reference to the original entity selection |

<!-- END REF -->

#### Descrição

The `.or()` function <!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

*   If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection that contains only the entities that are referenced in both selections is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
*   If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.
> > Pode comparar [entity selections ordenadas ou desordenadas](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). A seleção resultante é sempre desordenada.

If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.orderBy().Syntax --> **.orderBy**( *pathString* : Text ) : 4D. EntitySelection<br>**.orderBy**( *pathObjects* : Collection ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.orderBy().Params -->
| Parameter   | Type                |    | Descrição                                                             |
| ----------- | ------------------- |:--:| --------------------------------------------------------------------- |
| pathString  | Texto               | -> | Attribute path(s) and sorting instruction(s) for the entity selection |
| pathObjects | Coleção             | -> | Collection of criteria objects                                        |
| Resultado   | 4D. EntitySelection | <- | New entity selection in the specified order                           |

<!-- END REF -->

#### Descrição

The `.orderBy()` function <!-- REF #EntitySelectionClass.orderBy(). Summary -->returns a new ordered entity selection containing all entities of the entity selection in the order specified by *pathString* or *pathObjects* criteria<!-- END REF -->.
> * This method does not modify the original entity selection.
*   For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

You must use a criteria parameter to define how the entities must be sorted. Two different parameters are supported:

*   *pathString* (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. The syntax is:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

The order in which the attributes are passed determines the sorting priority of the entities. By default, attributes are sorted in ascending order. Pode definir a ordem de clasificação de uma propriedade na string de critérios, separado da rota da propriedade por um só espaço: passe "asc" para ordenar em ordem ascendente ou "desc" em ordem descendente.

*   *pathObjects* (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

By default, attributes are sorted in ascending order ("descending" is false).

You can add as many objects in the criteria collection as necessary.
> Null values are evaluated as less than other values.

#### Exemplo


```4d
// order by formula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // order by collection with or without sort orders
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
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R6 | Adicionado |

</details>


<!-- REF #EntitySelectionClass.orderByFormula().Syntax --> **.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D. EntitySelection<br>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.<!-- END REF -->


<!-- REF #EntitySelectionClass.orderByFormula().Params -->
| Parameter     | Type                |    | Descrição                                   |
| ------------- | ------------------- |:--:| ------------------------------------------- |
| formulaString | Texto               | -> | Formula string                              |
| formulaObj    | Objeto              | -> | Formula object                              |
| sortOrder     | Integer             | -> | `dk ascending` (default) or `dk descending` |
| settings      | Objeto              | -> | Parameter(s) for the formula                |
| Resultado     | 4D. EntitySelection | <- | New ordered entity selection                |

<!-- END REF -->

#### Descrição

The `.orderByFormula()` function <!-- REF #EntitySelectionClass.orderByFormula(). Summary -->returns a new, ordered entity selection<!-- END REF --> containing all entities of the entity selection in the order defined through the *formulaString* or *formulaObj* and, optionally, *sortOrder* and *settings* parameters.
> Esta função não modifica a entity selection original.

You can use either a *formulaString* or a *formulaObj* parameter:

- *formulaString*: you pass a 4D expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `Formula` or `Formula from string` command.

The *formulaString* or *formulaObj* is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. The result must be of a sortable type (boolean, date, number, text, time, null).
> A null result is always the smallest value.

By default if you omit the *sortOrder* parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the *sortOrder* parameter:

| Constante     | Value | Comentário                     |
| ------------- | ----- | ------------------------------ |
| dk ascending  | 0     | Ascending sort order (default) |
| dk descending | 1     | Descending sort order          |

Within the *formulaString* or *formulaObj*, the processed entity and thus its attributes are available through the `This` command (for example, `This.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in $1.

#### Exemplo 1

Sorting students using a formula provided as text:

```4d
 var $es1; $es2 : cs. StudentsSelection
 $es1:=ds. Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascending by default
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

Same sort order but using a formula object:

```4d
 var $es1; $es2 : cs. StudentsSelection
 var $formula : Object
 $es1:=ds. Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // ascending by default
 $es2:=$es1.orderByFormula($formula;dk descending)
```


#### Exemplo 2

A formula is given as a formula object with parameters; `settings.args` object is received as $1 in the ***computeAverage*** method.

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. A single formula object is used to compute a student's average grade with different coefficients for schoolA and schoolB.

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
  // computeAverage method
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
| Versão | Mudanças                               |
| ------ | -------------------------------------- |
| v17 R6 | Soporte dos Parâmetros Formula         |
| v17 R5 | Suporte dos marcadores para os valores |
| v17    | Adicionado                             |

</details>


<!-- REF #EntitySelectionClass.query().Syntax --> **.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D. EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.query().Params -->
| Parameter     | Type                |    | Descrição                                                                                                                                                     |
| ------------- | ------------------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Texto               | -> | Criterios de pesquisa como string                                                                                                                             |
| formula       | Objeto              | -> | Criterios de pesquisa como objeto fórmula                                                                                                                     |
| value         | any                 | -> | Valores a usar para placeholders indexados                                                                                                                    |
| querySettings | Objeto              | -> | Opções de pesquisa: parâmetros, atributos, args, allowFormulas, contexto, queryPath,queryPlan                                                                 |
| Resultado     | 4D. EntitySelection | <- | New entity selection made up of entities from entity selection meeting the search criteria specified in *queryString* or *formula*|<!-- END REF --> |

#### Descrição

The `.query()` function <!-- REF #EntitySelectionClass.query(). Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s) among all the entities in the entity selection<!-- END REF -->, and returns a new object of type `EntitySelection` containing all the entities that are found. Se aplica carregamento diferido/lazy loading.
> Esta função não modifica a entity selection original.

Se não houver entidades correspondentes encontradas, uma `EntitySelection` vazia é retornada.


For detailed information on how to build a query using *queryString*, *value*, and *querySettings* parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.
> By default if you omit the **order by** statement in the *queryString*, the returned entity selection is [not ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). Note however that, in Client/Server mode, it behaves like an ordered entity selection (entities are added at the end of the selection).

#### Exemplo 1


```4d
 var $entitySelectionTemp : cs. EmployeeSelection
 $entitySelectionTemp:=ds. Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```


#### Exemplo 2

More examples of queries can be found in the DataClass [`.query()`](DataClassClass.md#query) page.

#### Veja também

[`.query()`](DataClassClass.md#query) for dataclass

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPath.Desc -->
## .queryPath

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.queryPath.Syntax --> **.queryPath** : Text<!-- END REF -->


#### Descrição

A função `.extract()` <!-- REF #EntitySelectionClass.extract(). Summary -->retorna una coleção que contenha os valores de *attributePath* extraídos da entity selection<!-- END REF -->.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page. 

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPlan.Desc -->
## .queryPlan

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.queryPlan.Syntax --> **.queryPlan** : Text<!-- END REF -->



#### Descrição

The `.queryPlan` property <!-- REF #EntitySelectionClass.queryPlan. Summary --> contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page. 

<!-- END REF -->

<!-- REF EntitySelectionClass.refresh().Desc -->
## .refresh()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |

</details>


<!-- REF #EntitySelectionClass.refresh().Syntax --> **.refresh()**<!-- END REF -->


<!-- REF #EntitySelectionClass.refresh().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |

<!-- END REF -->

#### Descrição
> This function only works with a remote datastore (client / server or `Open datastore` connection).

The `.refresh()` function <!-- REF #EntitySelectionClass.refresh(). Summary -->immediately "invalidates" the entity selection data in the local ORDA cache<!-- END REF --> so that the next time 4D requires the entity selection, it will be reloaded from the database.

By default, the local ORDA cache is invalidated after 30 seconds. In the context of client / server applications using both ORDA and the classic language, this method allows you to make sure a remote application will always work with the latest data.

#### Exemplo 1

In this example, classic and ORDA code modify the same data simultaneously:

```4d
 //On a 4D remote

 var $selection : cs. StudentsSelection
 var $student : cs. StudentsEntity

 $selection:=ds. Students.query("lastname=:1";"Collins")
  //The first entity is loaded in the ORDA cache
 $student:=$selection.first()

  //Update with classic 4D, ORDA cache is not aware of if
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //to get the latest version, the ORDA cache must be invalidated
 $selection.refresh()
  // Even if cache is not expired, the first entity is reloaded from disk
 $student:=$selection.first()

  //$student.lastname contains "Colin"
```


#### Exemplo 2

A list box displays the Form.students entity selection and several clients work on it.

```4d
// Form method:
 Case of
    :(Form event code=On Load)
       Form.students:=ds. Students.all()
 End case
  //
  //
  // On client #1, the user loads, updates, and saves the first entity
  // On client #2, the user loads, updates, and saves the same entity
  //
  //
  // On client #1:
 Form.students.refresh() // Invalidates the ORDA cache for the Form.students entity selection
  // The list box content is refreshed from the database with update made by client #2
```


<!-- END REF -->

<!-- REF EntitySelectionClass.selected().Desc -->
## .selected()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R3 | Adicionado |

</details>


<!-- REF #EntitySelectionClass.selected().Syntax --> **.selected**( *selectedEntities* : 4D. EntitySelection ) : Object<!-- END REF -->


<!-- REF #EntitySelectionClass.selected().Params -->
| Parameter        | Type                |    | Descrição                                                                         |
| ---------------- | ------------------- |:--:| --------------------------------------------------------------------------------- |
| selectedEntities | 4D. EntitySelection | -> | Entity selection with entities for which to know the rank in the entity selection |
| Resultado        | Objeto              | <- | Range(s) of selected entities in entity selection                                 |

<!-- END REF -->


#### Descrição

The `.selected()` function <!-- REF #EntitySelectionClass.selected(). Summary -->returns an object describing the position(s) of *selectedEntities* in the original entity selection<!-- END REF -->.
> Esta função não modifica a entity selection original.

Pass in the *selectedEntities* parameter an entity selection containing entities for which you want to know the position in the original entity selection. *selectedEntities* must be an entity selection belonging to the same dataclass as the original entity selection, otherwise an error 1587 - "The entity selection comes from an incompatible dataclass" is raised.

#### Resultado

O objeto retornado contém as propriedades abaixo:

| Propriedade    | Type    | Descrição                       |
| -------------- | ------- | ------------------------------- |
| ranges         | Coleção | Collection of range objects     |
| ranges[].start | Integer | First entity index in the range |
| ranges[].end   | Integer | Last entity index in the range  |

If a `ranges` property contains a single entity, `start` = `end`. Index starts at 0.

The function returns an empty collection in the `ranges` property if the original entity selection or the *selectedEntities* entity selection is empty.

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.slice().Syntax --> **.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D. EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.slice().Params -->
| Parameter | Type                |    | Descrição                                                      |
| --------- | ------------------- |:--:| -------------------------------------------------------------- |
| startFrom | Integer             | -> | Index to start the operation at (included)                     |
| end       | Integer             | -> | Final do índice (não incluído)                                 |
| Resultado | 4D. EntitySelection | <- | New entity selection containing sliced entities (shallow copy) |

<!-- END REF -->

#### Descrição

A função `.copy()` <!-- REF #EntitySelectionClass.copy(). Summary --> devolve uma cópia da entity selection original<!-- END REF -->.
> Esta função não modifica a entity selection original.

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.
*   If *startFrom >= length*, the function returns an empty entity selection.
*   If *end* < 0, it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

If the entity selection contains entities that were dropped in the meantime, they are also returned.

#### Exemplo 1

You want to get a selection of the first 9 entities of the entity selection:

```4d
var $sel; $sliced : cs. EmployeeSelection
$sel:=ds. Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```


#### Exemplo 2

Assuming we have ds. Employee.all().length = 10

```4d
var $slice : cs. EmployeeSelection
$slice:=ds. Employee.all().slice(-1;-2) //tries to return entities from index 9 to 8, but since 9 > 8, returns an empty entity selection

```


<!-- END REF -->

<!-- REF EntitySelectionClass.sum().Desc -->
## .sum( )

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |


</details>


<!-- REF #EntitySelectionClass.sum().Syntax --> **.sum**( *attributePath* : Text ) : Real<!-- END REF -->



<!-- REF #EntitySelectionClass.sum().Params -->
| Parameter     | Type  |    | Descrição                                        |
| ------------- | ----- |:--:| ------------------------------------------------ |
| attributePath | Texto | -> | Rota do atributo que se utilizará para o cálculo |
| Resultado     | Real  | <- | Sum of entity selection values                   |

<!-- END REF -->

#### Descrição


The `.sum()` function <!-- REF #EntitySelectionClass.sum(). Summary -->returns the sum for all *attributePath* values in the entity selection<!-- END REF -->.

`.sum()` returns 0 if the entity selection is empty.

The sum can only be done on values of number type. If the *attributePath* is an object property, only numerical values are taken into account for the calculation (other value types are ignored). In this case, if *attributePath* leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

Um erro é retornado se:

*   *attributePath* is not a numerical or an object attribute,
*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.



#### Exemplo

```4d
var $sel : cs. EmployeeSelection
var $sum : Real

$sel:=ds. Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```


<!-- END REF -->

<!-- REF EntitySelectionClass.toCollection().Desc -->
## .toCollection( )

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17    | Adicionado |

</details>


<!-- REF #EntitySelectionClass.toCollection().Syntax --> **.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<!-- END REF -->


<!-- REF #EntitySelectionClass.toCollection().Params -->
| Parameter    | Type    |    | Descrição                                                                            |
| ------------ | ------- |:--:| ------------------------------------------------------------------------------------ |
| filterString | Texto   | -> | String with entity attribute path(s) to extract                                      |
| filterCol    | Coleção | -> | Collection of entity attribute path(s) to extract                                    |
| options      | Integer | -> | `dk with primary key`: adds the primary key<br>`dk with stamp`: adds the stamp |
| begin        | Integer | -> | Designates the starting index                                                        |
| howMany      | Integer | -> | Number of entities to extract                                                        |
| Resultado    | Coleção | <- | Collection of objects containing attributes and values of entity selection           |

<!-- END REF -->

#### Descrição

The `.toCollection()` function <!-- REF #EntitySelectionClass.toCollection(). Summary -->creates and returns a collection where each element is an object containing a set of properties and values <!-- END REF -->corresponding to the attribute names and values for the entity selection.

If no filter parameter is passed or the first parameter contains an empty string or "*", all the attributes are extracted. Attributes with [kind](DataClassAttributeClass.md#kind) property as "relatedEntity" are extracted with the simple form: an object with property \_\_KEY (primary key). Attributes with kind property as "relatedEntities" are not extracted.

Or, you can designate the entity attributes to extract using a filter parameter. You can use one of these two filters:

*   *filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
*   *filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]


If a filter is specified for an attribute of the `relatedEntity` kind:

*   propertyPath = "relatedEntity" -> it is extracted with simple form
*   propertyPath = "relatedEntity.*" -> all the properties are extracted
*   propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted


If a filter is specified for an attribute of the `relatedEntities` kind:

*   propertyPath = "relatedEntities.*" -> all the properties are extracted
*   propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted



In the *options* parameter, you can pass the `dk with primary key` and/or `dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

The *begin* parameter allows you to indicate the starting index of the entities to extract. You can pass any value between 0 and entity selection length-1.

The *howMany* parameter lets you specify the number of entities to extract, starting with the one specified in *begin*. Dropped entities are not returned but are taken into account according to *howMany*. For example, if *howMany*= 3 and there is 1 dropped entity, only 2 entities are extracted.

If *howMany* > length of the entity selection, the method returns (length - *begin*) objects.

An empty collection is returned if:

*   the entity selection is empty, or
*   *begin* is greater than the length of the entity selection.


#### Exemplo 1

The following structure will be used throughout all examples of this section:

![](assets/en/API/dataclassAttribute4.png)


Example without filter or options parameter:

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

Example with options:

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

Example with slicing and filtering on properties:

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


#### Exemplo 4

Example with `relatedEntity` type with simple form:

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

#### Exemplo 5

Example with *filterCol* parameter:

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

Example with extraction of all properties of a relatedEntity:

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

#### Exemplo 7

Example with extraction of some properties of a relatedEntity:

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

Example with extraction of some properties of `relatedEntities`:

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

Example with extraction of all properties of `relatedEntities`:

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
                "lastName": "Parks",
                "salary": 51300,
                "birthDate": "1984-05-25T00:00:00.000Z",
                "woman": true,
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
            }
           ]
 }
]
```


<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
