---
id: backup
slug: backup
title: Página de Backup
---


## Começando um backup

Uma cópia de segurança pode ser iniciada de três maneiras:

- **Last Backup Information**: provides the date and time of the last backup (automatic or manual) carried out on the application.
- Automatically, using the scheduler that can be set in the Database Settings,
- Por programação, utilizando o comando `BACKUP`.

> 4D Server: é possível iniciar uma cópia de segurança manualmente desde uma máquina remota mediante um método que chama ao comando `BACKUP`. O comando será executado, em todos os casos, no servidor.

### You can use the Backup page to view some backup parameters of the database and to launch a manual backup:

1. Seleccione o comando **Backup...** no menu 4D **File** . The backup window appears: ![](../assets/en/Backup/backup01.png) You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. Também se registra no banco de dados **Backup journal.txt**.

- Também pode abrir o [Centro de manutenção e segurança](MSC/overview.md) de 4D e mostrar a [página de cópias de segurança](MSC/backup.md).

The **Database properties...** button causes the Backup/Configuration page of the Database Settings to be displayed.

 2. The **Backup** button is used to launch a manual backup.

### Backup automático periódico

As cópias de segurança programadas são iniciadas automaticamente. They are configured in the **Backup/Scheduler** page of the **Database Settings**.

As cópias de segurança são feitas automaticamente na hora definida nessa página sem nenhum tipo de intervenção do usuário. Para saber mais sobre o uso desta caixa de diálogo, consulte [Definir as cópias de segurança periódicas](settings.md#scheduler).

### Comando BACKUP

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Database settings. Pode utilizar os métodos `On Backup Startup` e `On Backup Shutdown` para controlar o processo de cópia de segurança (consulte o manual *Linguagem, de 4D*).

## Gerenciar o processo de  backup

Quando iniciar o backup, 4D exibe uma caixa de diálogo com um termômetro indicando o progresso da cópia de segurança:

![](../assets/en/Backup/backupProgress.png)

Esse termômetro também é mostrado na página [Backup de CSM](MSC/backup.md) se utilizou esta caixa de diálogo.

This page consists of the following three areas:

O estado da última cópia de segurança (correta ou com erro) é armazenada na área de informação da [página de cópias de segurança em CSM](MSC/backup.md) ou na **página de manutenção** de 4D Server. Também se registra no banco de dados **Backup journal.txt**.

### Accessing the database during backup

During a backup, access to the database is restricted by 4D according to the context. 4D bloqueia os processos relacionados com os tipos de arquivos incluídos na cópia de segurança: se só fizer uma cópia de segurança dos arquivos do projeto, não se poderá acessar à estrutura mas sim aos dados.

Pelo contrário, se só fizer uma cópia de segurança do arquivo de dados, o acesso à estrutura continua sendo permitido. In this case, the database access possibilities are as follows:

- With the 4D single-user version, the database is locked for both read and write; all processes are frozen. Nenhuma ação é realizada.
- With 4D Server, the database is only write locked; client machines can view data. Se uma máquina cliente enviar uma petição de adição, eliminação ou mudança ao servidor, uma janela aparece pedindo ao usuário que espere até o final da cópia de segurança. Once the database is saved, the window disappears and the action is performed. Quando o banco de dados for salvo, a janela desaparece a ação é ralizada Quando o banco de dados for salvo, a janela desaparece a ação é ralizada Para cancelar a petição em processo e não esperar a que finalize a cópia de segurança, basta dar um clique no botão **Cancelar a operação**. Entretanto, se a ação que espera ser executada vem de um método lançado antes da cópia de segurança, não deve cancelar a ação porque só são canceladas as operações restantes. Also, a partially executed method can cause logical inconsistencies in the database.

> Quando a ação que espera ser executada vir de um método e o usuário clicar no botão **Cancelar operação**, 4D Server devolve o erro -9976 (Este comando não pode ser executardo porque a copia de segurança está em progresso).

### Gestão dos problemas das cópias de segurança

Pode acontecer que uma cópia de segurança não seja executada corretamente. Pode haver várias causas de falha na cópia de segurança: interrupção do usuário, arquivo adjunto não encontrado, problemas no disco de destino, transação incompleta, etc. 4D processa a incidência segundo a causa.

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the database **Backup journal.txt**.

- **Interrupção de Usuário**: The **Botão Parar** na caixa de diálogo de progresso permite aos usuários interromper o processo de cópia de segurança a qualquer momento. Nesse caso, a cópia de elementos para e é gerado o erro 1406. Pode interceptar esse erro no método database `On Backup Shutdown`.
- **Attached file not found**: When an attached file cannot be found, 4D performs a partial backup (backup of database files and accessible attached files) and returns an error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, database not launched at time of scheduled automatic backup, etc.): If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the **Backup/Backup & Restore** page of the Database Settings. Se a segunda tentativa falhar, um diálogo de alerta de sistema é exibido e um erro é gerado. Pode interceptar esse erro no método database `On Backup Shutdown`.

## Página de Backup

To make following up and verifying database backups easier, the backup module writes a summary of each operation performed in a special file, which is similar to an activity journal. Da mesma forma que no manual de bordo, todas as operações (backups, restaurações, integrações de histórico) são escritas nesse arquivo, não importa se a operação foi programada ou manual. A data e hora em que essas operações acontecem também é anotada no histórico.

The backup journal is named "Backup Journal[001].txt" and is placed in the "Logs" folder of the database. O histórico de cópias de segurança pode ser aberto com o editor de texto.

#### Gerenciamento do tamanho de histórico de cópias de segurança.

Em determinadas estratégias de copia de segurança (por exemplo, no caso de que se realizem copias de segurança de numerosos arquivos anexos), o histórico de cópias de segurança pode alcançar rapidamente um grande tamanho. Dois mecanismos podem ser usados para controlar este tamanho:

- **Copia de segurança automática**: antes de cada copia de segurança, a aplicação examina o tamanho do arquivo historial de cópia de segurança atual. Se for superior a 10 MB, se arquiva o arquivo atual e é criado um arquivo com o número [xxx] incrementado, por exemplo "Backup Journal[002].txt”. Quando o arquivo número 999 for alcançado, a numeração volta para 1 e os arquivos existentes começam a ser substituídos.
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the *Backup.4DSettings* file of the database. Como padrão, essa chave é definida como True. Se mudar o valor desta chave a False, só se armazenará no diário de copias de segurança a informação principal: data e hora de inicio da operação  e os erros encontrados. As chaves XML relativas a configuração da cópia de segurança são descritos no manual *Backup das chaves XML 4D*.

## backupHistory.json

All information regarding the latest backup and restore operations are stored in the database's **backupHistory.json** file. Registra a rota de cada arquivo guardado (incluídos os anexos), assim como o número, a data, a hora, a duração e o estado de cada operação. Para limitar o tamanho do arquivo, o número de operações registradas é o mesmo que o número de backups disponíveis ("Keep only the last X backup files") definido nas configurações de backup.

O arquivo **backupHistory.json** é criado na pasta de destino do backup atual. Pode obter a rota para esse arquivo usando a declaração abaixo:

```4d
$backupHistory:=Get 4D file(arquivo histórico Backup)
```
> **AVISO**  
> Apagar ou mover o arquivo **backupHistory.json** faz com que o próximo número de backup seja resetado.
> O arquivo **backupHistory.json** é formatado para ser usado pela aplicação 4D. Se estiver procurando por um relatório que possa ser lido por olhos humanos, o diário de Backup journal é mais preciso.
