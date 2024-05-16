---
id: backup
slug: backup
title: Página de Backup
---

Uma cópia de segurança pode ser iniciada de três maneiras:

- Manualmente, utilizando el comando **Copia de seguridad...** del menú 4D **Archivo** o el botón **Copia de seguridad** del [Centro de mantenimiento y seguridad](MSC/backup.md).
- Automaticamente, usando o agendamento  que pode ser estabelecido em Configurações de Banco de Dados
- Por programación, utilizando el comando `BACKUP`.

> 4D Server: es posible iniciar una copia de seguridad manualmente desde una máquina remota mediante un método que llama al comando `BACKUP`. O comando será executado, em todos os casos, no servidor.

## You can use the Backup page to view some backup parameters of the database and to launch a manual backup:

1. Seleccione el elemento **Copia de seguridad...** en el menú **Archivo** de 4D.
   The backup window appears:
   ![](../assets/en/Backup/backup01.png)
   You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. Esta ubicación se define en la página **Copia de seguridad/configuración** de las Propiedades de la base.

- También puede abrir el [Centro de mantenimiento y seguridad](MSC/overview.md) de 4D y mostrar la [página de copias de seguridad](MSC/backup.md).

El botón \*\*Propiedades de la base...\*\*hace que se muestre la página Copia de seguridad/Configuración de las Propiedades de la estructura.

2. Haga clic en **Copia de seguridad** para iniciar la copia de seguridad utilizando los parámetros actuales.

## Backup automático periódico

As cópias de segurança programadas são iniciadas automaticamente. Se configuran en la página **Backup/Planificador** de las \*\* Propiedades\*\*.

As cópias de segurança são feitas automaticamente na hora definida nessa página sem nenhum tipo de intervenção do usuário. Para más información sobre el uso de esta caja de diálogo, consulte [Definir las copias de seguridad periódicas](settings.md#scheduler).

## Comando BACKUP

Puede utilizar los métodos base `On Backup Startup` and `On Backup Shutdown` para controlar el proceso de copia de seguridad (consulte el manual _Lenguaje de 4D_). Puede utilizar el método base `On Backup Startup` y `On Backup Shutdown`, para controlar el proceso de backup (ver el manual _Lenguaje de 4D_).

## Gerenciar o processo de  backup

Quando iniciar o backup, 4D exibe uma caixa de diálogo com um termômetro indicando o progresso da cópia de segurança:

![](../assets/en/Backup/backupProgress.png)

Este termómetro también se muestra en la página [Backup del CSM](MSC/backup.md) si ha utilizado esta caja de diálogo.

El botón **Parar** permite al usuario interrumpir la copia de seguridad en cualquier momento (consulte [Manejar los problemas de la copia de seguridad](backup.md#handling-backup-issues) más adelante).

El estado de la última copia de seguridad (correcta o fallida) se almacena en el área de información de la [página de copias de seguridad en el CSM](MSC/backup.md) o en la **página de mantenimiento** de 4D Server. También se registra en la base **Backup journal.txt**.

### Acesso do banco de dados durante o backup

Durante a cópia de segurança, acesso ao banco de dados é restrito por 4D dependendo do contexto. 4D bloqueia os processos relacionados com os tipos de arquivos incluídos na cópia de segurança: se só fizer uma cópia de segurança dos arquivos do projeto, não se poderá acessar à estrutura mas sim aos dados.

Pelo contrário, se só fizer uma cópia de segurança do arquivo de dados, o acesso à estrutura continua sendo permitido. Nesse caso, as possibilidades de acesso ao banco de dados  são as seguintes:

- Com a versão 4D monousuário, o banco de dados é trancado tanto para leitura quanto escrita, todos os processos são congelados. Nenhuma ação é realizada.
- Com 4D Server, o banco de dados está bloqueado só para escrita; as máquinas clientes podem ver os dados. Se uma máquina cliente enviar uma petição de adição, eliminação ou mudança ao servidor, uma janela aparece pedindo ao usuário que espere até o final da cópia de segurança. Quando a aplicação for salva, a janela desaparece a ação é realizada. Para cancelar la petición en proceso y no esperar a que finalice la copia de seguridad, basta con hacer clic en el botón **Cancelar la operación**. Entretanto, se a ação que espera ser executada vem de um método lançado antes da cópia de segurança, não deve cancelar a ação porque só são canceladas as operações restantes. Além disso, um método parcialmente executado pode causar inconsistências lógicas no banco de dados.

> Cuando la acción que espera ser ejecutada proviene de un método y el usuario hace clic en el botón **Cancelar operación**, 4D Server devuelve el error -9976 (Este comando no puede ejecutarse porque la copia de seguridad de la base está en progreso).

### Gestão dos problemas das cópias de segurança

Pode acontecer que uma cópia de segurança não seja executada corretamente. Pode haver várias causas de falha na cópia de segurança: interrupção do usuário, arquivo adjunto não encontrado, problemas no disco de destino, transação incompleta, etc. 4D processa a incidência segundo a causa.

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the **Backup journal.txt**.

- **Interrupción del usuario**: el botón **Parar** de la caja de diálogo de progreso permite a los usuarios interrumpir la copia de seguridad en cualquier momento. Nesse caso, a cópia de elementos para e é gerado o erro 1406. Puedes interceptar este error en el método base `On Backup Shutdown`.
- **Archivo adjunto no encontrado**: cuando no se encuentra un archivo adjunto, 4D realiza una copia de seguridad parcial (copia de seguridad de los archivos de la aplicación y de los archivos adjuntos accesibles) y devuelve un error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.):
  If this is a first-time error, 4D will then make a second attempt to perform the backup. La espera entre los dos intentos se define en la página **Backup/Backup y Restauración** de las Propiedades.
  Se a segunda tentativa falhar, um diálogo de alerta de sistema é exibido e um erro é gerado. Puedes interceptar este error en el método base `On Backup Shutdown`.

## Página de Backup

Para facilitar o acompanhamento e a verificação das cópias de segurança ou backups do banco de dados, o módulo de backup escreve um resumo em um arquivo especial de cada operação, similar a um diário de atividades. Da mesma forma que no manual de bordo, todas as operações (backups, restaurações, integrações de histórico) são escritas nesse arquivo, não importa se a operação foi programada ou manual. A data e hora em que essas operações acontecem também é anotada no histórico.

O histórico de cópia de segurança é chamado "Backup Journal[001].txt" e fica na pasta "Logs" do banco de dados. O histórico de cópias de segurança pode ser aberto com o editor de texto.

#### Gerenciamento do tamanho de histórico de cópias de segurança.

Em determinadas estratégias de copia de segurança (por exemplo, no caso de que se realizem copias de segurança de numerosos arquivos anexos), o histórico de cópias de segurança pode alcançar rapidamente um grande tamanho. Dois mecanismos podem ser usados para controlar este tamanho:

- **Copia de seguridad automática**: antes de cada copia de seguridad, la aplicación examina el tamaño del archivo historial de copia de seguridad actual. Se for superior a 10 MB, se arquiva o arquivo atual e é criado um arquivo com o número [xxx] incrementado, por exemplo "Backup Journal[002].txt”. Quando o arquivo número 999 for alcançado, a numeração volta para 1 e os arquivos existentes começam a ser substituídos.
- **Posibilidad de reducir la cantidad de información registrada**: para ello, basta con modificar el valor de la llave `VerboseMode` en el archivo _Backup.4DSettings_ del proyecto. Como padrão, essa chave é definida como True. Se mudar o valor desta chave a False, só se armazenará no diário de copias de segurança a informação principal: data e hora de inicio da operação  e os erros encontrados. Las llaves XML relativas a la configuración de la copia de seguridad se describen en el manual _Backup de las llaves XML 4D_.

## backupHistory.json

Toda la información relativa a las últimas operaciones de copia de seguridad y restauración se almacena en el archivo **backupHistory.json** de la aplicación. Registra a rota de cada arquivo guardado (incluídos os anexos), assim como o número, a data, a hora, a duração e o estado de cada operação. Para limitar o tamanho do arquivo, o número de operações registradas é o mesmo que o número de backups disponíveis ("Keep only the last X backup files") definido nas configurações de backup.

El archivo **backupHistory.json** se crea en la carpeta de destino de la copia de seguridad actual. Pode obter a rota para esse arquivo usando a declaração abaixo:

```4d
$backupHistory:=Get 4D file(arquivo histórico Backup)
```

> **WARNING**\
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.

> El archivo **backupHistory.json** está formateado para ser utilizado por la aplicación 4D. Se estiver procurando por um relatório que possa ser lido por olhos humanos, o diário de Backup journal é mais preciso.
