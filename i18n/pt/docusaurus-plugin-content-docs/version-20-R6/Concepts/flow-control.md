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

Se você se encontrar em uma situação desse tipo, na qual um método fica executando de forma descontrolada, pode usar as funções de rastreamento para parar o loop e rastrear o problema. Para más información sobre el seguimiento de un método, consulte la página [Gestión de errores](error-handling.md).

#### Exemplo

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

En este ejemplo, el valor de la variable sistema `OK` es definido por el comando `CONFIRM` antes de que se inicie el bucle. Si el usuario hace clic en el botón **OK** de la caja de diálogo de confirmación, la variable del sistema `OK` toma el valor 1 y se inicia el bucle. En caso contrario, la variable del sistema `OK` toma el valor 0 y se omite el bucle. Una vez se inicia el bucle, el comando `ADD RECORD` permite continuar la ejecución del bucle porque se define la variable sistema `OK` en 1 cuando el usuario guarda el registro. Cuando el usuario cancela (no guarda) el último registro, la variable del sistema `OK` toma el valor 0 y el bucle se detiene.

## Repeat... Until

La sintaxis de la estructura condicional `Repeat...Until` es:

```4d
Repeat
	statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```

Un bucle `Repeat...Until` es similar a un bucle [While...End while](flow-control.md#whileend-while), excepto que comprueba la expresión booleana después del bucle en lugar de antes. Así, un bucle `Repeat...Until` siempre ejecuta el bucle una vez, mientras que si la expresión booleana es inicialmente False, un bucle `While...End while` no ejecuta el bucle en absoluto.

La otra diferencia con un bucle `Repeat...Until` es que el bucle continúa hasta que la expresión booleana sea TRUE.

As instruções `break` e `continue` são [descritas abaixo](#break-and-continue).

#### Exemplo

Compara el siguiente ejemplo con el ejemplo del bucle `While...End while`. Tenga en cuenta que la expresión booleana no necesita ser inicializada-no hay un comando `CONFIRM` para inicializar la variable `OK`.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

La sintaxis de la estructura condicional `For...End for` es:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

El bucle `For...End for` es un bucle controlado por un contador:

- La variable contador *Counter_Variable* es una variable numérica (Real o Entero largo) inicializada por `For...End for` con el valor especificado por *Start_Expression*.
- Cada vez que se ejecuta el bucle, la variable del contador se incrementa en el valor especificado en el valor opcional *Increment_Expression*. Si no se especifica *Increment_Expression*, la variable del contador se incrementa en uno (1), que es el valor predeterminado.
- Cuando la variable del contador pasa el valor *End_Expression*, el bucle se detiene.

**Importante:** las expresiones numéricas *Start_Expression*, *End_Expression* y *Increment_Expression* se evalúan una vez al principio del bucle. Se essas expressões forem variáveis, mudar uma deles dentro do loop não vai afetar o loop.

**Consejo:** Sin embargo, para fines especiales, puede cambiar el valor de la variable *Counter_Variable* dentro del bucle; esto afectará al bucle.

- Normalmente *Start_Expression* es menor que *End_Expression*.
- Si *Start_Expression* y *End_Expression* son iguales, el bucle se ejecutará sólo una vez.
- Si *Start_Expression* es mayor que *End_Expression*, el bucle no se ejecutará en absoluto a menos que se especifique una *Increment_Expression* negativa. Ver os exemplos.

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

La mayoría de los bucles `For...End for` que escribirá en sus proyectos se parecerán a los que se presentan en estos ejemplos.

### Variável contador

#### Variável contador decrescente

Em alguns casos, pode querer ter um loop cuja variável de contador seja decrescente ao invés de crescente. Para ello, debe especificar *Start_Expression* mayor que *End_Expression* y *Increment_Expression* debe ser negativa. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:

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

Si lo requiere, puede utilizar una *Increment_Expression* (positiva o negativa) cuyo valor absoluto sea mayor que uno.

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

Volvamos al primer ejemplo de `For...End for`. O seguinte exemplo executa 100 iterações:

```4d
 For(vCounter;1;100)
  //Faz algo
 End for
```

Es interesante ver cómo el bucle `While...End while` y el bucle `Repeat...Until` realizarían la misma acción. Aquí está el bucle equivalente `While...End while`:

```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Aquí está el bucle equivalente `Repeat...Until`:

```4d
 $i:=1 //Initializa o contador
 Repeat
  //Faz algo
    $i:=$i+1 //Precisa incrementar o contador
 Until($i=100) //Loop 100 vezes
```

:::tip

El bucle `For...End for` suele ser más rápido que los bucles `While...End while` y `Repeat...Until`, porque 4D comprueba la condición internamente en cada ciclo del bucle e incrementa el contador. Por lo tanto, utilice el bucle `For...End for` siempre que sea posible.

:::

### Nested For... End for looping structures

Pode aninhar tantas estruturas de controle (dentro do razoável) como precisar. Esto incluye la anidación de bucles `For...End for`. Para evitar erros, tenha certeza de usar variáveis contador diferentes para cada estrutura de looping.

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

La sintaxis de la estructura condicional `For each... End for each` es:

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
- By default, the enclosed *statement(s)* are executed for each value in *Expression*. Sin embargo, es posible salir del bucle comprobando una condición al principio del bucle ( `While`) o al final del bucle (`Until`).
- Los parámetros opcionales *begin* y *end* pueden utilizarse con colecciones y selecciones de entidades para definir los límites del bucle.
- El bucle `For each... End for each` puede utilizarse en una **colección compartida** o en un **objeto compartido**. Si su código necesita modificar uno o más elementos de la colección o de las propiedades del objeto, debe utilizar las palabras clave `Use...End use`. Dependiendo de sus necesidades, puede llamar a las palabras clave `Use...End use`:
  - antes de entrar no loop, se os elementos devem ser modificados juntos por razões de integridade, ou
  - dentro do loop quando só tiver que modificar alguns elementos/propriedades e não é necessário gerenciar a integridade.

As instruções `break` e `continue` são [descritas abaixo](#break-and-continue).

### Loop através da coleção

When `For each...End for each` is used with an *Expression* of the *Collection* type, the *Current_Item* parameter is a variable of the same type as the collection elements. Como padrão, o número de loops é baseado no número de elementos da coleção.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the *Current_Item* variable is assigned the first mismatched value type.

At each loop iteration, the *Current_Item* variable is automatically filled with the matching element of the collection. Os pontos abaixo devem ser considerados:

- If the *Current_Item* variable is of the object type or collection type (i.e. if *Expression* is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). Se a variável for de tipo escalar, só se modificará a variável.
- The *Current_Item* variable must be of the same type as the collection elements. Se algum elemento da coleção não for do mesmo tipo que a variável, um erro é gerado e o loop para.
- If the collection contains elements with a **Null** value, an error will be generated if the *Current_Item* variable type does not support **Null** values (such as longint variables).

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

Cuando `For each... End for each` se utiliza con una *Expression* del tipo *Collection*, el parámetro *Current_Item* es una variable del mismo tipo que los elementos de la colección.

O número de loops é baseado no número de entidades da seleção de entidades. En cada iteración del bucle, el parámetro *Current_Item* se llena automáticamente con la entidad de la selección de entidades que se procesa actualmente.

**Nota:** si la selección de entidades contiene una entidad que fue eliminada mientras tanto por otro proceso, se salta automáticamente durante el bucle.

Tenga en cuenta que cualquier modificación aplicada en la entidad actual debe ser guardada explícitamente utilizando `entity.save()`.

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

Cuando se utiliza `For each... End for each` con una *Expression* de tipo Object, el parámetro *Current_Item* es una variable texto que se llena automáticamente con el nombre de la propiedad actualmente procesada.

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

\*\*Nota:\*\*los parámetros *inicio* y *fin* sólo pueden utilizarse en iteraciones a través de colecciones y selecciones de entidades (se ignoran en las propiedades de objetos).

- En el parámetro *begin*, pase la posición del elemento en *Expression* en la que se iniciará la iteración (se incluye *begin*).
- En el parámetro *end*, también se puede pasar la posición del elemento en *Expression* en la que se debe detener la iteración (se excluye *end*).

Si se omite *fin* o si *fin*es mayor que el número de elementos de *Expression*, se iteran los elementos desde *inicio* hasta el último (incluido).
Si los parámetros *inicio* y *fin* son valores positivos, representan posiciones reales de elementos en *Expression*.
Si *comienzo* es un valor negativo, se recalcula como `comienzo:=comienzo+tamaño de la expresión` (se considera como el desplazamiento desde el final de *Expression*). Si el valor calculado es negativo, *inicio* toma el valor 0.
**Nota:** aunque inicio sea negativo, la iteración se sigue realizando en el orden estándar.
Si *fin* es un valor negativo, se recalcula como `fin:=fin+tamaño de la expresión`

Por exemplo:

- uma coleção contém 10 elementos (numerada de 0 a 9)
- begin=-4 > -> begin=-4+10=6 >-> la iteración comienza en el sexto elemento (#5)
- end=-2 -> end=-2+10=8 -> la iteración se detiene antes del 8º elemento (#7), es decir, en el 7º elemento.

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

Puede controlar la ejecución de `For each... End for each` añadiendo una condición `Until` o una condición `While` al bucle. When an `Until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `While(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

Pode passar qualquer uma das duas palavras chave em função das suas necessidades:

- La condición `Until` se comprueba al final de cada iteración, por lo que si *Expression* no está vacía o es nula, el bucle se ejecutará al menos una vez.
- La condición `While` se prueba al principio de cada iteración, por lo que según el resultado de la condición, el bucle puede no ejecutarse en absoluto.

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

Todas las estructuras de bucle anteriores soportan las instrucciones `break` y `continue`. Estas instruções dão-lhe mais controlo sobre os loops, permitindo-lhe sair do ‘loop’ e ignorar a iteração atual a qualquer momento.

### break

La instrucción `break` termina el bucle que la contiene. Control of the program flows to the statement immediately after the body of the loop.

Si la instrucción `break` está dentro de un bucle al interior de un [bucle anidado](#nested-forend-for-looping-structures) (bucle dentro de otro bucle), la instrucción `break` terminará el bucle más interno.

#### Exemplo

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //if a condition becomes true
		break //end of the for loop
	End if
End for
```

### continue

La instrucción `continue` termina la ejecución de las instrucciones en la iteración actual del bucle actual, y continúa la ejecución del bucle con la siguiente iteración.

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

La instrucción `return` puede ser llamada desde cualquier lugar. Cuando se utiliza una instrucción `return` en una función o un método, se detiene la ejecución de la función o del método. O código restante não é executado e o controlo é devolvido ao autor da chamada.

La instrucción `return` puede utilizarse para [devolver un valor](parameters.md#return-expression) al llamante.

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
