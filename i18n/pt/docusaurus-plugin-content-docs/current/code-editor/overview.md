---
id: overview
title: Gerenciamento do código
---


O código 4D utilizado na sua aplicação está escrito nos [métodos ](../Concepts/methods.md) e nas classes[](../Concepts/classes.md).

O IDE 4D fornece vários recursos para criar, editar, exportar ou excluir seu código. Normalmente utiliza o editor de código 4D [](write-class-method.md) para trabalhar com o seu código.


## Criação de métodos

Um método em 4D é armazenado num ficheiro **.4dm** localizado na pasta apropriada da pasta [`/Project/Sources/`](../Project/architecture.md#sources).

É possível criar [vários tipos de métodos](../Concepts/methods.md):

- Todos os tipos de métodos podem ser criados ou abertos a partir da janela **Explorer** (exceto os métodos Objeto que são geridos a partir do [editor de formulários](../FormEditor/formEditor.md)).
- Os métodos projeto também podem ser criados ou abertos a partir do menu **Ficheiro** ou da barra de ferramentas (**Novo/Método...** ou **Abrir/Método...**) ou utilizando atalhos na janela do editor de código [](write-class-method.md#shortcuts).
- Os triggers também podem ser criados ou abertos a partir do editor de Estrutura.
- Os métodos formulário também podem ser criados ou abertos a partir do [editor de formulários](../FormEditor/formEditor.md).

## Criação de classes

Uma classe usuário em 4D é definida por um ficheiro de método específico (**.4dm**), armazenado na pasta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). O nome do arquivo é o nome da classe.

Pode criar um ficheiro de classe a partir do menu ou da barra de ferramentas **Ficheiro** (**Nova/Classe...**) ou na página **Métodos** da janela **Explorer**.

Para mais informações, consulte a secção [Classes](../Concepts/classes.md).


## Excluir os métodos ou as classes

Para eliminar um método ou classe existente, pode:

- no seu disco, remova o ficheiro *.4dm* da pasta "Sources",
- no Explorador 4D, selecionar o método e clicar em ![](../assets/en/Users/MinussNew.png) ou escolher **Mover para Lixo** a partir do menu contextual.

> Para eliminar um método de objeto, selecione **Excluir o método objeto** no [editor de formulários](../FormEditor/formEditor.md) (menu **Objeto** ou menu contextual).


## Importação e exportação de código

É possível importar e exportar um método ou o código de uma classe sob a forma de um ficheiro. Estes comandos encontram-se no menu **Método** do editor de código.

- Quando seleciona o comando **Exportar o método...**, aparece uma caixa de diálogo padrão para guardar ficheiros, permitindo-lhe escolher o nome, a localização e o formato do ficheiro de exportação (ver abaixo). Tal como acontece com a impressão, a exportação não tem em conta o estado colapsado das estruturas de código e todo o código é exportado.
- Quando seleciona o comando **Importar o método...**, aparece uma caixa de diálogo padrão de abertura de ficheiros, que lhe permite designar o ficheiro a importar. A importação substitui o texto selecionado no método. Para substituir um método existente por um método importado, selecionar todo o conteúdo do método antes de efetuar a importação.

A função de importação/exportação é multiplataforma: um método exportado para Mac OS pode ser importado para Windows e vice-versa; 4D lida com a conversão de caracteres quando necessário.

4D pode exportar e importar métodos em dois formatos:

- Método 4D (extensão *.c4d*): neste formato, os métodos são exportados de forma codificada. Os nomes dos objectos são tokenizados. Este formato é utilizado em particular para o intercâmbio de métodos entre aplicações 4D e plug-ins em diferentes línguas. Por outro lado, não é possível visualizá-los num editor de texto.
- Texto (extensão *.txt*): neste formato, os métodos são exportados apenas sob a forma de texto. Neste caso, os métodos podem ser lidos utilizando um editor de texto normal ou uma ferramenta de controlo da fonte.


## Propriedades do método projeto

Após criar um método projeto, pode mudar-lhe o nome e modificar as suas propriedades. As propriedades dos métodos projeto referem-se principalmente às suas condições de acesso e segurança (acesso de usuários, servidores integrados ou serviços), bem como ao seu modo de execução.

Os outros tipos de métodos não têm propriedades específicas. As suas propriedades estão relacionadas com as dos objetos a que estão ligados.

Para exibir a caixa de diálogo **Propriedades do método** para um método projeto, é possível:

- no [editor de código](write-class-method.md), selecione o comando **Propriedades do método...** no menu **Método**,
- ou na página **Métodos** do Explorador, **clique com o botão direito do rato** no método projeto e selecione **Propriedades do método...** no menu contextual ou no menu de opções.


> Uma função de definição de parâmetros permite modificar uma propriedade para todos ou parte dos métodos do projeto de base de dados numa única operação (ver [Modificar atributos globalmente](#batch-setting-for-method-attributes)).

### Nome

É possível alterar o nome de um método projeto na área **Nome** da janela **Propriedades do método** ou no Explorer.

O novo nome deve estar em conformidade com as regras de nomeação 4D (ver [Identificadores](../Concepts/identifiers.md)). Se um método com o mesmo nome já existe, 4D mostra uma mensagem dizendo que o nome do método já foi usado. Se necessário, 4D ordena a lista de métodos novamente.

:::caution

Alterar o nome de um método já utilizado na base de dados pode invalidar quaisquer métodos ou fórmulas que utilizem o nome do método antigo e arrisca perturbar o funcionamento da aplicação. É possível renomear o método manualmente, mas recomenda-se vivamente a utilização da função de renomeação para métodos projeto, descrita em [Renomear](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). Com esta função, é possível atualizar automaticamente o nome sempre que o método for chamado em todo o ambiente de Desenho.

Com 4D Server, o nome do método é alterado no servidor quando termina de o editar. Se mais do que um usuário estiver a modificar o nome do método em simultâneo, o nome final do método será o nome especificado pelo último usuário a terminar a edição. Pode ser necessário especificar um proprietário do método para que apenas determinados usuários possam alterar o nome do método

:::

:::info

Os métodos base de dados não podem ser renomeados. O mesmo se aplica aos triggers, métodos formulário e métodos objeto, que estão ligados a objetos e recebem os seus nomes do objeto em questão.

:::

### Atributos

É possível controlar como os métodos projeto são utilizados e/ou chamados em diferentes contextos utilizando atributos. Note-se que é possível definir atributos para toda uma seleção de métodos projeto utilizando o Explorador (ver secção seguinte).

#### Invisível

Se não quiser que os usuários possam executar um método projeto utilizando o comando **Método...** do menu **Execução**, pode torná-lo invisível assinalando esta opção. Um método invisível não aparece na caixa de diálogo de execução do método.

Quando se torna invisível um método projeto, este continua a estar disponível para os programadores da base de dados. Permanece listado na lista de métodos do Explorador e do Editor de Código.

#### Partilhada pelos componentes e pela base de dados host

This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases.

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

#### Executar no Servidor

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called.

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

### Modo Execução

This option allows you to declare the method eligible for execution in preemptive mode. By default, 4D executes all the project methods of your applications in cooperative mode.

If you want to benefit from the preemptive mode feature, you must explicitly declare all the methods that you want to be started in preemptive mode. The compiler will then check that these methods are actually thread-safe.

**Note:** Execution in preemptive mode is only available in compiled mode. For more information, refer to the [Preemptive 4D processes](https://doc.4d.com/4Dv19R6/4D/19-R6/Preemptive-4D-processes.300-5911166.en.html) section.

São fornecidas as seguintes opções:

-   **Can be run in preemptive processes**: By checking this option, you declare that the method is capable of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. The "preemptive" property of the method is set to "capable".

When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.

If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a specific context (see [When is a process started preemptively?](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148)).

-   **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".

When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.

-   **Indifferent**(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. The "preemptive" property of the method is set to "indifferent".

When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No error related to preemptive execution is returned. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the [New process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html) command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.

***Particular case*:** If the method has also the [**Shared by components and host database**](shared-by-components-and-host-database) property, setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**.

### Disponível através de

Availability attributes specify the external services which are allowed to explicitly call the method.

#### Serviços Web

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

#### Publicado em WSDL

This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

#### Etiquetas 4D e URLs (4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/tags.md).

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.

#### SQL

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D.

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Notas:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

#### Servidor REST

*This option is deprecated. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md).*

#### Batch setting for method attributes

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.

Para modificar os atributos do método globalmente:

1.  On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.

2.  In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch. The character string is used as a search criterion for the method names.

Utilize o carácter curinga @ para ajudar a definir grupos de métodos:

- Para designar métodos cujos nomes começam por..., digite @ no final da string. Por exemplo: `web@`
- Para designar métodos cujos nomes contêm..., digite @ no meio da string. Por exemplo: `web@write`
- Para designar métodos cujos nomes terminam com..., digite @ no início da string. Por exemplo: `@write`
- Para designar todos os métodos, basta escrever @ na área.

**Notas:**
- A pesquisa não tem em conta as maiúsculas e minúsculas.
- You can enter several @ characters in the string, for example `dtro_@web@pro.@`

3.  In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied.

**Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.

4.  Clicar em **Aplicar**. The modification is applied instantly to all the project methods designated by the character string entered.

