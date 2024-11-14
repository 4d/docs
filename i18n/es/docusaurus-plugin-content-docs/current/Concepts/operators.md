---
id: operators
title: Operadores
---

Un operador es un símbolo o un grupo de símbolos que utiliza para verificar, modificar o combinar los valores. Usted ya conoce a la mayoría de los operadores. Por ejemplo, `1 + 2` utiliza el operador de adición (o signo más) para sumar dos números, y el resultado es 3. Los operadores de comparación, como = o >, le permiten comparar dos o más valores.

El lenguaje 4D es compatible con los operadores que ya conoce de otros lenguajes como C o JavaScript. Sin embargo, el operador de asignación es `:=` para evitar que se utilice de forma errónea cuando el operador "igual a" (`=`) está planeado. Los [operadores básicos](#basic-operators) tales como los operadores aritméticos (+, -, \*, /, %...) y los operadores de comparación (=, >, >=...) puede utilizarse con datos de tipo numérico, pero también booleanos, texto, fecha, hora, puntero o imagen. Al igual que JavaScript, el lenguaje 4D soporta el concepto de valores [truthy y falsy](#truthy-and-falsy), que se utilizan en [los operadores de corto-cicrcuit](#short-circuit-operators).

## Terminología

El lenguaje 4D soporta los operadores **binarios** y **ternarios**:

- los operadores binarios operan en dos objetivos (como `2 + 3`) y aparecen entre sus dos objetivos.
- los operadores ternarios operan en tres objetivos. Like C, 4D has only one ternary operator, the [ternary conditional operator](#ternary-operator) (`a ? b : c`).

Los valores que los operadores afectan son los operandos. En la expresión `1 + 2`, el símbolo + es un operador binario y sus dos operandos son los valores 1 y 2.

## Asignación

El **operador de asignación** (`a:=b`) inicializa o actualiza el valor de `a` con el valor de `b`:

```4d
$myNumber:=3 //asigna 3 a la variable MyNumber
$myDate:=!2018/01/21! //asigna un literal de fecha
$myLength:=Length("Acme") //asigna el resultado del comando (4) a $myLength
$col:=New collection //$col se inicializa con una colección vacía
```

> NO confunda el operador de asignación `:=` con el operador de comparación de igualdad `=`. Se ha elegido deliberadamente un operador de asignación diferente (y no `=`) para evitar los problemas y la confusión que suelen producirse con == o === en otros lenguajes de programación. Estos errores son a menudo difíciles de reconocer por el compilador y conducen a una solución de problemas que requiere mucho tiempo.

## Operadores básicos

Los resultados del operador dependen de los **tipos de datos** a los que se aplican. 4D soporta diferentes operadores en tipos de datos escalares. Se describen con los tipos de datos, en las siguientes secciones:

- [**Operadores lógicos**](dt_boolean.md#logical-operators) (en expresiones **booleanas**)
- [**Operadores de fechas**](dt_date.md#operadores-de-fechas)
- [**Operadores de tiempo**](dt_time.md#time-operators)
- [**Operadores de números**](dt_number.md#number-operators)
- [**Operadores de bits**](dt_number.md#bitwise-operators) (en expresiones de tipo **entero largo**)
- [**Operadores de imágenes**](dt_picture.md#picture-operators)
- [**Operadores de punteros**](dt_pointer.md#pointer-operators)
- [**Operadores de cadenas**](dt_string.md#operadores-de-cadenas)
- [**Operadores en las referencias de objetos**](dt_object.md#object-operators)
- [**Operadores de referencia de colección**](dt_collection.md#collection-operators)
- [**Operadores null**](dt_null_undefined.md#operadores-null)
- [**Operadores Undefined**](dt_null_undefined.md#operadores-undefined)

## Operadores de asignación compuestos

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

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
| Multiplicación | Text \*= Number    | Text    | `$t*="abc"  //$t:=$t*"abc"`                                                    |
|                | Number \*= Number  | Number  | `$n*=5 //$n:=$n*5`                                                             |
|                | Time \*= Time      | Hora    | `$t1*=$t2 //$t1:=$t1*$t2`                                                      |
|                | Time \*= Number    | Number  | `$t1*=5 //$t1:=$t1*5`                                                          |
|                | Picture \*= Number | Picture | `$p1*=5 //$p1:=$p1*5 (redimensionar $p1 de 5)`                                 |

Estos operadores se aplican a todas las [expresiones asignables](quick-tour.md#assignable-vs-non-assignable-expressions) (excepto de las imágenes como propiedades de objeto o elementos de colección).

La operación "source `operator` value" no es estrictamente equivalente a "source := source `operator` value" porque la expresión que designa la fuente (variable, campo, propiedad del objeto, elemento de colección) sólo se evalúa una vez. Por ejemplo, en una expresión tal como `getPointer()->+=1` el método `getPointer` es llamado sólo una vez.

> [La indexación de caracteres en el texto](dt_string.md#character-reference-symbols) y [la indexación de bytes en el blob](dt_blob.md#accessing-a-scalar-blobs-bytes) no soporta a estos operadores.

#### Ejemplos

```4d
// Adición
$x:=2
$x+=5 //$x=7

$t:="Hola" 
$t+=" World" //$t="Hola Mundo" 

$d:=! ¡000-11-10!
$d+=10 //$d=!2000-11-20!

// Restar
$x1:=10
$x1-=5 //$x1=5

$d1:=!
$d1-=10 // $d1=!2000-10-31!

// División
$x3:=10
$x3/=2 // $x3=5


// Multiplicación
$x2:=10
$x2*=5 // $x2=50

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```

## Operadores en cortocircuito

Los operadores **&&** y **||** son los **operadores en cortocircuito**. Un operador en cortocircuito es aquel que no necesariamente evalúa todos sus operandos.

La diferencia con los [operadores booleanos simples **&** y **|**](dt_boolean.md#logical-operators) es que los operadores en cortocircuito **&&** y **||** no devuelven un valor booleano. Evalúan las expresiones como [truthy o falsy](#truthy-and-falsy), y luego devuelven una de las expresiones.

### Operador en corto-circuito AND (&&)

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

La regla es la siguiente:

Dado `Expr1 && Expr2`:

El operador en cortocircuito AND evalúa los operandos de izquierda a derecha, devolviendo inmediatamente el valor del primer operando falso que encuentra; si todos los valores son [truthy](#truthy-and-falsy), se devuelve el valor del último operando.

La siguiente tabla resume los diferentes casos para el operador **&&**:

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
$v := 5 && 10 && "hello" //"hello"
```

#### Ejemplo 2

Digamos que tiene una tienda en línea, y algunos productos tienen un tipo de impuesto aplicado, y otros no.

Para calcular el impuesto, se multiplica el precio por el tipo impositivo, que puede no haberse especificado.

Así que puede escribir esto:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` sera NULL si taxRate es NULL (o indefinido), de lo contrario almacenará el resultado del cálculo.

#### Ejemplo 3

Los operadores de cortocircuito son útiles en pruebas como:

```4d
If(($myObject#Null) && ($myObject.value>10))
	//código
End if
```

Si $myObject es Null, el segundo argumento no se ejecuta, por lo que no se lanza ningún error.

### Operador en corto-circuito OR (||)

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

El operador || devuelve el valor de uno de los operandos especificados. La expresión se evalúa de izquierda a derecha y se comprueba la posible evaluación en "cortocircuito" utilizando la siguiente regla:

Dado `Expr1 || Expr2`:

Si Expr1 es [truthy](#truthy-and-falsy), Expr2 no se evalúa y el cálculo devuelve Expr1.

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

Dada una tabla llamada Person con un campo _name_, así como un campo _maiden name_ para las mujeres casadas.

El siguiente ejemplo comprueba si hay un apellido de soltera y lo almacena en una variable, de lo contrario simplemente almacena el nombre de la persona:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Prioridad

Los operadores `&&` y `||` tienen la misma prioridad que los operadores lógicos `&` y `|`, y se evalúan de izquierda a derecha.

Esto significa que `a || b && c` se evalúa como `(a || b) && c`.

## Operador ternario

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

El operador condicional ternario permite escribir expresiones condicionales de una línea. Por ejemplo, puede reemplazar una secuencia completa de instrucciones [If…Else](flow-control.md#ifelseend-if).

Se necesitan tres operandos en el siguiente orden:

- una condición seguida de un signo de interrogación (?)
- una expresión a ejecutar si la condición es [truthy](#truthy-and-falsy), seguida de dos puntos (:)
- una expresión a ejecutar si la condición es [falsy](#truthy-and-falsy)

### Sintaxis

La sintaxis es la siguiente:

`condition ? condition ? exprIfTruthy : exprIfFalsy`

> Dado que la [sintaxis con tokens](https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html) utiliza dos puntos, se recomienda insertar un espacio después de los dos puntos `:` o encerrar los tokens utilizando paréntesis para evitar cu

### Ejemplos

#### Un ejemplo sencillo

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### Gestión de los datos de una tabla

Este ejemplo almacena el nombre completo de una persona en una variable, y maneja el caso cuando no se ha especificado el nombre o el apellido:

```4d
var $fullname : Text

// Si falta uno de los nombres, almacenar el que existe, de lo contrario almacenar una cadena vacía
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy y falsy

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

Además de un tipo, cada valor también tiene un valor booleano inherente, conocido generalmente como **truthy** o **falsy<**.

> Los valores **truthy** y **falsy** sólo son evaluados por los operadores [en cortocircuito](#short-circuit-operators) y [ternarios](#ternary-operator).

Los siguientes valores son **falsy**:

- false
- Null
- indefinido
- Null object
- Null collection
- Null pointer
- Null picture
- Null date !00-00-00!
- "" - Cadenas vacías
- [] - Colecciones vacías
- {} - Objetos vacios

Todos los demás valores se consideran **truthy**, incluyendo:

- 0 - cero numérico (Entero u otro)

En 4D, la evaluación **truthy** y **falsy** refleja la **usabilidad** de un valor, lo que significa que un valor truthy existe y puede ser procesado por el código sin generar errores o resultados inesperados. La razón de ser de esto es ofrecer una forma conveniente de manejar valores _undefined_ y _null_ en objetos y colecciones, de modo que un número reducido de instrucciones [If…Else](flow-control.md#ifelseend-if) sean necesarias para evitar errores de ejecu

Por ejemplo, cuando se utiliza un operador en [cortocircuito OR](#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... se obtiene el valor por defecto cada vez que _$object_ no contiene la propiedad `value` O cuando es _null_. Por lo tanto, este operador comprueba la existencia o utilidad del valor en lugar de un valor específico. Obsérvese que como el valor numérico 0 existe y es utilizable, no se le da un tratamiento especial, por lo que es **truthy**.

En cuanto a los valores que representan las colecciones, los objetos o las cadenas, los valores "vacíos" se consideran como **falsy**. Es útil cuando se quiere asignar un valor por defecto cuando se encuentra un valor vacío.

```4d
$phone:=$emp.phone || "n/a"
```
