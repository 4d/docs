---
id: restore
title: Página Restauración
sidebar_label: Página Restauración
---

You can manually restore an archive of the current application using the **Restore** page. This page provides several options that can be used to control the restoration:

![](../assets/en/MSC/MSC_restore.png)

> 4D automatic recovery systems restore applications and include data log file when necessary.

The list found in the left part of the window displays any existing backups of the application. You can also click on the **Browse...** button found just under the area in order to open any other archive file from a different location. A continuación, se añade a la lista de archivos.

Cuando se selecciona una copia de seguridad en esta lista, la parte derecha de la ventana muestra la información relativa a esta copia de seguridad en particular:

- **Ruta**: ruta de acceso completa del archivo de copia de seguridad seleccionado. Al hacer clic en el botón Mostrar se abre el archivo de copia de seguridad en una ventana del sistema.
- **Fecha y hora**: fecha y hora de la copia de seguridad.
- **Contenido**: contenido del archivo de copia de seguridad. Cada elemento de la lista tiene una casilla de selección al lado que se puede utilizar para indicar si se quiere restaurar o no. También puede utilizar los botones **Seleccionar todo** o **Deseleccionar todo** para definir la lista de los elementos que deben restaurarse.
- **Carpeta de destino de los archivos restaurados**: carpeta donde se colocarán los archivos restaurados. **Carpeta de destino de los archivos restaurados**: carpeta donde se colocarán los archivos restaurados. Para cambiar esta ubicación, haga clic en **[...]** y designe la carpeta en la que desea colocar los archivos restaurados.

El botón **Restaurar** lanza la restauración manual del elemento o elementos seleccionados.

## Integración sucesiva de varios archivos de historial de datos

The **Integrate one or more log file(s) after restore** option allows you to integrate several data log files successively into an application. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. Esto significa que puede, por ejemplo, recuperar un archivo de datos incluso cuando faltan los últimos archivos de copia de seguridad.

Cuando esta opción está marcada, 4D muestra la caja de diálogo estándar Abrir archivo después de la restauración, que puede utilizarse para seleccionar el archivo del diario que se va a integrar. La caja de diálogo Abrir archivo se muestra de nuevo después de cada integración hasta que se cancela.

## Restauración de una base encriptada

Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. Siempre deben proporcionarse claves de encriptación coincidentes.

Al restaurar una copia de seguridad e integrar el archivo de historial actual en una base encriptada:

- Si restaura una copia de seguridad utilizando una frase secreta antigua, esta última será necesaria al iniciar la próxima vez la base.
- Después de una encriptación, al abrir el archivo de datos encriptado, se ejecuta una copia de seguridad y se crea un nuevo archivo de historial. Así, no es posible restaurar un archivo .4BK encriptado con una llave e integrar los archivos encriptados .4BL con otra llave.

La siguiente secuencia ilustra los principios de una operación de llaves múltiplescopia de copia de seguridad/restauración:

| Operación                             | Archivos generados                               | Comentario                                                                                                                                                                                                                                                                         |
| ------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nuevo archivo de datos                |                                                  |                                                                                                                                                                                                                                                                                    |
| Añadir datos (registro # 1)           |                                                  |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos            | 0000.4BL y 0001.4BK                              |                                                                                                                                                                                                                                                                                    |
| Añadir datos (registro # 2)           |                                                  |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos            | 0001.4BL y 0002.4BK                              |                                                                                                                                                                                                                                                                                    |
| Añadir datos (registro # 3)           |                                                  |                                                                                                                                                                                                                                                                                    |
| Cifrar un archivo de datos con llave1 | Archivo 0003.4BK (cifrado con llave1)            | La encriptación guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial |
| Añadir datos (registro #4)            |                                                  |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos            | Archivo 0003.4BL y 0004.4BK (cifrado con llave1) | Podemos restaurar 0003.4BK e integrar 0003.4BL                                                                                                                                                                                                                                     |
| Añadir datos (registro # 5)           |                                                  |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos            | Archivo 0004.4BL y 0005.4BK (cifrado con llave1) | Podemos restaurar 0003.4BK e integrar 0003.4BL + 0004.4BL. Podemos restaurar 0004.4BK e integrar 0004.4BL                                                                                                                                                                          |
| Añadir datos (registro # 6)           |                                                  |                                                                                                                                                                                                                                                                                    |
| Cifrar un archivo de datos con llave2 | Archivo 0006.4BK (cifrado con llave2)            | La encriptación guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial |
| Añadir datos (registro # 7)           |                                                  |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos            | Archivo 0006.4BL y 0007.4BK (cifrado con llave2) | Podemos restaurar 0006.4BK e integrar 0006.4BL                                                                                                                                                                                                                                     |
| Añadir datos (registro # 8)           |                                                  |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos            | Archivo 0007.4BL y 0008.4BK (cifrado con llave2) | Podemos restaurar 0006.4BK e integrar 0006.4BL + 0007.4BL. Podemos restaurar 0007.4BK e integrar 0007.4BL                                                                                                                                                                          |
> Al restaurar una copia de seguridad e integrar uno o varios archivos .4BL, los archivos restaurados .4BK y .4BL deben tener la misma llave de cifrado. Durante el proceso de integración, si no se encuentra una llave de cifrado válida en el llavero de 4D durante la integración del archivo .4BL, se genera un error.
> 
> Si ha almacenado llaves de datos sucesivas en el mismo dispositivo externo, la restauración de una copia de seguridad y la integración de los archivos de historial encontrarán automáticamente la llave correspondiente si el dispositivo está conectado.
