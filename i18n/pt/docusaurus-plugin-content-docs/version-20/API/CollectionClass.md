---
id: CollectionClass
title: Collection
---


A classe Collection gerencia variáveis de tipo [Collection](Concepts/dt_collection.md).

Uma coleção se inicializa com:

|                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New collection.Summary -->|
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New shared collection.Summary -->|


### Exemplo

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```


### Resumo


|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.at().Summary -->|
| [<!-- INCLUDE #collection.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->|
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary --> |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary --> |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->|
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->|
| [<!-- INCLUDE #collection.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->|
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->|
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->|
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->|
| [<!-- INCLUDE #collection.every().Syntax -->](#every)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->|
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->|
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->|
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->|
| [<!-- INCLUDE #collection.find().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->|
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->|
| [<!-- INCLUDE #collection.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.first().Summary -->|
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.flat().Summary -->|
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.flatMap().Summary -->|
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.includes().Summary -->|
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->|
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->|
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->|
| [<!-- INCLUDE #collection.join().Syntax -->](#join)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->|
| [<!-- INCLUDE #collection.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.last().Summary -->|
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->|
| [<!-- INCLUDE #collection.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->|
| [<!-- INCLUDE #collection.map().Syntax -->](#map)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->|
| [<!-- INCLUDE #collection.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->|
| [<!-- INCLUDE #collection.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->|
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->|
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary -->|
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->|
| [<!-- INCLUDE #collection.push().Syntax -->](#push)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->|
| [<!-- INCLUDE #collection.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->|
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->|
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduceRight().Summary -->|
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->|
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->|
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->|
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->|
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->|
| [<!-- INCLUDE #collection.some().Syntax -->](#some)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->|
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->|
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->|
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->|



## `Nova coleção`


<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->


<!-- REF #_command_.New collection.Params -->
| Parâmetro  | Tipo                                                                    |    | Descrição                                 |
| ---------- | ----------------------------------------------------------------------- |:--:| ----------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | -> | Valor(es) de collection                   |
| Resultados | Collection                                                              | <- | A nova coleção|<!-- END REF -->


|


#### Descrição

O comando `New collection` <!-- REF #_command_.New collection.Summary --> cria uma nova colecção vazia ou pré-carregada<!-- END REF --> e devolve a sua referência.

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

*   Se passar um ponteiro, é mantido "tal qual": é avaliado usando o comando `JSON Stringify`
*   Datas são armazenadas no formato "aaaa-mm-dd" ou strings com o formato "AAAA-MM-DDTHH:mm:ss.SSSZ", de acordo com a configuração atual "dates inside objects"/datas dentro de objetos. Quando converter datas 4D em texto antes de armazená-las em uma coleção, como padrão o programa considera a zona horária local. Pode modificar esse comportamento usando o seletor `Dates inside objects` do comando `SET DATABASE PARAMETER`.
*   Se passar a hora, é armazenada como um número de milissegundos (Real).

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->


<!-- REF #_command_.New shared collection.Params -->
| Parâmetro  | Tipo                                                                |    | Descrição                                               |
| ---------- | ------------------------------------------------------------------- |:--:| ------------------------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection | -> | Valores da collection compartida                        |
| Resultados | Collection                                                          | <- | A nova coleção compartilhada|<!-- END REF -->


|


#### Descrição

O comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> cria uma nova colecção partilhada vazia ou pré-carregada<!-- END REF --> e devolve a sua referência.

A adição de um elemento a esta coleção utilizando o operador de atribuição deve ser rodeada pela estrutura [`Use... End use`](Concepts/shared.md#useend-use) , caso contrário é gerado um erro (isto não é necessário ao adicionar elementos utilizando funções como [`push()`](#push) ou [`map()`](#map) porque estes ativam automaticamente uma estrutura interna *Use... End use*). A leitura de um elemento sem um *Use... End use* estrutura é, no entanto, possível.

:::info

Para saber mais sobre coleções partilhadas, veja a página [Shared objects and collections](Concepts/shared.md).

:::

Se não quiser passar parâmetros, `New shared collection` cria uma coleção vazia partilhada e retorna sua referência.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.

> Lembre que declarações`var : Collection` ou `C_COLLECTION` declaram uma variável do tipo `Collection` mas não cria qualquer coleção.

Opcionalmente pode preencher automaticamente a nova coleção partilhada passando um ou vários *valores*como parâmetros. Também pode adicionar ou modificar elementos através de atribuição de notação de objetos (ver exemplo).

Se o novo índice elemento for além do último elemento existente da coleção partilhada, a coleção é automaticamente redimensionada e todos os novos elementos intermediários são atribuídos um valor**null**.

Pode passar qualquer número de valores dos tipos compatíveis abaixo:

*   número (real, longint....). Valores numéricos são sempre armazenados como reais.
*   text
*   boolean
*   date
*   hora (armazenada como número de milissegundos - real)
*   null
*   objeto compartido
*   coleção compartilhada

:::note

Diferente de coleções padrão (não partilhadas), coleções partilhadas não são compatíveis com imagens, ponteiros e objetos ou coleção que não forem partilhadas.

:::


#### Exemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```




<!-- REF collection.at().Desc -->
## .at()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.at().Syntax -->O código para o método ***LengthLessThan*** é: <!-- END REF -->


<!-- REF #collection.at().Params -->
| Parâmetro  | Tipo    |    | Descrição                                          |
| ---------- | ------- |:--:| -------------------------------------------------- |
| index      | Integer | -> | Índice de elemento a devolver                      |
| Resultados | any     | <- | O elemento nesse índice|<!-- END REF -->


|


#### Descrição

A função `.some()` <!-- REF #collection.at().Summary -->devolve o item na posição *índice*, permitindo números inteiros positivos e negativos<!-- END REF -->.
> Essa função não modifica a coleção original.

Os números inteiros negativos contam para trás a partir do último item da colecção.

Se *end* < 0 , é recalculado como sendo *end:=end+length*.

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.average().Params -->
| Parâmetro    | Tipo            |    | Descrição                                                       |
| ------------ | --------------- |:--:| --------------------------------------------------------------- |
| propertyPath | Text            | -> | Rota de propriedade objeto a ser usado para cálculos            |
| Resultados   | Real, Undefined | <- | Média aritmética dos valores coleção|<!-- END REF -->



|



#### Descrição

A função `.average()` <!-- REF #collection.average().Summary -->retorna a média aritmética dos valores definidos na instância de coleção<!-- END REF -->.



Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade objeto para levar em consideração.

`.average()` retorna `undefined` se:

*   a coleção estiver vazia,
*   a coleção não contiver elementos numéricos,
*   *propertyPath* não for encontrada na collection.


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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.clear().Syntax -->**.clear()** : Collection<!-- END REF -->


<!-- REF #collection.clear().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                       |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------- |
| Resultados | Collection | <- | Collection original com todos os elementos removidos|<!-- END REF -->


|


#### Descrição

A função `.clear()` <!-- REF #collection.clear().Summary -->remove todos os elementos da instância de recolha e devolve uma coleção vazia<!-- END REF -->.
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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.combine().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| col2       | Collection | -> | Collection a combinar                                                               |
| index      | Integer    | -> | Posição para a qual inserir elementos para combinar em coleção (padrão = length +1) |
| Resultados | Collection | <- | Collection original contendo elementos combinados|<!-- END REF -->


|


#### Descrição

A função `.combine()` <!-- REF #collection.combine().Summary -->insere *col2* elementos no final ou no índice *especificado* posição na instância de coleção e devolve a colecção editada<!-- END REF -->. Ao contrário da função `.insert()`, `.combine()` adiciona cada valor de *col2* na coleção original, e não como um único elemento de coleção.
> Essa função modifica a coleção original.

Como padrão, elementos *col2* são adicionados ao final da collection original. Pode passar em *index* a posição onde quiser que os elmentos *col2* sejam inseridos na coleção.
> **Aviso**: Lembre que elementos coleção são numerados a partir de 0.

*   Se *index* > o tamanho da coleção, o início real de *index* será estabelecido para o tamanho da coleção.
*   Se *index* < 0, será recalculado como  *index:=index+length* (é considerado como o offset do final da coleção).
*   Se o valor calculado for negativo, *index* será estabelecido como 0.


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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->


<!-- REF #collection.concat().Params -->
| Parâmetro  | Tipo                                                           |    | Descrição                                                                                                               |
| ---------- | -------------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture | -> | Valores a concatenar. Se *value* for uma coleção, todos os elementos da coleção são adicionados para a coleção original |
| Resultados | Collection                                                     | <- | Nova coleção com valores adicionados à coleção original|<!-- END REF -->


|


#### Descrição

A função `.concat()` <!-- REF #collection.concat().Summary -->devolve uma nova colecção contendo os elementos da colecção original com todos os elementos do parâmetro *value* adicionado ao final<!-- END REF -->.
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

| Release | Mudanças                                             |
| ------- | ---------------------------------------------------- |
| 18 R3   | Nova opção *ck shared*. Novos parâmetros *groupWith* |
| v16 R6  | Adicionado                                           |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->


<!-- REF #collection.copy().Params -->
| Parâmetro    | Tipo       |    | Descrição                                                                                                        |
| ------------ | ---------- |:--:| ---------------------------------------------------------------------------------------------------------------- |
| option       | Integer    | -> | `ck resolve pointers`: resolve ponteiros antes de copiar,<br/>`ck shared`: retorna uma coleção partilihada |
| groupWithCol | Collection | -> | Coleção partilhada a ser agrupada com a coleção resultante                                                       |
| groupWithObj | Object     | -> | Objeto partilhado a ser agrupado com a coleção resultante                                                        |
| Resultados   | Collection | <- | Cópia profunda da collection original|<!-- END REF -->


|


#### Descrição

A função `.copy()` <!-- REF #collection.copy().Summary --> devolve uma cópia profunda da instância da coleção<!-- END REF -->.***Deep copy*** significa que os objectos ou colecções dentro da colecção original são duplicados e não partilham qualquer referência com a colecção devolvida.
> Essa função não modifica a coleção original.

Se passado, o parâmetro *option* pode conter uma das constantes abaixo (ou ambas):

| option                | Descrição                                                                                                                                                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Se a collection original contém valores tipo ponteiro, por padrão a cópia também contém os ponteiros. Entretanto pode resolver ponteiros quando copiar por passando os `ck resolve pointers`. Nesse caso, cada ponteiro presenta na coleção é avaliada quando copiar e seu valor de dereferencia é usado.                         |
| `ck shared`           | Como padrão, `copy()` retorna uma colleciton regular (não partilhado), mesmo se o comando for aplicado para a collection shared. Passe a constante `ck shared` para criar uma collection shared. Nesse caso, pode usar o parâmetro *groupWith* para associar a collection partilhada com outra collection ou objeto (ver abaixo). |

Os parâmetros *groupWithCol* ou *groupWithObj* permite determinar uma collection ou um objeto com o qual a coleção resultante deveria ser associada.

:::note

Os objectos de datastore, dataclass, e entity não são copiáveis. Se `.copy()` for chamado com eles, `Null` valores são devolvidos.

:::

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

#### Exemplo

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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.count().Params -->
| Parâmetro    | Tipo |    | Descrição                                                 |
| ------------ | ---- |:--:| --------------------------------------------------------- |
| propertyPath | Text | -> | Rota de propriedade objeto a ser usado para cálculos      |
| Resultados   | Real | <- | Número de elementos na coleção|<!-- END REF -->


|


#### Descrição

A função `.count()` <!-- REF #collection.count().Summary -->devolve o número de elementos não-nulos na colecção<!-- END REF -->.

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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.countValues().Params -->
| Parâmetro    | Tipo                                            |    | Descrição                                                  |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection | -> | Valor a contar                                             |
| propertyPath | Text                                            | -> | Rota de propriedade objeto a ser usado para cálculos       |
| Resultados   | Real                                            | <- | Número de ocorrências do valor |<!-- END REF -->


|


#### Descrição

A função `.countValues()` <!-- REF #collection.countValues().Summary -->devolve o número de vezes que o valor é encontrado na colecção<!-- END REF -->.

Pode passar em *value*:

*   um valor escalar (texto, número, booleano, data),
*   um objeto ou uma referência de coleção.


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

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 20      | Suporte de `ck count values` |
| v16 R6  | Adicionado                   |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*option* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.distinct().Params -->
| Parâmetro    | Tipo       |    | Descrição                                                            |
| ------------ | ---------- |:--:| -------------------------------------------------------------------- |
| propertyPath | Text       | -> | Rota do atributo cujos valores quer obter                            |
| options      | Integer    | -> | `ck diacritical`: avaliação diacríticos ("A" # "a" por exemplo)      |
| Resultados   | Collection | <- | Nova coleção com apenas valores distintos|<!-- END REF -->


|


#### Descrição

A função `.distinct()` <!-- REF #collection.distinct().Summary -->devolve uma colecção contendo apenas valores distintos (diferentes) da colecção original<!-- END REF -->.
> Essa função não modifica a coleção original.

A coleção retornada é ordenada automaticamente. Valores **Null** não são retornados.

Se a coleção conter objetos, pode passar o parâmetro *propertyPath* para indicar a propriedade objeto cujos valores diferentes você quer obter.

*pathString* (Text) : Este parâmetro contém uma fórmula feita de rotas de atributo 1 a x (e opcionalmente) ordenação separado por vírgulas A sintaxe é:

| Parâmetros        | Valor | Comentário                                                                                                                                                                                                 |
| ----------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8     | A avaliação é sensível a maiúsculas e minúsculas e diferencia os caracteres acentuados. Como padrão, uma avaliação não-diacrítica é realizada.                                                             |
| `ck count values` | 32    | Devolve a contagem de elementos para cada valor distinto. Quando esta opção é passada, `.distinct()` devolve uma colecção de objectos que contém um par de atributos `{"value":*value*; "count":*count*}`. |


#### Exemplos

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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->


<!-- REF #collection.equal().Params -->
| Parâmetro   | Tipo       |    | Descrição                                                                   |
| ----------- | ---------- |:--:| --------------------------------------------------------------------------- |
| collection2 | Collection | -> | Coleção a comparar                                                          |
| option      | Integer    | -> | `ck diacritical`: avaliação diacríticos ("A" # "a" por exemplo)             |
| Resultados  | Parâmetros | <- | True se as coleções forem idênticas, senão false|<!-- END REF -->


|


#### Descrição

A função `.equal()` <!-- REF #collection.equal().Summary -->compara a collection com a collection2 <!-- END REF -->e retorna **true** se forem idênticos (deep comparison).

:::note Notas

- The `.equal()` function only checks equality for string, boolean, number, and null type elements in the collections. Ele não verifica a igualdade dos objetos nativos.
- Elements with **null** values are not equal to Undefined elements.

:::

Como padrão, uma avaliação não-diacrítica é realizada. Se quiser que a avaliação diferencie maiúsculas de minúsculas e caracteres acentuados, passe a constante`ck diacritical` no parâmetro option.


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

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.every().Syntax -->**.every**( *methodName* : Text { ;*...param* : any } ) : Boolean<br/>**.every**( *startFrom* : Integer ; *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->


<!-- REF #collection.every().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                             |
| ---------- | ------------ |:--:| --------------------------------------------------------------------- |
| startFrom  | Integer      | -> | Índice para início do teste em                                        |
| formula    | 4D. Function | -> | Objecto fórmula                                                       |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção |

|param|Mixed|->|Parameter(s) to pass to *formula* or *methodName*| |Result|Boolean|<-|True if all elements successfully passed the test|<!-- END REF -->


#### Descrição

A função `.every()` <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided *formula* object or *methodName* method<!-- END REF -->.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. Este método recebe um `Object` como primeiro parâmetro ($1) e deve estabelecer *$1.result* para **true** para o primeiro elemento que cumprir a condição.

A chamada de retorno recebe os seguintes parâmetros:

*   *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
*   *methodName* recebe os parâmetros abaixo:
*   *$N...*: param2...paramN

Pode definir o(s) seguinte(s) parâmetro(s):

*   #DECLARE ($toEval : Object ; $param : Integer) //$1; $2 If(Value type($toEval.value)=$param) $toEval.result:=True End if
*   *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.

Em todos os casos, no ponto quanod a função `.every()` encontra o primeiro elemento de coleção retornando **false** em *$1.result*, ele para de chamar *methodName* e retorna **false**.

Como padrão, `.every()` testa a coleção completa. Opcionalmente, pode passar em *startFrom* o índice do elemento a partir do qual se inicia o teste.

*   Se *startFrom* >= tamanho da coleção, é retornado **false**, o que significa que a coleção não é testada.
*   Se *startFrom* < 0, é considerada como offset do final da coleção( *startFrom:=startFrom+length*).
*   Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).


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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathOrTargetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #collection.extract().Params -->
| Parâmetro    | Tipo       |    | Descrição                                                                                                                             |
| ------------ | ---------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       | -> | Rota de propriedade de objeto cujos valores serão extraídos para nova coleção                                                         |
| targetpath   | Text       | -> | Rota de propriedade alvo ou nome propriedade                                                                                          |
| option       | Integer    | -> | `ck keep null`: inclui propriedades null na coleção retornada (ignorado como padrão). Parâmetro ignorado se for passado *targetPath*. |
| Resultados   | Collection | <- | Nova collection contendo valores extraídos|<!-- END REF -->


|


#### Descrição

A função `.extract()` <!-- REF #collection.extract().Summary -->cria e devolve uma nova colecção contendo *propertyPath* valores extraídos da colecção original de objectos<!-- END REF -->.
> Essa função não modifica a coleção original.

Os conteúdos da coleção retornada depende do parâmetro *targetPath*:

*   Se o parâmetro *targetPath* for omitido, `.extract()` preenche a nova coleção com os valores *propertyPath* da coleção original.

    Como padrão, elementos para os quais *propertyPath* for null ou undefined são ignorados na coleção resultante. Pode passar a constante `ck keep null` no parâmetro *option* para incluir esses valores como elementos null na coleção retornada.


*   If one or more *targetPath* parameter(s) are passed (corresponding to one or more *propertyPath* parameter(s)), `.extract()` populates the new collection with the *propertyPath* properties and each element of the new collection is an object with *targetPath* properties filled with the matching *propertyPath* properties. Se mantém os valores null (o parámetro *option* se ignora) com esta sintaxe.


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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.fill().Params -->
| Parâmetro  | Tipo                                            |    | Descrição                                                           |
| ---------- | ----------------------------------------------- |:--:| ------------------------------------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean | -> | Valores preenchido                                                  |
| startFrom  | Integer                                         | -> | Início do índice (incluído)                                         |
| end        | Integer                                         | -> | Final do índice (não incluído)                                      |
| Resultados | collection                                      | <- | Coleção original com valores preenchidos|<!-- END REF -->


|


#### Descrição

A função `.insert()` <!-- REF #collection.fill().Summary -->insere *elementos* no *índice* posição na instância de coleção e devolve a coleção editada<!-- END REF -->.
> Essa função modifica a coleção original.

*   Se o parâmetro *startFrom* for omitido, *value* é estabelecido para todos os elementos coleção (*startFrom*=0).
*   Se *end* < 0 , é recalculado como sendo *end:=end+length*.
*   Se *end* < *startFrom* (valores passados ou calculados), o método não faz nada.

Em caso de inconsistências, as regras abaixos são seguidas:

*   Se *index* < 0, será recalculado como *startFrom:=startFrom+length* (é considerado como o offset do final da coleção). Se o valor calculado for negativo, *startFrom* toma o valor 0.
*   em *$2*: *param*
*   Se tanto *startFrom* quanto *end* forem passados, *value* é estabelecido para elementos coleção começando em *startFrom* ao elemento *end*.


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

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.filter().Syntax -->**.find**( *methodName* : Text { ; *...param* : any } ) : any<br/>**.find**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->


<!-- REF #collection.filter().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                                                |
| ---------- | ------------ |:--:| ---------------------------------------------------------------------------------------- |
| formula    | 4D. Function | -> | Objecto fórmula                                                                          |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção                    |
| param      | any          | -> | *methodName* recebe os parâmetros abaixo:                                                |
| Resultados | Collection   | <- | Nova coleção contendo elementos filtrados (cópia superficial)|<!-- END REF -->


|


#### Descrição

A função `.map()` <!-- REF #collection.filter().Summary -->devolve uma nova coleção contendo todos os elementos da coleção original para a qual a *fórmula * ou *methodName* resultado for **true**<!-- END REF -->. Esta função devolve uma ***cópia superficial***, o que significa que os objectos ou colecções de ambas as colecções partilham a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

Pode determinar a chamada de retorno a ser executada para filtrar os elementos de recolha utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

A chamada de retorno é chamada com o(s) parâmetro(s) passado(s) em *param* (opcional) e um objecto no primeiro parâmetro (*$1*). Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional).

A chamada de retorno recebe os seguintes parâmetros:

*   *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
*   *methodName* recebe os parâmetros abaixo:
*   *$N...*: param2...paramN

Pode definir o(s) seguinte(s) parâmetro(s):

*   *$1.result* (boolean): **true** se o valor elemento corresponder à condição de pesquisa.
*   *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.

:::note

O código para o método ***LengthLessThan*** é:

:::

#### Exemplo 1

Se quiser obter a coleção de elementos textos cujo tamanho for menor que 6:

```4d
var $col;$colNew : Collection
 $col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
 $colNew:=$col.filter("LengthLessThan";6)
  //$colNew=["hello","world","tim","miami"]
```

#### Exemplo 2

Se quiser filtrar elementos de acordo com seu tipo de valor:

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

<!-- END REF -->





<!-- REF collection.find().Desc -->
## .find()

<details><summary>Histórico</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.find().Syntax -->Com o método ***TypeLookUp***:<!-- END REF -->


<!-- REF #collection.find().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                                           |
| ---------- | ------------ |:--:| ----------------------------------------------------------------------------------- |
| startFrom  | Integer      | -> | Índice onde inicia a pesquisa                                                       |
| formula    | 4D. Function | -> | Objecto fórmula                                                                     |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção               |
| param      | any          | -> | *methodName* recebe os parâmetros abaixo:                                           |
| Resultados | any          | <- | Primeiro valor encontrado ou Undefined se não encontrado|<!-- END REF -->


|


#### Descrição

A função `.indexOf()` <!-- REF #collection.find().Summary -->pesquisa a expressão *toSearch* entre os elementos da colecção e devolve o índice da primeira ocorrência encontrada, ou -1 se não foi encontrada<!-- END REF -->.
> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em *param* (opcional). Este método recebe um `Object` como primeiro parâmetro ($1) e deve estabelecer *$1.result* para **true** para o primeiro elemento que cumprir a condição.

A chamada de retorno recebe os seguintes parâmetros:

*   *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
*   *methodName* recebe os parâmetros abaixo:
*   *$N...*: param2...paramN

Pode definir o(s) seguinte(s) parâmetro(s):

*   *$1.result* (boolean): **true** se o valor elemento corresponder à condição de pesquisa.
*   *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.


Como padrão, `.findIndex()` testa a coleção completa. Opcionalmente pode passar em *startFrom* o índice do elemento a partir do qual vai começar a pesquisa.

*   Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
*   Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
*   Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).


#### Exemplo 1

Se quiser obter o primeiro elemento com um tamanho menor que 5:

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
var $c;$c2;$c3 : Collection
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter("TypeLookUp";Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter("TypeLookUp";Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]

```
<!-- END REF -->





<!-- REF collection.findIndex().Desc -->
## .findIndex()

<details><summary>Histórico</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>


<!-- REF #collection.findIndex().Syntax -->**.findIndex**( *methodName* : Text { ; *...param* : any } ) : Integer<br/>**.findIndex**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->


<!-- REF #collection.findIndex().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                                              |
| ---------- | ------------ |:--:| -------------------------------------------------------------------------------------- |
| startFrom  | Integer      | -> | Índice onde inicia a pesquisa                                                          |
| formula    | 4D. Function | -> | Objecto fórmula                                                                        |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção                  |
| param      | any          | -> | *methodName* recebe os parâmetros abaixo:                                              |
| Resultados | Integer      | <- | Indice do primeiro valor encontrado ou -1 se não encontrado|<!-- END REF -->


|


#### Descrição

A função `.fill()` <!-- REF #collection.findIndex().Summary -->preenche a coleção com o valor especificado **, opcionalmente de *startFrom* index to *end* index, e devolve a coleção resultante<!-- END REF -->.
> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- Parâmetros a passar para *methodName*

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em *param* (opcional). Este método recebe um `Object` como primeiro parâmetro ($1) e deve estabelecer *$1.result* para **true** para o primeiro elemento que cumprir a condição.

A chamada de retorno recebe os seguintes parâmetros:

*   *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
*   *methodName* recebe os parâmetros abaixo:
*   *$N...*: param2...paramN

Pode definir o(s) seguinte(s) parâmetro(s):

*   *$1.result* (boolean): **true** se o valor elemento corresponder à condição de pesquisa.
*   *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.

Como padrão, `.every()` testa a coleção completa. Opcionalmente pode passar em *startFrom* o índice do elemento a partir do qual vai começar a pesquisa.

*   Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
*   Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
*   Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.first().Syntax -->Com o método ***Flatten***: <!-- END REF -->


<!-- REF #collection.first().Params -->
| Parâmetro  | Tipo |    | Descrição                                                |
| ---------- | ---- |:--:| -------------------------------------------------------- |
| Resultados | any  | <- | Primeiro elemento de colecção|<!-- END REF -->


|


#### Descrição

A função `.first()` <!-- REF #collection.first().Summary -->sorts the elements of the original collection<!-- END REF -->.
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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.flat().Syntax -->O código para ***NumAscending*** é:<!-- END REF -->


<!-- REF #collection.flat().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                             |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------- |
| depth      | Integer    | -> | A profundidade a que uma estrutura de colecção aninhada deve ser aplanada. O padrão=1 |
| Resultados | Collection | <- | Colecção achatada|<!-- END REF -->


|


#### Descrição

A função `.flat()` <!-- REF #collection.flat().Summary -->creates a new collection with all sub-collection elements concatenated into it recursively up to the specified *depth*<!-- END REF -->.

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.flatMap().Syntax -->**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.flatMap().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                                                 |
| ---------- | ------------ |:--:| ----------------------------------------------------------------------------------------- |
| formula    | 4D. Function | -> | Objecto fórmula                                                                           |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção                     |
| param      | any          | -> | *methodName* recebe os parâmetros abaixo:                                                 |
| Resultados | Collection   | <- | Collection of transformed values and flattened by a depth of 1|<!-- END REF -->

|

#### Descrição

A função `.flatMap()` <!-- REF #collection.flatMap().Summary -->cria uma nova colecção com base no resultado da chamada da function 4D *formula* ou do método *methodName* em cada elemento da colecção original e achatada com uma profundidade de 1<!-- END REF -->. *methodName* pode realizar qualquer teste, com ou sem os parâmetros. In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional).

Esta função é idêntica a uma chamada [`map()`](#map) seguida de uma chamada [`flat()`](#flat) de profundidade 1.
> Essa função não modifica a coleção original.


Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em *param* (opcional). Este método recebe um `Object` como primeiro parâmetro ($1) e deve estabelecer *$1.result* para **true** para o primeiro elemento que cumprir a condição.

A chamada de retorno recebe os seguintes parâmetros:

*   *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
*   *methodName* recebe os parâmetros abaixo:
*   *$N...*: param2...paramN

Pode definir o(s) seguinte(s) parâmetro(s):

*   *$1.result* (qualquer tipo): novo valor transformado para adicionar à coleção resultante
*   *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.


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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.includes().Syntax -->O código para ***TypeLookUp*** é:<!-- END REF -->


<!-- REF #collection.includes().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                   |
| ---------- | ---------- |:--:| ----------------------------------------------------------- |
| toSearch   | expressão  | -> | Expressão a pesquisar na coleção                            |
| startFrom  | Integer    | -> | Índice onde inicia a pesquisa                               |
| Resultados | Parâmetros | <- | O código para ***TypeLookUp*** é:<!-- END REF -->


|


#### Descrição

A função `.includes()` <!-- REF #collection.includes().Summary -->devolve True se a expressão *toSearch* for encontrada entre os elementos da colecção; caso contrário, devolve False<!-- END REF -->.
> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

*   um valor escalar (texto, número, booleano, data),
*   $1.result:=$1.value&gt;0
*   um objeto ou uma referência de coleção.

*toSearch* deve corresponder exatamente com o elemento a encontrar (as mesmas regras que para o operador de igualdade do tipo dados é aplicado).

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa em*startFrom*.

*   Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
*   Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*). **Aviso**: Lembre que elementos coleção são numerados a partir de 0.
*   Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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






<!-- REF collection.indexOf().Desc -->
## .indexOf()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->


<!-- REF #collection.indexOf().Params -->

| Parâmetro  | Tipo      |    | Descrição                                                                                             |
| ---------- | --------- |:--:| ----------------------------------------------------------------------------------------------------- |
| toSearch   | expressão | -> | Expressão a pesquisar na coleção                                                                      |
| startFrom  | Integer   | -> | Índice onde inicia a pesquisa                                                                         |
| Resultados | Integer   | <- | Índice da primeira ocorrência de toSearch na coleção, -1 se não encontrado|<!-- END REF -->


|


#### Descrição

A função `.find()` <!-- REF #collection.indexOf().Summary -->The `.findIndex()` function<!-- END REF -->.
> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

*   um valor escalar (texto, número, booleano, data),
*   $1.result:=$1.value&gt;0
*   um objeto ou uma referência de coleção.

*toSearch* deve corresponder exatamente com o elemento a encontrar (as mesmas regras que para o operador de igualdade do tipo dados é aplicado).

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa em*startFrom*.

*   Se *startFrom* >= tamanho da coleção, é retornado false, o que significa que a coleção não é pesquisada.
*   Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da esquerda para direita.
*   Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).

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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.indices().Params -->
| Parâmetro   | Tipo       |    | Descrição                                                                           |
| ----------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| queryString | Text       | -> | Critérios de pesquisa                                                               |
| value       | any        | -> | Valores a comparar quando usar placeholders (valores temporários)                   |
| Resultados  | Collection | <- | Índices elemento correspondendo a queryString na coleção|<!-- END REF -->


|


#### Descrição

A função `.indices()` funciona exactamente da mesma forma que a função [`.query()`](#query) mas <!-- REF #collection.indices().Summary -->devolve índices, na coleção original, de elementos da coleção de objectos que correspondem à *queryString* condições de pesquisa<!-- END REF -->e não os elementos em si. Indices são retornados em ordem ascendente.
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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.insert().Syntax -->**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->


<!-- REF #collection.insert().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                   |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------- |
| index      | Integer    | -> | Onde inserir os elementos                                                   |
| element    | any        | -> | Elemento a inserir na coleção                                               |
| Resultados | Collection | <- | Collection original contendo elementos inseridos|<!-- END REF -->


|


#### Descrição

A função `.resize()` <!-- REF #collection.insert().Summary --> define o comprimento da coleção para o novo tamanho especificado e devolve a coleção redimensionada<!-- END REF -->.
> Essa função modifica a coleção original.

In *index*, passe a posição onde quiser que o elemento seja inserido na coleção.
> **Aviso**: Lembre que elementos coleção são numerados a partir de 0.

*   Se *index* > o tamanho da coleção, o índice de início é estabelecido como o tamanho da coleção.
*   Se *index* < 0, será recalculado como  *index:=index+length* (é considerado como o offset do final da coleção).
*   Se o valor calculado for negativo, index será estabelecido como 0.

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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->


<!-- REF #collection.join().Params -->
| Parâmetro  | Tipo    |    | Descrição                                                                                              |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------------------------ |
| delimiter  | Text    | -> | Separador a usar entre os elementos                                                                    |
| option     | Integer | -> | `ck ignore null or empty`: ignora strings vazias ou nulls no resultado                                 |
| Resultados | Text    | <- | String contendo todos os elementos da coleção, separados por um delimitador|<!-- END REF -->


|


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




<!-- REF collection.last().Desc -->
## .last()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.last().Syntax -->O código para ***WordLength*** é: <!-- END REF -->


<!-- REF #collection.last().Params -->
| Parâmetro  | Tipo |    | Descrição                                             |
| ---------- | ---- |:--:| ----------------------------------------------------- |
| Resultados | any  | <- | Último elemento da coleção|<!-- END REF -->


|


#### Descrição

A função `.last()` <!-- REF #collection.last().Summary -->devolve o último elemento da colecção<!-- END REF -->.
> Essa função não modifica a coleção original.

Nome da função a chamar para filtrar a coleção

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





<!-- REF collection.lastIndexOf().Desc -->
## .lastIndexOf()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->


<!-- REF #collection.lastIndexOf().Params -->
| Parâmetro  | Tipo      |    | Descrição                                                                                           |
| ---------- | --------- |:--:| --------------------------------------------------------------------------------------------------- |
| toSearch   | expressão | -> | O elemento que é pesquisado dentro da coleção                                                       |
| startFrom  | Integer   | -> | Índice onde inicia a pesquisa                                                                       |
| Resultados | Integer   | <- | Índice da última ocorrência de toSearch na coleção, -1 se não encontrado|<!-- END REF -->


|


#### Descrição

A função `.lastIndexOf()` <!-- REF #collection.lastIndexOf().Summary -->pesquisa a expressão *toSearch* entre os elementos da coleção e devolve o índice da última ocorrência<!-- END REF -->ou -1 se não foi encontrado.
> Essa função não modifica a coleção original.

Em *toSearch*, passe a expressão para encontrar na coleção. Pode passar:

*   um valor escalar (texto, número, booleano, data),
*   $1.result:=$1.value&gt;0
*   um objeto ou uma referência de coleção.

*toSearch* deve corresponder exactamente ao elemento a procurar (são aplicadas as mesmas regras que para o operador de igualdade).

Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa reversa em *startFrom*.

*   Se *startFrom* >= o tamanho da coleção menos um (coll.length-1), a coleção inteira é pesquisada (padrão).
*   Se *index* < 0, será recalculado como *startFrom:=startFrom+length* (é considerado como o offset do final da coleção). Se o valor calculado for negativo, -1 é retornado (a coleção não é pesquisada). **Nota**: Mesmo se *startFrom* for negativo, a coleção ainda é pesquisada da direita para esquerda.
*   Se *startFrom* = 0, é retornado -1, o que significa que a coleção não é pesquisada.

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R5  | Adicionado |

</details>

<!-- REF #collection.length.Syntax -->**.length** : Integer<!-- END REF -->



#### Descrição

A propriedade `.length` <!-- REF #collection.length.Summary -->devolve o número de elementos da colecção<!-- END REF -->.

A propriedade `.length` é iniciada quando a coleção for criada. Adicionar ou remover elementos atualiza o tamanho, se necessário. Essa propriedade é **read-only** /apenas leitura (não pode usá-la para estabelecer o tamanho da coleção).

#### Exemplo


```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018 se hoje for 01/10/2018
```

<!-- END REF -->




<!-- REF collection.map().Desc -->
## .map()

<details><summary>Histórico</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.map().Syntax -->Aqui está o método ***sortCollection***: <!-- END REF -->


<!-- REF #collection.map().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                             |
| ---------- | ------------ |:--:| --------------------------------------------------------------------- |
| formula    | 4D. Function | -> | Objecto fórmula                                                       |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção |
| param      | any          | -> | *methodName* recebe os parâmetros abaixo:                             |
| Resultados | Collection   | <- | Collection de valores transformados|<!-- END REF -->


|


#### Descrição

A função `.some()` <!-- REF #collection.map().Summary -->cria uma nova colecção com base no resultado da chamada da fórmula ** 4D function ou *methodName* method em cada elemento da colecção original<!-- END REF -->. *methodName* pode realizar qualquer teste, com ou sem os parâmetros. In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). `.map()` always returns a collection with the same size as the original collection, except if *$1.stop* was used (see below).
> Essa função não modifica a coleção original.


Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). A chamada de retorno é chamada com o(s) parâmetro(s) aprovado(s) em *param* (opcional). Este método recebe um `Object` como primeiro parâmetro ($1) e deve estabelecer *$1.result* para **true** para o primeiro elemento que cumprir a condição.

A chamada de retorno recebe os seguintes parâmetros:

*   *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
*   *methodName* recebe os parâmetros abaixo:
*   *$N...*: param2...paramN

Pode definir o(s) seguinte(s) parâmetro(s):

*   *$1.result* (qualquer tipo): novo valor transformado para adicionar à coleção resultante
*   *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.


#### Exemplo


```4d
var $1 : Object
 var $2 : Real
 $1.result:=Round(($1.value/$2)*100;2)
```

<!-- END REF -->





<!-- REF collection.max().Desc -->
## .max()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->


<!-- REF #collection.max().Params -->
| Parâmetro    | Tipo                                            |    | Descrição                                             |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------------- |
| propertyPath | Text                                            | -> | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date | <- | Valor máximo na coleção|<!-- END REF -->


|


#### Descrição

A função `.max()` <!-- REF #collection.max().Summary -->devolve o elemento com o maior valor na colecção<!-- END REF --> (o último elemento da colecção como seria classificado em ordem ascendente utilizando a função [.sort()``](#sort)).
> Essa função não modifica a coleção original.

shared collection(*) > Diferente de coleções padrão (não partilhadas), coleções partilhadas não são compatíveis com imagens, ponteiros, objetos ou coleções que não são compartilhadas.


Se a coleção conter objetos, pode passar o parâmetro *propertyPath* para indicar a propriedade objeto cujos valores máximos você quer obter.

Se a coleção estiver vazia, `.max()` devolve *Undefined*.

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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->


<!-- REF #collection.min().Params -->
| Parâmetro    | Tipo                                            |    | Descrição                                             |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------------- |
| propertyPath | Text                                            | -> | Rota de propriedade objeto a ser usado para avaliação |
| Resultados   | Boolean, Text, Number, Collection, Object, Date | <- | Valor mínimo na coleção|<!-- END REF -->


|


#### Descrição

A função `.min()` <!-- REF #collection.min().Summary -->devolve o elemento com o menor valor da colecção<!-- END REF --> (o primeiro elemento da colecção como seria classificado em ordem ascendente utilizando a função [.sort()``](#sort)).
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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.orderBy().Syntax -->**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->


<!-- REF #collection.orderBy().Params -->
| Parâmetro   | Tipo       |    | Descrição                                                                |
| ----------- | ---------- |:--:| ------------------------------------------------------------------------ |
| pathStrings | Text       | -> | Caminho(s) de propriedade(s) no(s) qual(is) encomendar a coleção         |
| pathObjects | Collection | -> | Coleção de objetos criterio                                              |
| ascOrDesc   | Integer    | -> | `ck ascending` ou `ck descending` (valores escalares)                    |
| Resultados  | Collection | <- | Cópia ordenada da coleção (cópia superficial)|<!-- END REF -->


|


#### Descrição

A função `.orderBy()` <!-- REF #collection.orderBy().Summary -->devolve uma nova colecção contendo todos os elementos da colecção na ordem especificada<!-- END REF -->.

Esta função devolve uma *cópia superficial*, o que significa que os objetos ou coleções de ambas coleções compartem a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

If you pass no parameter, the function orders scalar values in the collection in ascending order (other element types such as objects or collections are returned with an internal order). Pode modificar esta ordem automático passando as constantes `ck ascending` ou `ck descending` no parâmetro *ascOrDesc* (ver abaixo).

Também pode passar um parâmetro de critérios para definir como devem ordenar-se os elementos da coleção. Três sintaxes são compatíveis com esse parâmetro:

*   *pathStrings* : Text (fórmula). **Sintaxe**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (ordem predefinida: asc). *pathStrings* contém uma fórmula composta de 1 a x rotas de propriedades e (opcionalmente) ordens de classificação, separados por vírgulas. A ordem na qual as propriedades são passadas determina a prioridade de ordenação dos elementos da coleção Como padrão as propriedades são ordenadas de forma ascendente. Como padrão as propriedades são ordenadas de forma ascendente. Pode definir a ordem de clasificação de uma propriedade na string de critérios, separado da rota da propriedade por um só espaço: passe "asc" para ordenar em ordem ascendente ou "desc" em ordem descendente.

*   *pathObjects* : Collection. Pode adicionar tantos objetos na coleção *pathObjects* como seja necessário. Como padrão, as propriedades se classificam em ordem ascendente ("descending" é false). Cada elemento da coleção contém um objeto estruturado da seguinte maneira:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

*   *ascOrDesc*: Integer. Se passar uma das seguintes constantes do tema **Objects and collections**:

    | Parâmetros    | Tipo    | Valor | Comentário                                                  |
    | ------------- | ------- | ----- | ----------------------------------------------------------- |
    | ck ascending  | Longint | 0     | Os elementos são ordenados de forma ascendente (por padrão) |
    | ck descending | Longint | 1     | Os elementos são ordenados de forma descendente             |

    Essa sintaxe ordena apenas os valores escalares da coleção (outros tipos de elementos como objetos ou coleções são retornados sem ordenar).

Se a coleção conter elementos de tipos diferentes, são primeiro agrupados por tipo e ordenados depois. Se *attributePath* levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1.  null
2.  booleans
3.  strings
4.  números
5.  objetos
6.  collections
7.  datas

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

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection<!-- END REF -->



<!-- REF #collection.orderByMethod().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                                |
| ---------- | ------------ |:--:| ------------------------------------------------------------------------ |
| formula    | 4D. Function | -> | Objecto fórmula                                                          |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção    |
| extraParam | any          | -> | Parâmetro(s) a transmitir                                                |
| Resultados | Collection   | <- | Cópia ordenada da coleção (cópia superficial)|<!-- END REF -->


|


#### Descrição

A função `.orderBy()` <!-- REF #collection.orderByMethod().Summary -->devolve uma nova coleção contendo todos os elementos da coleção na ordem definida através da função 4D *formula* ou método *methodName*<!-- END REF -->.

Esta função devolve uma *cópia superficial*, o que significa que os objetos ou coleções de ambas coleções compartem a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.


Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;

- *methodName* estabelece os parâmetros abaixo:

Em *methodName*, passe um método de comparação que compare dois valores e devolva **true** em *$1.result* se o  primeiro valor for menor que o segundo. Pode fornecer parâmetros adicionais a *methodName* se for necessário.

A chamada de retorno recebe os seguintes parâmetros:

- $1 (objeto), onde:
    - em *$1.value* (qualquer tipo): primeiro elemento a ser comparado
    - em *$1.value2* (qualquer tipo): segundo elemento a ser comparado
    - $2...$N (qualquer tipo): parâmetros adicionais

Se utilizou um método, este deve definir o seguinte parâmetro:

- *$1.result* (boolean): **true** se *$1.value < $1.value2*, **false** do contrário

#### Exemplo 1

Se quiser ordenar a coleção de strings em ordem numérica ao invés de ordem alfabética:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod("NumAscending") // $c3=["4","33","222","1111"]
```

#### Exemplo 2

Se quiser ordenar a coleção de strings de acordo com seu tamanho:

```4d
 $1.result:=Length(String($1.value))>Length(String($1.value2))
```

#### Exemplo 3

Se quiser ordenar a coleção por código de caractere ou alfabeticamente:

```4d
var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod("WordLength")
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

Com o método ***Multiply***:

```4d
var$1Object
var$2Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```

<!-- END REF -->





<!-- REF collection.pop().Desc -->
## .pop()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>


<!-- REF #collection.pop().Syntax -->**.pop()** : any <!-- END REF -->


<!-- REF #collection.pop().Params -->
| Parâmetro  | Tipo |    | Descrição                                             |
| ---------- | ---- |:--:| ----------------------------------------------------- |
| Resultados | any  | <- | Último elemento da coleção|<!-- END REF -->


|


#### Descrição

A função `.pop()` <!-- REF #collection.pop().Summary -->remove o primeiro elemento da coleção e devolve-o como resultado da função<!-- END REF -->.
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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->


<!-- REF #collection.push().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                   |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------- |
| element    | Mixed      | -> | Elementos a adicionar à coleção                                             |
| Resultados | Collection | <- | Collection original contendo elementos inseridos|<!-- END REF -->


|


#### Descrição

A função `.find()` <!-- REF #collection.push().Summary -->The `.indexOf()` function<!-- END REF -->.
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

<details><summary>Histórico</summary>

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 17 R5   | Assistência de querySettings |
| v16 R6  | Adicionado                   |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->


<!-- REF #collection.query().Params -->
| Parâmetro     | Tipo       |    | Descrição                                                                        |
| ------------- | ---------- |:--:| -------------------------------------------------------------------------------- |
| queryString   | Text       | -> | Critérios de pesquisa                                                            |
| value         | Mixed      | -> | Valores a comparar quando usar placeholders (valores temporários)                |
| querySettings | Object     | -> | Opções de pesquisa: parâmetros, atributos                                        |
| Resultados    | Collection | <- | Elementos que correspondem com queryString na coleção|<!-- END REF -->


|


#### Descrição

A função `.query()` <!-- REF #collection.query().Summary -->devolve todos os elementos de uma coleção de objectos que correspondem às condições de pesquisa <!-- END REF -->defined by *queryString* and (optionally) *value* or *querySettings*. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
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
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] se hoje é 01/10/2018
```


#### Exemplo 3

Mais exemplos de pesquisas podem ser encontrados na página `dataClass.query()`.

<!-- END REF -->





<!-- REF collection.reduce().Desc -->
## .reduce()

<details><summary>Histórico</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.reduce().Syntax -->**.reduce**( *methodName* : Text ) : any <br/>**.reduce**( *methodName* : Text ; *initValue* : any { ; *...param* : expression } ) : any <!-- END REF -->


<!-- REF #collection.reduce().Params -->
| Parâmetro  | Tipo                                            |    | Descrição                                                                    |
| ---------- | ----------------------------------------------- |:--:| ---------------------------------------------------------------------------- |
| formula    | 4D. Function                                    | -> | Objecto fórmula                                                              |
| methodName | Text                                            | -> | Nome da função a qual se chama para processar os elementos da coleção        |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Valor a utilizar como primeiro argumento da primeira chamada de *methodName* |
| param      | expressão                                       | -> | Parâmetro(s) a transmitir                                                    |
| Resultados | Text, Number, Object, Collection, Date, Boolean | <- | Resultado do valor do acumulador|<!-- END REF -->


|


#### Descrição


A função `.reduce()` <!-- REF #collection.reduce().Summary -->The `.reduce()` function<!-- END REF -->.
> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

var $1 : Object var $2 : Text $1.result:=$1.value.name=$2

Pode passar o valor para inicializar o acumulador em *initValue*. Se omitido, *$1.accumulator>* começa com *Undefined*.

A chamada de retorno recebe os seguintes parâmetros:

*   With the following *NumberGreaterThan0* method:
*   em *$2: param*
*   *methodName* estabelece os parâmetros abaixo:

A chamada de retorno recebe os seguintes parâmetros:

*   $1.result:=$1.value&gt;0
*   *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.


#### Exemplo 1


```4d
C_COLLECTION($c)
 $c:=New collection(5;3;5;1;3;4;4;6;2;2)
 $r:=$c.reduce("Multiply";1) //returns 86400
```


#### Exemplo 2

Este exemplo permite reduzir vários elementos da coleção a um só:

```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

*methodName* estabelece os parâmetros abaixo:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->





<!-- REF collection.reduceRight().Desc -->
## .reduceRight()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20      | Adicionado |

</details>

<!-- REF #collection.reduceRight().Syntax -->O código para o método ***FindCity*** é: <!-- END REF -->


<!-- REF #collection.reduceRight().Params -->
| Parâmetro  | Tipo                                            |    | Descrição                                                                    |
| ---------- | ----------------------------------------------- |:--:| ---------------------------------------------------------------------------- |
| formula    | 4D. Function                                    | -> | Objecto fórmula                                                              |
| methodName | Text                                            | -> | Nome da função a qual se chama para processar os elementos da coleção        |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Valor a utilizar como primeiro argumento da primeira chamada de *methodName* |
| param      | expressão                                       | -> | Parâmetro(s) a transmitir                                                    |
| Resultados | Text, Number, Object, Collection, Date, Boolean | <- | Resultado do valor do acumulador|<!-- END REF -->


|


#### Descrição


A função `.reduceRight()` <!-- REF #collection.reduceRight().Summary -->aplica a *formula * ou *methodName* callback a um acumulador e a cada elemento da colecção (da direita para a esquerda) para o reduzir a um único valor<!-- END REF -->.
> Essa função não modifica a coleção original.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

var $1 : Object var $2 : Text $1.result:=$1.value.name=$2

Pode passar o valor para inicializar o acumulador em *initValue*. Se omitido, *$1.accumulator>* começa com *Undefined*.

A chamada de retorno recebe os seguintes parâmetros:

*   With the following *NumberGreaterThan0* method:
*   em *$2: param*
*   *methodName* estabelece os parâmetros abaixo:

A chamada de retorno recebe os seguintes parâmetros:

*   $1.result:=$1.value&gt;0
*   *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.


#### Exemplo 1


```4d
//numberOrder project method
 var $1 : Object
 $1.result:=String($1.value)<String($1.value2)


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

*methodName* estabelece os parâmetros abaixo:

```4d
    If(Value type($1.value)=Is real)
    $1.accumulator:=$1.accumulator*$1.value
 End if
```

<!-- END REF -->



<!-- REF collection.remove().Desc -->
## .remove()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.remove().Syntax -->**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->


<!-- REF #collection.remove().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                 |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------- |
| index      | Integer    | -> | Elemento no qual que se inicia a eliminação                               |
| howMany    | Integer    | -> | Número de elementos a eliminar, ou 1 elemento se omitir                   |
| Resultados | Collection | <- | Modified collection without removed element(s)|<!-- END REF -->


|


#### Descrição

A função `.remove()` <!-- REF #collection.remove().Summary -->insere elementos no *índice* posição na instância de coleção e devolve a coleção editada<!-- END REF -->.
> Essa função modifica a coleção original.

Em *index*, passe a posição onde deseja que o elemento seja retirado da colecção.
> **Aviso**: Lembre que elementos coleção são numerados a partir de 0. Se *startFrom* < 0, é considerada como offset do final da coleção (*startFrom:=startFrom+length*).

*   Se *index* < 0, será recalculado como  *index:=index+length* (é considerado como o offset do final da coleção).
*   Se o valor calculado < 0, *index* será estabelecido como 0.
*   Se o valor calculado > o comprimento da colecção, *índice* é definido para o comprimento.

Em *howMany*, passe o número de elementos a remover do índice **. Se *howMany* não for especificado, então um elemento é removido.



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


<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>



<!-- REF #collection.resize().Syntax -->**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.resize().Params -->
| Parâmetro    | Tipo                                            |    | Descrição                                                   |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------------------- |
| size         | Integer                                         | -> | Nova dimensão da colecção                                   |
| defaultValue | Number, Text, Object, Collection, Date, Boolean | -> | Valor padrão para preencher novos elementos                 |
| Resultados   | Collection                                      | <- | Colecção original redimensionada|<!-- END REF -->


|


#### Descrição

A função `.resize()` <!-- REF #collection.resize().Summary -->define o comprimento da coleção para o novo tamanho especificado e devolve a coleção redimensionada<!-- END REF -->.
> Essa função modifica a coleção original.

*   Se *tamanho* < comprimento da colecção, os elementos excedentes são removidos da colecção.
*   Se *tamanho* > comprimento da colecção, o comprimento da colecção é aumentado à medida.

Por padrão, são preenchidos novos elementos **null** valores. Pode especificar o valor para preencher os elementos adicionados usando o parâmetro *defaultValue* .

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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.reverse().Syntax -->**.reverse( )**: Collection <!-- END REF -->


<!-- REF #collection.reverse().Params -->
| Parâmetro  | Tipo       |    | Descrição                                              |
| ---------- | ---------- |:--:| ------------------------------------------------------ |
| Resultados | Collection | <- | Cópia invertida da colecção|<!-- END REF -->


|


#### Descrição

A função `.reverse()` <!-- REF #collection.reverse().Summary -->devolve uma cópia profunda da colecção com todos os seus elementos em ordem inversa<!-- END REF -->. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

#### Exemplo


```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

<!-- END REF -->





<!-- REF collection.shift().Desc -->
## .shift()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.shift().Syntax -->**.shift()** : any<!-- END REF -->


<!-- REF #collection.shift().Params -->
| Parâmetro  | Tipo |    | Descrição                                                |
| ---------- | ---- |:--:| -------------------------------------------------------- |
| Resultados | any  | <- | Primeiro elemento de colecção|<!-- END REF -->


|


#### Descrição

A função `.shift()` <!-- REF #collection.shift().Summary -->remove o primeiro elemento da colecção e devolve-o como resultado da função<!-- END REF -->.
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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.slice().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                                                |
| ---------- | ---------- |:--:| ---------------------------------------------------------------------------------------- |
| startFrom  | Integer    | -> | Início do índice (incluído)                                                              |
| end        | Integer    | -> | Final do índice (não incluído)                                                           |
| Resultados | Collection | <- | Nova colecção contendo elementos cortados (cópia superficial)|<!-- END REF -->


|


#### Descrição

A função `.slice()` <!-- REF #collection.slice().Summary -->devolve uma parte de uma colecção para uma nova colecção<!-- END REF -->, selected from *startFrom* index to *end* index (end not included). Esta função devolve uma *cópia superficial* da colecção. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

A colecção devolvida contém o elemento especificado por *startFrom* e todos os elementos subsequentes até, mas não incluindo, o elemento especificado por *end*. Se apenas for especificado o parâmetro *startFrom* , a colecção devolvida contém todos os elementos desde *startFrom* até ao último elemento da colecção original.

*   Se *index* < 0, será recalculado como *startFrom:=startFrom+length* (é considerado como o offset do final da coleção).
*   Se o valor calculado < 0, *index* será estabelecido como 0.
*   em *$2*: *param*
*   Se *end < startFrom* (valores passados ou calculados), o método não faz nada.

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

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.some().Syntax -->**.some**( *methodName* : Text { ; *...param* : any } ) : Boolean<br/>**.some**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->


<!-- REF #collection.some().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                                          |
| ---------- | ------------ |:--:| ---------------------------------------------------------------------------------- |
| startFrom  | Integer      | -> | Índice para início do teste em                                                     |
| formula    | 4D. Function | -> | Objecto fórmula                                                                    |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção              |
| param      | Mixed        | -> | Parâmetro(s) a transmitir                                                          |
| Resultados | Parâmetros   | <- | True se todos os elementos passarem o teste com sucesso|<!-- END REF -->


|


#### Descrição

A função `.push()` <!-- REF #collection.some().Summary -->anexa um ou mais  *elementos*(s) ao final da instância de recolha e devolve a coleção editada<!-- END REF -->.

Designa-se a chamada de retorno a ser executada para avaliar os elementos da colecção utilizando qualquer um dos dois:

- *fórmula* (sintaxe recomendada), um [Objecto de fórmula](FunctionClass.md) que pode encapsular qualquer expressão executável, incluindo funções e métodos de projecto;
- *methodName* estabelece os parâmetros abaixo:

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. Este método recebe um `Object` como primeiro parâmetro ($1) e deve estabelecer *$1.result* para **true** para o primeiro elemento que cumprir a condição.


A chamada de retorno recebe os seguintes parâmetros:

*   With the following *NumberGreaterThan0* method:
*   em *$2: param*
*   *methodName* estabelece os parâmetros abaixo:

Pode definir o(s) seguinte(s) parâmetro(s):

*   *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (boolean, opcional): **true** para parar o callback do método. O valor retornado é o último calculado.

In any case, at the point where `.some()` function encounters the first collection element returning true in *$1.result*, it stops calling *methodName* and returns **true**.

Como padrão, `.some()` testa toda a colecção. Opcionalmente pode passar o índice da coleção para a qual iniciar a pesquisa em*startFrom*.

*   Se *startFrom* >= tamanho da coleção, é retornado **false**, o que significa que a coleção não é testada.
*   Se *startFrom* < 0, é considerado como a compensação a partir do final da recolha.
*   Se *startFrom* = 0, a coleção inteira é pesquisada (padrão).


#### Exemplo

Quer saber se pelo menos um valor de colecção é >0.

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



<!-- END REF -->





<!-- REF collection.sort().Desc -->
## .sort()

<details><summary>Histórico</summary>

| Release | Mudanças                   |
| ------- | -------------------------- |
| 19 R6   | Compatibilidade de fórmula |
| v16 R6  | Adicionado                 |

</details>

<!-- REF #collection.sort().Syntax -->**.sort**() : Collection<br/>**.sort**( *formula* : 4D.Function { ; *...extraParam* : any } ) : Collection<br/>**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.sort().Params -->
| Parâmetro  | Tipo         |    | Descrição                                                             |
| ---------- | ------------ |:--:| --------------------------------------------------------------------- |
| formula    | 4D. Function | -> | Objecto fórmula                                                       |
| methodName | Text         | -> | Nome da função a qual se chama para processar os elementos da coleção |
| extraParam | any          | -> | Parâmetros para o método                                              |
| Resultados | Collection   | <- | Colecção original ordenada|<!-- END REF -->


|


#### Descrição

A função `.shift()` <!-- REF #collection.sort().Summary -->remove o primeiro elemento da colecção e devolve-o como resultado da função<!-- END REF --> .
> Essa função modifica a coleção original.

Se `.sort()` for chamado sem parâmetros, apenas valores escalares (número, texto, data, booleanos) são ordenados. Os elementos são classificados por defeito em ordem ascendente, de acordo com o seu tipo. If the collection contains scalar values of different types, they are first grouped by type and sorted afterwards. Se *attributePath* levar a uma propriedade de objeto que conter valores de diferentes tipos, primeiro se agrupam por tipo e se ordenam depois.

1.  null
2.  booleans
3.  strings
4.  números
5.  objetos
6.  collections
7.  datas


Se pretender ordenar os elementos da coleção por outra ordem ou ordenar qualquer tipo de elemento, deve fornecer em *formula* ([object Formula](FunctionClass.md)) ou *methodName* (Text) uma chamada de retorno que defina a ordem de ordenação. O valor de retorno deve ser um booleano que indica a ordem relativa dos dois elementos: **True** se *$1.value* for menor que *$1.value2*, **False** se *$1.value* for maior que *$1.value2*. Pode fornecer parâmetros adicionais a *methodName* se for necessário.

A chamada de retorno recebe os seguintes parâmetros:

- $1 (objeto), onde:
    - em *$1.value* (qualquer tipo): primeiro elemento a ser comparado
    - em *$1.value2* (qualquer tipo): segundo elemento a ser comparado
- $2...$N (qualquer tipo): parâmetros adicionais

Se utilizou um método, deve definir o seguinte parâmetro:

- *$1.result* (boolean): **True** if *$1.value < $1.value2*, **False** do contrário.


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
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//using the character code:
$strings2:=$strings1.orderByMethod("sortCollection";sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//using the language:
$strings2:=$strings1.orderByMethod("sortCollection";sk strict)
// result : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

<!-- END REF -->




<!-- REF collection.sum().Desc -->
## .sum()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.sum().Params -->
| Parâmetro    | Tipo |    | Descrição                                               |
| ------------ | ---- |:--:| ------------------------------------------------------- |
| propertyPath | Text | -> | Rota de propriedade objeto a ser usado para cálculos    |
| Resultados   | Real | <- | Soma dos valores da colecção|<!-- END REF -->


|


#### Descrição

A função `.sum()` <!-- REF #collection.sum().Summary -->devolve a soma para todos os valores na instância da coleção<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade objeto para levar em consideração.

`.sum()` retorna 0 se:

*   a coleção estiver vazia,
*   a coleção não contiver elementos numéricos,
*   *propertyPath* não for encontrada na collection.

#### Exemplo 1


```4d
 var $col; $col2; $col3 : Collection
 $col:=New collection(33;4;66;1111;222)
 $col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
 $col3:=$col.sort("numberOrder") //alphabetical sort: [1111,222,33,4,66]
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

| Release | Mudanças   |
| ------- | ---------- |
| v16 R6  | Adicionado |

</details>

<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->


<!-- REF #collection.unshift().Params -->
| Parâmetro                  | Tipo                                   |    | Descrição                                   |
| -------------------------- | -------------------------------------- |:--:| ------------------------------------------- |
| value                      | Text, Number, Object, Collection, Date | -> | Valor(es) a inserir no início da colecção   |
| Resultados                 | Real                                   | <- | Colecção contendo elemento(s) adicionado(s) |
|<!-- END REF -->


|                                        |    |                                             |


#### Descrição

A função `.unshift()` <!-- REF #collection.unshift().Summary -->insere o  *valor* dado no início da coleção <!-- END REF -->e devolve a coleção modificada.
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
