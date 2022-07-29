---
id: tls
title: TLS Protocol (HTTPS)
---

All 4D servers can communicate in secured mode through the TLS (Transport Layer Security) protocol:

- the web server
- the application server (client-server desktop applications)
- the SQL server

## Visão Geral

The TLS protocol (successor of SSL) has been designed to secure data exchanges between two applications —mainly between a web server and a browser. This protocol is widely used and is compatible with most web browsers.

At the network level, the security protocol is inserted between the TCP/IP layer (low level) and the HTTP high level protocol. It has been designed mainly to work with HTTP.

Network configuration using TLS:

![](assets/en/WebServer/tls1.png)

The TLS protocol is designed to authenticate the sender and receiver and to guarantee the confidentiality and integrity of the exchanged information:

*   **Authentication**: The sender and receiver identities are confirmed.
*   **Confidentiality**: The sent data is encrypted so that no third person can understand the message.
*   **Integrity**: The received data has not been changed, by accident or malevolently.

TLS uses a public key encryption technique based on a pair of asymmetric keys for encryption and decryption: a public key and a private key. The private key is used to encrypt data. The sender (the website) does not give it to anyone. The public key is used to decrypt the information and is sent to the receivers (web browsers) through a certificate. When using TLS with the Internet, the certificate is delivered through a certification authority, such as Verisign®. The website pays the Certificate Authority to deliver a certificate which guaranties the server authentication and contains the public key allowing to exchange data in a secured mode.
> For more information on the encryption method and the public and private key issues, refer to the `ENCRYPT BLOB` command description.

## Minimum version

By default, the minimum version of the secured protocol accepted by the server is TLS 1.2. You can modify this value by using the `Min TLS version` selector with the `SET DATABASE PARAMETER command`.

You can control the level of security of your web server by defining the [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) accepted for connections.

## How to get a certificate?

A server working in secured mode means that you need a digital certificate from a certification authority. This certificate contains various information such as the site ID as well as the public key used to communicate with the server. This certificate is transmitted to the clients (e.g. Web browsers) connecting to this server. Once the certificate has been identified and accepted, the communication is made in secured mode.
> Navegadores web autorizam apenas os certificados emitidos por autoridades de certificação referenciados em suas propriedades.

![](assets/en/WebServer/tls2.png)

The certification authority is chosen according to several criteria. If the certification authority is well known, the certificate will be authorized by many browsers, however the price to pay will be expensive.

To get a digital certificate:

1. Generate a private key using the `GENERATE ENCRYPTION KEYPAIR` command.
> **Warning**: For security reasons, the private key should always be kept secret. Actually, it should always remain with the server machine. For the Web server, the Key.pem file must be placed in the Project folder.

2. Use the `GENERATE CERTIFICATE REQUEST` command to issue a certificate request.

3. Send the certificate request to the chosen certificate authority.<p> To fill in a certificate request, you might need to contact the certification authority. The certification authority checks that the information transmitted are correct. The certificate request is generated in a BLOB using the PKCS format encoded in base64 (PEM format). This principle allows you to copy and paste the keys as text and to send them via E-mail without modifying the key content. For example, you can save the BLOB containing the certificate request in a text document (using the `BLOB TO DOCUMENT` command), then open and copy and paste its content in a mail or a Web form to be sent to the certification authority.

4. Once you get your certificate, create a text file named “cert.pem” and paste the contents of the certificate into it.<p> You can receive a certificate in different ways (usually by email or HTML form). 4D accepts all platform-related text formats for certificates (OS X, PC, Linux, etc.). However, the certificate must be in PEM format, *i.e.*, PKCS encoded in base64.
> CR line-ending characters are not supported on their own; you must use CRLF or LF.

5. Place the “cert.pem” file in the [appropriate location](#installation-and-activation).

The 4D server can now work in a secured mode. A certificate is valid between 3 months to a year.

## Instalação e ativação

### Installing `key.pem` and `cert.pem` files

To be able to use the TLS protocol with the server, you must install the **key.pem** (document containing the private encryption key) and **cert.pem** (document containing the certificate) at the appropriate location(s). Different locations are required depending on the server on which you want to use TLS.
> Default *key.pem* and *cert.pem* files are provided with 4D. For a higher level of security, we strongly recommend that you replace these files with your own certificates.

#### With the web server

To be used by the 4D web server, the **key.pem** and **cert.pem** files must be placed:

- with 4D in local mode or 4D Server, next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, in the client database folder on the remote machine (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv19/help/command/en/page485.html) command).

You must copy these files manually on the remote machine.

#### With the application server (client-server desktop applications)

To be used by the 4D application server, the **key.pem** and **cert.pem** files must be placed:

- in the [**Resources** folder](Project/architecture.md#resources) of the 4D Server application
- and in the **Resources** folder on each remote 4D application (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv19/help/command/en/page485.html) command).

#### With the SQL server

To be used by the 4D SQL server, the **key.pem** and **cert.pem** files must be placed next to the [project folder](Project/architecture.md#project-folder).


### Enabling TLS

A instalação de arquivos **key.pem** e **cert.pem** torna possível usar TLS com o servidor 4D. Entretanto para que as conexões TLS sejam aceitas pelo servidor, precisa ativá-las:

- Com o servidor 4D web, precisa ativar HTTPS [](WebServer/webServerConfig.md#enable-https). Pode estabelecer a opção [HSTS ](WebServer/webServerConfig.md#enable-hsts) para redirigir os navegadores que tentem conectar no modo http.
- Com o servidor de aplicação, deve selecionar a opção **Encrypt Client-Server Communications** na página "Client-server/Network options" do diálogo de configurações.
- Com o servidor SQL deve selecionar a opção **Ativar TLS** na página "SQL" do diálogo configurações.

> The 4D web server also supports [HSTS option](WebServer/webServerConfig.md#enable-hsts) to declare that browsers should only interact with it via secure HTTPS connections.

## Perfect Forward Secrecy (PFS)

[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) adiciona mais um nível de segurança para suas comunicações. Ao invés de usar chaves de troca pré-estabelecidas, PFS cria chaves de sessão cooperativamente entre as partes que se comunicam usando os algoritmos Difie-Hellman (DH). A maneira conjunta com a qual essas chaves são construídas cria um "segredo compartilhado" que impede partes externas de as comprometerem.

Quando TLS estiver ativado no servidor, PFS é ativado automaticamente. Se o arquivo *dhparams.pem* (documento que contém a chave privada DH do servidor) ainda não existir, 4D vai gerar o arquivo automaticamente com um tamanho de chave de  2048. A geração inicial deste arquivo pode levar vários minutos. O arquivo é colocado com  os arquivos [*key.pem* e *cert.pem*](#key-pem-and-cert-pem-files).

Se utilizar uma [lista de cifrado personalizada](WebServer/webServerConfig.md##cipher-list) e quiser habilitar o PFS, deve comprovar que contenha entradas com algoritmos DH ou ECDH (Elliptic-curve Diffie-Hellman).
