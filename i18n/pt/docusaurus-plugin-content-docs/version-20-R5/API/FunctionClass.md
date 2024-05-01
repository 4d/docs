---
id: FunctionClass
title: Function
---

A **`4D.Function`** object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. 4D proposes three kinds of `Function` objects:

- **native functions**, i.e. built-in functions from various 4D classes such as `collection.sort()` or `file.copyTo()`.
- **user functions**, created in user [classes](Concepts/classes.md) using the [Function keyword](Concepts/classes.md#function).
- **formula functions**, i.e. functions that can execute any 4D formula.

### Objetos de formulários

The [Formula](#formula) and [Formula from string](#formula-from-string) commands allow you to create [`4D.Function` objects](#about-4dfunction-objects) to execute any 4D expression or code expressed as text.

Objetos formulário podem ser encapsulados em propriedades objeto:

```4d
 var $f : 4D. Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

Essa propriedade é uma "função objeto" ou seja uma função que é restrita a seu objeto pai. To execute a function stored in an object property, use the **()** operator after the property name, such as:

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

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call) functions:

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

Or using the [.call()](#call) function:

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

|                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FunctionClass.source.Summary -->  |

## Formula

<details><summary>História</summary>

| Release | Mudanças                                            |
| ------- | --------------------------------------------------- |
| 17 R6   | Renamed (New formula -> Formula) |
| 17 R3   | Adicionado                                          |

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->

| Parâmetro  | Tipo                         |     | Descrição                            |
| ---------- | ---------------------------- | :-: | ------------------------------------ |
| formulaExp | Expression                   |  -> | Fórmula a ser retornada como objeto  |
| Resultados | 4D. Function |  <- | Função nativa encapsulando a fórmula |

<!-- END REF -->

#### Descrição

The `Formula` command <!-- REF #_command_.Formula.Summary -->creates a `4D Function` object based upon the _formulaExp_ expression<!-- END REF -->. _formulaExp_ can be as simple as a single value or complex, such as a project method with parameters.

Ter uma fórmula como se fosse um objeto permite que seja passada como um parâmetro (atributo calculado) para comandos ou métodos, ou para ser executado a partir de vários componentes, sem precisar declará-los como "partilhados por componentes e database host". Quando chamado, o objeto fórmula é avaliado sem o contexto do banco de dados ou componente que o criou.

A fórmula retornada pode ser chamada com:

- [`.call()`](#call) or [`.apply()`](#apply) methods, or
- object notation syntax (see [formula object](#formula-object)).

```4d
 var $f : 4D. Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //três formas diferentes de chamar a fórmula
 $f.call($o) //retorna 3
 $f.apply($o) //retorna 3
 $o.myFormula() //retorna 3
```

You can pass [parameters](#passing-parameters) to the `Formula`, as seen below in [example 4](#example-4).

You can specify the object on which the formula is executed, as seen in [example 5](#example-5). The properties of the object can then be accessed via the `This` command.

If _formulaExp_ uses local variables, their values are copied and stored in the returned formula object when it is created. Quando executados, a fórmula usa esses valores copiados ao invés do valor atual da variável local. Note que usar arrays como variáveis locais não são compatíveis.

The object created by `Formula` can be saved, for example, in a database field or in a blob document.

#### Exemplo 1

Uma fórmula simples:

```4d
 var $f : 4D. Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // devoluções 3
```

#### Exemplo 2

Uma fórmula usando um método projeto com parâmetros:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // returns 10
```

#### Exemplo 3

Uma fórmula usando variáveis locais:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //retorna 30
```

#### Exemplo

Uma fórmula simples usando parâmetros:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```

#### Exemplo 2

Using `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //retorna "John Smith"
```

#### Exemplo 6

Chamar uma fórmula usando notação de objeto:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //sets the formula to object properties
 $feta.calc:=$calc
 $robot.calc:=$calc

  //call the formula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

## Formula from string

<details><summary>História</summary>

| Release | Mudanças                                               |
| ------- | ------------------------------------------------------ |
| 20 R3   | Support of _context_ parameter                         |
| 17 R6   | Renamed New formula from string -> Formula from string |
| 17 R3   | Adicionado                                             |

</details>

<!-- REF #_command_.Formula from string.Syntax -->**Formula from string**( *formulaString* : Text ) : 4D.Function<br/>**Formula from string**( *formulaString* : Text ; *context* : Longint ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->

| Parâmetro     | Tipo                         |     | Descrição                                                                                      |
| ------------- | ---------------------------- | :-: | ---------------------------------------------------------------------------------------------- |
| formulaString | Text                         |  -> | Fórmula texto a ser retornada como objeto                                                      |
| context       | Number                       |  -> | `sk execute in current database` (default) or `sk execute in host database` |
| Resultados    | 4D. Function |  <- | Objeto nativo encapsulando a fórmula                                                           |

<!-- END REF -->

#### Descrição

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a `4D.Function` object based upon the _formulaString_ and, optionnally, a _context_<!-- END REF -->.  _formulaString_ can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`Formula`](#formula), except that it handles a text-based formula and allows to define an execution context. It is usually recommended to use the `Formula` command, except if the original formula was expressed as text (e.g., stored externally in a JSON file), or if you want to create a formula in a host database while calling `Formula from string` from a component. É altamente recomendável usar a sintaxe com tokens com esse comando.

> Because local variable contents can not be accessed by name in compiled mode, they can not be used in _formulaString_. An attempt to access a local variable with `Formula from string` will result in an error (-10737).

If the formula is created in a component, you might consider using the _context_ parameter. Por padrão, dado que as fórmulas são executadas no contexto em que foram criadas, não conseguirá chamar uma variável, uma função ou um método não compartilhado do banco de dados host. In this case, you can pass the `sk execute in host database` constant in the _context_ parameter to execute the `4D.Function` object in the context of the host database. Estão disponíveis as seguintes constantes:

| Parâmetros                       | Tipo    | Descrição                                                                          |
| -------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| `sk execute in current database` | Longint | (padrão) A fórmula será executada no contexto em que foi criada |
| `sk execute in host database`    | Longint | A fórmula será executada no contexto do banco de dados do host                     |

#### Exemplo

O código abaixo cria um diálogo aceitando uma fórmula em formato texto:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)

...e executa a fórmula:

![](../assets/en/API/formulaAlert.png)

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R3   | Adicionado |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

| Parâmetro     | Tipo       |     | Descrição                                                                                                               |
| ------------- | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------- |
| thisObj       | Object     |  -> | Objeto a ser retornado pelo comando This na fórmula                                                                     |
| formulaParams | Collection |  -> | Collection of values to be passed as $1...$n when `formula` is executed |
| Resultados    | any        |  <- | Valores de execução de fórmula                                                                                          |

<!-- END REF -->

#### Descrição

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the _thisObj_ parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional _formulaParams_ parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. Isso pode ser útil para passar resultados calculados.

#### Exemplo 1

```4d
 var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // returns 60
```

#### Exemplo 2

```4d
 var $calc : 4D.Function
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

| Parâmetro  | Tipo   |    | Descrição                                                                                                            |
| ---------- | ------ | -- | -------------------------------------------------------------------------------------------------------------------- |
| thisObj    | Object | -> | Objeto a ser retornado pelo comando This na fórmula                                                                  |
| params     | any    | -> | Valores a serem passados como $1...$n quando a fórmula for executada |
| Resultados | any    | <- | Valores de execução de fórmula                                                                                       |

<!-- END REF -->

#### Descrição

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the _thisObj_ parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass values to be used as _$1...$n_ parameters in the formula using the optional _params_ parameter(s).

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### Exemplo 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
```

#### Exemplo 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // returns 100
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

This property is **read-only**.

#### Exemplo

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->
