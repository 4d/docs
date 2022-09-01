---
id: analysis
title: Página Análisis de actividades
sidebar_label: Página Análisis de actividades
---

La página Análisis de actividades permite ver el contenido del archivo de registro actual. This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine.
> También es posible revertir las operaciones realizadas sobre los datos de la base. Para más información, consulte [Página de retroceso](rollback.md).

![](../assets/en/MSC/MSC_analysis.png)

Cada operación registrada en el archivo de registro aparece como una línea. Las columnas ofrecen información variada sobre la operación. Puede reorganizar las columnas como desee haciendo clic en sus encabezados.

Esta información permite identificar la fuente y el contexto de cada operación:

- **Operación**: número de secuencia de la operación en el archivo de historial.
- **Acción**: tipo de operación realizada sobre los datos. Esta columna puede contener una de las siguientes operaciones:
  - Apertura del archivo de datos: apertura de un archivo de datos.
  - Cierre del archivo de datos: cierre de un archivo de datos abierto.
  - Creación de un contexto: creación de un proceso que especifica un contexto de ejecución.
  - Cierre de un contexto: cierre de un proceso.
  - Adición: creación y almacenamiento de un registro.
  - Añadir un BLOB: almacenamiento de un BLOB en un campo BLOB.
  - Eliminación: eliminación de un registro.
  - Modificación: modificación de un registro.
  - Inicio de la transacción: transacción iniciada.
  - Validación de transacción: transacción validada.
  - Cancelación de transacción: transacción cancelada.
  - Update context: Change in extra data (e.g. a call to `CHANGE CURRENT USER` or `SET USER ALIAS`).

- **Tabla**: tabla a la que pertenece el registro añadido/borrado/modificado o el BLOB.
- **Llave primaria/BLOB**: contenido de la llave primaria de cada registro (cuando la llave primaria se compone de varios campos, los valores se separan con punto y coma) o número de secuencia del BLOB implicado en la operación.
- **Proceso**: número interno del proceso en el que se realizó la operación. Este número interno corresponde al contexto de la operación.
- **Tamaño**: tamaño (en bytes) de los datos procesados por la operación.
- **Fecha y hora**: fecha y hora en que se realizó la operación.
- **System User**: System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed.
- **4D User**: 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name.
- **Valores**: valores de los campos del registro en caso de adición o de modificación. Los valores están separados por ";". Sólo se muestran los valores representados en forma alfanumérica.  
  ***Nota:** si la base está encriptada y no se ha ofrecido una llave de datos válida correspondiente al archivo de historial abierto, los valores encriptados no se muestran en esta columna.*
- **Registros**: número del registro.

Click on **Analyze** to update the contents of the current log file of the selected application (named by default dataname.journal). The Browse button can be used to select and open another log file for the application. El botón **Exportar...** puede utilizarse para exportar el contenido del archivo como texto.
