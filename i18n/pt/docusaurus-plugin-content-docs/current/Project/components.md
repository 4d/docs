---
id: components
title: Componentes
---

Um componente 4D é um conjunto de código 4D e/ou formulários que representam uma ou mais funcionalidades que pode adicionar e usar nos seus projetos. For example, the [4D SVG](https://github.com/4d/4D-SVG) component adds advanced commands and an integrated rendering engine that can be used to display SVG files.

You can [develop](../Extensions/develop-components.md) and [build](../Desktop/building.md) your own 4D components, or download public components shared by the 4D community that [can be found on GitHub](https://github.com/search?q=4d-component\\&type=Repositories).

When developing in 4D, the component files can be transparently stored in your computer or on a Github repository.

## Componentes interpretados e compilados

Components can be interpreted or [compiled](../Desktop/building.md). A pasta do pacote de um componente pode conter:

- either a Project folder (interpreted component)
- ou um arquivo .4DZ (componente compilado)

A 4D project running in interpreted mode can use either interpreted or compiled components. A 4D project running in compiled mode cannot use interpreted components. Por isso não pode ser usado em um componente.

## Carregando componentes

:::note

Esta página descreve como trabalhar com componentes nos ambientes **4D** e **4D Server**. In other environments, components are managed differently:

- in [4D in remote mode](../Desktop/clientServer.md), components are loaded by the server and sent to the remote application.
- in merged applications, components are [included at the build step](../Desktop/building.md#plugins--components-page).

:::

### Visão Geral

To load a component in your 4D project, you can either:

- copie os arquivos de componentes na pasta [**Components** do seu projeto] (architecture.md#components),
- or, declare the component in the **dependencies.json** file of your project; this is done automatically for local files when you [**add a dependency using the Dependency manager interface**](#adding-a-dependency).

Os componentes declarados no arquivo **dependencies.json** podem ser armazenados em locais diferentes:

- at the same level as your 4D project's package folder: this is the default location,
- em qualquer lugar de sua máquina: o caminho do componente deve ser declarado no arquivo **environment4d.json**
- em um repositório GitHub: o caminho do componente pode ser declarado no arquivo **dependencies.json** ou no arquivo **environment4d.json**, ou em ambos os arquivos.

If the same component is installed at different locations, a [priority order](#priority) is applied.

### dependencies.json e environment4d.json

#### dependencies.json

O arquivo **dependencies.json** faz referência a todos os componentes necessários em seu projeto 4D. Esse arquivo deve estar localizado na pasta **Sources** da pasta do projeto 4D, por exemplo:

```
	/MyProjectRoot/Project/Sources/dependencies.json
```

Pode conter:

- names of components [stored locally](#declaring-local-components) (default path or path defined in an **environment4d.json** file),
- names of components [stored on GitHub repositories](#declaring-components-stored-on-github) (their path can be defined in this file or in an **environment4d.json** file).

#### environment4d.json

O arquivo **environment4d.json** é opcional. Ele permite que você defina **caminhos personalizados** para alguns ou todos os componentes declarados no arquivo **dependencies.json**. This file can be stored in your project package folder or in one of its parent folders, at any level (up to the root).

The main benefits of this architecture are the following:

- you can store the **environment4d.json** file in a parent folder of your projects and decide not to commit it, allowing you to have your local component organization.
- se quiser usar o mesmo repositório GitHub para vários projetos, você poderá fazer referência a ele no arquivo **environment4d.json** e declará-lo no arquivo **dependencies.json**.

### Prioridade

Since components can be installed in different ways, a priority order is applied when the same component is referenced at several locations:

**Prioridade mais alta**

1. Componentes armazenados na pasta [**Components** do projeto](architecture.md#components).
2. Components declared in the **dependencies.json** file (the **environment4d.json** declared path overrides the **dependencies.json** path to configure a local environment).
3. Internal User 4D components (e.g. 4D NetKit, 4D SVG...)

**Prioridade mais baixa**

```mermaid
flowchart TB
    id1("1\nComponents from project's Components folder")~~~
    id2("2\nComponents listed in dependencies.json")~~~
    id2 -- environment4d.json gives path --> id4("Load component\nbased on path declared\nin environment4d.json")
    ~~~
    id3("3\nUser 4D components")
    id2 -- environment4d.json doesn't give path --> id5("Load component\nnext to\npackage folder")
    ~~~
    id3("3\nUser 4D components")
```

When a component cannot be loaded because of another instance of the same component located at a higher priority level, both get a specific [status](#dependency-status): the non-loaded component is given the _Overloaded_ status, while the loaded component has the _Overloading_ status.

### Componentes locais

Você declara um componente local no arquivo [**dependencies.json**](#dependencyjson) da seguinte maneira:

```json
{
    "dependencies": {
        "myComponent1" : {},
        "myComponent2" : {}
    }
}
```

... where "myComponent1" and "myComponent2" are the name of the components to be loaded.

By default, if "myComponent1" and "myComponent2" are not declared in an [**environment4d.json**](#environment4djson) file, 4D will look for the component's package folder (_i.e._ the project root folder of the component) at the same level as your 4D project's package folder, e.g.:

```
	/MyProjectRoot/
	/MyProjectComponentRoot/
```

Graças a essa arquitetura, você pode simplesmente copiar todos os seus componentes no mesmo nível dos seus projetos e fazer referência a eles nos arquivos **dependencies.json**.

:::note

If you do not want to use the **dependencies.json** architecture, you can install local components by copying their files in the [**Components** folder of your project](architecture.md#components).

:::

#### Personalizando caminhos dos componentes

If you want to customize the location of local components, you declare the paths for the dependencies that are not stored at the same level as the project folder in the [**environment4d.json**](#environment4djson) file.

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

If a component path declared in the **environment4d.json** file is not found when the project is started, the component is not loaded and gets the _Not found_ [status](dependency-status), even if a version of the component exists next to the project's package folder.

:::

#### Caminhos relativos versus caminhos absolutos

Paths are expressed in POSIX syntax as described in [this paragraph](../Concepts/paths#posix-syntax).

Os caminhos relativos são relativos ao arquivo [`environment4d.json`](#environment4djson). Absolute paths are linked to the user's machine.

Using relative paths is **recommended** in most cases, since they provide flexibility and portability of the components architecture, especially if the project is hosted in a source control tool.

Absolute paths should only be used for components that are specific to one machine and one user.

### Components stored on GitHub

4D components available as GitHub releases can be referenced and automatically loaded in your 4D projects.

:::note

Regarding components stored on GitHub, both [**dependencies.json**](#dependenciesjson) and [**environment4d.json**](#environment4djson) files support the same contents.

:::

#### Configurando o repositório GitHub

To be able to directly reference and use a 4D component stored on GitHub, you need to configure the GitHub component's repository:

- Compacte os arquivos de componentes no formato ZIP.
- Name this archive with the same name as the GitHub repository.
- Integrate the archive into a [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) of the repository.

These steps can easily be automated, with 4D code or using GitHub Actions, for example.

#### Declarando caminhos

Você declara um componente armazenado no GitHub no arquivo [**dependencies.json**](#dependencyjson) da seguinte maneira:

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

... where "myGitHubComponent1" is referenced and declared for the project, although "myGitHubComponent2" is only referenced. Você precisa declará-lo no arquivo [**environment4d.json**] (#environment4djson):

```json
{
	"dependencies": {
		"myGitHubComponent2": {
			"github" : "JohnSmith/myGitHubComponent2"
		}
	}
}
```

"myGitHubComponent2" can be used by several projects.

#### Tags and versions

Ao criar uma versão no GitHub, você especifica uma **etiqueta** e uma **versão**.

- **Etiquetas** são textos que fazem referência exclusiva a uma versão. **Etiquetas** são textos que fazem referência exclusiva a uma versão. In the [**dependencies.json** file](#dependencyjson) and [**environment4d.json**](#environment4djson) files, you can indicate the release tag you want to use in your project. Por exemplo :

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

- Uma versão também é identificada por uma **versão**. The versioning system used is based on the _Semantic Versioning_ concept, which is the most commonly used. Each version number is identified as follows: `majorNumber.minorNumber.pathNumber`. In the same way as for tags, you can indicate the version of the component you wish to use in your project, as in this example:

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

The version is used to define which versions can be used. É usada uma [versão semântica padrão] (https://regex101.com/r/Ly7O1x/3/). A range is defined by two semantic versions, a min and a max, with operators '\< | > | >= | <= | ='. O `*` pode ser usado como um espaço reservado para todas as versões. ~ and ^ prefixes define versions starting at a number, and up to respectively the next major and minor version.

Eis alguns exemplos:

- "latest": a versão com o selo "latest" nas versões GitHub.
- "\*": a versão mais recente lançada.
- "1.\*": todas as versões da versão principal 1.
- "1.2.\*": todos os patches da versão menor 1.2.
- ">=1.2.3": the latest version, starting with the 1.2.3 version.
- ">1.2.3": the latest version, starting with the version just after the 1.2.3.
- "^1.2.3": the latest version 1, starting with the 1.2.3 version and strictly lower than version 2.
- "~1.2.3": the latest version 1.2, starting with the 1.2.3 version and strictly lower than version 1.3.
- "<=1.2.3": a versão mais recente até a 1.2.3.
- "1.0.0 - 1.2.3" ou ">=1.0.0 <=1.2.3": versão entre 1.0.0 e 1.2.3.
- "`<1.2.3 || >=2`": versão que não está entre 1.2.3 e 2.0.0.

If you do not specify a tag or a version, 4D automatically retrieves the "latest" version.

#### Repositórios privados

If you want to integrate a component located in a private repository, you need to tell 4D to use a connection token to access it.

Para fazer isso, em sua conta GitHub, crie um token **classic** com direitos de acesso a **repo**.

:::note

For more information, please refer to the [GitHub token interface](https://github.com/settings/tokens).

:::

Em seguida, insira a chave "github" em seu arquivo [**environment4d.json**](#environment4djson):

```json
{
	"github": {
		"token": "ghpXXXXXXXXXXXXUvW8x9yZ"
	},
	"dependencies": {

		"mySecondGitHubComponent": {
			"github": "JohnSmith/mySecondGitHubComponent"
		}
	}
}
```

#### Cache local para dependências

Referenced GitHub components are downloaded in a local cache folder then loaded in your environment. The local cache folder is stored at the following location:

- en macOs: `$HOME/Library/Caches/<app name>/Dependencies`
- no Windows: `C:\Users\<username>\AppData\Local\<app name>\Dependencies`

...onde `<app name>` pode ser "4D", "4D Server" ou "tool4D".

#### dependency-lock.json

A `dependency-lock.json` file is created in the [`userPreferences` folder](architecture.md#userpreferencesusername) of your project.

This file logs information such as the state of dependencies, paths, urls, loading errors, as well as other information. It could be useful for component loading management or troubleshooting.

## Monitoramento das dependências do projeto

In an opened project, you can add, remove, and get information about dependencies and their current loading status in the **Dependencies** panel.

Para exibir o painel Dependências:

- with 4D, select the **Design/Project Dependencies** menu item (Development environment),<br/>
  ![dependency-menu](../assets/en/Project/dependency-menu.png)

- with 4D Server, select the **Window/Project Dependencies** menu item.<br/>
  ![dependency-menu-server](../assets/en/Project/dependency-menu-server.png)

The Dependencies panel is then displayed. Dependencies are sorted by name in alphabetical order:

![dependency](../assets/en/Project/dependency.png)

The Dependencies panel interface allows you to manage dependencies (on 4D single-user and 4D Server). Você pode adicionar ou remover as dependências **local** e **GitHub**.

### Adding a local dependency

To add a local dependency, click on the **+** button in the footer area of the panel. A caixa de diálogo abaixo é mostrada:

![dependency-add](../assets/en/Project/dependency-add.png)

Certifique-se de que a aba **Local** esteja selecionada e clique no botão **...**. A standard Open file dialog box is displayed, allowing you to select the component to add. You can select a [**.4DZ**](../Desktop/building.md#build-component) or a [**.4DProject**](architecture.md##applicationname4dproject-file) file.

If the selected item is valid, its name and location are displayed in the dialog box.

![dependency-selected](../assets/en/Project/local-selected.png)

If the selected item is not valid, an error message is displayed.

Clique em **Adicionar** para adicionar a dependência ao projeto.

- If you select a component located next to the project package folder (default location), it is declared in the [**dependencies.json**](#dependenciesjson) file.
- If you select a component that is not located next to the project package folder, it is declared in the [**dependencies.json**](#dependenciesjson) file and its path is declared in the [**environment4d.json**](#environmen4djson) file (see note). The Dependencies panel asks if you want to save a [relative or absolute path](#relative-paths-vs-absolute-paths).

:::note

If no [**environment4d.json**](#environmen4djson) file is already defined for the project at this step, it is automatically created in the project package folder (default location).

:::

The dependency is added to the [inactive dependency list](#dependency-status) with the **Available after restart** status. It will be loaded once the application restarts.

### Adding a GitHub dependency

Para adicionar uma [dependência GitHub](#components-stored-on-github), clique no botão **+** na área de rodapé do painel e selecione a aba **GitHub**.

![dependency-add-git](../assets/en/Project/dependency-add-git.png)

Enter the path of the GitHub repository of the dependency. It could be a **repository URL** or a **github-account/repository-name string**, for example:

![dependency-add-git-2](../assets/en/Project/dependency-add-git-2.png)

Once the connection is established, the GitHub icon ![dependency-gitlogo](../assets/en/Project/dependency-gitlogo.png) is displayed on the right side of the entry area. You can click on this icon to open the repository in your default browser.

:::note

If the component is stored on a [private GitHub repository](#private-repositories) and your personal token is missing, an error message is displayed and a  **Add a personal access token...** button is displayed (see [Providing your GitHub access token](#providing-your-github-access-token)).

:::

You can then define the [tag or version](#tags-and-versions) option for the dependency:

![dependency-git-tag](../assets/en/Project/dependency-git-tag.png)

- **Latest**: Selected by default and allows to download the release that is tagged as the latest (stable) version.
- **Up to Next Major Version**: Define a [semantic version range](#tags-and-versions) to restrict updates to the next major version.
- **Up to Next Minor Version**: Similarly, restrict updates to the next minor version.
- **Exact Version (Tag)**: Select or manually enter a [specific tag](#tags-and-versions) from the available list.

Clique no botão **Adicionar** para adicionar a dependência ao projeto.

The GitHub dependency declared in the [**dependencies.json**](#dependenciesjson) file and added to the [inactive dependency list](#dependency-status) with the **Available at restart** status. It will be loaded once the application restarts.

#### Providing your GitHub access token

If the component is stored on a [private GitHub repository](#private-repositories), you need to provide your personal access token to the Dependency manager. Para fazer isso, você pode:

- click on **Add a personal access token...** button that is displayed in the "Add a dependency" dialog box after you entered a private GitHub repository path.
- or, select **Add a GitHub personal access token...** in the Dependency manager menu at any moment.

![dependency-add-token](../assets/en/Project/dependency-add-token.png)

You can then enter your personal access token:

![dependency-add-token-2](../assets/en/Project/dependency-add-token-2.png)

You can only enter one personal access token. Once a token has been entered, you can edit it.

### Removing a dependency

To remove a dependency from the Dependencies panel, select the dependency to remove and click on the **-** button of the panel or select **Remove the dependency...** from the contextual menu. You can select several dependencies, in which case the action is applied to all selected dependencies.

:::note

Somente as dependências declaradas no arquivo [**dependencies.json**](#dependenciesjson) podem ser removidas usando o painel Dependencies. If a selected dependency cannot be removed, the **-** button is disabled and the **Remove the dependency...** menu item is hidden.

:::

É exibida uma caixa de diálogo de confirmação. Se a dependência foi declarada no arquivo **environment4d.json**, uma opção permite que você a remova:

![dependency-remove](../assets/en/Project/remove-comp.png)

If you confirm the dialog box, the removed dependency [status](#dependency-status) is automatically flagged "Unload after restart". It will be unloaded once the application restarts.

### Origem da dependência

The Dependencies panel lists all project dependencies, whatever their origin, i.e. wherever they come from. The dependency origin is provided by the tag under its name:

![dependency-origin](../assets/en/Project/dependency-origin.png)

As seguintes origens são possíveis:

| Origin tag                        | Descrição                                                                    |
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

### Filtragem de dependências

By default, all dependencies identified by the Dependency manager are listed, whatever their [status](#dependency-status). You can filter the displayed dependencies according to their status by selecting the appropriate tab at the top of the Dependencies panel:

![dependency-tabs](../assets/en/Project/dependency-tabs.png)

- **Ativo**: dependências carregadas e podem ser usadas no projeto. Isso inclui dependências _overloading_, que são de fato carregadas. _Overloaded_ dependencies are listed in the **Conflicts** panel, along with all conflicting dependencies.
- **Inativo**: dependências que não estão carregadas no projeto e não estão disponíveis. There are many possible reasons for this status: missing files, version incompatibility...
- **Conflito**: dependências carregadas, mas que sobrecarregam pelo menos outra dependência em um [nível de prioridade](#priority) inferior. Overloaded dependencies are also displayed so that you can check the origin of the conflict and take appropriate actions.

### Status de dependência

Dependencies requiring the developer's attention are indicated by a **status label** at the right side of the line and a specific background color:

![dependency-status](../assets/en/Project/dependency-conflict2.png)

Estão disponíveis as seguintes etiquetas de status:

- **Overloaded**: a dependência não é carregada porque está sobrecarregada por outra dependência com o mesmo nome em um [nível de prioridade] mais alto (#prioridade).
- **Overloading**: a dependência está carregada e está sobrecarregando uma ou mais dependências com o mesmo nome em um [nível de prioridade] inferior (#prioridade).
- **Not found**: a dependência está declarada no arquivo dependencies.json, mas não foi encontrada.
- **Inactive**: a dependência não é carregada porque não é compatível com o projeto (por exemplo, o componente não é compilado para a plataforma atual).
- **Duplicated**: The dependency is not loaded because another dependency with the same name exists at the same location (and is loaded).
- **Available after restart**: The dependency reference has just been added [using the interface](#monitoring-project-dependencies), it will be loaded once the application restarts.
- **Unloaded after restart**: The dependency reference has just been removed [using the interface](#removing-a-dependency), it will be unloaded once the application restarts.

A tooltip is displayed when you hover over the dependency line, provding additional information about the status:

![dependency-tips](../assets/en/Project/dependency-tip1.png)
