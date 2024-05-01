---
id: restore
title: Restaurar
---

4D le permite restaurar conjuntos enteros de datos de una aplicaci´n en caso de que se presente un incidente, independientemente de sus causas. Pueden producirse dos categorías principales de incidentes:

- La parada inesperada de la aplicación mientras está en uso. Este incidente puede producirse por un corte de luz, un fallo de un elemento del sistema, etc. En este caso, dependiendo del estado actual de la caché de datos en el momento del incidente, la restauración de la aplicación puede requerir diferentes operaciones:
  - Si la caché estaba vacía, la aplicación se abre normalmente. Se registraron todos los cambios realizados en la aplicación. Este caso no requiere ninguna operación particular.
  - Si la caché contiene operaciones, el archivo de datos está intacto pero requiere integrar el archivo de historial actual.
  - Si la caché estaba en proceso de escritura, es probable que el archivo de datos esté dañado. Hay que restaurar la última copia de seguridad e integrar el archivo de historial actual.

- La pérdida de archivo(s) de la aplicación. Este incidente puede producirse por sectores defectuosos en el disco que contiene la aplicación, un virus, un error de manipulación, etc. Hay que restaurar la última copia de seguridad y luego integrar el archivo de historial actual. Para saber si una aplicación ha sido dañada tras un incidente, basta con relanzarla con 4D. El programa realiza un auto diagnóstico y detalla las operaciones de reparación a realizar. En modo automático, estas operaciones se realizan directamente sin ninguna intervención por parte del usuario. Si se ha puesto en marcha una estrategia regular de copias de seguridad, las herramientas de restauración de 4D le permitirán (en la mayoría de los casos) recuperar la aplicación en el estado exacto en que se encontraba antes del incidente.

> 4D puede lanzar procedimientos automáticamente de recuperación de las aplicaciones tras los incidentes. These mechanisms are managed using two options available on the **Backup/Backup & Restore** page of the Settings. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.\
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the data file using the "rollback" function in the log file. This function is available on the [Rollback](MSC/rollback.md) page of the MSC.

## Restitución manual de una copia de seguridad (diálogo estándar)

Puede restaurar manualmente el contenido de un archivo generado por el módulo de copia de seguridad. Una restauración manual puede ser necesaria, por ejemplo, para restaurar todo el contenido de un archivo (archivos de proyecto y archivos adjuntos), o para realizar búsquedas entre los archivos. La restauración manual también puede realizarse junto con la integración del archivo de registro actual.

The manual restore of backups can be carried out either via the standard Open document dialog box, or via the [Restore](../MSC/restore.md) page of the MSC. La restitución a través del CSM ofrece más opciones y permite previsualizar el contenido del archivo. Por otro lado, sólo se pueden restaurar los archivos asociados a la aplicación abierta.

Para restaurar manualmente una aplicación a través de una caja de diálogo estándar:

1. Choose **Restore...** in the 4D application **File** menu.
   It is not mandatory that an application project be open.
   OR
   Execute the `RESTORE` command from a 4D method.
   Aparece una caja de diálogo estándar de apertura de archivos.
2. Select a backup file (.4bk) or a log backup file (.4bl) to be restored and click **Open**.
   Aparece una caja de diálogo que permite especificar la ubicación donde se restaurarán los archivos. By default, 4D restores the files in a folder named _Archivename_ (no extension) located next to the archive. Puede mostrar la ruta de acceso:

![](../assets/en/Backup/backup07.png)

You can also click on the **[...]** button to specify a different location.
3. Click on the **Restore** button.
4D extrae todos los archivos de copia de seguridad de la ubicación especificada.
Si el archivo de historial actual o un archivo de copia de seguridad del historial tiene el mismo número que el archivo de copia de seguridad se almacena en la misma carpeta, 4D examina su contenido. Si contiene operaciones que no están presentes en el archivo de datos, el programa le pregunta si desea integrar estas operaciones. Integration is done automatically if the **Integrate last log file...** option is checked (see [Automatic Restore](settings.md#automatic-restore)).

4.(Optional) Click **OK** to integrate the log file into the restored application.
Si la restauración y la integración se han realizado correctamente, 4D muestra una caja de diálogo que indica que la operación se ha realizado con éxito.
5. Presione **OK**.

Se muestra la carpeta de destino. Durante la restauración, 4D coloca todos los archivos de la copia de seguridad en esta carpeta, independientemente de la posición de los archivos originales en el disco cuando se inicia la copia de seguridad. De esta manera, encontrará sus archivos con mayor facilidad.

> Any content related to the data file (files and `Settings` folder) are automatically restored in a `Data` subfolder within the destination folder.

## Restaurar manualmente una copia de seguridad (CSM)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).

## Integración manual del historial

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](../assets/en/Backup/backup08.png)

> Para que este mecanismo funcione, 4D debe poder acceder al archivo de historial en su ubicación actual.

Puede elegir si integrar o no el archivo de historial actual. No integrar el archivo de historial actual permite evitar la reproducción de los errores cometidos en los datos.
