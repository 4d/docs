---
id: looping
title: Estruturas de loop
---

Estruturas de repetição repetem uma sequência de instruções até que uma condição seja cumprida ou que várias vezes seja alcançada.


## While... End while

A sintaxe formal da estrutura de fluxo de controle `While... End while` é:
```4d
 While(Boolean_Expression)
    statement(s)
 End while
```
Um loop `While...End while` executa as declarações no loop enquanto a expressão booleana for TRUE. Comprova a expressão booleana ao início do loop e não entra no loop se a expressão for FALSE.

É comum inicializar o valor testado na expressão booleana imediatamente antes de entrar no loop `While... End while`. Inicializar o valor significa definí-lo como algo apropriado, geralmente para que a expressão booleana seja TRUE e `While...End while` executa o loop.

O valor da expressão booleana deve poder ser modificado por um elemento dentro do loop, do contrário será executado indefinidamente. O próximo loop continua para sempre porque _NeverStop_ sempre será TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Se você se encontrar em uma situação desse tipo, na qual um método fica executando de forma descontrolada, pode usar as funções de rastreamento para parar o loop e rastrear o problema. Para saber mais sobre o rastreio de um método veja a página [Error handling](error-handling.md).

### Exemplo

```4d
 CONFIRM("Add a new record?") //o usuário quer adicionar um registro? CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop enquanto o usuário quiser
    ADD RECORD([aTable]) //Adiciona um novo registro
 End while //O loop sempre termina com End while
```

Nesse exemplo, o valor da variável sistema `OK` é estabelecida pelo comando `CONFIRM` antes de que inicia o loop. Se o usuário clicar no botão **OK** da caixa de diálogo de confirmação, a variável do sistema `OK` toma o valor 1 e se inicia o loop. Senão, a variável de sistema `OK` toma o valor 0 e se omite o loop. Quando iniciar o loop, o comando `ADD RECORD` permite continuar a execução do loop porque se define a variável sistema `OK` em 1 quando o usuário salvar o registro. Quando o usuário cancelar (não salvar) o último registro, a variável do sistema `OK` é estabelecida como 0 e o loop para.

## Repeat... Until

A sintaxe formal da estrutura de fluxo de controle `Repeat...Until` é:
```4d
 Repeat
    statement(s)
 Until(Boolean_Expression)
```
Um ciclo `Repeat...Until` é como um ciclo [While...End while](flow-control#whileend-while), exceto que testa a expressão booleana depois do ciclo e não antes. Assim, um loop `Repeat...Until` sempre executa o loop uma vez, enquanto se a expressão booleana for inicialmente Falsa, um loop `While...End while` não executa o loop de forma alguma.

A outra diferença com um loop `Repeat...Until` é que o loop continua até que a expressão booleana seja TRUE.

### Exemplo

Comparar o exemplo a seguir com o exemplo para o loop `While...End while`. Lembre que a expressão booleana não precisa ser iniciada - não há um comando `CONFIRM` para inicializar a variável `OK`.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

A sintaxe formal da estrutura de fluxo de controle `For...End for` é:

```4d
 For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
    statement(s)
 End for
```

A estrutura `For...End for` é um loop controlado por um contador:

- A variável contador *Counter_Variable* é uma variável numérica (real ou Inteiro longo) que o loop `For...End for` inicializa para o valor especificado por *Start_Expression*.
- Cada vez que se executa o loop, a variável do contador se incrementa no valor especificado no valor opcional *Increment_Expression*. Se não especificar *Increment_Expression*, a variável contadora é incrementada por um (1), que é o padrão.
- Quando a variável contador passar o valor *End_Expression* daí o loop para.

**Importante:** as expressões numéricas *Start_Expression*, *End_Expression* e *Increment_Expression* são avaliadas apenas uma vez no começo do loop. Se essas expressões forem variáveis, mudar uma deles dentro do loop não vai afetar o loop.

**Dicas:** entretanto, para fins especiais, pode mudar o valor da variável *Counter_Variable* no loop; isso afetará o loop.

- Geralmente *Start_Expression* pe menor que *End_Expression*.
- Se *Start_Expression* e *End_Expression* forem iguais, o loop se executará só uma vez.
- Se *Start_Expression* for maior que *End_Expression*, o loop não vai executar a não ser que especifique uma *Increment_Expression* negativa. Ver os exemplos.

### Exemplos básicos

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

A maioria dos loops `For...End for` que você irá escrever em seus projetos terá a aparência dos listados nestes exemplos.

### Diminuir a variável contador

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

### Incrementar a variável do contador em mais de um

Se precisar, pode usar uma *Increment_Expression* (positiva ou negativa) cujo valor absoluto seja maior que um.

9. O loop a seguir aborda só os elementos pares do array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Faz algo com o elemento #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```


### Comparação de estruturas de loop

Vamos voltar para o primeiro exemplo `For...End for`. O seguinte exemplo executa 100 iterações:
```4d
 For(vCounter;1;100)
  //Faz algo
 End for
```

É interessante ver como os loops `While...End while` e `Repeat...Until` realizariam a mesma ação. Aqui está o equivalente ao loop `While...End while`:
```4d
 $i:=1 //Initializa o contador
 While($i<=100) //Loop 100 vezes
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 End while
```

Aqui está o loop `Repeat...Until` équivalente:
```4d
 $i:=1 //Initializa o contador
 Repeat
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 Until($i=100) //Loop 100 vezes
```
**Dica:** o loop `For...End for` geralmente é mais rápido que os loops `While...End while` e `Repeat... Until`, porque 4D testa a condição internamente para cada ciclo do loop e incrementa o contador. Portanto, use o loop `For...End for` sempre que possível.

### Otimizando a execução do comando For...End para loops

Pode utilizar variáveis reais e inteiras, assim como contadores interprocesso, de processo e de variáveis locais. Para loops repetitivos longos, especialmente em modo compilado, use variáveis locais de tipo Inteiro longo.

10. Aqui um exemplo simples:

```4d
 C_LONGINT($vlCounter) //usa variáveis locais Long Integer
 For($vlCounter;1;10000)
  //Faz algo
 End for
```

### Estruturas For... End for aninhadas

Pode aninhar tantas estruturas de controle (dentro do razoável) como precisar. Isso inclui aninhar loops `For...End for`. Para evitar erros, tenha certeza de usar variáveis contador diferentes para cada estrutura de looping.

Aqui são dois exemplos:

11. O exemplo abaixo percorre todos os elementos em um array de duas dimensões:

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

## For each... End for each

A sintaxe formal da estrutura de controle de fluxo para `For each...End for each` é:

```4d
 For each(Element_courant;Expression{;debut{;fin}}){Until|While}(Expression_booléenne)}
    instruction(s)
 End for each
```

A estrutura `For each... End for each` faz uma iteração sobre um *Elemento_atual* especificado sobre todos os valores de *Expressão*. O tipo *elemento_atual* depende do tipo *Expression*. O loop `For each... End for each` pode iterar através de três tipos de *Expressão*:

- collections: loop por cada elemento da coleção,
- seleções de entidades: loop em cada entidade,
- objetos: loop em cada propriedade do objeto.

A tabela a seguir compara os três tipos de `For each...End for each`:

|                                           | Loop através da coleção                            | Loop nas seleções de entidades | Loop nos objetos                 |
| ----------------------------------------- | -------------------------------------------------- | ------------------------------ | -------------------------------- |
| Tipo Current_Item                         | Variável do mesmo tipo que os elementos da coleção | Entity                         | Variável texto                   |
| Tipos de expressões                       | Coleção (com elementos do mesmo tipo)              | Seleção de entidades           | Object                           |
| Número de loops (por padrão)              | Número de elementos da coleção                     | Número de entidades na seleção | Número de propriedades de objeto |
| Compatibilidade de parâmetros begin / end | Sim                                                | Sim                            | Não                              |

- O número de loops é avaliado no início e não muda durante o processo. Adicionar ou remover itens durante o loop não é recomendado porque resulta em iterações faltantes ou redundantes.
- Por padrão, as  _instruções_ anexas são executadas para cada valor de *Expressão*. Entretanto, é possível sair do loop comprovando uma condição ao início do loop (`While`) ou ao final do loop (`Until`).
- Os parâmetros opcionais *begin* e *end* podem ser usados com coleç~eos e seleções de entidades para definir os limites do loop.
- O loop `For each...End for each` pode ser usado em uma **coleção compartilhada** ou **objeto compartilhado**. Se seu código precisar modificar um ou mais elemento(s) das propriedades de coleção ou objeto, você precisa usar as palavras-chave `Use...End use`. Dependendo de suas necessidades, você pode chamar as palavras-chave `Use...End use`:
    - antes de entrar no loop, se os elementos devem ser modificados juntos por razões de integridade, ou
    - dentro do loop quando só tiver que modificar alguns elementos/propriedades e não é necessário gerenciar a integridade.

### Loop através da coleção

Quando `For each... End for each` é usado com uma _Expression_ do tipo _Collection_, o parâmetro _Current_Item_ é uma variável do mesmo tipo que os elementos da coleção. Como padrão, o número de loops é baseado no número de elementos da coleção.

A coleção deve conter só elementos do mesmo tipo, do contrário se devolverá um erro assim que a variável _Current_Item_ tenha sido atribuída o primeiro tipo de valor estranho.

Em cada iteração do loop, a variável _Current_Item_ é preenchida automaticamente com o elemento correspondente da coleção. Os pontos abaixo devem ser considerados:

- Se a variável _Current_Item_ é de tipo objeto ou de tipo coleção (ou seja, se _Expresión_ for uma coleção de objetos ou de coleções), ao modificar esta variável se modificará automaticamente o elemento coincidente da coleção (porque os objetos e as coleções compartem as mesmas referências). Se a variável for de tipo escalar, só se modificará a variável.
- A variável_Current_Item_ deve ser do mesmo tipo que os elementos da coleção. Se algum elemento da coleção não for do mesmo tipo que a variável, um erro é gerado e o loop para.
- Se a coleção conter elementos com um valor **Null**, se gerará um erro se o tipo de variável _Current_Item_ não é compatível com valores **Null** (como as variáveis de tipo inteiro longo).

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

When `For each... End for each` is used with an _Expression_ of the _Entity selection_ type, the _Current_Item_ parameter is the entity that is currently processed.

O número de loops é baseado no número de entidades da seleção de entidades. Em cada iteração do loop, o parâmetro *Current_Item* é preenchido automaticamente com a entidade da seleção de entidade que estiver sendo processada atualmente.

**Nota:** se a seleção de entidades conter uma entidade que tenha sido eliminada, enquanto isso, por outro processo, ela é pulada durante o loop.

Lembre que qualquer modificação aplicada na entidade atual deve ser guardada explicitamente utilizando `entity.save( )`.

#### Exemplo

Se quiser aumentar o salário de todos os empregados britânicos em uma seleção de entidades:
```4d
 C_OBJECT(emp)
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

