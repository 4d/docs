---
id: creating
title: Criar ou abrir um projeto
---

4D projects are created and developed using the **4D** application, which provides a comprehensive Integrated Development Environment (IDE). **4D Server** can also create new, empty projects.

## Criar arquivos de projeto

New 4D application projects can be created from **4D** or **4D Server**. Em qualquer caso, os ficheiros de projeto são armazenados na máquina local.

Para criar um novo projeto de banco de dados:

1. Inicie 4D ou 4D Server.

2. Faça uma das seguintes opções:
   - Select **New > Project...** from the **File** menu: ![](../assets/en/getStart/projectCreate1.png)
   - (4D only) Select **Project...** from the **New** toolbar button:<p>![](../assets/en/getStart/projectCreate2.png)</p>A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

3. Enter the name of your project folder and click **Save**. Este nome será utilizado:

   - as the name of the .4DProject file at the first level of the "Project" folder.
   - as the name of the .4DProject file at the first level of the ["Project" folder](../Project/architecture.md#project-folder).

Pode escolher qualquer nome permitido pelo seu sistema operacional. <em x-id="3">Atenção:</em> se seu banco projeto estiver destinado a funcionar em outros sistemas ou a ser guardada através de uma ferramenta de controle de código fonte, deve levar em consideração suas recomendações específicas de denominação.

When you validate the **Save** dialog, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all files needed for the project into it. For more information, refer to [Architecture of a 4D Project](Project/architecture.md).

Pode então começar a desenvolver o seu projeto.

## Abrir projeto

Lance uma aplicação 4D Developer.

1. Faça uma das seguintes opções:

   - Select **Open/Local Project...** from the **File** menu or the **Open** toolbar button.
   - Select **Open a local application project** in the Welcome Wizard dialog

Aparece a caixa de diálogo padrão Abrir.

2. Select the project's `.4dproject` file (located inside the ["Project" folder of the project](../Project/architecture.md#project-folder)) and click **Open**.

   Por padrão, o projeto é aberto com seu arquivo de dados atual. Outros tipos de arquivo são sugeridos:

   - _Packed project files_: `.4dz` extension  - deployment projects
   - _Shortcut files_: `.4DLink` extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)
   - _Binary files_: `.4db` or `.4dc` extension - legacy 4D database formats

### Opções

In addition to standard system options, the _Open_ dialog in 4D provides two menus with specific options that are available using the **Open** button and the **Data file** menu.

- **Open** - opening mode of the project:
  - **Interpreted** or **Compiled**: These options are available when the selected project contains both [interpreted and compiled code](Concepts/interpreted.md).
  - **[Maintenance Security Center](MSC/overview.md)**: Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs.

- **Data file** - specifies the data file to be used with the project. By default, the **Current data file** option is selected.

## Atalhos de abertura de projectos

4D oferece várias maneiras de abrir projetos diretamente e ignorar o diálogo Aberto:

- através de opções de menu:
  - _Menu bar_ - **File** > **Open Recent Projects / {project name}**
  - _4D Tool bar_ -  Select the project from the menu associated with the **Open** button

- através das preferências:
  - Set the **At startup** general preference to **Open last used project**.

- using a `.4DLink` file.

### Abrir um projeto com um ficheiro 4DLink

You can use a [`.4DLink` file](#about-4DLink-files) to launch the 4D application and open the target 4D project. Há duas formas de o fazer:

- double-click or drag and drop the `.4DLink` file onto the 4D application
- go to **File** > **Open Recent Projects** and select a project

![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)

Um arquivo .4DLink do tipo "projeto remoto" pode ser copiado e usado em várias máquinas.

> Também é possível selecionar um arquivo 4DLink na caixa de diálogo 4D e 4D Server de abertura (abrindo apenas projeto local).

## Sobre 4DLink Files

Files with the `.4DLink` extension are XML files that contain parameters intended to automate and simplify opening local or remote 4D projects.

`.4DLink` files can save the address of a 4D project as well as its connection identifiers and opening mode, saving you time when opening projects.

4D automatically generates a `.4DLink` file when a local project is opened for the first time or when connecting to a server for the first time. O arquivo é armazenado na pasta de preferências locais no seguinte local:

- Windows: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- macOS: Users/UserName/Library/Application Support/4D/Favorites vXX/

XX representa o número da versão da aplicação. Por exemplo, "Favorites v19" para 4D v19.

Esta pasta está dividida em duas subpastas:

- the **Local** folder contains the `.4DLink` files that can be used to open local projects
- the **Remote** folder contains the `.4DLink` files of recent remote projects

`.4DLink` files can also be created with an XML editor.

4D provides a DTD describing the XML keys that can be used to build a `.4DLink` file. This DTD is named database_link.dtd and is found in the `\Resources\DTD\` subfolder of the 4D application.
