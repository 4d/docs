---
id: backup
title: Backup
---


## Começando um backup

Uma cópia de segurança pode ser iniciada de três maneiras:

- Manualmente, utilizando o comando **Cópia de segurança...** do menu 4D **Arquivo** ou o botão **Cópia de segurança** de [Centro de manutenção e segurança](MSC/backup.md).
- Automaticamente, usando o agendamento  que pode ser estabelecido em Configurações de Banco de Dados
- Por programação, utilizando o comando `BACKUP`.

> 4D Server: é possível iniciar uma cópia de segurança manualmente desde uma máquina remota mediante um método que chama ao comando `BACKUP`. O comando será executado, em todos os casos, no servidor.

### Manual backup

1. Selecione o comando **Backup...** no menu 4D **Arquivo**.   
   Aparece a janela de cópia de segurança: ![](assets/en/Backup/backup01.png) Pode ver a localização da pasta da cópia de segurança mediante o menu emergente situado junto à área "Destino da cópia de segurança". Esta localização é definida na página **Cópia de segurança/configuração** das Propriedades do banco de dados.

- Também pode abrir o [Centro de manutenção e segurança](MSC/overview.md) de 4D e mostrar a [página de cópias de segurança](MSC/backup.md).

O botão **Propriedades de Banco de Dados...** faz com que seja exibida a página Backup/Configuration  das Configurações do Banco de Dados.

 2. Clique em **Backup/Cópia de segurança** para iniciar a cópia de segurança utilizando os parâmetros atuais.


### Backup automático periódico

As cópias de segurança programadas são iniciadas automaticamente. São configurados na página **Backup/Scheduler** em **Database Settings**.

As cópias de segurança são feitas automaticamente na hora definida nessa página sem nenhum tipo de intervenção do usuário. Para saber mais sobre o uso desta caixa de diálogo, consulte [Definir as cópias de segurança periódicas](settings.md#scheduler).


### Comando BACKUP

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Database settings. Pode utilizar os métodos `On Backup Startup` e `On Backup Shutdown` para controlar o processo de cópia de segurança (consulte o manual *Linguagem, de 4D*).


## Gerenciar o processo de  backup

Quando iniciar o backup, 4D exibe uma caixa de diálogo com um termômetro indicando o progresso da cópia de segurança:

![](assets/en/Backup/backupProgress.png)

Esse termômetro também é mostrado na página [Backup de CSM](MSC/backup.md) se utilizou esta caixa de diálogo.

O botão **Parar** permite ao usuário interromper a cópia de segurança em qualquer momento (consulte [Manejar os problemas da cópia de segurança](backup.md#handling-backup-issues) mais adiante).

O estado da última cópia de segurança (correta ou com erro) é armazenada na área de informação da [página de cópias de segurança em CSM](MSC/backup.md) ou na **página de manutenção** de 4D Server. Também se registra no banco de dados **Backup journal.txt**.

### Acesso do banco de dados durante o backup

Durante a cópia de segurança, acesso ao banco de dados é restrito por 4D dependendo do contexto. 4D bloqueia os processos relacionados com os tipos de arquivos incluídos na cópia de segurança: se só fizer uma cópia de segurança dos arquivos do projeto, não se poderá acessar à estrutura mas sim aos dados.

Pelo contrário, se só fizer uma cópia de segurança do arquivo de dados, o acesso à estrutura continua sendo permitido. Nesse caso, as possibilidades de acesso ao banco de dados  são as seguintes:

- Com a versão 4D monousuário, o banco de dados é trancado tanto para leitura quanto escrita, todos os processos são congelados. Nenhuma ação é realizada.
- Com 4D Server, o banco de dados está bloqueado só para escrita; as máquinas clientes podem ver os dados. Se uma máquina cliente enviar uma petição de adição, eliminação ou mudança ao servidor, uma janela aparece pedindo ao usuário que espere até o final da cópia de segurança. Quando o banco de dados for salvo, a janela desaparece a ação é ralizada Para cancelar a petição em processo e não esperar a que finalize a cópia de segurança, basta dar um clique no botão **Cancelar a operação**. Entretanto, se a ação que espera ser executada vem de um método lançado antes da cópia de segurança, não deve cancelar a ação porque só são canceladas as operações restantes. Além disso, um método parcialmente executado pode causar inconsistências lógicas no banco de dados. > Quando a ação que espera ser executada vir de um método e o usuário clicar no botão **Cancelar operação**, 4D Server devolve o erro -9976 (Este comando não pode ser executardo porque a copia de segurança está em progresso).

### Gestão dos problemas das cópias de segurança

Pode acontecer que uma cópia de segurança não seja executada corretamente. There may be several causes of a failed backup: user interruption, attached file not found, destination disk problems, incomplete transaction, etc. 4D processes the incident according to the cause.

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
