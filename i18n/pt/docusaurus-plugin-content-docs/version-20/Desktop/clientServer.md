---
id: clientServer
title: Gestão Cliente/Servidor
---


As aplicações 4D desktop podem ser utilizadas numa configuração Cliente/Servidor, quer como aplicações cliente/servidor fundidas, quer como projectos remotos.

- **Os aplicativos cliente/servidor fusionados** são gerados pelo [gerenciador Build Application](building.md#clientserver-page). São utilizados para implementações de aplicações.

- Os **projectos remotos** são arquivos [.4DProject](Project/architecture.md) abertos pelo 4D Server e acessados com 4D em modo remoto. O servidor envia uma versão .4dz do projecto ([formato comprimido](building.md#build-compiled-structure)) para o 4D remoto, assim os ficheiros de estrutura são apenas de leitura. Esta configuração é normalmente utilizada para testar aplicações.

![](../assets/en/getStart/localremote.png)

> Conectar a um projeto remoto da **mesma máquina que o 4D Server** permite modificar os arquivos do projeto. Esse [recurso específico](#using-4d-and-4d-server-on-the-same-machine) permite desenvolver um aplicativo cliente/servidor no mesmo contexto que o contexto de implementação.

## Abrir uma aplicação cliente/servidor fundida

Um aplicativo cliente/servidor mesclado é personalizado e seu início é simplificado:

- Para iniciar a parte do servidor, o usuário simplesmente clica duas vezes no aplicativo do servidor. The database does not need to be selected.
- Para iniciar a parte do cliente, o usuário simplesmente clica duas vezes no aplicativo cliente, que se conecta diretamente ao aplicativo do servidor.

Esses princípios estão detalhados na página [Criar aplicativo](building.md#what-is-a-clientserver-application).

## Abrir um projecto remoto

A primeira vez que se liga a um projecto 4D Server através de um 4D remoto, normalmente utilizará o diálogo de ligação padrão. Depois disso, você poderá se conectar diretamente usando o menu **Open Recent Projects** ou um arquivo de atalho do 4DLink.

Para conectar remotamente a um projeto 4D Server:

1. Faça uma das seguintes opções:
   - Selecione **Connect to 4D Server** na caixa de diálogo Welcome Wizard (Assistente de boas-vindas)
   - Selecione **Abrir/Projeto remoto...** no menu **Arquivo** ou no botão da barra de ferramentas **Abrir**.

Aparece o diálogo de ligação do 4D Server. Essa caixa de diálogo tem três guias: **Recente**, **Disponível** e **Personalizado**.

Se o 4D Server estiver conectado à mesma rede que o 4D remoto, selecione **Available (Disponível**). O 4D Server inclui um sistema de transmissão TCP/IP integrado que, por padrão, publica o nome dos projetos do 4D Server disponíveis na rede. A lista é classificada por ordem de aparecimento e atualizada dinamicamente.

![](../assets/en/getStart/serverConnect.png)

To connect to a server from the list, double-click on its name or select it and click the **OK** button.

> A circumflex accent (^) is placed before the name of projects published with the encryption option enabled.

If the published project is not displayed in the **Available** list, select **Custom**. The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name.

![](../assets/en/Desktop/serverConnect2.png)

- **Project name**: Defines the local name of the 4D Server project. This name will be used in the **Recent** page when referring to the project.
- **Network address**: The IP address of the machine where the 4D Server was launched.
  - If two servers are executed simultaneously on the same machine, the IP address must be followed by a colon and port number, for example: `192.168.92.104:19814`.
  - Por padrão, a porta de publicação de um 4D Server é 19813. Este número pode ser modificado nas definições do Projecto.

> The **Activate development mode** option opens the remote connection in a special read/write mode and requires to access the project folder from the remote 4D (compatibility option).

Once this page assigns a server, clicking the **OK** button will allow you to connect to the server.

Once a connection to the server has been established, the remote project will be listed on the **Recent** tab.

### Atualizar ficheiros de projeto no servidor

4D Server automatically creates and sends the remote machines a [.4dz version](building.md#build-compiled-structure) of the *.4DProject* project file (not compressed) in interpreted mode.

- An updated .4dz version of the project is automatically produced when necessary, *i.e.* when the project has been modified and reloaded by 4D Server. O projecto é recarregado:
  - automatically, when the 4D Server application window comes to the front of the OS or when the 4D application on the same machine saves a modification (see below).
  - quando o comando `RELOAD PROJECT` é executado. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform.

### Atualizar ficheiros de projeto em máquinas remotas

When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version.

## Utilização de 4D e 4D Server na mesma máquina

When 4D connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. This feature allows you to develop a client/server application in the same context as the deployment context.

> When 4D connects to a 4D Server on the same machine, the **development mode** is automatically activated, whatever the [opening option](#opening-a-remote-project) status.

Each time 4D performs a **Save all** action from the design environment (explicitly from **File** menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D waits for 4D Server to finish reloading the project files before it continues.

However, you need to pay attention to the following behavior differences compared to [standard project architecture](Project/architecture.md):

- the userPreferences.\{username\} folder used by 4D is not the same folder used by 4D Server in the project folder. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).
- the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.
- o ficheiro catalog.4DCatalog não é editado por 4D, mas pelo 4D Server. As informações do catálogo são sincronizadas através de pedidos cliente/servidor
- o ficheiro directory.json não é editado por 4D, mas pelo 4D Server. As informações do diretório são sincronizadas através de pedidos cliente/servidor
- 4D utiliza os seus próprios componentes internos e plug-ins em vez dos do 4D Server.

> Não é recomendado instalar plug-ins ou componentes no nível da aplicação 4D, ou 4D Server.
