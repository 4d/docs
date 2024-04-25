---
id: restore
title: Página Restauración
sidebar_label: Página Restauración
---

You can manually restore an archive of the current application using the **Restore** page. Esta página ofrece varias opciones que pueden utilizarse para controlar la restauración:

![](../assets/en/MSC/MSC_restore.png)

> Los sistemas de recuperación automática de 4D restauran las aplicaciones e incluyen el archivo de historial de datos cuando es necesario.

La lista que se encuentra en la parte izquierda de la ventana muestra las copias de seguridad existentes de la aplicación. You can also click on the **Browse...** button found just under the area in order to open any other archive file from a different location. A continuación, se añade a la lista de archivos.

Cuando se selecciona una copia de seguridad en esta lista, la parte derecha de la ventana muestra la información relativa a esta copia de seguridad en particular:

- **Path**: Complete pathname of the selected backup file. Al hacer clic en el botón Mostrar se abre el archivo de copia de seguridad en una ventana del sistema.
- **Date and Time**: Date and time of backup.
- **Content**: Contents of the backup file. Cada elemento de la lista tiene una casilla de selección al lado que se puede utilizar para indicar si se quiere restaurar o no. You can also use the **Check All** or **Uncheck All** buttons to set the list of items to be restored.
- **Destination folder of the restored files**: Folder where the restored files will be placed. <strong x-id="1">Carpeta de destino de los archivos restaurados</strong>: carpeta donde se colocarán los archivos restaurados. To change this location, click on **[...]** and specify the folder where you want the restored files to be placed.

The **Restore** button launches the manual restoration of the selected element(s).

## Integración sucesiva de varios archivos de historial de datos

The **Integrate one or more log file(s) after restore** option allows you to integrate several data log files successively into an application. Si, por ejemplo, dispone de 4 archivos historial (.4BL) correspondientes a 4 copias de seguridad, puede restaurar la primera copia de seguridad y luego integrar los archivos historial (data log) uno por uno. Esto significa que puede, por ejemplo, recuperar un archivo de datos incluso cuando faltan los últimos archivos de copia de seguridad.

Cuando esta opción está marcada, 4D muestra la caja de diálogo estándar Abrir archivo después de la restauración, que puede utilizarse para seleccionar el archivo del diario que se va a integrar. La caja de diálogo Abrir archivo se muestra de nuevo después de cada integración hasta que se cancela.

## Restauración de una base encriptada

Tenga en cuenta que la llave de cifrado de los datos (frase secreta) puede haber cambiado a través de varias versiones de los archivos de copia de seguridad (.4BK), de los archivos .journal (.4BL) y de la aplicación actual. Siempre deben proporcionarse claves de encriptación coincidentes.

Al restaurar una copia de seguridad e integrar el archivo de historial actual en una base encriptada:

- Si restaura una copia de seguridad utilizando una frase secreta antigua, esta última será necesaria al iniciar la próxima vez la base.
- Después de una encriptación, al abrir el archivo de datos encriptado, se ejecuta una copia de seguridad y se crea un nuevo archivo de historial. Así, no es posible restaurar un archivo .4BK encriptado con una llave e integrar los archivos encriptados .4BL con otra llave.

La siguiente secuencia ilustra los principios de una operación de llaves múltiplescopia de copia de seguridad/restauración:

| Operación                                      | Archivos generados                                                                                | Comentario                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nuevo archivo de datos                         |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Añadir datos (registro # 1) |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Backup de la base de datos                     | 0000.4BL y 0001.4BK                                               |                                                                                                                                                                                                                                                                                                                                          |
| Añadir datos (registro # 2) |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Backup de la base de datos                     | 0001.4BL y 0002.4BK                                               |                                                                                                                                                                                                                                                                                                                                          |
| Añadir datos (registro # 3) |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Cifrar un archivo de datos con key1            | Archivo 0003.4BK (cifrado con llave1)                          | La encriptación guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial |
| Añadir datos (registro #4)  |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Backup de la base de datos                     | Archivo 0003.4BL y 0004.4BK (cifrado con key1) | Podemos restaurar 0003.4BK e integrar 0003.4BL                                                                                                                                                                                                                                                           |
| Añadir datos (registro # 5) |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Backup de la base de datos                     | Archivo 0004.4BL y 0005.4BK (cifrado con key1) | Podemos restaurar 0003.4BK e integrar 0003.4BL + 0004.4BL. Podemos restaurar 0004.4BK e integrar 0004.4BL                                                                                                                                |
| Añadir datos (registro # 6) |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Cifrar un archivo de datos con key2            | Archivo 0006.4BK (cifrado con key2)                            | La encriptación guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial |
| Añadir datos (registro # 7) |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Backup de la base de datos                     | Archivo 0006.4BL y 0007.4BK (cifrado con key2) | Podemos restaurar 0006.4BK e integrar 0006.4BL                                                                                                                                                                                                                                                           |
| Añadir datos (registro # 8) |                                                                                                   |                                                                                                                                                                                                                                                                                                                                          |
| Backup de la base de datos                     | Archivo 0007.4BL y 0008.4BK (cifrado con key2) | Podemos restaurar 0006.4BK e integrar 0006.4BL + 0007.4BL. Podemos restaurar 0007.4BK e integrar 0007.4BL                                                                                                                                |

> Al restaurar una copia de seguridad e integrar uno o varios archivos .4BL, los archivos restaurados .4BK y .4BL deben tener la misma llave de cifrado. Durante el proceso de integración, si no se encuentra una llave de cifrado válida en el llavero de 4D durante la integración del archivo .4BL, se genera un error.
>
> Si ha almacenado llaves de datos sucesivas en el mismo dispositivo externo, la restauración de una copia de seguridad y la integración de los archivos de historial encontrarán automáticamente la llave correspondiente si el dispositivo está conectado.
