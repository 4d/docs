---
id: user-settings
title: Propriedades usuário
---

4D oferece dois modos de operação para as configurações dos projetos:

*   **Standard** : todas as  [definições](../settings/overview.md) são armazenadas no arquivo [*settings.4DSettings* ao nível do projeto](../Project/architecture.md#sources) e são aplicadas em todos os casos. Este é o modo predefinido, adequado para a fase de desenvolvimento (todas as aplicações).

*  Modo **User settings**: parte das definições personalizadas são armazenadas num arquivo *settings.4DSettings* [na pasta Settings](../Project/architecture.md#settings-user) (para todos os ficheiros de dados) ou [na pasta Data](../Project/architecture.md#settings-user-data) (para este ficheiro de dados) e são utilizadas em vez das definições de estrutura. Este modo é adequado para a fase de implantação de aplicações de ambiente de trabalho. Este modo é ativado através de uma opção localizada na página [Security](../settings/security.md) das Definições.

Ao definir as definições do utilizador, pode manter as definições personalizadas entre actualizações das suas aplicações 4D, ou gerir diferentes definições para a mesma aplicação 4D implementada em vários sites diferentes. Permite igualmente utilizar a programação para gerir os arquivos de configuração através de XML.

4D pode gerar e usar dois tipos de propriedades usuário:

-   **Definições do usuário**: São utilizadas em vez das definições de estrutura para qualquer arquivo de dados aberto com a aplicação.
-   **Definições do usuário para o arquivo de dados**: Podem ser definidas especificamente para cada arquivo de dados utilizado com a sua aplicação, configurando, por exemplo, o ID da porta ou a cache do servidor.

Com esta opção, pode facilmente implementar e atualizar várias cópias da mesma aplicação de ambiente de trabalho com vários arquivos de dados, cada um contendo definições diferentes.

Considere, por exemplo, a seguinte configuração, em que uma aplicação é duplicada e cada cópia utiliza uma definição de ID de porta diferente. Se esta definição do usuário estiver ligada ao arquivo de dados, será possível atualizar a aplicação sem ter de alterar manualmente o ID do porto:

![](../assets/en/settings/user-settings-config.png)

## Ativar as definições do utilizador

Para ativar as definições do usuário, é necessário marcar a opção **Definições** > **Segurança** > **Enable user Settings** :

![](../assets/en/settings/user-settings-enable.png)

* **Definições de estrutura**
* **Propriedades usuário**
* **Propriedades usuário para o arquivo de dados**

Pode acessar estas caixas de diálogo utilizando o menu **Design > Settings...** ou o botão **Settings** na barra de ferramentas:

![](../assets/en/settings/user-settings-dialog.png)

You can also access these dialog boxes using the [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) command with the appropriate *settingsType* selector.

The Structure Settings dialog box is identical to the standard Settings, and provides access to all its properties (which can be overriden by user settings).

## Propriedades usuário e definições do usuário para o ficheiro de dados

The **User Settings** and **User Settings for Data File** dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:

![](../assets/en/settings/user-settings-2.png)

The following table lists the pages of settings found in the **User Settings** and **User Settings for Data File** dialog boxes and describes their main differences with respect to standard settings:

| **Page of Structure Settings**                                                           | **Page of User Settings**                    | **Página de Propriedades usuário para ficheiro de dados** |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| [Página geral](../settings/general.md)                                                   | N/a                                          | N/a                                                       |
| [Página Interface](../settings/interface.md)                                             | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Compilador](../settings/compiler.md)                                             | N/a                                          | N/a                                                       |
| [Página Base de dados/armazenamento de dados](../settings/database.md#data-storage)      | N/a                                          | N/a                                                       |
| [Página Base de dados/Memória](../settings/database.md#memory)                           | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Backup/Peridiocidade](../settings/backup.md#scheduler)                           | N/a                                          | Idêntico às propriedades padrão                           |
| [Página Backup/Configuração](../settings/backup.md#configuration)                        | N/a                                          | Idêntico às propriedades padrão                           |
| [Página Backup/Backup e restaurar](../settings/backup.md#backup-restore)                 | N/a                                          | Idêntico às propriedades padrão                           |
| [Página cliente-servidor/opções rede](../settings/client-server.md#network-options)      | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página cliente-servidor/Configuração IP](../settings/client-server.md#ip-configuration) | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Configuração](../settings/web.md#configuration)                              | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Opções (I)](../settings/web.md#options)                                      | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Opções (II)](../settings/web.md#options-ii)                                  | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Log (tipo)](../settings/web.md#log)                                          | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Log (backup)](../settings/web.md#log)                                        | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Web services](../settings/web.md#web-services)                               | Opção de prefixação do método não disponível | Opção de prefixação do método não disponível              |
| [Página SQL](../settings/sql.md)                                                         | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página PHP](../settings/php.md)                                                         | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página segurança](../settings/security.md)                                              | N/a                                          | N/a                                                       |
| [Página de compatibilidade](../settings/compatibility.md)                                | N/a                                          | N/a                                                       |

When you edit settings in this dialog box, they are automatically stored in the corresponding *settings.4DSettings* file (see below).

## `SET PARAMETER DE LA BASE DE DATOS` e propriedades usuário

Some of the user settings are also available through the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command. User settings are parameters with the **Kept between two sessions** property set to **Yes**.

When the **User Settings** feature is enabled, user settings edited by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command are automatically saved in the user settings for the data file.

> `Table sequence number` is an exception; this setting value is always saved in the data file itself.

## Ficheiros settings.4DSettings

When you [check the **Enable User Settings** option](#enabling-user-settings), user settings files are automatically created. Their location depends on the type of user settings defined.

### Propriedades usuário

The standard user settings file is automatically created and placed in a settings folder at the following location:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... where *ProjectFolder* is the name of the folder containing the project structure file.

In merged applications, the user settings file is placed at the following location:

* In single-user versions: ProjectFolder/Database/Settings/settings.4DSettings
* In client/server versions: ProjectFolder/Server Database/Settings/settings.4DSettings

### Propriedades usuário para arquivo de dados

The user settings file linked to the data file is automatically created and placed in a settings folder at the following location:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... where *Data* is the name of the folder containing the current data file of the application.

> When the data file is located at the same level as the project structure file, structure-based and data-based user settings files share the same location and file. The **User Settings for Data File...** menu command is not proposed.

:::note

Settings files are XML files; they can be read and modified using integrated 4D XML commands or using an XML editor. This means that you can manage settings by programming, particularly in the context of applications compiled and merged with 4D Volume Desktop. When you modify this file by programming, the changes are only taken into account the next time the database is opened.

:::


## Prioridade dos parâmetros

As definições podem ser guardadas em três níveis. Each setting defined at one level overrides the same setting defined at a previous level, if any:

| **Nível de prioridade** | **Nome**                                                                  | **Localização**                                                                                                                                               | **Comentários**                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (mais baixo)          | Structure settings (or Settings when "User settings" feature not enabled) | ***settings.4DSettings*** file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases) | Unique location when user settings are not enabled. Aplicado a todos os exemplares da aplicação.                                       |
| 2                       | Propriedades usuário (todos os ficheiros de dados)                        | ***settings.4DSettings*** file in the Settings folder at the same level as the Project folder                                                                 | Substitui as definições da estrutura. Armazenado no pacote da aplicação.                                                               |
| 1 (mais alto)           | Propriedades usuário (ficheiro de dados atual)                            | ***settings.4DSettings*** file in the Settings folder at the same level as the data file                                                                      | Substitui as propriedades de estrutura e as propriedades usuário. Applied only when the linked data file is used with the application. |

Keep in mind that user settings files only contain a subset of relevant settings, while the structure file contains all custom settings, including core settings.
