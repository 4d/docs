---
id: FunctionClass
title: Function
---

Um objeto **`4D.Function`** contém um trecho de código que pode ser executado a partir de um objeto, usando o operador `()`, ou usando as funções [`apply()`](#apply) e [`call()`](#call).

### Herança

4D handles several kinds of `Function` objects, inheriting from the **4D.Function** class:

- **native functions**, i.e. built-in functions from various 4D classes such as [`collection.sort()`](./CollectionClass.md#sort) or [`file.copyTo()`](./FileClass.md#copyto).
- **user functions**, created in [user classes](Concepts/classes.md) using the [`Function` keyword](Concepts/classes.md#function).
- **formula functions**, i.e. functions that can execute formula code stored in [4D.Formula](./FormulaClass.md) objects,
- **method functions**, i.e. functions that can execute source code as text stored in [4D.Method](./MethodClass.md) objects.

### Executing code in Function objects

Function objects can be encapsulated in object properties:

```4d
var $message : 4D.Formula
$message:=Formula(ALERT("Hello world"))
$f:={message: $message}
```

Essa propriedade é uma "função objeto" ou seja uma função que é restrita a seu objeto pai. Para executar uma função armazenada em uma propriedade objeto, use o operador **()** depois do nome propriedade, tal como:

```4d
 $f.message() //exibe "Hello world"
```

Também se admite a sintaxe com parênteses:

```4d
 $f["message"]() //exibe "Hello world"
```

Note that, even if it does not have parameters (see below), an object function to be executed must be called with `()` parenthesis. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
 $o:=$f.message //returns the function object in $o
```

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call):

```4d
 $message.apply() //displays "Hello world"
```

### Resumo

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>História</summary>

| Release | Mudanças                                      |
| ------- | --------------------------------------------- |
| 21 R3   | Support of 4D.Methods objects |
| 17 R3   | Adicionado                                    |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *params* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

<div class="no-index">

| Parâmetro  | Tipo       |                             | Descrição                                                       |
| ---------- | ---------- | :-------------------------: | --------------------------------------------------------------- |
| thisObj    | Object     |              ->             | Object to be returned by the `This` command in the function     |
| params     | Collection |              ->             | Collection of values to be passed as parameters to the function |
| Resultados | any        | <- | Value from function execution                                   |

</div>
<!-- END REF -->

#### Descrição

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the function object to which it is applied, passing parameters as a collection, and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the function. Pass Null if you do not want to use `This` but you want to send parameters.

You can pass a collection to be used as parameters in the function using the optional *params* parameter:

- in `4D.Formula` objects, parameters are passed in $1...$n in the formula.
- in other `4D.Function` objects such as `4D.Method` objects, parameters are passed in [declared method parameters](../Concepts/parameters.md).

Note que `.apply()` é similar a [`.call()`](#call) exceto que os parâmetros são passados como coleção. Isso pode ser útil para passar resultados calculados. Isso pode ser útil para passar resultados calculados.

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>História</summary>

| Release | Mudanças                                      |
| ------- | --------------------------------------------- |
| 21 R3   | Support of 4D.Methods objects |
| 17 R3   | Adicionado                                    |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; *...params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

<div class="no-index">

| Parâmetro  | Tipo   |                             | Descrição                                                   |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------- |
| thisObj    | Object | ->                          | Object to be returned by the `This` command in the function |
| params     | any    | ->                          | Values to be passed as parameters to the function           |
| Resultados | any    | <- | Value from function execution                               |

</div>
<!-- END REF -->

#### Descrição

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the function object to which it is applied, with one or more parameter(s) passed directly, and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the function.

You can pass values to be used as parameters in the function using the optional *params* parameter:

- in `4D.Formula` objects, parameters are passed in $1...$n in the formula.
- in `4D.Method` objects, parameters are passed in [declared method parameters](../Concepts/parameters.md).

Observe que `.call()` é semelhante a [`.apply()`](#apply), exceto pelo fato de que os parâmetros são passados diretamente.

<!-- END REF -->

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

<!-- REF FunctionClass.source.Desc -->

## .source

<details><summary>História</summary>

| Release | Mudanças                                      |
| ------- | --------------------------------------------- |
| 21 R3   | Support of 4D.Methods objects |
| 18 R2   | Adicionado                                    |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### Descrição

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source code of the function as text<!-- END REF -->.

The returned value is the original text used to create the 4D.Formula or 4D.Method object but reformatted.

Essa propriedade é **somente leitura**.

<!-- END REF -->

#### Exemplo

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```



