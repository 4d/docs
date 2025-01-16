---
id: compact
title: Página compactado
sidebar_label: Página compactado
---

Esta página permite acceder a las funciones de compactación del archivos de datos.

## ¿Por qué compactar los archivos?

La compactación de archivos responde a dos tipos de necesidades:

- **Reducción del tamaño y optimización de los archivos**: los archivos pueden contener espacios no utilizados ("huecos"). De hecho, cuando se eliminan los registros, el espacio que ocupaban anteriormente en el archivo queda vacío. 4D reutiliza estos espacios vacíos siempre que es posible, pero como el tamaño de los datos es variable, las sucesivas eliminaciones o modificaciones generarán inevitablemente espacio inutilizable para el programa. Lo mismo ocurre cuando se acaba de borrar una gran cantidad de datos: los espacios vacíos quedan sin asignar en el archivo.
  La relación entre el tamaño del archivo de datos y el espacio realmente utilizado para los datos es la tasa de ocupación de los datos. Una tasa demasiado baja puede provocar, además de un desperdicio de espacio, el deterioro del rendimiento de la base. La compactación puede utilizarse para reorganizar y optimizar el almacenamiento de los datos con el fin de eliminar los "huecos".
  El área "Información" resume los datos relativos a la fragmentación de los archivos y sugiere las operaciones a realizar. La pestaña [Datos](information.md#data) de la página "Información" del CSM indica la fragmentación del archivo de datos actual.

- **Actualización completa de los datos** aplicando el formato actual definido en el archivo de estructura. Esto es útil cuando los datos de una misma tabla se almacenan en diferentes formatos, por ejemplo, después de un cambio en la estructura de la base.

> La compactación sólo está disponible en el modo mantenimiento. Si intenta realizar esta operación en modo estándar, una caja de diálogo de advertencia le informará que la aplicación se cerrará y se reiniciará en modo mantenimiento. Puede compactar un archivo de datos que no esté abierto por la aplicación (ver [Compactar los registros y los índices](#compact-records-and-indexes) abajo).

## Compactación estándar

Para iniciar directamente la compactación del archivo de datos, haga clic en el botón de compactación de la ventana del CSM.

![](../assets/en/MSC/MSC_compact.png)

> Como la compactación implica la duplicación del archivo original, el botón se desactiva cuando no hay espacio suficiente en el disco que contiene el archivo.

Esta operación compacta el archivo principal y los archivos de índice. 4D copia los archivos originales y los coloca en una carpeta llamada **Archivos Reemplazados (Compactando)**, que se crea junto al archivo original. Si ha realizado varias operaciones de compactación, se crea una nueva carpeta cada vez. Se llamará "Archivos reemplazados (compactando)_1", "Archivos reemplazados (compactando)_2", y así sucesivamente. Puede modificar la carpeta donde se guardan los archivos originales utilizando el modo avanzado.

Una vez finalizada la operación, los archivos compactados sustituyen automáticamente a los originales. La aplicación es inmediatamente operacional sin ninguna otra manipulación.

> Cuando la base está encriptada, la compactación incluye pasos de encriptación y desencriptación y, por tanto, requiere la llave de encriptación de datos actual. Si no se ha suministrado una llave de datos válida, aparecerá una caja de diálogo solicitando la frase secreta o la llave de datos.

**Atención:** cada operación de compactación implica la duplicación del archivo original, lo que aumenta el tamaño de la carpeta de la aplicación. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tamaño de la aplicación no aumente excesivamente. Eliminar manualmente las copias del archivo original dentro del paquete puede ser útil para mantener el tamaño del paquete.

## Abrir archivo de historial

Una vez finalizada la compactación, 4D genera un archivo de historial en la carpeta Logs del proyecto. Este archivo permite ver todas las operaciones realizadas. Se crea en formato XML y se llama:  _ApplicationName\*\*_Compact_Log_yyyy-mm-dd hh-mm-ss.xml_" donde:

- _ApplicationName_ es el nombre del archivo del proyecto sin ninguna extensión, por ejemplo "Facturas",
- _yyyy-mm-dd hh-mm-ss_ es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inició la operación de mantenimiento, por ejemplo "2019-02-11 15-20-45".

Al presionar el botón **Abrir archivo de historial**, 4D muestra el archivo de historial más reciente en el navegador por defecto de la máquina.

## Modo avanzado

La página Compactar contiene un botón **Avanzado>**, con el que se puede acceder a una página de opciones para compactar el archivo de datos.

### Compactar los registros y los índices

El área **Compactar los registros y los índices** muestra el nombre de la ruta del archivo de datos actual, así como un botón **[...]** que puede utilizarse para especificar otro archivo de datos. Al hacer clic en este botón, se muestra una caja de diálogo estándar de ápertura de documentos para que pueda designar el archivo de datos a compactar. Debe seleccionar un archivo de datos que sea compatible con el archivo de estructura abierto. Una vez validada esta caja de diálogo, se indica en la ventana el nombre de la ruta del archivo a compactar.

El segundo botón **[...]** se puede utilizar para especificar otra ubicación para guardar los archivos originales antes de la operación de compactación. Esta opción se puede utilizar más particularmente cuando se compactan archivos voluminosos mientras se utilizan diferentes discos.

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

Tenga en cuenta que esta opción ralentiza sustancialmente la compactación e invalida cualquier conjunto guardado mediante el comando `SAVE SET`. Además, recomendamos especialmente que se borren los conjuntos guardados en este caso, ya que su uso puede dar lugar a selecciones de datos incorrectas.

:::note Notas

- La compactación tiene en cuenta los registros de las tablas que se han puesto en la Papelera. Si hay un gran número de registros en la Papelera, esto puede ser un factor adicional que puede ralentizar la operación.
- El uso de esta opción hace que la tabla de direcciones, y por tanto la base de datos, sea incompatible con el archivo de diario actual (si existe). Se guardará automáticamente y habrá que crear un nuevo archivo de historial la próxima vez que se inicie la aplicación.
- Puede decidir si la tabla de direcciones necesita ser compactada comparando el número total de registros y el tamaño de la tabla de direcciones en la página [Información](information.md) del CSM.
- El comando [`TRUNCATE TABLE`](https://doc.4d.com/4dv19R/help/command/en/page1051.html) restablece automáticamente la tabla de direcciones para la tabla especificada.

:::
