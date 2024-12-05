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


#### Exemplos

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

### Usando uma directiva C_

> **Nota:** Os parâmetros $1, $2... passados aos métodos são variáveis locais. Para mais informações, consulte por favor [Parâmetros](Concepts/parameters.md).

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

:::warning Obsoleto

O uso de variáveis interprocessadas não é recomendado, uma vez que não estão disponíveis a partir de processos preventivos e tendem a tornar o código mais difícil para manutenção.

:::

As variáveis interprocessadas estão disponíveis em toda a base de dados e são partilhadas em todos os processos cooperativos. São utilizados principalmente para partilhar informação entre processos.

O nome de uma variável interprocessada começa sempre com os símbolos (`<>`) - um sinal "menor que" seguido de um sinal "maior do que" - seguido de 31 caracteres.

Em Cliente/Servidor, cada máquina (máquinas Cliente e máquina Servidor) partilham a mesma definição de variáveis interprocessadas, mas cada máquina tem um exemplo diferente para cada variável.


## Variáveis do sistema

The 4D language manages several **system variables**, which allow you to control the execution of different operations. You can test their values and use them as any variable. All system variables are [process variables](#process-variables).

As variáveis do sistema são usadas pelos [comandos 4D](commands.md). Refer to the "System variables and sets" paragraph in the description of a command to find out whether it affects a system variable.


| System variable name                                   | Tipo          | Descrição                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `OK`                                                   | Integer       | Usually set to 1 after a command has displayed a dialog box and the user clicked the **OK** button, and 0 if they clicked **Cancel**. Some commands also modify the value of the `OK` system variable when a operation is successfully executed.                                     |
| `Document`                                             | Text          | Contains the "long name" (full path+name) of the last file opened or created using commands such as [Open document](https://doc.4d.com/4dv20/help/command/en/page264.html) or [SELECT LOG FILE](https://doc.4d.com/4dv20/help/command/en/page345.html).                              |
| `FldDelimit`, `RecDelimit`                             | Text          | Contain the character codes that will be used respectively as a field separator (default is **Tab** (9)) and record separator (default is **carriage return** (13)) when importing or exporting text. Para usar um separador diferente, atribua um novo valor à variável do sistema. |
| `Error`, `Error method`, `Error line`, `Error formula` | Text, Longint | Used in an error-catching method installed by the [`ON ERR CALL`](https://doc.4d.com/4dv20/help/command/en/page155.html) command. See [Handling errors within the method](../Concepts/error-handling.md#handling-errors-within-the-method).                                          |
| `MouseDown`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to 1 when the mouse button is pushed, otherwise set to 0.                                                                                                    |
| `MouseX`, `MouseY`                                     | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. <li>In a `MouseDown=1` event, `MouseX` and `MouseY` are respectively set to the vertical and horizontal coordinates of the click. Both values are expressed in pixels and use the local coordinate system of the window. </li><li>In case of a picture field or variable, `MouseX` and `MouseY` return the local coordinates of a mouse click in the [`On Clicked`](../Events/onClicked.md), [`On Double Clicked`](../Events/onDoubleClicked.md) and [`On Mouse Up`](../Events/onMouseUp.md) form events. Local coordinates of the mouse cursor are also returned in the [`On Mouse Enter`](../Events/onMouseEnter.md) and [`On Mouse Move`](../Events/onMouseMove.md) form events. For more information, see the [Mouse Coordinates in a picture](../FormEditor/pictures.md#mouse-coordinates-in-a-picture) section.</li>                                                                                                                |
| `KeyCode`                                              | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to the character code of the key that was just pressed. If the key is a function key, `KeyCode` is set to a special code.                                    |
| `Modifiers`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to the keyboard modifier keys (Ctrl/Command, Alt/Option, Shift, Caps Lock).                                                                                  |
| `MouseProc`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to the process number in which the last event took place                                                                                                     |


:::note

Therefore, you cannot create a variable, method, or function using any of these variable names.

:::
