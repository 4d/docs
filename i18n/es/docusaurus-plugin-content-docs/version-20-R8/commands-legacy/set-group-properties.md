---
id: set-group-properties
title: Set group properties
slug: /commands/set-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set group properties.Syntax-->**Set group properties** ( *refGrupo* ; *nombre* ; *propietario* {; *miembros*} )  : Integer<!-- END REF-->
<!--REF #_command_.Set group properties.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refGrupo | Integer | &#8594;  | Número de referencia único del grupo activo o -1 para añadir un grupo de Diseñador o -2 para añadir un grupo de Administrador |
| &#8592; | Número de identificación único del grupo agregado (si lo hay) |
| nombre | Text | &#8594;  | Nuevo nombre de grupo |
| propietario | Integer | &#8594;  | Número de referencia único del usuario o del propietario del nuevo grupo |
| miembros | Integer array | &#8594;  | Nuevos miembros del grupo |
| Resultado | Integer | &#8592; | Número de referencia único del nuevo grupo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Set group properties.Summary-->Set group properties permite modificar y actualizar las propiedades de un grupo existente cuyo número de referencia único se pasa en *refGrupo*, o para añadir un nuevo grupo.<!-- END REF--> 

Para cambiar las propiedades de un grupo existente, debe pasar un número de referencia válido devuelto por el comando [GET GROUP LIST](get-group-list.md).

Para añadir un nuevo grupo, pase -1 en *refGrupo* (see also notes below for binary databases). 

Después de la llamada, si el grupo se añadió con éxito, devuelve su número de referencia único en *refGrupo*.

Si no pasa -1, -2 o un número de referencia de grupo válido en *refGrupo*, Set group properties no hace nada.

Pase el nuevo nombre del grupo en el parámetro *nombre*.

(*Solo bases binarias*) Pase el número de identificación del nuevo propietario del grupo en el parámetro *propietario*. Este parámetro se ignora en las bases proyecto.

Si no desea cambiar todas las propiedades del grupo (además de los miembros, ver abajo), primero llame a [GET GROUP PROPERTIES](get-group-properties.md) y pase los valores devueltos para las propiedades que desea dejar sin cambios.

Si no pasa el parámetro opcional *miembros*, la lista actual de miembros del grupo permanece sin cambios. Si no pasa *miembros* mientras añade un grupo, el grupo no tendrá miembros.

Si pasa el parámetro opcional *miembros*, modifica toda la lista de miembros para este grupo. Antes de llamar esta rutina, debe llenar el array *miembros* con los números de referencia únicos de los usuarios y grupos que el grupo tendrá como miembros.

Para eliminar todos los miembros de un grupo, pase un array vacío en el parámetro *miembros*.

**Notas para bases binarias**

* Los valores de ID de grupo y usuario dependen de su creador (Diseñador, Administrador o propietario del grupo afiliado). Para más información, consulte el párrafo *Rangos de identificaciones de usuarios y grupos*. Para crear un grupo afiliado al Diseñador, pase -1 en *refGrupo*. Para crear un grupo afiliado con el Administrador, pase -2 en *refGrupo*.
* El propietario de un grupo no está definido automáticamente como miembro del grupo que posee. Es su decisión incluir al propietario del grupo en el grupo, utilizando el parámetro *miembros*.

#### Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando Set group properties o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[GET GROUP LIST](get-group-list.md)  
[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 614 |
| Hilo seguro | &cross; |
| Modifica variables | error |


