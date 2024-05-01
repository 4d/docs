---
id: tls
title: Protocolo TLS (HTTPS)
---

Todos los servidores 4D pueden comunicarse en modo seguro a través del protocolo TLS (Transport Layer Security):

- el servidor HTTP
- el servidor de aplicaciones (aplicaciones de escritorio cliente-servidor)
- el servidor SQL

In addition, the 4D HTTP client (`HTTP get` command for example) also supports the TLS protocol.

## Generalidades

El protocolo TLS (sucesor de SSL) ha sido diseñado para asegurar los intercambios de datos entre dos aplicaciones, principalmente entre un servidor web y un navegador. Este protocolo es ampliamente utilizado y es compatible con la mayoría de los navegadores web.

A nivel de red, el protocolo de seguridad se inserta entre la capa TCP/IP (nivel bajo) y el protocolo de alto nivel HTTP. Ha sido diseñado principalmente para trabajar con HTTP.

Configuración de red utilizando TLS:

![](../assets/en/WebServer/tls1.png)

El protocolo TLS está diseñado para autenticar al emisor y al receptor y para garantizar la confidencialidad e integridad de la información intercambiada:

- **Authentication**: The sender and receiver identities are confirmed.
- **Confidentiality**: The sent data is encrypted so that no third person can understand the message.
- **Integrity**: The received data has not been changed, by accident or malevolently.

TLS utiliza una técnica de cifrado de llave pública basada en un par de llaves asimétricas para el cifrado y el descifrado: una llave pública y una llave privada. La llave privada se utiliza para encriptar los datos. El remitente (el sitio web) no se la da a nadie.

The public key is used to decrypt the information and is sent to the receivers (web browsers) through a **certificate**. El certificado se entrega a través de una autoridad de certificación. El sitio web paga al proveedor de certificados para que le entregue un certificado que garantiza la autenticación del servidor y contiene la llave pública que permite intercambiar datos de forma segura.

:::note

Los navegadores web solo autorizan los certificados emitidos por una autoridad de certificación referenciada en sus propiedades.

:::

## Versión mínima

Por defecto, la versión mínima del protocolo de seguridad aceptado por los servidores 4D es TLS 1.3. You can modify this value by using the `Min TLS version` selector with the `SET DATABASE PARAMETER` command.

:::note

You can control separately the [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) for **webServer objects**.

:::

## Habilitar TLS con el servidor HTTP

Para poder utilizar el protocolo TLS con el servidor HTTP de 4D, debe:

1. Obtener sus archivos de certificado.
2. Instale sus archivos de certificado en la(s) ubicación(es) adecuada(s)
3. Activar TLS.

### Certificados

#### Formato

TLS certificates managed by 4D must be in the **PEM format**. Si su proveedor de certificados le envía un certificado que está en un formato binario como . rt, .pfx o .p12, tienes que convertirlo a formato PEM para poder utilizarlo. Hay sitios web donde se puede hacer esta conversión en línea.

#### Encripción

4D soporta certificados en los siguientes formatos estándar de cifrado:

- [**RSA**](https://en.wikipedia.org/wiki/RSA_\(cryptosystem\))
- [**ECDSA**](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)

:::info Compatibilidad

The ECDSA encryption format is not supported by the 4D [legacy network layer](../settings/client-server.md#network-layer).

:::

:::note

4D proposes two commands to help you requesting a RSA certificate, [see the tutorial below](#how-to-get-a-rsa-certificate-tutorial).

:::

### Instalación de archivos de certificado

Los archivos de certificados incluyen:

- **key.pem**: a document containing the private encryption key,
- **cert.pem**: a document containing the certificate.

Both **key.pem** and **cert.pem** files must be located:

- with 4D Server or 4D in local mode, next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, in the client database folder on the remote machine (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv20/help/command/en/page485.html) command). Debe copiar estos archivos manualmente en la máquina remota.

### Activar TLS

Para que el servidor HTTP acepte conexiones TLS, debe activar HTTPS. Refer to the [**Enable HTTPS**](WebServer/webServerConfig.md#enable-https) paragraph to know the different ways to enable TLS for the HTTP server.

:::note

The 4D web server also supports [HSTS option](WebServer/webServerConfig.md#enable-hsts) to declare that browsers should only interact with it via secure HTTPS connections.

:::

### Perfect Forward Secrecy (PFS)

[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) adds an additional layer of security to your communications. En lugar de utilizar llaves de intercambio predefinidas, PFS crea llaves de sesión de forma cooperativa entre las partes que se comunican utilizando algoritmos Diffie-Hellman (DH). La forma conjunta en que se construyen las llaves crea un "secreto compartido" que impide que partes externas puedan comprometerlas.

Cuando se habilita TLS en el servidor, PFS se habilita automáticamente. If the _dhparams.pem_ file (document containing the server's DH private key) does not already exist, 4D will automatically generate it with a key size of 2048. La generación inicial de este archivo puede llevar varios minutos. The file is placed with the [_key.pem_ and _cert.pem_ files](#installing-certificate-files).

If you use a [custom cipher list](WebServer/webServerConfig.md##cipher-list) and want to enable PFS, you must verify that it contains entries with DH or ECDH (Elliptic-curve Diffie–Hellman) algorithms.

## Activar TLS con los otros servidores

Para utilizar TLS con el servidor de aplicaciones 4D (aplicaciones cliente-servidor de escritorio) o el servidor SQL, solo tiene que habilitar las comunicaciones TLS y el servidor configura automáticamente las conexiones al inicio.

- With the application server, select the **Encrypt Client-Server Communications** option in the ["Client-server/Network options" page of the Settings dialog box](../settings/client-server#encrypt-client-server-communications).
- With the SQL server, select the **Enable TLS** option in the ["SQL" page of the Settings dialog box](../settings/sql#sql-server-publishing).

## ¿Cómo obtener un certificado RSA? (tutorial)

Un servidor que funciona en modo seguro significa que necesita un certificado digital de una autoridad de certificación. Este certificado contiene diversa información, como el ID del sitio, así como la llave pública utilizada para comunicarse con el servidor. Este certificado se transmite a los clientes (por ejemplo, los navegadores web) que se conectan a este servidor. Una vez identificado y aceptado el certificado, la comunicación se realiza en modo seguro.

> Los navegadores web sólo autorizan los certificados emitidos por una autoridad de certificación referenciada en sus propiedades.

![](../assets/en/WebServer/tls2.png)

La autoridad de certificación se elige en función de varios criterios. If the certification authority is well known, the certificate will be authorized by many browsers, however the price to pay will be expensive.

Para obtener un certificado digital:

1. Generate a private key using the `GENERATE ENCRYPTION KEYPAIR` command.

> **Warning**: For security reasons, the private key should always be kept secret. En realidad, debería permanecer siempre en la máquina del servidor. Para el servidor web, el archivo Key.pem debe colocarse en la carpeta Project.

2. Use the `GENERATE CERTIFICATE REQUEST` command to issue a certificate request.

3. Envíe la solicitud de certificado a la autoridad de certificación elegida.
   Para llenar una solicitud de certificado, es posible que tenga que ponerse en contacto con la autoridad de certificación. La autoridad de certificación comprueba que la información transmitida es correcta. La petición de certificado se genera en un BLOB utilizando el formato PKCS codificado en base64 (formato PEM). Este principio permite copiar y pegar las llaves como texto y enviarlas por correo electrónico sin modificar el contenido de la llave. For example, you can save the BLOB containing the certificate request in a text document (using the `BLOB TO DOCUMENT` command), then open and copy and paste its content in a mail or a Web form to be sent to the certification authority.

4. Una vez que tenga el certificado, cree un archivo de texto llamado "cert.pem" y pegue en él el contenido del certificado.
   Puede recibir un certificado de diferentes maneras (normalmente por correo electrónico o formulario HTML). 4D acepta todos los formatos de texto relacionados con la plataforma para los certificados (OS X, PC, Linux, etc.). However, the certificate must be in [PEM format](#format), _i.e._, PKCS encoded in base64.

> Los caracteres de fin de línea CR no se soportan por sí solos; debe utilizar CRLF o LF.

5. Place the “cert.pem” file in the [appropriate location](#installing-certificate-files).

El servidor 4D puede ahora trabajar en modo seguro. Un certificado suele tener una validez de entre 3 meses y un año.
