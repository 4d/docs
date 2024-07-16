---
id: parameters
title: Parâmetros
---

Frequentemente será preciso passar dados para seus métodos. Isso é facilmente feito com parâmetros.

## Visão Geral

**Los parámetros** (o **argumentos**) son piezas de datos que un método o una función de clase necesita para realizar su tarea. Los términos *parámetros* y *argumentos* se utilizan indistintamente en este manual. Parâmetros também são passados para comandos integrados 4D. En este ejemplo, la cadena "Hello" es un argumento para el comando integrado `ALERT`:

```4d
ALERT("Hello")
```

Os parâmetros são passados aos métodos da mesma maneira. Por ejemplo, si una función de clase llamada `getArea()` acepta dos parámetros, una llamada a la función de clase podría verse así:

```4d
$area:=$o.getArea(50;100)
```

O, si un método proyecto llamado `DO_SOMETHING` acepta tres parámetros, una llamada al método podría verse así:

```4d
Essa função é chamada da maneira abaixo:
```

Os parâmetros estão separados por ponto e vírgula (;).

Os mesmos princípios são usados quando métodos forem executados através de comandos dedicados, por exemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Los datos también pueden ser **devueltos**desde métodos y funciones de clase. Por ejemplo, la siguiente línea de instrucción utiliza el comando integrado, `Length`, para devolver la longitud de una cadena. La instrucción pone el valor devuelto por `Length` en una variable llamada *MyLength*. Esta é a instrução:

```4d
MyLength:=Length("How did I get here?")
```

Qualquer subrotina pode retornar um valor. Só se pode declarar um único parámetro de saída por método ou função de classe.

Los valores de entrada y salida son [evaluados](#values-or-references) en el momento de la llamada y copiados en o desde variables locales dentro de la función o método de la clase llamada. Los parámetros variables deben ser [declarados](#declaring-parameters) en el código llamado.

:::info Compatibidade

Throughout the 4D documentation, you might see examples where parameters are automatically copied in sequentially numbered local variables ($0, $1, etc.) e declarados usando as diretivas do compilador. Ej: `C_TEXT($1;$2)`. Esta sintaxe antiga ainda é suportada, mas já não é recomendada.

:::

## Declaração de parâmetros

Dentro de métodos ou funções de classe chamados, valores parâmetros são atribuidos à variáveis locais. Generalmente se declararan los parámetros utilizando un **nombre de parámetro** con un **tipo de parámetro**, separados por dos puntos.

- Para las funciones de clase, los parámetros se declaran junto con la palabra clave `Function`.
- Para los métodos (métodos proyecto, métodos objeto formulario, métodos base y triggers), los parámetros se declaran utilizando la palabra clave `#DECLARE` al principio del código del método.

Exemplos:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```

As regras abaixo são válidas:

- A linha de declaração deve ser a primeira linha do método ou código da função, senão um erro é exibido (só comentários ou quebras de linha podem preceder a declaração).
- Los nombres de los parámetros deben comenzar con un carácter `$` y cumplir con [reglas de denominación de las propiedades](identifiers.md#object-properties).
- Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).
- Sintaxes multilinha são aceitas (usando "\\").

Por ejemplo, cuando se llama a una función `getArea()` con dos parámetros:

```4d
$area:=$o.getArea(50;100)
```

No código da função classe, o valor de cada parâmetro se copia no parâmetro declarado correspondente:

```4d
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
	$area:=$width*$height
```

> If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).

Todos los tipos de métodos de 4D soportan la palabra clave `#DECLARE`, incluidos los métodos base. Por ejemplo, en el método base `On Web Authentication`, puede declarar parámetros temporales:

```4d
	// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Check hash password...
```

### Valor retornado

El parámetro de retorno de una función se declara añadiendo una flecha (->) y la definición del parámetro después de la lista de parámetros de entrada. Por exemplo:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

También puede declarar el parámetro de retorno añadiendo sólo `: type`, en cuyo caso puede ser manejado por un [return](#return-expression). Por exemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
	return $x+$y
```

:::warning

Os parâmetros, que incluem o valor retornado, devem ser declarados apenas uma vez. Em particular, você não pode declarar o mesmo parâmetro como entrada e saída, mesmo com o mesmo tipo. Por exemplo:

```qs
	//invalid declaration
Function myTransform ($x : Integer) -> $x : Integer 
	//error: $x is declared twice
```

:::

### Tipos de datos compatíveis

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects. Por exemplo:

```4d
Function saveToFile($entity : cs. ShapesEntity; $file : 4D. File)
```

:::note

Las expresiones de tablas o arrays sólo pueden pasarse [como referencia utilizando un puntero](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Inicialização

When parameters are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been assigned.

## `return {expression}`

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

La instrucción `return` finaliza la ejecución de una función o de un método y puede utilizarse para devolver una expresión a quien la llama.

Por exemplo, a seguinte função devolve o quadrado de seu argumento, $x, onde $x é um número.

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internamente, `return x` ejecuta `$0:=x` o (si se declara) `myReturnValue:=x`, y devuelve al llamante. Si `return` se utiliza sin una expresión, la función o el método devuelve un valor nulo del tipo de retorno declarado (si lo hay), de lo contrario *undefined*.

La instrucción `return` puede utilizarse junto con la sintaxis estándar para los [valores devueltos](#valor-devuelto) (el valor devuelto debe ser del tipo declarado). Entretanto lembre que isso finaliza imediatamente a execução de código. Por exemplo:

```4d
Function getValue
	$0:=10
	return 20
	// retorna 20

Function getValue -> $v : Integer
	return 10
	$v:=20 // never executed
	// retorna 10
```

## Indireção dos parâmetros

Os métodos e funções 4D aceitam um número variável de parâmetros. You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command and the **parameter indirection syntax**. Dentro del método, una dirección de indirección tiene el formato `${N}`, donde `N` es una expresión numérica.

### Uso de parâmetros variáveis

Por exemplo, considere uma função que some os valores e devolva a soma formatada segundo um formato que se passa como parâmetro. Cada vez que chamar a esse método, o número de valores a somar pode variar. Devemos passar os valores como parâmetros ao método e o formato em forma de string dos caracteres. O número de valores pode variar de chamada a chamada.

Aquí está el método, llamado `MySum`:

```4d
 #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+${$i}
 End for
 $result:=String($sum;$format)
```

Os parâmetros da função devem ser passados na ordem correta: primeiro o formato e depois os valores.

```4d
 Result:=MySum("##0.00";125,2;33,5;24) //"182.70"
 Result:=MySum("000";1;2;200) //"203"
```

Observe que, mesmo que tenha declarado 0, 1 ou mais parâmetros, você sempre poderá passar o número de parâmetros que desejar. Los parámetros están todos disponibles dentro del código llamado a través de la sintaxis `${N}` y el tipo de parámetros extra es [Variant](dt_variant.md) por defecto (puede declararlos utilizando la [notación variadic](#declaring-variadic-parameters)). Você só precisa garantir que os parâmetros existam, graças ao comando [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html). Por exemplo:

```4d
//método foo
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
	ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

Esta função pode ser chamada agora de várias formas:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //parâmetros extras foram passados
```

> A indireção de parâmetros se gerencia melhor se respeitar a convenção abaixo: se só alguns dos parâmetros forem endereçados por indireção, devem ser passados depois dos outros.

### Declaração de parâmetros variáveis

Não é obrigatório declarar parâmetros variáveis. Los parámetros variables no declarados obtienen automáticamente el tipo [Variant](dt_variant.md).

Entretanto, para evitar erros de incompatibilidade de tipos durante a execução do código, você pode declarar um número variável de parâmetros usando a notação "..." nos protótipos de suas funções, construtores de classes e métodos (parâmetros variádicos). Você especifica o tipo do parâmetro seguindo a notação "..." com o tipo desejado.

```4d
#DECLARE ( ... : Text ) // Undefined number of 'Text' parameters

```

```4d
Function myfunction ( ... : Text)

```

Ao declarar vários parâmetros, a notação variadic deve ser empregada na última posição, por exemplo:

```4d
#DECLARE ( param: Real ; ... : Text )

```

```4d
Function myfunction (var1: Integer ; ... : Text)
```

#### Exemplo

Aquí tenemos un método llamado `SumNumbers` que devuelve el total calculado para todos los números pasados como parámetros:

```4d

#DECLARE( ... : Real) : Real 



var $number; $total : Real 

For each ($number; 1; Count parameters)
	$total+=${$number}
End for each 

return $total

```

Esse método pode ser chamado com um número variável de parâmetros Real. No caso de um tipo de parâmetro incorreto, um erro será retornado antes que o método seja executado:

```4d

$total1:=SumNumbers // retorna 0 
$total2:=SumNumbers(1; 2; 3; 4; 5) // retorna 15
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // erro

```

:::note Nota de compatibilidade

La sintaxis heredada para declarar parámetros variádicos (`C_TEXT(${4})`) sigue siendo compatible, pero ahora se prefiere la notación variable.

:::

## Compilação

Incluso si no es obligatorio en [modo interpretado](interpreted.md), debe asegurarse de que todos los parámetros de método y función se declaren correctamente tan pronto como tenga la intención de compilar su proyecto.

:::note

You can delegate the declaration of parameters (as well as all variables) to the compiler by checking the [**Type the variable** compilation path option](../Project/compiler.md#compilation-path). No entanto, essa opção aumenta significativamente o tempo de compilação.

:::

### Parâmetros declarados em protótipos

Cuando se utilizan las palabras clave `#DECLARE` o `Function`, los parámetros se declaran automáticamente y no se necesita información adicional para el compilador. Exemplos:

```4d
#DECLARE($myParam : Text; $myOtherParam : Integer) : Boolean
	// all method parameters are declared with their type
```

```4d
	// On Web Connection Database Method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)
```

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
	// all function parameters are declared with their type
```

:::tip

Declarar parâmetros em protótipos é uma boa prática, mesmo em projetos não compilados.

:::

### Parâmetros de método declarados fora dos protótipos

Puede ocurrir que los parámetros del método no se declaren en prototipos `#DECLARE`. Essas declarações podem ser encontradas, em particular, no código 4D herdado. En este caso, debe configurar un método `Compiler_Methods` para reunir las declaraciones de estos parámetros de método.

#### Método `Compiler_Methods`

Cuando algunos parámetros de método no se declaran en prototipos `#DECLARE`, el compilador 4D necesita que los declare en un método específico utilizando una sintaxis especial:

- é possível agrupar todos os parâmetros de variáveis locais para métodos de projeto num ou mais métodos de projeto
- los nombres de los métodos deben empezar por "**Compiler_**", por defecto "Compiler_Methods".
- dentro de un método de este tipo, se predeclaran los parámetros de cada método utilizando la siguiente sintaxis: `C_XXX(nombredelmétodo;parámetro)`.

Por exemplo:

```4d
 // Compiler_Methods
 C_REAL(OneMethodAmongOthers;$1;$2) 
```

:::note

Esta sintaxe não é executável em modo interpretado.

:::

You can create and fill automatically a `Compiler_Methods` method containing all your parameters declared outside prototypes using the [**Compiler Methods for...**](../Project/compiler.md#compiler-methods-for) **Methods** button in the Compiler Settings dialog box.

:::info

#### Casos particulares

Alguns contextos não suportam a declaração em um método "Compiler_", portanto, são tratados especificamente:

- Triggers - O parâmetro $0 (Longint), o resultado de um trigger, será tipado pelo compilador se o parâmetro não tiver sido declarado explicitamente. Entretanto, se quiser declará-lo, deve fazer isso no próprio trigger.

- Objetos formulario que aceptan el evento formulario `On Drag Over` - El parámetro $0 (Entero largo), que es el resultado del evento formulario `On Drag Over`, será digitado por el compilador si el parámetro no ha sido declarado explícitamente. Entretanto, se quiser fazer a declaração, deve fazer isso no método objeto.
  **Nota:** el compilador no inicializa el parámetro $0. Por lo tanto, tan pronto como utilice el evento formulario `On Drag Over`, debe inicializar $0. Por exemplo:

```4d
 C_LONGINT($0)
 If(Form event code=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

:::

### Conflitos entre declarações

- Si un parámetro se declara tanto en un prototipo `#DECLARE` como en un método *Compiler_*, se ignora la entrada del método  *Compiler_*.
- Si un parámetro se declara tanto en un prototipo `#DECLARE` como en un método *Compiler_* pero con un tipo de datos diferente, Code Live Checker genera un error durante la verificación de sintaxis y la compilación.

## Tipo de parámetro equivocado

Llamar a un parámetro con un tipo incorrecto es un [error](error-handling.md) que impide la correcta ejecución. Por exemplo se executar os métodos

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //tipo incorrecto, texto esperado
```

Este caso es tratado por 4D dependendo do contexto:

- en [proyectos compilados](interpreted.md), se genera un error en el paso de compilación siempre que sea posible. Senão, um erro é gerado quando o método for chamado.
- em projetos interpretados:
  - si el parámetro se declaró utilizando la [sintaxis nombrada](#named-parameters) (`#DECLARE` o `Function`), se genera un error cuando se llama al método.
  - si el parámetro se declaró utilizando (`C_XXX`), no se genera ningún error, el método llamado recibe un valor vacío del tipo esperado.

## Usando propriedades objeto como parâmetros nomeados

La utilización de objetos como parámetros permite manejar **parámetros con nombre**. Este estilo de programação é simples, flexível e fácil de ler.

Por ejemplo, utilizando el método `CreatePerson`:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

En el método `ChangeAge` puede escribir:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

Esto ofrece una poderosa manera de definir [parámetros opcionales](#optional-parameters) (ver también abajo). Para manejar os parâmetros que faltam, pode:

- verificar si se suministran todos los parámetros esperados comparándolos con el valor `Null`, o
- pré-definir os valores dos parâmetros, ou
- usá-los como valores vazios.

En el método `ChangeAge` anterior, las propiedades Age y Name son obligatorias y producirían errores si faltaran. Para evitar isso, pode escrever:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Ambos parâmetros são opcionais: se não forem preenchidos, o resultado será "é 10 anos de idade", mas nenhum erro será gerado.

Finalmente, com parâmetros com nome, a manutenção ou a reprodução das aplicações é muito simples e seguro. Imagine que depois perceba de que adicionar 10 anos não funciona sempre. You need another parameter to set how many years to add. You write: Escreva: Escreve:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
var $1;$para : Object
$para:=$1  
If ($para.toAdd=Null)
	$para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Não precisará mudar seu código existente. Sempre funcionará como na versão anterior, mas se for necessário, é possível usar outro valor diferente de 10 anos.

Com variáveis com nome, qualquer parâmetro pode ser opcional. No exemplo acima, todos os parâmetros são opcionais e qualquer pode ser dado em qualquer ordem.

## Parâmetros opcionais

En el manual *Lenguaje de 4D*, los caracteres { } (llaves) indican parámetros opcionales. Por ejemplo, `ALERT (message{; okButtonTitle})` significa que el parámetro *okButtonTitle* puede omitirse al llamar al comando. Pode fazer a chamada de duas maneiras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter
```

Os métodos projeto 4D também aceitam esses parâmetros opcionais, começando pela direita. Pode declarar qualquer número de parâmetros. Si llama a un método o función con menos parámetros que los declarados, los parámetros que faltan se procesan como valores por defecto en el código llamado, [según su tipo](data-types.md#default-values). Por exemplo:

```4d
// función "concate" de myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```

```4d
  // Método de chamada
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Mostra " "
```

> Também se pode chamar um método ou função com mais parâmetros do que os declarados. Estarán disponibles en el código llamado a través de la sintaxis [${N}](#parameter-indirection-n).

Utilizando el comando `Count parameters` desde dentro del método llamado, puede detectar el número real de parámetros y realizar diferentes operaciones dependiendo de lo que haya recibido.

O exemplo abaixo mostra uma mensagem de texto e pode inserir o texto em um documento no disco ou em uma área de 4D Write Pro:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )
 #DECLARE($message : Text; $path : Text; $wpArea : Object)
 ALERT($message)
 If(Count parameters=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```

Depois de adicionar este método projeto a sua aplicação, pode escrever:

```4d
APPEND TEXT(vtSomeText) //Will only display the  message APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```

> Cuando los parámetros opcionales son necesarios en sus métodos, también puede considerar el uso de [propiedades de objeto como parámetros con nombre](#using-objects-properties-as-named-parameters) que ofrecen una forma flexible de manejar un número variab

## Valores ou referências

Cuando pasa un parámetro, 4D siempre evalúa la expresión del parámetro en el contexto del método que llama y define el **valor resultante** en las variables locales en la función de clase o la subrutina. As variáveis locais/parâmetros não são os campos, variáveis ou expressões realmente passadas pelo método chamada; eles apenas contém os valores que foram passados. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Por exemplo:

```4d
	//Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)
 
	//Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

La caja de alerta mostrada por `DO_SOMETHING` dirá "WILLIAMS" y la caja de alerta mostrada por `MY_METHOD` dirá "williams". El método cambió localmente el valor del parámetro $1, pero esto no afecta al valor del campo `[People]Name` pasado como parámetro por el método `MY_METHOD`.

Hay dos formas de hacer que el método `DO_SOMETHING` cambie el valor del campo:

1. Ao invés de passar o campo para o método, passa um ponteiro para ele, por isso pode escrever:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)
 
  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Aqui é o parâmetro não for o campo, mas sim um ponteiro ao mesmo. Por lo tanto, dentro del método `DO SOMETHING`, $1 ya no es el valor del campo sino un puntero al campo. El objeto **referenciado** por $1 ($1-> en el código anterior) es el campo real. Portanto, mudar o objeto referenciado vai além do escopo da subrotina, e o campo real não é afetado. Neste exemplo, as duas caixas de alerta dirão "WILLIAMS".

2. En lugar de que el método `DO_SOMETHING` "haga algo", puede reescribir el método para que devuelva un valor. Portanto escreveria:

```4d
	//Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

	//Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Esta segunda técnica de retornar um valor por uma subrotina se chama " utilizar uma função" É descrita no parágrafo <a href="#functions">Funções</a>. Se describe en el párrafo [Valores devueltos](#returning-values).

### Casos particulares: objetos e coleções

Debe prestar atención al hecho de que los tipos de datos Objeto y Colección sólo pueden manejarse a través de una referencia (es decir, un *puntero* interno).

Por consiguiente, cuando se utilizan estos tipos de datos como parámetros, `$1, $2...` no contienen *valores* sino *referencias*. La modificación del valor de los parámetros `$1, $2...` dentro de la subrutina se propagará a cualquier lugar donde se utilice el objeto o colección fuente. Este es el mismo principio que para [los punteros](dt_pointer.md#pointers-as-parameters-to-methods), excepto que los parámetros `$1, $2...` no necesitan ser desreferenciados en la subrutina.

Por ejemplo, considere el método `CreatePerson` que crea un objeto y lo envía como parámetro:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

El método `ChangeAge` añade 10 al atributo Age del objeto recibido

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

Cuando se ejecuta el método `CreatePerson`, las dos cajas de alerta dirán "50" ya que la misma referencia de objeto es manejada por ambos métodos.

**4D Server:** cuando se pasan parámetros entre métodos que no se ejecutan en la misma máquina (utilizando por ejemplo la opción "Ejecutar en el servidor"), las referencias no son utilizables. Nestes casos, são enviadas cópias dos parâmetros de objetos e coleções ao invés de referências.
