---
id: new-log-file
title: New log file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file** : Text<!-- END REF-->

<!--REF #_command_.New log file.Params-->

| Parámetros | Tipo |                             | Descripción                                   |
| ---------- | ---- | --------------------------- | --------------------------------------------- |
| Resultado  | Text | &#8592; | Ruta completa del archivo de registro cerrado |

<!-- END REF-->

## Descripción

**Nota preliminar:** este comando sólo funciona con 4D Server. Sólo puede ejecutarse mediante el comando [Execute on server](../commands-legacy/execute-on-server.md) o en un procedimiento almacenado.

<!--REF #_command_.New log file.Summary-->El comando **New log file** cierra el archivo de registro actual, le cambia el nombre y crea uno nuevo con el mismo nombre en la misma ubicación que el anterior<!-- END REF-->. Este comando se utiliza para configurar un sistema de copia de seguridad utilizando un espejo lógico (ver la sección *Cómo configurar un espejo lógico * en el [Manual de referencia de 4D Server](https://doc/4d.com)). 

El comando devuelve el nombre completo de la ruta (ruta de acceso + nombre) del archivo de registro que se está cerrando (llamado “segment”). Este archivo se almacena en la misma ubicación que el archivo de registro actual (especificado en la [página de configuración](../Backup/settings.md#configuration) en el tema de copia de seguridad de la configuración). El comando no realiza ningún procesamiento (compresión, segmentación) en el archivo guardado. No aparece ninguna
caja de diálogo.

El archivo se renombra con los números de copia de seguridad actuales de la base de datos y del archivo de registro, como se muestra en el siguiente ejemplo: DatabaseName\[BackupNum-LogBackupNum\].journal. Por ejemplo:

- Si la base de datos MyDatabase.4DD ha sido guardada 4 veces, el último archivo de copia de seguridad se llamará MyDatabase\[0004\].4BK. El nombre del primer “segment” del archivo de registro será, por lo tanto, MyDatabase\[0004-0001\].journal.
- Si la base de datos MyDatabase.4DD se ha guardado 3 veces y el archivo de registro se ha guardado 5 veces desde entonces, el nombre de la 6ª copia de seguridad del archivo de registro será MyDatabase\[0003-0006\].journal.

:::warning

Un archivo de registro siempre debe estar relacionado con un archivo de datos. Si llama a este comando justo después de una activación del archivo de registro (sin copia de seguridad) usando [`SELECT LOG FILE`](select-log-file.md) o la [caja de diálogo de parámetros](../Backup/settings.md#configuration), asegúrese de tener una copia coincidente de su archivo de datos, de lo contrario el archivo de registro no podría ser integrado.

:::

## Gestión de errores

En caso de error, el comando genera un código que puede ser interceptado con el comando [ON ERR CALL](../commands-legacy/on-err-call.md).

## Ver también

[SELECT LOG FILE](select-log-file.md)