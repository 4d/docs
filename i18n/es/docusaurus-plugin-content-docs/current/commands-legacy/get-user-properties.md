---
id: get-user-properties
title: GET USER PROPERTIES
slug: /commands/get-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET USER PROPERTIES.Syntax-->**GET USER PROPERTIES** ( *refUsuario* ; *nombre* ; *inicio* ; *contraseña* ; *nbLogin* ; *ultimoLogin* {; *membrecias* {; *grupoPropietario*}} )<!-- END REF-->
<!--REF #_command_.GET USER PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594;  | Número de referencia único de usuario |
| nombre | Text | &#8592; | Nombre del usuario |
| inicio | Text | &#8592; | Nombre del método de inicio |
| contraseña | Text | &#8592; | Cadena vacía |
| nbLogin | Integer | &#8592; | Números de usos de la base |
| ultimoLogin | Date | &#8592; | Fecha de la última utilización de la base |
| membrecias | Integer array | &#8592; | Números de referencia de los grupos a los que el usuario pertenece |
| grupoPropietario | Integer | &#8592; | Número de referencia del grupo prioritario del usuario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET USER PROPERTIES.Summary-->**GET USER PROPERTIES** devuelve la información sobre el usuario cuyo número de referencia se pasa en el parámetro *refUsuario*.<!-- END REF--> Debe pasar un número de referencia de usuario devuelto por el comando [GET USER LIST](get-user-list.md).

Si la cuenta de usuario no existe o ha sido borrada, se genera el error -9979\. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md). Sino, puede llamar [Is user deleted](is-user-deleted.md) para probar la cuenta de usuario antes de llamar **GET USER PROPERTIES**.

Después de la llamada, recupera el nombre, método de inicio, número de usos y la fecha de la última utilización de la base en los parámetros *nombre*, *inicio*, *nbLogin* y *ultimoLogin*.

**Notas:** 

* Los parámetros *nbLogin* y *ultimoLogin* se utilizan solo en bases binarias. Siempre devuelven respectivamente 0 y 00/00/00 en las bases proyecto.
* el parámetro *contraseña* es obsoleto (siempre devuelve una cadena vacía). Si desea verificar la contraseña de un usuario, utilice la función [Validate password](validate-password.md).

Si pasa el parámetro opcional *membresias*, recupera los números de referencia únicos de los grupos a los cuales pertenece el usuario.

*(B* *ases binarias únicamente)* Puede pasar el parámetro opcional *grupoProp* para obtener el número de referencia del grupo “propietario” del usuario, es decir el grupo propietario por defecto de los objetos creados por este usuario.

**Nota:** The *groupOwner* array always returns 0 values in project databases. 

**Nota para bases binarias:** los valores de ID de grupo y usuario dependen de su creador (Diseñador, Administrador o propietario del grupo afiliado). Para más información, consulte el párrafo *Rangos de identificaciones de usuarios y grupos*.

#### Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando GET USER PROPERTIES o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  
[Validate password](validate-password.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 611 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


