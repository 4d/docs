---
id: methods
title: Página Métodos
---

Um método é basicamente um pedaço de código que executa uma ou várias acções. Na linguagem 4D, há duas categorias de métodos:

Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Cada instrução geralmente consiste em uma linha no método (se necessário, no entanto, pode ser [dividida usando o caractere `\`](quick-tour.md#code-on-several-lines)).

O tamanho máximo de um método de projecto é limitado a 2 GB de texto ou 32.000 linhas de comando.

## Tipos de métodos

Na Linguagem 4D, existem várias categorias de métodos. A categoria depende da forma como podem ser chamados:

| Tipo                                              | Contexto de chamada                                                                                                                   | Aceita parâmetros                     | Descrição                                                                                                                                                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos projeto**                               | Por demanda, quando chamar ao nome do método projeto (ver [Chamando a métodos projeto](#chamando-metodos-projeto)) | Sim                                   | Pode conter qualquer código para executar ações personalizadas Quando um método projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado.                                      |
| **Método objeto (widget)**     | Automático, quando um evento envolve a forma a que o método está ligado                                                               | Não                                   | Propriedade de um objecto de formulário (também chamado widget)                                                                                                                                                |
| **Método formulário**                             | Automático, quando um evento envolve o objecto ao qual o método está ligado                                                           | Não                                   | Propriedade de um formulário. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. |
| **Trigger** (o *método tabla*) | Automático, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)                        | Não                                   | Propriedade de uma tabela. Os gatilhos/triggers são métodos que podem prevenir operações "ilegais" com os registos da sua base de dados.                                                          |
| **Método base**                                   | Automático, quando ocorre um evento de sessão de trabalho                                                                             | Sim (pré-definido) | Existem 16 métodos base em 4D.                                                                                                                                                                                    |
| **Class**                                         | [**Funções de classe**](classes.md#function) são chamadas no contexto de uma instância de objeto                                      | sim                                   | As funções de classe podem ser incorporadas (*por exemplo* `collection.orderBy()` ou `entity.save()`), ou criadas pelo desenvolvedor do 4D. Veja [**Classes**](classes.md)                     |

## Métodos projeto recursivos

Um método de projecto pode ter uma das seguintes funções, dependendo de como é executado e utilizado:

- Constantes
- Objeto fórmula
- Método do menu
- Método de gerenciamento de processos
- Método de captura de eventos ou erros

Também pode executar os seus métodos projeto manualmente, por exemplo, para fins de teste.

### Sugestões

Uma sub-rotina é um método de projecto que pode ser pensado como um servo. Executa as tarefas que outros métodos lhe pedem para executar. Uma função é uma sub-rotina que devolve um valor ao método que a chamou.

Quando criar um método projeto, este passa a formar parte da lingagem do banco de dados no qual foi criado. Você pode então chamar o método projeto a partir de outro método (método projeto, método de objeto...) da mesma forma que você chama os comandos internos do 4D. Um método de projecto utilizado desta forma é chamado de sub-rotina.

Utiliza sub-rotinas para:

- Reduzir a codificação repetitiva
- Esclareça os seus métodos
- Facilitar mudanças nos seus métodos
- Modularize o seu código

Por exemplo, suponha que tenha um banco de dados de clientes. Ao personalizar o banco de dados, pode perceber que ha'tarefas que tem que realizar repetidamente, como achar um cliente e modificar seu registro. O código para fazer isso  parece-se com o seguinte:

```4d
  // Procure um cliente
 QUERY BY EXAMPLE([Customers])
  // Selecione o formulário de entrada
 FORMULÁRIO DE ENTRADA([Customers]; "Data Entry")
  // Modifique o registo do cliente
 MODIFY RECORD([Customers])
```

Se não utilizar sub-rotinas, terá de escrever o código cada vez que quiser modificar o registo de um cliente. Se houver dez lugares na sua base de dados personalizada onde precise fazer isso, terá de escrever o código dez vezes. Se utilizar sub-rotinas, só terá de o escrever uma vez. Esta é a primeira vantagem das sub-rotinas - reduzir a quantidade de código.

Se o código descrito anteriormente fosse um método chamado `MODIFY_CUSTOMER`, você o executaria simplesmente usando o nome do método em outro método. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este método:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

Esta capacidade simplifica dramaticamente os seus métodos. No exemplo, você não precisa saber como o método `MODIFY_CUSTOMER` funciona, apenas o que ele faz. Esta é a segunda razão para a utilização de sub-rotinas para esclarecer os seus métodos. Desta forma, os seus métodos tornam-se extensões à linguagem 4D.

Se precisar mudar seu método de pesquisa de clientes nesse banco de dados de exemplo, terá que mudar apenas um método, não dez. Este é o próximo motivo para utilizar sub-rotinas para facilitar mudanças nos seus métodos.

Usando sub-rotinas, você torna o seu código modular. Isto significa simplesmente a divisão do seu código em módulos (sub-rotinas), cada um dos quais executa uma tarefa lógica. Considere o código abaixo de um banco de dados de contas correntes:

```4d
 FIND CLEARED CHECKS ` Buscar os cheques emitidos
 RECONCILE ACCOUNT ` Reconciliar a conta
 PRINT CHECK BOOK REPORT ` Imprimir um relatório da conta
```

Mesmo para alguém que não conheça o banco de dados, é claro o que o código faz. Não é necessário examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas operações complexas, mas aqui é apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu código em tarefas lógicas, ou módulos, sempre que possível.

### Objeto fórmula

Você pode encapsular os métodos do seu projeto em objetos **fórmula** e chamá-los a partir dos seus objetos.

Os comandos `Formula` ou `Formula from string` permitem-lhe criar objetos de fórmula nativa que você pode encapsular em propriedades de objeto. Permite-lhe implementar métodos de objectos personalizados.

Para executar um método armazenado em uma propriedade de objeto, use o operador **()** depois do nome da propriedade. Por exemplo:

```4d
//myAlert ALERT("Hello world!")
```

Então `myAlert` pode ser encapsulado em qualquer objeto e chamado:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Também se admite a sintaxe com parênteses:

```4d
$o["custom_Alert"]() //exibe "Hello world!"
```

Você também pode [passar parâmetros](Concepts/parameters.md) para sua fórmula quando você a chamar usando $1, $2… assim como nos métodos do projeto 4D:

```4d
//fullName method C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

Você pode encapsular `fullName` em um objeto:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

Combinado com a função `This`, tais métodos de objectos permitem escrever um poderoso código genérico. Por exemplo:

```4d
//fullName2 method C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Então o método atua como um novo atributo calculado que pode ser adicionado a outros atributos:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //add the method  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```

Note-se que, mesmo que não tenha parâmetros, um método de objeto a ser executado deve ser chamado com `()` parênteses. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
$o:=$f.message //devolve o objeto fórmula em $o
```

### Métodos de menu

Um método de menu é invocado quando se selecciona o comando do menu personalizado ao qual está anexado. Atribui-se o método ao comando menu usando o editor de menu ou um comando do tema "Menus". O método executa-se quando o comando do menu é escolhido. Ao criar menus personalizados com métodos de menu que realizam ações específicas, pode personalizar seu banco de dados.

Os comandos personalizados do menu podem causar a realização de uma ou mais actividades. Por exemplo, um comando de menu para inserir registros pode chamar um método que realiza duas tarefas: exibir o formulário de entrada apropriado e chamar o comando `ADD RECORD` até que o usuário cancele a atividade de entrada de dados.

A automatização de sequências de actividades é uma capacidade muito poderosa da linguagem de programação. Usando menus personalizados, pode automatizar sequências de tarefa e fornecer mais orientação aos usuários do banco de dados.

### Métodos Processo

Um **método de processo** é um método de projeto que é chamado quando um processo é iniciado. O processo dura apenas enquanto o método do processo continuar a ser executado, excepto se for um processo de Worker. Note-se que um método de menu anexado a um comando de menu com a propriedade *Start a New Process* é também o método de processo para o processo recentemente iniciado.

### Métodos de captura de eventos e erros

Um **método de captação de eventos** é executado em um processo separado como o método de processo para capturar eventos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdução de dados, 4D detecta toques no teclado e cliques, depois chama os métodos corretos de objetos e formulários para que possa responder adequadamente aos eventos a partir destes métodos. Para mais informações, veja a descrição do comando `ON EVENT CALL`.

Um **método de apanhar erros** é um método de projecto baseado na interrupção. Cada vez que ocorre um erro ou uma exceção, este é executado dentro do processo em que foi instalado. Para mais informações, consulte a seção [Error handling](error-handling.md).

### Execution mode

Os métodos projeto escritos em sua aplicação costumam ser chamados automaticamente durante o uso da aplicação através de comandos de menu, botões, outros métodos, etc. Para métodos de banco de dados, são executados em relação à eventos específicos que ocorrem na aplicação.

Entretanto, para teste e depuração, 4D deixa que execute métodos de projeto manualmente e certos métodos de banco de dados em modo Design.
Neste caso é possível executar o método em um novo processo ou diretamente no modo Debug, para verificar sua execução passo a passo.

Pode executar métodos de duas formas:

- Na janela Editor de código,
- Na caixa de diálogo Executar método (apenas métodos de projecto).

#### No editor de código

Cada janela do [**Editor de Código**](../code-editor/write-class-method.md) possui um botão que pode ser usado para executar o método atual. Usar o menu associado com o botão, pode escolher o tipo de execução desejado.

Esse botão é ativo para métodos projeto e para os métodos database:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

Para obter mais informações, consulte [Toolbar](../code-editor/write-class-method.md#toolbar).

#### Na caixa de diálogo Executar método

Quando você selecionar o comando **Method...** do menu **Run**, exibe o diálogo **Execute Method**.

Esta caixa de diálogo lista todos os métodos de projecto da base de dados, incluindo métodos de projecto partilhados de componentes. Por outro lado, os métodos de projecto que foram declarados invisíveis não aparecerão.

Para executar um método projeto, basta selecionar o seu nome na lista e clicar em **Executar**. Para executar um método passo a passo no modo Debug, clique em **Debug**. Para mais informações sobre o depurador 4D, consulte a seção [Depuração](../Debugging/basics.md).

Se você marcar a caixa de seleção de **Novo Processo**, o método que você selecionou é executado em outro processo. Se o método estiver executando uma tarefa demorada, como a impressão de um grande conjunto de registos, pode continuar trabalhando com a base de dados, adicionando registos a uma tabela, criando um gráfico para apresentar dados, etc. Para mais informações sobre processos, consulte [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) o manual 4D *Referência de Idioma*.

**Notas Servidor 4D**:

- Se quiser que o método seja executado na máquina do servidor e não na máquina do cliente, selecione a opção On 4D Server no menu To be executed. Neste caso, é criado um novo processo, chamado stored procedure, na máquina do servidor para executar o método. Essa opção pode ser usada para reduzir o tráfego de rede e otimizar o funcionamento do 4D Server, em particular para métodos que chamam dados armazenados no disco. Todos os tipos de métodos podem ser executados na máquina servidor ou noutra máquina cliente, excepto os que modificam a interface do utilizador. Neste caso, os procedimentos armazenados são ineficazes.
- Também pode optar por executar o método noutra estação de trabalho cliente. Outras estações de trabalho do cliente não aparecerão no menu, a menos que tenham sido previamente "registradas" (para mais informações, consulte a descrição do [CLIENTO REGISTAR](https://doc. d.com/4dv19/help/command/en/page648.html).

Por padrão, a opção **local** está selecionada. Com a versão 4D para um único utilizador, esta é a única opção disponível.

## Métodos associados aos objetos

Os métodos de projecto podem chamar-se a si próprios. Por exemplo:

- O método A pode chamar o método B que pode chamar A, por isso A chamará novamente B e assim por diante.
- Um método pode chamar-se a si próprio.

A isto chama-se recorrência. A linguagem 4D suporta plenamente a recorrência.

Aqui um exemplo simples. Digamos que você tenha uma tabela `[Amigos e Relativas]` composta por este conjunto extremamente simplificado de campos:

- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

Para este exemplo, assumimos que os valores nos campos são únicos (não há duas pessoas com o mesmo nome). Dado um nome, quer construir a frase "Um amigo meu, João que é o filho de Paulo que é o filho de Jane que é o filho de Robert que é o filho de Eleanor, faz isto para viver":

1. Pode construir a frase desta forma:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. Também se pode construir desta forma:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

com a função recursiva `Genealogy de` listada aqui:

```4d
  ` Genealogy of project method
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence
 
 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Observe o método `Genealogy of` que chama a si mesmo.

A primeira forma é um **algoritmo iterativo**. A segunda via é um **algoritmo recursivo**.

Ao implementar código para casos como o exemplo anterior, é importante notar que é sempre possível escrever métodos usando iteração ou recursividade. Tipicamente, a recursão fornece um código mais conciso, legível e de fácil manutenção, mas a sua utilização não é obrigatória.

Alguns usos típicos da recursividade em 4D são:

- Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo.
- Navegação de documentos e pastas em seu disco, usando os comandos `FOLDER LIST` e `DOCUMENT LIST`. Uma pasta pode conter pastas e documentos, as próprias subpastas podem conter pastas e documentos, e assim por diante.

**Importante:** Las llamadas recursivas deben terminar siempre en algún punto. No exemplo, o método `Genealogia de` deixa de chamar a si próprio quando a consulta não devolve registos. Sem este teste de condição, o método chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espaço para "empilhar" as chamadas (bem como os parâmetros e variáveis locais utilizados no método).
