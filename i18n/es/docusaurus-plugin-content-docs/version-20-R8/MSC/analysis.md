---
id: analysis
title: Página Análisis de actividades
sidebar_label: Página Análisis de actividades
---

La página Análisis de actividades permite ver el contenido del archivo de registro actual. Esta función es útil para analizar el uso de una aplicación o detectar la(s) operación(es) que ha(n) causado errores o mal funcionamiento. En el caso de una aplicación en modo cliente-servidor, permite verificar las operaciones realizadas por cada máquina cliente.

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
  - Contexto de actualización: cambio de datos adicionales (por ejemplo, una llamada a `CHANGE CURRENT USER` o `SET USER ALIAS`).

- **Tabla**: tabla a la que pertenece el registro añadido/borrado/modificado o el BLOB.

- **Llave primaria/BLOB**: contenido de la llave primaria de cada registro (cuando la llave primaria se compone de varios campos, los valores se separan con punto y coma) o número de secuencia del BLOB implicado en la operación.

- **Proceso**: número interno del proceso en el que se realizó la operación. Este número interno corresponde al contexto de la operación.

- **Tamaño**: tamaño (en bytes) de los datos procesados por la operación.

- **Fecha y hora**: fecha y hora en que se realizó la operación.

- **Usuario sistema**: nombre del sistema del usuario que realizó la operación. En modo cliente-servidor, se muestra el nombre de la máquina del lado del cliente; en el modo monopuesto, se muestra el nombre del usuario de la sesión.

- **Usuario 4D**: nombre de usuario 4D del usuario que ha realizado la operación. Si se define un alias para el usuario, el alias se muestra en lugar del nombre de usuario 4D.

- **Valores**: valores de los campos del registro en caso de adición o de modificación. Los valores están separados por ";". Solo se muestran los valores representados en forma alfanumérica.\
  _**Nota:** si la base de datos está encriptada y no se ha proporcionado una llave de datos válida correspondiente al archivo de historial abierto, los valores encriptados no se muestran en esta columna._

- **Registros**: número del registro.

Haga clic en **Analizar** para actualizar el contenido del archivo de historial actual de la aplicación seleccionada (llamado por defecto nomdatos.journal). El botón Navegar puede utilizarse para seleccionar y abrir otro archivo de historial para la aplicación. El botón **Exportar...** puede utilizarse para exportar el contenido del archivo como texto.
