---
id: control-flow
title: Fluxo de controlo
---

Independentemente da simplicidade ou da complexidade de um método, sempre utilizará um ou vários dos três tipos de estruturas de programação. As estruturas de programação determinam o fluxo de execução, se serão executadas, e a ordem das linhas de instruções dentro do método. Há três tipos de estruturas:

- **Sequential**: a sequential structure is a simple, linear structure. Uma sequência é uma série de sentenças que 4D executa uma atrás da outra, da primera à última. Uma instrução de uma linha, utilizada frequentemente para os métodos dos objetos, é o caso mais simples de uma estrutura sequencial. For example: `[People]lastName:=Uppercase([People]lastName)`
- **Branching**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. A condição é uma expressão booleana, uma expressão que avalia TRUE ou FALSE Uma estrutura condicional e a estrutura <code>If... One branching structure is the [`If...Else...End if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`Case of...Else...End case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Looping**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. Para lidar com esta necessidade, a linguagem 4D oferece as estruturas de loop abaixo:

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

Os loops são controlados de duas maneiras: ou fazem loop até que uma condição seja satisfeita, ou fazem loop um número especificado de vezes. Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections.

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels.

## If... Else... End if

The formal syntax of the `If...Else...End if` control flow structure is:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Note that the `Else` part is optional; you can write:

```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

The `If...Else...End if` structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. Quando a expressão Booleana for TRUE, são executadas as declarações que seguem imediatamente ao teste. Se a expressão Booleana for FALSE, são executadas as declarações que seguem a linha Else. The `Else` statement is optional; if you omit Else, execution continues with the first statement (if any) following the `End if`.

Note que a expressão booleana é sempre avaliada completamente. Considere particularmente o teste abaixo:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

A expressão é TRUE apenas se ambos os métodos forem TRUE. However, even if _MethodA_ returns FALSE, 4D will still evaluate _MethodB_, which is a useless waste of time. Nesse caso, é mais interessante usar uma estrutra como:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

The result is similar and _MethodB_ is evaluated only if necessary.

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
```

**Tip:** Branching can be performed without statements to be executed in one case or the other. Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:

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

The formal syntax of the `Case of...Else...End case` control flow structure is:

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

Note that the `Else` part is optional; you can write:

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

As with the `If...Else...End if` structure, the `Case of...Else...End case` structure also lets your method choose between alternative actions. Unlike the `If...Else...End` if structure, the `Case of...Else...End case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Cada expressão booleana é precedida de dois pontos (`:`). A combinação dos dois pontos e da expressão booleana é chamada de um caso. Por exemplo, a linha abaixo é um caso:

```4d
:(bValidate=1)
```

Só são executadas as instruções que seguem o primeiro caso TRUE (até o próximo caso). If none of the cases are TRUE, none of the statements will be executed (if no `Else` part is included).

Pode incluir uma instrução Else depois do último caso. If all of the cases are FALSE, the statements following the `Else` will be executed.

#### Exemplo

Esse exemplo testa uma variável numérica e exibe uma caixa de alerta com uma apalavra:

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

For comparison, here is the `If...Else...End if` version of the same method:

```4d
 If(vResult=1) //Test if the number is 1
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
 End if
```

Remember that with a `Case of...Else...End case` structure, only the first TRUE case is executed. Mesmo se dois ou mais casos forem TRUE, só as instruções que seguirem o primeiro caso TRUE serão executadas.

Dessa maneira, quando quiser implementar testes hierárquicos, deve garantir que as declarações de condição que estejam mais abaixo no esquema hierárquico apareçam primeiro na sequência de testes. For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence. Por exemplo, o código abaixo nunca terá sua última condição detectada:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

No código anterior, a presença da segunda condição não é detectada, já que o teste "vResult=1" ramifica o código antes de qualquer outro teste. Para que o código funcione corretamente, pode escrevê-lo assim:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

Além disso, se quiser implementar teste hierárquico, pode considerar usar um código hierárquico.

**Tip:** Branching can be performed without statements to be executed in one case or another. Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:

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

The formal syntax of the `While...End while` control flow structure is:

```4d
 While(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 End while
```

A `While...End while` loop executes the statements inside the loop as long as the Boolean expression is TRUE. Comprova a expressão booleana ao início do loop e não entra no loop se a expressão for FALSE.

The `break` and `continue` statements are [described below](#break-and-continue).

It is common to initialize the value tested in the Boolean expression immediately before entering the `While...End while` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `While...End while` executes the loop.

O valor da expressão booleana deve poder ser modificado por um elemento dentro do loop, do contrário será executado indefinidamente. The following loop continues forever because _NeverStop_ is always TRUE:

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Se você se encontrar em uma situação desse tipo, na qual um método fica executando de forma descontrolada, pode usar as funções de rastreamento para parar o loop e rastrear o problema. For more information about tracing a method, see the [Error handling](error-handling.md) page.

#### Exemplo

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

In this example, the `OK` system variable is set by the `CONFIRM` command before the loop starts. If the user clicks the **OK** button in the confirmation dialog box, the `OK` system variable is set to 1 and the loop starts. Otherwise, the `OK` system variable is set to 0 and the loop is skipped. Once the loop starts, the `ADD RECORD` command keeps the loop going because it sets the `OK` system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the `OK` system variable is set to 0 and the loop stops.

## Repeat... Until

The formal syntax of the `Repeat...Until` control flow structure is:

```4d
Repeat
	statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```

A `Repeat...Until` loop is similar to a [While...End while](flow-control.md#whileend-while) loop, except that it tests the Boolean expression after the loop rather than before. Thus, a `Repeat...Until` loop always executes the loop once, whereas if the Boolean expression is initially False, a `While...End while` loop does not execute the loop at all.

The other difference with a `Repeat...Until` loop is that the loop continues until the Boolean expression is TRUE.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Exemplo

Compare the following example with the example for the `While...End while` loop. Note that the Boolean expression does not need to be initialized—there is no `CONFIRM` command to initialize the `OK` variable.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

The formal syntax of the `For...End for` control flow structure is:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

The `For...End for` loop is a loop controlled by a counter variable:

- The counter variable _Counter_Variable_ is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by _Start_Expression_.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value _Increment_Expression_. If you do not specify _Increment_Expression_, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the _End_Expression_ value, the loop stops.

**Important:** The numeric expressions _Start_Expression_, _End_Expression_ and _Increment_Expression_ are evaluated once at the beginning of the loop. Se essas expressões forem variáveis, mudar uma deles dentro do loop não vai afetar o loop.

**Tip:** However, for special purposes, you can change the value of the counter variable _Counter_Variable_ within the loop; this will affect the loop.

- Usually _Start_Expression_ is less than _End_Expression_.
- If _Start_Expression_ and _End_Expression_ are equal, the loop will execute only once.
- If _Start_Expression_ is greater than _End_Expression_, the loop will not execute at all unless you specify a negative _Increment_Expression_. Ver os exemplos.

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
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. O exemplo abaixo recorre todos os caracteres do texto vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. O exemplo abaixo recorre os registros selecionados para a tabela [aTable]:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the next record
    NEXT RECORD([aTable])
 End for
```

Most of the `For...End for` loops you will write in your projects will look like the ones listed in these examples.

### Variável contador

#### Variável contador decrescente

Em alguns casos, pode querer ter um loop cuja variável de contador seja decrescente ao invés de crescente. To do so, you must specify _Start_Expression_ greater than _End_Expression_ and a negative _Increment_Expression_. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:

5. O seguinte exemplo executa 100 iterações:

```4d
 For(vCounter;100;1;-1)
  //Faz algo
 End for
```

6. O exemplo abaixo percorre todos os elementos no array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. O exemplo abaixo recorre todos os caracteres do texto vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. O exemplo abaixo recorre os registros selecionados para a tabela [aTable]:

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the previous record
    PREVIOUS RECORD([aTable])
 End for
```

#### Incrementar a variável do contador em mais de um

If you need to, you can use an _Increment_Expression_ (positive or negative) whose absolute value is greater than one.

9. O loop a seguir aborda só os elementos pares do array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
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

Let's go back to the first `For...End for` example. O seguinte exemplo executa 100 iterações:

```4d
 For(vCounter;1;100)
  //Faz algo
 End for
```

It is interesting to see how the `While...End while` loop and `Repeat...Until` loop would perform the same action. Here is the equivalent `While...End while` loop:

```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Here is the equivalent `Repeat...Until` loop:

```4d
 $i:=1 //Initializa o contador
 Repeat
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 Until($i=100) //Loop 100 vezes
```

:::tip

The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `For...End for` loop whenever possible.

:::

### Nested For... End for looping structures

Pode aninhar tantas estruturas de controle (dentro do razoável) como precisar. This includes nesting `For...End for` loops. Para evitar erros, tenha certeza de usar variáveis contador diferentes para cada estrutura de looping.

Aqui são dois exemplos:

1. O exemplo abaixo percorre todos os elementos em um array de duas dimensões:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Do something with the row
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Do something with the element
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

The `For each...End for each` structure iterates a specified _Current_item_ over all values of the _Expression_. The _Current_item_ type depends on the _Expression_ type. The `For each...End for each` loop can iterate through three _Expression_ types:

- collections: loop por cada elemento da coleção,
- seleções de entidades: loop em cada entidade,
- objetos: loop em cada propriedade do objeto.

The following table compares the three types of `For each...End for each`:

|                                                 | Loop através da coleção                                  | Loop nas seleções de entidades | Loop nos objetos                 |
| ----------------------------------------------- | -------------------------------------------------------- | ------------------------------ | -------------------------------- |
| Tipo Current_Item          | Variável do mesmo tipo que os elementos da coleção       | Entity                         | Variável texto                   |
| Tipos de expressões                             | Coleção (com elementos do mesmo tipo) | Seleção de entidades           | Object                           |
| Número de loops (por padrão) | Número de elementos da coleção                           | Número de entidades na seleção | Número de propriedades de objeto |
| Compatibilidade de parâmetros begin / end       | Sim                                                      | Sim                            | Não                              |

- O número de loops é avaliado no início e não muda durante o processo. Adicionar ou remover itens durante o loop não é recomendado porque resulta em iterações faltantes ou redundantes.
- By default, the enclosed _statement(s)_ are executed for each value in _Expression_. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`While`) or at the end of the loop (`Until`).
- The _begin_ and _end_ optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords:
  - antes de entrar no loop, se os elementos devem ser modificados juntos por razões de integridade, ou
  - dentro do loop quando só tiver que modificar alguns elementos/propriedades e não é necessário gerenciar a integridade.

The `break` and `continue` statements are [described below](#break-and-continue).

### Loop através da coleção

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. Como padrão, o número de loops é baseado no número de elementos da coleção.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. Os pontos abaixo devem ser considerados:

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). Se a variável for de tipo escalar, só se modificará a variável.
- The _Current_Item_ variable must be of the same type as the collection elements. Se algum elemento da coleção não for do mesmo tipo que a variável, um erro é gerado e o loop para.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

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

When `For each...End for each` is used with an _Expression_ of the _Entity selection_ type, the _Current_Item_ parameter is the entity that is currently processed.

O número de loops é baseado no número de entidades da seleção de entidades. On each loop iteration, the _Current_Item_ parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save()`.

#### Exemplo

Se quiser aumentar o salário de todos os empregados britânicos em uma seleção de entidades:

```4d
 var emp : Object
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loops nas propriedades de objetos

When `For each...End for each` is used with an _Expression_ of the Object type, the _Current_Item_ parameter is a text variable automatically filled with the name of the currently processed property.

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

**Note:** The _begin_ and _end_ parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the _begin_ parameter, pass the element position in _Expression_ at which to start the iteration (_begin_ is included).
- In the _end_ parameter, you can also pass the element position in _Expression_ at which to stop the iteration (_end_ is excluded).

If _end_ is omitted or if _end_ is greater than the number of elements in _Expression_, elements are iterated from _begin_ until the last one (included).
If the _begin_ and _end_ parameters are positive values, they represent actual positions of elements in _Expression_.
If _begin_ is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of _Expression_). If the calculated value is negative, _begin_ is set to 0.
**Note:** Even if begin is negative, the iteration is still performed in the standard order.
If _end_ is a negative value, it is recalculed as `end:=end+Expression size`

Por exemplo:

- uma coleção contém 10 elementos (numerada de 0 a 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element.

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

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `While(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

Pode passar qualquer uma das duas palavras chave em função das suas necessidades:

- The `Until` condition is tested at the end of each iteration, so if the _Expression_ is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### Exemplo

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)
 
 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)
 
 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

## break e continue

All looping structures above support both `break` and `continue` statements. Estas instruções dão-lhe mais controlo sobre os loops, permitindo-lhe sair do ‘loop’ e ignorar a iteração atual a qualquer momento.

### break

The `break` statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop.

If the `break` statement is inside a [nested loop](#nested-forend-for-looping-structures) (loop inside another loop), the `break` statement will terminate the innermost loop.

#### Exemplo

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //if a condition becomes true
		break //end of the for loop
	End if
End for
```

### continue

The `continue` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.

```4d
var $text : Text
For ($i; 0; 9)
	If ($i=3)
		continue //go directly to the next iteration
	End if
	$text:=$text+String($i)
End for
// $text="012456789" 

```

## return {expression}

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. O código restante não é executado e o controlo é devolvido ao autor da chamada.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

#### Exemplo

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
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
