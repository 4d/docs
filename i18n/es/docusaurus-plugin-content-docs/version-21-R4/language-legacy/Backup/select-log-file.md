---
id: select-log-file
title: SELECT LOG FILE
slug: /commands/select-log-file
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *logFile* : Text )<br/>**SELECT LOG FILE** ( * )<!-- END REF-->

<!--REF #_command_.SELECT LOG FILE.Params-->

<div class="no-index">

| Parámetros | Tipo     |                             | Descripción                          |
| ---------- | -------- | --------------------------- | ------------------------------------ |
| logFile    | Text     | &#8594; | Nombre del archivo de registro       |
| \*         | Operador | &#8594; | Cerrar el archivo de registro actual |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento                 | Modificaciones |
| --------------------------- | -------------- |
| 11 SQL                      | Modificado     |
| <6 | Created        |

</details>
</div>

## Descripción

<!--REF #_command_.SELECT LOG FILE.Summary-->El comando **SELECT LOG FILE** crea o cierra el archivo de historial de acuerdo al valor que pase en el parámetro<!-- END REF-->.

En *logFile*, pase el nombre o la ruta completa del archivo de registro a ser creado. Si solo pasa un nombre, el archivo se creará en la carpeta "Logs" de la base de datos situada junto al archivo de estructura de la base de datos.

Si se pasa una cadena vacía en *logFile*, **SELECT LOG FILE** presenta un cuadro de diálogo Save File, que permite al usuario elegir el nombre y la ubicación del archivo de registro que se va a crear. Si el archivo se crea correctamente, la variable OK toma el valor 1. De lo contrario, si el usuario hace clic en Cancelar o si el archivo de registro no pudo ser creado, OK toma el valor 0.

**Nota:** el nuevo archivo de registro no se genera inmediatamente después de la ejecución del comando, sino después de la siguiente copia de seguridad (el parámetro se mantiene en el archivo de datos y se tendrá en cuenta aunque la base de datos se cierre mientras tanto) o de una llamada al comando [New log file](../commands/new-log-file). Puede llamar al comando [BACKUP](../commands/backup) para activar la creación del archivo de registro.

Si pasa *\** en *logFile*, **SELECT LOG FILE** cierra el archivo de registro actual para la base de datos. La variable OK toma el valor 1 cuando se cierra el archivo de registro.

## Variables y conjuntos sistema

OK toma el valor 1 si el archivo de historial está correctamente creado, o cerrado.

## Ver también

[New log file](../commands/new-log-file)  
[ON ERR CALL](../commands/on-err-call)

## Propiedades

|                        |           |
| ---------------------- | --------- |
| Número de comando      | 345       |
| Hilo seguro            | no        |
| Modifica las variables | OK, error |


