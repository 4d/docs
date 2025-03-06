---
id: export-structure-file
title: Export structure file
slug: /commands/export-structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Export structure file.Syntax-->**Export structure file** ( *rutaCarpeta* {; *opciones*} ) : Object<!-- END REF-->
<!--REF #_command_.Export structure file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaCarpeta | Text | &#8594;  | Ruta de la carpeta de destino para archivos de proyecto |
| opciones | Object | &#8594;  | Opciones de exportar |
| Resultado | Object | &#8592; | Estado de validación y mensajes (si los hay) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Export structure file.Summary-->El comando **Export structure file** divide la estructura actual de la base 4D en un conjunto de archivos de texto o archivos de imagen nativos y los almacena en la *rutaCarpeta* especificada.<!-- END REF--> Por defecto, se exporta la totalidad de la estructura de la base (métodos, formularios, catálogo, etc.). Puede filtrar los contenidos a exportar utilizando el parámetro *opciones* (ver abajo).

Este comando le permite almacenar archivos de estructura de base de datos en un repositorio de control de fuente (es decir, *Git, Perforce*, etc.). Los cambios sucesivos o los cambios de varias fuentes se pueden comparar utilizando herramientas de control de fuente estándar.

Este comando solo se puede utilizar en los siguientes contextos:

* 4D en modo local o 4D Server (se devuelve un error si se llama desde 4D en modo remoto),
* Base de datos interpretada (el comando no hace nada si se llama desde una base de datos .4DC)

Tenga en cuenta también que cuando se llama desde un componente, el comando siempre exporta la estructura de la base local.

En *rutaCarpeta*, pase la ruta del sistema de la carpeta donde se deben guardar los archivos de exportación.

El parámetro *opciones* le permite personalizar el proceso de conversión. El objeto *opciones* puede contener las siguientes propiedades:

| **Nombre de la propiedad** | **Tipo de valor** | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| withLog                    | booleano o cadena | <table><tbody><tr><td>true o "always": crea un archivo de registro de conversión en la carpeta de Registros de destino.</td></tr><tr><td>"ifNotEmpty": cree un archivo de registro de conversión solo si contiene algunos mensajes</td></tr><tr><td>false u omitido (predeterminado): no crea un archivo de registro de conversión</td></tr></tbody></table> |
| makeProject                | booleano          | true para generar un archivo.4DProject en la carpeta "Project"                                                                                                                                                                                                                                                                                                                                                                                               |
| filter                     | objeto            | Contenidos para exportar. Si se omite (por defecto), todo se exporta                                                                                                                                                                                                                                                                                                                                                                                         |
| projectMethods             | booleano          | true para exportar métodos proyecto                                                                                                                                                                                                                                                                                                                                                                                                                          |
| databaseMethods            | booleano          | true para exportar métodos base                                                                                                                                                                                                                                                                                                                                                                                                                              |
| triggerMethods             | booleano          | true para exportar métodos trigger                                                                                                                                                                                                                                                                                                                                                                                                                           |
| forms                      | booleano          | true para exportar formularios                                                                                                                                                                                                                                                                                                                                                                                                                               |
| pageFormat                 | booleano          | true para incluir el formato de página de formulario como propiedad "pageFormat" de cada archvio json                                                                                                                                                                                                                                                                                                                                                        |
| catalog                    | booleano          | true para exportar definiciones de tabla y campo                                                                                                                                                                                                                                                                                                                                                                                                             |
| folders                    | booleano          | true para exportar las definiciones de las carpetas del Explorador                                                                                                                                                                                                                                                                                                                                                                                           |
| settings                   | booleano          | true para exportar configuraciones de estructura                                                                                                                                                                                                                                                                                                                                                                                                             |
| menus                      | booleano          | true para exportar menús                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| tips                       | booleano          | true para exportar tips                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| lists                      | booleano          | true para exportar listas                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| filters                    | booleano          | true para exportar filtros                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| pictures                   | booleano          | true para exportar imágenes desde la librería de imágenes                                                                                                                                                                                                                                                                                                                                                                                                    |
| resources                  | booleano          | true para exportar la carpeta de Recursos                                                                                                                                                                                                                                                                                                                                                                                                                    |
| trash                      | booleano          | true para exportar métodos y formularios en la papelera (\*)                                                                                                                                                                                                                                                                                                                                                                                                 |
| windowPositions            | booleano          | true para exportar posiciones de ventana                                                                                                                                                                                                                                                                                                                                                                                                                     |
| methodPreferences          | booleano          | true para exportar las preferencias del editor de métodos                                                                                                                                                                                                                                                                                                                                                                                                    |
| buildSettings              | booleano          | true para exportar el archivo buildApp.xml                                                                                                                                                                                                                                                                                                                                                                                                                   |
| dataPath                   | booleano          | true para copiar la última ruta de archivo de datos en el archivo de preferencias del usuario del proyecto                                                                                                                                                                                                                                                                                                                                                   |
| directory                  | booleano          | true para exportar usuarios y grupos 4D                                                                                                                                                                                                                                                                                                                                                                                                                      |
| styleSheets                | booleano          | true para exportar hojas de estilo como CSS                                                                                                                                                                                                                                                                                                                                                                                                                  |
| documentation              | booleano          | true para exportar comentarios del Explorador en archivos markdown                                                                                                                                                                                                                                                                                                                                                                                           |

 (\*) El filtro "trash" es útil solo si también se seleccionan los filtros "projectMethods" o "forms".

**Atención**: cuando se pasa el parámetro *opciones* y se usa el objeto "filtro", debe declarar explícitamente cada propiedad para exportar con el valor **true**. Cuando se pasa este objeto, 4D asume que todas las propiedades están en **false** por defecto.

##### Resultado 

El comando devuelve un objeto que ofrece el estado final de la exportación, así como también información sobre problemas encontrados o errores, si los hay. Se devuelven las siguientes propiedades:

| **Nombre de la propiedad** | **Tipo de valor** | **Descripción**                                                                                                        |
| -------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| success                    | booleano          | True si la operación de exportación fue exitosa, de lo contrario false.                                                |
| messages                   | colección         | Colección de objetos que describen problemas encontrados durante la operación de exportación                           |
| \[ \].severity             | texto             | Nivel de emisión. Valores posibles: "info", "error". Sólo el nivel de "error" establece la propiedad "éxito" en false. |
| \[ \].message              | texto             | Descripción del problema o error, por ejemplo, "No compatible con el tipo de objeto"                                   |
| \[ \].errors               | coleccion         | Pila de errores (si existe)                                                                                            |

**Nota:** los objetos de emisión pueden incluir propiedades adicionales según el contexto.

Los posibles errores incluyen:

* elementos duplicados
* errores de gestión de archivos (el archivo ya existe, archivo bloqueado, disco lleno, etc.)

#### Ejemplo 1 

Desea exportar el archivo de estructura de la base en una carpeta "Export" con la configuración predeterminada:

```4d
 var $result : Object
 $result:=Export structure file("Export")
 If($result.success=True)
    ALERT("Export successful")
 Else
    ALERT("Error during export")
 End if
```

#### Ejemplo 2 

Desea exportar solo los métodos proyecto y base, y un archivo de registro:

```4d
 var $option;$result : Object
 $option:=New object("filter";New object)
 $option.filter.projectMethods:=True
 $option.filter.databaseMethods:=True
 $option.withLog:="always"
 $result:=Export structure file("exportWithLog";$option)
```

#### Ver también 

[FORM Convert to dynamic](form-convert-to-dynamic.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1565 |
| Hilo seguro | &cross; |


