---
id: building
title: Building a project package
---

4D Developer includes a final application builder to create a project package (final build). This builder simplifies the finalization and deployment process for 4D compiled applications. It automatically handles the specific features of different operating systems and facilitates the deployment of client-server applications.

The application builder allows you to:

*   Gerar um banco de dados compilado, sem código interpretado
*   Build a stand-alone, double-clickable application, *i.e.*, merged with 4D Volume Desktop, the 4D database engine,
*   Gerar aplicações diferentes a partir do mesmo banco de dados compilado mediante um projeto XML,
*   Build homogeneous client-server applications,
*   Build client-server applications with automatic updating of client and server parts.
*   Save your build settings for future use (*Save settings* button).



## Build application overview

Building a project package can be carried out using:

- o comando [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html),
- or the [Build Application window](#application-builder).

To display the Build Application dialog, select **Design** > **Build Application...** from the menu bar.

![](assets/en/Project/buildappProj.png)

The Build Application dialog includes several pages that can be accessed using tabs:

![](assets/en/Project/appbuilderProj.png)


A geração do banco de dados só pode ser realizado quando o banco de dados for compilado. Se selecionar esse comando sem ter previamente compilado o banco de dados, ou no caso do código compilado não for correspondente ao código interpretado, aparece uma caixa de diálogo de advertência que indica que o banco de dados deve ser (re)compilado.


### Build application settings

Cada parâmetro de geração da aplicação é armazenado como uma chave XML no arquivo da aplicação chamada "buildApp.4DSettings", localizado na pasta  Settings do banco de dados.

Default parameters are used the first time the Build Application dialog box is used. The contents of the project file are updated, if necessary, when you click **Build** or **Save settings**. You can define several other XML settings file for the same project and employ them using the [BUILD APPLICATION](https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html) command.

XML keys provide additional options besides those displayed in the Build Application dialog box. The description of these keys are detailed in the [4D XML Keys BuildApplication](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) manual.

### Log file

Quando uma aplicação é construída, 4D gera um arquivo de histórico na pasta **Logs**. The log file stores the following information for each build:
- The start and end of building of targets,
- The name and full access path of the files generated,
- The date and time of the build,
- Todos os erros que forem produzidos.



## Application name and destination folder

![](assets/en/Project/buidappstructureProj.png)

Enter the name of the application in **Application Name**.

Specify the folder for the built application in **Destination Folder**. If the specified folder does not already exist, 4D will create a *Build* folder for you.



## Compiled structure page

This tab allows you to build a standard compiled structure file and/or a compiled component:

![](assets/en/Project/appbuilderProj.png)


### Build compiled structure

Gera um banco de dados que contém apenas código compilado.

Esta funcionalidade cria um arquivo *.4dz* em uma pasta *Compiled Database*. Se chamar à sua aplicação "MyProject", 4D criará:

*\<destination\>/Compiled Database/\<database name>/\MyProject.4dz*

> A .4dz file is essentially a zipped (packed) version of the project folder. Os arquivos.4dz podem ser utilizados por 4D Server, a licença 4D Volume (aplicações fusionadas) e 4D Developer. The compact and optimized size of .4dz files makes project packages easy to deploy.


#### Include related folders

Quando se marca esta opção, todas as pastas relacionadas com o banco de dados na pasta Build como pastas *Components* e *Resources*. Para saber mais sobre essas pastas, consulte [Arquitetura do banco de dados](https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Description-of-4D-files.300-4575698.en.html#100374).


### Build component

Builds a compiled component from the structure.

A component is a standard 4D project in which specific functionalities have been developed. Quando o componente tiver sido configurado e instalado em outro banco de dados 4D (o banco local), suas funcionalidades são acessíveis desde o banco local. Para saber mais sobre os componentes, veja a documentação "Desenvolver e instalar componentes 4D'.
Se tiver nomeado sua aplicação, *MeuComponente*, 4D criará uma pasta Components que contém a pasta *MeuComponente.4dbase*: <p>*\<destination>/Components/name.4dbase/\<name>.4DZ*.

A pasta *MyComponent.4dbase* contém:
-   *MyComponent.4DZ* file
-   Uma pasta *Resources* - todos os recursos associados são copiados automaticamente nesta pasta. Todas as outras pastas de componentes ou plugins não são copiadas (um componente não pode utilizar plugins ou outros componentes).


## Página de aplicação

Esta aba lhe permite construir uma versão autônoma e monousuário de sua aplicação:

![](assets/en/Project/standaloneProj.png)

### Criar uma aplicação autônoma

Selecionando a opção **Criar uma aplicação autônoma** e clicando em **Gerar** se criará uma aplicação autônoma (com duplo clique) diretamente desde o projeto do banco de dados.

Os elementos abaixo são necessários para a geração:
- 4D Volume Desktop (o motor do banco de dados 4D),
- uma [licença apropriada](#licenses)

Em Windows, esta funcionalidade cria um arquivo executável (.exe). Em macOS, se encarrega da criação de pacotes de software.

O princípio consiste em fusionar o arquivo 4D Volume Desktop com um arquivo de estrutura compilado. The functionality provided by the 4D Volume Desktop file is linked with the product offer to which you have subscribed. Para mais informação sobre este ponto, consulte a documentação comercial e de [4D Store](http://www.4d.com/).

Pode definir um arquivo de dados por padrão ou permitir aos usuários criar e utilizar seu próprio arquivo de dados (consulte a seção [Gestão de arquivos de dados nas aplicações finais](https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html)).

É possível automatizar a atualização das aplicações monousuário fusionadas mediante uma sequência de comandos de linguagem (consulte a seção [Atualización automática de aplicações servidor ou monousuário](https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html).

#### Localização de 4D Volume Desktop

Para gerar uma aplicação autônoma, primeiro deve designar a pasta que contém o arquivo 4D Volume Desktop:

*   *Windows* - a pasta contém os arquivos 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, assim como vários arquivos e pastas necessários para seu funcionamento. Estes elementos devem ser colocados no mesmo nível que a pasta selecionada.
*   *macOS* - 4D Volume Desktop é fornecida na forma de um pacote de software estruturado que contém vários arquivos e pastas genéricas.

Para selecionar a pasta de 4D Volume Desktop, clique no botão **[...]**. Aparece uma caixa de diálogo que lhe permite determinar a pasta (Windows) ou o pacote (macOS) de 4D Volume Desktop.

Quando a pasta for selecionada,  se mostra seu nome de rota completo e, se realmente conter 4D Volume Desktop, se ativa a opção de construir uma aplicação executável.

> O número de versão de 4D Volume Desktop deve coincidir com o número de versão de 4D Developer Edition. Por ejemplo, se utilizar 4D Developer v18, deve selecionar um 4D Volume Desktop v18.

#### Modo de vinculo de dados

Esta opção permite escolher o modo de vinculação entre a aplicação fusionada e o arquivo de dados local. Existem dois modos de vinculação de dados:

*   **Por nome da aplicação** (como padrão) - a aplicação 4D abre automaticamente o último arquivo de dados aberto correspondente ao arquivo de estrutura. This allows you to move the application package freely on the disk. Esta opção deve ser utilizada geralmente para as aplicações fusionadas, a menos que necessite especificamente duplicar a aplicação.

*   **Rota da aplicação** - a aplicação 4D fusionada analisará o arquivo *lastDataPath. xml* e tentará abrir o arquivo de dados com um atributo "executablePath" que coincida com a rota completa da aplicação. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Caso contrario, se abrirá el último arquivo de datos aberto (modo por defecto).

Para mais informação sobre o modo de vinculação de dados, consulte a seção [Último arquivo de dados aberto](#último-arquivo-de-dados-aberto).


#### Arquivos gerados

Quando clicar no botão **Construir**, 4D cria automaticamente uma pasta **Aplicação final** na **Pasta de destino** especificada. Dentro da pasta Final Application há uma subpasta com o nome da aplicação especificada nela.

Se especificou "MyProject" como nome da aplicação, encontrará os seguintes arquivos nesta subpasta (também conhecida como MyProject):

*   *Windows*
    *   MyProject.exe - Seu executável e um MyProject.rsr (os recursos da aplicação)
    *   Pasta 4D Extensions, pasta Resources, várias bibliotecas (DLL), pasta Native Components, pasta SASL Plugins - Arquivos necessários para o funcionamento da aplicação
    *   Pasta Database - Incluem uma pasta Resources e o arquivo MyProject.4DZ. Constituem a estrutura compilada do banco de dados assim como a pasta Resources. **Nota**: esta pasta também contém a pasta *Default Data*, se for definida (ver [Gestão de arquivos de dados em aplicações finais](#data-file-management-in-final-applicatons).
    *   (Opcional) Pasta Components ou pasta Plugins - contém todos os componentes ou arquivos plug-in incluídos no banco de dados. Para mais informação ao respeito, consulte a seção [Plugins e componentes](#plugins-and-components).
    *   Pasta Licenses - Um arquivo XML de números de licença integrados na aplicação. Para mais informação ao respeito, consulte a seção [Licenças e certificados](#licenses-and-certificate).
    *   Elementos adicionais anexados à pasta 4D Volume Desktop, se houver (ver [Personalização da pasta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)).

    Todos esses elementos devem manter-se na mesma pasta para que o executável funcione.</ul>

*   *macOS*
    -   Um pacote de software chamado MyProject.app que contém tua aplicação e todos os elementos necessários para seu funcionamento, incluindo os plug-ins, componentes e licencias. For more information about integrating plug-ins and components, refer to the [Plugins and components](#plugins-and-components) section. For more information about integrating licenses, refer to the [Licenses & Certificate](#licenses-and-certificate) section. **Nota**: em macOS, o comando [Arquivo de aplicação](https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html) da linguagem 4D devolve o nome da rota do arquivo ApplicationName ( na pasta Contents:macOS do pacote de software) e não o do arquivo .comp (pasta Contents:Resources do pacote de software).


#### Personalização da pasta 4D Volume Desktop

Quando construir uma aplicação Independente, 4D copia o conteúdo da pasta 4D Volume Desktop na pasta Destination > *Final Application*. You're then able to customize the contents of the original 4D Volume Desktop folder according to your needs. Pode, por exemplo:

*   Instalar uma versão de 4D Volume Desktop correspondente a uma linguagem específico;
*   Adicionar uma pasta *PlugIns* personalizada;
*   Personaliza o conúdo da pasta *Resources*.
> Em macOS, 4D Volume Desktop se proporciona em forma de pacote de software. Para modificá-lo, primeiro precisa exibir seu conteúdo (**Control+clique** no ícone).


#### Localização dos arquivos web

Se sua aplicação executável for usada como servidor web, os arquivos e pastas requeridos pelo servidor devem ser instalados em locais  específicas. Estes elementos são os seguintes:

*   *arquivoscert.pem* e *key.pem* (opcional): Estes arquivos se utilizam para as conexões SSL e pelos comandos de criptografia de dados,.
* Marcador="*" level="0" spaces="0" spaces-after-marker="2"> pasta raiz da web padrão..

Os elementos devem estar instalados:

- **em Windows**: na subpasta *Aplicação final*..
- **em macOS**: junto ao pacote de software *MyProject.app*.





## Página de cliente/servidor

Nesta aba podem ser construídas aplicações cliente-servidor personalizadas, homogêneas, multiplataforma e com opção de atualização automática.

![](assets/en/Project/buildappCSProj.png)

### O que é uma aplicação Cliente/Servidor?

Uma aplicação cliente/servidor surge da combinação de três elementos:

- Um banco de dados compilado em 4D,
- A aplicação 4D Server,
- Marcador="-" level="0" spaces="0" spaces-after-marker="0">A aplicação 4D Volume Desktop (macOS ou Windows)..

Depois de construída, uma aplicação cliente/servidor é composta de duas partes personalizadas: a parte Servidor (única) e a parte Cliente (para instalar em cada máquina cliente).

Também se personaliza a aplicação cliente/servidor e se simplifica seu manejo:

- Para lançar a parte de servidor, o usuário simplesmente dá duplo clique na aplicação do servidor. Não é necessário selecionar o banco de dados.
- Para lançar a parte cliente, o usuário simplesmente dá duplo clique na aplicação cliente, que se conecta diretamente à aplicação servidor. Não é necessário escolher um banco de dados em uma caixa de diálogo de conexão. The client targets the server either using its name, when the client and server are on the same sub-network, or using its IP address, which is set using the `IPAddress` XML key in the buildapp.4DSettings file. If the connection fails, [specific alternative mechanisms can be implemented](#management-of-client-connections). You can "force" the display of the standard connection dialog box by holding down the **Option** (macOS) or **Alt** (Windows) key while launching the client application. Only the client portion can connect to the corresponding server portion. Se um usuário tentar se conectar com a parte servidor utilizando uma aplicação 4D padrão, se devolve uma mensagem de erro e a conexão é impossível.
- Se pode configurar uma aplicação cliente/servidor para que a parte cliente [se atualize automaticamente através da rede](#copy-of-client-applications-in-the-server-application).
- Também é possível automatizar a atualização da parte servidor mediante o uso de uma sequência de comandos da linguagem ([SET UPDATE FOLDER](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html) e [RESTART 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html)).



### Construir aplicação de servidor

Marque esta opção para gerar a parte de servidor de sua aplicação durante a fase de construção. You must designate the location on your disk of the 4D Server application to be used. Este 4D Server deve corresponder a plataforma atual (que também será a plataforma da aplicação do servidor).

#### Local de 4D Server

Clique no botão **[...]** e utilize a caixa de diálogo *Buscar pasta* para localizar a aplicação 4D Server. Em macOS, deve selecionar o pacote de 4D Server diretamente.

#### Versão atual

Se utiliza para indicar o número de versão atual da aplicação gerada. You may then accept or reject connections by client applications according to their version number. O intervalo de compatibilidade das aplicações clientes e servidor se define mediante [chaves XML](#build-application-settings)).

#### Modo de link de dados

Esta opção permite escolher o modo de vinculação entre a aplicação fusionada e o arquivo de dados local. Existem dois modos de vinculação de dados:

*   **Por nome da aplicação** (como padrão) - a aplicação 4D abre automaticamente o último arquivo de dados aberto correspondente ao arquivo de estrutura. This allows you to move the application package freely on the disk. Esta opção deve ser utilizada geralmente para as aplicações fusionadas, a menos que necessite especificamente duplicar a aplicação.

*   **Rota da aplicação** - a aplicação 4D fusionada analisará o arquivo *lastDataPath. xml* e tentará abrir o arquivo de dados com um atributo "executablePath" que coincida com a rota completa da aplicação. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Caso contrario, se abrirá o último arquivo de dados aberto (modo padrão).

Para mais informação sobre o modo de vinculação de dados, consulte [Último arquivo de dados aberto.](#last-data-file-opened)


### Construir aplicação cliente

Marcando esta opção se gera a parte cliente de sua aplicação durante a fase de construção.

#### 4D Volume Desktop

Deve determinar o local em seu disco da aplicação 4D Volume Desktop a utilizar. This 4D Volume Desktop must correspond to the current platform (which will also be the platform of the client application). If you want to build a client application for a “concurrent” platform, you must carry out an additional build operation using a 4D application running on that platform. This is only necessary for the initial version of the client application since subsequent updates can be handled directly on the same platform using the automatic update mechanism. Para mais informação sobre este ponto, consulte [Personalizar as pastas 4D Server ou 4D Client](#customizing-4d-server-and-or-4d-client-folders).

> O número de versão de 4D Volume Desktop deve coincidir com o número de versão de 4D Developer Edition. Por exemplo, se utiliza 4D Developer v18, deve selecionar um 4D Volume Desktop v18.

Se quiser que a aplicação cliente se conecte ao servidor utilizando um local específico (distinto do nome de servidor publicado na subrede), deve utilizar a chave XML `IPAddress` no arquivo buildapp.4DSettings. For more information about this file, refer to the description of the `BUILD APPLICATION` command. You can also implement specific mechanisms in the event of a connection failure. Os diferentes cenários propostos são descritos no parágrafo [Gestão das conexões para as aplicações clientes](#management-of-client-connections).

#### Cópia das aplicações clientes na aplicação servidor

As opções desta área para configurar o mecanismo de atualização das partes clientes de suas aplicações cliente/servidor utilizando a rede cada vez que se gera uma nova versão da aplicação.

- **Permitir a atualização automática da aplicação cliente Windows** - Marque estas opções para que sua aplicação cliente/servidor Windows possa aproveitar o mecanismo de atualização automática dos clientes através da rede.
- **Permitir a atualização automática da aplicação cliente Macintosh** - Marque estas opções para que sua aplicação cliente/servidor Macintosh possa aproveitar o mecanismo de atualização automática para clientes através da rede.

*   **Permitir a atualização automática da aplicação cliente Macintosh** - Se quiser criar uma aplicação cliente multiplataforma, deve designar a localização em seu disco da aplicação 4D Volume Desktop que corresponde à plataforma "concorrente" da plataforma de construção.

    Por exemplo, se construir a aplicação em Windows, deve utilizar o botão **[...]** para designar a aplicação 4D Volume Desktop macOS (fornecida como pacote).



#### Mostrar a notificação de atualização

A notificação de atualização da aplicação cliente se realiza automaticamente depois da atualização da aplicação servidor.

Funciona da seguinte maneira: quando se construir uma nova versão da aplicação cliente/servidor utilizando o gerador de aplicações, a nova parte cliente se copia como um arquivo comprimido na subpasta **Upgrade4DClient** da pasta Server **ApplicationName** (em macOS, estas pastas são incluídas no pacote servidor). Se seguiu o processo para gerar uma aplicação cliente multiplataforma, um arquivo *4darchive* de atualização está disponível para cada plataforma:

Para ativar as notificações de atualização da aplicação cliente, basta com substituir a versão antiga da aplicação servidor pela nova e executá-la. O resto do processo é automático.<p

Do lado do cliente, quando a aplicação cliente "antiga" tenta conectar-se à aplicação servidor atualizada, se mostra uma caixa de diálogo na máquina cliente, indicando que há uma nova versão disponível. O usuário pode atualizar sua versão ou cancelar a caixa de diálogo.

*   Se o usuário clicar em **Aceitar**, a nova versão se descarrega  na máquina cliente através da rede. Once the download is complete, the old client application is closed and the new version is launched and connects to the server. A versão antiga da aplicação sé colocada na pasta lixeira da máquina.
*   Se o usuário clicar em **Cancelar**, a atualização é cancelada; se a versão antiga da aplicação cliente não estiver no intervalo de versões aceitas pelo servidor (consulte o parágrafo abaixo), a aplicação é fechado e a conexão é impossível. Caso contrário (como padrão), se estabelece a conexão.

#### Forçar as atualizações automáticas

Em alguns casos, é possível que queira evitar que as aplicações cliente possam cancelar a descarga de atualizações. Por exemplo, se usar uma nova versão da aplicação fonte 4D Server, a nova versão da aplicação cliente deve instalar-se absolutamente em cada máquina cliente.

Para forçar a atualização, simplesmente exclua o número de versão atual das aplicações clientes (X-1 e anteriores) no intervalo de número de versão compatível com a aplicação servidor. In this case, the update mechanism will not allow non-updated client applications to connect. Por exemplo, se a nova versão da aplicação cliente-servidor for a 6, pode estipular que toda aplicação cliente com um número de versão inferior a 6 não poderá conectar.

O [número de versão atual](build-server-application) se define na página Cliente/Servidor do gerador da aplicação. Os intervalos dos números autorizados se definem no projeto da aplicação mediante umas chaves [XML](#build-application-settings) específicas.


#### Erro de atualização

Se 4D não puder realizar a atualização da aplicação cliente, a máquina cliente mostra a seguinte mensagem de erro: "A atualização da aplicação cliente falhou. A aplicação vai ser fechada agora."

Há muitas causas possíveis deste erro. Quando lhe apareça esta mensagem, é aconselhável que comprove primeiro os seguintes parâmetros:

*   **Rotas de acesso** - Comprove a validez das rotas de acesso definidas no projeto de aplicação através da caixa de diálogo do Gerador de aplicações ou mediante as chaves XML (por exemplo *ClientMacFolderToWin*). Mais concretamente, verifique as rotas de acesso às versões de 4D Volume Desktop.
*   **Privilégios de leitura/escritura** - Na máquina cliente, verifique que o usuário atual tem direitos de acesso de escrita para a atualização da aplicação cliente.


### Arquivos gerados

Quando construir a aplicação cliente/servidor, encontrará uma nova pasta na pasta de destino chamada **Cliente Servidor executável**. Esta pasta contém duas subpastas, *<ApplicationName>Client* e *<ApplicationName>Server*.
> Estas pastas não são geradas se produzir um erro. Neste caso, abra o [arquivo-de-historico](#archivo-de-registro) para conhecer a causa de erro.

A pasta *<ApplicationName>Client* contém a parte cliente da aplicação correspondente à plataforma de execução do gerador da aplicação. This folder must be installed on each client machine. a pasta *<ApplicationName>Server* contém a parte servidor da aplicação.

o conteúdo destas pastas varia em função da plataforma atual:

*   *Windows* - Cada pasta contém o arquivo executável da aplicação, chamado  *\<ApplicationName>Client.exe* para a parte cliente e *\<ApplicationName>Server.exe* para a parte servidor, assim como os arquivos .rsr correspondentes. As pastas também contém vários arquivos e pastas necessários para o funcionamento das aplicações e os elementos personalizados que podem estar nas pastas 4D Volume Desktop e 4D Server de origem.
*   *macOS* - Cada pasta contém só o pacote de aplicações, chamado\<ApplicationName> Cliente para a parte cliente e \<ApplicationName> Server para a parte servidor. Each package contains all the necessary items for the application to work. Em macOS, se lança um pacote dando um duplo clique.

    > Os pacotes macOS gerados contém os mesmos elementos que as subpastas Windows. Pode visualizar seu conteúdo (**Control+clique** sobre o ícone) para poder modificá-lo..

Se marcar a opção "Permitir a atualização automática da aplicação cliente", se adiciona uma subpasta adicional chamada *Upgrade4DClient* na pasta/pacote *<ApplicationName>Server*. This subfolder contains the client application in macOS and/or Windows format as a compressed file. Este arquivo se utiliza durante a atualização automática das aplicações clientes.

#### Personalizar a pasta 4D Volume Desktop

Durante a criação de uma aplicação executável, 4D duplica o conteúdo da pasta 4D Volume Desktop na subpasta Final Application da pasta de destino. A seguir poderá personalizar o conteúdo da pasta 4D volume desktop original segundo suas necessidades. Pode, por exemplo:

- Instalar uma versão de 4D Volume Desktop correspondente a uma linguagem específico;
- Adicionar uma pasta PlugIns personalizada;
- Personalizar o conteúdo da pasta Resources.

#### Local dos arquivos web

Se a parte servidor ou do cliente de sua aplicação de duplo clique se utiliza como servidor web, os arquivos e pastas exigidos pelo  servidor debem ser instalados em locais específicos. Estes elementos são os seguintes:

- *cert.pem* e *key.pem* arquivos (opcional): Esses arquivos são usados por conexões SSL e por comandos de criptografia,
- Pasta web raiz (WebFolder).

Itens devem ser instalados:
*   **em Windows**
    *   **aplicação servidor** - em *executávle Cliente Servidor\ \<ApplicationName>Server\Server Database* subpasta.
    *   **Aplicação cliente** - em *executável Client Server\ \<ApplicationName>Cliente* subpasta.

*   **em macOS**
    *   **Aplicação Servidor** - ao lado do *\<ApplicationName>Servidor* pacote de software.
    *   **Aplicação Servidor** - ao lado de  *\<ApplicationName>Cliente* software package.





## Plugins & páginas de componentes

Nessa aba estabelece [plug-in](Concepts/plug-ins.md)e cada [componente](Concepts/components.md) que vai usar em sua aplicação standalone ou cliente/server.

A página lista os elm,entos carregados pela aplicação atual  4D:

![](assets/en/Project/buildapppluginsProj.png)

*    **Ativo** coluna - Indica que os itens serão integrados na o pacote da aplicação. All the items are checked by default. Para excluir um  plug-in ou um componente, de-selecione a check box que está do lado.

*   **Coluna Plugins e componentes**  - Exibe o nome do componente ou  plug-in.

*   **Coluna ID** - Exibe o número de identificação do plug-in/componente  (se houver).

*   **Coluna Tipo** coluna - Indica o tipo de item: plug-in ou componente.

Se quiser integrar outros  plug-ins ou componentes com sua aplicação executável, precisa colocá-las nas pastas  **PlugIns** ou **Componentes** do lado da aplicação 4D Volume Desktop ou da aplicação 4D Server. O mecanismo para copiar os conteúdos da pasta de aplicação fonte  (ver [Personalizar a pasta 4D Volume Desktop](#customizing-4d-volume-desktop-folder)) pode ser usada para integrar qualquer tipo de arquivo em uma aplicação executável.

Se houver um conflito entre duas versões diferentes do mesmo plug-in (um carregado por 4D e outro em uma pasta aplicação fonte), a prioridade é do plug-in instalado na pasta 4D Volume Desktop/4D Server. Entretanto se houver duas instâncias do mesmo componente, a aplicação não vai abrir.
> O uso de plug-ins ou componentes em uma versão lançada exige os números de licença necessários.






## Página Licenças &  Certificado






##

A página Licenças & Certificados pode ser usada para:

*   determinar o número de licenças que precisa integrar em sua aplicação monusuário  stand-alone
*   assine a aplicação usando o certificado em macOS.


![](assets/en/Project/buildapplicenseProj.png)

### Licenças

Essa aba exibe a lista de licenças de lançamento disponíveis que pode integrar em sua aplicação. By default, the list is empty. You must explicitly add your *4D Developer Professional* license as well as each *4D Desktop Volume* license to be used in the application built. Pode adicoinar outro número de 4D Developer Professional e licenças associadas que está sendo usada atualmente.

Para remover ou adicionar uma licença, use os botões **[+]** e **[-]** no fundo da janela.

Quando clicar no botão \[+]  uma caixa de diálogo abrir arquivo aparece com os conteúdos da pasta *Licenças* em sua máquina. Para saber mais sobre o local dessa pasta, veja o comando [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) .

Precisa deteminar os arquivos que contenham sua licença Developr assim como aquelas contendo suas licenças de lançamento. Estes arquivo foram gerados ou atualizados quando foram compradas as licenças  *4D Developer Professional* e *4D Desktop Volume* .

Quando tiver selecionado um arquivo, a lista indica as caracteristicas da licença que contém.

*   **License #** - Número de licença de produto
*   **License** - Nome do produto
*   **Expiration date** - Prazo de validade da licença (se houver
*   **Path** -  Local no disco

Se uma licença não for válida, uma mensagem vai avisar.

Pode determinar quantos arquivos válidos quantos quiser. Quando construir uma aplicação executável, 4D vai usar a licença mais apropriada que esteja disponível.
> Licenças dedicadas "R" são necessárias para construir aplicações baseadas em versões  "R-release" (número de licença para produtos "R" começa com "R-4DDP").

Depois que a aplicação for construída, um novo arquivo de  licença de lançamento é incluído automaticamente na pasta Licenças ao lado da aplicação executável (Windows) ou do pacote (macOS).


### Certificado de assinatura OS X

O construtor da aplicação pode assinar aplicações fusionadas 4D em macOS (aplicações monousuário, 4D Server e partes clientes em macOS). A assinatura de uma aplicação a autoriza a ser executada usando uma funcionalidade Gatekeeper de macOS quando a opção "Mac App Store and identified Developers" for selecionada  (ver "About Gatekeeper" abaixo).

- Marque a opção **Sign application** para incluir certificação no construtor de aplicação para OSX. 4D vai verificar a disponibilidade dos elementos exigidos para certificação quando a construção ocorrer:

![](assets/en/Project/buildapposxcertProj.png)

Esta opção é exibida em Windows e macOS, mas só é considerada em versões macOS.

*   **Nome de certificado** - Digite o nome de seu certificado desenvolvedor validado por Apple. O nome do certificado é geralmente o nome do certificado no serviço Keychain Access  (parte em vermelho no exemplo abaixo):

![](assets/en/Project/certificate.png)

Para obter um certificado de desenvolvedor de  Apple, Inc., pode usar os comandos do menu Keychain Access ou ir aqui: [http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html](http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html).
> Esse certificado exige a presença da serviço Apple codesign, que é fornecido como padrão e geralmente está na pasta “/usr/bin/”. Se um erro acontecer, tenha certeza que o serviço está presente em seu disco.


#### Sobre o Gatekeeper

Gatekeeper é uma funcionalidade de segurança de OS X que controla a execução de aplicações baixadas da  Internet. Se uma aplicação baixada não vier da Apple Store ou não for assinada, ela será rejeitada e não poderá ser lançada.

A opção **Sign application** do construtor de aplicação 4D permite gerar aplicações que são compatíveis com essa opção por padrão.


#### Sobre Autenticação

Autenticação de Aplicação é altamente recomendado por  Apple desde macOS 10.14.5 (Mojave) e 10.15 (Catalina), já que aplicações não autenticadas lançadas via internet são bloqueadas por padrão.

Em 4D v18, as funcionalidades [de assinatura integradas](#os-x-signing-certificate) foram atualizadas para atender às exigências de Apple usando o serviço de autenticação de Apple. The notarization itself must be conducted by the developer and is independent from 4D (note also that it requires installing Xcode). Veja [este blog 4D ](https://blog.4d.com/how-to-notarize-your-merged-4d-application/) que oferece uma descrição passo a passo do processo de autenticação.

para saber mais sobre o conceito de autenticação, veja [esta página do site desenvolvedor Apple](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow).

## Ícones de personalização de aplicações

4D associa um ícone padrão com aplicações stand-alone, servidor e cliente, entretanto pode personalizar o ícone para cada aplicação.

*   **macOs** - Quando construir uma aplicação de duplo clique, 4D maneja a personalização do ícone. Para fazer isso, deve criar um arquivo ícone  (tipo icns), antes de construir o arquivo da aplicação, e colocá-lo na pasta projeto.
> Apple, Inc. oferece uma ferramenta especifica para construir *icns* arquivos ícones (para mais informação, veja [documentação Apple](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2)).

    Seu arquivo ícone deve ter o mesmo nome que o arquivo de projeto e incluir a extensão *.icns*. 4D leva esse arquivo em consideração automaticamente quando construir uma aplicação de duplo clique (o arquivo *.icns* é renomeado *ApplicationName.icns* e copiado na pasta Resources;  *A entrada CFBundleFileIcon*  de *info.plist* arquivo for atualizado).

*   **Windows** - Quando construir uma aplicação duplo clique, 4D gerencia a personalização do ícone. Para fazer isso, deve criar um arquivo de ícone (*.ico* extensão), antes de construir o arquivo aplicação, e colocá-lo na pasta projeto.

    Seu arquivo ícone deve ter o mesmo nome que o arquivo de projeto e inclui a extensão *.ico*. 4D automaticamente leva em conta esse arquivo quando construir a aplicação de duplo clique.

Pode também estabelecer especificamente [XML keys](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html) no arquivo buildApp.4DSettings para determinar cada ícone para usar. As chaves abaixo são disponíveis:

- RuntimeVLIconWinPath
- RuntimeVLIconMacPath
- ServerIconWinPath
- ServerIconMacPath
- ClientMacIconForMacPath
- ClientWinIconForMacPath
- ClientMacIconForWinPath
- ClientWinIconForWinPath



## Gerenciamento de arquivos de dados

### Abrir o arquivo de dados

Quando um usuário lança uma aplicação fusionada ou uma atualização (monousuário ou cliente/servidor), 4D tenta selecionar um arquivo de dados válido. Vários locais são examinadas pela aplicação sucessivamente.

A sequencia de abertura para lançar uma aplicação fusionada é:

1. 4D tenta abrir o último arquivo de dados aberto, [como descrito abaixo](#last-data-file-opened) (não é aplicável durante o lançamento inicial).
2. Se não for encontrado, 4D tenta abrir o arquivo de dados em uma pasta de dados do lado do arquivo .4DZ em modo apenas leitura.
3. Se não for encontrado, 4D tenta abrir o arquivo de dados padrão (mesmo nome e mesmo local que o arquivo .4DZ).
4. Se não for encontrado, 4D exibe uma caixa de diálogo "Open data file" .


### ùltimo arquivo de dados aberto

#### Rota do último arquivo de dados
Qualquer aplicação standalone ou servidor construida com 4D armazena o último arquivo de dados aberto na pasta preferencia de usuário doa aplicação.

O local da pasta de preferências de usuário da aplicação corresponde à rota retornada pela declaração abaixo:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

A rota de arquivo de dados é armazenado em um arquivod edicado chamado *lastDataPath.xml*.

Graças a essa arquitetura, quando oferecer uma atualização de sua aplicação, o arquivo de dados de usuário local (último arquivo de dados usado) é aberto automaticamente no primeiro lançamento

Esse mecanismo geralmente é adeqaudo para lançamentos padrão. Entretanto, por razões específicas, por exemplo se quiser dupliar suas aplicações fusionadas, pode querer mudar a maneira em que os arquivos de dados estão conectados à aplicação (descrito abaixo).

#### Configurando o modo de  data linking mode

Com suas aplicações compiladas, 4D automaticamente usa o último arquivo de dados aberto. Como padrão, a rota de cada arquivo de dados é armazenada na pasta de preferências de usuário da aplicação e é conectada ao  **nome da aplicação**

Isso pode ser inadequado se quiser duplicar uma aplicação fusionada criada para usar arquivos de dados diferentes.

Isso pode ser inadequado se quiser duplicar uma aplicação fusionada criada para ser usada com arquivos de dados diferentes. Aplicações duplicadas na verdade partilharm a pasta de preferências de usuário da aplicação e assim, sempre usam o mesmo arquivo de dados - mesmo se o arquivo de dados for renomeado, porque o último arquivo usado para essa aplicação está aberto..

4D  assim perlite linkar a rota do arquivo de dados na rota da aplicação. In this case, the data file will be linked using a specific path and will not just be the last file opened. Faz assim um link de seus dados  **com a rota da aplicação**.

Esse modo permite duplicar suas aplicações fusionadas sem quebrar o linke ao arquivo de dados. Entretanto, com essa opção, se o pacote dea aplicação for movido no disco, o usuário será pedido um arquivo de dados, já que a rota da aplicação não corresponde mais com o atributo "executablePath" (depois que o usuário tiver selecionar um arquivo de dados, o arquivo *lastDataPath.xml* é também atualizado).


*Duplicação quando dados linkados pelo nome da aplicação:* ![](assets/en/Project/datalinking1.png)

*Duplicação quando os dados são linkados pela rota da aplicação:* ![](assets/en/Project/datalinking2.png)

Pode selecionar o modo de linking de dados durante o processo de construção da aplicação. É possível:

- Usar a [página Application](#application) ou [a página Client/Server](#client-server) do diálogo Build Application.
- Use a chave  XML**LastDataPathLookup**  (aplicações monousuário ou servidor).


### Definir uma pasta padrão de dados

4D permite que defina um arquivo de dados padrão no estágio de construção da aplicação. When the application is launched for the first time, if no local data file is found (see [opening sequence described above](#opening-the-data-file)), the default data file is automatically opened silently in read-only mode by 4D. Isso dá mais controle sobre a criação de arquivos de dados ou sua abertura quando lançar uma aplicação fusionada pela primeira vez.

Mais especificamente os casos abaixos são cobertos:

- Evitar a exibição do diálogo  4D "Open Data File" quando lançar uma nova aplicação fusionada atualizada. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.
- Allowing the distribution of merged applications with read-only data (for demo applications, for instance).


To define and use a default data file:

- You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. This file must be provided along with all other necessary files, depending on the database configuration: index (.4DIndx), external Blobs, journal, etc. It is your responsibility to provide a valid default data file. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.
- When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.

The following graphic illustrates this feature:

![](assets/en/Project/DefaultData.png)

When the default data file is detected at first launch, it is silently opened in read-only mode, thus allowing you to execute any custom operations that do not modify the data file itself.


## Management of client connection(s)

The management of connections by client applications covers the mechanisms by which a merged client application connects to the target server, once it is in its production environment.

### Connection scenario

The connection procedure for merged client applications supports cases where the dedicated server is not available. The startup scenario for a 4D client application is the following:

- The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).  
  OR  
  If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application tries to connect to the specified server address.
- If this fails, the client application tries to connect to the server using information stored in the application's user preferences folder ("lastServer.xml" file, see last step).
- If this fails, the client application displays a connection error dialog box.
    - If the user clicks on the **Select...** button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.
    - If the user clicks on the **Quit** button, the client application quits.
- If the connection is successful, the client application saves this connection information in the application's user preferences folder for future use.

### Storing the last server path

The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. This folder is stored at the following location:

```4d
userPrefs:=Get 4D folder(Active 4D Folder)
```

This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). When this case occurs for the first time, the server selection dialog box is displayed (if allowed, see below) and the user can manually select an alternate server, whose path is then saved if the connection is successful. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.

> - When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the [IPAddress](https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html) key in the "BuildApp.4DSettings" file. The mechanism addresses cases of temporary unavailability.  
> - Pressing the **Alt/Option** key at startup to display the server selection dialog box is still supported in all cases.



### Availability of the server selection dialog box in case of error

You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the [ServerSelectionAllowed](https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html) XML key on the machine where the application was built:

- **Display of an error message with no access possible to the server selection dialog box**. Default operation. The application can only quit.  
  `ServerSelectionAllowed`: **False** or key omitted ![](assets/en/Project/connect1.png)

- **Display of an error message with access to the server selection dialog box possible**. The user can access the server selection window by clicking on the **Select...** button.   
  `ServerSelectionAllowed`: **True** ![](assets/en/Project/connect2.png) ![](assets/en/Project/connect3.png)
