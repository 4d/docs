---
id: pointer
title: Ponteiro
---

Uma variável ou expressão ponteiro é uma referência a outra variável (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. Não há campo do tipo Pointer.

Os apontadores fornecem uma forma avançada (na programação) para se referir aos dados. Quando você usar a linguagem, você acessa vários objetos - em particular, tabelas, campos, variáveis, objetos e matrizes - simplesmente usando seus nomes. No entanto, muitas vezes é útil fazer referência a estes elementos e aceder aos mesmos sem conhecer os seus nomes. Isto é o que os indicadores lhe permitem fazer.

O conceito subjacente aos ponteiros não é assim tão incomum na vida cotidiana. Muitas vezes você se refere a algo sem saber sua identidade exata. Por exemplo, poderia dizer a um amigo: "Vamos dar uma volta no seu carro" em vez de "Vamos dar uma volta no carro com a placa 123ABD". Neste caso, está a referenciar o carro com a matrícula 123ABD, utilizando a frase "o seu carro". A frase "carro com matrícula 123ABD" é como o nome de um objecto, e utilizar a frase "o seu carro" é como utilizar um ponteiro para fazer referência ao objecto.

Ser capaz de se referir a algo sem conhecer a sua identidade exata é muito útil. De facto, o seu amigo poderia obter um carro novo, e a frase "o seu carro" continuaria a ser exata - continuaria a ser um carro e ainda poderia dar uma volta nele. Os ponteiros funcionam da mesma maneira. Por exemplo, um ponteiro poderia, de uma vez, referir-se a um campo numérico chamado Age, e mais tarde referir-se a uma variável numérica chamada Old Age. Em ambos os casos, o ponteiro faz referência a dados numéricos que poderiam ser utilizados num cálculo.

Pode usar apontadores para referenciar tabelas, campos, variáveis, matrizes, elementos de array, e objetos. A tabela a seguir dá um exemplo de cada tipo de dado:

| Tipo           | Referenciação                                                                               | Para usar                                   | Atribuição                                  |
| -------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| Tabela         | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | n/a                                         |
| Campo          | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"           |
| Variável       | vpVar:=->Variable                                                           | ALERT(vpVar->)           | vpVar->:="John"             |
| Array          | vpArr:=->Array                                                              | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| Elemento Array | vpElem:=->Array{1}                                                          | ALERT (vpElem->)         | vpElem->:="John"            |
| Object         | vpObj:=->myObject                                                           | ALERT (vpObj->myProp)    | vpObj->myProp:="John"       |

## Usando um ponteiro: Exemplo básico

É mais fácil explicar o uso de ponteiros através de um exemplo. Este exemplo mostra como acessar uma variável através de um ponteiro. Começamos por criar uma variável:

```4d
$MyVar:="Hello"
```

$MyVar é agora uma variável que contém a string "Olá". Agora podemos criar um ponteiro para $MyVar:

```4d
C_POINTER($MyPointer)  
$MyPointer:=->$MyVar
```

El símbolo -> significa "obtener un puntero a." Este símbolo é formado por um traço seguido por um sinal "maior que". Neste caso, ele recebe o ponteiro que faz referência ou "aponta para" $MyVar. Este ponteiro é atribuído ao MyPointer com o operador de atribuição.

$MyPointer é agora uma variável que contém um ponteiro para $MyVar. $MyPointer não contém "Olá", que é o valor em $MyVar, mas pode usar $MyPointer para obter este valor. A seguinte expressão devolve o valor em $MyVar:

```4d
$MyPointer->
```

Nesse caso, ela retorna a seqüência de caracteres "Olá". El símbolo ->, cuando sigue a un puntero, hace referencia al objeto apuntado. A isto chama-se desreferenciação.

Es importante entender que se puede utilizar un puntero seguido del símbolo -> en cualquier lugar donde se podría haber utilizado el objeto al que apunta el puntero. Esto significa que podría utilizar la expresión $MyPointer-> en cualquier lugar en el que pudiera utilizar la variable original $MyVar. Por exemplo, a linha seguinte exibe uma caixa de alerta com a palavra Olá nela:

```4d
ALERT($MyPointer->)
```

Pode também utilizar $MyPointer para alterar os dados em $MyVar. Por exemplo, a seguinte declaração armazena a string "Goodbye" na variável $MyVar:

```4d
$MyPointer->:="Goodbye"
```

Si examina los dos usos de la expresión $MyPointer->, verá que actúa igual que si hubiera utilizado $MyVar en su lugar. Em resumo, as duas linhas seguintes realizam a mesma ação - ambas apresentam uma caixa de alerta contendo o valor actual na variável $MyVar:

```4d
ALERT($MyPointer->)
ALERT($MyVar)
```

As duas linhas seguintes executam a mesma ação - ambas atribuem a string "Goodbye" a $MyVar:

```4d
$MyPointer->:="Goodbye"
$MyVar:="Goodbye"
```

## Operadores de Ponteiros

Con:

```4d
  ` vPtrA e vPtrB apontam para o mesmo objecto
 vPtrA:=->anObject
 vPtrB:=->anObject
  ` vPtrC aponta para outro objecto
 vPtrC:=-outroObject
```

| Operação     | Sintaxe             | Retorna    | Expression    | Valor |
| ------------ | ------------------- | ---------- | ------------- | ----- |
| Igual        | Ponteiro = Ponteiro | Parâmetros | vPtrA = vPtrB | True  |
|              |                     |            | vPtrA = vPtrC | False |
| Desigualdade | Pointer # Pointer   | Parâmetros | vPtrA # vPtrC | True  |
|              |                     |            | vPtrA # vPtrB | False |

## Principais usos

### Ponteiros para tabelas

Em qualquer lugar que a língua espere ver uma tabela, pode usar um ponteiro desreferenciado para a tabela. Cria-se um ponteiro para uma mesa usando uma linha como esta:

```4d
$TablePtr:=->[anyTable]
```

También puede obtener un puntero a una tabla utilizando el comando `Table`:

```4d
$TablePtr:=Table(20)
```

Pode usar o ponteiro desreferenciado em comandos, como este:

```4d
DEFAULT TABLE($TablePtr->)
```

### Ponteiros a campos

Em qualquer lugar que a língua espere ver um campo, pode usar um ponteiro desreferenciado para referenciar o campo. Cria-se um ponteiro para um campo usando uma linha como esta:

```4d
$FieldPtr:=->[aTable]ThisField
```

También puede obtener un puntero a un campo utilizando el comando `Campo`, por ejemplo:

```4d
$FieldPtr:=Field(1;2)
```

Pode usar o ponteiro desreferenciado em comandos, como este:

```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Ponteiros para variáveis locais

Quando se utilizam apontadores para processar ou variáveis locais, é necessário ter a certeza de que a variável apontada já está definida quando o apontador é utilizado. Tenha em mente que as variáveis locais são eliminadas quando o método que as criou tiver concluído a sua execução e as variáveis de processo são eliminadas no final do processo que as criou. Quando um ponteiro chama uma variável que já não existe, isto causa um erro de sintaxe no modo interpretado (variável não definida) mas pode gerar um erro mais grave no modo compilado.

Os ponteiros para variáveis locais permitem-lhe guardar variáveis de processo em muitos casos. Os ponteiros para variáveis locais só podem ser utilizados dentro do mesmo processo. No depurador, quando se mostra um ponteiro para uma variável local que tenha sido declarada noutro método, o nome do método original é indicado entre parênteses, após o ponteiro. Por exemplo, se escrever no Método1:

```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```

No Método2, o depurador exibirá $1 como se segue:

| $1 | ->$MyVar (Method1) |
| -- | ------------------------------------- |

O valor de $1 será:

| $MyVar (Method1) | "Hello world" |
| ----------------------------------- | ------------- |

### Ponteiros para os elementos do array

Pode criar um ponteiro para um elemento de array. Por exemplo, as linhas seguintes criam um array e atribuem um ponteiro ao primeiro elemento do array a uma variável chamada $ElemPtr:

```4d
ARRAY REAL($anArray;10) //Crear un array
$ElemPtr:=->$anArray{1} //Crear un puntero al elemento de array
```

Poderia usar o ponteiro desreferenciado para atribuir um valor ao elemento, como este:

```4d
$ElemPtr->:=8
```

### Ponteiros a arrays

É possível criar um ponteiro para um array. Por exemplo, as seguintes linhas criam um array e atribuem um ponteiro ao array a uma variável chamada $ArrPtr:

```4d
ARRAY REAL($anArray;10) //Crear un array
$ArrPtr:=->$anArray //Crear un puntero al array
```

É importante compreender que o ponteiro aponta para a matriz; ele não aponta para um elemento da matriz. Por exemplo, pode utilizar o ponteiro desreferenciado das linhas anteriores como este:

```4d
SORT ARRAY($ArrPtr->;>) //Ordenar el array
```

Se precisar de se referir ao quarto elemento do array usando o ponteiro, faça desta maneira:

```4d
 ArrPtr->{4}:=84
```

### Indicadores como parâmetros para os métodos

Pode passar um ponteiro como parâmetro para um método. Dentro do método, você pode modificar o objeto referenciado pelo ponteiro. Por ejemplo, el siguiente método, `takeTwo`, toma dos parámetros que son punteros. Altera o objecto referenciado pelo primeiro parâmetro para caracteres maiúsculos, e o objecto referenciado pelo segundo parâmetro para caracteres minúsculos. Aqui está o método do projecto:

```4d
  //método projeto takeTwo
  //$1 - Ponteiro para um campo ou variável do tipo string. Altere para maiúsculas.
  //$2 - Ponteiro para um campo ou variável do tipo string. Altere para minúsculas.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

La siguiente línea utiliza el método `takeTwo` para cambiar un campo a mayúsculas y para cambiar una variable a minúsculas:

```
takeTwo(->[myTable]myField;->$MyVar)
```

Se o campo [myTable]myField contivesse a corda "jones", esta seria alterada para a corda "JONES". Se a variável $MyVar contivesse a string "HELLO", esta seria alterada para a string "olá".

No método takeTwo, e de facto, sempre que se utilizam apontadores, é importante que o tipo de dados do objecto a ser referenciado esteja correcto. No exemplo anterior, os apontadores devem apontar para algo que contenha um fio ou texto.

### Ponteiros a ponteiros

Se gosta realmente de complicar as coisas, pode usar apontadores para referenciar outros apontadores. Considerem este exemplo:

```4d
 $MyVar:="Hello"
 $PointerOne:=->$MyVar
 $PointerTwo:=->$PointerOne
 ($PointerTwo->)->:="Goodbye"
 ALERT(($PointerTwo->)->)
```

Exibe uma caixa de alerta com a palavra "Adeus".

Aqui está uma explicação de cada linha do exemplo:

- $MyVar:="Hello"
  \--> This line puts the string "Hello" into the variable $MyVar.
- $PointerOne:=-$MyVar
  \-- $PointerOne agora contém um ponteiro para $MyVar.
- $PointerTwo:=-$PointerOne
  \-- $PointerTwo (uma nova variável) contém um ponteiro para $PointerOne, que por sua vez aponta para $MyVar.
- ($PointerTwo->)->:="Goodbye"
  \--> $PointerTwo-> refere o conteúdo de $PointerOne, que por sua vez refere $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Assim, neste caso, $MyVar é atribuído o "Adeus".
- ALERT (($PointerTwo->)->)
  \--> A mesma coisa: $PointerTwo-> refere o conteúdo de $PointerOne, que por sua vez refere $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Por conseguinte ($PointerTwo->)-> faz referência ao conteúdo de $MyVar.

A seguinte linha coloca "Olá" em $MyVar:

```4d
($PointerTwo->)->:="Hello"
```

A seguinte linha recebe "Olá" de $MyVar e coloca-o em $NewVar:

```
$NewVar:=($PointerTwo->)->
```

**Importante:** la desreferenciación múltiple requiere paréntesis.
