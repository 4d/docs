---
id: updates
title: Notas de Lançamento
---

## 4D 20 R5

Read [**What’s new in 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-v20-R5/), the blog post that lists all new features and enhancements in 4D 20 R5.

#### Destaques

- New [Package manager](../Project/components.md) to handle components through a `dependencies.json` file.
- Support of [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try) error handling structures.
- QUIC network layer now supports [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), and [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
- Support of [restricted entity selections](../ORDA/entities.md#restricting-entity-selections).
- Support of [shared classes](../Concepts/classes.md#shared-classes) and [singleton classes](../Concepts/classes.md#singleton-classes). New Class properties: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#isingleton), [`me`](../API/ClassClass.md#me).
- Support for [initializing a class property in its declaration line](../Concepts/classes.md/#initializing-the-property-in-the-declaration-line).
- New [force login mode for REST requests](../REST/authUsers.md#force-login-mode) with a [specific support in Qodly Studio for 4D](../WebServer/qodly-studio.md#force-login).
- New [$format](../REST/$format.md) REST parameter.
- [`Session`](../API/SessionClass.md#session) object is now available in remote user sessions and stored procedures session.

#### Mudanças de comportamento

- The plug-ins _4D Internet Commands_ and _4D for OCI_ are no longer included in 4D installers. To get these plug-ins, you need to connect to the [**4D Product Download portal**](https://product-download.4d.com/).
- Changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are now saved in a separate file named `catalog_editor.json` stored in the project's [`Sources`](../Project/architecture.md#sources) folder.

## 4D 20 R4

Read [**What’s new in 4D 20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), the blog post that lists all new features and enhancements in 4D 20 R4.

#### Destaques

- Support of [`ECDSA` encryption format](../Admin/tls.md#encryption) for TLS certificates.
- Client/server and SQL server TLS connections are now [configured dynamically](../Admin/tls.md#enabling-tls-with-the-other-servers) (no certificate files are required).
- Direct HTML format for [structure definition exports](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- New [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) that enhances code control during code typing, syntax checking, and compilation steps to prevent execution errors.
- Method parameters declared in `#DECLARE` prototypes are [no longer necessary in "Compiler_" methods](../Concepts/parameters.md#compilation).
- Support of [custom date and time formats](../Project/date-time-formats.md)
- New [`Try(expression)` keyword](../Concepts/error-handling.md#tryexpression) to handle simple error cases.
- Novo comando [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message).
- New [Non-blocking printing](../settings/compatibility.md) compatibility option.
- New [editing mode](../Admin/dataExplorer.md#editing-data) in the Data Explorer.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) em doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R4): list of all bugs that have been fixed in 4D 20 R4.

#### Mudanças de comportamento

- Using a legacy syntax for declaring parameters (e.g. `C_TEXT($1)` or `var $1 : Text`) is now deprecated and generates warnings at code typing, syntax checking, and compilation steps.
- Selections are now kept consistent after some records have been deleted and others records created (see [this blog post](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/).
- In the updated [OpenSSL library](#library-table), the default SSL/TLS security level has been changed from 1 to 2. Chaves RSA, DSA e DH de 1024 bits ou mais e menos de 2048 bits, assim como chaves ECC de 160 bits ou mais e menos de 224 bits, agora não são mais permitidas. Por padrão, a compressão TLS já estava desativada nas versões anteriores do OpenSSL. No nível de segurança 2, ele não pode ser habilitado.

## 4D 20 R3

Read [**What’s new in 4D 20 R3**](https://blog.4d.com/en-whats-new-in-4d-v20-R3/), the blog post that lists all new features and enhancements in 4D 20 R3.

#### Destaques

- Nova função [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Support of _context_ parameter in [`Formula from string`](../API/FunctionClass.md#formula-from-string).
- Support of `headers` property in _connectionHandler_ parameter of [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Global modification stamp](../ORDA/global-stamp.md) to help implementing data synchronization modules. New functions: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) and [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Assigning file references to picture/blob attributes is [supported in ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Support for [initializing the variable's value and data type in the declaration line](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Log file settings are now [saved with the current data file](../Backup/settings.md#log-file-management)
- New syntax for [declaring variadic parameters](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: Support for the [import](../ViewPro/commands/vp-import-from-blob) and [export](../ViewPro/commands/vp-export-to-blob) of 4D View Pro documents in Blob format.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) em doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R3): list of all bugs that have been fixed in 4D 20 R3.

#### Mudanças de comportamento

- Some errors were catchable by your [error handling method](../Concepts/error-handling.md) in interpreted mode only. A fix has been done, so that the following errors will now be caught also in compiled mode: _Indice out of range_, _Type incompatible_, and _Dereferencing a Null pointer_. However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) command.
- 4D não inclui mais um interpretador PHP interno. You need to [set up and run your own PHP interpreter](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) to use PHP commands.

## 4D 20 R2

Read [**What’s new in 4D 20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), the blog post that lists all new features and enhancements in 4D 20 R2.

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20 R2 HF1 build 100440 ou superior. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Destaques

- New [WebSocket class](../API/WebSocketClass.md) to create and manage client WebSocket connections from 4D.
- New QUIC network layer [interface setting](../settings/client-server.md#network-layer).
- 4D View Pro: Support of the **.sjs** file format for the [import](../ViewPro/commands/vp-import-document) and [export](../ViewPro/commands/vp-export-document) of documents.
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) em doc.4d.com.
- 4D Write Pro Interface: New [Table Wizard](../WritePro/writeprointerface.md).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R2): list of all bugs that have been fixed in 4D 20 R2.

#### Mudanças de comportamento

- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.1 HF1** and **20 R2** and the value is now 0.

## 4D 20.x

Read [**What’s new in 4D 20**](https://blog.4d.com/en-whats-new-in-4d-v20/), the blog post that lists all new features and enhancements in 4D 20.

:::caution Minimal client version for 4D Server 20.2 and later

Por razões internas, a versão de clientes remotos conectando ao 4D Server 20.2 e posterior deve ser pelo menos 4D 20.2.

:::

:::warning Nota de segurança

Se suas aplicações 4D utilizam conexões TLS, é recomendado que você faça a atualização para a versão 4D 20.2 LTS build 100956 ou superior. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Aviso de reconstrução do índice

4D 20 inclui uma atualização da biblioteca ICU (veja abaixo) que forçará uma reconstrução automática dos índices do tipo alfa, texto e objeto. Dependendo do tamanho do ficheiro de dados, esta operação pode demorar algum tempo e pode necessitar de ser planeada.

:::caution 4D 20.1 index rebuild and client/server versions

4D 20.1 também inclui uma atualização da biblioteca ICU, que tem as seguintes consequências:

- Isso forçará uma reconstrução automática dos índices do tipo alfa, texto e objeto.
- Por causa da consistência de ordenação, é necessário que os clientes remotos 4D e o 4D Server usem a mesma versão: somente o 4D 20.1 remoto pode se conectar ao 4D Server v20.1 e vice-versa.

:::

#### Destaques

- 4D 20.2 é certificado em macOS Sonoma (macOS 14).
- (4D 20.1) New `plugins` property in the _options_ parameter for the [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html) command.
- 4D Server automatically integrates multiple journals: [Automatic restore](../Backup/settings.md#automatic-restore).
- [IMAP Transporter Class](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) returns _id_, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) returns _id_, _flags_ and _permanentFlags_, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) and [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) support custom keywords.
- New [WebSocketServer](../API/WebSocketServerClass.md) and [WebSocketConnection](../API/WebSocketConnectionClass.md) classes to create and manage WebSocket connections from 4D.
- Support of [`property`](../Concepts/classes.md#property) keyword in user class definitions.
- New functions to lock/unlock the datastore: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- New [`.at()`](../API/EntitySelectionClass.md#at) function in the Entity selection class.
- New functions in the Collection class: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Code editor: enhanced [Find and replace features](../code-editor/write-class-method.md#find-and-replace).
- New searchable "property" Language element in the [**Find in design...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726) dialog box.
- To simplify code, some comparison operators can now be used with [Undefined values](../Concepts/dt_null_undefined.md#undefined-operators) without generating errors.
- Support of _headerOnly_ parameter in [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Support of `count values` option in [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) and [`collection.distinct()`](../API/CollectionClass.md#distinct) functions.
- New [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths) function.
- ORDA requests logs are now available [on the server](../Debugging/debugLogFiles.md#orda-requests), new parameter for [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) function.
- New tools for code execution in CLI: [tool4d](../Admin/cli.md#tool4d) and [4D Server in utility mode](../Admin/cli.md#4d-server-in-utility-mode).
- [Data Explorer](../Admin/dataExplorer.md#opening-the-data-explorer): new button and display in a 4D window.
- New properties for buttons, check boxes and radio buttons: [Image hugs title](../FormObjects/properties_TextAndPicture.md#image-hugs-title) and [Horizontal Alignment](../FormObjects/properties_Text.md#horizontal-alignment).
- Support of `WinIcon` in [`file.setAppInfo()`](../API/FileClass.md#setappinfo) function.
- New `validateTLSCertificate` option for [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new) allowing you to control the automatic certificate validation.
- Comandos da linguagem 4D: [página Novidades](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) em doc.4d.com.
- Fixed bug lists: [4D 20](https://bugs.4d.fr/fixedbugslist?version=20) - [4D 20.1](https://bugs.4d.fr/fixedbugslist?version=20.1).

#### Mudanças de comportamento

- A partir da v20.2, o 4D 20 LTS não é mais compatível com o Windows Server 2012 R2.
- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.1 HF1** and **20 R2** and the value is now 0.
- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) property.
- TLS certificates are now automatically validated by 4D when sending HTTP requests with [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#new), and rejected with an error if they are invalid. A new _option_ property allows you to control this validation.
- TLS v1.0 and TLS v1.1 are deprecated, they are no longer supported as `Min TLS version` on 4D Server. Version 1.3 is now selected by default and is automatically used if `_o_TLSv1_0` or `_o_TLSv1_1` constants are set with [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- For consistency, all buttons, checkboxes, and radio buttons are now rendered with a "3D" type at runtime: respectively `Object type 3D button`, `Object type 3D checkbox`, and `Object type 3D radio button` are returned by [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) for these objects.
- As of 4D 20, [4D for Mobile](https://developer.4d.com/go-mobile/) is no longer installed by default in the 4D environment. To benefit from the 4D for Mobile development features in 4D, you need to [install the 4D Mobile App component](https://developer.4d.com/go-mobile/docs/getting-started/installation) in the ["Components"](../Project/architecture.md#components) folder of your projects. If a converted project uses features from the [4D Mobile App Server component](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), make sure you also install it in the "Components" folder of the project.

## 4D 19 R8

Read [**What’s new in 4D 19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), the blog post that lists all new features and enhancements in 4D 19 R8.

#### Destaques

- Error management methods can be installed for [global and component execution contexts](../Concepts/error-handling.md#scope-and-components).
- Listboxes with collection or entity selection datasources now support [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) column property.
- ORDA: Support of the _roles.json_ file to define [privileges](../ORDA/privileges.md) assigned to the session with [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Support of [SDI mode in test application mode](../Menus/sdi.md#sdi-mode-availability) on Windows.
- :::
  - support of themes in tables: new [VP SET TABLE THEME](../ViewPro/commands/vp-set-table-theme) and [VP Get table theme](../ViewPro/commands/vp-get-table-theme) commands, support of theme options in [VP CREATE TABLE](../ViewPro/commands/vp-create-table)
  - new [VP Get table dirty rows](../ViewPro/commands/vp-get-table-dirty-rows) command
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) em doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R8): list of all bugs that have been fixed in 4D 19 R8.

#### Mudanças de comportamento

- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) property.
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- In Web areas using blink (CEF), dialogs displayed from external scripts are now blocking if not called from a `setTimeout()` JS function. This is due to the current CEF updates, in which dialogs displayed by functions such as `alert()` or `print()` are no longer handled by the OS but by the Web area. Veja [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) e [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).

## 4D 19 R7

Read [**What’s new in 4D 19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), the blog post that lists all new features and enhancements in 4D 19 R7.

#### Destaques

- Related data and computed/alias attributes can be displayed in the [Data Explorer](../Admin/dataExplorer#basics).
- New [FileHandle](../API/FileHandleClass.md) class and new [`.open()`](../API/FileClass.md#open) function in the `File` class.
- [Entity selection Class](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) supports an _entitySelection_ parameter, [`.minus()`](../API/EntitySelectionClass.md#minus) supports a _keepOrder_ parameter.
- Suporte às opções _automaticRedirections_ e _decodeData_ em [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- Novo arquivo histórico [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlog).
- 4D View Pro: new table commands [VP Find table](../ViewPro/commands/vp-find-table), [VP Get table column attributes](../ViewPro/commands/vp-get-table-column-attributes), [VP Get table column index](../ViewPro/commands/vp-get-table-column-index), [VP Get tables](../ViewPro/commands/vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/commands/vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/commands/vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/commands/vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/commands/vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/commands/vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/commands/vp-set-table-column-attributes).
- Component namespaces are now [displayed in the Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Text area and Input form objects now support the [corner radius property](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- Comandos da linguagem 4D: [Novidades de página](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) em doc.4d.com.
- 4D Write Pro: [Página Novidades] (https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) em doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R7): list of all bugs that have been fixed in 4D 19 R7.

#### Mudanças de comportamento

- Para manter a consistência com as interfaces padrão (por exemplo, exploradores de arquivos do sistema operacional), as regras da caixa de listagem para seleção de linhas/arrastar e soltar foram modificadas. A continuous or discontinuous selection of rows can be dragged by simply clicking on and moving a selected row; the **Alt** key is not longer necessary (but can still be used like in previous previous). When the **Shift** or **Ctrl/Command** key is pressed, a mouse click is taken into account when the click is down. Para obter mais informações sobre arrastar e soltar em list boxes, consulte [esta postagem do blog] (https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) e faça download [deste projeto HDI 4D] (https://github.com/4d-depot/HDI_LB_DragAndDrop).
- A numeração de compilação interna do 4D foi modificada a partir do 4D 19 R7:
  - as versões até 4D 19 R6 (inclusive) são numeradas como 282xxx,
  - releases from 4D 19 R7 will be numbered 100xxx.\
    Note that a specific 4D version is still uniquely identified by a branch name and a build number. O número de build aumenta cronologicamente.
- A capacidade de usar o protocolo REST do Wakanda/4D Mobile para chamar um método de projeto foi removida. You can use [ORDA data model class functions](../REST/ClassFunctions.md) or [/4DACTION urls](../WebServer/httpRequests.md#4daction) instead.

## 4D 19 R6

- Nova classe [HTTPRequest](../API/HTTPRequestClass.md).
- Collection functions that can call code now support function objects as _formula_ parameter: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Listbox cells support [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](../ViewPro/commands/vp-create-table) and [VP REMOVE TABLE](../ViewPro/commands/vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](../Admin/dataExplorer.md#basics).
- Para nos ajudar a tornar nossos produtos cada vez melhores, agora coletamos automaticamente dados sobre estatísticas de uso em aplicativos 4D Server em execução. Este fato não terá qualquer impacto no desempenho. See the new page explaining [why and how 4D collects data](../Admin/data-collect.md).
- Componentes compilados para Silicon: Nas plataformas macOS Silicon (CPUs ARM da Apple), os componentes devem ser recompilados com o 4D 19 R6 ou superior para serem usados com esta versão.

## 4D 19 R5

- The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
- You can now [deselect useless modules](../Desktop/building.md#deselecting-modules) in your built applications.
- The _MeCab_ library is included by default in all 4D applications on macOS. Em versões anteriores, essa biblioteca, especificamente projetada para gerenciar texto em japonês, estava disponível apenas na versão japonesa do 4D no macOS. If you do not need this library in your final applications, you can now [deselect it](../Desktop/building.md#deselecting-modules).
- [Client/Server optimization](../ORDA/client-server-optimization.md#optimization-context): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) and [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) for more information.
  > Essas funções são destinadas a desenvolvedores que precisam personalizar os recursos padrão do ORDA para configurações específicas. Na maioria dos casos, você não precisará usá-los.
- [DataClass class](../API/DataClassClass.md): The new [.getCount()](../API/DataClassClass.md#getcount) function returns the number of entities in a dataclass.
- The _4DDiagnosticLog.txt_ file only records high-level information by default ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). You can now select the information level to record (for example DEBUG level information) using the `Diagnostic log level` selector of the `SET DATABASE PARAMETER` command or the log configuration file.
- Calling `Use()` on a non-shared object or a non-shared collection does nothing (it no longer generates an error). Portanto, agora é inútil testar se o objeto ou coleção passado para Use() é realmente compartilhado.
- For clarification purposes, two SQL commands have been prefixed: `GET DATA SOURCE LIST` has been renamed to `SQL GET DATA SOURCE LIST`, `Get current data source` has been renamed to `SQL Get current data source`.
- **4D View Pro**:
  - The new [VP SET DATA CONTEXT](../ViewPro/commands/vp-set-data-context), [VP Get data context](../ViewPro/commands/vp-get-data-context), [VP SET BINDING PATH](../ViewPro/commands/vp-set-binding-path), [VP Get binding path](../ViewPro/commands/vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
  - [VP EXPORT DOCUMENT](../ViewPro/commands/vp-get-binding-path) and [VP Export to object](../ViewPro/commands/vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.
  - (Apenas Windows) As áreas 4D View Pro utilizam agora uma nova janela de parâmetros de impressão.
- **Áreas Web**:
  - New Windows system rendering engine: Web Areas using the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) are now based upon **Microsoft Edge WebView2**. Isto afeta as seguintes funcionalidades:
    - The `WA Create URL history menu` and `WA GET URL HISTORY` commands only return the current URL.
    * The [Progression variable](../FormObjects/properties_WebArea.md#progression) is no longer updated.
    * Os recursos de arrastar e soltar são gerenciados por uma API do Windows que é classificada como "experimental" pela Microsoft. Consequently, web areas may not work as expected when this API is not installed: Drag and drop may seem allowed even when the `WA enable URL drop` preference has been set to False. However, the drop action is blocked by default, and you can control the allowed URLs using the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) (see below).
  * (Windows only) When the user selects **Print...** from a web area using the embedded web rendering engine, a new print settings window is now displayed.
  * To reflect their actual effect in web areas (increase or decrease page zoom level), two commands have been renamed: `WA SET PAGE TEXT LARGER` has been renamed `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` has been renamed `WA ZOOM OUT`.
  * Enhanced security in web areas that use the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) or the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) (based on Microsoft Edge WebView2):
    - As políticas CORS agora se aplicam ao acesso a arquivos em disco em áreas da Web. For example, when opening a .html file with `WA OPEN URL`, that .html file cannot contain links that point to files outside its folder
    - Dropping external contents in web areas is now always blocked and triggers the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) when the `WA enable URL drop` preference is set to True (when set to False, the `WA enable URL drop` preference only modifies the drop cursor icon and filters the `On Window Opening Denied` event). Para permitir uma ação de soltar, você precisa executar um código adicional no método de objeto da área da Web:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))

```

## 4D 19 R4

- [Alias attributes](../ORDA/ordaClasses.md#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](../Concepts/flow-control.md#break-and-continue) statements in loops.
- Support for [return](../Concepts/flow-control.md#return-expression) statement and [return expression](../Concepts/parameters.md#return-expression) to return values.
- Support for [compound assignment operators](../Concepts/operators.md#compound-assignment-operators), [short-circuit operators](../Concepts/operators.md#short-circuit-operators), and [ternary operator](../Concepts/operators.md#ternary-operator)
- The [Code Editor](../code-editor/write-class-method.md) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](../Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](../REST/$lock.md) entities.
- [4D View Pro](../ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](../ViewPro/commands/vp-copy-to-object), [VP MOVE CELLS](../ViewPro/commands/vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/commands/vp-paste-from-object).
- New [SystemWorker class](../API/SystemWorkerClass.md).
- The `Alias selection` constant has been renamed `Allow alias files` to resolve a conflict resulting from the support of alias attributes in ORDA.
- For better compliance with ORDA specifications, the _Map NULL values to blank values_ field property is now unchecked by default in databases created with 4D 19 R4 and higher. Você também pode ativar esse comportamento padrão em seus bancos de dados convertidos de versões anteriores selecionando a configuração de compatibilidade Mapear valores NULOS para valores em branco desmarcada por padrão na criação do campo. Agora é recomendável trabalhar com valores nulos, pois eles são totalmente compatíveis com o ORDA.
- Because of the support of the [ternary operator](../Concepts/operators.md#ternary-operator), the colon ":" is no longer allowed in variable, field, constant, function, plugin and project method names. Se o seu banco de dados/projeto contiver identificadores com dois, você deve substituí-los antes de convertê-lo para 4D 19 R4 ou superior, caso contrário podem ocorrer erros no seu código. For example, if you have a variable named _a:b_, it could be interpreted as ternary operator syntax:

```4d
$value:=($size>1000)? a:b // Here 'a:b' is viewed as a ternary operator.

```

## 4D 19 R3

- [Computed properties](../Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](../ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](../ORDA/ordaClasses.md#function-query-attributename) and [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass [attributes](../API/DataClassClass.md#attributename): `exposed` and `readOnly`.
- [ZIP archives](../API/ZipArchiveClass.md#zip-create-archive) now supports _LZMA_ and _xz_ compression algorithms.
- A [new build option](../Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](../Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](../ServerWindow/maintenance.md#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters.md#optional-parameters) is more flexible in the 4D language when accessing parameters declared but not passed. Por exemplo, o código seguinte já não provoca um erro:

```4d
// "concate" function of myClass Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+" "+$param2)
  // Calling method
 $class:=cs.myClass.new()
 $class.concate("Hello";" world") // Displays "Hello world"
 $class.concate("Hello") // Displays "Hello "
 $class.concate() // Displays " "
```

For detailed information, please refer to [this blog post](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). Para beneficiar desta simplificação global, é necessário recompilar tanto os métodos chamados como os que são chamados; assim, os componentes devem ser recompilados.

- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions.md#preemptive-mode).

- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.

- 4D 19 R3 usa um algoritmo hash mais forte para senhas de usuários 4D: Bcrypt. This new algorithm is automatically used when a password is changed using the Tool Box, the `CHANGE PASSWORD` command, or the `Set user properties` command. Depois que a senha for modificada, abrir o banco de dados com uma versão anterior ao 4D 19 R3 causará uma recusa de autenticação para essa conta. Se você usa senhas 4D, é altamente recomendável fazer backup do arquivo .4db (bancos de dados binários) ou do arquivo directory.json (projetos) antes de atualizar para o 4D 19 R3 ou posterior.

- For accuracy, the `4D digest` constant has been renamed `4D REST digest`.

- Gerenciamento de fim de linha e BOM para comandos XML: Quando abertos no 4D 19 R3, os projetos ou bancos de dados criados com versões anteriores se comportam de forma diferente em relação aos caracteres de fim de linha padrão e ao gerenciamento de BOM em documentos XML: os caracteres de avanço de linha (LF) são usados em vez de CR (no macOS) e as marcas de ordem de byte (BOM) não são incluídas. Isso permite uma melhor compatibilidade com as ferramentas VCS. If necessary, you can restore the 4D 19 R2 behavior using the `XML SET OPTIONS` command. Em projetos ou bancos de dados convertidos de versões anteriores ao 19 R2, essas opções são gerenciadas por duas configurações de compatibilidade.

- Runtime Explorer shortcut removed in built projects: The **Cmd/Ctrl+Shift+F9** shortcut does no longer display the Runtime Explorer window in single-user merged project applications. Esse atalho agora pode ser um atalho de aplicativo do usuário. You can call the Runtime Explorer window using the new `OPEN RUNTIME EXPLORER` command.

- Recursos de depuração ampliados com o 4D Server: No modo interpretado, o 4D Server agora pode depurar todos os tipos de processos, incluindo sessões da Web escalonáveis. This is available when the debugger is attached to the server or to a remote client.\
  _Warning: In interpreted mode, in order to make extented debugging available on the server machine, all server processes are now automatically executed in cooperative mode when the debugger is attached to the server (default setting). Isso pode ter um impacto significativo no desempenho de suas aplicações convertidas quando elas são executadas com o 4D Server 19 R3 e superior. To restore preemptive execution on the server in this case, all you need to do is detach the debugger from the server (and attach it to a remote client if necessary)._

- On Windows, 4D projects and databases created with 4D 19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. Essa API melhora a renderização de texto, especialmente em configurações de DPI alto. O DirectWrite é usado para renderização de texto com texto estático e de entrada, caixas de seleção, botões e botões de rádio. Observe que as caixas de listagem já usam DirectWrite. Uma opção de compatibilidade permite que você ative o DirectWrite em projetos e bancos de dados criados com versões anteriores do 4D.

- If you use components compiled with 4D 19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D 19 R3 to provide compatibility with 4D 19 R3 and future releases. Se um componente não for compilado para o Silicon, não será necessário recompilar.

## 4D 19 R2

- A [default .gitignore file](../Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](../API/BlobClass.md) to handle new [`4D.Blob` objects](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](../API/FileClass.md#settext)

## Lançamentos anteriores

<details><summary>Clique para ver as notas de versão das versões anteriores</summary>

### 4D 19

:::warning Nota de segurança

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 19.7 LTS build 288986 or higher. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/transformation-tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](../FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods.md#theme-list).
- [Native compilation](../Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](../FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](../Admin/cli.md) page.

### 4D 18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return _undefined_ if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- New [WebAdmin](../Admin/webAdmin.md) web server component
- New [DataExplorer](../Admin/dataExplorer.md) interface
- New web [user sessions](../WebServer/sessions.md) and [their API](../API/SessionClass.md).

</details>

## Tabela da biblioteca

| Biblioteca | Versão atual                           | Atualizado em 4D     | Comentário                                                                                                                      |
| ---------- | -------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ICU        | 73.2                   | 20.1 | Essa grande atualização força uma reconstrução automática dos índices alfanuméricos, de texto e de objetos.     |
| CEF        | 121                                    | 20 R5                | Chromium 6167                                                                                                                   |
| Hunspell   | 7.3.27 | 20                   | Usado para verificação ortográfica em formulários 4D e 4D Write Pro                                                             |
| PDFWriter  | 4.3                    | 20                   | Dependência FreeType na 12.2.1                                                                  |
| SpreadJS   | 16.2.6 | 20 R4                | Motor 4D View Pro                                                                                                               |
| OpenSSL    | 3.2.0  | 20 R4                | O nível de segurança TLS/SSL padrão foi atualizado. See [Behavior changes](#behavior-changes) for release 20 R4 |
| libZip     | 19.5                   | 20                   | Utilizado pelos componentes zip class, 4D Write Pro, svg e serverNet                                                            |
| LZMA       | 5.4.1  | 20                   |                                                                                                                                 |
| Zlib       | 14.1.6 | 20                   |                                                                                                                                 |
| webKit     | WKWebView                              | 19                   |                                                                                                                                 |
| PHP        | 8.2.4  | 20                   |                                                                                                                                 |
| libldap    | 2.6.4  | 20 R3                |                                                                                                                                 |
| libsasl    | 2.1.28 | 20                   |                                                                                                                                 |
