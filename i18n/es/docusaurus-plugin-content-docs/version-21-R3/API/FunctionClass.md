---
id: FunctionClass
title: Function
---

Un objeto **`4D.Function`** contiene un trozo de código que puede ser ejecutado desde un objeto, ya sea utilizando el operador `()`, o utilizando las funciones [`apply()`](#apply) y [`call()`](#call).

### Herencia

4D maneja varios tipos de objetos `Function`, que heredan de la clase **4D.Function**:

- las **funciones nativas**, es decir las funciones integradas de varias clases 4D como [`collection.sort()`](./CollectionClass.md#sort) o [`file.copyTo()`](./FileClass.md#copyto).
- **funciones usuario**, creadas en las [clases usuario](Concepts/classes.md) utilizando la [palabra clave `Function`](Concepts/classes.md#function).
- las **funciones de fórmula**, es decir, las funciones que pueden ejecutar un código de fórmula almacenado en los objetos [4D.Formula](./FormulaClass.md),
- las **funciones de método**, es decir, funciones que pueden ejecutar código fuente como texto almacenado en objetos [4D.Method](./MethodClass.md).

### Ejecución del código en los objetos Function

Los objetos Function pueden encapsularse en las propiedades de objeto:

```4d
var $message : 4D.Formula
$message:=Formula(ALERT("Hello world"))
$f:={message: $message}
```

Esta propiedad es una "función objeto", es decir una función que está vinculada a su objeto padre. Para ejecutar una función almacenada en una propiedad objeto, utilice el operador **()** después del nombre de la propiedad, como:

```4d
 $f.message() //muestra "Hello world"
```

También se admite la sintaxis con paréntesis:

```4d
 $f["message"]() //muestra "Hello world"
```

Tenga en cuenta que, aunque no tenga parámetros (ver arriba), una función objeto a ejecutar debe ser llamada con paréntesis `()`. Llamar sólo a la propiedad del objeto devolverá una nueva referencia a la fórmula (y no la ejecutará):

```4d
 $o:=$f.message //devuelve el objeto función en $o
```

También puede ejecutar una función utilizando [`apply()`](#apply) y [`call()`](#call):

```4d
 $message.apply() //muestra "Hello world"
```

### Resumen

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                |
| ----------- | --------------------------------------------- |
| 21 R3       | Soporte de objetos 4D.Methods |
| 17 R3       | Añadidos                                      |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *params* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

<div class="no-index">

| Parámetros | Tipo       |                             | Descripción                                                      |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------- |
| thisObj    | Object     |              ->             | Objeto a devolver por el comando `This` en la función            |
| params     | Collection |              ->             | Colección de valores que se pasarán como parámetros a la función |
| Resultado  | any        | <- | Valor de la ejecución de la función                              |

</div>
<!-- END REF -->

#### Descripción

La función `.apply()` <!-- REF #FunctionClass.apply().Summary -->ejecuta el objeto función al que se aplica, pasando los parámetros como una colección, y devuelve el valor resultante<!-- END REF -->.

En el parámetro *thisObj*, puede pasar una referencia al objeto que se utilizará como `This` en la función. Pasa Null si no quiere utilizar `This` pero quiere enviar parámetros.

Puede pasar una colección para utilizarla como parámetros en la función utilizando el parámetro opcional *params*:

- en los objetos `4D.Formula`, los parámetros se pasan en $1...$n en la fórmula.
- en los otros objetos `4D.Function` como los objetos `4D.Method`, los parámetros se pasan en [parámetros declarados](../Concepts/parameters.md).

Tenga en cuenta que `.apply()` es similar a [`.call()`](#call) excepto que los parámetros se pasan como una colección. Esto puede ser útil para pasar los resultados calculados.

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                |
| ----------- | --------------------------------------------- |
| 21 R3       | Soporte de objetos 4D.Methods |
| 17 R3       | Añadidos                                      |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; *...params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

<div class="no-index">

| Parámetros | Tipo   |                             | Descripción                                           |
| ---------- | ------ | --------------------------- | ----------------------------------------------------- |
| thisObj    | Object | ->                          | Objeto a devolver por el comando `This` en la función |
| params     | any    | ->                          | Valores a pasar como parámetros a la función          |
| Resultado  | any    | <- | Valor de la ejecución de la función                   |

</div>
<!-- END REF -->

#### Descripción

La función `.call()` <!-- REF #FunctionClass.call().Summary -->ejecuta el objeto función al que se aplica, con uno o más parámetros pasados directamente, y devuelve el valor resultante<!-- END REF -->.

En el parámetro *thisObj*, puede pasar una referencia al objeto que se utilizará como `This` en la función.

Puede pasar valores que se utilizarán como parámetros en la función utilizando el parámetro opcional *params*:

- en los objetos `4D.Formula`, los parámetros se pasan en $1...$n en la fórmula.
- en los objetos `4D.Method`, los parámetros se pasan en [parámetros declarados](../Concepts/parameters.md).

Tenga en cuenta que `.call()` es similar a [`.apply()`](#apply) excepto que los parámetros se pasan directamente.

<!-- END REF -->

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

<!-- REF FunctionClass.source.Desc -->

## .source

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                |
| ----------- | --------------------------------------------- |
| 21 R3       | Soporte de objetos 4D.Methods |
| 18 R2       | Añadidos                                      |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### Descripción

La propiedad `.source` <!-- REF #FunctionClass.source.Summary -->contiene el código fuente de la función como texto<!-- END REF -->.

El valor devuelto es el texto original utilizado para crear el objeto 4D.Formula o 4D.Method pero reformateado.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

#### Ejemplo

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```



