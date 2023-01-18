---
id: parameters
title: Parâmetros
---


## Utilização de parâmetros

Frequentemente será preciso passar dados para seus métodos. Isso é facilmente feito com parâmetros.

**Os parâmetros** (ou **argumentos**) são peças de dados que um método necessita para realizar sua tarefa. Os termos *parámetros* e *argumentos* são utilizados indiferentemente neste manual. Parâmetros também são passados para comandos integrados 4D. Neste exemplo, a stirng "Hello" é um argumento para o comando integrado `ALERT`:

```4d
ALERT("Hello")
```

Os parâmetros são passados aos métodos da mesma maneira. Por exemplo, se um método projeto chamado DO SOMETHING aceitar três parâmetros, uma chamada ao método poderia ter a seguinte forma:

```4d
DO SOMETHING(WithThis;AndThat;ThisWay)
```
Os parâmetros estão separados por ponto e vírgula (;). Seu valor é avaliado no momento da chamada.

Na subrotina (o método chamado), o valor de cada parâmetro se copia automaticamente em variáveis locais numeradas sequencialmente: $1, $2, $3, etc. A numeração das variáveis locais representam a ordem dos parâmetros. A numeração das variáveis locais representam a ordem dos parâmetros.

```4d
  //Código do método DO SOMETHING
  //Assumindo que todos os parâmetros são de tipo texto
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contém o parâmetro WithThis
  //$2 contém o parâmetro AndThat
  //$3 contém o parâmetro ThisWay
```

Dentro da subrotina, pode utilizar os parâmetros $1, $2... da mesma maneira que utilizaria qualquer outra variável local. Entretanto, no caso de usar comandos que modifiquem o valor da variável passada como parâmetro (por exemplo `Find in field`), os parâmetros $1, $2, etc. não podem ser utilizardos diretamente. Primeiro deve copiá-los nas variáveis locais padrão (por exemplo: `$myvar:=$1`).

Os mesmos princípios são usados quando métodos forem executados através de comandos dedicados, por exemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10!  
//passe a data !05/05/10! como parâmetro del SetCalendarDate  
// no contexto de um subformulário
```

**Nota:** para uma boa execução do código, é necessário ter certeza de que todos os parâmetros `$1`, `$2`... estejam corretamente declarados dentro dos métodos chamados (ver [Declaração de parâmetros](#declaring-parameters) mais abaixo).


### Expressões compatíveis

Pode utilizar toda [expressão](Concepts/quick-tour.md#expression-types) como parâmetro, exceto:

- tabelas
- arrays

As expressões de tabelas ou arrays só podem ser passadas [como referência utilizando um ponteiro](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).


## Funções

Os dados podem ser devolvidos pelos métodos. Um método que devolve um valor se chama uma função.

Os comandos de 4D ou 4D Plug-in que devolvem um valor também são chamados funções.

Por exemplo, a linha abaixo é uma sentença que usa a função integrada, `Length`, para devolver a longitude de uma string. As instruções põe o valor devolvido por `Length` em uma variável chamada *MyLength*. Esta é a instrução:

```4d
MyLength:=Length("How did I get here?")
```

Qualquer subrotina pode retornar um valor. O valor a devolver é posto na variável local `$0`.

Por exemplo, a função abaixo, chamada `Uppercase4`, devolve uma string com os quatro  primeiros caracteres da string que foram passados em maiúsculas:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

Abaixo está um exemplo que utiliza a função Uppercase4:

```4d
NewPhrase:=Uppercase4("This is good.")
```

Neste exemplo, a variável *NewPhrase* recebe “THIS is good.”

O resultado da função, `$0`, é uma variável local dentro da subrotina. Pode ser usado como tal dentro da subrotina. It can be used as such within the subroutine. Dentro de la subrotina, pode utilizar `$0` da mesma maneira que utilizaria qualquer outra variável local. É 4D quem devolve o valor de `$0` (como estiver quando a subrotina terminar) ao método chamado.


## Declaração de parâmetros

Mesmo não sendo obrigatório em [modo interpretado](Concepts/interpreted.md), deve declarar cada parâmetro nos métodos chamados para evitar problemas.

No exemplo abaixo, o método de projeto `OneMethodAmongOthers` declara três parâmetros:

```4d
  // Método projeto OneMethodAmongOthers
  // OneMethodAmongOthers ( Real ; Date { ; Long } )
  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )

 C_REAL($1) // O primeiro parâmetro é de tipo Real
 C_DATE($2) // O segundo parâmetro é de tipo Data
 C_LONGINT($3) // O terceiro parâmetro é de tipo Inteiro longo
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

**Nota:** em modo compilado, pode agrupar todos os parámetros das variáveis locais dos métodos projeto em um método específico com um nome que comece por "Compiler". Dentro deste método, pode pré-declarar os parâmetros de cada método, por exemplo:
```4d
 C_REAL(OneMethodAmongOthers;$1)
```
Ver a página [Modos interpretado e compilado](Concepts/interpreted.md) para mais informação.

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
  //ChangeAge
 C_OBJECT($1)
 $1. Age:=$1. Age+10
 ALERT(String($1.
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
 ALERT(String($person.  
```
No método `ChangeAge` pode escrever:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para. Age:=$para. Age+10
 ALERT($para. Name+" is "+String($para.
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
 $para. Age:=Num($para. Age)+10
 ALERT(String($para. Name)+" is "+String($para.
```
Ambos parâmetros são opcionais: se não forem preenchidos, o resultado será "é 10 anos de idade", mas nenhum erro será gerado.

Finalmente, com parâmetros com nome, a manutenção ou a reprodução das aplicações é muito simples e seguro. Imagine que depois perceba de que adicionar 10 anos não funciona sempre. You need another parameter to set how many years to add. You write: Escreva:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge C_OBJECT($1;$para)
$para:=$1 If ($para.toAdd=Null)
    $para.toAdd:=10 End if
$para. Age:=Num($para. Age)+$para.toAdd ALERT(String($para. Name)+" is "+String($para.
```
Não precisará mudar seu código existente. Sempre funcionará como na versão anterior, mas se for necessário, é possível usar outro valor diferente de 10 anos.

Com variáveis com nome, qualquer parâmetro pode ser opcional. No exemplo acima, todos os parâmetros são opcionais e qualquer pode ser dado em qualquer ordem.


## Parâmetros opcionais

No manual *Linguagem de 4D*, os caracteres { } (chaves) indicam parâmetros opcionais. Por exemplo, `ALERT (message{; okButtonTitle})` significa que o parâmetro *okButtonTitle* pode omitir o chamado ao comando. Pode fazer a chamada de duas maneiras:
```4d
ALERT("Are you sure?";"Yes I am") //2 parameters ALERT("Time is over") //1 parameter
```

Os métodos projeto 4D também aceitam esses parâmetros opcionais, começando pela direita. O problema com os parâmetros opcionais é como manejar o caso em que alguns deles estejam faltando no método chamado, nunca deveria produzir um erro. Uma boa prática é atribuir valores padrão aos parâmetros não utilizados.

> Quando os parâmetros opcionais forem necessários em seus métodos, também pode considerar o uso de [parâmetros com nome](#named-parameters) que oferecem uma forma flexível de manejar um número variável de parâmetros.

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


## Indireção dos parâmetros

Os métodos projeto 4D aceitam um número variável de parametros do mesmo tipo, começando pela direita. Este princípio se chama **la indireção de parâmetros**. Using the `Count parameters` command you can then address those parameters with a `For... End for` loop and the parameter indirection syntax.

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


### Declaração de parâmetros genéricos

Da mesma forma que com outras variáveis locais, não é obrigatório declarar os parâmetros genéricos mediante uma diretiva de compilador. Entretanto é recomendado que se evite qualquer ambiguidade. Para declarar estes parâmetros, se utiliza uma diretriz do  compilador à qual se passa ${N} como parâmetro, onde N especifica o primeiro parâmetro genérico.

```4d
 C_LONGINT(${4})
```

Esse comando significa que a partir do quarto parâmetro (incluído), o método pode receber um número variável de parâmetros de tipo longint. $1, $2 e $3 podem ser de qualquer tipo de dados. Entretanto, se usar $2 por indireção, o tipo de dados usados será do tipo genérico. $1, $2 and $3 can be of any data type.

**Nota:** O número na declaração tem que ser uma constante e não uma variável.
