---
id: arrays
title: Arrays
---

Un **array** es una serie ordenada de **variables** del mismo tipo. Cada variable se llama un **elemento** del array. Um array recebe seu tamanho quando é criado, depois pode ser redimensionado quantas vezes sejam necessário, adicionando, inserindo ou eliminado elementos, ou redimensionando o array através do mesmo comando usado para criá-lo. Elementos do array são numerados de 1 a N, onde N é o tamanho do array. Un array siempre tiene un [elemento cero](#using-the-element-zero-of-an-array) especial. Arrays são variáveis 4D. Como qualquer variável, um array tem um alcance/escopo e segue as regras da linguagem 4D, mas com algumas diferenças únicas.

> En la mayoría de los casos, se recomienda utilizar **colecciones** en lugar de **arrays**. Collections são mais flexíveis e oferecem uma maior gama de métodos dedicados. Para más información, consulte la sección [Colección](Concepts/dt_collection.md).

## Criar Arrays

Pode criar um array com um dos comandos de declaração de array no tema "Array". Cada comando de declaração de array pode criar ou redimensionar arrays unidimensionais ou bidimensionais. Para más información sobre los arrays bidimensionales, consulte la sección [arrays bidimensionales](#two-dimensional-arrays).

A linha de código abaixo cria (declara) um array Inteiro de 10 elementos:

```4d
 ARRAY INTEGER(aiAnArray;10)
```

Depois, o código a seguir redimensiona o mesmo array para 20 elementos:

```4d
ARRAY INTEGER(aiAnArray;20)
```

Depois, o código a seguir redimensiona o mesmo array para 0 elementos:

```4d
ARRAY INTEGER(aiAnArray;0)
```

## Atribuir valores em arrays

Pode referenciar os elementos em um array usando chaves ({…}). Dentro das chaves se utiliza um número para dirigir-se a um elemento concreto; este número se denomina número de elemento. As linhas abaixo põe cinco nomes em um array chamado atNames e então exibe-os na janela de alerta:

```4d
 ARRAY TEXT(atNames;5)
 atNames{1}:="Richard"
 atNames{2}:="Sarah"
 atNames{3}:="Sam"
 atNames{4}:="Jane"
 atNames{5}:="John"
 For($vlElem;1;5)
    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})
 End for
```

Lembre da sintaxe atNames{$vlElem}. Ao invés de especificar um literal numérico como atNames{3}, pode usar uma variável numérica para indicar a quais elementos de um array se dirige. Utilizando la iteración que ofrece una estructura de bucle ( `For...End for`, `Repeat...Until` o `While...End while`), las piezas compactas de código pueden dirigirse a todos o a parte de los elementos de un array.

**Importante:** tenga cuidado de no confundir el operador de asignación (:=) con el operador de comparación, igual (=). As operações de atribuição e comparação são bem diferentes.

### Atribuindo um array para outro array

Diferente de variáveis texto ou strings, não pode atribuir um array para outro. Para copiar (asignar) un array a otro, utilice `COPY ARRAY`.

## Usar o elemento zero de um array

Um array sempre tem um elemento zero. Apesar do elemento zero não ser mostrado quando um array for compatível com um objeto formulário, não há restrições (\*) ao usá-lo com a linguagem.

Aqui há outro exemplo: se quiser inicializar um objeto formulário com um valor texto mas sem estabelecer um valor padrão. Pode usar o elemento zero do array:

```4d
  // method for a combo box or drop-down list  
  // bound to atName variable array
 Case of
    :(Form event code=On Load)
  // Initialize the array (as shown further above)  
  // But use the element zero
		ARRAY TEXT(atName;5)
		atName{0}:=Please select an item"
		atName{1}:="Text1"
		atName{2}:="Text2"
		atName{3}:="Text3"
		atName{4}:="Text4"
		atName{5}:="Text5"
	// Position the array to element 0
  		atName:=0
 End case
```

(\*) Entretanto, há uma excepção: em um array tipo List Box o elemento zero se usa internamente para armazenar o valor anterior de um elemento que se está editando, não é possível para usar no seu contexto particular.

## Arrays de duas dimensões

Cada comando de declaração de comandos pode criar ou redimensionar arrays unidimensionais ou bidimensionais. Exemplo:

```4d
 ARRAY TEXT(atTopics;100;50) // Cria um array de texto composto de 100 linhas de 50 colunas
```

Os arrays de duas dimensões são essencialmente objetos de linguagem; não podem se mostrar nem imprimir.

No exemplo anterior:

- atTopics é um array de duas dimensõees
- atTopics{8}{5} is the 5th element (5th column...) of the 8th row
- atTopics{20} é a 20a linha é por sua vez um array dimensão
- `Tamaño del array(atTopics)` devuelve 100, que es el número de filas
- `Tamaño de array(atTopics{17})` devuelve 50, que es el número de columnas de la línea 17

No seguinte exemplo, um ponteiro a cada campo de cada tabela do banco de dados se armazena em um array de duas dimensões:

```4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // Create as many rows (empty and without columns) as there are tables
 $vlLastTable:=Get last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns
  // For each table
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Get last field number($vlTable)
  // Give value of elements
       $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  //Insert a column in a row of the table underway
             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  //Assign the "cell" with the pointer
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

Sempre que tiver inicializado este array de duas dimensôes, se pedem obter os ponteiros aos campos de uma tabela concreta da seguinte maneira:

```4d
  // Get the pointers to the fields for the table currently displayed at the screen:
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // Initialize Boolean and Date fields
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**Nota:** como sugiere este ejemplo, las líneas de un array de dos dimensiones pueden tener el mismo tamaño o diferentes tamaños.

## Arrays e memória

A diferença dos dados que se armazenam no disco mediante tabelas e registros, um array se mantém sempre na memória em sua totalidade.

Por exemplo, se introduzir todos os códigos postais dos EUA na tabela [Zip Codes], conteria por volta de 100.000 registros. Além disso essa tabela incluiria vários campos: o código cep e a cidade, região e estado correspondentes. Se selecionar todos os ceps (zip codes) da Califórnia, o motor de banco de dados 4D cria a seleção correspondente de registros dentro da tabela [Zip Codes] e então carrega os registros só quando forem necessários (ou seja quando forem exibidos ou impressos). Ou seja, você trabalha com uma série ordenada de valores (do mesmo tipo para cada campo) que é carregada parcialmente desde o disco à memória pelo motor do banco de dados 4D.

Fazer a mesma coisa com arrays seria impossível pelas razões abaixo:

- Para manter os quatro tipos de informação (código postal, cidade, região e estado) teria que manter quatro arrays grandes na memória.
- Como um array sempre é mantido na memória inteiramente, teria que manter toda a informação de códigos postais na memória durante a sessão inteira, mesmo quando os dados não estivessem sendo usados.
- De novo,  como um array é sempre mantido na memória em sua totalidade, a cada vez que o banco de dados for iniciados, os quatro arrays teriam que ser carregados e então salvos no disco, mesmo se os dados não forem usados ou modificados na sessão de trabalho.

**Conclusión:** los arrays están pensados para mantener cantidades razonables de datos durante un corto periodo de tiempo. Por outro lado, como os arrays são mantidos na memória, são fáceis de manejar e rápidos de manipular.

Entretanto, em algumas circunstâncias, pode precisar trabalhar com arrays que contenham centenas ou milhares de elementos. A tabela abaixo lista as fórmulas usadas para calcular a quantidade de memória usada para cada tipo de array:

| Tipo de array   | Fórmula para determinar o uso da memoria em bytes                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| Blob            | (1+número de elementos) \* 12 + Soma de tamanho de cada blob                              |
| Parâmetros      | (31+número de elementos)\N8                                                               |
| Date            | (1+número de elementos) \* 6                                                              |
| Integer         | (1+número de elementos) \* 2                                                              |
| Long Integer    | (1+número de elementos) \* 4                                                              |
| Object          | (1+número de elementos) \* 8 + Soma de tamanho de cada objeto                             |
| Imagem          | (1+número de elementos) \* 8 + Soma do tamanho de cada imagem                             |
| Ponteiro        | (1+número de elementos) \* 8 + Soma de tamanho de cada ponteiro                           |
| Real            | (1+número de elementos) \* 8                                                              |
| Text            | (1+número de elementos) \* 20 + (soma da longitude de cada texto) \* 2 |
| Hora            | (1+número de elementos) \* 4                                                              |
| Dois dimensõees | (1+número de elementos) \* 16 + Soma do tamanho de cada array                             |

**Notas:**

- O tamanho de um texto em memoria se calcula com esta fórmula ((Longitude + 1) \* 2)
- São necessários alguns bytes adicionais para acompanhar o elemento selecionado, o número de elementos, e o próprio array.
