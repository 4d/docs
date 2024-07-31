---
id: settings
title: Backups periódicos
---

As configurações de backup são definidas através de três páginas na [caixa de diálogo Configurações](../settings/overview.md). Pode estabelecer:

- a periodicidade das cópias de segurança automáticas
- os arquivos a incluir em cada backup
- as funcionalidades avançadas que permitem executar tarefas automáticas

> As propriedades definidas nesta caixa de diálogo são escritas no arquivo _Backup.4DSettings_, guardado na pasta [Settings](Project/architecture.md#settings-folder).

## Backups periódicos

Pode automatizar a cópia de segurança dos bancos de dados abertos com 4D ou 4D Server (mesmo quando não houver máquinas cliente conectadas). Isso implica definir uma frequência de cópia de segurança (horas, dias, semanas ou meses): para cada sessão, 4D automaticamente inicia uma cópia de segurança usando as configurações atuais de backup.

Se esta aplicação não foi lançada no momento teórico do backup, na próxima vez que o 4D for lançado, considera o backup como tendo falhado e continua conforme definido nas Configurações (consulte [Manejo de problemas da cópia de segurança](backup.md#handling-backup-issues)).

As configurações de backup do agendador são definidas na página **Backup/Periodicidade** das Configurações da Estrutura:

![](../assets/en/Backup/backup02.png)

As opções encontradas nessa aba permitem estabelecer e  configurar as cópias de segurança automáticas programadas do banco de dados. Pode escolher uma configuração rápida padrão ou pode personalizá-la completamente. Várias opções aparecem dependendo da escolha feita no menu **Backup automático**:

- **Nunca**: A função de cópia de segurança agendada está inativa.
- **Cada hora**: Programa um backup automático a cada hora, começando com a próxima hora.
- **Todos os dias**: Programa um backup automático todo dia. Pode então digitar a hora quando o backup deve começar.
- **Toda semana**: Programa um backup automático toda semana. Duas áreas de entrada adicionais lhe permitem indicar o dia e a hora em que deve começar a cópia de segurança.
- **Todos os meses**: Programa uma cópia de segurança automática todos os meses. Duas áreas de entrada adicionais lhe permitem indicar o dia do mês e a hora em que deve começar a cópia de segurança.
- **Personalizado**: sirve para configurar las copias de seguridad automáticas "a medida". Quando selecionar esta opção, várias áreas de entradas aparecem:
  - **Cada X hora(s)**: Permite programar as cópias de segurança com frequência horária. Pode digitar um valor entre 1 e 24.
  * **Todos os X dia(s) no x**: permite backups de programação diariamente. Por exemplo, introduza 1 se quiser realizar uma cópia de segurança diária. Quando esta opção estiver marcada, deve digitar a hora quando o backup deve começar.
  * **A cada X semana(s) no x**: permite backups de programação semanais. Digite 1 se quiser realizar o backup 1 vez por semana. Quando essa opção estiver marcada, deve digitar o dia da semana e a hora em que quer começar o backup. Pode selecionar vários dias da semana se quiser. Por exemplo. pode usar essa opção para estabelecer dois backups por semana: um nas quartas feiras e outro nas sextas.
  * **Cada X mes(es), X día a x**: Permite programar copias de seguridad de forma mensual. Digite 1 se quiser realizar uma cópia de segurança mensal. Quando essa opção estiver marcada, tem que indicar o dia do mês e a hora em que o backup deve começar.

> As mudanças de hora padrão para hora de verão podem afetar temporariamente ao programador automático e ativar a próxima cópia de segurança com uma diferença de uma hora. Isso acontece só uma vez e os próximos backups rodam na hora prevista.

## Configuração

A página Cópia de segurança| Configuração das propriedades do banco de dados permite determinar os arquivos de cópia de segurança e sua localização, assim como a do arquivo de histórico. Esses parâmetros são específicos para cada banco de dados abertos pela aplicação 4D.

![](../assets/en/Backup/backup032.png)

> **4D Server:** Estes parâmetros só podem ser configurados desde a máquina 4D Server.

### Conteúdo

Essa área lhe permite determinar quais os arquivos ou pastas que devem ser copiados durante o backup.

- **Dados**: Arquivo de dados do aplicativo. Quando esta opção for marcada, o arquivo de histórico do banco de dados, se existir, recebe um backup na mesma hora que os dados.
  - o arquivo de histórico atual da aplicação (se houver),
  - a pasta completa `Settings` localizada [ao lado do arquivo de dados](Project/architecture.md#pasta-de-configurações) (se existir), ou seja os _parâmetros usuário para os dados_.
- **Estrutura**: Pastas e arquivos do projeto da aplicação. No caso de bancos de dados compilados, essa opção permite fazer o backup do arquivo .4dz. Quando esta opção estiver marcada, uma cópia de segurança é feita automaticamente da pasta completa Settings situada no mesmo nível que a pasta Project, ou seja, os parâmetros usuário.
- **Arquivo de estrutura usuário (só para bancos binários)**: _funcionalidade obsoleta_
- **Arquivos anexos**: Esta área permite especificar um conjunto de arquivos e/ou pastas para serem copiados em backup ao mesmo tempo que o aplicativo. Esses arquivos podem ser de qualquer tipo (documentos ou modelos de plug-ins, etiquetas, relatórios, imagens, etc). Pode estabelecer arquivos ou pastas individuais cujos conteúdos serão respaldados completamente. Cada elemento anexado é listado com sua rota de acesso completa na área "Anexos".
  - **Eliminar**: retira o arquivo selecionado da lista de arquivos anexos.
  - **Adicionar pasta...**: Mostra uma caixa de diálogo que permite selecionar uma pasta para adicionar à cópia de segurança. No caso de uma restauração, a pasta vai recuperar sua estrutura interna. Pode selecionar toda pasta ou volume conectado à máquina, exceto a pasta que conter os arquivos do banco de dados.
  - **Adicionar pasta...**: Mostra uma caixa de diálogo que permite selecionar um arquivo para adicionar à cópia de segurança.

### Pasta de destino de arquivo de cópia de segurança

Esta área lhe permite visualizar e mudar o local na que se armazenarão os arquivos de cópia de segurança, assim como os arquivos de cópia de segurança do arquivo historial (se aplicável).

Para ver o local dos arquivos, clique na área para que apareça sua rota de acesso no menu emergente.

Para modificar o local onde esses arquivos são armazenados, clique no botão **...**. Uma caixa de seleção aparece, que permite selecionar uma pasta ou disco onde os backups são colocados. As áreas "Espaço utilizado" e "Espaço livre" são atualizadas automaticamente e indicam o espaço restante no disco da pasta selecionada.

### Gestão do arquivo de histórico

A opção **Utilizar arquivo de histórico**, quando estiver marcada, indica que a aplicação utiliza um arquivo de histórico. O nome do caminho do arquivo de histórico do arquivo de dados atual é especificado abaixo da opção. Quando essa opção for marcada, não é possível abrir o banco de dados sem um arquivo de histórico. Para obter mais informações sobre o arquivo de histórico, consulte [log file](log.md)

Por padrão, qualquer projeto criado com o 4D utiliza um arquivo de log (opção **Use Log File** marcada na página **General Page** das **Preferences**). El archivo de historial se llama _data.journal_ y se coloca en la carpeta Data.

> Ativar um novo arquivo de histórico exige que tenha sido feita anteriormente uma cópia de segurança dos dados. Quando você marcar essa opção para o arquivo de dados usado no momento, uma mensagem de aviso informará ser necessário fazer um backup. A criação dos arquivos de histórico é adiada e será feita somente depois do próximo backup do banco de dados.

## Backup e Restauração

Modificar as opções de cópia de segurança e restauração é opcional. Seus valores padrão correspondem ao uso padrão da função.

![](../assets/en/Backup/backup04.png)

### Parâmetros gerais

- **Mantenha apenas os últimos arquivos de backup X**: Este parâmetro ativa e configura o mecanismo usado para excluir os arquivos de backup mais antigos. que evita o risco de saturar a unidade de disco. Esta funcionalidade opera da seguinte maneira: uma vez finalizado o backup atual, 4D elimina o arquivo mais antigo se for encontrado no mesmo local que o arquivo do qual se está fazendo o backup e tiver o mesmo nome (pode solicitar que o arquivo mais antigo se elimine antes do backup para poupar espaço).
  Se, por exemplo, o número de conjuntos se definir como 3, as três primeiras cópias de segurança criam os arquivos MyBase-0001, MyBase-0002 e MyBase-0003 respectivamente. Durante o quarto backup, o arquivo MyBase-0004 é criado e MyBase-0001 é apagado. Como padrão, o mecanismo de eliminação de conjuntos está ativado e 4D salva 3 conjuntos de cópias de segurança.
  Para desativar o mecanismo, simplesmente desmarque a opção.

> Esse parâmetro se refere tanto a aplicações quanto aos arquivos de registro.

- **Fazer Cópia de segurança só se o arquivo de dados tiver sido modificado**: Quando marcar esta opção, 4D inicia as cópias de segurança programadas apenas se os dados tiverem sido adicionados, modificados ou excluídos desde a última cópia de segurança. Senão, o backup programado é cancelado e abandonado até o próximo backup programado. Nenhum erro é gerado, entretanto o diário de cópias de segurança assinala que a cópia de segurança foi adiada. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. Lembre que ao ativar esta opção não se levam em consideração as modificações realizadas nos arquivos de estrutura ou nos arquivos anexos.

> Esse parâmetro se refere tanto a aplicações quanto aos arquivos de registro.

- **Excluir arquivo de backup mais antigo antes de/após backup**: Esta opção só é usada se a opção "Manter apenas os últimos X arquivos de backup" estiver marcada. Especifica se o 4D deve começar apagando o arquivo mais antigo antes de iniciar o backup (opção **before**) ou se a exclusão deve ocorrer após a conclusão do backup (opção **after**). Para que os mecanismos funcionem, o arquivo mais velho não deve ser renomeado nem movido.

- **Se a cópia de segurança falhar**: Esta opção permite definir o mecanismo usado para lidar com cópias de segurança falhadas (cópia de segurança impossível). Quando uma cópia de segurança não puder ser realizada, 4D deixa que realize uma nova tentativa.
  - **Tente novamente na próxima data e hora agendadas**: essa opção só faz sentido quando trabalhar com backups automáticos programados. Equivale a anular a cópia de segurança que falhou. Um erro é gerado.
  - **Tentar novamente após X segundo(s), minuto(s) ou hora(s)**: Quando esta opção é marcada, uma nova tentativa de backup é executada após o período de espera. Este mecanismo permite antecipar certas circunstancias que possam bloquear a cópia de segurança. Pode estabelecer um período de espera em segundos, minutos ou horas utilizando o menu correspondente. Se a nova tentativa também falhar, um erro é gerado e a falha é notada na área de status do último backup e no arquivo de histórico de backup.
  - **Cancele a operação após X tentativas**: Este parâmetro é usado para definir o número máximo de tentativas de backup falhadas. Se o backup não tiver sido realizado com sucesso depois do número máximo de tentativas estabelecido tiver sido alcançado, ele será cancelado e o erro 1401 é gerado ("Número máximo de tentativas de backup foi alcançado; backup automático foi desativado temporariamente"). Nesse caso, não se fará mais backups automáticos até que a aplicação seja reiniciada ou um backup manual se realize com sucesso.
    Este parâmetro é útil para evitar um caso em que um problema prolongado (que exija a intervenção humana) que impedisse a realização de uma cópia de segurança levasse a aplicação a tentar repetidamente a cópia de segurança, comprometendo seu rendimento geral. Como padrão, esse parâmetro não é marcado.

> 4D considera um backup como tendo falhado se o banco de dados não tiver sido lançado na hora que estava programada o backup automático.

### Arquivo

Essas opções se aplicam aos arquivos de cópia de segurança principais e aos arquivos de cópia de segurança do histórico.

- **Tamanho do Segmento (Mb)**
  4D permite que você segmente arquivos, ou seja, para cortá-lo em tamanhos menores. Esse funcionamento permite, por exemplo, armazenar uma cópia de segurança em vários discos diferentes (DVD, dispositivos usb pendrive, etc). Durante a restauração, 4D vai fusionar automaticamente os segmentos. <strong x-id="1">Segment Size (Mb)</strong> 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.).
  O menu **Tamanho do Segmento** é uma caixa de combinação que permite que você defina o tamanho em MB para cada segmento do backup. Pode escolher um dos tamanhos pré-estabelecidos ou digitar um tamanho específico entre 0 e 2048. Se você passar 0, nenhum segmento ocorre (isso é o equivalente a passar **Nenhum**).

- **Taxa de Compressão**
  Por padrão, o 4D comprime os backups para ajudar a economizar espaço em disco. Entretanto, a fase de compressão de arquivo pode retardar o processo de backup quando lidar com grandes volumes de dados. A opção **Taxa de Compressão** permite ajustar a compressão de arquivo:
  - **Nenhum:** Não se aplica compressão de arquivos. O backup é mais rápido, mas os arquivos são bem maiores.
  - **Rápido** (padrão): Essa opção é um compromisso entre a velocidade de backup e tamanho de arquivo.
  - **Compact**: A taxa máxima de compressão é aplicada aos arquivos. Os arquivos ocupam o mínimo espaço possível no disco, mas o backup é mais lento.

- **Taxa de Interlúção e Taxa de Redundância**
  4D gera arquivos usando algoritmos específicos que são baseados nos mecanismos de otimização (intercrição) e segurança (redundância). Pode estabelecer esses mecanismos de acordo com suas necessidades. Os menus para essas opções contêm as taxas **Baixo**, **Médio**, **Alto** e **Nenhum** (padrão).
  - **Taxa de Entrelaçamento**: O Interlacing consiste de armazenar dados em setores não adjacentes para limitar riscos no caso de danos de setor. Quanto maior a taxa, maior a segurança; entretanto, o processamento de dados usa mais memória.
  - **Taxa de redundância**: Redundância permite a segurança de dados presentes em um arquivo ao repetir a mesma informação várias vezes. Quanto maior a taxa de redundância, melhor a segurança, mas o armazenamento é mais lento e o tamanho dos arquivos aumenta.

### Restauro automático e integração de registos

#### Restaurar o último backup se o banco de dados estiver danificado

When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. Nenhuma intervenção do usuário é necessária, mas a operação é gravada no diário da cópia de segurança.

#### Integrate the latest logs if the database is incomplete

When this option is checked, the program automatically integrates the current log file if it contains operations that are not present in the data file. Se existir uma sequência válida de ficheiros .journal no mesmo repositório, o programa integra previamente todos os ficheiros .journal necessários, do mais antigo ao mais actual. Esta situação surge, por exemplo, se ocorrer uma falha de energia quando existem operações na cache de dados que ainda não foram escritas no disco, ou depois de ter sido detectada uma anomalia ao abrir o ficheiro de dados e ter ocorrido um restauro.

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
> Se quiser obter os arquivos anexados ou os arquivos do projeto, você deve realizar uma [restauração manual](restore.md#manually-restoring-a-backup-standard-dialog).

:::caution

Se o [arquivo de dados for criptografado](../MSC/encrypt.md), certifique-se de que você [salvou a chave de criptografia de dados](../MSC/encrypt#saving-the-encryption-key) em um `. Arquivo DKeyChain` armazenado no primeiro nível da unidade, para que 4D possa acessá-lo se o recurso de restauração automática for ativado. Caso contrário, será devolvido um erro durante a sequência de restauro.

:::
