---
id: architecture
title: Arquitetura de um projeto 4D
---

Um projeto 4D é composto por várias pastas e arquivos, armazenados numa pasta raiz do projeto (pasta de pacotes). Por exemplo:

- MyPackage (*carpeta raíz del proyecto*)
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

Esse arquivo de texto também pode conter chaves de configuração, em particular [`"tokenizedText": false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| Conteúdos                                                    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Formato |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog                            | Definições de tabelas e campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | XML     |
| catalog_editor.json     | Posições e cores personalizadas de tabelas, campos e links no editor de estrutura. Depende de un [parámetro de compatibilidad](../settings/compatibility.md) en los proyectos convertidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JSON    |
| folders.json                                 | Definições de pasta do Explorer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| menus.json                                   | Definições de menus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | JSON    |
| roles.json                                   | [Privilégios, permissões](../ORDA/privileges.md#rolesjson-file) e outras configurações de segurança do projeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | JSON    |
| settings.4DSettings                          | Propiedades de la base *Structure*. No se tienen en cuenta si se definen *[parámetros de usuario](#settings-user)* o *[parámetros de usuario para datos](#settings-user-data)* (ver también [Prioridad de los parámetros](../Desktop/user-settings.md#priority-of-settings). **Atención**: en las aplicaciones compiladas, la configuración de la estructura se almacena en el archivo .4dz (de sólo lectura). Para las necesidades de despliegue, es necesario [habilitar](../Desktop/user-settings.md#enabling-user-settings) y utilizar *parámetros usuario* o *parámetros usuario para datos* para definir parámetros personalizados. | XML     |
| tips.json                                    | Dicas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| lists.json                                   | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | JSON    |
| filters.json                                 | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| dependencies.json                            | Nomes de [componentes a serem carregados](components.md) no projeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | JSON    |
| HTTPHandlers.json                            | [Manipuladores de solicitação HTTP](../WebServer/http-request-handler.md) personalizados definidos para o servidor Web                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | JSON    |
| styleSheets.css                              | Folhas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | CSS     |
| styleSheets_mac.css     | Folhas de estilo css para Mac (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | CSS     |
| styleSheets_windows.css | Folhas de estilo css em Windows (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | CSS     |

#### `DatabaseMethods`

| Conteúdos                                | Descrição                                                                                      | Formato |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| *databaseMethodName*.4dm | Métodos de projeto definidos na database. Um ficheiro por método base de dados | text    |

#### `Página Métodos`

| Conteúdos                        | Descrição                                                                            | Formato |
| -------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| *methodName*.4dm | Métodos de banco definidos na database. One file per database method | text    |

#### `Classes`

| Conteúdos                       | Descrição                                                                                                                                                      | Formato |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *className*.4dm | Método de definição de classe usuário, que permite instanciar objetos específicos. Um arquivo por classe, o nome do arquivo é o nome da classe | text    |

#### `Formulários`

| Conteúdos                                                 | Descrição                                                     | Formato |
| --------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Descrição do formulário projeto                               | json    |
| *formName*/method.4dm                     | Método formulário projecto                                    | text    |
| *formName*/Images/*pictureName*                           | Imagem estática do formulário projeto                         | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Métodos objecto. Um arquivo por método objeto | text    |

#### `TableForms`

| Conteúdos                                                            | Descrição                                                                                | Formato |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Descrição do formulário de entrada da tabela (n é o número da tabela) | json    |
| *n*/Input/*formName*/Images/*pictureName*                            | Imagens estáticas do formulário de entrada da tabela                                     | picture |
| *n*/Input/*formName*/method.4dm                      | Método do formulário de entrada da tabela                                                | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Métodos objeto do formulário de entrada. Um arquivo por método objeto    | text    |
| *n*/Output/*formName*/form.4DForm                    | Descrição do formulário de saída da tabela (n é o número da tabela)   | json    |
| *n*/Output/*formName*/Images/*pictureName*                           | Imagens estáticas do formulário de saída da tabela                                       | picture |
| *n*/Output/*formName*/method.4dm                     | Método do formulário de saída da tabela                                                  | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Métodos objeto do formulário de saída. Um arquivo por método objeto      | text    |

#### `Triggers`

| Conteúdos                                                                                    | Descrição                                                                                                                               | Formato |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| table__n_.4dm | Métodos trigger definidos na database. Um arquivo de acionamento por tabela (n é o número da tabela) | text    |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. É compatível com as ferramentas de controlo da versão.

### `Trash`

A pasta Trash contém métodos e formulários eliminados do projeto (se existirem). Pode conter as seguintes pastas:

- `Página Métodos`
- `Formulários`
- `TableForms`

Dentro destas pastas, os nomes dos elementos eliminados estão entre parênteses, por exemplo, "(myMethod).4dm". A organização da pasta é idêntica à da pasta [Sources](#sources-folder).

### `DerivedData`

A pasta DerivedData contém dados em cache usados internamente por 4D para otimizar o processamento. É criado ou recriado automaticamente quando necessário. Você pode ignorar essa pasta.

## `Libraries`

> Esta pasta é utilizada apenas no macOS.

La carpeta Librairies contiene el archivo resultante de una compilación con el [compilador Silicon](compiler.md#silicon-compiler) en macOS.

## `Resources`

A pasta Resources contém todos os arquivos e pastas de recursos personalizados do projeto. Nesta pasta, pode colocar todos os ficheiros necessários para a tradução ou personalização da interface da aplicação (arquivo imagem, arquivo texto, arquivo XLIFF, etc.). 4D usa mecanismos automáticos para trabalhar com o conteúdo desta pasta, em particular para a manipulação de ficheiros XLIFF e imagens estáticas. Para utilizar no modo remoto, a pasta Recursos permite-lhe partilhar arquivo entre o servidor e todas as máquinas clientes. Ver el *manual 4D Server*.

| Conteúdos             | Descrição                                                                                                                                                                                                                                      | Formato |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *elemento*            | Arquivos e pastas dos recursos do banco de dados                                                                                                                                                                                               | vários  |
| Images/Library/*item* | Imagens da biblioteca de imagens como arquivo separados(\*). Os nomes destes itens tornam-se nomes de arquivo. Se existir uma duplicação, é acrescentado um número ao nome. | picture |

(\*) apenas se o projeto tiver sido exportado de um banco de dados binário .4db.

## `Data`

A pasta Data contém o ficheiro de dados e todos os arquivo e pastas relacionados com os dados.

| Conteúdos                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Formato |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(\*) | Arquivo de dados que contém os dados introduzidos nos registos e todos os dados pertencentes aos registos. Quando abre um projeto 4D, a aplicação abre o arquivo de dados atual por defeito. Se alterar o nome ou a localização deste arquivo, aparecerá a caixa de diálogo *Abrir arquivo de dados* para que possa selecionar o arquivo de dados a utilizar ou criar um                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | binary  |
| data.journal                    | Criado apenas quando a base de dados utiliza um ficheiro de registo. O arquivo de registo é utilizado para garantir a segurança dos dados entre cópias de segurança. Todas as operações efectuadas sobre os dados são registadas sequencialmente neste arquivo. Por conseguinte, cada operação sobre os dados provoca duas acções simultâneas: a primeira sobre os dados (a expressão é executada normalmente) e a segunda no ficheiro de registo (é registada uma descrição da operação). O arquivo de registo é construído de forma independente, sem perturbar ou atrasar o trabalho do utilizador. Uma base de dados só pode trabalhar com um único arquivo de registo de cada vez. O arquivo de registo regista operações como adições, modificações ou eliminações de registos, transacções, etc. É gerado por defeito quando é criada uma base de dados. É gerado por defeito quando é criada uma base de dados. | binary  |
| data.match                      | (interno) UUID correspondente ao número da tabela                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | XML     |

(\*) Quando o projeto é criado a partir de uma base de dados binária .4db, o arquivo de dados não é alterado. Assim, pode ter um nome diferente e ser colocado noutro local.

### `Settings` (datos del usuario)

Essa pasta contém [**configurações de usuário para os dados**](../Desktop/user-settings.md#user-settings-for-data-file) usadas para a administração de aplicações.

> Estos parámetros tienen prioridad sobre los [parámetros de usuario](#settings-user) y los [parámetros de estructura](#sources). See also [Priority of settings](../Desktop/user-settings.md#priority-of-settings).

| Conteúdos                           | Descrição                                                                                                                                                                                                                                                                                                                        | Formato |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descrição de os grupos e usuários de 4D e seus direitos de acesso quando o banco for lançado com este arquivo de dados.                                                                                                                                                                                          | JSON    |
| Backup.4DSettings   | Parámetros de copia de seguridad de la base de datos, utilizados para definir las [opciones de copia de seguridad](Backup/settings.md) cuando la base se lanza con este archivo de datos. As teclas relativas à configuração da cópia de segurança são descritas no manual *4D XML Keys Backup*. | XML     |
| settings.4DSettings | Propriedades personalizadas de o banco de dados para este arquivo de dados.                                                                                                                                                                                                                                      | XML     |

### `Logs`

A pasta Logs contém todos os arquivos de registo utilizados pelo projeto. Os arquivos de registro incluem, em particular:

- conversão da base de dados,
- pedidos do servidor Web,
- diário de atividades de backup/restauração (*Backup Journal\[xxx].txt*, consulte [Backup journal](Backup/backup.md#backup-journal))
- depuração de comandos,
- Pedidos 4D Server (gerados em máquinas clientes e no servidor).

> Uma pasta adicional de Logs está disponível na pasta de preferências sistema do usuário (pasta 4D ativa, consulte o comando [Get 4D folder](../commands-legacy/get-4d-folder.md)) para arquivos de log de manutenção e nos casos em que a pasta de dados é somente leitura.

## `Settings` (usuario)

Essa pasta contém [**configurações de usuário**](../Desktop/user-settings.md#user-settings) usadas para a administração de aplicações.

> Essas configurações têm prioridade sobre o arquivo [parâmetros de estrutura](#sources). No entanto, se houver [parâmetros de usuário para dados](#settings-user-data), elas terão prioridade sobre as configurações de usuário. Consulte também [Prioridade dos parâmetros](../Desktop/user-settings.md#priority-of-settings).

| Conteúdos                           | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Formato |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descrição dos grupos e usuários de 4D para o banco de dados, assim como seus direitos de acesso                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| Backup.4DSettings   | Parâmetros de backup do banco de dados, usadas para definir as [opções de backup](Backup/settings.md) quando cada backup é iniciado. Este ficheiro também pode ser utilizado para ler ou definir opções adicionais, tais como a quantidade de informações armazenadas no *diário de cópia de segurança*. As teclas relativas à configuração da cópia de segurança são descritas no manual *4D XML Keys Backup*. | XML     |
| BuildApp.4DSettings | Arquivo de parâmetros de compilação, criado automaticamente ao usar a caixa de diálogo do construtor de aplicações ou o comando `BUILD APPLICATION`                                                                                                                                                                                                                                                                                                             | XML     |
| settings.4DSettings | Definições personalizadas para este projeto (todos os arquivos de dados)                                                                                                                                                                                                                                                                                                                                                                     | XML     |
| logConfig.json      | [Arquivo de configuração de log](../Debugging/debugLogFiles.md#using-a-log-configuration-file) personalizado                                                                                                                                                                                                                                                                                                                                                    | json    |

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
| CompilerIntermediateFiles                  | Arquivos intermédios resultantes da compilação do Apple Silicon    | Folder  |

## `Componentes`

Pasta que contém componentes incorporados ao projeto (deve ser armazenada no mesmo nível da pasta Project). Esses componentes têm prioridade sobre quaisquer outros locais.

:::info

Você também pode usar os arquivos [**dependencies.json** e (opcionalmente) **environment4d.json**](components.md) para declarar componentes.

:::

## `Plugins`

Esta pasta contém os componentes que devem estar disponíveis unicamente no banco de dados projeto. Deve ser armazenado ao mesmo nível que a pasta Project.

## `Documentation`

Esta pasta contém todos os arquivo de documentação (.md) criados para os elementos do projeto, tais como classes, métodos ou formulários. Os arquivo de documentação são geridos e apresentados no Explorer 4D.

Para mais informações, consulte [Documentando um projeto](Project/documentation.md).

## `WebFolder`

Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. É criado automaticamente quando o servidor Web é iniciado pela primeira vez. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. É criado automaticamente quando o servidor Web é iniciado pela primeira vez.

## Archivo `.gitignore` (opcional)

Ficheiro que especifica quais os ficheiros que serão ignorados pelo git. Ficheiro que especifica quais os ficheiros que serão ignorados pelo git. Para configurar o conteúdo desse arquivo, consulte [Criar arquivo `.gitignore`](Preferences/general.md#create-gitignore-file).
