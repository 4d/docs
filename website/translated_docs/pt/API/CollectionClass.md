---
id: CollectionClass
title: Collection
---


A classe Collection gerencia variáveis de tipo [Collection](Concepts/dt_collection.md).

Uma coleção se inicializa com:

|                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New collection.Summary -->|
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New shared collection.Summary -->|


### Exemplo

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```


### Resumo


|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->|
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary --> |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary --> |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->|
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->|
| [<!-- INCLUDE #collection.count().Syntax -->](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->|
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->|
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->|
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->|
| [<!-- INCLUDE #collection.every().Syntax -->](#every)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->|
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->|
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->|
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->|
| [<!-- INCLUDE #collection.find().Syntax -->](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->|
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->|
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->|
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->|
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->|
| [<!-- INCLUDE #collection.join().Syntax -->](#join)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->|
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->|
| [<!-- INCLUDE #collection.length.Syntax -->](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->|
| [<!-- INCLUDE #collection.map().Syntax -->](#map)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->|
| [<!-- INCLUDE #collection.max().Syntax -->](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->|
| [<!-- INCLUDE #collection.min().Syntax -->](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->|
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->|
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary -->|
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->|
| [<!-- INCLUDE #collection.push().Syntax -->](#push)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->|
| [<!-- INCLUDE #collection.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->|
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->|
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->|
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->|
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->|
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->|
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->|
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->|
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->|
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->|
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->|



## `Nova coleção`


<!-- REF #_command_.New collection.Syntax -->
**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->
| Parâmetros | Tipo                                                                    |    | Descrição               |
| ---------- | ----------------------------------------------------------------------- |:--:| ----------------------- |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | -> | Valor(es) de collection |
| Resultado  | Collection                                                              | <- | Nova coleção            |
<!-- END REF -->


#### Descrição

O comando `Nova coleção` <!-- REF #_command_.New collection.Summary --> cria uma nova coleção vazia ou pré-completada<!-- END REF --> e devolve sua referência.

Se não passar nenhum parâmetro, `New collection` cria uma coleção vazia e retorna sua referência.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.
> Lembre que as declarações `var : Collection` ou `C_COLLECTION` declaram uma variável do tipo `Collection` mas não criam novas coleções.

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
 $coll[9]:="z" //add a 10th element with value "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```




## `Nova coleção partilhada`

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v16 R6 | Adicionada |
</details>

<!-- REF #_command_.New shared collection.Syntax -->
**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->
| Parâmetros | Tipo                                                                |    | Descrição                        |
| ---------- | ------------------------------------------------------------------- |:--:| -------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection | -> | Valores da collection compartida |
| Resultado  | Collection                                                          | <- | Nova collection compartida       |
<!-- END REF -->


#### Descrição

O comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> cria uma nova coleção vazia ou pré-preenchida partilhada<!-- END REF --> e retorna sua referência.

Adicionar um elemento para essa coleção deve ser rodeada pela estrutura [`Use...End`](Concepts/shared.md#useend-use), senão um erro é gerado. Ler um elemento sem a estrutura é entretanto possível.
> Para saber mais sobre coleções partilhadas, veja a página [Shared objects and collections](Concepts/shared.md).

Se não quiser passar parâmetros, `New shared collection` cria uma coleção vazia partilhada e retorna sua referência.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.
> Lembre que declarações`var : Collection` ou `C_COLLECTION` declaram uma variável do tipo `Collection` mas não cria qualquer coleção.

Opcionalmente pode preencher automaticamente a nova coleção partilhada passando um ou vários *valores*como parâmetros. Também pode adicionar ou modificar elementos através de atribuição de notação de objetos (ver exemplo).

Se o novo índice elemento for além do último elemento existente da coleção partilhada, a coleção é automaticamente redimensionada e todos os novos elementos intermediários são atribuídos um valor**null**.

Pode passar qualquer número de valores dos tipos compatíveis abaixo:

*   número (real, longint....). Valores numéricos são sempre armazenados como reais.
*   text
*   booleano
*   data
*   hora (armazenada como número de milissegundos - real)
*   null
*   objeto compartido(*)
*   collection compartida(*)
> Diferente de coleções padrão (não partilhadas), coleções partilhadas não são compatíveis com imagens, ponteiros e objetos ou coleção que não forem partilhadas.

(*)Quando um objeto partilhado ou coleção forem adicionadas a uma coleção partilhada, partilham o mesmo *locking identifier*. Para saber mais sobre esse ponto, veja o guia **4D Developer**'.

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

<!-- REF #collection.average().Syntax -->
**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.average().Params -->
| Parâmetros   | Tipo            |    | Descrição                                            |
| ------------ | --------------- |:--:| ---------------------------------------------------- |
| propertyPath | Texto           | -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultado    | Real, Undefined | <- | Média aritmética dos valores coleção                 |
<!-- END REF -->



#### Descrição

A função `.average()` <!-- REF #collection.average().Summary -->retorna a média aritmética de valores definidos da instância da collection<!-- END REF -->.



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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.clear().Syntax -->
**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->
| Parâmetros | Tipo       |    | Descrição                                            |
| ---------- | ---------- |:--:| ---------------------------------------------------- |
| Resultado  | Collection | <- | Collection original com todos os elementos removidos |
<!-- END REF -->


#### Descrição

A função `.clear()` <!-- REF #collection.clear().Summary -->remove todos os elementos da instância collection e retorna uma collection vazia<!-- END REF -->.
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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.combine().Syntax -->
**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.combine().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------------- |
| col2       | Collection | -> | Collection a combinar                                                               |
| index      | Integer    | -> | Posição para a qual inserir elementos para combinar em coleção (padrão = length +1) |
| Resultado  | Collection | <- | Collection original contendo elementos combinados                                   |
<!-- END REF -->


#### Descrição

A função `.combine()` <!-- REF #collection.combine().Summary -->insere elementos *col2* no final da posição especificada *index* na instância da coleção e retorna a coleção editada<!-- END REF -->. Diferente da função `.insert()`, `.combine()` adiciona cada valor de *col2* na collection original, e não como um único elemento da coleção.
> Essa função modifica a collection original.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.concat().Syntax -->
**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->
| Parâmetros | Tipo                                                           |    | Descrição                                                                                                               |
| ---------- | -------------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture | -> | Valores a concatenar. Se *value* for uma coleção, todos os elementos da coleção são adicionados para a coleção original |
| Resultado  | Collection                                                     | <- | Nova coleção com valores adicionados à coleção original                                                                 |
<!-- END REF -->


#### Descrição

A função `.concat()` <!-- REF #collection.concat().Summary -->retorna uma nova coleção contendo os elementos da coleção original com todos os elementos do parâmetro *value* adicionado ao final<!-- END REF -->.
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
| Versão | Mudanças                                           |
| ------ | -------------------------------------------------- |
| v18 R3 | New *ck shared* option. New *groupWith* parameters |
| v16 R6 | Added                                              |
</details>

<!-- REF #collection.copy().Syntax -->
**.copy**() : Collection<br>**.copy**( *option* : Integer ) : Collection<br>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->


<!-- REF #collection.copy().Params -->
| Parâmetros   | Tipo       |    | Descrição                                                                                                       |
| ------------ | ---------- |:--:| --------------------------------------------------------------------------------------------------------------- |
| option       | Integer    | -> | `ck resolve pointers`: resolve ponteiros antes de copiar,<br>`ck shared`: retorna uma coleção partilihada |
| groupWithCol | Collection | -> | Coleção partilhada a ser agrupada com a coleção resultante                                                      |
| groupWithObj | Objeto     | -> | Objeto partilhado a ser agrupado com a coleção resultante                                                       |
| Resultado    | Collection | <- | Cópia profunda da collection original                                                                           |
<!-- END REF -->


#### Descrição

A função `.copy()` <!-- REF #collection.copy().Summary --> retorna uma cópia profunda da instância collection<!-- END REF -->.***Deep copy*** significa que objetos ou collections dentro da coleção original são duplicadas e não partilham qualquer referência com a collection retornada.
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
$lastnames:=JSON Parse($text) //$lastnames é uma collection regular

$sharedLastnames:=$lastnames.copy(ck shared) //$sharedLastnames é uma collection partilhada

//Agora podemos colocar $sharedLastnames em $sharedObject
Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames
End use
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
$lastnames:=JSON Parse($text) //$lastnames é uma collection normal

$sharedLastnames:=$lastnames.copy(ck shared) //cópia partilhada

Use(Storage)
    Storage.lastnames:=$sharedLastnames
End use
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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.count().Syntax -->
**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.count().Params -->
| Parâmetros   | Tipo  |    | Descrição                                            |
| ------------ | ----- |:--:| ---------------------------------------------------- |
| propertyPath | Texto | -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultado    | Real  | <- | Número de elementos na coleção                       |
<!-- END REF -->


#### Descrição

A função `.count()` <!-- REF #collection.count().Summary -->retorna o número de elementos não-null na coleção<!-- END REF -->.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.countValues().Syntax -->
**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.countValues().Params -->
| Parâmetros   | Tipo                                            |    | Descrição                                            |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection | -> | Valor a contar                                       |
| propertyPath | Texto                                           | -> | Rota de propriedade objeto a ser usado para cálculos |
| Resultado    | Real                                            | <- | Número de ocorrências do valor                       |
<!-- END REF -->


#### Descrição

A função `.countValues()` <!-- REF #collection.countValues().Summary -->retorna o número de vezes que o valor foi encontrado na coleção<!-- END REF -->.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.distinct().Syntax -->
**.distinct**( {*option* : Integer} ) : Collection<br>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.distinct().Params -->
| Parâmetros   | Tipo       |    | Descrição                                                       |
| ------------ | ---------- |:--:| --------------------------------------------------------------- |
| option       | Integer    | -> | `ck diacritical`: avaliação diacríticos ("A" # "a" por exemplo) |
| propertyPath | Texto      | -> | Rota do atributo cujos valores quer obter                       |
| Resultado    | Collection | <- | Nova coleção com apenas valores distintos                       |
<!-- END REF -->


#### Descrição

A função `.distinct()` function <!-- REF #collection.distinct().Summary -->retorna uma coleção que contém apenas valores distintos (diferentes) da coleção original<!-- END REF -->.
> Essa função não modifica a coleção original.

A coleção retornada é ordenada automaticamente. Valores **Null** não são retornados.

Como padrão, uma avaliação não-diacrítica é realizada. Se quiser que a avaliação diferencie minúsculas de maiúsculas ou que diferencie letras acentuadas, passe a constante `ck diacritical` no parâmetro*option*.

Se a coleção conter objetos, pode passar o parâmetro *propertyPath* para indicar a propriedade objeto cujos valores diferentes você quer obter.



#### Example

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.equal().Syntax -->
**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->
| Parâmetros  | Tipo       |    | Descrição                                                       |
| ----------- | ---------- |:--:| --------------------------------------------------------------- |
| collection2 | Collection | -> | Coleção a comparar                                              |
| option      | Integer    | -> | `ck diacritical`: avaliação diacríticos ("A" # "a" por exemplo) |
| Resultado   | Booleano   | <- | True se as coleções forem idênticas, senão false                |
<!-- END REF -->


#### Descrição

A função `.equal()` <!-- REF #collection.equal().Summary -->compara collection com collection2 <!-- END REF -->e retorna **true** se forem idênticos (comparação profunda/deep comparison).

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.every().Syntax -->
**.every**( *methodName* : Text { ;*...param* : any } ) : Boolean<br>**.every**( *startFrom* : Integer ; *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->
| Parâmetros | Tipo     |    | Descrição                                               |
| ---------- | -------- |:--:| ------------------------------------------------------- |
| startFrom  | Integer  | -> | Índice para início do teste em                          |
| methodName | Texto    | -> | Nome do método para chamar para o teste                 |
| param      | Mixed    | -> | Parâmetros a passar para methodName                     |
| Resultados | Booleano | <- | True se todos os elementos passarem o teste com sucesso |
<!-- END REF -->


#### Descrição

A função `.every()` <!-- REF #collection.every().Summary -->retorna **true** se todos os elementos na coleção passarem com sucesso o teste implementado no método fornecido *methodName*<!-- END REF -->.


Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. can perform any test, with or without the parameter(s). Esse método recebe um `Object` no primeiro parâmetro($1) e deve estabelecer o *$1.result* como true para todo elemento que cumpre o teste.

*methodName* recebe os parâmetros abaixo:

*   em *$1.value*: valor elemento a ser avaliado
*   *$2*: param
*   *$N*: paramN...

*methodName* estabelece os parâmetros abaixo:

*   *$1.result* (Booleano): **true** se a avaliação do elemento valor tiver sucesso, senão será**false**.
*   *$1.stop* (Booleano, opcional): **true** para parar o método callback. O valor retornado é o último calculado.

Em todos os casos, no ponto quanod a função `.every()` encontra o primeiro elemento de coleção retornando **false** em *$1.result*, ele para de chamar *methodName* e retorna **false**.

Como padrão, `.every()` testa a coleção completa. Opcionalmente pode passar em *startFrom* o índice do elemento do qual vai começar o teste.

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
#DECLARE ($toEval : Object ; $param : Integer) //$1; $2
If(Value type($toEval.value)=$param)
    $toEval.result:=True
End if
``` 

<!-- END REF -->




<!-- REF collection.extract().Desc -->
## .extract()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.extract().Syntax -->
**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #collection.extract().Params -->
| Parâmetros   | Tipo       |    | Descrição                                                                                                                             |
| ------------ | ---------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Texto      | -> | Rota de propriedade de objeto cujos valores serão extraídos para nova coleção                                                         |
| targetpath   | Texto      | -> | Rota de propriedade alvo ou nome propriedade                                                                                          |
| option       | Inteiro    | -> | `ck keep null`: inclui propriedades null na coleção retornada (ignorado como padrão). Parâmetro ignorado se for passado *targetPath*. |
| Resultados   | Collection | <- | Nova collection contendo valores extraídos                                                                                            |
<!-- END REF -->


#### Descrição

A função `.extract()` <!-- REF #collection.extract().Summary -->cria e retorna uma nova coleção contendo valores *propertyPath* extraídos da coleção original de objetos<!-- END REF -->.
> Essa função não modifica a coleção original.

Os conteúdos da coleção retornada depende do parâmetro *targetPath*:

*   Se o parâmetro *targetPath* for omitido, `.extract()` preenche a nova coleção com os valores *propertyPath* da coleção original.

    Como padrão, elementos para os quais *propertyPath* for null ou undefined são ignorados na coleção resultante. Pode passar a constante `ck keep null` no parâmetro *option* para incluir esses valores como elementos null na coleção retornada.


*   Se um ou mais parâmetros *targetPath* forem passados,, `.extract()` preenche a nova coelção com as propriedades *propertyPath* e cada elemento da nova coleção é um objeto com as propriedades *targetPath* preenchidas com as propriedades correspondentes *propertyPath*. Valores null são mantidos (o parâmetro *option* é ignorado com essa sintaxe).


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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.fill().Syntax -->
**.fill**( *value* : any ) : Collection<br>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.fill().Params -->
| Parâmetros | Tipo                                            |    | Descrição                                |
| ---------- | ----------------------------------------------- |:--:| ---------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean | -> | Valores preenchido                       |
| startFrom  | Integer                                         | -> | Início do índice (incluído)              |
| end        | Integer                                         | -> | Final do índice (não incluído)           |
| Resultados | coleção                                         | <- | Coleção original com valores preenchidos |
<!-- END REF -->


#### Descrição

A função `.fill()` <!-- REF #collection.fill().Summary -->retorna a coleção com o *value* especificado, opcionalmente do índice*startFrom* até o índice *end*, e retorna a coleção resultante<!-- END REF -->.
> Essa função modifica a coleção original.

*   Se o parâmetro *startFrom* for omitido, *value* é estabelecido para todos os elementos coleção (*startFrom*=0).
*   Se o parâmetro *startFrom* for passado e o parâmetro*end* for omitido, *value* é estabelecido para elementos de coleção começando com *startFrom* até o elemento final da coleção (*end*=length).
*   Se tanto *startFrom* quanto *end* forem passados, *value* é estabelecido para elementos coleção começando em *startFrom* ao elemento *end*.

Em caso de inconsistências, as regras abaixos são seguidas:

*   Se *index* < 0, será recalculado como *startFrom:=startFrom+length* (é considerado como o offset do final da coleção). Se o valor calculado for negativo, *startFrom* toma o valor 0.
*   Se *end* < 0 , é recalculado como sendo *end:=end+length*.
*   Se *end* < *startFrom* (valores passados ou calculados), o método não faz nada.


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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.filter().Syntax -->
**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->


<!-- REF #collection.filter().Params -->
| Parâmetros | Tipo       |    | Descrição                                                     |
| ---------- | ---------- |:--:| ------------------------------------------------------------- |
| methodName | Texto      | -> | Nome da função a chamar para filtrar a coleção                |
| param      | Mixed      | -> | Parâmetros a passar para *methodName*                         |
| Resultados | Collection | <- | Nova coleção contendo elementos filtrados (cópia superficial) |
<!-- END REF -->


#### Descrição

A função `.filter()` <!-- REF #collection.filter().Summary -->retorna uma nova coleção contendo todos os elementos da coleção original para a qual o resultado do método *methodName*for **true**<!-- END REF -->. Essa função retorna uma ***shallow copy***/cópia superficial, o que significa que objetos ou coleções em ambas as coleções partilham a mesma referência. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> Essa função não modifica a coleção original.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. Esse método recebe um `Objeto` no primeiro parâmetro ($1) e deve estabelecer *$1.result* como **true** para cada elemento que preenche a condição e assim, enviado para a nova coleção.

*methodName* recebe os parâmetros abaixo:

*   em *$1.value*: valor elemento a ser filtrado
*   em *$2*: *param*
*   *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

*   *$1.result* (boolean): **true** if the element value matches the filter condition and must be kept.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Example 1

You want to get the collection of text elements whose length is smaller than 6:

```4d
 var $col;$colNew : Collection
 $col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
 $colNew:=$col.filter("LengthLessThan";6)
  //$colNew=["hello","world","tim","miami"]
```

The code for ***LengthLessThan*** method is:

```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### Example 2

You want to filter elements according to their value type:

```4d
 var $c;$c2;$c3 : Collection
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter("TypeLookUp";Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter("TypeLookUp";Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

The code for ***TypeLookUp*** is:

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.find().Syntax -->
**.find**( *methodName* : Text { ; *...param* : any } ) : any<br>**.find**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->


<!-- REF #collection.find().Params -->
| Parameter  | Type    |    | Description                                  |
| ---------- | ------- |:--:| -------------------------------------------- |
| startFrom  | Integer | -> | Index to start the search at                 |
| methodName | Texto   | -> | Name of the function to call for the find    |
| param      | any     | -> | Parâmetros a passar para *methodName*        |
| Result     | any     | <- | First value found, or Undefined if not found |
<!-- END REF -->


#### Description

The `.find()` function <!-- REF #collection.find().Summary -->returns the first value in the collection for which *methodName*, applied on each element, returns **true**<!-- END REF -->.
> This function does not modify the original collection.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. can perform any test, with or without the parameter(s). This method receives an `Object` in the first parameter ($1) and must set *$1.result* to **true** for the first element fulfilling the condition.

*methodName* recebe os parâmetros abaixo:

*   in *$1.value:* element value to be evaluated
*   in *$2: param*
*   *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

*   *$1.result* (boolean): **true** if the element value matches the search condition.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

By default, `.find()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).


#### Example 1

You want to get the first element with a length smaller than 5:

```4d
 var $col : Collection
 $col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
 $value:=$col.find("LengthLessThan";5) //$value="tim"
```

The code for ***LengthLessThan*** method is:

```4d
 var $1 : Object
 var $2 : Integer
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### Example 2

You want to find a city name within a collection:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.find("FindCity";"Clanton") //$c2={name:Clanton,zc:35046}
```

The code for ***FindCity*** is:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2 //name is a property name of objects in the collection
``` 

<!-- END REF -->





<!-- REF collection.findIndex().Desc -->
## .findIndex()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>


<!-- REF #collection.findIndex().Syntax -->
**.findIndex**( *methodName* : Text { ; *...param* : any } ) : Integer<br>**.findIndex**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->



<!-- REF #collection.findIndex().Params -->
| Parameter  | Type    |    | Description                                    |
| ---------- | ------- |:--:| ---------------------------------------------- |
| startFrom  | Integer | -> | Index to start the search at                   |
| methodName | Texto   | -> | Name of the function to call for the find      |
| param      | any     | -> | Parâmetros a passar para *methodName*          |
| Result     | Integer | <- | Index of first value found, or -1 if not found |
<!-- END REF -->


#### Description

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which *methodName*, applied on each element, returns **true**<!-- END REF -->.
> This function does not modify the original collection.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* can perform any test, using or not the parameter(s). This method receives an `Object` as first parameter ($1) and must set *$1.result* to **true** for the first element fulfilling the condition.

*methodName* recebe os parâmetros abaixo:

*   in *$1.value*: element value to be evaluated
*   in *$2: param*
*   *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

*   *$1.result* (boolean): **true** if the element value matches the search condition.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).

#### Exemplo

You want to find the position of the first city name within a collection:

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

The code for ***FindCity*** method is:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2
``` 


<!-- END REF -->





<!-- REF collection.indexOf().Desc -->
## .indexOf()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.indexOf().Syntax -->
**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->
| Parameter | Type       |    | Description                                                                  |
| --------- | ---------- |:--:| ---------------------------------------------------------------------------- |
| toSearch  | expression | -> | Expression to search in the collection                                       |
| startFrom | Integer    | -> | Index to start the search at                                                 |
| Result    | Integer    | <- | Index of the first occurrence of toSearch in the collection, -1 if not found |
<!-- END REF -->


#### Description

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.
> This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*   a scalar value (text, number, boolean, date),
*   the null value,
*   an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in *startFrom*.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.indices().Syntax -->
**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.indices().Params -->
| Parameter   | Type       |    | Description                                              |
| ----------- | ---------- |:--:| -------------------------------------------------------- |
| queryString | Texto      | -> | Search criteria                                          |
| value       | any        | -> | Value(s) to compare when using placeholder(s)            |
| Result      | Collection | <- | Element index(es) matching queryString in the collection |
<!-- END REF -->


#### Description

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the *queryString* search conditions<!-- END REF -->, and not elements themselves. Indexes are returned in ascending order.
> This function does not modify the original collection.

The *queryString* parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For a detailed description of the *queryString* and *value* parameters, please refer to the `dataClass.query()` function.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.insert().Syntax -->
**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->
| Parameter | Type       |    | Description                                     |
| --------- | ---------- |:--:| ----------------------------------------------- |
| index     | Integer    | -> | Where to insert the element                     |
| element   | any        | -> | Element to insert in the collection             |
| Result    | Collection | <- | Original collection containing inserted element |
<!-- END REF -->


#### Description

The `.insert()` function <!-- REF #collection.insert().Summary --> inserts *element* at the specified *index* position in the collection instance and returns the edited collection<!-- END REF -->.
> This function modifies the original collection.

In *index*, pass the position where you want the element to be inserted in the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0.

*   If *index* > the length of the collection, actual starting index will be set to the length of the collection.
*   If *index* <0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value is negative, index is set to 0.

Any type of element accepted by a collection can be inserted, even another collection.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.join().Syntax -->
**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->
| Parameter | Type    |    | Description                                                              |
| --------- | ------- |:--:| ------------------------------------------------------------------------ |
| delimiter | Texto   | -> | Separator to use between elements                                        |
| option    | Integer | -> | `ck ignore null or empty`: ignore null and empty strings in the result   |
| Result    | Texto   | <- | String containing all elements of the collection, separated by delimiter |
<!-- END REF -->


#### Description

The `.join()` function <!-- REF #collection.join().Summary -->converts all elements of the collection to strings and concatenates them using the specified *delimiter* string as separator<!-- END REF -->.The function returns the resulting string.
> This function does not modify the original collection.

By default, null or empty elements of the collection are returned in the resulting string. Pass the `ck ignore null or empty` constant in the *option* parameter if you want to remove them from the resulting string.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.lastIndexOf().Syntax -->
**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->
| Parameter | Type       |    | Description                                                             |
| --------- | ---------- |:--:| ----------------------------------------------------------------------- |
| toSearch  | expression | -> | The element that is to be searched for within the collection            |
| startFrom | Integer    | -> | Index to start the search at                                            |
| Result    | Integer    | <- | Index of last occurrence of toSearch in the collection, -1 if not found |
<!-- END REF -->


#### Description

The `.lastIndexOf()` function <!-- REF #collection.lastIndexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.
> This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*   a scalar value (text, number, boolean, date),
*   the null value,
*   an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in *startFrom*.

*   If *startFrom* >= the collection's length minus one (coll.length-1), the whole collection is searched (default).
*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection). If the calculated value is negative, -1 is returned (the collection is not searched). **Note:** Even if *startFrom* is negative, the collection is still searched from right to left.
*   If *startFrom* = 0, -1 is returned, which means the collection is not searched.

#### Exemplo


```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer 
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") //returns 12
 $pos2:=$col.lastIndexOf("e";6) //returns 4
 $pos3:=$col.lastIndexOf("e";15) //returns 12
 $pos4:=$col.lastIndexOf("e";-2) //returns 10
 $pos5:=$col.lastIndexOf("x") //returns -1
``` 

<!-- END REF -->

 


<!-- REF collection.length.Desc -->
## .length

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R5 | Added    |
</details>

<!-- REF #collection.length.Syntax -->
**.length** : Integer<!-- END REF -->



#### Description

The `.length` property <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

The `.length` property is initialized when the collection is created. Adding or removing elements updates the length, if necessary. This property is **read-only** (you cannot use it to set the size of the collection).

#### Exemplo


```4d
 var $col : Collection //$col.length initialized to 0
 $col:=New collection("one";"two";"three") //$col.length updated to 3
 $col[4]:="five" //$col.length updated to 5
 $vSize:=$col.remove(0;3).length //$vSize=2
``` 

<!-- END REF -->




<!-- REF collection.map().Desc -->
## .map()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.map().Syntax -->
**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.map().Params -->
| Parameter  | Type       |    | Description                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| methodName | Texto      | -> | Name of method used to transform the collection elements |
| param      | any        | -> | Parameter(s) for the method                              |
| Result     | Collection | <- | Collection of transformed values                         |
<!-- END REF -->


#### Description

The `.map()` function <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the *methodName* method on each element of the original collection<!-- END REF -->. Optionally, you can pass parameters to *methodName* using the *param* parameter(s). `.map()` always returns a collection with the same size as the original collection.
> This function does not modify the original collection.

Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* can perform any operation, with or without the parameter(s).

*methodName* recebe os parâmetros abaixo:

*   in *$1.value* (any type): element value to be mapped
*   in *$2* (any type): *param*
*   in *$N...* (any type): *paramN...*

*methodName* estabelece os parâmetros abaixo:


*   *$1.result* (any type): new transformed value to add to the resulting collection
*   *$1.stop* (boolean): **true** to stop the method callback. The returned value is the last calculated.

#### Exemplo


```4d
 var $c; $c2 : Collection
 $c:=New collection(1;4;9;10;20)
 $c2:=$c.map("Percentage";$c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

Here is the ***Percentage*** method:

```4d
 var $1 : Object
 var $2 : Real
 $1.result:=Round(($1.value/$2)*100;2)
``` 


<!-- END REF -->





<!-- REF collection.max().Desc -->
## .max()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.max().Syntax -->
**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->
| Parameter    | Type                                            |    | Description                                    |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------- |
| propertyPath | Texto                                           | -> | Object property path to be used for evaluation |
| Result       | Boolean, Text, Number, Collection, Object, Date | <- | Maximum value in the collection                |
<!-- END REF -->


#### Description

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> This function does not modify the original collection.

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns *Undefined*.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.min().Syntax -->
**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->
| Parameter    | Type                                            |    | Description                                    |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------- |
| propertyPath | Texto                                           | -> | Object property path to be used for evaluation |
| Result       | Boolean, Text, Number, Collection, Object, Date | <- | Minimum value in the collection                |
<!-- END REF -->


#### Description

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> This function does not modify the original collection.

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns *Undefined*.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.orderBy().Syntax -->
**.orderBy**( ) : Collection<br>**.orderBy**( *pathStrings* : Text ) : Collection<br>**.orderBy**( *pathObjects* : Collection ) : Collection<br>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->


<!-- REF #collection.orderBy().Params -->
| Parameter | Type |  | Description |
| --------- | ---- |::| ----------- |
|           |      |  |             |

|pathStrings|Text|->|Property path(s) on which to order the collection| |pathObjects|Collection|->|Collection of criteria objects| |ascOrDesc|Integer|->|`ck ascending` or `ck descending` (scalar values)| |Result|Collection |<-|Ordered copy of the collection (shallow copy)|
<!-- END REF -->


#### Description

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> This function does not modify the original collection.

If you pass no parameter, the function orders scalar values in the collection in ascending order (other element types such as objects or collections are returned unordered). You can modify this automatic order by passing the `ck ascending` or `ck descending` constants in the *ascOrDesc* parameter (see below).

You can also pass a criteria parameter to define how the collection elements must be sorted. Three syntaxes are supported for this parameter:

*   *pathStrings* : Text (formula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). *pathStrings* contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. The order in which the properties are passed determines the sorting priority of the collection elements. By default, properties are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*   *pathObjects* : Collection. You can add as many objects in the *pathObjects* collection as necessary. By default, properties are sorted in ascending order ("descending" is false). Each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

*   *ascOrDesc*: Integer. You pass one of the following constants from the **Objects and collections** theme:

    | Constant      | Type    | Value | Comment                                           |
    | ------------- | ------- | ----- | ------------------------------------------------- |
    | ck ascending  | Longint | 0     | Elements are ordered in ascending order (default) |
    | ck descending | Longint | 1     | Elements are ordered in descending order          |

    This syntax orders scalar values in the collection only (other element types such as objects or collections are returned unordered).

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  null
2.  booleans
3.  strings
4.  numbers
5.  objetos
6.  collections
7.  dates

#### Example 1

Ordering a collection of numbers in ascending and descending order:

```4d
 var $c; $c2; $3 : Collection 
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```


#### Example 2

Ordering a collection of objects based on a text formula with property names:

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

Ordering a collection of objects with a property path:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```


#### Example 3

Ordering a collection of objects using a collection of criteria objects:

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

Ordering with a property path:

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.orderByMethod().Syntax -->
**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection <!-- END REF -->


<!-- REF #collection.orderByMethod().Params -->
| Parameter  | Type       |    | Description                                      |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| methodName | Texto      | -> | Name of method used to specify the sorting order |
| extraParam | expression | -> | Parameter(s) for the method                      |
| Result     | Collection | <- | Sorted copy of the collection (shallow copy)     |
<!-- END REF -->


#### Description

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the *methodName* method<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> This function does not modify the original collection.

In *methodName*, pass a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (object), where:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters
*   *methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

#### Example 1

You want to sort a collection of strings in numerical order rather than alphabetical order:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod("NumAscending") // $c3=["4","33","222","1111"]
```

 Here is the code for ***NumAscending***:


```4d
 $1.result:=Num($1.value)<Num($1.value2)
```



#### Example 2

You want to sort a collection of strings on their length:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod("WordLength")
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

Here is the code for ***WordLength***:

```4d
 $1.result:=Length(String($1.value))>Length(String($1.value2))
```

#### Example 3

You want to sort a collection by character code or language:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//using the character code:
$strings2:=$strings1.orderByMethod("sortCollection";sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//using the language:
$strings2:=$string1s.orderByMethod("sortCollection";sk strict)
// result : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

The ***sortCollection*** method:

```4d
var$1Object
var$2Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
``` 

<!-- END REF -->





<!-- REF collection.pop().Desc -->
## .pop()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>


<!-- REF #collection.pop().Syntax -->
**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->
| Parameter | Type |    | Description                |
| --------- | ---- |:--:| -------------------------- |
| Result    | any  | <- | Last element of collection |
<!-- END REF -->


#### Description

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.
> This function modifies the original collection.

When applied to an empty collection, `.pop()` returns ***undefined***.

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

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.push().Syntax -->
**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->
| Parameter | Type       |    | Description                                   |
| --------- | ---------- |:--:| --------------------------------------------- |
| element   | Mixed      | -> | Element(s) to add to the collection           |
| Result    | Collection | <- | Original collection containing added elements |
<!-- END REF -->


#### Description

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more *element*(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.
> This function modifies the original collection.


#### Example 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```



#### Example 2

You want to sort the resutling collection:

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
| Versão | Mudanças                 |
| ------ | ------------------------ |
| v17 R5 | Support of querySettings |
| v16 R6 | Added                    |
</details>

<!-- REF #collection.query().Syntax -->
**.query**( *queryString* : Text ; *...value* : any ) : Collection<br>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->


<!-- REF #collection.query().Params -->
| Parameter     | Type       |    | Description                                       |
| ------------- | ---------- |:--:| ------------------------------------------------- |
| queryString   | Texto      | -> | Search criteria                                   |
| value         | Mixed      | -> | Value(s) to compare when using placeholder(s)     |
| querySettings | Objeto     | -> | Query options: parameters, attributes             |
| Result        | Collection | <- | Element(s) matching queryString in the collection |
<!-- END REF -->


#### Description

The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by *queryString* and (optionally) *value* or *querySettings*. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> This function does not modify the original collection.

The *queryString* parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For detailed information on how to build a query using *queryString*, *value* and *querySettings* parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function description.

> Formulas are not supported by the `collection.query()` function, neither in the *queryString* parameter nor as *formula* object parameter.

#### Example 1

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


#### Example 2


```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

This example returns persons whose name contains "in":

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

This example returns persons whose name does not begin with a string from a variable (entered by the user, for example):

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

This example returns persons whose age is not known (property set to null or undefined):

```4d
 $col:=$c.query("age=null") //placeholders not allowed with "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

This example returns persons hired more than 90 days ago:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018
```


#### Example 3

More examples of queries can be found in the `dataClass.query()` page. 

<!-- END REF -->





<!-- REF collection.reduce().Desc -->
## .reduce()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.reduce().Syntax -->
**.reduce**( *methodName* : Text ) : any <br>**.reduce**( *methodName* : Text ; *initValue* : any { ; *...param* : expression } ) : any <!-- END REF -->


<!-- REF #collection.reduce().Params -->
| Parameter  | Type                                            |    | Description                                                          |
| ---------- | ----------------------------------------------- |:--:| -------------------------------------------------------------------- |
| methodName | Texto                                           | -> | Name of the function to call to process collection elements          |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Value to use as the first argument to the first call of *methodName* |
| param      | expression                                      | -> | Parâmetros a passar para *methodName*                                |
| Result     | Text, Number, Object, Collection, Date, Boolean | <- | Result of the accumulator value                                      |
<!-- END REF -->


#### Description


The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the *methodName* callback method against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in param (optional). *methodName* takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

You can pass the value to initialize the accumulator in *initValue*. If omitted, *$1.accumulator* starts with *Undefined*.

*methodName* recebe os parâmetros abaixo:

*   in *$1.value*: element value to be processed
*   in *$2: param*
*   in *$N...*: *paramN...*

*methodName* estabelece os parâmetros abaixo:

*   *$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Example 1


```4d
 C_COLLECTION($c)
 $c:=New collection(5;3;5;1;3;4;4;6;2;2)
 $r:=$c.reduce("Multiply";1) //returns 86400
```

With the following ***Multiply*** method:

```4d
 If(Value type($1.value)=Is real)
    $1.accumulator:=$1.accumulator*$1.value
 End if
```

#### Exemplo

This example allows reducing several collection elements to a single one:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce("Flatten") //$r=[0,1,2,3,4,5,6,7]
```

With the following ***Flatten*** method:

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.remove().Syntax -->
**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->


<!-- REF #collection.remove().Params -->
| Parameter | Type       |    | Description                                           |
| --------- | ---------- |:--:| ----------------------------------------------------- |
| index     | Integer    | -> | Element at which to start removal                     |
| howMany   | Integer    | -> | Number of elements to remove, or 1 element if omitted |
| Result    | Collection | <- | Original collection without removed element(s)        |
<!-- END REF -->


#### Description

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified *index* position in the collection and returns the edited collection<!-- END REF -->.
> This function modifies the original collection.

In *index*, pass the position where you want the element to be removed from the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0. If *index* is greater than the length of the collection, actual starting index will be set to the length of the collection.

*   If *index* < 0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value < 0, *index* is set to 0.
*   If the calculated value > the length of the collection, *index* is set to the length.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>



<!-- REF #collection.resize().Syntax -->
**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->
| Parameter    | Type                                            |    | Description                        |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------- |
| size         | Integer                                         | -> | New size of the collection         |
| defaultValue | Number, Text, Object, Collection, Date, Boolean | -> | Default value to fill new elements |
| Result       | Collection                                      | <- | Resized original collection        |
<!-- END REF -->


#### Description

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.
> This function modifies the original collection.

*   If *size* < collection length, exceeding elements are removed from the collection.
*   If *size* > collection length, the collection length is increased to size.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.reverse().Syntax -->
**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->
| Parameter | Type       |    | Description                     |
| --------- | ---------- |:--:| ------------------------------- |
| Result    | Collection | <- | Inverted copy of the collection |
<!-- END REF -->


#### Description

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> This function does not modify the original collection.

#### Exemplo


```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->





<!-- REF collection.shift().Desc -->
## .shift()

<details><summary>Histórico</summary>
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.shift().Syntax -->
**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->
| Parameter | Type |    | Description                 |
| --------- | ---- |:--:| --------------------------- |
| Result    | any  | <- | First element of collection |
<!-- END REF -->


#### Description

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.
> This function modifies the original collection.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.slice().Syntax -->
**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->
| Parameter | Type       |    | Description                                              |
| --------- | ---------- |:--:| -------------------------------------------------------- |
| startFrom | Integer    | -> | Index to start the search at (included)                  |
| end       | Integer    | -> | Final do índice (não incluído)                           |
| Result    | Collection | <- | New collection containing sliced elements (shallow copy) |
<!-- END REF -->


#### Description

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from *startFrom* index to *end* index (end not included). This function returns a *shallow copy* of the collection. Na coleção original é uma coleção partilhada, a coleção retornada também é uma coleção partilhada.
> This function does not modify the original collection.

The returned collection contains the element specified by *startFrom* and all subsequent elements up to, but not including, the element specified by *end*. If only the *startFrom* parameter is specified, the returned collection contains all elements from *startFrom* to the last element of the original collection.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection).
*   If the calculated value < 0, *startFrom* is set to 0.
*   If *end* < 0 , it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.some().Syntax -->
**.some**( *methodName* : Text { ; *...param* : any } ) : Boolean<br>**.some**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->


<!-- REF #collection.some().Params -->
| Parameter  | Type     |    | Description                                               |
| ---------- | -------- |:--:| --------------------------------------------------------- |
| startFrom  | Integer  | -> | Índice para início do teste em                            |
| methodName | Texto    | -> | Nome do método para chamar para o teste                   |
| param      | Mixed    | -> | Parâmetros a passar para *methodName*                     |
| Result     | Booleano | <- | True if at least one element successfully passed the test |
<!-- END REF -->


#### Description

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test<!-- END REF --> implemented in the provided *methodName* method.


Em *methodName*, passe o nome do método para usar para avliar elementos collection, junto com os parâmetros em *param* (opcional). *methodName* pode realizar qualquer teste, com ou sem os parâmetros. can perform any test, with or without the parameter(s). This method receives an `Object` as first parameter ($1) and must set *$1.result* to **True** for every element fulfilling the test.

*methodName* recebe os parâmetros abaixo:

*   in *$1.value*: element value to be evaluated
*   *$2*: param
*   *$N...*: param2...paramN

*methodName* estabelece os parâmetros abaixo:

*   *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

In any case, at the point where `.some()` function encounters the first collection element returning true in *$1.result*, it stops calling *methodName* and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

*   If *startFrom* >= the collection's length, **False** is returned, which means the collection is not tested.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection.
*   If *startFrom* = 0, the whole collection is searched (default).


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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.sort().Syntax -->
**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.sort().Params -->
| Parameter  | Type       |    | Description                                      |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| methodName | Texto      | -> | Name of method used to specify the sorting order |
| extraParam | any        | -> | Parameter(s) for the method                      |
| Result     | Collection | <- | Original collection sorted                       |
<!-- END REF -->


#### Description

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection<!-- END REF --> and also returns the sorted collection.
> This function modifies the original collection.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Elements are sorted by default in ascending order, according to their type.

If you want to sort the collection elements in some other order or sort any type of element, you must supply in *methodName* a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (object), where:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters

*methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  null
2.  booleans
3.  strings
4.  numbers
5.  objetos
6.  collections
7.  dates

#### Example 1


```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### Example 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### Example 3

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.sum().Syntax -->
**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->
| Parameter    | Type  |    | Description                                          |
| ------------ | ----- |:--:| ---------------------------------------------------- |
| propertyPath | Texto | -> | Rota de propriedade objeto a ser usado para cálculos |
| Result       | Real  | <- | Sum of collection values                             |
<!-- END REF -->


#### Description

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Apenas elementos numéricos são considerados para cálculos (outros tipos são ignorados).

Se a coleção contiver objetos, passe o parâmetro *propertyPath* para indicar a propriedade objeto para levar em consideração.

`.sum()` returns 0 if:

*   the collection is empty,
*   the collection does not contain numerical elements,
*   *propertyPath* is not found in the collection.

#### Example 1


```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### Example 2

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
| Versão | Mudanças |
| ------ | -------- |
| v16 R6 | Added    |
</details>

<!-- REF #collection.unshift().Syntax -->
**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->
| Parameter | Type                                   |    | Description                                           |
| --------- | -------------------------------------- |:--:| ----------------------------------------------------- |
| value     | Text, Number, Object, Collection, Date | -> | Value(s) to insert at the beginning of the collection |
| Result    | Real                                   | <- | Collection containing added element(s)                |
<!-- END REF -->


#### Description

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given *value*(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.
> This function modifies the original collection.

If several values are passed, they are inserted all at once, which means that they appear in the resulting collection in the same order as in the argument list.


#### Exemplo


```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
