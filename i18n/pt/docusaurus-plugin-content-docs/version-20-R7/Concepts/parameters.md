---
id: parameters
title: Parâmetros
---

Frequentemente será preciso passar dados para seus métodos. Isso é facilmente feito com parâmetros.

## Visão Geral

Os **parâmetros** (ou **argumentos**) são partes de dados que um método ou uma função de classe precisa para executar sua tarefa. Os termos *parâmetro* e *argumento* são usados de forma intercambiável ao longo deste manual. Parâmetros também são passados para comandos integrados 4D. Neste exemplo, a cadeia de caracteres "Hello" é um argumento para o comando interno `ALERT`:

```4d
ALERT("Hello")
```

Os parâmetros são passados aos métodos da mesma maneira. Por exemplo, se uma função de classe chamada `getArea()` aceita dois parâmetros, uma chamada para a função de classe pode se parecer com isso:

```4d
$area:=$o.getArea(50;100)
```

Ou, se um método de projeto chamado `DO_SOMETHING` aceitar três parâmetros, uma chamada ao método poderá ter a seguinte aparência:

```4d
Essa função é chamada da maneira abaixo:
```

Os parâmetros estão separados por ponto e vírgula (;).

Os mesmos princípios são usados quando métodos forem executados através de comandos dedicados, por exemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2"; "SetCalendarDate";*;!05/05/20!)  
//passa a data !05/05/20! como parâmetro para SetCalendarDate  
//no contexto de um subformulário
```

Os dados também podem ser **retornados** a partir de métodos e funções de classe. Por exemplo, a linha a seguir é uma instrução que usa o comando interno, `Length`, para retornar o comprimento de uma cadeia de caracteres. A instrução coloca o valor retornado por `Length` em uma variável chamada *MyLength*. Esta é a instrução:

```4d
MyLength:=Length("How did I get here?")
```

Qualquer subrotina pode retornar um valor. Só se pode declarar um único parámetro de saída por método ou função de classe.

Os valores de entrada e saída são [avaliados](#valores-ou-referências) no momento da chamada e copiados para ou de variáveis locais dentro da função ou método da classe chamada. Os parâmetros das variáveis devem ser [declarados] (#declaring-parameters) no código chamado.

:::info Compatibidade

The legacy declaration syntax, where parameters are automatically copied in sequentially numbered local variables $0, $1, etc. and declared using compiler directives such as `C_TEXT($1;$2)`, is **deprecated** as of 4D 20 R7.

:::

## Declaração de parâmetros

Dentro de métodos ou funções de classe chamados, valores parâmetros são atribuidos à variáveis locais. Normalmente, você declara os parâmetros usando um **nome do parâmetro** junto com um **tipo de parâmetro**, separados por dois pontos.

- For class functions, parameters are declared along with the function prototype, i.e. when using the `Function` or `Class Constructor` keywords.
- Para métodos (métodos de projeto, métodos de objeto de formulário, métodos de banco de dados e acionadores), os parâmetros são declarados usando a palavra-chave `#DECLARE` no início do código do método.

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
- Os nomes dos parâmetros devem começar com um caractere `$` e estar em conformidade com as [regras de nomeação de propriedades] (identifiers.md#object-properties).
- Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).
- Sintaxes multilinha são aceitas (usando "\\").

Por exemplo, quando você chama uma função `getArea()` com dois parâmetros:

```4d
$area:=$o.getArea(50;100)
```

No código da função classe, o valor de cada parâmetro se copia no parâmetro declarado correspondente:

```4d
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
	$area:=$width*$height
```

> Se o tipo não for definido, o parâmetro será definido como [`Variant`] (dt_variant.md).

Todos los tipos de métodos de 4D soportan la palabra clave `#DECLARE`, incluidos los métodos base. Por exemplo, no método de database `On Web Authentication`, você pode declarar parâmetros nomeados:

```4d
	// Método  banco de dados On Web Authentication
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Verificar a senha hash...
```

### Valor retornado

Você declara o parâmetro de retorno de uma função adicionando uma seta (->) e a definição do parâmetro após a lista de parâmetros de entrada. Por exemplo:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

Também é possível declarar o parâmetro de retorno apenas acrescentando `: type`, caso em que pode ser tratado por uma [declaração de retorno](#return-expression). Por exemplo:

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

Com parâmetros nomeados, você pode usar os mesmos tipos de dados que são [suportados pela palavra-chave `var`] (variables.md#using-the-var-keyword), incluindo objetos de classe. Por exemplo:

```4d
Function saveToFile($entity : cs. ShapesEntity; $file : 4D. File)
```

:::note

As tabelas ou expressões de matriz só podem ser passadas [como referência usando um ponteiro] (dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Inicialização

Quando os parâmetros são declarados, eles são inicializados com o [**valor padrão correspondente ao seu tipo**] (data-types.md#default-values), que eles manterão durante a sessão, desde que não tenham sido atribuídos.

## `return {expression}`

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

A instrução `return` encerra a execução da função ou do método e pode ser usada para retornar uma expressão ao chamador.

Por exemplo, a seguinte função devolve o quadrado de seu argumento, $x, onde $x é um número.

```4d
Function square($x : Integer) -> $result : Integer
   return $x * $x
```

:::note

Internally, `return x` executes `myReturnValue:=x`, and returns to the caller. Se `return` for usado sem uma expressão, a função ou o método retornará um valor nulo do tipo de retorno declarado (se houver), caso contrário, *indefinido*.

:::

A instrução `return` pode ser usada junto com a sintaxe padrão para [valores retornados](#valorretornado) (o valor retornado deve ser do tipo declarado). Entretanto lembre que isso finaliza imediatamente a execução de código. Por exemplo:

```4d
Function getValue -> $v : Integer
	$v:=10
	return 20
	// returns 20

Function getValue -> $v : Integer
	return 10
	$v:=20 // never executed
	// returns 10
```

## Indireção dos parâmetros

Os métodos e funções 4D aceitam um número variável de parâmetros. Você pode abordar esses parâmetros com um loop `For...End for`, o comando [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) e a sintaxe de indireção de **parâmetro**. Dentro do método, um endereço de indireção é formatado `${N}`, onde `N` é uma expressão numérica.

### Uso de parâmetros variáveis

Por exemplo, considere uma função que some os valores e devolva a soma formatada segundo um formato que se passa como parâmetro. Cada vez que chamar a esse método, o número de valores a somar pode variar. Devemos passar os valores como parâmetros ao método e o formato em forma de string dos caracteres. O número de valores pode variar de chamada a chamada.

Aqui está a função, chamada `MySum`:

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

Observe que, mesmo que tenha declarado 0, 1 ou mais parâmetros, você sempre poderá passar o número de parâmetros que desejar. Os parâmetros estão todos disponíveis no código chamado por meio da sintaxe `${N}` e o tipo de parâmetros extras é [Variant](dt_variant.md) por padrão (você pode declará-los usando a [notação variadic](#declaring-variadic-parameters)). Você só precisa garantir que os parâmetros existam, graças ao comando [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html). Por exemplo:

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

Não é obrigatório declarar parâmetros variáveis. Os parâmetros variadic não declarados recebem automaticamente o tipo [Variant] (dt_variant.md).

Entretanto, para evitar erros de incompatibilidade de tipos durante a execução do código, você pode declarar um número variável de parâmetros usando a notação "..." nos protótipos de suas funções, construtores de classes e métodos (parâmetros variádicos). Você especifica o tipo do parâmetro seguindo a notação "..." com o tipo desejado.

```4d
#DECLARE ( ... : Text ) // Número indefinido de parâmetros 'Text'

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

Aqui temos um método chamado `SumNumbers` que retorna o total calculado para todos os números passados como parâmetros:

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

:::note Compatibidade

The legacy syntax for declaring variadic parameters (`C_TEXT(${4})`) is deprecated as of 4D 20 R7.

:::

## Triggers and On Drag Over

Alguns contextos não suportam a declaração em um método "Compiler_", portanto, são tratados especificamente:

- Triggers - O parâmetro $0 (Longint), o resultado de um trigger, será tipado pelo compilador se o parâmetro não tiver sido declarado explicitamente. Entretanto, se quiser declará-lo, deve fazer isso no próprio trigger.

## Tipo de parámetro equivocado

Chamar um parâmetro com um tipo errado é um [erro] (error-handling.md) que impede a execução correta. Por exemplo se executar os métodos

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //tipo incorrecto, texto esperado
```

Este caso es tratado por 4D dependendo do contexto:

- em [projetos compilados](interpreted.md), um erro é gerado na etapa de compilação sempre que possível. Senão, um erro é gerado quando o método for chamado.
- em projetos interpretados:
  - Se o parâmetro tiver sido declarado usando a [named syntax](#named-parameters) (`#DECLARE` ou `Function`), será gerado um erro quando o método for chamado.
  - if the parameter was declared using a legacy (`_C_XXX`) syntax, no error is generated, the called method receives an empty value of the expected type.

## Usando propriedades objeto como parâmetros nomeados

O uso de objetos como parâmetros permite que você manipule **parâmetros nomeados**. Este estilo de programação é simples, flexível e fácil de ler.

Por exemplo, utilizando o método `CreatePerson`:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

No método `ChangeAge` você pode escrever:

```4d
  //ChangeAge
 #DECLARE ($para : Object)
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

Isso proporciona uma maneira eficiente de definir [parâmetros opcionais] (#optional-parameters) (veja também abaixo). Para manejar os parâmetros que faltam, pode:

- verifique se todos os parâmetros esperados são fornecidos comparando-os com o valor `Null`, ou
- pré-definir os valores dos parâmetros, ou
- usá-los como valores vazios.

No método `ChangeAge` acima, as propriedades Age e Name são obrigatórias e produziriam erros se estivessem faltando. Para evitar isso, pode escrever:

```4d
  //ChangeAge
 #DECLARE ($para : Object)
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Ambos parâmetros são opcionais: se não forem preenchidos, o resultado será "é 10 anos de idade", mas nenhum erro será gerado.

Finalmente, com parâmetros com nome, a manutenção ou a reprodução das aplicações é muito simples e seguro. Imagine que depois perceba de que adicionar 10 anos não funciona sempre. You need another parameter to set how many years to add. You write: Escreva: Escreve:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
#DECLARE ($para : Object)  
If ($para.toAdd=Null)
	$para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Não precisará mudar seu código existente. Sempre funcionará como na versão anterior, mas se for necessário, é possível usar outro valor diferente de 10 anos.

Com variáveis com nome, qualquer parâmetro pode ser opcional. No exemplo acima, todos os parâmetros são opcionais e qualquer pode ser dado em qualquer ordem.

## Parâmetros opcionais

No manual Linguagem de 4D, os caracteres { } (chaves) indicam parâmetros opcionais. Por ejemplo, `ALERT (message{; okButtonTitle})` significa que el parámetro *okButtonTitle* puede omitirse al llamar al comando. Pode fazer a chamada de duas maneiras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter
```

Os métodos projeto 4D também aceitam esses parâmetros opcionais, começando pela direita. Pode declarar qualquer número de parâmetros. Se você chamar um método ou função com menos parâmetros do que o declarado, os parâmetros ausentes serão processados como valores padrão no código chamado, [de acordo com seu tipo] (data-types.md#default-values). Por exemplo:

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

:::note

Também se pode chamar um método ou função com mais parâmetros do que os declarados. Eles estarão disponíveis no código chamado por meio da [${N} syntax](#parameter-indirection-n).

:::

Usando o comando `Count parameters` de dentro do método chamado, você pode detectar o número real de parâmetros e executar diferentes operações, dependendo do que recebeu.

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

Após adicionar este método projeto a sua aplicação, pode escrever:

```4d
APPEND TEXT(vtSomeText) //Will only display the  message APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```

:::tip

Quando parâmetros opcionais são necessários em seus métodos, você também pode considerar o uso de [propriedades do objeto como parâmetros com nome](#using-objects-properties-as-named-parameters), que fornecem uma maneira flexível de lidar com um número variável de parâmetros.

:::

## Valores ou referências

Quando você passa um parâmetro, 4D sempre avalia a expressão do parâmetro no contexto do método de chamada e define o **valor resultante** para as variáveis locais na função de classe ou subrotina. As variáveis locais/parâmetros não são os campos, variáveis ou expressões realmente passadas pelo método chamada; eles apenas contém os valores que foram passados. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Por exemplo:

```4d
	//Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

	//Here is the code of the method DO_SOMETHING
 #DECLARE($param : Text)
 $param:=Uppercase($param)
 ALERT($param)
```

A caixa de alerta exibida por `DO_SOMETHING` mostrará "WILLIAMS" e a caixa de alerta exibida por `MY_METHOD` mostrará "williams". The method locally changed the value of the parameter $param, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

Há duas formas de fazer com que o método `DO_SOMETHING` mude o valor de campo:

1. Ao invés de passar o campo para o método, passa um ponteiro para ele, por isso pode escrever:

```4d
  //Here is some code from the method MY_METHOD
DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Last Name)

  //Here the code of the method DO_SOMETHING
#DECLARE($param : Text)
$param->:=Uppercase($param->)
ALERT($param->)
```

Aqui é o parâmetro não for o campo, mas sim um ponteiro ao mesmo. Therefore, within the `DO SOMETHING` method, $param is no longer the value of the field but a pointer to the field. The object **referenced** by $param ($param-> in the code above) is the actual field. Portanto, mudar o objeto referenciado vai além do escopo da subrotina, e o campo real não é afetado. Neste exemplo, as duas caixas de alerta dirão "WILLIAMS".

2. Ao invés de ter o método `DO_SOMETHING` "fazendo algo", você pode reescrever o método para que ele retorne um valor. Portanto escreveria:

```4d
	//Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

	//Here the code of the method DO SOMETHING
 #DECLARE ($param : Text) -> ($result : Text)
 $result:=Uppercase($param)
 ALERT($result)
```

This second technique of returning a value by a subroutine is called "using a function". Isso é descrito no parágrafo [Returning values](#returning-values).

### Casos particulares: objetos e coleções

Deve prestar atenção ao fato de que os tipos de dados Objeto e Coleção só podem ser manejados através de uma referência (ou seja, um  ponteiro interno\*).

Por isso, quando usar esses tipos de dados como parâmetros, `$param, $return...` não contém *valores* mas sim *referências*. Modifying the value of the `$param, $return...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$param, $return...` parameters do not need to be dereferenced in the subroutine.

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

Quando você executar o método `CreatePerson`, ambas as caixas de alerta exibirão "50", pois a mesma referência de objeto é tratada por ambos os métodos.

**4D Server:** Quando os parâmetros são passados entre métodos que não são executados na mesma máquina (usando, por exemplo, a opção "Execute on Server"), as referências não podem ser usadas. Nestes casos, são enviadas cópias dos parâmetros de objetos e coleções ao invés de referências.
