---
id: FunctionClass
title: Function
---

Un objeto **`4D.Function`** contiene un trozo de código que puede ser ejecutado desde un objeto, ya sea utilizando el operador `()`, o utilizando las funciones [`apply()`](#apply) y [`call()`](#call). 4D propone tres tipos de objetos `Function`:

- **funciones nativas**, es decir, funciones integradas de varias clases 4D tales como `collection.sort()` o `file.copyTo()`.
- **funciones usuario**, creadas en [clases usuario](Concepts/classes.md) utilizando la [palabra clave Function](Concepts/classes.md#function).
- **funciones de fórmula**, es decir, funciones que pueden ejecutar cualquier fórmula 4D.

### Objetos fórmula

Los comandos [Formula](../commands/formula.md) y [Formula from string](../commands/formula-from-string.md) le permiten crear [objetos`4D.Function`](#about-4dfunction-objects) para ejecutar cualquier expresión 4D o código expresado como texto.

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

También puede ejecutar una función utilizando las funciones [`apply()`](#apply) y [`call()`](#call):

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
  //Escribir Formula(myMethod($1;$2)) no es necesario
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

Los parámetros se reciben en el método, en el orden en que se especifican en la llamada.

### Resumen

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R3       | Añadidos       |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

| Parámetros    | Tipo       |                             | Descripción                                                                                                                |
| ------------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------- |
| thisObj       | Object     |              ->             | Objeto a devolver por el comando This en la fórmula                                                                        |
| formulaParams | Collection |              ->             | Colección de valores que se pasan como $1...$n cuando se ejecuta `formula` |
| Result        | any        | <- | Valor obtenido de la ejecución de la fórmula                                                                               |

<!-- END REF -->

#### Descripción

La función `.apply()` <!-- REF #FunctionClass.apply().Summary -->ejecuta el objeto `formula` al que se aplica y devuelve el valor resultante<!-- END REF -->. El objeto formula puede ser creado utilizando los comandos `Formula` o `Formula from string`.

En el parámetro *thisObj*, puede pasar una referencia al objeto que se utilizará como `This` en la fórmula.

También puede pasar una colección que se utilizará como parámetros $1...$n en la fórmula utilizando el parámetro opcional *formulaParams*.

Tenga en cuenta que `.apply()` es similar a [`.call()`](#call) excepto que los parámetros se pasan como una colección. Esto puede ser útil para pasar los resultados calculados.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R3       | Añadidos       |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

| Parámetros | Tipo   |                             | Descripción                                                                                                                                              |
| ---------- | ------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| thisObj    | Object | ->                          | Objeto a devolver por el comando This en la fórmula                                                                                                      |
| params     | any    | ->                          | Valor(es) que se pasa(n) como $1...$n cuando se ejecuta la fórmula |
| Result     | any    | <- | Valor obtenido de la ejecución de la fórmula                                                                                                             |

<!-- END REF -->

#### Descripción

La función `.call()` <!-- REF #FunctionClass.call().Summary -->ejecuta el objeto `formula` al que se aplica y devuelve el valor resultante<!-- END REF -->. El objeto formula puede ser creado utilizando los comandos `Formula` o `Formula from string`.

En el parámetro *thisObj*, puede pasar una referencia al objeto que se utilizará como `This` en la fórmula.

También puede pasar valores para ser utilizados como parámetros *$1...$n* en la fórmula utilizando el parámetro opcional *params*.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### Descripción

La propiedad `.source` <!-- REF #FunctionClass.source.Summary -->contiene la expresión fuente de `formula` como texto<!--END REF -->.

Esta propiedad es de **solo lectura**.

#### Ejemplo

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->
