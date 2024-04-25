---
id: compact
title: Página compactado
sidebar_label: Página compactado
---

Esta página permite acceder a las funciones de compactación del archivos de datos.

## ¿Por qué compactar los archivos?

La compactación de archivos responde a dos tipos de necesidades:

- **Reducing size and optimization of files**: Files may contain unused spaces (“holes”). De hecho, cuando se eliminan los registros, el espacio que ocupaban anteriormente en el archivo queda vacío. 4D reutiliza estos espacios vacíos siempre que es posible, pero como el tamaño de los datos es variable, las sucesivas eliminaciones o modificaciones generarán inevitablemente espacio inutilizable para el programa. Lo mismo ocurre cuando se acaba de borrar una gran cantidad de datos: los espacios vacíos quedan sin asignar en el archivo.
  La relación entre el tamaño del archivo de datos y el espacio realmente utilizado para los datos es la tasa de ocupación de los datos. Una tasa demasiado baja puede provocar, además de un desperdicio de espacio, el deterioro del rendimiento de la base. La compactación puede utilizarse para reorganizar y optimizar el almacenamiento de los datos con el fin de eliminar los "huecos".
  El área "Información" resume los datos relativos a la fragmentación de los archivos y sugiere las operaciones a realizar. The [Data](information.md#data) tab on the “Information” page of the MSC indicates the fragmentation of the current data file.

- **Complete updating of data** by applying the current formatting set in the structure file. Esto es útil cuando los datos de una misma tabla se almacenan en diferentes formatos, por ejemplo, después de un cambio en la estructura de la base.

> La compactación sólo está disponible en el modo mantenimiento. Si intenta realizar esta operación en modo estándar, una caja de diálogo de advertencia le informará que la aplicación se cerrará y se reiniciará en modo mantenimiento. You can compact a data file that is not opened by the application (see [Compact records and indexes](#compact-records-and-indexes) below).

## Compactación estándar

Para iniciar directamente la compactación del archivo de datos, haga clic en el botón de compactación de la ventana del CSM.

![](../assets/en/MSC/MSC_compact.png)

> Como la compactación implica la duplicación del archivo original, el botón se desactiva cuando no hay espacio suficiente en el disco que contiene el archivo.

Esta operación compacta el archivo principal y los archivos de índice. 4D copies the original files and puts them in a folder named **Replaced Files (Compacting)**, which is created next to the original file. Si ha realizado varias operaciones de compactación, se crea una nueva carpeta cada vez. Se llamará "Archivos reemplazados (compactando)_1", "Archivos reemplazados (compactando)_2", y así sucesivamente. Puede modificar la carpeta donde se guardan los archivos originales utilizando el modo avanzado.

Una vez finalizada la operación, los archivos compactados sustituyen automáticamente a los originales. La aplicación es inmediatamente operacional sin ninguna otra manipulación.

> Cuando la base está encriptada, la compactación incluye pasos de encriptación y desencriptación y, por tanto, requiere la llave de encriptación de datos actual. Si no se ha suministrado una llave de datos válida, aparecerá una caja de diálogo solicitando la frase secreta o la llave de datos.

**Warning:** Each compacting operation involves the duplication of the original file which increases the size of the application folder. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tamaño de la aplicación no aumente excesivamente. Eliminar manualmente las copias del archivo original dentro del paquete puede ser útil para mantener el tamaño del paquete.

## Abrir archivo de historial

Una vez finalizada la compactación, 4D genera un archivo de historial en la carpeta Logs del proyecto. Este archivo permite ver todas las operaciones realizadas. Se crea en formato XML y se llama:  _ApplicationName\*\*_Compact_Log_yyyy-mm-dd hh-mm-ss.xml_" donde:

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.

## Modo avanzado

The Compact page contains an **Advanced>** button, which can be used to access an options page for compacting data file.

### Compactar los registros y los índices

The **Compact records and indexes** area displays the pathname of the current data file as well as a **[...]** button that can be used to specify another data file. Al hacer clic en este botón, se muestra una caja de diálogo estándar de ápertura de documentos para que pueda designar el archivo de datos a compactar. Debe seleccionar un archivo de datos que sea compatible con el archivo de estructura abierto. Una vez validada esta caja de diálogo, se indica en la ventana el nombre de la ruta del archivo a compactar.

The second **[...]** button can be used to specify another location for the original files to be saved before the compacting operation. Esta opción se puede utilizar más particularmente cuando se compactan archivos voluminosos mientras se utilizan diferentes discos.

### Forzar la actualización de los registros

Cuando esta opción está marcada, 4D reescribe cada registro de cada tabla durante la operación de compactación, según su descripción en la estructura. Si esta opción no está marcada, 4D sólo reorganiza el almacenamiento de datos en el disco. Esta opción es útil en los siguientes casos:

- Cuando los tipos de campo se modifican en la estructura de la aplicación después de haber introducido los datos. Por ejemplo, puede haber cambiado un campo Longint a un tipo Real. 4D permite incluso cambios entre dos tipos muy diferentes (con riesgo de pérdida de datos), por ejemplo, un campo Real puede cambiarse a Texto y viceversa.
  En este caso, 4D no convierte los datos ya introducidos de forma retroactiva; los datos se convierten sólo cuando se cargan los registros y luego se guardan. Esta opción obliga a convertir todos los datos.

- Cuando una opción de almacenamiento externo para datos de Texto, Imagen o BLOB ha sido cambiada después de haber introducido los datos. Esto puede ocurrir cuando se convierten las bases de datos desde una versión anterior a la v13. Como en el caso de la reescritura descrita anteriormente, 4D no convierte los datos ya introducidos con carácter retroactivo. Para ello, puede forzar la actualización de los registros para aplicar el nuevo modo de almacenamiento a los registros ya introducidos.

- Cuando se han eliminado las tablas o los campos. En este caso, la compactación con actualización de registros recupera el espacio de estos datos eliminados y reduce así el tamaño del archivo.

> Todos los índices se actualizan cuando se selecciona esta opción.

### Compactar la tabla de direcciones

(opción activa únicamente cuando la opción anterior está marcada)

Esta opción reconstruye completamente la tabla de direcciones para los registros durante la compactación. Esto optimiza el tamaño de la tabla de direcciones y se utiliza principalmente para las bases de datos en las que se crearon grandes volúmenes de datos y luego se borraron. En otros casos, la optimización no es un factor decisivo.

Note that this option substantially slows compacting and invalidates any sets saved using the `SAVE SET` command. Además, recomendamos especialmente que se borren los conjuntos guardados en este caso, ya que su uso puede dar lugar a selecciones de datos incorrectas.

:::note Notas

- La compactación tiene en cuenta los registros de las tablas que se han puesto en la Papelera. Si hay un gran número de registros en la Papelera, esto puede ser un factor adicional que puede ralentizar la operación.
- El uso de esta opción hace que la tabla de direcciones, y por tanto la base de datos, sea incompatible con el archivo de diario actual (si existe). Se guardará automáticamente y habrá que crear un nuevo archivo de historial la próxima vez que se inicie la aplicación.
- You can decide if the address table needs to be compacted by comparing the total number of records and the address table size in the [Information](information.md) page of the MSC.
- The [`TRUNCATE TABLE`](https://doc.4d.com/4dv19R/help/command/en/page1051.html) command automatically resets the address table for the specified table.

:::
