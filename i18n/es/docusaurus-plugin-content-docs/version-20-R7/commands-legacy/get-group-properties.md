---
id: get-group-properties
title: GET GROUP PROPERTIES
slug: /commands/get-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP PROPERTIES.Syntax-->**GET GROUP PROPERTIES** ( *refGrupo* ; *nombre* ; *propietario* {; *miembros*} )<!-- END REF-->
<!--REF #_command_.GET GROUP PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refGrupo | Integer | &#8594;  | Número de referencia del grupo |
| nombre | Text | &#8592; | Nombre del grupo |
| propietario | Integer | &#8592; | Número de referencia del propietario del grupo |
| miembros | Integer array | &#8592; | Miembros del grupo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET GROUP PROPERTIES.Summary-->GET GROUP PROPERTIES devuelve las propiedades del grupo cuyo número de referencia se pasa en *refGrupo*.<!-- END REF--> Pase el número de referencia del grupo devuelto por el comando [GET GROUP LIST](get-group-list.md). 

Si no pasa un número de referencia válido, GET GROUP PROPERTIES devuelve parámetros vacíos.

Después de la llamada, recupera el nombre del grupo en el parámetro *nombre*.

(*Bases de datos binarias únicamente*). El propietario del grupo se devuelve en el parámetro *propietario*. Este parámetro siempre devuelve 0 en las bases de datos proyecto.

Si pasa el parámetro opcional *miembros*, se devuelven los números de referencia únicos de los usuarios y grupos que pertenecen al grupo.

**Nota para bases de datos binarias**: los valores de ID de grupo y usuario dependen de su creador (Diseñador, Administrador o propietario del grupo afiliado). Para más información, consulte el párrafo *Rangos de identificaciones de usuarios y grupos*.

#### Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando GET GROUP PROPERTIES o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 613 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


