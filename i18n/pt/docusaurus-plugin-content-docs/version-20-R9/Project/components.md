---
id: components
title: Componentes
---

Um componente 4D é um conjunto de código 4D e/ou formulários que representam uma ou mais funcionalidades que pode adicionar e usar nos seus projetos. Por exemplo, o componente [4D SVG](https://github.com/4d/4D-SVG) adiciona comandos avançados e um mecanismo de renderização integrado que pode ser usado para exibir arquivos SVG.

Você pode [develop](../Extensions/develop-components.md) e [build](../Desktop/building.md) seus próprios componentes 4D, ou faça download de componentes públicos compartilhados pela comunidade 4D que podem ser encontrados no GitHub.

Ao desenvolver em 4D, os arquivos de componentes podem ser armazenados de forma transparente no seu computador ou em um repositório do Github.

## Componentes interpretados e compilados

Componentes podem ser interpretados ou [compiled](../Desktop/building.md).

- Um projeto 4D em modo interpretado pode usar componentes interpretados ou compilados.
- Um projeto 4D em execução no modo compilado não pode usar componentes interpretados. Por isso não pode ser usado em um componente.

### Pasta do pacote

A pasta do pacote de um componente (*MyComponent.4dbase*) pode conter:

- para **componentes interpretados**: um padrão [Pasta do projeto](../Project/architecture.md). O nome da pasta do pacote deve ser sufixado com **.4dbase** se você quiser instalá-lo na pasta [**Components** do seu projeto](architecture.md#components).
- para **componentes compilados**:
    - ou uma pasta "Conteúdo" contendo um arquivo .4DZ, uma pasta de *Recursos*, um arquivo *Info.plist* (arquitetura recomendada)
    - ou diretamente um arquivo .4DZ com outras pastas como *Recursos*.

:::note

A arquitetura da pasta "Contents" é recomendada para componentes, se você deseja [notarize](../Desktop/building.md#about-notarization) suas aplicações no macOS.

:::

## Carregando componentes

:::note

Esta página descreve como trabalhar com componentes nos ambientes **4D** e **4D Server**. Em outros ambientes, os componentes são geridos de forma diferente:

- em [4D no modo remoto](../Desktop/clientServer.md), componentes são carregados pelo servidor e enviados para o aplicativo remoto
- em aplicações mescladas, componentes são [incluídos na etapa de compilação](../Desktop/building.md#plugins--components-page).

:::

### Visão Geral

Para carregar um componente no seu projeto 4D, você pode:

- copiar os arquivos do componente na pasta [**Components** do seu projeto](architecture.md#components) (as pastas do pacote de componentes interpretados devem ser sufixas com ".4dbase", veja acima),
- ou, declarar o componente nas **dependências**. fil\*\* arquivo de seu projeto; isto é feito automaticamente para arquivos locais quando você [**adicionar uma dependência usando a interface do Gerenciador de Dependência**](#adding-a-github-dependency).

Os componentes declarados no arquivo **dependencies.json** podem ser armazenados em locais diferentes:

- no mesmo nível da pasta do pacote do seu projeto 4D: este é o local padrão,
- em qualquer lugar de sua máquina: o caminho do componente deve ser declarado no arquivo **environment4d.json**
- em um repositório GitHub: o caminho do componente pode ser declarado no arquivo **dependencies.json** ou no arquivo **environment4d.json**, ou em ambos os arquivos.

Se o mesmo componente for instalado em locais diferentes, uma [ordem de prioridade](#prioridade) é aplicada.

### dependencies.json e environment4d.json

#### dependencies.json

O arquivo **dependencies.json** faz referência a todos os componentes necessários em seu projeto 4D. Esse arquivo deve estar localizado na pasta **Sources** da pasta do projeto 4D, por exemplo:

```
	/MyProjectRoot/Project/Sources/dependencies.json
```

Pode conter:

- nomes de componentes [armazenado localmente](#local-components) (caminho ou caminho padrão definido em um arquivo **environment4d.json**),
- nomes de componentes [armazenados nos repositórios do GitHub](#components-stored-on-github) (seus caminhos podem ser definidos neste arquivo ou em um arquivo **environment4d.json**).

#### environment4d.json

O arquivo **environment4d.json** é opcional. Ele permite que você defina **caminhos personalizados** para alguns ou todos os componentes declarados no arquivo **dependencies.json**. Este arquivo pode ser armazenado na pasta pacote de projeto ou em uma das pastas pais, a qualquer nível (superior à raiz).

Os principais benefícios desta arquitetura são os seguintes:

- você pode armazenar o **ambiente4d. arquivo son** em uma pasta pai de seus projetos e decida não fazer commit dele, permitindo que você tenha sua organização local de componentes.
- se quiser usar o mesmo repositório GitHub para vários projetos, você poderá fazer referência a ele no arquivo **environment4d.json** e declará-lo no arquivo **dependencies.json**.

### Prioridade

Uma vez que os componentes podem ser instalados de maneiras diferentes, uma ordem de prioridade é aplicada quando o mesmo componente é referenciado em vários locais:

**Prioridade mais alta**

1. Componentes armazenados na pasta [**Components** do projeto](architecture.md#components).
2. Componentes declarados no arquivo **dependencies.json** (o **environment4d.json** declarou o caminho substitui o caminho **dependencies.json** para configurar um ambiente local).
3. Componentes 4D do usuário interno (por exemplo, 4D NetKit, 4D SVG...)

**Prioridade mais baixa**

```mermaid
flowchart TB
    id1("1<br/>Components from project's Components folder")
	~~~
    id2("2<br/>Components listed in dependencies.json")
	~~~
    id2 -- environment4d.json gives path --> id4("Load component based on path declared in environment4d.json")
    ~~~
    id3("3<br/>User 4D components")
    id2 -- environment4d.json doesn't give path --> id5("Load component next to package folder")
    ~~~
    id3("3<br/>User 4D components")
```

Quando um componente não puder ser carregado por causa de outra instância do mesmo componente localizada em um nível de prioridade mais alto ambos recebem um [status]específico (#dependency-status): o componente não-carregado é dado o status *Sobrecargado*, enquanto o componente carregado tem o status *Sobrecarga*.

### Componentes locais

Você declara um componente local no arquivo [**dependencies.json**](#dependenciesjson) da seguinte maneira:

```json
{
    "dependencies": {
        "myComponent1" : {},
        "myComponent2" : {}
    }
}
```

... onde "myComponent1" e "myComponent2" são o nome dos componentes a serem carregados.

Por padrão, se "myComponent1" e "myComponent2" não forem declarados em um arquivo [**environment4d.json**](#environment4djson), 4D procurará pela pasta de pacote do componente (*i. .* A pasta raiz do projeto do componente) no mesmo nível que a pasta de pacote do seu projeto 4D, por exemplo:

```
	/MyProjectRoot/
	/MyProjectComponentRoot/
```

Graças a essa arquitetura, você pode simplesmente copiar todos os seus componentes no mesmo nível dos seus projetos e fazer referência a eles nos arquivos **dependencies.json**.

:::note

Se você não quiser se beneficiar das **dependências. arquitetura do son**, você pode instalar componentes locais copiando seus arquivos na pasta [**Components** do seu projeto](architecture.md#components).

:::

#### Personalizando caminhos dos componentes

Se você quiser personalizar a localização dos componentes locais, você declara os caminhos para as dependências que não são armazenados no mesmo nível que a pasta do projeto no [**environment4d. son**](#environment4djson) arquivo.

Você pode usar caminhos **relativos** ou **absolutos** (veja abaixo).

Exemplos:

```json
{
	"dependencies": {
		"myComponent1" : "MyComponent1",
		"myComponent2" : "../MyComponent2",
    "myComponent3" : "file:///Users/jean/MyComponent3"
    }
}
```

:::note

Se um caminho do componente for declarado no **ambiente4d. arquivo son** não é encontrado quando o projeto é iniciado, o componente não é carregado e obtém o *Não encontrado* [status](#dependency-status), mesmo que uma versão do componente exista ao lado da pasta do pacote do projeto.

:::

#### Caminhos relativos versus caminhos absolutos

Os caminhos são expressos na sintaxe POSIX, conforme descrito em [este parágrafo](../Concepts/paths#posix-syntax).

Os caminhos relativos são relativos ao arquivo [`environment4d.json`](#environment4djson). Caminhos absolutos estão vinculados à máquina do usuário.

Usar caminhos relativos é **recomendado** na maioria dos casos, já que eles fornecem flexibilidade e portabilidade da arquitetura de componentes, especialmente se o projeto for hospedado em uma ferramenta de controle de fonte.

Caminhos absolutos devem ser usados apenas para componentes específicos para um computador e um usuário.

### Componentes armazenados no GitHub

Componentes 4D disponíveis já que os lançamentos do GitHub podem ser referenciados e carregados automaticamente e atualizados nos seus projetos 4D.

:::note

Em relação aos componentes armazenados no GitHub, ambos os arquivos [**dependencies.json**](#dependenciesjson) e [**environment4d.json**](#environment4djson) suportam o mesmo conteúdo.

:::

#### Configurando o repositório GitHub

Para ser capaz de fazer referência direta e usar um componente 4D armazenado no GitHub, você precisa configurar o repositório do componente GitHub:

- Compacte os arquivos de componentes no formato ZIP.
- Nomeie este arquivo com o mesmo nome do repositório do GitHub.
- Integre o arquivo em uma [versão do GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) do repositório.

Essas etapas podem ser facilmente automatizadas, com o código 4D ou usando o GitHub Actions, por exemplo.

#### Declarando caminhos

Você declara um componente armazenado no GitHub no arquivo [**dependencies.json**](#dependenciesjson) da seguinte maneira:

```json
{
	"dependencies": {
		"myGitHubComponent1": {
			"github" : "JohnSmith/myGitHubComponent1"
		},
		"myGitHubComponent2": {}
	}
}
```

... onde "myGitHubComponent1" é referenciado e declarado para o projeto, embora "myGitHubComponent2" seja apenas referenciado. Você precisa declará-lo no arquivo [**environment4d.json**](#environment4djson):

```json
{
	"dependencies": {
		"myGitHubComponent2": {
			"github" : "JohnSmith/myGitHubComponent2"
		}
	}
}
```

"myGitHubComponent2" pode ser usado por vários projetos.

#### Tags e versões

Quando uma versão é criada no GitHub, ela é associada a uma **tag** e uma **versão**. O gerenciador de dependências usa essas informações para lidar com a disponibilidade automática de componentes.

:::note

Se você selecionar a [**Seguir 4D Version**](#defining-a-github-dependency-version-range) regra de dependência, você precisa usar uma [convenção de nome específico para as tags](#naming-conventions-for-4d-version-tags).

:::

- **Tags** são textos que referenciam exclusivamente uma versão. No arquivo [**dependencies.json**](#dependenciesjson) e [**environment4d.json**](#environment4djson) arquivos, você pode indicar a tag de lançamento que deseja usar no seu projeto. Por exemplo :

```json
{
	"dependencies": {
		"myFirstGitHubComponent": {
			"github": "JohnSmith/myFirstGitHubComponent",
			"tag": "beta2"
		}
	}
}
```

- Uma versão também é identificada por uma **versão**. O sistema de versionamento usado é baseado no conceito de [*Versão semântica*](https://regex101.com/r/Ly7O1x/3/), que é o mais comummente usado. Cada número de versão é identificado da seguinte forma: `majorNumber.minorNumber.pathNumber`. Da mesma forma que para marcadores, você pode indicar a versão do componente que você deseja usar em seu projeto, como neste exemplo:

```json
{
	"dependencies": {
		"myFirstGitHubComponent": {
			"github": "JohnSmith/myFirstGitHubComponent",
			"version": "2.1.3"
		}
	}
}
```

Um intervalo é definido por duas versões semânticas, um mínimo e um máximo, com as operadoras '\< ë> £>= ├<= ├='. O `*` pode ser usado como um espaço reservado para todas as versões. ~ e ^ prefixos define versões começando em um número e até a próxima versão principal e secundária.

Eis alguns exemplos:

- "latest": a versão com o selo "latest" nas versões GitHub.
- "\*": a versão mais recente lançada.
- "1.\*": todas as versões da versão principal 1.
- "1.2.\*": todos os patches da versão menor 1.2.
- ">=1.2.3": a última versão, começando com a versão 1.2.3.
- ">1.2.3": a versão mais recente, começando com a versão imediatamente após a versão 1.2.3.
- "^1.2.3": a última versão 1, começando com a versão 1.2.3 e estritamente inferior à versão 2.
- "~1.2.3": a última versão 1.2, começando com a versão 1.2.3 e estritamente inferior à versão 1.3.
- "<=1.2.3": a versão mais recente até a 1.2.3.
- "1.0.0 - 1.2.3" ou ">=1.0.0 <=1.2.3": versão entre 1.0.0 e 1.2.3.
- "`<1.2.3 || >=2`": versão que não está entre 1.2.3 e 2.0.0.

Se você não especificar uma tag ou uma versão, 4D recupera automaticamente a "versão mais recente".

O gerenciador de dependências verifica periodicamente se as atualizações do componente estão disponíveis no Github. Se uma nova versão estiver disponível para um componente, um indicador de atualização é então exibido para o componente na lista de dependências, [dependendo das configurações](#defining-a-github-dependency-version-range).

#### Nomeando convenções para tags de versão 4D

Se quiser usar a [**Seguir 4D Version**](#defining-a-github-dependency-version-range) regra de dependência, os marcadores de versões de componentes no repositório do Github devem obedecer a convenções específicas.

- **Versões do LT**: padrão `x.y.p`, onde `x. ` corresponde à versão 4D principal a seguir e o `p` (opcional) pode ser usado para versões patch ou atualizações adicionais. Quando um projeto especifica que segue a versão 4D para *x. \* Versão LTS, o Gerenciador de Dependências irá resolvê-lo como "a versão mais recente x.*" se disponível ou "versão abaixo de x". Se não existir essa versão, o usuário será notificado. Por exemplo, "20.4" será resolvido pelo Gerenciador de Dependências como "a última versão do componente 20.\* ou versão abaixo de 20".

- **Versões do R-Release**: `xRy. ` padrão, onde `x` e `y` correspondem à versão principal 4D R-release para seguir e `p` (opcional) podem ser usados para versões patch ou atualizações adicionais. Quando um projeto especifica que segue a versão 4D para *x. \* Versão LTS, o Gerenciador de Dependências irá resolvê-lo como "a versão mais recente x.*" se disponível ou "versão abaixo de x. Se não existir essa versão, o usuário será notificado. Por exemplo, "20R9" será resolvido pelo Gerenciador de Dependências como "a última versão do componente abaixo de 20R10".

:::note

The component developer can define a minimum 4D version in the component's [`info.plist`](../Extensions/develop-components.md#infoplist) file.

:::

#### Repositórios privados

If you want to integrate a component located in a private repository, you need to tell 4D to use a connection token to access it.

Para fazer isso, em sua conta GitHub, crie um token **classic** com direitos de acesso a **repo**.

:::note

Para mais informações, consulte a [interface de token do GitHub](https://github.com/settings/tokens).

:::

Em seguida, você precisa [fornecer seu token de conexão](#providing-your-github-access-token) para o gerenciador de dependências.

#### Cache local para dependências

Referenced GitHub components are downloaded in a local cache folder then loaded in your environment. The local cache folder is stored at the following location:

- en macOs: `$HOME/Library/Caches/<app name>/Dependencies`
- no Windows: `C:\Users\<username>\AppData\Local\<app name>\Dependencies`

...onde `<app name>` pode ser "4D", "4D Server" ou "tool4D".

### dependency-lock.json

Um arquivo `dependency-lock.json` foi criado na pasta [`userPreferences`](architecture.md#userpreferencesusername) do seu projeto.

This file logs information such as the state of dependencies, paths, urls, loading errors, as well as other information. It could be useful for component loading management or troubleshooting.

## Monitoramento das dependências do projeto

In an opened project, you can add, remove, update, and get information about dependencies and their current loading status in the **Dependencies** panel.

Para exibir o painel Dependências:

- with 4D, select the **Design/Project Dependencies** menu item (Development environment),<br/>
    ![dependency-menu](../assets/en/Project/dependency-menu.png)

- com 4D Server, selecione o item de menu **Janela/Dependências do projeto**.<br/>
    ![dependency-menu-server](../assets/en/Project/dependency-menu-server.png)

The Dependencies panel is then displayed. Dependencies are sorted by name in alphabetical order:

![dependency](../assets/en/Project/dependency.png)

The Dependencies panel interface allows you to manage dependencies (on 4D single-user and 4D Server).

### Filtragem das dependências

Por padrão, todas as dependências identificadas pelo gerenciador de dependências são listadas, independentemente de seu [estado](#dependency-status). You can filter the displayed dependencies according to their status by selecting the appropriate tab at the top of the Dependencies panel:

![dependency-tabs](../assets/en/Project/dependency-tabs.png)

- **Ativo**: dependências carregadas e podem ser usadas no projeto. Isso inclui dependências *overloading*, que são de fato carregadas. *Overloaded* dependencies are listed in the **Conflicts** panel, along with all conflicting dependencies.
- **Inativo**: dependências que não estão carregadas no projeto e não estão disponíveis. There are many possible reasons for this status: missing files, version incompatibility...
- **Conflito**: dependências carregadas, mas que sobrecarregam pelo menos outra dependência em um [nível de prioridade](#priority) inferior. Overloaded dependencies are also displayed so that you can check the origin of the conflict and take appropriate actions.

### Estado de dependências

Dependencies requiring the developer's attention are indicated by a **status label** at the right side of the line and a specific background color:

![dependency-status](../assets/en/Project/dependency-conflict2.png)

Estão disponíveis as seguintes etiquetas de status:

- **Overloaded**: a dependência não é carregada porque está sobrecarregada por outra dependência com o mesmo nome em um [nível de prioridade] mais alto (#prioridade).
- **Overloading**: a dependência está carregada e está sobrecarregando uma ou mais dependências com o mesmo nome em um [nível de prioridade] inferior (#prioridade).
- **Not found**: a dependência está declarada no arquivo dependencies.json, mas não foi encontrada.
- **Inactive**: a dependência não é carregada porque não é compatível com o projeto (por exemplo, o componente não é compilado para a plataforma atual).
- **Duplicated**: The dependency is not loaded because another dependency with the same name exists at the same location (and is loaded).
- **Available after restart**: The dependency reference has just been added or updated [using the interface](#monitoring-project-dependencies), it will be loaded once the application restarts.
- **Unloaded after restart**: The dependency reference has just been removed [using the interface](#removing-a-dependency), it will be unloaded once the application restarts.
- **Update available \<version\>**: A new version of the GitHub dependency matching your [component version configuration](#defining-a-github-dependency-version-range) has been detected.
- **Refreshed after restart**: The [component version configuration](#defining-a-github-dependency-version-range) of the GitHub dependency has been modified, it will be adjusted the next startup.
- **Atualização recente**: uma nova versão da dependência do GitHub foi carregada na inicialização.

A tooltip is displayed when you hover over the dependency line, provding additional information about the status:

![dependency-tips](../assets/en/Project/dependency-tip1.png)

### Origem da dependência

The Dependencies panel lists all project dependencies, whatever their origin, i.e. wherever they come from. The dependency origin is provided by the tag under its name:

![dependency-origin](../assets/en/Project/dependency-origin.png)

As seguintes origens são possíveis:

| Etiqueta de origem                | Descrição                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------- |
| Componente 4D                     | Componente 4D incorporado, armazenado na pasta `Components` da aplicação 4D  |
| dependencies.json | Component declared in the [`dependencies.json`](#dependenciesjson) file      |
| Environment                       | Componente declarado no arquivo [`environnement4d.json`](#environment4djson) |
| Componente do projeto             | Componente localizado na pasta [`Components`](architecture.md#components)    |

**Clique com o botão direito do mouse** em uma linha de dependência e selecione **Mostrar no disco** para revelar o local de uma dependência:

![dependency-show](../assets/en/Project/dependency-show.png)

:::note

This item is not displayed if the dependency is inactive because its files are not found.

:::

Component icon and location logo provide additional information:

- The component logo indicates if it is provided by 4D or a third-party developer.
- Local components can be differentiated from GitHub components by a small icon.

![dependency-origin](../assets/en/Project/dependency-github.png)

### Adding a local dependency

Para adicionar uma dependência local, clique no botão **+** na área de rodapé do painel. A caixa de diálogo abaixo é mostrada:

![dependency-add](../assets/en/Project/dependency-add.png)

Certifique-se de que a aba **Local** esteja selecionada e clique no botão **...**. A standard Open file dialog box is displayed, allowing you to select the component to add. Você pode selecionar um arquivo [**.4DZ**](../Desktop/building.md#build-component) ou um arquivo [**.4DProject**](architecture.md#applicationname4dproject-file).

If the selected item is valid, its name and location are displayed in the dialog box.

![dependency-selected](../assets/en/Project/local-selected.png)

If the selected item is not valid, an error message is displayed.

Clique em **Adicionar** para adicionar a dependência ao projeto.

- Se você selecionar um componente localizado próximo à pasta do pacote do projeto (local padrão), ele será declarado no arquivo [**dependencies.json**](#dependenciesjson).
- If you select a component that is not located next to the project package folder, it is declared in the [**dependencies.json**](#dependenciesjson) file and its path is declared in the [**environment4d.json**](#environment4djson) file (see note). O painel Dependências pergunta se você deseja salvar um [caminho relativo ou absoluto](#relative-paths-vs-absolute-paths).

:::note

If no [**environment4d.json**](#environment4djson) file is already defined for the project at this step, it is automatically created in the project package folder (default location).

:::

A dependência é adicionada à [lista de dependências inativas](#dependency-status) com o estado **Disponível após reiniciar**. It will be loaded once the application restarts.

### Adicionar uma dependência GitHub

Para adicionar uma [dependência GitHub](#components-stored-on-github), clique no botão **+** na área de rodapé do painel e selecione a aba **GitHub**.

![dependency-add-git](../assets/en/Project/dependency-add-git.png)

Enter the path of the GitHub repository of the dependency. It could be a **repository URL** or a **github-account/repository-name string**, for example:

![dependency-add-git-2](../assets/en/Project/dependency-add-git-2.png)

Once the connection is established, the GitHub icon ![dependency-gitlogo](../assets/en/Project/dependency-gitlogo.png) is displayed on the right side of the entry area. You can click on this icon to open the repository in your default browser.

:::note

If the component is stored on a [private GitHub repository](#private-repositories) and your personal token is missing, an error message is displayed and a  **Add a personal access token...** button is displayed (see [Providing your GitHub access token](#providing-your-github-access-token)).

:::

Defina o [intervalo de versão de dependência](#tags-and-versions) para usar neste projeto. By defaut, "Latest" is selected, which means that the lastest version will be automatically used.

Clique no botão **Adicionar** para adicionar a dependência ao projeto.

The GitHub dependency is declared in the [**dependencies.json**](#dependenciesjson) file and added to the [inactive dependency list](#dependency-status) with the **Available at restart** status. It will be loaded once the application restarts.

#### Defining a GitHub dependency version range

Você pode definir a opção [tag ou versão](#tags-and-versions) para uma dependência:

![dependency-git-tag](../assets/en/Project/dependency-git-tag.png)

- **Latest**: Selected by default and allows to download the release that is tagged as the latest (stable) version.
- **Até a próxima versão major**: defina um [intervalo de versão semântica](#tags-and-versions) para restringir as atualizações para a próxima versão principal.
- **Até a próxima versão minor**: da mesma forma, restringe as atualizações para a próxima versão minor.
- **Versão exata (etiqueta)**: selecione ou insira manualmente uma [etiqueta específica](#tags-and-versions) na lista disponível.
- **Follow 4D Version**: Download the latest component release that is compatible with the running 4D version. You can use this dependency rule only if the component release tags follow the appropriate [naming convention](#naming-conventions-for-4d-version-tags).

The current GitHub dependency version is displayed on the right side of the dependency item:

![dependency-origin](../assets/en/Project/dependency-version.png)

#### Modifying the GitHub dependency version range

You can modify the [version setting](#defining-a-github-dependency-version-range) for a listed GitHub dependency: select the dependency to modify and select **Modify the dependency...** from the contextual menu. Na caixa de diálogo "Modificar a dependência", edite o menu da Regra de dependência e clique em **Aplicar**.

Modifying the version range is useful for example if you use the automatic update feature and want to lock a dependency to a specific version number.

### Updating GitHub dependencies

The Dependency manager provides an integrated handling of updates on GitHub. The following features are supported:

- Automatic and manual checking of available versions
- Automatic and manual updating of components

As operações manuais podem ser feitas **por dependência** ou **para todas as dependências**.

#### Checking for new versions

Dependencies are regularly checked for updates on GitHub. This checking is done transparently in background.

:::note

If you provide an [access token](#providing-your-github-access-token), checks are performed more frequently, as GitHub then allows a higher frequency of requests to repositories.

:::

In addition, you can check for updates at any moment, for a single dependency or for all dependencies:

- To check for updates of a single dependency, right-click on the dependency and select **Check for updates** in the contextual menu.

![componente de verificação](../assets/en/Project/check-component-one.png)

- To check for updates of all dependencies, click on the **options** menu at the bottom of the Dependency manager window and select **Check for updates**.

![componentes de verificação](../assets/en/Project/check-component-all.png)

If a new component version matching your [component versioning configuration](#defining-a-github-dependency-version-range) is detected on GitHub, a specific dependency status is displayed:

![dependency-new-version](../assets/en/Project/dependency-available.png)

Você pode decidir [atualizar o componente](#updating-dependencies) ou não.

If you do not want to use a component update (for example you want to stay with a specific version), just let the current status (make sure the [**Automatic update**](#automatic-update) feature is not checked).

#### Updating dependencies

**Updating a dependency** means downloading a new version of the dependency from GitHub and keeping it ready to be loaded the next time the project is started.

You can update dependencies at any moment, for a single dependency or for all dependencies:

- To update a single dependency, right-click on the dependency and select **Update \<component name\> on next startup** in the contextual menu or in the **options** menu at the bottom of the Dependency manager window:

![componente de verificação](../assets/en/Project/update-component-one.png)

- To update all dependencies at once, click on the **options** menu at the bottom of the Dependency manager window and select **Update all remote dependencies on next startup**:

![check components](../assets/en/Project/update-component-all.png)

In any cases, whatever the current dependency status, an automatic checking is done on GitHub before updating the dependency, to make sure the most recent version is retrieved, [according to your component versioning configuration](#defining-a-github-dependency-version-range).

When you select an update command:

- a dialog box is displayed and proposes to **restart the project**, so that the updated dependencies are immediately available. It is usually recommended to restart the project to evaluate updated dependencies.
- if you click Later, the update command is no longer available in the menu, meaning the action has been planned for the next startup.

#### Atualização automática

The **Automatic update** option is available in the **options** menu at the bottom of the Dependency manager window.

When this option is checked (default), new GitHub component versions matching your [component versioning configuration](#defining-a-github-dependency-version-range) are automatically updated for the next project startup. This option facilitates the day-to-day management of dependency updates, by eliminating the need to manually select updates.

When this option is unchecked, a new component version matching your [component versioning configuration](#defining-a-github-dependency-version-range) is only indicated as available and will require a [manual updating](#updating-dependencies). Desmarque a opção **Atualização automática** se quiser monitorar as atualizações de dependências com precisão.

### Providing your GitHub access token

Registering your personal access token in the Dependency manager is:

- obrigatório se o componente estiver armazenado em um [repositório GitHub privado](#private-repositories),
- recomendado para uma [verificação de atualizações de dependências](#updating-github-dependencies).

To provide your GitHub access token, you can either:

- click on **Add a personal access token...** button that is displayed in the "Add a dependency" dialog box after you entered a private GitHub repository path.
- or, select **Add a GitHub personal access token...** in the Dependency manager menu at any moment.

![dependency-add-token](../assets/en/Project/dependency-add-token.png)

You can then enter your personal access token:

![dependency-add-token-2](../assets/en/Project/dependency-add-token-2.png)

You can only enter one personal access token. Once a token has been entered, you can edit it.

O token fornecido é armazenado em um arquivo **github.json** na [pasta 4D ativa](../commands-legacy/get-4d-folder.md#active-4d-folder).

### Removing a dependency

To remove a dependency from the Dependencies panel, select the dependency to remove and click on the **-** button of the panel or select **Remove the dependency...** from the contextual menu. You can select several dependencies, in which case the action is applied to all selected dependencies.

:::note

Somente as dependências declaradas no arquivo [**dependencies.json**](#dependenciesjson) podem ser removidas usando o painel Dependencies. If a selected dependency cannot be removed, the **-** button is disabled and the **Remove the dependency...** menu item is hidden.

:::

É exibida uma caixa de diálogo de confirmação. Se a dependência foi declarada no arquivo **environment4d.json**, uma opção permite que você a remova:

![dependency-remove](../assets/en/Project/remove-comp.png)

Se você confirmar a caixa de diálogo, a dependência [estado](#dependency-status) removida é automaticamente sinalizada "Unload after restart". It will be unloaded once the application restarts.


