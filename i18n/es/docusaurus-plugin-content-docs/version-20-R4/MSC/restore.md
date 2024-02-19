---
id: restore
title: Restore Page
---

Puede restaurar manualmente un archivo de la aplicación actual utilizando la página **Restaurar**. Esta página ofrece varias opciones que pueden utilizarse para controlar la restauración:

![](../assets/en/MSC/MSC_restore.png)

> Los sistemas de recuperación automática de 4D restauran las aplicaciones e incluyen el archivo de historial de datos cuando es necesario.

La lista que se encuentra en la parte izquierda de la ventana muestra las copias de seguridad existentes de la aplicación. También puede hacer clic en el botón **Navegar...** que se encuentra justo debajo del área para abrir cualquier otro archivo de una ubicación diferente. A continuación, se añade a la lista de archivos.

Cuando se selecciona una copia de seguridad en esta lista, la parte derecha de la ventana muestra la información relativa a esta copia de seguridad en particular:

- **Ruta**: ruta de acceso completa del archivo de copia de seguridad seleccionado. Al hacer clic en el botón Mostrar se abre el archivo de copia de seguridad en una ventana del sistema.
- **Fecha y hora**: fecha y hora de la copia de seguridad.
- **Contenido**: contenido del archivo de copia de seguridad. Cada elemento de la lista tiene una casilla de selección al lado que se puede utilizar para indicar si se quiere restaurar o no. También puede utilizar los botones **Seleccionar todo** o **Deseleccionar todo** para definir la lista de los elementos que deben restaurarse.
- **Carpeta de destino de los archivos restaurados**: carpeta donde se colocarán los archivos restaurados. **Carpeta de destino de los archivos restaurados**: carpeta donde se colocarán los archivos restaurados. Para cambiar esta ubicación, haga clic en **[...]** y designe la carpeta en la que desea colocar los archivos restaurados.

El botón **Restaurar** lanza la restauración manual del elemento o elementos seleccionados.

## Integración sucesiva de varios archivos de historial de datos

La opción **Integrar uno o varios archivos de historial tras la restauración** permite integrar sucesivamente varios archivos de registro de datos en una aplicación. Si, por ejemplo, dispone de 4 archivos historial (.4BL) correspondientes a 4 copias de seguridad, puede restaurar la primera copia de seguridad y luego integrar los archivos historial (data log) uno por uno. Esto significa que puede, por ejemplo, recuperar un archivo de datos incluso cuando faltan los últimos archivos de copia de seguridad.

Cuando esta opción está marcada, 4D muestra la caja de diálogo estándar Abrir archivo después de la restauración, que puede utilizarse para seleccionar el archivo del diario que se va a integrar. La caja de diálogo Abrir archivo se muestra de nuevo después de cada integración hasta que se cancela.

## Restauración de una base encriptada

Tenga en cuenta que la llave de cifrado de los datos (frase secreta) puede haber cambiado a través de varias versiones de los archivos de copia de seguridad (.4BK), de los archivos .journal (.4BL) y de la aplicación actual. Siempre deben proporcionarse claves de encriptación coincidentes.

Al restaurar una copia de seguridad e integrar el archivo de historial actual en una base encriptada:

- Si restaura una copia de seguridad utilizando una frase secreta antigua, esta última será necesaria al iniciar la próxima vez la base.
- Después de una encriptación, al abrir el archivo de datos encriptado, se ejecuta una copia de seguridad y se crea un nuevo archivo de historial. Así, no es posible restaurar un archivo .4BK encriptado con una llave e integrar los archivos encriptados .4BL con otra llave.

La siguiente secuencia ilustra los principios de una operación de llaves múltiplescopia de copia de seguridad/restauración:


| Operación                           | Archivos generados                             | Comentario                                                                                                                                                                                                                                                                         |
| ----------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nuevo archivo de datos              |                                                |                                                                                                                                                                                                                                                                                    |
| Añadir datos (registro # 1)         |                                                |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos          | 0000.4BL y 0001.4BK                            |                                                                                                                                                                                                                                                                                    |
| Añadir datos (registro # 2)         |                                                |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos          | 0001.4BL y 0002.4BK                            |                                                                                                                                                                                                                                                                                    |
| Añadir datos (registro # 3)         |                                                |                                                                                                                                                                                                                                                                                    |
| Cifrar un archivo de datos con key1 | Archivo 0003.4BK (cifrado con llave1)          | La encriptación guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial |
| Añadir datos (registro #4)          |                                                |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos          | Archivo 0003.4BL y 0004.4BK (cifrado con key1) | Podemos restaurar 0003.4BK e integrar 0003.4BL                                                                                                                                                                                                                                     |
| Añadir datos (registro # 5)         |                                                |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos          | Archivo 0004.4BL y 0005.4BK (cifrado con key1) | Podemos restaurar 0003.4BK e integrar 0003.4BL + 0004.4BL. Podemos restaurar 0004.4BK e integrar 0004.4BL                                                                                                                                                                          |
| Añadir datos (registro # 6)         |                                                |                                                                                                                                                                                                                                                                                    |
| Cifrar un archivo de datos con key2 | Archivo 0006.4BK (cifrado con key2)            | La encriptación guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial |
| Añadir datos (registro # 7)         |                                                |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos          | Archivo 0006.4BL y 0007.4BK (cifrado con key2) | Podemos restaurar 0006.4BK e integrar 0006.4BL                                                                                                                                                                                                                                     |
| Añadir datos (registro # 8)         |                                                |                                                                                                                                                                                                                                                                                    |
| Backup de la base de datos          | Archivo 0007.4BL y 0008.4BK (cifrado con key2) | Podemos restaurar 0006.4BK e integrar 0006.4BL + 0007.4BL. Podemos restaurar 0007.4BK e integrar 0007.4BL                                                                                                                                                                          |
> Al restaurar una copia de seguridad e integrar uno o varios archivos .4BL, los archivos restaurados .4BK y .4BL deben tener la misma llave de cifrado. Durante el proceso de integración, si no se encuentra una llave de cifrado válida en el llavero de 4D durante la integración del archivo .4BL, se genera un error.
> 
> Si ha almacenado llaves de datos sucesivas en el mismo dispositivo externo, la restauración de una copia de seguridad y la integración de los archivos de historial encontrarán automáticamente la llave correspondiente si el dispositivo está conectado.
