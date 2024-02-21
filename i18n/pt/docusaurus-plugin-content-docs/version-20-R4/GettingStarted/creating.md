---
id: creating
title: Creating or opening a project
---

Projetos 4D são criados e desenvolvidos usando a aplicação **4D** , que fornece um abrangente Ambiente Integrado de Desenvolvimento (IDE). **4D Server** também pode criar novos projetos vazios.


## Criar arquivos de projeto

**Nota:** Servidor 4D pode abrir arquivos .4DProject em modo apenas leitura, mas apenas para propósitos de teste. Para lançamento, projetos 4D são oferecidos como arquivos .4dz (arquivos compactados zipados). Para saber mais, consulte [Construir um pacote de projetos](building.md). Em qualquer caso, os ficheiros de projeto são armazenados na máquina local.

Para criar um novo projeto de banco de dados:

1. Inicie 4D ou 4D Server.
2. Faça uma das seguintes opções:
    * Selecionar **Novo > Projeto...** do menu **Arquivo**: ![](../assets/en/getStart/projectCreate1.png)
    * (apenas 4D) Selecione **Projeto...** do botão da barra de ferramentas **Novo**:<p>![](../assets/en/getStart/projectCreate2.png)</p>Um diálogo padrão **Salvar** aparece para que você possa escolher o nome e local da pasta principal do projeto 4D.

3. Coloque o nome de sua pasta de projeto e clique **Save**. Este nome será utilizado:

    * as the name of the .4DProject file at the first level of the "Project" folder.
    * as the name of the .4DProject file at the first level of the "Project" folder.

 Pode escolher qualquer nome permitido pelo seu sistema operacional. *Atenção:* se seu banco projeto estiver destinado a funcionar em outros sistemas ou a ser guardada através de uma ferramenta de controle de código fonte, deve levar em consideração suas recomendações específicas de denominação.

Quando validar a caixa de diálogo, 4D fecha o banco de dados atual (se houver) e cria uma pasta "Project" no local indicado e coloca nela todos os arquivos necessários para o funcioanamento correto do banco de dados projeto. Para saber mais, consulte [Arquitetura de um projeto 4D](Project/architecture.md).

Pode então começar a desenvolver o seu projeto.

## Abrir projeto

Lance uma aplicação 4D Developer.

1. Faça uma das seguintes opções:

    * Selecione **Projeto Aberto/Local...** no menu **Arquivo** ou no botão da barra de ferramentas **Abrir**.
    * Selecionar **Abrir um projeto de aplicativo local** na caixa de diálogo Assistente de Boas Vindas

Aparece a caixa de diálogo padrão Abrir.

2. Select the project's `.4dproject` file and click **Open**.

    Por padrão, o projeto é aberto com seu arquivo de dados atual. Outros tipos de arquivo são sugeridos:

    * *Arquivos de projeto empacotados*: `.4dz` extensão - projetos de implantação
    * *Arquivos de atalho*: `.4DLink` extensão - armazenar parâmetros adicionais necessários para a abertura de projetos ou aplicativos (endereços, identificadores, etc.)
    * *Arquivos binários*: `.4db` ou `.4dc` extensão - formatos de banco de dados legacy 4D

### Opções

Além das opções padrão do sistema, o diálogo *Abrir* em 4D fornece dois menus com opções específicas que estão disponíveis usando o botão **Abrir** e o menu **Arquivo de Dados**.

* **Abrir** - Modo de abertura do projeto:
  * **Interpretado** ou **Compilado**: Essas opções estão disponíveis quando o projeto selecionado contém ambos [interpretados e compilados código](Concepts/interpreted.md).
  * **[Manutenção do Centro de Segurança](MSC/overview.md)**: Abrir em modo seguro permitindo acesso a projetos danificados a fim de realizar os reparos necessários.

* **Arquivo de dados** - especifica o arquivo de dados a ser usado com o projeto. Por predefinição, a opção **Current data file** está selecionada.

## Atalhos de abertura de projectos

4D oferece várias maneiras de abrir projetos diretamente e ignorar o diálogo Aberto:

* através de opções de menu:
  * *Barra de Menu* - **Arquivo** > **Abrir Projetos Recentes / {project name}**
  * *4D Tool bar* - Selecione o projeto no menu associado ao botão **Abrir**

* através das preferências:
  * Defina a preferência geral **Na inicialização** para **Abrir o último projeto utilizado**.

* usando o arquivo `.4DLink`.

### Abrir um projeto com um ficheiro 4DLink

Você pode usar um arquivo [`.4DLink`](#about-4DLink-files) para iniciar o aplicativo 4D e abrir o projeto 4D de destino. Há duas formas de o fazer:

* duplo-clique ou arraste e solte o arquivo `.4DLink` no aplicativo 4D
* ir para **Arquivo** > **Abrir Projetos Recentes** e selecionar um projeto

![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)

Um arquivo .4DLink do tipo "projeto remoto" pode ser copiado e usado em várias máquinas.
> Também é possível selecionar um arquivo 4DLink na caixa de diálogo 4D e 4D Server de abertura (abrindo apenas projeto local).

## Sobre 4DLink Files

Arquivos com a extensão `.4DLink` são arquivos XML que contêm parâmetros destinados a automatizar e simplificar a abertura de projetos 4D locais ou remotos.

Arquivos`.4DLink` podem salvar o endereço de um projeto 4D assim como seus identificadores de conexão e modo de abertura, poupando tempo quando abrir projetos.

4D gera automaticamente um `. DLink` arquivo quando um projeto local é aberto pela primeira vez ou quando se conecta a um servidor pela primeira vez. O arquivo é armazenado na pasta de preferências locais no seguinte local:

* Windows: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
* macOS: Users/UserName/Library/Application Support/4D/Favorites vXX/

XX representa o número da versão da aplicação. Por exemplo, "Favorites v19" para 4D v19.

Esta pasta está dividida em duas subpastas:

* a pasta **Local** contém os arquivos `.4DLink` que podem ser usados para abrir projetos locais
* a pasta **Remote** contém os arquivos `.4DLink` dos projetos remotos recentes

Os arquivos `.4DLink` podem também ser criados com um editor XML.

4D fornece um DTD descrevendo as chaves XML que podem ser usadas para construir um arquivo `.4DLink`. This DTD is named database_link.dtd and is found in the `\Resources\DTD\` subfolder of the 4D application.

