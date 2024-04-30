---
id: parameters
title: Parâmetros
---

Frequentemente será preciso passar dados para seus métodos. Isso é facilmente feito com parâmetros.

## Visão Geral

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms _parameter_ and _argument_ are used interchangeably throughout this manual. Parâmetros também são passados para comandos integrados 4D. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

Os parâmetros são passados aos métodos da mesma maneira. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```4d
$area:=$o.getArea(50;100)
```

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

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

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called _MyLength_. Esta é a instrução:

```4d
MyLength:=Length("How did I get here?")
```

Qualquer subrotina pode retornar um valor. Só se pode declarar um único parámetro de saída por método ou função de classe.

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into or from local variables within the called class function or method. Variable parameters must be [declared](#declaring-parameters) in the called code.

:::info Compatibidade

Throughout the 4D documentation, you might see examples where parameters are automatically copied in sequentially numbered local variables ($0, $1, etc.) and declared using compiler directives. Ex: `C_TEXT($1;$2)`. Esta sintaxe antiga ainda é suportada, mas já não é recomendada.

:::

## Declaração de parâmetros

Dentro de métodos ou funções de classe chamados, valores parâmetros são atribuidos à variáveis locais. You usually declare parameters using a **parameter name** along with a **parameter type**, separated by colon.

- For class functions, parameters are declared along with the `Function` keyword.
- For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the `#DECLARE` keyword at the beginning of the method code.

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
- Parameter names must start with a `$` character and be compliant with [property naming rules](identifiers.md#object-properties).
- Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).
- Sintaxes multilinha são aceitas (usando "\\").

For example, when you call a `getArea()` function with two parameters:

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

All 4D method kinds support the `#DECLARE` keyword, including database methods. For example, in the `On Web Authentication` database method, you can declare named parameters:

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

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. Por exemplo:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression). Por exemplo:

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

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Inicialização

When parameters are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been assigned.

## `return {expression}`

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

The `return` statement ends function or method execution and can be used to return an expression to the caller.

Por exemplo, a seguinte função devolve o quadrado de seu argumento, $x, onde $x é um número.

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internally, `return x` executes `$0:=x` or (if declared) `myReturnValue:=x`, and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise _undefined_.

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). Entretanto lembre que isso finaliza imediatamente a execução de código. Por exemplo:

```4d
Function getValue
	$0:=10
	return 20
	// returns 20

Function getValue -> $v : Integer
	return 10
	$v:=20 // never executed
	// returns 10
```

## Indireção dos parâmetros

Os métodos e funções 4D aceitam um número variável de parâmetros. You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression.

### Uso de parâmetros variáveis

Por exemplo, considere uma função que some os valores e devolva a soma formatada segundo um formato que se passa como parâmetro. Cada vez que chamar a esse método, o número de valores a somar pode variar. Devemos passar os valores como parâmetros ao método e o formato em forma de string dos caracteres. O número de valores pode variar de chamada a chamada.

Here is the method, named `MySum`:

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

Observe que, mesmo que tenha declarado 0, 1 ou mais parâmetros, você sempre poderá passar o número de parâmetros que desejar. Parameters are all available within the called code through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using the [variadic notation](#declaring-variadic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command. Por exemplo:

```4d
//foo method
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
	ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

Esta função pode ser chamada agora de várias formas:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed
```

> A indireção de parâmetros se gerencia melhor se respeitar a convenção abaixo: se só alguns dos parâmetros forem endereçados por indireção, devem ser passados depois dos outros.

### Declaração de parâmetros variáveis

Não é obrigatório declarar parâmetros variáveis. Non-declared variadic parameters automatically get the [Variant](dt_variant.md) type.

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

Here we have a method called `SumNumbers` that returns the calculated total for all the numbers passed as parameters:

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

$total1:=SumNumbers // returns 0 
$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error

```

:::note Compatibility Note

The legacy syntax for declaring variadic parameters (`C_TEXT(${4})`) is still supported for compatibility but the variadic notation is now preferred.

:::

## Compilação

Even if it is not mandatory in [interpreted mode](interpreted.md), you must make sure that all method and function parameters are properly declared as soon as you intend to compile your project.

:::note

You can delegate the declaration of parameters (as well as all variables) to the compiler by checking the [**Type the variable** compilation path option](../Project/compiler.md#compilation-path). No entanto, essa opção aumenta significativamente o tempo de compilação.

:::

### Parâmetros declarados em protótipos

When using the `#DECLARE` or `Function` keywords, parameters are automatically declared and no additional information is needed for the compiler. Exemplos:

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

It can happen that method parameters are not declared in `#DECLARE` prototypes. Essas declarações podem ser encontradas, em particular, no código 4D herdado. In this case, you must configure a `Compiler_Methods` method to gather the declarations for these method parameters.

#### `Compiler_Methods` method

When some method parameters are not declared in `#DECLARE` prototypes, the 4D compiler needs that you declare them in a specific method using a special syntax:

- é possível agrupar todos os parâmetros de variáveis locais para métodos de projeto num ou mais métodos de projeto
- the method name(s) must start with "**Compiler_**", by default "Compiler_Methods".
- within such a method, you predeclare the parameters for each method using the following syntax: `C_XXX(methodName;parameter)`.

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

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Entretanto, se quiser fazer a declaração, deve fazer isso no método objeto.
  **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. Por exemplo:

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

- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method, the entry from the  _Compiler__ method is ignored.
- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method but with a different data type, the Code Live Checker generates an error during syntax checking and compilation.

## Tipo de parámetro equivocado

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. Por exemplo se executar os métodos

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //tipo incorrecto, texto esperado
```

Este caso es tratado por 4D dependendo do contexto:

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. Senão, um erro é gerado quando o método for chamado.
- em projetos interpretados:
  - if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
  - if the parameter was declared using (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.

## Usando propriedades objeto como parâmetros nomeados

Using objects as parameters allow you to handle **named parameters**. Este estilo de programação é simples, flexível e fácil de ler.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). Para manejar os parâmetros que faltam, pode:

- check if all expected parameters are provided by comparing them to the `Null` value, or
- pré-definir os valores dos parâmetros, ou
- usá-los como valores vazios.

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. Para evitar isso, pode escrever:

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

In the _4D Language Reference_ manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the _okButtonTitle_ parameter may be omitted when calling the command. Pode fazer a chamada de duas maneiras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter
```

Os métodos projeto 4D também aceitam esses parâmetros opcionais, começando pela direita. Pode declarar qualquer número de parâmetros. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, [according to their type](data-types.md#default-values). Por exemplo:

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```

```4d
  // Método de chamada
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Mostra " "
```

> Também se pode chamar um método ou função com mais parâmetros do que os declarados. They will be available within the called code through the [${N} syntax](#parameter-indirection-n).

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

O exemplo abaixo mostra uma mensagem de texto e pode inserir o texto em um documento no disco ou em uma área de 4D Write Pro:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )
 
 #DECLARE ($message : Text; $path : Text; $wpArea : Object)
  
 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```

Depois de adicionar este método projeto a sua aplicação, pode escrever:

```4d
APPEND TEXT(vtSomeText) //Will only display the  message APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

## Valores ou referências

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. As variáveis locais/parâmetros não são os campos, variáveis ou expressões realmente passadas pelo método chamada; eles apenas contém os valores que foram passados. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Por exemplo:

```4d
	//Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)
 
	//Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. Ao invés de passar o campo para o método, passa um ponteiro para ele, por isso pode escrever:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)
 
  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Aqui é o parâmetro não for o campo, mas sim um ponteiro ao mesmo. Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. Portanto, mudar o objeto referenciado vai além do escopo da subrotina, e o campo real não é afetado. Neste exemplo, as duas caixas de alerta dirão "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Portanto escreveria:

```4d
	//Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

	//Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Esta segunda técnica de retornar um valor por uma subrotina se chama " utilizar uma função" É descrita no parágrafo <a href="#functions">Funções</a>. This is described in the [Returning values](#returning-values) paragraph.

### Casos particulares: objetos e coleções

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal _pointer_).

Consequently, when using such data types as parameters, `$1, $2...` do not contain _values_ but _references_. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. Nestes casos, são enviadas cópias dos parâmetros de objetos e coleções ao invés de referências.
