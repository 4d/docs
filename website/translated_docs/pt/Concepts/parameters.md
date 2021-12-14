---
id: parameters
title: Parameters
---


You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.

## Visão Geral

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms *parameter* and *argument* are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

Parameters are passed to methods or class functions in the same way. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```
$area:=$o.getArea(50;100)
```

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

The input parameters are separated by semicolons (;).

Os mesmos princípios são usados quando métodos forem executados através de comandos dedicados, por exemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. As instruções põe o valor devolvido por `Length` em uma variável chamada *MyLength*. Esta é a instrução:

```4d
MyLength:=Length("How did I get here?")
```

Qualquer subrotina pode retornar um valor. Only one single output parameter can be declared per method or class function.

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into local variables within the called class function or method. Two syntaxes are proposed to declare variable parameters in the called code:

- [named variables](#named-parameters) (recommended in most cases) or
- [sequentially numbered variables](#sequential-parameters).


Both [named](#named-parameters) and [sequential](#sequential-parameters) variables syntaxes can be mixed with no restriction to declare parameters. For example:

```4d
Function add($x : Integer)
    var $0;$2 : Integer
    $0:=$x+$2
```




## Parâmetros com nomes

Inside called methods or class functions, parameter values are assigned to local variables. You can declare parameters using a **parameter name** along with a **parameter type**, separated by colon.

- For class functions, parameters are declared along with the `Function` keyword.
- For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the `#DECLARE` keyword at the beginning of the method code.

Examples:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```
```4d  
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```


The following rules apply:

- The declaration line must be the first line of the method or function code, otherwise an error is displayed (only comments or line breaks can precede the declaration).
- Parameter names must start with a `$` character and be compliant with [property naming rules](dt_object.md#object-property-identifiers).
- Multiple parameters (and types) are separated by semicolons (;).
- Multiline syntaxes are supported (using "\\" character).


For example, when you call a `getArea()` function with two parameters:

```
$area:=$o.getArea(50;100)
```

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

```4d    
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
```
> If the type is not defined, the parameter will be defined as `Variant`.

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

### Returned value

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through `$0` ([see sequential syntax below](#returned-value-1)). For example:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```


### Supported data types

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects.  For example:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```





## Sequential parameters

As an alternative to [named parameters](#named-parameters) syntax, you can declare parameters using sequentially numbered variables: **$1**, **$2**, **$3**, and so on. A numeração das variáveis locais representam a ordem dos parâmetros.

> Although this syntax is supported by class functions, it is recommended to use [named parameters](#named-parameters) syntax in this case.

For example, when you call a `DO_SOMETHING` project method with three parameters:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

In the method code, the value of each parameter is automatically copied into $1, $2, $3 variables:

```4d
  //Code of the method DO_SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the $WithThis parameter
  //$2 contains the $AndThat parameter
  //$3 contains the $ThisWay parameter
```


### Returned value

The value to be returned is automatically put into the local variable `$0`.


For example, the following method, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

The following is an example that uses the Uppercase4 method:

```4d
$NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *$NewPhrase* gets “THIS is good.”

The returned value, `$0`, is a local variable within the subroutine. Pode ser usado como tal dentro da subrotina. For example, you can write:

```4d
// Do_something
$0:=Uppercase($1)
ALERT($0)
```

In this example, `$0` is first assigned the value of `$1`, then used as parameter to the `ALERT` command. Dentro de la subrotina, pode utilizar `$0` da mesma maneira que utilizaria qualquer outra variável local. É 4D quem devolve o valor de `$0` (como estiver quando a subrotina terminar) ao método chamado.


### Supported data types

You can use any [expression](quick-tour.md#expression-types) as sequential parameter, except:

- tabelas
- arrays

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

### Indireção dos parâmetros

Os métodos projeto 4D aceitam um número variável de parametros do mesmo tipo, começando pela direita. Este princípio se chama **la indireção de parâmetros**. Ao utilizar o comando `Count parameters` pode endereçar esses parâmetros com um loop `For... End for` e a sintaxe de indireção de parâmetros.

> Parameter indirection can only be used with the [sequential](#sequential-parameters) syntax.

No exemplo abaixo, o método projeto `SEND PACKETS` aceita um parâmetro de tempo seguido de um número variável de parâmetros de texto:

```4d
  //Método projeto SEND PACKETS
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

A indireção de parâmetros se gerencia melhor se respeitar a convenção abaixo: se só alguns dos parâmetros forem endereçados por indireção, devem ser passados depois dos outros. Dentro do método, um endereço de indireçao é formatado: ${$i}, onde $i for uma variável numérica. ${$i} se denomina **parâmetro genérico**.

Por exemplo, considere uma função que some os valores e devolva a soma formatada segundo um formato que se passa como parâmetro. Cada vez que chamar a esse método, o número de valores a somar pode variar. Devemos passar os valores como parâmetros ao método e o formato em forma de string dos caracteres. O número de valores pode variar de chamada a chamada.

Essa função é chamada da maneira abaixo:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

Neste caso, o método que chama obterá a string "182,70", que é a soma dos números, com o formato especificado. Os parâmetros da função devem ser passados na ordem correta: primeiro o formato e depois os valores.

Aqui está a função, chamada `MySum`:
```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

Esta função pode ser chamada agora de várias formas:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```


Da mesma forma que com outras variáveis locais, não é obrigatório declarar os parâmetros genéricos mediante uma diretiva de compilador. Entretanto é recomendado que se evite qualquer ambiguidade. Para declarar estes parâmetros, se utiliza uma diretriz do  compilador à qual se passa ${N} como parâmetro, onde N especifica o primeiro parâmetro genérico.

```4d
 C_LONGINT(${4})
```

Esse comando significa que a partir do quarto parâmetro (incluído), o método pode receber um número variável de parâmetros de tipo longint. $1, $2 e $3 podem ser de qualquer tipo de dados. Entretanto, se usar $2 por indireção, o tipo de dados usados será do tipo genérico. Assim, será do tipo de dados LongInt, mesmo se para você fosse, por exemplo, do tipo de dados Real.

> The number in the declaration has to be a constant and not a variable.


### Declaring parameters for compiled mode

Even if it is not mandatory in [interpreted mode](interpreted.md), you must declare each parameter in the called methods or functions to prevent any trouble.

When using the [named variable syntax](#named-parameters), parameters are automatically declared through the `#DECLARE` keyword or `Function` prototype. For example:

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
    // all parameters are declared with their type
```


When using the sequential variable syntax, you need to make sure all parameters are properly declared. No exemplo abaixo, o método projeto `Capitalize`  aceita um parâmetro texto e devolve um resultado texto:

```4d
  // Método projeto Maiúsculas
  // Maiúsculas( Texto ) -> Texto
  // Maiúsculas( Cadena fuente ) -> String com a primeira letra em maiúscula

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

A utilização de comandos tais como `New process` com métodos processo que aceitem parâmetros também requer que os parâmetros se declarem explicitamente no método chamado. For example:

```4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

Este código pode ser executado em modo compilado só se "foo_method" declarar seus parâmetros:

```4d
//foo_method C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

> For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Dentro deste método, pode pré-declarar os parâmetros de cada método, por exemplo:
```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```
See [Interpreted and compiled modes](interpreted.md) page for more information.

A declaração de parâmetros também é obrigatóiria nos contextos abaixo (esses contextos não são compatíveis com declarações em um método "Compiler"):

- Database methods - For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. No começo do método database, tem que escrever (mesmo se todos os parâmetros não forem usados):

```4d
// On Web Connection C_TEXT($1;$2;$3;$4;$5;$6)
```

> You can also use [named parameters](#named-parameters) with the `#DECLARE` keyword.

- Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Entretanto, se quiser declará-lo, deve fazer isso no próprio trigger.

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Entretanto, se quiser fazer a declaração, deve fazer isso no método objeto. **Nota:** o compilador não inicializa o parâmetro $0. Portanto, logo que utilizar o evento formulário `On Drag Over`, deve inicializar $0. For example:

```4d
 C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```




## Using object properties as named parameters

A utilização de objetos como parâmetros permite manejar **parâmetros com nome**. Este estilo de programação é simples, flexível e fácil de ler.

Por exemplo, utilizando o método `CreatePerson`:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

No método `ChangeAge` pode escrever:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

Isso oferece uma poderosa maneira de definir [parâmetros opcionais](#optional-parameters) (ver também abaixo). Para manejar os parâmetros que faltam, pode:
- veja se todos os parâmetros esperados são fornecidos comparando-os com o valor `Null`, ou
- pré-definir os valores dos parâmetros, ou
- usá-los como valores vazios.

No método `ChangeAge` anterior, as propriedades Age e Name são obrigatórias e produzirão erross se faltarão. Para evitar isso, pode escrever:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```
Ambos parâmetros são opcionais: se não forem preenchidos, o resultado será "é 10 anos de idade", mas nenhum erro será gerado.

Finalmente, com parâmetros com nome, a manutenção ou a reprodução das aplicações é muito simples e seguro. Imagine que depois perceba de que adicionar 10 anos não funciona sempre. Precisa de outro parâmetro para definir quantos anos tem que adicionar. Escreva:

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




## Input/Output variables

Dentro da subrotina, pode utilizar os parâmetros $1, $2... da mesma maneira que utilizaria qualquer outra variável local. Entretanto, no caso de usar comandos que modifiquem o valor da variável passada como parâmetro (por exemplo `Find in field`), os parâmetros $1, $2, etc. não podem ser utilizardos diretamente. Primeiro deve copiá-los nas variáveis locais padrão (por exemplo: `$myvar:=$1`).




## Parâmetros opcionais

No manual *Linguagem de 4D*, os caracteres { } (chaves) indicam parâmetros opcionais. Por exemplo, `ALERT (message{; okButtonTitle})` significa que o parâmetro *okButtonTitle* pode omitir o chamado ao comando. Pode fazer a chamada de duas maneiras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parâmetros ALERT("Time is over") //1 parâmetro
```

Os métodos projeto 4D também aceitam esses parâmetros opcionais, começando pela direita. O problema com os parâmetros opcionais é como manejar o caso em que alguns deles estejam faltando no método chamado, nunca deveria produzir um erro. Uma boa prática é atribuir valores padrão aos parâmetros não utilizados.

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

Utilizando o comando `Count parameters` desde dentro do método chamado, pode detectar o número real de parâmetros e realizar diferentes operações dependendo do que tenha recebido.

O exemplo abaixo mostra uma mensagem de texto e pode inserir o texto em um documento no disco ou em uma área de 4D Write Pro:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 Method($message : Text; $path : Text; $wpArea : Object)

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
APPEND TEXT(vtSomeText) //Só mostrará a mensagem APPEND TEXT(vtSomeText;$path) //Mostra a mensagem e o anexo ao documento em $path APPEND TEXT(vtSomeText;"";$wpArea) //Mostra a mensagem e escreve em $wpArea
```




## Valores ou referências

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. As variáveis locais/parâmetros não são os campos, variáveis ou expressões realmente passadas pelo método chamada; eles apenas contém os valores que foram passados. Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. For example:

```4d
    //Esta é uma parte do código do método MY_METHOD DO_SOMETHING([People]Name) //Suponha que o valor [People]Name seja "williams" ALERT([People]Name)

    //Este é o código do método DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

A caixa de alerta mostrada por `DO_SOMETHING` dirá "WILLIAMS" e a caixa de alerta mostrada por `MY_METHOD` dirá "williams". O método mudou localmente o valor do parâmetro $1, ma isso não afeta o valor de campo `[People]Name` passado como parâmetro pelo método `MY_METHOD`.

Há duas formas de fazer com que o método `DO_SOMETHING` mude o valor de campo:

1. Rather than passing the field to the method, you pass a pointer to it, so you would write:

```4d
  //Esta é uma parte do código do método MY_METHOD
 DO_SOMETHING(->[People]Name) //Suponha que o valor de [People]Name value seja "williams"
 ALERT([People]Last Name)

  //Este é o código do método DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Aqui é o parâmetro não for o campo, mas sim um ponteiro ao mesmo. Portanto, dentro do método `DO SOMETHING`, $1 já não é o valor do campo mas um ponteiro ao campo. O objeto **referenciado** por $1 ($1-> no código anterior) é o campo real. Portanto, mudar o objeto referenciado vai além do escopo da subrotina, e o campo real não é afetado. Neste exemplo, as duas caixas de alerta dirão "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
    //Esta é uma parte do código do método MY_METHO
 [People]Name:=DO_SOMETHING([People]Name) //Suponha que o valor de [People]Name seja "williams"
 ALERT([People]Name)

    //Este é o código do método DO_SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Esta segunda técnica de retornar um valor por uma subrotina se chama " utilizar uma função" É descrita no parágrafo [Funções](#functions). This is described in the [Returning values](#returning-values) paragraph.


### Casos particulares: objetos e coleções

Deve prestar atenção ao fato de que os tipos de dados Objeto e Coleção só podem ser manejados através de uma referência (ou seja, um  *ponteiro* interno).

Por isso, quando usar esses tipos de dados como parâmetros, `$1, $2...` não contém *valores* mas sim *referências*. A modificação do valor dos parâmetros `$1, $2...` dentro da subrotina se propagará a qualquer lugar onde se utilize o objeto ou coleção fonte. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

Por exemplo, considere o método `CreatePerson` que cria um objeto e o envia como parâmetro:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

O método `ChangeAge` adiciona 10 ao atributo Age do objeto recebido

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

Quando executar o método `CreatePerson`, as duas caixas de alerta dirão "50" já que a mesma referência de objeto é manejada por ambos métodos.

**4D Server:** quando são passados parâmetros entre métodos que não são executados na mesma máquina (utilizando por exemplo a opção "Executar no servidor"), as referencias não são utilizáveis. Nestes casos, são enviadas cópias dos parâmetros de objetos e coleções ao invés de referências.


