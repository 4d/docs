---
id: code-overview
title: Methods and classes
---


The 4D code used across your project is written in [methods](../Concepts/methods.md) and [classes](../Concepts/classes.md).

O IDE 4D fornece vários recursos para criar, editar, exportar ou excluir seu código. You will usually use the 4D [code editor](../code-editor/write-class-method.md) to work with your code.


## Criação de métodos

Um método em 4D é armazenado num ficheiro **.4dm** localizado na pasta apropriada da pasta [`/Project/Sources/`](../Project/architecture.md#sources).

É possível criar [vários tipos de métodos](../Concepts/methods.md):

- Todos os tipos de métodos podem ser criados ou abertos a partir da janela **Explorer** (exceto os métodos Objeto que são geridos a partir do [editor de formulários](../FormEditor/formEditor.md)).
- Project methods can also be created or opened from the **File** menu or toolbar (**New/Method...** or **Open/Method...**) or using shortcuts in the [Code editor window](../code-editor/write-class-method.md#shortcuts).
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

É possível importar e exportar um método ou o código de uma classe sob a forma de um ficheiro. These commands are found in the **Method** menu of the [Code editor](../code-editor/write-class-method.md).

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

- in the [Code Editor](../code-editor/write-class-method.md), select the **Method Properties...** command in the **Method** menu,
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

Este atributo é utilizado no âmbito dos componentes. Quando estiver selecionada, indica que o método estará disponível para os componentes quando a aplicação for utilizada como base de dados do anfitrião. Por outro lado, quando a aplicação for utilizada como um componente, o método estará disponível para as bases de dados do anfitrião.

Para saber mais sobre componentes, consulte o capítulo [Desenvolvimento e instalação de componentes 4D](../Extensions/develop-components.md) .

#### Executar no servidor

Este atributo só é levado em consideração para uma aplicação 4D em modo cliente-servidor. Quando esta opção estiver selecionada, o método do projeto é sempre executado no servidor, independentemente da forma como é chamado.

Para mais informações sobre esta opção, consulte [Executar no atributo Servidor](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

### Modo Execução

Esta opção permite-lhe declarar o método elegível para execução em modo preemptivo. It is described in the [Preemptive processes section](../Develop/processes.md#preemptive-processes).

### Disponível através de

Os atributos de disponibilidade especificam os serviços externos que estão autorizados a chamar explicitamente o método.

#### Serviços Web

Este atributo permite-lhe publicar o método atual como um serviço Web acessível através de pedidos SOAP. Para mais informações, consulte o capítulo [Publicação e utilização de serviços Web](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) . Quando esta opção está selecionada, a opção **Published in WSDL** está activada.

No Explorador, os métodos de projeto que são oferecidos como um Serviço Web recebem um ícone específico ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Nota:** Não é possível publicar um método como um serviço Web se o seu nome incluir caracteres que não estejam em conformidade com a nomenclatura XML (por exemplo, contendo espaços). Se o nome do método não estiver de acordo com isso, 4D não atribui a propriedade.

#### Publicado em WSDL

Este atributo só está disponível quando o atributo "Serviço Web" está selecionado. Permite-lhe incluir o método atual no WSDL da aplicação 4D. Para mais informações sobre este assunto, consulte [Geração do WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

No Explorador, os métodos de projeto que são oferecidos como um Serviço Web e publicados em WSDL recebem um ícone específico ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

#### Etiquetas 4D e URLs (4DACTION...)

Esta opção é usada para reforçar a segurança do servidor Web 4D: quando não está marcada, o método do projeto não pode ser executado através de um pedido HTTP que contenha o URL especial [4DACTION](../WebServer/httpRequests.md#4daction) usado para chamar métodos 4D, nem as etiquetas especiais [4DSCRIPT, 4DTEXT e 4DHTML](../Tags/tags.md).

No Explorador, os métodos de projeto com este atributo recebem um ícone específico ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

Por razões de segurança, esta opção está desmarcada por padrão. Cada método que pode ser executado utilizando o URL ou as etiquetas especiais da Web deve ser indicado individualmente.

#### SQL

Quando está marcada, esta opção permite que o método do projeto seja executado pelo motor SQL de 4D. Por padrão, não está selecionado, o que significa que, a menos que explicitamente autorizado, os métodos do projeto 4D são protegidos e não podem ser chamados pelo motor SQL de 4D.

Esta propriedade aplica-se a todas as consultas SQL internas e externas --- executadas através do controlador ODBC, código SQL inserido entre as etiquetas [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  ou o comando [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) .

**Notas:**

-   Mesmo que um método tenha o atributo "SQL", os direitos de acesso definidos ao nível das definições da base de dados e das propriedades do método são tidos em conta para a execução do método.
-   A função ODBC **SQLProcedure** só devolve métodos de projeto com o atributo "SQL".

Para mais informações, consulte [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) no manual 4D SQL.

#### Servidor REST

*Esta opção está obsoleta. O código de chamada através de chamadas REST só é compatível com as funções de classe do modelo de dados [ORDA](../REST/ClassFunctions.md).*

#### Definição de lotes para atributos de métodos

Utilizando a caixa de diálogo "Atributos dos métodos", pode modificar um atributo (Invisível, Oferecido como serviço Web, etc.) para todos ou parte dos métodos do projeto de base de dados numa única operação. Esta caraterística é especialmente útil para modificar os atributos de um grande número de métodos de projeto. Também pode ser utilizado durante o desenvolvimento para aplicar rapidamente atributos comuns a grupos de métodos semelhantes.

Para a definição em lote dos atributos do método:

1.  Na página [Methods](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) do 4D Explorer, expanda o menu de opções, depois escolha o comando **Batch setting of attributes...** . É apresentada a caixa de diálogo **Attributes for methods** .

2.  Na área "Nome do método correspondente:", introduza uma string que lhe permita designar os métodos que pretende modificar como um lote. A cadeia de caracteres é utilizada como critério de pesquisa para os nomes dos métodos.

Utilize o carácter curinga @ para ajudar a definir grupos de métodos:

- Para designar métodos cujos nomes começam por..., digite @ no final da string. Por exemplo: `web@`
- Para designar métodos cujos nomes contêm..., digite @ no meio da string. Por exemplo: `web@write`
- Para designar métodos cujos nomes terminam com..., digite @ no início da string. Por exemplo: `@write`
- Para designar todos os métodos, basta escrever @ na área.

**Notas:**
- A pesquisa não tem em conta as maiúsculas e minúsculas.
- Pode introduzir vários caracteres @ na cadeia, por exemplo `dtro_@web@pro.@`

3.  Na área "Attribute to Modify" (Atributo a modificar), seleccione um atributo na lista pendente e, em seguida, clique no botão de rádio **True** ou **False** correspondente ao valor a aplicar.

**Nota:** Se o atributo "Publicado em WSDL" for definido como Verdadeiro, só será aplicado a métodos de projeto que já contenham o atributo "Oferecido como um serviço Web".

4.  Clicar em **Aplicar**. A modificação é aplicada instantaneamente a todos os métodos de projeto designados pela cadeia de caracteres introduzida.

