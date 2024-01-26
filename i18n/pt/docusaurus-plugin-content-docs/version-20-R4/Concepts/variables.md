---
id: variables
title: Variáveis.
---

Os dados em 4D são armazenados de duas formas fundamentalmente diferentes. **Fields** store data permanently on disk; **variables** store data temporarily in memory.

Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Variables are much the same—you also give them names and different types (see [Data types](Concepts/data-types.md)).

Após a criação pode usar a variável onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a variável texto em um campo do mesmo tipo

```4d
 [MyTable]MyField:=MyText
```

As variáveis são objetos da linguagem; pode criar e utilizar variables que nunca aparecerão na tela. Nos seus formulários, pode exibir variáveis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relatórios. Desta forma, variáveis de área editáveis ou não editáveis atuam tal como os campos, e os mesmos controles incorporados estão disponíveis ao serem criados. Variáveis formulário podem controlar botões, list boxes, aréas de rolagem, botões de imagem, e assim por diante, ou exibir resultados de cálculos que não precisam ser salvos.

## Criação de variáveis

You usually create variables by declaring them. A linguagem 4D oferece duas maneiras de declarar variáveis:

- using the `var` keyword (recommended specially if your code uses objects and classes, and this syntax enhances code editor suggestions and type-ahead features),
- using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).

When variables are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been [assigned](#assigning-data). Alternatively, when declaring variables, you can [initialize](#initializing-variables-in-the-declaration-line) their value along with their data type all within one line.

:::note

Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

When a variable is created before being declared, it is not initialized at the declaration step.

:::

To declare a variable of any type, use the following syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

Por exemplo:

```4d
var $myText : Text  //a text variable
var myDate1; myDate2 : Date  //several date variables
var $myFile : 4D. File  //a file class object variable
var $myVar //a variant variable
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varType` pode ser:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

Se `varType` for omitido, será criada uma variável do tipo **variant**.

A tabela seguinte enumera todos os valores `varType` suportados:

| varType                     | Conteúdos                                                |
| --------------------------- | -------------------------------------------------------- |
| `Text`                      | Valor texto                                              |
| `Date`                      | Valor data                                               |
| `Time`                      | Valor Hora                                               |
| `Boolean`                   | Valor booleano                                           |
| `Integer`                   | Valor inteiro longo                                      |
| `Real`                      | Valor real                                               |
| `Pointer`                   | Valor ponteiro                                           |
| `Picture`                   | Valor imagem                                             |
| `Blob`                      | Valor BLOB                                               |
| `Collection`                | Valor colecção                                           |
| `Variant`                   | Valor variant                                            |
| `Object`                    | Object with default class (4D.Object) |
| `4D.<className>`            | Objecto do nome da classe 4D                             |
| `cs.<className>`            | Objeto do nome da classe usuário                         |
| `cs.<namespace><className>` | Object of the `<namespace>` component class name         |

### Exemplos

- Para declarar variáveis básicas locais e de processo:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalent to:  
var $o : 4D. Object
//also equivalent to C_OBJECT($o)
```

- Para declarar variáveis objeto da classe 4D:

```4d
var $myFolder : 4D. Folder
var $myFile : 4D. File
```

- Para declarar as variáveis objeto da classe usuário:

```4d
var $myClass : cs. MyClass
var $dataclass : cs. Employee
var $entity : cs. EmployeeEntity
```

## Inicialização de variáveis na linha de declaração

Ao declarar variáveis, você tem a flexibilidade de especificar seu tipo de dados e fornecer um valor inicial em uma única instrução. Aqui estão alguns exemplos:

```4d
var $a : Text:="hello"
var $b : Date:=!2023-09-12!
var $c : Object:=New object()
var $d : cs.Customer:=cs.Customer.new()
```

As variáveis também podem ser declaradas e inicializadas sem mencionar explicitamente seu tipo de dados, caso em que seu tipo será inferido por 4D. Aqui estão alguns exemplos:

```4d
var $text:="hello"  // Inferred as Text 
var $number:=20  // Inferred as Real 
var $obj:={}  // Inferred as an Object 
var $mycol:=[]  // Inferred as a Collection  

```

:::note

The inferred type might be different between [interpreted and compiled mode](interpreted.md) if the evaluation of the value is too ambiguous. Nesse caso, um aviso é gerado pelo compilador e um tipo variante é usado. Por exemplo, no seguinte $a, o tipo será inferido corretamente no modo interpretado (Text), mas a verificação de sintaxe gerará um aviso e $a será digitado como uma variante para o modo compilado.

```4d
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D tenta deduzir o tipo mais geral. For instance, it uses the Real type rather than the Integer type when a variable is initialized with an integer value (e.g., `var $a:=10 //Real type is inferred`). Nesses casos, ou ao inicializar uma variável com um tipo complexo, como a instanciação de classe, é recomendável passar o tipo explicitamente.

Geralmente, todos os tipos de variáveis são determinados automaticamente. A exceção é quando você atribui um valor a uma variável de processo ou interprocesso, o que aciona uma mensagem de aviso.

:::note

Não há suporte para várias atribuições em uma linha:

```4d
var $a; $b : Integer:=15 //error

```

:::

## Atribuição de dados

Os dados podem ser colocados e copiados de variáveis e arrays. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). O operador de atribuição também é usado para atribuir dados para elementos campos.

O operador de atribuição é a maneira mais importante de criar uma variável e jogar dados nela. Escreve-se o nome da variável que se pretende criar no lado esquerdo do operador de atribuição. Por exemplo:

```4d
MyNumber:=3
```

cria a variável _MyNumber_ e coloca o número 3 nela. Se o MyNumber já existe, então o número 3 é apenas colocado nele.

> It is usually not recommended to create variables without [declaring their type](#declaring-variables).

Naturalmente, as variáveis não seriam muito úteis se não se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribuição. If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Products]Size:=MyNumber
```

Nesse caso, _[Products]Size_ seria igual a 3. Este exemplo é bastante simples, mas ilustra a forma fundamental como os dados são transferidos de um local para outro utilizando a língua.

Atribui-se dados a elementos de matriz utilizando chaves ({...}):

```4d
atNames{1}:="Richard"
```

## Variáveis locais, processo e inter-processo

You can create three types of variables: **local**, **process**, and **interprocess**. A diferença entre os três tipos de elementos é o seu alcance, ou os objectos para os quais estão disponíveis.

### Variáveis locais

Uma variável local é, como o seu nome indica, local para um método - apenas acessível dentro do método em que foi criada e não acessível fora desse método. Ser local a um método é formalmente referido como sendo "de âmbito local". As variáveis locais são utilizadas para restringir uma variável de modo a que esta funcione apenas dentro do método.

Poderá querer utilizar uma variável local para:

- Evitar conflitos com os nomes de outras variáveis
- Utilizar dados temporariamente
- Reduzir o número de variáveis do processo

O nome de uma variável local começa sempre com um sinal de dólar ($) e pode conter até 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado.

Quando trabalhar em um banco de dados com muitos métodos e variáveis, geralmente só precisa usar uma variável dentro do método no qual trabalha. Pode criar e utilizar uma variável local no método sem se preocupar se utilizou o mesmo nome de variável noutro lugar.

Frequentemente, em um banco de dados, pequenas pedaços de informação são necessários do usuário. The `Request` command can obtain this information. Apresenta uma caixa de diálogo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informação que o utilizador introduziu. Normalmente não precisa de manter esta informação nos seus métodos durante muito tempo. Esta é uma forma típica de utilizar uma variável local. Aqui um exemplo simples:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Este método pede simplesmente ao utilizador que introduza uma identificação. Coloca a resposta numa variável local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este método termina, a variável local $vsID é apagada da memória. Isto é ótimo, porque a variável é necessária apenas uma vez e apenas neste método.

**Nota:** Parâmetros $1, $2... passados para os métodos são variáveis locais. For more information, please refer to [Parameters](Concepts/parameters.md).

### Variáveis processo

Uma variável de processo só está disponível dentro de um processo. É acessível ao método do processo e a qualquer outro método chamado de dentro do processo.

Uma variável de processo não tem um prefixo antes do seu nome. Um nome de variável de processo pode conter até 31 caracteres.

No modo interpretado, as variáveis são mantidas dinamicamente; são criadas e apagadas da memória "on the fly". No modo compilado, todos os processos que cria (processos de usuário) partilham a mesma definição de variáveis de processo, mas cada processo tem um exemplo diferente para cada variável. Por exemplo, a variável myVar é uma variável no processo P_1 e outra no processo P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. É boa prática de programação restringir a utilização destes comandos à situação para a qual foram adicionados à 4D:

- Comunicação interprocessada em locais específicos ou o seu código
- Gestão de arrastar e soltar entre processos
- Em Cliente/Servidor, comunicação entre os processos nas máquinas do cliente e os procedimentos armazenados a correr nas máquinas do servidor

For more information, see the chapter **Processes** and the description of these commands.

### Variáveis interprocesso

As variáveis interprocessadas estão disponíveis em toda a base de dados e são partilhadas em todos os processos cooperativos. São utilizados principalmente para partilhar informação entre processos.

> O uso de variáveis interprocessadas não é recomendado, uma vez que não estão disponíveis a partir de processos preventivos e tendem a tornar o código mais difícil para manutenção.

The name of an interprocess variable always begins with the symbols `<>` — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

Em Cliente/Servidor, cada máquina (máquinas Cliente e máquina Servidor) partilham a mesma definição de variáveis interprocessadas, mas cada máquina tem um exemplo diferente para cada variável.
