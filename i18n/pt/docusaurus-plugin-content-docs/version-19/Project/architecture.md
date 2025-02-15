---
id: architecture
title: Arquitetura de um projeto 4D
---

Um projeto 4D é composto por várias pastas e arquivos, armazenados numa única pasta raiz do projeto (pasta de pacotes). Por exemplo:

- MyPackage (*pasta de raiz do projeto*)
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

- Ficheiro *nomApplication*.4DProject
- Sources
  - Classes
  - DatabaseMethods
  - Página Métodos
  - Formulários
  - TableForms
  - Triggers
- DerivedData
- Trash (se houver)

### Ficheiro *nomApplication*.4DProject

Arquivo de desenvolvimento do projeto, utilizado para designar e lançar o projeto. Esse arquivo pode ser aberto por:

- 4D
- 4D Server (apenas leitura, ver [Desenvolver um projeto](developing.md))

> **Nota:** nos projetos 4D, o desenvolvimento se realiza com 4D Developer e o desenvolvimento multiusuários se gerencia através das ferramentas de controle de versão. 4D Server pode abrir arquivos .4DProject para fins de teste.

### Pasta Sources

| Conteúdos               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Formato |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| catalog.4DCatalog       | Definições de tabelas e campos                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | XML     |
| folders.json            | Definições de pasta do Explorer                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| menus.json              | Definições de menus                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | JSON    |
| settings.4DSettings     | Propriedades de la base *Structure*. Eles não são levados em conta se *[configurações de usuário](#settings-folder-1)* ou *[configurações de usuário para dados](#settings-folder)* forem definidas.**Aviso**: Em aplicações compiladas, configurações de estrutura são armazenadas no arquivo .4dz (somente leitura). Para necessidades de implantação, é necessário usar as configurações *de usuário* ou *configurações de usuário para os dados* para definir configurações personalizadas. | XML     |
| tips.json               | Dicas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON    |
| lists.json              | Listas definidas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | JSON    |
| filters.json            | Filtros definidos                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON    |
| styleSheets.css         | Folhas de estilo CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | CSS     |
| styleSheets_mac.css     | Folhas de estilo css para Mac (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                                                                                                         | CSS     |
| styleSheets_windows.css | Folhas de estilo css em Windows (de um banco de dados binário convertido)                                                                                                                                                                                                                                                                                                                                                                                                                       | CSS     |

#### Pasta DatabaseMethods

| Conteúdos                | Descrição                                                                      | Formato |
| ------------------------ | ------------------------------------------------------------------------------ | ------- |
| *databaseMethodName*.4dm | Métodos de projeto definidos na database. Um ficheiro por método base de dados | text    |

#### Pasta Methods

| Conteúdos        | Descrição                                                            | Formato |
| ---------------- | -------------------------------------------------------------------- | ------- |
| *methodName*.4dm | Métodos de banco definidos na database. One file per database method | text    |

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

## Pasta Libraries

> Esta pasta é utilizada apenas no macOS.

A pasta Librairies contém o ficheiro resultante de uma compilação com o compilador [Silicon](compiler.md#silicon-compiler) no macOS.

## Pasta Resources

A pasta Resources contém todos os arquivos e pastas de recursos personalizados do projeto. Nesta pasta, pode colocar todos os ficheiros necessários para a tradução ou personalização da interface da aplicação (arquivo imagem, arquivo texto, arquivo XLIFF, etc.). 4D usa mecanismos automáticos para trabalhar com o conteúdo desta pasta, em particular para a manipulação de ficheiros XLIFF e imagens estáticas. Para utilizar no modo remoto, a pasta Recursos permite-lhe partilhar arquivo entre o servidor e todas as máquinas clientes. Consulte o *Manual 4D Server*.

| Conteúdos             | Descrição                                                                                                                                                                  | Formato |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Arquivos e pastas dos recursos do banco de dados                                                                                                                           | vários  |
| Images/Library/*item* | Imagens da biblioteca de imagens como arquivo separados(*). Os nomes destes itens tornam-se nomes de arquivo. Se existir uma duplicação, é acrescentado um número ao nome. | picture |

(*) apenas se o projeto tiver sido exportado de um banco de dados binário .4db.

## Pasta Data

A pasta Data contém o ficheiro de dados e todos os arquivo e pastas relacionados com os dados.

| Conteúdos    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Formato |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | arquivo de dados que contém os dados introduzidos nos registos e todos os dados pertencentes aos registos. Quando abre um projeto 4D, a aplicação abre o arquivo de dados atual por defeito. Se alterar o nome ou a localização deste arquivo, aparecerá a caixa de diálogo *Abrir arquivo de dados* para que possa selecionar o arquivo de dados a utilizar ou criar um novo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | binary  |
| data.journal | Criado apenas quando a base de dados utiliza um ficheiro de registo. O arquivo de registo é utilizado para garantir a segurança dos dados entre cópias de segurança. Todas as operações efectuadas sobre os dados são registadas sequencialmente neste arquivo. Por conseguinte, cada operação sobre os dados provoca duas acções simultâneas: a primeira sobre os dados (a expressão é executada normalmente) e a segunda no ficheiro de registo (é registada uma descrição da operação). O arquivo de registo é construído de forma independente, sem perturbar ou atrasar o trabalho do utilizador. Uma base de dados só pode trabalhar com um único arquivo de registo de cada vez. O arquivo de registo regista operações como adições, modificações ou eliminações de registos, transacções, etc. É gerado por defeito quando é criada uma base de dados. É gerado por defeito quando é criada uma base de dados. | binary  |
| data.match   | (interno) UUID correspondente ao número da tabela                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | XML     |

(*) Quando o projeto é criado a partir de uma base de dados binária .4db, o arquivo de dados não é alterado. Assim, pode ter um nome diferente e ser colocado noutro local.

### Pasta Settings

Se existir um arquivo de propriedades de dados [em uma pasta de dados ](#settings-folder), da pasta Dados, tem prioridade sobre o arquivo de propriedades do usuário.

> Estas configurações têm prioridade sobre **[arquivos de configurações de usuário](#settings-folder-1)** e **[configurações de estrutura](#sources-folder)** arquivos.

| Conteúdos           | Descrição                                                                                                                                                                                                                                                                                                 | Formato |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descrição de os grupos e usuários de 4D e seus direitos de acesso quando o banco for lançado com este arquivo de dados.                                                                                                                                                                                   | JSON    |
| Backup.4DSettings   | Parâmetros de cópia de segurança do banco de dados, utilizados para definir as [opções de cópia de segurança](Backup/settings.md)) quando o banco de dados for lançado com este arquivo de dados. As teclas relativas à configuração da cópia de segurança são descritas no manual *4D XML Keys Backup* . | XML     |
| settings.4DSettings | Propriedades personalizadas de o banco de dados para este arquivo de dados.                                                                                                                                                                                                                               | XML     |

### Pasta Logs

A pasta Logs contém todos os arquivos de registo utilizados pelo projeto. Os arquivos de registro incluem, em particular:

- conversão da base de dados,
- pedidos do servidor Web,
- Diário de actividades de cópia de segurança/restauro (*Diário de cópia de segurança\[xxx].txt*, ver [Diário de cópia de segurança](Backup/backup.md#backup-journal))
- depuração de comandos,
- 4D Pedidos do servidor (gerados em máquinas clientes e no servidor).

> Uma pasta adicional de Logs está disponível na pasta de preferências do usuário do sistema (pasta 4D ativada), veja o comando [Obter pasta 4D](https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html) para arquivos de log de manutenção e nos casos em que a pasta de dados é somente leitura.

## Pasta Settings

Esta pasta contém **arquivos de configuração de dados** utilizados para a administração do banco de dados.

> Estas configurações têm prioridade sobre **[configurações de estrutura](#sources-folder)** arquivos. No entanto, se existir um arquivo de configurações **[de usuário para dados](#settings-folder)** , ele tem prioridade sobre o arquivo de configurações do usuário.

| Conteúdos           | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                      | Formato |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| directory.json      | Descrição dos grupos e usuários de 4D para o banco de dados, assim como seus direitos de acesso                                                                                                                                                                                                                                                                                                                                                | JSON    |
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
| CompilerIntermediateFiles  | arquivos intermédios resultantes da compilação do Apple Silicon    | Folder  |

## Pasta Components

Esta pasta contém os plug-ins que devem estar disponíveis no projeto de aplicação. Deve ser armazenado ao mesmo nível que a pasta Project.

> Um projeto de aplicação pode ser utilizado como um componente:
> 
> - para desenvolvimento: coloque um alias do arquivo .4dproject na pasta Components do projeto de host.
> - para implantação: [construir o componente](Desktop/building.md#build-component) e colocar o arquivo .4dz resultante numa pasta .4dbase na pasta Components da aplicação anfitriã.

## Pasta Plugins

Esta pasta contém os componentes que devem estar disponíveis unicamente no banco de dados projeto. Deve ser armazenado ao mesmo nível que a pasta Project.

## Pasta Documentation

Esta pasta contém todos os arquivo de documentação (.md) criados para os elementos do projeto, tais como classes, métodos ou formulários. Os arquivo de documentação são geridos e apresentados no Explorer 4D.

Para mais informações, consulte [Documentar um projeto](Project/documentation.md).

## WebFolder

Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. É criado automaticamente quando o servidor Web é iniciado pela primeira vez. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. Pasta raiz padrão do servidor Web 4D para páginas, imagens, etc. É criado automaticamente quando o servidor Web é iniciado pela primeira vez.
