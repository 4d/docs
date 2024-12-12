---
id: change-current-user
title: CHANGE CURRENT USER
slug: /commands/change-current-user
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE CURRENT USER.Syntax-->**CHANGE CURRENT USER** {( *usuario* ; *contraseña* )}<!-- END REF-->
<!--REF #_command_.CHANGE CURRENT USER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| usuario | Text, Integer | &#8594;  | Nombre o número de referencia único |
| contraseña | Text | &#8594;  | Contraseña (no encriptada) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.CHANGE CURRENT USER.Summary-->CHANGE CURRENT USER permite cambiar la identidad del usuario actual en la base, sin tener que salir.<!-- END REF--> El usuario puede cambiar su identidad utilizando la caja de diálogo de identificación del usuario de la base (cuando el comando se llama sin parámetros) o directamente vía el comando. Cuando un usuario cambia su identidad, el usuario abandona sus privilegios de acceso anteriores para beneficiarse de los del usuario elegido.

**Notas:** 

* este comando no tiene efecto en bases proyecto abiertas en modo mono usuario.
* si se definió un alias para el usuario actual con el comando [SET USER ALIAS](set-user-alias.md), se restablece mediante la llamada del comando **CHANGE CURRENT USER**.

Si el comando **CHANGE CURRENT USER** se ejecuta sin parámetros, se muestra la caja de diálogo de identificación del usuario de la base. El usuario debe entonces introducir o seleccionar un nombre y contraseña válidos para entrar a la base. El contenido de la caja de diálogo de conexión depende de las opciones definidas en la página **Seguridad** de las Preferencias de la base.

Igualmente puede pasar los parámetros opcionales *usuario* y *contraseña* para especificar por programación la nueva cuenta a utilizar.

Pase en el parámetro *usuario* el nombre o el número de referencia única (*refUsuario*) de la cuenta a utilizar. Los nombres y los números de usuario se pueden obtener utilizando el comando [GET USER LIST](get-user-list.md).

Si la cuenta de usuario designada no existe o fue borrada, se genera el error -9979\. Puede interceptar este error con el método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md). De lo contrario, puede llamar la función [Is user deleted](is-user-deleted.md) para probar la cuenta de usuario antes de llamar este comando.

Pase en el parámetro *contraseña* la contraseña no encriptada de la cuenta de usuario. Si la contraseña no corresponde con el usuario, el comando devolverá el mensaje de error -9978 y no hará nada.

El comando es temporizado con el fin de evitar ataques de fuerza bruta, en otras palabras, intentos de múltiples combinaciones de nombres de usuario/contraseña. Como resultado, después de la cuarta llamada a este comando, no se ejecuta por un periodo de 10 segundos. Esta temporización es global a la estación de trabajo.

**Nota:** cuando el grupo del usuario actual ofrece acceso a una funcionalidad "serializada" (por ejemplo, un plug-in), se utiliza una licencia correspondiente que permanecerá vinculada a la cuenta de usuario 4D hasta el final de la sesión, incluso si se llama a **CHANGE CURRENT USER** y el grupo del nuevo usuario no ofrece acceso a la funcionalidad.

##### Ofrecer una caja de diálogo de gestión de acceso personalizada 

El comando CHANGE CURRENT USER permite establecer cajas de diálogo personalizadas para introducir el nombre y contraseña (con reglas de entrada y de vencimiento) que tengan las mismas ventajas del sistema de control de accesos de 4D. 

El principio es el siguiente:

**1.** La entrada en la base se efectúa directamente en modo “Usuario por defecto”, sin caja de diálogo. 

**2.** En el Método de base On Startup, el desarrollador provoca la visualización de una caja de diálogo personalizada de entrada del nombre de usuario y contraseña. Todos los tipos de procesos se pueden ver en la caja de diálogo:  
  
\- Es posible mostrar la lista de usuarios de la base, como en la caja de diálogo de acceso estándar de 4D, utilizando el comando [GET USER LIST](get-user-list.md "GET USER LIST"). 

\- El campo de entrada de la contraseña puede contener varios controles con el fin de verificar la validez de los caracteres introducidos (mínimo número de caracteres, unicidad, etc.). 

\- Para que los caracteres de contraseñas se introduzcan de manera que estén enmascarados en pantalla, puede utilizar el comando [FILTER KEYSTROKE](filter-keystroke.md "FILTER KEYSTROKE") con la fuente especial *%password*. 

\- Las reglas de vencimiento pueden aplicarse en el momento en que la caja de diálogo se valida: fecha de vencimiento, cambio forzado a la conexión inicial, bloqueo de cuenta después de varias entradas incorrectas, memorización de contraseñas ya utilizadas, etc. 

**3.** Cuando se valida la entrada, la información requerida (nombre de usuario y contraseña) se pasan al comando CHANGE CURRENT USER para abrir la base con los privilegios de la cuenta del usuario.

#### Ejemplo 

El siguiente ejemplo muestra la caja de diálogo de conexión:

```4d
 CHANGE CURRENT USER
```

**Nota:** este código no hace nada en una base proyecto monousuario.

#### Ver también 

[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  