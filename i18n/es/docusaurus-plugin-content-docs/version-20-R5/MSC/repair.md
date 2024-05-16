---
id: repair
title: Página Reparación
sidebar_label: Página Reparación
---

Esta página se utiliza para reparar el archivo de datos cuando se ha dañado. Generalmente, sólo utilizará estas funciones bajo la supervisión de los equipos técnicos de 4D, cuando se hayan detectado anomalías al abrir la aplicación o tras una [verificación](verify.md).

**Atención:** cada operación de reparación implica la duplicación del archivo original, lo que aumenta el tamaño de la carpeta de la aplicación. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tamaño de la aplicación no aumente excesivamente. Eliminar manualmente las copias del archivo original dentro del paquete puede ser útil para minimizar el tamaño del paquete.

> La reparación sólo está disponible en modo mantenimiento. Si intenta realizar esta operación en modo estándar, un diálogo de advertencia le informará de que la aplicación se cerrará y se reiniciará en modo de mantenimiento.

> Cuando la base está encriptada, la reparación de datos incluye pasos de encriptación y desencriptación y, por tanto, requiere la llave de encriptación de datos actual. Si no se ha suministrado ya una llave de cifrado válida, aparecerá un cuadro de diálogo solicitando la frase de paso o la llave de cifrado (ver página Cifrado).

## Archivos

### Archivo de datos a reparar

Nombre de la ruta del archivo de datos actual. El botón **[...]** puede utilizarse para especificar otro archivo de datos. Al hacer clic en este botón, se muestra un diálogo estándar de ápertura de documentos para que pueda designar el archivo de datos a reparar. Si realiza una [reparación estándar](#standard-repair), debe seleccionar un archivo de datos que sea compatible con el archivo proyecto abierto. Si realiza una reparación [reparación por encabezados de registros](#recover-by-record-headers), puede seleccionar todo archivo de datos. Una vez validado este diálogo, se indica en la ventana el nombre de la ruta del archivo a reparar.

### Carpeta de copia de seguridad de los archivos originales

Por defecto, el archivo de datos original se duplicará antes de la operación de reparación. Por defecto, el archivo de datos original se duplicará antes de la operación de reparación. El segundo botón **[...]** se puede utilizar para especificar otra ubicación para guardar los archivos originales antes de iniciar la reparación. Esta opción se puede utilizar más particularmente cuando se reparan archivos voluminosos mientras se utilizan diferentes discos.

### Archivos reparados

4D crea un nuevo archivo de datos vacío en la ubicación del archivo original. 4D crea un nuevo archivo de datos vacío en la ubicación del archivo original. El archivo vacío se llena con los datos recuperados.

## Reparación estándar

Se debe elegir la reparación estándar cuando sólo están dañados unos pocos registros o índices (las tablas de direcciones están intactas). Los datos se compactan y se reparan. Este tipo de reparación sólo puede realizarse cuando los datos y el archivo de estructura coinciden.

Una vez finalizado el procedimiento de reparación, aparece la página "Reparación" del CSM. Un mensaje indica si la reparación fue exitosa. Si es así, puede abrir la aplicación inmediatamente.
![](../assets/en/MSC/MSC_RepairOK.png)

## Reparación por encabezados de registros

Utilice esta opción de reparación de bajo nivel sólo cuando el archivo de datos esté gravemente dañado y después de que todas las demás soluciones (restitución desde una copia de seguridad, reparación estándar) hayan resultado ineficaces.

Los registros 4D varían en tamaño, por lo que es necesario mantener la ubicación donde se almacenan en el disco en una tabla específica, llamada tabla de direcciones, para poder encontrarlos de nuevo. Por lo tanto, el programa accede a la dirección del registro por medio de un índice y de la tabla de direcciones. Si sólo están dañados los registros o los índices, la opción de reparación estándar suele ser suficiente para resolver el problema. Sin embargo, cuando la propia tabla de direcciones se ve afectada, requiere una recuperación más sofisticada, ya que será necesario reconstituirla. Para ello, el CSM utiliza el marcador situado en el encabezado de cada registro. Los marcadores se comparan con un resumen del registro, que incluye la mayor parte de su información, y a partir del cual es posible reconstruir la tabla de direcciones.

> Si ha desmarcado la opción **Registros eliminados definitivamente** en las propiedades de una tabla en la estructura, la reparación por marcadores de encabezados puede hacer que vuelvan a aparecer los registros que se eliminaron anteriormente.
>
> La recuperación por encabezados no tiene en cuenta las restricciones de integridad. Más concretamente, tras esta operación puede obtener valores duplicados con campos únicos o valores NULL con campos declarados **Nunca Null**.

Al hacer clic en **Escanear y reparar...**, 4D realiza un análisis completo del archivo de datos. Una vez finalizado el análisis, los resultados aparecen en la siguiente ventana:

![](../assets/en/MSC/mscrepair2.png)

> Si todos los registros y todas las tablas han sido asignados, sólo se muestra el área principal.

El área "Registros encontrados en el archivo de datos" incluye dos tablas que resumen la información del análisis del archivo de datos.

- La primera tabla lista la información del análisis del archivo de datos. Cada línea muestra un grupo de registros recuperables en el archivo de datos:
  - La columna **Orden** indica el orden de recuperación del grupo de registros.
  - La columna **Número** indica el número de los registros de la tabla.
  - La columna **Tabla de destino** indica los nombres de las tablas que se asignaron automáticamente a los grupos de registros identificados. Los nombres de las tablas asignadas automáticamente aparecen en verde. Los grupos no asignados, es decir, las tablas a las que no se ha podido asociar ningún registro, aparecen en rojo.
  - La columna **Recuperar** le permite indicar, para cada grupo, si quiere recuperar los registros. Por defecto, esta opción está marcada para todos los grupos con registros que pueden asociarse a una tabla.

- La segunda tabla lista las tablas del archivo del proyecto.

### Asignación manual

Si varios grupos de registros no han podido ser asignados a las tablas debido a una tabla de direcciones dañada, puede asignarlos manualmente.
Para ello, seleccione primero un grupo de registros sin asignar en la primera tabla. El área "Contenido de los registros" muestra entonces una vista previa del contenido de los primeros registros del grupo para facilitar su asignación:

![](../assets/en/MSC/mscrepair3.png)

A continuación, seleccione la tabla que desea asignar al grupo en la tabla "Tablas no asignadas" y haga clic en el botón **Identificar tabla**. También puede asignar una tabla utilizando arrastrar y soltar.
El grupo de registros se asocia entonces a la tabla y se recupera en esta tabla. Los nombres de las tablas que se asignan manualmente aparecen en negro.
Utilice el botón **Ignorar registros** para eliminar la asociación realizada manualmente entre la tabla y el grupo de registros.

## Abrir archivo de historial

Una vez finalizada la reparación, 4D genera un archivo de registro en la carpeta Logs del proyecto. Este archivo permite ver todas las operaciones realizadas. Se crea en formato XML y se llama: _ApplicationName\*\*_Repair_Log_yyyy-mm-dd hh-mm-ss.xml_" donde:

- _ApplicationName_ es el nombre del archivo del proyecto sin ninguna extensión, por ejemplo "Facturas",
- _yyyy-mm-dd hh-mm-ss_ es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inició la operación de mantenimiento, por ejemplo "2019-02-11 15-20-45".

Al presionar el botón **Abrir archivo de historial**, 4D muestra el archivo de historial más reciente en el navegador por defecto de la máquina.
