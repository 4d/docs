---
id: sql-export-database
title: SQL EXPORT DATABASE
slug: /commands/sql-export-database
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT DATABASE.Syntax-->**SQL EXPORT DATABASE** ( *rutaCarpeta* {; *numArchivos* {; *tamLimiteArchivos* {; *tamLimiteCampos*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT DATABASE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaCarpeta | Text | &#8594;  | Ruta de acceso de la carpeta de exportación o "" para mostrar una caja de diálogo de selección de carpeta |
| numArchivos | Integer | &#8594;  | Número máximo de archivos por carpeta |
| tamLimiteArchivos | Integer | &#8594;  | Valor límite de tamaño de los archivos de exportación (en KB) |
| tamLimiteCampos | Integer | &#8594;  | Limite de tamaño (en bytes) debajo del cual el contenido de un campo Texto, BLOB o Imagen se integrará al archivo principal |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL EXPORT DATABASE.Summary-->El comando SQL EXPORT DATABASE exporta al formato SQL todos los registros de todas las tablas de la base.<!-- END REF--> En SQL, esta operación de exportación global se llama "Dump".

**Nota:** este comando no puede utilizarse con una conexión externa abierta directamente o vía ODBC. 

Para cada tabla, el comando genera un archivo de texto con las instrucciones SQL necesarias para la importación de los datos en otra base. Este archivo puede ser utilizado directamente por el comando [SQL EXECUTE SCRIPT](sql-execute-script.md) para importar los datos en otra base 4D. 

Los archivos de exportación se crearán en una carpeta llamada "SQLExport" ubicada en la carpeta de destino designada por el parámetro rutaCarpeta. Por favor tenga en cuenta que si la carpeta "SQLExport" ya existe en la ubicación especificada, el comando se reemplazará sin que se muestre ningún mensaje de advertencia.   
Si pasa una cadena vacía en este parámetro, 4D muestra una caja de diálogo estándar permitiéndole al usuario designar la carpeta de destino. Por defecto, la caja de diálogo muestra la carpeta actual del usuario que abrió la sesión ("Mis Documentos" bajo Windows o "Documents" bajo Mac OS).

Para cada tabla exportada, el comando efectúa las siguientes acciones:

* se crea una subcarpeta con el nombre de la tabla en la carpeta de destino.
* un archivo texto llamado "Export.sql" se crea en la subcarpeta. Este archivo está codificado en UTF-8 con BOM (marca de orden de bytes). Contiene las órdenes SQL *INSERT* correspondientes a los datos exportados. Los valores de los campos están separados por dos puntos. Puede tener menos valores que campos en la tabla. En este caso, los campos restantes se consideran NULOS.
* si la tabla contiene campos BLOB, imagen o texto (textos guardados externamente, en otras palabras, fuera de los registros), por defecto el comando crea una subcarpeta adicional llamada "BLOBS" junto al archivo "Export.sql" y crea tantas subcarpetas "BlobsX” como sea necesario. Estas subcarpetas guardarán como archivos separados el contenido de todos los campos BLOB, imagen o campos de texto externos de los registros de la tabla. Los archivos BLOB se llaman "BlobXXXXX.BLOB", los archivos texto se llaman "TEXTXXXXXX.TXT (donde XXXXX es un número único generado por la aplicación). Los archivos imagen se llaman PICTXXXXX.ZZZZ (donde XXXXX es un número único generado por la aplicación y ZZZZ es la extensión). Cuando es posible, las imágenes se exportan a su formato nativo de origen con la extensión correspondiente al tipo de imagen (.jpg, .png, etc.). Si la exportación no es posible en el formato nativo, las imágenes se exportan en el formato 4D interno con la extensión .4PCT.

**Nota:** este funcionamiento difiere al ejecutar **SQL EXPORT DATABASE** desde un 4D en modo remoto. En este contexto, los datos a almacenar externamente se incluyen automáticamente en el archivo "Export.sql". 

Si pasa el parámetro *numArchivos*, el comando creará tantas subcarpetas "BlobsX" como sea necesario de manera que cada una de ellas no contenga más de *numArchivos* BLOB, imagen o textos externos. Por defecto, si se omite el parámetro *numArchivos*, el comando limita el número de archivos a 200\. Si pasa 0, cada subcarpeta contendrá al menos un archivo.

El parámetro *tamMaxArchivo* permite definir un límite de tamaño (en KB) para cada archivo "Export.sql" creado en el disco. Cuando el tamaño del archivo de exportación alcanza el valor definido en *tamMaxArchivo*, 4D detiene la escritura de registros, cierra el archivo y crea un nuevo archivo llamado "ExportX.sql" (donde X representa el número de secuencia) junto al anterior. Note que este es un límite teórico: el tamaño actual de los archivos "ExportX.sql" supera el valor definido por *tamMaxArchivo* porque el archivo sólo se cierra después de que el registro que se estaba exportando cuando se alcanzó el límite se haya escrito completamente (los contenidos de los registros no se dividen). El tamaño mínimo aceptado es 100 KB y el valor máximo (valor por defecto) es 100 000 (10MB).

El parámetro opcional *tamLimiteCampos* permite definir una tamaño límite debajo del cual el contenido de un campo BLOB, Imagen, o texto externo se integrará al archivo principal "Export.sql" en lugar de guardarse como un archivo separado. El propósito de este parámetro es optimizar las operaciones de exportación limitando el número de subcarpetas y de archivos creados en el disco.   
Este parámetro debe expresarse en bytes. Por ejemplo, si pasa 1000, todos los campos BLOB, imagen o texto externo que contienen los datos de un tamaño inferior o igual a 1000 bytes se integrarán al archivo de exportación principal.   
Note que los datos de los campos binarios (BLOB e Imagen) integrados al archivo de exportación se escriben en formato hexadecimal, de la forma X'0f20' (notación hexadecimal SQL estándar, ver *literal*). Este formato es soportado automáticamente por el motor SQL de 4D.   
Por defecto, si se omite el parámetro *tamLimiteCampos*, los campos BLOB, Imagen y texto externos siempre se exportan en forma de archivos externos, sin importar su tamaño. 

En el archivo de exportación, puede haber menos valores que campos en la tabla. En este caso, los campos vacíos se considerarán como NULL. También puede pasar el valor NULL en un campo.

Si la exportación se realiza correctamente, la variable OK toma el valor 1\. De lo contrario, toma el valor 0.

##### 

**Nota:** este comando no soporta campos de tipo Objeto.

#### Ver también 

[SQL EXPORT SELECTION](sql-export-selection.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1065 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


