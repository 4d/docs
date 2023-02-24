---
id: database
title: Página Base de datos
---

## Página Almacenamiento de datos

Esta página permite configurar el almacenamiento de datos de la base 4D en el disco.

### Parámetros generales


#### Autorizar el uso de archivos de datos de sólo lectura

Esta opción permite configurar el funcionamiento de la aplicación al abrir un archivo de datos bloqueado a nivel del sistema operativo. 4D incluye un mecanismo que impide automáticamente la apertura de una base cuando su archivo de datos, o uno de sus segmentos está bloqueado. En este caso, cuando se activa esta opción de detección, 4D muestra un mensaje de advertencia y no abre la base:

![](../assets/en/settings/data-locked.png)

A menos que se marque esta opción, no es posible abrir una base cuando su archivo de datos está bloqueado (funcionamiento por defecto para las bases 4D).

#### Sobre el bloqueo de archivos

Los archivos bloqueados pueden ser leídos pero su contenido no puede ser modificado. For example, files are locked when they are stored on a non-rewritable support (DVD type) or when they are copied from this type of support. 4D puede trabajar de forma transparente con archivos de datos bloqueados, lo que permite, en particular, la utilización de proyectos guardados en DVD. Sin embargo, con esta operación se corre el riesgo de utilizar inadvertidamente un fichero de datos bloqueado en el que no se guardarán las modificaciones. Esta es la razón por la que, por defecto, 4D no permite abrir bases de datos con un archivo de datos bloqueado.

### Ubicación de carpeta temporal

Esta área le permite cambiar la ubicación de los archivos temporales creados mientras 4D está funcionando. La carpeta de archivos temporales es utilizada por la aplicación, cuando es necesario, para guardar temporalmente en disco los datos en memoria.

La ubicación actual de esta carpeta se muestra en el área "Actual:". Puede hacer clic en esta área para mostrar el nombre de la ruta en forma de lista desplegable:

![](../assets/en/settings/temporary-file-location.png)

Se ofrecen tres opciones de ubicación:

-   **Sistema**: cuando se selecciona esta opción, los archivos temporales 4D se crean en una carpeta situada en la ubicación especificada por Windows y/o macOS. Puede averiguar la ubicación actual definida por su sistema utilizando el comando 4D [`Temporary folder`](https://doc.4d.com/4dv19R/help/command/en/page486.html). Los archivos se colocan en una subcarpeta cuyo nombre está formado por el nombre de la base y un identificador único.
-   **Carpeta de archivos de datos** (opción por defecto): cuando se selecciona esta opción, los archivos temporales 4D se crean en una carpeta llamada "archivos temporales" situada en el mismo nivel que el archivo de datos de la base de datos.
-   **Definido por el usuario**: esta opción se utiliza para definir una ubicación personalizada. Si se modifica la opción de ubicación, será necesario reiniciar la base para que se tenga en cuenta la nueva opción. 4D verifica si se puede acceder a la carpeta seleccionada mediante escritura. Si no es así, la aplicación prueba otras opciones hasta encontrar una carpeta válida.

> Esta opción se almacena en las propiedades adicionales ("extra properties") de la estructura, accesibles durante la exportación XML de la definición de estructura (ver [Exportar e importar las definiciones de estructura](https://doc.4d.com/4Dv19/4D/19/Exporting-and-importing-structure-definitions.300-5416829.en.html)).

### Comparación de texto

> Si cambia una de estas opciones, tiene que salir y volver a abrir la base para que el cambio surta efecto. Una vez reabierta la base, se vuelven a indexar automáticamente todos sus índices.

-   **Considere @ como comodín sólo cuando se encuentre al principio o al final de patrones de texto**: permite definir como se interpretará la arroba "@" cuando se utilice en una búsqueda o en una comparación de cadenas de caracteres, cuando se encuentre en una palabra. Cuando esta opción no está marcada (valor por defecto), la arroba se utiliza como carácter comodín, es decir, sustituye a cualquier caracter (ver [Caracter comodín (@)](https://doc.4d.com/4Dv19/4D/19/Query-editor.300-5416813.en.html#463876)).

    Cuando la opción está marcada, la arroba se considera un caracter simple si se encuentra dentro de una palabra. Esta posibilidad es especialmente útil cuando se buscan direcciones de correo electrónico, donde el signo @ se utiliza internamente. Esta opción influye en las búsquedas, ordenaciones, comparaciones de cadenas de caracteres, así como en los datos almacenados en las tablas y los que se encuentran en memoria, como los arrays. Los campos y variables de tipo alfa (indexados o no) y texto se ven afectados por como se interpreta el caracter @ en las búsquedas y ordenaciones.

     **Notas:**
    -   Para las búsquedas, si el criterio de búsqueda empieza o acaba por @, el caracter "@" se tratará como un comodín. Sólo si el carácter "@" se coloca en medio de una palabra (por ejemplo: bill@cgi.com) 4D lo trata de forma diferente.
    -   Esta opción también puede influir en el comportamiento de los comandos del tema [Objetos (Formularios)](https://doc.4d.com/4Dv19/4D/19/Objects-Forms.201-5391558.en.html) que aceptan el caracter comodín ("@") en el parámetro objeto.
    -   Por razones de seguridad, sólo el Administrador o Diseñador de la base de datos puede modificar este parámetro.

-   **Lenguaje del archivo de datos actual:** permite configurar el lenguaje utilizado para el procesamiento y la comparación de cadenas de caracteres. La elección de un idioma de comparación afecta a la ordenación y la búsqueda de textos, así como al cambio entre minúsculas y mayúsculas, pero no afecta a la traducción de etiquetas ni a los formatos de fecha, hora o moneda, que permanecen en el idioma del sistema. Por defecto, 4D utiliza el lenguaje del sistema.

    Así, un proyecto 4D puede funcionar en un lenguaje distinto del del sistema. Cuando se abre un proyecto, el motor de 4D detecta el lenguaje utilizado por el archivo de datos y lo pasa al lenguaje (modo intérpretado o compilado). Las comparaciones de texto, independientemente de si las efectúa el motor del proyecto o el lenguaje, se hacen en el mismo idioma.

    > Puede modificar esta configuración en las Preferencias de la aplicación (ver [Página general](../Preferences/general.md)). En este caso, la configuración se aplica a todas las nuevas bases creadas por 4D.

-   **Considerar sólo caracteres no alfanuméricos para las palabras claves**: modifica el algoritmo utilizado por 4D para identificar los separadores de palabras claves y crear así sus índices. Por defecto, cuando esta opción no está marcada, 4D utiliza un sofisticado algoritmo que tiene en cuenta las características lingüísticas.

    Este algoritmo es similar al que utilizan los programas de tratamiento de textos para determinar los límites al seleccionar una palabra sobre la que se hace doble clic. Para más información sobre este algoritmo, consulte la siguiente dirección: `http://userguide.icu-project.org/boundaryanalysis`.

    Cuando esta opción está marcada, 4D utiliza un algoritmo simplificado. En esta configuración, todo caracter no alfanumérico (es decir, que no sea una letra o un número) se considera un separador de palabras claves. Esta configuración cumple requisitos específicos asociados a determinados idiomas, como el japonés.

-   **Orden de clasificación apropiado para la búsqueda**: esta opción sólo aparece cuando se selecciona el idioma japonés. Modifica la interpretación de caracteres como la "Marca sonora prolongada Katakana-Hiragana" o "長音記号" o las "Marcas de iteración japonesa" como "ゝ" o "ゞ". Es probable que un hablante típico de japonés prefiera los resultados cuando el ajuste está activado.

#### Soporte de Mecab (versión japonesa)

En los sistemas japoneses, 4D soporta la librería *MeCab*, con un algoritmo de indexación de palabras claves especialmente adaptado al idioma japonés.

Este algoritmo se utiliza por defecto en las versiones japonesas de 4D. Si es necesario, puede desactivar el uso del algoritmo *MeCab* y utilizar la librería convencional *ICU*.

Para desactivar *MeCab*, sólo tiene que marcar la opción **Considerar solo caracteres no alfanuméricos para las palabras claves**:


![](../assets/en/settings/non-alphanumeric-chars.png)


## Página Memoria

Utilice los parámetros de esta pestaña para configurar la memoria caché de la base.

### Parámetros de la caché para la base

-   **Cálculo de la caché adaptable**: cuando esta opción está marcada, la gestión de la memoria caché es realizada dinámicamente por el sistema, respetando los límites que defina. Esto permite configurar una memoria caché de alto rendimiento adaptada a la mayoría de las configuraciones. A continuación, el tamaño de la memoria caché se calcula dinámicamente en función de los parámetros definidos. Los valores ofrecidos por defecto corresponden al uso estándar de 4D.

    -   **Memory to be reserved for other applications and for the system**: Portion of the RAM memory to reserve for the System and other applications. This value is increased for optimization when other applications are running on the same machine as 4D.
    -   **Percentage of available memory used for cache**: Percentage of the remaining memory allocated to the cache by default.\
      To obtain the size allocated by default to the cache, simply perform the following calculation: (Physical memory -- Physical memory to be reserved) X Percentage of the memory used for the cache. In the adaptive mode, the size of the memory cache varies dynamically depending on the needs of the application and the system. Puede definir los límites utilizando las siguientes dos opciones:
    -   **Minimum Size**: Minimum amount of memory that must be reserved for the cache. Este valor no puede ser inferior a 100 MB.
    -   **Maximum Size**: Maximum amount of memory that can be used by the cache. This value is virtually unlimited.\  
      Setting limits is particularly useful for databases that are distributed on machines for which you do not know the memory configuration a priori. In this case, the limits set let you guarantee a minimum performance in all cases. El siguiente diagrama ilustra este comportamiento:

    Example for calculating cache memory: *Physical memory to reserve = 256 MB Percentage of the available memory used for the cache = 50% Maximum size = 1 GB Minimum size = 128 MB*

    ![](../assets/en/settings/memory-maximum-size.png)

-   **Calculation of adaptive cache not checked**:  this mode, you set the size of the memory cache for the database yourself. 4D then displays an entry area that allows setting the memory cache to use as well as information related to the physical memory (RAM available on the machine), the current cache and cache after restart (taking your changes into account).

    The size of the memory cache that you enter will be reserved for the 4D database, regardless of the state of machine resources. This setting can be used in certain specific configurations, or when the database is designed to be used on dissimilar systems in terms of memory. En la mayoría de los casos, la caché adaptativa ofrece un mejor rendimiento.

-   **Escritura caché cada... Segundos/Minutos**: especifica el periodo de tiempo entre cada guardado automático de la caché de datos, es decir, su escritura en el disco. 4D guarda los datos colocados en la caché a intervalos regulares. Puede especificar todo intervalo de tiempo entre 1 segundo y 500 minutos. Por defecto, 4D guarda sus datos cada 20 segundos. The application also saves your data to disk each time you change to another environment or exit the application. You can also call the [FLUSH CACHE](https://doc.4d.com/4dv19R/help/command/en/page297.html) command to trigger the flush at any moment.

    When you anticipate heavy data entry, consider setting a short time interval between saves. In case of a power failure, you will only lose the data entered since the previous save (if the database is running without a log file).

    If there is a noticeable slowing down of the database each time the cache is flushed, you need to adjust the frequency. Esta lentitud significa que se está guardando una gran cantidad de registros. A shorter period between saves would therefore be more efficient since each save would involve fewer records and hence be faster.

    Por defecto, 4D muestra una pequeña ventana cuando se vacía la caché. Si no desea este recordatorio visual, puede deseleccionar la opción **Escritura de caché** en la [página Interfaz](./interface.md).