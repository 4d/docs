---
id: settings
title: Backups periódicos
---

Los parámetros de copia de seguridad se definen a través de tres páginas en el [cuadro de diálogo de los parámetros](../settings/overview.md). Pode estabelecer:

- a periodicidade das cópias de segurança automáticas
- os arquivos a incluir em cada backup
- as funcionalidades avançadas que permitem executar tarefas automáticas

> Las propiedades definidas en esta caja de diálogo se escriben en el archivo _Backup.4DSettings_, guardado en la carpeta [Settings](Project/architecture.md#settings-folder).

## Backups periódicos

Pode automatizar a cópia de segurança dos bancos de dados abertos com 4D ou 4D Server (mesmo quando não houver máquinas cliente conectadas). Isso implica definir uma frequência de cópia de segurança (horas, dias, semanas ou meses): para cada sessão, 4D automaticamente inicia uma cópia de segurança usando as configurações atuais de backup.

Si esta aplicación no se inició en el momento teórico de la copia de seguridad, la próxima vez que se inicie 4D, considerará que la copia de seguridad ha fallado y procederá según lo establecido en las Propiedades (consulte [Manejo de problemas de la copi

Los parámetros de copia de seguridad periódicos se definen en la página **Backup/Periodicidad** de las Propiedades:

![](../assets/en/Backup/backup02.png)

As opções encontradas nessa aba permitem estabelecer e  configurar as cópias de segurança automáticas programadas do banco de dados. Pode escolher uma configuração rápida padrão ou pode personalizá-la completamente. Aparecen varias opciones en función de la elección realizada en el menú **Copia de seguridad automática**:

- **Nunca**: la función de copia de seguridad programada está inactiva.
- **Cada hora**: programa una copia de seguridad automática cada hora, a partir de la hora siguiente.
- **Cada día**: programa una copia de seguridad automática cada día. Pode então digitar a hora quando o backup deve começar.
- **Todas las semanas**: programa una copia de seguridad automática cada semana. Duas áreas de entrada adicionais lhe permitem indicar o dia e a hora em que deve começar a cópia de segurança.
- **Todos los meses**: programa una copia de seguridad automática cada mes. Duas áreas de entrada adicionais lhe permitem indicar o dia do mês e a hora em que deve começar a cópia de segurança.
- **Personalizado**: sirve para configurar las copias de seguridad automáticas "a medida". Quando selecionar esta opção, várias áreas de entradas aparecem:
  - **Cada X hora(s)**: permite programar las copias de seguridad con una base horaria. Pode digitar um valor entre 1 e 24.
  * **Cada X día(s) a las x**: permite programar las copias de seguridad con una base diaria. Por exemplo, introduza 1 se quiser realizar uma cópia de segurança diária. Quando esta opção estiver marcada, deve digitar a hora quando o backup deve começar.
  * **Cada X semana(s) a las x**: permite programar las copias de seguridad con una base semanal. Digite 1 se quiser realizar o backup 1 vez por semana. Quando essa opção estiver marcada, deve digitar o dia da semana e a hora em que quer começar o backup. Pode selecionar vários dias da semana se quiser. Por exemplo. pode usar essa opção para estabelecer dois backups por semana: um nas quartas feiras e outro nas sextas.
  * **Cada X mes(es), X día a x**: Permite programar copias de seguridad de forma mensual. Digite 1 se quiser realizar uma cópia de segurança mensal. Quando essa opção estiver marcada, tem que indicar o dia do mês e a hora em que o backup deve começar.

> As mudanças de hora padrão para hora de verão podem afetar temporariamente ao programador automático e ativar a próxima cópia de segurança com uma diferença de uma hora. Isso acontece só uma vez e os próximos backups rodam na hora prevista.

## Configuração

A página Cópia de segurança| Configuração das propriedades do banco de dados permite determinar os arquivos de cópia de segurança e sua localização, assim como a do arquivo de histórico. Esses parâmetros são específicos para cada banco de dados abertos pela aplicação 4D.

![](../assets/en/Backup/backup032.png)

> **4D Server:** estos parámetros sólo se pueden configurar desde la máquina 4D Server.

### Conteúdo

Essa área lhe permite determinar quais os arquivos ou pastas que devem ser copiados durante o backup.

- **Datos**: archivo de datos de la aplicación. Quando esta opção for marcada, o arquivo de histórico do banco de dados, se existir, recebe um backup na mesma hora que os dados.
  - o arquivo de histórico atual da aplicação (se houver),
  - la carpeta `Settings` completa situada [junto al archivo de datos](Project/architecture.md#settings-folder) (si existe), es decir, _los parámetros usuario para los datos_.
- **Estructura**: carpetas y archivos proyecto de la aplicación. No caso de bancos de dados compilados, essa opção permite fazer o backup do arquivo .4dz. Cuando esta opción está marcada, se hace una copia de seguridad automática de la carpeta completa `Settings` situada [en el mismo nivel que la carpeta Project ](Project/architecture.md#settings-folder-1), es decir, los _parámetros usuario_.
- **Archivo de estructura usuario (sólo para bases binaria)**: _funcionalidad obsoleta_
- **Adjuntos**: esta área permite especificar un conjunto de archivos y/o carpetas que se respaldarán al mismo tiempo que la aplicación. Esses arquivos podem ser de qualquer tipo (documentos ou modelos de plug-ins, etiquetas, relatórios, imagens, etc). Pode estabelecer arquivos ou pastas individuais cujos conteúdos serão respaldados completamente. Cada elemento anexado é listado com sua rota de acesso completa na área "Anexos".
  - **Eliminar**: retira el archivo seleccionado de la lista de archivos adjuntos.
  - **Añadir carpeta...**: muestra una caja de diálogo que permite seleccionar una carpeta para añadirla a la copia de seguridad. No caso de uma restauração, a pasta vai recuperar sua estrutura interna. Pode selecionar toda pasta ou volume conectado à máquina, exceto a pasta que conter os arquivos do banco de dados.
  - **Añadir archivo...**: muestra una caja de diálogo que permite seleccionar un archivo para añadirlo a la copia de seguridad.

### Pasta de destino de arquivo de cópia de segurança

Esta área lhe permite visualizar e mudar o local na que se armazenarão os arquivos de cópia de segurança, assim como os arquivos de cópia de segurança do arquivo historial (se aplicável).

Para ver o local dos arquivos, clique na área para que apareça sua rota de acesso no menu emergente.

Para modificar la ubicación donde se almacenan estos archivos, haga clic en el botón **...**. Uma caixa de seleção aparece, que permite selecionar uma pasta ou disco onde os backups são colocados. As áreas "Espaço utilizado" e "Espaço livre" são atualizadas automaticamente e indicam o espaço restante no disco da pasta selecionada.

### Gestão do arquivo de histórico

La opción **Utilizar el archivo de historial**, cuando está marcada, indica que la aplicación utiliza un archivo de historial. O nome do caminho do arquivo de histórico do arquivo de dados atual é especificado abaixo da opção. Quando essa opção for marcada, não é possível abrir o banco de dados sem um arquivo de histórico. Para más información sobre el archivo de historial, consulte [archivo de historial](log.md)

Por defecto, todo proyecto creado con 4D utiliza un archivo de historial (opción **Utilizar archivo de historial**seleccionada en la **página General** de las **Preferencias**). El archivo de historial se llama _data.journal_ y se coloca en la carpeta Data.

> Ativar um novo arquivo de histórico exige que tenha sido feita anteriormente uma cópia de segurança dos dados. Quando você marcar essa opção para o arquivo de dados usado no momento, uma mensagem de aviso informará ser necessário fazer um backup. A criação dos arquivos de histórico é adiada e será feita somente depois do próximo backup do banco de dados.

## Copia de seguridad y restitución

Modificar as opções de cópia de segurança e restauração é opcional. Seus valores padrão correspondem ao uso padrão da função.

![](../assets/en/Backup/backup04.png)

### Parâmetros gerais

- **Conservar únicamente los últimos X archivos de copia de seguridad**: este parámetro activa y configura el mecanismo utilizado para eliminar los archivos de copia de seguridad más antiguos, lo que evita el riesgo de saturar la unidad de disco. Esta funcionalidade opera da seguinte maneira: uma vez finalizado o backup atual, 4D elimina o arquivo mais antigo se for encontrado no mesmo local que o arquivo do qual se está fazendo o backup e tiver o mesmo nome (pode solicitar que o arquivo mais antigo se elimine antes do backup para poupar espaço).
  Se, por exemplo, o número de conjuntos se definir como 3, as três primeiras cópias de segurança criam os arquivos MyBase-0001, MyBase-0002 e MyBase-0003 respectivamente. Durante o quarto backup, o arquivo MyBase-0004 é criado e MyBase-0001 é apagado. Como padrão, o mecanismo de eliminação de conjuntos está ativado e 4D salva 3 conjuntos de cópias de segurança.
  Para desativar o mecanismo, simplesmente desmarque a opção.

> Esse parâmetro se refere tanto a aplicações quanto aos arquivos de registro.

- **Copia de seguridad sólo si el archivo de datos ha sido modificado**: cuando se marca esta opción, 4D inicia las copias de seguridad programadas sólo si se han añadido, modificado o eliminado datos desde la última copia de seguridad. Senão, o backup programado é cancelado e abandonado até o próximo backup programado. Nenhum erro é gerado, entretanto o diário de cópias de segurança assinala que a cópia de segurança foi adiada. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. Lembre que ao ativar esta opção não se levam em consideração as modificações realizadas nos arquivos de estrutura ou nos arquivos anexos.

> Esse parâmetro se refere tanto a aplicações quanto aos arquivos de registro.

- **Eliminar el archivo de copia de seguridad más antiguo antes/después de la copia de seguridad**: esta opción sólo se utiliza si la opción "Conservar sólo los últimos X archivos de copia de seguridad" está marcada. Especifica si 4D debe comenzar borrando el archivo más antiguo antes de iniciar la copia de seguridad (**antes** opción) o si el borrado debe tener lugar una vez finalizada la copia de seguridad (opción **después**). Para que os mecanismos funcionem, o arquivo mais velho não deve ser renomeado nem movido.

- **Si falla la copia de seguridad**: esta opción permite configurar el mecanismo utilizado para gestionar las copias de seguridad fallidas (copia de seguridad imposible). Quando uma cópia de segurança não puder ser realizada, 4D deixa que realize uma nova tentativa.
  - **Reintentar en la siguiente fecha y hora programada**: esta opción sólo tiene sentido cuando se trabaja con copias de seguridad automáticas programadas. Equivale a anular a cópia de segurança que falhou. Um erro é gerado.
  - **Reintentar después de X segundo(s), minuto(s) u hora(s)**: cuando se marca esta opción, se ejecuta un nuevo intento de copia de seguridad después del periodo de espera. Este mecanismo permite antecipar certas circunstancias que possam bloquear a cópia de segurança. Pode estabelecer um período de espera em segundos, minutos ou horas utilizando o menu correspondente. Se a nova tentativa também falhar, um erro é gerado e a falha é notada na área de status do último backup e no arquivo de histórico de backup.
  - **Cancelar la operación después de X intentos**: este parámetro se utiliza para definir el número máximo de intentos de copia de seguridad fallidos. Se o backup não tiver sido realizado com sucesso depois do número máximo de tentativas estabelecido tiver sido alcançado, ele será cancelado e o erro 1401 é gerado ("Número máximo de tentativas de backup foi alcançado; backup automático foi desativado temporariamente"). Nesse caso, não se fará mais backups automáticos até que a aplicação seja reiniciada ou um backup manual se realize com sucesso.
    Este parâmetro é útil para evitar um caso em que um problema prolongado (que exija a intervenção humana) que impedisse a realização de uma cópia de segurança levasse a aplicação a tentar repetidamente a cópia de segurança, comprometendo seu rendimento geral. Como padrão, esse parâmetro não é marcado.

> 4D considera um backup como tendo falhado se o banco de dados não tiver sido lançado na hora que estava programada o backup automático.

### Arquivo

Essas opções se aplicam aos arquivos de cópia de segurança principais e aos arquivos de cópia de segurança do histórico.

- **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. Esse funcionamento permite, por exemplo, armazenar uma cópia de segurança em vários discos diferentes (DVD, dispositivos usb pendrive, etc). Durante a restauração, 4D vai fusionar automaticamente os segmentos. <strong x-id="1">Segment Size (Mb)</strong> 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.).
  El menú **Tamaño del segmento** es un combo box que permite establecer el tamaño en MB de cada segmento de la copia de seguridad. Pode escolher um dos tamanhos pré-estabelecidos ou digitar um tamanho específico entre 0 e 2048. Si se pasa 0, no se produce ninguna segmentación (esto equivale a pasar **Ninguna**).

- **Compression Rate** By default, 4D compresses backups to help save disk space. Entretanto, a fase de compressão de arquivo pode retardar o processo de backup quando lidar com grandes volumes de dados. La opción **Tasa de compresión** permite ajustar la compresión de los archivos:
  - **Ninguna:** no se aplica ninguna compresión de archivos. O backup é mais rápido, mas os arquivos são bem maiores.
  - **Rápido** (por defecto): esta opción es un compromiso entre la velocidad de la copia de seguridad y el tamaño del archivo.
  - **Compactado**: la tasa de compresión máxima se aplica a los archivos. Os arquivos ocupam o mínimo espaço possível no disco, mas o backup é mais lento.

- **Tasa de entrelazamiento y tasa de redundancia**
  4D genera archivos utilizando algoritmos específicos que se basan en mecanismos de optimización (entrelazamiento) y seguridad (redundancia). Pode estabelecer esses mecanismos de acordo com suas necessidades. Los menús asociados a estas opciones contienen índices de **Bajo**, **Medio**, **Alto** y **Ninguno** (por defecto).
  - **Tasa de entrelazamiento**: el entrelazamiento consiste en almacenar los datos en sectores no adyacentes para limitar los riesgos en caso de daño de los sectores. Quanto maior a taxa, maior a segurança; entretanto, o processamento de dados usa mais memória.
  - **Tasa de redundancia**: la redundancia permite asegurar los datos presentes en un fichero repitiendo varias veces la misma información. Quanto maior a taxa de redundância, melhor a segurança, mas o armazenamento é mais lento e o tamanho dos arquivos aumenta.

### Restauro automático e integração de registos

- **Restore last backup if database is damaged**: When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. Nenhuma intervenção do usuário é necessária, mas a operação é gravada no diário da cópia de segurança.

- **Integrar los últimos registros si la base de datos está incompleta**: cuando esta opción está marcada, el programa integra automáticamente el archivo de registro actual si contiene operaciones que no están presentes en el archivo de datos. Se existir uma sequência válida de ficheiros .journal no mesmo repositório, o programa integra previamente todos os ficheiros .journal necessários, do mais antigo ao mais actual.

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
> Si desea obtener los archivos adjuntos o los archivos del proyecto, debe realizar una [restauración manual](restore.md#manually-restoring-a-backup-standard-dialog).

:::caution

If the [data file is encrypted](../MSC/encrypt.md), make sure you [saved the data encryption key](../MSC/encrypt#saving-the-encryption-key) in a `.4DKeyChain` file stored at the first level of the drive, so that 4D can access it if the automatic restore feature triggered. Caso contrário, será devolvido um erro durante a sequência de restauro.

:::
