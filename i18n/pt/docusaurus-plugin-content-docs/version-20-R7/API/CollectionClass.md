---
id: CollectionClass
title: Collection
---

A classe Collection gerencia variáveis do tipo [Collection](Concepts/dt_collection.md).

Uma coleção é inicializada com os comandos [`New collection`](../commands/new-collection.md) ou [`New shared collection`](../commands/new-shared-collection.md).

### Exemplo

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```

### Resumo

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)<br/><!-- INCLUDE #collection.at().Summary -->                                  |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)<br/><!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)<br/><!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)<br/><!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)<br/><!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)<br/><!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)<br/><!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)<br/><!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)<br/><!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)<br/><!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)<br/><!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)<br/><!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)<br/><!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)<br/><!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)<br/><!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)<br/><!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.first().Syntax -->](#first)<br/><!-- INCLUDE #collection.first().Summary -->                         |
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)<br/><!-- INCLUDE #collection.flat().Summary -->                            |
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)<br/><!-- INCLUDE #collection.flatMap().Summary -->                   |
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)<br/><!-- INCLUDE #collection.includes().Summary -->                |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)<br/><!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)<br/><!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)<br/><!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.last().Syntax -->](#last)<br/><!-- INCLUDE #collection.last().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)<br/><!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)<br/><!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #ClassClass.new().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)<br/><!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)<br/><!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)<br/><!-- INCLUDE #collection.multiSort().Summary -->             |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)<br/><!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)<br/><!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)<br/><!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)<br/><!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)<br/><!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)<br/><!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)<br/><!-- INCLUDE #collection.reduceRight().Summary -->       |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)<br/><!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)<br/><!-- INCLUDE #collection.resize().Summary -->                      |
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)<br/><!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<br/><!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<br/><!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<br/><!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<br/><!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<br/><!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<br/><!-- INCLUDE #collection.unshift().Summary -->                   |

<!-- REF collection.at().Desc -->

## .at()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.at().Syntax -->**.at**( *index* : Integer ) : any <!-- END REF -->

<!-- REF #collection.at().Params -->

| Parâmetro  | Tipo    |                             | Descrição                     |
| ---------- | ------- | :-------------------------: | ----------------------------- |
| index      | Integer |              ->             | Índice de elemento a devolver |
| Resultados | any     | <- | O elemento nesse índice       |

<!-- END REF -->

#### Descrição

A função `.at()` <!-- REF #collection.at().Summary -->retorna o item na posição *index*, permitindo o uso de números inteiros positivos e negativos<!-- END REF -->.

> Essa função não modifica a coleção original.

Os números inteiros negativos contam para trás a partir do último item da colecção.

A função retorna Indefinido se *index* estiver além dos limites da coleção.

#### Exemplo

```4d
var $col : Collection
$col:=New collection(10; 20; 30; 40; 50)
$element:=$col.at(0) // 10
$element:=$col.at(1) // 20
$element:=$col.at(-1) // 50
$element:=$col.at(-2) // 40
$element:=$col.at(10) // undefined
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

| Parâmetro    | Tipo            |                             | Descrição                                            |
| ------------ | --------------- | :-------------------------: | ---------------------------------------------------- |
| propertyPath | Text            |              ->             | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real, Undefined | <- | Média aritmética dos valores coleção                 |

<!-- END REF -->

#### Descrição

A função `.average()` <!-- REF #collection.average().Summary -->retorna a média aritmética (média) dos valores definidos na instância de coleção<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade objeto para levar em consideração.

`.average()` retorna `undefined` se:

- a coleção estiver vazia,
- a coleção não contiver elementos numéricos,
- *propertyPath* não for encontrada na collection.

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

| Parâmetro  | Tipo       |                             | Descrição                                            |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------- |
| Resultados | Collection | <- | Collection original com todos os elementos removidos |

<!-- END REF -->

#### Descrição

A função `.clear()` <!-- REF #collection.clear().Summary -->remove todos os elementos da instância da coleção e retorna uma coleção vazia<!-- END REF -->.

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

| Parâmetro  | Tipo       |                             | Descrição                                                                                              |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------ |
| col2       | Collection |              ->             | Collection a combinar                                                                                  |
| index      | Integer    |              ->             | Posição para a qual inserir elementos para combinar em coleção (padrão = length +1) |
| Resultados | Collection | <- | Collection original contendo elementos combinados                                                      |

<!-- END REF -->

#### Descrição

A função `.combine()` <!-- REF #collection.combine().Summary -->insere *col2* elementos no final ou na posição *index* especificada na instância da coleção e retorna a coleção editada<!-- END REF -->. Ao contrário da função `.insert()`, `.combine()` adiciona cada valor de *col2* na coleção original, e não como um único elemento da coleção.

> Essa função modifica a coleção original.

Por padrão, os elementos *col2* são adicionados ao final da coleção original. Pode passar em *index* a posição onde quiser que os elementos *col2* sejam inseridos na coleção.

> **Aviso**: lembre que elementos de coleção são numerados a partir de 0.

- Se *index* > o comprimento da coleção, o *index* inicial real será definido como o comprimento da coleção.
- Se *index* < 0, ele será recalculado como *index:=index+length* (ele é considerado como o deslocamento do final da coleção).
- Se o valor calculado for negativo, inicio toma o valor 0.

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

| Parâmetro  | Tipo                                                           |                             | Descrição                                                                                                                            |
| ---------- | -------------------------------------------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture |              ->             | Valores a concatenar. Se *valor* for uma coleção, todos os elementos da coleção serão adicionados à coleção original |
| Resultados | Collection                                                     | <- | Nova coleção com valores adicionados à coleção original                                                                              |

<!-- END REF -->

#### Descrição

A função `.concat()` <!-- REF #collection.concat().Summary -->retorna uma nova coleção contendo os elementos da coleção original com todos os elementos do parâmetro *value* adicionados ao final<!-- END REF -->.

> Essa função não modifica a coleção original.

Se *valor* for uma coleção, todos os seus elementos serão adicionados como novos elementos no final da coleção original. Se *value* não for a coleção, será adicionado ao novo elemento.

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

| Release | Mudanças                                                             |
| ------- | -------------------------------------------------------------------- |
| 18 R3   | Nova opção *ck shared*. Novos parâmetros *groupWith* |
| v16 R6  | Adicionado                                                           |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| Parâmetro    | Tipo       |                             | Descrição                                                                                                                                 |
| ------------ | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| option       | Integer    |              ->             | `ck resolve pointers`: resolve ponteiros antes de copiar,<br/>`ck shared`: retorna uma coleção partilhada |
| groupWithCol | Collection |              ->             | Coleção partilhada a ser agrupada com a coleção resultante                                                                                |
| groupWithObj | Object     |              ->             | Objeto partilhado a ser agrupado com a coleção resultante                                                                                 |
| Resultados   | Collection | <- | Cópia profunda da collection original                                                                                                     |

<!-- END REF -->

#### Descrição

A função `.copy()` <!-- REF #collection.copy().Summary --> retorna uma cópia profunda da instância da coleção<!-- END REF -->.***Cópia profunda*** significa que os objetos ou coleções da coleção original são duplicados e não compartilham nenhuma referência com a coleção retornada.

> Essa função não modifica a coleção original.

Se for aprovado, o parâmetro *option* pode conter uma das seguintes constantes (ou ambos):

| option                | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Se a collection original contém valores tipo ponteiro, por padrão a cópia também contém os ponteiros. No entanto, você pode resolver os ponteiros ao copiar, passando a constante `ck resolve pointers`. Nesse caso, cada ponteiro presenta na coleção é avaliada quando copiar e seu valor de dereferencia é usado.                                                             |
| `ck shared`           | Por padrão, `copy()` retorna uma coleção regular (não compartilhada), mesmo que o comando seja aplicado a uma coleção compartilhada. Passe a constante `ck shared` para criar uma coleção compartilhada. Nesse caso, você pode usar o parâmetro *groupWith* para associar a coleção compartilhada a outra coleção ou objeto (veja abaixo). |

Os parâmetros *groupWithCol* ou *groupWithObj* permitem que você designe uma coleção ou um objeto ao qual a coleção resultante deve ser associada.

:::note

Os objectos de datastore, dataclass, e entity não são copiáveis. Se `.copy()` for chamado com eles, valores `Null` são retornados.

:::

#### Exemplo 1

Queremos copiar a *$lastnames* coleção regular (não compartilhada) para o *$sharedObject* objeto compartilhado. Para fazer isso, devemos criar uma cópia compartilhada da coleção (*$sharedLastnames*).

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

Se quisermos combinar $sharedColl1 e $sharedColl2\*. Já que pertencem a grupos partilhados diferentes, uma combinação diferente resultaria em um erro. Portanto, devemos fazer uma cópia compartilhada de *$sharedColl1* e designar *$sharedColl2* como um grupo compartilhado para a cópia.

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

Se tiver uma collection comum (*$lastnames*) e se quisermos colocar em **Storage** da aplicação. Para fazer isso, precisamos criar antes uma cópia partilhada ($sharedLastnames\*).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames is a regular collection

$sharedLastnames:=$lastnames.copy(ck shared) // shared copy Use(Storage)
    Storage.lastnames:=$sharedLastnames End use
```

#### Exemplo

Este exemplo ilustra o uso da opção `ck resolve pointers`:

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //exibe "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //exibe "Hello You!"
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

| Parâmetro    | Tipo |                             | Descrição                                            |
| ------------ | ---- | :-------------------------: | ---------------------------------------------------- |
| propertyPath | Text |              ->             | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real | <- | Número de elementos na coleção                       |

<!-- END REF -->

#### Descrição

A função `.count()` <!-- REF #collection.count().Summary -->retorna o número de elementos não nulos na coleção<!-- END REF -->.

Se a coleção contiver objetos, você poderá passar o parâmetro *propertyPath*. Nesse caso, somente os elementos que contêm o *propertyPath* são levados em consideração.

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

| Parâmetro    | Tipo                                            |                             | Descrição                                            |
| ------------ | ----------------------------------------------- | :-------------------------: | ---------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |              ->             | Valor a contar                                       |
| propertyPath | Text                                            |              ->             | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real                                            | <- | Número de ocorrências do valor                       |

<!-- END REF -->

#### Descrição

A função `.countValues()` <!-- REF #collection.countValues().Summary -->retorna o número de vezes que o valor é encontrado na coleção<!-- END REF -->.

Você pode passar em *value*:

- um valor escalar (texto, número, booleano, data),
- um objeto ou uma referência de coleção.

Para que um elemento seja encontrado, o tipo de *valor* deve ser equivalente ao tipo do elemento; o método usa o operador de igualdade.

O parâmetro opcional *propertyPath* permite que você conte os valores dentro de uma coleção de objetos: passe em *propertyPath* o caminho da propriedade cujos valores você deseja contar.

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
| 20      | Suporte do `ck count values` |
| v16 R6  | Adicionado                   |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| Parâmetro    | Tipo       |                             | Descrição                                 |
| ------------ | ---------- | :-------------------------: | ----------------------------------------- |
| propertyPath | Text       |              ->             | Rota do atributo cujos valores quer obter |
| options      | Integer    |              ->             | `ck diacritical`, `ck count values`       |
| Resultados   | Collection | <- | Nova coleção com apenas valores distintos |

<!-- END REF -->

#### Descrição

A função `.distinct()` <!-- REF #collection.distinct().Summary -->retorna uma coleção que contém apenas valores distintos (diferentes) da coleção original<!-- END REF -->.

> Essa função não modifica a coleção original.

A coleção retornada é ordenada automaticamente. Os valores **null** não são devolvidos.

Se a coleção contém objetos, você pode passar o parâmetro *propertyPath* para indicar a propriedade do objeto cujos valores distintos você quer obter.

No parâmetro *opções*, você pode passar uma ou uma combinação das seguintes constantes:

| Parâmetros        | Valor | Comentário                                                                                                                                                                                                                              |
| ----------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8     | A avaliação é sensível a maiúsculas e minúsculas e diferencia os caracteres acentuados. Como padrão, uma avaliação não-diacrítica é realizada.                                                          |
| `ck count values` | 32    | Devolve a contagem de elementos para cada valor distinto. Quando essa opção é passada, `.distinct()` retorna uma coleção de objetos contendo um par de atributos `{{"value":*value*; "count":*count*}`. |

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

| Parâmetro   | Tipo       |                             | Descrição                                                                                          |
| ----------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------------- |
| collection2 | Collection |              ->             | Coleção a comparar                                                                                 |
| option      | Integer    |              ->             | `ck diacritical`: avaliação diacrítica ("A" # "a", por exemplo) |
| Resultados  | Parâmetros | <- | True se as coleções forem idênticas, senão false                                                   |

<!-- END REF -->

#### Descrição

A função `.equal()` <!-- REF #collection.equal().Summary -->compara recursivamente os conteúdos da coleção e da *coleção2* (comparação profunda)<!-- END REF -->e retorna **verdadeiro** se eles forem idênticos.

:::note Notas

- A função `.equal()` verifica apenas a igualdade de elementos do tipo string, booleano, número e nulo nas coleções. Ele não verifica a igualdade dos objetos nativos.
- Elementos com valores **null** não são a mesma coisa que valores Undefined.

:::

Como padrão, uma avaliação não-diacrítica é realizada. Se você quiser que a avaliação diferencie maiúsculas de minúsculas ou caracteres acentuados, passe a constante `ck diacritical` no parâmetro de opção.

:::tip

Uma comparação recursiva de coleções pode consumir muito tempo se a coleção for grande e profunda. Se quiser comparar apenas duas referências de coleção, você pode considerar o uso do operador de comparação [`=` para referências de coleção](../Concepts/dt_collection.md#collection-operators).

:::

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

| Parâmetro  | Tipo                         |                             | Descrição                                                                                                                 |
| ---------- | ---------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------- |
| startFrom  | Integer                      |              ->             | Índice para início do teste em                                                                                            |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                                                                           |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção                                                     |
| param      | any                          |              ->             | Parâmetro(s) a ser(em) passado(s) para *formula* ou *methodName* |
| Resultados | Parâmetros                   | <- | True se todos os elementos passarem o teste com sucesso                                                                   |

<!-- END REF -->

#### Descrição

A função `.every()` <!-- REF #collection.every().Summary -->retorna **true** se todos os elementos da coleção passarem com sucesso em um teste implementado no objeto *formula* ou método *methodName* fornecido<!-- END REF -->.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

A callback é chamada com o(s) parâmetro(s) passados em *param* (opcional). A chamada de retorno pode realizar qualquer teste, com ou sem o(s) parâmetro(s) e deve retornar **true** para cada elemento que cumpra o teste. Este método recebe um `Object` como primeiro parâmetro ($1).

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser avaliado
- em *$2*: param
- em *$N...*: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (obrigatório se você usou um método) *$1.result* (Boolean): **true** se a avaliação do valor do elemento for bem-sucedida, **false** caso contrário.
- *$1.stop* (Boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

Em todos os casos, no momento em que a função `.every()` encontra o primeiro elemento da coleção avaliado como **false**, ela para de chamar o retorno de chamada e retorna **false**.

Por padrão, `.every()` testa toda a coleção. Opcionalmente, pode passar em *startFrom* o índice do elemento a partir do qual se inicia o teste.

- Se *startFrom* >= tamanho da coleção, é retornado **false**, o que significa que a coleção não é testada.
- Se *startFrom* < 0, é considerada como offset do final da coleção(*startFrom:=startFrom+length*).
- Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

#### Exemplo 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) //retorna true
$c.push(-1)
$b:=$c.every($f) //retorna false
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

| Parâmetro    | Tipo       |                             | Descrição                                                                                                                                                                                              |
| ------------ | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| propertyPath | Text       |              ->             | Rota de propriedade de objeto cujos valores serão extraídos para nova coleção                                                                                                                          |
| targetpath   | Text       |              ->             | Rota de propriedade alvo ou nome propriedade                                                                                                                                                           |
| option       | Integer    |              ->             | `ck keep null`: include null properties na coleção retornada (ignorado por padrão). Parâmetro ignorado se *targetPath* for passado. |
| Resultados   | Collection | <- | Nova collection contendo valores extraídos                                                                                                                                                             |

<!-- END REF -->

#### Descrição

A função `.extract()` <!-- REF #collection.extract().Summary -->cria e retorna uma nova coleção contendo valores *propertyPath* extraídos da coleção original de objetos<!-- END REF -->.

> Essa função não modifica a coleção original.

Os conteúdos da coleção retornada depende do parâmetro *targetPath*:

- Se o parâmetro *targetPath* for omitido, `.extract()` preenche a nova coleção com os valores *propertyPath* da coleção original.

  Como padrão, elementos para os quais *propertyPath* for null ou undefined são ignorados na coleção resultante. Você pode passar a constante `ck keep null` no parâmetro *option* para incluir esses valores como elementos **null** na coleção retornada.

- Se um ou mais parâmetros *targetPath* forem passados (correspondentes a um ou mais parâmetros *propertyPath*), `.extract()` preenche a nova coleção com as propriedades *propertyPath* e cada elemento da nova coleção é um objeto com as propriedades *targetPath* preenchidas com as propriedades correspondentes *propertyPath*. Os valores null são mantidos (o parâmetro *option* é ignorado com essa sintaxe).

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

| Parâmetro  | Tipo                                            |                             | Descrição                                         |
| ---------- | ----------------------------------------------- | :-------------------------: | ------------------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean |              ->             | Valores preenchido                                |
| startFrom  | Integer                                         |              ->             | Início do índice (incluído)    |
| end        | Integer                                         |              ->             | Final do índice (não incluído) |
| Resultados | collection                                      | <- | Coleção original com valores preenchidos          |

<!-- END REF -->

#### Descrição

A função `.fill()` <!-- REF #collection.fill().Summary -->preenche a coleção com o *value* especificado, opcionalmente do índice *startFrom* até o índice *end*, e retorna a coleção resultante<!-- END REF -->.

> Essa função modifica a coleção original.

- Se o parâmetro *startFrom* for omitido, *value* é estabelecido para todos os elementos coleção (*startFrom*=0).
- Se o parâmetro *startFrom* for passado e *end* for omitido, *value* é definido como os elementos da coleção a partir de *startFrom* até o último elemento da coleção (*end*=length).
- Se tanto o parâmetro *startFrom* quanto *end* forem passados, *value* é definido como os elementos da coleção a partir de *startFrom* até o elemento *end*.

Em caso de inconsistências, as regras abaixos são seguidas:

- Se *startFrom* < 0, ele é recalculado como *startFrom:=startFrom+length* (é considerado como o deslocamento a partir do final da coleção). Se o valor calculado for negativo, *startFrom* toma o valor 0.
- Se *end* < 0 , ele será recalculado como *end:=end+length*.
- Se *end* < *startFrom* (valores passados ou calculados), o método não fará nada.

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

| Parâmetro  | Tipo                         |                             | Descrição                                                                                                                 |
| ---------- | ---------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                                                                           |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção                                                     |
| param      | any                          |              ->             | Parâmetro(s) a ser(em) passado(s) para *formula* ou *methodName* |
| Resultados | Collection                   | <- | Nova coleção contendo elementos filtrados (cópia superficial)                                          |

<!-- END REF -->

#### Descrição

A função `.filter()` <!-- REF #collection.filter().Summary -->retorna uma nova coleção contendo todos os elementos da coleção original para os quais o resultado da *formula* ou do *methodName* é **true**<!-- END REF -->. Esta função devolve uma ***shallow copy***, o que significa que os objectos ou colecções de ambas as colecções partilham a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

Pode determinar a chamada de retorno a ser executada para filtrar os elementos de recolha utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

A callback é chamada com o(s) parâmetro(s) passados em *param* (opcional) e um objeto no primeiro parâmetro (*$1*). A chamada de retorno pode realizar qualquer teste, com ou sem o(s) parâmetro(s) e deve retornar **true** para cada elemento que cumpra a condição e assim, adicioná-lo à nova coleção.

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser avaliado
- em *$2*: param
- em *$N...*: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- *$1.result* (boolean): **true** se o valor do elemento corresponder à condição de filtro e deve ser mantido, **false** caso contrário.
- *$1.stop* (Boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

:::note

Ao usar *methodName* como retorno de chamada e se o método não retornar nenhum valor, `.filter()` irá verificar a propriedade *$1.result* que você deve definir como **true** para cada elemento que satisfaz a condição.

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

| Parâmetro  | Tipo                         |                             | Descrição                                                                                                                 |
| ---------- | ---------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------- |
| startFrom  | Integer                      |              ->             | Índice onde inicia a pesquisa                                                                                             |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                                                                           |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção                                                     |
| param      | any                          |              ->             | Parâmetro(s) a ser(em) passado(s) para *formula* ou *methodName* |
| Resultados | any                          | <- | Primeiro valor encontrado ou Undefined se não encontrado                                                                  |

<!-- END REF -->

#### Descrição

A função `.find()` <!-- REF #collection.find().Summary -->retorna o primeiro valor na coleção para o qual o *formula* ou o resultado do *methodName*, aplicado a cada elemento, seja **true**<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

A callback é chamada com o(s) parâmetro(s) passados em *param* (opcional). A chamada de retorno pode realizar qualquer teste, com ou sem o(s) parâmetro(s) e deve retornar **true** para o primeiro elemento que cumpra a condição. Este método recebe um `Object` como primeiro parâmetro ($1).

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser avaliado
- em *$2*: param
- em *$N...*: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (obrigatório se você usou um método) *$1.result* (Boolean): **true** se o valor do elemento corresponde à condição de pesquisa, **false** caso contrário.
- *$1.stop* (Boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

Por padrão, `.find()` pesquisa em toda a coleção. Opcionalmente pode passar em *startFrom* o índice do elemento a partir do qual vai começar a pesquisa.

- Se *startFrom* >= o tamanho da coleção, -1 é retornado, o que significa que a coleção não é pesquisada.
- Se *startFrom* < 0, é considerada como offset do final da coleção
  (*startFrom:=startFrom+length*).
  **Nota**: mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
- Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

| Parâmetro  | Tipo                         |                             | Descrição                                                                                                                 |
| ---------- | ---------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------- |
| startFrom  | Integer                      |              ->             | Índice onde inicia a pesquisa                                                                                             |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                                                                           |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção                                                     |
| param      | any                          |              ->             | Parâmetro(s) a ser(em) passado(s) para *formula* ou *methodName* |
| Resultados | Integer                      | <- | Indice do primeiro valor encontrado ou -1 se não encontrado                                                               |

<!-- END REF -->

#### Descrição

A função `.findIndex()` <!-- REF #collection.findIndex().Summary -->retorna o índice, na coleção, do primeiro valor para o qual a *formula* ou o *methodName*, aplicado em cada elemento, retorna **true**<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- *methodName*, o nome de um método projeto (texto).

A callback é chamada com o(s) parâmetro(s) passados em *param* (opcional). A chamada de retorno pode realizar qualquer teste, com ou sem o(s) parâmetro(s) e deve retornar **true** para o primeiro elemento que cumpra a condição. Este método recebe um `Object` como primeiro parâmetro ($1).

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser avaliado
- em *$2*: param
- em *$N...*: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (obrigatório se você usou um método) *$1.result* (Boolean): **true** se o valor do elemento corresponde à condição de pesquisa, **false** caso contrário.
- *$1.stop* (Boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

Por padrão, `.findIndex()` pesquisa em toda a coleção. Opcionalmente pode passar em *startFrom* o índice do elemento a partir do qual vai começar a pesquisa.

- Se *startFrom* >= o tamanho da coleção, -1 é retornado, o que significa que a coleção não é pesquisada.
- Se *startFrom* < 0, é considerada como offset do final da coleção
  (*startFrom:=startFrom+length*).
  **Nota**: mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
- Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

| Parâmetro  | Tipo |                             | Descrição                     |
| ---------- | ---- | :-------------------------: | ----------------------------- |
| Resultados | any  | <- | Primeiro elemento de colecção |

<!-- END REF -->

#### Descrição

A função `.first()` <!-- REF #collection.first().Summary -->retorna o primeiro elemento da coleção<!-- END REF -->.

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

| Parâmetro  | Tipo       |                             | Descrição                                                                                             |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------- |
| depth      | Integer    |              ->             | A profundidade a que uma estrutura de colecção aninhada deve ser aplanada. O padrão=1 |
| Resultados | Collection | <- | Colecção achatada                                                                                     |

<!-- END REF -->

#### Descrição

A função `.flat()` <!-- REF #collection.flat().Summary -->cria uma nova coleção com todos os elementos da subcoleção concatenados recursivamente até a *depth*<!-- END REF -->.

Por defeito, se o parâmetro *depth* for omitido, apenas o primeiro nível da estrutura de colecção aninhada será aplanado.

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

| Parâmetro  | Tipo                         |                             | Descrição                                                                                                                 |
| ---------- | ---------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                                                                           |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção                                                     |
| param      | any                          |              ->             | Parâmetro(s) a ser(em) passado(s) para *formula* ou *methodName* |
| Resultados | Collection                   | <- | Collection of transformed values and flattened by a depth of 1                                                            |

<!-- END REF -->

#### Descrição

A função `.flatMap()` <!-- REF #collection.flatMap().Summary -->cria uma nova coleção com base no resultado da chamada da *formula* da função 4D ou do método *methodName* em cada elemento da coleção original e aplanada por uma profundidade de 1<!-- END REF -->. Opcionalmente, você pode passar parâmetros para *formula* ou *methodName* usando o(s) parâmetro(s) *param*.

Esta função é idêntica a uma chamada [`map()`](#map) seguida de uma chamada [`flat()`](#flat) de profundidade 1.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

A callback é chamada com o(s) parâmetro(s) passados em *param* (opcional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em <em x-id="3">param</em> (opcional). Este método recebe um `Object` como primeiro parâmetro ($1).

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser avaliado
- em *$2*: param
- em *$N...*: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (obrigatório se você usou um método) *$1.result* (qualquer tipo): novo valor transformado para adicionar à coleção resultante
- *$1.stop* (Boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

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

| Parâmetro  | Tipo       |                             | Descrição                                    |
| ---------- | ---------- | :-------------------------: | -------------------------------------------- |
| toSearch   | expressão  |              ->             | Expressão a pesquisar na coleção             |
| startFrom  | Integer    |              ->             | Índice onde inicia a pesquisa                |
| Resultados | Parâmetros | <- | True se *toSearch* for encontrado na coleção |

<!-- END REF -->

#### Descrição

A função `.includes()` <!-- REF #collection.includes().Summary -->retorna True se a expressão *toSearch* for encontrada entre os elementos da coleção, caso contrário False<!-- END REF -->.

> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

- um valor escalar (texto, número, booleano, data),
- $1.result:=$1.value&gt;0
- um objeto ou uma referência de coleção.

*toSearch* deve corresponder exatamente com o elemento a encontrar (as mesmas regras que para o operador de igualdade do tipo dados é aplicado).

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa em *startFrom*.

- Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
- Se *startFrom* < 0, é considerada como offset do final da coleção
  (*startFrom:=startFrom+length*). Note que mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
- Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

| Parâmetro  | Tipo      |                             | Descrição                                                                  |
| ---------- | --------- | :-------------------------: | -------------------------------------------------------------------------- |
| toSearch   | expressão |              ->             | Expressão a pesquisar na coleção                                           |
| startFrom  | Integer   |              ->             | Índice onde inicia a pesquisa                                              |
| Resultados | Integer   | <- | Índice da primeira ocorrência de toSearch na coleção, -1 se não encontrado |

<!-- END REF -->

#### Descrição

A função `.indexOf()` <!-- REF #collection.indexOf().Summary -->procura a expressão *toSearch* entre os elementos da coleção e retorna o índice da primeira ocorrência encontrada, ou -1 se não for encontrada<!-- END REF -->.

> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

- um valor escalar (texto, número, booleano, data),
- $1.result:=$1.value&gt;0
- um objeto ou uma referência de coleção.

*toSearch* deve corresponder exatamente com o elemento a encontrar (as mesmas regras que para o operador de igualdade do tipo dados é aplicado).

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa em *startFrom*.

- Se *startFrom* >= o tamanho da coleção, -1 é retornado, o que significa que a coleção não é pesquisada.
- Se *startFrom* < 0, é considerada como offset do final da coleção
  (*startFrom:=startFrom+length*).
  **Nota**: mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
- Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

| Parâmetro   | Tipo       |                             | Descrição                                                                            |
| ----------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------ |
| queryString | Text       |              ->             | Critérios de pesquisa                                                                |
| value       | any        |              ->             | Valores a comparar quando usar placeholders (valores temporários) |
| Resultados  | Collection | <- | Índices elemento correspondendo a queryString na coleção                             |

<!-- END REF -->

#### Descrição

A função `.indices()` funciona exatamente da mesma forma que a função [`.query()`](#query), mas <!-- REF #collection.indices().Summary -->retorna os índices, na coleção original, dos elementos da coleção de objetos que correspondem às condições de busca *queryString*<!-- END REF -->, e não os próprios elementos. Indices são retornados em ordem ascendente.

> Essa função não modifica a coleção original.

O parâmetro *queryString* usa a seguinte sintaxe:

```4d
valor de comparação propertyPath {valor de comparação logicalOperator propertyPath}
```

Para uma descrição detalhada dos parâmetros *queryString* e *value*, por favor consulte a função `dataClass.query()`.

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

| Parâmetro  | Tipo       |                             | Descrição                                        |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------ |
| index      | Integer    |              ->             | Onde inserir os elementos                        |
| element    | any        |              ->             | Elemento a inserir na coleção                    |
| Resultados | Collection | <- | Collection original contendo elementos inseridos |

<!-- END REF -->

#### Descrição

A função `.insert()` <!-- REF #collection.insert().Summary -->insere *element* na posição *index* especificada na instância da coleção e retorna a coleção editada<!-- END REF -->.

> Essa função modifica a coleção original.

In *index*, passe a posição onde quiser que o elemento seja inserido na coleção.

> **Aviso**: lembre que elementos de coleção são numerados a partir de 0.

- Se *index* > o comprimento da coleção, o *index* inicial real será definido como o comprimento da coleção.
- Se index  0, será recalculado como  index:=index+length (é considerado como o offset do final da coleção).
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

| Parâmetro  | Tipo    |                             | Descrição                                                                                           |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------------------------------------------------- |
| delimiter  | Text    |              ->             | Separador a usar entre os elementos                                                                 |
| option     | Integer |              ->             | `ck ignore null or empty`: ignora cadeias de caracteres nulas e vazias no resultado |
| Resultados | Text    | <- | String contendo todos os elementos da coleção, separados por um delimitador                         |

<!-- END REF -->

#### Descrição

A função `.join()` <!-- REF #collection.join().Summary -->converte todos os elementos da coleção em strings e os concatena usando a string *delimitadora* especificada como separador<!-- END REF -->. A função retorna a string resultante.

> Essa função não modifica a coleção original.

Como padrão, elementos null ou vazios da coleção são retornados na string resultante. Passe a constante `ck ignore null ou empty` no parâmetro *option* se quiser removê-las da string resultante.

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

| Parâmetro  | Tipo |                             | Descrição                  |
| ---------- | ---- | :-------------------------: | -------------------------- |
| Resultados | any  | <- | Último elemento da coleção |

<!-- END REF -->

#### Descrição

A função `.last()` <!-- REF #collection.last().Summary -->retorna o último elemento da coleção<!-- END REF -->.

> Essa função não modifica a coleção original.

Nome da função a chamar para filtrar a coleção

#### Exemplo

```4d
var $col; $emptyCol : Collection
var $last : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$last:=$col.last() // 50

$emptyCol:=New collection() //empty
// $last:=$emptyCol[$emptyCol.length-1] //devolve um erro
$last:=$emptyCol.last() // devolve Undefined

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

| Parâmetro  | Tipo      |                             | Descrição                                                                |
| ---------- | --------- | :-------------------------: | ------------------------------------------------------------------------ |
| toSearch   | expressão |              ->             | O elemento que é pesquisado dentro da coleção                            |
| startFrom  | Integer   |              ->             | Índice onde inicia a pesquisa                                            |
| Resultados | Integer   | <- | Índice da última ocorrência de toSearch na coleção, -1 se não encontrado |

<!-- END REF -->

#### Descrição

A função `.lastIndexOf()` <!-- REF #collection.lastIndexOf().Summary -->pesquisa a expressão *toSearch* entre os elementos da coleção e retorna o índice da última ocorrência<!-- END REF -->, ou -1 se ela não for encontrada.

> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

- um valor escalar (texto, número, booleano, data),
- $1.result:=$1.value&gt;0
- um objeto ou uma referência de coleção.

*toSearch* deve corresponder exatamente ao elemento a ser encontrado (são aplicadas as mesmas regras do operador de igualdade).

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa reversa em startFrom\*.

- Se *startFrom* >= o comprimento da coleção menos um (coll.length-1), toda a coleção será pesquisada (padrão).
- Se *startFrom* < 0, ele é recalculado como *startFrom:=startFrom+length* (é considerado como o deslocamento a partir do final da coleção). Se o valor calculado for negativo, -1 é retornado (a coleção não é pesquisada).
  **Nota**: mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da direita para esquerda.
- Se *startFrom* = 0, será retornado -1, o que significa que a coleção não será pesquisada.

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

A propriedade `.length` <!-- REF #collection.length.Summary -->retorna o número de elementos na coleção<!-- END REF -->.

A propriedade `.length` é inicializada quando a coleção é criada. Adicionar ou remover elementos atualiza o tamanho, se necessário. Essa propriedade é **somente leitura** (não pode usá-la para estabelecer o tamanho da coleção).

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

| Parâmetro  | Tipo                         |                             | Descrição                                                                                                                 |
| ---------- | ---------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                                                                           |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção                                                     |
| param      | any                          |              ->             | Parâmetro(s) a ser(em) passado(s) para *formula* ou *methodName* |
| Resultados | Collection                   | <- | Collection de valores transformados                                                                                       |

<!-- END REF -->

#### Descrição

A função `.map()` <!-- REF #collection.map().Summary -->cria uma nova coleção com base no resultado da chamada da função *formula* 4D ou do método *methodName* em cada elemento da coleção original<!-- END REF -->. Opcionalmente, você pode passar parâmetros para *formula* ou *methodName* usando o(s) parâmetro(s) *param*. `.map()` sempre retorna uma coleção com o mesmo tamanho da coleção original, exceto se *$1.stop* tiver sido usado (veja abaixo).

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

A callback é chamada com o(s) parâmetro(s) passados em *param* (opcional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em <em x-id="3">param</em> (opcional). Este método recebe um `Object` como primeiro parâmetro ($1).

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser avaliado
- em *$2*: param
- em *$N...*: paramN...

Pode definir o(s) seguinte(s) parâmetro(s):

- (obrigatório se você usou um método) *$1.result* (qualquer tipo): novo valor transformado para adicionar à coleção resultante
- *$1.stop* (Boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

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

| Parâmetro    | Tipo                                            |                             | Descrição                                             |
| ------------ | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------- |
| propertyPath | Text                                            |              ->             | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date | <- | Valor máximo na coleção                               |

<!-- END REF -->

#### Descrição

A função `.max()` <!-- REF #collection.max().Summary -->retorna o elemento com o valor mais alto na coleção<!-- END REF --> (o último elemento da coleção, como seria classificado em ordem crescente usando a função [`.sort()`](#sort)).

> Essa função não modifica a coleção original.

Se a coleção contiver diferentes tipos de valores, a função `.max()` retornará o valor máximo dentro do último tipo de elemento na ordem da lista de tipos (consulte a descrição de [`.sort()`](#sort)).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade do objeto cujo valor máximo você deseja obter.

Se a coleção estiver vazia, `.max()` retorna *Undefined*.

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

| Parâmetro    | Tipo                                            |                             | Descrição                                             |
| ------------ | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------- |
| propertyPath | Text                                            |              ->             | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date | <- | Valor mínimo na coleção                               |

<!-- END REF -->

#### Descrição

A função `.min()` <!-- REF #collection.min().Summary -->retorna o elemento com o menor valor na coleção<!-- END REF --> (o primeiro elemento da coleção, como seria classificado em ordem crescente usando a função [`.sort()`](#sort)).

> Essa função não modifica a coleção original.

Se a coleção contiver diferentes tipos de valores, a função `.min()` retornará o valor mínimo dentro do primeiro tipo de elemento na ordem da lista de tipos (consulte a descrição de [`.sort()`](#sort)).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade do objeto cujo valor mínimo você deseja obter.

Se a coleção estiver vazia, `.min()` devolve *Undefined*.

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

| Parâmetro  | Tipo                         |                             | Descrição                                                                                                                                              |
| ---------- | ---------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                                                                                                        |
| colsToSort | Collection                   |              ->             | Coleção de coleções e/ou objetos com propriedades {`collection`:*colToSort*;`order`:`ck ascending` ou `ck descending`} |
| Resultados | Collection                   | <- | Colecção original ordenada                                                                                                                             |

<!-- END REF -->

#### Descrição

A função `.multiSort()` <!-- REF #collection.multiSort().Summary -->permite que você execute uma classificação sincronizada em vários níveis em um conjunto de coleções<!-- END REF -->.

> Esta função modifica a coleção original, bem como todas as coleções utilizadas no parâmetro colsToSort.

Se `.multiSort()` for chamada sem parâmetros, a função terá o mesmo efeito que a função [`.sort()`](#sort): a coleção é classificada (somente valores escalares) em ordem crescente por padrão, de acordo com seu tipo. Se a coleção contiver valores de tipos diferentes, eles serão primeiro agrupados por tipo e, em seguida, classificados. Se <em x-id="3">attributePath</em> levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1. null
2. booleans
3. strings
4. números
5. objetos
6. collections
7. datas

**Classificação sincronizada de nível único**

Para classificar várias coleções de forma síncrona, basta passar em *colsToSort* uma coleção de coleções a serem classificadas. Você pode passar um número ilimitado de coleções. A coleção original será classificada em ordem crescente e todas as coleções colsToSort serão classificadas de forma sincronizada.

:::note

Todas as coleções colsToSort devem ter o mesmo número de elementos, caso contrário, será retornado um erro.

:::

Se quiser classificar as coleções em outra ordem que não seja a ascendente, você deverá fornecer uma *fórmula* ([Formula object](FunctionClass.md#formula) que defina a ordem de classificação. O valor de retorno deve ser um booleano que indica a ordem relativa dos dois elementos: **True** se *$1.value* for menor que *$1.value2*, **False** se *$1.value* for maior que *$1.value2*. Você pode fornecer parâmetros adicionais à fórmula, se necessário.

A fórmula recebe os seguintes parâmetros:

- $1 (objeto), onde:
  - *$1.value* (qualquer tipo): valor do primeiro elemento a ser comparado
  - *$1.value2* (qualquer tipo): valor do segundo elemento a ser comparado
- $2...$N (qualquer tipo): parâmetros adicionais

**Classificação sincronizada em vários níveis**

A definição de uma classificação sincronizada em vários níveis exige que você passe um objeto contendo as propriedades {`collection`:*colToSort*;`order`:`ck ascending` ou `ck descending`} em vez da própria *colToSort* para cada coleção a ser usada como subnível.

Os níveis de classificação são determinados pela ordem em que as coleções são passadas no parâmetro *colsToSort*: a posição de um objeto `collection`/`order` na sintaxe determina seu nível de classificação.

:::note

A função `.multiSort()` utiliza um algoritmo de classificação [estável] (https://en.wikipedia.org/wiki/Sorting_algorithm#Stability).

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

| Parâmetro   | Tipo       |                             | Descrição                                                                                                                                    |
| ----------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| pathStrings | Text       |              ->             | Caminho(s) de propriedade(s) no(s) qual(is) encomendar a coleção |
| pathObjects | Collection |              ->             | Coleção de objetos criterio                                                                                                                  |
| ascOrDesc   | Integer    |              ->             | `ck ascending` ou `ck descending` (valores escalares)                                                                     |
| Resultados  | Collection | <- | Cópia ordenada da coleção (cópia superficial)                                                                             |

<!-- END REF -->

#### Descrição

A função `.orderBy()` <!-- REF #collection.orderBy().Summary -->retorna uma nova coleção contendo todos os elementos da coleção na ordem especificada<!-- END REF -->.

Esta função devolve uma cópia superficial, o que significa que os objectos ou colecções de ambas as colecções partilham a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

If you pass no parameter, the function orders scalar values in the collection in ascending order (other element types such as objects or collections are returned with an internal order). Você pode modificar essa ordem automática passando as constantes `ck ascending` ou `ck descending` no parâmetro *ascOrDesc* (veja abaixo).

Também pode passar um parâmetro de critérios para definir como devem ordenar-se os elementos da coleção. Três sintaxes são compatíveis com esse parâmetro:

- *pathStrings* : Texto (fórmula). **Sintaxe**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (ordem padrão: asc). *pathStrings* contém uma fórmula feita de 1 a x caminhos de propriedade e, (opcionalmente), ordenar ordens, separados por vírgulas. A ordem na qual as propriedades são passadas determina a prioridade de ordenação dos elementos da coleção Como padrão as propriedades são ordenadas de forma ascendente. Como padrão as propriedades são ordenadas de forma ascendente. Pode definir a ordem de clasificação de uma propriedade na string de critérios, separado da rota da propriedade por um só espaço: passe "asc" para ordenar em ordem ascendente ou "desc" em ordem descendente.

- *pathObjects* : Collection. Pode adicionar tantos objetos na coleção pathObjects como seja necessário. Como padrão, as propriedades se classificam em ordem ascendente ("descending" é false). Cada elemento da coleção contém um objeto estruturado da seguinte maneira:

```4d
{
    "propertyPath": string,


    "descending": boolean

}
```

- *ascOrDesc* : Integer. Se passar uma das seguintes constantes do tema **Objects and collections**:

  | Parâmetros    | Tipo    | Valor | Comentário                                                                     |
  | ------------- | ------- | ----- | ------------------------------------------------------------------------------ |
  | ck ascending  | Integer | 0     | Os elementos são ordenados de forma ascendente (por padrão) |
  | ck descending | Integer | 1     | Os elementos são ordenados de forma descendente                                |

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

| Parâmetro  | Tipo                         |                             | Descrição                                                             |
| ---------- | ---------------------------- | :-------------------------: | --------------------------------------------------------------------- |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                       |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção |
| extraParam | any                          |              ->             | Parâmetro(s) a transmitir                          |
| Resultados | Collection                   | <- | Cópia ordenada da coleção (cópia superficial)      |

<!-- END REF -->

#### Descrição

A função `.orderByMethod()` <!-- REF #collection.orderByMethod().Summary -->retorna uma nova coleção contendo todos os elementos da coleção na ordem definida por meio da função *formula* 4D ou do método *methodName*<!-- END REF -->.

Esta função devolve uma cópia superficial, o que significa que os objectos ou colecções de ambas as colecções partilham a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;

- ou *methodName*, o nome de um método projeto (texto).

No retorno de chamada, passe algum código que compare dois valores e retorne **true** se o primeiro valor for menor que o segundo. Você pode fornecer parâmetros *extraParam* para a callback, se necessário.

A chamada de retorno recebe os seguintes parâmetros:

- $1 (objeto), onde:
  - *$1.value* (qualquer tipo): valor do primeiro elemento a ser comparado
  - *$1.value2* (qualquer tipo): valor do segundo elemento a ser comparado
  - $2...$N (qualquer tipo): parâmetros adicionais

Se utilizou um método, este deve definir o seguinte parâmetro:

- *$1.result* (booleano): **true** se *$1.value < $1.value2*, **false** caso contrário

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

O método ***sortCollection***:

```4d
var$1Object
var$2Integer // sort option

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

| Parâmetro  | Tipo |                             | Descrição                  |
| ---------- | ---- | :-------------------------: | -------------------------- |
| Resultados | any  | <- | Último elemento da coleção |

<!-- END REF -->

#### Descrição

A função `.pop()` <!-- REF #collection.pop().Summary -->remove o último elemento da coleção e o retorna como o resultado da função<!-- END REF -->.

> Essa função modifica a coleção original.

Quando aplicado a uma coleção vazia, `.pop()` retorna ***undefined***.

#### Exemplo

O `.pop()`, usado em conjunto com [`.push()`](#push), pode ser usado para implementar um recurso de pilha do tipo primeiro a entrar, último a sair:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Retorna 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Retorna [4,5]
 $stack.pop() //$stack=[]  Retorna 1
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

| Parâmetro  | Tipo       |                             | Descrição                                        |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------ |
| element    | any        |              ->             | Elementos a adicionar à coleção                  |
| Resultados | Collection | <- | Collection original contendo elementos inseridos |

<!-- END REF -->

#### Descrição

A função `.push()` <!-- REF #collection.push().Summary -->acrescenta um ou mais *elementos* ao final da instância da coleção e retorna a coleção editada<!-- END REF -->.

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

| Release | Mudanças                                           |
| ------- | -------------------------------------------------- |
| 20 R6   | Consultas usando referências a objetos ou coleções |
| 17 R5   | Assistência de querySettings                       |
| v16 R6  | Adicionado                                         |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ) : Collection<br/>**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| Parâmetro     | Tipo       |                             | Descrição                                                                            |
| ------------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------ |
| queryString   | Text       |              ->             | Critérios de pesquisa                                                                |
| value         | any        |              ->             | Valores a comparar quando usar placeholders (valores temporários) |
| querySettings | Object     |              ->             | Opções de pesquisa: parâmetros, atributos                            |
| Resultados    | Collection | <- | Elementos que correspondem com queryString na coleção                                |

<!-- END REF -->

#### Descrição

A função `.query()` <!-- REF #collection.query().Summary -->retorna todos os elementos de uma coleção de objetos que correspondem às condições de pesquisa <!-- END REF -->definidas por *queryString* e (opcionalmente) *value* ou *querySettings*. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

Uma coleção vazia será retornada se a coleção na qual a consulta for executada não contiver o *valor* pesquisado.

> Essa função não modifica a coleção original.

#### parâmetro queryString

O parâmetro *queryString* usa a seguinte sintaxe:

```4d
valor de comparação propertyPath {valor de comparação logicalOperator propertyPath}
```

onde:

- **propertyPath**: caminho da propriedade em que você deseja executar a consulta. Os atributos se expressam como pares propriedade/ valor, onde propriedade é o nome do marcador de posição inserido para uma rota de atributo em <em x-id="3">queryString</em> ou <em x-id="3">formula</em> (":placeholder") e valor pode ser uma string ou uma coleção de strings. No caso de um caminho de atributo cujo tipo é `Collection`, a notação `[]` é usada para lidar todas as ocorrências (por exemplo `children[].age`).

- **comparator**: símbolo que compara *propertyPath* e *value*. Os simbolos abaixo são compatíveis:

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

- **value**: o valor a ser comparado com o valor atual da propriedade de cada elemento da coleção. Pode ser qualquer expressão de valor constante que corresponda à propriedade de tipo de dados do elemento ou um [**placeholder**](#using-placeholders).
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

4D permite que você use espaços reservados para attributePath, formula e value argumentos dentro do parâmetro queryString . Um placeholder é um parâmetro que você insere em cadeias de consulta e que é substituído por outro valor quando a cadeia de consulta é avaliada. O valor dos placeholders é avaliado uma vez no início da consulta; ele não é avaliado para cada elemento.

Dois tipos de placeholders podem ser usados: **placeholders indexados** e **placeholders nomeados**.

- **Placeholders indexados**: parâmetros são inseridos como `:paramIndex` (por exemplo, ":1", ":2"...) no *queryString* e seus respectivos valores são fornecidos pela sequência de parâmetro(s) *value*. É possível utilizar até 128 parâmetros *value*.

Exemplo:

```4d
$c:=$myCol.query(":1=:2";"city";"Chicago")
```

- **Named placeholders**: os parâmetros são inseridos como `:paramName` (por exemplo, ":myparam") e seus valores são fornecidos nos objetos "attributes" e/ou "parameters" no parâmetro *querySettings*.

Exemplo:

```4d
$o.attributes:={att:"city"}
$o.parameters:={name:"Chicago")
$c:=$myCol.query(":att=:name";$o)
```

É possível misturar todos os tipos de argumentos em *queryString*. Uma *queryString* pode conter, para os parâmetros *propertyPath* e *value*:

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

2. Isso evita que você tenha que se preocupar com problemas de formatação ou caracteres, especialmente ao lidar com parâmetros *propertyPath* ou *value* que podem conter caracteres não alfanuméricos, como ".", "['...

3. Permite o uso de variáveis ou expressões nos argumentos de pesquisa. Exemplos:

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

> O uso de uma [**referência de coleção** ou **referência de objeto**](#object-or-collection-reference-as-value) no parâmetro *value* não é compatível com essa sintaxe. Você deve usar o parâmetro [*querySettings*] (#querysettings-parameter).

#### Pesquisa de valores null

Quando pesquisar por valores null não pode usar a sintaxe do marcador de posição porque o motor de consulta considera o valor null como um valor de comparação inesperado. Por exemplo, se executar esta pesquisa:

```4d
$vSingles:=$colPersons.query("spouse = :1";Null) // NÃO funcionará
```

Não obterá o resultado esperado porque o valor nulo será avaliado por 4D como um erro resultante da avaliação do parâmetro (por exemplo, um atributo vindo de outra consulta). Para este tipo de pesquisa, deve usar a sintaxe de pesquisa direta:

```4d
$vSingles:=$colPersons.query("spouse = null") //sintaxe correta
```

#### Referência de objeto ou de coleção como valor

Você pode consultar uma coleção usando uma referência de objeto ou uma referência de coleção como o parâmetro *valor* a ser comparado. A consulta corresponderá a objetos na coleção que se referem (apontam para) a mesma **instância de** objeto ou coleção.

Os seguintes comparadores são suportados:

| Comparação   | Símbolos |
| ------------ | -------- |
| Igual a      | =, ==    |
| Diferente de | #, !=    |

Para criar uma consulta com um objeto ou uma referência de coleção, você deve usar a sintaxe do parâmetro *querySettings*. Exemplo com uma referência de objeto:

```4d
var $o1:={a: 1}
var $o2:={a: 1} //mesmo objeto mas outra referência
var $o3:=$o1 //mesmo objeto e referência

var $col; $colResult : Collection

$col:=[{o: $o1}; {o: $o2}; {o: $o3}]
$colResult:=$col.query("o = :v"; {parameters: {v: $o3}})
	//$colResult.length=2
	//$colResult[0].o=$o1 is true
	//$colResult[1].o=$o1 is true

```

Exemplo com uma referência de coleção:

```4d

$c1:=[1; 2; 3]
$c2:=[1; 2; 3] //mesma coleção, mas outra referência
$c3:=$c1 //mesma coleção e referência

$col:=[{c: $c1}; {c: $c2}; {c: $c3}]
$col2:=$col.query("c = :v"; {parameters: {v: $c3}})
	//$col2.length=2
	//$col2[0].c=$c1 é true
	//$col2[1].c=$c1 é true

```

#### Parâmetro querySettings

No parâmetro *querySettings*, você pode passar um objeto que contenha placeholders de consulta como objetos. As propriedades abaixo são compatíveis:

| Propriedade | Tipo   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters  | Object | **Placeholders com nome para os valores** usados na *queryString*. Os valores são expressos como pares de propriedade/valor, em que propriedade é o nome do espaço reservado inserido para um valor na *queryString* (":placeholder") e valor é o valor a ser comparado. Pode combinar marcadores de posição indexados (valores passados diretamente em parâmetros de valor) e valores de marcadores de posição com nome na mesma pesquisa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| attributes  | Object | **Placeholders nomeados para os caminhos de atributos** usados na *queryString*. Os atributos são expressos como pares de propriedade/valor, em que propriedade é o nome do espaço reservado inserido para um caminho de atributo no *queryString* (":placeholder"), e o valor pode ser uma cadeia de caracteres ou uma coleção de cadeias de caracteres. Cada valor é um caminho que pode designar uma propriedade em um objeto da coleção<table><tr><th>Tipo de propriedade</th><th>Descrição</th></tr><tr><td>String (cadeia de caracteres)</td><td>attributePath expresso usando a notação de ponto, por exemplo, "name" ou "user.address.zipCode"</td></tr><tr><td>Coleção de cadeias de caracteres</td><td>Cada cadeia de caracteres da coleção representa um nível de attributePath, por exemplo, \["name"] ou \["user", "address", "zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in *value* parameters) and named placeholder values in the same query. |

> Using this parameter is mandatory if you want to query a collection [using a **collection reference** or **object reference**](#object-or-collection-reference-as-value).

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
 $col:=$c.query("age=null") //não são permitidos placeholders ou marcadores de posição com "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

Este exemplo devolve as pessoas contratadas há mais de 90 dias:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] se hoje for 01/10/2018
```

#### Exemplo 3

Pesquisas com datas:

```4d

$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

:::info

More examples of queries can be found in the `dataClass.query()` page.

:::

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

| Parâmetro  | Tipo                                            |                             | Descrição                                                                         |
| ---------- | ----------------------------------------------- | :-------------------------: | --------------------------------------------------------------------------------- |
| formula    | 4D. Function                    |              ->             | Objecto fórmula                                                                   |
| methodName | Text                                            |              ->             | Nome da função a qual se chama para processar os elementos da coleção             |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | Value to use as the first argument to the first call of *formula* or *methodName* |
| param      | expressão                                       |              ->             | Parâmetro(s) a transmitir                                      |
| Resultados | Text, Number, Object, Collection, Date, Boolean | <- | Resultado do valor do acumulador                                                  |

<!-- END REF -->

#### Descrição

The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the *formula* or *methodName* callback against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

The callback takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

Pode passar o valor para inicializar o acumulador em *initValue*. If omitted, *$1.accumulator* starts with *Undefined*.

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser processado
- em *$2: param*
- em *$N...*: *paramN...*

A chamada de retorno recebe os seguintes parâmetros:

- *$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
- *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

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

Com o seguinte método ***Flatten***:

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

| Parâmetro  | Tipo                                            |                             | Descrição                                                                         |
| ---------- | ----------------------------------------------- | :-------------------------: | --------------------------------------------------------------------------------- |
| formula    | 4D. Function                    |              ->             | Objecto fórmula                                                                   |
| methodName | Text                                            |              ->             | Nome da função a qual se chama para processar os elementos da coleção             |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | Value to use as the first argument to the first call of *formula* or *methodName* |
| param      | expressão                                       |              ->             | Parâmetro(s) a transmitir                                      |
| Resultados | Text, Number, Object, Collection, Date, Boolean | <- | Resultado do valor do acumulador                                                  |

<!-- END REF -->

#### Descrição

The `.reduceRight()` function <!-- REF #collection.reduceRight().Summary -->applies the *formula* or *methodName* callback against an accumulator and each element in the collection (from right to left) to reduce it to a single value<!-- END REF -->.

> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

The callback takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

Pode passar o valor para inicializar o acumulador em *initValue*. If omitted, *$1.accumulator* starts with *Undefined*.

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser processado
- em *$2: param*
- em *$N...*: *paramN...*

A chamada de retorno recebe os seguintes parâmetros:

- *$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
- *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

#### Exemplo 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduceRight(Formula($1.accumulator*=$1.value); 1)  //retorna 86400

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

Com o seguinte método ***Flatten***:

```4d
	//Método projeto Flatten 
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

| Parâmetro  | Tipo       |                             | Descrição                                                         |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------- |
| index      | Integer    |              ->             | Elemento no qual que se inicia a eliminação                       |
| howMany    | Integer    |              ->             | Número de elementos a eliminar, ou 1 elemento se omitir           |
| Resultados | Collection | <- | Modified collection without removed element(s) |

<!-- END REF -->

#### Descrição

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified *index* position in the collection and returns the edited collection<!-- END REF -->.

> Essa função modifica a coleção original.

Em *index*, passe a posição onde deseja que o elemento seja retirado da colecção.

> **Aviso**: lembre que elementos de coleção são numerados a partir de 0. If *index* is greater than the length of the collection, actual starting index will be set to the length of the collection.

- Se *index* < 0, ele será recalculado como *index:=index+length* (ele é considerado como o deslocamento do final da coleção).
- Se o valor calculado for < 0, *index* será definido como 0.
- If the calculated value > the length of the collection, *index* is set to the length.

Em *howMany*, passe o número de elementos a serem removidos de *index*. If *howMany* is not specified, then one element is removed.

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

| Parâmetro    | Tipo                                            |                             | Descrição                                   |
| ------------ | ----------------------------------------------- | :-------------------------: | ------------------------------------------- |
| size         | Integer                                         |              ->             | Nova dimensão da colecção                   |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |              ->             | Valor padrão para preencher novos elementos |
| Resultados   | Collection                                      | <- | Colecção original redimensionada            |

<!-- END REF -->

#### Descrição

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.

> Essa função modifica a coleção original.

- If *size* < collection length, exceeding elements are removed from the collection.
- Se *size* > comprimento da coleção, o comprimento da coleção é aumentado à medida.

Por padrão, novos elementos são preenchidos com valores **null**. You can specify the value to fill in added elements using the *defaultValue* parameter.

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

| Parâmetro  | Tipo       |                             | Descrição                   |
| ---------- | ---------- | :-------------------------: | --------------------------- |
| Resultados | Collection | <- | Cópia invertida da colecção |

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

| Parâmetro  | Tipo |                             | Descrição                     |
| ---------- | ---- | :-------------------------: | ----------------------------- |
| Resultados | any  | <- | Primeiro elemento de colecção |

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

| Parâmetro  | Tipo       |                             | Descrição                                                                        |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------- |
| startFrom  | Integer    |              ->             | Início do índice (incluído)                                   |
| end        | Integer    |              ->             | Final do índice (não incluído)                                |
| Resultados | Collection | <- | Nova colecção contendo elementos cortados (cópia superficial) |

<!-- END REF -->

#### Descrição

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from *startFrom* index to *end* index (end not included). This function returns a *shallow copy* of the collection. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.

> Essa função não modifica a coleção original.

The returned collection contains the element specified by *startFrom* and all subsequent elements up to, but not including, the element specified by *end*. If only the *startFrom* parameter is specified, the returned collection contains all elements from *startFrom* to the last element of the original collection.

- Se *startFrom* < 0, ele é recalculado como *startFrom:=startFrom+length* (é considerado como o deslocamento a partir do final da coleção).
- If the calculated value < 0, *startFrom* is set to 0.
- Se *end* < 0 , ele será recalculado como *end:=end+length*.
- If *end < startFrom* (passed or calculated values), the method does nothing.

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

| Parâmetro | Tipo |     | Descrição |
| --------- | ---- | :-: | --------- |

|startFrom |Integer |->|Index to start the test at|
|formula|4D.Function|->|Formula object|
|methodName|Text|->|Name of a method|
|param |any |->|Parameter(s) to pass|
|Result|Boolean|<-|True if at least one element successfully passed the test|

<!-- END REF -->

#### Descrição

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test implemented in the provided *formula* or *methodName* code<!-- END REF -->.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *formula* (sintaxe recomendada), um [objecto Formula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos projecto;
- ou *methodName*, o nome de um método projeto (texto).

A callback é chamada com o(s) parâmetro(s) passados em *param* (opcional). A chamada de retorno pode realizar qualquer teste, com ou sem o(s) parâmetro(s) e deve retornar **true** para cada elemento que cumpra o teste. Este método recebe um `Object` como primeiro parâmetro ($1).

A chamada de retorno recebe os seguintes parâmetros:

- em *$1.value*: valor do elemento a ser processado
- em *$2: param*
- em *$N...*: *paramN...*

Pode definir o(s) seguinte(s) parâmetro(s):

- (mandatory if you used a method) *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
- *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

De qualquer forma, no momento em que a função `.some()` encontra o primeiro elemento da coleção retornando true, ela para de chamar o retorno de chamada e retorna **true**.

Por padrão, `.some()` testa toda a coleção. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

- Se *startFrom* >= tamanho da coleção, é retornado **False**, o que significa que a coleção não é testada.

- If *startFrom* < 0, it is considered as the offset from the end of the collection.

- Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

| Parâmetro  | Tipo                         |                             | Descrição                                                             |
| ---------- | ---------------------------- | :-------------------------: | --------------------------------------------------------------------- |
| formula    | 4D. Function |              ->             | Objecto fórmula                                                       |
| methodName | Text                         |              ->             | Nome da função a qual se chama para processar os elementos da coleção |
| extraParam | any                          |              ->             | Parâmetros para o método                                              |
| Resultados | Collection                   | <- | Colecção original ordenada                                            |

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

If you want to sort the collection elements in some other order or sort any type of element, you must supply in *formula* ([Formula object](FunctionClass.md)) or *methodName* (Text) a callback that defines the sort order. O valor de retorno deve ser um booleano que indica a ordem relativa dos dois elementos: **True** se *$1.value* for menor que *$1.value2*, **False** se *$1.value* for maior que *$1.value2*. Pode fornecer parâmetros adicionais a <em x-id="3">methodName</em> se for necessário.

A chamada de retorno recebe os seguintes parâmetros:

- $1 (objeto), onde:
  - *$1.value* (qualquer tipo): valor do primeiro elemento a ser comparado
  - *$1.value2* (qualquer tipo): valor do segundo elemento a ser comparado
- $2...$N (qualquer tipo): parâmetros adicionais

Se utilizou um método, deve definir o parâmetro seguinte:

- *$1.result* (booleano): **true** se *$1.value < $1.value2*, **false** caso contrário.

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
$col2:=$col.sort() //ordenação numérica: [4,33,66,222,1111]
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) //ordenação alfabética: [1111,222,33,4,66]
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

| Parâmetro    | Tipo |                             | Descrição                                            |
| ------------ | ---- | :-------------------------: | ---------------------------------------------------- |
| propertyPath | Text |              ->             | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real | <- | Soma dos valores da colecção                         |

<!-- END REF -->

#### Descrição

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade objeto para levar em consideração.

`.sum()` retorna 0 se:

- a coleção estiver vazia,
- a coleção não contiver elementos numéricos,
- *propertyPath* não for encontrada na collection.

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

| Parâmetro  | Tipo                                   |                             | Descrição                                                                         |
| ---------- | -------------------------------------- | :-------------------------: | --------------------------------------------------------------------------------- |
| value      | Text, Number, Object, Collection, Date |              ->             | Valor(es) a inserir no início da colecção                      |
| Resultados | Real                                   | <- | Colecção contendo elemento(s) adicionado(s) |
|            |                                        |                             |                                                                                   |

<!-- END REF -->

#### Descrição

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given *value*(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.

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
