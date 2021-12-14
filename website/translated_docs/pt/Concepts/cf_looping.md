---
id: looping
title: Looping structures
---

Looping structures repeat a sequence of statements until a condition is met or a number of times is reached.


## While...End while

A sintaxe da estrutura condicional `While... End while` é:
```4d
 While(Boolean_Expression)
    statement(s)
 End while
```
Um loop `While... End while` executa as instruções dentro do loop enquanto a expressão booleana for TRUE. Comprova a expressão booleana ao início do loop e não entra no loop se a expressão for FALSE.

É comum inicializar o valor provado na expressão booleana imediatamente antes de entrar no loop `While... End while`. Inicializar o valor significa atribuir o valor para algo apropriado, geralmente para que a expressão booleana seja TRUE e `While... End while` execute o loop.

O valor da expressão booleana deve poder ser modificado por um elemento dentro do loop, do contrário será executado indefinidamente. O próximo loop continua para sempre porque _NeverStop_ sempre será TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Se você se encontrar em uma situação desse tipo, na qual um método fica executando de forma descontrolada, pode usar as funções de rastreamento para parar o loop e rastrear o problema. Para saber mais sobre o rastreio de um método veja a página [Error handling](error-handling.md).

### Exemplo

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

Nesse exemplo, o valor da variável sistema `OK` é estabelecida pelo comando `CONFIRM` antes de que inicia o loop. Se o usuário clicar no botão **OK** da caixa de diálogo de confirmação, a variável do sistema `OK` toma o valor 1 e se inicia o loop. Senão, a variável de sistema `OK` toma o valor 0 e se omite o loop. Quando iniciar o loop, o comando `ADD RECORD` permite continuar a execução do loop porque se define a variável sistema `OK` em 1 quando o usuário salvar o registro. Quando o usuário cancelar (não salvar) o último registro, a variável do sistema `OK` é estabelecida como 0 e o loop para.

## Repeat...Until

A sintaxe da estrutura condicional `Repeat... Until` é:
```4d
 Repeat
    statement(s)
 Until(Boolean_Expression)
```
A outra diferença com um loop `Repeat... Until` é que o loop continua até que a expressão seja TRUE.

Um loop `Repeat... Until` é similar a um loop [While... End while](flow-control#whileend-while), exceto que comprova a expressão booleana depois do loop  e não antes.

### Exemplo

Compare o exemplo abaixo com o exemplo para o lopp `While... End while`. Lembre que a expressão booleana não precisa ser iniciada - não há um comando `CONFIRM` para inicializar a variável `OK`.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

A sintaxe da estrutura condicional `For... End for` é:

```4d
 For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
    statement(s)
 End for
```

O loop `For... End for` é um loop controlado por um contador:

- The counter variable *Counter_Variable* is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by *Start_Expression*.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value *Increment_Expression*. If you do not specify *Increment_Expression*, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the *End_Expression* value, the loop stops.

**Importante:** as expressões numéricas *Start_Expression*, *End_Expression* e *Increment_Expression* são avaliadas apenas uma vez no começo do loop. Se essas expressões forem variáveis, mudar uma deles dentro do loop não vai afetar o loop.

**Dicas:** Entretanto, para fins especiais, pode mudar o valor da variável *Counter_Variable* dentro do loop; isso afetará o loop.

- Usually *Start_Expression* is less than *End_Expression*.
- If *Start_Expression* and *End_Expression* are equal, the loop will execute only once.
- If *Start_Expression* is greater than *End_Expression*, the loop will not execute at all unless you specify a negative *Increment_Expression*. See the examples.

### Basic examples

1. The following example executes 100 iterations:

```4d
 For(vCounter;1;100)
  //Do something
 End for
```

2. The following example goes through all elements of the array anArray:

```4d
 For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. The following example goes through all the characters of the text vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. The following example goes through the selected records for the table [aTable]:

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

### Decrementing variable counter

Em alguns casos, pode querer ter um loop cuja variável de contador seja decrescente ao invés de crescente. Para fazer isso, deve especificar *Start_Expression* maior que *End_Expression* e *Increment_Expression* deve ser negativa. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:

5. The following example executes 100 iterations:

```4d
 For(vCounter;100;1;-1)
  //Do something
 End for
```

6. The following example goes through all elements of the array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. The following example goes through all the characters of the text vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. The following example goes through the selected records for the table [aTable]:

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

### Incrementing the counter variable by more than one

Se precisar, pode usar uma *Increment_Expression* (positiva ou negativa) cujo valor absoluto seja maior que um.

9. The following loop addresses only the even elements of the array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```


### Comparing looping structures

Voltamos ao primeiro exemplo de `For... End for`. The following example executes 100 iterations:
```4d
 For(vCounter;1;100)
  //Do something
 End for
```

Aquí está o loop equivalente `Repeat... Until`:
```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Aqui está o loop equivalente `While... End while`:
```4d
 $i:=1 //Initialize the counter
 Repeat
  //Do something
    $i:=$i+1 //Need to increment the counter
 Until($i=100) //Loop 100 times
```
**Dica:** o loop `For... End for` é geralmente mais rápido que os loops `While... End while` ou `Repeat... Until`, porque 4D comprova a condição internamente em cada ciclo do loop e incrementa o contador. Portanto, utilize o loop `For... End for` sempre que for possível.

### Optimizing the execution of the For...End for loops

Pode utilizar variáveis reais e inteiras, assim como contadores interprocesso, de processo e de variáveis locais. Para loops repetitivos longos, especialmente em modo compilado, use variáveis locais de tipo Inteiro longo.

10. Here is an example:

```4d
 C_LONGINT($vlCounter) //use local Long Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
```

### Nested For...End for looping structures

Pode aninhar tantas estruturas de controle (dentro do razoável) como precisar. Isso inclui o aninhamento de loops `For... End for`. Para evitar erros, tenha certeza de usar variáveis contador diferentes para cada estrutura de looping.

Aqui são dois exemplos:

11. The following example goes through all the elements of a two-dimensional array:

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

12. O seguinte exemplo constrói um array de ponteiros a todos os campos de data presentes no banco:

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

## For each...End for each

A sintaxe da estrutura condicional `For each... End for each` é:

```4d
 For each(Element_courant;Expression{;debut{;fin}}){Until|While}(Expression_booléenne)}
    instruction(s)
 End for each
```

A estrutura `For each... End for each` faz uma iteração sobre um *Elemento_atual* especificado sobre todos os valores de *Expressão*. O tipo *elemento_atual* depende do tipo *Expression*. O loop `For each... End for each` pode iterar através de três tipos de *Expressão*:

- collections: loop por cada elemento da coleção,
- seleções de entidades: loop em cada entidade,
- objetos: loop em cada propriedade do objeto.

A tabela abaixo compara os três tipos de `For each... End for each`:

|                                           | Loop através da coleção                            | Loop nas seleções de entidades | Loop nos objetos                 |
| ----------------------------------------- | -------------------------------------------------- | ------------------------------ | -------------------------------- |
| Tipo Current_Item                         | Variável do mesmo tipo que os elementos da coleção | Entity                         | Variável texto                   |
| Tipos de expressões                       | Coleção (com elementos do mesmo tipo)              | Seleção de entidades           | Objeto                           |
| Número de loops (por padrão)              | Número de elementos da coleção                     | Número de entidades na seleção | Número de propriedades de objeto |
| Compatibilidade de parâmetros begin / end | Sim                                                | Sim                            | No                               |

- O número de loops é avaliado no início e não muda durante o processo. Adicionar ou remover itens durante o loop não é recomendado porque resulta em iterações faltantes ou redundantes.
- Por padrão, as  _instruções_ anexas são executadas para cada valor de *Expressão*. Entretanto, é possível sair do loop comprovando uma condição ao início do loop (`While`) ou ao final do loop (`Until`).
- Os parâmetros opcionais *begin* e *end* podem ser usados com coleç~eos e seleções de entidades para definir os limites do loop.
- O loop `For each...End for each` pode ser usado em uma **coleção compartida** ou um **objeto compartilhado**. Se seu código necessitar modificar um ou  mais elementos da coleção ou das propriedades de objeto, deve utilizar as palavras chave `Use...End use`. Dependendo de sus necessidades, pode chamar às palavras clave `Use...End use`:
    - antes de entrar no loop, se os elementos devem ser modificados juntos por razões de integridade, ou
    - dentro do loop quando só tiver que modificar alguns elementos/propriedades e não é necessário gerenciar a integridade.

### Loop através da coleção

Quando `For each... End for each` for utilizado com uma _Expression_ do tipo _Collection_, o parâmetro _Current_Item_ é uma variável do mesmo tipo que os elementos da coleção. Como padrão, o número de loops é baseado no número de elementos da coleção.

A coleção deve conter só elementos do mesmo tipo, do contrário se devolverá um erro assim que a variável _Current_Item_ tenha sido atribuída o primeiro tipo de valor estranho.

Em cada iteração do loop, a variável _Current_Item_ é preenchida automaticamente com o elemento correspondente da coleção. Os pontos abaixo devem ser considerados:

- Se a variável _Current_Item_ é de tipo objeto ou de tipo coleção (ou seja, se _Expresión_ for uma coleção de objetos ou de coleções), ao modificar esta variável se modificará automaticamente o elemento coincidente da coleção (porque os objetos e as coleções compartem as mesmas referências). Se a variável for de tipo escalar, só se modificará a variável.
- The _Current_Item_ variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### Exemplo

Se quiser computar algumas estatísticas para uma coleção de números:
```4d
 C_COLLECTION($nums)
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)
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

Quando `For each...End for each` for utilizado com uma _Expression_ do tipo _Collection_, o parâmetro _Current_Item_ é uma variável do mesmo tipo que os elementos da coleção.

O número de loops é baseado no número de entidades da seleção de entidades. Em cada iteração do loop, o parâmetro *Current_Item* é preenchido automaticamente com a entidade da seleção de entidade que estiver sendo processada atualmente.

**Nota:** se a seleção de entidades conter uma entidade que tenha sido eliminada, enquanto isso, por outro processo, ela é pulada durante o loop.

Lembre que qualquer modificação aplicada na entidade atual deve ser guardada explicitamente utilizando `entity.save( )`.

#### Exemplo

Se quiser aumentar o salário de todos os empregados britânicos em uma seleção de entidades:
```4d
 C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loop through object properties

Quando se utiliza `For each... End for each` com uma *Expression* de tipo Object, o parâmetro *Current_Item* é uma variável texto que é preenchida automaticamente com o nome da propriedade atualmente processada.

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
You can write:
```4d
 For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
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
### begin / end parameters

Pode definir limites para a iteração usando os parâmetros opcionais inicio e fim.

**Nota:**os parâmetros *inicio* e *fim* só podem ser utilizados em iterações através de coleções e seleções de entidades (são ignoradas nas propriedades de objetos).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded).

Se omitir *end* ou se *fim* for maior que o número de elementos em *Expression*, os elementos são iteragids de *begin* até o último elemento (incluído). Se os parâmetros *inicio* e*fim* forem valores positivos, representam posições reais de elementos em *Expression*. Se *begin* for um valor negativo, é recalculado como `begin:=begin+Expression size` (é considerado como o deslocamento offset desde o final de *Expression*). Se o valor calculado for negativo, *inicio* toma o valor 0. **Nota:** mesmo se inicio for negativo, a iteração continua sendo realizada na ordem normal. Se *fim* for um  valor negativo, se recalcula como `fim:=fim+tamanho da expressão`

For example:
- a collection contains 10 elements (numbered from 0 to 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element.

#### Exemplo

```4d
 C_COLLECTION($col;$col2)
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 C_TEXT($item)
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Until and While conditions

Pode controlar a execução de `For each... End for each` adicionando uma condição `Until` ou uma condição `While` ao loop. Quando uma instrução `Until(condição)` estiver associada ao loop, a iteração vai parar logo que a condição seja avaliada como `True`, mas no caso de uma instrução `While(condición)`, a iteração para quando a condição for avaliada, pela primeira vez, como `False`.

Pode passar qualquer uma das duas palavras chave em função das suas necessidades:

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
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

