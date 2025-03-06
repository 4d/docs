---
id: create-folder
title: CREATE FOLDER
slug: /commands/create-folder
displayed_sidebar: docs
---

<!--REF #_command_.CREATE FOLDER.Syntax-->**CREATE FOLDER** ( *rutaCarpeta* {; *Operador*} )<!-- END REF-->
<!--REF #_command_.CREATE FOLDER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaCarpeta | Text | &#8594;  | Ruta de acceso a la nueva carpeta a crear |
| * | * | &#8594;  | Crear carpeta jerárquica |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE FOLDER.Summary-->El comando **CREATE FOLDER** crea una carpeta en función de la ruta de acceso que se pasa en *rutaCarpeta*.<!-- END REF-->

Si pasa un nombre en *rutaCarpeta*, la carpeta se crea en la carpeta de la base.

En *rutaCarpeta*, también puede pasar una jerarquía de carpetas a partir de la raíz del volumen o de la carpeta de la base (en este caso, la cadena debe terminar con sun separador de carpeta).   
Si omite el parámetro *\**, se genera un error y ninguna carpeta se crea si ninguna de las carpetas intermediarias existe.   
Si pasa el parámetro *\**, **CREATE FOLDER** recrea la jerarquía de carpetas si es necesaria y no se genera ningún error. En este caso, puede pasar una ruta de acceso de documento en *rutaCarpeta*. Entonces se ignora el nombre del documento pero la jerarquía de carpetas especificada en *rutaCarpeta* se crea recursivamente.

#### Ejemplo 1 

El siguiente ejemplo crea la carpeta “Archivos” en la carpeta de la base:

```4d
 CREATE FOLDER("Archivos")
```

#### Ejemplo 2 

El siguiente ejemplo crea la carpeta Archivos en la carpeta de la base, luego crea las subcarpetas “Enero” y “Febrero”:

```4d
 CREATE FOLDER("Archivos")
 CREATE FOLDER("Archivos\\Enero")
 CREATE FOLDER("Archivos\\Febrero")
```

#### Ejemplo 3 

El siguiente ejemplo crea la carpeta “Archivos” en la raíz del volumen C:

```4d
 CREATE FOLDER("C:\\Archivos")
```

#### Ejemplo 4 

Creación de la jerarquía de carpetas "C:\\Archives\\2011\\Enero\\":

```4d
 CREATE FOLDER("C:\\Archives\\2011\\Enero\\";*)
```

#### Ejemplo 5 

Creación de la subcarpeta "\\Febrero\\" en la carpeta existente "C:\\Archives\\": 

```4d
 CREATE FOLDER("C:\\Archives\\2011\\Febrero\\Doc.txt";*)
  // el archivo "Doc.txt" se ignora
```

#### Ver también 

[FOLDER LIST](folder-list.md)  
[Test path name](test-path-name.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 475 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


