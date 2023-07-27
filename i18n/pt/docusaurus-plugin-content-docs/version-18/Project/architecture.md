---
id: architecture
title: Arquitectura de um projecto 4D
---

A 4D project is made of several folders and files, stored within a single parent database folder (package folder). Por exemplo:

- MyProject
  - Componentes
  - Dados
    - Logs
    - Settings
  - Documentation
  - Plugins
  - Project
    - DerivedData
    - Sources
    - Trash
  - Resources
  - Settings
  - userPreferences.username
  - WebFolder

> Se o seu projeto tiver sido convertido a partir de uma base de dados binária, poderão existir pastas adicionais. Consulte "Conversão de bases de dados em projetos" em [doc.4d.com](https://doc.4d.com).

## Pasta Project

A pasta Project contém normalmente a seguinte hierarquia:

- Arquivo *databaseName*.4DProject
- Sources
  - Classes
  - DatabaseMethods
  - Página Métodos
  - Formulários
  - TableForms
  - Triggers
- DerivedData
- Trash (se houver)

### Arquivo *databaseName*.4DProject

Ficheiro de desenvolvimento do projeto, utilizado para designar e lançar o projeto. Esse arquivo pode ser aberto por:

- 4D Developer
- 4D Server (read-only, see [Developing a project](developing.md))

**Note:** In 4D projects, development is done with 4D Developer and multi-user development is managed through source control tools. 4D Server pode abrir arquivos .4DProject para fins de teste.

### Pasta Sources

| Conteúdos               | Descrição                                                                                                                                                                                                                                                                                                                                                                                         | Formato |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Definições de tabelas e campos                                                                                                                                                                                                                                                                                                                                                                    | XML     |
| folders.json            | Definições de pasta do Explorer                                                                                                                                                                                                                                                                                                                                                                   | JSON    |
| menus.json              | Definições de menus                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| settings.4DSettings     | Propriedades de la base *Structure*. They are not taken into account if *[user settings](#settings-folder-1)* or *[user settings for data](#settings-folder)* are defined. **Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use *user settings* or *user settings for data* to define custom settings. | XML     |
| tips.json               | Dicas definidas                                                                                                                                                                                                                                                                                                                                                                                   | JSON    |
| lists.json              | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                  | JSON    |
| filters.json            | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| styleSheets.css         | Folhas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                              | CSS     |
| styleSheets_mac.css     | Mac css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                             | CSS     |
| styleSheets_windows.css | Windows css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                         | CSS     |

#### Pasta DatabaseMethods

| Conteúdos                | Descrição                                                                     | Formato |
| ------------------------ | ----------------------------------------------------------------------------- | ------- |
| *databaseMethodName*.4dm | Métodos base definidos na base de dados. Um ficheiro por método base de dados | text    |

#### Pasta Methods

| Conteúdos        | Descrição                                                                | Formato |
| ---------------- | ------------------------------------------------------------------------ | ------- |
| *methodName*.4dm | Métodos projeto definidos na base de dados. One file per database method | text    |

#### Pasta Classes

| Conteúdos       | Descrição                                                                                                                          | Formato |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name | text    |

#### Pasta Forms

| Conteúdos                                 | Descrição                                      | Formato |
| ----------------------------------------- | ---------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Descrição do formulário projeto                | json    |
| *formName*/method.4dm                     | Método formulário projecto                     | text    |
| *formName*/Images/*pictureName*           | Imagem estática do formulário projeto          | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Métodos objecto. Um ficheiro por método objeto | text    |

#### Pasta TableForms

| Conteúdos                                            | Descrição                                                              | Formato |
| ---------------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Input table form description (n is the table number)                   | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Imagens estáticas do formulário de entrada da tabela                   | picture |
| *n*/Input/*formName*/method.4dm                      | Método do formulário de entrada da tabela                              | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Métodos objeto do formulário de entrada. Um ficheiro por método objeto | text    |
| *n*/Output/*formName*/form.4DForm                    | Output table form description (n is the table number)                  | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Imagens estáticas do formulário de saída da tabela                     | picture |
| *n*/Output/*formName*/method.4dm                     | Método do formulário de saída da tabela                                | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Métodos objeto do formulário de saída. Um ficheiro por método objeto   | text    |

#### Pasta Triggers

| Conteúdos     | Descrição                                                                                             | Formato |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| table_*n*.4dm | Métodos trigger definidos na database. Um ficheiro de acionamento por tabela (n é o número da tabela) | text    |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. É compatível com as ferramentas de controlo da versão.

### Pasta Trash

The Trash folder contains methods and forms that were deleted from the project (if any). Pode conter as seguintes pastas:

- Página Métodos
- Formulários
- TableForms

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.

### DerivedData folder

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. Você pode ignorar essa pasta.

## Pasta Resources

The Resources folder contains any custom database resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

| Conteúdos             | Descrição                                                                                                                                                         | Formato |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Ficheiros e pastas de recursos da base de dados                                                                                                                   | vários  |
| Images/Library/*item* | Pictures from the Picture Library as separate files(*). Os nomes destes itens tornam-se nomes de ficheiros. If a duplicate exists, a number is added to the name. | picture |

(*) only if the project was exported from a .4db binary database.

## Pasta Data

The data folder contains the data file and all files and folders relating to the data.

| Conteúdos    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Formato |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | binary  |
| data.journal | Criado apenas quando a base de dados utiliza um ficheiro de registo. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. It is generated by default when a database is created. | binary  |
| data.match   | (interno) UUID correspondente ao número da tabela                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | XML     |

(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location.

### Settings folder

This folder contains **user settings files for data** used for database administration.

> These settings take priority over **[user settings files](#settings-folder-1)** and **structure settings** files.

| Conteúdos           | Descrição                                                                                                                                                                                                            | Formato |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when the database is run with this data file. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| settings.4DSettings | Propriedades personalizadas de o banco de dados para este arquivo de dados                                                                                                                                           | XML     |
| directory.json      | Description of 4D groups, users, and their access rights when the database is run with this data file.                                                                                                               | JSON    |

### Pasta Logs

The Logs folder contains all log files used by the project. Os ficheiros de registo incluem, em particular:

- conversão da base de dados,
- pedidos do servidor Web,
- backup/restore activities journal (*Backup Journal\[xxx].txt*, see [Backup journal](Backup/backup.md#backup-journal))
- depuração de comandos,
- 4D Server requests (generated on client machines and on the server).

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command) for maintenance log files and in cases where data folder is read-only.

## Settings folder

This folder contains **user settings files** used for database administration. Os ficheiros são adicionados à pasta quando necessário.

> If a data settings file exists in a Settings folder [in the data folder](#settings-folder), it takes priority over user settings file.

| Conteúdos           | Descrição                                                                                                                                                                                                                                                                                                                            | Formato |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| directory.json      | Description of 4D groups and users for the database, as well as their access rights                                                                                                                                                                                                                                                  | JSON    |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML     |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML     |

## userPreferences.*userName* folder

Esta pasta contém arquivos que memorizam as configurações do usuário, por exemplo, o ponto de ruptura ou as posições das janelas. Pode simplesmente ignorar esta pasta. Contém, por exemplo:

| Conteúdos                  | Descrição                                              | Formato |
| -------------------------- | ------------------------------------------------------ | ------- |
| methodPreferences.json     | Preferências do editor dos métodos do usuário atual    | JSON    |
| methodWindowPositions.json | Posição da janela do usuário atual para os métodos     | JSON    |
| formWindowPositions.json   | Posição da janela do usuário atual para os formulários | JSON    |
| workspace.json             | List of opened windows; on macOS, order of tab windows | JSON    |
| debuggerCatches.json       | Chamadas aos comandos                                  | JSON    |
| recentTables.json          | Lista ordenada de tabelas                              | JSON    |
| preferences.4DPreferences  | Rota de dados atual e posições da janela principal     | XML     |

## Pasta Components

This folder contains the components to be available in the project database only. It must be stored at the same level as the Project folder.

> A project database can be used itself as a component:
> 
> - for development: put an alias of the .4dproject file in the Components folder of the host database.
> - for deployment: build the component (see [Building a project package](building.md)) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host database.

## Pasta Plugins

This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder.
