---
id: settings
title: Parámetros de la copia de seguridad
---

Los parámetros de copia de seguridad se definen a través de tres páginas en el [cuadro de diálogo de los parámetros](../settings/overview.md). Puede definir:

- la periodicidad de las copias de seguridad automáticas
- los archivos a incluir en cada copia de seguridad
- las funcionalidades avanzadas permiten ejecutar tareas automáticas

> Las propiedades definidas en esta caja de diálogo se escriben en el archivo _Backup.4DSettings_, guardado en la carpeta [Settings](Project/architecture.md#settings-folder).

## Backups periódicos

Puede automatizar la copia de seguridad de las aplicaciones abiertas con 4D o 4D Server (incluso cuando no hay máquinas cliente conectadas). Esto implica definir una frecuencia de copia de seguridad (en horas, días, semanas o meses); para cada sesión, 4D inicia automáticamente una copia de seguridad utilizando la configuración de copia de seguridad actual.

Si esta aplicación no se inició en el momento teórico de la copia de seguridad, la próxima vez que se inicie 4D, considerará que la copia de seguridad ha fallado y procederá según lo establecido en las Propiedades (consulte [Manejo de problemas de la copia de seguridad](backup.md#handling-backup-issues)).

Los parámetros de copia de seguridad periódicos se definen en la página **Backup/Periodicidad** de las Propiedades:

![](../assets/en/Backup/backup02.png)

Las opciones que se encuentran en esta pestaña le permiten establecer y configurar las copias de seguridad periódicas automáticas de la aplicación. Puede elegir una configuración rápida estándar o puede personalizarla completamente. Aparecen varias opciones en función de la elección realizada en el menú **Copia de seguridad automática**:

- **Nunca**: la función de copia de seguridad programada está inactiva.
- **Cada hora**: programa una copia de seguridad automática cada hora, a partir de la hora siguiente.
- **Cada día**: programa una copia de seguridad automática cada día. A continuación, puede introducir la hora a la que debe comenzar la copia de seguridad.
- **Todas las semanas**: programa una copia de seguridad automática cada semana. Dos áreas de entrada adicionales le permiten indicar el día y la hora en que debe comenzar la copia de seguridad.
- **Todos los meses**: programa una copia de seguridad automática cada mes. Dos áreas de entrada adicionales le permiten indicar el día del mes y la hora en que debe comenzar la copia de seguridad.
- **Personalizado**: sirve para configurar las copias de seguridad automáticas "a medida". Al seleccionar esta opción, aparecen varias áreas de entrada adicionales:
  - **Cada X hora(s)**: permite programar las copias de seguridad con una base horaria. Puede introducir un valor entre 1 y 24.
  * **Cada X día(s) a las x**: permite programar las copias de seguridad con una base diaria. Por ejemplo, introduzca 1 si desea realizar una copia de seguridad diaria. Cuando esta opción está marcada, debe introducir la hora a la que debe comenzar la copia de seguridad.
  * **Cada X semana(s) a las x**: permite programar las copias de seguridad con una base semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. Cuando esta opción está marcada, debe introducir el día(s) de la semana y la hora que debe comenzar la copia de seguridad. Si lo desea, puede seleccionar varios días de la semana. Por ejemplo, puede utilizar esta opción para definir dos copias de seguridad semanales: una el miércoles y otra el viernes.
  * **Cada X mes(es), X día a x**: Permite programar copias de seguridad de forma mensual. Introduzca 1 si desea realizar una copia de seguridad mensual. Cuando esta opción está marcada, debe indicar el día de cada mes y la hora a la cual debe comenzar la copia de seguridad.

> Los cambios de la hora estándar a la hora de verano podrían afectar temporalmente al programador automático y activar la siguiente copia de seguridad con un cambio de hora de una hora. Esto ocurre sólo una vez y las siguientes copias de seguridad se ejecutan a la hora prevista.

## Configuración

La página Copia de seguridad/Configuración de las Propiedades permite designar los archivos de copia de seguridad y su ubicación, así como la del archivo de historial. Estos parámetros son específicos de cada aplicación abierta por 4D o 4D Server.

![](../assets/en/Backup/backup032.png)

> **4D Server:** estos parámetros sólo se pueden configurar desde la máquina 4D Server.

### Contenido

Esta área le permite determinar qué archivos y/o carpetas deben copiarse durante la siguiente copia de seguridad.

- **Datos**: archivo de datos de la aplicación. Cuando esta opción está marcada, los siguientes elementos se copian automáticamente al mismo tiempo que los datos:
  - el archivo de historial actual de la aplicación (si existe),
  - la carpeta `Settings` completa situada [junto al archivo de datos](Project/architecture.md#settings-folder) (si existe), es decir, _los parámetros usuario para los datos_.
- **Estructura**: carpetas y archivos proyecto de la aplicación. En el caso de proyectos compilados, esta opción permite hacer una copia de seguridad del archivo .4dz. Cuando esta opción está marcada, se hace una copia de seguridad automática de la carpeta completa `Settings` situada [en el mismo nivel que la carpeta Project ](Project/architecture.md#settings-folder-1), es decir, los _parámetros usuario_.
- **Archivo de estructura usuario (sólo para bases binaria)**: _funcionalidad obsoleta_
- **Adjuntos**: esta área permite especificar un conjunto de archivos y/o carpetas que se respaldarán al mismo tiempo que la aplicación. Estos archivos pueden ser de cualquier tipo (documentos o plantillas de plug-ins, etiquetas, informes, imágenes, etc.). Puede definir archivos individuales o carpetas cuyo contenido se respaldará completamente. Cada elemento adjunto aparece con su ruta de acceso completa en el área "Adjuntos ".
  - **Eliminar**: retira el archivo seleccionado de la lista de archivos adjuntos.
  - **Añadir carpeta...**: muestra una caja de diálogo que permite seleccionar una carpeta para añadirla a la copia de seguridad. En el caso de una restitución, la carpeta se recuperará con su estructura interna. Puede seleccionar toda carpeta o volumen conectado a la máquina, a excepción de la carpeta que contiene los archivos de la aplicación.
  - **Añadir archivo...**: muestra una caja de diálogo que permite seleccionar un archivo para añadirlo a la copia de seguridad.

### Carpeta de destino del archivo de copia de seguridad

Esta área le permite visualizar y cambiar la ubicación en la que se almacenarán los archivos de copia de seguridad, así como los archivos de copia de seguridad del archivo historial (si procede).

Para ver la ubicación de los archivos, haga clic en el área para que aparezca su ruta de acceso en un menú emergente.

Para modificar la ubicación donde se almacenan estos archivos, haga clic en el botón **...**. Aparece una caja de diálogo de selección, que permite seleccionar la carpeta o el disco donde se colocarán las copias de seguridad. Las áreas "Espacio utilizado" y "Espacio libre" se actualizan automáticamente e indican el espacio restante en el disco de la carpeta seleccionada.

### Gestión del archivo de historial

La opción **Utilizar el archivo de historial**, cuando está marcada, indica que la aplicación utiliza un archivo de historial. La ruta del archivo de historial para el archivo de datos actual se especifica debajo de la opción. Cuando esta opción está marcada, no es posible abrir la aplicación sin un archivo de historial. Para más información sobre el archivo de historial, consulte [archivo de historial](log.md)

Por defecto, todo proyecto creado con 4D utiliza un archivo de historial (opción **Utilizar archivo de historial**seleccionada en la **página General** de las **Preferencias**). El archivo de historial se llama _data.journal_ y se coloca en la carpeta Data.

> La activación de un nuevo archivo de historial requiere una copia de seguridad previa de los datos de la aplicación. Si marca esta opción para el archivo de datos utilizado actualmente, un mensaje de advertencia le informará de que es necesario realizar una copia de seguridad. La creación del archivo de historial se pospone y se creará realmente sólo después de la siguiente copia de seguridad de la aplicación.

## Copia de seguridad y restauración

La modificación de las opciones de copia de seguridad y restauración es opcional. Sus valores por defecto corresponden a un uso estándar de la función.

![](../assets/en/Backup/backup04.png)

### Parámetros generales

- **Conservar únicamente los últimos X archivos de copia de seguridad**: este parámetro activa y configura el mecanismo utilizado para eliminar los archivos de copia de seguridad más antiguos, lo que evita el riesgo de saturar la unidad de disco. Esta funcionalidad opera de la siguiente manera: una vez finalizado el backup actual, 4D elimina el archivo más antiguo si se encuentra en la misma ubicación que el archivo del que se está haciendo el backup y tiene el mismo nombre (puede solicitar que el archivo más antiguo se elimine antes del backup para ahorrar espacio).
  Si, por ejemplo, el número de conjuntos se define en 3, las tres primeras copias de seguridad crean los archivos MyBase-0001, MyBase-0002 y MyBase-0003 respectivamente. Durante la cuarta copia de seguridad, se crea el archivo MyBase-0004 y se elimina MyBase-0001. Por defecto, el mecanismo de eliminación de conjuntos está activado y 4D guarda 3 conjuntos de copia de seguridad.
  Para desactivar el mecanismo, basta con deseleccionar la opción.

> Este parámetro se refiere tanto a las copias de seguridad de la aplicación como de los archivos del historial.

- **Copia de seguridad sólo si el archivo de datos ha sido modificado**: cuando se marca esta opción, 4D inicia las copias de seguridad programadas sólo si se han añadido, modificado o eliminado datos desde la última copia de seguridad. De lo contrario, la copia de seguridad programada se cancela y se pospone hasta la siguiente copia de seguridad programada. No se genera ningún error; sin embargo, el diario de copias de seguridad señala que la copia de seguridad se ha pospuesto. Esta opción también permite ahorrar tiempo de máquina para la copia de seguridad de las aplicaciones utilizadas principalmente para su visualización. Tenga en cuenta que al activar esta opción no se tienen en cuenta las modificaciones realizadas en los archivos de estructura o en los archivos adjuntos.

> Este parámetro se refiere tanto a las copias de seguridad de la aplicación como de los archivos del historial.

- **Eliminar el archivo de copia de seguridad más antiguo antes/después de la copia de seguridad**: esta opción sólo se utiliza si la opción "Conservar sólo los últimos X archivos de copia de seguridad" está marcada. Especifica si 4D debe comenzar borrando el archivo más antiguo antes de iniciar la copia de seguridad (**antes** opción) o si el borrado debe tener lugar una vez finalizada la copia de seguridad (opción **después**). Para que este mecanismo funcione, el archivo más antiguo no debe haber sido renombrado o movido.

- **Si falla la copia de seguridad**: esta opción permite configurar el mecanismo utilizado para gestionar las copias de seguridad fallidas (copia de seguridad imposible). Cuando no se puede realizar una copia de seguridad, 4D le permite realizar un nuevo intento.
  - **Reintentar en la siguiente fecha y hora programada**: esta opción sólo tiene sentido cuando se trabaja con copias de seguridad automáticas programadas. Equivale a anular la copia de seguridad fallida. Se genera un error.
  - **Reintentar después de X segundo(s), minuto(s) u hora(s)**: cuando se marca esta opción, se ejecuta un nuevo intento de copia de seguridad después del periodo de espera. Este mecanismo permite anticipar ciertas circunstancias que pueden bloquear la copia de seguridad. Puede establecer un periodo de espera en segundos, minutos u horas utilizando el menú correspondiente. Si el nuevo intento también falla, se genera un error y se anota el fallo en el área de estado de la última copia de seguridad y en el archivo del diario de copias de seguridad.
  - **Cancelar la operación después de X intentos**: este parámetro se utiliza para definir el número máximo de intentos de copia de seguridad fallidos. Si la copia de seguridad no se ha realizado con éxito una vez alcanzado el número máximo de intentos establecido, se cancela y se genera el error 1401 ("Se ha alcanzado el número máximo de intentos de copia de seguridad; la copia de seguridad automática está temporalmente desactivada"). En este caso, no se intentará realizar una nueva copia de seguridad automática mientras no se haya reiniciado la aplicación o se haya realizado con éxito una copia de seguridad manual.
    Este parámetro es útil para evitar un caso en el que un problema prolongado (que requiera la intervención humana) que impidiera la realización de una copia de seguridad hubiera llevado a la aplicación a intentar repetidamente la copia de seguridad en detrimento de su rendimiento general. Por defecto, este parámetro no está seleccionado.

> 4D considera que una copia de seguridad ha fallado si la aplicación no se ha iniciado en el momento en que se ha programado la realización de la copia de seguridad automática.

### Archivo

Estas opciones se aplican a los archivos de copia de seguridad principales y a los archivos de copia de seguridad del historial.

- **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. Este funcionamiento permite, por ejemplo, almacenar una copia de seguridad en varios discos diferentes (DVD, dispositivos usb, etc.). Durante la restauración, 4D fusionará automáticamente los segmentos. Cada segmento se llama MyApplication[xxxx-yyyy].4BK, donde xxxx es el número de copia de seguridad e yyyy es el número de segmento. Por ejemplo, los tres segmentos de la copia de seguridad de la base MyApplication se llaman MyApplication[0006-0001].4BK, MyApplication[0006-0002].4BK y MyApplication[0006-0003].4BK.
  El menú **Tamaño del segmento** es un combo box que permite establecer el tamaño en MB de cada segmento de la copia de seguridad. Puede elegir uno de los tamaños preestablecidos o introducir un tamaño específico entre 0 y 2048. Si se pasa 0, no se produce ninguna segmentación (esto equivale a pasar **Ninguna**).

- **Compression Rate** By default, 4D compresses backups to help save disk space. Sin embargo, la fase de compresión de archivos puede ralentizar notablemente las copias de seguridad cuando se trata de grandes volúmenes de datos. La opción **Tasa de compresión** permite ajustar la compresión de los archivos:
  - **Ninguna:** no se aplica ninguna compresión de archivos. La copia de seguridad es más rápida, pero los archivos son considerablemente más grandes.
  - **Rápido** (por defecto): esta opción es un compromiso entre la velocidad de la copia de seguridad y el tamaño del archivo.
  - **Compactado**: la tasa de compresión máxima se aplica a los archivos. Los ficheros de archivos ocupan el menor espacio posible en el disco, pero la copia de seguridad se ralentiza notablemente.

- **Tasa de entrelazamiento y tasa de redundancia**
  4D genera archivos utilizando algoritmos específicos que se basan en mecanismos de optimización (entrelazamiento) y seguridad (redundancia). Puedes configurar estos mecanismos en función de sus necesidades. Los menús asociados a estas opciones contienen índices de **Bajo**, **Medio**, **Alto** y **Ninguno** (por defecto).
  - **Tasa de entrelazamiento**: el entrelazamiento consiste en almacenar los datos en sectores no adyacentes para limitar los riesgos en caso de daño de los sectores. Cuanto mayor sea la tasa, mayor será la seguridad; sin embargo, el procesamiento de datos utilizará más memoria.
  - **Tasa de redundancia**: la redundancia permite asegurar los datos presentes en un fichero repitiendo varias veces la misma información. Cuanto mayor sea la tasa de redundancia, mayor será la seguridad de los archivos; sin embargo, el almacenamiento será más lento y el tamaño de los archivos aumentará en consecuencia.

### Restauración automática e integración de registros

#### Restaurar la última copia de seguridad si la base de datos está dañada

Cuando se marca esta opción, el programa inicia automáticamente la restauración del archivo de datos de la última copia de seguridad válida de la aplicación, si se detecta una anomalía (archivo dañado, por ejemplo) durante el lanzamiento de la aplicación. No se requiere ninguna intervención por parte del usuario; sin embargo, la operación se registra en el diario de copias de seguridad.

#### Integrar los últimos registros si la base de datos está incompleta

Cuando se marca esta opción, el programa integra automáticamente el archivo de registro actual si contiene operaciones que no están presentes en el archivo de datos. Si existe una secuencia válida de archivos .journal en el mismo repositorio, el programa integra de antemano todos los archivos .journal necesarios desde el más antiguo hasta el más actual. Esta situación se produce, por ejemplo, si se produce un corte de corriente cuando hay operaciones en la caché de datos que aún no se han escrito en el disco, o después de que se haya detectado una anomalía al abrir el archivo de datos y se haya producido una restauración.

:::note

Esta funcionalidad implica que el programa analiza todos los archivos de registro de la carpeta de archivos de registro actual al iniciarse. Por lo tanto, por razones de rendimiento, asegúrese de que no hay archivos de registro inútiles almacenados en la carpeta.

:::

El usuario no ve ninguna caja de diálogo; la operación es completamente automática. El objetivo es facilitar al máximo su uso. La operación se registra en el diario de copias de seguridad.

> En el caso de una restauración automática, sólo se restauran los siguientes elementos:
>
> - archivo .4DD
> - archivo .4DIndx
> - archivo .4DSyncData
> - archivo .4DSyncHeader
> - Carpeta External Data
>
> Si desea obtener los archivos adjuntos o los archivos del proyecto, debe realizar una [restauración manual](restore.md#manually-restoring-a-backup-standard-dialog).

:::caution

Si el [archivo de datos está encriptado](../MSC/encrypt.md), asegúrese de que [haya guardado la llave de encriptación de datos](../MSC/encrypt#saving-the-encryption-key) en un archivo `.4DKeyChain` almacenado en el primer nivel de la unidad, para que 4D pueda acceder a él si se activa la función de restauración automática. De lo contrario, se devolverá un error durante la secuencia de restauración.

:::
