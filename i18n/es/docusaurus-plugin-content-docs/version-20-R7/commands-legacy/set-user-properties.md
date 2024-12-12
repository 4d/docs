---
id: set-user-properties
title: Set user properties
slug: /commands/set-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set user properties.Syntax-->**Set user properties** ( *refUsuario* ; *nombre* ; *inicio* ; *contraseña* ; *nbLogin* ; *ultimoLogin* {; *membrecias* {; *grupoPropietario*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Set user properties.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refUsuario | Integer | &#8594;  | Número de referencia único de cuenta de usuario, -1 para añadir un usuario |
| &#8592; | Número de referencia único de la cuenta de usuario añadida(si la hay) |
| nombre | Text | &#8594;  | Nuevo nombre de usuario |
| inicio | Text | &#8594;  | Nombre del nuevo método de inicio |
| contraseña | Text | &#8594;  | Nueva contraseña (encriptada) o * para no modificar la contraseña |
| nbLogin | Integer | &#8594;  | Nuevo número de usos de la base |
| ultimoLogin | Date | &#8594;  | Nueva fecha de la última utilización de la base |
| membrecias | Integer array | &#8594;  | Números de referencia de los grupos a los que pertenece el usuario |
| grupoPropietario | Integer | &#8594;  | Número de referencia del grupo propietario del usuario |
| Resultado | Integer | &#8592; | Número de referencia único del nuevo usuario |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Set user properties.Summary-->Set user properties permite modificar y actualizar las propiedades de una cuenta activa de usuario existente cuyo número de referencia se pasa en el parámetro *refUsuario* o para añadir un nuevo usuario.<!-- END REF-->

Si cambia las propiedades de un usuario existente, debe pasar el número de referencia devuelto por el comando [GET USER LIST](get-user-list.md). Si la cuenta de usuario no existe o se ha borrado, se genera el error -9979\. Puede interceptar este error con un método de gestión de errores instalado utilizando [ON ERR CALL](on-err-call.md). De lo contrario, puede llamar [Is user deleted](is-user-deleted.md) para probar la cuenta de usuario antes de llamar Set user properties.

Para añadir un nuevo usuario, pase -1 en *refUsuario* (ver también las notas abajo para bases binarias).

Después de la llamada, si el usuario se añade o modifica con éxito, su número de referencia único es devuelto en *refUsuario* .

Si no pasa -1, -2 o un número de referencia de usuario válido, Set user properties no hace nada.

Antes de llamar este comando, pase el nuevo nombre, método de inicio, contraseña, número de usos y la fecha del último uso del usuario, en *nombre*, *inicio*, *contraseña*, *nbLogin* y *ultimoLogin*. Pase una contraseña no encriptada en el parámetro *contraseña*. 4D la encriptará por usted antes de guardarla en la cuenta de usuario.  
Si el nuevo nombre de usuario pasado en *nombre* no es único (existe un usuario con el mismo nombre), el comando no hace nada y se devuelve el error -9979\. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md).

**Nota:** los parámetros *nbLogin* y *ultimoLogin* se utilizan solo en bases binarias. Se ignoran en las bases proyecto.

Si no quiere cambiar todas las propiedades del usuario (a parte de su grupo, ver a continuación), primero llame [GET USER PROPERTIES](get-user-properties.md) y pase los valores devueltos para las propiedades que no quiere cambiar.

Si no quiere modificar la contraseña de una cuenta, pase el símbolo \* en el parámetro *contraseña*. Esto le permite cambiar otras propiedades de la cuenta del usuario sin cambiar la contraseña de la cuenta.

Si no pasa el parámetro opcional *membrecias*, las membrecías actuales del usuario permanecen iguales. Si no pasa *membrecias* cuando añade un usuario, el usuario no formará parte de ningún grupo.  
Si pasa el parámetro opcional *membrecias*, cambia todas las membrecías para el usuario. Antes de llamar este comando, debe llenar el array *membrecias* con los números de referencia únicos de los grupos cuyos usuarios harán parte.

(*B* *ases binarias únicamente*) Si pasa el parámetro opcional *grupoPropietario*, indica el número de referencia del grupo “propietario”, del usuario, es decir el grupo propietario por defecto de los objetos creados por este usuario. Para anular todas las membrecías de un usuario, pase un array vacío en el parámetro *membrecias*.

**Nota para bases binarias:** los valores de ID de grupo y usuario dependen de su creador (Diseñador, Administrador o propietario del grupo afiliado). Para más información, consulte el párrafo *Rangos de identificaciones de usuarios y grupos*. Para crear un usuario afiliado al Diseñador, pase -1 en refUsuario. Para crear un usuario afiliado con el Administrador, pase -2 en refUsuario.  
  
#### Gestión de errores 

Si no tiene privilegios de acceso para llamar al comando Set user properties o si otro proceso abrió en el sistema de contraseñas, se genera un error de privilegios de acceso. Puede interceptar este error con un método de gestión de errores instalado por [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[DELETE USER](delete-user.md)  
[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Validate password](validate-password.md)  