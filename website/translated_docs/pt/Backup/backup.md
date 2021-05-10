---
id: backup
title: Backup
---


## Começando um backup

A backup can be started in three ways:

- Manually, using the **Backup...** item of the 4D **File** menu or the **Backup** button of the [Maintenance and Security Center](MSC/backup.md).
- Automaticamente, usando o agendamento  que pode ser estabelecido em Configurações de Banco de Dados
- Programmatically, using the `BACKUP` command.

> 4D Server: A backup can be started manually from a remote machine using a method that calls the `BACKUP` command. The command will be executed, in all cases, on the server.

### Manual backup

1. Select the **Backup...** command in the 4D **File** menu.   
   The backup window appears: ![](assets/en/Backup/backup01.png) You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the **Backup/Configuration** page of the Database Settings.

- You can also open the [Maintenance and Security Center](MSC/overview.md) of 4D and display the [Backup page](MSC/backup.md).

O botão **Propriedades de Banco de Dados...** faz com que seja exibida a página Backup/Configuration  das Configurações do Banco de Dados.

 2. Click **Backup** to start the backup using current parameters.


### Backup automático periódico

Scheduled backups are started automatically. São configurados na página **Backup/Scheduler** em **Database Settings**.

Backups are automatically performed at the times defined on this page without any type of user intervention. For more information on using this dialog box, refer to [Scheduler in backup settings](settings.md#scheduler).


### Comando BACKUP

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Database settings. You can use the `On Backup Startup` and `On Backup Shutdown` database methods for handling the backup process (see the *4D Language Reference* manual).


## Gerenciar o processo de  backup

Once a backup is started, 4D displays a dialog box with a thermometer indicating the progress of the backup:

![](assets/en/Backup/backupProgress.png)

This thermometer is also displayed on the [Backup page of the MSC](MSC/backup.md) if you have used this dialog box.

The **Stop** button lets the user interrupt the backup at any time (refer to [Handling backup issues](backup.md#handling-backup-issues) below).

The status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server. It is also recorded in the database **Backup journal.txt**.

### Acesso do banco de dados durante o backup

Durante a cópia de segurança, acesso ao banco de dados é restrito por 4D dependendo do contexto. 4D locks any processes related to the types of files included in the backup: if only the project files are being backed up, access to the structure is not possible but access to the data will be allowed.

Conversely, if only the data file is being backed up, access to the structure is still allowed. Nesse caso, as possibilidades de acesso ao banco de dados  são as seguintes:

- Com a versão 4D monousuário, o banco de dados é trancado tanto para leitura quanto escrita, todos os processos são congelados. No actions can be performed.
- Com 4D Server, o banco de dados está bloqueado só para escrita; as máquinas clientes podem ver os dados. If a client machine sends an add, remove or change request to the server, a window appears asking the user to wait until the end of the backup. Quando o banco de dados for salvo, a janela desaparece a ação é ralizada To cancel the request in process and not wait for the end of the backup, simply click the **Cancel operation** button. However, if the action waiting to be executed comes from a method launched prior to the backup, you should not cancel it because only operations remaining to be performed are cancelled. Além disso, um método parcialmente executado pode causar inconsistências lógicas no banco de dados. > When the action waiting to be executed comes from a method and the user clicks the **Cancel operation** button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).

### Gestão dos problemas das cópias de segurança

It may happen that a backup is not executed properly. There may be several causes of a failed backup: user interruption, attached file not found, destination disk problems, incomplete transaction, etc. 4D processes the incident according to the cause.

Em todos os casos,  lembre que o estado da última copia de segurança (correta ou com falha) se armazena na área de informação da [página de cópias de segurança em CSM](MSC/backup.md) ou na **página de manutenção** de 4D Server, assim como no banco de dados **Backup journal.txt**.

- **User interruption**: The **Stop** button in the progress dialog box allows users to interrupt the backup at any time. In this case, the copying of elements is stopped and the error 1406 is generated. You can intercept this error in the `On Backup Shutdown` database method.
- **Arquivo anexo não encontrado**: quando não encontrar um arquivo adjunto, 4D realiza uma cópia de segurança parcial (cópia de segurança dos arquivos do banco de dados e dos arquivos adjuntos acessíveis) e devolve um erro.
- **Backup impossível** (disco está cheio ou é protegido contra escrita, disco não encontrado, falha de disco, transação incompleta, banco de dados não lançado no momento do backup automático programado, etc): se essa é a primeira vez do erro, 4D vai fazer uma segunda tentativa de realizar o backup A espera entre duas tentativas é definida na página **Backup/Backup & Restore** nas Propriedades do banco de dados. If the second attempt fails, a system alert dialog box is displayed and an error is generated. You can intercept this error in the `On Backup Shutdown` database method.

## Histórico de cópias de segurança (Backup Journal)

Para facilitar o acompanhamento e a verificação das cópias de segurança ou backups do banco de dados, o módulo de backup escreve um resumo em um arquivo especial de cada operação, similar a um diário de atividades. Like an on-board manual, all database operations (backups, restores, log file integrations) are logged in this file whether they were scheduled or performed manually. The date and time that these operations occurred are also noted in the journal.

O histórico de cópia de segurança é chamado "Backup Journal[001].txt" e fica na pasta "Logs" do banco de dados. The backup journal can be opened with any text editor.

#### Management of backup journal size

In certain backup strategies (for example, in the case where numerous attached files are being backed up), the backup journal can quickly grow to a large size. Two mechanisms can be used to control this size:

- **Automatic backup**: Before each backup, the application examines the size of the current backup journal file. If it is greater than 10 MB, the current file is archived and a new file is created with the [xxx] number incremented, for example "Backup Journal[002].txt”. Once file number 999 is reached, the numbering begins at 1 again and the existing files will be replaced.
- **Possibilidade de reduzir a quantidade de informação gravada **: Para fazer isso, modifique o valor da chave `VerboseMode` no arquivo *Backup.4DSettings* do banco de dados. By default, this key is set to True. If you change the value of this key to False, only the main information will be stored in the backup journal: date and time of start of operation and any errors encountered. The XML keys concerning backup configuration are described in the *4D XML Keys Backup* manual.



## backupHistory.json

Toda a informação relativa às últimas operações de cópia de segurança e restauração se armazena no arquivo **backupHistory.json** do banco de dados. It logs the path of each saved file (including attachments) as well as number, date, time, duration, and status of each operation. To limit the size of the file, the number of logged operations is the same as the number of available backups ("Keep only the last X backup files") defined in the backup settings.

The **backupHistory.json** file is created in the current backup destination folder. You can get the actual path for this file using the following statement:

```4d
$backupHistory:=Get 4D file(Backup history file)
```
> **WARNING**  
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.
> The **backupHistory.json** file is formatted to be used by the 4D application. If you are looking for a human-readable report on backup operations, you might find the Backup journal more accurate. 
