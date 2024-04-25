---
id: CollectionClass
title: Collection
---

The Collection class manages [Collection](Concepts/dt_collection.md) type variables.

Uma coleção se inicializa com:

|                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.New shared collection.Summary --> |

### Exemplo

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```

### Resumo

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.at().Summary -->                                  |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.first().Syntax -->](#first)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.first().Summary -->                         |
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.flat().Summary -->                            |
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.flatMap().Summary -->                   |
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.includes().Summary -->                |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.last().Syntax -->](#last)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.last().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #collection.map().Syntax -->](#map)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.map().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.multiSort().Summary -->             |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.reduceRight().Summary -->       |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.resize().Summary -->                      |
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->

| Parâmetro  | Tipo                                                                    |     | Descrição                                  |
| ---------- | ----------------------------------------------------------------------- | :-: | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |  -> | Valor(es) de collection |
| Resultados | Collection                                                              |  <- | Nova coleção                               |

<!-- END REF -->

#### Descrição

The `New collection` command <!-- REF #_command_.New collection.Summary --> creates a new empty or prefilled collection<!-- END REF --> and returns its reference.

If you do not pass any parameters, `New collection` creates an empty collection and returns its reference.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new collection by passing one or several _value_(s) as parameter(s).

Pode também adicionar ou modificar elementos subsequentemente através de assignação. Por exemplo:

```4d
 myCol[10]:="My new element"
```

If the new element index is beyond the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

Pode passar qualquer número de valores de qualquer tipo compatível (número, texto, data, imagem, ponteiro, objeto, coleção....). Diferente de arrays, coleções podem misturar dados de tipos diferentes.

Pode prestar atenção aos problemas de conversão abaixo:

- If you pass a pointer, it is kept "as is"; it is evaluated using the `JSON Stringify` command
- Datas são armazenadas no formato "aaaa-mm-dd" ou strings com o formato "AAAA-MM-DDTHH:mm:ss.SSSZ", de acordo com a configuração atual "dates inside objects"/datas dentro de objetos. Quando converter datas 4D em texto antes de armazená-las em uma coleção, como padrão o programa considera a zona horária local. You can modify this behavior using the `Dates inside objects` selector of the `SET DATABASE PARAMETER` command.
- Se passar a hora, é armazenada como um número de milissegundos (Real).

#### Exemplo 1

Se quiser criar uma nova coleção vazia e atribuí-la à uma variável coleção 4D:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Exemplo 2

Se quiser criar uma coleção pré-prenchida:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Exemplo 3

Pode criar uma nova coleção e adicionar um novo elemento:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //adicionar um 10º elemento com o valor "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

## `New shared collection`

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->

| Parâmetro  | Tipo                                                                |     | Descrição                        |
| ---------- | ------------------------------------------------------------------- | :-: | -------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection |  -> | Valores da collection compartida |
| Resultados | Collection                                                          |  <- | New shared collection            |

<!-- END REF -->

#### Descrição

The `New shared collection` command <!-- REF #_command_.New shared collection.Summary --> creates a new empty or prefilled shared collection<!-- END REF --> and returns its reference.

Adding an element to this collection using the assignment operator must be surrounded by the [`Use...End use`](Concepts/shared.md#useend-use) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](#push) or [`map()`](#map) because they automatically trigger an internal _Use...End use_). Reading an element without a _Use...End use_ structure is, however, possible.

:::info

For more information on shared collections, please refer to the [Shared objects and collections](Concepts/shared.md) page.

:::

If you do not pass any parameters, `New shared collection` creates an empty shared collection and returns its reference.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but do not create any collection.

Optionally, you can prefill the new shared collection by passing one or several _value_(s) as parameter(s). Também pode adicionar ou modificar elementos através de atribuição de notação de objetos (ver exemplo).

If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

Pode passar qualquer número de valores dos tipos compatíveis abaixo:

- número (real, longint....). Valores numéricos são sempre armazenados como reais.
- text
- boolean
- date
- hora (armazenada como número de milissegundos - real)
- null
- objeto compartido(\*)
- shared collection(\*) > Diferente de coleções padrão (não partilhadas), coleções partilhadas não são compatíveis com imagens, ponteiros, objetos ou coleções que não são compartilhadas.

:::note

Diferente de coleções padrão (não partilhadas), coleções partilhadas não são compatíveis com imagens, ponteiros e objetos ou coleção que não forem partilhadas.

:::

(\*)When a shared object or collection is added to a shared collection, they share the same _locking identifier_. For more information on this point, refer to [4D Doc Center](https://doc.4d.com).

#### Exemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

<!-- REF collection.at().Desc -->

## .at()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.at().Syntax -->**.at**( *index* : Integer ) : any <!-- END REF -->

<!-- REF #collection.at().Params -->

| Parâmetro  | Tipo    |     | Descrição                     |
| ---------- | ------- | :-: | ----------------------------- |
| index      | Integer |  -> | Índice de elemento a devolver |
| Resultados | any     |  <- | O elemento nesse índice       |

<!-- END REF -->

#### Descrição

The `.at()` function <!-- REF #collection.at().Summary -->returns the item at position _index_, allowing for positive and negative integers<!-- END REF -->.

> Essa função não modifica a coleção original.

Os números inteiros negativos contam para trás a partir do último item da colecção.

The function returns Undefined if _index_ is beyond collection limits.

#### Exemplo

```4d
var $col : Collection

 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

<!-- END REF -->

<!-- REF collection.average().Desc -->

## .average()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.average().Params -->

| Parâmetro    | Tipo            |     | Descrição                                            |
| ------------ | --------------- | :-: | ---------------------------------------------------- |
| propertyPath | Text            |  -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real, Undefined |  <- | Média aritmética dos valores coleção                 |

<!-- END REF -->

#### Descrição

The `.average()` function <!-- REF #collection.average().Summary -->returns the arithmetic mean (average) of defined values in the collection instance<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.average()` returns `undefined` if:

- a coleção estiver vazia,
- a coleção não contiver elementos numéricos,
- _propertyPath_ is not found in the collection.

#### Exemplo 1

```4d
 var $col : Collection
 $col:=New collection(10;20;"Monday";True;6)
 $vAvg:=$col.average() //12
```

#### Exemplo 2

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $vAvg:=$col.average("salary") //23500
```

<!-- END REF -->

<!-- REF collection.clear().Desc -->

## .clear()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.clear().Syntax -->**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->

| Parâmetro  | Tipo       |     | Descrição                                            |
| ---------- | ---------- | :-: | ---------------------------------------------------- |
| Resultados | Collection |  <- | Collection original com todos os elementos removidos |

<!-- END REF -->

#### Descrição

The `.clear()` function <!-- REF #collection.clear().Summary -->removes all elements from the collection instance and returns an empty collection<!-- END REF -->.

> Essa função modifica a coleção original.

#### Exemplo

```4d
var $col : Collection
$col:=New collection(1;2;5)
$col.clear()
$vSize:=$col.length //$vSize=0
```

<!-- END REF -->

<!-- REF collection.combine().Desc -->

## .combine()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.combine().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                              |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------------------------------------ |
| col2       | Collection |  -> | Collection a combinar                                                                                  |
| index      | Integer    |  -> | Posição para a qual inserir elementos para combinar em coleção (padrão = length +1) |
| Resultados | Collection |  <- | Collection original contendo elementos combinados                                                      |

<!-- END REF -->

#### Descrição

The `.combine()` function <!-- REF #collection.combine().Summary -->inserts _col2_ elements at the end or at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->. Unlike the `.insert()` function, `.combine()` adds each value of _col2_ in the original collection, and not as a single collection element.

> Essa função modifica a coleção original.

By default, _col2_ elements are added at the end of the orginal collection. You can pass in _index_ the position where you want the _col2_ elements to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, the actual starting _index_ will be set to the length of the collection.
- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value is negative, _index_ is set to 0.

#### Exemplo

```4d
var $c; $fruits : Collection
$c:=New collection(1;2;3;4;5;6)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$c.combine($fruits;3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```

<!-- END REF -->

<!-- REF collection.concat().Desc -->

## .concat()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->

| Parâmetro  | Tipo                                                           |     | Descrição                                                                                                                      |
| ---------- | -------------------------------------------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------ |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture |  -> | Valores a concatenar. If _value_ is a collection, all collection elements are added to the original collection |
| Resultados | Collection                                                     |  <- | Nova coleção com valores adicionados à coleção original                                                                        |

<!-- END REF -->

#### Descrição

The `.concat()` function <!-- REF #collection.concat().Summary -->returns a new collection containing the elements of the original collection with all elements of the _value_ parameter added to the end<!-- END REF -->.

> Essa função não modifica a coleção original.

If _value_ is a collection, all its elements are added as new elements at the end of the original collection. If _value_ is not a collection, it is added itself as a new element.

#### Exemplo

```4d
var $c : Collection
$c:=New collection(1;2;3;4;5)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$fruits.push(New object("Intruder";"Tomato"))
$c2:=$c.concat($fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
$c2:=$c.concat(6;7;8) //[1,2,3,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.copy().Desc -->

## .copy()

<details><summary>História</summary>

| Release | Mudanças                                                           |
| ------- | ------------------------------------------------------------------ |
| 18 R3   | New _ck shared_ option. New _groupWith_ parameters |
| v16 R6  | Adicionado                                                         |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| Parâmetro    | Tipo       |     | Descrição                                                                                                                           |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------- |
| option       | Integer    |  -> | `ck resolve pointers`: resolve pointers before copying,<br/>`ck shared`: return a shared collection |
| groupWithCol | Collection |  -> | Coleção partilhada a ser agrupada com a coleção resultante                                                                          |
| groupWithObj | Object     |  -> | Objeto partilhado a ser agrupado com a coleção resultante                                                                           |
| Resultados   | Collection |  <- | Cópia profunda da collection original                                                                                               |

<!-- END REF -->

#### Descrição

The `.copy()` function <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->._**Deep copy**_ means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.

> Essa função não modifica a coleção original.

If passed, the _option_ parameter can contain one of the following constants (or both):

| option                | Descrição                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Se a collection original contém valores tipo ponteiro, por padrão a cópia também contém os ponteiros. However, you can resolve pointers when copying by passing the `ck resolve pointers` constant. Nesse caso, cada ponteiro presenta na coleção é avaliada quando copiar e seu valor de dereferencia é usado.                                                 |
| `ck shared`           | By default, `copy()` returns a regular (not shared) collection, even if the command is applied to a shared collection. Pass the `ck shared` constant to create a shared collection. In this case, you can use the _groupWith_ parameter to associate the shared collection with another collection or object (see below). |

The _groupWithCol_ or _groupWithObj_ parameters allow you to designate a collection or an object with which the resulting collection should be associated.

:::note

Os objectos de datastore, dataclass, e entity não são copiáveis. If `.copy()` is called with them, `Null` values are returned.

:::

#### Exemplo 1

We want to copy the _$lastnames_ regular (non shared) collection into the _$sharedObject_ shared object. To do this, we must create a shared copy of the collection (_$sharedLastnames_).

```4d
var $sharedObject : Object
var $lastnames;$sharedLastnames : Collection
var $text : Text

$sharedObject:=New shared object

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames is a regular collection

$sharedLastnames:=$lastnames.copy(ck shared) //$sharedLastnames is a shared collection

//Now we can put $sharedLastnames into $sharedObject Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames End use
```

#### Exemplo 2

We want to combine _$sharedColl1_ and _$sharedColl2_. Já que pertencem a grupos partilhados diferentes, uma combinação diferente resultaria em um erro. Therefore, we must make a shared copy of _$sharedColl1_ and designate _$sharedColl2_ as a shared group for the copy.

```4d
var $sharedColl1;$sharedColl2;$copyColl : Collection

$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
$sharedColl2:=New shared collection(New shared object("lastname";"Brown"))

//$copyColl belongs to the same shared group as $sharedColl2
 $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
 Use($sharedColl2)
    $sharedColl2.combine($copyColl)
 End use
```

#### Exemplo 3

We have a regular collection (_$lastnames_) and we want to put it in the **Storage** of the application. To do this, we must create a shared copy beforehand (_$sharedLastnames_).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames is a regular collection

$sharedLastnames:=$lastnames.copy(ck shared) // shared copy Use(Storage)
    Storage.lastnames:=$sharedLastnames End use
```

#### Exemplo

This example illustrates the use of the `ck resolve pointers` option:

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //displays "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //displays "Hello You!"
```

<!-- END REF -->

<!-- REF collection.count().Desc -->

## .count()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.count().Params -->

| Parâmetro    | Tipo |     | Descrição                                            |
| ------------ | ---- | :-: | ---------------------------------------------------- |
| propertyPath | Text |  -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real |  <- | Número de elementos na coleção                       |

<!-- END REF -->

#### Descrição

The `.count()` function <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

If the collection contains objects, you can pass the _propertyPath_ parameter. In this case, only elements that contain the _propertyPath_ are taken into account.

#### Exemplo

```4d
 var $col : Collection
 var $count1;$count2 : Real
 $col:=New collection(20;30;Null;40)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $col.push(New object("lastName";"Henry";"salary";12000))
 $count1:=$col.count() //$count1=7
 $count2:=$col.count("name") //$count2=3

```

<!-- END REF -->

<!-- REF collection.countValues().Desc -->

## .countValues()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.countValues().Params -->

| Parâmetro    | Tipo                                            |     | Descrição                                            |
| ------------ | ----------------------------------------------- | :-: | ---------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |  -> | Valor a contar                                       |
| propertyPath | Text                                            |  -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real                                            |  <- | Número de ocorrências do valor                       |

<!-- END REF -->

#### Descrição

The `.countValues()` function <!-- REF #collection.countValues().Summary -->returns the number of times value is found in the collection<!-- END REF -->.

You can pass in _value_:

- um valor escalar (texto, número, booleano, data),
- um objeto ou uma referência de coleção.

For an element to be found, the type of _value_ must be equivalent to the type of the element; the method uses the equality operator.

The optional _propertyPath_ parameter allows you to count values inside a collection of objects: pass in _propertyPath_ the path of the property whose values you want to count.

> Essa função não modifica a coleção original.

#### Exemplo 1

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection(1;2;5;5;5;3;6;4)
 $vCount:=$col.countValues(5) // $vCount=3
```

#### Exemplo 2

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection
 $col.push(New object("name";"Smith";"age";5))
 $col.push(New object("name";"Wesson";"age";2))
 $col.push(New object("name";"Jones";"age";3))
 $col.push(New object("name";"Henry";"age";4))
 $col.push(New object("name";"Gross";"age";5))
 $vCount:=$col.countValues(5;"age") //$vCount=2
```

#### Exemplo 3

```4d
 var $numbers; $letters : Collection
 var $vCount : Integer

 $letters:=New collection("a";"b";"c")
 $numbers:=New collection(1;2;$letters;3;4;5)

 $vCount:=$numbers.countValues($letters) //$vCount=1
```

<!-- END REF -->

<!-- REF collection.distinct().Desc -->

## .distinct()

<details><summary>História</summary>

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 20      | Support of `ck count values` |
| v16 R6  | Adicionado                   |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| Parâmetro    | Tipo       |     | Descrição                                 |
| ------------ | ---------- | :-: | ----------------------------------------- |
| propertyPath | Text       |  -> | Rota do atributo cujos valores quer obter |
| options      | Integer    |  -> | `ck diacritical`, `ck count values`       |
| Resultados   | Collection |  <- | Nova coleção com apenas valores distintos |

<!-- END REF -->

#### Descrição

The `.distinct()` function <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.

> Essa função não modifica a coleção original.

A coleção retornada é ordenada automaticamente. **Null** values are not returned.

If the collection contains objects, you can pass the _propertyPath_ parameter to indicate the object property whose distinct values you want to get.

In the _options_ parameter, you can pass one or a combination of the following constants:

| Parâmetros        | Valor | Comentário                                                                                                                                                                                                                               |
| ----------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8     | A avaliação é sensível a maiúsculas e minúsculas e diferencia os caracteres acentuados. Como padrão, uma avaliação não-diacrítica é realizada.                                                           |
| `ck count values` | 32    | Devolve a contagem de elementos para cada valor distinto. When this option is passed, `.distinct()` returns a collection of objects containing a pair of `{"value":*value*;"count":*count*}` attributes. |

#### Exemplos

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
 $c3:=$c.distinct("size";ck count values) //$c3=[{value:1,count:2},{value:3,count:1}]

```

<!-- END REF -->

<!-- REF collection.equal().Desc -->

## .equal()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->

| Parâmetro   | Tipo       |     | Descrição                                                                                           |
| ----------- | ---------- | :-: | --------------------------------------------------------------------------------------------------- |
| collection2 | Collection |  -> | Coleção a comparar                                                                                  |
| option      | Integer    |  -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |
| Resultados  | Parâmetros |  <- | True se as coleções forem idênticas, senão false                                                    |

<!-- END REF -->

#### Descrição

The `.equal()` function <!-- REF #collection.equal().Summary -->compares the collection with collection2 <!-- END REF -->and returns **true** if they are identical (deep comparison).

Como padrão, uma avaliação não-diacrítica é realizada. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the option parameter.

> Elements with **Null** values are not equal to Undefined elements.

#### Exemplo

```4d
 var $c; $c2 : Collection
 var $b : Boolean

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3;4)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("1";"a";"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2) // true

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2;ck diacritical) //false
```

<!-- END REF -->

<!-- REF collection.every().Desc -->

## .every()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.every().Syntax -->**.every**( { *startFrom* : Integer ; } *formula* : 4D.Function { ;*...param* : any } ) : Boolean<br/>**.every**( { *startFrom* : Integer ; } *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| startFrom  | Integer                      |  -> | Índice para início do teste em                                        |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| param      | Mixed                        |  -> | Parameter(s) to pass to _formula_ or _methodName_  |
| Resultados | Parâmetros                   |  <- | True se todos os elementos passarem o teste com sucesso               |

<!-- END REF -->

#### Descrição

The `.every()` function <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided _formula_ object or _methodName_ name<!-- END REF -->.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

In all cases, at the point when the `.every()` function encounters the first collection element evaluated to **false**, it stops calling the callback and returns **false**.

By default, `.every()` tests the whole collection. Optionally, you can pass in _startFrom_ the index of the element from which to start the test.

- If _startFrom_ >= the collection's length, **false** is returned, which means the collection is not tested.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection ( _startFrom:=startFrom+length_).
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemplo 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) //returns true
$c.push(-1)
$b:=$c.every($f) //returns false
```

#### Exemplo 2

Esse exemplo testa que todos os elementos da coleção sejam do tipo real:

```4d
var $c : Collection
var $b : Boolean
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every("TypeLookUp";Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every("TypeLookUp";Is real) //$b=false
```

<!-- END REF -->

<!-- REF collection.extract().Desc -->

## .extract()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathOrTargetPathN* : Text } ) : Collection<!-- END REF -->

<!-- REF #collection.extract().Params -->

| Parâmetro    | Tipo       |     | Descrição                                                                                                                                                                                             |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       |  -> | Rota de propriedade de objeto cujos valores serão extraídos para nova coleção                                                                                                                         |
| targetpath   | Text       |  -> | Rota de propriedade alvo ou nome propriedade                                                                                                                                                          |
| option       | Integer    |  -> | `ck keep null`: include null properties in the returned collection (ignored by default). Parameter ignored if _targetPath_ passed. |
| Resultados   | Collection |  <- | Nova collection contendo valores extraídos                                                                                                                                                            |

<!-- END REF -->

#### Descrição

The `.extract()` function <!-- REF #collection.extract().Summary -->creates and returns a new collection containing _propertyPath_ values extracted from the original collection of objects<!-- END REF -->.

> Essa função não modifica a coleção original.

The contents of the returned collection depends on the _targetPath_ parameter:

- If the _targetPath_ parameter is omitted, `.extract()` populates the new collection with the _propertyPath_ values of the original collection.

  By default, elements for which _propertyPath_ is null or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the _option_ parameter to include these values as null elements in the returned collection.

- If one or more _targetPath_ parameter(s) are passed (corresponding to one or more _propertyPath_ parameter(s)), `.extract()` populates the new collection with the _propertyPath_ properties and each element of the new collection is an object with _targetPath_ properties filled with the matching _propertyPath_ properties. Null values are kept (_option_ parameter is ignored with this syntax).

#### Exemplo 1

```4d
var $c : Collection
$c:=New collection
$c.push(New object("name";"Cleveland"))
$c.push(New object("zip";5321))
$c.push(New object("name";"Blountsville"))
$c.push(42)
$c2:=$c.extract("name") // $c2=[Cleveland,Blountsville]
$c2:=$c.extract("name";ck keep null) //$c2=[Cleveland,null,Blountsville,null]
```

#### Exemplo 2

```4d
var $c : Collection
$c:=New collection
$c.push(New object("zc";35060))
$c.push(New object("name";Null;"zc";35049))
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$c2:=$c.extract("name";"City") //$c2=[{City:null},{City:Cleveland},{City:Blountsville},{City:Adger},{City:Clanton},{City:Clanton}]
$c2:=$c.extract("name";"City";"zc";"Zip") //$c2=[{Zip:35060},{City:null,Zip:35049},{City:Cleveland,Zip:35049},{City:Blountsville,Zip:35031},{City:Adger,Zip:35006},{City:Clanton,Zip:35046},{City:Clanton,Zip:35045}]
```

<!-- END REF -->

<!-- REF collection.fill().Desc -->

## .fill()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.fill().Params -->

| Parâmetro  | Tipo                                            |     | Descrição                                         |
| ---------- | ----------------------------------------------- | :-: | ------------------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean |  -> | Valores preenchido                                |
| startFrom  | Integer                                         |  -> | Início do índice (incluído)    |
| end        | Integer                                         |  -> | Final do índice (não incluído) |
| Resultados | collection                                      |  <- | Coleção original com valores preenchidos          |

<!-- END REF -->

#### Descrição

The `.fill()` function <!-- REF #collection.fill().Summary -->fills the collection with the specified _value_, optionally from _startFrom_ index to _end_ index, and returns the resulting collection<!-- END REF -->.

> Essa função modifica a coleção original.

- If the _startFrom_ parameter is omitted, _value_ is set to all collection elements (_startFrom_=0).
- If the _startFrom_ parameter is passed and _end_ omitted, _value_ is set to collection elements starting at _startFrom_ to the last element of the collection (_end_=length).
- If both the _startFrom_ parameter and _end_ are passed, _value_ is set to collection elements starting at _startFrom_ to the element _end_.

Em caso de inconsistências, as regras abaixos são seguidas:

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). If the calculated value is negative, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end_ < _startFrom_ (passed or calculated values), the method does nothing.

#### Exemplo

```4d
 var $c : Collection
 $c:=New collection(1;2;3;"Lemon";Null;"";4;5)
 $c.fill("2") // $c:=[2,2,2,2,2,2,2,2]
 $c.fill("Hello";5) // $c=[2,2,2,2,2,Hello,Hello,Hello]
 $c.fill(0;1;5) // $c=[2,0,0,0,0,Hello,Hello,Hello]
 $c.fill("world";1;-5) //-5+8=3 -> $c=[2,"world","world",0,0,Hello,Hello,Hello]
```

<!-- END REF -->

<!-- REF collection.filter().Desc -->

## .filter()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.filter().Syntax -->**.filter**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.filter().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                                        |
| ---------- | ---------------------------- | :-: | -------------------------------------------------------------------------------- |
| formula    | 4D. Function |  -> | Objecto fórmula                                                                  |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção            |
| param      | any                          |  -> | Parameter(s) to pass to _formula_ or _methodName_             |
| Resultados | Collection                   |  <- | Nova coleção contendo elementos filtrados (cópia superficial) |

<!-- END REF -->

#### Descrição

The `.filter()` function <!-- REF #collection.filter().Summary -->returns a new collection containing all elements of the original collection for which the _formula_ or _methodName_ result is **true**<!-- END REF -->. This function returns a _**shallow copy**_, which means that objects or collections in both collections share the same reference. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

Pode determinar a chamada de retorno a ser executada para filtrar os elementos de recolha utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional) and an object in first parameter (_$1_). The callback can perform any test, with or without the parameter(s) and must return **true** for each element fulfilling the condition and thus, to push to the new collection.

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- _$1.result_ (Boolean): **true** if the element value matches the filter condition and must be kept, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

:::note

When using _methodName_ as callback, and if the method does not return any value, `.filter()` will look at the property _$1.result_ that you must set to **true** for each element fulfilling the condition.

:::

#### Exemplo 1

Se quiser obter a coleção de elementos textos cujo tamanho for menor que 6:

```4d
var $col;$colNew : Collection
$col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
$colNew:=$col.filter(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 6)
  //$colNew=["hello","world","tim","miami"]
```

#### Exemplo 2

Se quiser filtrar elementos de acordo com seu tipo de valor:

```4d
 var $c;$c2;$c3 : Collection
 var $f : 4D.Function

 $f:=Formula(OB Get type($1;"value")=$2)
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter($f;Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter($f;Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

<!-- END REF -->

<!-- REF collection.find().Desc -->

## .find()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.find().Syntax -->**.find**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : any<br/>**.find**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->

<!-- REF #collection.find().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| startFrom  | Integer                      |  -> | Índice onde inicia a pesquisa                                         |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| param      | any                          |  -> | Parameter(s) to pass to _formula_ or _methodName_  |
| Resultados | any                          |  <- | Primeiro valor encontrado ou Undefined se não encontrado              |

<!-- END REF -->

#### Descrição

The `.find()` function <!-- REF #collection.find().Summary -->returns the first value in the collection for which _formula_ or _methodName_ result, applied on each element, returns **true**<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

By default, `.find()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemplo 1

Se quiser obter o primeiro elemento com um tamanho menor que 5:

```4d
var $col : Collection
$col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
$value:=$col.find(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 5) //$value="tim"
```

#### Exemplo 2

Se quiser encontrar o nome da cidade dentro da coleção:

```4d
var $c : Collection
var $c2 : Object
$c:=New collection
$c.push(New object("name"; "Cleveland"; "zc"; 35049))
$c.push(New object("name"; "Blountsville"; "zc"; 35031))
$c.push(New object("name"; "Adger"; "zc"; 35006))
$c.push(New object("name"; "Clanton"; "zc"; 35046))
$c.push(New object("name"; "Clanton"; "zc"; 35045))

$c2:=$c.find(Formula($1.value.name=$2); "Clanton")  //$c2={name:Clanton,zc:35046}

```

<!-- END REF -->

<!-- REF collection.findIndex().Desc -->

## .findIndex()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.findIndex().Syntax -->**.findIndex**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : Integer<br/>**.findIndex**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->

<!-- REF #collection.findIndex().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| startFrom  | Integer                      |  -> | Índice onde inicia a pesquisa                                         |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| param      | any                          |  -> | Parameter(s) to pass to _formula_ or _methodName_  |
| Resultados | Integer                      |  <- | Indice do primeiro valor encontrado ou -1 se não encontrado           |

<!-- END REF -->

#### Descrição

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which _formula_ or _methodName_, applied on each element, returns **true**<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemplo

Se quiser encontrar a posição do primeiro nome de cidade dentro da coleção:

```4d
var $c : Collection
 var $val2;$val3 : Integer
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $val2:=$c.findIndex("FindCity";"Clanton") // $val2=3
 $val3:=$c.findIndex($val2+1;"FindCity";"Clanton") //$val3=4
```

<!-- END REF -->

<!-- REF collection.first().Desc -->

## .first()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.first().Syntax -->**.first**() : any <!-- END REF -->

<!-- REF #collection.first().Params -->

| Parâmetro  | Tipo |     | Descrição                     |
| ---------- | ---- | :-: | ----------------------------- |
| Resultados | any  |  <- | Primeiro elemento de colecção |

<!-- END REF -->

#### Descrição

The `.first()` function <!-- REF #collection.first().Summary -->returns the first element of the collection<!-- END REF -->.

> Essa função não modifica a coleção original.

Nome da função a chamar para filtrar a coleção

#### Exemplo

```4d
var $col : Collection
 $col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
 $value:=$col.find("LengthLessThan";5) //$value="tim"
```

<!-- END REF -->

<!-- REF collection.flat().Desc -->

## .flat()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.flat().Syntax -->**.flat**( { *depth* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.flat().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                             |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------------------------------------- |
| depth      | Integer    |  -> | A profundidade a que uma estrutura de colecção aninhada deve ser aplanada. O padrão=1 |
| Resultados | Collection |  <- | Colecção achatada                                                                                     |

<!-- END REF -->

#### Descrição

The `.flat()` function <!-- REF #collection.flat().Summary -->creates a new collection with all sub-collection elements concatenated into it recursively up to the specified _depth_<!-- END REF -->.

By default, if the _depth_ parameter is omitted, only the first level of the nested collection structure will be flattened.

> Essa função não modifica a coleção original.

#### Exemplo

```4d
$col:=New collection(1; 2; New collection(3; 4))
$col.flat()
// [1, 2, 3, 4]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat()
// [1, 2, 3, 4, [5, 6]]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat(2)
// [1, 2, 3, 4, 5, 6]

$col:=New collection(1; 2; New collection(3; 4; 5; 6; New collection(7; 8; New collection(9; 10))))
$col.flat(MAXLONG)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<!-- END REF -->

<!-- REF collection.flatMap().Desc -->

## .flatMap()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.flatMap().Syntax -->**.flatMap**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.flatMap**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.flatMap().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| param      | any                          |  -> | Parameter(s) to pass to _formula_ or _methodName_  |
| Resultados | Collection                   |  <- | Collection of transformed values and flattened by a depth of 1        |

<!-- END REF -->

#### Descrição

The `.flatMap()` function <!-- REF #collection.flatMap().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection and flattened by a depth of 1<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s).

This function is identical to a [`map()`](#map) call followed by a [`flat()`](#flat) call of depth 1.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em <em x-id="3">param</em> (opcional). It receives an `Object` in first parameter ($1).

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

#### Exemplo 1

```4d
C_OBJECT($1)
 C_LONGINT($2)
 If(OB Get type($1;"value")=$2)


    $1.result:=True
 End if
```

#### Exemplo 2

```
var $col; $result : Collection
$col:=New collection("Hello how"; ""; "are you ?")

$result:=$col.map(Formula(Split string($1.value; " ")))
// [["Hello", "how"], [], ["are", "you", "?"]]

$result:=$col.flatMap(Formula(Split string($1.value; " ")))
// ["Hello", "how", "are", "you", "?"]
```

#### Exemplo 3

Pretende-se calcular a percentagem de cada valor da colecção em relação ao total:

```4d
var $c; $c2 : Collection
 $c:=New collection(1;4;9;10;20)
 $c2:=$c.map("Percentage";$c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

<!-- END REF -->

<!-- REF collection.includes().Desc -->

## .includes()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.includes().Syntax -->**.includes**( *toSearch* : expression { ; *startFrom* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.includes().Params -->

| Parâmetro  | Tipo       |     | Descrição                                     |
| ---------- | ---------- | :-: | --------------------------------------------- |
| toSearch   | expressão  |  -> | Expressão a pesquisar na coleção              |
| startFrom  | Integer    |  -> | Índice onde inicia a pesquisa                 |
| Resultados | Parâmetros |  <- | True if _toSearch_ is found in the collection |

<!-- END REF -->

#### Descrição

The `.includes()` function <!-- REF #collection.includes().Summary -->returns True if the _toSearch_ expression is found among collection elements, otherwise False<!-- END REF -->.

> Essa função não modifica a coleção original.

In _toSearch_, pass the expression to find in the collection. Pode passar:

- um valor escalar (texto, número, booleano, data),
- $1.result:=$1.value&gt;0
- um objeto ou uma referência de coleção.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= collection's length, False is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_). Note that even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemplo

```4d
 var $col : Collection
 var $in : Boolean
 var $obj : Object
 $obj:=New object("value"; 10)
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5;$obj)
 $in:=$col.includes(3) //True
 $in:=$col.includes(5;6) //True
 $in:=$col.includes("al@") //True
 $in:=$col.includes("Hello") //False
 $in:=$col.includes($obj)  //True
 $in:=$col.includes(New object("value"; 10)) //False
```

<!-- END REF -->

<!-- REF collection.indexOf().Desc -->

## .indexOf()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->

| Parâmetro  | Tipo      |     | Descrição                                                                  |
| ---------- | --------- | :-: | -------------------------------------------------------------------------- |
| toSearch   | expressão |  -> | Expressão a pesquisar na coleção                                           |
| startFrom  | Integer   |  -> | Índice onde inicia a pesquisa                                              |
| Resultados | Integer   |  <- | Índice da primeira ocorrência de toSearch na coleção, -1 se não encontrado |

<!-- END REF -->

#### Descrição

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.

> Essa função não modifica a coleção original.

In _toSearch_, pass the expression to find in the collection. Pode passar:

- um valor escalar (texto, número, booleano, data),
- $1.result:=$1.value&gt;0
- um objeto ou uma referência de coleção.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemplo

```4d
 var $col : Collection
 var $i : Integer
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5)
 $i:=$col.indexOf(3) //$i=4
 $i:=$col.indexOf(5;5) //$i=9
 $i:=$col.indexOf("al@") //$i=5
 $i:=$col.indexOf("Hello") //$i=-1
```

<!-- END REF -->

<!-- REF collection.indices().Desc -->

## .indices()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.indices().Params -->

| Parâmetro   | Tipo       |     | Descrição                                                                            |
| ----------- | ---------- | :-: | ------------------------------------------------------------------------------------ |
| queryString | Text       |  -> | Critérios de pesquisa                                                                |
| value       | any        |  -> | Valores a comparar quando usar placeholders (valores temporários) |
| Resultados  | Collection |  <- | Índices elemento correspondendo a queryString na coleção                             |

<!-- END REF -->

#### Descrição

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the _queryString_ search conditions<!-- END REF -->, and not elements themselves. Indices são retornados em ordem ascendente.

> Essa função não modifica a coleção original.

The _queryString_ parameter uses the following syntax:

```4d
valor de comparação propertyPath {valor de comparação logicalOperator propertyPath}
```

For a detailed description of the _queryString_ and _value_ parameters, please refer to the `dataClass.query()` function.

#### Exemplo

```4d
 var $c; $icol : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))

 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $icol:=$c.indices("name = :1";"Cleveland") // $icol=[0]
 $icol:=$c.indices("zc > 35040") // $icol=[0,3,4]
```

<!-- END REF -->

<!-- REF collection.insert().Desc -->

## .insert()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.insert().Syntax -->**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->

| Parâmetro  | Tipo       |     | Descrição                                        |
| ---------- | ---------- | :-: | ------------------------------------------------ |
| index      | Integer    |  -> | Onde inserir os elementos                        |
| element    | any        |  -> | Elemento a inserir na coleção                    |
| Resultados | Collection |  <- | Collection original contendo elementos inseridos |

<!-- END REF -->

#### Descrição

The `.insert()` function <!-- REF #collection.insert().Summary --> inserts _element_ at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->.

> Essa função modifica a coleção original.

In _index_, pass the position where you want the element to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, actual starting index will be set to the length of the collection.
- If _index_ <0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- Se o valor calculado for negativo, index será estabelecido como 0.

Qualquer tipo de elemento aceito por uma coleção pode ser inserido, mesmo outra coleção.

#### Exemplo

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d") //$col=["a","b","c","d"]
 $col.insert(2;"X") //$col=["a","b","X","c","d"]
 $col.insert(-2;"Y") //$col=["a","b","X","Y","c","d"]
 $col.insert(-10;"Hi") //$col=["Hi","a","b","X","Y","c","d"]
```

<!-- END REF -->

<!-- REF collection.join().Desc -->

## .join()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->

| Parâmetro  | Tipo    |     | Descrição                                                                              |
| ---------- | ------- | :-: | -------------------------------------------------------------------------------------- |
| delimiter  | Text    |  -> | Separador a usar entre os elementos                                                    |
| option     | Integer |  -> | `ck ignore null or empty`: ignore null and empty strings in the result |
| Resultados | Text    |  <- | String contendo todos os elementos da coleção, separados por um delimitador            |

<!-- END REF -->

#### Descrição

The `.join()` function <!-- REF #collection.join().Summary -->converts all elements of the collection to strings and concatenates them using the specified _delimiter_ string as separator<!-- END REF -->.The function returns the resulting string.

> Essa função não modifica a coleção original.

Como padrão, elementos null ou vazios da coleção são retornados na string resultante. Pass the `ck ignore null or empty` constant in the _option_ parameter if you want to remove them from the resulting string.

#### Exemplo

```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```

<!-- END REF -->

<!-- REF collection.last().Desc -->

## .last()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.last().Syntax -->**.last**() : any <!-- END REF -->

<!-- REF #collection.last().Params -->

| Parâmetro  | Tipo |     | Descrição                  |
| ---------- | ---- | :-: | -------------------------- |
| Resultados | any  |  <- | Último elemento da coleção |

<!-- END REF -->

#### Descrição

The `.last()` function <!-- REF #collection.last().Summary -->returns the last element of the collection<!-- END REF -->.

> Essa função não modifica a coleção original.

Nome da função a chamar para filtrar a coleção

#### Exemplo

```4d
var $col; $emptyCol : Collection
var $last : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$last:=$col.last() // 50

$emptyCol:=New collection() //empty
// $last:=$emptyCol[$emptyCol.length-1] //returns an error
$last:=$emptyCol.last() // returns Undefined

```

<!-- END REF -->

<!-- REF collection.lastIndexOf().Desc -->

## .lastIndexOf()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->

| Parâmetro  | Tipo      |     | Descrição                                                                |
| ---------- | --------- | :-: | ------------------------------------------------------------------------ |
| toSearch   | expressão |  -> | O elemento que é pesquisado dentro da coleção                            |
| startFrom  | Integer   |  -> | Índice onde inicia a pesquisa                                            |
| Resultados | Integer   |  <- | Índice da última ocorrência de toSearch na coleção, -1 se não encontrado |

<!-- END REF -->

#### Descrição

The `.lastIndexOf()` function <!-- REF #collection.lastIndexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.

> Essa função não modifica a coleção original.

In _toSearch_, pass the expression to find in the collection. Pode passar:

- um valor escalar (texto, número, booleano, data),
- $1.result:=$1.value&gt;0
- um objeto ou uma referência de coleção.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in _startFrom_.

- If _startFrom_ >= the collection's length minus one (coll.length-1), the whole collection is searched (default).
- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). Se o valor calculado for negativo, -1 é retornado (a coleção não é pesquisada).
  **Note:** Even if _startFrom_ is negative, the collection is still searched from right to left.
- If _startFrom_ = 0, -1 is returned, which means the collection is not searched.

#### Exemplo

```4d
 var $col : Collection //$col.length inicializa em 0
 $col:=New collection("one";"two";"three") //$col.length atualizado a  3
 $col[4]:="five" //$col.length atualizado a 5
 $vSize:=$col.remove(0;3).length //$vSize=2
```

<!-- END REF -->

<!-- REF collection.length.Desc -->

## .length

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R5  | Adicionado |

</details>

<!-- REF #collection.length.Syntax -->**.length** : Integer<!-- END REF -->

#### Descrição

The `.length` property <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

The `.length` property is initialized when the collection is created. Adicionar ou remover elementos atualiza o tamanho, se necessário. This property is **read-only** (you cannot use it to set the size of the collection).

#### Exemplo

```4d
 $col:=$c.query("dateHired &lt; :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018 se hoje for 01/10/2018
```

<!-- END REF -->

<!-- REF collection.map().Desc -->

## .map()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.map().Syntax -->**.map**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.map().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| param      | any                          |  -> | Parameter(s) to pass to _formula_ or _methodName_  |
| Resultados | Collection                   |  <- | Collection de valores transformados                                   |

<!-- END REF -->

#### Descrição

The `.map()` function <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s). `.map()` always returns a collection with the same size as the original collection, except if _$1.stop_ was used (see below).

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em <em x-id="3">param</em> (opcional). It receives an `Object` in first parameter ($1).

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

#### Exemplo

```4d
var $1 : Object
 var $2 : Real
 $1.result:=Round(($1.value/$2)*100;2)
```

<!-- END REF -->

<!-- REF collection.max().Desc -->

## .max()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->

| Parâmetro    | Tipo                                            |     | Descrição                                             |
| ------------ | ----------------------------------------------- | :-: | ----------------------------------------------------- |
| propertyPath | Text                                            |  -> | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date |  <- | Valor máximo na coleção                               |

<!-- END REF -->

#### Descrição

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> Essa função não modifica a coleção original.

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns _Undefined_.

#### Exemplo

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $max:=$col.max() //{name:Alabama,salary:10500}
 $maxSal:=$col.max("salary") //50000
 $maxName:=$col.max("name") //"Wesson"
```

<!-- END REF -->

<!-- REF collection.min().Desc -->

## .min()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->

| Parâmetro    | Tipo                                            |     | Descrição                                             |
| ------------ | ----------------------------------------------- | :-: | ----------------------------------------------------- |
| propertyPath | Text                                            |  -> | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date |  <- | Valor mínimo na coleção                               |

<!-- END REF -->

#### Descrição

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> Essa função não modifica a coleção original.

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns _Undefined_.

#### Exemplo

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $min:=$col.min() //55
 $minSal:=$col.min("salary") //10000
 $minName:=$col.min("name") //"Alabama"
```

<!-- END REF -->

<!-- REF collection.multiSort().Desc -->

## .multiSort()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R3   | Adicionado |

</details>

<!-- REF #collection.multiSort().Syntax -->**.multiSort**() : Collection<br/>**.multiSort**( *colsToSort* : Collection ) : Collection<br/>**.multiSort**( *formula* : 4D.Function ; *colsToSort* : Collection ) : Collection<!-- END REF -->

<!-- REF #collection.multiSort().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                                                                                                                     |
| ---------- | ---------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D. Function |  -> | Objecto fórmula                                                                                                                                               |
| colsToSort | Collection                   |  -> | Collection of collections and/or objects with {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties |
| Resultados | Collection                   |  <- | Colecção original ordenada                                                                                                                                    |

<!-- END REF -->

#### Descrição

The `.multiSort()` function <!-- REF #collection.multiSort().Summary -->enables you to carry out a multi-level synchronized sort on a set of collections<!-- END REF -->.

> This function modifies the original collection as well as all collections used in _colsToSort_ parameter.

If `.multiSort()` is called with no parameters, the function has the same effect as the [`.sort()`](#sort) function: the collection is sorted (only scalar values) in ascending order by default, according to their type. Se a coleção contiver valores de tipos diferentes, eles serão primeiro agrupados por tipo e, em seguida, classificados. Se <em x-id="3">attributePath</em> levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1. null
2. booleans
3. strings
4. números
5. objetos
6. collections
7. datas

**Classificação sincronizada de nível único**

To sort several collections synchronously, just pass in _colsToSort_ a collection of collections to sort. Você pode passar um número ilimitado de coleções. The original collection will be sorted in ascending order and all _colsToSort_ collections will be sorted in a synchronized manner.

:::note

All _colsToSort_ collections must have the same number of elements, otherwise an error is returned.

:::

If you want to sort the collections in some other order than ascending, you must supply a _formula_ ([Formula object](FunctionClass.md#formula) that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. Você pode fornecer parâmetros adicionais à fórmula, se necessário.

A fórmula recebe os seguintes parâmetros:

- $1 (objeto), onde:
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (qualquer tipo): parâmetros adicionais

**Classificação sincronizada em vários níveis**

Defining a multi-level synchronized sort requires that you pass an object containing {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties instead of the _colToSort_ itself for every collection to use as sub-level.

The sort levels are determined by the order in which the collections are passed in the _colsToSort_ parameter: the position of a `collection`/`order` object in the syntax determines its sort level.

:::note

The `.multiSort()` function uses a [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability) sort algorithm.

:::

#### Exemplo 1

Uma simple classificação sincronizada de coleções com diferentes tipos de valores:

```4d
var $col;$col2;$col3 : Collection
$col:=["A"; "C"; "B"]
$col2:=[1; 2; 3]
$col3:=[["Jim"; "Philip"; "Maria"]; ["blue"; "green"]; ["11"; 22; "33"]]

$col.multiSort([$col2; $col3])
//$col=["A","B","C"]
//$col2=[1,3,2]
//$col3[0]=["Jim","Philip","Maria"]
//$col3[1]=["11",22,"33"]
//$col3[2]=["blue","green"]

```

#### Exemplo 2

Você deseja classificar três coleções sincronizadas: cidade, país e continente. Você deseja uma classificação ascendente da primeira e da terceira coleções e a sincronização da segunda coleção:

```4d
var $city : Collection
var $country : Collection
var $continent : Collection

$city:=["Paris"; "Lyon"; "Rabat"; "Eching"; "San Diego"]
$country:=["France"; "France"; "Morocco"; "Germany"; "US"]
$continent:=["Europe"; "Europe"; "Africa"; "Europe"; "America"]

$continent.multiSort([$country; {collection: $city; order: ck ascending}])
//$continent=["Africa","America","Europe","Europe","Europe"]
//$country=["Morocco","US","France","France","Germany"]
//$city=["Rabat","San Diego","Lyon","Paris","Eching"]

```

#### Exemplo 3

Você também pode sincronizar coleções de objetos.

```4d
var $name : Collection
var $address : Collection
$name:=[]
$name.push({firstname: "John"; lastname: "Smith"})
$name.push({firstname: "Alain"; lastname: "Martin"})
$name.push({firstname: "Jane"; lastname: "Doe"})
$name.push({firstname: "John"; lastname: "Doe"})
$address:=[]
$address.push({city: "Paris"; country: "France"})
$address.push({city: "Lyon"; country: "France"})
$address.push({city: "Eching"; country: "Germany"})
$address.push({city: "Berlin"; country: "Germany"})

$name.multiSort(Formula($1.value.firstname<$1.value2.firstname); [$address])
//"Alain Martin","Jane Doe","John Smith","John Doe"
//"Lyon France","Eching Germany","Paris France","Berlin Germany"

```

<!-- END REF -->

<!-- REF collection.orderBy().Desc -->

## .orderBy()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.orderBy().Syntax -->**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->

<!-- REF #collection.orderBy().Params -->

| Parâmetro   | Tipo       |     | Descrição                                                                                                                                    |
| ----------- | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| pathStrings | Text       |  -> | Caminho(s) de propriedade(s) no(s) qual(is) encomendar a coleção |
| pathObjects | Collection |  -> | Coleção de objetos criterio                                                                                                                  |
| ascOrDesc   | Integer    |  -> | `ck ascending` or `ck descending` (scalar values)                                                                         |
| Resultados  | Collection |  <- | Cópia ordenada da coleção (cópia superficial)                                                                             |

<!-- END REF -->

#### Descrição

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

If you pass no parameter, the function orders scalar values in the collection in ascending order (other element types such as objects or collections are returned with an internal order). You can modify this automatic order by passing the `ck ascending` or `ck descending` constants in the _ascOrDesc_ parameter (see below).

Também pode passar um parâmetro de critérios para definir como devem ordenar-se os elementos da coleção. Três sintaxes são compatíveis com esse parâmetro:

- _pathStrings_ : Text (formula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). _pathStrings_ contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. A ordem na qual as propriedades são passadas determina a prioridade de ordenação dos elementos da coleção Como padrão as propriedades são ordenadas de forma ascendente. Como padrão as propriedades são ordenadas de forma ascendente. Pode definir a ordem de clasificação de uma propriedade na string de critérios, separado da rota da propriedade por um só espaço: passe "asc" para ordenar em ordem ascendente ou "desc" em ordem descendente.

- _pathObjects_ : Collection. You can add as many objects in the _pathObjects_ collection as necessary. Como padrão, as propriedades se classificam em ordem ascendente ("descending" é false). Cada elemento da coleção contém um objeto estruturado da seguinte maneira:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

- _ascOrDesc_ : Integer. You pass one of the following constants from the **Objects and collections** theme:

  | Parâmetros    | Tipo    | Valor | Comentário                                                                     |
  | ------------- | ------- | ----- | ------------------------------------------------------------------------------ |
  | ck ascending  | Longint | 0     | Os elementos são ordenados de forma ascendente (por padrão) |
  | ck descending | Longint | 1     | Os elementos são ordenados de forma descendente                                |

  Essa sintaxe ordena apenas os valores escalares da coleção (outros tipos de elementos como objetos ou coleções são retornados sem ordenar).

Se a coleção conter elementos de tipos diferentes, são primeiro agrupados por tipo e ordenados depois. Se <em x-id="3">attributePath</em> levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1. null
2. booleans
3. strings
4. números
5. objetos
6. collections
7. datas

#### Exemplo 1

Ordenar uma coleção de números em ordem ascendente e descendente:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```

#### Exemplo 2

Ordenar uma coleção de objetos a partir de uma fórmula de texto com nomes de propriedades:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $c2:=$c.orderBy("value desc")
 $c2:=$c.orderBy("value desc, id")
 $c2:=$c.orderBy("value desc, id asc")
```

Ordenar uma coleção de objetos com uma rota de propriedades:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```

#### Exemplo 3

Ordenar uma coleção de objetos utilizando uma coleção de objetos critério:

```4d
 var $crit; $c; $c2 : COllection
 $crit:=New collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $crit.push(New object("propertyPath";"value";"descending";True))
 $crit.push(New object("propertyPath";"id";"descending";False))
 $c2:=$c.orderBy($crit)
```

Ordenar com uma rota de propriedade:

```4d

 var $crit; $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))
 $crit:=New collection(New object("propertyPath";"phones.p2";"descending";True))
 $c2:=$c.orderBy($crit)
```

<!-- END REF -->

<!-- REF collection.orderByMethod().Desc -->

## .orderByMethod()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *formula* : 4D.Function { ; ...*extraParam* : expression } ) : Collection<br/>**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection<!-- END REF -->

<!-- REF #collection.orderByMethod().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| extraParam | any                          |  -> | Parâmetro(s) a transmitir                          |
| Resultados | Collection                   |  <- | Cópia ordenada da coleção (cópia superficial)      |

<!-- END REF -->

#### Descrição

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the _formula_ 4D function or _methodName_ method<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;

- or _methodName_, the name of a project method (text).

In the callback, pass some code that compares two values and returns **true** if the first value is lower than the second value. You can provide _extraParam_ parameters to the callback if necessary.

A chamada de retorno recebe os seguintes parâmetros:

- $1 (objeto), onde:
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
  - $2...$N (qualquer tipo): parâmetros adicionais

Se utilizou um método, este deve definir o seguinte parâmetro:

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise

#### Exemplo 1

Se quiser ordenar a coleção de strings em ordem numérica ao invés de ordem alfabética:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod(Formula(Num($1.value)<Num($1.value2))) // $c3=["4","33","222","1111"]
```

#### Exemplo 2

Se quiser ordenar a coleção de strings de acordo com seu tamanho:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod(Formula(Length(String($1.value))>Length(String($1.value2))))
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

#### Exemplo 3

Se quiser ordenar a coleção por código de caractere ou alfabeticamente:

```4d
var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod("WordLength")
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

The _**sortCollection**_ method:

```4d
var $1 : Object
var $2: Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```

<!-- END REF -->

<!-- REF collection.pop().Desc -->

## .pop()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.pop().Syntax -->**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->

| Parâmetro  | Tipo |     | Descrição                  |
| ---------- | ---- | :-: | -------------------------- |
| Resultados | any  |  <- | Último elemento da coleção |

<!-- END REF -->

#### Descrição

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.

> Essa função modifica a coleção original.

When applied to an empty collection, `.pop()` returns _**undefined**_.

#### Exemplo

`.pop()`, used in conjunction with [`.push()`](#push), can be used to implement a first-in, last-out stack feature:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Returns 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Returns [4,5]
 $stack.pop() //$stack=[]  Returns 1
```

<!-- END REF -->

<!-- REF collection.push().Desc -->

## .push()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->

| Parâmetro  | Tipo       |     | Descrição                                        |
| ---------- | ---------- | :-: | ------------------------------------------------ |
| element    | Mixed      |  -> | Elementos a adicionar à coleção                  |
| Resultados | Collection |  <- | Collection original contendo elementos inseridos |

<!-- END REF -->

#### Descrição

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more _element_(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.

> Essa função modifica a coleção original.

#### Exemplo 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```

#### Exemplo 2

Você deseja ordenar a coleção resultante:

```4d
 var $col; $sortedCol : Collection
 $col:=New collection(5;3;9) //$col=[5,3,9]
 $sortedCol:=$col.push(7;50).sort()
  //$col=[5,3,9,7,50]
  //$sortedCol=[3,5,7,9,50]
```

<!-- END REF -->

<!-- REF collection.query().Desc -->

## .query()

<details><summary>História</summary>

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 17 R5   | Assistência de querySettings |
| v16 R6  | Adicionado                   |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| Parâmetro     | Tipo       |     | Descrição                                                                            |
| ------------- | ---------- | :-: | ------------------------------------------------------------------------------------ |
| queryString   | Text       |  -> | Critérios de pesquisa                                                                |
| value         | Mixed      |  -> | Valores a comparar quando usar placeholders (valores temporários) |
| querySettings | Object     |  -> | Opções de pesquisa: parâmetros, atributos                            |
| Resultados    | Collection |  <- | Elementos que correspondem com queryString na coleção                                |

<!-- END REF -->

#### Descrição

The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by _queryString_ and (optionally) _value_ or _querySettings_. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

The _queryString_ parameter uses the following syntax:

```4d
valor de comparação propertyPath {valor de comparação logicalOperator propertyPath}
```

For detailed information on how to build a query using _queryString_, _value_ and _querySettings_ parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function description.

> Formulas are not supported by the `collection.query()` function, neither in the _queryString_ parameter nor as _formula_ object parameter.

#### Exemplo 1

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.query("name = :1";"Cleveland") //$c2=[{name:Cleveland,zc:35049}]
 $c3:=$c.query("zc > 35040") //$c3=[{name:Cleveland,zc:35049},{name:Clanton,zc:35046},{name:Clanton,zc:35045}]
```

#### Exemplo 2

```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

Este exemplo devolve as pessoas cujo nome contém "in":

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

Este exemplo devolve as pessoas cujo nome não começa por uma string de uma variável (introduzida pelo usuário, por exemplo):

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

Este exemplo devolve as pessoas cuja idade não se conhece (propriedade definida como null ou indefinida):

```4d
 $col:=$c.query("age=null") //placeholders not allowed with "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

Este exemplo devolve as pessoas contratadas há mais de 90 dias:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018
```

#### Exemplo 3

More examples of queries can be found in the `dataClass.query()` page.

<!-- END REF -->

<!-- REF collection.reduce().Desc -->

## .reduce()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.reduce().Syntax -->**.reduce**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduce**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduce().Params -->

| Parâmetro  | Tipo                                            |     | Descrição                                                                         |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- |
| formula    | 4D. Function                    |  -> | Objecto fórmula                                                                   |
| methodName | Text                                            |  -> | Nome da função a qual se chama para processar os elementos da coleção             |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |
| param      | expressão                                       |  -> | Parâmetro(s) a transmitir                                      |
| Resultados | Text, Number, Object, Collection, Date, Boolean |  <- | Resultado do valor do acumulador                                                  |

<!-- END REF -->

#### Descrição

The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

A chamada de retorno recebe os seguintes parâmetros:

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

#### Exemplo 1

```4d
C_COLLECTION($c)
 $c:=New collection(5;3;5;1;3;4;4;6;2;2)
 $r:=$c.reduce("Multiply";1) //returns 86400
```

#### Exemplo 2

Este exemplo permite reduzir vários elementos da coleção a um só:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce(Formula(Flatten)) //$r=[0,1,2,3,4,5,6,7]
```

With the following _**Flatten**_ method:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.reduceRight().Desc -->

## .reduceRight()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.reduceRight().Syntax -->**.reduceRight**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduceRight**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduceRight().Params -->

| Parâmetro  | Tipo                                            |     | Descrição                                                                         |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- |
| formula    | 4D. Function                    |  -> | Objecto fórmula                                                                   |
| methodName | Text                                            |  -> | Nome da função a qual se chama para processar os elementos da coleção             |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |
| param      | expressão                                       |  -> | Parâmetro(s) a transmitir                                      |
| Resultados | Text, Number, Object, Collection, Date, Boolean |  <- | Resultado do valor do acumulador                                                  |

<!-- END REF -->

#### Descrição

The `.reduceRight()` function <!-- REF #collection.reduceRight().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from right to left) to reduce it to a single value<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

A chamada de retorno recebe os seguintes parâmetros:

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

#### Exemplo 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduceRight(Formula($1.accumulator*=$1.value); 1)  //returns 86400

```

#### Exemplo 2

Este exemplo permite reduzir vários elementos da coleção a um só:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduceRight(Formula(Flatten)) //$r=[6,7,4,5,2,3,0,1]
```

With the following _**Flatten**_ method:

```4d
	//Flatten project method
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.remove().Desc -->

## .remove()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.remove().Syntax -->**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->

<!-- REF #collection.remove().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                         |
| ---------- | ---------- | :-: | ----------------------------------------------------------------- |
| index      | Integer    |  -> | Elemento no qual que se inicia a eliminação                       |
| howMany    | Integer    |  -> | Número de elementos a eliminar, ou 1 elemento se omitir           |
| Resultados | Collection |  <- | Original collection without removed element(s) |

<!-- END REF -->

#### Descrição

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified _index_ position in the collection and returns the edited collection<!-- END REF -->.

> Essa função modifica a coleção original.

In _index_, pass the position where you want the element to be removed from the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0. If _index_ is greater than the length of the collection, actual starting index will be set to the length of the collection.

- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _index_ is set to 0.
- If the calculated value > the length of the collection, _index_ is set to the length.

In _howMany_, pass the number of elements to remove from _index_. If _howMany_ is not specified, then one element is removed.

Se tentar remover um elemento de uma coleção vazia, o método não faz nada (não é gerado qualquer erro).

#### Exemplo

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d";"e";"f";"g";"h")
 $col.remove(3) // $col=["a","b","c","e","f","g","h"]
 $col.remove(3;2) // $col=["a","b","c","g","h"]
 $col.remove(-8;1) // $col=["b","c","g","h"]
 $col.remove(-3;1) // $col=["b","g","h"]
```

<!-- END REF -->

<!-- REF collection.resize().Desc -->

## .resize()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.resize().Syntax -->**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->

| Parâmetro    | Tipo                                            |     | Descrição                                   |
| ------------ | ----------------------------------------------- | :-: | ------------------------------------------- |
| size         | Integer                                         |  -> | Nova dimensão da colecção                   |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |  -> | Valor padrão para preencher novos elementos |
| Resultados   | Collection                                      |  <- | Colecção original redimensionada            |

<!-- END REF -->

#### Descrição

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.

> Essa função modifica a coleção original.

- If _size_ < collection length, exceeding elements are removed from the collection.
- If _size_ > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the _defaultValue_ parameter.

#### Exemplo

```4d
 var $c : Collection
 $c:=New collection
 $c.resize(10) // $c=[null,null,null,null,null,null,null,null,null,null]

 $c:=New collection
 $c.resize(10;0) // $c=[0,0,0,0,0,0,0,0,0,0]

 $c:=New collection(1;2;3;4;5)
 $c.resize(10;New object("name";"X")) //$c=[1,2,3,4,5,{name:X},{name:X},{name:X},{name:X},{name:X}]

 $c:=New collection(1;2;3;4;5)
 $c.resize(2) //$c=[1,2]

```

<!-- END REF -->

<!-- REF collection.reverse().Desc -->

## .reverse()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.reverse().Syntax -->**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->

| Parâmetro  | Tipo       |     | Descrição                   |
| ---------- | ---------- | :-: | --------------------------- |
| Resultados | Collection |  <- | Cópia invertida da colecção |

<!-- END REF -->

#### Descrição

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

#### Exemplo

```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->

<!-- REF collection.shift().Desc -->

## .shift()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.shift().Syntax -->**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->

| Parâmetro  | Tipo |     | Descrição                     |
| ---------- | ---- | :-: | ----------------------------- |
| Resultados | any  |  <- | Primeiro elemento de colecção |

<!-- END REF -->

#### Descrição

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.

> Essa função modifica a coleção original.

Se a colecção estiver vazia, este método não faz nada.

#### Exemplo

```4d
 var $c : Collection
 var $val : Variant
 $c:=New collection(1;2;4;5;6;7;8)
 $val:=$c.shift()
  // $val=1
  // $c=[2,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.slice().Desc -->

## .slice()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                        |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------- |
| startFrom  | Integer    |  -> | Início do índice (incluído)                                   |
| end        | Integer    |  -> | Final do índice (não incluído)                                |
| Resultados | Collection |  <- | Nova colecção contendo elementos cortados (cópia superficial) |

<!-- END REF -->

#### Descrição

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from _startFrom_ index to _end_ index (end not included). This function returns a _shallow copy_ of the collection. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

The returned collection contains the element specified by _startFrom_ and all subsequent elements up to, but not including, the element specified by _end_. If only the _startFrom_ parameter is specified, the returned collection contains all elements from _startFrom_ to the last element of the original collection.

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end < startFrom_ (passed or calculated values), the method does nothing.

#### Exemplo

```4d
 var $c; $nc : Collection
 $c:=New collection(1;2;3;4;5)
 $nc:=$c.slice(0;3) //$nc=[1,2,3]
 $nc:=$c.slice(3) //$nc=[4,5]
 $nc:=$c.slice(1;-1) //$nc=[2,3,4]
 $nc:=$c.slice(-3;-2) //$nc=[3]
```

<!-- END REF -->

<!-- REF collection.some().Desc -->

## .some()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.some().Syntax -->**.some**( { *startFrom* : Integer ; } *formula* : 4D.Function { ; *...param* : any } ) : Boolean<br/>**.some**( { *startFrom* : Integer ; } *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.some().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| startFrom  | Integer                      |  -> | Índice para início do teste em                                        |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| param      | Mixed                        |  -> | Parâmetro(s) a transmitir                          |
| Resultados | Parâmetros                   |  <- | True se todos os elementos passarem o teste com sucesso               |

<!-- END REF -->

#### Descrição

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test implemented in the provided _formula_ or _methodName_ code<!-- END REF -->.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

A chamada de retorno recebe os seguintes parâmetros:

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

Pode definir o(s) seguinte(s) parâmetro(s):

- (mandatory if you used a method) _$1.result_ (boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. O valor retornado é o último calculado.

In any case, at the point where `.some()` function encounters the first collection element returning true, it stops calling the callback and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in _startFrom_.

- If _startFrom_ >= the collection's length, **False** is returned, which means the collection is not tested.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemplo

You want to know if at least one collection value is >0.

```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) // $b=false
 $c.push(1)
 $b:=$c.some(Formula($1.value>0)) // $b=true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) //$b=true
 $b:=$c.some(1;Formula($1.value>0)) //$b=false
```

<!-- END REF -->

<!-- REF collection.sort().Desc -->

## .sort()

<details><summary>História</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.sort().Syntax -->**.sort**() : Collection<br/>**.sort**( *formula* : 4D.Function { ; *...extraParam* : any } ) : Collection<br/>**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.sort().Params -->

| Parâmetro  | Tipo                         |     | Descrição                                                             |
| ---------- | ---------------------------- | :-: | --------------------------------------------------------------------- |
| formula    | 4D. Function |  -> | Objecto fórmula                                                       |
| methodName | Text                         |  -> | Nome da função a qual se chama para processar os elementos da coleção |
| extraParam | any                          |  -> | Parâmetros para o método                                              |
| Resultados | Collection                   |  <- | Colecção original ordenada                                            |

<!-- END REF -->

#### Descrição

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection and also returns the sorted collection<!-- END REF --> .

> Essa função modifica a coleção original.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Os elementos são classificados por defeito em ordem ascendente, de acordo com o seu tipo. Se a coleção conter elementos de tipos diferentes, são primeiro agrupados por tipo e ordenados depois. Se <em x-id="3">attributePath</em> levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1. null
2. booleans
3. strings
4. números
5. objetos
6. collections
7. datas

If you want to sort the collection elements in some other order or sort any type of element, you must supply in _formula_ ([Formula object](FunctionClass.md)) or _methodName_ (Text) a callback that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. Pode fornecer parâmetros adicionais a <em x-id="3">methodName</em> se for necessário.

A chamada de retorno recebe os seguintes parâmetros:

- $1 (objeto), onde:
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (qualquer tipo): parâmetros adicionais

Se utilizou um método, deve definir o parâmetro seguinte:

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise.

#### Exemplo 1

```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### Exemplo 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### Exemplo 3

```4d
var $col; $col2; $col3 : Collection
$col:=New collection(33;4;66;1111;222)
$col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) //alphabetical sort: [1111,222,33,4,66]
```

<!-- END REF -->

<!-- REF collection.sum().Desc -->

## .sum()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->

| Parâmetro    | Tipo |     | Descrição                                            |
| ------------ | ---- | :-: | ---------------------------------------------------- |
| propertyPath | Text |  -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real |  <- | Soma dos valores da colecção                         |

<!-- END REF -->

#### Descrição

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.sum()` returns 0 if:

- a coleção estiver vazia,
- a coleção não contiver elementos numéricos,
- _propertyPath_ is not found in the collection.

#### Exemplo 1

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### Exemplo 2

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500,5))
 $vSum:=$col.sum("salary") //$vSum=70500,5
```

<!-- END REF -->

<!-- REF collection.unshift().Desc -->

## .unshift()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->

| Parâmetro  | Tipo                                   |     | Descrição                                                                         |
| ---------- | -------------------------------------- | :-: | --------------------------------------------------------------------------------- |
| value      | Text, Number, Object, Collection, Date |  -> | Valor(es) a inserir no início da colecção                      |
| Resultados | Real                                   |  <- | Colecção contendo elemento(s) adicionado(s) |
|            |                                        |     |                                                                                   |

<!-- END REF -->

#### Descrição

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given _value_(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.

> Essa função modifica a coleção original.

Se vários valores forem passados, são inseridos todos ao mesmo tempo, o que significa que aparecem na colecção resultante na mesma ordem que na lista de argumentos.

#### Exemplo

```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->
