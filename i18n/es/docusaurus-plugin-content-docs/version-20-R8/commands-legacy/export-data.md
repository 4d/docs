---
id: export-data
title: EXPORT DATA
slug: /commands/export-data
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT DATA.Syntax-->**EXPORT DATA** ( *nomArchivo* {; *proyecto* {; *}} )<!-- END REF-->
<!--REF #_command_.EXPORT DATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArchivo | Text | &#8594;  | Ruta de acceso y nombre del archivo a exportar |
| proyecto | Text, Blob | &#8594;  | Contenido del proyecto de exportación |
| &#8592; | Nuevo contenido del proyecto de exportación (si se  pasa el parámetro *) |
| * | Operador | &#8594;  | Visualización de la caja de diálogo de exportación y actualización del proyecto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.EXPORT DATA.Summary-->El comando EXPORT DATA exportar datos en el archivo *nomArchivo*.<!-- END REF--> 4D puede exportar datos en los siguientes formatos: Texto, Texto de longitud fija, XML, SYLK, DIF, DBF (dBase) y 4D. 

Si pasa una cadena vacía en *nomArchivo*, EXPORT DATA muestra la caja de diálogo estándar de guardar archivos, permitiendo al usuario definir el nombre, tipo y ubicación del archivo de exportación. Una vez aceptada la caja de diálogo, la variable sistema Documento contiene la ruta de acceso y el nombre del archivo. Si el usuario hace clic en **Cancelar**, se detiene la ejecución del comando y la variable sistema OK toma el valor 0\. 

El parámetro opcional *proyecto* permite utilizar un proyecto para exportar datos. Cuando pasa este parámetro, se lleva a cabo la exportación directamente, sin ninguna intervención (a menos de que utilice la opción \*, ver a continuación). Si no pasa este parámetro, aparece la caja de diálogo de exportación. El usuario puede definir sus parámetros de exportación o cargar un proyecto de exportación existente. 

Un proyecto de exportación contiene todos los parámetros de exportación, tales como las tablas y campos a exportar, los delimitadores, etc. En el parámetro *proyecto* puede pasar una variable Texto con XML o una variable Texto con una referencia a un elemento DOM pre existente, o un BLOB. Los proyectos pueden crearse por programación (proyectos de formato XML únicamente) o cargando los parámetros previamente definidos en la caja de diálogo de exportación. En el último caso, hay dos soluciones disponibles:

* Usar el comando EXPORT DATA con un parámetro *proyecto* vacío y el parámetro opcional *\**, luego guardar el parámetro *proyecto* en un campo Texto o BLOB (ver a continuación). Esta solución le permite guardar el proyecto con el archivo de datos.
* Guardar el proyecto en el disco, luego cargarlo utilizando el comando DOM Parse XML source y pasando su referencia en el parámetro *proyecto*.
**Nota de compatibilidad**: a partir de la versión 12 de 4D, los proyectos de exportación son codificados en XML. 4D puede abrir los proyectos de exportación generados con las versiones anteriores de 4D (formato BLOB), sin embargo los proyectos creados a partir de la v12 no pueden abrirse con una versión 11 o anterior. Además se recomienda utilizar variables Texto para manipular los archivos de exportación.   

El parámetro opcional *\**, si se especifica, hace que aparezca la caja de diálogo de exportación con los parámetros definidos en *proyecto*. Esta característica le permite utilizar un proyecto predefinido, mientras tiene aún la posibilidad de modificar uno o más parámetros. Además, el parámetro *proyecto* contiene, después de cerrar la caja de diálogo de exportación, los parámetros del “nuevo” proyecto. Entonces puede almacenar el nuevo proyecto en un campo BLOB, en disco, etc. 

Si la exportación fue exitosa, la variable sistema OK es igual a 1.

#### Ejemplo 1 

Este ejemplo presenta el uso del comando EXPORT DATA para exportar datos en formato binario.

* Este método hace un bucle por todas las tablas de la base y llama al método ExportBinary:

```4d
 var $ExportPath : Text
 var $i : Integer
 $ExportPath:=Select folder("Por favor seleccione la carpeta de exportación:")
 If(Ok=1)
    For($i;1;Last table number)
       If(Is table number valid($i))
          ExportBinary(Table($i);$ExportPath+Table name($i);True)
       End if
    End for
 End if
```

* Este es el código del método ExportBinary:

```4d
 var $1 : Pointer //tabla
 var $2 : Text //ruta del archivo de destino
 var $3 : Boolean //exportar todos los registros
 var $i : Integer
 var $ref : Text
 $ref:=DOM Create XML Ref("settings-import-export")
  // Exportar la tabla "$1" en formato binario '4D', todos los registros o únicamente la selección actual
 DOM SET XML ATTRIBUTE($ref;"table_no";Table($1);"format";"4D";"all_records";$3)
  // Definición de los campos a exportar
 For($i;1;Last field number($1))
    If(Is field number valid($1;$i))
       $elt:=DOM Create XML element($ref;"field";"table_no";Table($1);"field_no";$i)
    End if
 End for
 EXPORT DATA($2;$ref)
 If(Ok=0)
    ALERT("Error durante la exportación de la tabla "+Table name($1))
 End if
 DOM CLOSE XML($ref)
```

#### Ejemplo 2 

Este ejemplo crea un proyecto vacío y guarda los parámetros definidos por el usuario en la caja de diálogo de exportación: 

```4d
 var $exportParams : Text
 EXPORT DATA("DocExport.txt";$exportParams;*) // Visualización de la caja de diálogo de exportación
```

#### Variables y conjuntos del sistema 

Si el usuario hace clic en **Cancelar** en la caja de diálogo estándar de abrir archivos o de exportación, la variable sistema OK toma el valor 0\. Si la exportación fue exitosa, la variable sistema OK toma el valor 1\. 

#### Ver también 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DATA](import-data.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 666 |
| Hilo seguro | &cross; |
| Modifica variables | OK, Document |


