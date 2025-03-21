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

Também é possível acessar a estas caixas de diálogo utilizando o comando [OPEN SETTINGS WINDOW](https://doc.4d.com/4dv19R/help/command/en/page903.html) com o seletor *settingsType* adequado.

A caixa de diálogo Configurações da estrutura é idêntica às Configurações standard e dá acesso a todas as suas propriedades (que podem ser substituídas por configurações do utilizador).

## Propriedades usuário e definições do usuário para o ficheiro de dados

As caixas de diálogo **User Settings** e **User Settings for Data File** contêm uma seleção de propriedades relevantes que podem ser definidas para todos os arquivos de dados ou para um único arquivo dados:

![](../assets/en/settings/user-settings-2.png)

A tabela seguinte lista as páginas das definições encontradas nas caixas de diálogo **User Settings** e **User Settings for Data File** e descreve as suas principais diferenças em relação às definições padrão:

| **Página de definições de estrutura**                                                         | **Página das definições do usuário**         | **Página de Propriedades usuário para ficheiro de dados** |
| --------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| [Página geral](../settings/general.md)                                                        | N/a                                          | N/a                                                       |
| [Página Interface](../settings/interface.md)                                                  | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Compilador](../settings/compiler.md)                                                  | N/a                                          | N/a                                                       |
| [Página Base de dados/armazenamento de dados](../settings/database.md#data-storage-page)      | N/a                                          | N/a                                                       |
| [Página Base de dados/Memória](../settings/database.md#memory-page)                           | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Backup/Peridiocidade](../settings/../Backup/settings.md#scheduler)                    | N/a                                          | Idêntico às propriedades padrão                           |
| [Página Backup/Configuração](../settings/../Backup/settings.md#configuration)                 | N/a                                          | Idêntico às propriedades padrão                           |
| [Página Backup/Backup e restaurar](../settings/../Backup/settings.md#backup--restore)         | N/a                                          | Idêntico às propriedades padrão                           |
| [Página cliente-servidor/opções rede](../settings/client-server.md#network-options-page)      | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página cliente-servidor/Configuração IP](../settings/client-server.md#ip-configuration-page) | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Configuração](../settings/web.md#configuration)                                   | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Opções (I)](../settings/web.md#options-i)                                         | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Opções (II)](../settings/web.md#options-ii)                                       | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Log (tipo)](../settings/web.md#log-type)                                          | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Log (backup)](../settings/web.md#log-backup)                                      | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página Web/Web services](../settings/web.md#web-services)                                    | Opção de prefixação do método não disponível | Opção de prefixação do método não disponível              |
| [Página SQL](../settings/sql.md)                                                              | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página PHP](../settings/php.md)                                                              | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                           |
| [Página segurança](../settings/security.md)                                                   | N/a                                          | N/a                                                       |
| [Página de compatibilidade](../settings/compatibility.md)                                     | N/a                                          | N/a                                                       |

Quando editar definições nesta caixa de diálogo, estas são automaticamente armazenadas no arquivo *settings.4DSettings* correspondente (ver abaixo).

## `SET DATABASE PARAMETER` e definições do utilizador

Algumas das definições do usuário também estão disponíveis através do comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) . As definições do utilizador são parâmetros com a propriedade **Kept between two sessions** definida para **Yes**.

Quando a função **User Settings** estiver ativada, as definições do utilizador editadas pelo comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) são automaticamente guardadas nas definições do utilizador para o arquivo de dados.

> `O número de sequência do quadro` é uma exceção; este valor de definição é sempre guardado no próprio arquivo de dados.

## Arquivos settings.4DSettings

Quando [marcar a opção **Enable User Settings**](#enabling-user-settings), os arquivos de definições do utilizador são criados automaticamente. A sua localização depende do tipo de definições do utilizador definidas.

### Propriedades usuário

O arquivo de definições do utilizador padrão é criado automaticamente e colocado numa pasta de definições na seguinte localização:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... em que *ProjectFolder* é o nome da pasta que contém o arquivo da estrutura do projeto.

Nas aplicações fusionadas, o arquivo de definições do utilizador é colocado na seguinte localização:

* Nas versões de usuário único: ProjectFolder/Database/Settings/settings.4DSettings
* Em versões cliente/servidor: ProjectFolder/Server Database/Settings/settings.4DSettings

### Propriedades usuário para arquivo de dados

O arquivo de definições do usuário ligado ao arquivo de dados é automaticamente criado e colocado numa pasta de definições na seguinte localização:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... em que *Data* é o nome da pasta que contém o arquivo de dados atual da aplicação.

> Quando o arquivo de dados estiver localizado ao mesmo nível que o arquivo da estrutura do projeto, os arquivos de definições do utilizador baseados na estrutura e nos dados partilham a mesma localização e o mesmo arquivo. O comando de menu **User Settings for Data File...** não é proposto.

:::note

Os arquivos de definições são arquivos XML; podem ser lidos e modificados utilizando comandos XML 4D integrados ou utilizando um editor XML. Isto significa que pode gerir as definições por programação, particularmente no contexto de aplicações compiladas e fundidas com 4D Volume Desktop. Quando modificar este arquivo por programação, as alterações só são consideradas na próxima vez que a base de dados for aberta.

:::


## Prioridade dos parâmetros

As definições podem ser guardadas em três níveis. Cada configuração definida num nível substitui a mesma configuração definida num nível anterior, caso exista:

| **Nível de prioridade** | **Nome**                                                                                               | **Localização**                                                                                                                                                          | **Comentários**                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (mais baixo)          | Definições de estrutura (ou Definições quando a função "Definições do utilizador" não estiver ativada) | ***settings.4DSettings*** arquivo na pasta Sources (bases de dados de projetos) ou na pasta Settings ao mesmo nível que o arquivo de estrutura (bases de dados binárias) | Localização única quando as definições do utilizador não estão ativadas. Aplicado a todos os exemplares da aplicação.                              |
| 2                       | Propriedades usuário (todos os ficheiros de dados)                                                     | ***settings.4DSettings*** arquivo na pasta Settings ao mesmo nível que a pasta Project                                                                                   | Substitui as definições da estrutura. Armazenado no pacote da aplicação.                                                                           |
| 1 (mais alto)           | Propriedades usuário (ficheiro de dados atual)                                                         | ***settings.4DSettings*** arquivo na pasta Settings ao mesmo nível que o arquivo de dados                                                                                | Substitui as propriedades de estrutura e as propriedades usuário. Aplicado apenas quando o arquivo de dados linkado for utilizado com a aplicação. |

Lembre que os arquivo de definições do utilizador contêm apenas um subconjunto de definições relevantes, enquanto o arquivo de estrutura contém todas as definições personalizadas, incluindo as definições principais.
