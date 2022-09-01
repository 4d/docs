---
id: architecture
title: Arquitetura de um projeto 4D
---

Um projeto 4D é feito de várias pastas e arquivos, armazenados dentro de uma única pasta pai do banco de dados (pasta pacote). Por exemplo:

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

> If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on [doc.4d.com](https://doc.4d.com).

## Project folder

The Project folder typically contains the following hierarchy:

- Arquivo *nomBase*.4DProject
- Sources
  - Classes
  - DatabaseMethods
  - Métodos
  - Formulários
  - TableForms
  - Triggers
- DerivedData
- Trash (if any)

### Arquivo *nomBase*.4DProject

Project development file, used to designate and launch the project. This file can be opened by:

- 4D Developer
- 4D Server (apenas leitura, ver [Desenvolver um projeto](developing.md))

**Nota:** nos projetos 4D, o desenvolvimento se realiza com 4D Developer e o desenvolvimento multiusuários se gerencia através das ferramentas de controle de versão. 4D Server can open .4DProject files for testing purposes.

### Sources folder

| Conteúdos               | Descrção                                                                                                                                                                                                                                                                                                                                                                                    | Formato |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Table and field definitions                                                                                                                                                                                                                                                                                                                                                                 | XML     |
| folders.json            | Explorer folder definitions                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| menus.json              | Menu definitions                                                                                                                                                                                                                                                                                                                                                                            | JSON    |
| settings.4DSettings     | *Structure* database settings. They are not taken into account if *[user settings](#settings-folder-1)* or *[user settings for data](#settings-folder)* are defined. **Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use *user settings* or *user settings for data* to define custom settings. | XML     |
| tips.json               | Defined tips                                                                                                                                                                                                                                                                                                                                                                                | JSON    |
| lists.json              | Defined lists                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| filters.json            | Defined filters                                                                                                                                                                                                                                                                                                                                                                             | JSON    |
| styleSheets.css         | CSS style sheets                                                                                                                                                                                                                                                                                                                                                                            | CSS     |
| styleSheets_mac.css     | Mac css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                       | CSS     |
| styleSheets_windows.css | Windows css style sheets (from converted binary database)                                                                                                                                                                                                                                                                                                                                   | CSS     |

#### DatabaseMethods folder

| Conteúdos                | Descrção                                                             | Formato |
| ------------------------ | -------------------------------------------------------------------- | ------- |
| *databaseMethodName*.4dm | Métodos de banco definidos na database. One file per database method | text    |

#### Methods folder

| Conteúdos        | Descrção                                                      | Formato |
| ---------------- | ------------------------------------------------------------- | ------- |
| *methodName*.4dm | Métodos de projeto definidos na database. One file per method | text    |

#### Classes folder

| Conteúdos       | Descrção                                                                                                                           | Formato |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name | text    |

#### Forms folder

| Conteúdos                                 | Descrção                                   | Formato |
| ----------------------------------------- | ------------------------------------------ | ------- |
| *formName*/form.4DForm                    | Project form description                   | json    |
| *formName*/method.4dm                     | Project form method                        | text    |
| *formName*/Images/*pictureName*           | Project form static picture                | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Object methods. One file per object method | text    |

#### TableForms folder

| Conteúdos                                            | Descrção                                               | Formato |
| ---------------------------------------------------- | ------------------------------------------------------ | ------- |
| *n*/Input/*formName*/form.4DForm                     | Input table form description (n is the table number)   | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Input table form static pictures                       | picture |
| *n*/Input/*formName*/method.4dm                      | Input table form method                                | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Input form object methods. One file per object method  | text    |
| *n*/Output/*formName*/form.4DForm                    | Output table form description (n is the table number)  | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Output table form static pictures                      | picture |
| *n*/Output/*formName*/method.4dm                     | Output table form method                               | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Output form object methods. One file per object method | text    |

#### Triggers folder

| Conteúdos     | Descrção                                                                                  | Formato |
| ------------- | ----------------------------------------------------------------------------------------- | ------- |
| table_*n*.4dm | Métodos trigger definidos na database. One trigger file per table (n is the table number) | text    |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools.

### Trash folder

The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:

- Métodos
- Formulários
- TableForms

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder.

### DerivedData folder

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder.

## Resources folder

A pasta Resources contém todos os arquivos e pastas de recursos personalizados do banco de dados. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

| Conteúdos             | Descrção                                                                                                                                              | Formato |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Arquivos e pastas dos recursos do banco de dados                                                                                                      | various |
| Images/Library/*item* | Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name. | picture |

(*) only if the project was exported from a .4db binary database.

## Data folder

The data folder contains the data file and all files and folders relating to the data.

| Conteúdos    | Descrção                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Formato |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one                                                                                                                                                                                                                                                                                                                                                                                                                                                           | binary  |
| data.journal | Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. It is generated by default when a database is created. | binary  |
| data.match   | (internal) UUID matching table number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | XML     |

(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location.

### Settings folder

Esta pasta contém **arquivos de configuração de dados** utilizados para a administração do banco de dados.

> Estes parâmetros têm prioridade sobre os **[arquivos de propriedades usuário](#settings-folder-1)** e os arquivos de **propriedades estrutura**.

| Conteúdos           | Descrção                                                                                                                                                                                                                                                                                 | Formato |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Backup.4DSettings   | Parâmetros de cópia de segurança do banco de dados, utilizados para definir as [opções de cópia de segurança](Backup/settings.md)) quando o banco de dados for lançado com este arquivo de dados. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| settings.4DSettings | Propriedades personalizadas de o banco de dados para este arquivo de dados                                                                                                                                                                                                               | XML     |
| directory.json      | Descrição de os grupos e usuários de 4D e seus direitos de acesso quando o banco for lançado com este arquivo de dados.                                                                                                                                                                  | JSON    |

### Logs folder

The Logs folder contains all log files used by the project. Log files include, in particular:

- database conversion,
- web server requests,
- backup/restore activities journal (*Backup Journal\[xxx].txt*, see [Backup journal](Backup/backup.md#backup-journal))
- command debugging,
- 4D Server requests (generated on client machines and on the server).

> Uma pasta Logs adicional está disponível na pasta de preferências do usuário do sistema (pasta 4D ativa, ver [Obter pasta 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) comando) para os arquivos de registro de manutenção e nos casos em que a pasta de dados for de apenas leitura.

## Settings folder

Esta pasta contém **arquivos de propriedades usuário** utilizados para a administração do banco de dados. Os arquivos são adicionados à pasta se for necessário.

> Se existir um arquivo de propriedades de dados [em uma pasta de dados ](#settings-folder), da pasta Dados, tem prioridade sobre o arquivo de propriedades do usuário.

| Conteúdos           | Descrção                                                                                                                                                                                                                                                                                                                             | Formato |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| directory.json      | Descrição dos grupos e usuários de 4D para o banco de dados, assim como seus direitos de acesso                                                                                                                                                                                                                                      | JSON    |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML     |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the *backup journal*. Keys concerning backup configuration are described in the *4D XML Keys Backup* manual. | XML     |
| BuildApp.4DSettings | Build settings file, created automatically when using the application builder dialog box or the `BUILD APPLICATION` command                                                                                                                                                                                                          | XML     |

## userPreferences.*userName* folder

Esta pasta contém arquivos que memorizam as configurações do usuário, por exemplo, o ponto de ruptura ou as posições das janelas. You can just ignore this folder. It contains for example:

| Conteúdos                  | Descrção                                               | Formato |
| -------------------------- | ------------------------------------------------------ | ------- |
| methodPreferences.json     | Current user method editor preferences                 | JSON    |
| methodWindowPositions.json | Current user window positions for methods              | JSON    |
| formWindowPositions.json   | Current user window positions for forms                | JSON    |
| workspace.json             | List of opened windows; on macOS, order of tab windows | JSON    |
| debuggerCatches.json       | Caught calls to commands                               | JSON    |
| recentTables.json          | Ordered list of tables                                 | JSON    |
| preferences.4DPreferences  | Rota de dados atual e posições da janela principal     | XML     |

## Components folder

Esta carpeta contém os componentes que devem estar disponíveis unicamente no banco de dados projeto. It must be stored at the same level as the Project folder.

> A project database can be used itself as a component:
> 
> - for development: put an alias of the .4dproject file in the Components folder of the host database.
> - para o lançamento: crie o componente (ver [Criar um pacote projeto](building.md)) e ponha o arquivo .4dz resultante em uma pasta .4dbase na pasta Componentes do banco de dados local.

## Plugins folder

This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder.
