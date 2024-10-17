---
id: backup
slug: backup
title: Página de Backup
---


## Começando um backup

Uma cópia de segurança pode ser iniciada de três maneiras:

- **Last Backup Information**: provides the date and time of the last backup (automatic or manual) carried out on the application.
- Automaticamente, usando o agendador que pode ser definido nas Configurações do banco de dados,
- Por programação, utilizando o comando `BACKUP`.

> 4D Server: é possível iniciar uma cópia de segurança manualmente desde uma máquina remota mediante um método que chama ao comando `BACKUP`. O comando será executado, em todos os casos, no servidor.

### You can use the Backup page to view some backup parameters of the database and to launch a manual backup:

1. Seleccione o comando **Backup...** no menu 4D **File** . A janela de backup aparece: ![](../assets/en/Backup/backup01.png) Você pode ver a localização da pasta de backup usando o menu pop-up ao lado da área de "Destino de backup". Também se registra no banco de dados **Backup journal.txt**.

- Também pode abrir o [Centro de manutenção e segurança](MSC/overview.md) de 4D e mostrar a [página de cópias de segurança](MSC/backup.md).

O botão **Propriedades do banco de dados...** faz com que a página Backup/Configuração das Configurações do banco de dados seja exibida.

 2. The **Backup** button is used to launch a manual backup.

### Backup automático periódico

As cópias de segurança programadas são iniciadas automaticamente. Elas estão configuradas na página **Backup/Agendador** da **Configurações do banco de dados**.

As cópias de segurança são feitas automaticamente na hora definida nessa página sem nenhum tipo de intervenção do usuário. Para saber mais sobre o uso desta caixa de diálogo, consulte [Definir as cópias de segurança periódicas](settings.md#scheduler).

### Comando BACKUP

Quando o comando `BACKUP` é executado a partir de qualquer método, o backup é iniciado usando os parâmetros atuais, conforme definido nas configurações do banco de dados. Pode utilizar os métodos `On Backup Startup` e `On Backup Shutdown` para controlar o processo de cópia de segurança (consulte o manual *Linguagem, de 4D*).

## Gerenciar o processo de  backup

Quando iniciar o backup, 4D exibe uma caixa de diálogo com um termômetro indicando o progresso da cópia de segurança:

![](../assets/en/Backup/backupProgress.png)

Esse termômetro também é mostrado na página [Backup de CSM](MSC/backup.md) se utilizou esta caixa de diálogo.

This page consists of the following three areas:

O estado da última cópia de segurança (correta ou com erro) é armazenada na área de informação da [página de cópias de segurança em CSM](MSC/backup.md) ou na **página de manutenção** de 4D Server. Também se registra no banco de dados **Backup journal.txt**.

### Acesso à base de dados durante a cópia de segurança

Durante um backup, o acesso ao banco de dados é restrito por 4D conforme o contexto. 4D bloqueia os processos relacionados com os tipos de arquivos incluídos na cópia de segurança: se só fizer uma cópia de segurança dos arquivos do projeto, não se poderá acessar à estrutura mas sim aos dados.

Pelo contrário, se só fizer uma cópia de segurança do arquivo de dados, o acesso à estrutura continua sendo permitido. Neste caso, as possibilidades de acesso o banco de dados são as seguintes:

- Com a versão 4D monousuário, o banco de dados é bloqueado para leitura e gravação; todos os processos são congelados. Nenhuma ação é realizada.
- Com 4D Server, o banco de dados só é bloqueado para gravação; as máquinas clientes podem visualizar os dados. Se uma máquina cliente enviar uma petição de adição, eliminação ou mudança ao servidor, uma janela aparece pedindo ao usuário que espere até o final da cópia de segurança. Depois que o banco de dados é salvo, a janela desaparece e a ação é executada. Quando o banco de dados for salvo, a janela desaparece a ação é ralizada Quando o banco de dados for salvo, a janela desaparece a ação é ralizada Para cancelar a petição em processo e não esperar a que finalize a cópia de segurança, basta dar um clique no botão **Cancelar a operação**. Entretanto, se a ação que espera ser executada vem de um método lançado antes da cópia de segurança, não deve cancelar a ação porque só são canceladas as operações restantes. Além disso, um método parcialmente executado pode causar inconsistências lógicas no banco de dados.

> Quando a ação que espera ser executada vir de um método e o usuário clicar no botão **Cancelar operação**, 4D Server devolve o erro -9976 (Este comando não pode ser executardo porque a copia de segurança está em progresso).

### Gestão dos problemas das cópias de segurança

Pode acontecer que uma cópia de segurança não seja executada corretamente. Pode haver várias causas de falha na cópia de segurança: interrupção do usuário, arquivo adjunto não encontrado, problemas no disco de destino, transação incompleta, etc. 4D processa a incidência segundo a causa.

Em todos os casos, lembre que o estado da última copia de segurança (correta ou com falha) se armazena na área de informação da [página de cópias de segurança em CSM](MSC/backup.md) ou na **página de manutenção** de 4D Server, assim como no banco de dados **Backup journal.txt**.

- **Interrupção pelo usuário**: o **Botão Parar** na caixa de diálogo de progresso permite aos usuários interromper o processo de cópia de segurança a qualquer momento. Nesse caso, a cópia de elementos para e é gerado o erro 1406. Pode interceptar esse erro no método database `On Backup Shutdown`.
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
