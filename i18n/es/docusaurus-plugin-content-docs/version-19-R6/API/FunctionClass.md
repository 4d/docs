---
id: FunctionClass
title: Formula
---



Los comandos [Formula](#formula) y [Formula from string](#formula-from-string) le permiten crear los [objetos `4D.Function`](#about-4dfunction-objects) para ejecutar toda expresión o código 4D expresado como texto.

### Objetos Formula

Los objetos Formula pueden encapsularse en las propiedades de objeto:

```4d
 var $f : 4D.Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

Esta propiedad es una "función objeto", es decir una función que está vinculada a su objeto padre. Para ejecutar una función almacenada en una propiedad objeto, utilice el operador **()** después del nombre de la propiedad, como:

```4d
 $f.message() //muestra "Hello world"
```

También se admite la sintaxis con paréntesis:

```4d
 $f["message"]() //muestra "Hello world"
```

Tenga en cuenta que, aunque no tenga parámetros (ver arriba), una función objeto a ejecutar debe ser llamada con paréntesis ( ). Llamar sólo a la propiedad del objeto devolverá una nueva referencia a la fórmula (y no la ejecutará):

```4d
 $o:=$f.message //devuelve el objeto fórmula en $o
```

Para ejecutar una función utilizando las funciones [`apply()`](#apply) y [`call()`](#call):

```4d
 $f.message.apply() //muestra "Hello world"
```

#### Paso de parámetros

Puede pasar parámetros a sus fórmulas utilizando la [sintaxis secuencial de los parámetros](Concepts/parameters.md#sequential-parameters) basada en $1, $2...$n. Por ejemplo, puede escribir:

```4d
 var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //muestra "Hello John"
```

O utilizando la función [.call()](#call):

```4d
 var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //devuelve "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //devuelve "Welcome to 2019" (por ejemplo)
```

#### Parámetros de un solo método

Para mayor comodidad, cuando la fórmula se compone de un único método proyecto, se pueden omitir los parámetros en la inicialización del objeto fórmula. Simplemente se pueden pasar la fórmula se llama. Por ejemplo:

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

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
```

Los parámetros se reciben en el método, en el orden en que se especifican en la llamada.

### Sobre los objetos 4D.Function

Un objeto `4D.Function` contiene un trozo de código que puede ser ejecutado desde un objeto, ya sea utilizando el operador `()`, o utilizando las funciones [`apply()`](#apply) y [`call()`](#call). 4D propone tres tipos de objetos Function:

- las funciones nativas, es decir, las funciones integradas de varias clases 4D tales como `collection.sort()` o `file.copyTo()`.
- las funciones usuario, creadas en las [clases](Concepts/classes.md) usuario utilizando la [palabra clave Function](Concepts/classes.md#function).
- las funciones de fórmula, es decir, las funciones que pueden ejecutar cualquier fórmula 4D.

### Resumen

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.apply().Summary -->|
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.call().Summary --> |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.source.Summary --> |

## Formula

<details><summary>Histórico</summary>

| Versión | Modificaciones                      |
| ------- | ----------------------------------- |
| v17 R6  | Renombrado (New formula -> Formula) |
| v17 R3  | Añadidos                            |

</details>

<!-- REF #_command_.Formula.Syntax -->

**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->
| Parámetros | Type        |    | Descripción                                                        |
| ---------- | ----------- |:--:| ------------------------------------------------------------------ |
| formulaExp | Expression  | -> | Fórmula a devolver como objeto                                     |
| Result     | 4D.Function | <- | Función nativa que encapsula la fórmula|<!-- END REF -->

|

#### Descripción

The `Formula` command <!-- REF #_command_.Formula.Summary -->creates a `4D Function` object based upon the *formulaExp* expression<!-- END REF -->. .

Tener una fórmula como objeto permite pasarla como parámetro (atributo calculado) a los comandos o a los métodos o ejecutarla desde varios componentes sin necesidad de declararla como "compartida por los componentes y la base de datos local". Cuando se llama, el objeto fórmula se evalúa en el contexto de la base de datos o del componente que lo creó.

La fórmula devuelta puede ser llamada con:

- los métodos [`.call()`](#call) o [`.apply()`](#apply), o
- object notation syntax (see [formula object](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //tres formas diferentes de llamar a la fórmula
 $f.call($o) //devuelve 3
 $f.apply($o) //devuelve 3
 $o.myFormula() //devuelve 3
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
 $result:=$o.f("param1";"param2") // equivalente a $result:=myMethod("param1";"param2")
```

#### Ejemplo 5

Utilizando `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //devuelve "John Smith"
```

#### Ejemplo 6

Llamar a una fórmula utilizando la notación de objetos:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //define la fórmula de las propiedades del objeto
 $feta.calc:=$calc
 $robot.calc:=$calc

  //llama la fórmula
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
| Parámetros    | Type        |    | Descripción                                                        |
| ------------- | ----------- |:--:| ------------------------------------------------------------------ |
| formulaString | Text        | -> | Fórmula texto a devolver como objeto                               |
| Result        | 4D.Function | <- | Native object encapsulating the formula|<!-- END REF -->

|

#### Descripción

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a 4D.Function object based upon the *formulaString*<!-- END REF -->.  .

Este comando es similar a [`Formula`](#formula), excepto que maneja una fórmula basada en texto. En la mayoría de los casos, se recomienda utilizar el comando `Formula`. `Formula from string` sólo debe utilizarse cuando la fórmula original fue expresada como texto (por ejemplo, almacenada externamente en un archivo JSON). En este contexto, el uso de la sintaxis con tokens es muy aconsejable.
> Dado que no se puede acceder al contenido de las variables locales por su nombre en el modo compilado, no se pueden utilizar en *formulaString*. Un intento de acceder a una variable local con `Formula from string` dará lugar a un error (-10737).

#### Ejemplo

El siguiente código creará un diálogo que acepta una fórmula en formato texto:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Por favor, escriba una fórmula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)

...y ejecuta la fórmula:

![](../assets/en/API/formulaAlert.png)

<!-- REF FunctionClass.apply().Desc -->
## .apply()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R3  | Añadidos       |

</details>

<!-- REF #FunctionClass.apply().Syntax -->

**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->
| Parámetros    | Type       |    | Descripción                                                                   |
| ------------- | ---------- |:--:| ----------------------------------------------------------------------------- |
| thisObj       | Object     | -> | Objeto a devolver por el comando This en la fórmula                           |
| formulaParams | Collection | -> | Colección de valores que se pasan como $1...$n cuando se ejecuta la `fórmula` |
| Result        | any        | <- | Value from formula execution|<!-- END REF -->

|

#### Descripción

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. .

En el parámetro *thisObj*, puede pasar una referencia al objeto que se utilizará como `This` dentro de la fórmula.

También puede pasar una colección que se utilizará como parámetros $1...$n en la fórmula utilizando el parámetro opcional *formulaParams*.

Tenga en cuenta que `.apply()` es similar a [`.call()`](#call) excepto que los parámetros se pasan como una colección. Esto puede ser útil para pasar los resultados calculados.

#### Ejemplo 1

```4d
 var $f : 4D.Function

 $f:=Formula(myMethod)
  //Writing Formula(myMethod($1;$2)) no es necesario
 $text:=$f.call(Null;"Hello";"World") //devuelve "Hello World"
 $text:=$f.call() //devuelve "How are you?"

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
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

**.call**() : any<br/>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->
| Parámetros | Type   |    | Descripción                                                        |
| ---------- | ------ | -- | ------------------------------------------------------------------ |
| thisObj    | Object | -> | Objeto a devolver por el comando This en la fórmula                |
| params     | any    | -> | Valor(es) que se pasa(n) como $1...$n cuando se ejecuta la fórmula |
| Result     | any    | <- | Value from formula execution|<!-- END REF -->

|

#### Descripción

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. .

En el parámetro *thisObj*, puede pasar una referencia al objeto que se utilizará como `This` dentro de la fórmula.

También puede pasar los valores a utilizar como parámetros *$1...$n* en la fórmula utilizando el parámetro opcional *params*).

Tenga en cuenta que `.call()` es similar a [`.apply()`](#apply) excepto que los parámetros se pasan directamente.

#### Ejemplo 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // devuelve "HELLO"
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

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source expression of the `formula` as text<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

#### Ejemplo

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->
