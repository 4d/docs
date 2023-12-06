---
id: tls
title: Protocolo TLS (HTTPS)
---

Todos os servidores 4D podem se comunicar em modo seguro através do protocolo TLS (Transport Layer Security):

- o servidor web
- o servidor de aplicação (aplicações desktop cliente-servidor)
- o servidor SQL

## Visão Geral

O protocolo TLS (sucessor de SSL) foi criado para assegurar trocas de dados entre duas aplicações - principalmente entre servidor web e um navegador. Esse protocolo é amplamente usado e é compatível com a maioria dos navegadores.

No nível de rede, o protocolo de segurança é inserido entre a capa TCP/IP (baixo nível) e o protocolo de alto nível HTTP. Foi criado principalmente para trabalhar com HTTP.

Configuração de rede utilizando TSL:

![](../assets/en/WebServer/tls1.png)

O protocolo TLS foi criado para autenticar o emissor e o recipiente e assim garantir a confidencialidade e integridade da troca de informações:

- **Autenticação**: As identidades do emissor e do receptor são confirmadas.
- **Confidencialidade**: O dado enviado é criptografado para que um terceiro não possa entender a mensagem.
- **Integridade**: Os dados recebidos não foram modificados, seja por acidente ou com má intenção.

TLS usa uma técnica de criptografia de chave pública baseado em duas chaves assimétricas para criptografia e descriptografia: uma chave pública e outra privada. A chave privada é usada para criptografar os dados. O emissor (o website) não dá essa chave para ninguém. A chave pública é usada para decriptografar a informação e enviá-la para os recipientes (navegadores web) através de um certificado. Quando usar TLS com a Internet, o certificado é entregue através de uma autoridade de certificação, como Verisign®. O website paga a Autoridade de Certificação para entregar um certificado que garante a autenticação do servidor e contém a chave pública que permite a troca de dados em um modo seguro.
> Para saber mais sobre o método de criptografia e chaves privadas e públicas, veja a descrição do comando `ENCRYPT BLOB`.

## Versão mínima

Como padrão, a versão mínima de um protocolo de segurança aceito pelo servidor é TLS 1.2. Pode modificar esse valor usando o seletor `Min TLS version` com o comando `SET DATABASE PARAMETER`.

Pode controlar o nível de segurança de seu servidor web definindo a versão [TLS mínima](WebServer/webServerConfig.md#minimum-tls-version) aceita para conexões.

## Como obter o certificado?

Um servidor trabalhando em modo seguro significa que precisa de um certificado digital de uma autoridade de certificações. Esse certificado contém várias informações tais como a ID do site assim como a chave pública usada para comunicar com o servidor. Esse certificado é transmitido aos clientes (por exemplo os navegadores Web) conectando a esse servidor. Quando o certificado tiver sido identificado e aceito, a comunicação é feita em modo seguro.
> Navegadores web autorizam apenas os certificados emitidos por autoridades de certificação referenciados em suas propriedades.

![](../assets/en/WebServer/tls2.png)

A autoridade de certificação é escolhida de acordo com vários critérios. Se a autoridade de certificação for bem reconhecida, o certificado será autorizado por vários navegadores, mas o preço pode ser caro.

Para obter um certificado digital:

1. Crie uma chave privada usando o comando `GENERATE ENCRYPTION KEYPAIR`.

:::caution

For security reasons, the private key should always be kept secret. Na verdade deve ser mantida sempre na máquina servidor. Para o servidor web, o arquivo Key.pem deve ser localizado na pasta Project.

:::

2. Use o comando `GENERATE CERTIFICATE REQUEST` para emitir uma petição de certificado.

3. Envie a petição de certificado à autoridade de certificação escolhida. Para preencher uma petição de certificado, pode ser necessário entrar em contato com a autoridade de certificação. A autoridade checa que a informação transmitida seja correta. A petição de certificado é gerada em um BLOB usando o formato PKCS codificado em base64 (formato PEM). Esse princípio permite que copie e cole as chaves como texto e as envie via E-mail sem modificar o conteúdo da chave. Por exemplo pode salvar o BLOB que contém a petição de certificado em um documento texto (usando o comando `BLOB TO DOCUMENT`), e então abrir e copiar e colar seu conteúdo em um mail ou um formulário web a ser enviado para a autoridade de certificação.

4. Quando tiver o certificado, crie um arquivo texto chamado "cert.pem" e cole seu conteúdo do certificado dentro dele. Pode receber um certificado de várias maneiras (geralmente por email ou formulário HTML). 4D aceita todos os formatos de texto relacionados à plataformas para certificados (OS X, PC, Linux, etc). Entretanto o certificado deve ser no formato PEM, *ou seja*, PKCS codificado em base64.
> Caracteres CR final de linha não são compatíveis em si; deve usar ou CRLF ou LF.

5. Coloque o arquivo “cert.pem” no [local apropriado](#installation-and-activation).

O servidor 4D pode trabalhar em modo seguro. Um certificado é válido de 3 meses a um ano.

## Instalação e ativação

### Ficheiros `key.pem` e `cert.pem`

To be able to use the TLS protocol with the server, you must install the **key.pem** (document containing the private encryption key) and **cert.pem** (document containing the certificate) at the appropriate location:

- with 4D in local mode or 4D Server, these files must be placed next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, these files must be located in the client database folder on the remote machine (for more information about the location of this folder, see the `Get 4D folder` command).

You must copy these files manually on the remote machine.

:::caution

Arquivos padrão *key.pem* e *cert.pem* são oferecidos com 4D. Para um maior nível de segurança, recomendamos fortemente que esses arquivos sejam substituídos por seus próprios certificados.

:::

### Ativar TLS

A instalação de arquivos **key.pem** e **cert.pem** torna possível usar TLS com o servidor 4D. Entretanto para que as conexões TLS sejam aceitas pelo servidor, precisa ativá-las:

- Com o servidor 4D web, precisa ativar HTTPS [](WebServer/webServerConfig.md#enable-https). Pode estabelecer a opção [HSTS ](WebServer/webServerConfig.md#enable-hsts) para redirigir os navegadores que tentem conectar no modo http.
- Com o servidor de aplicação, deve selecionar a opção **Encrypt Client-Server Communications** na página "Client-server/Network options" do diálogo de configurações.
- Com o servidor SQL deve selecionar a opção **Ativar TLS** na página "SQL" do diálogo configurações.

> The 4D web server also supports HSTS option to prevent a browser from

## Perfect Forward Secrecy (PFS)

[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) adiciona mais um nível de segurança para suas comunicações. Ao invés de usar chaves de troca pré-estabelecidas, PFS cria chaves de sessão cooperativamente entre as partes que se comunicam usando os algoritmos Difie-Hellman (DH). A maneira conjunta com a qual essas chaves são construídas cria um "segredo compartilhado" que impede partes externas de as comprometerem.

Quando TLS estiver ativado no servidor, PFS é ativado automaticamente. Se o arquivo *dhparams.pem* (documento que contém a chave privada DH do servidor) ainda não existir, 4D vai gerar o arquivo automaticamente com um tamanho de chave de  2048. A geração inicial deste arquivo pode levar vários minutos. O arquivo é colocado com  os arquivos [*key.pem* e *cert.pem*](#key-pem-and-cert-pem-files).

Se utilizar uma [lista de cifrado personalizada](WebServer/webServerConfig.md##cipher-list) e quiser habilitar o PFS, deve comprovar que contenha entradas com algoritmos DH ou ECDH (Elliptic-curve Diffie-Hellman).
