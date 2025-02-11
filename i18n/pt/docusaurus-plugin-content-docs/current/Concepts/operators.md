---
id: operators
title: Operadores
---

Um operador é um símbolo ou um grupo de símbolos que é utilizado para verificar, modificar ou combinar valores. Já está familiarizado com muitos operadores. Por exemplo, `1 + 2` usa o operador de adição (ou sinal de mais) para somar dois números, e o resultado é 3. Os operadores de comparação, como = ou >, permitem que você compare dois ou mais valores.

A linguagem 4D suporta os operadores que talvez já conheça de outras linguagens como C ou JavaScript. No entanto, o operador de atribuição é `:=` para evitar que seja usado erroneamente quando o operador igual a (`=`) for pretendido. [Operadores básicos](#basic-operators) como os operadores aritméticos (+, -, \*, /, %...) e os operadores de comparação (=, >, >=...) pode ser usado com números, mas também com booleano, texto, data, hora, ponteiro ou tipos de dados da imagem. Como JavaScript, a linguagem 4D suporta o conceito de [valores truthy e falsos](#truthy-and-falsy), que em uso em [operadores de curta duração](#short-circuit-operators).

## Terminologia

A linguagem 4D suporta operadores **binários** e **ternários**:

- Os operadores binários operam em dois alvos (como `2 + 3`) e aparecem entre seus dois alvos.
- os operadores ternários operam em três objectivos. Como o C, o 4D tem apenas um operador ternário, o [operador condicional ternário] (#operador ternário) (`a ? b : c`).

Os valores que os operadores afectam são os operandos. Na expressão `1 + 2`, o símbolo + é um operador binário e seus dois operandos são os valores 1 e 2.

## Operador de atribuição

O **operador de atribuição** (`a:=b`) inicializa ou atualiza o valor de `a` com o valor de `b`:

```4d
$myNumber:=3 //atribui 3 à variável MyNumber  
$myDate:=!2018/01/21! //atribui um literal de data
$myLength:=Length("Acme") //atribui o resultado do comando (4) a $myLength
$col:=New collection //$col é inicializado com uma coleção vazia
```

> NÃO confunda o operador de atribuição `:=` com o operador de comparação de igualdade `=`. Um operador de atribuição diferente (e não `=`) foi escolhido deliberadamente para evitar problemas e confusões que geralmente ocorrem com == ou === em outras linguagens de programação. Esses erros são geralmente difíceis de reconhecer pelo compilador e geram problemas trabalhosos.

## Operadores básicos

Os resultados do operador dependem dos **tipos de dados** aos quais são aplicados. 4D suporta diferentes operadores em tipos de dados escalares. São descritos com os tipos de dados, nas secções seguintes:

- [**Operadores lógicos**](dt_boolean.md#logical-operators) (em expressões **booleanas**)
- [**Operadores de data**](dt_date.md#operadores-de-data)
- [**Operadores de tempo**](dt_time.md#operadores-de-tempo)
- [**Operadores de números**](dt_number.md#number-operators)
- [\*\*Operadores Bitwise \*\*](dt_number.md#bitwise-operators) (em \*\*expressões inteiras longas)
- [**Operadores em imagens**](dt_picture.md#operadores-em-imagens)
- [**Operadores em ponteiros**](dt_pointer.md#operadores-em-ponteiros)
- [**Operadores de string**](dt_string.md#string-operators)
- [**Operadores nas referências de objetos**](dt_object.md#object-operators)
- [**Operadores de referência de coleção**](dt_collection.md#collection-operators)
- [**Operadores null**](dt_null_undefined.md#operadores-null)
- [**Operadores indefinidos**](dt_null_undefined.md#undefined-operators)

## Operadores de atribuição compostos

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

4D oferece **operadores de atribuição composta** que combinam a atribuição com outra operação. Um exemplo é o operador de atribuição de adição (`+=`):

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

Esses operadores se aplicam a quaisquer [expressões atribuíveis] (quick-tour.md#assignable-vs-non-assignable-expressions) (exceto imagens como propriedades de objetos ou elementos de coleções).

A operação "source `operator` value" não é estritamente equivalente a "source := source `operator` value" porque a expressão que designa a fonte (variável, campo, propriedade de objeto, elemento de coleção) é avaliada apenas uma vez. Por exemplo, em expressões como `getPointer()->+=1` o método `getPointer` é chamado apenas uma vez.

> [Character indexing in text](dt_string.md#character-reference-symbols) e [byte indexing in blob](dt_blob.md#accessing-a-scalar-blobs-bytes) não são compatíveis com esses operadores.

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
$x2*=5 // $x2=50

$t2:="Hello" 
$t2*=2 // $t2="HelloHello"

```

## Operadores curto-circuito

Os operadores **&&** e **||** são **operadores de curto-circuito**. Um operador de curto-circuito é aquele que não avalia necessariamente todos os seus operandos.

A diferença é que o single [**&** e **|** boolean operators](dt_boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** não retornam um valor booleano. Eles avaliam expressões como [verdadeiro ou falso] (#verdadeiro-e-falso) e, em seguida, retornam uma das expressões.

### Operador em curto-circuito AND (&&)

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

A regra é a seguinte:

Dado `Expr1 && Expr2`:

O operador AND de curto-circuito avalia os operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando falso que encontrar; se todos os valores forem [verdadeiros] (#verdadeiro-e-falso), o valor do último operando será retornado.

A tabela a seguir resume os diferentes casos do operador **&&**:

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

`$tax` será NULL se taxRate for NULL (ou indefinido); caso contrário, armazenará o resultado do cálculo.

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

Se Expr1 for [truehy](#truthy-and-falsy), Expr2 não será avaliada e o cálculo retornará Expr1.

Se Expr1 for [falsy](#truthy-and-falsy), o cálculo retornará Expr2.

A tabela a seguir resume os diferentes casos e o valor retornado para o operador **||**:

| Expr1  | Expr2  | Valor devolvido |
| ------ | ------ | --------------- |
| truthy | truthy | Expr1           |
| truthy | falsy  | Expr1           |
| falsy  | truthy | Expr2           |
| falsy  | falsy  | Expr2           |

#### Exemplo 1

Digamos que tem uma tabela chamada Employee. Alguns empregados introduziram um número de telefone e outros não. Isso significa que `$emp.phone` poderia ser NULL, e você não pode atribuir NULL a uma variável de texto. Mas pode escrever o seguinte:

```4d
var $phone : Text

$phone:=$emp.phone || "n/a"
```

Nesse caso, `$phone` armazenará um número de telefone ou a cadeia de caracteres "n/a".

#### Exemplo 2

Dada uma tabela chamada Person com um campo *name*, bem como um campo *maiden name* para mulheres casadas.

O exemplo seguinte verifica se existe um nome de solteira e armazena-o numa variável; caso contrário, armazena simplesmente o nome da pessoa:

```4d
var $name: Text

$name:=$person.maidenName || $person.name
```

### Precedência

Os operadores `&&` e `||` têm a mesma precedência que os operadores lógicos `&` e `|`, e são avaliados da esquerda para a direita.

Isso significa que `a || b && c` é avaliado como `(a || b) && c`.

## Operador ternário

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

O operador condicional ternário permite-lhe escrever expressões condicionais de uma linha. Por exemplo, ele pode substituir uma sequência completa de instruções [If…Else] (flow-control.md#ifelseend-if).

Aceita três operandos na seguinte ordem:

- uma condição seguida de um ponto de interrogação (?)
- uma expressão a ser executada se a condição for [truthy](#truthy-and-falsy), seguido por dois pontos (:)
- uma expressão a ser executada se a condição for [falsa] (#truthy-and-falsy)

### Sintaxe

A sintaxe é a seguinte:

`condition ? exprIfTruthy : exprIfFalsy`

> Como a [sintaxe de token](https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html) usa dois pontos, recomendamos inserir um espaço após os dois pontos `:` ou colocar os tokens entre parênteses para evitar conflitos.

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

// Se um dos nomes estiver faltando, armazene o que existe, caso contrário, armazene uma string vazia
$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""
```

## Truthy e falsy

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

Para além de um tipo, cada valor tem também um valor booliano inerente, geralmente conhecido como truthy ou falsy\*\*.

> Os valores **truthy** e **falsy** são avaliados somente pelos operadores [short-circuit] (#operadores de curto-circuito) e [ternary] (#operador alternativo).

Os seguintes valores são falsy\*\*:

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

Todos os outros valores são considerados **verdadeiros**, inclusive:

- 0 - zero numérico (inteiro ou não)

Em 4D, a avaliação **verdadeira** e **falsa** reflete a **utilização** de um valor, o que significa que um valor verdadeiro existe e pode ser processado pelo código sem gerar erros ou resultados inesperados. A lógica por trás disso é fornecer uma maneira conveniente de lidar com valores *indefinidos* e *nulos* em objetos e coleções, de modo que um número reduzido de instruções [If…Else] (flow-control.md#ifelseend-if) seja necessário para evitar erros de tempo de execução.

Por exemplo, quando você usa um [operador OR de curto-circuito] (#short-circuit-or-operator-):

```4d
$value:=$object.value || $defaultValue
```

... você obtém o valor padrão sempre que *$object* não contém a propriedade `value` OU quando ela é *nula*. Assim, este operador verifica a existência ou a possibilidade de utilização do valor em vez de um valor específico. Note-se que, como o valor numérico 0 existe e é utilizável, não é tratado de forma especial, pelo que é truthy\*\*.

Com relação aos valores que representam coleções, objetos ou cadeias de caracteres, os valores "vazios" são considerados **falsos**. É útil quando se pretende atribuir um valor por defeito sempre que se encontra um valor vazio.

```4d
$phone:=$emp.phone || "n/a"
```
