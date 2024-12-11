---
id: get-missing-table-names
title: GET MISSING TABLE NAMES
slug: /commands/get-missing-table-names
displayed_sidebar: docs
---

<!--REF #_command_.GET MISSING TABLE NAMES.Syntax-->**GET MISSING TABLE NAMES** ( *tabfalt* )<!-- END REF-->
<!--REF #_command_.GET MISSING TABLE NAMES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabfalt | Text array | &#8592; | Nombres de las tablas faltantes en la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET MISSING TABLE NAMES.Summary-->El comando GET MISSING TABLE NAMES devuelve los nombres de todas las tablas faltantes de la base en el array *tabFalt*.<!-- END REF-->

Las tablas faltantes son tablas cuyos datos están presentes en el archivo de datos pero que no existen a nivel de la estructura actual. Esto puede suceder cuando un archivo de datos se abre con versiones diferentes de la estructura. 

Por lo general, el escenario es el siguiente:

* el desarrollador ofrece una estructura con las tablas A, B y C,
* el usuario añade tablas personalizadas D y E, utilizando, por ejemplo, los comandos  integrados de 4D, y guarda los datos en estas tablas,
* El desarrollador ofrece una nueva versión de la estructura, que no contiene las tablas D y E.  
En este caso, la versión usuario de la base aún contiene los datos de las tablas D y E, pero no son accesibles. El comando GET MISSING TABLE NAMES devolverá los nombres "D" y "E".

Una vez haya identificado las tablas faltantes de la base, puede reactivarlas vía el comando [REGENERATE MISSING TABLE](regenerate-missing-table.md "REGENERATE MISSING TABLE").

**Nota:** los datos de las tablas faltantes se borran cuando se compacta el archivo de datos (si las tablas no han sido regeneradas). 

#### Ver también 

[REGENERATE MISSING TABLE](regenerate-missing-table.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1125 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


