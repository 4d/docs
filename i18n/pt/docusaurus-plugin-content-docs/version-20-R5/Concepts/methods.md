---
id: methods
title: Página Métodos
---

Um método é basicamente um pedaço de código que executa uma ou várias acções. Na linguagem 4D, há duas categorias de métodos:

Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Each statement usually consists of one line in the method (if necessary, it can however be [split using the `\` character](quick-tour.md#code-on-several-lines)).

O tamanho máximo de um método de projecto é limitado a 2 GB de texto ou 32.000 linhas de comando.

## Métodos especializados

Na Linguagem 4D, existem várias categorias de métodos. A categoria depende da forma como podem ser chamados:

| Tipo                                                | Contexto de chamada                                                                                                            | Aceita parâmetros                     | Descrição                                                                                                                                                                                                                         |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**                                | On demand, when the project method name is called (see [Calling project methods](#calling-project-methods)) | Sim                                   | Pode conter qualquer código para executar ações personalizadas Quando um método projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado.                                      |
| **Object (widget) method**       | Automático, quando um evento envolve a forma a que o método está ligado                                                        | Não                                   | Propriedade de um objecto de formulário (também chamado widget)                                                                                                                                                |
| **Form method**                                     | Automático, quando um evento envolve o objecto ao qual o método está ligado                                                    | Não                                   | Propriedade de um formulário. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. |
| **Trigger** (aka _Table method_) | Automático, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)                 | Não                                   | Propriedade de uma tabela. Os gatilhos/triggers são métodos que podem prevenir operações "ilegais" com os registos da sua base de dados.                                                          |
| **Método base**                                     | Automático, quando ocorre um evento de sessão de trabalho                                                                      | Sim (pré-definido) | Existem 16 métodos base em 4D.                                                                                                                                                                                    |
| **Class**                                           | [**Class functions**](classes.md#function) are called in the context of an object instance                                     | sim                                   | Class functions can be built-in (_e.g._ `collection.orderBy()` or `entity.save()`), or created by the 4D developer. See [**Classes**](classes.md)              |

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

Quando criar um método projeto, este passa a formar parte da lingagem do banco de dados no qual foi criado. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. Um método de projecto utilizado desta forma é chamado de sub-rotina.

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

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este método:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

Esta capacidade simplifica dramaticamente os seus métodos. In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. Esta é a segunda razão para a utilização de sub-rotinas para esclarecer os seus métodos. Desta forma, os seus métodos tornam-se extensões à linguagem 4D.

Se precisar mudar seu método de pesquisa de clientes nesse banco de dados de exemplo, terá que mudar apenas um método, não dez. Este é o próximo motivo para utilizar sub-rotinas para facilitar mudanças nos seus métodos.

Usando sub-rotinas, você torna o seu código modular. Isto significa simplesmente a divisão do seu código em módulos (sub-rotinas), cada um dos quais executa uma tarefa lógica. Considere o código abaixo de um banco de dados de contas correntes:

```4d
 FIND CLEARED CHECKS ` Buscar os cheques emitidos
 RECONCILE ACCOUNT ` Reconciliar a conta
 PRINT CHECK BOOK REPORT ` Imprimir um relatório da conta
```

Mesmo para alguém que não conheça o banco de dados, é claro o que o código faz. Não é necessário examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas operações complexas, mas aqui é apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu código em tarefas lógicas, ou módulos, sempre que possível.

### Objeto fórmula

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. Permite-lhe implementar métodos de objectos personalizados.

To execute a method stored in an object property, use the **()** operator after the property name. Por exemplo:

```4d
//myAlert ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Também se admite a sintaxe com parênteses:

```4d
$o["custom_Alert"]() //exibe "Hello world!"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//fullName method C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

You can encapsulate `fullName` in an object:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

Combined with the `This`function, such object methods allow writing powerful generic code. Por exemplo:

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

Note that, even if it does not have parameters, an object method to be executed must be called with `()` parenthesis. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
$o:=$f.message //devolve o objeto fórmula em $o
```

### Métodos do menu

Um método de menu é invocado quando se selecciona o comando do menu personalizado ao qual está anexado. Atribui-se o método ao comando menu usando o editor de menu ou um comando do tema "Menus". O método executa-se quando o comando do menu é escolhido. Ao criar menus personalizados com métodos de menu que realizam ações específicas, pode personalizar seu banco de dados.

Os comandos personalizados do menu podem causar a realização de uma ou mais actividades. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

A automatização de sequências de actividades é uma capacidade muito poderosa da linguagem de programação. Usando menus personalizados, pode automatizar sequências de tarefa e fornecer mais orientação aos usuários do banco de dados.

### Métodos Processo

A **process method** is a project method that is called when a process is started. O processo dura apenas enquanto o método do processo continuar a ser executado, excepto se for um processo de Worker. Note that a menu method attached to a menu command with _Start a New Process_ property is also the process method for the newly started process.

### Métodos de captura de eventos e erros

An **event catching method** runs in a separate process as the process method for catching events. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdução de dados, 4D detecta toques no teclado e cliques, depois chama os métodos corretos de objetos e formulários para que possa responder adequadamente aos eventos a partir destes métodos. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Cada vez que ocorre um erro ou uma exceção, este é executado dentro do processo em que foi instalado. For more information, see the [Error handling](error-handling.md) section.

### Execution mode

Os métodos projeto escritos em sua aplicação costumam ser chamados automaticamente durante o uso da aplicação através de comandos de menu, botões, outros métodos, etc. Para métodos de banco de dados, são executados em relação à eventos específicos que ocorrem na aplicação.

Entretanto, para teste e depuração, 4D deixa que execute métodos de projeto manualmente e certos métodos de banco de dados em modo Design.
Neste caso é possível executar o método em um novo processo ou diretamente no modo Debug, para verificar sua execução passo a passo.

Pode executar métodos de duas formas:

- Na janela Editor de código,
- Na caixa de diálogo Executar método (apenas métodos de projecto).

#### No editor de código

Each [**Code Editor**](../code-editor/write-class-method.md) window has a button that can be used to run the current method. Usar o menu associado com o botão, pode escolher o tipo de execução desejado.

Esse botão é ativo para métodos projeto e para os métodos database:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

For more information, see [Toolbar](../code-editor/write-class-method.md#toolbar).

#### Na caixa de diálogo Executar método

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

Esta caixa de diálogo lista todos os métodos de projecto da base de dados, incluindo métodos de projecto partilhados de componentes. Por outro lado, os métodos de projecto que foram declarados invisíveis não aparecerão.

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. Se o método estiver executando uma tarefa demorada, como a impressão de um grande conjunto de registos, pode continuar trabalhando com a base de dados, adicionando registos a uma tabela, criando um gráfico para apresentar dados, etc. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D _Language Reference_ manual.

**4D Server Notes**:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call a _stored procedure_, is created on the server machine in order to execute the method. Essa opção pode ser usada para reduzir o tráfego de rede e otimizar o funcionamento do 4D Server, em particular para métodos que chamam dados armazenados no disco. Todos os tipos de métodos podem ser executados na máquina servidor ou noutra máquina cliente, excepto os que modificam a interface do utilizador. Neste caso, os procedimentos armazenados são ineficazes.
- Também pode optar por executar o método noutra estação de trabalho cliente. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4dv19/help/command/en/page648.html).

By default, the **locally** option is selected. Com a versão 4D para um único utilizador, esta é a única opção disponível.

## Métodos associados aos objetos

Os métodos de projecto podem chamar-se a si próprios. Por exemplo:

- O método A pode chamar o método B que pode chamar A, por isso A chamará novamente B e assim por diante.
- Um método pode chamar-se a si próprio.

A isto chama-se recorrência. A linguagem 4D suporta plenamente a recorrência.

Aqui um exemplo simples. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:

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

with the recursive function `Genealogy of` listed here:

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

Note the `Genealogy of` method which calls itself.

The first way is an **iterative algorithm**. The second way is a **recursive algorithm**.

Ao implementar código para casos como o exemplo anterior, é importante notar que é sempre possível escrever métodos usando iteração ou recursividade. Tipicamente, a recursão fornece um código mais conciso, legível e de fácil manutenção, mas a sua utilização não é obrigatória.

Alguns usos típicos da recursividade em 4D são:

- Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo.
- Browsing documents and folders on your disk, using the commands `FOLDER LIST` and `DOCUMENT LIST`. Uma pasta pode conter pastas e documentos, as próprias subpastas podem conter pastas e documentos, e assim por diante.

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Sem este teste de condição, o método chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espaço para "empilhar" as chamadas (bem como os parâmetros e variáveis locais utilizados no método).
