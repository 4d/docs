---
id: control-flow
title: Fluxo de controlo
---

Independentemente da simplicidade ou da complexidade de um método, sempre utilizará um ou vários dos três tipos de estruturas de programação. As estruturas de programação determinam o fluxo de execução, se serão executadas, e a ordem das linhas de instruções dentro do método. Há três tipos de estruturas:

- \*\*Sequencial: uma estrutura sequencial é uma estrutura simples e linear. Uma sequência é uma série de sentenças que 4D executa uma atrás da outra, da primera à última. Uma instrução de uma linha, utilizada frequentemente para os métodos dos objetos, é o caso mais simples de uma estrutura sequencial. Por exemplo: [People]lastName:=Uppercase([People]lastName)\`
- **Ramificación**: una estructura de ramificación permite que los métodos prueben una condición y tomen caminos alternativos, dependiendo del resultado. A condição é uma expressão booleana, uma expressão que avalia TRUE ou FALSE. One branching structure is the [`If...Else...End if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`Case of...Else...End case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Bucle**: cuando se escriben métodos, es muy común encontrarse con que se necesita que una secuencia de sentencias se repita un número de veces. Para lidar com esta necessidade, a linguagem 4D oferece as estruturas de loop abaixo:

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

Os loops são controlados de duas maneiras: ou fazem loop até que uma condição seja satisfeita, ou fazem loop um número especificado de vezes. Cada estructura de bucle puede utilizarse de cualquier manera, pero los bucles `While` y los bucles `Repeat` son más apropiados para repetir hasta que se cumpla una condición, y los bucles `For` son más apropiados para hacer un bucle un número determinado `For each...End for each` permite la mezcla en ambos sentidos y está diseñado para realizar bucles dentro de objetos y colecciones.

**Nota:** 4D permite anidar estructuras de programación hasta una "profundidad" de 512 niveles.

## If... Else... End if

La sintaxis de la estructura condicional `If...Else...End if` es:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Tenga en cuenta que la parte `Else` es opcional; puede escribir:

```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

La estructura `If...Else...End if` permite a su método elegir entre dos acciones, dependiendo de si una prueba (una expresión booleana) es TRUE o FALSE. Quando a expressão Booleana for TRUE, são executadas as declarações que seguem imediatamente ao teste. Se a expressão Booleana for FALSE, são executadas as declarações que seguem a linha Else. El `Else` es opcional; si se omite Else, la ejecución continúa con la primera instrucción (si la hay) que sigue al `End if`.

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

> **Note:** The [ternary operator](operators.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of If..

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

**Consejo:** la ramificación puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:

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

The formal syntax of the `Case of... Else...End case` control flow structure is:

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

Tenga en cuenta que la parte `Else` es opcional; puede escribir:

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

As with the `If...Else...End if` structure, the `Case of... Else...End case` structure also lets your method choose between alternative actions. Unlike the `If...Else...End` if structure, the `Case of... Else...End case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Cada expressão booleana é precedida de dois pontos (`:`). A combinação dos dois pontos e da expressão booleana é chamada de um caso. Por exemplo, a linha abaixo é um caso:

```4d
:(bValidate=1)
```

Só são executadas as instruções que seguem o primeiro caso TRUE (até o próximo caso). Si ninguno de los casos es TRUE, no se ejecutará ninguna de las instrucciones (si no se incluye la parte `Else`).

Pode incluir uma instrução Else depois do último caso. Si todos los casos son FALSE, se ejecutarán las instrucciones siguientes al `Else`.

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

Para comparar, aquí está la versión `If...Else...End if` del mismo método:

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

Remember that with a `Case of... Else...End case` structure, only the first TRUE case is executed. Mesmo se dois ou mais casos forem TRUE, só as instruções que seguirem o primeiro caso TRUE serão executadas.

Dessa maneira, quando quiser implementar testes hierárquicos, deve garantir que as declarações de condição que estejam mais abaixo no esquema hierárquico apareçam primeiro na sequência de testes. Por ejemplo, si se quiere procesar el caso simple (vResult=1) y el caso complejo (vResult=1) & (vCondition#2) y se estructura el método de la siguiente manera: Por exemplo, o código abaixo nunca terá sua última condição detectada:

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

**Consejo:** la ramificación puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Quando desenvolver um algoritmo ou uma aplicação especializada, nada impede que escreva:

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

La sintaxis de la estructura condicional `While...End while` es:

```4d
 While(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 End while
```

Un bucle `While...End while` ejecuta las instrucciones dentro del bucle mientras la expresión booleana sea TRUE. Comprova a expressão booleana ao início do loop e não entra no loop se a expressão for FALSE.

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

Es común inicializar el valor probado en la expresión booleana inmediatamente antes de entrar en el bucle `While...End while`. Inicializar el valor significa asignarle un contenido adecuado, normalmente para que la expresión booleana sea TRUE y `While...End while` ejecute el bucle.

O valor da expressão booleana deve poder ser modificado por um elemento dentro do loop, do contrário será executado indefinidamente. The following loop continues forever because _NeverStop_ is always TRUE:

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

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

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

- La variable contador _Counter_Variable_ es una variable numérica (Real o Entero largo) inicializada por `For...End for` con el valor especificado por _Start_Expression_.
- Cada vez que se ejecuta el bucle, la variable del contador se incrementa en el valor especificado en el valor opcional _Increment_Expression_. Si no se especifica _Increment_Expression_, la variable del contador se incrementa en uno (1), que es el valor predeterminado.
- Cuando la variable del contador pasa el valor _End_Expression_, el bucle se detiene.

**Importante:** las expresiones numéricas _Start_Expression_, _End_Expression_ y _Increment_Expression_ se evalúan una vez al principio del bucle. Se essas expressões forem variáveis, mudar uma deles dentro do loop não vai afetar o loop.

**Consejo:** Sin embargo, para fines especiales, puede cambiar el valor de la variable _Counter_Variable_ dentro del bucle; esto afectará al bucle.

- Normalmente _Start_Expression_ es menor que _End_Expression_.
- Si _Start_Expression_ y _End_Expression_ son iguales, el bucle se ejecutará sólo una vez.
- Si _Start_Expression_ es mayor que _End_Expression_, el bucle no se ejecutará en absoluto a menos que se especifique una _Increment_Expression_ negativa. Ver os exemplos.

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

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

Em alguns casos, pode querer ter um loop cuja variável de contador seja decrescente ao invés de crescente. Para ello, debe especificar _Start_Expression_ mayor que _End_Expression_ y _Increment_Expression_ debe ser negativa. Os exemplos abaixo fazem a mesma coisa que nos exemplos acima, mas na ordem inversa:

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

Si lo requiere, puede utilizar una _Increment_Expression_ (positiva o negativa) cuyo valor absoluto sea mayor que uno.

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

La estructura `For each... End for each` ejecuta un _Current_item_ especificado sobre todos los valores de _Expression_. El tipo _Current_item_ depende del tipo _Expression_. El bucle `For each... End for each` puede iterar a través de tres tipos de _Expression_:

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
- By default, the enclosed _statement(s)_ are executed for each value in _Expression_. Sin embargo, es posible salir del bucle comprobando una condición al principio del bucle ( `While`) o al final del bucle (`Until`).
- Los parámetros opcionales _begin_ y _end_ pueden utilizarse con colecciones y selecciones de entidades para definir los límites del bucle.
- El bucle `For each... End for each` puede utilizarse en una **colección compartida** o en un **objeto compartido**. Si su código necesita modificar uno o más elementos de la colección o de las propiedades del objeto, debe utilizar las palabras clave `Use...End use`. Dependiendo de sus necesidades, puede llamar a las palabras clave `Use...End use`:
  - antes de entrar no loop, se os elementos devem ser modificados juntos por razões de integridade, ou
  - dentro do loop quando só tiver que modificar alguns elementos/propriedades e não é necessário gerenciar a integridade.

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

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

Cuando `For each... End for each` se utiliza con una _Expression_ del tipo _Collection_, el parámetro _Current_Item_ es una variable del mismo tipo que los elementos de la colección.

O número de loops é baseado no número de entidades da seleção de entidades. En cada iteración del bucle, el parámetro _Current_Item_ se llena automáticamente con la entidad de la selección de entidades que se procesa actualmente.

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

Cuando se utiliza `For each... End for each` con una _Expression_ de tipo Object, el parámetro _Current_Item_ es una variable texto que se llena automáticamente con el nombre de la propiedad actualmente procesada.

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

\*\*Nota:\*\*los parámetros _inicio_ y _fin_ sólo pueden utilizarse en iteraciones a través de colecciones y selecciones de entidades (se ignoran en las propiedades de objetos).

- En el parámetro _begin_, pase la posición del elemento en _Expression_ en la que se iniciará la iteración (se incluye _begin_).
- En el parámetro _end_, también se puede pasar la posición del elemento en _Expression_ en la que se debe detener la iteración (se excluye _end_).

Si se omite _fin_ o si _fin_es mayor que el número de elementos de _Expression_, se iteran los elementos desde _inicio_ hasta el último (incluido).
Si los parámetros _inicio_ y _fin_ son valores positivos, representan posiciones reales de elementos en _Expression_.
Si _comienzo_ es un valor negativo, se recalcula como `comienzo:=comienzo+tamaño de la expresión` (se considera como el desplazamiento desde el final de _Expression_). Si el valor calculado es negativo, _inicio_ toma el valor 0.
**Nota:** aunque inicio sea negativo, la iteración se sigue realizando en el orden estándar.
Si _fin_ es un valor negativo, se recalcula como `fin:=fin+tamaño de la expresión`

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

- La condición `Until` se comprueba al final de cada iteración, por lo que si _Expression_ no está vacía o es nula, el bucle se ejecutará al menos una vez.
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
