---
id: settings
title: Backups periódicos
---

Backup settings are defined through three pages in the [Settings dialog box](../settings/overview.md). Pode estabelecer:

- a periodicidade das cópias de segurança automáticas
- os arquivos a incluir em cada backup
- as funcionalidades avançadas que permitem executar tarefas automáticas

> Settings defined in this dialog box are written in the _Backup.4DSettings_ file, stored in the [Settings folder](Project/architecture.md#settings-folder).

## Backups periódicos

Pode automatizar a cópia de segurança dos bancos de dados abertos com 4D ou 4D Server (mesmo quando não houver máquinas cliente conectadas). Isso implica definir uma frequência de cópia de segurança (horas, dias, semanas ou meses): para cada sessão, 4D automaticamente inicia uma cópia de segurança usando as configurações atuais de backup.

If this application was not launched at the theoretical moment of the backup, the next time 4D is launched, it considers the backup as having failed and proceeds as set in the Settings (refer to [Handling backup issues](backup.md#handling-backup-issues)).

The scheduler backup settings are defined on the **Backup/Scheduler** page of the Structure Settings:

![](../assets/en/Backup/backup02.png)

As opções encontradas nessa aba permitem estabelecer e  configurar as cópias de segurança automáticas programadas do banco de dados. Pode escolher uma configuração rápida padrão ou pode personalizá-la completamente. Various options appear depending on the choice made in the **Automatic Backup** menu:

- **Never**: The scheduled backup feature is disabled.
- **Every Hour**: Programs an automatic backup every hour, starting with the next hour.
- **Every Day**: Programs an automatic backup every day. Pode então digitar a hora quando o backup deve começar.
- **Every Week**: Programs an automatic backup every week. Duas áreas de entrada adicionais lhe permitem indicar o dia e a hora em que deve começar a cópia de segurança.
- **Every Month**: Programs an automatic backup every month. Duas áreas de entrada adicionais lhe permitem indicar o dia do mês e a hora em que deve começar a cópia de segurança.
- **Personalized**: Used to configure "tailormade" automatic backups. Quando selecionar esta opção, várias áreas de entradas aparecem:
  - **Every X hour(s)**: Allows programming backups on an hourly basis. Pode digitar um valor entre 1 e 24.
  * **Every X day(s) at x**: Allows programming backups on a daily basis. Por exemplo, introduza 1 se quiser realizar uma cópia de segurança diária. Quando esta opção estiver marcada, deve digitar a hora quando o backup deve começar.
  * **Every X week(s) day at x**: Allows programming backups on a weekly basis. Digite 1 se quiser realizar o backup 1 vez por semana. Quando essa opção estiver marcada, deve digitar o dia da semana e a hora em que quer começar o backup. Pode selecionar vários dias da semana se quiser. Por exemplo. pode usar essa opção para estabelecer dois backups por semana: um nas quartas feiras e outro nas sextas.
  * **Every X month(s), Xth Day at x**: Allows programming backups on a monthly basis. Digite 1 se quiser realizar uma cópia de segurança mensal. Quando essa opção estiver marcada, tem que indicar o dia do mês e a hora em que o backup deve começar.

> As mudanças de hora padrão para hora de verão podem afetar temporariamente ao programador automático e ativar a próxima cópia de segurança com uma diferença de uma hora. Isso acontece só uma vez e os próximos backups rodam na hora prevista.

## Configuração

A página Cópia de segurança| Configuração das propriedades do banco de dados permite determinar os arquivos de cópia de segurança e sua localização, assim como a do arquivo de histórico. Esses parâmetros são específicos para cada banco de dados abertos pela aplicação 4D.

![](../assets/en/Backup/backup032.png)

> **4D Server:** These parameters can only be set from the 4D Server machine.

### Conteúdo

Essa área lhe permite determinar quais os arquivos ou pastas que devem ser copiados durante o backup.

- **Data**: Application data file. Quando esta opção for marcada, o arquivo de histórico do banco de dados, se existir, recebe um backup na mesma hora que os dados.
  - o arquivo de histórico atual da aplicação (se houver),
  - the full `Settings` folder located [next to the data file](Project/architecture.md#settings-folder) (if it exists), i.e. the _user settings for data_.
- **Structure**: Application project folders and files. No caso de bancos de dados compilados, essa opção permite fazer o backup do arquivo .4dz. When this option is checked, the full `Settings` folder located [at the same level as the Project folder](Project/architecture.md#settings-folder-1), i.e. the _user settings_, is automatically backed up.
- **User Structure File (only for binary database)**: _deprecated feature_
- **Attachments**: This area allows you to specify a set of files and/or folders to be backed up at the same time as the application. Esses arquivos podem ser de qualquer tipo (documentos ou modelos de plug-ins, etiquetas, relatórios, imagens, etc). Pode estabelecer arquivos ou pastas individuais cujos conteúdos serão respaldados completamente. Cada elemento anexado é listado com sua rota de acesso completa na área "Anexos".
  - **Delete**: Removes the selected file from the list of attached files.
  - **Add folder...**: Displays a dialog box that allows selecting a folder to add to the backup. No caso de uma restauração, a pasta vai recuperar sua estrutura interna. Pode selecionar toda pasta ou volume conectado à máquina, exceto a pasta que conter os arquivos do banco de dados.
  - **Add file...**: Displays a dialog box that allows you to select a file to add to the backup.

### Pasta de destino de arquivo de cópia de segurança

Esta área lhe permite visualizar e mudar o local na que se armazenarão os arquivos de cópia de segurança, assim como os arquivos de cópia de segurança do arquivo historial (se aplicável).

Para ver o local dos arquivos, clique na área para que apareça sua rota de acesso no menu emergente.

To modify the location where these files are stored, click the **...** button. Uma caixa de seleção aparece, que permite selecionar uma pasta ou disco onde os backups são colocados. As áreas "Espaço utilizado" e "Espaço livre" são atualizadas automaticamente e indicam o espaço restante no disco da pasta selecionada.

### Gestão do arquivo de histórico

The **Use Log File** option, when checked, indicates that the application uses a log file. O nome do caminho do arquivo de histórico do arquivo de dados atual é especificado abaixo da opção. Quando essa opção for marcada, não é possível abrir o banco de dados sem um arquivo de histórico. For more information about the log file, please refer to [log file](log.md)

By default, any project created with 4D uses a log file (option **Use Log File** checked in the **General Page** of the **Preferences**). The log file is named _data.journal_ and is placed in the Data folder.

> Ativar um novo arquivo de histórico exige que tenha sido feita anteriormente uma cópia de segurança dos dados. Quando você marcar essa opção para o arquivo de dados usado no momento, uma mensagem de aviso informará ser necessário fazer um backup. A criação dos arquivos de histórico é adiada e será feita somente depois do próximo backup do banco de dados.

## Backup & Restore

Modificar as opções de cópia de segurança e restauração é opcional. Seus valores padrão correspondem ao uso padrão da função.

![](../assets/en/Backup/backup04.png)

### Parâmetros gerais

- **Keep only the last X backup files**: This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. Esta funcionalidade opera da seguinte maneira: uma vez finalizado o backup atual, 4D elimina o arquivo mais antigo se for encontrado no mesmo local que o arquivo do qual se está fazendo o backup e tiver o mesmo nome (pode solicitar que o arquivo mais antigo se elimine antes do backup para poupar espaço).
  Se, por exemplo, o número de conjuntos se definir como 3, as três primeiras cópias de segurança criam os arquivos MyBase-0001, MyBase-0002 e MyBase-0003 respectivamente. Durante o quarto backup, o arquivo MyBase-0004 é criado e MyBase-0001 é apagado. Como padrão, o mecanismo de eliminação de conjuntos está ativado e 4D salva 3 conjuntos de cópias de segurança.
  Para desativar o mecanismo, simplesmente desmarque a opção.

> Esse parâmetro se refere tanto a aplicações quanto aos arquivos de registro.

- **Backup only if the data file has been modified**: When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted since the last backup. Senão, o backup programado é cancelado e abandonado até o próximo backup programado. Nenhum erro é gerado, entretanto o diário de cópias de segurança assinala que a cópia de segurança foi adiada. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. Lembre que ao ativar esta opção não se levam em consideração as modificações realizadas nos arquivos de estrutura ou nos arquivos anexos.

> Esse parâmetro se refere tanto a aplicações quanto aos arquivos de registro.

- **Delete oldest backup file before/after backup**: This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (**before** option) or whether the deletion should take place once the backup is completed (**after** option). Para que os mecanismos funcionem, o arquivo mais velho não deve ser renomeado nem movido.

- **If backup fails**: This option allows setting the mechanism used to handle failed backups (backup impossible). Quando uma cópia de segurança não puder ser realizada, 4D deixa que realize uma nova tentativa.
  - **Retry at the next scheduled date and time**: This option only makes sense when working with scheduled automatic backups. Equivale a anular a cópia de segurança que falhou. Um erro é gerado.
  - **Retry after X second(s), minute(s) or hour(s)**: When this option is checked, a new backup attempt is executed after the wait period. Este mecanismo permite antecipar certas circunstancias que possam bloquear a cópia de segurança. Pode estabelecer um período de espera em segundos, minutos ou horas utilizando o menu correspondente. Se a nova tentativa também falhar, um erro é gerado e a falha é notada na área de status do último backup e no arquivo de histórico de backup.
  - **Cancel the operation after X attempts**: This parameter is used to set the maximum number of failed backup attempts. Se o backup não tiver sido realizado com sucesso depois do número máximo de tentativas estabelecido tiver sido alcançado, ele será cancelado e o erro 1401 é gerado ("Número máximo de tentativas de backup foi alcançado; backup automático foi desativado temporariamente"). Nesse caso, não se fará mais backups automáticos até que a aplicação seja reiniciada ou um backup manual se realize com sucesso.
    Este parâmetro é útil para evitar um caso em que um problema prolongado (que exija a intervenção humana) que impedisse a realização de uma cópia de segurança levasse a aplicação a tentar repetidamente a cópia de segurança, comprometendo seu rendimento geral. Como padrão, esse parâmetro não é marcado.

> 4D considera um backup como tendo falhado se o banco de dados não tiver sido lançado na hora que estava programada o backup automático.

### Arquivo

Essas opções se aplicam aos arquivos de cópia de segurança principais e aos arquivos de cópia de segurança do histórico.

- **Segment Size (Mb)**
  4D allows you to segment archives, i.e., to cut it up into smaller sizes. Esse funcionamento permite, por exemplo, armazenar uma cópia de segurança em vários discos diferentes (DVD, dispositivos usb pendrive, etc). Durante a restauração, 4D vai fusionar automaticamente os segmentos. <strong x-id="1">Segment Size (Mb)</strong> 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.).
  The **Segment Size** menu is a combo box that allows you to set the size in MB for each segment of the backup. Pode escolher um dos tamanhos pré-estabelecidos ou digitar um tamanho específico entre 0 e 2048. If you pass 0, no segmentation occurs (this is the equivalent of passing **None**).

- **Compression Rate**
  By default, 4D compresses backups to help save disk space. Entretanto, a fase de compressão de arquivo pode retardar o processo de backup quando lidar com grandes volumes de dados. The **Compression Rate** option allows you to adjust file compression:
  - **None:** No file compression is applied. O backup é mais rápido, mas os arquivos são bem maiores.
  - **Fast** (default): This option is a compromise between backup speed and archive size.
  - **Compact**: The maximum compression rate is applied to archives. Os arquivos ocupam o mínimo espaço possível no disco, mas o backup é mais lento.

- **Interlacing Rate and Redundancy Rate**
  4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. Pode estabelecer esses mecanismos de acordo com suas necessidades. The menus for these options contain rates of **Low**, **Medium**, **High** and **None** (default).
  - **Interlacing Rate**: Interlacing consists of storing data in non-adjacent sectors in order to limit risks in the case of sector damage. Quanto maior a taxa, maior a segurança; entretanto, o processamento de dados usa mais memória.
  - **Redundancy Rate**: Redundancy allows securing data present in a file by repeating the same information several times. Quanto maior a taxa de redundância, melhor a segurança, mas o armazenamento é mais lento e o tamanho dos arquivos aumenta.

### Restauro automático e integração de registos

- **Restore last backup if database is damaged**: When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. Nenhuma intervenção do usuário é necessária, mas a operação é gravada no diário da cópia de segurança.

- **Integrate the latest logs if the database is incomplete**: When this option is checked, the program automatically integrates the current log file if it contains operations that are not present in the data file. Se existir uma sequência válida de ficheiros .journal no mesmo repositório, o programa integra previamente todos os ficheiros .journal necessários, do mais antigo ao mais actual.

  Esta situação surge, por exemplo, se ocorrer uma falha de energia quando existem operações na cache de dados que ainda não foram escritas no disco, ou depois de ter sido detectada uma anomalia ao abrir o ficheiro de dados e ter ocorrido um restauro.

  :::note

  Esta funcionalidade implica que o programa analise todos os ficheiros de registo na pasta de ficheiros de registo actual no arranque. Por conseguinte, por razões de desempenho, certifique-se de que não são armazenados ficheiros de registo inúteis na pasta.

  :::

O usuário não vê uma caixa de diálogo, a operação é automática. O objetivo é fazer com que seja tão fácil quanto possível. A operação é registrada no diário de cópias de backup.

> In the case of an automatic restore, only the following elements are restored:
>
> - ficheiro .4DD
> - ficheiro .4DIndx
> - .4DSyncData file
> - ficheiro .4DSyncHeader
> - Pasta External Data
>
> If you wish to get the attached files or the project files, you must perform a [manual restore](restore.md#manually-restoring-a-backup-standard-dialog).

:::caution

If the [data file is encrypted](../MSC/encrypt.md), make sure you [saved the data encryption key](../MSC/encrypt#saving-the-encryption-key) in a `.4DKeyChain` file stored at the first level of the drive, so that 4D can access it if the automatic restore feature triggered. Caso contrário, será devolvido um erro durante a sequência de restauro.

:::
