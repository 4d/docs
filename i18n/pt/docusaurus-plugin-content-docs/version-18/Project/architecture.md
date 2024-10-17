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

Arquivo de desenvolvimento do projeto, utilizado para designar e lançar o projeto. Esse arquivo pode ser aberto por:

- 4D Developer
- 4D Server (somente leitura, consulte [Desenvolver um projeto](developing.md))

**Note:** In 4D projects, development is done with 4D Developer and multi-user development is managed through source control tools. 4D Server pode abrir arquivos .4DProject para fins de teste.

### Pasta Sources

| Conteúdos               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                         | Formato |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Definições de tabelas e campos                                                                                                                                                                                                                                                                                                                                                                                    | XML     |
| folders.json            | Definições de pasta do Explorer                                                                                                                                                                                                                                                                                                                                                                                   | JSON    |
| menus.json              | Definições de menus                                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| settings.4DSettings     | Propriedades de la base *Structure*. They are not taken into account if *[user settings](#settings-folder-1)* or *[user settings for data](#settings-folder)* are defined. **Aviso**: nas aplicações compiladas, os parâmetros de estrutura são armazenadas no ficheiro .4dz (só de leitura). For deployment needs, it is necessary to use *user settings* or *user settings for data* to define custom settings. | XML     |
| tips.json               | Dicas definidas                                                                                                                                                                                                                                                                                                                                                                                                   | JSON    |
| lists.json              | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                  | JSON    |
| filters.json            | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| styleSheets.css         | Folhas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                              | CSS     |
| styleSheets_mac.css     | Folhas de estilo css para Mac (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                           | CSS     |
| styleSheets_windows.css | Folhas de estilo css em Windows (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                         | CSS     |

#### Pasta DatabaseMethods

| Conteúdos                | Descrição                                                                     | Formato |
| ------------------------ | ----------------------------------------------------------------------------- | ------- |
| *databaseMethodName*.4dm | Métodos base definidos na base de dados. Um ficheiro por método base de dados | text    |

#### Pasta Methods

| Conteúdos        | Descrição                                                                | Formato |
| ---------------- | ------------------------------------------------------------------------ | ------- |
| *methodName*.4dm | Métodos projeto definidos na base de dados. One file per database method | text    |

#### Pasta Classes

| Conteúdos       | Descrição                                                                                                                                      | Formato |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | Método de definição de classe usuário, que permite instanciar objetos específicos. Um arquivo por classe, o nome do arquivo é o nome da classe | text    |

#### Pasta Forms

| Conteúdos                                 | Descrição                                     | Formato |
| ----------------------------------------- | --------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Descrição do formulário projeto               | json    |
| *formName*/method.4dm                     | Método formulário projecto                    | text    |
| *formName*/Images/*pictureName*           | Imagem estática do formulário projeto         | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Métodos objecto. Um arquivo por método objeto | text    |

#### Pasta TableForms

| Conteúdos                                            | Descrição                                                             | Formato |
| ---------------------------------------------------- | --------------------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Descrição do formulário de entrada da tabela (n é o número da tabela) | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Imagens estáticas do formulário de entrada da tabela                  | picture |
| *n*/Input/*formName*/method.4dm                      | Método do formulário de entrada da tabela                             | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Métodos objeto do formulário de entrada. Um arquivo por método objeto | text    |
| *n*/Output/*formName*/form.4DForm                    | Descrição do formulário de saída da tabela (n é o número da tabela)   | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Imagens estáticas do formulário de saída da tabela                    | picture |
| *n*/Output/*formName*/method.4dm                     | Método do formulário de saída da tabela                               | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Métodos objeto do formulário de saída. Um arquivo por método objeto   | text    |

#### Pasta Triggers

| Conteúdos     | Descrição                                                                                            | Formato |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| table_*n*.4dm | Métodos trigger definidos na database. Um arquivo de acionamento por tabela (n é o número da tabela) | text    |

**Nota:** A extensão de arquivo .4dm é um formato de arquivo baseado em texto, que contém o código de um método 4D. É compatível com as ferramentas de controlo da versão.

### Pasta Trash

A pasta Trash contém métodos e formulários eliminados do projeto (se existirem). Pode conter as seguintes pastas:

- Página Métodos
- Formulários
- TableForms

Dentro destas pastas, os nomes dos elementos eliminados estão entre parênteses, por exemplo, "(myMethod).4dm". A organização das pastas é idêntica à da pasta [Sources](#sources).

### Pasta DerivedData

A pasta DerivedData contém dados em cache usados internamente por 4D para otimizar o processamento. É criado ou recriado automaticamente quando necessário. Você pode ignorar essa pasta.

## Pasta Resources

A pasta Resources contém todos os arquivos e pastas de recursos personalizados do banco de dados. Nesta pasta, pode colocar todos os ficheiros necessários para a tradução ou personalização da interface da aplicação (arquivo imagem, arquivo texto, arquivo XLIFF, etc.). 4D usa mecanismos automáticos para trabalhar com o conteúdo desta pasta, em particular para a manipulação de ficheiros XLIFF e imagens estáticas. Para utilizar no modo remoto, a pasta Recursos permite-lhe partilhar arquivo entre o servidor e todas as máquinas clientes. Consulte o *Manual 4D Server*.

| Conteúdos             | Descrição                                                                                                                                                                  | Formato |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Ficheiros e pastas de recursos da base de dados                                                                                                                            | vários  |
| Images/Library/*item* | Imagens da biblioteca de imagens como arquivo separados(*). Os nomes destes itens tornam-se nomes de arquivo. Se existir uma duplicação, é acrescentado um número ao nome. | picture |

(*) apenas se o projeto tiver sido exportado de um banco de dados binário .4db.

## Pasta Data

A pasta Data contém o ficheiro de dados e todos os arquivo e pastas relacionados com os dados.

| Conteúdos    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Formato |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | arquivo de dados que contém os dados introduzidos nos registos e todos os dados pertencentes aos registos. Quando abre um projeto 4D, a aplicação abre o arquivo de dados atual por defeito. Se alterar o nome ou a localização deste arquivo, aparecerá a caixa de diálogo *Abrir arquivo de dados* para que possa selecionar o arquivo de dados a utilizar ou criar um novo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | binary  |
| data.journal | Criado apenas quando a base de dados utiliza um ficheiro de registo. O arquivo de registo é utilizado para garantir a segurança dos dados entre cópias de segurança. Todas as operações efectuadas sobre os dados são registadas sequencialmente neste arquivo. Por conseguinte, cada operação sobre os dados provoca duas acções simultâneas: a primeira sobre os dados (a expressão é executada normalmente) e a segunda no ficheiro de registo (é registada uma descrição da operação). O arquivo de registo é construído de forma independente, sem perturbar ou atrasar o trabalho do utilizador. Uma base de dados só pode trabalhar com um único arquivo de registo de cada vez. O arquivo de registo regista operações como adições, modificações ou eliminações de registos, transacções, etc. É gerado por defeito quando é criada uma base de dados. | binary  |
| data.match   | (interno) UUID correspondente ao número da tabela                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | XML     |

(*) Quando o projeto é criado a partir de uma base de dados binária .4db, o arquivo de dados não é alterado. Assim, pode ter um nome diferente e ser colocado noutro local.

### Pasta Settings

This folder contains **user settings files for data** used for database administration.

> These settings take priority over **[user settings files](#settings-folder-1)** and **structure settings** files.

| Conteúdos           | Descrição                                                                                                                                                                                                                             | Formato |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Backup.4DSettings   | Database backup settings, used to set the [backup options](Backup/settings.md)) when the database is run with this data file. As teclas relativas à configuração da cópia de segurança são descritas no manual *4D XML Keys Backup* . | XML     |
| settings.4DSettings | Propriedades personalizadas de o banco de dados para este arquivo de dados                                                                                                                                                            | XML     |
| directory.json      | Description of 4D groups, users, and their access rights when the database is run with this data file.                                                                                                                                | JSON    |

### Pasta Logs

A pasta Logs contém todos os arquivos de registo utilizados pelo projeto. Os arquivos de registro incluem, em particular:

- conversão da base de dados,
- pedidos do servidor Web,
- Diário de actividades de cópia de segurança/restauro (*Diário de cópia de segurança\[xxx].txt*, ver [Diário de cópia de segurança](Backup/backup.md#backup-journal))
- depuração de comandos,
- 4D Pedidos do servidor (gerados em máquinas clientes e no servidor).

> An additional Logs folder is available in the system user preferences folder (active 4D folder, see [Get 4D folder](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html) command) for maintenance log files and in cases where data folder is read-only.

## Pasta Settings

This folder contains **user settings files** used for database administration. Os ficheiros são adicionados à pasta quando necessário.

> If a data settings file exists in a Settings folder [in the data folder](#settings-folder), it takes priority over user settings file.

| Conteúdos           | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                      | Formato |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Description of 4D groups and users for the database, as well as their access rights                                                                                                                                                                                                                                                                                                                                                            | JSON    |
| BuildApp.4DSettings | arquivos de definições de construção, criado automaticamente quando se utiliza a caixa de diálogo do construtor de aplicações ou o comando `BUILD APPLICATION`                                                                                                                                                                                                                                                                                 | XML     |
| Backup.4DSettings   | Definições de cópia de segurança da base de dados, utilizadas para definir as opções de  [backup](Backup/settings.md)) quando cada cópia de segurança é iniciada. Este ficheiro também pode ser utilizado para ler ou definir opções adicionais, tais como a quantidade de informações armazenadas no  *diário de cópia de segurança*. As teclas relativas à configuração da cópia de segurança são descritas no manual *4D XML Keys Backup* . | XML     |
| BuildApp.4DSettings | arquivos de definições de construção, criado automaticamente quando se utiliza a caixa de diálogo do construtor de aplicações ou o comando `BUILD APPLICATION`                                                                                                                                                                                                                                                                                 | XML     |

## Pasta userPreferences.*userName*

Esta pasta contém arquivos que memorizam as configurações do usuário, por exemplo, o ponto de ruptura ou as posições das janelas. Pode simplesmente ignorar esta pasta. Contém, por exemplo:

| Conteúdos                  | Descrição                                                          | Formato |
| -------------------------- | ------------------------------------------------------------------ | ------- |
| methodPreferences.json     | Preferências do editor dos métodos do usuário atual                | JSON    |
| methodWindowPositions.json | Posição da janela do usuário atual para os métodos                 | JSON    |
| formWindowPositions.json   | Posição da janela do usuário atual para os formulários             | JSON    |
| workspace.json             | Lista de janelas abertas; no macOS, ordem das janelas do separador | JSON    |
| debuggerCatches.json       | Chamadas aos comandos                                              | JSON    |
| recentTables.json          | Lista ordenada de tabelas                                          | JSON    |
| preferences.4DPreferences  | Rota de dados atual e posições da janela principal                 | XML     |

## Pasta Components

This folder contains the components to be available in the project database only. Deve ser armazenado ao mesmo nível que a pasta Project.

> Um banco de dados projeto pode ser usada como um componente:
> 
> - for development: put an alias of the .4dproject file in the Components folder of the host database.
> - for deployment: build the component (see [Building a project package](building.md)) and put the resulting .4dz file in a .4dbase folder in the Components folder of the host database.

## Pasta Plugins

This folder contains the plug-ins to be available in the project database only. Deve ser armazenado ao mesmo nível que a pasta Project.
