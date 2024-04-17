---
id: variables
title: Variáveis.
---

Os dados em 4D são armazenados de duas formas fundamentalmente diferentes. **Os campos** armazenam os dados permanentemente no disco; **as variáveis** armazenam os dados na memória de forma temporal.

Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as variáveis é mais ou menos a mesma coisa, também se lhes dá nomes e tipos diferentes (ver [Tipos de dados](Concepts/data-types.md)).

Após a criação pode usar a variável onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a variável texto em um campo do mesmo tipo

```4d
 [MyTable]MyField:=MyText
```

As variáveis são objetos da linguagem; pode criar e utilizar variables que nunca aparecerão na tela. Nos seus formulários, pode exibir variáveis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relatórios. Desta forma, variáveis de área editáveis ou não editáveis atuam tal como os campos, e os mesmos controles incorporados estão disponíveis ao serem criados. Variáveis formulário podem controlar botões, list boxes, aréas de rolagem, botões de imagem, e assim por diante, ou exibir resultados de cálculos que não precisam ser salvos.

## Criação de variáveis

Normalmente, você cria variáveis declarando-as. A linguagem 4D oferece duas maneiras de declarar variáveis:

- using the `var` keyword (recommended specially if your code uses objects and classes, and this syntax enhances code editor suggestions and type-ahead features),
- using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).

Quando as variáveis são declaradas, são inicializadas com o valor predefinido [**correspondente ao seu tipo**](data-types.md#default-values), que manterão durante a sessão, desde que não lhes tenha sido [atribuído](#assigning-data). Como alternativa, ao declarar variáveis, você pode [inicializar](#initializing-variables-in-the-declaration-line) seu valor com seu tipo de dados, tudo em uma única linha.

:::note

Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate é criada e obtém a data atual mais  30 días
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

`varName` é o nome da variável, que deve estar em conformidade com as regras [4D](Concepts/identifiers.md) sobre identificadores. Esta sintaxe apenas suporta [declarações de variáveis locais e de processo](#local-process-and-interprocess-variables) , excluindo assim [variáveis inter-processo](#interprocess-variables) e [matrizes](Concepts/arrays.md).

`varType` pode ser:

- um [tipo básico](Concepts/data-types.md), caso em que a variável contém um valor do tipo declarado,
- uma referência à classe [](Concepts/classes.md) (classe 4D ou classe de utilizador), caso em que a variável contém uma referência a um objeto da classe definida.

Se `varType` for omitido, é criada uma variável do tipo **variante** .

A tabela seguinte enumera todos os valores `varType` suportados:

| varType                                 | Conteúdos                                                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Text`                                  | Valor texto                                                                                                                                       |
| `Date`                                  | Valor data                                                                                                                                        |
| `Hora`                                  | Valor Hora                                                                                                                                        |
| `Parâmetros`                            | Valor booleano                                                                                                                                    |
| `Integer`                               | Valor inteiro longo                                                                                                                               |
| `Real`                                  | Valor real                                                                                                                                        |
| `Ponteiro`                              | Valor ponteiro                                                                                                                                    |
| `Imagem`                                | Valor imagem                                                                                                                                      |
| `Blob`                                  | Valor BLOB                                                                                                                                        |
| `Collection`                            | Valor colecção                                                                                                                                    |
| `Diferente de`                          | Valor variant                                                                                                                                     |
| `Object`                                | Object with default class (4D.Object)                                                                                                             |
| `4D.<className>`                  | Objecto do nome da classe 4D                                                                                                                      |
| `cs.<className>`                  | Objeto do nome da classe usuário                                                                                                                  |
| `cs.<namespace><className>` | For a class constructor function, the `Current method name` command returns:  `<ClassName>:constructor`, for example "MyClass:constructor". |



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
var $text:="hello" // Inferido como texto 
var $number:=20 // Inferido como real 
var $obj:={}  // Inferido como um objeto 
var $mycol:=[] // Inferido como uma coleção  

```

:::note

O tipo inferido pode diferir entre os modos [interpretado e compilado](interpreted.md) se a avaliação do valor for muito ambígua. Nesse caso, um aviso é gerado pelo compilador e um tipo variante é usado. Por exemplo, no seguinte $a, o tipo será inferido corretamente no modo interpretado (Text), mas a verificação de sintaxe gerará um aviso e $a será digitado como uma variante para o modo compilado.

```4d 
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D tenta deduzir o tipo mais geral. Por exemplo, ele usa o tipo Real em vez do tipo Integer quando uma variável é inicializada com um valor inteiro (por exemplo, `var $a:=10 //Tipo inferido Real`). Nesses casos, ou ao inicializar uma variável com um tipo complexo, como a instanciação de classe, é recomendável passar o tipo explicitamente.

Geralmente, todos os tipos de variáveis são determinados automaticamente. A exceção é quando você atribui um valor a uma variável de processo ou interprocesso, o que aciona uma mensagem de aviso.

:::note

Não há suporte para várias atribuições em uma linha:

```4d
var $a; $b : Integer:=15 //erro

```

:::

## Atribuição de dados

Os dados podem ser colocados e copiados de variáveis e arrays. Colocar dados em uma variável é chamado **atribuiindo os dados a uma variável** e é feito com o operador de atribuição (:=). O operador de atribuição também é usado para atribuir dados para elementos campos.

O operador de atribuição é a maneira mais importante de criar uma variável e jogar dados nela. Escreve-se o nome da variável que se pretende criar no lado esquerdo do operador de atribuição. Por exemplo:

```4d
MyNumber:=3
```

cria a variável _MyNumber_ e coloca o número 3 na mesma. Se o MyNumber já existe, então o número 3 é apenas colocado nele.

> Normalmente, não se recomenda a criação de variáveis sem [declarar o seu tipo](#declaring-variables).

Naturalmente, as variáveis não seriam muito úteis se não se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribuição. Se precisar  colocar o valor do MyNumber num campo chamado [Products]Size, escreva _MyNumber_ no lado direito do operador de atribuição:

```4d
[Products]Size:=MyNumber
```

Neste caso, _[Products]Tamanho_ seria igual a 3. Este exemplo é bastante simples, mas ilustra a forma fundamental como os dados são transferidos de um local para outro utilizando a língua.

Atribui-se dados a elementos de matriz utilizando chaves ({...}):

```4d
atNames{1}:="Richard"
```

## Variáveis locais, processo e inter-processo

Pode criar três tipos de variáveis: **local**, **processo**, e **interprocesso**. A diferença entre os três tipos de elementos é o seu alcance, ou os objectos para os quais estão disponíveis.

### Variáveis locais

Uma variável local é, como o seu nome indica, local para um método - apenas acessível dentro do método em que foi criada e não acessível fora desse método. Ser local a um método é formalmente referido como sendo "de âmbito local". As variáveis locais são utilizadas para restringir uma variável de modo a que esta funcione apenas dentro do método.

Poderá querer utilizar uma variável local para:

- Evitar conflitos com os nomes de outras variáveis
- Utilizar dados temporariamente
- Reduzir o número de variáveis do processo

O nome de uma variável local começa sempre com um sinal de dólar ($) e pode conter até 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado.

Quando trabalhar em um banco de dados com muitos métodos e variáveis, geralmente só precisa usar uma variável dentro do método no qual trabalha. Pode criar e utilizar uma variável local no método sem se preocupar se utilizou o mesmo nome de variável noutro lugar.

Frequentemente, em um banco de dados, pequenas pedaços de informação são necessários do usuário. O comando `Request` pode obter esta informação. Apresenta uma caixa de diálogo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informação que o utilizador introduziu. Normalmente não precisa de manter esta informação nos seus métodos durante muito tempo. Esta é uma forma típica de utilizar uma variável local. Aqui um exemplo simples:

```4d
 $vsID:=Request("Por favor insira o seu ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Este método pede simplesmente ao utilizador que introduza uma identificação. Coloca a resposta numa variável local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este método termina, a variável local $vsID é apagada da memória. Isto é ótimo, porque a variável é necessária apenas uma vez e apenas neste método.

**Nota:** Os parâmetros $1, $2... passados para os métodos são variáveis locais. Para mais informações, consultar [Parâmetros](Concepts/parameters.md).

### Variáveis processo

Uma variável de processo só está disponível dentro de um processo. É acessível ao método do processo e a qualquer outro método chamado de dentro do processo.

Uma variável de processo não tem um prefixo antes do seu nome. Um nome de variável de processo pode conter até 31 caracteres.

No modo interpretado, as variáveis são mantidas dinamicamente; são criadas e apagadas da memória "on the fly". No modo compilado, todos os processos que cria (processos de usuário) partilham a mesma definição de variáveis de processo, mas cada processo tem um exemplo diferente para cada variável. Por exemplo, a variável myVar é uma variável no processo P_1 e outra no processo P_2.

Um processo pode "espiar e cutucar" variáveis de processo de outro processo usando os comandos `GET PROCESS VARIABLE` e `SET PROCESS VARIABLE`. É boa prática de programação restringir a utilização destes comandos à situação para a qual foram adicionados à 4D:

- Comunicação interprocessada em locais específicos ou o seu código
- Gestão de arrastar e soltar entre processos
- Em Cliente/Servidor, comunicação entre os processos nas máquinas do cliente e os procedimentos armazenados a correr nas máquinas do servidor

Para mais informações, ver o capítulo **Processos** e a descrição destes comandos.

### Variáveis interprocesso

As variáveis interprocessadas estão disponíveis em toda a base de dados e são partilhadas em todos os processos cooperativos. São utilizados principalmente para partilhar informação entre processos.

> O uso de variáveis interprocessadas não é recomendado, uma vez que não estão disponíveis a partir de processos preventivos e tendem a tornar o código mais difícil para manutenção.

O nome de uma variável interprocessada começa sempre com os símbolos (`<>`) - um sinal "menor que" seguido de um sinal "maior do que" - seguido de 31 caracteres.

Em Cliente/Servidor, cada máquina (máquinas Cliente e máquina Servidor) partilham a mesma definição de variáveis interprocessadas, mas cada máquina tem um exemplo diferente para cada variável.
