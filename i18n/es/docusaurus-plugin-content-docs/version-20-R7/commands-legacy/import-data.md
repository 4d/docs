---
id: import-data
title: IMPORT DATA
slug: /commands/import-data
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT DATA.Syntax-->**IMPORT DATA** ( *nomArchivo* {; *proyecto* {; *}} )<!-- END REF-->
<!--REF #_command_.IMPORT DATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArchivo | Text | &#8594;  | Ruta de acceso y nombre del archivo a importar |
| proyecto | Text, Blob | &#8594;  | Contenido del proyecto de importación |
| &#8592; | Nuevo contenido del proyecto de importación (si se  pasa el parámetro *) |
| * | Operador | &#8594;  | Visualización de la caja de diálogo de importación y actualización del proyecto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.IMPORT DATA.Summary-->El comando IMPORT DATA importa los datos ubicados en el archivo *nomArchivo*.<!-- END REF--> 4D puede importar los datos en los siguientes formatos: Texto, Texto de longitud fija, XML, SYLK, DIF, DBF (dBase) y 4D. 

Si pasa una cadena vacía en *nomArchivo*, IMPORT DATA muestra la caja de diálogo estándar de apertura de archivos, permitiendo al usuario definir el nombre, tipo, y ubicación del archivo a importar. Una vez aceptada la caja de diálogo, la variable sistema Documento contiene la ruta de acceso y el nombre del archivo. Si el usuario hace clic en **Cancelar**, se detiene la ejecución del comando y la variable sistema OK toma el valor 0.

El parámetro opcional *proyecto* le permite utilizar un proyecto para importar datos. Cuando pasa este parámetro, la importación se realiza directamente, sin intervención del usuario (a menos que utilice la opción \*, ver a continuación). Si no pasa este parámetro, aparece la caja de diálogo de importación. El usuario puede definir sus parámetros de importación o cargar un proyecto de importación existente. 

Un proyecto de importación contiene todos los parámetros de importación, tales como las tablas y campos en las cuales importar, los delimitadores a utilizar, etc. En el parámetro *proyecto*, puede pasar una variable Texto con XML o una variable Texto con una referencia a un elemento DOM pre existente o un BLOB. Los proyectos pueden crearse por programación (proyectos con formato XML únicamente) o cargando parámetros definidos previamente en la caja de diálogo de importación. En el último caso, tiene dos soluciones disponibles:

* Utilice el comando IMPORT DATA con un parámetro *proyecto* vacío y el parámetro opcional *\**, luego guarde el parámetro *proyecto* resultante en un campo Texto o BLOB (ver a continuación). Esta solución le permite guardar el proyecto con el archivo de datos.
* Guarde el proyecto en el disco, luego cárguelo, utilizando por ejemplo el comando [DOM Parse XML source](dom-parse-xml-source.md), y pase su referencia en el parámetro *proyecto*.
**Nota de compatibilidad**: a partir de la versión 12 de 4D, los proyectos de importación son codificados en XML. 4D puede abrir los proyectos de importación generados con las versiones anteriores de 4D (formato BLOB), sin embargo los proyectos creados a partir de la v12 no pueden abrirse con una versión 11 o anterior. Recomendamos utilizar variables Texto para manipular los archivos de importación.   
  
El parámetro opcional *\**, si se especifica, hace que aparezca la caja de diálogo de importación con los parámetros definidos en *proyecto*. Esta característica le permite utilizar un proyecto predefinido, mientras tiene aún la posibilidad de modificar uno o más parámetros. Además, el parámetro *proyecto* contiene, después de cerrar la caja de diálogo de importación, los parámetros del “nuevo” proyecto. Entonces puede almacenar el nuevo proyecto en un campo BLOB, en disco, etc. 

Si la importación fue exitosa, la variable sistema OK toma el valor 1.

**Nota:** consulte el comando EXPORT DATA para ver un ejemplo sobre la definición de un proyecto vacío. 

#### Variables y conjuntos del sistema 

Si el usuario hace clic en **Cancelar** en la caja de diálogo estándar de guardar archivos o de importación, la variable sistema OK toma el valor 0\. Si la importación fue exitosa, la variable sistema OK toma el valor 1.

#### Ver también 

[EXPORT DATA](export-data.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 665 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


