---
id: CollectionClass
title: Collection
---


A classe Collection gerencia variáveis de tipo [Collection](Concepts/dt_collection.md).

Uma coleção se inicializa com:

|                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New shared collection.Summary --> |

### Exemplo

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```

### Resumo

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #collection.map().Syntax -->](#map)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->                      |
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`


<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->



<!-- REF #_command_.New collection.Params -->
| Parâmetros | Tipo                                                                    |    | Descrição                                 |
| ---------- | ----------------------------------------------------------------------- |:--:| ----------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | -> | Valor(es) de collection                   |
| Resultados | Collection                                                              | <- | New collection|<!-- END REF --> |

#### Descrição

O comando `New collection` <!-- REF #_command_.New collection.Summary --> creates a new empty or prefilled collection<!-- END REF --> and returns its reference.

Se não passar nenhum parâmetro, `New collection` cria uma coleção vazia e retorna sua referência.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.
> Lembre que declarações`var : Collection` ou `C_COLLECTION` declaram uma variável do tipo `Collection` mas não cria qualquer coleção.

Opcionalmente pode pré-preencher a nova coleção passando um ou mais parâmetros *value*.

Pode também adicionar ou modificar elementos subsequentemente através de assignação. Por exemplo:

```4d
 myCol[10]:="My new element"
```

Se o novo índice de elemento estiver além do último elemento existente da coleção, a coelção é redimensionada automaticamente e todos os elementos intermediários são atribuídos ao valor **null**.

Pode passar qualquer número de valores de qualquer tipo compatível (número, texto, data, imagem, ponteiro, objeto, coleção....). Diferente de arrays, coleções podem misturar dados de tipos diferentes.

Pode prestar atenção aos problemas de conversão abaixo:

* Se passar um ponteiro, é mantido "tal qual": é avaliado usando o comando `JSON Stringify`
* Datas são armazenadas no formato "aaaa-mm-dd" ou strings com o formato "AAAA-MM-DDTHH:mm:ss.SSSZ", de acordo com a configuração atual "dates inside objects"/datas dentro de objetos. Quando converter datas 4D em texto antes de armazená-las em uma coleção, como padrão o programa considera a zona horária local. Pode modificar esse comportamento usando o seletor `Dates inside objects` do comando `SET DATABASE PARAMETER`.
* Se passar a hora, é armazenada como um número de milissegundos (Real).

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
 $coll[9]:="z" //add a 10th element with value "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

## `New shared collection`

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->



<!-- REF #_command_.New shared collection.Params -->
| Parâmetros | Tipo                                                                |    | Descrição                                        |
| ---------- | ------------------------------------------------------------------- |:--:| ------------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection | -> | Valores da collection compartida                 |
| Resultados | Collection                                                          | <- | New shared collection|<!-- END REF --> |

#### Descrição

O comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> creates a new empty or prefilled shared collection<!-- END REF --> and returns its reference.

Adding an element to this collection must be surrounded by the [`Use... End`](Concepts/shared.md#useend-use) use structure, otherwise an error is generated. Ler um elemento sem a estrutura é entretanto possível.
> Para saber mais sobre coleções partilhadas, veja a página [Shared objects and collections](Concepts/shared.md).

Se não quiser passar parâmetros, `New shared collection` cria uma coleção vazia partilhada e retorna sua referência.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.
> Lembre que declarações`var : Collection` ou `C_COLLECTION` declaram uma variável do tipo `Collection` mas não cria qualquer coleção.

Opcionalmente pode preencher automaticamente a nova coleção partilhada passando um ou vários *valores*como parâmetros. Também pode adicionar ou modificar elementos através de atribuição de notação de objetos (ver exemplo).

Se o novo índice elemento for além do último elemento existente da coleção partilhada, a coleção é automaticamente redimensionada e todos os novos elementos intermediários são atribuídos um valor**null**.

Pode passar qualquer número de valores dos tipos compatíveis abaixo:

* número (real, longint....). Valores numéricos são sempre armazenados como reais.
* text
* boolean
* date
* hora (armazenada como número de milissegundos - real)
* null
* objeto compartido(*)
* shared collection(*) > Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared.

> Diferente de coleções padrão (não partilhadas), coleções partilhadas não são compatíveis com imagens, ponteiros e objetos ou coleção que não forem partilhadas.

(\*)Quando um objeto partilhado ou coleção forem adicionadas a uma coleção partilhada, partilham o mesmo *locking identifier*. Para saber mais sobre esse ponto, veja [4D Doc Center](https://doc.4d.com).


#### Exemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```


<!-- REF collection.average().Desc -->
## .average()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->



<!-- REF #collection.average().Params -->
| Parâmetros   | Tipo            |    | Descrição                                                       |
| ------------ | --------------- |:--:| --------------------------------------------------------------- |
| propertyPath | Text            | -> | Rota de propriedade objeto a ser usado para cálculos            |
| Resultados   | Real, Undefined | <- | Média aritmética dos valores coleção|<!-- END REF --> |

#### Descrição

A função `.average()` <!-- REF #collection.average().Summary -->returns the arithmetic mean (average) of defined values in the collection instance<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade objeto para levar em consideração.

`.average()` retorna `undefined` se:

* a coleção estiver vazia,
* a coleção não contiver elementos numéricos,
* *propertyPath* não for encontrada na collection.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.clear().Syntax -->**.clear()** : Collection<!-- END REF -->



<!-- REF #collection.clear().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                       |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------- |
| Resultados | Collection | <- | Collection original com todos os elementos removidos|<!-- END REF --> |

#### Descrição

A função `.clear()` <!-- REF #collection.clear().Summary -->removes all elements from the collection instance and returns an empty collection<!-- END REF -->.
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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.combine().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| col2       | Collection | -> | Collection a combinar                                                               |
| index      | Integer    | -> | Posição para a qual inserir elementos para combinar em coleção (padrão = length +1) |
| Resultados | Collection | <- | Original collection containing combined element(s)|<!-- END REF -->       |

#### Descrição


A função `.combine()` <!-- REF #collection.combine().Summary -->inserts *col2* elements at the end or at the specified *index* position in the collection instance and returns the edited collection<!-- END REF -->. .
> Essa função modifica a coleção original.

Como padrão, elementos *col2* são adicionados ao final da collection original. Pode passar em *index* a posição onde quiser que os elmentos *col2* sejam inseridos na coleção.
> **Aviso**: Lembre que elementos coleção são numerados a partir de 0.

* Se *index* > o tamanho da coleção, o início real de *index* será estabelecido para o tamanho da coleção.
* Se *index* < 0, será recalculado como  *index:=index+length* (é considerado como o offset do final da coleção).
* Se o valor calculado for negativo, *index* será estabelecido como 0.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->



<!-- REF #collection.concat().Params -->
| Parâmetros | Tipo                                                           |    | Descrição                                                                                                               |
| ---------- | -------------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture | -> | Valores a concatenar. Se *value* for uma coleção, todos os elementos da coleção são adicionados para a coleção original |
| Resultados | Collection                                                     | <- | Nova coleção com valores adicionados à coleção original|<!-- END REF -->                                      |

#### Descrição

A função `.concat()` <!-- REF #collection.concat().Summary -->returns a new collection containing the elements of the original collection with all elements of the *value* parameter added to the end<!-- END REF -->.
> Essa função não modifica a coleção original.

Se *value* for uma coleção, todos os elementos são adicionados como novos elementos no final da coleção original. Se *value* não for a coleção, será adicionado ao novo elemento.

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

<details><summary>Histórico</summary>

| Versão | Mudanças                                             |
| ------ | ---------------------------------------------------- |
| v18 R3 | Nova opção *ck shared*. Novos parâmetros *groupWith* |
| v16 R6 | Adicionado                                           |

</details>


<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->



<!-- REF #collection.copy().Params -->
| Parâmetros   | Tipo       |    | Descrição                                                                                                        |
| ------------ | ---------- |:--:| ---------------------------------------------------------------------------------------------------------------- |
| option       | Integer    | -> | `ck resolve pointers`: resolve ponteiros antes de copiar,<br/>`ck shared`: retorna uma coleção partilihada |
| groupWithCol | Collection | -> | Coleção partilhada a ser agrupada com a coleção resultante                                                       |
| groupWithObj | Objeto     | -> | Objeto partilhado a ser agrupado com a coleção resultante                                                        |
| Resultados   | Collection | <- | Cópia profunda da collection original|<!-- END REF -->                                                 |

#### Descrição

A função `.copy()` <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->.***Deep copy*** means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.
> Essa função não modifica a coleção original.

Se passado, o parâmetro *option* pode conter uma das constantes abaixo (ou ambas):

| option                | Descrição                                                                                                                                                                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Se a collection original contém valores tipo ponteiro, por padrão a cópia também contém os ponteiros. Entretanto pode resolver ponteiros quando copiar por passando os ck resolve pointers. Nesse caso, cada ponteiro presenta na coleção é avaliada quando copiar e seu valor de dereferencia é usado.                     |
| `ck shared`           | Como padrão, copy() retorna uma colleciton regular (não partilhado), mesmo se o comando for aplicado para a collection shared. Passe a constante ck shared para criar uma collection shared. Nesse caso, pode usar o parâmetro groupWith para associar a collection partilhada com outra collection ou objeto (ver abaixo). |

Os parâmetros *groupWithCol* ou *groupWithObj* permite determinar uma collection ou um objeto com o qual a coleção resultante deveria ser associada.

#### Exemplo 1

Se quiser copiar a collection comum (não partilhada) *$lastnames* no objeto partilhado *$sharedObject*. Para fazer isso, precisa criar uma cópia partilhada da coleção (*$sharedLastnames*).

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

Se quisermos combinar *$sharedColl1* e *$sharedColl2*. Já que pertencem a grupos partilhados diferentes, uma combinação diferente resultaria em um erro. Por isso precisa fazer uma cópia partilhada de *$sharedColl1* e designar *$sharedColl2* commo um grupo partilhado para a cópia.

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

Se tiver uma collection comum (*$lastnames*) e se quisermos colocar em**Storage** da aplicação. Para fazer isso, precisamos criar antes uma cópia partilhada (*$sharedLastnames*).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames is a regular collection

$sharedLastnames:=$lastnames.copy(ck shared) // shared copy Use(Storage)
    Storage.lastnames:=$sharedLastnames End use
```

#### Exemplo 4

Esse exemplo ilustra o uso da opção `ck resolve pointers`:

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->



<!-- REF #collection.count().Params -->
| Parâmetros   | Tipo |    | Descrição                                                 |
| ------------ | ---- |:--:| --------------------------------------------------------- |
| propertyPath | Text | -> | Rota de propriedade objeto a ser usado para cálculos      |
| Resultados   | Real | <- | Número de elementos na coleção|<!-- END REF --> |

#### Descrição

A função `.count()` <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

Se a coleção conter objetos, pode passar o parâmetro *propertyPath*. Nesse caso, só elementos que conterem *propertyPath* serão levados em consideração.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->



<!-- REF #collection.countValues().Params -->
| Parâmetros   | Tipo                                            |    | Descrição                                                  |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection | -> | Valor a contar                                             |
| propertyPath | Text                                            | -> | Rota de propriedade objeto a ser usado para cálculos       |
| Resultados   | Real                                            | <- | Número de ocorrências do valor |<!-- END REF --> |

#### Descrição

A função `.countValues()` <!-- REF #collection.countValues().Summary -->returns the number of times value is found in the collection<!-- END REF -->.

Pode passar em *value*:

* um valor escalar (texto, número, booleano, data),
* um objeto ou uma referência de coleção.

Para um elemento ser encontrado, o tipo de *value* deve ser equivalente ao tipo de elemento, o método usa o operador equality.

O parâmetro opcional *propertyPath* permite contar valores dentro de uma coleção de objetos: passe em *propertyPath* a rota da propriedade cujos valores quer contar.
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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.distinct().Syntax -->**.distinct**( {*option* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.distinct().Params -->
| Parâmetros   | Tipo       |    | Descrição                                                            |
| ------------ | ---------- |:--:| -------------------------------------------------------------------- |
| option       | Integer    | -> | `ck diacritical`: avaliação diacríticos ("A" # "a" por exemplo)      |
| propertyPath | Text       | -> | Rota do atributo cujos valores quer obter                            |
| Resultados   | Collection | <- | Nova coleção com apenas valores distintos|<!-- END REF --> |

#### Descrição

A função `.distinct()` <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.
> Essa função não modifica a coleção original.

A coleção retornada é ordenada automaticamente. Valores **Null** não são retornados.

Como padrão, uma avaliação não-diacrítica é realizada. Se quiser que a avaliação diferencie minúsculas de maiúsculas ou que diferencie letras acentuadas, passe a constante `ck diacritical` no parâmetro*option*.

Se a coleção conter objetos, pode passar o parâmetro *propertyPath* para indicar a propriedade objeto cujos valores diferentes você quer obter.

#### Exemplo

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
```


<!-- END REF -->

<!-- REF collection.equal().Desc -->
## .equal()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->



<!-- REF #collection.equal().Params -->
| Parâmetros  | Tipo       |    | Descrição                                                                   |
| ----------- | ---------- |:--:| --------------------------------------------------------------------------- |
| collection2 | Collection | -> | Coleção a comparar                                                          |
| option      | Integer    | -> | `ck diacritical`: avaliação diacríticos ("A" # "a" por exemplo)             |
| Resultados  | Booleano   | <- | True se as coleções forem idênticas, senão false|<!-- END REF --> |

#### Descrição

A função `.equal()` <!-- REF #collection.equal().Summary -->compares the collection with collection2 <!-- END REF -->and returns **true** if they are identical (deep comparison).

Como padrão, uma avaliação não-diacrítica é realizada. Se quiser que a avaliação diferencie maiúsculas de minúsculas e caracteres acentuados, passe a constante`ck diacritical` no parâmetro option.
> Elementos com valores **Null** não são a mesma coisa que valores Undefined.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.every().Syntax -->**.every**( *methodName* : Text { ;*...param* : any } ) : Boolean<br/>**.every**( *startFrom* : Integer ; *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->



<!-- REF #collection.every().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                          |
| ---------- | -------- |:--:| ---------------------------------------------------------------------------------- |
| startFrom  | Integer  | -> | Índice para início do teste em                                                     |
| methodName | Text     | -> | Nome do método para chamar para o teste                                            |
| param      | Mixed    | -> | Parâmetros a passar para methodName                                                |
| Resultados | Booleano | <- | True se todos os elementos passarem o teste com sucesso|<!-- END REF --> |

#### Descrição

A função `.every()` <!-- REF #collection.every().Summary -->The `.every()` function<!-- END REF -->.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. Este método recebe um `Object` como primeiro parâmetro ($1) e deve estabelecer *$1.result* para **true** para o primeiro elemento que cumprir a condição.

*methodName* recebe os parâmetros abaixo:

* em *$1.value*: valor elemento a ser avaliado
* *$2*: param
* *$N*: paramN...

*methodName* estabelece os parâmetros abaixo:

* *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
* *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.

Em todos os casos, no ponto quanod a função `.every()` encontra o primeiro elemento de coleção retornando **false** em *$1.result*, ele para de chamar *methodName* e retorna **false**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

* Se *startFrom* >= tamanho da coleção, é retornado **false**, o que significa que a coleção não é testada.
* Se *startFrom* < 0, é considerada como offset do final da coleção( *startFrom:=startFrom+length*).
* Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

#### Exemplo 1

```4d
var $c : Collection  
var $b : Boolean
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every("NumberGreaterThan0") //retorna true
$c.push(-1)
$b:=$c.every("NumberGreaterThan0") //retorna false
```

Com o método a seguir ***NumberGreaterThan0***:

```4d
$1.result:=$1.value>0
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

Com o método ***TypeLookUp***:

```4d
#DECLARE ($toEval : Object ; $param : Integer) //$1; $2 If(Value type($toEval.value)=$param)
    $toEval.result:=True End if
```


<!-- END REF -->

<!-- REF collection.extract().Desc -->
## .extract()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection<!-- END REF -->



<!-- REF #collection.extract().Params -->
| Parâmetros   | Tipo       |    | Descrição                                                                                                                             |
| ------------ | ---------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       | -> | Rota de propriedade de objeto cujos valores serão extraídos para nova coleção                                                         |
| targetpath   | Text       | -> | Rota de propriedade alvo ou nome propriedade                                                                                          |
| option       | Integer    | -> | `ck keep null`: inclui propriedades null na coleção retornada (ignorado como padrão). Parâmetro ignorado se for passado *targetPath*. |
| Resultados   | Collection | <- | New collection containing extracted values|<!-- END REF -->                                                                 |

#### Descrição

A função `.extract()` <!-- REF #collection.extract().Summary -->creates and returns a new collection containing *propertyPath* values extracted from the original collection of objects<!-- END REF -->.
> Essa função não modifica a coleção original.

Os conteúdos da coleção retornada depende do parâmetro *targetPath*:

* Se o parâmetro *targetPath* for omitido, `.extract()` preenche a nova coleção com os valores *propertyPath* da coleção original.

 Como padrão, elementos para os quais *propertyPath* for null ou undefined são ignorados na coleção resultante. Pode passar a constante `ck keep null` no parâmetro *option* para incluir esses valores como elementos null na coleção retornada.

* Se um ou mais parâmetros *targetPath* forem passados,, `.extract()` preenche a nova coelção com as propriedades *propertyPath* e cada elemento da nova coleção é um objeto com as propriedades *targetPath* preenchidas com as propriedades correspondentes *propertyPath*. Se mantém os valores null (o parámetro *option* se ignora) com esta sintaxe.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.fill().Params -->
| Parâmetros | Tipo                                            |    | Descrição                                                         |
| ---------- | ----------------------------------------------- |:--:| ----------------------------------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean | -> | Valores preenchido                                                |
| startFrom  | Integer                                         | -> | Início do índice (incluído)                                       |
| end        | Integer                                         | -> | Final do índice (não incluído)                                    |
| Resultados | collection                                      | <- | Original collection with filled values|<!-- END REF --> |

#### Descrição

A função `.fill()` <!-- REF #collection.fill().Summary -->fills the collection with the specified *value*, optionally from *startFrom* index to *end* index, and returns the resulting collection<!-- END REF -->.
> Essa função modifica a coleção original.

* Se o parâmetro *startFrom* for omitido, *value* é estabelecido para todos os elementos coleção (*startFrom*=0).
* Se o parâmetro *startFrom* for passado e o parâmetro*end* for omitido, *value* é estabelecido para elementos de coleção começando com *startFrom* até o elemento final da coleção (*end*=length).
* Se tanto *startFrom* quanto *end* forem passados, *value* é estabelecido para elementos coleção começando em *startFrom* ao elemento *end*.

Em caso de inconsistências, as regras abaixos são seguidas:

* Se *index* < 0, será recalculado como *startFrom:=startFrom+length* (é considerado como o offset do final da coleção). Se o valor calculado for negativo, *startFrom* toma o valor 0.
* Se *end* < 0 , é recalculado como sendo *end:=end+length*.
* Se *end* < *startFrom* (valores passados ou calculados), o método não faz nada.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.filter().Syntax -->**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->



<!-- REF #collection.filter().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                             |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------- |
| methodName | Text       | -> | Nome da função a chamar para filtrar a coleção                                        |
| param      | Mixed      | -> | Parâmetros a passar para *methodName*                                                 |
| Resultados | Collection | <- | New collection containing filtered elements (shallow copy)|<!-- END REF --> |

#### Descrição

A função `.filter()` <!-- REF #collection.filter().Summary -->The `.filter()` function<!-- END REF -->. Summary --> devolve todos os elementos de uma coleção de objetos que coincidem com as condiciones de pesquisa <!-- END REF -->definidas por *queryString* e (opcionalmente) *value* ou *querySettings*. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional).

*methodName* recebe os parâmetros abaixo:

* em *$1.value*: valor elemento a ser filtrado
* em *$2*: *param*
* *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

* *$1.result* (boolean): **true** se o valor elemento corresponder à condição de filtro e tiver que ser mantido.
* *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

#### Exemplo 1

Se quiser obter a coleção de elementos textos cujo tamanho for menor que 6:

```4d
 var $col;$colNew : Collection
 $col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
 $colNew:=$col.filter("LengthLessThan";6)
  //$colNew=["hello","world","tim","miami"]
```

O código para o método ***LengthLessThan*** é:

```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### Exemplo 2

Se quiser filtrar elementos de acordo com seu tipo de valor:

```4d
 var $c;$c2;$c3 : Collection
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter("TypeLookUp";Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter("TypeLookUp";Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

O código para ***TypeLookUp*** é:

```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(OB Get type($1;"value")=$2)


    $1.result:=True
 End if
```


<!-- END REF -->

<!-- REF collection.find().Desc -->
## .find()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.find().Syntax -->**.find**( *methodName* : Text { ; *...param* : any } ) : any<br/>**.find**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->



<!-- REF #collection.find().Params -->
| Parâmetros | Tipo    |    | Descrição                                                               |
| ---------- | ------- |:--:| ----------------------------------------------------------------------- |
| startFrom  | Integer | -> | Índice onde inicia a pesquisa                                           |
| methodName | Text    | -> | Nome da função a chamar para o find                                     |
| param      | any     | -> | Parâmetros a passar para *methodName*                                   |
| Resultados | any     | <- | First value found, or Undefined if not found|<!-- END REF --> |

#### Descrição

A função `.find()` <!-- REF #collection.find().Summary -->The `.indexOf()` function<!-- END REF -->.
> Essa função não modifica a coleção original.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional).

*methodName* recebe os parâmetros abaixo:

* em *$1.value:* valor do elemento a avaliar
* in *$2: param*
* *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

* *$1.result* (boolean): **true** se o valor elemento corresponder à condição de pesquisa.
* *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

Como padrão, `.findIndex()` testa a coleção completa. Opcionalmente pode passar em *startFrom* o índice do elemento a partir do qual vai começar a pesquisa.

* Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
* Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
* Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

#### Exemplo 1

Se quiser obter o primeiro elemento com um tamanho menor que 5:

```4d
 var $col : Collection
 $col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
 $value:=$col.find("LengthLessThan";5) //$value="tim"
```

O código para o método ***LengthLessThan*** é:

```4d
 var $1 : Object
 var $2 : Integer
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### Exemplo 2

Se quiser encontrar o nome da cidade dentro da coleção:

```4d
 var $c : Collection
 var $c2 : Object
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.find("FindCity";"Clanton") //$c2={name:Clanton,zc:35046}
```

O código para ***TypeLookUp*** é:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2 //nome  é um nome de propriedade de objetos na coleção
```


<!-- END REF -->

<!-- REF collection.findIndex().Desc -->
## .findIndex()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.findIndex().Syntax -->**.findIndex**( *methodName* : Text { ; *...param* : any } ) : Integer<br/>**.findIndex**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->



<!-- REF #collection.findIndex().Params -->
| Parâmetros | Tipo    |    | Descrição                                                                 |
| ---------- | ------- |:--:| ------------------------------------------------------------------------- |
| startFrom  | Integer | -> | Índice onde inicia a pesquisa                                             |
| methodName | Text    | -> | Nome da função a chamar para o find                                       |
| param      | any     | -> | Parâmetros a passar para *methodName*                                     |
| Resultados | Integer | <- | Index of first value found, or -1 if not found|<!-- END REF --> |

#### Descrição

A função `.find()` <!-- REF #collection.findIndex().Summary -->The `.findIndex()` function<!-- END REF -->.
> Essa função não modifica a coleção original.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s).

*methodName* recebe os parâmetros abaixo:

* em *$1.value*: valor elemento a ser avaliado
* in *$2: param*
* *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

* *$1.result* (boolean): **true** se o valor elemento corresponder à condição de pesquisa.
* *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

Como padrão, `.every()` testa a coleção completa. Opcionalmente pode passar em *startFrom* o índice do elemento a partir do qual vai começar a pesquisa.

* Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
* Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
* Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

O código para o método ***FindCity*** é:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2
```


<!-- END REF -->

<!-- REF collection.indexOf().Desc -->
## .indexOf()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->



<!-- REF #collection.indexOf().Params -->
| Parâmetros | Tipo      |    | Descrição                                                                                               |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------------------------- |
| toSearch   | expressão | -> | Expressão a pesquisar na coleção                                                                        |
| startFrom  | Integer   | -> | Índice onde inicia a pesquisa                                                                           |
| Resultados | Integer   | <- | Index of the first occurrence of toSearch in the collection, -1 if not found|<!-- END REF --> |

#### Descrição

A função `.indexOf()` <!-- REF #collection.indexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.
> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

* um valor escalar (texto, número, booleano, data),
* o valor null,
* um objeto ou uma referência de coleção.

*toSearch* deve corresponder exatamente com o elemento a encontrar (as mesmas regras que para o operador de igualdade do tipo dados é aplicado).

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa em*startFrom*.

* Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
* Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
* Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->



<!-- REF #collection.indices().Params -->
| Parâmetros  | Tipo       |    | Descrição                                                                           |
| ----------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| queryString | Text       | -> | Critérios de pesquisa                                                               |
| value       | any        | -> | Valores a comparar quando usar placeholders (valores temporários)                   |
| Resultados  | Collection | <- | Element index(es) matching queryString in the collection|<!-- END REF --> |

#### Descrição

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the *queryString* search conditions<!-- END REF -->, and not elements themselves. Indices são retornados em ordem ascendente.
> Essa função não modifica a coleção original.

O parâmetro *queryString* usa a sintaxe abaixo:

```4d
valor de comparação propertyPath {valor de comparação logicalOperator propertyPath}
```

Para uma descrição detalhada dos parâmetros *queryString* e *value*, veja a função `dataClass.query()`.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.insert().Syntax -->**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->



<!-- REF #collection.insert().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                  |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------- |
| index      | Integer    | -> | Onde inserir os elementos                                                  |
| element    | any        | -> | Elemento a inserir na coleção                                              |
| Resultados | Collection | <- | Original collection containing inserted element|<!-- END REF --> |

#### Descrição

A função `.insert()` <!-- REF #collection.insert().Summary --> inserts *element* at the specified *index* position in the collection instance and returns the edited collection<!-- END REF -->.
> Essa função modifica a coleção original.

In *index*, passe a posição onde quiser que o elemento seja inserido na coleção.
> **Aviso**: Lembre que elementos coleção são numerados a partir de 0.

* Se *index* > o tamanho da coleção, o índice de início é estabelecido como o tamanho da coleção.
* Se *index* < 0, será recalculado como  *index:=index+length* (é considerado como o offset do final da coleção).
* Se o valor calculado for negativo, index será estabelecido como 0.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->



<!-- REF #collection.join().Params -->
| Parâmetros | Tipo    |    | Descrição                                                                                           |
| ---------- | ------- |:--:| --------------------------------------------------------------------------------------------------- |
| delimiter  | Text    | -> | Separador a usar entre os elementos                                                                 |
| option     | Integer | -> | `ck ignore null or empty`: ignora strings vazias ou nulls no resultado                              |
| Resultados | Text    | <- | String containing all elements of the collection, separated by delimiter|<!-- END REF --> |

#### Descrição

The `.unshift()` function <!-- REF #collection.join().Summary -->inserts the given *value*(s) at the beginning of the collection<!-- END REF -->and returns the modified collection.
> Essa função não modifica a coleção original.

Como padrão, elementos null ou vazios da coleção são retornados na string resultante. Passe a constante `ck ignore null or empty` na opção *option* parâmetro se quiser removê-las da string resultado.

#### Exemplo

```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```


<!-- END REF -->

<!-- REF collection.lastIndexOf().Desc -->
## .lastIndexOf()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->



<!-- REF #collection.lastIndexOf().Params -->
| Parâmetros | Tipo      |    | Descrição                                                                                          |
| ---------- | --------- |:--:| -------------------------------------------------------------------------------------------------- |
| toSearch   | expressão | -> | O elemento que é pesquisado dentro da coleção                                                      |
| startFrom  | Integer   | -> | Índice onde inicia a pesquisa                                                                      |
| Resultados | Integer   | <- | Index of last occurrence of toSearch in the collection, -1 if not found|<!-- END REF --> |

#### Descrição

A função `.lastIndexOf()` <!-- REF #collection.lastIndexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.
> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

* um valor escalar (texto, número, booleano, data),
* o valor null,
* um objeto ou uma referência de coleção.

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa reversa em *startFrom*.

Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

* Se *startFrom* >= o tamanho da coleção menos um (coll.length-1), a coleção inteira é pesquisada (padrão).
* Se *index* < 0, será recalculado como *startFrom:=startFrom+length* (é considerado como o offset do final da coleção). Se o valor calculado for negativo, -1 é retornado (a coleção não é pesquisada). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da direita para esquerda.
* Se *startFrom* = 0, é retornado -1, o que significa que a coleção não é pesquisada.

#### Exemplo

```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") //devolve 12
 $pos2:=$col.lastIndexOf("e";6) //devolve 4
 $pos3:=$col.lastIndexOf("e";15) //devolve 12
 $pos4:=$col.lastIndexOf("e";-2) //devolve 10
 $pos5:=$col.lastIndexOf("x") //devolve -1
```


<!-- END REF -->

<!-- REF collection.length.Desc -->
## .length

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R5 | Adicionado |

</details>


<!-- REF #collection.length.Syntax -->**.length** : Integer<!-- END REF -->

#### Descrição

A propriedade `.length` <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

A propriedade `.length` é iniciada quando a coleção for criada. Adicionar ou remover elementos atualiza o tamanho, se necessário. Essa propriedade é **read-only** /apenas leitura (não pode usá-la para estabelecer o tamanho da coleção).

#### Exemplo

```4d
 var $col : Collection //$col.length inicializa em 0
 $col:=New collection("one";"two";"three") //$col.length atualizado a  3
 $col[4]:="five" //$col.length atualizado a 5
 $vSize:=$col.remove(0;3).length //$vSize=2
```


<!-- END REF -->

<!-- REF collection.map().Desc -->
## .map()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.map().Syntax -->**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->



<!-- REF #collection.map().Params -->
| Parâmetros | Tipo       |    | Descrição                                                      |
| ---------- | ---------- |:--:| -------------------------------------------------------------- |
| methodName | Text       | -> | Nome do método usado para transformar os elementos da coleção  |
| param      | any        | -> | Parâmetros para o método                                       |
| Resultados | Collection | <- | Collection de valores transformados|<!-- END REF --> |

#### Descrição

A função `.map()` <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the *methodName* method on each element of the original collection<!-- END REF -->. Opcionalmente pode passar parâmetros a*methodName* usando os parâmetros *param*. `.map()` sempre retorna uma coleção com o mesmo tamanho que a coleção original.
> Essa função não modifica a coleção original.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional).

*methodName* recebe os parâmetros abaixo:

* em *$1.value* (qualquer tipo): valor elemento a ser avaliado
* em *$2*(qualquer tipo): *param*
* em *$N...*(qualquer tipo): *paramN...*

*methodName* estabelece os parâmetros abaixo:

* *$1.result* (qualquer tipo): novo valor transformado para adicionar à coleção resultante
* *$1.stop* (boolean): **true** para parar o callback do método. O valor retornado é o último calculado.

#### Exemplo

```4d
 var $c; $c2 : Collection
 $c:=New collection(1;4;9;10;20)
 $c2:=$c.map("Percentage";$c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

*methodName* estabelece os parâmetros abaixo:

```4d
 var $1 : Object
 var $2 : Real
 $1.result:=Round(($1.value/$2)*100;2)
```


<!-- END REF -->

<!-- REF collection.max().Desc -->
## .max()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->



<!-- REF #collection.max().Params -->
| Parâmetros   | Tipo                                            |    | Descrição                                             |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------------- |
| propertyPath | Text                                            | -> | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date | <- | Valor máximo na coleção|<!-- END REF -->    |

#### Descrição

A função `.max()` <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> Essa função não modifica a coleção original.

Se a coleção conter objetos, pode passar o parâmetro *propertyPath* para indicar a propriedade objeto cujos valores máximos você quer obter.

Se a coleção estiver vazia, `.max()` devolve *Undefined*.

Se *end* < 0 , é recalculado como sendo *end:=end+length*.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->



<!-- REF #collection.min().Params -->
| Parâmetros   | Tipo                                            |    | Descrição                                             |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------------- |
| propertyPath | Text                                            | -> | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date | <- | Valor mínimo na coleção|<!-- END REF -->    |

#### Descrição

A função `.min()` <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> Essa função não modifica a coleção original.

Se a coleção conter diferentes tipos de valores, a função `.min()` devolverá o valor mínimo dentro do primeiro tipo de elemento na ordem da lista de tipos (ver a descrição de [`.sort()`](#sort)).

Se a coleção conter objetos, pode passar o parâmetro *propertyPath* para indicar a propriedade objeto cujos valores mínimos você quer obter.

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

<!-- REF collection.orderBy().Desc -->
## .orderBy()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.orderBy().Syntax -->**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->



<!-- REF #collection.orderBy().Params -->
| Parâmetros  | Tipo       |    | Descrição                                                                |
| ----------- | ---------- |:--:| ------------------------------------------------------------------------ |
| pathStrings | Text       | -> | Property path(s) on which to order the collection                        |
| pathObjects | Collection | -> | Coleção de objetos criterio                                              |
| ascOrDesc   | Integer    | -> | `ck ascending` ou `ck descending` (valores escalares)                    |
| Resultados  | Collection | <- | Ordered copy of the collection (shallow copy)|<!-- END REF --> |

#### Descrição

A função `.orderBy()` <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

Esta função devolve uma *cópia superficial*, o que significa que os objetos ou coleções de ambas coleções compartem a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

Se não passar nenhum parâmetro, a função ordena os valores escalares da coleção em ordem ascendente (outros tipos de elementos, como objetos ou coleções, se devolvem desordenados). Pode modificar esta ordem automático passando as constantes `ck ascending` ou `ck descending` no parâmetro *ascOrDesc* (ver abaixo).

Também pode passar um parâmetro de critérios para definir como devem ordenar-se os elementos da coleção. Três sintaxes são compatíveis com esse parâmetro:

* *pathStrings* : Text (fórmula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). *pathStrings* contém uma fórmula composta de 1 a x rotas de propriedades e (opcionalmente) ordens de classificação, separados por vírgulas. A ordem na qual as propriedades são passadas determina a prioridade de ordenação dos elementos da coleção Como padrão as propriedades são ordenadas de forma ascendente. Pode definir a ordem de clasificação de uma propriedade na string de critérios, separado da rota da propriedade por um só espaço: passe "asc" para ordenar em ordem ascendente ou "desc" em ordem descendente.

* *pathObjects* : Collection. Pode adicionar tantos objetos na coleção *pathObjects* como seja necessário. Como padrão, as propriedades se classificam em ordem ascendente ("descending" é false). Cada elemento da coleção contém um objeto estruturado da seguinte maneira:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

* *ascOrDesc*: Integer. Se passar uma das seguintes constantes do tema **Objects and collections**:

 | Constante     | Tipo    | Value | Comentário                                                  |
 | ------------- | ------- | ----- | ----------------------------------------------------------- |
 | ck ascending  | Longint | 0     | Os elementos são ordenados de forma ascendente (por padrão) |
 | ck descending | Longint | 1     | Os elementos são ordenados de forma descendente             |

 Essa sintaxe ordena apenas os valores escalares da coleção (outros tipos de elementos como objetos ou coleções são retornados sem ordenar).

Se a coleção conter elementos de tipos diferentes, são primeiro agrupados por tipo e ordenados depois. Se *attributePath* levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

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
 var $c; $c2; $3 : Collection
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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection <!-- END REF -->



<!-- REF #collection.orderByMethod().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------ |
| methodName | Text       | -> | Nome do método utilizado para especificar a ordem de clasificação        |
| extraParam | expressão  | -> | Parâmetros para o método                                                 |
| Resultados | Collection | <- | Cópia ordenada da coleção (cópia superficial)|<!-- END REF --> |

#### Descrição

A função `.orderBy()` <!-- REF #collection.orderByMethod().Summary -->The `.orderByMethod()` function<!-- END REF -->.

Esta função devolve uma *cópia superficial*, o que significa que os objetos ou coleções de ambas coleções compartem a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

Em *methodName*, passe um método de comparação que compare dois valores e devolva **true** em *$1.result* se o  primeiro valor for menor que o segundo. Pode fornecer parâmetros adicionais a *methodName* se for necessário.

* *methodName* recebe os parâmetros abaixo:
  * $1 (objeto), onde:
    * em *$1.value* (qualquer tipo): primeiro elemento a ser comparado
    * em *$1.value2* (qualquer tipo): segundo elemento a ser comparado
  * $2...$N (qualquer tipo): parâmetros adicionais
* *methodName* estabelece os parâmetros abaixo:
  * *$1.result* (boolean): **true** se *$1.value < $1.value2*, **false** do contrário

#### Exemplo 1

Se quiser ordenar a coleção de strings em ordem numérica ao invés de ordem alfabética:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod("NumAscending") // $c3=["4","33","222","1111"]
```

 O código para ***NumAscending*** é:

```4d
 $1.result:=Num($1.value)<Num($1.value2)
```

#### Exemplo 2

Se quiser ordenar a coleção de strings de acordo com seu tamanho:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod("WordLength")
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

O código para ***WordLength*** é:

```4d
 $1.result:=Length(String($1.value))>Length(String($1.value2))
```

#### Exemplo 3

Se quiser ordenar a coleção por código de caractere ou alfabeticamente:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//usar o código de caractere:
$strings2:=$strings1.orderByMethod("sortCollection";sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//usar a linguagem:
$strings2:=$string1s.orderByMethod("sortCollection";sk strict)
// resultado: ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

Aqui está o método ***sortCollection***:

```4d
var$1Object
var$2Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```


<!-- END REF -->

<!-- REF collection.pop().Desc -->
## .pop()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.pop().Syntax -->**.pop()** : any <!-- END REF -->



<!-- REF #collection.pop().Params -->
| Parâmetros | Tipo |    | Descrição                                             |
| ---------- | ---- |:--:| ----------------------------------------------------- |
| Resultados | any  | <- | Último elemento da coleção|<!-- END REF --> |

#### Descrição

A função `.pop()` <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.
> Essa função modifica a coleção original.

Quando for aplicado a uma coleção vazia, `.pop()` devolve ***undefined***.

#### Exemplo

`.pop()`, utilizado junto com [`.push()`](#push), pode ser utilizado para implementar uma funcionalidade primeira entrada, última saída de tratamento de dados empilhados:

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->



<!-- REF #collection.push().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                   |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------- |
| element    | Mixed      | -> | Elementos a adicionar à coleção                                             |
| Resultados | Collection | <- | Collection original contendo elementos inseridos|<!-- END REF --> |

#### Descrição

A função `.push()` <!-- REF #collection.push().Summary -->appends one or more *element*(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.
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

Se quiser ordenar a coleção resultante:

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

<details><summary>Histórico</summary>

| Versão | Mudanças                     |
| ------ | ---------------------------- |
| v17 R5 | Assistência de querySettings |
| v16 R6 | Adicionado                   |

</details>


<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->



<!-- REF #collection.query().Params -->
| Parâmetros    | Tipo       |    | Descrição                                                                        |
| ------------- | ---------- |:--:| -------------------------------------------------------------------------------- |
| queryString   | Text       | -> | Critérios de pesquisa                                                            |
| value         | Mixed      | -> | Valores a comparar quando usar placeholders (valores temporários)                |
| querySettings | Objeto     | -> | Opções de pesquisa: parâmetros, atributos                                        |
| Resultados    | Collection | <- | Elementos que correspondem com queryString na coleção|<!-- END REF --> |

#### Descrição

A função `.query()` <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by *queryString* and (optionally) *value* or *querySettings*. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

O parâmetro *queryString* usa a sintaxe abaixo:

```4d
valor de comparação propertyPath {valor de comparação logicalOperator propertyPath}
```

Para obter informação detalhada sobre como construir uma consulta utilizando os parâmetros *queryString*, *value* e *querySettings*, consulte a descrição da função [`dataClass.query()`](DataClassClass.md#query).

> As fórmulas não tem compatibilidade com a função `collection.query()`, nem com o parâmetro *queryString* nem como parâmetro do objeto *fórmula*.

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
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018 se hoje for 01/10/2018
```

#### Exemplo 3

Mais exemplos de pesquisas podem ser encontrados na página `dataClass.query()`.

<!-- END REF -->

<!-- REF collection.reduce().Desc -->
## .reduce()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.reduce().Syntax -->**.reduce**( *methodName* : Text ) : any <br/>**.reduce**( *methodName* : Text ; *initValue* : any { ; *...param* : expression } ) : any <!-- END REF -->



<!-- REF #collection.reduce().Params -->
| Parâmetros | Tipo                                            |    | Descrição                                                                    |
| ---------- | ----------------------------------------------- |:--:| ---------------------------------------------------------------------------- |
| methodName | Text                                            | -> | Nome da função a qual se chama para processar os elementos da coleção        |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Valor a utilizar como primeiro argumento da primeira chamada de *methodName* |
| param      | expressão                                       | -> | Parâmetros a passar para *methodName*                                        |
| Resultados | Text, Number, Object, Collection, Date, Boolean | <- | Resultado do valor do acumulador|<!-- END REF -->                  |

#### Descrição

A função `.reduce()` <!-- REF #collection.reduce().Summary -->The `.reduce()` function<!-- END REF -->.
> Essa função não modifica a coleção original.

Em *methodName*, passe o nome do método para usar para avaliar elementos de coleção, junto com os parâmetros em param (opcional). *methodName* toma cada elemento da coleção e realiza todas as operações desejadas para acumular o resultado em *$1.accumulator*, que se devolve em *$1.value*.

Pode passar o valor para inicializar o acumulador em *initValue*. Se omitido, *$1.accumulator>* começa com *Undefined*.

*methodName* recebe os parâmetros abaixo:

* em *$1.value*: valor elemento a ser processado
* in *$2: param*
* em *$N...*: *paramN...*

*methodName* estabelece os parâmetros abaixo:

* *$1.accumulator*: valor que vai ser modificado pela função e que é inicializado por *initValue*.
* *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

#### Exemplo 1

```4d
 C_COLLECTION($c)
 $c:=New collection(5;3;5;1;3;4;4;6;2;2)
 $r:=$c.reduce("Multiply";1) //returns 86400
```

Com o método ***Multiply***:

```4d
 If(Value type($1.value)=Is real)
    $1.accumulator:=$1.accumulator*$1.value
 End if
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
 $r:=$c.reduce("Flatten") //$r=[0,1,2,3,4,5,6,7]
```

Com o método ***Flatten***:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```


<!-- END REF -->

<!-- REF collection.remove().Desc -->
## .remove()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.remove().Syntax -->**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->



<!-- REF #collection.remove().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                 |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------- |
| index      | Integer    | -> | Elemento no qual que se inicia a eliminação                               |
| howMany    | Integer    | -> | Número de elementos a eliminar, ou 1 elemento se omitir                   |
| Resultados | Collection | <- | Original collection without removed element(s)|<!-- END REF --> |

#### Descrição

A função `.remove()` <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified *index* position in the collection and returns the edited collection<!-- END REF -->.
> Essa função modifica a coleção original.

In *index*, pass the position where you want the element to be removed from the collection.
> **Aviso**: Lembre que elementos coleção são numerados a partir de 0. If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*).

* Se *index* < 0, será recalculado como  *index:=index+length* (é considerado como o offset do final da coleção).
* If the calculated value < 0, *index* is set to 0.
* If the calculated value > the length of the collection, *index* is set to the length.

In *howMany*, pass the number of elements to remove from *index*. If *howMany* is not specified, then one element is removed.

If you try to remove an element from an empty collection, the method does nothing (no error is generated).

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.resize().Syntax -->**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->



<!-- REF #collection.resize().Params -->
| Parâmetros   | Tipo                                            |    | Descrição                                                   |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------------------- |
| size         | Integer                                         | -> | New size of the collection                                  |
| defaultValue | Number, Text, Object, Collection, Date, Boolean | -> | Default value to fill new elements                          |
| Resultados   | Collection                                      | <- | Colecção original redimensionada|<!-- END REF --> |

#### Descrição

A função `.resize()` <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.
> Essa função modifica a coleção original.

* If *size* < collection length, exceeding elements are removed from the collection.
* If *size* > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the *defaultValue* parameter.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.reverse().Syntax -->**.reverse( )**: Collection <!-- END REF -->



<!-- REF #collection.reverse().Params -->
| Parâmetros | Tipo       |    | Descrição                                                  |
| ---------- | ---------- |:--:| ---------------------------------------------------------- |
| Resultados | Collection | <- | Inverted copy of the collection|<!-- END REF --> |

#### Descrição

A função `.reverse()` <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

#### Exemplo

```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```


<!-- END REF -->

<!-- REF collection.shift().Desc -->
## .shift()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.shift().Syntax -->**.shift()** : any<!-- END REF -->



<!-- REF #collection.shift().Params -->
| Parâmetros | Tipo |    | Descrição                                              |
| ---------- | ---- |:--:| ------------------------------------------------------ |
| Resultados | any  | <- | First element of collection|<!-- END REF --> |

#### Descrição

A função `.shift()` <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.
> Essa função modifica a coleção original.

If the collection is empty, this method does nothing.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.slice().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| startFrom  | Integer    | -> | Início do índice (incluído)                                                         |
| end        | Integer    | -> | Final do índice (não incluído)                                                      |
| Resultados | Collection | <- | New collection containing sliced elements (shallow copy)|<!-- END REF --> |

#### Descrição

A função `.slice()` <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from *startFrom* index to *end* index (end not included). Summary --> devolve todos os elementos de uma coleção de objetos que coincidem com as condiciones de pesquisa <!-- END REF -->definidas por *queryString* e (opcionalmente) *value* ou *querySettings*. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

The returned collection contains the element specified by *startFrom* and all subsequent elements up to, but not including, the element specified by *end*. If only the *startFrom* parameter is specified, the returned collection contains all elements from *startFrom* to the last element of the original collection.

* Se *index* < 0, será recalculado como *startFrom:=startFrom+length* (é considerado como o offset do final da coleção).
* If the calculated value < 0, *startFrom* is set to 0.
* Se *end* < 0 , é recalculado como sendo *end:=end+length*.
* If *end < startFrom* (passed or calculated values), the method does nothing.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.some().Syntax -->**.some**( *methodName* : Text { ; *...param* : any } ) : Boolean<br/>**.some**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->



<!-- REF #collection.some().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                            |
| ---------- | -------- |:--:| ------------------------------------------------------------------------------------ |
| startFrom  | Integer  | -> | Índice para início do teste em                                                       |
| methodName | Text     | -> | Nome do método para chamar para o teste                                              |
| param      | Mixed    | -> | Parâmetros a passar para *methodName*                                                |
| Resultados | Booleano | <- | True if at least one element successfully passed the test|<!-- END REF --> |

#### Descrição

A função `.some()` <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test<!-- END REF --> implemented in the provided *methodName* method.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional).

*methodName* recebe os parâmetros abaixo:

* em *$1.value*: valor elemento a ser avaliado
* *$2*: param
* *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

* *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
* *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

In any case, at the point where `.some()` function encounters the first collection element returning true in *$1.result*, it stops calling *methodName* and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

* If *startFrom* >= the collection's length, **False** is returned, which means the collection is not tested.
* If *startFrom* < 0, it is considered as the offset from the end of the collection.
* Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

#### Exemplo

```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") // returns false
 $c.push(1)
 $b:=$c.some("NumberGreaterThan0") // returns true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") //$b=true
 $b:=$c.some(1;"NumberGreaterThan0") //$b=false
```

With the following *NumberGreaterThan0* method:

```4d
 $1.result:=$1.value>0
```


<!-- END REF -->

<!-- REF collection.sort().Desc -->
## .sort()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.sort().Syntax -->**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->



<!-- REF #collection.sort().Params -->
| Parâmetros | Tipo       |    | Descrição                                                         |
| ---------- | ---------- |:--:| ----------------------------------------------------------------- |
| methodName | Text       | -> | Nome do método utilizado para especificar a ordem de clasificação |
| extraParam | any        | -> | Parâmetros para o método                                          |
| Resultados | Collection | <- | Original collection sorted|<!-- END REF -->             |

#### Descrição

A função `.sort()` <!-- REF #collection.sort().Summary -->sorts the elements of the original collection<!-- END REF --> and also returns the sorted collection.
> Essa função modifica a coleção original.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Elements are sorted by default in ascending order, according to their type.

If you want to sort the collection elements in some other order or sort any type of element, you must supply in *methodName* a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. Pode fornecer parâmetros adicionais a *methodName* se for necessário.

* *methodName* recebe os parâmetros abaixo:
  * $1 (objeto), onde:
    * em *$1.value* (qualquer tipo): primeiro elemento a ser comparado
    * em *$1.value2* (qualquer tipo): segundo elemento a ser comparado
  * $2...$N (qualquer tipo): parâmetros adicionais

*methodName* estabelece os parâmetros abaixo:

* *$1.result*(boolean): **true** if*$1.value < $1.value2*, **false** otherwise

Se a coleção conter elementos de tipos diferentes, são primeiro agrupados por tipo e ordenados depois. Se *attributePath* levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1. null
2. booleans
3. strings
4. números
5. objetos
6. collections
7. datas

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
 $col3:=$col.sort("numberOrder") //alphabetical sort: [1111,222,33,4,66]
```

```4d
  //numberOrder project method
 var $1 : Object
 $1.result:=String($1.value)<String($1.value2)
```


<!-- END REF -->

<!-- REF collection.sum().Desc -->
## .sum()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->



<!-- REF #collection.sum().Params -->
| Parâmetros   | Tipo |    | Descrição                                            |
| ------------ | ---- |:--:| ---------------------------------------------------- |
| propertyPath | Text | -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultados   | Real | <- | Sum of collection values|<!-- END REF -->  |

#### Descrição

A função `.sum()` <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade objeto para levar em consideração.

`.sum()` retorna 0 se:

* a coleção estiver vazia,
* a coleção não contiver elementos numéricos,
* *propertyPath* não for encontrada na collection.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionado |

</details>


<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->



<!-- REF #collection.unshift().Params -->
| Parâmetros                 | Tipo                                            |    | Descrição                                   |
| -------------------------- | ----------------------------------------------- |:--:| ------------------------------------------- |
| value                      | Text, Number, Object, Collection, Date, Boolean | -> | Valor(es) a inserir no início da colecção   |
| Resultados                 | Real                                            | <- | Colecção contendo elemento(s) adicionado(s) |
| <!-- END REF --> |                                                 |    |                                             |

#### Descrição

A função `.unshift()` <!-- REF #collection.unshift().Summary -->inserts the given *value*(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.
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
