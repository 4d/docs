---
id: import-structure
title: IMPORT STRUCTURE
slug: /commands/import-structure
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT STRUCTURE.Syntax-->**IMPORT STRUCTURE** ( *estructuraXML* )<!-- END REF-->
<!--REF #_command_.IMPORT STRUCTURE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| estructuraXML | Text | &#8594;  | Definición XML de la estructura de la base 4D |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.IMPORT STRUCTURE.Summary-->El comando **IMPORT STRUCTURE** importa, en la base actual, la definición XML de la estructura de la base 4D pasada en el parámetro *estructuraXML*.<!-- END REF--> 

El parámetro *estructuraXML* debe contener una definición válida de estructura 4D en formato XML. Hay varias maneras de obtener una definición de estructura válida:

* Ejecutar el comando [EXPORT STRUCTURE](export-structure.md),
* Seleccionar el comando de menú **Exportar >** **Definición de estructura al archivo XML...** disponible en la interfaz del modo Diseño de 4D (ver *Exportar e importar las definiciones de estructura*),
* Crear o modificar un archivo XML personalizado basado en los DTD públicos que se encuentran en la carpeta "DTD" de la aplicación 4D.

La definición de estructura importada se agrega a la estructura que ya está abierta y se muestra en el editor de estructura estándar de 4D entre las tablas existentes (si las hubiera). Si una tabla importada tiene el mismo nombre que una local, se genera un error y la operación de importación se cancela. 

Puede crear una nueva base mediante la importación de una definición de estructura en una base vacía.

Se genera un error si la estructura está en modo compilado y/o de sólo lectura.

Este comando no se puede llamar desde una aplicación 4D que funciona en modo remoto.

#### Nota para despliegue 

Dado que este comando modifica la estructura de la base de datos, no puede utilizarse en el contexto de una aplicación empaquetada de sólo lectura (archivo .4dc instalado en la carpeta Archivos de programa o archivo .4dz). 

#### Ejemplo 

Usted desea importar una definición de estructura guardada en la base actual:

```4d
 $struc:=Document to text("c:\\4DStructures\\Employee.xml")
 IMPORT STRUCTURE($struc)
```

#### Ver también 

[EXPORT STRUCTURE](export-structure.md)  