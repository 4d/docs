---
id: compact-data-file
title: Compact data file
slug: /commands/compact-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Compact data file.Syntax-->**Compact data file** ( *rutaEstructura* ; *rutaDatos* {; *carpetaArchivo* {; *opcion* {; *metodo*}}} ) : Text<!-- END REF-->
<!--REF #_command_.Compact data file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaEstructura | Text | &#8594;  | Ruta de acceso al archivo de estructura |
| rutaDatos | Text | &#8594;  | Ruta de acceso al archivo de datos |
| carpetaArchivo | Text | &#8594;  | Ruta de acceso a la carpeta donde se colocará el archivo de datos original |
| opcion | Integer | &#8594;  | Opciones de compactación |
| metodo | Text | &#8594;  | Nombre del método 4D de retrollamada |
| Resultado | Text | &#8592; | Ruta de acceso completa de la carpeta que contiene el archivo de datos original |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Compact data file.Summary-->El comando **Compact data file** compacta el archivo de datos designado por el parámetro *rutaDatos* asociado al archivo de estructura *rutaEstructura*.<!-- END REF--> Para mayor información sobre la compactación, consulte el Manual de Diseño.

Para asegurar la continuidad del funcionamiento de la base, el nuevo archivo de datos compactado reemplaza automáticamente al archivo original. Por seguridad, el archivo original no se modifica y se mueve a una carpeta especial llamada “Replaced files (compacting) YYYYMM-DD HH-MM-SS” donde YYYY-MM-DD HH-MM-SS representa la fecha y hora del backup. Por ejemplo: “Replaced files (compacting) 2007-09-27 15-20-35”.

El comando devuelve la ruta de acceso completa de la carpeta efectivamente creada para almacenar el archivo de datos original. Este comando sólo puede ser ejecutado desde 4D (modo local) o 4D Server (procedimiento almacenado). El archivo de datos a compactar debe corresponder al archivo de estructura designado por *rutaEstructura*. Además, el archivo de datos no debe abrirse durante la ejecución del comando; de lo contrario se genera un error.

Si se produce un error durante el proceso de compactación, los archivos originales se conservan en su ubicación inicial. Si un archivo de índice (.4DIndx file) está asociado con el archivo de datos, también se compacta. Como para el archivo de datos, el archivo original se guarda y la nueva versión reemplaza la anterior.

* En el parámetro *rutaEstructura*, pase el nombre de la ruta completa del archivo de estructura asociado con el archivo de datos que quiere compactar. Esta información es necesaria para el proceso de compactación. La ruta de acceso debe expresarse en la sintaxis del sistema operativo. Igualmente puede pasar una cadena vacía; en este caso, aparece la caja de diálogo estándar de apertura de archivos de manera que pueda designar el archivo de estructura a utilizar.
* En el parámetro *rutaDatos*, puede pasar una cadena vacía, un nombre de archivo o una ruta completa de acceso, expresada en la sintaxis del sistema operativo. Si pasa una cadena vacía, aparece la caja de diálogo de apertura de archivos estándar de manera que el usuario pueda designar el archivo de datos a compactar. Este archivo debe corresponder al archivo de estructura definido en el parámetro *rutaEstructura*. Si pasa únicamente un nombre de archivo de datos, 4D lo buscará al mismo nivel que el archivo de estructura.
* El parámetro opcional *carpetaArchivo* puede ser utilizado para especificar la ubicación de la carpeta “Replaced files (compacting) FechaHora” destinada a recibir las versiones originales de los archivos de datos así como los eventuales archivos del índice.  
El comando devuelve la ruta de acceso completa de la carpeta creada efectivamente.  
\- Si omite este parámetro, los archivos originales son colocados automáticamente en una carpeta “Replaced files (compacting) FechaHora” que se crea junto al archivo de estructura.  
\- Si pasa una cadena vacía, aparece una caja de diálogo estándar de apertura de archivos permitiéndole al usuario designar la ubicación de la carpeta a crear.  
\- Si pasa una ruta de acceso (expresada en la sintaxis del sistema operativo), el comando creará la carpeta “Replaced files (compacting) FechaHora” a esta ubicación.
* El parámetro opcional *opciones* se utiliza para definir diferentes opciones de compactación. Para hacerlo, utilice las siguientes constantes, del tema “*Mantenimiento archivo de datos*”. Puede pasar varias opciones combinándolas:  

| Constante               | Tipo         | Valor  | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  
| ----------------------- | ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |  
| Compact address table   | Entero largo | 131072 | Fuerza la reescritura de la tabla de direcciones de los registros (ralentiza la compactación). Note que en este caso, los números de registro se reescriben. Si sólo pasa esta opción, 4D activa automáticamente la opción "Actualizar registros".                                                                                                                                                                                                                                               |  
| Create process          | Entero largo | 32768  | Cuando se pasa esta opción, la compactación será asincrónica y deberá administrar los resultados utilizando el método de retrollamada (ver a continuación). 4D no mostrará la barra de progreso (es posible hacerlo vía el método de retrollamada). La variable sistema OK toma el valor 1 si el proceso se ha lanzado correctamente y 0 en todos los otros casos. Cuando no se pasa esta opción, la variable OK toma el valor 1 si la compactación se realiza correctamente, de lo contrario 0. |  
| Do not create log file  | Entero largo | 16384  | Por lo general, este comando crea un archivo de historial en formato XML (consulte el final de la descripción del comando). Con esta opción, no se creará un archivo de historial.                                                                                                                                                                                                                                                                                                               |  
| Timestamp log file name | Entero largo | 262144 | Cuando esta opción se pasa, el nombre del archivo de historial generado contendrá la fecha y hora de su creación; como resultado, no reemplazará cualquier archivo de historial generado anteriormente. Por defecto, si no se pasa esta opción, los nombres de archivos de historial no son marcados con la fecha y hora y cada nuevo archivo generado sustituye al anterior.                                                                                                                    |  
| Update records          | Entero largo | 65536  | Fuerza la rescritura de todos los registros en función de la definición actual de los campos en la estructura                                                                                                                                                                                                                                                                                                                                                                                    |
* El parámetro *metodo* se utiliza para designar un método de retrollamada que será llamado regularmente durante la compactación si se pasa la opción Create process. De lo contrario, el método de retrollamada nunca será llamado. Para mayor información sobre este método, por favor consulte la descripción del comando [VERIFY DATA FILE](verify-data-file.md).

Por defecto, el comando **Compact data file** crea un archivo de historial en formato XML (si no ha pasado la opción Do not create log file, ver el parámetro *opciones*). Su nombre está basado en el archivo de estructura de la base actual y está ubicado en la carpeta **Logs** de esta base. Por ejemplo, para un archivo de estructura llamado “myDB.4db,” el archivo de historial será llamado “myDB\_Compact\_Log.xml.”

Si ha pasado la opción Timestamp log file name, el nombre del archivo de historial incluye la fecha y la hora de su creación en la forma "AAAA-MM-DD HH-MM-SS", lo que nos da, por ejemplo:  
“myDB\_Compact\_Log\_2015-09-27 15-20-35.xml”. Este principio permite evitar que cada nuevo archivo de historial reemplace al anterior, pero podría requerir una acción manual posterior para eliminar archivos innecesarios. Independientemente de la opción seleccionada, tan pronto como se genera un archivo de historial, su trayectoria se devuelve en la variable sistema *Document* después de la ejecución del comando.

#### Ejemplo 

El siguiente ejemplo (Windows) efectúa la compactación de un archivo de datos:

```4d
 $structFile:=Structure file
 $dataFile:="C:\\Databases\\Invoices\\January\\Invoices.4dd"
 $origFile:="C:\\Databases\\Invoices\\Archives\\January\\"
 $archFolder:=Compact data file($structFile;$dataFile;$origFile)
```

#### Variables y conjuntos del sistema 

Si la operación de compactación se lleva a cabo correctamente, la variable sistema OK toma el valor 1; de lo contrario, toma el valor 0\. Sin un archivo de historial se ha generado, su ruta completa se devuelve en la variable sistema Document.  

#### Ver también 

[Table fragmentation](table-fragmentation.md)  
[VERIFY DATA FILE](verify-data-file.md)  