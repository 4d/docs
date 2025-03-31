---
id: control-flow
title: Fluxo de controlo
---

Independentemente da simplicidade ou da complexidade de um método, sempre utilizará um ou vários dos três tipos de estruturas de programação. As estruturas de programação determinam o fluxo de execução, se serão executadas, e a ordem das linhas de instruções dentro do método. Há três tipos de estruturas:

- \*\*Sequencial: uma estrutura sequencial é uma estrutura simples e linear. Uma sequência é uma série de sentenças que 4D executa uma atrás da outra, da primera à última. Uma instrução de uma linha, utilizada frequentemente para os métodos dos objetos, é o caso mais simples de uma estrutura sequencial. Por exemplo: [People]lastName:=Uppercase([People]lastName)\`
- **Branching**: Uma estrutura de bifurcação permite que os métodos testem uma condição e sigam caminhos alternativos, dependendo do resultado. A condição é uma expressão booleana, uma expressão que avalia TRUE ou FALSE. Uma estrutura condicional é a estrutura [`Se...Senão...Fim se`](#ifelseend-if), que direciona o fluxo do programa ao longo de um dos dois caminhos. A outra estrutura ramificada é a [`Caso do...Senão...Caso final`](#case-ofelseend-case), que direciona o fluxo do programa para um dos muitos caminhos.
- **Loop**: ao escrever métodos, é muito comum descobrir que você precisa de uma sequência de afirmações para repetir várias vezes. Para lidar com esta necessidade, a linguagem 4D oferece as estruturas de loop abaixo:

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

Os loops são controlados de duas maneiras: ou fazem loop até que uma condição seja satisfeita, ou fazem loop um número especificado de vezes. Cada estrutura de repetição pode ser usada de qualquer maneira, mas laços `While` e laços `repeat` são mais apropriados para repetir até que uma condição seja atendida, e laços `For` são mais apropriados para repetir um número específico de vezes. \`For each... End for each permite misturar ambas as formas e foi concebido para fazer loop dentro de objectos e colecções.

**Nota:** 4D permite que você incorpore estruturas de programação até uma "profundidade" de 512 níveis.

## If... Else... End if

A sintaxe formal da estrutura de fluxo de controle `Se...Senão...Fim Se` é:

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

A estrutura `Se...Senão...End if` permite que o seu método escolha entre duas ações, dependendo se um teste (uma expressão booleana) é TRUE ou FALSO. Quando a expressão Booleana for TRUE, são executadas as declarações que seguem imediatamente ao teste. Se a expressão Booleana for FALSE, são executadas as declarações que seguem a linha Else. A declaração Else é opcional; se omitir Else, a execução continua com a primeira instrução (se houver) que seguir End if\`.

Note que a expressão booleana é sempre avaliada completamente. Considere particularmente o teste abaixo:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

A expressão é TRUE apenas se ambos os métodos forem TRUE. No entanto, mesmo se *MethodA* retorna FALSE, 4D ainda avaliará *MethodB*, que é uma perda de tempo inútil. Nesse caso, é mais interessante usar uma estrutra como:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

O resultado é semelhante e *MethodB* é avaliado apenas se necessário.

> **Nota:** O [operador ternário](operators.md#ternary-operator) permite escrever expressões condicionais de uma linha e pode substituir uma sequência completa de instruções If..Else.

#### Exemplo

```4d
  // Peça ao usuário para digitar um nome
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if 
```

**Dica:** A ramificação pode ser realizada sem instruções a serem executadas em um caso ou no outro. Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:

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

A sintaxe formal do `Caso do...Senão...Caso senão...Caso final` estrutura de fluxo de controle é:

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

Como na estrutura `Se...Senão...End if`, a estrutura `Caso do...Senão...Final de caso` também permite que seu método escolha entre ações alternativas. Ao contrário do `Se...Senão...End` se estrutura, o `Caso do...Senão... estrutura do caso` pode testar um número ilimitado e razoável de expressões booleanas e tomar medidas, dependendo do qual uma seja TRUE.

Cada expressão booleana é precedida de dois pontos (`:`). A combinação dos dois pontos e da expressão booleana é chamada de um caso. Por exemplo, a linha abaixo é um caso:

```4d
:(bValidate=1)
```

Só são executadas as instruções que seguem o primeiro caso TRUE (até o próximo caso). Se nenhum dos casos for TRUE, nenhuma das afirmações será executada (se nenhuma parte `Senão` estiver incluída).

Pode incluir uma instrução Else depois do último caso. Se todos os casos forem FALSE, as instruções que seguem `Else` serão executadas.

#### Exemplo

Esse exemplo testa uma variável numérica e exibe uma caixa de alerta com uma apalavra:

```4d
 Case of
    :(vResult=1) //Teste se o número é 1
       ALERT("Um! ) //Se for 1, exibir um alerta
    :(vResult=2) //Teste se o número é 2
       ALERT("Dois. ) //Se for 2, exibir um alerta
    :(vResult=3) //Testar se o número é 3
       ALERT("Três". ) //Se for 3, exiba um alerta
    Senão //Se não for 1, 2 ou 3, exibir um alerta
       ALERT("Não era um, dois ou três. )
End case
```

Para comparar, aquí está la versión `If...Else...End if` del mismo método:

```4d
 If(vResult=1) //Teste se o número é 1
    ALERT("One.") //Se for 1, exiba um alerta
 Else
    If(vResult=2) //Teste se o número é 2
       ALERT("Two.") //Se for 2, exiba um alerta
    Else
       If(vResult=3) //Teste se o número é 3
          ALERT("Three.") //Se for 3, exiba um alerta
       Else //Se não for 1, 2 ou 3, exiba um alerta
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Lembre-se que com uma estrutura de caso `Case of...Else...End case`, apenas o primeiro caso VERDADEIRO é executado. Mesmo se dois ou mais casos forem TRUE, só as instruções que seguirem o primeiro caso TRUE serão executadas.

Dessa maneira, quando quiser implementar testes hierárquicos, deve garantir que as declarações de condição que estejam mais abaixo no esquema hierárquico apareçam primeiro na sequência de testes. Por exemplo, o teste de presença de condicionalidade 1 cobre o teste de presença de condicionalidade 1&condi2 e, por conseguinte, deve ser localizado por último na sequência de testes. Por exemplo, o código abaixo nunca terá sua última condição detectada:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //esse caso nunca será detectado
       ... //declaração(ões)
 End case
```

No código anterior, a presença da segunda condição não é detectada, já que o teste "vResult=1" ramifica o código antes de qualquer outro teste. Para que o código funcione corretamente, pode escrevê-lo assim:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //esse caso será detectado primeiro
       ... //declaração(ões)
    :(vResult=1)
       ... //declaração(ões)
 End case
```

Além disso, se quiser implementar teste hierárquico, pode considerar usar um código hierárquico.

**Dica:** A ramificação pode ser realizada sem instruções a serem executadas em um caso ou no outro. Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:

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

A sintaxe formal da estrutura de fluxo de controle `While...End while` é:

```4d
 While(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 End while
```

Um loop `While...End while` executa as declarações dentro do loop enquanto a expressão booleana for TRUE. Comprova a expressão booleana ao início do loop e não entra no loop se a expressão for FALSE.

As instruções `break` e `continue` são [descritas abaixo](#break-and-continue).

É comum inicializar o valor testado na expressão booleana imediatamente antes de entrar no loop `Enquanto...Fim enquanto`. Inicializar o valor significa definí-lo como algo apropriado, geralmente para que a expressão booleana seja VERDADEIRA e `While... End while` executa o laço.

O valor da expressão booleana deve poder ser modificado por um elemento dentro do loop, do contrário será executado indefinidamente. O seguinte loop continua para sempre porque *NeverStop* sempre é TRUE:

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Se você se encontrar em uma situação desse tipo, na qual um método fica executando de forma descontrolada, pode usar as funções de rastreamento para parar o loop e rastrear o problema. Para saber mais informações sobre o rastreio de um método, consulte a página de [Error handling](error-handling.md).

#### Exemplo

```4d
 CONFIRM("Adicionar um novo registro?") //O usuário quer adicionar um registro?
 While(OK=1) //Loop enquanto o usuário quiser
    ADD RECORD([aTable]) //Adiciona um novo registro
 End while //O loop sempre termina com End while
```

Nesse exemplo, a variável de sistema `OK` é definida pelo comando `CONFIRM` antes do início do loop. Se o usuário clicar no botão **OK** na caixa de diálogo de confirmação, a variável de sistema `OK` será definida como 1 e o loop será iniciado. Senão, a variável de sistema `OK` é definida como 0 e o loop é pulado. Uma vez que o loop começa, o comando `ADD RECORD` mantém o loop em execução porque ele define a variável de sistema `OK` como 1 quando o usuário salva o registro. Quando o usuário cancela (não salva) o último registro, a variável do sistema `OK` é definida como 0 e o laço para.

## Repeat... Until

La sintaxis de la estructura condicional `Repeat...Until` es:

```4d
Repeat
	statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```

Um loop `Repeat...Until` é similar a um loop [While...End while](flow-control.md#whileend-while), exceto que ele testa a expressão booleana depois do loop ao invés de antes. Assim, um loop `Repeat...Until` sempre executa o loop uma vez, enquanto se a expressão booleana for inicialmente Falsa, um loop `While...End while` não executa o loop de forma alguma.

A outra diferença com um loop `Repita...Até` é que o loop continua até que a expressão booleana seja VERDADEIRA.

As instruções `break` e `continue` são [descritas abaixo](#break-and-continue).

#### Exemplo

Compare o exemplo a seguir com o exemplo para o laço `While...End while`. Lembre que a expressão booleana não precisa ser inicializada—não há um comando `CONFIRM` para inicializar a variável `OK`.

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
    {break}  
    {continue}
End for
```

O loop `For...End for` é um ciclo controlado por uma variável de contador:

- A variável contador *Counter_Variable* é uma variável numérica (real ou  Inteiro longo) que o loop `for...End for` inicializa para o valor especificado por *Start_Expression*.
- Cada vez que o loop é executado, a variável do contador é incrementada pelo valor especificado no valor opcional *Increment_Expression*. Se você não especificar *Increment_Expression*, a variável contadora é incrementada por um (1), que é o padrão.
- Quando a variável contador passa o valor *End_Expression*, o loop para.

**Importante:** As expressões numéricas *Start_Expression*, *End_Expression* e *Increment_Expression* são avaliadas apenas uma vez no começo do loop. Se essas expressões forem variáveis, mudar uma deles dentro do loop não vai afetar o loop.

**Dica:** No entanto, para fins especiais, você pode alterar o valor da variável de contador *Counter_Variable* dentro do loop; isso afetará o loop.

- Normalmente *Start_Expression* es menor que *End_Expression*.
- Se *Start_Expression* e *End_Expression* forem iguais, o loop será executado apenas uma vez.
- Se a *Start_Expression* for maior que *End_Expression*, o loop não será executado de todo a menos que você especifique um *Increment_Expression* negativo. Ver os exemplos.

As instruções `break` e `continue` são [descritas abaixo](#break-and-continue).

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
  /Faz algo com o elemento
    anArray{$vlElem}:=...
 End for
```

3. O exemplo abaixo recorre todos os caracteres do texto vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Faz algo com o caractere se for TAB
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
  //Vai para próximo registro
    NEXT RECORD([aTable])
 End for
```

A maioria dos loops `For...End for` que você irá escrever em seus projetos terá a aparência dos listados nestes exemplos.

### Variável contador

#### Variável contador decrescente

Em alguns casos, pode querer ter um loop cuja variável de contador seja decrescente ao invés de crescente. Para fazer isso, você precisa especificar *Start_Expression* maior que *End_Expression* e uma *Increment_Expression* negativa. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:

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
  //Faz algo com o caractere se for um TAB
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
  //Vai para registro anterior
    PREVIOUS RECORD([aTable])
 End for
```

#### Incrementar a variável do contador em mais de um

Se precisar, pode usar uma Increment_Expression (positiva ou negativa) cujo valor absoluto seja maior que um.

9. O loop a seguir aborda só os elementos pares do array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Faz algo com o  element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```

#### Otimizando a execução do comando For...End para loops

Pode utilizar variáveis reais e inteiras, assim como contadores interprocesso, de processo e de variáveis locais. Para loops repetitivos longos, especialmente em modo compilado, use variáveis locais de tipo Inteiro longo.

10. Aqui um exemplo simples:

```4d
 var $vlCounter : Integer //usa variáveis Integer locais 
 For($vlCounter;1;10000)
  //Faz algo
 End for
```

### Comparação de estruturas de loop

Vamos voltar para o primeiro exemplo `For...End for`. O seguinte exemplo executa 100 iterações:

```4d
 For(vCounter;1;100)
  //Faz algo
 End for
```

É interessante ver como o laço `While...End while` e o ciclo `Repeat...Until` realizariam a mesma ação. Aqui está o ciclo equivalente `While...End while`:

```4d
 $i:=1 //Initializa o contador
 While($i=100) //Loop 100 vezes
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 End while
```

Aqui está o ciclo equivalente `Repeat...Until`:

```4d
 $i:=1 //Initializa o contador
 Repeat
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 Until($i=100) //Loop 100 vezes
```

:::tip

O ciclo `For...End for` geralmente é mais rápido que o `While...End while` e `Repeat... Until`, porque 4D testa a condição internamente para cada ciclo do loop e incrementa o contador. Portanto, use o laço `Para...Fim para` sempre que possível.

:::

### Estruturas For... End for aninhadas

Pode aninhar tantas estruturas de controle (dentro do razoável) como precisar. Isso inclui aninhar loops `for...End for`. Para evitar erros, tenha certeza de usar variáveis contador diferentes para cada estrutura de looping.

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

A sintaxe formal da estrutura de controle de fluxo para `For each...End for each` é:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

La estructura `For each... End for each` ejecuta un *Current_item* especificado sobre todos los valores de *Expression*. El tipo *Current_item* depende del tipo *Expression*. El bucle `For each... End for each` puede iterar a través de tres tipos de *Expression*:

- collections: loop por cada elemento da coleção,
- seleções de entidades: loop em cada entidade,
- objetos: loop em cada propriedade do objeto.

La siguiente tabla compara los tres tipos de `For each... End for each`:

|                                                 | Loop através da coleção                                  | Loop nas seleções de entidades | Loop nos objetos                 |
| ----------------------------------------------- | -------------------------------------------------------- | ------------------------------ | -------------------------------- |
| Tipo Current_Item          | Variável do mesmo tipo que os elementos da coleção       | Entity                         | Variável texto                   |
| Tipos de expressões                             | Coleção (com elementos do mesmo tipo) | Seleção de entidades           | Object                           |
| Número de loops (por padrão) | Número de elementos da coleção                           | Número de entidades na seleção | Número de propriedades de objeto |
| Compatibilidade de parâmetros begin / end       | Sim                                                      | Sim                            | Não                              |

- O número de loops é avaliado no início e não muda durante o processo. Adicionar ou remover itens durante o loop não é recomendado porque resulta em iterações faltantes ou redundantes.
- Por padrão, as  instruções anexas são executadas para cada valor de Expressão\*. Entretanto, é possível sair do loop comprovando uma condição ao início do loop (While) ou ao final do loop (Until).
- Os parâmetros opcionais *begin* e *end* podem ser usados com coleções e seleções de entidades para definir os limites do loop.
- O laço `Para cada... Fim para cada` pode ser usado em uma **coleção compartilhada** ou um **objeto compartilhado**. Se seu código precisar modificar um ou mais elemento(s) das propriedades de coleção ou objeto, você precisa usar as palavras-chave `Use...End use`. Dependendo de suas necessidades, você pode chamar as palavras-chave `Use...End use`:
  - antes de entrar no loop, se os elementos devem ser modificados juntos por razões de integridade, ou
  - dentro do loop quando só tiver que modificar alguns elementos/propriedades e não é necessário gerenciar a integridade.

As instruções `break` e `continue` são [descritas abaixo](#break-and-continue).

### Loop através da coleção

Quando \`For each... End for each' é usado com uma *Expressão* do tipo *Coleção*, o parâmetro *Current_Item* é uma variável do mesmo tipo que os elementos da coleção. Como padrão, o número de loops é baseado no número de elementos da coleção.

A coleção deve conter apenas elementos do mesmo tipo, caso contrário, um erro será retornado assim que a variável *Current_Item* for atribuída ao primeiro tipo de valor incompatível.

Em cada iteração do loop, a variável *Current_Item* é automaticamente preenchida com o elemento correspondente da coleção. Os pontos abaixo devem ser considerados:

- Se a variável *Current_Item* é do tipo de objeto ou tipo de coleção (por exemplo, se *Expressão* for uma coleção de objetos ou de coleções), Modificar esta variável irá automaticamente modificar o elemento correspondente à coleção (porque os objetos e coleções compartilham as mesmas referências). Se a variável for de tipo escalar, só se modificará a variável.
- A variável *Current_Item* deve ser do mesmo tipo que os elementos da coleção. Se algum elemento da coleção não for do mesmo tipo que a variável, um erro é gerado e o loop para.
- Se a coleção contiver elementos com um valor **Null**, será gerado um erro se o tipo de variável *Current_Item* não suportar valores **Null** (como variáveis longint).

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

Quando `For each...End for each` for usado com uma *Expressão* do tipo *Seleção de Entidade*, o parâmetro *Current_Item* é a entidade que está sendo processada no momento.

O número de loops é baseado no número de entidades da seleção de entidades. Em cada iteração de loop, o parâmetro *Current_Item* é automaticamente preenchido com a entidade da seleção da entidade que estiver sendo processada no momento.

**Nota:** si la selección de entidades contiene una entidad que fue eliminada mientras tanto por otro proceso, se salta automáticamente durante el bucle.

Lembre que qualquer modificação aplicada na entidade atual deve ser guardada explicitamente utilizando entity.save()\`.

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

Quando `for each...end for each` for usado com uma *Expressão* do tipo Objeto, o parâmetro *Current_Item* é uma variável de texto preenchida automaticamente com o nome da propriedade atualmente processada.

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

**Nota:** Os parâmetros *inicio* e *fim* só podem ser utilizados em iterações através de coleções e seleções de entidades (são ignoradas nas propriedades de objetos).

- No parâmetro *início*, passe a posição dos elementos na *Expressão* na qual se inicia a iteração (*começo* está incluída).
- No parâmetro *final*, você também pode passar a posição do elemento na *Expressão* em que para parar a iteração (*fim* é excluída).

Se *end* for omitido ou se *end* for maior que o número de elementos em *Expression*, os elementos são iterados de *begin* até o último (incluído).
Se os parâmetros *begin* e *end* forem valores positivos, eles representam posições reais de elementos em *Expression*.
Se *begin* for um valor negativo, é recalculado como `begin:=begin+Expression size` (é considerado como o deslocamento desde o final de *Expression*). Se o valor calculado for negativo, *begin* é definido como 0.
**Nota:** Mesmo se begin for negativo, a iteração continua sendo realizada na ordem normal.
Se *end* for um valor negativo, ele é recalculado como `end:=end+tamanho da expressão`

Por exemplo:

- uma coleção contém 10 elementos (numerada de 0 a 9)
- begin=-4 -> begin=-4+10=6 -> iteração começa no sexto elemento (#5)
- end=-2 -> end=-2+10=8 -> a iteração para antes do 8º elemento (#7), ou seja, no 7º elemento.

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

Você pode controlar a execução do `Para cada...Fim para cada` adicionando uma condição `Até` ou `Enquanto` ao loop. Quando uma instrução `Until(condition)` está associada ao laço, a iteração irá parar assim que a condição for avaliada como `True`, Enquanto quando é o caso de uma declaração `While(condition)`, a iteração irá parar quando a condição for avaliada primeiro para `False`.

Pode passar qualquer uma das duas palavras chave em função das suas necessidades:

- A condição `até` é testada no final de cada iteração, portanto, se o *Expressão* não estiver vazio ou nulo, o loop será executado pelo menos uma vez.
- A condição `While` é testada no início de cada iteração, então de acordo com o resultado da condição, o loop pode não ser executado de forma alguma.

#### Exemplo

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)
 
 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
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

Se a declaração `break` estiver dentro de um [loop aninhado](#nested-forend-for-looping-structures) (loop dentro de outro loop), a declaração `break` terminará o loop mais interno.

#### Exemplo

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //se uma condição virar verdade
		break //fim do loop
	End if
End for
```

### continue

A instrução `continue` termina a execução das instruções na iteração atual do loop atual e continua a execução do loop com a próxima iteração.

```4d
var $text : Text
For ($i; 0; 9)
	If ($i=3)
		continue //vai diretamente para nova iteração
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

A declaração `return` pode ser chamada de qualquer lugar. Quando uma declaração `return` é utilizada em uma função ou método, a execução da função ou método é interrompida. O código restante não é executado e o controlo é devolvido ao autor da chamada.

A declaração `return` pode ser utilizada para [devolver um valor](parameters.md#return-expression) ao autor da chamada.

#### Exemplo

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
	$i:=$i+1
	$message+=String($i)+"A\r"  // até 5
	logConsole($message)
	If ($i=5)
		return //para o loop
	End if 
	$message+=String($i)+"B\r"  // até 4
	logConsole($message)
End while 
$message+=String($i)+"C\r"  //nunca é executado 
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
