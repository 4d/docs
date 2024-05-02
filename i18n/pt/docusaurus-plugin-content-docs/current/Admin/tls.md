---
id: tls
title: Protocolo TLS (HTTPS)
---

Todos os servidores 4D podem se comunicar em modo seguro através do protocolo TLS (Transport Layer Security):

- o servidor HTTP
- o servidor de aplicação (aplicações desktop cliente-servidor)
- o servidor SQL

In addition, the 4D HTTP client (`HTTP get` command for example) also supports the TLS protocol.

## Visão Geral

O protocolo TLS (sucessor de SSL) foi criado para assegurar trocas de dados entre duas aplicações - principalmente entre servidor web e um navegador. Esse protocolo é amplamente usado e é compatível com a maioria dos navegadores.

No nível de rede, o protocolo de segurança é inserido entre a capa TCP/IP (baixo nível) e o protocolo de alto nível HTTP. Foi criado principalmente para trabalhar com HTTP.

Configuração de rede usando TSL:

![](../assets/en/WebServer/tls1.png)

O protocolo TLS foi criado para autenticar o emissor e o recipiente e assim garantir a confidencialidade e integridade da troca de informações:

- **Authentication**: The sender and receiver identities are confirmed.
- **Confidentiality**: The sent data is encrypted so that no third person can understand the message.
- **Integrity**: The received data has not been changed, by accident or malevolently.

TLS usa uma técnica de criptografia de chave pública baseado em duas chaves assimétricas para criptografia e descriptografia: uma chave pública e outra privada. A chave privada é usada para criptografar os dados. O emissor (o website) não dá essa chave para ninguém.

The public key is used to decrypt the information and is sent to the receivers (web browsers) through a **certificate**. O certificado é fornecido através de uma autoridade de certificação. O site paga ao provedor de certificados para fornecer um certificado que garanta a autenticação do servidor e contenha a chave pública que permita a troca de dados em um modo seguro.

:::note

Os navegadores web autorizam apenas os certificados emitidos por uma autoridade de certificação referenciada em suas propriedades.

:::

## Versão mínima

Como padrão, a versão mínima de um protocolo de segurança aceito pelos servidores 4D é TLS 1.3. You can modify this value by using the `Min TLS version` selector with the `SET DATABASE PARAMETER` command.

:::note

You can control separately the [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) for **webServer objects**.

:::

## Habilitando TLS com o servidor HTTP

Para poder usar o protocolo TLS com o servidor HTTP 4D, você deve:

1. Obtenha seus arquivos de certificado.
2. Instale seus arquivos de certificado no(s) local(is) apropriado(s)
3. Habilitar TLS.

### Certificados

#### Formato

TLS certificates managed by 4D must be in the **PEM format**. Se seu fornecedor de certificado envia um certificado que está no formato binário tais como .crt, .pfx ou .p12, tem que converter para o formato PEM para poder usá-lo. Há sites em que você pode fazer essa conversão on-line.

#### Criptografia

4D fornece certificados nos formatos de criptografia abaixo:

- [**RSA**](https://en.wikipedia.org/wiki/RSA_\(cryptosystem\))
- [**ECDSA**](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)

:::info Compatibidade

The ECDSA encryption format is not supported by the 4D [legacy network layer](../settings/client-server.md#network-layer).

:::

:::note

4D proposes two commands to help you requesting a RSA certificate, [see the tutorial below](#how-to-get-a-rsa-certificate-tutorial).

:::

### Instalação de arquivos de certificado

Os arquivos de certificado incluem:

- **key.pem**: a document containing the private encryption key,
- **cert.pem**: a document containing the certificate.

Both **key.pem** and **cert.pem** files must be located:

- with 4D Server or 4D in local mode, next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, in the client database folder on the remote machine (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv20/help/command/en/page485.html) command). Deve copiar esses arquivos manualmente na máquina remota.

### Ativar TLS

Para que as conexões TLS sejam aceitas pelo servidor HTTP, você deve ativar HTTPS. Refer to the [**Enable HTTPS**](WebServer/webServerConfig.md#enable-https) paragraph to know the different ways to enable TLS for the HTTP server.

:::note

The 4D web server also supports [HSTS option](WebServer/webServerConfig.md#enable-hsts) to declare that browsers should only interact with it via secure HTTPS connections.

:::

### Perfect Forward Secrecy (PFS)

[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) adds an additional layer of security to your communications. Ao invés de usar chaves de troca pré-estabelecidas, PFS cria chaves de sessão cooperativamente entre as partes que se comunicam usando os algoritmos Difie-Hellman (DH). A maneira conjunta com a qual essas chaves são construídas cria um "segredo compartilhado" que impede partes externas de as comprometerem.

Quando TLS estiver ativado no servidor, PFS é ativado automaticamente. If the _dhparams.pem_ file (document containing the server's DH private key) does not already exist, 4D will automatically generate it with a key size of 2048. A geração inicial deste arquivo pode levar vários minutos. The file is placed with the [_key.pem_ and _cert.pem_ files](#installing-certificate-files).

If you use a [custom cipher list](WebServer/webServerConfig.md##cipher-list) and want to enable PFS, you must verify that it contains entries with DH or ECDH (Elliptic-curve Diffie–Hellman) algorithms.

## Ativando TLS com os outros servidores

Para usar TLS com o servidor de aplicações 4D (aplicações cliente-servidor de desktop) ou o servidor SQL, você só precisa ativar comunicações TLS e o servidor automaticamente configura as conexões na inicialização.

- With the application server, select the **Encrypt Client-Server Communications** option in the ["Client-server/Network options" page of the Settings dialog box](../settings/client-server#encrypt-client-server-communications).
- With the SQL server, select the **Enable TLS** option in the ["SQL" page of the Settings dialog box](../settings/sql#sql-server-publishing).

## Como obter o certificado RSA? (tutorial)

Um servidor trabalhando em modo seguro significa que precisa de um certificado digital de uma autoridade de certificações. Esse certificado contém várias informações tais como a ID do site assim como a chave pública usada para comunicar com o servidor. Esse certificado é transmitido aos clientes (por exemplo os navegadores Web) conectando a esse servidor. Quando o certificado tiver sido identificado e aceito, a comunicação é feita em modo seguro.

> Navegadores web autorizam apenas os certificados emitidos por autoridades de certificação referenciados em suas propriedades.

![](../assets/en/WebServer/tls2.png)

A autoridade de certificação é escolhida de acordo com vários critérios. Se a autoridade de certificação for bem reconhecida, o certificado será autorizado por vários navegadores, mas o preço pode ser caro.

Para obter um certificado digital:

1. Generate a private key using the `GENERATE ENCRYPTION KEYPAIR` command.

> **Warning**: For security reasons, the private key should always be kept secret. Na verdade deve ser mantida sempre na máquina servidor. Para o servidor web, o arquivo Key.pem deve ser localizado na pasta Project.

2. Use the `GENERATE CERTIFICATE REQUEST` command to issue a certificate request.

3. Envie a petição de certificado à autoridade de certificação escolhida.
   Para preencher uma petição de certificado, pode ser necessário entrar em contato com a autoridade de certificação. A autoridade checa que a informação transmitida seja correta. A petição de certificado é gerada em um BLOB usando o formato PKCS codificado em base64 (formato PEM). Esse princípio permite que copie e cole as chaves como texto e as envie via E-mail sem modificar o conteúdo da chave. For example, you can save the BLOB containing the certificate request in a text document (using the `BLOB TO DOCUMENT` command), then open and copy and paste its content in a mail or a Web form to be sent to the certification authority.

4. Quando tiver o certificado, crie um arquivo texto chamado "cert.pem" e cole seu conteúdo do certificado dentro dele.
   Pode receber um certificado de várias maneiras (geralmente por email ou formulário HTML). 4D aceita todos os formatos de texto relacionados à plataformas para certificados (OS X, PC, Linux, etc). However, the certificate must be in [PEM format](#format), _i.e._, PKCS encoded in base64.

> Caracteres CR final de linha não são compatíveis em si; deve usar ou CRLF ou LF.

5. Place the “cert.pem” file in the [appropriate location](#installing-certificate-files).

O servidor 4D pode trabalhar em modo seguro. Um certificado é normalmente válido entre 3 meses e um ano.
