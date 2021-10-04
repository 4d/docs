---
id: settings
title: Parâmetros da cópia de segurança
---

Os parâmetros da cópia de segurança são definidas através de três páginas na caixa de diálogo Propriedades do banco de dados. Pode estabelecer:

- a periodicidade das cópias de segurança automáticas
- os arquivos a incluir em cada backup
- as funcionalidades avançadas que permitem executar tarefas automáticas

> As propriedades definidas nesta caixa de diálogo são escritas no arquivo *Backup.4DSettings*, guardado na pasta [Settings](Project/architecture.md#settings-folder).

## Backups periódicos

Pode automatizar a cópia de segurança dos bancos de dados abertos com 4D ou 4D Server (mesmo quando não houver máquinas cliente conectadas). Isso implica definir uma frequência de cópia de segurança (horas, dias, semanas ou meses): para cada sessão, 4D automaticamente inicia uma cópia de segurança usando as configurações atuais de backup.

Se essa aplicação não for lançada no momento teórico do backup, na próxima vez que 4D for lançado, considera o backup como tendo falhado e continua como estabelecido nas propriedades do banco de dados (ver [Manejo de problemas da cópia de segurança](backup.md#handling-backup-issues)).

Os parâmetros da cópia de segurança programador são definidos na página **Backup/Periodicidade** das Propriedades do banco de dados:

![](assets/en/Backup/backup02.png)

As opções encontradas nessa aba permitem estabelecer e  configurar as cópias de segurança automáticas programadas do banco de dados. Pode escolher uma configuração rápida padrão ou pode personalizá-la completamente. Aparecem várias opções em função da escolha realizada no menu **Cópia de segurança automática**:

- **Nunca**: A função de cópia de segurança está inativa.
- **Cada hora**: programa uma cópia de segurança automática a cada hora, a partir da hora seguinte.
- **Cada dia**: programa uma cópia de segurança automática cada dia. Pode então digitar a hora quando o backup deve começar.
- **Todas as semanas**: programa uma cópia de segurança automática a cada semana. Duas áreas de entrada adicionais lhe permitem indicar o dia e a hora em que deve começar a cópia de segurança.
- **Todos os meses**: programa uma cópia de segurança todos os meses. Duas áreas de entrada adicionais lhe permitem indicar o dia do mês e a hora em que deve começar a cópia de segurança.
- **Personalizado**: serve para configurar as cópias de segurança automáticas "sob medida". Quando selecionar esta opção, várias áreas de entradas aparecem:
    + **Cada X hora(s)**: permite programar as cópias de segurança com frequência horária. Pode digitar um valor entre 1 e 24.
    - **Cada X dia(s) às x**: permite programar as copias de segurança com frequência diária. Por exemplo, introduza 1 se quiser realizar uma cópia de segurança diária. Quando esta opção estiver marcada, deve digitar a hora quando o backup deve começar.
    - **Cada X semana(s) às x**: permite programar as copias de segurança semanalmente. Digite 1 se quiser realizar o backup 1 vez por semana. Quando essa opção estiver marcada, deve digitar o dia da semana e a hora em que quer começar o backup. Pode selecionar vários dias da semana se quiser. Por exemplo. pode usar essa opção para estabelecer dois backups por semana: um nas quartas feiras e outro nas sextas.
    - **Cada X mes(es), X dia às x**: Permite programar cópias de segurança mensalmente. Digite 1 se quiser realizar uma cópia de segurança mensal. Quando essa opção estiver marcada, tem que indicar o dia do mês e a hora em que o backup deve começar.

> As mudanças de hora padrão para hora de verão podem afetar temporariamente ao programador automático e ativar a próxima cópia de segurança com uma diferença de uma hora. Isso acontece só uma vez e os próximos backups rodam na hora prevista.


## Configuração

A página Cópia de segurança| Configuração das propriedades do banco de dados permite determinar os arquivos de cópia de segurança e sua localização, assim como a do arquivo de histórico. Esses parâmetros são específicos para cada banco de dados abertos pela aplicação 4D.

![](assets/en/Backup/backup03.png)

> **4D Server:** estes parâmetros só podem ser configurados desde a máquina 4D Server.

### Conteúdo
Essa área lhe permite determinar quais os arquivos ou pastas que devem ser copiados durante o backup.

- **Data**: arquivo de dados do Banco. Quando esta opção for marcada, o arquivo de histórico do banco de dados, se existir, recebe um backup na mesma hora que os dados.
- **Arquivo de estrutura**: pastas e arquivos do banco de dados. No caso de bancos de dados compilados, essa opção permite fazer o backup do arquivo .4dz.
- **Arquivo de estrutura usuário (só para bancos binários)**: *funcionalidade obsoleta*
- **Arquivos anexos**: esta área permite especificar um conjunto de arquivos ou pastas que sofrerão o backup no mesmo momento que o banco de dados. These files can be of any type (documents or plug-in templates, labels, reports, pictures, etc.). You can set either individual files or folders whose contents will be fully backed up. Each attached element is listed with its full access path in the “Attachments” area.
    - **Delete**: Removes the selected file from the list of attached files.
    - **Add folder...**: Displays a dialog box that allows selecting a folder to add to the backup. In the case of a restore, the folder will be recovered with its internal structure. Pode selecionar toda pasta ou volume conectado à máquina, exceto a pasta que conter os arquivos do banco de dados.
    - **Add file...**: Displays a dialog box that allows you to select a file to add to the backup.


### Backup File Destination Folder

This area lets you view and change the location where backup files as well as log backup files (where applicable) will be stored.

To view the location of the files, click in the area in order to display their pathname as a pop-up menu.

To modify the location where these files are stored, click the **...** button. A selection dialog box appears, which allows you to select a folder or disk where the backups will be placed. The "Used Space" and "Free Space" areas are updated automatically and indicate the remaining space on the disk of the selected folder.

### Log management

A opção **Utilizar o arquivo de histórico**, quando estiver marcada, indica que o banco de dados utiliza um arquivo de histórico. Its pathname is specified below the option. Quando essa opção for marcada, não é possível abrir o banco de dados sem um arquivo de histórico.

Como padrão, todo banco de dados criado com 4D usando um arquivo de histórico (opção marcada na página **Geral** das **Preferências**). O arquivo de histórico é chamado *data.journal* e está na pasta Data.

> Ativar um novo arquivo de histórico exige que tenha sido feita anteriormente uma cópia de segurança dos dados. When you check this option, a warning message informs you that a backup is necessary. A criação dos arquivos de histórico é adiada e será feita somente depois do próximo backup do banco de dados.


## Backup & Restore

Modifying backup and restore options is optional. Their default values correspond to a standard use of the function.

![](assets/en/Backup/backup04.png)

### General settings

- **Keep only the last X backup files**: This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. This feature works as follows: Once the current backup is complete, 4D deletes the oldest archive if it is found in the same location as the archive being backed up and has the same name (you can request that the oldest archive be deleted before the backup in order to save space). If, for example, the number of sets is set to 3, the first three backups create the archives MyBase-0001, MyBase-0002, and MyBase-0003 respectively. During the fourth backup, the archive MyBase-0004 is created and MyBase-0001 is deleted. By default, the mechanism for deleting sets is enabled and 4D keeps 3 backup sets. To disable the mechanism, simply deselect the option.
> Esse parâmetro se refere tanto aos bancos de dados quanto aos arquivos de registro.

- **Fazer Cópia de segurança só se o arquivo de dados tiver sido modificado**: quando marcar esta opção, 4D inicia as cópias de segurança programadas só dados tiverem sido adicionados, modificados ou eliminados desde a última cópia de segurança. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. No error is generated; however the backup journal notes that the backup has been postponed. Esta opção também permite poupar tempo de máquina para a cópia de segurança de bancos de dados utilizados principalmente para visualização. Please note that enabling this option does not take any modifications made to the project files or attached files into account.
> Esse parâmetro se refere tanto aos bancos de dados quanto aos arquivos de registro.

- **Delete oldest backup file before/after backup**: This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (**before** option) or whether the deletion should take place once the backup is completed (**after** option). In order for this mechanism to work, the oldest archive must not have been renamed or moved.

- **If backup fails**: This option allows setting the mechanism used to handle failed backups (backup impossible). When a backup cannot be performed, 4D lets you carry out a new attempt.
    -  **Retry at the next scheduled date and time**: This option only makes sense when working with scheduled automatic backups. It amounts to cancelling the failed backup. An error is generated.
    - **Retry after X second(s), minute(s) or hour(s)**: When this option is checked, a new backup attempt is executed after the wait period. This mechanism allows anticipating certain circumstances that may block the backup. You can set a wait period in seconds, minutes or hours using the corresponding menu. If the new attempt also fails, an error is generated and the failure is noted in the status area of the last backup and in the backup journal file.
    - **Cancel the operation after X attempts**: This parameter is used to set the maximum number of failed backup attempts. If the backup has not been carried out successfully after the maximum number of attempts set has been reached, it is cancelled and the error 1401 is generated ("The maximum number of backup attempts has been reached; automatic backup is temporarily disabled"). In this case, no new automatic backup will be attempted as long as the application has not been restarted, or a manual backup has been carried out successfully. This parameter is useful in order to avoid a case where an extended problem (requiring human intervention) that prevented a backup from being carried out would have led to the application repeatedly attempting the backup to the detriment of its overall performance. By default, this parameter is not checked.

> 4D considera um backup como tendo falhado se o banco de dados não tiver sido lançado na hora que estava programada o backup automático.

### Archive
These options apply to main backup files and to log backup files.

- **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.). During restore, 4D will automatically merge the segments. Cada segmento é chamado MyDatabase[xxxx-yyyy].4BK, onde xxxx é o número de backup e yyyy for o número de segmento. Por exemplo, os três segmentos da cópia de segurança do banco de dados MeuBanco se chamam MeuBanco[0006-0001].4BK, MeuBanco[0006-0002].4BK e MeuBanco[0006-0003].4BK. The **Segment Size** menu is a combo box that allows you to set the size in MB for each segment of the backup. You can choose one of the preset sizes or enter a specific size between 0 and 2048. If you pass 0, no segmentation occurs (this is the equivalent of passing **None**).

- **Compression Rate** By default, 4D compresses backups to help save disk space. However, the file compression phase can noticeably slow down backups when dealing with large volumes of data. The **Compression Rate** option allows you to adjust file compression:
    - **None:** No file compression is applied. The backup is faster but the archive files are considerably larger.
    - **Fast** (default): This option is a compromise between backup speed and archive size.
    - **Compactar** : a taxa máxima de compressão é aplicada aos arquivos. Os arquivos ocupam o mínimo espaço possível no disco, mas o backup é mais lento.

- **Taxa de Entrelaçamento e de Redundância** 4D gera arquivos usando algoritmos específicos baseados em mecanismos de otimização (interlacing) e segurança (redundância). Pode estabelecer esses mecanismos de acordo com suas necessidades. Os menus contém para essas opções as taxas **Baixo**, **Médio**, **Alto** e **Nenhum** (padrão).
    - **Taxa de Entrelaçamento**: O Interlacing consiste de armazenar dados em setores não adjacentes para limitar riscos no caso de danos de setor. Quanto maior a taxa, maior a segurança; entretanto, o processamento de dados usa mais memória.
    - **Taxa de redundância**: Redundância permite a segurança de dados  em arquivos repetindo a mesma informação várias vezes. Quanto maior a taxa de redundância, melhor a segurança, mas o armazenamento é mais lento e o tamanho dos arquivos aumenta.


### Automatic Restore

- **Restaura a última cópia de segurança se o banco de dados for danificado**: Quando essa opção for marcada, o programa inicia automaticamente a restauração do arquivo de dados do último backup válido do banco, se uma anomalia for detectada (arquivo corrupto por exemplo) durante a o lançamento do banco de dados. No intervention is required on the part of the user; however, the operation is logged in the backup journal.
> No caso de uma restauração automatica, só os arquivos de dados são restaurados. Se quiser os arquivos anexados ou os arquivos de projeto, precisa fazer uma restauração  manual

- **Integrar o último arquivo de histórico se o banco de dados estiver incompleto**: Quando essa opção for marcada, o programa integra automaticamente o arquivo de histórico quando abrir ou restaurar o banco de dados.
    - Quando abrir um banco de dados, o arquivo de histórico atual é integrado automaticamente se 4D detectar que há operações armazenadas no arquivo de log que não estejam presentes nos dados. This situation arises, for example, if a power outage occurs when there are operations in the data cache that have not yet been written to the disk.
    - Quando restaurar um banco de dados, se o arquivo atual de hsitórico, ou se um arquivo de backup de histórico tiverem o mesmo número que um arquivo de backup e estiverem armazenados na mesma pasta, 4D vai examinar seu conteúdo. If it contains operations not found in the data file, the program automatically integrates it.

The user does not see any dialog box; the operation is completely automatic. The goal is to make use as easy as possible. The operation is logged in the backup journal.
