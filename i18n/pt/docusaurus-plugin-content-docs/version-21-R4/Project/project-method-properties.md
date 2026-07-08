---
id: project-method-properties
title: Project Methods
---

## Roles

Um método de projecto pode ter uma das seguintes funções, dependendo de como é executado e utilizado:

- Constantes
- Objeto fórmula
- Método do menu
- Método de gerenciamento de processos
- Método de captura de eventos ou erros
- APIs to be called from the web server, transformation tags, extensions...
- Também pode executar os seus métodos projeto manualmente, por exemplo, para fins de teste.

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

Esta capacidade simplifica dramaticamente os seus métodos. Esta capacidade simplifica dramaticamente os seus métodos. Esta é a segunda razão para a utilização de sub-rotinas para esclarecer os seus métodos. Desta forma, os seus métodos tornam-se extensões à linguagem 4D.

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

The [`Formula`](../commands/formula) or [`Formula from string`](../commands/formula-from-string) commands allow you to create [native formula objects](../API/FormulaClass.md) that you can encapsulate in object properties. Permite-lhe implementar métodos de objectos personalizados.

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

For more information, see the [`4D.Formula` class description](../API/FormulaClass.md) and the [Using object properties as named parameters](../Concepts/parameters.md#using-object-properties-as-named-parameters) paragraph.

### Métodos de menu

Um método de menu é invocado quando se selecciona o comando do menu personalizado ao qual está anexado. Um método de menu é invocado quando se selecciona o comando do menu personalizado ao qual está anexado. O método executa-se quando o comando do menu é escolhido. Ao criar menus personalizados com métodos de menu que realizam ações específicas, pode personalizar seu banco de dados.

Os comandos personalizados do menu podem causar a realização de uma ou mais actividades. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the [`ADD RECORD`(../commands/add-record)] command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the 4D programming language. Usando menus personalizados, pode automatizar sequências de tarefa e fornecer mais orientação aos usuários do banco de dados.

### Métodos Processo

Um **método de processo** é um método de projeto que é chamado quando um processo é iniciado. The process lasts only as long as the process method continues to execute, except if it is a [Worker process](../Develop/processes.md#worker-processes). Note that a menu method attached to a menu command with [*Start a New Process*](../Menus/properties.md#start-a-new-process) property is also the process method for the newly started process.

### Métodos de captura de eventos e erros

Um **método de captação de eventos** é executado em um processo separado como o método de processo para capturar eventos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdução de dados, 4D detecta toques no teclado e cliques, depois chama os métodos corretos de objetos e formulários para que possa responder adequadamente aos eventos a partir destes métodos. For more information, see the description of the command [`ON EVENT CALL`](../commands/on-event-call).

Um **método de apanhar erros** é um método de projecto baseado na interrupção. Cada vez que ocorre um erro ou uma exceção, este é executado dentro do processo em que foi instalado. Para mais informações, consulte a seção [Error handling](../Concepts/error-handling.md).

### API Methods

Project methods can be called from external contexts such as other applications, web apps, processed files, etc., in which case they can be seen as API. Such calls include:

- calls to the web server through [http request handlers](../WebServer/http-request-handler.md) or [`4DACTION` URLs](../WebServer/httpRequests.md#4daction),
- [tag processing](../Tags/transformation-tags.md)
- expressions called from extensions ([4D Write Pro](../WritePro/commands/wp-insert-formula.md), [4D View Pro](../ViewPro/formulas.md) or form objects (e.g. [`ST INSERT EXPRESSION`](../commands/st-insert-expression)).

External calls to project methods must be allowed in the [project method properties](../Project/project-method-properties.md).

### Execution mode

Os métodos projeto escritos em sua aplicação costumam ser chamados automaticamente durante o uso da aplicação através de comandos de menu, botões, outros métodos, etc. Para métodos de banco de dados, são executados em relação à eventos específicos que ocorrem na aplicação. Para métodos de banco de dados, são executados em relação à eventos específicos que ocorrem na aplicação.

Entretanto, para teste e depuração, 4D deixa que execute métodos de projeto manualmente e certos métodos de banco de dados em modo Design. Neste caso é possível executar o método em um novo processo ou diretamente no modo Debug, para verificar sua execução passo a passo.

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

Se você marcar a caixa de seleção de **Novo Processo**, o método que você selecionou é executado em outro processo. Se o método estiver executando uma tarefa demorada, como a impressão de um grande conjunto de registos, pode continuar trabalhando com a base de dados, adicionando registos a uma tabela, criando um gráfico para apresentar dados, etc. Para mais informações sobre processos, consulte [Processes](../Develop/processes.md).

**Notas Servidor 4D**:

- Se quiser que o método seja executado na máquina do servidor e não na máquina do cliente, selecione a opção On 4D Server no menu To be executed. Neste caso, é criado um novo processo, chamado stored procedure, na máquina do servidor para executar o método. Essa opção pode ser usada para reduzir o tráfego de rede e otimizar o funcionamento do 4D Server, em particular para métodos que chamam dados armazenados no disco. Todos os tipos de métodos podem ser executados na máquina servidor ou noutra máquina cliente, excepto os que modificam a interface do utilizador. Neste caso, os procedimentos armazenados são ineficazes.
- Também pode optar por executar o método noutra estação de trabalho cliente. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](../commands/register-client).

Por padrão, a opção **local** está selecionada. Com a versão 4D para um único utilizador, esta é a única opção disponível.

### Métodos associados aos objetos

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
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       var $vtTheWholeStory:="A friend of mine, "+$vsName
       var $vlQueryResult : Integer
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
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

com a função recursiva `Genealogy de` listada aqui:

```4d
  //Genealogy of project method
  //Genealogy of ( String ) -> Text
  //Genealogy of ( Name ) -> Part of sentence
 
 #DECLARE($name : Text) -> $result : Text
 $result:=$name
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$name)
 If(Records in selection([Friends and Relatives])>0)
    $result:=$result+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Observe o método `Genealogy of` que chama a si mesmo.

A primeira forma é um **algoritmo iterativo**. A segunda via é um **algoritmo recursivo**.

Ao implementar código para casos como o exemplo anterior, é importante notar que é sempre possível escrever métodos usando iteração ou recursividade. Tipicamente, a recursão fornece um código mais conciso, legível e de fácil manutenção, mas a sua utilização não é obrigatória.

Alguns usos típicos da recursividade em 4D são:

- Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo.
- Browsing documents and folders on your disk, using the commands [`FOLDER LIST`](../commands/folder-list) and [`DOCUMENT LIST`](document-list). Uma pasta pode conter pastas e documentos, as próprias subpastas podem conter pastas e documentos, e assim por diante.

:::warning

Recursive calls should always end at some point. No exemplo, o método `Genealogia de` deixa de chamar a si próprio quando a consulta não devolve registos. Sem este teste de condição, o método chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espaço para "empilhar" as chamadas (bem como os parâmetros e variáveis locais utilizados no método).

:::

## Propriedades

Após criar um método projeto, pode mudar-lhe o nome e modificar as suas propriedades. As propriedades dos métodos projeto referem-se principalmente às suas condições de acesso e segurança (acesso de usuários, servidores integrados ou serviços), bem como ao seu modo de execução.

Os outros tipos de métodos não têm propriedades específicas. As suas propriedades estão relacionadas com as dos objetos a que estão ligados.

Para mostrar la caja de diálogo **Propiedades del método** para un método proyecto, puede:

- en el [editor de código](../code-editor/write-class-method.md), seleccione el comando **Propiedades del método...** en el menú **Método**,
- o en la página **Métodos** del Explorador, **haga clic derecho** en el método proyecto y seleccione **Propiedades del método...** en el menú contextual o en el menú de opciones.

> Una función de parámetrización global permite modificar una propiedad para todos o parte de los métodos proyecto de la base en una sola operación (ver [Modificar atributos de los métodos globalmente](#batch-setting-for-method-attributes)).

### Nome

Puede cambiar el nombre de un método proyecto en el área **Nombre** de la ventana **Propiedades del método** o en el Explorador.

El nuevo nombre debe cumplir con las reglas de denominación de 4D (ver [Identificadores](../Concepts/identifiers.md)). Se um método com o mesmo nome já existe, 4D mostra uma mensagem dizendo que o nome do método já foi usado. Se necessário, 4D ordena a lista de métodos novamente.

:::caution

Changing the name of a method already used in the project can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. It is strongly recommended to use the [renaming function for project methods](../Project/search-replace.md#renaming-project-methods-and-variables). Com esta função, é possível atualizar automaticamente o nome sempre que o método for chamado em todo o ambiente de Desenho.

Com 4D Server, o nome do método é alterado no servidor quando termina de o editar. Se mais do que um usuário estiver a modificar o nome do método em simultâneo, o nome final do método será o nome especificado pelo último usuário a terminar a edição. Pode ser necessário especificar um proprietário do método para que apenas determinados usuários possam alterar o nome do método.

:::

:::info

Os métodos base de dados não podem ser renomeados. O mesmo se aplica aos triggers, métodos formulário e métodos objeto, que estão ligados a objetos e recebem os seus nomes do objeto em questão.

:::

### Atributos

É possível controlar como os métodos projeto são utilizados e/ou chamados em diferentes contextos utilizando atributos. Note-se que é possível definir atributos para toda uma seleção de métodos projeto utilizando o Explorador (ver secção seguinte).

#### Invisível

Si no quiere que los usuarios puedan ejecutar un método proyecto utilizando el comando **Método...** del menú **Ejecución**, puede hacerlo Invisible marcando esta opción. Um método invisível não aparece na caixa de diálogo de execução do método.

Quando se torna invisível um método projeto, este continua a estar disponível para os programadores da base de dados. Permanece listado na lista de métodos do Explorador e do Editor de Código.

#### Partilhada pelos componentes e pela base de dados host

Este atributo é utilizado no âmbito dos componentes. Quando estiver selecionada, indica que o método estará disponível para os componentes quando a aplicação for utilizada como base de dados do anfitrião. Por outro lado, quando a aplicação for utilizada como um componente, o método estará disponível para as bases de dados do anfitrião.

Para más información sobre los componentes, consulte el capítulo [Desarrollo e instalación de componentes 4D](../Extensions/develop-components.md).

#### Executar no servidor

Este atributo só é levado em consideração para uma aplicação 4D em modo cliente-servidor. Quando esta opção estiver selecionada, o método do projeto é sempre executado no servidor, independentemente da forma como é chamado.

Para más información sobre esta opción, consulte [Atributo Ejecutar en el servidor](https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html).

### Modo Execução

Esta opção permite-lhe declarar o método elegível para execução em modo preemptivo. Se describe en la [sección Procesos apropiativos](../Develop/preemptive.md).

### Disponível através de

Os atributos de disponibilidade especificam os serviços externos que estão autorizados a chamar explicitamente o método.

#### Serviços Web

Este atributo permite-lhe publicar o método atual como um serviço Web acessível através de pedidos SOAP. Para más información, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html). Cuando esta opción está marcada, se activa la opción **Publicado en WSDL**.

No Explorer, métodos de projeto oferecidos como um Serviço Web recebem um ícone específico.

**Nota:** no es posible publicar un método como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Se o nome do método não estiver de acordo com isso, 4D não atribui a propriedade.

#### Publicado em WSDL

Este atributo só está disponível quando o atributo "Serviço Web" está selecionado. Permite-lhe incluir o método atual no WSDL da aplicação 4D. Para obtener más información al respecto, consulte [Generación del WSDL](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689).

No Explorer, os métodos do projeto que são oferecidos como um serviço da Web e publicados no WSDL recebem um ícone específico.

#### Etiquetas 4D e URLs (4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/transformation-tags.md).

No Explorer, os métodos de projeto com esse atributo recebem um ícone específico.

Por razões de segurança, esta opção está desmarcada por padrão. Cada método que pode ser executado utilizando o URL ou as etiquetas especiais da Web deve ser indicado individualmente.

#### SQL

Quando está marcada, esta opção permite que o método do projeto seja executado pelo motor SQL de 4D. Por padrão, não está selecionado, o que significa que, a menos que explicitamente autorizado, os métodos do projeto 4D são protegidos e não podem ser chamados pelo motor SQL de 4D.

Esta propriedade se aplica a todas as consultas SQL internas e externas --- executadas através do driver ODBC, Código SQL inserido entre o [Begin SQL](../commands/begin-sql)/[End SQL](../commands/end-sql) tags ou o comando [QUERY BY SQL](../commands/query-by-sql).

**Notas:**

- Mesmo que um método tenha o atributo "SQL", os direitos de acesso definidos ao nível das definições da base de dados e das propriedades do método são tidos em conta para a execução do método.
- La función ODBC **SQLProcedure** sólo devuelve los métodos proyecto con el atributo "SQL".

Para más información, consulte [Implementación del motor SQL de 4D](https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html) en el manual SQL de 4D.

#### Servidor REST

*Esta opção está obsoleta. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md).*

### Definição de lotes para atributos de métodos

Usando a caixa de diálogo "Atributos para métodos", você pode modificar um atributo (Invisível, oferecido como um serviço Web, etc.) for all or part of the database project methods in a single operation. Esta caraterística é especialmente útil para modificar os atributos de um grande número de métodos de projeto. Também pode ser utilizado durante o desenvolvimento para aplicar rapidamente atributos comuns a grupos de métodos semelhantes.

Para a definição em lote dos atributos do método:

1. En la página [Métodos](https://doc.4d.com/4Dv20/4D/20.2/Methods-Page.300-6750119.en.html) del Explorador 4D, despliegue el menú de opciones y elija el comando **Modificar atributos globalmente...**. Aparece la caja de diálogo **Atributos de los métodos**.

2. Na área "Nome do método correspondente:", introduza uma string que lhe permita designar os métodos que pretende modificar como um lote.
   A cadeia de caracteres é utilizada como critério de pesquisa para os nomes dos métodos.

Utilize o carácter curinga @ para ajudar a definir grupos de métodos:

- Para designar métodos cujos nomes começam por..., digite @ no final da string. Por ejemplo: `web@`
- Para designar métodos cujos nomes contêm..., digite @ no meio da string. Por ejemplo: `web@write`
- Para designar métodos cujos nomes terminam com..., digite @ no início da string. Por ejemplo: `web@write`
- Para designar todos os métodos, basta escrever @ na área.

**Notas:**

- A pesquisa não tem em conta as maiúsculas e minúsculas.
- Puede introducir varios caracteres @ en la cadena, por ejemplo `dtro_@web@pro.@`

3. En el área "Atributo a modificar", elija un atributo de la lista desplegable y, a continuación, haga clic en el botón radio **True** o **False** correspondiente al valor que debe aplicarse.

**Nota:** si el atributo "Publicado en WSDL" se establece como True, sólo se aplicará a los métodos proyecto que ya contengan el atributo "Ofrecido como servicio web".

4. Haga clic en **Aplicar**. A modificação é aplicada instantaneamente a todos os métodos de projeto designados pela cadeia de caracteres introduzida.


