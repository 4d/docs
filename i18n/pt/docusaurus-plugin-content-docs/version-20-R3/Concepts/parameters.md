---
id: parameters
title: Parâmetros
---


Frequentemente será preciso passar dados para seus métodos. Isso é facilmente feito com parâmetros.

## Visão Geral

**Os parâmetros** (ou **argumentos**) são peças de dados que um método necessita para realizar sua tarefa. Os termos *parámetros* e *argumentos* são utilizados indiferentemente neste manual. Parâmetros também são passados para comandos integrados 4D. Neste exemplo, a stirng "Hello" é um argumento para o comando integrado `ALERT`:

```4d
ALERT("Hello")
```

Os parâmetros são passados aos métodos da mesma maneira. Por exemplo, se um método projeto chamado DO SOMETHING aceitar três parâmetros, uma chamada ao método poderia ter a seguinte forma:

```4d
$area:=$o.getArea(50;100)
```

Ou, se um método projeto chamado `DO_SOMETHING` aceitar três parâmetros, uma chamada ao método poderia ter a seguinte forma:

```4d
Essa função é chamada da maneira abaixo:
```

Os parâmetros estão separados por ponto e vírgula (;).

Os mesmos princípios são usados quando métodos forem executados através de comandos dedicados, por exemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10!  
//passe a data !05/05/10! como parâmetro del SetCalendarDate  
// no contexto de um subformulário
```

Dados também podem ser **devolvidos**desde métodos e funções de classe. Por exemplo, a linha abaixo é uma sentença que usa a função integrada, `Length`, para devolver a longitude de uma string. As instruções põe o valor devolvido por `Length` em uma variável chamada *MyLength*. Esta é a instrução:

```4d
MyLength:=Length("How did I get here?")
```

Qualquer subrotina pode retornar um valor. Só se pode declarar um único parámetro de saída por método ou função de classe.

Os valores de entrada e saída são [avaliados](#values-or-references) no momento da chamada e copiados em ou de variáveis locais na função, ou método da classe chamada. Os parâmetros das variáveis devem ser [declarados](#declaring-parameters) no código chamado.


:::info Compatibilidade

Ao longo da documentação 4D, pode ver exemplos onde os parâmetros são automaticamente copiados em variáveis locais numeradas sequencialmente ($0, $1, etc.) e declarados usando directivas do compilador. Ex: `C_TEXT($1;$2)`. Esta sintaxe antiga ainda é suportada, mas já não é recomendada.

:::


## Declaração de parâmetros

Dentro de métodos ou funções de classe chamados, valores parâmetros são atribuidos à variáveis locais. Pode declarar parâmetros usando um **nome de parâmetro** junto com um **tipo de parâmetro**, separado por vírgula.

- Para as funções de classe, os parâmetros se declaram junto com a palavra chave `Function`.
- Para os métodos (métodos projeto, métodos objeto formulario, métodos base e triggers), os parâmetros se declaram utilizando a palavra chave `#DECLARE` ao principio do código do método.

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
- Os nomes dos parâmetros devem começar com um caractere `$` e cumprir com [as regras de denominação das propriedades](identifiers.md#object-properties).
- Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).
- Sintaxes multilinha são aceitas (usando "\\").


Por exemplo, pode chamar uma função `getArea()` com dois parâmetros:

```4d
$area:=$o.getArea(50;100)
```

No código da função classe, o valor de cada parâmetro se copia no parâmetro declarado correspondente:

```4d    
// Class: Polygon Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
```
> Se o tipo não for definido, o parâmetro será definido como [`Variant`](dt_variant.md).

Todos os métodos 4D são compatíveis com a palavra chave `#DECLARE` incluindo os métodos de banco de dados. Por exemplo, no método de database `On Web Authentication` pode declarar parâmetros nomeados:

```4d    
    // On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds. User.query("login=:1"; $user)
// Check hash password...
```

### Valor retornado

Pode declarar o parâmetro retornado de uma função adicionado uma flecha (->) e a definição de parâmetro depois da lista de parâmetros de input. Por exemplo:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

Também é possível declarar o parâmetro de retorno apenas acrescentando `: type`, caso em que pode ser tratado por um [return](#return-expression). Por exemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
    return $x+$y
```


:::warning

Os parâmetros, que incluem o valor retornado, devem ser declarados apenas uma vez. Em particular, você não pode declarar o mesmo parâmetro como entrada e saída, mesmo com o mesmo tipo. Por exemplo:

```qs
    //declaração inválida
Function myTransform ($x : Integer) -> $x : Integer 
    //erro: $x é declarado duas vezes
```

:::



### Tipos de datos compatíveis

Com parâmetros nomeados, pode usar os mesmos tipos dados que aqueles [que são compatíveis com `var` keyword](variables.md#using-the-var-keyword), incluindo objetos classe. Por exemplo:

```4d
Function saveToFile($entity : cs. ShapesEntity; $file : 4D. File)
```

:::note

As expressões de tabelas ou arrays só podem ser passadas [como referência utilizando um ponteiro](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Inicialização

Quando os parâmetros são declarados, são inicializados com o [**valor por defeito correspondente ao seu tipo**](data-types.md#default-values), que manterão durante a sessão enquanto não tiverem sido atribuídos.



## `return {expression}`

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |
</details>

A declaração `return` finaliza a execução de uma função ou de um método e pode ser utilizado para devolver uma expressão a quem chamar.

Por exemplo, a seguinte função devolve o quadrado de seu argumento, $x, onde $x é um número.

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internamente, `return x` executa `$0:=x` ou (if declared) `myReturnValue:=x`, e retorna ao chamante. Se `return` for usado sem uma expressão, a função ou método retorna um valor null do tipo retornado declarado (se houver), senão *undefined*.


A declaração `return` pode ser usado com a sintaxe padrão para [valores retornados](#returned-value) (o valor retornado deve ser do tipo declarado). Entretanto lembre que isso finaliza imediatamente a execução de código. Por exemplo:


```4d
Function getValue
    $0:=10
    return 20
    // returns 20 Function getValue -> $v : Integer
    return 10
    $v:=20 // never executed
    // returns 10
```



## Indireção dos parâmetros

Os métodos e funções 4D aceitam um número variável de parâmetros. Você pode abordar esses parâmetros com um loop `For...End for`, o comando [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) e a **sintaxe de indireção dos parâmetros **. Dentro do método, um endereço de indireçao é formatado: ${$i}, onde $i for uma variável numérica.


### Uso de parâmetros variáveis

Por exemplo, considere uma função que some os valores e devolva a soma formatada segundo um formato que se passa como parâmetro. Cada vez que chamar a esse método, o número de valores a somar pode variar. Devemos passar os valores como parâmetros ao método e o formato em forma de string dos caracteres. O número de valores pode variar de chamada a chamada.

Aqui está a função, chamada `MySum`:

```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

Os parâmetros da função devem ser passados na ordem correta: primeiro o formato e depois os valores.

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```

Observe que, mesmo que tenha declarado 0, 1 ou mais parâmetros, você sempre poderá passar o número de parâmetros que desejar. Os parâmetros estão todos disponíveis no código chamado por meio da sintaxe `${N}` e o tipo de parâmetros extras é [Variant](dt_variant.md) por padrão (você pode declará-los usando a [notação variadic](#declaring-variadic-parameters)). Basta ter a certeza de que os parâmetros existem, graças ao comando [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html). Por exemplo:

```4d
// Método projeto OneMethodAmongOthers
  // OneMethodAmongOthers ( Real ; Date { ; Long } )
  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )

 C_REAL($1) // O primeiro parâmetro é de tipo Real
 C_DATE($2) // O segundo parâmetro é de tipo Data
 C_LONGINT($3) // O terceiro parâmetro é de tipo Inteiro longo
```

Esta função pode ser chamada agora de várias formas:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed //extra parameters are passed
```

> A indireção de parâmetros se gerencia melhor se respeitar a convenção abaixo: se só alguns dos parâmetros forem endereçados por indireção, devem ser passados depois dos outros.


### Declaração de parâmetros variáveis

Não é obrigatório declarar parâmetros variáveis. Os parâmetros variáveis não declarados recebem automaticamente o tipo [Variant](dt_variant.md).

Entretanto, para evitar erros de incompatibilidade de tipos durante a execução do código, você pode declarar um número variável de parâmetros usando a notação "..." nos protótipos de suas funções, construtores de classes e métodos (parâmetros variádicos). Você especifica o tipo do parâmetro seguindo a notação "..." com o tipo desejado.

```4d
#DECLARE ( ... : Text ) // Número indefinido de parâmetros 'Text'

```

```4d
Fonction myfunction ( ... : Text)

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

$total1:=SumNumbers // retorna 0 
$total2:=SumNumbers(1; 2; 3; 4; 5) // retorna 15
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // erro

```

:::note Nota de compatibilidade

A sintaxe herdada para declarar parâmetros variádicos (`C_TEXT(${4})`) ainda é compatível, mas a notação variádica agora é a preferida.

:::

## Método `Compiler_Methods`

Even if it is not mandatory in [interpreted mode](interpreted.md), you must declare each parameter in the called methods as soon as you intend to compile your project.

Ao usar a palavra-chave `#DECLARE`, os parâmetros são declarados. Por exemplo:

```4d
#DECLARE($myParam : Text; $myOtherParam : Integer) : Boolean
    // all parameters are declared with their type
```

However, the 4D compiler needs that you declare all your parameters in a specific method using a special syntax:

- é possível agrupar todos os parâmetros de variáveis locais para métodos de projeto num ou mais métodos de projeto
- o(s) nome(s) do(s) método(s) deve(m) começar por "**Compiler**", por exemplo "Compiler_MyParameters".
- Dentro de um método deste tipo, pode pré-declarar os parâmetros de cada método utilizando a seguinte sintaxe: `C_XXX(methodName;parameter)`.

Por exemplo:

```4d  
 C_REAL(OneMethodAmongOthers;$1) 
```

:::note

Esta sintaxe não é executável em modo interpretado.

:::

You can create and fill automatically a `Compiler` method containing all your parameters using the [**Compiler Methods for...**](../Project/compiler.md#compiler-methods-for) **Methods** button in the Compiler Settings dialog box.

:::info

Some contexts do not support declaration in a "Compiler" method, thus they are handled specifically:

- Métodos de base de dados - Por exemplo, o método de base de dados `On Web Connection` recebe seis parâmetros do tipo de dados Text. No começo do método database, tem que escrever (mesmo se todos os parâmetros não forem usados):

```4d
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Functions - Function parameters are automatically declared for compilation in the function prototype. Por exemplo:

```4d
Função add($x : Variante; $y : Integer)-> $result : Integer
    // todos os parâmetros são declarados com o seu tipo
```

- Triggers - O parâmetro $0 (Longint), o resultado de um trigger, será tipado pelo compilador se o parâmetro não tiver sido declarado explicitamente. Entretanto, se quiser declará-lo, deve fazer isso no próprio trigger.

- Objectos de formulário que aceitam o evento de formulário `On Drag Over` - O parâmetro $0 (Longint), que é o resultado do evento de formulário `On Drag Over` , é tipado pelo compilador se o parâmetro não tiver sido explicitamente declarado. Entretanto, se quiser fazer a declaração, deve fazer isso no método objeto. **Nota:** o compilador não inicializa o parâmetro $0. Portanto, logo que utilizar o evento formulário `On Drag Over`, deve inicializar $0. Por exemplo:

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



## Tipo de parámetro equivocado

Chamar a um parámetro com um tipo incorreto é um [erro](error-handling.md) que impede a correta execução. Por exemplo se executar os métodos

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //tipo incorrecto, texto esperado
```

Este caso es tratado por 4D dependendo do contexto:

- em[projetos compilados](interpreted.md), se gera um erro no passo de compilação sempre que seja possível. Senão, um erro é gerado quando o método for chamado.
- em projetos interpretados:
    + se o parámetro se declarou utilizando la [sintaxe nomeada](#named-parameters) (`#DECLARE` ou `Function`), se gera um erro quando se chama ao método.
    + se o parâmetro foi declarado utilizando (`C_XXX`), não é gerado qualquer erro, o método chamado recebe um valor vazio do tipo esperado.






## Usando propriedades objeto como parâmetros nomeados

A utilização de objetos como parâmetros permite manejar **parâmetros com nome**. Este estilo de programação é simples, flexível e fácil de ler.

Por exemplo, utilizando o método `CreatePerson`:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.  
```

No método `ChangeAge` pode escrever:

```4d
  Parâmetros com nomes
```

Isso oferece uma poderosa maneira de definir [parâmetros opcionais](#optional-parameters) (ver também abaixo). Para manejar os parâmetros que faltam, pode:
- veja se todos os parâmetros esperados são fornecidos comparando-os com o valor `Null`, ou
- pré-definir os valores dos parâmetros, ou
- usá-los como valores vazios.

No método `ChangeAge` anterior, as propriedades Age e Name são obrigatórias e produzirão erross se faltarão. Para evitar isso, pode escrever:

```4d
  foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed //extra parameters are passed
```
Ambos parâmetros são opcionais: se não forem preenchidos, o resultado será "é 10 anos de idade", mas nenhum erro será gerado.

Finalmente, com parâmetros com nome, a manutenção ou a reprodução das aplicações é muito simples e seguro. Imagine que depois perceba de que adicionar 10 anos não funciona sempre. You need another parameter to set how many years to add. You write: Escreva: Escreve:

```4d
Result:=MySum("##0.00";125,2;33,5;24)
```

Não precisará mudar seu código existente. Sempre funcionará como na versão anterior, mas se for necessário, é possível usar outro valor diferente de 10 anos.

Com variáveis com nome, qualquer parâmetro pode ser opcional. No exemplo acima, todos os parâmetros são opcionais e qualquer pode ser dado em qualquer ordem.



## Parâmetros opcionais

No manual *Linguagem de 4D*, os caracteres { } (chaves) indicam parâmetros opcionais. Por exemplo, `ALERT (message{; okButtonTitle})` significa que o parâmetro *okButtonTitle* pode omitir o chamado ao comando. Pode fazer a chamada de duas maneiras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter
```

Os métodos projeto 4D também aceitam esses parâmetros opcionais, começando pela direita. Pode declarar qualquer número de parâmetros. Se chamar um método ou função com parâmetros menos que declarados, parametros faltantes são processados como valores padrão no modo chamado, [de acordo com seu tipo](data-types.md#default-values). Por exemplo:

```4d
// "concate" function of myClass Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```
```4d
  // Método de chamada
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Mostra " "
```

> Também se pode chamar um método ou função com mais parâmetros do que os declarados. Estará disponível dentro do código chamado atraves da  [${N} sintaxe](#parameter-indirection-n).

Utilizando o comando `Count parameters` desde dentro do método chamado, pode detectar o número real de parâmetros e realizar diferentes operações dependendo do que tenha recebido.

O exemplo abaixo mostra uma mensagem de texto e pode inserir o texto em um documento no disco ou em uma área de 4D Write Pro:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 #DECLARE($message : Text; $path : Text; $wpArea : Object)

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

> Quando os parâmetros opcionais forem necessários em seus métodos, também pode considerar o uso de [parâmetros com nome](#named-parameters) que oferecem uma forma flexível de manejar um número variável de parâmetros.



## Valores ou referências

Quando passar um parâmetro, 4D sempre avalia a expressão do parâmetro no contexto do método que chama e define o **valor resultante** nas variáveis locais $1, $2... da subrotina (ver [Utilização dos parâmetros](#using-parameters)). As variáveis locais/parâmetros não são os campos, variáveis ou expressões realmente passadas pelo método chamada; eles apenas contém os valores que foram passados. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Por exemplo:

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

Esta segunda técnica de retornar um valor por uma subrotina se chama " utilizar uma função" É descrita no parágrafo [Funções](#functions). É descrita no parágrafo [Funções](#functions).


### Casos particulares: objetos e coleções

Deve prestar atenção ao fato de que os tipos de dados Objeto e Coleção só podem ser manejados através de uma referência (ou seja, um  *ponteiro* interno).

Por isso, quando usar esses tipos de dados como parâmetros, `$1, $2...` não contém *valores* mas sim *referências*. A modificação do valor dos parâmetros `$1, $2...` dentro da subrotina se propagará a qualquer lugar onde se utilize o objeto ou coleção fonte. Este é o mesmo principio que  [os ponteiros](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), exceto que os parâmetros `$1, $2...` não necessitam ser desreferenciados na subrotina.

Por exemplo, considere o método `CreatePerson` que cria um objeto e o envia como parâmetro:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.  
```


O método `ChangeAge` adiciona 10 ao atributo Age do objeto recebido

```4d
  Parâmetros
```

Quando executar o método `CreatePerson`, as duas caixas de alerta dirão "50" já que a mesma referência de objeto é manejada por ambos métodos.


**4D Server:** quando são passados parâmetros entre métodos que não são executados na mesma máquina (utilizando por exemplo a opção "Executar no servidor"), as referencias não são utilizáveis. Nestes casos, são enviadas cópias dos parâmetros de objetos e coleções ao invés de referências.


