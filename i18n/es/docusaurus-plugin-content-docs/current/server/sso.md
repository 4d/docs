---
id: sso
title: Autenticación única (SSO)
---

4D Server le permite implementar soluciones de autenticación única (*Single Sign On* o *SSO*) en sus aplicaciones cliente-servidor en Windows.

Implementing SSO in your 4D solutions will allow users to access the 4D application on Windows without needing to reenter their password when they are already logged into the Windows domain of their company (using Active Directory). Behind the scenes, the 4D Server application delegates the authentication to Active Directory and gets the Windows session login, which you can use to log the 4D user into the application by means of your standard login method.

## Requisitos

La funcionalidad SSO está disponible:

- con las aplicaciones 4D Server en Windows (las aplicaciones 4D monousuario no soportan la autenticación única),
- con la [capa de red QUIC o ServerNet](../settings/client-server.md#network-layer) activada.

## Activar la funcionalidad SSO

De forma predeterminada, la función SSO no está activa en 4D Server. Para utilizar esta funcionalidad, debe marcar la opción **Autenticación del usuario con el servidor de dominio** en la [página de opciones de cliente-servidor/red](../settings/client-server.md#authentication-of-user-with-domain-server) del cuadro de diálogo Parámetros de 4D Server:

![](../assets/en/server/sso.png)

Al marcar esta opción, 4D se conecta de forma transparente al directorio Active del servidor de dominio Windows y obtiene los tokens de autenticación disponibles.

Esta opción permite efectuar una autenticación estándar a través del protocolo NTLM. 4D es compatible con los protocolos NTLM y Kerberos. El protocolo utilizado es seleccionado automáticamente por 4D dependiendo de la [configuración actual](#requirements-for-sso). Si desea utilizar el protocolo Kerberos, también debe completar el campo SPN adicional (ver más abajo).

### Utilizar Kerberos

Si desea utilizar Kerberos como protocolo de autenticación, también debe completar la opción [**Nombre principal de servicio** en la página de opciones de cliente-servidor/red](../settings/client-server.md#service-principal-name) del cuadro de diálogo de Parámetros:

![](../assets/en/server/sso-2.png)

Esta opción declara el SPN tal y como se configuró en Active Directory. Un nombre principal de servicio es un identificador único de una instancia de servicio. Los SPNs son utilizados por la autenticación Kerberos para asociar una instancia de servicio con una cuenta de inicio de sesión de servicio. Esto permite que una aplicación cliente solicite al servicio que autentifique una cuenta, incluso si el cliente no dispone del nombre de la cuenta. For more information, please refer to the [SPN page on the MSDN web site](https://msdn.microsoft.com/en-us/library/windows/desktop/ms677949%28v=vs.85%29.aspx).

El identificador SPN debe respetar este formato:

- "ServiceName/FQDN_user" si el SPN es un atributo de máquina
- "ServiceName/FQDN_computer" si el SPN es un atributo de usuario

Donde:

- *ServiceName* es el nombre del servicio en el que el cliente desea autenticarse.
- The *Fully Qualified Domain Name* (FQDN) is a domain name that specifies its exact location in the tree hierarchy of the Active Directory for both computers and users.

En las aplicaciones 4D, se puede configurar el SPN:

- en las [propiedades de estructura](../Project/architecture.md#sources), para su uso con 4D Server.
- o en los [parámetros del usuario](../Project/architecture.md#settings-user) para las necesidades de despliegue.

## Implementar el SSO

Cuando la funcionalidad SSO está activa, puede confiar en la autenticación basada en las credenciales de la sesión de Windows para abrir una sesión de usuario en 4D Server.

Keep in mind that the SSO feature only provides you with an authenticated login; it is up to you to pass this login to your standard 4D login method. Cuando una aplicación remota 4D intenta conectarse al servidor, hay que ejecutar el comando [`Current client authentication`](../commands/current-client-authentication), que devolverá el nombre de usuario, tal y como está definido en Active Directory. You can then pass this login to your own identification system (using the built-in user and groups, the LDAP commands, or any custom mechanism) to open the appropriate session for the remote user in your 4D application.

Este principio se ilustra en el siguiente gráfico:

```mermaid
flowchart LR

    Client["Remote 4D client"]
    Server["4D Server"]
    Ident(["4D identification<br/>(4D users, LDAP,<br/>custom table...)"])

    Auth(["Current client<br/>authentication()"])
    AD["MS Active<br/>Directory"]

    Client -->|Connection request| Server

    Server -->|login| Ident
    Ident -.->|Client session opening| Server

    Server <--> Auth
    Auth <--> AD

    AD -->|Transparent authentication| Client

    style Client fill:#4F81BD,color:#fff,stroke:#365F91,stroke-width:2px
    style Server fill:#4F81BD,color:#fff,stroke:#365F91,stroke-width:2px
    style AD fill:#9BBB59,color:#fff,stroke:#76923C,stroke-width:2px

    style Auth fill:#ffffff,stroke:#365F91,stroke-width:2px
    style Ident fill:#ffffff,stroke:#365F91,stroke-width:2px
```

El comando [`Current client authentication`](../commands/current-client-authentication) debe llamarse en el método de la base de datos [`On Server Open Connection`](../commands-legacy/on-server-open-connection-database-method.md), que se llama cada vez que un 4D remoto abre una nueva conexión a la aplicación 4D Server. Si falla la autenticación, debe devolver un valor distinto de nulo en el parámetro *$status* para rechazar la conexión.

### Uso del comando Current client authentication

El comando [`Current client authentication`](../commands/current-client-authentication) se utiliza con la siguiente sintaxis:

```4d
$login:=Current client authentication($domain;$protocol)
```

Donde:

- *$login* es el identificador que utiliza el cliente para iniciar sesión en Active Directory (valor de tipo texto). Debe utilizar este valor para identificar al usuario dentro de su proyecto. Si el usuario no está autenticado correctamente, se devuelve una cadena vacía y no se devuelve ningún error.
- *$domain* y *$protocol* son parámetros texto opcionales. Se llenan por el comando y permiten aceptar o rechazar conexiones dependiendo de estos valores:
  - *$domain* es el nombre de dominio del Active Directory
  - *$protocol* es el nombre del protocolo que utiliza Windows para autenticar al usuario.

### Configuración requerida para el SSO

4D Server admite diversas configuraciones de SSO, en función de la arquitectura y los ajustes actuales. El protocolo utilizado para la autenticación (NTLM o Kerberos), así como la información que devuelve el comando [`Current client authentication`](../commands/current-client-authentication), depende de la configuración real, siempre que se cumplan todos los requisitos (ver más abajo). The protocol actually used for authentication is returned in the protocol parameter of the [`Current client authentication`](../commands/current-client-authentication) command.

La siguiente tabla muestra los requisitos para utilizar la autenticación NTLM o Kerberos:

|                                                                                     | NTLM                                                                            | Kerberos                                                                            |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 4D Server y 4D Remote se encuentran en máquinas diferentes                          | sí                                                                              | sí                                                                                  |
| El usuario 4D Server está en el dominio                                             | sí                                                                              | sí                                                                                  |
| El 4D remoto está en el mismo AD que el usuario de 4D Server                        | yes o no(\*)                                                 | sí                                                                                  |
| El SPN se indica en 4D Server                                                       | no                                                                              | yes(\*\*)                                                        |
| Información devuelta por Current client authentication si se cumplen los requisitos | *login*=inicio de sesión esperado, *domain*=dominio esperado, *protocol*="NTLM" | *login*=inicio de sesión esperado, *domain*=dominio esperado, *protocol*="Kerberos" |

(\*) The following specific configuration is supported: the 4D remote user is a local account on a machine that belongs to the same AD as 4D Server. En este caso, el parámetro dominio contiene el nombre de la máquina de 4D Server. Tenga en cuenta que esta función depende de los parámetros de usuario: si no está disponible, se devuelven cadenas vacías.

(\*\*) Si se cumplen todos los requisitos de Kerberos pero el comando [`Current client authentication`](../commands/current-client-authentication) devuelve "NTLM" como protocolo, esto significa que se enfrenta a una de las siguientes situaciones:

- La sintaxis SPN no es válida; en otras palabras, no cumple las [restricciones impuestas por Microsoft](https://msdn.microsoft.com/en-us/library/windows/desktop/ms677949%28v=vs.85%29.aspx).
- O bien, el SPN tiene duplicados en el AD. Este problema debe solucionarlo el administrador del AD.

:::note

A valid syntax does not mean that the SPN declaration itself is correct; more specifically, if the SPN does not exist in the AD, [`Current client authentication`](../commands/current-client-authentication) returns empty strings.

:::

