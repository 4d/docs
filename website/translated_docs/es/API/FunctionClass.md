---
id: FunctionClass
title: Formula
---



The [Formula](#formula) and [Formula from string](#formula-from-string) commands allow you to create native [`4D.Function` objects](#about-4dfunction-objects) to execute any 4D expression or code expressed as text.


### Objetos Formula

Formula objects can be encapsulated in object properties:

```4d
 var $f : 4D.Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

This property is an "object function", i.e. a function which is bound to its parent object. To execute a function stored in an object property, use the **()** operator after the property name, such as:

```4d
 $f.message() //muestra "Hello world"
```

También se admite la sintaxis con paréntesis:

```4d
 $f["message"]() //muestra "Hello world"
```

Note that, even if it does not have parameters (see below), an object function to be executed must be called with ( ) parenthesis. Llamar sólo a la propiedad del objeto devolverá una nueva referencia a la fórmula (y no la ejecutará):

```4d
 $o:=$f.message //devuelve el objeto fórmula en $o 
```

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call) functions:

```4d
 $f.message.apply() //muestra "Hello world"
```

#### Paso de parámetros

You can pass parameters to your formulas using the [sequential parameter syntax](Concepts/parameters.md#sequential-parameters) based upon $1, $2...$n. Por ejemplo, puede escribir:

```4d
 var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //muestra "Hello John"
```

Or using the [.call()](#call) function:

```4d
 var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2019" (for example)
```

#### Parameters to a single method

For more convenience, when the formula is made of a single project method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. Por ejemplo:

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

Parameters are received within the method, in the order they are specified in the call.

### Sobre los objetos 4D.Function

A `4D.Function` object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. 4D proposes three kinds of Function objects:

- native functions, i.e. built-in functions from various 4D classes such as `collection.sort()` or `file.copyTo()`.
- user functions, created in user [classes](Concepts/classes.md) using the [Function keyword](Concepts/classes.md#function).
- formula functions, i.e. functions that can execute any 4D formula.



### Resumen


|                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.apply().Summary -->|
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.call().Summary --> |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.source.Summary --> |




## Formula

<details><summary>Histórico</summary>
| Versión | Modificaciones                   |
| ------- | -------------------------------- |
| v17 R6  | Renamed (New formula -> Formula) |
| v17 R3  | Añadidos                         |
</details>

<!-- REF #_command_.Formula.Syntax -->
**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->
| Parámetros | Tipo        |    | Descripción                             |
| ---------- | ----------- |:--:| --------------------------------------- |
| formulaExp | Expresión   | -> | Fórmula a devolver como objeto          |
| Resultado  | 4D.Function | <- | Función nativa que encapsula la fórmula |
<!-- END REF -->


#### Descripción

El comando `Formula` <!-- REF #_command_.Formula.Summary -->crea un objeto `4D Function` basado en la expresión *formulaExp*<!-- END REF -->. *formulaExp* puede ser tan simple como un valor único o complejo, como un método proyecto con parámetros.

Tener una fórmula como objeto permite pasarla como parámetro (atributo calculado) a los comandos o a los métodos o ejecutarla desde varios componentes sin necesidad de declararla como "compartida por los componentes y la base de datos local". Cuando se llama, el objeto fórmula se evalúa en el contexto de la base de datos o del componente que lo creó.

La fórmula devuelta puede ser llamada con:

*   [`.call()`](#call) or [`.apply()`](#apply) methods, or
*   object notation syntax (see [formula object](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //three different ways to call the formula
 $f.call($o) //returns 3
 $f.apply($o) //returns 3
 $o.myFormula() //returns 3
```

Puede pasar los [parámetros](#passing-parameters) a `Formula`, como se muestra en [example-4">ejemplo 4](#example-4) abajo.

Se puede especificar el objeto sobre el que se ejecuta la fórmula, como se ve en el [ejemplo 5](#ejemplo-5). Se puede acceder a las propiedades del objeto mediante el comando `This`.

Si *formulaExp* utiliza variables locales, sus valores se copian y almacenan en el objeto fórmula devuelto durante su creación. Cuando se ejecuta, la fórmula utiliza estos valores copiados en lugar del valor actual de las variables locales. Tenga en cuenta que no se soporta el uso de arrays como variables locales.

El objeto creado por `Formula` puede guardarse, por ejemplo, en un campo de la base de datos o en un documento blob.


#### Ejemplo 1

Una fórmula simple:

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // devuelve 3
```

#### Ejemplo 2

Una fórmula utilizando variables locales:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // devuelve 10
```


#### Ejemplo 3

Una fórmula sencilla que utiliza parámetros:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //devuelve 30
```


#### Ejemplo 4

Una fórmula utilizando un método proyecto con parámetros:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```


#### Ejemplo 5

Utilizando `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //returns "John Smith"
```

#### Ejemplo 6

Llamar a una fórmula utilizando la notación de objetos:

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

<details><summary>Histórico</summary>
| Versión | Modificaciones                                             |
| ------- | ---------------------------------------------------------- |
| v17 R6  | Renombrado: New formula from string -> Formula from string |
| v17 R3  | Añadidos                                                   |
</details>

<!-- REF #_command_.Formula from string.Syntax -->
**Formula from string**( *formulaString* : Text ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->
| Parámetros    | Tipo        |    | Descripción                            |
| ------------- | ----------- |:--:| -------------------------------------- |
| formulaString | Texto       | -> | Fórmula texto a devolver como objeto   |
| Resultado     | 4D.Function | <- | Objeto nativo que encapsula la fórmula |
<!-- END REF -->


#### Descripción

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a 4D.Function object based upon the *formulaString*<!-- END REF -->.  *formulaString* can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`Formula`](#formula), except that it handles a text-based formula. In most cases, it is recommended to use the `Formula` command. `Formula from string` should only be used when the original formula was expressed as text (e.g., stored externally in a JSON file). In this context, using syntax with tokens is highly advised.
> Because local variable contents can not be accessed by name in compiled mode, they can not be used in *formulaString*. An attempt to access a local variable with `Formula from string` will result in an error (-10737).


#### Ejemplo

El siguiente código creará un diálogo que acepta una fórmula en formato texto:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](assets/en/API/formulaDialog.png)


...y ejecuta la fórmula:


![](assets/en/API/formulaAlert.png)






<!-- REF FunctionClass.apply().Desc -->
## .apply()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R3  | Añadidos       |
</details>

<!-- REF #FunctionClass.apply().Syntax -->
**.apply**() : any<br>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->
| Parámetros    | Tipo       |    | Descripción                                                                   |
| ------------- | ---------- |:--:| ----------------------------------------------------------------------------- |
| thisObj       | Objeto     | -> | Objeto a devolver por el comando This en la fórmula                           |
| formulaParams | Collection | -> | Colección de valores que se pasan como $1...$n cuando se ejecuta la `fórmula` |
| Resultado     | any        | <- | Valor obtenido de la ejecución de la fórmula                                  |
<!-- END REF -->


#### Descripción

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.


In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional *formulaParams* parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. This can be useful for passing calculated results.


#### Ejemplo 1

```4d
 var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // devuelve 60
```


#### Ejemplo 2

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R3  | Añadidos       |
</details>

<!-- REF #FunctionClass.call().Syntax -->
**.call**() : any<br>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->
| Parámetros | Tipo   |    | Descripción                                                        |
| ---------- | ------ | -- | ------------------------------------------------------------------ |
| thisObj    | Objeto | -> | Objeto a devolver por el comando This en la fórmula                |
| params     | any    | -> | Valor(es) que se pasa(n) como $1...$n cuando se ejecuta la fórmula |
| Resultado  | any    | <- | Valor obtenido de la ejecución de la fórmula                       |
<!-- END REF -->


#### Descripción

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass values to be used as *$1...$n* parameters in the formula using the optional *params* parameter(s).

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### Ejemplo 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
```

#### Ejemplo 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // devuelve 100
``` 

<!-- END REF -->



<!-- REF FunctionClass.source.Desc -->
## .source

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #FunctionClass.source.Syntax -->
**.source** : Text <!-- END REF -->


#### Descripción

La propiedad `.source` <!-- REF #FunctionClass.source.Summary -->contiene la expresión fuente de la `fórmula` como texto<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

#### Ejemplo

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
``` 



<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
