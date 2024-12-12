---
id: current-client-authentication
title: Current client authentication
slug: /commands/current-client-authentication
displayed_sidebar: docs
---

<!--REF #_command_.Current client authentication.Syntax-->**Current client authentication** {( *dominio* ; *protocolo* )} : Text<!-- END REF-->
<!--REF #_command_.Current client authentication.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| dominio | Text | &#8592; | Nombre del dominio |
| protocolo | Text | &#8592; | "Kerberos", "NTLM", o cadena vacía |
| Resultado | Text | &#8592; | Nombre de usuario de sesión devuelto por Windows |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current client authentication.Summary-->El comando **Current client authentication** pide al servidor Active Directory de Windows autenticar al cliente actual y si tiene éxito, devuelve el nombre de inicio de sesión de Windows para este cliente (identificador de sesión).<!-- END REF--> Si la autenticación falla, se devuelve una cadena vacía. 

Este comando sólo se puede utilizar en el contexto de una implementación SSO en Windows con 4D Server. Para más información, por favor consulte la sección *Autenticación única (Single Sign On - SSO) en Windows*.

Por lo general, el cliente y el servidor deben ser gestionados por el mismo Active Directory. Sin embargo, diferentes configuraciones pueden ser soportadas, como se describe en la sección *Configuraciones soportadas*. 

La cadena devuelta por el comando debe pasarse a su módulo de identificación 4D para conceder los derechos de acceso al cliente en función de su identificador de sesión de Windows; si define un "usuario por defecto", puede implementar una interfaz en donde el usuario no tenga que volver a introducir los ID (ver ejemplo). 

Opcionalmente, el comando puede devolver dos parámetros de texto:

* *dominio*: nombre del dominio al que pertenece el cliente.
* *protocolo*: nombre del protocolo utilizado por Windows para autenticar al usuario. Puede ser "Kerberos" o "NTLM", dependiendo de los recursos disponibles. Si la autenticación falla, se devuelve una cadena vacía ("").

Estos parámetros se pueden utilizar para aceptar o rechazar las conexiones si desea filtrar el acceso en relación con el dominio o el protocolo.

##### Nivel de seguridad de la autenticación 

El nivel de seguridad de la autenticación (es decir, cuánto se puede confiar en el inicio de sesión de usuario) depende de la forma en que el usuario se ha identificado. El valor devuelto en los parámetros del comando **Current client authentication** permitirán conocer en qué se basa el inicio de sesión (si lo hay) y, por tanto, el nivel de seguridad: 

| **Login** | **dominio** | **protocolo** | **Comentarios**                                                                                                                                                                                                                                                                                                                                             |
| --------- | ----------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vacío     | vacío       | vacío         | El comando no pudo obtener información de autenticación sobre el usuario que ha iniciado sesión                                                                                                                                                                                                                                                             |
| lleno     | vacío       | NTLM          | El ID devuelto es la local, el cual ha sido definido en el equipo local                                                                                                                                                                                                                                                                                     |
| lleno     | lleno       | NTLM          | El ID devuelto ha sido autenticado utilizando el protocolo NTLM en el dominio devuelto en el parámetro *dominio*. En este caso, debe seleccionar el dominio para aumentar el nivel de seguridad. Dado que algunas arquitecturas tienen un dominio forest, es necesario asegurarse de que el dominio en el que se ha autenticado el usuario sea el esperado. |
| lleno     | lleno       | Kerberos      | El ID devuelto ha sido autenticado con el protocolo Kerberos en el dominio esperado. Esta configuración ofrece el más alto nivel de seguridad.                                                                                                                                                                                                              |

Para más información sobre los requerimientos, por favor consulte el párrafo .

#### Ejemplo 

Usted quiere configurar su aplicación para que los usuarios remotos 4D en Windows se conecten directamente a 4D Server (no se muestra ningún cuadro de diálogo de contraseña), estando conectado con sus derechos actuales. Para ello, es necesario: 

1. Habilitar el control de acceso de su base mediante la adición de una contraseña para el Diseñador.
2. En la página "Seguridad" del cuadro de diálogo Propiedades de la base, designar a un usuario como el "usuario por defecto":  
![](../assets/en/commands/pict2909681.en.png)  
Con esta configuración, no se muestra un diálogo de contraseña para un 4D remoto que se conecta al servidor, todos los clientes se registran como "Bob".
3. En el método base On Server Open Connection, agregue el siguiente código para comprobar la autenticación de usuario del directorio  Active:

```4d
  //Método base On Server Open Connection
 var $0;$1;$2;$3 : Integer
 $login:=Current client authentication($domain;$protocol)
 If($login #"") //un login fue devuelto
    CHANGE CURRENT USER($login;"") //define el usuario actual
    $0:=0 //acceso aceptado
 Else
    $0:=-1 //rechazar la conexión
 End if
```

**Nota:** este escenario básico requiere que los nombres de usuario 4D repliquen los nombres del directorio Active, para un mapeo automático. En una aplicación más sofisticada, la información devuelta por el comando se asigna a una tabla \[usuarios\] para crear o seleccionar los usuarios con base en la información del directorio Active.
