---
id: components
title: Componentes
---

A 4D component is a set of 4D code and/or 4D forms representing one or more functionalities that you can add and use in your projects. For example, the [4D SVG](https://github.com/4d/4D-SVG) component adds advanced commands and an integrated rendering engine that can be used to display SVG files.

You can [develop](../Extensions/develop-components.md) and [build](../Desktop/building.md) your own 4D components, or download public components shared by the 4D community that [can be found on GitHub](https://github.com/search?q=4d-component\&type=Repositories).

## Componentes interpretados e compilados

Components can be interpreted or [compiled](../Desktop/building.md). A pasta do pacote de um componente pode conter:

- either a Project folder (interpreted component)
- ou um arquivo .4DZ (componente compilado)

A 4D project running in interpreted mode can use either interpreted or compiled components. A 4D project running in compiled mode cannot use interpreted components. Por isso não pode ser usado em um componente.

## Carregando componentes

### Básicos

To load a component in your 4D project, you can either:

- reference the component in the **dependencies.json** file (and, optionnally, the **environment4d.json** file)
- ou, copie os arquivos de componentes na pasta [**Components** do seu projeto](architecture.md#components).

If the same component is installed at different locations, a [priority order] is applied.

### dependencies.json

1. Faça referência ao nome do componente no arquivo **dependencies.json** de seu projeto 4D. Esse arquivo de manifesto deve ser salvo na pasta **Sources** da pasta do projeto 4D, por exemplo:
   ```
   /MyProjectRoot/Project/Sources/dependencies.json
   ```
2. By default, copy the component's package folder (_i.e._ the project root folder of the component) at the same level as your 4D project's package folder, e.g.:
   ```
   /MyProjectRoot/
   /MyProjectComponentRoot/
   ```

Graças a essa arquitetura, você pode simplesmente copiar todos os seus componentes no mesmo nível dos seus projetos e fazer referência a eles nos arquivos **dependencies.json**, se necessário. Além disso, você pode personalizar o caminho de seus componentes, veja abaixo.

O conteúdo do arquivo **/Sources/dependencies.json** deve ter a seguinte estrutura:

```json
{
	"dependencies": {
		"myComponent1" : {},
		"myComponent2" : {}
	}
}
```

... where "myComponent1" and "myComponent2" are the name of the components, located at the same level as your project's package folder, that you want to be loaded in your project.

### environment4d.json

If you want to customize the location of the components that are [declared in the **dependencies.json** file](#dependenciesjson), you can use a **environment4d.json** file. This file allows you to declare the paths for the dependencies that are not stored at the same level as the project folder.

You can use absolute or relative paths, expressed in POSIX syntax as described in [this paragraph](../Concepts/paths#posix-syntax). Relative paths are relative to the environment4d.json file.

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

The **environment4d.json** file can be stored in your project package folder or in one of its parent folders, at any level (up to the root). The benefit of this architecture is that you can store this environment file in a parent folder of your projects and decide not to commit it, allowing you to have your local component organization.

:::note

If a component path declared in the **environment4d.json** file is not found when the project is started, the component is not loaded and gets the _Not found_ [status](dependency-status), even if a version of the component exists next to the project's package folder.

:::

### Prioridade

Since components can be installed in different ways, a priority order is applied when the same component is referenced at several locations:

**Prioridade mais alta**

1. Componentes armazenados na pasta [**Components** do projeto](architecture.md#components).
2. Componentes declarados no arquivo **dependencies.json**.
3. Internal User 4D components (e.g. 4D NetKit, 4D SVG...)

**Prioridade mais baixa**

![priority](../assets/en/Project/load-sequence.png)

When a component cannot be loaded because of another instance of the same component located at a higher priority level, it is given the _Overloaded_ [status](#dependency-status). The loaded component has the _Overloading_ [status](#dependency-status).

## Monitoramento das dependências do projeto

Em um projeto aberto, você pode obter informações sobre dependências e seu estado de carregamento atual no painel **Dependências**.

Para exibir o painel Dependências:

- with 4D, select the **Design/Project Dependencies** menu item (Development environment),<br/>
  ![dependency-menu](../assets/en/Project/dependency-menu.png)

- with 4D Server, select the **Window/Project Dependencies** menu item.<br/>
  ![dependency-menu-server](../assets/en/Project/dependency-menu-server.png)

O painel Dependência é então exibido. Dependencies are sorted by name in alphabetical order:

![dependency](../assets/en/Project/dependency.png)

### Origem da dependência

The Dependencies panel lists all project dependencies, whatever their origin, i.e. wherever they come from. The dependency origin is provided by the tag under its name:

![dependency-origin](../assets/en/Project/dependency-origin.png)

São suportadas as seguintes origens:

| Origin tag            | Descrição                                                                    |
| --------------------- | ---------------------------------------------------------------------------- |
| Componente 4D         | Componente 4D incorporado, armazenado na pasta `Components` da aplicação 4D  |
| Source                | Component declared in the [`dependencies.json`](#dependenciesjson) file      |
| Environment           | Componente declarado no arquivo [`environnement4d.json`](#environment4djson) |
| Componente do projeto | Componente localizado na pasta [`Components`](architecture.md#components)    |

**Clique com o botão direito do mouse** em uma linha de dependência e selecione **Mostrar no disco** para revelar o local de uma dependência:

![dependency-show](../assets/en/Project/dependency-show.png)

:::note

This item is not displayed if the dependency is inactive because its files are not found.

:::

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

A tooltip is displayed when you hover over the dependency line, provding additional information about the status:

![dependency-tips](../assets/en/Project/dependency-tip1.png)
