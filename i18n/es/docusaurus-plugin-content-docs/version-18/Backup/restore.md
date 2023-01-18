---
id: restore
title: Restaurar
---

4D le permite restaurar conjuntos enteros de datos de una base en caso de que se presente un incidente, independientemente de la causa del mismo. Pueden producirse dos categorías principales de incidentes:

- La parada inesperada de la base mientras está en uso. Este incidente puede producirse por un corte de luz, un fallo de un elemento del sistema, etc. En este caso, dependiendo del estado actual de la caché de datos en el momento del incidente, la restauración de la base puede requerir diferentes operaciones:
  - Si la caché estaba vacía, la base se abre normalmente. Se registraron todos los cambios realizados en la base. Este caso no requiere ninguna operación particular.
  - Si la caché contiene operaciones, el archivo de datos está intacto pero requiere integrar el archivo de historial actual.
  - Si la caché estaba en proceso de escritura, es probable que el archivo de datos esté dañado. Hay que restaurar la última copia de seguridad e integrar el archivo de historial actual.

- La pérdida de uno o más archivos de la base. Este incidente puede producirse por sectores defectuosos en el disco que contiene la base, un virus, un error de manipulación, etc. Hay que restaurar la última copia de seguridad y luego integrar el archivo de historial actual. Para saber si una base ha sido dañada tras un incidente, basta con relanzar la base con 4D. El programa realiza un auto diagnóstico y detalla las operaciones de reparación a realizar. En modo automático, estas operaciones se realizan directamente sin ninguna intervención por parte del usuario. Si se ha puesto en marcha una estrategia regular de copias de seguridad, las herramientas de restauración de 4D le permitirán recuperar (en la mayoría de los casos) la base en el estado exacto en que se encontraba antes del incidente.

> 4D puede lanzar procedimientos automáticamente de recuperación de las bases tras los incidentes. Estos mecanismos se gestionan mediante dos opciones disponibles en la página **Backup/Backup & y Restauración** de las Propiedades de la base. Para más información, consulte el párrafo [Restauración automática](settings.md#automatic-restore).  
> Si la incidencia es el resultado de una operación inadecuada realizada sobre los datos (eliminación de un registro, por ejemplo), puede intentar reparar la base utilizando la función "rollback" del archivo de historial. Esta función está disponible en la página [Retroceder](MSC/rollback.md) del CSM.

## Restitución manual de una copia de seguridad (diálogo estándar)

Puede restaurar manualmente el contenido de un archivo generado por el módulo de copia de seguridad. Una restauración manual puede ser necesaria, por ejemplo, para restaurar todo el contenido de un archivo (archivos de proyecto y archivos adjuntos), o para realizar búsquedas entre los archivos. La restauración manual también puede realizarse junto con la integración del archivo de registro actual.

La restauración manual de las copias de seguridad puede realizarse a través de la caja de diálogo estándar de apertura de documento, o a través de la página [Restitución](MSC/restore) del CSM. La restitución a través del CSM ofrece más opciones y permite previsualizar el contenido del archivo. Restoring via the MSC provides more options and allows the archive contents to be previewed.

Para restaurar una base manualmente a través de una caja de diálogo estándar:

1. Elija **Restituir...** en el menú de la aplicación 4D **Archivo**. No es obligatorio que una base de datos esté abierta. OR Execute the `RESTORE` command from a 4D method. Aparece una caja de diálogo estándar de apertura de archivos.
2. Seleccione un archivo de copia de seguridad (.4bk) o un archivo de copia de seguridad del historial (.4bl) que desee restaurar y haga clic en **Abrir**. Aparece una caja de diálogo que permite especificar la ubicación donde se restaurarán los archivos. Por defecto, 4D restaura los archivos en una carpeta llamada *Nomarchivo* (sin extensión) situada junto al archivo. Puede mostrar la ruta de acceso:

![](../assets/en/Backup/backup07.png)

También puede hacer clic en el botón **[...]** para especificar una ubicación diferente.
3. Haga clic en el botón **Restaurar**. 4D extrae todos los archivos de copia de seguridad de la ubicación especificada. Si el archivo de historial actual o un archivo de copia de seguridad del historial tiene el mismo número que el archivo de copia de seguridad se almacena en la misma carpeta, 4D examina su contenido. Si contiene operaciones que no están presentes en el archivo de datos, el programa le pregunta si desea integrar estas operaciones. La integración se realiza automáticamente si la opción **de integración automática del historial** está seleccionada (ver [Restauración automática](settings.md#automatic-restore)). 4.(Opcional) Haga clic en **OK** para integrar el archivo de historial en la base restaurada. Si la restauración y la integración se han realizado correctamente, 4D muestra una caja de diálogo que indica que la operación se ha realizado con éxito.
5. Haga clic en **OK**. Se muestra la carpeta de destino. Durante la restauración, 4D coloca todos los archivos de la copia de seguridad en esta carpeta, independientemente de la posición de los archivos originales en el disco cuando se inicia la copia de seguridad. De esta manera, encontrará sus archivos con mayor facilidad.

## Restaurar manualmente una copia de seguridad (CSM)

Puede restaurar manualmente un archivo de la base de datos actual utilizando la página [Restauración](MSC/restore.md) del Centro de Mantenimiento y Seguridad (CMS).

## Integración manual del historial

Si no ha marcado la opción de integración automática del archivo de historial en la página Restaurar del CSM (ver [Integración sucesiva de varios archivos de historial](MSC/restore.md#successive-intergration-of-several-data-log-files)), aparece una caja de diálogo de advertencia durante la apertura de la base cuando 4D advierte que el archivo de historial contiene más operaciones de las que se han realizado en la base.

![](../assets/en/Backup/backup08.png)

> Para que este mecanismo funcione, 4D debe poder acceder al archivo de historial en su ubicación actual.

Puede elegir si integrar o no el archivo de historial actual. No integrar el archivo de historial actual permite evitar la reproducción de los errores cometidos en los datos.
