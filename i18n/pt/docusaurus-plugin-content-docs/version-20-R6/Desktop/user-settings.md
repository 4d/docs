---
id: user-settings
title: Propriedades usuário
---

4D oferece dois modos de operação para as configurações dos projetos:

- **Standard** mode: all [settings](../settings/overview.md) are stored in the [*settings.4DSettings* file at the project level](../Project/architecture.md#sources) and are applied in all cases. Este é o modo predefinido, adequado para a fase de desenvolvimento (todas as aplicações).

- **User settings** mode: part of the custom settings are stored in a *settings.4DSettings* file [in the Settings folder](../Project/architecture.md#settings-user) (for all data files) or [in the Data folder](../Project/architecture.md#settings-user-data) (for this data file) and are used instead of the structure settings. Este modo é adequado para a fase de implantação de aplicações de ambiente de trabalho. Este modo se activa mediante una opción situada en la [página Seguridad](../settings/security.md) de las Propiedades.

Ao definir as definições do utilizador, pode manter as definições personalizadas entre actualizações das suas aplicações 4D, ou gerir diferentes definições para a mesma aplicação 4D implementada em vários sites diferentes. Permite igualmente utilizar a programação para gerir os arquivos de configuração através de XML.

4D pode gerar e usar dois tipos de propriedades usuário:

- Los **parámetros usuario**: se utilizan en lugar de los parámetros de estructura para todo archivo de datos abierto con la aplicación.
- **Propiedades usuario para el archivo de datos**: se pueden definir específicamente para cada archivo de datos utilizado con su aplicación, configurando por ejemplo el ID del puerto o la caché del servidor.

Com esta opção, pode facilmente implementar e atualizar várias cópias da mesma aplicação de ambiente de trabalho com vários arquivos de dados, cada um contendo definições diferentes.

Considere, por exemplo, a seguinte configuração, em que uma aplicação é duplicada e cada cópia utiliza uma definição de ID de porta diferente. Se esta definição do usuário estiver ligada ao arquivo de dados, será possível atualizar a aplicação sem ter de alterar manualmente o ID do porto:

![](../assets/en/settings/user-settings-config.png)

## Ativar as definições do utilizador

Para activar los parámetros usuario, debe seleccionar la opción **Settings** > **Seguridad** > **Autorizar las propiedades usuario**:

![](../assets/en/settings/user-settings-enable.png)



- **Definições de estrutura**
- **Propriedades usuário**
- **Propriedades usuário para o arquivo de dados**

Puede acceder a estas cajas de diálogo utilizando el menú **Diseño > Propiedades...** o el botón **Propiedades** de la barra de herramientas:

![](../assets/en/settings/user-settings-dialog.png)

También puede acceder a estas cajas de diálogo utilizando el comando [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) con el selector *settingsType* apropiado.

A caixa de diálogo Configurações da estrutura é idêntica às Configurações standard e dá acesso a todas as suas propriedades (que podem ser substituídas por configurações do utilizador).

## Propriedades usuário e definições do usuário para o ficheiro de dados

Las cajas de diálogo **Propiedades usuario** y **Propiedades usuario para el archivo de datos**contienen una selección de propiedades relevantes que pueden definirse para todos los archivos de datos o para un solo archivo de datos:

![](../assets/en/settings/user-settings-2.png)

La siguiente tabla lista las páginas de parámetros que se encuentran en las cajas de diálogo **Parámetros usuario** y **Parámetros usuario para el archivo de datos** y describe sus principales diferencias con respecto a los parámetros estándar:

| **Página de definições de estrutura**                                                    | **Página das definições do usuário**         | **Página de Propriedades usuário para ficheiro de dados** |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| [General page](../settings/general.md)                                                   | N/a                                          | N/a                                                       |
| [Interface page](../settings/interface.md)                                               | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Compiler page](../settings/compiler.md)                                                 | N/a                                          | N/a                                                       |
| [Database/Data storage page](../settings/database.md#data-storage)                       | N/a                                          | N/a                                                       |
| [Database/Memory page](../settings/database.md#memory)                                   | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Backup/Scheduler page](../settings/backup.md#scheduler)                                 | N/a                                          | Idêntico às propriedades padrão                           |
| [Backup/Configuration page](../settings/backup.md#configuration)                         | N/a                                          | Idêntico às propriedades padrão                           |
| [Backup/Backup & Restore page](../settings/backup.md#backup-restore) | N/a                                          | Idêntico às propriedades padrão                           |
| [Client-server/Network options page](../settings/client-server.md#network-options)       | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Client-server/IP configuration page](../settings/client-server.md#ip-configuration)     | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Web/Configuration page](../settings/web.md#configuration)                               | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Web/Options (I) page](../settings/web.md#options)                    | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Web/Options (II) page](../settings/web.md#options-ii)                | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Web/Log (type) page](../settings/web.md#log)                         | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Web/Log (backup) page](../settings/web.md#log)                       | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Web/Web Services page](../settings/web.md#web-services)                                 | Opção de prefixação do método não disponível | Opção de prefixação do método não disponível              |
| [Página SQL](../settings/sql.md)                                                         | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página PHP](../settings/php.md)                                                         | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Security page](../settings/security.md)                                                 | N/a                                          | N/a                                                       |
| [Compatibility page](../settings/compatibility.md)                                       | N/a                                          | N/a                                                       |

Al editar los parámetros en esta caja de diálogo, se almacenan automáticamente en el archivo *settings.4DSettings* correspondiente (ver más abajo) o en el archivo *Backup.4DSettings* (consulte la página [Parámetros de backup](../Backup/settings.md) para o

## `SET DATABASE PARAMETER` y parámetros de usuario

Algunas propiedades de los usuarios también están disponibles a través del comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html). Las propiedades usuario son parámetros con la propiedad **Conservado entre dos sesiones** establecida en **Sí**.

Cuando la funcionalidad **Propiedades usuario** está activada, las propiedades usuario editadas por el comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) se guardan automáticamente en las Propiedades usuario para el a

> `Table sequence number` es una excepción; este valor de ajuste siempre se guarda en el propio archivo de datos.

## Arquivos settings.4DSettings

When you [check the **Enable User Settings** option](#enabling-user-settings), user settings files are automatically created. A sua localização depende do tipo de definições do utilizador definidas.

### Propriedades usuário

O arquivo de definições do utilizador padrão é criado automaticamente e colocado numa pasta de definições na seguinte localização:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... where *ProjectFolder* is the name of the folder containing the project structure file.

Nas aplicações fusionadas, o arquivo de definições do utilizador é colocado na seguinte localização:

- Nas versões de usuário único: ProjectFolder/Database/Settings/settings.4DSettings
- Em versões cliente/servidor: ProjectFolder/Server Database/Settings/settings.4DSettings

### Propriedades usuário para arquivo de dados

O arquivo de definições do usuário ligado ao arquivo de dados é automaticamente criado e colocado numa pasta de definições na seguinte localização:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... where *Data* is the name of the folder containing the current data file of the application.

> Quando o arquivo de dados estiver localizado ao mesmo nível que o arquivo da estrutura do projeto, os arquivos de definições do utilizador baseados na estrutura e nos dados partilham a mesma localização e o mesmo arquivo. El comando de menú **Propiedades usuario para el archivo de datos...** no se propone.

:::note

Os arquivos de definições são arquivos XML; podem ser lidos e modificados utilizando comandos XML 4D integrados ou utilizando um editor XML. Isto significa que pode gerir as definições por programação, particularmente no contexto de aplicações compiladas e fundidas com 4D Volume Desktop. Quando modificar este arquivo por programação, as alterações só são consideradas na próxima vez que a base de dados for aberta.

:::

## Prioridade dos parâmetros

As definições podem ser guardadas em três níveis. Cada configuração definida num nível substitui a mesma configuração definida num nível anterior, caso exista:

| **Nível de prioridade**           | **Name**                                                                                                                  | **Location**                                                                                                                                                                                                 | **Comments**                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (mais baixo) | Definições de estrutura (ou Definições quando a função "Definições do utilizador" não estiver ativada) | ***settings.4DSettings*** en la carpeta Sources (bases proyecto) o en la carpeta Settings al mismo nivel que el archivo de estructura (bases binarias) | Localização única quando as definições do utilizador não estão ativadas. Aplicado a todos os exemplares da aplicação.                              |
| 2                                 | Propriedades usuário (todos os ficheiros de dados)                                                     | Archivo ***settings.4DSettings*** en la carpeta Settings en el mismo nivel que la carpeta Project                                                                                            | Substitui as definições da estrutura. Armazenado no pacote da aplicação.                                                                           |
| 1 (mais alto)  | Propriedades usuário (ficheiro de dados atual)                                                         | Archivo ***settings.4DSettings*** en la carpeta Settings al mismo nivel que el archivo de datos                                                                                              | Substitui as propriedades de estrutura e as propriedades usuário. Aplicado apenas quando o arquivo de dados linkado for utilizado com a aplicação. |

Lembre que os arquivo de definições do utilizador contêm apenas um subconjunto de definições relevantes, enquanto o arquivo de estrutura contém todas as definições personalizadas, incluindo as definições principais.
