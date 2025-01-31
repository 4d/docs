---
id: clientServer
title: Gestão Cliente/Servidor
---


As aplicações 4D desktop podem ser utilizadas numa configuração Cliente/Servidor, quer como aplicações cliente/servidor fundidas, quer como projectos remotos.

- **Os aplicativos cliente/servidor fusionados** são gerados pelo [gerenciador Build Application](building.md#clientserver-page). São utilizados para implementações de aplicações.

- Os **projectos remotos** são arquivos [.4DProject](Project/architecture.md) abertos pelo 4D Server e acessados com 4D em modo remoto. O servidor envia uma versão .4dz do projeto ([comprimido formato](building.md#build-compiled-structure)) para a 4D remota, portanto arquivos de estrutura são somente leitura. Esta configuração é normalmente utilizada para testar aplicações.

![](../assets/en/getStart/localremote.png)

> Conectar a um projeto remoto da **mesma máquina que o 4D Server** permite modificar os arquivos do projeto. Esse [recurso específico](#using-4d-and-4d-server-on-the-same-machine) permite desenvolver uma aplicação cliente/servidor no mesmo contexto que o contexto de implementação.

## Abrir uma aplicação cliente/servidor fundida

Uma aplicação cliente/servidor mesclada é personalizada e seu início é simplificado:

- Para iniciar a parte do servidor, o usuário simplesmente clica duas vezes no aplicativo do servidor. O arquivo do projeto não precisa ser selecionado.
- Para iniciar a parte do cliente, o usuário simplesmente clica duas vezes no aplicativo cliente, que se conecta diretamente ao aplicativo do servidor.

Estes princípios são detalhados na página [Build Application](building.md#what-is-a-clientserver-application).

## Abrir um projecto remoto

A primeira vez que se liga a um projecto 4D Server através de um 4D remoto, normalmente utilizará o diálogo de ligação padrão. Depois disso, você poderá se conectar diretamente usando o menu **Abrir Projetos Recentes** ou um arquivo de atalho 4DLink.

Para conectar remotamente a um projeto 4D Server:

1. Selecione **Conectar-se ao 4D Server** na caixa de diálogo Assistente de Boas Vindas, OU Selecione **Projeto Aberto/Remoto. .** do menu **File** ou do botão **Abrir barra de ferramentas**.

Aparece o diálogo de ligação do 4D Server. Esta caixa de diálogo tem três abas: **Recentes**, **Disponível**e **Personalizado**.

Se o Servidor 4D estiver conectado à mesma rede que a 4D remota, selecione **Disponível**. O servidor 4D inclui um sistema interno de transmissão TCP/IP que, por padrão, publica o nome dos projetos 4D Server disponíveis na rede. A lista é classificada por ordem de aparecimento e atualizada dinamicamente.

![](../assets/en/getStart/serverConnect.png)

Para conectar a um servidor a partir da lista, clique duas vezes no seu nome ou selecione-o e clique no botão **OK**.

> Um acento circunflexo (^) é colocado antes do nome dos projetos publicados com a opção de criptografia ativada.

Se o projeto publicado não for exibido na lista **Disponível** , selecione **Personalizado**. A página personalizada permite que você se conecte a um servidor publicado na rede usando seu endereço de rede e atribuindo-lhe um nome personalizado.

![](../assets/en/getStart/serverConnect2.png)

- **Nome do projeto**: Define o nome local do projeto no servidor 4D. Este nome será usado na página **Recentes** quando referente ao projeto.
- Endereço de rede ****: O endereço IP da máquina onde o servidor 4D foi iniciado. Se dois servidores forem executados simultaneamente na mesma máquina, o endereço IP deve ser seguido por um dobro e número da porta, por exemplo: `192. 68.92.104:19814`. Por padrão, a porta de publicação de um 4D Server é 19813. Este número pode ser modificado nas definições do Projecto.

Quando essa página atribuir um servidor, clicar no botão **OK** permitirá que você se conecte ao servidor.

> Se o projeto estiver publicado com a opção de criptografia habilitada, você deve adicionar um acento circunflexo (^) antes do nome, caso contrário a conexão será recusada. Para obter mais informações, consulte a seção de Conexões Criptografadas Cliente/Servidor.

Uma vez que uma conexão com o servidor foi estabelecida, o projeto remoto será listado na guia **Recentes**.

### Atualizando arquivos do projeto no servidor

O servidor 4D cria automaticamente e envia as máquinas remotas um [. dz version](building.md#build-compiled-structure) do arquivo de projeto *.4DProject* (não comprimido) no modo interpretado.

- Uma versão .4dz atualizada do projeto é automaticamente produzida quando necessário, *i. .* quando o projeto for modificado e recarregado pelo Servidor 4D. O projeto foi recarregado:
  - automaticamente quando a janela de aplicação do Servidor 4D chega à frente do sistema operacional ou quando o aplicativo 4D na mesma máquina salva uma modificação (veja abaixo).
  - quando o comando `RELOAD PROJET` for executado. Chamar este comando é necessário, por exemplo, quando você puxou uma nova versão do projeto a partir da plataforma de controle de origem.

### Atualizando arquivos do projeto em máquinas remotas

Quando uma atualização . versão dz do projeto foi produzida em 4D Server, máquinas remotas 4D conectadas devem sair e reconectar ao 4D Server para se beneficiar da versão atualizada.

## Utilização de 4D e 4D Server na mesma máquina

Quando o 4D se conectar a um Servidor 4D na mesma máquina, a aplicação se comporta como 4D em modo de usuário único e o ambiente de design permite que você edite os arquivos do projeto. Esse recurso permite que você desenvolva uma aplicação de cliente/servidor no mesmo contexto que o contexto de implantação.

Cada vez que o 4D executa uma ação **Salvar tudo** no ambiente de design (explicitamente no menu **Arquivo** ou implicitamente ao mudar para o modo de aplicação, por exemplo), o 4D Server recarrega sincronizadamente os arquivos de projeto. O 4D espera o servidor 4D terminar de recarregar os arquivos do projeto antes de continuar.

No entanto, você precisa prestar atenção às seguintes diferenças de comportamento em comparação com a [arquitetura de projeto padrão](Project/architecture.md):

- a pasta userPreferences.\{username\} usada pelo 4D não é a mesma pasta usada pelo 4D Server na pasta do projeto. Em vez disso, é uma pasta dedicada, denominada "userPreferences", armazenada na pasta do sistema do projeto (ou seja, o mesmo local em que se abre um projeto .4dz).
- a pasta usada pelo 4D para dados derivados não é a pasta chamada "DerivedData" na pasta do projeto. Em vez disso, é uma pasta dedicada chamada "DerivedDataRemote" localizada na pasta do sistema do projeto.
- O arquivo catalog.4DCatalog não é editado pela 4D, mas sim pelo 4D Server. As informações do catálogo são sincronizadas através de pedidos cliente/servidor
- o arquivo directory.json não é editado por 4D, mas pelo servidor 4D. As informações do diretório são sincronizadas através de pedidos cliente/servidor
- 4D utiliza os seus próprios componentes internos e plug-ins em vez dos do 4D Server.

> Não é recomendado instalar plug-ins ou componentes no nível da aplicação 4D, ou 4D Server.
