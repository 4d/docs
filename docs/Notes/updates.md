---
id: updates
title: Release Notes
---


## 4D 20 R8

Read [**What’s new in 4D 20 R8**](https://blog.4d.com/en-whats-new-in-4d-v20-R8/), the blog post that lists all new features and enhancements in 4D 20 R8.

#### Highlights

- Implement your own [**HTTP request handlers**](../WebServer/http-request-handler.md) using the new [`4D.IncomingMessage`](../API/IncomingMessageClass.md) class. 
- Expressions used in [form object properties](../FormObjects/properties_Reference.md) now benefit from syntax checking in the [Property list](../FormEditor/formEditor.md#property-list) and in the [Compiler](../Project/compiler.md#check-syntax).
- You can [associate a class to a form](../FormEditor/properties_FormProperties.md#form-class) to enable code type-ahead and automatic instantiation of form data when using the [`Form`](../commands/form.md) command.  
- Support of [standalone sessions](../API/SessionClass.md) to simplify local coding for client/server applications.
- [4D debugger](../Debugging/debugger.md): new design and auto-save, display mode features.
- [New built component architecture](../Desktop/building.md#build-component) for a better compliance with Apple notarization guidelines. 
- Dependencies: Use the Dependency manager to [check for new versions](../Project/components.md#checking-for-new-versions) and [update](../Project/components.md#updating-dependencies) GitHub components.
- 4D Language:
	- Modified commands: [`FORM EDIT`](../commands/form-edit.md)
	- [`.sign()`](../API/CryptoKeyClass.md#sign) and [`.verify()`](../API/CryptoKeyClass.md#verify) functions of the [4D.CryptoKey class](../API/CryptoKeyClass.md) support Blob in the *message* parameter. 
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R8): list of all bugs that have been fixed in 4D 20 R8.

#### Behavior changes

- Because of their [new architecture](../Desktop/building.md#build-component), components built with 4D 20 R8 and higher cannot be installed in previous 4D releases.

## 4D 20 R7

Read [**What’s new in 4D 20 R7**](https://blog.4d.com/en-whats-new-in-4d-v20-R7/), the blog post that lists all new features and enhancements in 4D 20 R7.

#### Highlights

- List box columns and headers of type time now support the ["blankIfNull" option](../FormObjects/properties_Display.md#time-format).
- New properties in [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) and [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist).
- You can now [add and remove components using the Component manager interface](../Project/components.md#adding-and-removing-dependencies).
- New [**direct typing mode**](../Project/compiler.md#enabling-direct-typing) in which you declare all variables and parameters in your code using `var` and `#DECLARE`/`Function` keywords (only mode supported in new projects). [Syntax checking feature](../Project/compiler.md#check-syntax) has been enhanced accordingly. 
- Support of [Session singletons](../Concepts/classes.md#singleton-classes) and new [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton) Class property. 
- New [`onHttpGet` function keyword](../ORDA/ordaClasses.md#onhttpget-keyword) to define singleton or ORDA functions that can be called through [HTTP REST GET requests](../REST/ClassFunctions.md#function-calls). 
- New [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) class for the REST server to return any web contents.
- Qodly Studio: You can now [attach the Qodly debugger to 4D Server](../WebServer/qodly-studio.md#using-qodly-debugger-on-4d-server).
- New Build Application keys for remote 4D applications to validate the server certificate authority [signatures](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateAuthoritiesCertificates.300-7425900.en.html) and/or [domain](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.en.html).
- 4D Language:
	- New commands: [Process info](../commands/process-info.md), [Session info](../commands/session-info.md), [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
	- Modified commands: [Process activity](../commands/process-activity.md), [Process number](../commands/process-number.md)
- 4D Write Pro: 
	- New command: [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
	- Modified commands: [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md) and [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
	- [What's new page](https://doc.4d.com/4Dv20R7/4D/20-R7/What-s-new.901-7239607.en.html) in 4D Write Pro Reference.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R7): list of all bugs that have been fixed in 4D 20 R7.



#### Behavior changes

- Documentations for [4D Language](../commands/command-index.md) and [4D Write Pro Language](../WritePro/commands/command-index.md) are now fully available on developer.4d.com. Find out about all the new features and changes concerning these documentations in this release note. 
- The [`File`](../commands/file.md) command (as well as [`4D.File.new()`](../API/FileClass.md#4dfilenew)) is stricter when it comes to checking the syntax of the *path* supplied as a parameter. 
- The **describe** action [permission](../ORDA/privileges.md#permission-actions) has been removed from available actions. Access to [`/rest/$catalog`](../REST/$catalog.md) urls is no longer controlled. Session *describe* privileges are now ignored. 


## 4D 20 R6

Read [**What’s new in 4D 20 R6**](https://blog.4d.com/en-whats-new-in-4d-20-R6/), the blog post that lists all new features and enhancements in 4D 20 R6.

#### Highlights

- Support of comparison operators on [object references](../Concepts/dt_object.md#object-operators) and [collection references](../Concepts/dt_collection.md#collection-operators). [`collection.query()`](../API/CollectionClass.md#query) now supports [object and collection references as query values](../API/CollectionClass.md#object-or-collection-reference-as-value).
- When a component has a [declared namespace](../Extensions/develop-components.md#declaring-the-component-namespace), its classes are now automatically shared between all loaded components in the host project via [`cs.<namespace>`](../Concepts/classes.md#cs).
- Component manager: Support of [components stored on GitHub](../Project/components.md#declaring-components-stored-on-github).
- New [`entitySelection.clean()`](../API/EntitySelectionClass.md#clean) function and [`$clean`](../REST/$clean.md) REST API to get a new entity selection based upon the original entity selection but without its deleted entities.
- New [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) function and [`$info/privileges`](../REST/$info.md) REST API to inspect session privileges for an easier debugging.
- New [4DCEFParameters.json file](../FormObjects/webArea_overview.md#4dcefparametersjson) to customize 4D embedded web areas.
- New [HTTPAgent](../API/HTTPAgentClass.md) class and new [`agent`](../API/HTTPRequestClass.md#options-parameter) property for HTTPRequest class.
- New [`enableState()`](../API/WebFormClass.md) and [`disableState()`](../API/WebFormClass.md) functions to monitor Qodly page states from the server.
- New [`$singleton` API](../REST/$singleton.md) to call exposed singleton functions from REST and new [associated privileges](../ORDA/privileges.md).
- A [new settings button](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) helps you upgrade your project to use "force login" REST mode (the `On REST Authentication` database method is now deprecated).
- A [new settings tab](../Project/compiler.md#warnings) helps you define warnings generation globally.
- Several commands, mainly from the "4D Environment" theme, are now thread-safe ([see the full list](https://doc.4d.com/4Dv20R6/4D/Preemptive_6957385.999-2878208.en.html)), as well as some selectors of the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20R/help/command/en/page642.html)/[`Get database parameter`](https://doc.4d.com/4dv20R/help/command/en/page643.html) commands.   
- New [4D-QPDF component](https://github.com/4d/4D-QPDF) that provides the `PDF Get attachments` command to extract attachments from a PDF/A3 document.
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6957482.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6993921.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R6): list of all bugs that have been fixed in 4D 20 R6.


#### Behavior changes

- Support of scroll chaining in forms: parent subforms now scroll automatically when embedded scrollable objects ([vertically](../FormObjects/properties_Appearance.md#vertical-scroll-bar) or [horizontally](../FormObjects/properties_Appearance.md#horizontal-scroll-bar)) have reached their boundaries and the user keeps scrolling using the mouse or trackpad (overscrolling).
- The [`$catalog` REST API](../REST/$catalog.md) now returns singletons (if any).


## 4D 20 R5

Read [**What’s new in 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-20-R5/), the blog post that lists all new features and enhancements in 4D 20 R5.


#### Highlights

- New [Component manager](../Project/components.md) to handle components through a `dependencies.json` file.
- Support of [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try) error handling structures.
- QUIC network layer now supports [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), and [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
- Support of [restricted entity selections](../ORDA/entities.md#restricting-entity-selections).
- Support of [shared classes](../Concepts/classes.md#shared-classes) and [singleton classes](../Concepts/classes.md#singleton-classes). New Class properties: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#isingleton), [`me`](../API/ClassClass.md#me).
- Support for [initializing a class property in its declaration line](../Concepts/classes.md/#initializing-the-property-in-the-declaration-line).
- New [force login mode for REST requests](../REST/authUsers.md#force-login-mode) with a [specific support in Qodly Studio for 4D](../WebServer/qodly-studio.md#force-login).
- New [$format](../REST/$format.md) REST parameter.
- [`Session`](../commands/session.md) object is now available in remote user sessions and stored procedures session.
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R5): list of all bugs that have been fixed in 4D 20 R5.



#### Behavior changes

- The plug-ins *4D Internet Commands* and *4D for OCI* are no longer included in 4D installers. To get these plug-ins, you need to connect to the [**4D Product Download portal**](https://product-download.4d.com/).
- Changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are now saved in a separate file named `catalog_editor.json` stored in the project's [`Sources`](../Project/architecture.md#sources) folder.


## 4D 20 R4

Read [**What’s new in 4D 20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), the blog post that lists all new features and enhancements in 4D 20 R4.



#### Highlights

- Support of [`ECDSA` encryption format](../Admin/tls.md#encryption) for TLS certificates.
- Client/server and SQL server TLS connections are now [configured dynamically](../Admin/tls.md#enabling-tls-with-the-other-servers) (no certificate files are required).
- Direct HTML format for [structure definition exports](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- New [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) that enhances code control during code typing, syntax checking, and compilation steps to prevent execution errors.
- Method parameters declared in `#DECLARE` prototypes are [no longer necessary in "Compiler_" methods](../Concepts/parameters.md#compilation).
- Support of [custom date and time formats](../Project/date-time-formats.md)
- New [`Try(expression)` keyword](../Concepts/error-handling.md#tryexpression) to handle simple error cases.
- New [`HTTP Parse message`](../API/HTTPRequestClass.md#http-parse-message) command.
- New [Non-blocking printing](../settings/compatibility.md) compatibility option.
- New [editing mode](../Admin/dataExplorer.md#editing-data) in the Data Explorer.
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R4): list of all bugs that have been fixed in 4D 20 R4.



#### Behavior changes

- Using a legacy syntax for declaring parameters (e.g. `C_TEXT($1)` or `var $1 : Text`) is now deprecated and generates warnings at code typing, syntax checking, and compilation steps.
- Selections are now kept consistent after some records have been deleted and others records created (see [this blog post](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/).
- In the updated [OpenSSL library](#library-table), the default SSL/TLS security level has been changed from 1 to 2. RSA, DSA and DH keys of 1024 bits and above and less than 2048 bits as well as ECC keys of 160 bits and above and less than 224 bits are now no longer allowed. By default, TLS compression was already disabled in previous OpenSSL versions. At security level 2 it cannot be enabled.
- In order to allow password verification when the [4D user directory uses the bcrypt algorithm](https://blog.4d.com/bcrypt-support-for-passwords/), the "password" value in the *connectionInfo* parameter of the [`Open datastore`](../commands/open-datastore.md) command is now sent in clear form by default. Make sure your "On REST authentication" database method can handle passwords in clear form (third parameter is then **False**) and that `Open datastore` encrypts your connection by passing the "tls" option to **True** in *connectionInfo*. In specific cases, a new "passwordAlgorithm" option can also be used for compatibility (see [`Open datastore`](../commands/open-datastore.md) command).



## 4D 20 R3

Read [**What’s new in 4D 20 R3**](https://blog.4d.com/en-whats-new-in-4d-20-vR3/), the blog post that lists all new features and enhancements in 4D 20 R3.


#### Highlights

- New [`collection.multiSort`](../API/CollectionClass.md#multisort) function.
- Support of *context* parameter in [`Formula from string`](../commands/formula-from-string.md).
- Support of `headers` property in *connectionHandler* parameter of [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Global modification stamp](../ORDA/global-stamp.md) to help implementing data synchronization modules. New functions: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) and [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- Assigning file references to picture/blob attributes is [supported in ORDA](../ORDA/entities.md#d#assigning-files-to-picture-or-blob-attributes).
- Support for [initializing the variable's value and data type in the declaration line](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Log file settings are now [saved with the current data file](../Backup/settings.md#log-file-management)
- New syntax for [declaring variadic parameters](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: Support for the [import](../ViewPro/commands/vp-import-from-blob) and [export](../ViewPro/commands/vp-export-to-blob) of 4D View Pro documents in Blob format.
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R3): list of all bugs that have been fixed in 4D 20 R3.



#### Behavior changes

- Some errors were catchable by your [error handling method](../Concepts/error-handling.md) in interpreted mode only. A fix has been done, so that the following errors will now be caught also in compiled mode: *Indice out of range*, *Type incompatible*, and *Dereferencing a Null pointer*. However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the [`ABORT`](https://doc.4d.com/4dv20/help/command/en/page156.html) command.
- 4D no longer includes an internal PHP interpreter. You need to [set up and run your own PHP interpreter](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) to use PHP commands.


## 4D 20 R2

Read [**What’s new in 4D 20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), the blog post that lists all new features and enhancements in 4D 20 R2.



:::warning Security Note

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 20 R2 HF1 build 100440 or higher. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::


#### Highlights

- New [WebSocket class](../API/WebSocketClass.md) to create and manage client WebSocket connections from 4D.
- New QUIC network layer [interface setting](../settings/client-server.md#network-layer).
- 4D View Pro: Support of the **.sjs** file format for the [import](../ViewPro/commands/vp-import-document) and [export](../ViewPro/commands/vp-export-document) of documents.
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html) on doc.4d.com.
- 4D Write Pro Interface: New [Table Wizard](../WritePro/writeprointerface.md).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=20_R2): list of all bugs that have been fixed in 4D 20 R2.


#### Behavior changes


- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.1 HF1** and **20 R2** and the value is now 0.


## 4D 20.x LTS


See [**Release Notes for 4D 20.x LTS**](../../versioned_docs/version-20/Notes/updates.md). 



## Library table



|Library|Current version|Updated in 4D|Comment|
|---|---|---|----|
|BoringSSL|0aa300b|20 R6|Used for QUIC|
|CEF|131|**20 R8**|Chromium 6778|
|Hunspell|1.7.2|20|Used for spell checking in 4D forms and 4D Write Pro|
|ICU|73.2|20|This major upgrade forces an automatic rebuild of alphanumeric, text and object indexes.|
|libldap|2.6.7|20 R6||
|libsasl|2.1.28|20||
|Libuv |1.48|20 R6|Used for QUIC|
|libZip|1.9.2|20|Used by zip class, 4D Write Pro, svg and serverNet components|
|LZMA|5.4.1|20||
|OpenSSL|3.3.2|20 R7|Default TLS/SSL security level has been upgraded. See [Behavior changes](#behavior-changes) for release 20 R4|
|PDFWriter|4.3|20|FreeType dependency in 12.2.1|
|PHP|8.2.4|20||
|SpreadJS|17.1.0|20 R7|See [this blog post](https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/) for an overview of the new features|
|webKit|WKWebView|19||
|Zlib|1.2.13|20||
