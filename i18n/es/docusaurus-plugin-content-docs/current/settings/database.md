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

Los archivos bloqueados pueden ser leídos pero su contenido no puede ser modificado. Por ejemplo, los archivos se bloquean cuando se almacenan en un soporte no regrabable (tipo DVD) o cuando se copian desde este tipo de soporte. 4D puede trabajar de forma transparente con archivos de datos bloqueados, lo que permite, en particular, la utilización de proyectos guardados en DVD. Sin embargo, con esta operación se corre el riesgo de utilizar inadvertidamente un fichero de datos bloqueado en el que no se guardarán las modificaciones. Esta es la razón por la que, por defecto, 4D no permite abrir bases de datos con un archivo de datos bloqueado.

### Ubicación de carpeta temporal

Esta área le permite cambiar la ubicación de los archivos temporales creados mientras 4D está funcionando. La carpeta de archivos temporales es utilizada por la aplicación, cuando es necesario, para guardar temporalmente en disco los datos en memoria.

La ubicación actual de esta carpeta se muestra en el área "Actual:". Puede hacer clic en esta área para mostrar el nombre de la ruta en forma de lista desplegable:

![](../assets/en/settings/temporary-file-location.png)

Se ofrecen tres opciones de ubicación:

- **Sistema**: cuando se selecciona esta opción, los archivos temporales 4D se crean en una carpeta situada en la ubicación especificada por Windows y/o macOS. Puede averiguar la ubicación actual definida por su sistema utilizando el comando [`Temporary folder`](https://doc.4d.com/4dv19R/help/command/en/page486.html) 4D. Los archivos se colocan en una subcarpeta cuyo nombre está formado por el nombre de la base y un identificador único.
- **Carpeta de archivos de datos** (opción por defecto): cuando se selecciona esta opción, los archivos temporales 4D se crean en una carpeta llamada "archivos temporales" situada en el mismo nivel que el archivo de datos de la base de datos.
- **Definido por el usuario**: esta opción se utiliza para definir una ubicación personalizada. Si se modifica la opción de ubicación, será necesario reiniciar la base para que se tenga en cuenta la nueva opción. 4D verifica si se puede acceder a la carpeta seleccionada mediante escritura. Si no es así, la aplicación prueba otras opciones hasta encontrar una carpeta válida.

> Esta opción se almacena en las "propiedades adicionales" de la estructura, accesibles durante la exportación XML de la definición de estructura (ver [Exportar e importar las definiciones de estructura](https://doc.4d.com/4Dv19/4D/19/Exporting-and-importing-structure-definitions.300-5416829.en.html)).

### Comparación de texto

> Si cambia una de estas opciones, tiene que salir y volver a abrir la base para que el cambio surta efecto. Una vez reabierta la base, se vuelven a indexar automáticamente todos sus índices.

- **Considere @ como comodín sólo cuando se encuentre al principio o al final de patrones de texto**: permite definir como se interpretará la arroba "@" cuando se utilice en una búsqueda o en una comparación de cadenas de caracteres, cuando se encuentre en
  Cuando esta opción no está marcada (valor por defecto), la arroba se utiliza como carácter comodín, es decir, sustituye a cualquier caracter (ver [Caracter comodín (@)](https://doc.4d.com/4Dv19/4D/19/Query-editor.300-5416813.en.html#463876)).

  Cuando la opción está marcada, la arroba se considera un caracter simple si se encuentra dentro de una palabra. Esta posibilidad es especialmente útil cuando se buscan direcciones de correo electrónico, donde el signo @ se utiliza internamente. Esta opción influye en las búsquedas, ordenaciones, comparaciones de cadenas de caracteres, así como en los datos almacenados en las tablas y los que se encuentran en memoria, como los arrays. Los campos y variables de tipo alfa (indexados o no) y texto se ven afectados por como se interpreta el caracter @ en las búsquedas y ordenaciones.

  **Notas:**

  - Para las búsquedas, si el criterio de búsqueda empieza o acaba por @, el caracter "@" se tratará como un comodín. Sólo si el carácter "@" se coloca en medio de una palabra (por ejemplo: bill@cgi.com) 4D lo trata de forma diferente.
  - Esta opción también puede influir en el comportamiento de los comandos del tema [Objetos (Formularios)](https://doc.4d.com/4Dv19/4D/19/Objects-Forms.201-5391558.en.html) que aceptan el caracter comodín ("@") en el parámetro objeto.
  - Por razones de seguridad, sólo el Administrador o Diseñador de la base de datos puede modificar este parámetro.

- **Lenguaje del archivo de datos actual:** permite configurar el lenguaje utilizado para el procesamiento y la comparación de cadenas de caracteres. La elección de un idioma de comparación afecta a la ordenación y la búsqueda de textos, así como al cambio entre minúsculas y mayúsculas, pero no afecta a la traducción de etiquetas ni a los formatos de fecha, hora o moneda, que permanecen en el idioma del sistema. Por defecto, 4D utiliza el lenguaje del sistema.

  Así, un proyecto 4D puede funcionar en un lenguaje distinto del del sistema. Cuando se abre un proyecto, el motor de 4D detecta el lenguaje utilizado por el archivo de datos y lo pasa al lenguaje (modo intérpretado o compilado). Las comparaciones de texto, independientemente de si las efectúa el motor del proyecto o el lenguaje, se hacen en el mismo idioma.

  > Puede modificar esta configuración en las Preferencias de la aplicación (ver [Página general](../Preferences/general.md)). En este caso, la configuración se aplica a todas las nuevas bases creadas por 4D.

- **Considerar sólo caracteres no alfanuméricos para las palabras claves**: modifica el algoritmo utilizado por 4D para identificar los separadores de palabras claves y crear así sus índices. Por defecto, cuando esta opción no está marcada, 4D utiliza un sofisticado algoritmo que tiene en cuenta las características lingüísticas.

  Este algoritmo es similar al que utilizan los programas de tratamiento de textos para determinar los límites al seleccionar una palabra sobre la que se hace doble clic. Para más información sobre este algoritmo, consulte la siguiente dirección: `http://userguide.icu-project.org/boundaryanalysis`.

  Cuando esta opción está marcada, 4D utiliza un algoritmo simplificado. En esta configuración, todo caracter no alfanumérico (es decir, que no sea una letra o un número) se considera un separador de palabras claves. Esta configuración cumple requisitos específicos asociados a determinados idiomas, como el japonés.

- **Orden de clasificación apropiado para la búsqueda**: esta opción sólo aparece cuando se selecciona el idioma japonés. Modifica la interpretación de caracteres como la "Marca sonora prolongada Katakana-Hiragana" o "長音記号" o las "Marcas de iteración japonesa" como "ゝ" o "ゞ". Es probable que un hablante típico de japonés prefiera los resultados cuando el ajuste está activado.

#### Soporte de Mecab (versión japonesa)

En los sistemas japoneses, 4D soporta la librería _MeCab_, con un algoritmo de indexación de palabras claves especialmente adaptado al idioma japonés.

Este algoritmo se utiliza por defecto en las versiones japonesas de 4D. Si es necesario, puede desactivar el uso del algoritmo _MeCab_ y utilizar la librería convencional _ICU_.

Para desactivar _MeCab_, sólo tiene que marcar la opción **Considerar solo caracteres no alfanuméricos para las palabras claves**:

![](../assets/en/settings/non-alphanumeric-chars.png)

## Página Memoria

Utilice los parámetros de esta pestaña para configurar la memoria caché de la base.

### Parámetros de la caché para la base

- **Cálculo de la caché adaptable**: cuando esta opción está marcada, la gestión de la memoria caché es realizada dinámicamente por el sistema, respetando los límites que defina. Esto permite configurar una memoria caché de alto rendimiento adaptada a la mayoría de las configuraciones. A continuación, el tamaño de la memoria caché se calcula dinámicamente en función de los parámetros definidos. Los valores ofrecidos por defecto corresponden al uso estándar de 4D.

  - **Memoria a reservar para el sistema y las otras aplicaciones**: parte de la memoria RAM a reservar para el Sistema y las otras aplicaciones. Este valor aumenta para la optimización cuando otras aplicaciones se ejecutan en la misma máquina que 4D.
  - **Porcentaje de memoria disponible utilizada para la caché**: porcentaje de la memoria restante asignada por defecto a la caché.\
    Para obtener el tamaño asignado por defecto a la caché, basta con realizar el siguiente cálculo: (Memoria física -- Memoria física a reservar) X Porcentaje de la memoria utilizada para la caché. En el modo adaptativo, el tamaño de la memoria caché varía dinámicamente en función de las necesidades de la aplicación y del sistema. Puede definir los límites utilizando las siguientes dos opciones:
  - **Tamaño mínimo**: cantidad mínima de memoria que debe reservarse para la caché. Este valor no puede ser inferior a 100 MB.
  - **Tamaño máximo**: cantidad máxima de memoria que puede utilizar la caché. Este valor es prácticamente ilimitado.\\
    Definir límites es especialmente útil para bases distribuidas en máquinas de las que no se conoce a priori la configuración de memoria. En este caso, los límites definidos permiten garantizar un rendimiento mínimo en todos los casos. El siguiente diagrama ilustra este comportamiento:

  Ejemplo de cálculo de la memoria caché:
  _Memoria física a reservar = 256 MB
  Porcentaje de la memoria disponible utilizado para la caché = 50%
  Tamaño máximo = 1 GB Tamaño mínimo = 128 MB_

  ![](../assets/en/settings/memory-maximum-size.png)

- **Cálculo de caché adaptativa no marcado**: en este modo, usted mismo define el tamaño de la memoria caché para la base. 4D muestra entonces un área de entrada que permite configurar la memoria caché a utilizar, así como información relacionada con la memoria física (RAM disponible en la máquina), la caché actual y la caché tras el reinicio (teniendo en cuenta sus cambios).

  El tamaño de la memoria caché que introduzca se reservará para la base 4D, independientemente del estado de los recursos de la máquina. Esta configuración puede utilizarse en determinadas configuraciones específicas, o cuando la base está diseñada para utilizarse en sistemas disímiles en cuanto a memoria. En la mayoría de los casos, la caché adaptativa ofrece un mejor rendimiento.

- **Escritura caché cada... Segundos/Minutos**: especifica el periodo de tiempo entre cada guardado automático de la caché de datos, es decir, su escritura en el disco.
  4D guarda los datos colocados en la caché a intervalos regulares. Puede especificar todo intervalo de tiempo entre 1 segundo y 500 minutos. Por defecto, 4D guarda sus datos cada 20 segundos. La aplicación también guarda sus datos en el disco cada vez que cambia a otro entorno o sale de la aplicación. También puede llamar al comando [FLUSH CACHE](https://doc.4d.com/4dv19R/help/command/en/page297.html) para activar el vaciado en cualquier momento.

  Cuando prevea una entrada de muchos datos, considere la posibilidad de establecer un intervalo de tiempo breve entre guardados. En caso de corte del suministro eléctrico, sólo perderá los datos introducidos desde el último almacenamiento (si la base de datos funciona sin archivo de historial).

  Si la base de datos se ralentiza notablemente cada vez que se vacía la caché, deberá ajustar la frecuencia. Esta lentitud significa que se está guardando una gran cantidad de registros. Por lo tanto, un periodo más corto entre guardados sería más eficaz, ya que cada guardado implicaría menos registros y, por lo tanto, sería más rápido.

  Por defecto, 4D muestra una pequeña ventana cuando se vacía la caché. Si no desea este recordatorio visual, puede deseleccionar la opción **Escritura de caché** en la [página Interfaz](./interface.md).
