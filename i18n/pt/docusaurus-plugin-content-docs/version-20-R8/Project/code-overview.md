---
id: code-overview
title: Métodos e classes
---

O código 4D usado em seu projeto está escrito em [métodos](../Concepts/methods.md) e [classes](../Concepts/classes.md).

O IDE 4D fornece vários recursos para criar, editar, exportar ou excluir seu código. Normalmente, você usará o [editor de código](../code-editor/write-class-method.md) 4D incluído para trabalhar com seu código. Você também pode usar outros editores, como **VS Code**, para o qual a [extensão 4D-Analyzer](https://github.com/4d/4D-Analyzer-VSCode) está disponível.

## Criação de métodos

Um método em 4D é armazenado em um arquivo **.4dm** localizado na pasta apropriada da pasta [`/Project/Sources/`](../Project/architecture.md#sources).

Você pode criar [vários tipos de métodos](../Concepts/methods.md):

- Todos os tipos de métodos podem ser criados ou abertos na janela **Explorer** (exceto os métodos Object, que são gerenciados no [Editor de formulários](../FormEditor/formEditor.md)).
- Os métodos projeto também podem ser criados ou abertos no menu **File** ou na barra de ferramentas (\*\*Novo/Método.. \*\* ou **Abrir/Método...**) ou usando atalhos na [janela do editor de código](../code-editor/write-class-method.md#shortcuts).
- Os triggers também podem ser criados ou abertos a partir do editor de Estrutura.
- Os métodos formulário também podem ser criados ou abertos no [Editor de formulários](../FormEditor/formEditor.md).

## Criação de classes

Uma classe usuário no 4D é definida por um arquivo de método específico (**.4dm**), armazenado na pasta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). O nome do arquivo é o nome da classe.

Você pode criar um arquivo de classe a partir do menu **Arquivo** ou da barra de ferramentas (**Novo/Classe...**) ou na página **Métodos** da janela **Explorador**.

Para obter mais informações, consulte a seção [Classes](../Concepts/classes.md).

## Excluir os métodos ou as classes

Para excluir um método ou classe existente, você pode:

- em seu disco, remova o arquivo *.4dm* da pasta "Sources",
- no Explorador 4D, selecione o método ou classe e clique ![](../assets/en/Users/MinussNew.png) ou escolha **Mover para Lixo** no menu contextual.

> Para excluir um método objeto, escolha **Limpar método de objeto** no [Editor de formulários](../FormEditor/formEditor.md) (menu **Objeto** ou menu contextual).

## Importação e exportação de código

É possível importar e exportar um método ou o código de uma classe sob a forma de um ficheiro. Esses comandos podem ser encontrados no menu **Método** do [Editor de código](../code-editor/write-class-method.md).

- Quando você selecionar o \*\*método de exportação... \* comando, uma caixa de diálogo de salvamento de arquivos padrão aparece, permitindo que você escolha o nome, o local e o formato do arquivo exportado (veja abaixo). Tal como acontece com a impressão, a exportação não tem em conta o estado colapsado das estruturas de código e todo o código é exportado.
- Quando você selecionar o comando **Import Method...**, uma caixa de diálogo padrão de abertura de arquivo é exibida, permitindo que você designe o arquivo a ser importado. A importação substitui o texto selecionado no método. Para substituir um método existente por um método importado, selecionar todo o conteúdo do método antes de efetuar a importação.

A função de importação/exportação é multiplataforma: um método exportado para Mac OS pode ser importado para Windows e vice-versa; 4D lida com a conversão de caracteres quando necessário.

4D pode exportar e importar métodos em dois formatos:

- Método 4D (extensão *.c4d*): Neste formato, os métodos são exportados no formulário codificado. Os nomes dos objectos são tokenizados. Este formato é utilizado em particular para o intercâmbio de métodos entre aplicações 4D e plug-ins em diferentes línguas. Por outro lado, não é possível visualizá-los num editor de texto.
- Texto (extensão *.txt*): Nesse formato, os métodos são exportados em formato somente de texto. Neste caso, os métodos podem ser lidos utilizando um editor de texto normal ou uma ferramenta de controlo da fonte.

## Propriedades do método projeto

Após criar um método projeto, pode mudar-lhe o nome e modificar as suas propriedades. As propriedades dos métodos projeto referem-se principalmente às suas condições de acesso e segurança (acesso de usuários, servidores integrados ou serviços), bem como ao seu modo de execução.

Os outros tipos de métodos não têm propriedades específicas. As suas propriedades estão relacionadas com as dos objetos a que estão ligados.

Para exibir a caixa de diálogo **Method Properties** para um método de projeto, você pode:

- no [Editor de código](../code-editor/write-class-method.md), selecione o comando **Propriedades do método...** no menu **Método**,
- ou na página **Métodos** do Explorer, clique com o botão direito\*\* no método do projeto e selecione **Method Properties...** no menu de contexto ou no menu de opções.

> Uma função de configuração em lote permite modificar uma propriedade para todos ou parte dos métodos do projeto do banco de dados em uma única operação (veja [configuração em lote para atributos do método](#batch-setting-for-method-attributes)).

### Nome

Você pode alterar o nome de um método do projeto na área de **Nome** da janela do **Método Propriedades** ou no Explorer.

O novo nome deve estar em conformidade com as regras de nomeação 4D (consulte [Identifiers](../Concepts/identifiers.md)). Se um método com o mesmo nome já existir, 4D mostra uma mensagem dizendo que o nome do método já foi usado. Se necessário, 4D ordena a lista de métodos novamente.

:::caution

Alterar o nome de um método já utilizado na base de dados pode invalidar quaisquer métodos ou fórmulas que utilizem o nome do método antigo e arrisca perturbar o funcionamento da aplicação. Você pode renomear o método manualmente, mas é altamente recomendável usar a função de renomeação para métodos de projeto descritos em [Renaming](https://doc.4d.com/4Dv20/4D/20.2/Renaming.300-6750165.en.html). Com esta função, é possível atualizar automaticamente o nome sempre que o método for chamado em todo o ambiente de Desenho.

Com 4D Server, o nome do método é alterado no servidor quando termina de o editar. Se mais do que um usuário estiver modificando o nome do método em simultâneo, o nome final do método será o nome especificado pelo último usuário a terminar a edição. Pode ser necessário especificar um proprietário do método para que apenas determinados usuários possam alterar o nome do método

:::

:::info

Os métodos base de dados não podem ser renomeados. O mesmo se aplica aos triggers, métodos formulário e métodos objeto, que estão ligados a objetos e recebem os seus nomes do objeto em questão.

:::

### Atributos

É possível controlar como os métodos projeto são utilizados e/ou chamados em diferentes contextos utilizando atributos. Note-se que é possível definir atributos para toda uma seleção de métodos projeto utilizando o Explorador (ver secção seguinte).

#### Invisível

Se você não quiser que os usuários possam executar um método de projeto usando o comando **Método...** do menu **Execução**, poderá torná-lo invisível marcando essa opção. Um método invisível não aparece na caixa de diálogo de execução do método.

Quando se torna invisível um método projeto, este continua a estar disponível para os programadores da base de dados. Permanece listado na lista de métodos do Explorador e do Editor de Código.

#### Partilhada pelos componentes e pela base de dados host

Este atributo é utilizado no âmbito dos componentes. Quando estiver selecionada, indica que o método estará disponível para os componentes quando a aplicação for utilizada como base de dados do anfitrião. Por outro lado, quando a aplicação for utilizada como um componente, o método estará disponível para as bases de dados do anfitrião.

Para obter mais informações sobre os componentes, consulte o capítulo [Desenvolvendo e instalando componentes 4D](../Extensions/develop-components.md).

#### Executar no servidor

Este atributo só é levado em consideração para uma aplicação 4D em modo cliente-servidor. Quando esta opção estiver selecionada, o método do projeto é sempre executado no servidor, independentemente da forma como é chamado.

Para mais informações sobre esta opção, consulte [Executar no atributo Servidor](https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html).

### Modo Execução

Esta opção permite-lhe declarar o método elegível para execução em modo preemptivo. Se describe en la [sección Procesos apropiativos](../Develop/preemptive.md).

### Disponível através de

Os atributos de disponibilidade especificam os serviços externos que estão autorizados a chamar explicitamente o método.

#### Serviços Web

Este atributo permite-lhe publicar o método atual como um serviço Web acessível através de pedidos SOAP. Para obter mais informações, consulte o capítulo [Publicação e uso de serviços da Web](https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html). Quando esta opção estiver marcada, a opção **Publicada no WSDL** está habilitada.

No Explorer, métodos de projeto oferecidos como um Serviço Web recebem um ícone específico.

**Nota:** você não pode publicar um método como um serviço da Web se seu nome incluir caracteres que não estejam em conformidade com a nomenclatura XML (por exemplo, contendo espaços). Se o nome do método não estiver de acordo com isso, 4D não atribui a propriedade.

#### Publicado em WSDL

Este atributo só está disponível quando o atributo "Serviço Web" está selecionado. Permite-lhe incluir o método atual no WSDL da aplicação 4D. Para mais informações sobre isso, consulte [Geração do WSDL](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689).

No Explorer, os métodos do projeto que são oferecidos como um serviço da Web e publicados no WSDL recebem um ícone específico.

#### Etiquetas 4D e URLs (4DACTION...)

Esta opção é usada para reforçar a segurança do servidor Web 4D: quando não está marcado, o método do projeto não pode ser executado através de uma solicitação HTTP contendo a [URL especial 4DACTION](../WebServer/httpRequests.md#4daction) usada para chamar métodos 4D, nem o [4DSCRIPT, 4DTEXT e 4DHTML tags](../Tags/transformation-tags.md).

No Explorer, os métodos de projeto com esse atributo recebem um ícone específico.

Por razões de segurança, esta opção está desmarcada por padrão. Cada método que pode ser executado utilizando o URL ou as etiquetas especiais da Web deve ser indicado individualmente.

#### SQL

Quando estiver marcada, esta opção permite que o método do projeto seja executado pelo motor SQL de 4D. Por padrão, não está selecionado, o que significa que, a menos que explicitamente autorizado, os métodos do projeto 4D são protegidos e não podem ser chamados pelo motor SQL de 4D.

Esta propriedade se aplica a todas as consultas SQL internas e externas --- executadas através do driver ODBC, Código SQL inserido entre o [Begin SQL](../commands-legacy/begin-sql.md)/[End SQL](../commands-legacy/end-sql.md) tags ou o comando [QUERY BY SQL](../commands-legacy/query-by-sql.md).

**Notas:**

- Mesmo que um método tenha o atributo "SQL", os direitos de acesso definidos ao nível das definições da base de dados e das propriedades do método são tidos em conta para a execução do método.
- A função ODBC **SQLProcedure** retorna apenas os métodos do projeto com o atributo "SQL".

Para obter mais informações, consulte [4D SQL engine implementação](https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html) no manual do SQL 4D.

#### Servidor REST

*Esta opção está obsoleta. O código de chamada por meio de chamadas REST só é compatível com [funções de classe de modelo de dados ORDA](../REST/ClassFunctions.md).*

#### Definição de lotes para atributos de métodos

Usando a caixa de diálogo "Atributos para métodos", você pode modificar um atributo (Invisível, oferecido como um serviço Web, etc.) para todos ou parte dos métodos de projeto do banco de dados em uma única operação. Esta caraterística é especialmente útil para modificar os atributos de um grande número de métodos de projeto. Também pode ser utilizado durante o desenvolvimento para aplicar rapidamente atributos comuns a grupos de métodos semelhantes.

Para a definição em lote dos atributos do método:

1. No [Guia de Métodos da Página](https://doc.4d.com/4Dv20/4D/20.2/Methods-Page.300-6750119.en.html) do Explorador 4D, expanda o menu de opções e escolha o comando **Ajuste em lote de atributos...**. A caixa de diálogo **Atributos para métodos** é exibida.

2. Na área "Nome do método correspondente:", introduza uma string que lhe permita designar os métodos que pretende modificar como um lote.
  A string de caracteres é utilizada como critério de pesquisa para os nomes dos métodos.

Utilize o carácter curinga @ para ajudar a definir grupos de métodos:

- Para designar métodos cujos nomes começam por..., digite @ no final da string. Por ejemplo: `web@`
- Para designar métodos cujos nomes contêm..., digite @ no meio da string. Por ejemplo: `web@write`
- Para designar métodos cujos nomes terminam com..., digite @ no início da string. Por ejemplo: `web@write`
- Para designar todos os métodos, basta escrever @ na área.

**Notas:**

- A pesquisa não tem em conta as maiúsculas e minúsculas.
- Você pode inserir vários caracteres @ na string, por exemplo, `dtro_@web@pro.@`

3. Na área "Attribute to Modify" (Atributo a ser modificado), escolha um atributo na lista suspensa e, em seguida, clique no botão de rádio **True** ou **False** correspondente ao valor a ser aplicado.

**Nota:** se o atributo "Publicado no WSDL" estiver definido como True, ele só será aplicado aos métodos de projeto que já contenham o atributo "Oferecido como um Serviço Web".

4. Clique em **Aplicar**. A modificação é aplicada instantaneamente a todos os métodos de projeto designados pela cadeia de caracteres introduzida.

