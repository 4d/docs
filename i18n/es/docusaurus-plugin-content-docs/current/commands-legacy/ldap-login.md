---
id: ldap-login
title: LDAP LOGIN
slug: /commands/ldap-login
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGIN.Syntax-->**LDAP LOGIN** ( *url* ; *login* ; *password* {; *digest*} )<!-- END REF-->
<!--REF #_command_.LDAP LOGIN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL del servidor LDAP al cual conectarse |
| login | Text | &#8594;  | Cuenta del usuario |
| password | Text | &#8594;  | Contraseña del usuario |
| digest | Integer | &#8594;  | 0 = enviar contraseña en digest MD5 (por defecto), 1 = enviar contraseña sin encripción |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LDAP LOGIN.Summary-->El comando **LDAP LOGIN** abre una conexión de sólo lectura en el servidor LDAP especificado por el parámetro *url* con los identificadores *login* y *contraseña* suministrados.<!-- END REF--> Si es aceptado por el servidor, esta conexión se utiliza para todas las búsquedas LDAP efectuadas posteriormente en el proceso actual hasta que el comando *RuntimeVLWinFolder* se ejecute (o hasta que el proceso se cierre).

En *url*, pase el URL completo del servidor LDAP al cual conectarse, incluyendo el esquema y el puerto (389 por defecto). Este parámetro debe ser compatible con la [rfc2255](https://www.ietf.org/rfc/rfc2255.txt).   
  
Puede abrir conexiones seguras a través de TLS utilizando una mediante el uso de una *url* que empieza comience por "ldaps" y que utilice un número de puerto específico (por ejemplo "ldaps://svr.ldap.acme.com:1389"). El servidor LDAP debe tener un certificado SSL (al menos para Microsoft Active Directory). Es muy recomendable utilizar una conexión TLS cuando se envía la contraseña en texto plano (ver más abajo).

**Nota:** si pasa una cadena vacía en el parámetro *url*, el comando intentará conectarse al servidor LDAP predeterminado disponible en el dominio; (esta funcionalidad está diseñada para propósitos de prueba solamente, por razones de rendimiento no debería ser utilizada en producción).  

En *login*, pase la cuenta de usuario en el servidor LDAP, y en *contraseña*, pase la contraseña de usuario. Por defecto, el *login* puede ser una de las siguientes cadenas de inicio de sesión, dependiendo de la configuración del servidor LDAP:

* un Distinguished Name (DN), por ejemplo "CN=John Smith,OU=users,DC=example,DC=com"
* un nombre de usuario (CN), por ejemplo "CN=John Smith"
* una dirección de correo electrónico, por ejemplo "johnsmith@4d.fr"
* un SAM-Account-Name, por ejemplo "jsmith".

Tenga en cuenta que los valores aceptados para el *login* están relacionadas con el modo de transmisión de la contraseña definido por el parámetro *digest*. Por ejemplo, en una configuración por defecto de MS Active Directory:

* Cuando el modo de transmisión es LDAP password MD5, el único valor aceptado para un inicio de sesión es el SAM-Account-Name.
* Cuando el modo de transmisión es LDAP password plain text (texto plano), el parámetro *login* puede ser DN, CN o una dirección de correo electrónico. Un SAM-Account-Name también se acepta, pero sólo cuando es precedido por el nombre de dominio (por ejemplo, (for example "dc-acme.com/jsmith").

El parámetro *digest* le permite modificar la forma en que la contraseña se transmite por la red. Puede utilizar una de las siguientes constantes, ubicadas en el tema *LDAP*:

| Constante                | Tipo         | Valor | Comentario                                                    |
| ------------------------ | ------------ | ----- | ------------------------------------------------------------- |
| LDAP password MD5        | Entero largo | 0     | (Por defecto) Enviar contraseña encriptada en MD5             |
| LDAP password plain text | Entero largo | 1     | Envío de contraseña sin encripción (conexión TLS recomendada) |

Por defecto, la *contraseña* se transmite en digest MD5\. Pase LDAP password plain text si es necesario, por ejemplo, si desea utilizar diferentes valores de tipo de inicio de sesión con el servidor LDAP. En un entorno de producción, se recomienda utilizar una conexión TLS para la *url*. 

**Nota:** la autenticación con una contraseña vacía permite introducir el modo de conexión anónima (si está autorizado por el servidor LDAP). Sin embargo, en este modo, se pueden generar errores si se intenta realizar cualquier operación que no esté permitida en este modo específico.

Si los parámetros de inicio de sesión son válidos, una conexión con el servidor LDAP se abre en el proceso 4D. Luego puede buscar y recuperar información utilizando los comandos LDAP.

No olvide llamar al comando *RuntimeVLWinFolder* cuando la conexión al servidor LDAP ya no sea necesaria.

#### Ejemplo 1 

Usted quiere conectarse a un servidor LDAP y efectuar una búsqueda:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")
 $vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";”cn=John Doe";LDAP all levels;$_tabAttributes)
 LDAP LOGOUT //no olvide desconectarse
```

#### Ejemplo 2 

Este ejemplo intenta conectarse a una aplicación:

```4d
 ON ERR CALL("ErrHdlr") //gestión de errores
 errOccured:=False
 errMsg:=""
 If(ppBindMode=1) //si contraseña es modo por defecto
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)
 Else
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)
 End if
 
 Case of
    :(Not(errOccured))
       ALERT("Ahora está conectado a su servidor LDAP.  ")
 
    :(errOccured)
       ALERT("Errores en sus parámetros")
 End case
 
 LDAP LOGOUT
 ON ERR CALL("")
```

#### Ver también 

*LDAP*  
[LDAP LOGOUT](ldap-logout.md)  