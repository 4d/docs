---
id: code-overview
title: Métodos e classes
---

El código 4D utilizado en todo el proyecto está escrito en [métodos](../Concepts/methods.md) y [clases](../Concepts/classes.md).

O IDE 4D fornece vários recursos para criar, editar, exportar ou excluir seu código. Normalmente, você usará o [editor de código](../code-editor/write-class-method.md) 4D incluído para trabalhar com seu código. You can also use other editors such as **VS Code**, for which the [4D-Analyzer extension](https://github.com/4d/4D-Analyzer-VSCode) is available.

## Criação de métodos

Um método em 4D é armazenado em um arquivo **.4dm** localizado na pasta apropriada da pasta [`/Project/Sources/`](../Project/architecture.md#sources).

Puede crear [varios tipos de métodos](../Concepts/methods.md):

- Todos los tipos de métodos pueden crearse o abrirse desde la ventana del **Explorador** (excepto los métodos Objeto que se gestionan desde el [editor de formularios](../FormEditor/formEditor.md)).
- Los métodos proyecto también pueden crearse o abrirse desde el menú **Archivo** o la barra de herramientas (**Nuevo/Método...** o **Abrir/Método...**) o utilizando los accesos directos de la ventana del [editor de código](../code-editor/write-class-method
- Os triggers também podem ser criados ou abertos a partir do editor de Estrutura.
- Los métodos formulario también pueden crearse o abrirse desde el [editor de formularios](../FormEditor/formEditor.md).

## Criação de classes

Uma classe usuário no 4D é definida por um arquivo de método específico (**.4dm**), armazenado na pasta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). O nome do arquivo é o nome da classe.

Puede crear un archivo de clase desde el menú **Archivo** o la barra de herramientas (**Nuevo/Clase...**) o en la página **Métodos** de la ventana **Explorador**.

Para más información, consulte la sección [Clases](../Concepts/classes.md).

## Excluir os métodos ou as classes

Para eliminar um método ou classe existente, pode:

- en su disco, elimine el archivo *.4dm* de la carpeta "Sources",
- in the 4D Explorer, select the method or class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

> Para eliminar un método objeto, seleccione **Borrar el método de objeto** en el [editor de formularios](../FormEditor/formEditor.md) (menú **Objeto** o menú contextual).

## Importação e exportação de código

É possível importar e exportar um método ou o código de uma classe sob a forma de um ficheiro. Estos comandos se encuentran en el menú **Método** del editor de código .

- Cuando se selecciona el comando **Exportar el método...**, aparece una caja de diálogo estándar para guardar archivos, que permite elegir el nombre, la ubicación y el formato del archivo de exportación (ver abajo). Tal como acontece com a impressão, a exportação não tem em conta o estado colapsado das estruturas de código e todo o código é exportado.
- Cuando se selecciona el comando **Importar el método...**, aparece una caja de diálogo estándar de apertura de archivos que permite designar el archivo a importar. A importação substitui o texto selecionado no método. Para substituir um método existente por um método importado, selecionar todo o conteúdo do método antes de efetuar a importação.

A função de importação/exportação é multiplataforma: um método exportado para Mac OS pode ser importado para Windows e vice-versa; 4D lida com a conversão de caracteres quando necessário.

4D pode exportar e importar métodos em dois formatos:

- Método 4D (extensión *.c4d*): en este formato, los métodos se exportan codificados. Os nomes dos objectos são tokenizados. Este formato é utilizado em particular para o intercâmbio de métodos entre aplicações 4D e plug-ins em diferentes línguas. Por outro lado, não é possível visualizá-los num editor de texto.
- Texto (extensión *.txt*): en este formato, los métodos se exportan en forma de texto. Neste caso, os métodos podem ser lidos utilizando um editor de texto normal ou uma ferramenta de controlo da fonte.

## Propriedades do método projeto

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

Alterar o nome de um método já utilizado na base de dados pode invalidar quaisquer métodos ou fórmulas que utilizem o nome do método antigo e arrisca perturbar o funcionamento da aplicação. Puede cambiar el nombre del método manualmente, pero se recomienda utilizar la función de cambio de nombre de los métodos proyecto, descrita en [Renombrar](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). Com esta função, é possível atualizar automaticamente o nome sempre que o método for chamado em todo o ambiente de Desenho.

Com 4D Server, o nome do método é alterado no servidor quando termina de o editar. Se mais do que um usuário estiver a modificar o nome do método em simultâneo, o nome final do método será o nome especificado pelo último usuário a terminar a edição. Pode ser necessário especificar um proprietário do método para que apenas determinados usuários possam alterar o nome do método

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

Para más información sobre esta opción, consulte [Atributo Ejecutar en el servidor](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

### Modo Execução

Esta opção permite-lhe declarar o método elegível para execução em modo preemptivo. Se describe en la [sección Procesos apropiativos](../Develop/processes.md#preemptive-processes).

### Disponível através de

Os atributos de disponibilidade especificam os serviços externos que estão autorizados a chamar explicitamente o método.

#### Serviços Web

Este atributo permite-lhe publicar o método atual como um serviço Web acessível através de pedidos SOAP. Para más información, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html). Cuando esta opción está marcada, se activa la opción **Publicado en WSDL**.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Nota:** no es posible publicar un método como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Se o nome do método não estiver de acordo com isso, 4D não atribui a propriedade.

#### Publicado em WSDL

Este atributo só está disponível quando o atributo "Serviço Web" está selecionado. Permite-lhe incluir o método atual no WSDL da aplicação 4D. Para obtener más información al respecto, consulte [Generación del WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

#### Etiquetas 4D e URLs (4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/transformation-tags.md).

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

Por razões de segurança, esta opção está desmarcada por padrão. Cada método que pode ser executado utilizando o URL ou as etiquetas especiais da Web deve ser indicado individualmente.

#### SQL

Quando está marcada, esta opção permite que o método do projeto seja executado pelo motor SQL de 4D. Por padrão, não está selecionado, o que significa que, a menos que explicitamente autorizado, os métodos do projeto 4D são protegidos e não podem ser chamados pelo motor SQL de 4D.

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Notas:**

- Mesmo que um método tenha o atributo "SQL", os direitos de acesso definidos ao nível das definições da base de dados e das propriedades do método são tidos em conta para a execução do método.
- La función ODBC **SQLProcedure** sólo devuelve los métodos proyecto con el atributo "SQL".

Para más información, consulte [Implementación del motor SQL de 4D](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) en el manual SQL de 4D.

#### Servidor REST

*Esta opção está obsoleta. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md).*

#### Definição de lotes para atributos de métodos

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. Esta caraterística é especialmente útil para modificar os atributos de um grande número de métodos de projeto. Também pode ser utilizado durante o desenvolvimento para aplicar rapidamente atributos comuns a grupos de métodos semelhantes.

Para a definição em lote dos atributos do método:

1. En la página [Métodos](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) del Explorador 4D, despliegue el menú de opciones y elija el comando **Modificar atributos globalmente...**. Aparece la caja de diálogo **Atributos de los métodos**.

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
