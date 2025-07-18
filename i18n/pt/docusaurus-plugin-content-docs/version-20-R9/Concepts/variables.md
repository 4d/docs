---
id: variables
title: Variáveis.
---

Os dados em 4D são armazenados de duas formas fundamentalmente diferentes. Os **campos** armazenam dados permanentemente no disco; as **variáveis** armazenam dados temporariamente na memória.

Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Variáveis são muito iguais—você também lhes dá nomes e diferentes tipos (consulte [Tipos de dados](data-types.md)).

Após a criação pode usar a variável onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a variável texto em um campo do mesmo tipo

```4d
 [MyTable]MyField:=MyText
```

As variáveis são objetos da linguagem; pode criar e utilizar variables que nunca aparecerão na tela. Nos seus formulários, pode exibir variáveis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relatórios. Desta forma, variáveis de área editáveis ou não editáveis atuam tal como os campos, e os mesmos controles incorporados estão disponíveis ao serem criados. Variáveis formulário podem controlar botões, list boxes, aréas de rolagem, botões de imagem, e assim por diante, ou exibir resultados de cálculos que não precisam ser salvos.

## Criação de variáveis

Você cria variáveis declarando-as usando a palavra-chave `var`.

Quando as variáveis são declaradas, elas são inicializadas com o [**valor padrão correspondente ao seu tipo**](data-types.md#default-values), que elas manterão durante a sessão, desde que não tenham sido [atribuídas](#assigning-data). Como alternativa, ao declarar variáveis, você pode [inicializar](#initializing-variables-in-the-declaration-line) o valor delas juntamente com o tipo de dados, tudo em uma única linha.

:::note

Embora não seja recomendado, você pode criar variáveis simplesmente usando-as; não precisa necessariamente declará-las formalmente. Por exemplo, se quiser criar uma variável que contenha a data atual mais 30 dias, pode escrever:

```4d
 MyDate:=Current date+30 //MyDate é criado  
 // 4D adivinha que é do tipo de data  
 // e atribui a data atual mais 30 dias
```

Quando uma variável é criada antes de ser declarada, ela não é inicializada na etapa de declaração.

:::

Para declarar uma variável de qualquer tipo, use a seguinte sintaxe:

`var <varName>{; <varName2>;...}{ : <varType>}`

Por exemplo:

```4d
var $myText : Text  //a text variable
var myDate1; myDate2 : Date  //several date variables
var $myFile : 4D. File  //a file class object variable
var $myVar //a variant variable
```

`varName` é o nome da variável, que deve estar em conformidade com as [regras 4D](Concepts/identifiers.md) sobre identificadores.
Essa sintaxe só é compatível com declarações de [variáveis locais e de processo](#local-process-and-interprocess-variables), excluindo, portanto, [variáveis interprocessos](#interprocess-variables) (obsoleto) e [arrays](Concepts/arrays.md).

`varType` pode ser:

- um [tipo básico](Concepts/data-types.md), caso em que a variável contém um valor do tipo declarado,
- uma [referência de classe](Concepts/classes.md) (classe 4D ou classe de usuário), caso em que a variável contém uma referência a um objeto da classe definida.

Se `varType` for omitido, será criada uma variável do tipo **variant**.

A tabela seguinte enumera todos os valores `varType` suportados:

| varType                     | Conteúdos                                            |
| --------------------------- | ---------------------------------------------------- |
| `Text`                      | Valor texto                                          |
| `Date`                      | Valor data                                           |
| `Time`                      | Valor Hora                                           |
| `Boolean`                   | Valor booleano                                       |
| `Integer`                   | Valor inteiro longo                                  |
| `Real`                      | Valor real                                           |
| `Pointer`                   | Valor ponteiro                                       |
| `Picture`                   | Valor imagem                                         |
| `Blob`                      | Valor BLOB                                           |
| `Collection`                | Valor colecção                                       |
| `Variant`                   | Valor variant                                        |
| `Object`                    | Objeto com classe padrão                             |
| `4D.<className>`            | Objecto do nome da classe 4D                         |
| `cs.<className>`            | Objeto do nome da classe usuário                     |
| `cs.<namespace><className>` | Objeto do nome da classe do componente `<namespace>` |

:::note Compatibidade

A sintaxe legada usando comandos `C_XXX` está obsoleta a partir de 4D 20 R7.

:::

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
var $text:="hello" // Inferido como Texto
var $number:=20 // Inferido como Real
var $obj:={} // Inferido como um objeto
var $mycol:=[] // Inferido como uma coleção  

```

:::note

O tipo inferido pode ser diferente entre [modo interpretado e compilado](interpreted.md) se a avaliação do valor for muito ambígua. Nesse caso, um aviso é gerado pelo compilador e um tipo variante é usado. For example, in the following *$a* type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and *$a* will be typed as a variant for the compiled mode.

```4d
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D tenta deduzir o tipo mais geral. Por exemplo, ele usa o tipo Real em vez do tipo Integer quando uma variável é inicializada com um valor inteiro (por exemplo, `var $a:=10 //Real type is inferred`). Nesses casos, ou ao inicializar uma variável com um tipo complexo, como a instanciação de classe, é recomendável passar o tipo explicitamente.

Geralmente, todos os tipos de variáveis são determinados automaticamente. A exceção é quando você atribui um valor a uma variável de processo ou interprocesso, o que aciona uma mensagem de aviso.

:::note

Não há suporte para várias atribuições em uma linha:

```4d
var $a; $b : Integer:=15 //error

```

:::

## Atribuição de dados

Os dados podem ser colocados e copiados de variáveis e arrays. Os dados podem ser colocados e copiados de variáveis e arrays. O operador de atribuição também é usado para atribuir dados para elementos campos.

O operador de atribuição é a maneira mais importante de criar uma variável e jogar dados nela. Escreve-se o nome da variável que se pretende criar no lado esquerdo do operador de atribuição. Por exemplo:

```4d
MyNumber:=3
```

cria a variável *MyNumber* e coloca o número 3 nela. Se o MyNumber já existe, então o número 3 é apenas colocado nele.

> Geralmente não é recomendado criar variáveis sem [declarar seu tipo](#declaring-variables).

Naturalmente, as variáveis não seriam muito úteis se não se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribuição. Se precisar colocar o valor de MyNumber em um campo chamado [Products]Size, você escreveria *MyNumber* no lado direito do operador de atribuição:

```4d
[Products]Size:=MyNumber
```

Nesse caso, *[Products]Size* seria igual a 3. Este exemplo é bastante simples, mas ilustra a forma fundamental como os dados são transferidos de um local para outro utilizando a língua.

## Variáveis locais, processo e inter-processo

Você pode criar três tipos de variáveis: **local**, **processo** e **interprocesso**. A diferença entre os três tipos de elementos é o seu alcance, ou os objectos para os quais estão disponíveis.

### Variáveis locais

Uma variável local é, como o seu nome indica, local para um método - apenas acessível dentro do método em que foi criada e não acessível fora desse método. Ser local a um método é formalmente referido como sendo "de âmbito local". As variáveis locais são utilizadas para restringir uma variável de modo a que esta funcione apenas dentro do método.

Poderá querer utilizar uma variável local para:

- Evitar conflitos com os nomes de outras variáveis
- Utilizar dados temporariamente
- Reduzir o número de variáveis do processo

O nome de uma variável local começa sempre com um sinal de dólar ($) e pode conter até 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado.

Quando trabalhar em um banco de dados com muitos métodos e variáveis, geralmente só precisa usar uma variável dentro do método no qual trabalha. Pode criar e utilizar uma variável local no método sem se preocupar se utilizou o mesmo nome de variável noutro lugar.

Frequentemente, em um banco de dados, pequenas pedaços de informação são necessários do usuário. Frequentemente, em um banco de dados, pequenas pedaços de informação são necessários do usuário. Apresenta uma caixa de diálogo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informação que o utilizador introduziu. Normalmente não precisa de manter esta informação nos seus métodos durante muito tempo. Esta é uma forma típica de utilizar uma variável local. Aqui um exemplo simples:

```4d
 $vsID:=Request("Por favor insira o seu ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Este método pede simplesmente ao utilizador que introduza uma identificação. Coloca a resposta numa variável local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este método termina, a variável local $vsID é apagada da memória. Isto é ótimo, porque a variável é necessária apenas uma vez e apenas neste método.

**Nota:** Parâmetros $1, $2... passados para os métodos são variáveis locais. Para obter mais informações, consulte [Parâmetros](Concepts/parameters.md).

### Variáveis processo

Uma variável de processo só está disponível dentro de um processo. É acessível ao método do processo e a qualquer outro método chamado de dentro do processo.

Uma variável de processo não tem um prefixo antes do seu nome. Um nome de variável de processo pode conter até 31 caracteres.

No modo interpretado, as variáveis são mantidas dinamicamente; são criadas e apagadas da memória "on the fly". No modo compilado, todos os processos que cria (processos de usuário) partilham a mesma definição de variáveis de processo, mas cada processo tem um exemplo diferente para cada variável. Por exemplo, a variável myVar é uma variável no processo P_1 e outra no processo P_2.

Um processo pode "espiar e cutucar" as variáveis de processo de outro processo usando os comandos `GET PROCESS VARIABLE` e `SET PROCESS VARIABLE`. É boa prática de programação restringir a utilização destes comandos à situação para a qual foram adicionados à 4D:

- Comunicação interprocessada em locais específicos ou o seu código
- Gestão de arrastar e soltar entre processos
- Em Cliente/Servidor, comunicação entre os processos nas máquinas do cliente e os procedimentos armazenados a correr nas máquinas do servidor

Para obter mais informações, consulte o capítulo **Processos** e a descrição desses comandos.

### Variáveis interprocesso

:::warning Obsoleto

O uso de variáveis de interprocesso não é recomendado, dado que elas não estão disponíveis em [processos preventivos](../Develop/preemptive.md) e tendem a tornar o código menos sustentável.

:::

As variáveis interprocessadas estão disponíveis em toda a base de dados e são partilhadas em todos os processos cooperativos. São utilizados principalmente para partilhar informação entre processos.

O nome de uma variável de processo sempre começa com os símbolos `<>` — um sinal "menor que" seguido de um sinal de "maior que"— seguido de 31 caracteres.

Em Cliente/Servidor, cada máquina (máquinas Cliente e máquina Servidor) partilham a mesma definição de variáveis interprocessadas, mas cada máquina tem um exemplo diferente para cada variável.

## Variáveis do sistema

A linguagem 4D gerencia diversas **variáveis sistema**, que permitem controlar a execução de diferentes operações. You can test their values and use them as any variable. Todas as variáveis do sistema são [variáveis processo](#process-variables).

As variáveis do sistema são usadas pelos [comandos 4D](../commands/command-index.md). Refer to the "System variables and sets" paragraph in the description of a command to find out whether it affects a system variable.

| Nome da variável sistema                               | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OK`                                                   | Integer       | Geralmente definido como 1 após um comando ter exibido uma caixa de diálogo e o usuário clicou no botão **OK** e em 0 se eles clicarem em **Cancelar**. Some commands also modify the value of the `OK` system variable when a operation is successfully executed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `Document`                                             | Text          | Contém o "nome longo" (caminho completo) do último arquivo aberto ou criado usando comandos como [Documento aberto](../commands-legacy/open-document.md) ou [ARQUIVO ARQUIVO](../commands/select-log-file.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `FldDelimit`, `RecDelimit`                             | Text          | Contém os códigos de caracteres que serão usados respectivamente como um separador de campos (padrão é Tab (9)) e o separador de registros (padrão é retorno do carro (13)) quando importar ou exportar texto. Para usar um separador diferente, atribua um novo valor à variável do sistema.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `Error`, `Error method`, `Error line`, `Error formula` | Text, Longint | Usado em um método de captura de erro instalado pelo comando [`ON ERR CALL`](../commands-legacy/on-err-call.md). Veja [Tratamento de erros no método](../Concepts/error-handling.md#handling-errors-within-the-method).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `MouseDown`                                            | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](../commands-legacy/on-event-call.md). Definir como 1 quando o botão do mouse for pressionado, caso contrário será definido como 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `MouseX`, `MouseY`                                     | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](../commands-legacy/on-event-call.md). <li>Em um evento `MouseDown=1`, `MouseX` e `MouseY` são respectivamente definidos como coordenadas verticais e horizontais do clique. Ambos os valores são expressos em píxeis e usam o sistema local de coordenadas da janela. </li><li>No caso de um campo ou de uma variável de imagem, `MouseX` e `MouseY` retornam as coordenadas locais de um mouse clique nos eventos formulário [`On Clicked`](../Events/onClicked.md), [`On Double Clicked`](../Events/onDoubleClicked.md) e [`On Mouse Up`](../Events/onMouseUp.md). As coordenadas locais do cursor do mouse também são retornadas nos eventos formulário [`On Mouse Enter`](../Events/onMouseEnter.md) e [`On Mouse Move`](../Events/onMouseMove.md). Para obter mais informações, consulte as [Coordenadas de Mouse em uma imagem](../FormEditor/pictures.md#mouse-coordinates-in-a-picture).</li> |
| `KeyCode`                                              | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](../commands-legacy/on-event-call.md). Definido como o código de caractere da tecla que acabou de ser pressionada. Se a chave for uma chave de função, `KeyCode` é definido como um código especial.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Modifiers`                                            | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](../commands-legacy/on-event-call.md). Definir para as teclas modificadoras do teclado (Ctrl/Comando, Alt/Option, Shift, Caps Lock).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `MouseProc`                                            | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](../commands-legacy/on-event-call.md). Defina o número do processo em que o último evento teve lugar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

:::note

Portanto, você não pode criar uma variável, um método ou uma função usando qualquer um desses nomes de variáveis.

:::
