---
id: architecture
title: Arquitetura de um projeto 4D
---

A 4D project is made of several folders and files, stored within a single project root folder (package folder). Por exemplo:

- MyPackage (*pasta de raiz do projeto*)
    - `Componentes`
    - `Dados`
        - `Logs`
        - `Settings`
    - `Documentation`
    - `Plugins`
    - `Project`
        - `DerivedData`
        - `Sources`
        - `Trash`
    - `Resources`
    - `Settings`
    - `userPreferences.username`
    - `WebFolder`

> Se o seu projeto tiver sido convertido a partir de uma base de dados binária, poderão existir pastas adicionais. Consulte "Conversão de bases de dados em projetos" em [doc.4d.com](https://doc.4d.com).


## Pasta `Project`

A pasta Project contém normalmente a seguinte hierarquia:

- *applicationName*.4DProject file
- `Sources`
    + `Classes`
    + `DatabaseMethods`
    + `Página Métodos`
    + `Formulários`
    + `TableForms`
    + `Triggers`
- `DerivedData`
- `Trash` (se houver)


### *applicationName*.4DProject file

Ficheiro de desenvolvimento do projeto, utilizado para designar e lançar o projeto. Esse arquivo pode ser aberto por:

- 4D
- 4D Server (apenas leitura, ver [Desenvolver um projeto](developing.md))

> **Nota:** nos projetos 4D, o desenvolvimento se realiza com 4D Developer e o desenvolvimento multiusuários se gerencia através das ferramentas de controle de versão. 4D Server pode abrir arquivos .4DProject para fins de teste.

Este ficheiro texto também pode conter chaves de configuração, em particular [`"tokenizedText": false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| Conteúdos               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Formato |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Definições de tabelas e campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | XML     |
| folders.json            | Definições de pasta do Explorer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | JSON    |
| menus.json              | Definições de menus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | JSON    |
| settings.4DSettings     | Propriedades de la base *Structure*. They are not taken into account if *[user settings](#settings-user)* or *[user settings for data](#settings-user-data)* are defined (see also [Priority of settings](../Desktop/user-settings.md#priority-of-settings). **Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to [enable](../Desktop/user-settings.md#enabling-user-settings) and use *user settings* or *user settings for data* to define custom settings. | XML     |
| tips.json               | Dicas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | JSON    |
| lists.json              | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | JSON    |
| filters.json            | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | JSON    |
| styleSheets.css         | Folhas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | CSS     |
| styleSheets_mac.css     | Mac css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | CSS     |
| styleSheets_windows.css | Windows css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | CSS     |


#### `DatabaseMethods`

| Conteúdos                | Descrição                                                                      | Formato |
| ------------------------ | ------------------------------------------------------------------------------ | ------- |
| *databaseMethodName*.4dm | Métodos de projeto definidos na database. Um ficheiro por método base de dados | text    |

#### `Página Métodos`

| Conteúdos        | Descrição                                                            | Formato |
| ---------------- | -------------------------------------------------------------------- | ------- |
| *methodName*.4dm | Métodos de banco definidos na database. One file per database method | text    |

#### `Classes`

| Conteúdos       | Descrição                                                                                                                          | Formato |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name | text    |


#### `Formulários`

| Conteúdos                                 | Descrição                                      | Formato |
| ----------------------------------------- | ---------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Descrição do formulário projeto                | json    |
| *formName*/method.4dm                     | Método formulário projecto                     | text    |
| *formName*/Images/*pictureName*           | Imagem estática do formulário projeto          | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Métodos objecto. Um ficheiro por método objeto | text    |

#### `TableForms`

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

#### `Triggers`

| Conteúdos     | Descrição                                                                                             | Formato |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| table_*n*.4dm | Métodos trigger definidos na database. Um ficheiro de acionamento por tabela (n é o número da tabela) | text    |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. É compatível com as ferramentas de controlo da versão.


### `Trash`

The Trash folder contains methods and forms that were deleted from the project (if any). Pode conter as seguintes pastas:

- `Página Métodos`
- `Formulários`
- `TableForms`

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.


### `DerivedData`

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. Você pode ignorar essa pasta.

## `Libraries folder`

> Esta pasta é utilizada apenas no macOS.

The Librairies folder contains the file resulting from a compilation with the [Silicon compiler](compiler.md#silicon-compiler) on macOS.

## `Resources`

A pasta Resources contém todos os arquivos e pastas de recursos personalizados do projeto. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

| Conteúdos             | Descrição                                                                                                                                                         | Formato |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Arquivos e pastas dos recursos do banco de dados                                                                                                                  | vários  |
| Images/Library/*item* | Pictures from the Picture Library as separate files(*). Os nomes destes itens tornam-se nomes de ficheiros. If a duplicate exists, a number is added to the name. | picture |

(*) only if the project was exported from a .4db binary database.


## `Dados`

The data folder contains the data file and all files and folders relating to the data.

| Conteúdos    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Formato |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | binary  |
| data.journal | Criado apenas quando a base de dados utiliza um ficheiro de registo. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. It is generated by default when a database is created. | binary  |
| data.match   | (interno) UUID correspondente ao número da tabela                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | XML     |

(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location.

### `Settings` (dados do usuário)

This folder contains [**user settings for data**](../Desktop/user-settings.md#user-settings-for-data-file) used for application administration.

> These settings take priority over [user settings](#settings-user) and [structure settings](#sources). See also [Priority of settings](../Desktop/user-settings.md#priority-of-settings).

| Conteúdos           | Descrição                                                                                                                                                                                                                                                                                | Formato |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descrição de os grupos e usuários de 4D e seus direitos de acesso quando o banco for lançado com este arquivo de dados.                                                                                                                                                                  | JSON    |
| Backup.4DSettings   | Parâmetros de cópia de segurança do banco de dados, utilizados para definir as [opções de cópia de segurança](Backup/settings.md)) quando o banco de dados for lançado com este arquivo de dados. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| settings.4DSettings | Propriedades personalizadas de o banco de dados para este arquivo de dados.                                                                                                                                                                                                              | XML     |


### `Logs`

The Logs folder contains all log files used by the project. Os ficheiros de registo incluem, em particular:

- conversão da base de dados,
- pedidos do servidor Web,
- backup/restore activities journal (*Backup Journal\[xxx].txt*, see [Backup journal](Backup/backup.md#backup-journal))
- depuração de comandos,
- 4D Server requests (generated on client machines and on the server).

> Uma pasta Logs adicional está disponível na pasta de preferências do usuário do sistema (pasta 4D ativa, ver [Obter pasta 4D](https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html) comando) para os arquivos de registro de manutenção e nos casos em que a pasta de dados for de apenas leitura.

## `Settings` (usuário)

This folder contains [**user settings**](../Desktop/user-settings.md#user-settings) used for application administration.

> These settings take priority over [structure settings](#sources) file. However, if [user settings for data](#settings-user-data) exist, they take priority over the user settings. See also [Priority of settings](../Desktop/user-settings.md#priority-of-settings).

| Conteúdos           | Descrição                                                                                                                                                                                                                                                                                                                            | Formato |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| directory.json      | Descrição dos grupos e usuários de 4D para o banco de dados, assim como seus direitos de acesso                                                                                                                                                                                                                                      | JSON    |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML     |
| settings.4DSettings | Custom settings for this project (all data files)                                                                                                                                                                                                                                                                                    | XML     |
| logConfig.json      | Custom [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file)                                                                                                                                                                                                                                        | json    |


## `userPreferences.<em x-id="3">userName</em> folder`

Esta pasta contém arquivos que memorizam as configurações do usuário, por exemplo, o ponto de ruptura ou as posições das janelas. Pode simplesmente ignorar esta pasta. Contém, por exemplo:

| Conteúdos                  | Descrição                                                   | Formato |
| -------------------------- | ----------------------------------------------------------- | ------- |
| methodPreferences.json     | Current user method editor preferences                      | JSON    |
| methodWindowPositions.json | Posição da janela do usuário atual para os métodos          | JSON    |
| formWindowPositions.json   | Posição da janela do usuário atual para os formulários      | JSON    |
| workspace.json             | List of opened windows; on macOS, order of tab windows      | JSON    |
| debuggerCatches.json       | Chamadas aos comandos                                       | JSON    |
| recentTables.json          | Lista ordenada de tabelas                                   | JSON    |
| preferences.4DPreferences  | Rota de dados atual e posições da janela principal          | XML     |
| CompilerIntermediateFiles  | Intermediate files resulting from Apple Silicon compilation | Folder  |


## `Componentes`

Esta carpeta contém os componentes que devem estar disponíveis unicamente no banco de dados projeto. It must be stored at the same level as the Project folder.

> for development: put an alias of the .4dproject file in the Components folder of the host project. for deployment: [build the component](Desktop/building.md#build-component) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application.


## `Plugins`

This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder.


## `Documentation`

This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer.

For more information, refer to [Documenting a project](Project/documentation.md).

## `WebFolder`

Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time. It is automatically created when the Web server is launched for the first time.

## Ficheiro `.gitignore` (opcional)

File that specifies which files will be ignored by git. You can include a gitignore file in your projects using the **Create .gitignore file** option on the **General** page of the preferences. To configure the contents of that file, see [Create `.gitignore` file](Preferences/general.md#create-gitignore-file).
