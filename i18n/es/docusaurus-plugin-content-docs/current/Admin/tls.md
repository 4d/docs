---
id: tls
title: Protocolo TLS (HTTPS)
---

Todos los servidores 4D pueden comunicarse en modo seguro a través del protocolo TLS (Transport Layer Security):

- el servidor HTTP
- el servidor de aplicaciones (aplicaciones de escritorio cliente-servidor)
- el servidor SQL

Además, el cliente HTTP de 4D (comando `HTTP get` por ejemplo) también soporta el protocolo TLS.

## Generalidades

El protocolo TLS (sucesor de SSL) ha sido diseñado para asegurar los intercambios de datos entre dos aplicaciones, principalmente entre un servidor web y un navegador. Este protocolo es ampliamente utilizado y es compatible con la mayoría de los navegadores web.

A nivel de red, el protocolo de seguridad se inserta entre la capa TCP/IP (nivel bajo) y el protocolo de alto nivel HTTP. Ha sido diseñado principalmente para trabajar con HTTP.

Configuración de red utilizando TLS:

![](../assets/en/WebServer/tls1.png)

El protocolo TLS está diseñado para autenticar al emisor y al receptor y para garantizar la confidencialidad e integridad de la información intercambiada:

- **Autenticación**: se confirma la identidad del emisor y del receptor.
- **Confidencialidad**: los datos enviados se cifran para que ninguna tercera persona pueda entender el mensaje.
- **Integridad**: los datos recibidos no han sido modificados, por accidente o de forma malintencionada.

TLS utiliza una técnica de cifrado de llave pública basada en un par de llaves asimétricas para el cifrado y el descifrado: una llave pública y una llave privada. La llave privada se utiliza para encriptar los datos. El remitente (el sitio web) no se la da a nadie.

La llave pública se utiliza para descifrar la información y se envía a los receptores (navegadores web) a través de un **certificado**. The certificate is delivered through a Certification Authority. The website pays the certificate provider to deliver a certificate which guaranties the server authentication and contains the public key allowing to exchange data in a secured mode.

:::note

Web browsers authorize only the certificates issued by a Certification Authority referenced in their properties.

:::



## Versión mínima

By default, the minimum version of the secured protocol accepted by the 4D servers is TLS 1.3. Puede modificar este valor utilizando el selector `Min TLS version` con el comando `SET DATABASE PARAMETER`.

:::note

You can control separately the [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) for **webServer objects**.

:::



## Enabling TLS with the HTTP server

To be able to use the TLS protocol with the 4D HTTP server, you have to:

1. Get your certificate files.
2. Install your certificate files at the appropriate location(s)
3. Enable TLS.

### Certificados

#### Formato

Los certificados TLS gestionados por 4D deben estar en formato **PEM**. If your certificate provider sends you a certificate that is in a binary format such as .crt, .pfx or .p12, you have to convert it to PEM format in order to be able to use it. There are web sites where you can do this conversion on-line.

#### Encripción

4D soporta certificados en los siguientes formatos estándar de cifrado:

- [**RSA**](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
- [**ECDSA**](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)

:::info Compatibilidad

El formato de cifrado ECDSA no es compatible con la 4D [capa de red legacy](../settings/client-server.md#network-layer).

:::

:::note

4D le propone dos comandos para ayudarle a solicitar un certificado RSA, [vea el tutorial más abajo](#how-to-get-a-rsa-certificate-tutorial).

:::

### Installing certificate files

Certificate files include:

- **key.pem**: a document containing the private encryption key,
- **cert.pem**: a document containing the certificate.

Both **key.pem** and **cert.pem** files must be located:

- with 4D Server or 4D in local mode, next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, in the client database folder on the remote machine (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv20/help/command/en/page485.html) command). You must copy these files manually on the remote machine.

### Activar TLS

For TLS connections to be accepted by the HTTP server, you must enable HTTPS. Refer to the [**Enable HTTPS**](WebServer/webServerConfig.md#enable-https) paragraph to know the different ways to enable TLS for the HTTP server.

:::note

El servidor web 4D también soporta la opción [HSTS](WebServer/webServerConfig.md#enable-hsts) para declarar que los navegadores sólo deben interactuar con él a través de conexiones seguras HTTPS.

:::


### Perfect Forward Secrecy (PFS)

[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) añade una capa adicional de seguridad a sus comunicaciones. En lugar de utilizar llaves de intercambio predefinidas, PFS crea llaves de sesión de forma cooperativa entre las partes que se comunican utilizando algoritmos Diffie-Hellman (DH). La forma conjunta en que se construyen las llaves crea un "secreto compartido" que impide que partes externas puedan comprometerlas.

Cuando se habilita TLS en el servidor, PFS se habilita automáticamente. Si el archivo *dhparams.pem* (documento que contiene la llave privada DH del servidor) no existe todavía, 4D lo generará automáticamente con un tamaño de llave de 2048. La generación inicial de este archivo puede llevar varios minutos. The file is placed with the [*key.pem* and *cert.pem* files](#installing-certificate-files).

Si utiliza una [lista de cifrado personalizada](WebServer/webServerConfig.md##cipher-list) y desea habilitar el PFS, debe comprobar que contiene entradas con algoritmos DH o ECDH (Elliptic-curve Diffie-Hellman).



## Enabling TLS with the other servers

To use TLS with the 4D application server (client-server desktop applications) or the SQL server, you only have to enable TLS communications and the server automatically configures the connections at startup.

- With the application server, select the **Encrypt Client-Server Communications** option in the ["Client-server/Network options" page of the Settings dialog box](../settings/client-server#encrypt-client-server-communications).
- With the SQL server, select the **Enable TLS** option in the ["SQL" page of the Settings dialog box](../settings/sql#sql-server-publishing).




## ¿Cómo obtener un certificado RSA? (tutorial)

Un servidor que funciona en modo seguro significa que necesita un certificado digital de una autoridad de certificación. Este certificado contiene diversa información, como el ID del sitio, así como la llave pública utilizada para comunicarse con el servidor. Este certificado se transmite a los clientes (por ejemplo, los navegadores web) que se conectan a este servidor. Una vez identificado y aceptado el certificado, la comunicación se realiza en modo seguro.
> Los navegadores web sólo autorizan los certificados emitidos por una autoridad de certificación referenciada en sus propiedades.

![](../assets/en/WebServer/tls2.png)

La autoridad de certificación se elige en función de varios criterios. If the certification authority is well known, the certificate will be authorized by many browsers, however the price to pay will be expensive.

Para obtener un certificado digital:

1. Genere una llave privada utilizando el comando `GENERATE ENCRYPTION KEYPAIR`.
> **Atención**: por razones de seguridad, la llave privada debe mantenerse siempre en secreto. En realidad, debería permanecer siempre en la máquina del servidor. Para el servidor web, el archivo Key.pem debe colocarse en la carpeta Project.

2. Utilice el comando `GENERATE CERTIFICATE REQUEST` para emitir una solicitud de certificado.

3. Envíe la solicitud de certificado a la autoridad de certificación elegida. Para llenar una solicitud de certificado, es posible que tenga que ponerse en contacto con la autoridad de certificación. La autoridad de certificación comprueba que la información transmitida es correcta. La petición de certificado se genera en un BLOB utilizando el formato PKCS codificado en base64 (formato PEM). Este principio permite copiar y pegar las llaves como texto y enviarlas por correo electrónico sin modificar el contenido de la llave. Por ejemplo, puede guardar el BLOB que contiene la solicitud de certificado en un documento de texto (utilizando el comando `BLOB TO DOCUMENT`), y luego abrirlo y copiar y pegar su contenido en un correo o un formulario web para enviarlo a la autoridad de certificación.

4. Una vez que tenga el certificado, cree un archivo de texto llamado "cert.pem" y pegue en él el contenido del certificado. Puede recibir un certificado de diferentes maneras (normalmente por correo electrónico o formulario HTML). 4D acepta todos los formatos de texto relacionados con la plataforma para los certificados (OS X, PC, Linux, etc.). However, the certificate must be in [PEM format](#format), *i.e.*, PKCS encoded in base64.
> Los caracteres de fin de línea CR no se soportan por sí solos; debe utilizar CRLF o LF.

5. Place the “cert.pem” file in the [appropriate location](#installing-certificate-files).

El servidor 4D puede ahora trabajar en modo seguro. A certificate is usually valid between 3 months to a year.
