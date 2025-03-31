---
id: parameters
title: Parâmetros
---


## Utilização de parâmetros

É frequente ter de passar dados para os seus métodos. Isso é facilmente feito com parâmetros.

**Parameters** (or **arguments**) are pieces of data that a method needs in order to perform its task. Os termos *parámetros* e *argumentos* são utilizados indiferentemente neste manual. Parâmetros também são passados para comandos integrados 4D. Neste exemplo, a stirng "Hello" é um argumento para o comando integrado `ALERT`:

```4d
ALERT("Hello")
```

Os parâmetros são passados da mesma forma aos métodos. For example, if a project method named DO SOMETHING accepted three parameters, a call to the method might look like this:

```4d
DO SOMETHING(WithThis;AndThat;ThisWay)
```
Os parâmetros são separados por ponto e vírgula (;). Seu valor é avaliado no momento da chamada.

In the subroutine (the method that is called), the value of each parameter is automatically copied into sequentially numbered local variables: $1, $2, $3, and so on. A numeração das variáveis locais representam a ordem dos parâmetros.

```4d
  //Code of the method DO SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the WithThis parameter
  //$2 contains the AndThat parameter
  //$3 contains the ThisWay parameter
```

Dentro da subrotina, pode utilizar os parâmetros $1, $2... da mesma maneira que utilizaria qualquer outra variável local. Entretanto, no caso de usar comandos que modifiquem o valor da variável passada como parâmetro (por exemplo `Find in field`), os parâmetros $1, $2, etc. não podem ser utilizardos diretamente. Primeiro deve copiá-los nas variáveis locais padrão (por exemplo: `$myvar:=$1`).

Os mesmos princípios são usados quando métodos forem executados através de comandos dedicados, por exemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//passe a data !05/05/10! date as parameter to the SetCalendarDate  
// in the context of a subform
```

**Note:** For a good execution of code, you need to make sure that all `$1`, `$2`... parameters are correctly declared within called methods (see [Declaring parameters](#declaring-parameters) below).


### Expressões suportadas

You can use any [expression](Concepts/quick-tour.md#expression-types) as parameter, except:

- tabelas
- arrays

Tables or array expressions can only be passed [as reference using a pointer](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).


## Funções

Os dados podem ser devolvidos pelos métodos. Um método que retorna um valor é chamado uma função.

4D or 4D Plug-in commands that return a value are also called functions.

For example, the following line is a statement that uses the built-in function, `Length`, to return the length of a string. As instruções põe o valor devolvido por `Length` em uma variável chamada *MyLength*. Esta é a instrução:

```4d
MyLength:=Length("How did I get here?")
```

Qualquer subrotina pode retornar um valor. The value to be returned is put into the local variable `$0`.

For example, the following function, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

Segue-se um exemplo que utiliza a função Uppercase4:

```4d
NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *NewPhrase* gets “THIS is good.”

The function result, `$0`, is a local variable within the subroutine. Pode ser usado como tal dentro da subrotina. For example, in the previous `DO SOMETHING` example, `$0` was first assigned the value of `$1`, then used as parameter to the `ALERT` command. Dentro de la subrotina, pode utilizar `$0` da mesma maneira que utilizaria qualquer outra variável local. É 4D quem devolve o valor de `$0` (como estiver quando a subrotina terminar) ao método chamado.


## Declaração de parâmetros

Even if it is not mandatory in [interpreted mode](Concepts/interpreted.md), you must declare each parameter in the called methods to prevent any trouble.

In the following example, the `OneMethodAmongOthers` project method declares three parameters:

```4d
  // OneMethodAmongOthers Project Method
  // OneMethodAmongOthers ( Real ; Date { ; Long } )
  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )

 C_REAL($1) // 1st parameter is of type Real
 C_DATE($2) // 2nd parameter is of type Date
 C_LONGINT($3) // 3rd parameter is of type Long Integer
```

No exemplo abaixo, o método projeto `Capitalize`  aceita um parâmetro texto e devolve um resultado texto:

```4d
  // Método projeto Maiúsculas
  // Maiúsculas( Texto ) -> Texto
  // Maiúsculas( Cadena fuente ) -> String com a primeira letra em maiúscula

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

A utilização de comandos tais como `New process` com métodos processo que aceitem parâmetros também requer que os parâmetros se declarem explicitamente no método chamado. Por exemplo:

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

**Note:** For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Dentro deste método, pode pré-declarar os parâmetros de cada método, por exemplo:
```4d
 C_REAL(OneMethodAmongOthers;$1)
```
See [Interpreted and compiled modes](Concepts/interpreted.md) page for more information.

A declaração de parâmetros também é obrigatóiria nos contextos abaixo (esses contextos não são compatíveis com declarações em um método "Compiler"):

- Database methods For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. No começo do método database, tem que escrever (mesmo se todos os parâmetros não forem usados):

```4d
// On Web Connection C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Entretanto, se quiser declará-lo, deve fazer isso no próprio trigger.

- Form objects that accept the `On Drag Over` form event The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Entretanto, se quiser fazer a declaração, deve fazer isso no método objeto. **Nota:** o compilador não inicializa o parâmetro $0. Portanto, logo que utilizar o evento formulário `On Drag Over`, deve inicializar $0. Por exemplo:
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

## Valores ou referências

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the $1, $2... local variables in the subroutine (see [Using parameters](#using-parameters)). As variáveis locais/parâmetros não são os campos, variáveis ou expressões realmente passadas pelo método chamada; eles apenas contém os valores que foram passados. Since its scope is local, if the value of a parameter is modified in the subroutine, it does not change the value in the calling method. Por exemplo:

```4d
    //Here is some code from the method MY_METHOD DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams" ALERT([People]Name)

    //Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

A caixa de alerta mostrada por `DO_SOMETHING` dirá "WILLIAMS" e a caixa de alerta mostrada por `MY_METHOD` dirá "williams". O método mudou localmente o valor do parâmetro $1, ma isso não afeta o valor de campo `[People]Name` passado como parâmetro pelo método `MY_METHOD`.

Há duas formas de fazer com que o método `DO_SOMETHING` mude o valor de campo:

1. Ao invés de passar o campo para o método, passa um ponteiro para ele, por isso pode escrever:

```4d
  //Esta é uma parte do código do método MY_METHOD
 DO_SOMETHING(->[People]Name) //Suponha que o valor de [People]Name value seja "williams"
 ALERT([People]Last Name)

  //Este é o código do método DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Aqui é o parâmetro não for o campo, mas sim um ponteiro ao mesmo. Portanto, dentro do método `DO SOMETHING`, $1 já não é o valor do campo mas um ponteiro ao campo. O objeto **referenciado** por $1 ($1-> no código anterior) é o campo real. Portanto, mudar o objeto referenciado vai além do escopo da subrotina, e o campo real não é afetado. Neste exemplo, as duas caixas de alerta dirão "WILLIAMS".

2. Ao invés de ter o método `DO_SOMETHING` "faça algo", pode reescrever o método para que devolva um valor. Portanto escreveria:

```4d
    //Esta é uma parte do código do método MY_METHO
 [People]Name:=DO_SOMETHING([People]Name) //Suponha que o valor de [People]Name seja "williams"
 ALERT([People]Name)

    //Este é o código do método DO_SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Esta segunda técnica de retornar um valor por uma subrotina se chama " utilizar uma função" É descrita no parágrafo [Funções](#functions). Isso é descrito no parágrafo [Funções](#functions).


### Casos particulares: objetos e coleções

Deve prestar atenção ao fato de que os tipos de dados Objeto e Coleção só podem ser manejados através de uma referência (ou seja, um  *ponteiro* interno).

Por isso, quando usar esses tipos de dados como parâmetros, `$1, $2...` não contém *valores* mas sim *referências*. A modificação do valor dos parâmetros `$1, $2...` dentro da subrotina se propagará a qualquer lugar onde se utilize o objeto ou coleção fonte. This is the same principle as for [pointers](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

Por exemplo, considere o método `CreatePerson` que cria um objeto e o envia como parâmetro:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

O método `ChangeAge` adiciona 10 ao atributo Age do objeto recebido

```4d
  //ChangeAge
 C_OBJECT($1)
 $1.Age:=$1.Age+10
 ALERT(String($1.Age))
```

Quando executar o método `CreatePerson`, as duas caixas de alerta dirão "50" já que a mesma referência de objeto é manejada por ambos métodos.

**4D Server:** quando são passados parâmetros entre métodos que não são executados na mesma máquina (utilizando por exemplo a opção "Executar no servidor"), as referencias não são utilizáveis. Nestes casos, são enviadas cópias dos parâmetros de objetos e coleções ao invés de referências.


## Parâmetros com nomes

A utilização de objetos como parâmetros permite manejar **parâmetros com nome**. Este estilo de programação é simples, flexível e fácil de ler.

Por exemplo, utilizando o método `CreatePerson`:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```
No método `ChangeAge` pode escrever:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
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
 C_OBJECT($1;$para)
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
C_OBJECT($1;$para)
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

No manual *Linguagem de 4D*, os caracteres { } (chaves) indicam parâmetros opcionais. Por exemplo, `ALERT (message{; okButtonTitle})` significa que o parâmetro *okButtonTitle* pode omitir o chamado ao comando. Pode fazer a chamada de duas maneiras:
```4d
ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter
```

4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. Uma boa prática é atribuir valores padrão a parâmetros não utilizados.

> When optional parameters are needed in your methods, you might also consider using [Named parameters](#named-parameters) which provide a flexible way to handle variable numbers of parameters.

Utilizando o comando `Count parameters` desde dentro do método chamado, pode detectar o número real de parâmetros e realizar diferentes operações dependendo do que tenha recebido.

O exemplo abaixo mostra uma mensagem de texto e pode inserir o texto em um documento no disco ou em uma área de 4D Write Pro:

```4d
// Método projeto APPEND TEXT
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 C_TEXT($1;$2)
 C_OBJECT($3)

 ALERT($1)
 If(Count parameters>=3)
    WP SET TEXT($3;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($2;$1)
    End if
 End if
```
Depois de adicionar este método projeto a sua aplicação, pode escrever:

```4d  
APPEND TEXT(vtSomeText) //Will only display the  message APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```


## Indirecção de parâmetros

4D project methods accept a variable number of parameters of the same type, starting from the right. Esse princípio é chamado **indireção dos parâmetros**. Using the `Count parameters` command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax.

In the following example, the project method `SEND PACKETS` accepts a time parameter followed by a variable number of text parameters:

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

A indireção de parâmetros se gerencia melhor se respeitar a convenção abaixo: se só alguns dos parâmetros forem endereçados por indireção, devem ser passados depois dos outros. Within the method, an indirection address is formatted: $\{$i\}, where $i is a numeric variable. $\{$i\} é chamado **parâmetro genérico**.

For example, consider a function that adds values and returns the sum formatted according to a format that is passed as a parameter. Cada vez que chamar a esse método, o número de valores a somar pode variar. Devemos passar os valores como parâmetros ao método e o formato em forma de string dos caracteres. O número de valores pode variar de chamada a chamada.

Esta função é chamada da seguinte forma:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

In this case, the calling method will get the string “182.70”, which is the sum of the numbers, formatted as specified. The function's parameters must be passed in the correct order: first the format and then the values.

Aqui está a função, denominada `MySum`:
```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

Esta função pode agora ser chamada de várias formas:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```


### Declaração de parâmetros genéricos

Da mesma forma que com outras variáveis locais, não é obrigatório declarar os parâmetros genéricos mediante uma diretiva de compilador. Entretanto é recomendado que se evite qualquer ambiguidade. Para declarar estes parâmetros, se utiliza uma diretriz do compilador à qual se passa ${N} como parâmetro, onde N especifica o primeiro parâmetro genérico.

```4d
 C_LONGINT(${4})
```

Esse comando significa que a partir do quarto parâmetro (incluído), o método pode receber um número variável de parâmetros de tipo longint. $1, $2 e $3 podem ser de qualquer tipo de dados. Entretanto, se usar $2 por indireção, o tipo de dados usados será do tipo genérico. Thus, it will be of the data type Longint, even if for you it was, for instance, of the data type Real.

**Note:** The number in the declaration has to be a constant and not a variable.
