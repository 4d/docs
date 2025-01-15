---
id: updates
title: Notas de lançamento
---

## 4D 20 R8

Read [**What’s new in 4D 20 R8**](https://blog.4d.com/en-whats-new-in-4d-v20-R8/), the blog post that lists all new features and enhancements in 4D 20 R8.

#### Destaques

- Implement your own [**HTTP request handlers**](../WebServer/http-request-handler.md) using the new [`4D.IncomingMessage`](../API/IncomingMessageClass.md) class.
- Expressions used in [form object properties](../FormObjects/properties_Reference.md) now benefit from syntax checking in the [Property list](../FormEditor/formEditor.md#property-list) and in the [Compiler](../Project/compiler.md#check-syntax).
- You can [associate a class to a form](../FormEditor/properties_FormProperties.md#form-class) to enable code type-ahead and automatic instantiation of form data when using the [`Form`](../commands/form.md) command.
- Suporte de [sessões autônomas](../API/SessionClass.md) para simplificar a codificação local para aplicações cliente/servidor.
- [4D debugger](../Debugging/debugger.md): new design and auto-save, display mode features.
- [New built component architecture](../Desktop/building.md#build-component) for a better compliance with Apple notarization guidelines.
- Dependencies: Use the Dependency manager to [check for new versions](../Project/components.md#checking-for-new-versions) and [update](../Project/components.md#updating-dependencies) GitHub components.
- 4D Language:
  - Comandos modificados: [`FORM EDIT`](../commands/form-edit.md)
  - [`.sign()`](../API/CryptoKeyClass.md#sign) and [`.verify()`](../API/CryptoKeyClass.md#verify) functions of the [4D.CryptoKey class](../API/CryptoKeyClass.md) support Blob in the _message_ parameter.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R8): list of all bugs that have been fixed in 4D 20 R8.

#### Mudanças de comportamento

- Because of their [new architecture](../Desktop/building.md#build-component), components built with 4D 20 R8 and higher cannot be installed in previous 4D releases.

## 4D 20 R7

Leia [**O que há de novo no 4D 20 R7**](https://blog.4d.com/en-whats-new-in-4d-v20-R7/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R7.

#### Destaques

- As colunas e cabeçalhos da list box de tipo tempo agora suportam a opção ["blankIfNull"](../FormObjects/properties_Display.md#time-format).
- Novas propriedades em [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) e [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist).
- Agora você pode [adicionar e remover componentes usando a interface do gerenciador de componentes](../Project/components.md#adding-and-removing-dependencies).
- New [**direct typing mode**](../Project/compiler.md#enabling-direct-typing) in which you declare all variables and parameters in your code using `var` and `#DECLARE`/`Function` keywords (only mode supported in new projects). A [funcionalidade verificação de sintaxe](../Project/compiler.md#check-syntax) foi aprimorado de acordo.
- Support of [Session singletons](../Concepts/classes.md#singleton-classes) and new [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton) Class property.
- New [`onHttpGet` function keyword](../ORDA/ordaClasses.md#onhttpget-keyword) to define singleton or ORDA functions that can be called through [HTTP REST GET requests](../REST/ClassFunctions.md#function-calls).
- Nova classe [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) para que o servidor REST retorne qualquer conteúdo Web.
- Qodly Studio: You can now [attach the Qodly debugger to 4D Server](../WebServer/qodly-studio.md#using-qodly-debugger-on-4d-server).
- New Build Application keys for remote 4D applications to validate the server certificate authority [signatures](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateAuthoritiesCertificates.300-7425900.en.html) and/or [domain](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.en.html).
- Ability to [build standalone applications without embedded licenses](../Desktop/building.md#licenses).
- 4D Language:
  - New commands: [Process info](../commands/process-info.md), [Session info](../commands/session-info.md), [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
  - Modified commands: [Process activity](../commands/process-activity.md), [Process number](../commands/process-number.md)
- 4D Write Pro:
  - Novo comando: [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
  - Comandos modificados: [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md) e [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
  - [Página Novidades](https://doc.4d.com/4Dv20R7/4D/20-R7/What-s-new.901-7239607.en.html) em 4D Write Pro Reference.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R7): lista de todos os bugs corrigidos em 4D 20 R7.

#### Mudanças de comportamento

- Documentations for [4D Language](../commands/command-index.md) and [4D Write Pro Language](../WritePro/commands/command-index.md) are now fully available on developer.4d.com. Find out about all the new features and changes concerning these documentations in this release note.
- The [`File`](../commands/file.md) command (as well as [`4D.File.new()`](../API/FileClass.md#4dfilenew)) is stricter when it comes to checking the syntax of the _path_ supplied as a parameter.
- The **describe** action [permission](../ORDA/privileges.md#permission-actions) has been removed from available actions. Acesso às urls [`/rest/$catalog`](../REST/$catalog.md) não é mais controlado. Session _describe_ privileges are now ignored.

## 4D 20 R6

Leia [**O que há de novo no 4D 20 R6**](https://blog.4d.com/en-whats-new-in-4d-20-R6/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D 20 R6.

#### Destaques

- Support of comparison operators on [object references](../Concepts/dt_object.md#object-operators) and [collection references](../Concepts/dt_collection.md#collection-operators). [`collection.query()`](../API/CollectionClass.md#query) now supports [object and collection references as query values](../API/CollectionClass.md#object-or-collection-reference-as-value).
- When a component has a [declared namespace](../Extensions/develop-components.md#declaring-the-component-namespace), its classes are now automatically shared between all loaded components in the host project via [`cs.<namespace>`](../Concepts/classes.md#cs).
- Component manager: Support of [components stored on GitHub](../Project/components.md#declaring-components-stored-on-github).
- New [`entitySelection.clean()`](../API/EntitySelectionClass.md#clean) function and [`$clean`](../REST/$clean.md) REST API to get a new entity selection based upon the original entity selection but without its deleted entities.
- New [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) function and [`$info/privileges`](../REST/$info.md) REST API to inspect session privileges for an easier debugging.
- New [4DCEFParameters.json file](../FormObjects/webArea_overview.md#4dcefparametersjson) to customize 4D embedded web areas.
- Nova classe [HTTPAgent](../API/HTTPAgentClass.md) e nova propriedade [`agent`](../API/HTTPRequestClass.md#options-parameter) para a classe HTTPRequest.
- New [`enableState()`](../API/WebFormClass.md) and [`disableState()`](../API/WebFormClass.md) functions to monitor Qodly page states from the server.
- New [`$singleton` API](../REST/$singleton.md) to call exposed singleton functions from REST and new [associated privileges](../ORDA/privileges.md).
- Um [novo botão de configurações](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) ajuda você a atualizar seu projeto para usar o modo REST de "login forçado" (o método de banco de dados `On REST Authentication` agora está obsoleto).
- Uma [nova guia de parametros](../Project/compiler.md#warnings) ajuda a definir a geração de avisos globalmente.
- Several commands, mainly from the "4D Environment" theme, are now thread-safe ([see the full list](https://doc.4d.com/4Dv20R6/4D/Preemptive_6957385.999-2878208.en.html)), as well as some selectors of the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20R/help/command/en/page642.html)/[`Get database parameter`](https://doc.4d.com/4dv20R/help/command/en/page643.html) commands.
- New [4D-QPDF component](https://github.com/4d/4D-QPDF) that provides the `PDF Get attachments` command to extract attachments from a PDF/A3 document.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6957482.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6993921.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R6): lista de todos os bugs corrigidos em 4D 20 R6.

#### Mudanças de comportamento

- Suporte para perseguir a rolagem nos formulários: subformas pai agora rolam automaticamente quando objetos roláveis incorporados ([verticalmente](../FormObjects/properties_Appearance.md#vertical-scroll-bar) ou [horizontalmente](. /FormObjects/properties_Appearance.md#horizontal-scroll-bar)) atingiram os limites e o usuário continua rolando usando o mouse ou rastreador (overscrolling).
- A API REST [`$catalog`](../REST/$catalog.md) agora retorna singletons (se houver).

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
- O objeto [`Session`](../commands/session.md) agora está disponível em sessões de usuários remotos e sessões de procedimentos armazenados.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.en.html) em doc.4d.com.
- 4D Write Pro: [Página de novidades](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R5): lista de todos os bugs corrigidos em 4D 20 R5.

#### Mudanças de comportamento

- Os plug-ins _4D Internet Commands_ e _4D for OCI_ não estão mais incluídos nos instaladores do 4D. Para obter esses plug-ins, você precisa se conectar ao [**Portal de descarrega de produtos 4D**](https://product-download.4d.com/).
- Changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) agora são salvas em um arquivo separado chamado `catalog_editor.json` armazenado na pasta [`Sources`](../Project/architecture.md#sources) do projeto.

## 4D 20 R4

Leia [**O que há de novo no 4D v20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R4.

#### Destaques

- Suporte do [formato de criptografia `ECDSA`](../Admin/tls.md#encryption) para os certificados TLS.
- Client/server and SQL server TLS connections are now [configured dynamically](../Admin/tls.md#enabling-tls-with-the-other-servers) (no certificate files are required).
- Direct HTML format for [structure definition exports](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- New [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) that enhances code control during code typing, syntax checking, and compilation steps to prevent execution errors.
- Method parameters declared in `#DECLARE` prototypes are [no longer necessary in "Compiler_" methods](../Concepts/parameters.md#compilation).
- Suporte de [formatos personalizados de data e hora](../Project/date-time-formats.md)
- Nova palavra-chave [`Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de erro simples.
- Novo comando [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- Nova opção de compatibilidade [Impressão sem bloqueio](../settings/compatibility.md).
- Nuevo [modo de edición](../Admin/dataExplorer.md#editing-data) en el Explorador de datos.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos os bugs corrigidos em 4D 20 R4.

#### Mudanças de comportamento

- Usando uma sintaxe legada para declarar parâmetros (por exemplo, `C_TEXT($1)` ou `var $1 : Text`) está agora obsoleto e gera avisos na digitação de código, verificação de sintaxe e etapas de compilação.
- La coherencia de las selecciones ahora se mantiene después de que se hayan eliminado algunos registros y se hayan creado otros (ver [esta entrada de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
- Na atualização da [biblioteca OpenSSL](#library-table), o nível de segurança SSL/TLS padrão foi alterado de 1 para 2. Chaves RSA, DSA e DH de 1024 bits ou mais e menos de 2048 bits, assim como chaves ECC de 160 bits ou mais e menos de 224 bits, agora não são mais permitidas. Por padrão, a compressão TLS já estava desativada nas versões anteriores do OpenSSL. No nível de segurança 2, ele não pode ser habilitado.
- In order to allow password verification when the [4D user directory uses the bcrypt algorithm](https://blog.4d.com/bcrypt-support-for-passwords/), the "password" value in the _connectionInfo_ parameter of the [`Open datastore`](../commands/open-datastore.md) command is now sent in clear form by default. Make sure your "On REST authentication" database method can handle passwords in clear form (third parameter is then **False**) and that `Open datastore` encrypts your connection by passing the "tls" option to **True** in _connectionInfo_. In specific cases, a new "passwordAlgorithm" option can also be used for compatibility (see [`Open datastore`](../commands/open-datastore.md) command).

## 4D 20 R3

Leia [**O que há de novo no 4D v20 R3**](https://blog.4d.com/en-whats-new-in-4d-20-vR3/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R3.

#### Destaques

- Nova função [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Support of _context_ parameter in [`Formula from string`](../commands/formula-from-string.md).
- Support of `headers` property in _connectionHandler_ parameter of [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Marcador de modificação global](../ORDA/global-stamp.md) para facilitar a implementação de módulos de sincronização de dados. Novas funções: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) e [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Assigning file references to picture/blob attributes is [supported in ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Support for [initializing the variable's value and data type in the declaration line](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- As configurações de arquivos de log agora são [salvas com o arquivo de dados atual](../Backup/settings.md#log-file-management)
- Nova sintaxe para [declarar parâmetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: soporte de la [importación](../ViewPro/commands/vp-import-from-blob) y de la [exportación](../ViewPro/commands/vp-export-to-blob) de documentos 4D View Pro al formato Blob.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) em doc.4d.com.
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos os bugs corrigidos em 4D 20 R3.

#### Mudanças de comportamento

- Alguns erros foram capturados pelo seu [método de tratamento de erros](../Concepts/error-handling.md) somente no modo interpretado. A fix has been done, so that the following errors will now be caught also in compiled mode: _Indice out of range_, _Type incompatible_, and _Dereferencing a Null pointer_. However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) command.
- 4D não inclui mais um interpretador PHP interno. You need to [set up and run your own PHP interpreter](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) to use PHP commands.

## 4D 20 R2

Leia [**O que há de novo no 4D v20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), o post do blog que lista todos os novos recursos e aprimoramentos em 4D v20 R2.

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20 R2 HF1 build 100440 ou superior. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

- New [WebSocket class](../API/WebSocketClass.md) to create and manage client WebSocket connections from 4D.
- Nova [configuração de interface] (../settings/client-server.md#network-layer) para a camada de rede QUIC.
- 4D View Pro: soporte del formato de archivo **.sjs** para [la importación](../ViewPro/commands/vp-import-document) y la [exportación](../ViewPro/commands/vp-export-document) de documentos.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) em doc.4d.com.
- Interface 4D Write Pro: novo [Table Wizard](../WritePro/writeprointerface.md).
- [**Lista de erros corrigida**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos os bugs corrigidos em 4D 20 R2.

#### Mudanças de comportamento

- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. Foi feita uma correção no 4D a partir das versões **20.1 HF1** e **20 R2** e o valor agora é 0.

## 4D 20.x LTS

Veja [**Notas de lançamento para 4D 20.x LTS**](../../versioned_docs/version-20/Notas/updates.md).

## Tabela da biblioteca

| Biblioteca | Versão atual                           | Atualizado em 4D | Comentário                                                                                                                                |
| ---------- | -------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL  | 0aa300b                                | 20 R6            | Usado para QUIC                                                                                                                           |
| CEF        | 131                                    | **20 R8**        | Chromium 6778                                                                                                                             |
| Hunspell   | 7.3.27 | 20               | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                                                       |
| ICU        | 73.2                   | 20               | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos.               |
| libldap    | 2.6.7  | 20 R6            |                                                                                                                                           |
| libsasl    | 2.1.28 | 20               |                                                                                                                                           |
| Libuv      | 1.48                   | 20 R6            | Usado para QUIC                                                                                                                           |
| libZip     | 19.5                   | 20               | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                                                      |
| LZMA       | 5.4.1  | 20               |                                                                                                                                           |
| OpenSSL    | 3.3.2  | 20 R7            | O nível de segurança TLS/SSL padrão foi atualizado. Veja [mudanças de comportamento](#behavior-changes) para versão 20 R4 |
| PDFWriter  | 4.3                    | 20               | Dependência FreeType na 12.2.1                                                                            |
| PHP        | 8.2.4  | 20               |                                                                                                                                           |
| SpreadJS   | 17.1.0 | 20 R7            | Veja [este post de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/) para uma visão geral dos novos recursos                  |
| webKit     | WKWebView                              | 19               |                                                                                                                                           |
| Zlib       | 14.1.6 | 20               |                                                                                                                                           |
