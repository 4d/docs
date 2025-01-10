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

- utilizando a palavra-chave `var` (recomendado, especialmente se o seu código utilizar objectos e classes),
- usando um dos comandos da linguagem 4D do tema "Compiler" ou "Arrays" (sintaxe herdada).

Quando as variáveis são declaradas, são inicializadas com o valor predefinido [**correspondente ao seu tipo**](data-types.md#default-values), que manterão durante a sessão, desde que não lhes tenha sido [atribuído](#assigning-data).

:::note

Embora não seja recomendado, você pode criar variáveis simplesmente usando-as; não precisa necessariamente declará-las formalmente. Por exemplo, se quiser criar uma variável que contenha a data atual mais 30 dias, pode escrever:

```4d
 MyDate:=Current date+30 //MyDate é criada e obtém a data atual mais  30 días
```

Quando uma variável é criada antes de ser declarada, ela não é inicializada na etapa de declaração.

:::



### Usando a palavra-chave `var`

Recomenda-se a declaração de variáveis utilizando a palavra-chave `var` , uma vez que esta sintaxe permite associar variáveis de objeto a classes. A utilização desta sintaxe melhora as sugestões do editor de código e as funcionalidades de antecipação de escrita.

Para declarar uma variável de qualquer tipo com a palavra-chave `var` , utilize a seguinte sintaxe:

`var <varName>{; <varName2>;...}{ : <varType>}`

Por exemplo:

```4d
var $myText : Text  //a text variable
var myDate1; myDate2 : Date  //several date variables
var $myFile : 4D. File  //a file class object variable
var $myVar //a variant variable
```

`varName` é o nome da variável e deve estar em conformidade com as [regras4D](Concepts/identifiers.md) referente a identificadores.   
Essa sintaxe só é compatível com declarações de [variáveis locais e variáveis processo](#local-process-and-interprocess-variables), excluindo assim as [variables interprocessos](#interprocess-variables) e os [arrays](Concepts/arrays.md).

`varType` pode ser:

- um [tipo básico](Concepts/data-types.md), caso em que a variável contém um valor do tipo declarado,
- uma referência à classe [](Concepts/classes.md) (classe 4D ou classe de utilizador), caso em que a variável contém uma referência a um objeto da classe definida.

Se `varType` for omitido, é criada uma variável do tipo **variante** .

A tabela seguinte enumera todos os valores `varType` suportados:

| varType                | Conteúdos                              |
| ---------------------- | -------------------------------------- |
| `Text`                 | Valor texto                            |
| `Date`                 | Valor data                             |
| `Hora`                 | Valor Hora                             |
| `Parâmetros`           | Valor booleano                         |
| `Integer`              | Valor inteiro longo                    |
| `Real`                 | Valor real                             |
| `Ponteiro`             | Valor ponteiro                         |
| `Imagem`               | Valor imagem                           |
| `Blob`                 | Valor BLOB                             |
| `Collection`           | Valor colecção                         |
| `Diferente de`         | Valor variant                          |
| `Object`               | Objeto com classe padrão (`4D.Object`) |
| `4D.<className>` | Objecto do nome da classe 4D           |
| `cs.<className>` | Objeto do nome da classe usuário       |

#### Exemplos

- Para declarar variáveis básicas locais e de processo:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalente para:  

var $o : 4D.Object
//também equivalente a C_OBJECT($o)
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


### Usando uma directiva C_

> **Nota de compatibilidade:** essa funcionalidade não é recomendada para declarar variáveis em métodos. Para mais informações, consulte por favor [Parâmetros](Concepts/parameters.md).

As directivas dos comandos do tema "Compilador" permitem-lhe declarar variáveis de tipos básicos.

Por exemplo, se quisermos definir uma variável de texto, escrevemos:

```4d
 C_TEXT(myText)
```

Seguem-se algumas declarações de variáveis básicas:

```4d
 C_BLOB(vxMyBlob) // A variável processo vxMyBlob se declara como uma variável de tipo BLOB
 C_DATE($vdCurDate) // A variável local $vdCurDate se declara como uma variável de tipo Data
 C_LONGINT(vg1;vg2;vg3) // As 3 variáveis de processo vg1, vg2 y vg3 se declaram como variáveis de tipo Inteiro longo
 C_OBJECT($vObj) // A variável local $vObj se declara como uma variável de tipo Objeto
 C_COLLECTION($vCol) // A variável local $vCol se declara como uma variáve de tipo Coleção
 ARRAY LONGINT(alAnArray;10) //A variável do processo alAnArray se declara como um array Inteiro longo de 10 elementos
```

**Nota:**os arrays são um tipo particular de variáveis. Um array é uma série ordenada de variáveis do mesmo tipo. Para mais informações, consulte por favor [Arrays](Concepts/arrays.md).


## Atribuição de dados

Os dados podem ser colocados e copiados de variáveis e arrays. Colocar dados em uma variável é chamado **atribuiindo os dados a uma variável** e é feito com o operador de atribuição (:=). O operador de atribuição também é usado para atribuir dados para elementos campos.

O operador de atribuição é a maneira mais importante de criar uma variável e jogar dados nela. Escreve-se o nome da variável que se pretende criar no lado esquerdo do operador de atribuição. Por exemplo:

```4d
MyNumber:=3
```

cria a variável _MyNumber_ e coloca o número 3 na mesma. Se o MyNumber já existe, então o número 3 é apenas colocado nele.

> Normalmente, não se recomenda a criação de variáveis sem [declarar o seu tipo](#creating-variables).

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

**Nota:** os parâmetros $1, $2... passados para os métodos são variáveis locais. Para mais informações, consultar [Parâmetros](Concepts/parameters.md).

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

:::warning Obsoleto

O uso de variáveis interprocessadas não é recomendado, uma vez que não estão disponíveis a partir de processos preventivos e tendem a tornar o código mais difícil para manutenção.

:::

As variáveis interprocessadas estão disponíveis em toda a base de dados e são partilhadas em todos os processos cooperativos. São utilizados principalmente para partilhar informação entre processos.

O nome de uma variável interprocessada começa sempre com os símbolos (`<>`) - um sinal "menor que" seguido de um sinal "maior do que" - seguido de 31 caracteres.

Em Cliente/Servidor, cada máquina (máquinas Cliente e máquina Servidor) partilham a mesma definição de variáveis interprocessadas, mas cada máquina tem um exemplo diferente para cada variável.


## Variáveis do sistema

A linguagem 4D gerencia diversas **variáveis sistema**, que permitem controlar a execução de diferentes operações. Você pode testar os valores deles e usá-los como qualquer variável. Todas as variáveis sistema são [variáveis processo](#process-variables).

As variáveis sistema são usadas pelos comandos 4D. Consulte o parágrafo "Variáveis e sets sistema" na descrição de um comando para descobrir se ele afeta uma variável sistema.


| Nome de variável sistema                               | Tipo          | Descrição                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OK`                                                   | Integer       | Geralmente definido como 1 após um comando ter exibido uma caixa de diálogo e o usuário clicou no botão **OK**, e 0 se eles clicarem em **Cancelar**. Alguns comandos também modificam o valor da variável sistema `OK` quando uma operação é executada com sucesso.                                  |
| `Document`                                             | Text          | Contém o "nome longo" (caminho completo+nome) do último arquivo aberto ou criado usando comandos como [Open document](https://doc.4d.com/4dv20/help/command/en/page264.html) ou [SELECT LOG FILE](https://doc.4d.com/4dv20/help/command/en/page345.html).                                             |
| `FldDelimit`, `RecDelimit`                             | Text          | Contém os códigos de caracteres que serão usados respectivamente como um separador de campos (padrão é **Tab** (9)) e o separador de registros (padrão é **retorno do carro** (13)) quando importar ou exportar texto. Para usar um separador diferente, atribua um novo valor à variável do sistema. |
| `Error`, `Error method`, `Error line`, `Error formula` | Text, Longint | Usado em um método de captura de erro instalado pelo comando [`ON ERR CALL`](https://doc.4d.com/4dv20/help/command/en/page155.html). Veja [Tratamento de erros no método](../Concepts/error-handling.md#handling-errors-within-the-method).                                                           |
| `MouseDown`                                            | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Definir como 1 quando o botão do mouse for pressionado, caso contrário será definido como 0.                                                                                      |
| `MouseX`, `MouseY`                                     | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). <li>Em um evento `MouseDown=1`, `MouseX` e `MouseY` são respectivamente definidos como coordenadas verticais e horizontais do clique. Ambos os valores são expressos em píxeis e usam o sistema local de coordenadas da janela. </li><li>No caso de um campo ou de uma variável de imagem, `MouseX` e `MouseY` retornam as coordenadas locais de um mouse clique nos eventos formulário [`On Clicked`](../Events/onClicked.md), [`On Double Clicked`](../Events/onDoubleClicked.md) e [`On Mouse Up`](../Events/onMouseUp.md). As coordenadas locais do cursor do mouse também são retornadas nos eventos formulário [`On Mouse Enter`](../Events/onMouseEnter.md) e [`On Mouse Move`](../Events/onMouseMove.md). Para obter mais informações, consulte as [Coordenadas de Mouse em uma imagem](../FormEditor/pictures.md#mouse-coordinates-in-a-picture).</li>                                                                                                                                 |
| `KeyCode`                                              | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Defina para o código do caractere da chave pressionada. Se a chave é uma chave de função, `KeyCode` é definida como um código especial.                                           |
| `Modifiers`                                            | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Definir para as teclas modificadoras do teclado (Ctrl/Comando, Alt/Option, Shift, Caps Lock).                                                                                     |
| `MouseProc`                                            | Integer       | Usado em um método instalado pelo comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Defina o número do processo em que o último evento teve lugar                                                                                                                     |


:::note

Portanto, você não pode criar uma variável, um método ou uma função usando qualquer um desses nomes de variáveis.

:::
