---
id: overview
title: Settings
---

Os parâmetros configuram o funcionamento do projeto atual. Esses parâmetros podem diferir para cada projeto. Eles incluem as portas de escuta, configurações de backup, opções de segurança, parâmetros Web, etc.

![](../assets/en/settings/main.png)

:::info

4D ofrece otro conjunto de parámetros, llamados **Preferencias**, que se aplican a la aplicación 4D IDE. Para más información, consulte [Preferencias](../Preferences/general.md).

:::

## Aceder os parâmetros

Pode aceder à caixa de diálogo Parâmetros:

- utilizando la opción de menú **Diseño > Parámetros...**
- haciendo clic en **Parámetros** en la barra de herramientas 4D
- en 4D Server, utilizando la opción de menú **Edición > Parámetros...**

Quando o modo [**Propriedades usuário** está ativado](#user-settings), **Propriedades...** é renomeado de **Propriedades da estrutura...** e dois comandos de menu adicionais estão disponíveis em cada local:

- **Parámetros usuario...** le da acceso a los parámetros que pueden almacenarse externamente en un archivo usuario. Se estas forem modificadas, serão utilizadas em vez dos parâmetros de estrutura.
- **Parámetros usuario para el archivo de datos...** le da acceso a los parámetros que pueden almacenarse externamente en un archivo usuario adjunto al archivo de datos actual. Se eles forem modificados, serão usados em vez de parâmetros de usuário ou estrutura.

### Informações de bloqueio

O bloqueio pode ocorrer nos modos Projeto e Cliente/servidor quando:

- El archivo *settings.4DSettings* es de "sólo lectura" (sólo Proyectos). A modificação de uma configuração exibirá um alerta para desbloqueá-la, se possível.
- Dois ou mais usuários tentam modificar as mesmas configurações ao mesmo tempo. Os parâmetros não podem ser usadas até que o primeiro usuário a libere fechando a janela. (Apenas cliente/servidor)

Em ambos os casos, os parâmetros podem ser abertos em 'Somente leitura', mas não podem ser usados até que o bloqueio seja removido.

## Personalização de parâmetros

En las cajas de diálogo de las Propiedades, los parámetros cuyos valores se han modificado aparecen **en negrita**:

![](../assets/en/settings/customize-settings.png)

Os parâmetros indicados como personalizados podem ter sido modificados diretamente na caixa de diálogo, ou pode ter sido modificado anteriormente no caso de um projeto convertido.

Um parâmetro continua a aparecer a negrito mesmo quando o seu valor é substituído manualmente pelos seus valores por defeito. Desta forma, é sempre possível identificar visualmente quaisquer parâmetros que tenham sido personalizados.

A maioria dos parâmetros é aplicada imediatamente. No entanto, alguns deles (como parâmetro de inicialização) só têm efeito quando o banco de dados é reiniciado. Neste caso, uma caixa de diálogo parece informar que a alteração terá efeito na próxima inicialização.

### Repor os parâmetros

Para reiniciar los parámetros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en **Restablecer los valores de fábrica**.

Este botão repõe todos os parâmetros da página atual. Fica ativo quando pelo menos um parâmetro tiver sido modificado na página atual.

## Propriedades usuário

4D oferece dois modos de operação para as configurações dos projetos:

- **Standard** mode: all settings are stored in the [*settings.4DSettings* file at the project level](../Project/architecture.md#sources) and are applied in all cases. Este é o modo predefinido, adequado para a fase de desenvolvimento (todas as aplicações).

- Modo **Configurações do Usuário**: parte das configurações personalizadas são armazenadas em um arquivo *settings.4DSettings* [na pasta de configurações](../Project/architecture.md#settings-user) (para todos os arquivos de dado) ou [na pasta de dados](../Project/architecture.md#settings-user-data) (para este arquivo de dados) e são usados em vez das configurações de estrutura. Este modo é adequado para a fase de implantação de aplicações de ambiente de trabalho. Você ativa este modo usando uma opção localizada na [Página de segurança](./security.md) das Configurações.

Ao definir as definições do utilizador, pode manter as definições personalizadas entre actualizações das suas aplicações 4D, ou gerir diferentes definições para a mesma aplicação 4D implementada em vários sites diferentes. Permite igualmente utilizar a programação para gerir os arquivos de configuração através de XML.

4D pode gerar e usar dois tipos de propriedades usuário:

- **Definições do usuário**: São utilizadas em vez das definições de estrutura para qualquer arquivo de dados aberto com a aplicação.
- **Definições do usuário para o arquivo de dados**: Podem ser definidas especificamente para cada arquivo de dados utilizado com a sua aplicação, configurando, por exemplo, o ID da porta ou a cache do servidor.

Com esta opção, pode facilmente implementar e atualizar várias cópias da mesma aplicação de ambiente de trabalho com vários arquivos de dados, cada um contendo definições diferentes.

Considere, por exemplo, a seguinte configuração, em que uma aplicação é duplicada e cada cópia utiliza uma definição de ID de porta diferente. Se esta definição do usuário estiver ligada ao arquivo de dados, será possível atualizar a aplicação sem ter de alterar manualmente o ID do porto:

![](../assets/en/settings/user-settings-config.png)

### Ativar as definições do utilizador

Para ativar as definições do usuário, você precisa verificar a opção **Configurações** > **Segurança** > **Ativar Definições do Usuário**:

![](../assets/en/settings/user-settings-enable.png)



- **Definições de estrutura**
- **Propriedades usuário**
- **Propriedades usuário para o arquivo de dados**

Você pode acessar essas caixas de diálogo usando o menu **Design > Configurações...** ou o botão **Configurações** na barra de ferramentas:

![](../assets/en/settings/user-settings-dialog.png)

Você também pode acessar essas caixas de diálogo usando o comando [OPEN SETTINGS WINDOW](../commands-legacy/open-settings-window.md) com o seletor *settingsType* apropriado.

A caixa de diálogo Configurações da estrutura é idêntica às Configurações standard e dá acesso a todas as suas propriedades (que podem ser substituídas por configurações do utilizador).

### Propriedades usuário e definições do usuário para o ficheiro de dados

As caixas de diálogo **Configurações do Usuário** e **Configurações do Usuário para Arquivo de Dados** contêm uma seleção de propriedades relevantes que podem ser definidas para todos os arquivos de dados ou para um único arquivo de dados:

![](../assets/en/settings/user-settings-2.png)

A tabela seguinte lista as páginas das definições encontradas nas caixas de diálogo User Settings e User Settings for Data File e descreve as suas principais diferenças em relação às definições padrão:

| **Página de definições de estrutura**                                               | **Página das definições do usuário**         | **Página de Propriedades do Usuário para Arquivo de Dados** |
| ----------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------- |
| [Página general](./general.md)                                                      | N/a                                          | N/a                                                         |
| [Página Interface](./interface.md)                                                  | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Compilador](./compiler.md)                                                  | N/a                                          | N/a                                                         |
| [Página Banco de dados/Armazenamento de dados](./database.md#data-storage-page)     | N/a                                          | N/a                                                         |
| [Página Banco de dados/Memória](./database.md#memory-page)                          | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Backup/Agendador](./../Backup/settings.md#scheduler)                        | N/a                                          | Idêntico às propriedades padrão                             |
| [Página Backup/Configuração](./../Backup/settings.md#configuration)                 | N/a                                          | Idêntico às propriedades padrão                             |
| [Página de Backup/Backup e restauração](./../Backup/settings.md#backup--restore)    | N/a                                          | Idêntico às propriedades padrão                             |
| [Página Cliente-Servidor/rede](./client-server.md#network-options-page)             | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Cliente-Servidor/Configuração IP](./client-server.md#ip-configuration-page) | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Web/Configuração](./web.md#configuration)                                   | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Web/Options (I)](./web.md#options-i)                     | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Web/Opções (II)](./web.md#options-ii)                    | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Web/Log (tipo)](./web.md#log-type)                       | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Web/Log (backup)](./web.md#log-backup)                   | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| Página [Serviços Web](./web.md#web-services)                                        | Opção de prefixação do método não disponível | Opção de prefixação do método não disponível                |
| [Página SQL](./sql.md)                                                              | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página PHP](./php.md)                                                              | Idêntico às propriedades padrão              | Idêntico às propriedades padrão                             |
| [Página Segurança](./security.md)                                                   | N/a                                          | N/a                                                         |
| [Página Compatibilidade](./compatibility.md)                                        | N/a                                          | N/a                                                         |

Quando você editar as configurações nesta caixa de diálogo, elas são automaticamente armazenadas nas *configurações correspondentes. DConfigurações* arquivo (veja abaixo) ou o arquivo *Backup.4DSettings* (confira as [configurações de backup](../Backup/settings.md) da página para obter mais informações).

### `SET DATABASE PARAMETER` e configurações de usuário

Algumas das configurações do usuário também estão disponíveis através do comando [SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md). As definições do utilizador são parâmetros com a propriedade **Kept between two sessions** definida para **Yes**.

Quando a funcionalidade **Propriedades usuário** está ativada, as propriedades usuário editadas pelo comando [SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md) são automaticamente salvas nas configurações do usuário para o arquivo de dados.

> 'Número de seqüência de tabela' é uma exceção; esse valor de configuração é sempre salvo no próprio arquivo de dados.

### Arquivos settings.4DSettings

Ao [verificar a opção **Ativar Configurações do Usuário**](#enabling-user-settings), os arquivos de configurações de usuário são criados automaticamente. A sua localização depende do tipo de definições do utilizador definidas.

#### Propriedades usuário

O arquivo de definições do utilizador padrão é criado automaticamente e colocado numa pasta de definições na seguinte localização:

[`ProjectFolder/Settings/settings.4DSettings`](../Project/architecture.md#settings-user)

... onde *ProjectFolder* é o nome da pasta que contém o arquivo da estrutura do projeto.

Nas aplicações fusionadas, o arquivo de definições do utilizador é colocado na seguinte localização:

- Nas versões de usuário único: ProjectFolder/Database/Settings/settings.4DSettings
- Em versões cliente/servidor: ProjectFolder/Server Database/Settings/settings.4DSettings

#### Propriedades usuário para arquivo de dados

O arquivo de definições do usuário ligado ao arquivo de dados é automaticamente criado e colocado numa pasta de definições na seguinte localização:

[`Data/Settings/settings.4DSettings`](../Project/architecture.md#settings-user-data)

... onde *Dados* é o nome da pasta que contém o arquivo de dados atual da aplicação.

> Quando o arquivo de dados estiver localizado ao mesmo nível que o arquivo da estrutura do projeto, os arquivos de definições do utilizador baseados na estrutura e nos dados partilham a mesma localização e o mesmo arquivo. O comando de menu **Configurações do Usuário para o Arquivo de Dados...** não é proposto.

:::note

Os arquivos de definições são arquivos XML; podem ser lidos e modificados utilizando comandos XML 4D integrados ou utilizando um editor XML. Isto significa que pode gerir as definições por programação, particularmente no contexto de aplicações compiladas e fundidas com 4D Volume Desktop. Quando modificar este arquivo por programação, as alterações só são consideradas na próxima vez que a base de dados for aberta.

:::

### Prioridade dos parâmetros

As definições podem ser guardadas em três níveis. Cada configuração definida num nível substitui a mesma configuração definida num nível anterior, caso exista:

| **Nível de prioridade**           | **Name**                                                                                                                  | **Localização**                                                                                                                                                                                                                    | **Comments**                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3 (mais baixo) | Definições de estrutura (ou Definições quando a função "Definições do utilizador" não estiver ativada) | ***settings.4DSettings*** arquivo na pasta de Origem (bancos de dados do projeto) ou na pasta Settings como o mesmo nível do arquivo de estrutura (bancos de dados binários) | Localização única quando as definições do utilizador não estão ativadas. Aplicado a todos os exemplares da aplicação.                              |
| 2                                 | Propriedades usuário (todos os ficheiros de dados)                                                     | ***settings.4DSettings*** arquivo na pasta Settings no mesmo nível que a pasta do projeto                                                                                                                          | Substitui as definições da estrutura. Armazenado no pacote da aplicação.                                                                           |
| 1 (mais alto)  | Propriedades usuário (ficheiro de dados atual)                                                         | ***settings.4DSettings*** arquivo na pasta Settings ao mesmo nível que o arquivo de dados                                                                                                                          | Substitui as propriedades de estrutura e as propriedades usuário. Aplicado apenas quando o arquivo de dados linkado for utilizado com a aplicação. |

Lembre que os arquivo de definições do utilizador contêm apenas um subconjunto de definições relevantes, enquanto o arquivo de estrutura contém todas as definições personalizadas, incluindo as definições principais.
