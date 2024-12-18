---
id: get-group-list
title: GET GROUP LIST
slug: /commands/get-group-list
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP LIST.Syntax-->**GET GROUP LIST** ( *nomGrupos* ; *numGrupos* )<!-- END REF-->
<!--REF #_command_.GET GROUP LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomGrupos | Text array | &#8592; | Nombres de los grupos tal como aparecen en el editor de contraseñas |
| numGrupos | Integer array | &#8592; | Números de referencia únicos para cada grupo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET GROUP LIST.Summary-->GET GROUP LIST llena los arrays *nomGrupos y* *numGrupos* con los nombres y los números de referencia únicos de los grupos tal como aparecen en la ventana del editor de contraseñas.<!-- END REF-->

El array *numGrupos*, sincronizado con el array *nomGrupos*, se llena con los números de referencia únicos de los grupos.

* En las bases proyecto, estos números comienzan en 15001 y se asignan dinámicamente al inicio y se mantienen durante la sesión.
* En las bases de datos binarias, estos números se almacenan y pertenecen a un rango específico, según el creador del grupo. Para más información, consulte el párrafo *Rangos de identificaciones de usuarios y grupos*.

#### Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando GET GROUP LIST o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 610 |
| Hilo seguro | &cross; |
| Modifica variables | error |


