---
id: updates
title: Notas de Lançamento
---

## 4D 20 R5

Leia [**O que há de novo no 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-20-R5/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R5.

#### Destaques

- New [Component manager](../Project/components.md) to handle components through a `dependencies.json` file.
- Suporte a estruturas de tratamento de erros [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
- QUIC network layer now supports [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), and [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
- Soporte de [selecciones de entidades restringidas](../ORDA/entities.md#restricting-entity-selections).
- Soporte de [clases compartidas](../Concepts/classes.md#shared-classes) y de [clases singleton](../Concepts/classes.md#singleton-classes). Novas propriedades de classe: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#isingleton), [`me`](../API/ClassClass.md#me).
- Suporte à [inicializando uma propriedade de classe em sua linha de declaração](../Concepts/classes.md/#initializing-the-property-in-the-declaration-line).
- Novo modo [forçar  login para solicitações REST](../REST/authUsers.md#force-login-mode) com um suporte específico [no Qodly Studio para 4D](../WebServer/qodly-studio.md#force-login).
- Nuevo parámetro REST [$format](../REST/$format.md).
- [`Session`](../API/SessionClass.md#session) object is now available in remote user sessions and stored procedures session.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.en.html) em doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.en.html) on doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R5): lista de todos os bugs corrigidos em 4D 20 R5.

#### Mudanças de comportamento

- Os plug-ins _4D Internet Commands_ e _4D for OCI_ não estão mais incluídos nos instaladores do 4D. Para obter esses plug-ins, você precisa se conectar ao [**Portal de descarrega de produtos 4D**](https://product-download.4d.com/).
- Changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are now saved in a separate file named `catalog_editor.json` stored in the project's [`Sources`](../Project/architecture.md#sources) folder.

## 4D 20 R4

Leia [**O que há de novo no 4D v20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R4.

#### Destaques

- Support of [`ECDSA` encryption format](../Admin/tls.md#encryption) for TLS certificates.
- Client/server and SQL server TLS connections are now [configured dynamically](../Admin/tls.md#enabling-tls-with-the-other-servers) (no certificate files are required).
- Direct HTML format for [structure definition exports](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- New [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) that enhances code control during code typing, syntax checking, and compilation steps to prevent execution errors.
- Method parameters declared in `#DECLARE` prototypes are [no longer necessary in "Compiler_" methods](../Concepts/parameters.md#compilation).
- Suporte de [formatos personalizados de data e hora](../Project/date-time-formats.md)
- New [`Try(expression)` keyword](../Concepts/error-handling.md#tryexpression) to handle simple error cases.
- Novo comando [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- New [Non-blocking printing](../settings/compatibility.md) compatibility option.
- Nuevo [modo de edición](../Admin/dataExplorer.md#editing-data) en el Explorador de datos.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos os bugs corrigidos em 4D 20 R4.

#### Mudanças de comportamento

- Usando uma sintaxe legada para declarar parâmetros (por exemplo, `C_TEXT($1)` ou `var $1 : Text`) está agora obsoleto e gera avisos na digitação de código, verificação de sintaxe e etapas de compilação.
- La coherencia de las selecciones ahora se mantiene después de que se hayan eliminado algunos registros y se hayan creado otros (ver [esta entrada de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
- In the updated [OpenSSL library](#library-table), the default SSL/TLS security level has been changed from 1 to 2. Chaves RSA, DSA e DH de 1024 bits ou mais e menos de 2048 bits, assim como chaves ECC de 160 bits ou mais e menos de 224 bits, agora não são mais permitidas. Por padrão, a compressão TLS já estava desativada nas versões anteriores do OpenSSL. No nível de segurança 2, ele não pode ser habilitado.
- In order to allow password verification when the [4D user directory uses the bcrypt algorithm](https://blog.4d.com/bcrypt-support-for-passwords/), the "password" value in the _connectionInfo_ parameter of the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command is now sent in clear form by default. Make sure your "On REST authentication" database method can handle passwords in clear form (third parameter is then **False**) and that `Open datastore` encrypts your connection by passing the "tls" option to **True** in _connectionInfo_. In specific cases, a new "passwordAlgorithm" option can also be used for compatibility (see [`Open datastore`](../API/DataStoreClass.md#open-datastore) command).

## 4D 20 R3

Leia [**O que há de novo no 4D v20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R3.

#### Destaques

- Nova função [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Support of _context_ parameter in [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Support of `headers` property in _connectionHandler_ parameter of [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Global modification stamp](../ORDA/global-stamp.md) to help implementing data synchronization modules. Novas funções: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) e [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Assigning file references to picture/blob attributes is [supported in ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Support for [initializing the variable's value and data type in the declaration line](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Log file settings are now [saved with the current data file](../Backup/settings.md#log-file-management)
- New syntax for [declaring variadic parameters](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: soporte de la [importación](../ViewPro/commands/vp-import-from-blob) y de la [exportación](../ViewPro/commands/vp-export-to-blob) de documentos 4D View Pro al formato Blob.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos os bugs corrigidos em 4D 20 R3.

#### Mudanças de comportamento

- Some errors were catchable by your [error handling method](../Concepts/error-handling.md) in interpreted mode only. A fix has been done, so that the following errors will now be caught also in compiled mode: _Indice out of range_, _Type incompatible_, and _Dereferencing a Null pointer_. However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) command.
- 4D não inclui mais um interpretador PHP interno. You need to [set up and run your own PHP interpreter](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) to use PHP commands.

## 4D 20 R2

Leia [**O que há de novo no 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R2.

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20 R2 HF1 build 100440 ou superior. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

- New [WebSocket class](../API/WebSocketClass.md) to create and manage client WebSocket connections from 4D.
- New QUIC network layer [interface setting](../settings/client-server.md#network-layer).
- 4D View Pro: soporte del formato de archivo **.sjs** para [la importación](../ViewPro/commands/vp-import-document) y la [exportación](../ViewPro/commands/vp-export-document) de documentos.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) em doc.4d.com.
- 4D Write Pro Interface: New [Table Wizard](../WritePro/writeprointerface.md).
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos os bugs corrigidos em 4D 20 R2.

#### Mudanças de comportamento

- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. Foi feita uma correção no 4D a partir das versões **20.1 HF1** e **20 R2** e o valor agora é 0.

## 4D 20.x LTS

See [**Release Notes for 4D 20.x LTS**](../../version-20/Notes/updates.md).

## Tabela da biblioteca

| Biblioteca | Versão atual                           | Atualizado em 4D     | Comentário                                                                                                                                |
| ---------- | -------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ICU        | 73.2                   | 20.1 | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos.               |
| CEF        | 121                                    | 20 R5                | Chromium 6167                                                                                                                             |
| Hunspell   | 7.3.27 | 20                   | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                                                       |
| PDFWriter  | 4.3                    | 20                   | Dependência FreeType na 12.2.1                                                                            |
| SpreadJS   | 16.2.6 | 20 R4                | Motor 4D View Pro                                                                                                                         |
| OpenSSL    | 3.2.0  | 20 R4                | O nível de segurança TLS/SSL padrão foi atualizado. Veja [mudanças de comportamento](#behavior-changes) para versão 20 R4 |
| libZip     | 19.5                   | 20                   | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                                                      |
| LZMA       | 5.4.1  | 20                   |                                                                                                                                           |
| Zlib       | 14.1.6 | 20                   |                                                                                                                                           |
| webKit     | WKWebView                              | 19                   |                                                                                                                                           |
| PHP        | 8.2.4  | 20                   |                                                                                                                                           |
| libldap    | 2.6.4  | 20 R3                |                                                                                                                                           |
| libsasl    | 2.1.28 | 20                   |                                                                                                                                           |
