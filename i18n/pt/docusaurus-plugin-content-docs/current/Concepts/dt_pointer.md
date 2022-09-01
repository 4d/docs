---
id: pointer
title: Ponteiro
---

Uma variável ou expressão ponteiro é uma referência a outra variável (incluindo matrizes e elementos de matriz), tabela, campo, ou objecto. Não há campo do tipo Pointer.

Os apontadores fornecem uma forma avançada (na programação) para se referir aos dados. Quando você usar a linguagem, você acessa vários objetos - em particular, tabelas, campos, variáveis, objetos e matrizes - simplesmente usando seus nomes. No entanto, muitas vezes é útil fazer referência a estes elementos e aceder aos mesmos sem conhecer os seus nomes. Isto é o que os indicadores lhe permitem fazer.

O conceito subjacente aos ponteiros não é assim tão incomum na vida cotidiana. Muitas vezes você se refere a algo sem saber sua identidade exata. Por exemplo, poderia dizer a um amigo: "Vamos dar uma volta no seu carro" em vez de "Vamos dar uma volta no carro com a placa 123ABD". Neste caso, está a referenciar o carro com a matrícula 123ABD, utilizando a frase "o seu carro". A frase "carro com matrícula 123ABD" é como o nome de um objecto, e utilizar a frase "o seu carro" é como utilizar um ponteiro para fazer referência ao objecto.

Ser capaz de se referir a algo sem conhecer a sua identidade exata é muito útil. De facto, o seu amigo poderia obter um carro novo, e a frase "o seu carro" continuaria a ser exata - continuaria a ser um carro e ainda poderia dar uma volta nele. Os ponteiros funcionam da mesma maneira. Por exemplo, um ponteiro poderia, de uma vez, referir-se a um campo numérico chamado Age, e mais tarde referir-se a uma variável numérica chamada Old Age. Em ambos os casos, o ponteiro faz referência a dados numéricos que poderiam ser utilizados num cálculo.

Pode usar apontadores para referenciar tabelas, campos, variáveis, matrizes, elementos de array, e objetos. A tabela a seguir dá um exemplo de cada tipo de dado:

| Tipo           | Referenciação           | Para usar                | Atribuição               |
| -------------- | ----------------------- | ------------------------ | ------------------------ |
| Tabela         | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | n/a                      |
| Campo          | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"        |
| Variável       | vpVar:=->Variable       | ALERT(vpVar->)           | vpVar->:="John"          |
| Array          | vpArr:=->Array          | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| Elemento Array | vpElem:=->Array{1}      | ALERT (vpElem->)         | vpElem->:="John"         |
| Objeto         | vpObj:=->myObject       | ALERT (vpObj->myProp)    | vpObj->myProp:="John"    |


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
O símbolo -> significa "fazer um ponteiro para". Este símbolo é formado por um traço seguido por um sinal "maior que". Neste caso, ele recebe o ponteiro que faz referência ou "aponta para" $MyVar. Este ponteiro é atribuído ao MyPointer com o operador de atribuição.

$MyPointer é agora uma variável que contém um ponteiro para $MyVar. $MyPointer não contém "Olá", que é o valor em $MyVar, mas pode usar $MyPointer para obter este valor. A seguinte expressão devolve o valor em $MyVar:
```4d
$MyPointer->
```

Nesse caso, ela retorna a seqüência de caracteres "Olá". O símbolo -> , quando segue um ponteiro, faz referência ao objecto apontado. This is called dereferencing.

It is important to understand that you can use a pointer followed by the -> symbol anywhere that you could have used the object that the pointer points to. This means that you could use the expression $MyPointer-> anywhere that you could use the original $MyVar variable. For example, the following line displays an alert box with the word Hello in it:
```4d
ALERT($MyPointer->)
```

You can also use $MyPointer to change the data in $MyVar. For example, the following statement stores the string "Goodbye" in the variable $MyVar:
```4d
$MyPointer->:="Goodbye"
```
If you examine the two uses of the expression $MyPointer->, you will see that it acts just as if you had used $MyVar instead. In summary, the following two lines perform the same action—both display an alert box containing the current value in the variable $MyVar:

```4d
ALERT($MyPointer->)
ALERT($MyVar)
```
The following two lines perform the same action— both assign the string "Goodbye" to $MyVar:
```4d
$MyPointer->:="Goodbye"
$MyVar:="Goodbye"
```

## Pointer operators

Con:
```4d
  ` vPtrA and vPtrB point to the same object
 vPtrA:=->anObject
 vPtrB:=->anObject
  ` vPtrC points to another object
 vPtrC:=->anotherObject
```

| Operação     | Sintaxe           | Retorna  | Expression    | Value |
| ------------ | ----------------- | -------- | ------------- | ----- |
| Igual        | Pointer = Pointer | Booleano | vPtrA = vPtrB | True  |
|              |                   |          | vPtrA = vPtrB | False |
| Desigualdade | Pointer # Pointer | Booleano | vPtrA # vPtrC | True  |
|              |                   |          | vPtrA # vPtrB | False |

## Main usages
### Pointers to tables
Anywhere that the language expects to see a table, you can use a dereferenced pointer to the table. You create a pointer to a table by using a line like this:
```4d
$TablePtr:=->[anyTable]
```
You can also get a pointer to a table by using the `Table` command:
```4d  
$TablePtr:=Table(20)
```
You can use the dereferenced pointer in commands, like this:
```4d  
DEFAULT TABLE($TablePtr->)
```
### Pointers to fields
Anywhere that the language expects to see a field, you can use a dereferenced pointer to reference the field. You create a pointer to a field by using a line like this:
```4d
$FieldPtr:=->[aTable]ThisField
```

You can also get a pointer to a field by using the `Field` command, for example:
```4d
$FieldPtr:=Field(1;2)
```

You can use the dereferenced pointer in commands, like this:
```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Pointers to local variables

When you use pointers to process or local variables, you must be sure that the variable pointed to is already set when the pointer is used. Keep in mind that local variables are deleted when the method that created them has completed its execution and process variables are deleted at the end of the process that created them. When a pointer calls a variable that no longer exists, this causes a syntax error in interpreted mode (variable not defined) but it can generate a more serious error in compiled mode.

Pointers to local variables allow you to save process variables in many cases. Pointers to local variables can only be used within the same process. In the debugger, when you display a pointer to a local variable that has been declared in another method, the original method name is indicated in parentheses, after the pointer. For example, if you write in Method1:
```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```
In Method2, the debugger will display $1 as follows:

| $1 | ->$MyVar (Method1) |
| -- | ------------------ |
|    |                    |

The value of $1 will be:

| $MyVar (Method1) | "Hello world" |
| ---------------- | ------------- |
|                  |               |

### Pointers to array elements
You can create a pointer to an array element. For example, the following lines create an array and assign a pointer to the first array element to a variable called $ElemPtr:
```4d
ARRAY REAL($anArray;10) //Create an array
$ElemPtr:=->$anArray{1} //Create a pointer to the array element
```

You could use the dereferenced pointer to assign a value to the element, like this:
```4d
$ElemPtr->:=8
```

### Pointers to arrays
You can create a pointer to an array. For example, the following lines create an array and assign a pointer to the array to a variable called $ArrPtr:
```4d
ARRAY REAL($anArray;10) //Create an array
$ArrPtr:=->$anArray //Create a pointer to the array
```
It is important to understand that the pointer points to the array; it does not point to an element of the array. Por exemplo, pode utilizar o ponteiro desreferenciado das linhas anteriores como este:
```4d
ORDENAR ARRAY($ArrPtr->;>) //Ordenar o array
```
Se precisar de se referir ao quarto elemento do array usando o ponteiro, faça desta maneira:
```4d
 ArrPtr->{4}:=84
```

### Indicadores como parâmetros para os métodos
Pode passar um ponteiro como parâmetro para um método. Dentro do método, você pode modificar o objeto referenciado pelo ponteiro. Por exemplo, o seguinte método, `takeTwo`, toma dois parâmetros que são indicadores. It changes the object referenced by the first parameter to uppercase characters, and the object referenced by the second parameter to lowercase characters. Here is the project method:
```4d
  //takeTwo project method
  //$1 – Pointer to a string field or variable. Change this to uppercase.
  //$2 – Pointer to a string field or variable. Change this to lowercase.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

The following line uses the `takeTwo` method to change a field to uppercase characters and to change a variable to lowercase characters:
```  
takeTwo(->[myTable]myField;->$MyVar)
```

If the field [myTable]myField contained the string "jones", it would be changed to the string "JONES". If the variable $MyVar contained the string "HELLO", it would be changed to the string "hello".

In the takeTwo method, and in fact, whenever you use pointers, it is important that the data type of the object being referenced is correct. In the previous example, the pointers must point to something that contains a string or text.

### Pointers to pointers
If you really like to complicate things, you can use pointers to reference other pointers. Consider this example:
```4d
 $MyVar:="Hello"
 $PointerOne:=->$MyVar
 $PointerTwo:=->$PointerOne
 ($PointerTwo->)->:="Goodbye"
 ALERT(($PointerTwo->)->)
```
It displays an alert box with the word “Goodbye” in it.

Here is an explanation of each line of the example:

- $MyVar:="Hello" --> This line puts the string "Hello" into the variable $MyVar.
- $PointerOne:=->$MyVar --> $PointerOne now contains a pointer to $MyVar.
- $PointerTwo:=->$PointerOne --> $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar.
- ($PointerTwo->)->:="Goodbye" --> $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, $MyVar is assigned "Goodbye".
- ALERT (($PointerTwo->)->) --> Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar.

The following line puts "Hello" into $MyVar:
```4d
($PointerTwo->)->:="Hello"
```

The following line gets "Hello" from $MyVar and puts it into $NewVar:
```
$NewVar:=($PointerTwo->)->
```

**Important:** Multiple dereferencing requires parentheses.
