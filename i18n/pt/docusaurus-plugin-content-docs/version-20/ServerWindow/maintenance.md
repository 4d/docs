---
id: maintenance
title: Página Manutenção
---


The **Maintenance** page of the 4D Server Administration window provides information concerning the current operation of the application. Ele também fornece acesso às funções básicas de manutenção:

![](../assets/en/Admin/server-maintenance.png)


## Última verificação/compactação

These areas indicate the date, time and status of the last [data verification](MSC/verify.md) and [compacting operation](MSC/compact.md) carried out on the database.

### Verificar registos e índices

This button can be used to launch the verification operation directly, without interrupting the server. Observe que o servidor pode ficar visivelmente mais lento durante a operação.

Todos os registros e todos os índices do banco de dados são verificados. If you want to be able to target the verification or have additional options available, you will need to use the [Maintenance and Security Center](MSC/overview.md) (MSC).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.

### Compactar dados...

Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:

![](../assets/en/Admin/server-shut.png)

After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the [MSC](MSC/overview.md).

Once the compacting is finished, 4D Server automatically restarts the application. Os usuários 4D podem então ser reconectados.

> If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.


## Tempo de funcionamento

This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes).


### Reiniciar o servidor...

Este botão pode ser usado para fechar e reiniciar imediatamente o projeto. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. Após a validação, 4D Server fecha e reabre automaticamente o projeto. Os usuários 4D podem então ser reconectados.

> If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.

## Última cópia de segurança

This area indicates the date and time of the [last backup](MSC/backup.md) of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the **Scheduler** page of the structure settings.

- **Último backup**: data e hora do último backup.
- **Next backup**: date and time of next scheduled backup.
- **Needed space**: estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file.
- **Available space**: space available on the backup volume.


The **Start backup** button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the **Settings...** button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.


## Histórico de solicitações e depuração

This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation.

Refer to the [**Description of log files**](Debugging/debugLogFiles.md) section for details on log files.

### Start/Stop Request and Debug Logs

The **Start Request and Debug Logs** button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application.

> Este botão registra apenas operações executadas no servidor.

When the logs have been activated, the button title changes to **Stop Request and Debug Logs**, so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.

### Ver relatório

The **View Report** button (named **Download report** if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file.

### Carregar ficheiro de configuração dos registos

This button allows you to load a special server [log configuration file](Debugging/debugLogFiles.md#using-a-log-configuration-file) (`.json` file). Such a file can be provided by 4D technical services to monitor and study specific cases.


### Pausar no registo

This button suspends all currently logging operations started on the server. Esta funcionalidade pode ser útil para aligeirar temporariamente as tarefas do servidor.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> É possível pausar e retomar o registro em log usando o comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html).
