---
id: log
title: Log file (.journal)
---

Um banco de dados de uso continuo sempre registra mudanças, adições ou apagamentos. Performing regular backups of data is important but does not allow (in case of incident) restoring data entered since the last backup. To respond to this need, 4D now offers a specific tool: the log file. Este arquivo permite garantir a segurança permanente dos dados do banco de dados.

In addition, 4D works continuously with a data cache in memory. Todas as mudanças realizadas nos dados do banco de dados são armazenados temporariamente na cache antes de serem escritas no disco rígido. This accelerates the operation of applications; in fact, accessing memory is faster than accessing the hard disk. Se acontecer algo no banco de dados antes que armazenagem dos dados na cache possa ser gravada no disco rígido, precisa incluir o arquivo de histórico atual para poder restaurar o banco de dados por completo.

Por último, 4D possui funções que analisam os conteúdos do arquivo de histórico, tornando possível reverter as operações realizadas sobre os dados do banco de dados. These functions area available in the MSC: refer to the [Activity analysis](MSC/analysis.md) page and the [Rollback](MSC/rollback.md) page.

## How the log file works

O arquivo de histórico gerado por 4D contém uma descrição de todas as operações realizadas nos dados das tbelas registradas no diário do banco de dados, as quais são registradas de forma sequencial. By default, all the tables are journaled, i.e. included in the log file, but you can deselect individual tables using the **Include in Log File** table property.

Dessa forma, cada operação realizada por um usuário causa duas ações simultâneas: a primeira no banco de dados (instrução é realizada normalmente) e a segunda ação no arquivo de histórico (a descrição da ação é registrada). The log file is created independently without disturbing or slowing down the work of the user. Um banco de dados só pode funcionar com um arquivo de histórico de cada vez. The log file records the following action types:

- Opening and closing of the data file,
- Opening and closing of the process (contexts),
- Adding of records or BLOBs,
- Modifying of records,
- Deleting of records,
- Creating and closing of transactions.

For more information about these actions, refer to the [Activity analysis](MSC/analysis.md) page of the MSC.

4D manages the log file. It takes into account all operations that affect the data file equally, regardless of any manipulations performed by a user, a 4D method, the SQL engine, plug-ins, or from a Web browser or a mobile applicaton.

The following illustration sums up how the log file works:

![](assets/en/Backup/backup05.png)


The current log file is automatically saved with the current data file. This mechanism has two distinct advantages:

- Its avoids saturating the disk volume where the log file is stored. Without a backup, the log file would get bigger and bigger with use, and would eventually use all available disk space. For each data file backup, 4D or 4D Server closes the current log file and immediately starts a new, empty file, thereby avoiding the risk of saturation. The old log file is then archived and eventually destroyed depending on the mechanism for managing the backup sets.
- Conserva os arquivos de histórico correspondentes às cópias de segurança para poder analisar ou reparar um banco de dados em um momento posterior. A integração de um arquivo de histórico só pode ser realizada no banco de dados ao qual corresponde. It is important, in order to be able to properly integrate a log file into a backup, to have backups and log files archived simultaneously.


## Creating the log file

Como padrão, todo banco de dados criado com 4D utiliza um arquivo de histórico (opção definida na página **Geral** das Preferências). The log file is named *data.journal* and is placed in the Data folder.

Pode averiguar se seu banco de dados utiliza um arquivo de histórico a qualquer momento: só precisa comprovar se a opção **Utilizar o arquivo de histórico** estiver selecionada na página **Backup/Configuración** das Propriedades do banco. Se desmarcar essa opção, ou se usar um banco de dados sem arquivo de histórico, e quiser estabelecer uma estratégia de backup com um arquivo de histórico, vai precisar criar um.

To create a log file:

1. Na página **Cópia de segurança/Configuração** das Propriedades do banco de dados, marque a opção **Utilizar o arquivo de histórico**. The program displays a standard open/new file dialog box. By default, the log file is named *data.journal*.

2. Keep the default name or rename it, and then select the file location. Se tiver pelo menos dois discos rígidos, é recomendado que coloque o arquivo de histórico no disco que não tenha seu banco de dados. Se perder o disco rígido do banco de dados, poderá então recuperar o arquivo de histórico.

3. Click **Save**. The disk and the name of the open log file are now displayed in the **Use Log** area of the dialog box. You can click on this area in order to display a pop-up menu containing the log path on the disk.

4. Valide a caixa de diálogo das Propriedades do banco de dados.

Para poder criar um arquivo de histórico diretamente, o banco de dados deve estar em uma das situações abaixo:

- The data file is blank,
- Acaba de realizar uma cópia de segurança do banco de dados e ainda não foram realizadas mudanças nos dados.

Em todos os outros casos, quando validar a caixa de diálogo Propriedades de Banco de Dados, um diálogo de alerta informará que é necessário fazer um backup. If you click **OK**, the backup begins immediately, then the log file is activated. Si clicar em **Cancelar**, a solicitação é salva mas a criação do arquivo de histórico é adiada e só criará depois da próxima cópia de segurança do banco de dados. Essa precaução é indispensável porque, para restaurar o banco de dados depois de um incidente, é preciso uma cópia do banco de dados na qual se integrarão às operações registradas no arquivo de histórico.

Sem ter que fazer nada a mais, todas as operações realizadas sobre os dados são registradas nesse arquivo, e são usadas no futuro quando abrir o banco de dados.

You must create another log file if you create a new data file. You must set or create another log file if you open another data file that is not linked to a log file (or if the log file is missing).


## Stopping a log file

Se quiser parar as operações de registro no arquivo de histórico atual, apenas desmarque a opção **Use Log|Usar o arquivo de histórico ** na página **Backup/Configuration** das Propriedades do banco de dados.

4D then displays an alert message to remind you that this action prevents you from taking advantage of the security that the log file provides:

![](assets/en/Backup/backup06.png)

Se clicar **Stop**, o arquivo de histórico é imediatamente fechado (a caixa de diálogo Propriedades do banco de dados não precisa ser validada depois).

If you wish to close the current log file because it is too large, you might consider performing a data file backup, which will cause the log file to be backed up as well.

> **4D Server:** The `New log file` command automatically closes the current log file and starts a new one. If for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup.
