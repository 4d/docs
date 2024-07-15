---
id: operators
title: Operadores
---

Um operador é um símbolo ou um grupo de símbolos que é utilizado para verificar, modificar ou combinar valores. Já está familiarizado com muitos operadores. Por ejemplo, `1 + 2` utiliza el operador de adición (o signo más) para sumar dos números, y el resultado es 3. Los operadores de comparación, como = o >, le permiten comparar dos o más valores.

A linguagem 4D suporta os operadores que talvez já conheça de outras linguagens como C ou JavaScript. Sin embargo, el operador de asignación es `:=` para evitar que se utilice de forma errónea cuando el operador "igual a" (`=`) está planeado. [Basic operators](#basic-operators) such as arithmetic operators (+, -, \*, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Al igual que JavaScript, el lenguaje 4D soporta el concepto de valores [truthy y falsy](#truthy-and-falsy), que se utilizan en [los operadores de corto-cicrcuit](#short-circuit-operators).

## Terminologia

El lenguaje 4D soporta los operadores **binarios** y **ternarios**:

- los operadores binarios operan en dos objetivos (como `2 + 3`) y aparecen entre sus dos objetivos.
- os operadores ternários operam em três objectivos. Like C, 4D has only one ternary operator, the [ternary conditional operator](#ternary-operator) (`a ? b : c`).

Os valores que os operadores afectam são os operandos. En la expresión `1 + 2`, el símbolo + es un operador binario y sus dos operandos son los valores 1 y 2.

## Operador de atribuição

El **operador de asignación** (`a:=b`) inicializa o actualiza el valor de `a` con el valor de `b`:

```4d
$myNumber:=3 //assigns 3 to MyNumber variable  
$myDate:=!2018/01/21! //assigns a date literal
$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength
$col:=New collection //$col is initialized with an empty collection
```

> NO confunda el operador de asignación `:=` con el operador de comparación de igualdad `=`. Se ha elegido deliberadamente un operador de asignación diferente (y no `=`) para evitar los problemas y la confusión que suelen producirse con == o === en otros lenguajes de programación. Esses erros são geralmente difíceis de reconhecer pelo compilador e geram problemas trabalhosos.

## Operadores básicos

Los resultados del operador dependen de los **tipos de datos** a los que se aplican. 4D soporta diferentes operadores en tipos de datos escalares. São descritos com os tipos de dados, nas secções seguintes:

- [**Operadores lógicos**](dt_boolean.md#logical-operators) (em expressões **booleanas**)
- [**Date operators**](dt_date.md#date-operators)
- [**Time operators**](dt_time.md#time-operators)
- [**Number operators**](dt_number.md#number-operators)
- [**Bitwise operators**](dt_number.md#bitwise-operators) (on **long integer** expressions)
- [**Operadores em imagens**](dt_picture.md#operadores-em-imagens)
- [**Operadores em ponteiros**](dt_pointer.md#operadores-em-ponteiros)
- [**String operators**](dt_string.md#string-operators)
- [**Operadores null**](dt_null_undefined.md#operadores-null)
- [**Undefined operators**](dt_null_undefined.md#undefined-operators)

## Operadores de atribuição compostos

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

4D ofrece **operadores de asignación compuestos** que combinan la asignación con otra operación. Um exemplo é o operador de atribuição de adição (`+=`):

```4d
$a:=1 
$a+=2 // $a=3
```

São suportados os seguintes operadores de atribuição compostos:

| Operador      | Sintaxe            | Atribuições | Exemplo                                                                    |
| ------------- | ------------------ | ----------- | -------------------------------------------------------------------------- |
| Adição        | Text += Text       | Text        | `$t+=" World"  //$t:=$t+" World"`                                          |
|               | Number += Number   | Number      | `$n+=5 //$n:=$n+5`                                                         |
|               | Date += Number     | Date        | `$d+=5 //$d:=$d+5`                                                         |
|               | Time += Time       | Hora        | `$t1+=$t2 //$t1:=$t1+$t2`                                                  |
|               | Time += Number     | Number      | `$t1+=5 //$t1:=$t1+5`                                                      |
|               | Picture += Picture | Imagem      | `$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)`                    |
|               | Picture += Number  | Imagem      | `$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)`        |
| Subtração     | Number -= Number   | Number      | `$n-=5 //$n:=$n-5`                                                         |
|               | Date -= Number     | Date        | `$d-=5 //$d:=$d-5`                                                         |
|               | Time -= Time       | Hora        | `$t1-=$t2 //$t1:=$t1-$t2`                                                  |
|               | Time -= Number     | Number      | `$t1-=5 //$t1:=$t1-5`                                                      |
|               | Picture -= Number  | Imagem      | `$p1-=5 //$p1:=$p1-5 (mover horizontalmente $p1 5 pixels para a esquerda)` |
| Divisão       | Number /= Number   | Number      | `$n/=5 //$n:=$n/5`                                                         |
|               | Time /= Time       | Hora        | `$t1/=$t2 //$t1:=$t1/$t2`                                                  |
|               | Time /= Number     | Number      | `$t1/=5 //$t1:=$t1/5`                                                      |
|               | Picture /= Picture | Imagem      | `$p1/=$p2 //$p1:=$p1/$p2 (adicione $p2 ao fundo de $p1)`                   |
|               | Picture /= Number  | Imagem      | `$p1/=5 //$p1:=$p1/5 (mover $p1 verticalmente 5 pixels)`                   |
| Multiplicação | Text \*= Number    | Text        | `$t*="abc"  //$t:=$t*"abc"`                                                |
|               | Number \*= Number  | Number      | `$n*=5 //$n:=$n*5`                                                         |
|               | Time \*= Time      | Hora        | `$t1*=$t2 //$t1:=$t1*$t2`                                                  |
|               | Time \*= Number    | Number      | `$t1*=5 //$t1:=$t1*5`                                                      |
|               | Picture \*= Number | Imagem      | `$p1*=5 //$p1:=$p1*5 (redimensionar $p1 por 5)`                            |

Estos operadores se aplican a todas las [expresiones asignables](quick-tour.md#assignable-vs-non-assignable-expressions) (excepto de las imágenes como propiedades de objeto o elementos de colección).

La operación "source `operator` value" no es estrictamente equivalente a "source := source `operator` value" porque la expresión que designa la fuente (variable, campo, propiedad del objeto, elemento de colección) sólo se evalúa una vez. Por ejemplo, en una expresión tal como `getPointer()->+=1` el método `getPointer` es llamado sólo una vez.

> [La indexación de caracteres en el texto](dt_string.md#character-reference-symbols) y [la indexación de bytes en el blob](dt_blob.md#accessing-a-scalar-blobs-bytes) no soporta a estos operadores.

#### Exemplos

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

```

## Operadores curto-circuito

Los operadores **&&** y **||** son los **operadores en cortocircuito**. Um operador de curto-circuito é aquele que não avalia necessariamente todos os seus operandos.

The difference with the single [**&** and **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** don't return a boolean value. Evalúan las expresiones como [truthy o falsy](#truthy-and-falsy), y luego devuelven una de las expresiones.

### Operador em curto-circuito AND (&&)

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

A regra é a seguinte:

Dado `Expr1 && Expr2`:

El operador en cortocircuito AND evalúa los operandos de izquierda a derecha, devolviendo inmediatamente el valor del primer operando falso que encuentra; si todos los valores son [truthy](#truthy-and-falsy), se devuelve el valor del último operando.

La siguiente tabla resume los diferentes casos para el operador **&&**:

| Expr1  | Expr2  | Valor devolvido |
| ------ | ------ | --------------- |
| truthy | truthy | Expr2           |
| truthy | falsy  | Expr2           |
| falsy  | truthy | Expr1           |
| falsy  | falsy  | Expr1           |

#### Exemplo 1

```4d
var $v : Variant

$v:= "Hello" && "World" //"World"
$v:=False && 0 // False
$v:=0 && False // False
$v:=5 && !00-00-00! // 00/00/00
$v := 5 && 10 && "hello" //"hello"
```

#### Exemplo 2

Digamos que tem uma loja online e que alguns produtos têm uma taxa de imposto aplicada e outros não.

Para calcular o imposto, multiplica-se o preço pela taxa de imposto, que pode não ter sido especificada.

Portanto, pode escrever isto:

```4d
var $tax : Variant

$tax:=$item.taxRate && ($item.price*$item.taxRate)
```

`$tax` sera NULL si taxRate es NULL (o indefinido), de lo contrario almacenará el resultado del cálculo.

#### Exemplo 3

Os operadores de curto-circuito são úteis em provas como:

```4d
Se(($myObject#Null) && ($myObject.value>10))
	//código
Fim se
```

Se $myObject for nulo, o segundo argumento não é executado e, por conseguinte, não é lançado qualquer erro.

### Operador em curto-circuito OR (||)

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

O operador || devolve o valor de um dos operandos especificados. A expressão é avaliada da esquerda para a direita e testada para uma possível avaliação de "curto-circuito" utilizando a seguinte regra:

Dado `Expr1 || Expr2`:

Si Expr1 es [truthy](#truthy-and-falsy), Expr2 no se evalúa y el cálculo devuelve Expr1.

Si Expr1 es [falsy](#truthy-and-falsy), el cálculo devuelve Expr2.

La siguiente tabla resume los diferentes casos y el valor devuelto por el operador **||**:

| Expr1  | Expr2  | Valor devolvido |
| ------ | ------ | --------------- |
| truthy | truthy | Expr1           |
| truthy | falsy  | Expr1           |
| falsy  | truthy | Expr2           |
| falsy  | falsy  | Expr2           |

#### Exemplo 1

Digamos que tem uma tabela chamada Employee. Alguns empregados introduziram um número de telefone e outros não. Esto significa que `$emp.phone` podría ser NULL, y no se puede asignar NULL a una variable texto. Mas pode escrever o seguinte:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

En este caso, `$phone` almacenará un número de teléfono o la cadena "n/a".

#### Exemplo 2

Dada una tabla llamada Person con un campo _name_, así como un campo _maiden name_ para las mujeres casadas.

O exemplo seguinte verifica se existe um nome de solteira e armazena-o numa variável; caso contrário, armazena simplesmente o nome da pessoa:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Precedência

Los operadores `&&` y `||` tienen la misma prioridad que los operadores lógicos `&` y `|`, y se evalúan de izquierda a derecha.

Esto significa que `a || b && c` se evalúa como `(a || b) && c`.

## Operador ternário

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

O operador condicional ternário permite-lhe escrever expressões condicionais de uma linha. Por ejemplo, puede reemplazar una secuencia completa de instrucciones [If…Else](flow-control.md#ifelseend-if).

Aceita três operandos na seguinte ordem:

- uma condição seguida de um ponto de interrogação (?)
- una expresión a ejecutar si la condición es [truthy](#truthy-and-falsy), seguida de dos puntos (:)
- una expresión a ejecutar si la condición es [falsy](#truthy-and-falsy)

### Sintaxe

A sintaxe é a seguinte:

`condition ? exprIfTruthy : exprIfFalsy`

> Dado que la [sintaxis con tokens](https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html) utiliza dos puntos, se recomienda insertar un espacio después de los dos puntos `:` o encerrar los tokens utilizando paréntesis para evitar cu

### Exemplos

#### Um exemplo simple

```4d
var $age : Integer
var $beverage : Text

$age:=26
$beverage:=($age>=21) ? "Beer" : "Juice"

ALERT($beverage) // "Beer"
```

#### Tratamento de dados de uma tabela

Este exemplo armazena o nome completo de uma pessoa numa variável e trata do caso em que não foi especificado o primeiro nome ou o último nome:

```4d
var $fullname : Text

// If one of the names is missing, store the one that exists, otherwise store an empty string
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy e falsy

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

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
- "" - Empty strings
- [] - Colecções vazias
- {} - Objectos vazios

Todos los demás valores se consideran **truthy**, incluyendo:

- 0 - zero numérico (inteiro ou não)

En 4D, la evaluación **truthy** y **falsy** refleja la **usabilidad** de un valor, lo que significa que un valor truthy existe y puede ser procesado por el código sin generar errores o resultados inesperados. La razón de ser de esto es ofrecer una forma conveniente de manejar valores _undefined_ y _null_ en objetos y colecciones, de modo que un número reducido de instrucciones [If…Else](flow-control.md#ifelseend-if) sean necesarias para evitar errores de ejecu

Por ejemplo, cuando se utiliza un operador en [cortocircuito OR](#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... you get the default value whenever _$object_ does not contain the `value` property OR when it is _null_. Assim, este operador verifica a existência ou a possibilidade de utilização do valor em vez de um valor específico. Obsérvese que como el valor numérico 0 existe y es utilizable, no se le da un tratamiento especial, por lo que es **truthy**.

En cuanto a los valores que representan las colecciones, los objetos o las cadenas, los valores "vacíos" se consideran como **falsy**. É útil quando se pretende atribuir um valor por defeito sempre que se encontra um valor vazio.

```4d
$phone:=$emp.phone || "n/a"
```
