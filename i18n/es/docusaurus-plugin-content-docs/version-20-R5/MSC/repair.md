---
id: repair
title: Página Reparación
sidebar_label: Página Reparación
---

Esta página se utiliza para reparar el archivo de datos cuando se ha dañado. Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a [verification](verify.md).

**Warning:** Each repair operation involves the duplication of the original file, which increases the size of the application folder. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tamaño de la aplicación no aumente excesivamente. Eliminar manualmente las copias del archivo original dentro del paquete puede ser útil para minimizar el tamaño del paquete.

> La reparación sólo está disponible en modo mantenimiento. Si intenta realizar esta operación en modo estándar, un diálogo de advertencia le informará de que la aplicación se cerrará y se reiniciará en modo de mantenimiento.

> Cuando la base está encriptada, la reparación de datos incluye pasos de encriptación y desencriptación y, por tanto, requiere la llave de encriptación de datos actual. Si no se ha suministrado ya una llave de cifrado válida, aparecerá un cuadro de diálogo solicitando la frase de paso o la llave de cifrado (ver página Cifrado).

## Archivos

### Archivo de datos a reparar

Nombre de la ruta del archivo de datos actual. The **[...]** button can be used to specify another data file. Al hacer clic en este botón, se muestra un diálogo estándar de ápertura de documentos para que pueda designar el archivo de datos a reparar. If you perform a [standard repair](#standard-repair), you must select a data file that is compatible with the open project file. If you perform a [recover by record headers](#recover-by-record-headers) repair, you can select any data file. Una vez validado este diálogo, se indica en la ventana el nombre de la ruta del archivo a reparar.

### Carpeta de copia de seguridad de los archivos originales

Por defecto, el archivo de datos original se duplicará antes de la operación de reparación. Por defecto, el archivo de datos original se duplicará antes de la operación de reparación. The second **[...]** button can be used to specify another location for the original files to be saved before repairing begins. Esta opción se puede utilizar más particularmente cuando se reparan archivos voluminosos mientras se utilizan diferentes discos.

### Archivos reparados

4D crea un nuevo archivo de datos vacío en la ubicación del archivo original. 4D crea un nuevo archivo de datos vacío en la ubicación del archivo original. El archivo vacío se llena con los datos recuperados.

## Reparación estándar

Se debe elegir la reparación estándar cuando sólo están dañados unos pocos registros o índices (las tablas de direcciones están intactas). Los datos se compactan y se reparan. Este tipo de reparación sólo puede realizarse cuando los datos y el archivo de estructura coinciden.

Una vez finalizado el procedimiento de reparación, aparece la página "Reparación" del CSM. Un mensaje indica si la reparación fue exitosa. Si es así, puede abrir la aplicación inmediatamente.
![](../assets/en/MSC/MSC_RepairOK.png)

## Reparación por encabezados de registros

Utilice esta opción de reparación de bajo nivel sólo cuando el archivo de datos esté gravemente dañado y después de que todas las demás soluciones (restitución desde una copia de seguridad, reparación estándar) hayan resultado ineficaces.

Los registros 4D varían en tamaño, por lo que es necesario mantener la ubicación donde se almacenan en el disco en una tabla específica, llamada tabla de direcciones, para poder encontrarlos de nuevo. Por lo tanto, el programa accede a la dirección del registro por medio de un índice y de la tabla de direcciones. Si sólo están dañados los registros o los índices, la opción de reparación estándar suele ser suficiente para resolver el problema. Sin embargo, cuando la propia tabla de direcciones se ve afectada, requiere una recuperación más sofisticada, ya que será necesario reconstituirla. Para ello, el CSM utiliza el marcador situado en el encabezado de cada registro. Los marcadores se comparan con un resumen del registro, que incluye la mayor parte de su información, y a partir del cual es posible reconstruir la tabla de direcciones.

> If you have deselected the **Records definitively deleted** option in the properties of a table in the structure, performing a recovery by header markers may cause records that were previously deleted to reappear.
>
> La recuperación por encabezados no tiene en cuenta las restricciones de integridad. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. Una vez finalizado el análisis, los resultados aparecen en la siguiente ventana:

![](../assets/en/MSC/mscrepair2.png)

> Si todos los registros y todas las tablas han sido asignados, sólo se muestra el área principal.

El área "Registros encontrados en el archivo de datos" incluye dos tablas que resumen la información del análisis del archivo de datos.

- La primera tabla lista la información del análisis del archivo de datos. Cada línea muestra un grupo de registros recuperables en el archivo de datos:
  - The **Order** column indicates the recovery order for the group of records.
  - The **Count** column indicates the number of the records in the table.
  - The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. Los nombres de las tablas asignadas automáticamente aparecen en verde. Los grupos no asignados, es decir, las tablas a las que no se ha podido asociar ningún registro, aparecen en rojo.
  - The **Recover** column lets you indicate, for each group, whether you want to recover the records. Por defecto, esta opción está marcada para todos los grupos con registros que pueden asociarse a una tabla.

- La segunda tabla lista las tablas del archivo del proyecto.

### Asignación manual

Si varios grupos de registros no han podido ser asignados a las tablas debido a una tabla de direcciones dañada, puede asignarlos manualmente.
Para ello, seleccione primero un grupo de registros sin asignar en la primera tabla. El área "Contenido de los registros" muestra entonces una vista previa del contenido de los primeros registros del grupo para facilitar su asignación:

![](../assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. También puede asignar una tabla utilizando arrastrar y soltar.
El grupo de registros se asocia entonces a la tabla y se recupera en esta tabla. Los nombres de las tablas que se asignan manualmente aparecen en negro.
Use the **Ignore records** button to remove the association made manually between the table and the group of records.

## Abrir archivo de historial

Una vez finalizada la reparación, 4D genera un archivo de registro en la carpeta Logs del proyecto. Este archivo permite ver todas las operaciones realizadas. Se crea en formato XML y se llama: _ApplicationName\*\*_Repair_Log_yyyy-mm-dd hh-mm-ss.xml_" donde:

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.
