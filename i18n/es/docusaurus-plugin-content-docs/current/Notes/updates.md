---
id: updates
title: Notas del lanzamiento
---

## 4D 21

Lea [**Novedades en 4D 21**](https://blog.4d.com/en-whats-new-in-4d-21/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21.

#### Lo más destacado

- Support of  AI Vector Searches in the [`query()`](../API/DataClassClass.md#query-by-vector-similarity) function and in the [`$filter`](../REST/$filter.md#vector-similarity) REST API.
- Support of TLS encryption for the [4D.TCPConnection](../API/TCPConnectionClass.md#4dtcpconnectionnew) class.
- Servidor Web:
  - new [HTTP rules](../WebServer/http-rules.md) to customize HTTP response headers,
  - ability to set [HTTP request handlers](../WebServer/http-request-handler.md) using a `handlers` property in the *settings* parameter of the Web server [`start()`](../API/WebServerClass.md#start) function,
  - the Web server object contains new [`rules`](../API/WebServerClass.md#rules) and [`handlers`](../API/WebServerClass.md#handlers) properties.
- New [ORDA events on data](../ORDA/orda-events.md): validateSave, saving, afterSave, validateDrop, dropping, afterDrop.
- New option allowing to use certificates from Windows Certificate Store instead of a local certificates folder in [`HTTPRequest`](../API/HTTPRequestClass.md#4dhttprequestnew) and [`HTTPAgent`](../API/HTTPAgentClass.md#4dhttpagentnew) classes.
- Cliente/servidor:
  - You can display Qodly pages in Web areas and [share the remote client session](../Desktop/clientServer.md#sharing-the-session-with-qodly-pages-in-web-areas).
  - The [QUIC network layer](../settings/client-server.md#network-layer) has been enhanced to handle network interface changes transparently, for example when you travel with your laptop. See [this blog post](https://blog.4d.com/work-and-move-with-quic-and-network-switching).
- You can now [create components directly from the host project](../Extensions/develop-components.md#creating-components) and [edit their code from a dedicated tab](../Extensions/develop-components.md#editing-all-component-code) in the 4D Explorer without leaving or restarting the project.
- The 4D product activation step has been simplified and automated during [sign-in](../GettingStarted/Installation.md#sign-in).
- 4D AIKit component: new features to [invoke a specific tool automatically](../aikit/Classes/OpenAIChatHelper.md#registertool) and [specify a response format](../aikit/Classes/OpenAIChatCompletionsParameters.md#response-format).
- Lenguaje 4D:
  - New "trim" commands to remove leading and trailing spaces from a string: [`Trim`](../commands/trim.md), [`Trim start`](../commands/trim-start.md), and [`Trim end`](../commands/trim-end.md).
  - Los comandos [`Num`](../commands/num.md) y [`String`](../commands/string.md) han sido actualizados para soportar conversiones en diferentes bases (radix).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=21): list of all bugs that have been fixed in 4D 21.

#### Vista previa para desarrolladores

[**Fluent UI** rendering for 4D forms](../FormEditor/forms.md#fluent-ui-rendering-developer-preview) is proposed in Developer Preview during the beta test program.

#### Cambios de comportamiento

:::caution Index rebuild

4D 21 includes an ICU library update ([see below](#library-table)) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. Ya no se realiza ningún tratamiento específico en estas URL.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).
- The [`HIGHLIGHT TEXT`](../commands/highlight-text) command is now supported in the context of subforms.
- **Components no longer embedded**: starting with 4D 21, components developed by 4D (4D NetKit, 4D SVG..., see [this list](../Extensions/overview-old.md)) are no longer embedded in the 4D application. When upgrading a project to 4D 21 or higher, a dialog box is displayed:<br/>
  ![alt-text](../assets/en/getStart/convert.png)<br/>
  \- **Import**: import automatically 4D components as dependencies to the project<br/>
  \- **Ignore**: do not import components and let you [manage components manually](../Project/components.md)<br/>
  \- **Ask later**: do not import components and display the dialog at the next project opening.

:::note

In binary databases, you need to select the required components in the 4D installer or download them from the [4D Product Download portal](https://product-download.4d.com/?type=components).

:::


#### Cambios de comportamiento

:::caution Index rebuild

4D 21 includes an ICU library update ([see below](#library-table)) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).
- The [`HIGHLIGHT TEXT`](../commands/highlight-text) command is now supported in the context of subforms.

#### Cambios de comportamiento

:::caution Index rebuild

4D 21 includes an ICU library update ([see below](#library-table)) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).
- The [`HIGHLIGHT TEXT`](../commands/highlight-text) command is now supported in the context of subforms.

#### Cambios de comportamiento

 - Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
 - Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
 - Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).

#### Cambios de comportamiento

:::caution Index rebuild

4D 21 includes an ICU library update ([see below](#library-table)) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. No specific processing is done on these URLs anymore.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).
- The [`HIGHLIGHT TEXT`](../commands/highlight-text) command is now supported in the context of subforms.
- **Components no longer embedded**: starting with 4D 21, components developed by 4D (4D NetKit, 4D SVG..., see [this list](../Extensions/overview-old.md)) are no longer embedded in the 4D application. When upgrading a project to 4D 21 or higher, a dialog box is displayed:<br/>
  ![alt-text](../assets/en/getStart/convert.png)<br/>
  \- **Import**: import automatically 4D components as dependencies to the project<br/>
  \- **Ignore**: do not import components and let you [manage components manually](../Project/components.md)<br/>
  \- **Ask later**: do not import components and display the dialog at the next project opening.

:::note

In binary databases, you need to select the required components in the 4D installer or download them from the [4D Product Download portal](https://product-download.4d.com/?type=components).

:::

#### Vista previa para desarrolladores

[**Fluent UI** rendering for 4D forms](../FormEditor/forms.md#fluent-ui-rendering-developer-preview) is proposed in Developer Preview during the beta test program.

#### Cambios de comportamiento

:::caution Index rebuild

4D 21 includes an ICU library update ([see below](#library-table)) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. Ya no se realiza ningún tratamiento específico en estas URL.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).
- The [`HIGHLIGHT TEXT`](../commands/highlight-text) command is now supported in the context of subforms.
- **Components no longer embedded**: starting with 4D 21, components developed by 4D (4D NetKit, 4D SVG..., see [this list](../Extensions/overview-old.md)) are no longer embedded in the 4D application. When upgrading a project to 4D 21 or higher, a dialog box is displayed:<br/>
  ![alt-text](../assets/en/getStart/convert.png)<br/>
  \- **Import**: import automatically 4D components as dependencies to the project<br/>
  \- **Ignore**: do not import components and let you [manage components manually](../Project/components.md)<br/>
  \- **Ask later**: do not import components and display the dialog at the next project opening.

:::note

In binary databases, you need to select the required components in the 4D installer or download them from the [4D Product Download portal](https://product-download.4d.com/?type=components).

:::

#### Vista previa para desarrolladores

[**Fluent UI** rendering for 4D forms](../FormEditor/forms.md#fluent-ui-rendering-developer-preview) is proposed in Developer Preview during the beta test program.

#### Cambios de comportamiento

:::caution Index rebuild

4D 21 includes an ICU library update ([see below](#library-table)) which will force an automatic rebuild of indexes of type alpha, text, and object. Dependiendo del tamaño del archivo de datos, esta operación puede llevar un tiempo y puede ser necesario planificarla.

:::

- Web services (SOAP): when [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled, web services now run in [**preemptive processes**](../Develop/preemptive.md) in compiled mode. Make sure your SOAP code is thread-safe.
- Web server: the support of deprecated `4DSYNC/` and `4DCGI/` URLs is removed. Ya no se realiza ningún tratamiento específico en estas URL.
- Web user sessions are now returned by [`Process activity`](../commands/process-activity.md).
- The [`HIGHLIGHT TEXT`](../commands/highlight-text) command is now supported in the context of subforms.
- **Components no longer embedded**: starting with 4D 21, components developed by 4D (4D NetKit, 4D SVG..., see [this list](../Extensions/overview-old.md)) are no longer embedded in the 4D application. When upgrading a project to 4D 21 or higher, a dialog box is displayed:<br/>
  ![alt-text](../assets/en/getStart/convert.png)<br/>
  \- **Import**: import automatically 4D components as dependencies to the project<br/>
  \- **Ignore**: do not import components and let you [manage components manually](../Project/components.md)<br/>
  \- **Ask later**: do not import components and display the dialog at the next project opening.

:::note

In binary databases, you need to select the required components in the 4D installer or download them from the [4D Product Download portal](https://product-download.4d.com/?type=components).

:::

## 4D 20 R10

Lea las [**Novedades en 4D 20 R10**](https://blog.4d.com/en-whats-new-in-4d-20-R10/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R10.

#### Lo más destacado

- Gestión de [eventos ORDA en datos](../ORDA/orda-events.md).
- Nueva opción `connectionTimeout` en el parámetro [`options`](../API/TCPConnectionClass.md#options-parameter) de la función [`4D.TCPConnection.new()`](../API/TCPConnectionClass.md#4dtcpconnectionnew).
- Nueva clase [`4D.Vector`](../API/VectorClass.md) para procesar y comparar vectores, normalmente calculados por IAs.
- Nuevas opciones para generar UUIDs en **versión 7** para el comando [4D automatic fields](../settings/database.md#auto-uuid-version) y [`Generate UUID`](../commands/generate-uuid).
- Nuevas clases [`UDPSocket`](../API/UDPSocketClass.md) y [`UDPEvent`](../API/UDPEventClass.md) para enviar datos utilizando sockets UDP. Soporte de registro detallado para eventos UDP en el archivo de registro [`4DTCPUDPLog.txt`](../Debugging/debugLogFiles.md#4dtcpudplogtxt) (renombrado de `4DTCPLog.txt`).
- New [`.promote()`](../API/SessionClass.md#promote) and [`.demote()`](../API/SessionClass.md#demote) functions in the [Session class](../API/SessionClass.md) to dynamically add/remove privileges in a web process.
- [Automatic selection of licenses to embed](../Desktop/building.md#application-automatically-embedding-available-licenses) in the Build application dialog box, modified [`Create deployment license`](../commands/create-deployment-license.md) command, new [`AutomaticLicenseIntegration`](https://doc.4d.com/4Dv20R10/4D/20-R10/AutomaticLicenseIntegration.300-7611090.en.html) BuildApplication xml key.
- Seguridad mejorada para copiar/pegar fórmulas en [4D Write Pro](../WritePro/managing-formulas.md) y [áreas de texto con estilo](../FormObjects/input_overview.md): las fórmulas copiadas desde fuera de la aplicación 4D actual se pegan ahora siempre sólo como valores.
- 4D AIKit component: new [OpenAIEmbeddingsAPI class](../aikit/Classes/OpenAIEmbeddingsAPI.md) to create embeddings using OpenAI's API.
- You can now [associate a class](../Develop/field-properties.md) to an object field in the structure editor.
- Automatic handling of [recursive dependencies](../Project/components.md#automatic-dependency-resolution).
- Lenguaje 4D:
  - Por coherencia, los comandos [`Create entity selection`](../commands/create-entity-selection.md) y [`USE ENTITY SELECTION`](../commands/use-entity-selection.md) han sido movidos del tema ["4D Environment"](../commands/theme/4D_Environment.md) al ["Selection"](../commands/theme/Selection.md).
  - Nuevos comandos [`OBJECT SET DATA SOURCE FORMULA`](../commands/object-set-data-source-formula.md) y [`OBJECT Get data source formula`](../commands/object-get-data-source-formula.md) para asignar y leer los objetos `Formula` como fuentes de datos para los objetos de formulario.
  - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property.md) y [`LISTBOX Get property`](../commands/listbox-get-property.md) soportan tres nuevas constantes: `lk current item`, `lk current item position` y `lk selected items expression`.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R10): lista de todos los bugs que se han corregido en 4D 20 R10.

#### Cambios de comportamiento

- En Windows, las fuentes de impresora actuales destinadas únicamente a la impresión (es decir, no se pueden utilizar en pantalla) ya no son cargadas al inicio por 4D.
- Se ha eliminado la biblioteca *MeCab*. Este cambio sólo afecta al tratamiento del texto en japonés.
- Cuando una variable o parámetro objeto se declara con un tipo ["cs" class](../Concepts/classes.md#cs), asignarlo con una instancia de objeto de una clase diferente genera ahora un error de sintaxis.
- [`.hasPrivilege()`](../API/SessionClass.md#hasprivilege) devuelve True para privilegios promovidos en el proceso web.
- The [`Time`](../commands/time) command now returns a negative time expression when the *timeValue* parameter is negative. Por ejemplo, `Time("-01:02:03")` devolverá **-01:02:03**. In previous releases, the negative sign was ignored.

## 4D 20 R9

Lea [**Novedades en 4D 20 R9**](https://blog.4d.com/en-whats-new-in-4d-20-R9/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R9.

#### Lo más destacado

- La biblioteca [*MeCab*](../settings/database.md#support-of-mecab-japanese-version) está obsoleta y se eliminará en la próxima versión.
- Soporte de [token de sesión](../WebServer/sessions.md#session-token-otp) manejado con las nuevas funciones [`Session.createOTP()`](../API/SessionClass.md#createotp) y [`Session.restore()`](../API/SessionClass.md#restore).
- El asistente de etiqueta ahora utiliza el editor de Fórmula para añadir o editar fórmulas en el [área de diseño de etiquetas](../Desktop/labels.md#label-preview).
- New [`TCPListener`](../API/TCPListenerClass.md) class to create TCP server connections; new properties in related classes: `address`, `listener` and `port` in [`TCPConnection`](../API/TCPConnectionClass.md) class, `address` and `port` in [`TCPEvent`](../API/TCPEventClass.md) class.
- Comandos y constantes obsoletos ahora generan advertencias específicas en el [Live checker y el compilador](../code-editor/write-class-method.md#warnings-and-errors). Puede saber si un comando está obsoleto utilizando el comando [`Command name`](../commands/command-name.md).
- Nuevos comandos [WA SET CONTEXT](../commands/wa-set-context.md) y [WA Get context](../commands/wa-get-context.md) para controlar los contenidos [$4d](../FormObjects/webArea_overview.md#4d-object) en áreas web.
- Nuevo [parámetro de base de datos `RDP optimization`](../commands-legacy/set-database-parameter.md#rdp-optimization-133) para optimizar por ejemplo el portapapeles compartidos cuando se usa el protocolo de escritorio remoto con 4D.
- Los componentes interpretados pueden ahora [editarse desde el proyecto local](../Extensions/develop-components.md#editing-components-from-the-host).
- [Licencias](../Admin/licenses.md) ahora se actualizan automáticamente al iniciar.
- Nuevo [componente AIKit 4D](../aikit/overview.md) que permite la interacción con las API IA de terceros.
- Los siguientes retrollamadas del comando VP ahora esperan que todas las funciones personalizadas de 4D completen sus cálculos: [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md), [VP IMPORT FORM BLOB](../ViewPro/commands/vp-import-from-blob.md), [VP IMPORT FROM OBJECT](../ViewPro/commands/vp-import-from-object.md), y [VP FLUSH COMMANDS](../ViewPro/commands/vp-flush-commands.md).
- Nuevas funcionalidades [4D Netkit](https://developer.4d.com/4D-NetKit/) para administrar los calendarios Google y Microsoft 365; capacidad para usar el servidor web local para autenticación OAuth 2.0.
- Interfaz 4D Write Pro: Nueva [IA integrada](../WritePro/writeprointerface.md#integrated-ai) para interactuar con **chatGTP** desde sus documentos 4D Write Pro.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R9): lista de todos los bugs que se han corregido en 4D 20 R9.

## 4D 20 R8

Lea [**Novedades en 4D 20 R8**](https://blog.4d.com/en-whats-new-in-4d-20-R8/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R8.

#### Lo más destacado

- Implemente sus propios [**HTTP request handlers**](../WebServer/http-request-handler.md) utilizando la nueva clase [`4D.IncomingMessage`](../API/IncomingMessageClass.md).
- Las expresiones utilizadas en [propiedades de objetos de formulario](../FormObjects/properties_Reference.md) ahora se benefician de la comprobación de sintaxis en la [Lista de propiedades](../FormEditor/formEditor.md#property-list) y en el [Compilador](../Project/compiler.md#check-syntax).
- Puede [asociar una clase a un formulario](../FormEditor/properties_FormProperties.md#form-class) para habilitar la anticipación del tipo de código y la instanciación automática de los datos del formulario cuando utilice el comando [`Form`](../commands/form.md).
- Soporte de [sesiones autónomas](../API/SessionClass.md) para simplificar la codificación local de aplicaciones cliente/servidor.
- [Depurador 4D](../Debugging/debugger.md): nuevo diseño y autoguardado, funciones de modo de visualización.
- [Nueva arquitectura de componentes construidos](../Desktop/building.md#build-component) para un mejor cumplimiento de las pautas de notarización de Apple.
- Ahora puede [crear fácilmente aplicaciones de evaluación](../Desktop/building.md#evaluation-application) en el cuadro de diálogo de Build App.
- Dependencias: use el administrador de Dependencias para [buscar nuevas versiones](../Project/components.md#checking-for-new-versions) y [actualizar](../Project/components.md#updating-dependencies) componentes GitHub.
- Nuevas clases [`TCPConnection`](../API/TCPConnectionClass.md) y [`TCPEvent`](../API/TCPEventClass.md) para gestionar conexiones cliente TCP, manejar eventos y mejorar el control sobre la transmisión de datos. Añadido [`4DTCPLog.txt`](../Debugging/debugLogFiles.md#4dtcpudplogtxt) para un registro detallado de eventos TCP.
- Nuevas opciones en [VP EXPORT DOCUMENT](../ViewPro/commands/vp-export-document.md) y [VP IMPORT DOCUMENT](../ViewPro/commands/vp-import-document.md) para controlar estilos, fórmulas, integridad de datos y protección por contraseña.
- 4D Write Pro:
  - Los siguientes comandos permiten ahora parámetros como objetos o colecciones: [WP SET ATTRIBUTES](../WritePro/commands/wp-set-attributes.md), [WP Get attributes](../WritePro/commands/wp-get-attributes.md), [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md), [WP Table append row](../WritePro/commands/wp-table-append-row.md), [WP Import document](../WritePro/commands/wp-import-document.md), [WP EXPORT DOCUMENT](../WritePro/commands/wp-export-document.md), [WP Add picture](../WritePro/commands/wp-add-picture.md), y [WP Insert picture](../WritePro/commands/wp-insert-picture.md).
  - [WP Insert formula](../WritePro/commands/wp-insert-formula.md), [WP Insert document body](../WritePro/commands/wp-insert-document-body.md), y [WP Insert break](../WritePro/commands/wp-insert-break.md), son ahora funciones que devuelven rangos.
  - New expressions related to document attributes: [This.sectionIndex](../WritePro/managing-formulas.md), [his.sectionName](../WritePro/managing-formulas.md) and [This.pageIndex](../WritePro/managing-formulas.md).
- Lenguaje 4D:
  - Comandos modificados: [`FORM EDIT`](../commands/form-edit.md)
  - Las funciones [`.sign()`](../API/CryptoKeyClass.md#sign) y [`.verify()`](../API/CryptoKeyClass.md#verify) de la clase [4D.CryptoKey](../API/CryptoKeyClass.md) soportan Blob en el parámetro *message*.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R8): lista de todos los bugs que se han corregido en 4D 20 R8.

#### Cambios de comportamiento

- Después de una modificación del archivo de registro usando [`SELECT LOG FILE`](../commands/select-log-file.md) o la [Configuración de copia de seguridad](../Backup/settings.md#log-management), el comando [`New log file`](../commands/new-log-file.md) ahora valida el cambio, sin esperar una copia de seguridad. Ya no se produce el error -4447 (copia de seguridad necesaria).
- Debido a su [nueva arquitectura](../Desktop/building.md#build-component), los componentes creados con 4D 20 R8 y superiores no pueden ser instalados en versiones anteriores 4D.

## 4D 20 R7

Lea [**Novedades en 4D 20 R7**](https://blog.4d.com/en-whats-new-in-4d-20-R7/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R7.

#### Lo más destacado

- Las columnas de los list box y de los encabezados de tipo hora ahora soportan la opción ["blankIfNull"](../FormObjects/properties_Display.md#time-format).
- Nuevas propiedades en [`.getBoxInfo()`](../API/IMAPTransporterClass.md#getboxinfo) y [`.getBoxList()`](../API/IMAPTransporterClass.md#getboxlist).
- Ahora puede [añadir y eliminar componentes utilizando la interfaz del gestor de componentes](../Project/components.md#monitoring-project-dependencies).
- Nuevo [**modo de tipado directo**](../Project/compiler.md#enabling-direct-typing) en el que declara todas las variables y parámetros en su código usando las palabras clave `var` y `#DECLARE`/`Function` (sólo modo soportado en nuevos proyectos). [La función de verificación de sintaxis](../Project/compiler.md#check-syntax) se ha mejorado en consecuencia.
- Soporte de [singletones de sesión](../Concepts/classes.md#singleton-classes) y nueva propiedad de clase [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton).
- Nueva [palabra clave función `onHttpGet`](../ORDA/ordaClasses.md#onhttpget-keyword) para definir funciones singleton u ORDA que pueden ser llamadas a través de [peticiones HTTP REST GET](../REST/ClassFunctions.md#function-calls).
- Nueva clase [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) para que el servidor REST devuelva cualquier contenido web.
- Qodly Studio: ahora puede [adjuntar el depurador Qodly a 4D Server](../WebServer/qodly-studio.md#using-qodly-debugger-on-4d-server).
- Nuevas llaves Build Application para que las aplicaciones 4D remotas validen las [signatures](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateAuthoritiesCertificates.300-7425900.en.html) y/o los [dominios](https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.en.html).
- Posibilidad de [crear aplicaciones autónomas sin licencias integradas](../Desktop/building.md#licenses).
- Lenguaje 4D:
  - Nuevos comandos: [Process info](../commands/process-info.md), [Session info](../commands/session-info.md), [SET WINDOW DOCUMENT ICON](../commands/set-window-document-icon.md)
  - Comandos modificados: [Process activity](../commands/process-activity.md), [Process number](../commands/process-number.md)
  - Deprecated commands (replacement): `GET LAST ERROR STACK` ([Last errors](../commands/last-errors.md)), `GET SERIAL INFORMATION` ([License info](../commands/license-info.md)), `PROCESS PROPERTIES` ([Process info](../commands/process-info.md)), `SET SCREEN DEPTH`, `C_XXX` commands ([var](../Concepts/variables.md#declaring-variables) and [#DECLARE/Function](../Concepts/parameters.md#declaring-parameters) declarations). Los comandos obsoletos llevan el prefijo "\*o\*".
- 4D Write Pro:
  - Nuevo comando: [WP DELETE SECTION](../WritePro/commands/wp-delete-section.md)
  - Comandos modificados: [WP DELETE SUBSECTION](../WritePro/commands/wp-delete-subsection.md) y [WP RESET ATTRIBUTES](../WritePro/commands/wp-reset-attributes.md)
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R7): lista de todos los bugs que se han corregido en 4D 20 R7.

#### Cambios de comportamiento

- La documentación del [Lenguaje 4D](../commands/command-index.md) y del [Lenguaje 4D Write Pro](../WritePro/commands/command-index.md) ya está disponible en developer.4d.com. Descubra todas las novedades y cambios relativos a estas documentaciones en esta nota de la versión.
- El comando [`File`](../commands/file.md) (así como [`4D.File.new()`](../API/FileClass.md#4dfilenew)) es más estricto a la hora de comprobar la sintaxis de *path* suministrada como parámetro.
- La acción de [permission](../ORDA/privileges.md#permission-actions) ha sido eliminada de las acciones disponibles. El acceso a las urls [`/rest/$catalog`](../REST/$catalog.md) ya no está controlado. Session *describe* privileges are now ignored.

## 4D 20 R6

Lea [**Novedades en 4D 20 R6**](https://blog.4d.com/en-whats-new-in-4d-20-R6/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R6.

#### Lo más destacado

- Soporte de operadores de comparación en las [referencias de objeto](../Concepts/dt_object.md#object-operators) y las [referencias de colección](../Concepts/dt_collection.md#collection-operators). [`collection.query()`](../API/CollectionClass.md#query) ahora soporta las [referencias de objeto y de colección como valores de consulta](../API/CollectionClass.md#object-or-collection-reference-as-value).
- Cuando un componente tiene un [espacio de nombres declarado](../Extensions/develop-components.md#declarar-el-espacio-de-nombres-del-componente), sus clases ahora se comparten automáticamente entre todos los componentes cargados en el proyecto del host por [`cs.<namespace>`](../Concepts/classes.md#cs).
- Gestión de componentes: soporte de [componentes almacenados en GitHub](../Project/components.md#components-stored-on-github).
- Nueva función [`entitySelection.clean()`](../API/EntitySelectionClass.md#clean) y API REST [`$clean`](../REST/$clean.md) para obtener una nueva entity selection basada en la entity selection original pero sin sus entidades eliminadas.
- Nueva función [`session.getPrivileges()`](../API/SessionClass.md#getprivileges) y API REST [`$info/privileges`](../REST/$info.md) para inspeccionar los privilegios de sesión más fácilmente durante la depuración.
- Nuevo archivo [4DCEFParameters.json](../FormObjects/webArea_overview.md#4dcefparametersjson) para personalizar las áreas web anidadas de 4D.
- Nueva clase [HTTPAgent](../API/HTTPAgentClass.md) y nueva propiedad [`agent`](../API/HTTPRequestClass.md#options-parameter) para la clase HTTPRequest.
- Nuevas funciones [`enableState()`](../API/WebFormClass.md) y [`disableState()`](../API/WebFormClass.md) para controlar los estados de las páginas Qodly desde el servidor.
- Nueva [\`API$singleton](../REST/$singleton.md) para llamar las funciones singleton expuestas desde REST y nuevos [privilegios asociados](../ORDA/privileges.md).
- Un [nuevo botón de parámetros](../settings/web.md#activate-rest-authentication-through-dsauthentify-function) le ayuda a actualizar su proyecto para utilizar el modo REST "conexión forzada" (el método base `On REST Authentication` es ahora obsoleto).
- Una [nueva pestaña de parámetros](../Project/compiler.md#warnings) permite definir la generación de advertencias de forma global.
- Varios comandos, principalmente del tema "entorno 4D", son ahora hilo seguro, así como algunos selectores de los comandos [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md)/[`Get database parameter`](../commands-legacy/get-database-parameter.md).
- Nuevo [componente 4D-QPDF](https://github.com/4d/4D-QPDF) que ofrece el comando `PDF Get attachments` para extraer los archivos adjuntos de un documento PDF/A3.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R6): lista de todos los bugs que se han corregido en 4D 20 R6.

#### Cambios de comportamiento

- Soporte de encadenamiento de desplazamiento en los formularios: los subformularios principales ahora se desplazan automáticamente cuando los objetos integrados deslizables ([verticalmente](../FormObjects/properties_Appearance.md#vertical-scroll-bar) u [horizontalmente](. /FormObjects/properties_Appearance.md#horizontal-scroll-bar)) han llegado a sus límites y el usuario sigue desplazándose utilizando el ratón o el trackpad (desplazamiento excesivo).
- La API REST [`$catalog`](../REST/$catalog.md) ahora devuelve singletons (si los hay).

## 4D 20 R5

Lea [**Novedades en 4D 20 R5**](https://blog.4d.com/en-whats-new-in-4d-20-R5/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R5.

#### Lo más destacado

- Nuevo [Gestor de componentes](../Project/components.md) para gestionar componentes a través de un archivo `dependencies.json`.
- Soporte de estructuras de gestión de errores [`Try...Catch...End try`](../Concepts/error-handling.md#trycatchend-try).
- La capa de red QUIC ahora soporta [broadcasting](../Desktop/clientServer.md#opening-a-remote-project), [SSO](https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html), e [IPv6](https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html).
- Soporte de [selecciones de entidades restringidas](../ORDA/entities.md#restricting-entity-selections).
- Soporte de [clases compartidas](../Concepts/classes.md#shared-classes) y de [clases singleton](../Concepts/classes.md#singleton-classes). Nuevas propiedades de clase: [`isShared`](../API/ClassClass.md#isshared), [`isSingleton`](../API/ClassClass.md#issingleton), [`me`](../API/ClassClass.md#me).
- Soporte para [inicializar una propiedad de clase en su línea de declaración](../Concepts/classes.md#initializing-the-property-in-the-declaration-line).
- Nuevo modo [forzar login para peticiones REST](../REST/authUsers.md#force-login-mode) con un [soporte específico en Qodly Studio for 4D](../WebServer/qodly-studio.md#force-login).
- Nuevo parámetro REST [$format](../REST/$format.md).
- El objeto [`Session`](../commands/session.md) está ahora disponible en sesiones de usuario remotas y en sesiones de procedimientos almacenados.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R5): lista de todos los bugs que se han corregido en 4D 20 R5.

#### Cambios de comportamiento

- Los plug-ins *4D Internet Commands* y *4D for OCI* ya no se incluyen en los instaladores de 4D. Para obtener estos plug-ins, necesita conectarse al [**portal de descarga de productos 4D**](https://product-download.4d.com/).
- Los cambios realizados en el editor de estructura en relación con el aspecto gráfico de las tablas y de los campos (color, posición, orden...) ahora se guardan en un archivo separado llamado `catalog_editor.json` almacenado en la carpeta [`Sources`](../Project/architecture.md#sources) del proyecto.

## 4D 20 R4

Lea [**Novedades en 4D 20 R4**](https://blog.4d.com/en-whats-new-in-4d-v20-R4/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R4.

#### Lo más destacado

- Soporte de [formato de cifrado ECDSA\`](../Admin/tls.md#encryption) para certificados TLS.
- Las conexiones TLS cliente/servidor y servidor SQL ahora se [configuran dinámicamente](../Admin/tls.md#enabling-tls-with-the-other-servers) (no se requieren archivos de certificado).
- Formato HTML directo para [exportaciones de definición de estructura](https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html).
- Nuevo [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) que mejora el control del código durante los pasos de declaración, comprobación de sintaxis y compilación para evitar errores de ejecución.
- Los parámetros de métodos declarados en prototipos `#DECLARE` [ya no son necesarios en métodos "Compiler_"](../Concepts/parameters.md).
- Soporte de [formatos personalizados de fecha y hora](../Project/date-time-formats.md)
- Nueva [palabra clave `Try(expression)`](../Concepts/error-handling.md#tryexpression) para tratar casos de error simples.
- Nuevo comando [`HTTP Parse message`](../commands/http-parse-message.md).
- Nueva opción de compatibilidad [Impresión no bloqueante](../settings/compatibility.md).
- Nuevo [modo de edición](../Admin/dataExplorer.md#editing-data) en el Explorador de datos.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R4): lista de todos los bugs que se han corregido en 4D 20 R4.

#### Cambios de comportamiento

- El uso de una sintaxis heredada para declarar parámetros (por ejemplo, `C_TEXT($1)` o `var $1 : Text`) es obsoleto y genera advertencias en los pasos de escritura de código, verificación de sintaxis y compilación.
- La coherencia de las selecciones ahora se mantiene después de que se hayan eliminado algunos registros y se hayan creado otros (ver [esta entrada de blog](https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/)).
- En la actualización de [la librería OpenSSL](#library-table), el nivel de seguridad SSL/TLS por defecto se ha cambiado de 1 a 2. Las llaves RSA, DSA y DH de 1024 bits o más y menos de 2048 bits, así como las llaves ECC de 160 bits o más y menos de 224 bits, ya no están permitidas. Por defecto, la compresión TLS ya estaba desactivada en versiones anteriores de OpenSSL. En el nivel de seguridad 2 no se puede activar.
- Asegúrese de que su método base "On REST authentication" puede manejar contraseñas en claro (el tercer parámetro es entonces **False**) y que `Open datastore` encripta su conexión pasando la opción "tls" a **True** en *connectionInfo*. Asegúrese de que su método base "On REST authentication" puede manejar contraseñas en claro (el tercer parámetro es entonces **False**) y que `Open datastore` encripta su conexión pasando la opción "tls" a **True** en *connectionInfo*. En casos concretos, también se puede utilizar una nueva opción "passwordAlgorithm" por compatibilidad (ver el comando [`Open datastore`](../commands/open-datastore.md)).

## 4D 20 R3

Lea [**Novedades en 4D 20 R3**](https://blog.4d.com/en-whats-new-in-4d-20-vR3/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R3.

#### Lo más destacado

- Nueva función [`collection.multiSort`](../API/CollectionClass.md#multisort).
- Soporte del parámetro *context* en [`Formula from string`](../commands/formula-from-string.md).
- Soporte de la propiedad `headers` en el parámetro *connectionHandler* de [4D.WebSocket.new](../API/WebSocketClass.md#4dwebsocketnew).
- [Sello de modificación global](../ORDA/global-stamp.md) para ayudar a implementar módulos de sincronización de datos. Nuevas funciones: [`ds.getGlobalStamp`](../API/DataStoreClass.md#getglobalstamp) y [`ds.setGlobalStamp`](../API/DataStoreClass.md#setglobalstamp).
- La asignación de referencias de archivo a atributos imagen/blob está [soportada en ORDA](../ORDA/entities.md#assigning-files-to-picture-or-blob-attributes).
- Soporte para [inicializar el valor de la variable y el tipo de datos en la línea de declaración](../Concepts/variables/#initializing-variables-in-the-declaration-line).
- Los parámetros del archivo de registro se guardan ahora [con el archivo de datos actual](../Backup/settings.md#log-management)
- Nueva sintaxis para [declarar parámetros variádicos](../Concepts/parameters.md#declaring-variadic-parameters)
- 4D View Pro: soporte de la [importación](../ViewPro/commands/vp-import-from-blob) y de la [exportación](../ViewPro/commands/vp-export-to-blob) de documentos 4D View Pro al formato Blob.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R3): lista de todos los bugs que se han corregido en 4D 20 R3.

#### Cambios de comportamiento

- Algunos errores eran detectables por su [método de gestión de errores](../Concepts/error-handling.md) solo en modo interpretado. Se ha realizado una corrección para que los siguientes errores se detecten también en modo compilado: *Indice fuera de rango*, *Tipo incompatible* y *Derreferenciación de un puntero Null*. Sin embargo, para tales errores en los procesadores Intel, el procedimiento se sigue interrumpiendo como antes, mientras que en los procesadores Apple Silicon el procedimiento solo se interrumpe si se llama al comando [`ABORT`](../commands-legacy/abort.md).
- 4D ya no incluye un intérprete PHP interno. Necesita [configurar y ejecutar su propio intérprete PHP](https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter) para utilizar comandos PHP.

## 4D 20 R2

Lea [**Novedades en 4D 20 R2**](https://blog.4d.com/en-whats-new-in-4d-v20-R2/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 20 R2.

:::warning Nota de seguridad

Si sus aplicaciones 4D utilizan conexiones TLS, se recomienda actualizar a 4D 20 R2 HF1 build 100440 o superior. Para más información, consulte este [Boletín de seguridad](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

#### Lo más destacado

- Nueva [clase WebSocket](../API/WebSocketClass.md) para crear y gestionar conexiones WebSocket cliente desde 4D.
- Nueva capa de red QUIC [configuración de interfaz](../settings/client-server.md#network-layer).
- 4D View Pro: soporte del formato de archivo **.sjs** para [la importación](../ViewPro/commands/vp-import-document) y la [exportación](../ViewPro/commands/vp-export-document) de documentos.
- Interfaz Write Pro 4D: nuevo [Asistente de tablas](../WritePro/writeprointerface.md).
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=20_R2): lista de todos los bugs que se han corregido en 4D 20 R2.

#### Cambios de comportamiento

- **Atención**: el valor inicial [`offset`](../API/FileHandleClass.md#offset) de los objetos [4D.FileHandle](../API/FileHandleClass.md) estaba incorrectamente definido en 1 en lugar de 0. Se ha hecho una corrección en 4D a partir de las versiones **20.1 HF1** y **20 R2** y el valor ahora es 0.

## 4D 20.x LTS

Ver [**Notas de lanzamiento para LTS 4D 20.x**](../../versioned_docs/version-20/Notes/updates.md).

## Tabla de la librería

| Librería  | Versión actual                         | Actualizado en 4D | Comentario                                                                                                                                         |
| --------- | -------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoringSSL | fa47b1d                                | **21**            | Utilizado para QUIC                                                                                                                                |
| CEF       | 7258                                   | **21**            | Chromium 139                                                                                                                                       |
| Hunspell  | 1.7.2  | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                                                          |
| ICU       | 77.1                   | **21**            | This upgrade forces an automatic rebuild of alphanumeric, text and object indexes.                                                 |
| libldap   | 2.6.10 | **21**            |                                                                                                                                                    |
| libsasl   | 2.1.28 | 20                |                                                                                                                                                    |
| Liblsquic | 4.2.0  | 20 R10            | Utilizado para QUIC                                                                                                                                |
| Libuv     | 1.51.0 | **21**            | Utilizado para QUIC                                                                                                                                |
| libZip    | 1.11.4 | **21**            | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                                             |
| LZMA      | 5.8.1  | **21**            |                                                                                                                                                    |
| ngtcp2    | 1.16.0 | **21**            | Utilizado para QUIC                                                                                                                                |
| OpenSSL   | 3.5.2  | **21**            |                                                                                                                                                    |
| PDFWriter | 4.7.0  | **21**            | Used for [`WP Export document`](../WritePro/commands/wp-export-document.md) and [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| PHP       | 8.2.4  | 20                |                                                                                                                                                    |
| SpreadJS  | 17.1.0 | 20 R7             | Consulte [esta entrada de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/) para obtener una visión general de las nuevas funciones    |
| webKit    | WKWebView                              | 19                |                                                                                                                                                    |
| Xerces    | 3.3.0  | **21**            | Utilizado para comandos XML                                                                                                                        |
| Zlib      | 1.3.1  | **21**            |                                                                                                                                                    |
