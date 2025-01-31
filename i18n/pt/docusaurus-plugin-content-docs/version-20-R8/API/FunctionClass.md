---
id: FunctionClass
title: Function
---

A **`4D.Function`** object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. 4D propõe três tipos de objetos `Function`:

- **as funções nativas**, ou seja, funções incorporadas de várias classes 4D, como `collection.sort()` ou `file.copyTo()`.
- **as funções usuário**, criadas nas [classes usuário] (Concepts/classes.md) usando a palavra-chave [Function](Concepts/classes.md#function).
- **funções de fórmula**, ou seja, funções que podem executar qualquer fórmula 4D.

### Objetos de formulários

The [Formula](../commands/formula.md) and [Formula from string](../commands/formula-from-string.md) commands allow you to create [`4D.Function` objects](#about-4dfunction-objects) to execute any 4D expression or code expressed as text.

Objetos formulário podem ser encapsulados em propriedades objeto:

```4d
 var $f : 4D. Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

Essa propriedade é uma "função objeto" ou seja uma função que é restrita a seu objeto pai. Para executar uma função armazenada em uma propriedade objeto, use o operador **()** depois do nome propriedade, tal como:

```4d
 $f.message() //exibe "Hello world"
```

Também se admite a sintaxe com parênteses:

```4d
 $f["message"]() //exibe "Hello world"
```

Note que mesmo se não tiver parênteses (ver abaixo), uma função objeto a ser executada deve ser chamda com () parênteses. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
 $o:=$f.message //devolve o objeto fórmula em $o
```

Você também pode executar uma função usando as funções [`apply()`](#apply) e [`call()`](#call):

```4d
 $f.message.apply() //exibe "Hello world"
```

#### Utilização de parâmetros

You can pass parameters to your formulas using the [sequential parameter syntax](Concepts/parameters.md#sequential-parameters) based upon $1, $2...$n. Por exemplo, pode escrever:

```4d
 var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //exibe "Hello John"
```

Ou usando a função [.call()](#call):

```4d
 var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //retorna "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //retorna "Welcome to 2019" (por exemplo)
```

#### Parâmetros a um único método

Para mais conveniência, quando a fórmula é feita de um único método de projeto, parâmetros podem ser omitidos na inicialização do objeto fórmula. Pode ser passado quando a fórmula for chamada. Por exemplo:

```4d
 var $f : 4D.Function

 $f:=Formula(myMethod)
  //Writing Formula(myMethod($1;$2)) is not necessary
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call() //returns "How are you?"

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
```

Parâmetros são recebidos dentro do método, na ordem que são especificados na chamada.

### Resumo

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R3   | Adicionado |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

| Parâmetro     | Tipo       |                             | Descrição                                                                                                               |
| ------------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------- |
| thisObj       | Object     |              ->             | Objeto a ser retornado pelo comando This na fórmula                                                                     |
| formulaParams | Collection |              ->             | Collection of values to be passed as $1...$n when `formula` is executed |
| Resultados    | any        | <- | Valores de execução de fórmula                                                                                          |

<!-- END REF -->

#### Descrição

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional *formulaParams* parameter.

Note que `.apply()` é similar a [`.call()`](#call) exceto que os parâmetros são passados como coleção. Isso pode ser útil para passar resultados calculados. Isso pode ser útil para passar resultados calculados.

#### Exemplo 1

```4d
 var $f : 4D. Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // retorna 60
```

#### Exemplo 2

```4d
 var $calc : 4D. Function
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
```

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R3   | Adicionado |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                                                                            |
| ---------- | ------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| thisObj    | Object | ->                          | Objeto a ser retornado pelo comando This na fórmula                                                                  |
| params     | any    | ->                          | Valores a serem passados como $1...$n quando a fórmula for executada |
| Resultados | any    | <- | Valores de execução de fórmula                                                                                       |

<!-- END REF -->

#### Descrição

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

Você também pode passar valores para serem usados como parâmetros *$1...$n* na fórmula usando os parâmetros *params* opcionais.

Observe que `.call()` é semelhante a [`.apply()`](#apply), exceto pelo fato de que os parâmetros são passados diretamente.

#### Exemplo 1

```4d
 var $f : 4D. Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // retorna "HELLO"
```

#### Exemplo 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // devolve 100
```

<!-- END REF -->

<!-- REF FunctionClass.source.Desc -->

## .source

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### Descrição

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source expression of the `formula` as text<!-- END REF -->.

Essa propriedade é **somente leitura**.

#### Exemplo

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->
