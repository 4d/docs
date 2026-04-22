---
id: clientServer
title: Gestão Cliente/Servidor
---

As aplicações 4D desktop podem ser utilizadas numa configuração Cliente/Servidor, quer como aplicações cliente/servidor fundidas, quer como projectos remotos.

- Os **aplicativos cliente/servidor mesclados** são gerados pelo [Gerenciador de aplicativos de compilação] (building.md#clientserver-page). São utilizados para implementações de aplicações.

- **Projetos remotos** são arquivos [.4DProject](Project/architecture.md) abertos pelo 4D Server e acessados com o 4D em modo remoto. O servidor envia uma versão .4dz do projeto ([formato comprimido](building.md#build-compiled-structure)) para o 4D remoto, assim os arquivos de estrutura são apenas de leitura. Esta configuração é normalmente utilizada para testar aplicações.

![](../assets/en/getStart/localremote.png)

> Conectar a um projeto remoto da **mesma máquina que o 4D Server** permite modificar os arquivos do projeto. Esta [funcionalidade específica](#using-4d-and-4d-server-on-the-same-machine) permite desenvolver uma aplicação cliente/servidor no mesmo contexto do contexto de implantação.

## Abrir uma aplicação cliente/servidor fundida

Uma aplicação cliente/servidor mesclada é personalizada e seu início é simplificado:

- Para iniciar a parte do servidor, o usuário simplesmente clica duas vezes no aplicativo do servidor. The database does not need to be selected.
- Para iniciar a parte do cliente, o usuário simplesmente clica duas vezes no aplicativo cliente, que se conecta diretamente ao aplicativo do servidor.

Esses princípios são detalhados na página [Criar Aplicativo](building.md#what-is-a-clientserver-application).

## Abrir um projecto remoto

A primeira vez que se liga a um projecto 4D Server através de um 4D remoto, normalmente utilizará o diálogo de ligação padrão. Em seguida, você poderá se conectar diretamente usando o menu **Abrir Projetos Recentes** ou um arquivo de atalho 4DLink.

Para conectar remotamente a um projeto 4D Server:

1. Faça uma das seguintes opções:
   - Selecione **Conectar ao 4D Server** no diálogo Assistente de Boas Vindas
   - Selecione **Abrir/Projeto Remoto...** no menu **Arquivo** ou no botão de ferramentas **Abrir**.

Aparece o diálogo de ligação do 4D Server. Este diálogo possui três guias: **Recente**, **Disponível** e **Personalizado**.

Se o 4D Server estiver conectado à mesma sub-rede que o 4D remoto, selecione **Disponível**. O servidor 4D inclui um sistema de transmissão integrado que, por padrão, publica o nome dos projetos 4D Server disponíveis na rede. A lista é classificada por ordem de aparecimento e atualizada dinamicamente.

![](../assets/en/getStart/serverConnect.png)

Para conectar a um servidor da lista, clique duas vezes no seu nome ou selecione-o e clique no botão **OK**.

Se o projeto publicado não for exibido na lista **Disponível**, selecione **Personalizado**. A página personalizada permite que você se conecte a um servidor publicado na rede usando seu endereço de rede e atribuindo-lhe um nome personalizado.

![](../assets/en/Desktop/serverConnect2.png)

- **Nome do projeto**: Define o nome local do projeto no servidor 4D. Este nome será usado na página **Recente** quando referente ao projeto.
- **Endereço de rede**: O endereço IP da máquina onde o 4D Server foi lançado.
  - Se dois servidores forem executados simultaneamente na mesma máquina, o endereço IP deve ser seguido por dois pontos e o número da porta, por exemplo: `192.168.92.104:19814`.
  - Por padrão, a porta de publicação de um 4D Server é 19813. Este número pode ser modificado nas definições do Projecto.

> The [**Activate development mode**](#development-mode) option opens the remote connection in a special read/write mode and requires to access the project folder from the remote 4D.

Uma vez que esta página atribui um servidor, ao clicar no botão **OK**, você poderá se conectar ao servidor.

Uma vez que a conexão com o servidor tenha sido estabelecida, o projeto remoto será listado na guia **Recentes**.

### Atualizando arquivos do projeto no servidor

O 4D Server cria e envia automaticamente para as máquinas remotas uma versão [.4dz](building.md#build-compiled-structure) do arquivo de projeto *.4DProject* (não compactado) em modo interpretado.

- Uma versão .4dz atualizada do projeto é automaticamente produzida quando necessário, *ou seja*, quando o projeto foi modificado e recarregado pelo 4D Server. O projeto foi recarregado:
  - automaticamente quando a janela de aplicação do Servidor 4D chega à frente do sistema operacional ou quando o aplicativo 4D na mesma máquina salva uma modificação (veja abaixo).
  - when the [`RELOAD PROJECT`](../commands/reload-project) command is executed. Chamar este comando é necessário, por exemplo, quando você puxou uma nova versão do projeto a partir da plataforma de controle de origem.

### Atualizando arquivos do projeto em máquinas remotas

Quando uma atualização . versão dz do projeto foi produzida em 4D Server, máquinas remotas 4D conectadas devem sair e reconectar ao 4D Server para se beneficiar da versão atualizada.

## Utilização de 4D e 4D Server na mesma máquina

Quando o 4D se conectar a um Servidor 4D na mesma máquina, a aplicação se comporta como 4D em modo de usuário único e o ambiente de design permite que você edite os arquivos do projeto. Esse recurso permite que você desenvolva uma aplicação de cliente/servidor no mesmo contexto que o contexto de implantação.

> When 4D connects to a 4D Server on the same machine, the **development mode** is automatically activated, whatever the [Development mode](#development-mode) status.

Cada vez que o 4D realiza uma ação **Salvar tudo** no ambiente de design (explicitamente no menu **Arquivo** ou implicitamente ao alternar para o modo de aplicativo, por exemplo), o 4D Server recarrega sincronizadamente os arquivos do projeto. O 4D espera o servidor 4D terminar de recarregar os arquivos do projeto antes de continuar.

No entanto, você precisa prestar atenção às seguintes diferenças de comportamento em comparação com [a arquitetura padrão do projeto](Project/architecture.md):

- the userPreferences.\{username\} folder used by 4D is not the same folder used by 4D Server in the project folder. the userPreferences.\{username\} folder used by 4D is not the same folder used by 4D Server in the project folder.
- a pasta usada pelo 4D para dados derivados não é a pasta chamada "DerivedData" na pasta do projeto. Em vez disso, é uma pasta dedicada chamada "DerivedDataRemote" localizada na pasta do sistema do projeto.
- O arquivo catalog.4DCatalog não é editado pela 4D, mas sim pelo 4D Server. As informações do catálogo são sincronizadas através de pedidos cliente/servidor
- o arquivo directory.json não é editado por 4D, mas pelo servidor 4D. As informações do diretório são sincronizadas através de pedidos cliente/servidor
- 4D utiliza os seus próprios componentes internos e plug-ins em vez dos do 4D Server.

> Não é recomendado instalar plug-ins ou componentes no nível da aplicação 4D, ou 4D Server.

## Development mode

The **Development mode** in 4D Server is a special project opening mode that allows read/write access for connected remote 4D applications. The project must be available in [**interpreted** mode](../Concepts/interpreted.md).

This mode allows one or more developers to work simultaneously on the same project in Design environment. When a project is opened in **Development mode**:

- Project files are available in read/write so that you can edit methods, forms, etc.
- Several remote 4D can concurrently open the same interpreted project files and edit them. An automatic locking system prevents from concurrent access to the same resource.
- Modifications are made available to all remote developers. Note however that there is no automatic push to remote developers, they need to refresh to get latest versions of files (a refresh is done each time the developer switches from design mode to application mode for example, or selects **Save all** from the **File** menu).

To use this mode, select the **Activate development mode** option in the [connection dialog box](#opening-a-remote-project) from your remote 4D. You are prompted to **Select 4D project file**: you need to select the [.project file](../Project/architecture.md#applicationname4dproject-file) that 4D Server has opened. If you select a different file, an alert dialog box warns you that the development mode is not available. It means that the remote 4D must have access to the project folder over the network (the whole project folder must be shared, i.e. the root folder of the project).

:::caution

For performance reasons with this configuration, it is strongly recommended that the project folder be stored on a dedicated file server (e.g. a NAS) on a local network.

:::

:::note

When both the server and the remote 4D are on the same machine, [additional rules applies](#using-4d-and-4d-server-on-the-same-machine).

:::

Here is an overview of the development mode architecture:

![](../assets/en/Desktop/develop-mode.png)

:::note Compatibidade

This feature is designed for small-size development teams who are used to work on binary databases and want to benefit from project features while maintaining their current organisation. However, for multi-user development on 4D projects, we recommend using a standard architecture where developers work on their machine and manage their work using source control repository tools (Git, SVN, etc.). This organisation provides a great flexibility by allowing developers to work on different branches, and compare, merge, or revert modifications.

:::

:::tip Related blog post

[Developing Concurrently on 4D Server in Project Mode](https://blog.4d.com/developing-concurrently-on-4d-server-in-project-mode/)

:::

## Code execution location

In a client/server application, it is important to know where your code will be actually executed: **server-side** or **client-side**. Execution location is crucial when you want to implement user session-related code, share information between processes, access data, etc.

The following table summarizes where the code is executed by default and how to switch its execution location (if allowed). Note that **local** means that the code will be executed on the machine from where it is actually called.

| Code                                                                                                                                                                                                                                                                                                            | Default execution | How to switch                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ORDA data model functions](../ORDA/ordaClasses.md)                                                                                                                                                                                                                                                             | server            | use `local` keyword in function definition                                                                                                                                                                                                       |
| ORDA computed attribute functions [`get()`](../ORDA/ordaClasses.md#function-get-attributename), [`set()`](../ORDA/ordaClasses.md#function-set-attributename)                                                                                                                                                    | server            | use `local` keyword in function definition                                                                                                                                                                                                       |
| ORDA computed attribute functions [`query()`](../ORDA/ordaClasses.md#function-query-attributename), [`orderBy()`](../ORDA/ordaClasses.md#function-orderby-attributename)                                                                                                                                        | server            | n/a                                                                                                                                                                                                                                              |
| ORDA event functions [(general)](../ORDA/orda-events.md)                                                                                                                                                                                                                                     | server            | n/a                                                                                                                                                                                                                                              |
| ORDA event function [`constructor()`](../ORDA/ordaClasses.md#class-constructor-1)                                                                                                                                                                                                                               | local             | n/a                                                                                                                                                                                                                                              |
| ORDA event function [`event touched()`](../ORDA/orda-events.md#function-event-touched)                                                                                                                                                                                                                          | server            | use `local` keyword in function definition                                                                                                                                                                                                       |
| [User class functions](../Concepts/classes.md#function)                                                                                                                                                                                                                                                         | local             | n/a                                                                                                                                                                                                                                              |
| [Shared or session singleton function](../Concepts/classes.md#singleton-classes)                                                                                                                                                                                                                                | local             | use `server` keyword in function definition                                                                                                                                                                                                      |
| Trigger                                                                                                                                                                                                                                                                                                         | server            | n/a                                                                                                                                                                                                                                              |
| Project method called from a client                                                                                                                                                                                                                                                                             | client            | check [**Execute on server** option](../Project/project-method-properties.md#execute-on-server). The code is executed in the twin process of the [user session process](./sessions.md#remote-user-sessions-remote-user-sessions) |
|                                                                                                                                                                                                                                                                                                                 |                   | call [`Execute on server`](../commands/execute-on-server) command. The code is executed in the [Stored procedures session](./sessions.md#stored-procedure-sessions-stored-procedure-sessions)                                    |
| Project method called from a stored procedure on the server                                                                                                                                                                                                                                                     | server            | call [`EXECUTE ON CLIENT`](../commands/execute-on-client) command. The target client must have been [registered](../commands/register-client)                                                                                    |
| Object method                                                                                                                                                                                                                                                                                                   | local             | n/a                                                                                                                                                                                                                                              |
| Database methods:<ul><li>On Backup Shutdown</li><li>On Backup Startup</li><li>On Server Close Connection</li><li>On Server Open Connection</li><li>On Server Shutdown</li><li>On Server Startup</li><li>On SQL Authentication</li><li>On Web Authentication</li><li>On Web Connection</li></ul> | server            | n/a                                                                                                                                                                                                                                              |
| Database methods:<ul><li>On Startup</li><li>On Exit</li><li>On Drop</li></ul>                                                                                                                                                                                                                   | client            | n/a                                                                                                                                                                                                                                              |