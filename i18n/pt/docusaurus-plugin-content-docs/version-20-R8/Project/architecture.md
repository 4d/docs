---
id: architecture
title: Arquitetura de um projeto 4D
---

Um projeto 4D é composto por várias pastas e arquivos, armazenados numa pasta raiz do projeto (pasta de pacotes). Por exemplo:

- MyPackage (_carpeta raíz del proyecto_)
  - `Componentes`
  - `Data`
    - `Logs`
    - `Parâmetros`
  - `Documentation`
  - `Plugins`
  - `Project`
    - `DerivedData`
    - `Sources`
    - `Trash`
  - `Resources`
  - `Parâmetros`
  - `userPreferences.username`
  - `WebFolder`

> Se o seu projeto tiver sido convertido a partir de uma base de dados binária, poderão existir pastas adicionais. Ver "Conversión de bases en proyectos" en [doc.4d.com](https://doc.4d.com).

## Carpeta `Project`

A pasta Project contém normalmente a seguinte hierarquia:

- archivo `<applicationName>.4DProject`
- `Sources`
  - `Classes`
  - `DatabaseMethods`
  - `Página Métodos`
  - `Formulários`
  - `TableForms`
  - `Triggers`
- `DerivedData`
- `Trash` (si hay)

### archivo `<applicationName>.4DProject`

Arquivo de desenvolvimento do projeto, utilizado para designar e lançar o projeto. Esse arquivo pode ser aberto por:

- 4D
- 4D Server (sólo lectura, ver [Abrir un proyecto remoto](Desktop/clientServer.md#opening-a-remote-project))

> <strong x-id="1">Nota:</strong> nos projetos 4D, o desenvolvimento se realiza com 4D Developer e o desenvolvimento multiusuários se gerencia através das ferramentas de controle de versão. 4D Server pode abrir arquivos .4DProject para fins de teste.

This text file can also contain configuration keys, in particular [`"tokenizedText": false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| Conteúdos                                                    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Formato |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog                            | Definições de tabelas e campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | XML     |
| catalog_editor.json     | Custom positions and colors of tables, fields, and links in the Structure editor. Depende de un [parámetro de compatibilidad](../settings/compatibility.md) en los proyectos convertidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | JSON    |
| folders.json                                 | Definições de pasta do Explorer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| menus.json                                   | Definições de menus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | JSON    |
| roles.json                                   | [Privileges, permissions](../ORDA/privileges.md#rolesjson-files) and other security settings for the project                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | JSON    |
| settings.4DSettings                          | Propiedades de la base _Structure_. No se tienen en cuenta si se definen _[parámetros de usuario](#settings-user)_ o _[parámetros de usuario para datos](#settings-user-data)_ (ver también [Prioridad de los parámetros](../Desktop/user-settings.md#priority-of-settings). **Atención**: en las aplicaciones compiladas, la configuración de la estructura se almacena en el archivo .4dz (de sólo lectura). Para las necesidades de despliegue, es necesario [habilitar](../Desktop/user-settings.md#enabling-user-settings) y utilizar _parámetros usuario_ o _parámetros usuario para datos_ para definir parámetros personalizados. | XML     |
| tips.json                                    | Dicas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| lists.json                                   | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | JSON    |
| filters.json                                 | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| dependencies.json                            | Nomes de [componentes a serem carregados](components.md) no projeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | JSON    |
| HTTPHandlers.json                            | Custom [HTTP request handlers](../WebServer/http-request-handler.md) defined for the web server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| styleSheets.css                              | Folhas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | CSS     |
| styleSheets_mac.css     | Folhas de estilo css para Mac (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | CSS     |
| styleSheets_windows.css | Folhas de estilo css em Windows (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | CSS     |

#### `DatabaseMethods`

| Conteúdos                                | Descrição                                                                                      | Formato |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| _databaseMethodName_.4dm | Métodos de projeto definidos na database. Um ficheiro por método base de dados | text    |

#### `Página Métodos`

| Conteúdos                        | Descrição                                                                            | Formato |
| -------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| _methodName_.4dm | Métodos de banco definidos na database. One file per database method | text    |

#### `Classes`

| Conteúdos                       | Descrição                                                                                                                                                      | Formato |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| _className_.4dm | Método de definição de classe usuário, que permite instanciar objetos específicos. Um arquivo por classe, o nome do arquivo é o nome da classe | text    |

#### `Formulários`

| Conteúdos                                                 | Descrição                                                     | Formato |
| --------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| _formName_/form.4DForm                    | Descrição do formulário projeto                               | json    |
| _formName_/method.4dm                     | Método formulário projecto                                    | text    |
| _formName_/Images/_pictureName_                           | Imagem estática do formulário projeto                         | picture |
| _formName_/ObjectMethods/_objectName_.4dm | Métodos objecto. Um arquivo por método objeto | text    |

#### `TableForms`

| Conteúdos                                                            | Descrição                                                                                | Formato |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| _n_/Input/_formName_/form.4DForm                     | Descrição do formulário de entrada da tabela (n é o número da tabela) | json    |
| _n_/Input/_formName_/Images/_pictureName_                            | Imagens estáticas do formulário de entrada da tabela                                     | picture |
| _n_/Input/_formName_/method.4dm                      | Método do formulário de entrada da tabela                                                | text    |
| _n_/Input/_formName_/ObjectMethods/_objectName_.4dm  | Métodos objeto do formulário de entrada. Um arquivo por método objeto    | text    |
| _n_/Output/_formName_/form.4DForm                    | Descrição do formulário de saída da tabela (n é o número da tabela)   | json    |
| _n_/Output/_formName_/Images/_pictureName_                           | Imagens estáticas do formulário de saída da tabela                                       | picture |
| _n_/Output/_formName_/method.4dm                     | Método do formulário de saída da tabela                                                  | text    |
| _n_/Output/_formName_/ObjectMethods/_objectName_.4dm | Métodos objeto do formulário de saída. Um arquivo por método objeto      | text    |

#### `Triggers`

| Conteúdos                                          | Descrição                                                                                                                               | Formato |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| table__n_.4dm | Métodos trigger definidos na database. Um arquivo de acionamento por tabela (n é o número da tabela) | text    |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. É compatível com as ferramentas de controlo da versão.

### `Trash`

A pasta Trash contém métodos e formulários eliminados do projeto (se existirem). Pode conter as seguintes pastas:

- `Página Métodos`
- `Formulários`
- `TableForms`

Dentro destas pastas, os nomes dos elementos eliminados estão entre parênteses, por exemplo, "(myMethod).4dm". La organización de las carpetas es idéntica a la carpeta [Sources](#sources).

### `DerivedData`

A pasta DerivedData contém dados em cache usados internamente por 4D para otimizar o processamento. É criado ou recriado automaticamente quando necessário. Você pode ignorar essa pasta.

## `Libraries`

> Esta pasta é utilizada apenas no macOS.

La carpeta Librairies contiene el archivo resultante de una compilación con el [compilador Silicon](compiler.md#silicon-compiler) en macOS.

## `Resources`

A pasta Resources contém todos os arquivos e pastas de recursos personalizados do projeto. Nesta pasta, pode colocar todos os ficheiros necessários para a tradução ou personalização da interface da aplicação (arquivo imagem, arquivo texto, arquivo XLIFF, etc.). 4D usa mecanismos automáticos para trabalhar com o conteúdo desta pasta, em particular para a manipulação de ficheiros XLIFF e imagens estáticas. Para utilizar no modo remoto, a pasta Recursos permite-lhe partilhar arquivo entre o servidor e todas as máquinas clientes. Ver el _manual 4D Server_.

| Conteúdos             | Descrição                                                                                                                                                                                                                                      | Formato |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| _elemento_            | Arquivos e pastas dos recursos do banco de dados                                                                                                                                                                                               | vários  |
| Images/Library/_item_ | Imagens da biblioteca de imagens como arquivo separados(\*). Os nomes destes itens tornam-se nomes de arquivo. Se existir uma duplicação, é acrescentado um número ao nome. | picture |

(\*) apenas se o projeto tiver sido exportado de um banco de dados binário .4db.

## `Data`

A pasta Data contém o ficheiro de dados e todos os arquivo e pastas relacionados com os dados.

| Conteúdos                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Formato |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(\*) | arquivo de dados que contém os dados introduzidos nos registos e todos os dados pertencentes aos registos. Quando abre um projeto 4D, a aplicação abre o arquivo de dados atual por defeito. Si cambia el nombre o la ubicación de este archivo, aparecerá la caja de diálogo _Abrir un archivo de datos_ para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | binary  |
| data.journal                    | Criado apenas quando a base de dados utiliza um ficheiro de registo. O arquivo de registo é utilizado para garantir a segurança dos dados entre cópias de segurança. Todas as operações efectuadas sobre os dados são registadas sequencialmente neste arquivo. Por conseguinte, cada operação sobre os dados provoca duas acções simultâneas: a primeira sobre os dados (a expressão é executada normalmente) e a segunda no ficheiro de registo (é registada uma descrição da operação). O arquivo de registo é construído de forma independente, sem perturbar ou atrasar o trabalho do utilizador. Uma base de dados só pode trabalhar com um único arquivo de registo de cada vez. O arquivo de registo regista operações como adições, modificações ou eliminações de registos, transacções, etc. É gerado por defeito quando é criada uma base de dados. | binary  |
| data.match                      | (interno) UUID correspondente ao número da tabela                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | XML     |

(\*) Quando o projeto é criado a partir de uma base de dados binária .4db, o arquivo de dados não é alterado. Assim, pode ter um nome diferente e ser colocado noutro local.

### `Settings` (datos del usuario)

This folder contains [**user settings for data**](../Desktop/user-settings.md#user-settings-for-data-file) used for application administration.

> Estos parámetros tienen prioridad sobre los [parámetros de usuario](#settings-user) y los [parámetros de estructura](#sources). Ver también [Prioridad de los parámetros](../Desktop/user-settings.md#priority-of-settings).

| Conteúdos                           | Descrição                                                                                                                                                                                                                                                                                                                                           | Formato |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descrição de os grupos e usuários de 4D e seus direitos de acesso quando o banco for lançado com este arquivo de dados.                                                                                                                                                                                                             | JSON    |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md) cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuración de la copia de seguridad se describen en el manual _Backup de las llaves XML 4D_. | XML     |
| settings.4DSettings | Propriedades personalizadas de o banco de dados para este arquivo de dados.                                                                                                                                                                                                                                                         | XML     |

### `Logs`

A pasta Logs contém todos os arquivos de registo utilizados pelo projeto. Os arquivos de registro incluem, em particular:

- conversão da base de dados,
- pedidos do servidor Web,
- registro de actividades de backup/restitución (_Backup Journal\[xxx].txt_, ver [Historial de backup](Backup/backup.md#backup-journal))
- depuração de comandos,
- 4D Pedidos do servidor (gerados em máquinas clientes e no servidor).

> Una carpeta Logs adicional está disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver el comando [Get 4D folder](https://doc.4d.com/4dv19R/help/command/en/page485.html)) para los archivos de registro de mantenimiento y e

## `Settings` (usuario)

Essa pasta contém [**configurações de usuário**](../Desktop/user-settings.md#user-settings) usadas para a administração de aplicações.

> Estos parámetros tienen prioridad sobre el archivo de [parámetros de estructura](#sources). Sin embargo, si existen [parámetros de usuario para los datos](#settings-user-data), tienen prioridad sobre los parámetros de usuario. Ver también [Prioridad de los parámetros](../Desktop/user-settings.md#priority-of-settings).

| Conteúdos                           | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Formato |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descrição dos grupos e usuários de 4D para o banco de dados, assim como seus direitos de acesso                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md)) cuando se lanza cada copia de seguridad. Este archivo también puede utilizarse para leer o definir opciones adicionales, como la cantidad de información almacenada en el _diario de backup_. Las llaves relativas a la configuración de la copia de seguridad se describen en el manual _Backup de las llaves XML 4D_. | XML     |
| BuildApp.4DSettings | Archivo de parámetros de generación, creado automáticamente cuando se utiliza la caja de diálogo del generador de aplicaciones o del comando `BUILD APPLICATION`                                                                                                                                                                                                                                                                                                                                                | XML     |
| settings.4DSettings | Definições personalizadas para este projeto (todos os arquivos de dados)                                                                                                                                                                                                                                                                                                                                                                                                                     | XML     |
| logConfig.json      | [Archivo de configuración de historial](../Debugging/debugLogFiles.md#using-a-log-configuration-file) personalizado                                                                                                                                                                                                                                                                                                                                                                                             | json    |

## `userPreferences.<userName>`

Esta pasta contém arquivos que memorizam as configurações do usuário, por exemplo, o ponto de ruptura ou as posições das janelas. Pode simplesmente ignorar esta pasta. Contém, por exemplo:

| Conteúdos                                  | Descrição                                                          | Formato |
| ------------------------------------------ | ------------------------------------------------------------------ | ------- |
| methodPreferences.json     | Preferências do utilizador atual do Editor de código               | JSON    |
| methodWindowPositions.json | Posição da janela do usuário atual para os métodos                 | JSON    |
| formWindowPositions.json   | Posição da janela do usuário atual para os formulários             | JSON    |
| workspace.json             | Lista de janelas abertas; no macOS, ordem das janelas do separador | JSON    |
| debuggerCatches.json       | Chamadas aos comandos                                              | JSON    |
| recentTables.json          | Lista ordenada de tabelas                                          | JSON    |
| preferences.4DPreferences  | Rota de dados atual e posições da janela principal                 | XML     |
| CompilerIntermediateFiles                  | arquivos intermédios resultantes da compilação do Apple Silicon    | Folder  |

## `Componentes`

Folder containing components that are embedded in the project (must be stored at the same level as the Project folder). These components have priority over any other locations.

:::info

Você também pode usar os arquivos [**dependencies.json** e (opcionalmente) **environment4d.json**](components.md) para declarar componentes.

:::

## `Plugins`

Esta pasta contém os plug-ins que devem estar disponíveis no projeto de aplicação. Deve ser armazenado ao mesmo nível que a pasta Project.

## `Documentation`

Esta pasta contém todos os arquivo de documentação (.md) criados para os elementos do projeto, tais como classes, métodos ou formulários. Os arquivo de documentação são geridos e apresentados no Explorer 4D.

Para más información, consulte [Documentar un proyecto](Project/documentation.md).

## `WebFolder`

Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. É criado automaticamente quando o servidor Web é iniciado pela primeira vez.

## Archivo `.gitignore` (opcional)

Ficheiro que especifica quais os ficheiros que serão ignorados pelo git. Puede incluir un archivo gitignore en sus proyectos utilizando la opción **Crear un archivo .gitignore** en la página **General** de las preferencias. To configure the contents of that file, see [Create `.gitignore` file](Preferences/general.md#create-gitignore-file).
