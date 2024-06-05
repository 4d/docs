---
id: methods
title: Página Métodos
---

Um método é basicamente um pedaço de código que executa uma ou várias acções. Na linguagem 4D, há duas categorias de métodos:

Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Cada instrução geralmente consiste em uma linha no método (se necessário, no entanto, pode ser [dividida usando o caractere `\`](quick-tour.md#code-on-several-lines)).

O tamanho máximo de um método de projecto é limitado a 2 GB de texto ou 32.000 linhas de comando.

## Métodos especializados

Na Linguagem 4D, existem várias categorias de métodos. A categoria depende da forma como podem ser chamados:

| Tipo                                              | Contexto de chamada                                                                                                                         | Aceita parâmetros                     | Descrição                                                                                                                                                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**                              | Por demanda, cuando se llama al nombre del método proyecto (ver [Llamando a métodos proyecto](#calling-project-methods)) | Sim                                   | Pode conter qualquer código para executar ações personalizadas Quando um método projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado.                                      |
| **Object (widget) method**     | Automático, quando um evento envolve a forma a que o método está ligado                                                                     | Não                                   | Propriedade de um objecto de formulário (também chamado widget)                                                                                                                                                |
| **Form method**                                   | Automático, quando um evento envolve o objecto ao qual o método está ligado                                                                 | Não                                   | Propriedade de um formulário. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. |
| **Trigger** (o _método tabla_) | Automático, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)                              | Não                                   | Propriedade de uma tabela. Os gatilhos/triggers são métodos que podem prevenir operações "ilegais" com os registos da sua base de dados.                                                          |
| **Método base**                                   | Automático, quando ocorre um evento de sessão de trabalho                                                                                   | Sim (pré-definido) | Existem 16 métodos base em 4D.                                                                                                                                                                                    |
| **Class**                                         | [**Class functions**](classes.md#function) are called in the context of an object instance                                                  | sim                                   | Las funciones de clases pueden estar integradas (_por ejemplo_ `collection.orderBy()` o `entity.save()`), o creadas por el desarrollador 4D. See [**Classes**](classes.md)                     |

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

Si el código descrito anteriormente fuera un método llamado `MODIFY_CUSTOMER`, se ejecutaría simplemente utilizando el nombre del método en otro método. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este método:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

Esta capacidade simplifica dramaticamente os seus métodos. En el ejemplo, no es necesario saber cómo funciona el método `MODIFY_CUSTOMER`, sólo lo que hace. Esta é a segunda razão para a utilização de sub-rotinas para esclarecer os seus métodos. Desta forma, os seus métodos tornam-se extensões à linguagem 4D.

Se precisar mudar seu método de pesquisa de clientes nesse banco de dados de exemplo, terá que mudar apenas um método, não dez. Este é o próximo motivo para utilizar sub-rotinas para facilitar mudanças nos seus métodos.

Usando sub-rotinas, você torna o seu código modular. Isto significa simplesmente a divisão do seu código em módulos (sub-rotinas), cada um dos quais executa uma tarefa lógica. Considere o código abaixo de um banco de dados de contas correntes:

```4d
 FIND CLEARED CHECKS ` Buscar os cheques emitidos
 RECONCILE ACCOUNT ` Reconciliar a conta
 PRINT CHECK BOOK REPORT ` Imprimir um relatório da conta
```

Mesmo para alguém que não conheça o banco de dados, é claro o que o código faz. Não é necessário examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas operações complexas, mas aqui é apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu código em tarefas lógicas, ou módulos, sempre que possível.

### Objeto fórmula

Puede encapsular los métodos de su proyecto en objetos **fórmula** y llamarlos desde sus objetos.

Los comandos `Formula` o `Formula from string` permiten crear objetos de fórmula nativos que se pueden encapsular en las propiedades de los objetos. Permite-lhe implementar métodos de objectos personalizados.

Para ejecutar un método almacenado en una propiedad objeto, utilice el operador **()** después del nombre de la propiedad. Por exemplo:

```4d
//myAlert ALERT("Hello world!")
```

Luego `myAlert` puede encapsularse en cualquier objeto y llamarse:

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

Puede encapsular `fullName` en un objeto:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

Combinados con la función `This`, estos métodos objetos permiten escribir un código genérico muy poderoso. Por exemplo:

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

Tenga en cuenta que, aunque no tenga parámetros, un método objeto que vaya a ejecutarse debe llamarse con paréntesis `()`. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
$o:=$f.message //devolve o objeto fórmula em $o
```

### Métodos do menu

Um método de menu é invocado quando se selecciona o comando do menu personalizado ao qual está anexado. Atribui-se o método ao comando menu usando o editor de menu ou um comando do tema "Menus". O método executa-se quando o comando do menu é escolhido. Ao criar menus personalizados com métodos de menu que realizam ações específicas, pode personalizar seu banco de dados.

Os comandos personalizados do menu podem causar a realização de uma ou mais actividades. Por ejemplo, un comando de menú de entrada de registros puede llamar a un método que realice dos tareas: mostrar el formulario de entrada apropiado y llamar al comando `ADD RECORD` hasta que el usuario cancele la actividad de entrada de datos.

A automatização de sequências de actividades é uma capacidade muito poderosa da linguagem de programação. Usando menus personalizados, pode automatizar sequências de tarefa e fornecer mais orientação aos usuários do banco de dados.

### Métodos Processo

Un **método proyecto** es un método proyecto que se llama cuando se inicia un proceso. O processo dura apenas enquanto o método do processo continuar a ser executado, excepto se for um processo de Worker. Tenga en cuenta que un método de menú asociado a un comando de menú con la propiedad _Iniciar un nuevo proceso_ es también el método de gestión de proceso para el proceso recién creado.

### Métodos de captura de eventos e erros

Un **método de gestión de eventos** es un método dedicado a la gestión de eventos, que se ejecuta en un proceso diferente del método de gestión de procesos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdução de dados, 4D detecta toques no teclado e cliques, depois chama os métodos corretos de objetos e formulários para que possa responder adequadamente aos eventos a partir destes métodos. Para más información, consulte la descripción del comando `ON EVENT CALL`.

Un **método de gestión de errores** es un método proyecto basado en interrupciones. Cada vez que ocorre um erro ou uma exceção, este é executado dentro do processo em que foi instalado. Para más información, consulte la sección [Gestión de errores](error-handling.md).

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

Para más información, consulte [Barra de herramientas](../code-editor/write-class-method.md#toolbar).

#### Na caixa de diálogo Executar método

En 4D, algunos usos típicos de la recursividad son:

Esta caixa de diálogo lista todos os métodos de projecto da base de dados, incluindo métodos de projecto partilhados de componentes. Por outro lado, os métodos de projecto que foram declarados invisíveis não aparecerão.

Para ejecutar un método proyecto, basta con seleccionar su nombre en la lista y hacer clic en **Ejecutar**. Para ejecutar un método paso a paso en modo Depuración, haga clic en **Depuración**. Para más información sobre el depurador de 4D, consulte la sección [Depuración](../Debugging/basics.md).

Si marca la casilla **Nuevo proceso**, el método seleccionado se ejecuta en otro proceso. Se o método estiver executando uma tarefa demorada, como a impressão de um grande conjunto de registos, pode continuar trabalhando com a base de dados, adicionando registos a uma tabela, criando um gráfico para apresentar dados, etc. Para más información sobre los procesos, consulte [Procesos](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) en el manual _Lenguaje_ 4D.

**Notas Servidor 4D**:

- Si desea que el método se ejecute en el equipo servidor y no en el equipo cliente, seleccione la opción **En 4D Server** en el menú A ejecutar. En este caso, se crea un nuevo proceso, llamado _procedimiento almacenado_, en la máquina servidor para ejecutar el método. Essa opção pode ser usada para reduzir o tráfego de rede e otimizar o funcionamento do 4D Server, em particular para métodos que chamam dados armazenados no disco. Todos os tipos de métodos podem ser executados na máquina servidor ou noutra máquina cliente, excepto os que modificam a interface do utilizador. Neste caso, os procedimentos armazenados são ineficazes.
- Também pode optar por executar o método noutra estação de trabalho cliente. Otras estaciones de trabajo cliente no aparecerán en el menú, a menos que hayan sido previamente "registradas" (para más información, consulte la descripción de la opción [REGISTRAR CLIENTE](https://doc.4d.com/4Dv19R5/4D/19-R5/REGISTER-CLIENT.301-5830908.

Por defecto, está seleccionada la opción **localmente**. Com a versão 4D para um único utilizador, esta é a única opção disponível.

## Métodos associados aos objetos

Os métodos de projecto podem chamar-se a si próprios. Por exemplo:

- O método A pode chamar o método B que pode chamar A, por isso A chamará novamente B e assim por diante.
- Um método pode chamar-se a si próprio.

A isto chama-se recorrência. A linguagem 4D suporta plenamente a recorrência.

Aqui um exemplo simples. Digamos que tiene una tabla `[Friends and Relatives]` compuesta por este conjunto de campos extremadamente simplificado:

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

con la función recursiva `Genealogy of` siguiente:

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

Note que el método `Genealogy of` se llama a sí mismo.

La primera forma es un **algoritmo iterativo**. La segunda forma es un **algoritmo recursivo**.

Ao implementar código para casos como o exemplo anterior, é importante notar que é sempre possível escrever métodos usando iteração ou recursividade. Tipicamente, a recursão fornece um código mais conciso, legível e de fácil manutenção, mas a sua utilização não é obrigatória.

Alguns usos típicos da recursividade em 4D são:

- Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo.
- Navegar por los documentos y las carpetas del disco, utilizando los comandos `FOLDER LIST` y `DOCUMENT LIST`. Uma pasta pode conter pastas e documentos, as próprias subpastas podem conter pastas e documentos, e assim por diante.

**Importante:** Las llamadas recursivas deben terminar siempre en algún punto. En el ejemplo, el método `Genealogy of` deja de llamarse a sí mismo cuando la consulta no devuelve ningún registro. Sem este teste de condição, o método chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espaço para "empilhar" as chamadas (bem como os parâmetros e variáveis locais utilizados no método).
