---
id: operators
title: Operadores
---

Un operador es un símbolo o un grupo de símbolos que utiliza para verificar, modificar o combinar los valores. Usted ya conoce a la mayoría de los operadores. Por ejemplo, `1 + 2` utiliza el operador de adición (o signo más) para sumar dos números, y el resultado es 3. Los operadores de comparación, como = o >, le permiten comparar dos o más valores.

El lenguaje 4D es compatible con los operadores que ya conoce de otros lenguajes como C o JavaScript. Sin embargo, el operador de asignación es `:=` para evitar que se utilice de forma errónea cuando el operador "igual a" (`=`) está planeado. [Los operadores básicos](#basic-operators) como los operadores aritméticos (+, -, *, /, %...) y los operadores de comparación (=, >, >=.) puede utilizarse con números, pero también con datos booleanos, textos, fecha, hora, puntero o imagen. Al igual que JavaScript, el lenguaje 4D soporta el concepto de valores [truthy y falsy](#truthy-and-falsy), que se utilizan en [los operadores de corto-cicrcuit](#short-circuit-operators).


## Terminología

El lenguaje 4D soporta los operadores **binarios** y **ternarios**:

- los operadores binarios operan en dos objetivos (como `2 + 3`) y aparecen entre sus dos objetivos.
- los operadores ternarios operan en tres objetivos. Like C, 4D has only one ternary operator, the [ternary conditional operator](#ternary-operator) (`a ? b : c`).

Los valores que los operadores afectan son los operandos. En la expresión `1 + 2`, el símbolo + es un operador binario y sus dos operandos son los valores 1 y 2.



## Asignación

El **operador de asignación** (`a:=b`) inicializa o actualiza el valor de `a` con el valor de `b`:

```4d
$myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! $myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection $myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection $myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection $myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection
```

> NO confunda el operador de asignación `:=` con el operador de comparación de igualdad `=`. Se ha elegido deliberadamente un operador de asignación diferente (y no `=`) para evitar los problemas y la confusión que suelen producirse con == o === en otros lenguajes de programación. Estos errores son a menudo difíciles de reconocer por el compilador y conducen a una solución de problemas que requiere mucho tiempo.


## Operadores básicos

Los resultados del operador dependen de los **tipos de datos** a los que se aplican. 4D soporta diferentes operadores en tipos de datos escalares. Se describen con los tipos de datos, en las siguientes secciones:

- [**Operadores lógicos**](dt_boolean.md#logical-operators) (en las expresiones **booleanas**)
- [**Operadores de fechas**](dt_date.md#date-operators)
- [**Operadores de horas**](dt_time.md#time-operators)
- [**Operadores numéricos**](dt_number.md#number-operators)
- [**Operadores binarios**](dt_number.md#bitwise-operators) (en las expresiones **de enteros largos**)
- [**Operadores de imágenes**](dt_picture.md#picture-operators)
- [**Operadores en punteros**](dt_pointer.md#pointer-operators)
- [**Operadores de cadenas**](dt_string.md#string-operators)


## Operadores de asignación compuestos

4D ofrece **operadores de asignación compuestos** que combinan la asignación con otra operación. Un ejemplo es el operador de asignación adicional (`+=`):

```4d
$a:=1 
$a+=2 // $a=3
```


Se admiten los siguientes operadores de asignación compuestos:

| Operador       | Sintaxis           | Asigna  | Ejemplo                                                                        |
| -------------- | ------------------ | ------- | ------------------------------------------------------------------------------ |
| Adición        | Text += Text       | Text    | `$t+=" World"  //$t:=$t+" World"`                                              |
|                | Number += Number   | Number  | `$n+=5 //$n:=$n+5`                                                             |
|                | Date += Number     | Fecha   | `$d+=5 //$d:=$d+5`                                                             |
|                | Time += Time       | Hora    | `$t1+=$t2 //$t1:=$t1+$t2`                                                      |
|                | Time += Number     | Number  | `$t1+=5 //$t1:=$t1+5`                                                          |
|                | Picture += Picture | Picture | `$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)`                        |
|                | Picture += Number  | Picture | `$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)`            |
| Resta          | Number -= Number   | Number  | `$n-=5 //$n:=$n-5`                                                             |
|                | Date -= Number     | Fecha   | `$d-=5 //$d:=$d-5`                                                             |
|                | Time -= Time       | Hora    | `$t1-=$t2 //$t1:=$t1-$t2`                                                      |
|                | Time -= Number     | Number  | `$t1-=5 //$t1:=$t1-5`                                                          |
|                | Picture -= Number  | Picture | `$p1-=5 //$p1:=$p1-5 (mover horizontalemente $p1 de 5 píxeles a la izquierda)` |
| División       | Number /= Number   | Number  | `$n/=5 //$n:=$n/5`                                                             |
|                | Time /= Time       | Hora    | `$t1/=$t2 //$t1:=$t1/$t2`                                                      |
|                | Time /= Number     | Number  | `$t1/=5 //$t1:=$t1/5`                                                          |
|                | Picture /= Picture | Picture | `$p1/=$p2 //$p1:=$p1/$p2 (añadir $p2 debajo de $p1)`                           |
|                | Picture /= Number  | Picture | `$p1/=5 //$p1:=$p1/5 (desplazar verticalmente $p1 de 5 píxeles)`               |
| Multiplicación | Text *= Number     | Text    | `$t*="abc"  //$t:=$t*"abc"`                                                    |
|                | Number *= Number   | Number  | `$n*=5 //$n:=$n*5`                                                             |
|                | Time *= Time       | Hora    | `$t1*=$t2 //$t1:=$t1*$t2`                                                      |
|                | Time *= Number     | Number  | `$t1*=5 //$t1:=$t1*5`                                                          |
|                | Picture *= Number  | Picture | `$p1*=5 //$p1:=$p1*5 (redimensionar $p1 de 5)`                                 |

Estos operadores se aplican a todas las [expresiones asignables](quick-tour.md#assignable-vs-non-assignable-expressions) (excepto de las imágenes como propiedades de objeto o elementos de colección).

La operación "source `operator` value" no es estrictamente equivalente a "source := source `operator` value" porque la expresión que designa la fuente (variable, campo, propiedad del objeto, elemento de colección) sólo se evalúa una vez. Por ejemplo, en una expresión tal como `getPointer()->+=1` el método `getPointer` es llamado sólo una vez.

> [La indexación de caracteres en el texto](dt_string.md#character-reference-symbols) y [la indexación de bytes en el blob](dt_blob.md#accessing-a-scalar-blobs-bytes) no soporta a estos operadores.
#### Ejemplos

```4d
// Addition
$x:=2
$x+=5 //$x=7

$t:="Hello" 
$t+=" World" //$t="Hello World" 

$d:=!2000-11-10!
$d+=10 //$d=!2000-11-20!

// Subtraction
$x1:=10
$x1-=5 //$x1=5

$d1:=!2000-11-10!
$d1-=10 // $d1=!2000-10-31!

// Division
$x3:=10
$x3/=2 // $x3=5


// Multiplication
$x2:=10
$x2*=5 // $x2=10

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"
$d+=10 //$d=!2000-11-20!

// Resta
$x1:=10
$x1-=5 //$x1=5

$d1:=!2000-11-10!
$d1-=10 // $d1=!2000-10-31!

// División
$x3:=10
$x3/=2 // $x3=5


// Multiplicación
$x2:=10
$x2*=5 // $x2=10

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```




## Short-circuit operators

The **&&** and **||** operators are **short circuit operators**. A short circuit operator is one that doesn't necessarily evaluate all of its operands.

The difference with the single [**&** and **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** don't return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

### Short-circuit AND operator (&&)

La regla es la siguiente:

Dado `Expr1 && Expr2`:

The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are [truthy](#truthy-and-falsy), the value of the last operand is returned.

The following table summarizes the different cases for the **&&** operator:

| Expr1  | Expr2  | Valor devuelto |
| ------ | ------ | -------------- |
| truthy | truthy | Expr2          |
| truthy | falsy  | Expr2          |
| falsy  | truthy | Expr1          |
| falsy  | falsy  | Expr1          |

#### Ejemplo 1

```4d
var $v : Variant

$v:= "Hello" && "World" //"World"
$v:=False && 0 // False
$v:=0 && False // False
$v:=5 && !00-00-00! // 00/00/00
$v := 5 && 10 && "hello" //"hello" // 00/00/00
$v := 5 && 10 && "hello" //"hello"
```

#### Ejemplo 2

Say you have an online store, and some products have a tax rate applied, and others don't.

To calculate the tax, you multiply the price by the tax rate, which may not have been specified.

Así que puede escribir esto:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation.

#### Ejemplo 3

Short-circuit operators are useful in tests such as:

```4d
If(($myObject#Null) && ($myObject.value>10))
    //code
End if
```

If $myObject is Null, the second argument is not executed, thus no error is thrown.

### Short-circuit OR operator (||)

El operador || devuelve el valor de uno de los operandos especificados. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:

Dado `Expr1 || Expr2`:

If Expr1 is [truthy](#truthy-and-falsy), Expr2 is not evaluated and the calculation returns Expr1.

Si Expr1 es [falsy](#truthy-and-falsy), el cálculo devuelve Expr2.

La siguiente tabla resume los diferentes casos y el valor devuelto por el operador **||**:

| Expr1  | Expr2  | Valor devuelto |
| ------ | ------ | -------------- |
| truthy | truthy | Expr1          |
| truthy | falsy  | Expr1          |
| falsy  | truthy | Expr2          |
| falsy  | falsy  | Expr2          |

#### Ejemplo 1

Supongamos que tiene una tabla llamada Employee. Algunos empleados han introducido un número de teléfono y otros no. Esto significa que `$emp.phone` podría ser NULL, y no se puede asignar NULL a una variable texto. Pero puede escribir lo siguiente:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

En este caso, `$phone` almacenará un número de teléfono o la cadena "n/a".

#### Ejemplo 2

Dada una tabla llamada Person con un campo *name*, así como un campo *maiden name* para las mujeres casadas.

El siguiente ejemplo comprueba si hay un apellido de soltera y lo almacena en una variable, de lo contrario simplemente almacena el nombre de la persona:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Prioridad

Los operadores `&&` y `||` tienen la misma prioridad que los operadores lógicos `&` y `|`, y se evalúan de izquierda a derecha.

Esto significa que `a || b && c` se evalúa como `(a || b) && c`.


## Operador ternario

El operador condicional ternario permite escribir expresiones condicionales de una línea. Por ejemplo, puede reemplazar una secuencia completa de instrucciones [If…Else](./cf_branching.md#ifelseend-if).

Se necesitan tres operandos en el siguiente orden:

* una condición seguida de un signo de interrogación (?)
* una expresión a ejecutar si la condición es [truthy](#truthy-and-falsy), seguida de dos puntos (:)
* una expresión a ejecutar si la condición es [falsy](#truthy-and-falsy)

### Sintaxis

La sintaxis es la siguiente:

`condition ? condition ? exprIfTruthy : exprIfFalsy condition ? exprIfTruthy : exprIfFalsy condition ? exprIfTruthy : exprIfFalsy`

> Dado que la [sintaxis con tokens](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html) utiliza dos puntos, se recomienda insertar un espacio después de los dos puntos `:` o encerrar los tokens utilizando paréntesis para evitar cualquier conflicto.

### Ejemplos

#### Un ejemplo sencillo

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer" "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### Gestión de los datos de una tabla

Este ejemplo almacena el nombre completo de una persona en una variable, y maneja el caso cuando no se ha especificado el nombre o el apellido:

```4d
var $fullname : Text

// If one of the names is missing, store the one that exists, otherwise store an empty string
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || "" ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy y falsy

Además de un tipo, cada valor también tiene un valor booleano inherente, conocido generalmente como **truthy** o **falsy<**.

> Los valores **truthy** y **falsy** sólo son evaluados por los operadores [en cortocircuito](#short-circuit-operators) y [ternarios](#ternary-operator).

Los siguientes valores son **falsy**:

* false
* Null
* indefinido
* Null object
* Null collection
* Null pointer
* Null picture
* Null date !00-00-00!
* "" - Cadenas vacías
* [] - Colecciones vacías
* {} - Objetos vacios

Todos los demás valores se consideran **truthy**, incluyendo:

* 0 - cero numérico (Entero u otro)

En 4D, la evaluación **truthy** y **falsy** refleja la **usabilidad** de un valor, lo que significa que un valor truthy existe y puede ser procesado por el código sin generar errores o resultados inesperados. La razón de ser de esto es proporcionar una forma conveniente de manejar *valores no definidos* y *valores nulos* en objetos y colecciones, de modo que un número reducido de instrucciones [If…Else](./cf_branching.md#ifelseend-if) sean necesarias para evitar errores de ejecución.

Por ejemplo, cuando se utiliza un operador en [cortocircuito OR](#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... se obtiene el valor por defecto cada vez que *$object* no contenga la propieda `valor ` O cuando sea *null*. Por lo tanto, este operador comprueba la existencia o utilidad del valor en lugar de un valor específico. Obsérvese que como el valor numérico 0 existe y es utilizable, no se le da un tratamiento especial, por lo que es **truthy**.

En cuanto a los valores que representan las colecciones, los objetos o las cadenas, los valores "vacíos" se consideran como **falsy**. Es útil cuando se quiere asignar un valor por defecto cuando se encuentra un valor vacío.

```4d
$phone:=$emp.phone || "n/a"
```



