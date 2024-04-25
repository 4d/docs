---
id: backup
slug: backup
title: Página de Backup
---

Uma cópia de segurança pode ser iniciada de três maneiras:

- Manually, using the **Backup...** item of the 4D **File** menu or the **Backup** button of the [Maintenance and Security Center](MSC/backup.md).
- Automaticamente, usando o agendamento  que pode ser estabelecido em Configurações de Banco de Dados
- Programmatically, using the `BACKUP` command.

> 4D Server: A backup can be started manually from a remote machine using a method that calls the `BACKUP` command. O comando será executado, em todos os casos, no servidor.

## You can use the Backup page to view some backup parameters of the database and to launch a manual backup:

1. Select the **Backup...** command in the 4D **File** menu.
   The backup window appears:
   ![](../assets/en/Backup/backup01.png)
   You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the **Backup/Configuration** page of the Database Settings.

- You can also open the [Maintenance and Security Center](MSC/overview.md) of 4D and display the [Backup page](MSC/backup.md).

The **Database properties...** button causes the Backup/Configuration page of the Structure Settings to be displayed.

2. Click **Backup** to start the backup using current parameters.

## Backup automático periódico

As cópias de segurança programadas são iniciadas automaticamente. They are configured in the **Backup/Scheduler** page of the **Settings**.

As cópias de segurança são feitas automaticamente na hora definida nessa página sem nenhum tipo de intervenção do usuário. For more information on using this dialog box, refer to [Scheduler in backup settings](settings.md#scheduler).

## Comando BACKUP

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. You can use the `On Backup Startup` and `On Backup Shutdown` database methods for handling the backup process (see the _4D Language Reference_ manual).

## Gerenciar o processo de  backup

Quando iniciar o backup, 4D exibe uma caixa de diálogo com um termômetro indicando o progresso da cópia de segurança:

![](../assets/en/Backup/backupProgress.png)

This thermometer is also displayed on the [Backup page of the MSC](MSC/backup.md) if you have used this dialog box.

The **Stop** button lets the user interrupt the backup at any time (refer to [Handling backup issues](backup.md#handling-backup-issues) below).

The status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server. It is also recorded in the database **Backup journal.txt**.

### Acesso do banco de dados durante o backup

Durante a cópia de segurança, acesso ao banco de dados é restrito por 4D dependendo do contexto. 4D bloqueia os processos relacionados com os tipos de arquivos incluídos na cópia de segurança: se só fizer uma cópia de segurança dos arquivos do projeto, não se poderá acessar à estrutura mas sim aos dados.

Pelo contrário, se só fizer uma cópia de segurança do arquivo de dados, o acesso à estrutura continua sendo permitido. Nesse caso, as possibilidades de acesso ao banco de dados  são as seguintes:

- Com a versão 4D monousuário, o banco de dados é trancado tanto para leitura quanto escrita, todos os processos são congelados. Nenhuma ação é realizada.
- Com 4D Server, o banco de dados está bloqueado só para escrita; as máquinas clientes podem ver os dados. Se uma máquina cliente enviar uma petição de adição, eliminação ou mudança ao servidor, uma janela aparece pedindo ao usuário que espere até o final da cópia de segurança. Quando a aplicação for salva, a janela desaparece a ação é realizada. To cancel the request in process and not wait for the end of the backup, simply click the **Cancel operation** button. Entretanto, se a ação que espera ser executada vem de um método lançado antes da cópia de segurança, não deve cancelar a ação porque só são canceladas as operações restantes. Além disso, um método parcialmente executado pode causar inconsistências lógicas no banco de dados.

> When the action waiting to be executed comes from a method and the user clicks the **Cancel operation** button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).

### Gestão dos problemas das cópias de segurança

Pode acontecer que uma cópia de segurança não seja executada corretamente. Pode haver várias causas de falha na cópia de segurança: interrupção do usuário, arquivo adjunto não encontrado, problemas no disco de destino, transação incompleta, etc. 4D processa a incidência segundo a causa.

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the **Backup journal.txt**.

- **User interruption**: The **Stop** button in the progress dialog box allows users to interrupt the backup at any time. Nesse caso, a cópia de elementos para e é gerado o erro 1406. You can intercept this error in the `On Backup Shutdown` database method.
- **Attached file not found**: When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.):
  If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the **Backup/Backup & Restore** page of the Settings.
  Se a segunda tentativa falhar, um diálogo de alerta de sistema é exibido e um erro é gerado. You can intercept this error in the `On Backup Shutdown` database method.

## Página de Backup

Para facilitar o acompanhamento e a verificação das cópias de segurança ou backups do banco de dados, o módulo de backup escreve um resumo em um arquivo especial de cada operação, similar a um diário de atividades. Da mesma forma que no manual de bordo, todas as operações (backups, restaurações, integrações de histórico) são escritas nesse arquivo, não importa se a operação foi programada ou manual. A data e hora em que essas operações acontecem também é anotada no histórico.

O histórico de cópia de segurança é chamado "Backup Journal[001].txt" e fica na pasta "Logs" do banco de dados. O histórico de cópias de segurança pode ser aberto com o editor de texto.

#### Gerenciamento do tamanho de histórico de cópias de segurança.

Em determinadas estratégias de copia de segurança (por exemplo, no caso de que se realizem copias de segurança de numerosos arquivos anexos), o histórico de cópias de segurança pode alcançar rapidamente um grande tamanho. Dois mecanismos podem ser usados para controlar este tamanho:

- **Automatic backup**: Before each backup, the application examines the size of the current backup journal file. Se for superior a 10 MB, se arquiva o arquivo atual e é criado um arquivo com o número [xxx] incrementado, por exemplo "Backup Journal[002].txt”. Quando o arquivo número 999 for alcançado, a numeração volta para 1 e os arquivos existentes começam a ser substituídos.
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the _Backup.4DSettings_ file of the project. Como padrão, essa chave é definida como True. Se mudar o valor desta chave a False, só se armazenará no diário de copias de segurança a informação principal: data e hora de inicio da operação  e os erros encontrados. The XML keys concerning backup configuration are described in the _4D XML Keys Backup_ manual.

## backupHistory.json

All information regarding the latest backup and restore operations are stored in the application's **backupHistory.json** file. Registra a rota de cada arquivo guardado (incluídos os anexos), assim como o número, a data, a hora, a duração e o estado de cada operação. Para limitar o tamanho do arquivo, o número de operações registradas é o mesmo que o número de backups disponíveis ("Keep only the last X backup files") definido nas configurações de backup.

The **backupHistory.json** file is created in the current backup destination folder. Pode obter a rota para esse arquivo usando a declaração abaixo:

```4d
$backupHistory:=Get 4D file(arquivo histórico Backup)
```

> **WARNING**\
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.

> The **backupHistory.json** file is formatted to be used by the 4D application. Se estiver procurando por um relatório que possa ser lido por olhos humanos, o diário de Backup journal é mais preciso.
