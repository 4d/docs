---
id: control-flow
title: Fluxo de controlo
---

Independentemente da simplicidade ou da complexidade de um método, sempre utilizará um ou vários dos três tipos de estruturas de programação. As estruturas de programação determinam o fluxo de execução, se serão executadas, e a ordem das linhas de instruções dentro do método. Há três tipos de estruturas:

- **Sequencial**: uma estrutura sequencial é uma estrutura simples e linear. Uma sequência é uma série de sentenças que 4D executa uma atrás da outra, da primera à última. Uma instrução de uma linha, utilizada frequentemente para os métodos dos objetos, é o caso mais simples de uma estrutura sequencial. Por exemplo: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: uma estrutura de bifurcação permite que os métodos provem uma condição e tomem caminhos alternativos, dependendo do resultado. A condição é uma expressão booleana, uma expressão que avalia TRUE ou FALSE. Uma estrutura condicional e a estrutura `If... Else... End if`, que dirige o fluxo do programa ao longo de um dos dois caminhos. A outra estrutura condicional é a estrutura `Case of... End case` que direciona fluxo de programa para um de muitas caminhos.
- **[Bucle](Concepts/cf_looping.md)**: quando se escrevem métodos, é muito comum descobrir que se necessita que uma sequência de sentenças se repita um número de vezes. Para lidar com esta necessidade, a linguagem 4D oferece as estruturas de loop abaixo:

    - [`While... End while`](#whileend-while)
    - [`Repeat... Until`](#repeatuntil)
    - [`For...End for`](#forend-for)
    - [`For each... End for each`](#for-eachend-for-each)

Os loops são controlados de duas maneiras: ou fazem loop até que uma condição seja satisfeita, ou fazem loop um número especificado de vezes. Cada estrutura de looping pode ser usada de qualquer forma, mas loops`While`  e `Repeat` são mais apropriados para repetir até que uma condição seja satisfeita, e loops `For` são mais apropriados para looping um número especificado de vezes. `For each... End for each` permite misturar ambas as formas e foi concebido para fazer loop dentro de objectos e colecções.

**Nota:** 4D permite incorporar estruturas de programação até uma "profundidade" de 512 níveis.



## If... Else... End if

The formal syntax of the `If... Else... End if` control flow structure is:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Note que a parte `Else` é opcional; pode escrever:
```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

The `If... Else... End if` structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. Quando a expressão Booleana for TRUE, são executadas as declarações que seguem imediatamente ao teste. Se a expressão Booleana for FALSE, são executadas as declarações que seguem a linha Else. A declaração `Else` é opcional; se omitir Else, a execução continua com a primeira instrução (se houver) que seguir `End if`.

Note que a expressão booleana é sempre avaliada completamente. Considere particularmente o teste abaixo:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

A expressão é TRUE apenas se ambos os métodos forem TRUE. Entretanto, mesmo se _MethodA_ devolver  FALSE, 4D ainda iria avaliar _MethodB_, o que seria uma perda de tempo. Nesse caso, é mais interessante usar uma estrutra como:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

O resultado é parecido mas o _MethodB_ é avaliado somente se necessário.

> **Note:** The [ternary operator](operators.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of If..Else statements.

#### Exemplo

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if
 End if
 End if 
```

**Dica:** A ramificação pode ser realizada sem que as instruções sejam executadas em um caso ou no outro. Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```
ou :

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of... Else... End case

The formal syntax of the `Case of... Else... End case` control flow structure is:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

Note que a parte `Else` é opcional; pode escrever:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
 End case
```
As with the `If... End if` structure, the `Case of... End case` structure also lets your method choose between alternative actions. Unlike the `If... End` if structure, the `Case of... End case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Cada expressão booleana é precedida de dois pontos (`:`). A combinação dos dois pontos e da expressão booleana é chamada de um caso. Por exemplo, a linha abaixo é um caso:

```4d
:(bValidate=1)
```

Só são executadas as instruções que seguem o primeiro caso TRUE (até o próximo caso). Se nenhum dos casos for TRUE, nenhuma das instruções será executada (se nenhuma parte `Else` for incluida).

Pode incluir uma instrução Else depois do último caso. Se todos os casos forem FALSE, as instruções que seguem `Else` serão executadas.

#### Exemplo

Esse exemplo testa uma variável numérica e exibe uma caixa de alerta com uma apalavra:

```4d
 Case of
    :(vResult=1) //Teste se o número é 1
       ALERT("One.") //Se for 1, mostrar um alerta
    :(vResult=2) //Testar se o número é 2
       ALERT("Two.") //Se for 2, exibe um alerta
    :(vResult=3) //Testa se o número é 3
       ALERT("Three.") //Se for 3, exibe um alerta
    Else //Se não for 1, 2, ou 3, exibe um alerta
       ALERT("It was not one, two, or three.")
 //statement(s)
 End case //Se for 2, mostrar um alerta
    :(vResult=3) //Testar se o número é 3
       ALERT("Three.") //Se for 3, exiba um alerta
    Else //Se não for 1, 2 ou 3, exibir um alerta
       ALERT("Não foram um, dois ou três.")
 //statement(s)
 End case
```

For comparison, here is the `If... Else... End if` version of the same method:

```4d
 If(vResult=1) //Teste se o número é 1
    ALERT("One.") If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if //Se for 2, exibir um alerta
    Else
       If(vResult=3) //Testa se o número é 3
          ALERT("Três.") //Se for 3, exiba um alerta
    Else //Se não for 1, 2 ou 3, exibir um alerta
       ALERT("Não foram um, dois ou três.")
       End if
    End if
 End if
```

Remember that with a `Case of... Else... End case` structure, only the first TRUE case is executed. Mesmo se dois ou mais casos forem TRUE, só as instruções que seguirem o primeiro caso TRUE serão executadas.

Dessa maneira, quando quiser implementar testes hierárquicos, deve garantir que as declarações de condição que estejam mais abaixo no esquema hierárquico apareçam primeiro na sequência de testes. Por exemplo, o teste para a presença da condition1 cobre o teste para a preença de condition1&condition2 e portanto deveria estar localizada por último na sequência de testes. Por exemplo, o código abaixo nunca terá sua última condição detectada:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ...
```

No código anterior, a presença da segunda condição não é detectada, já que o teste "vResult=1" ramifica o código antes de qualquer outro teste. Para que o código funcione corretamente, pode escrevê-lo assim:

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

Além disso, se quiser implementar teste hierárquico, pode considerar usar um código hierárquico.

**Dica:** a ramificação|branching pode ser feita sem que as instruções sejam executados em um caso ou outro Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva: Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva: Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva: Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva: Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

ou :
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       ...

    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

ou :
```4d
 Case of
    Else
       statement(s)
 End case
```


## While... End while

The formal syntax of the `While... End while` control flow structure is:

```4d
 While(Boolean_Expression)
    statement(s)
    {break}  
    {continue}
 End while
```

A `While...End while` loop executes the statements inside the loop as long as the Boolean expression is TRUE. Comprova a expressão booleana ao início do loop e não entra no loop se a expressão for FALSE.

The `break` and `continue` statements are [described below](#break-and-continue).

It is common to initialize the value tested in the Boolean expression immediately before entering the `While... End while` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `While... End while` executes the loop.

O valor da expressão booleana deve poder ser modificado por um elemento dentro do loop, do contrário será executado indefinidamente. O próximo loop continua para sempre porque _NeverStop_ sempre será TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Se você se encontrar em uma situação desse tipo, na qual um método fica executando de forma descontrolada, pode usar as funções de rastreamento para parar o loop e rastrear o problema. Para saber mais sobre o rastreio de um método veja a página [Error handling](error-handling.md).

#### Exemplo

```4d
 CONFIRM("Add a new record?") //o usuário quer adicionar um registro? CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop enquanto o usuário quiser
    ADD RECORD([aTable]) //Adiciona um novo registro
 End while //O loop sempre termina com End while
```

Nesse exemplo, o valor da variável sistema `OK` é estabelecida pelo comando `CONFIRM` antes de que inicia o loop. Se o usuário clicar no botão **OK** da caixa de diálogo de confirmação, a variável do sistema `OK` toma o valor 1 e se inicia o loop. Senão, a variável de sistema `OK` toma o valor 0 e se omite o loop. Quando iniciar o loop, o comando `ADD RECORD` permite continuar a execução do loop porque se define a variável sistema `OK` em 1 quando o usuário salvar o registro. Quando o usuário cancelar (não salvar) o último registro, a variável do sistema `OK` é estabelecida como 0 e o loop para.

## Repeat... Until

The formal syntax of the `Repeat... Until` control flow structure is:

```4d
Repeat
    statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```
Um ciclo `Repeat...Until` é como um ciclo [While...End while](flow-control.md#whileend-while), exceto que testa a expressão booleana depois do ciclo e não antes. Thus, a `Repeat...Until` loop always executes the loop once, whereas if the Boolean expression is initially False, a `While...End while` loop does not execute the loop at all.

The other difference with a `Repeat...Until` loop is that the loop continues until the Boolean expression is TRUE.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Exemplo

Compare the following example with the example for the `While... End while` loop. Lembre que a expressão booleana não precisa ser iniciada - não há um comando `CONFIRM` para inicializar a variável `OK`.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

The formal syntax of the `For... End for` control flow structure is:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

The `For... End for` loop is a loop controlled by a counter variable:

- The counter variable *Counter_Variable* is a numeric variable (Real or Long Integer) that the `For... End for` loop initializes to the value specified by *Start_Expression*.
- Cada vez que se executa o loop, a variável do contador se incrementa no valor especificado no valor opcional *Increment_Expression*. Se não especificar *Increment_Expression*, a variável contadora é incrementada por um (1), que é o padrão.
- Quando a variável contador passar o valor *End_Expression* daí o loop para.

**Importante:** as expressões numéricas *Start_Expression*, *End_Expression* e *Increment_Expression* são avaliadas apenas uma vez no começo do loop. Se essas expressões forem variáveis, mudar uma deles dentro do loop não vai afetar o loop.

**Dicas:** Entretanto, para fins especiais, pode mudar o valor da variável *Counter_Variable* dentro do loop; isso afetará o loop.

- Geralmente *Start_Expression* pe menor que *End_Expression*.
- Se *Start_Expression* e *End_Expression* forem iguais, o loop se executará só uma vez.
- Se *Start_Expression* for maior que *End_Expression*, o loop não vai executar a não ser que especifique uma *Increment_Expression* negativa. Ver os exemplos.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Exemplos básicos

1. O seguinte exemplo executa 100 iterações:

```4d
 For(vCounter;1;100)
  //Faz algo
 End for
```

2. O exemplo abaixo percorre todos os elementos no array anArray:

```4d
 For($vlElem;1;Size of array(anArray))
  //Fazer algo com o elemento
    anArray{$vlElem}:=...
 End for
```

3. O exemplo abaixo recorre todos os caracteres do texto vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Faz algo com o caractere se for uma TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. O exemplo abaixo recorre os registros selecionados para a tabela [aTable]:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Faz algo com o registro
    SEND RECORD([aTable])
  //...
  //Vai para o próximo registro
    NEXT RECORD([aTable])
 End for
```

Most of the `For...End for` loops you will write in your projects will look like the ones listed in these examples.

### Variável contador

#### Variável contador decrescente

Em alguns casos, pode querer ter um loop cuja variável de contador seja decrescente ao invés de crescente. Para fazer isso, deve especificar *Start_Expression* maior que *End_Expression* e *Increment_Expression* deve ser negativa. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:

5. O seguinte exemplo executa 100 iterações:

```4d
 For(vCounter;100;1;-1)
  //Faz algo
 End for
```

6. O exemplo abaixo percorre todos os elementos no array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Faz algo com o elemento
    anArray{$vlElem}:=...
 End for
```

7. O exemplo abaixo recorre todos os caracteres do texto vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Faz algo com o caractere se for uma TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. O exemplo abaixo recorre os registros selecionados para a tabela [aTable]:

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Faz algo com o registro
    SEND RECORD([aTable])
  //...
  //Ir ao registro anterior
    PREVIOUS RECORD([aTable])
 End for
```

#### Incrementar a variável do contador em mais de um

Se precisar, pode usar uma *Increment_Expression* (positiva ou negativa) cujo valor absoluto seja maior que um.

9. O loop a seguir aborda só os elementos pares do array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Faz algo com o elemento #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```

#### Optimizing the execution of the For... End for loops

Pode utilizar variáveis reais e inteiras, assim como contadores interprocesso, de processo e de variáveis locais. Para loops repetitivos longos, especialmente em modo compilado, use variáveis locais de tipo Inteiro longo.

10. Aqui um exemplo simples:

```4d
 var $vlCounter : Integer //usa variáveis Integer locais 
 For($vlCounter;1;10000)
  //Faz algo
 End for
```

### Comparação de estruturas de loop

Let's go back to the first `For... End for` example. O seguinte exemplo executa 100 iterações:
```4d
 For(vCounter;1;100)
  //Faz algo
 End for
```

Here is the equivalent `While... End while` loop:
```4d
 $i:=1 //Initializa o contador
 While($i<=100) //Loop 100 vezes
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 End while
```

Here is the equivalent `Repeat... Until` loop:
```4d
 $i:=1 //Initializa o contador
 Repeat
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 Until($i=100) //Loop 100 vezes
```

:::tip

Here is the equivalent `While... Therefore, use the <code>For... End for` loop whenever possible.

:::


### Nested For... End for looping structures

Pode aninhar tantas estruturas de controle (dentro do razoável) como precisar. This includes nesting `For... End for` loops. Para evitar erros, tenha certeza de usar variáveis contador diferentes para cada estrutura de looping.

Aqui são dois exemplos:

1. O exemplo abaixo percorre todos os elementos em um array de duas dimensões:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Faz algo com a linha
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Faz algo com o elemento
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

2. O seguinte exemplo constrói um array de ponteiros a todos os campos de data presentes no banco:

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Get last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Get last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each... End for each

The formal syntax of the `For each...End for each` control flow structure is:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

A estrutura `For each... End for each` faz uma iteração sobre um *Elemento_atual* especificado sobre todos os valores de *Expressão*. O tipo *elemento_atual* depende do tipo *Expression*. O loop `For each... End for each` pode iterar através de três tipos de *Expressão*:

- collections: loop por cada elemento da coleção,
- seleções de entidades: loop em cada entidade,
- objetos: loop em cada propriedade do objeto.

The following table compares the three types of `For each... End for each`:

|                                           | Loop através da coleção                            | Loop nas seleções de entidades | Loop nos objetos                 |
| ----------------------------------------- | -------------------------------------------------- | ------------------------------ | -------------------------------- |
| Tipo Current_Item                         | Variável do mesmo tipo que os elementos da coleção | Entity                         | Variável texto                   |
| Tipos de expressões                       | Coleção (com elementos do mesmo tipo)              | Seleção de entidades           | Object                           |
| Número de loops (por padrão)              | Número de elementos da coleção                     | Número de entidades na seleção | Número de propriedades de objeto |
| Compatibilidade de parâmetros begin / end | Sim                                                | Sim                            | Não                              |

- O número de loops é avaliado no início e não muda durante o processo. Adicionar ou remover itens durante o loop não é recomendado porque resulta em iterações faltantes ou redundantes.
- Por padrão, as  _instruções_ anexas são executadas para cada valor de *Expressão*. Entretanto, é possível sair do loop comprovando uma condição ao início do loop (`While`) ou ao final do loop (`Until`).
- Os parâmetros opcionais *begin* e *end* podem ser usados com coleç~eos e seleções de entidades para definir os limites do loop.
- The `For each... End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use... End use` keywords. Depending on your needs, you can call the `Use... End use` keywords:
    - antes de entrar no loop, se os elementos devem ser modificados juntos por razões de integridade, ou
    - dentro do loop quando só tiver que modificar alguns elementos/propriedades e não é necessário gerenciar a integridade.

The `break` and `continue` statements are [described below](#break-and-continue).

### Loop através da coleção

When `For each... End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. Como padrão, o número de loops é baseado no número de elementos da coleção.

A coleção deve conter só elementos do mesmo tipo, do contrário se devolverá um erro assim que a variável _Current_Item_ tenha sido atribuída o primeiro tipo de valor estranho.

Em cada iteração do loop, a variável _Current_Item_ é preenchida automaticamente com o elemento correspondente da coleção. Os pontos abaixo devem ser considerados:

- Se a variável _Current_Item_ é de tipo objeto ou de tipo coleção (ou seja, se _Expresión_ for uma coleção de objetos ou de coleções), ao modificar esta variável se modificará automaticamente o elemento coincidente da coleção (porque os objetos e as coleções compartem as mesmas referências). Se a variável for de tipo escalar, só se modificará a variável.
- A variável_Current_Item_ deve ser do mesmo tipo que os elementos da coleção. Se algum elemento da coleção não for do mesmo tipo que a variável, um erro é gerado e o loop para.
- Se a coleção conter elementos com um valor **Null**, se gerará um erro se o tipo de variável _Current_Item_ não é compatível com valores **Null** (como as variáveis de tipo inteiro longo).

#### Exemplo

Se quiser computar algumas estatísticas para uma coleção de números:

```4d
 var $nums : Collection
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 var $item;$vEven;$vOdd;$vUnder;$vOver : Integer
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### Loop nas seleções de entidades

When `For each... End for each` is used with an *Expression* of the *Entity selection* type, the *Current_Item* parameter is the entity that is currently processed.

O número de loops é baseado no número de entidades da seleção de entidades. Em cada iteração do loop, o parâmetro *Current_Item* é preenchido automaticamente com a entidade da seleção de entidade que estiver sendo processada atualmente.

**Nota:** se a seleção de entidades conter uma entidade que tenha sido eliminada, enquanto isso, por outro processo, ela é pulada durante o loop.

Lembre que qualquer modificação aplicada na entidade atual deve ser guardada explicitamente utilizando `entity.save()`.

#### Exemplo

Se quiser aumentar o salário de todos os empregados britânicos em uma seleção de entidades:

```4d
 var emp : Object
 For each(emp;ds. Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loops nas propriedades de objetos

When `For each... End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property.

As propriedades do objeto são processadas de acordo com sua ordem de criação. Durante o loop, propriedades podem ser adicionadas ou eliminadas no objeto, sem modificar o número de loops que permanecerão no número original de propriedades do objeto.

#### Exemplo

Se quiser trocar os nomes para maiúsculas no objeto a seguir:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```
Você pode escrever:

```4d
 For each($property;$vObject)
    If(Value type($vObject[$property])=Is text)
       $vObject[$property]:=Uppercase($vObject[$property])
    End if
 End for each
```

```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```
### Parâmetros begin / end

Pode definir limites para a iteração usando os parâmetros opcionais inicio e fim.

**Nota:**os parâmetros *inicio* e *fim* só podem ser utilizados em iterações através de coleções e seleções de entidades (são ignoradas nas propriedades de objetos).

- No parâmetro *begin*, passe l posilçao do elemento em *Expression* na que se iniciará a iteração (se inclui *begin*).
- No *parâmetro* final, você também pode passar a posição do elemento na *Expressão* a qual vai parar a iteração (*end* é excluído).

Se omitir *end* ou se *fim* for maior que o número de elementos em *Expression*, os elementos são iteragids de *begin* até o último elemento (incluído). Se os parâmetros *inicio* e*fim* forem valores positivos, representam posições reais de elementos em *Expression*. Se *begin* for um valor negativo, é recalculado como `begin:=begin+Expression size` (é considerado como o deslocamento offset desde o final de *Expression*). Se o valor calculado for negativo, *inicio* toma o valor 0. **Nota:** mesmo se inicio for negativo, a iteração continua sendo realizada na ordem normal. Se *fim* for um  valor negativo, se recalcula como `fim:=fim+tamanho da expressão`

Por exemplo:
- uma coleção contém 10 elementos (numerada de 0 a 9)
- begin=-4 -> begin=-4+10=6 -> iteração começa no sexto elemento (#5)
- end=-2 -> end=-2+10=8 -> iteração para antes do oitavo elemento (#7), ou seja, no sétimo elemento.

#### Exemplo

```4d
 var $col;$col2 : Collection
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 var $item : Text
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Condições Until e While

You can control the `For each... End for each` execution by adding an `Until` or a `While` condition to the loop. Quando uma instrução `Until(condição)` estiver associada ao loop, a iteração vai parar logo que a condição seja avaliada como `True`, mas no caso de uma instrução `While(condición)`, a iteração para quando a condição for avaliada, pela primeira vez, como `False`.

Pode passar qualquer uma das duas palavras chave em função das suas necessidades:

- A condição `Until` é testada no final de cada iteração, portanto, se a *Expressão* não for vazia ou nula, o loop será executado pelo menos uma vez.
- A condição `While` é testada no início de cada iteração, então de acordo com o resultado da condição, o loop não poderá ser executado de forma alguma.

#### Exemplo

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)

 $total:=0
 For each($num;$colNum)While($total<30) //testado no começo
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)

 $total:=1000
 For each($num;$colNum)Until($total>30) //testado no final
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

## break e continue

Todas as estruturas de looping acima suportam as instruções `break` e `continue`. Estas instruções dão-lhe mais controlo sobre os loops, permitindo-lhe sair do ‘loop’ e ignorar a iteração atual a qualquer momento.

### break

A instrução `break` termina o ciclo que a contém. Control of the program flows to the statement immediately after the body of the loop.

If the `break` statement is inside a [nested loop](#nested-forend-for-looping-structures) (loop inside another loop), the `break` statement will terminate the innermost loop.


#### Exemplo

```4d
For (vCounter;1;100)
    If ($tab{vCounter}="") //se uma condição se tornar verdadeira
        break //fim do ciclo for
    End if
End for
```

### continue

The `continue` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.

```4d
var $text : Text
For ($i; 0; 9)
    If ($i=3)
        continue //passa diretamente para a próxima iteração
    End if
    $text:=$text+String($i)
End for
// $text="012456789" 

```



## return {expression}

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |
</details>

A declaração `return` pode ser chamada de qualquer lugar. Quando uma declaração `return` é utilizada numa função ou método, a execução da função ou método é interrompida. O código restante não é executado e o controlo é devolvido ao autor da chamada.

A declaração `return` pode ser utilizada para [devolver um valor](parameters.md#return-expression) ao autor da chamada.

#### Exemplo

```4d
var $message : Text
var $i : Integer While (True) //infinite loop
    $i:=$i+1
    $message+=String($i)+"A\r"  // until 5
    logConsole($message)
    If ($i=5)
        return //stops the loop
    End if 
    $message+=String($i)+"B\r"  // until 4
    logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```

